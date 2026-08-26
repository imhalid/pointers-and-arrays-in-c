<script>
  import { Marked } from 'marked';
  import Prism from 'prismjs';
  import 'prismjs/components/prism-c';
  import { gsap } from 'gsap';
  import { tick } from 'svelte';
  import { chapters } from './content.js';

  // UI Localized Strings
  const uiStrings = {
    tr: {
      title: "C Kılavuzu",
      subtitle: "Pointer ve Array Rehberi",
      toc: "İÇİNDEKİLER",
      prev: "Önceki Bölüm",
      next: "Sonraki Bölüm",
      theme: "Tema Seçimi",
      font: "Yazı Karakteri",
      fontSize: "Yazı Boyutu",
      focusMode: "Odak Modu",
      focusModeDesc: "Sadece aktif paragrafa odaklanın",
      light: "Açık",
      dark: "Koyu",
      sepia: "Sepya",
      forest: "Orman",
      nord: "Kuzey",
      solarized: "Solarize",
      sans: "Geist Sans",
      serif: "Serif (Kitap)",
      mono: "Geist Mono",
      wordCount: "kelime",
      readTime: "dk okuma",
      close: "Kapat",
      settings: "Görünüm Ayarları",
      chapterInfo: "Bölüm",
      keyboardNav: "Klavye Navigasyonu",
      keyboardNavDesc: "Bölümler arası geçiş için Sol ve Sağ yön tuşlarını kullanabilirsiniz."
    },
    en: {
      title: "C Tutorial",
      subtitle: "Pointers & Arrays",
      toc: "TABLE OF CONTENTS",
      prev: "Previous Chapter",
      next: "Next Chapter",
      theme: "Theme Selection",
      font: "Typography",
      fontSize: "Font Size",
      focusMode: "Focus Mode",
      focusModeDesc: "Focus on the hovered paragraph",
      light: "Light",
      dark: "Dark",
      sepia: "Sepia",
      forest: "Forest",
      nord: "Nord",
      solarized: "Solarized",
      sans: "Geist Sans",
      serif: "Serif (Book)",
      mono: "Geist Mono",
      wordCount: "words",
      readTime: "min read",
      close: "Close",
      settings: "Appearance Settings",
      chapterInfo: "Chapter",
      keyboardNav: "Keyboard Navigation",
      keyboardNavDesc: "You can use Left and Right arrow keys to switch chapters."
    }
  };

  // State Management (Svelte 5 Runes)
  let currentLang = $state(localStorage.getItem('reader-lang') || 'tr');
  let currentChapterId = $state(localStorage.getItem('reader-chapter') || 'welcome');
  let theme = $state(localStorage.getItem('reader-theme') || 'light');
  let fontStyle = $state(localStorage.getItem('reader-font') || 'sans');
  let fontSize = $state(Number(localStorage.getItem('reader-fontsize')) || 18);
  let isSidebarOpen = $state(false);
  $effect(() => {
    const saved = localStorage.getItem('reader-sidebar');
    if (saved !== null) {
      isSidebarOpen = saved === 'true';
    } else {
      isSidebarOpen = window.innerWidth > 1024;
    }
  });
  let isFocusMode = $state(localStorage.getItem('reader-focus') === 'true');
  let isSettingsOpen = $state(false);
  let scrollProgress = $state(0);
  let isAtTop = $state(true);
  let isAtBottom = $state(false);
  let isScrollTopVisible = $state(false);
  let articleRef = $state(null);

  // Sync to LocalStorage
  $effect(() => {
    localStorage.setItem('reader-lang', currentLang);
  });
  $effect(() => {
    localStorage.setItem('reader-chapter', currentChapterId);
  });
  $effect(() => {
    localStorage.setItem('reader-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  });
  $effect(() => {
    localStorage.setItem('reader-font', fontStyle);
  });
  $effect(() => {
    localStorage.setItem('reader-fontsize', fontSize.toString());
  });
  $effect(() => {
    localStorage.setItem('reader-focus', isFocusMode.toString());
  });
  $effect(() => {
    localStorage.setItem('reader-sidebar', isSidebarOpen.toString());
  });

  $effect(() => {
    if (isSidebarOpen) {
      setTimeout(() => {
        gsap.fromTo(".toc-item", 
          { opacity: 0, x: -10, transition: "none" },
          { 
            opacity: (index, target) => target.classList.contains('active') ? 1 : 0.6,
            x: 0,
            stagger: 0.025,
            duration: 0.4,
            ease: "power2.out",
            clearProps: "opacity,transform,transition",
            overwrite: "auto"
          }
        );
      }, 50);
    } else {
      gsap.killTweensOf(".toc-item");
      setTimeout(() => {
        if (!isSidebarOpen) {
          gsap.set(".toc-item", { opacity: 0, x: -10 });
        }
      }, 300);
    }
  });

  // Derived state
  let currentChapter = $derived(
    chapters.find(c => c.id === currentChapterId) || chapters[0]
  );

  let currentChapterIndex = $derived(
    chapters.findIndex(c => c.id === currentChapterId)
  );

  let markdownContent = $derived(
    currentChapter.content[currentLang] || currentChapter.content['en'] || ''
  );

  // Create a custom Marked instance to force all code blocks to be styled as C code
  // unless a different language is specified (especially for tab-indented blocks)
  const customMarked = new Marked({
    renderer: {
      code(code, infostring) {
        const lang = (infostring || 'c').trim().split(/\s+/)[0];
        return `<pre class="language-${lang}"><code class="language-${lang}">${code}</code></pre>`;
      }
    }
  });

  let renderedHtml = $derived.by(() => {
    if (!markdownContent) return '';
    return customMarked.parse(markdownContent);
  });

  let wordCount = $derived.by(() => {
    if (!markdownContent) return 0;
    const cleanText = markdownContent.replace(/[#*`_\[\]()\-]/g, '');
    const words = cleanText.trim().split(/\s+/).filter(w => w.length > 0);
    return words.length;
  });

  let readingTime = $derived(Math.ceil(wordCount / 200) || 1);

  let isRestoringScroll = false;

  // Trigger PrismJS syntax highlighting on HTML change
  $effect(() => {
    if (renderedHtml && articleRef) {
      isRestoringScroll = true;
      setTimeout(() => {
        Prism.highlightAllUnder(articleRef);
        
        // Restore scroll position
        const savedScroll = Number(localStorage.getItem('reader-scroll-pos')) || 0;
        const readerEl = document.getElementById('reader-area');
        if (readerEl) {
          readerEl.scrollTop = savedScroll;
        }

        setTimeout(() => {
          isRestoringScroll = false;
        }, 100);
      }, 50);
    }
  });

  // Navigation handlers
  async function changeChapter(id) {
    isRestoringScroll = true;
    
    if (document.startViewTransition) {
      document.startViewTransition(async () => {
        currentChapterId = id;
        await tick();
      });
    } else {
      currentChapterId = id;
    }
    
    localStorage.setItem('reader-scroll-pos', '0');
    scrollToTop();
    // Close sidebar on mobile
    if (window.innerWidth <= 1024) {
      isSidebarOpen = false;
    }
  }

  function handlePrev() {
    if (currentChapterIndex > 0) {
      changeChapter(chapters[currentChapterIndex - 1].id);
    }
  }

  function handleNext() {
    if (currentChapterIndex < chapters.length - 1) {
      changeChapter(chapters[currentChapterIndex + 1].id);
    }
  }

  function scrollToTop() {
    const readerEl = document.getElementById('reader-area');
    if (readerEl) {
      readerEl.scrollTop = 0;
    }
    localStorage.setItem('reader-scroll-pos', '0');
  }

  function handleScroll(event) {
    const el = event.currentTarget;
    const total = el.scrollHeight - el.clientHeight;
    if (total > 0) {
      scrollProgress = (el.scrollTop / total) * 100;
    } else {
      scrollProgress = 0;
    }
    isScrollTopVisible = el.scrollTop > 300;

    isAtTop = el.scrollTop < 50;
    isAtBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 80;

    if (!isRestoringScroll) {
      localStorage.setItem('reader-scroll-pos', el.scrollTop.toString());
    }
  }

  // Intercept clicks in markdown content to keep it SPA
  function handleArticleClick(event) {
    const target = event.target.closest('a');
    if (target) {
      const href = target.getAttribute('href');
      if (href) {
        // Match things like 'ch1x.md', '../md/ch1x.md', 'prefacex.md', 'cpoint.htm', etc.
        const cleanHref = href.split('/').pop();
        if (cleanHref.endsWith('.md') || cleanHref.endsWith('.htm') || cleanHref.endsWith('.html')) {
          let fileId = cleanHref.replace(/\.(md|htm|html)$/, '');
          
          // Map welcome aliases
          if (fileId === 'index' || fileId === 'cpoint' || fileId === 'pointers') {
            fileId = 'welcome';
          }
          
          const targetChap = chapters.find(c => c.id === fileId);
          if (targetChap) {
            event.preventDefault();
            changeChapter(fileId);
          }
        }
      }
    }
  }

  // Keyboard navigation
  function handleKeyDown(event) {
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') return;
    
    if (event.key === 'ArrowRight') {
      handleNext();
    } else if (event.key === 'ArrowLeft') {
      handlePrev();
    }
  }

  // Handle clicking outside settings panel
  function handleWindowClick(event) {
    const settingsBtn = document.getElementById('settings-toggle-btn');
    const settingsPanel = document.getElementById('settings-panel');
    if (isSettingsOpen && settingsBtn && settingsPanel) {
      if (!settingsBtn.contains(event.target) && !settingsPanel.contains(event.target)) {
        isSettingsOpen = false;
      }
    }
  }
</script>

<svelte:window onkeydown={handleKeyDown} onclick={handleWindowClick} />

<div class="app-container">
  
  <!-- Sidebar -->
  <aside class="sidebar" class:closed={!isSidebarOpen}>
    <div class="sidebar-toc">
      {#each chapters as ch, idx}
        <button 
          class="toc-item" 
          class:active={currentChapterId === ch.id} 
          onclick={() => changeChapter(ch.id)}
        >
          <span style="opacity: 0.5; margin-right: 0.25rem; font-size: 0.8em; font-family: var(--font-mono)">
            {idx.toString().padStart(2, '0')}.
          </span>
          {ch.title[currentLang]}
        </button>
      {/each}
    </div>
  </aside>

  <!-- Main Content Area -->
  <main class="main-content">
    


    <!-- Top Header -->
    <header class="top-header">
      <div class="header-left">
        <button 
          class="icon-btn" 
          class:active={isSidebarOpen}
          onclick={() => isSidebarOpen = !isSidebarOpen} 
          title="Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
        <span style="font-family: var(--font-sans); font-size: 0.85rem; font-weight: 600; color: var(--text-muted);">
          {uiStrings[currentLang].chapterInfo} {currentChapterIndex + 1} / {chapters.length}
        </span>
      </div>

      <div class="header-right">
        <!-- Quick Lang Selector -->
        <button 
          class="icon-btn" 
          onclick={() => currentLang = currentLang === 'tr' ? 'en' : 'tr'} 
          title="Dil / Language"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
          <span style="font-size: 0.65rem; font-weight: bold; position: absolute; margin-top: 10px; margin-left: 12px; background: var(--bg-content); border: 1px solid var(--border-color); border-radius: 3px; padding: 0px 2px; color: var(--text-color);">
            {currentLang.toUpperCase()}
          </span>
        </button>

        <!-- Settings (Aa) Toggle -->
        <button 
          id="settings-toggle-btn"
          class="icon-btn" 
          class:active={isSettingsOpen}
          onclick={() => isSettingsOpen = !isSettingsOpen} 
          title={uiStrings[currentLang].settings}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>
        </button>

        <!-- Settings Popover Panel -->
        {#if isSettingsOpen}
          <div id="settings-panel" class="settings-popover">
            
            <!-- Theme Section -->
            <div class="settings-section">
              <span class="settings-section-title">{uiStrings[currentLang].theme}</span>
              <div class="settings-row" style="flex-wrap: wrap; gap: 0.5rem;">
                <button 
                  class="settings-btn" 
                  class:active={theme === 'light'} 
                  onclick={() => theme = 'light'}
                >
                  {uiStrings[currentLang].light}
                </button>
                <button 
                  class="settings-btn" 
                  class:active={theme === 'dark'} 
                  onclick={() => theme = 'dark'}
                >
                  {uiStrings[currentLang].dark}
                </button>
                <button 
                  class="settings-btn" 
                  class:active={theme === 'sepia'} 
                  onclick={() => theme = 'sepia'}
                >
                  {uiStrings[currentLang].sepia}
                </button>
                <button 
                  class="settings-btn" 
                  class:active={theme === 'forest'} 
                  onclick={() => theme = 'forest'}
                >
                  {uiStrings[currentLang].forest}
                </button>
                <button 
                  class="settings-btn" 
                  class:active={theme === 'nord'} 
                  onclick={() => theme = 'nord'}
                >
                  {uiStrings[currentLang].nord}
                </button>
                <button 
                  class="settings-btn" 
                  class:active={theme === 'solarized'} 
                  onclick={() => theme = 'solarized'}
                >
                  {uiStrings[currentLang].solarized}
                </button>
              </div>
            </div>

            <!-- Typography Section -->
            <div class="settings-section">
              <span class="settings-section-title">{uiStrings[currentLang].font}</span>
              <div class="settings-row">
                <button 
                  class="settings-btn" 
                  class:active={fontStyle === 'sans'} 
                  onclick={() => fontStyle = 'sans'}
                >
                  {uiStrings[currentLang].sans}
                </button>
                <button 
                  class="settings-btn" 
                  class:active={fontStyle === 'mono'} 
                  onclick={() => fontStyle = 'mono'}
                >
                  {uiStrings[currentLang].mono}
                </button>
              </div>
            </div>

            <!-- Font Size Section -->
            <div class="settings-section">
              <span class="settings-section-title">{uiStrings[currentLang].fontSize}</span>
              <div class="font-size-control">
                <button class="font-size-btn" onclick={() => fontSize = Math.max(12, fontSize - 1)}>-</button>
                <span class="font-size-value">{fontSize}px</span>
                <button class="font-size-btn" onclick={() => fontSize = Math.min(32, fontSize + 1)}>+</button>
              </div>
            </div>

            <!-- Focus Mode Toggle -->
            <div class="settings-section" style="border-top: 1px solid var(--border-color); padding-top: 0.75rem;">
              <label class="toggle-switch">
                <div class="toggle-label-wrap">
                  <span class="toggle-label">{uiStrings[currentLang].focusMode}</span>
                  <span class="toggle-desc">{uiStrings[currentLang].focusModeDesc}</span>
                </div>
                <input 
                  type="checkbox" 
                  class="toggle-checkbox" 
                  checked={isFocusMode}
                  onchange={(e) => isFocusMode = e.target.checked}
                />
              </label>
            </div>

            <!-- Keyboard shortcuts info -->
            <div style="font-size: 0.7rem; color: var(--text-muted); border-top: 1px solid var(--border-color); padding-top: 0.75rem;">
              <span style="font-weight: bold; display: block; margin-bottom: 2px;">{uiStrings[currentLang].keyboardNav}</span>
              {uiStrings[currentLang].keyboardNavDesc}
            </div>

          </div>
        {/if}
      </div>
    </header>

    <!-- Reader Scrollable Container -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <div 
      id="reader-area"
      class="reader-container" 
      onscroll={handleScroll}
    >
      <div 
        class="reader-inner"
        class:focus-active={isFocusMode}
        class:scroll-at-top={isAtTop}
        class:scroll-at-bottom={isAtBottom}
        style="font-size: {fontSize}px;"
      >
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <article 
          bind:this={articleRef}
          class="prose font-{fontStyle}"
          onclick={handleArticleClick}
        >
          <!-- The rendered HTML content from marked.js -->
          {@html renderedHtml}
        </article>

        <!-- Chapter Navigation Buttons -->
        <nav class="nav-buttons">
          {#if currentChapterIndex > 0}
            <button class="nav-btn" style="text-align: left;" onclick={handlePrev}>
              <span class="nav-btn-label">← {uiStrings[currentLang].prev}</span>
              <span class="nav-btn-title">{chapters[currentChapterIndex - 1].title[currentLang]}</span>
            </button>
          {:else}
            <div style="flex: 1;"></div>
          {/if}

          {#if currentChapterIndex < chapters.length - 1}
            <button class="nav-btn" style="text-align: right; align-items: flex-end;" onclick={handleNext}>
              <span class="nav-btn-label">{uiStrings[currentLang].next} →</span>
              <span class="nav-btn-title">{chapters[currentChapterIndex + 1].title[currentLang]}</span>
            </button>
          {:else}
            <div style="flex: 1;"></div>
          {/if}
        </nav>
      </div>

      <!-- Floating Scroll to Top Button -->
      <button 
        class="scroll-top-btn" 
        class:visible={isScrollTopVisible}
        onclick={scrollToTop}
        title="Scroll to top"
      >
        <!-- Square Progress SVG -->
        <svg class="progress-svg" width="40" height="40" viewBox="0 0 40 40">
          <rect 
            class="progress-bg"
            x="1" 
            y="1" 
            width="38" 
            height="38" 
            fill="none" 
            stroke="var(--border-color)" 
            stroke-width="2"
          />
          <rect 
            class="progress-bar-rect"
            x="1" 
            y="1" 
            width="38" 
            height="38" 
            fill="none" 
            stroke="var(--accent)" 
            stroke-width="2"
            stroke-dasharray="152"
            stroke-dashoffset={152 - (152 * scrollProgress) / 100}
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="z-index: 1;"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
      </button>

    </div>

    <!-- Status Bar at bottom -->
    <footer class="bottom-status-bar">
      <div class="status-left">
        <span>{chapters[currentChapterIndex].title[currentLang]}</span>
      </div>
      <div class="status-right">
        <span>{wordCount} {uiStrings[currentLang].wordCount}</span>
        <span>•</span>
        <span>{readingTime} {uiStrings[currentLang].readTime}</span>
      </div>
    </footer>

  </main>
</div>
