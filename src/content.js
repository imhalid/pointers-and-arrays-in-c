// Import English markdown files
import en_welcome from '../md/index.md?raw';
import en_preface from '../md/prefacex.md?raw';
import en_intro from '../md/introx.md?raw';
import en_ch1 from '../md/ch1x.md?raw';
import en_ch2 from '../md/ch2x.md?raw';
import en_ch3 from '../md/ch3x.md?raw';
import en_ch4 from '../md/ch4x.md?raw';
import en_ch5 from '../md/ch5x.md?raw';
import en_ch6 from '../md/ch6x.md?raw';
import en_ch7 from '../md/ch7x.md?raw';
import en_ch8 from '../md/ch8x.md?raw';
import en_ch9 from '../md/ch9x.md?raw';
import en_ch10 from '../md/ch10x.md?raw';
import en_epilog from '../md/epilogx.md?raw';

// Import Turkish markdown files
import tr_welcome from '../tr/cpoint.md?raw';
import tr_preface from '../tr/md/prefacex.md?raw';
import tr_intro from '../tr/md/introx.md?raw';
import tr_ch1 from '../tr/md/ch1x.md?raw';
import tr_ch2 from '../tr/md/ch2x.md?raw';
import tr_ch3 from '../tr/md/ch3x.md?raw';
import tr_ch4 from '../tr/md/ch4x.md?raw';
import tr_ch5 from '../tr/md/ch5x.md?raw';
import tr_ch6 from '../tr/md/ch6x.md?raw';
import tr_ch7 from '../tr/md/ch7x.md?raw';
import tr_ch8 from '../tr/md/ch8x.md?raw';
import tr_ch9 from '../tr/md/ch9x.md?raw';
import tr_ch10 from '../tr/md/ch10x.md?raw';
import tr_epilog from '../tr/md/epilogx.md?raw';

import en_dictionary from '../md/dictionary.md?raw';
import tr_dictionary from '../tr/md/dictionary.md?raw';

export const chapters = [
  {
    id: 'welcome',
    title: {
      en: 'Welcome',
      tr: 'Hoş Geldiniz'
    },
    content: {
      en: en_welcome,
      tr: tr_welcome
    }
  },
  {
    id: 'prefacex',
    title: {
      en: 'Preface',
      tr: 'Önsöz'
    },
    content: {
      en: en_preface,
      tr: tr_preface
    }
  },
  {
    id: 'introx',
    title: {
      en: 'Introduction',
      tr: 'Giriş'
    },
    content: {
      en: en_intro,
      tr: tr_intro
    }
  },
  {
    id: 'ch1x',
    title: {
      en: 'What is a Pointer?',
      tr: 'Pointer Nedir?'
    },
    content: {
      en: en_ch1,
      tr: tr_ch1
    }
  },
  {
    id: 'ch2x',
    title: {
      en: 'Pointer Types and Arrays',
      tr: 'Pointer Türleri ve Array\'ler'
    },
    content: {
      en: en_ch2,
      tr: tr_ch2
    }
  },
  {
    id: 'ch3x',
    title: {
      en: 'Pointers and Strings',
      tr: 'Pointer\'lar ve String\'ler'
    },
    content: {
      en: en_ch3,
      tr: tr_ch3
    }
  },
  {
    id: 'ch4x',
    title: {
      en: 'More on Strings',
      tr: 'String\'ler Hakkında Daha Fazlası'
    },
    content: {
      en: en_ch4,
      tr: tr_ch4
    }
  },
  {
    id: 'ch5x',
    title: {
      en: 'Pointers and Structures',
      tr: 'Pointer\'lar ve Structure\'lar'
    },
    content: {
      en: en_ch5,
      tr: tr_ch5
    }
  },
  {
    id: 'ch6x',
    title: {
      en: 'More on Strings and Arrays of Strings',
      tr: 'String\'ler ve String Array\'leri'
    },
    content: {
      en: en_ch6,
      tr: tr_ch6
    }
  },
  {
    id: 'ch7x',
    title: {
      en: 'More on Multi-Dimensional Arrays',
      tr: 'Çok Boyutlu Dizi\'ler Hakkında'
    },
    content: {
      en: en_ch7,
      tr: tr_ch7
    }
  },
  {
    id: 'ch8x',
    title: {
      en: 'Pointers to Arrays',
      tr: 'Array Pointer\'ları'
    },
    content: {
      en: en_ch8,
      tr: tr_ch8
    }
  },
  {
    id: 'ch9x',
    title: {
      en: 'Pointers and Dynamic Allocation of Memory',
      tr: 'Pointer\'lar ve Dinamik Bellek Tahsisi'
    },
    content: {
      en: en_ch9,
      tr: tr_ch9
    }
  },
  {
    id: 'ch10x',
    title: {
      en: 'Pointers to Functions',
      tr: 'Fonksiyon İşaretçileri'
    },
    content: {
      en: en_ch10,
      tr: tr_ch10
    }
  },
  {
    id: 'epilog',
    title: {
      en: 'Epilog',
      tr: 'Sonsöz'
    },
    content: {
      en: en_epilog,
      tr: tr_epilog
    }
  },
  {
    id: 'dictionary',
    title: {
      en: 'Glossary of C Terms',
      tr: 'C Terimleri Sözlüğü'
    },
    content: {
      en: en_dictionary,
      tr: tr_dictionary
    }
  }
];
