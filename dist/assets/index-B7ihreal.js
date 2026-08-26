var Ed=Object.defineProperty;var us=r=>{throw TypeError(r)};var Md=(r,e,n)=>e in r?Ed(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var O=(r,e,n)=>Md(r,typeof e!="symbol"?e+"":e,n),da=(r,e,n)=>e.has(r)||us("Cannot "+n);var _=(r,e,n)=>(da(r,e,"read from private field"),n?n.call(r):e.get(r)),R=(r,e,n)=>e.has(r)?us("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,n),M=(r,e,n,t)=>(da(r,e,"write to private field"),t?t.call(r,n):e.set(r,n),n),F=(r,e,n)=>(da(r,e,"access private method"),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const qs=!1;var Gs=Array.isArray,Dd=Array.prototype.indexOf,Er=Array.prototype.includes,Jr=Array.from,Rd=Object.defineProperty,Di=Object.getOwnPropertyDescriptor,Od=Object.getOwnPropertyDescriptors,Fd=Object.prototype,Nd=Array.prototype,Xs=Object.getPrototypeOf,ds=Object.isExtensible;const jd=()=>{};function Ld(r){for(var e=0;e<r.length;e++)r[e]()}function Vs(){var r,e,n=new Promise((t,i)=>{r=t,e=i});return{promise:n,resolve:r,reject:e}}const ve=2,li=4,Qr=8,Zs=1<<24,kn=16,pn=32,Wn=64,Sa=128,hn=512,ke=1024,me=2048,_n=4096,Ie=8192,fn=16384,bi=32768,Ca=1<<25,ui=65536,Mr=1<<17,$d=1<<18,ki=1<<19,Hd=1<<20,Un=1<<25,Mt=65536,Dr=1<<21,Kt=1<<22,rt=1<<23,wr=Symbol("$state"),Ud=Symbol(""),zr=Symbol("attributes"),Pa=Symbol("class"),Ba=Symbol("style"),Si=Symbol("text"),ir=new class extends Error{constructor(){super(...arguments);O(this,"name","StaleReactionError");O(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};function Wd(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Yd(r,e,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function qd(r){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Gd(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Xd(r){throw new Error("https://svelte.dev/e/effect_orphan")}function Vd(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Zd(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Kd(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Jd(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Qd(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const ec=1,nc=2,tc=16,ic=2,be=Symbol("uninitialized"),Ks="http://www.w3.org/1999/xhtml",rc="http://www.w3.org/2000/svg",ac="http://www.w3.org/1998/Math/MathML";function oc(){console.warn("https://svelte.dev/e/derived_inert")}function sc(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Js(r){return r===this.v}function lc(r,e){return r!=r?e==e:r!==e||r!==null&&typeof r=="object"||typeof r=="function"}function Qs(r){return!lc(r,this.v)}let uc=!1,Ee=null;function di(r){Ee=r}function el(r,e=!1,n){Ee={p:Ee,i:!1,c:null,e:null,s:r,x:null,r:j,l:null}}function nl(r){var e=Ee,n=e.e;if(n!==null){e.e=null;for(var t of n)zl(t)}return e.i=!0,Ee=e.p,{}}function tl(){return!0}let gt=[];function il(){var r=gt;gt=[],Ld(r)}function Qn(r){if(gt.length===0&&!Oi){var e=gt;queueMicrotask(()=>{e===gt&&il()})}gt.push(r)}function dc(){for(;gt.length>0;)il()}function rl(r){var e=j;if(e===null)return N.f|=rt,r;if(!(e.f&bi)&&!(e.f&li))throw r;et(r,e)}function et(r,e){if(!(e!==null&&e.f&fn)){for(;e!==null;){if(e.f&Sa){if(!(e.f&bi))throw r;try{e.b.error(r);return}catch(n){r=n}}e=e.parent}throw r}}const cc=-7169;function ue(r,e){r.f=r.f&cc|e}function ao(r){r.f&hn||r.deps===null?ue(r,ke):ue(r,_n)}function al(r){if(r!==null)for(const e of r)!(e.f&ve)||!(e.f&Mt)||(e.f^=Mt,al(e.deps))}function ol(r,e,n){r.f&me?e.add(r):r.f&_n&&n.add(r),al(r.deps),ue(r,ke)}function rr(r){var e=N,n=j;mn(null),Mn(null);try{return r()}finally{mn(e),Mn(n)}}function hc(r){let e=0,n=Rt(0),t;return()=>{co()&&(S(n),xl(()=>(e===0&&(t=Fl(()=>r(()=>Fi(n)))),e+=1,()=>{Qn(()=>{e-=1,e===0&&(t==null||t(),t=void 0,Fi(n))})})))}}var fc=ui|ki;function pc(r,e,n,t){new mc(r,e,n,t)}var on,ro,sn,_t,De,ln,Be,Ge,jn,wt,Kn,ni,Ji,Qi,Ln,Vr,ee,yc,gc,Ia,bc,Ea,xr,Tr,Ma,Da;class mc{constructor(e,n,t,i){R(this,ee);O(this,"parent");O(this,"is_pending",!1);O(this,"transform_error");R(this,on);R(this,ro,null);R(this,sn);R(this,_t);R(this,De);R(this,ln,null);R(this,Be,null);R(this,Ge,null);R(this,jn,null);R(this,wt,0);R(this,Kn,0);R(this,ni,!1);R(this,Ji,new Set);R(this,Qi,new Set);R(this,Ln,null);R(this,Vr,hc(()=>(M(this,Ln,Rt(_(this,wt))),()=>{M(this,Ln,null)})));var a;M(this,on,e),M(this,sn,n),M(this,_t,o=>{var s=j;s.b=this,s.f|=Sa,t(o)}),this.parent=j.b,this.transform_error=i??((a=this.parent)==null?void 0:a.transform_error)??(o=>o),M(this,De,ho(()=>{F(this,ee,Ea).call(this)},fc))}defer_effect(e){ol(e,_(this,Ji),_(this,Qi))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!_(this,sn).pending}update_pending_count(e,n){F(this,ee,Ma).call(this,e,n),M(this,wt,_(this,wt)+e),!(!_(this,Ln)||_(this,ni))&&(M(this,ni,!0),Qn(()=>{M(this,ni,!1),_(this,Ln)&&ci(_(this,Ln),_(this,wt))}))}get_effect_pending(){return _(this,Vr).call(this),S(_(this,Ln))}error(e){if(!_(this,sn).onerror&&!_(this,sn).failed)throw e;I!=null&&I.is_fork?(_(this,ln)&&I.skip_effect(_(this,ln)),_(this,Be)&&I.skip_effect(_(this,Be)),_(this,Ge)&&I.skip_effect(_(this,Ge)),I.oncommit(()=>{F(this,ee,Da).call(this,e)})):F(this,ee,Da).call(this,e)}}on=new WeakMap,ro=new WeakMap,sn=new WeakMap,_t=new WeakMap,De=new WeakMap,ln=new WeakMap,Be=new WeakMap,Ge=new WeakMap,jn=new WeakMap,wt=new WeakMap,Kn=new WeakMap,ni=new WeakMap,Ji=new WeakMap,Qi=new WeakMap,Ln=new WeakMap,Vr=new WeakMap,ee=new WeakSet,yc=function(){try{M(this,ln,un(()=>_(this,_t).call(this,_(this,on))))}catch(e){this.error(e)}},gc=function(e){const n=_(this,sn).failed,{reset:t,invoke_onerror:i}=F(this,ee,Ia).call(this,e);Qn(i),n&&M(this,Ge,un(()=>{n(_(this,on),()=>e,()=>t)}))},Ia=function(e){var n=!1,t=!1;const i=()=>{if(n){sc();return}n=!0,t&&Qd(),_(this,Ge)!==null&&St(_(this,Ge),()=>{M(this,Ge,null)}),F(this,ee,Tr).call(this,()=>{F(this,ee,Ea).call(this)})};return{reset:i,invoke_onerror:()=>{var o,s;try{t=!0,(s=(o=_(this,sn)).onerror)==null||s.call(o,e,i),t=!1}catch(l){et(l,_(this,De)&&_(this,De).parent)}}}},bc=function(){const e=_(this,sn).pending;e&&(this.is_pending=!0,M(this,Be,un(()=>e(_(this,on)))),Qn(()=>{var n=M(this,jn,document.createDocumentFragment()),t=At();n.append(t),M(this,ln,F(this,ee,Tr).call(this,()=>un(()=>_(this,_t).call(this,t)))),_(this,Kn)===0&&(_(this,on).before(n),M(this,jn,null),St(_(this,Be),()=>{M(this,Be,null)}),F(this,ee,xr).call(this,I))}))},Ea=function(){try{if(this.is_pending=this.has_pending_snippet(),M(this,Kn,0),M(this,wt,0),M(this,ln,un(()=>{_(this,_t).call(this,_(this,on))})),_(this,Kn)>0){var e=M(this,jn,document.createDocumentFragment());po(_(this,ln),e);const n=_(this,sn).pending;M(this,Be,un(()=>n(_(this,on))))}else F(this,ee,xr).call(this,I)}catch(n){this.error(n)}},xr=function(e){this.is_pending=!1,e.transfer_effects(_(this,Ji),_(this,Qi))},Tr=function(e){var n=j,t=N,i=Ee;Mn(_(this,De)),mn(_(this,De)),di(_(this,De).ctx);try{return Dt.ensure(),e()}catch(a){return rl(a),null}finally{Mn(n),mn(t),di(i)}},Ma=function(e,n){var t;if(!this.has_pending_snippet()){this.parent&&F(t=this.parent,ee,Ma).call(t,e,n);return}M(this,Kn,_(this,Kn)+e),_(this,Kn)===0&&(F(this,ee,xr).call(this,n),_(this,Be)&&St(_(this,Be),()=>{M(this,Be,null)}),_(this,jn)&&(_(this,on).before(_(this,jn)),M(this,jn,null)))},Da=function(e){_(this,ln)&&(Ne(_(this,ln)),M(this,ln,null)),_(this,Be)&&(Ne(_(this,Be)),M(this,Be,null)),_(this,Ge)&&(Ne(_(this,Ge)),M(this,Ge,null));let n=_(this,sn).failed;const t=i=>{const{reset:a,invoke_onerror:o}=F(this,ee,Ia).call(this,i);o(),n&&M(this,Ge,F(this,ee,Tr).call(this,()=>{try{return un(()=>{var s=j;s.b=this,s.f|=Sa,n(_(this,on),()=>i,()=>a)})}catch(s){return et(s,_(this,De).parent),null}}))};Qn(()=>{var i;try{i=this.transform_error(e)}catch(a){et(a,_(this,De)&&_(this,De).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(t,a=>et(a,_(this,De)&&_(this,De).parent)):t(i)})};function kc(r,e,n,t){const i=oo;var a=r.filter(p=>!p.settled),o=e.map(i);if(n.length===0&&a.length===0){t(o);return}var s=j,l=vc(),u=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(p=>p.promise)):null;function d(p){if(!(s.f&fn)){l();try{t([...o,...p])}catch(y){et(y,s)}Rr()}}var h=sl();if(n.length===0){u.then(()=>d([])).finally(h);return}function c(){Promise.all(n.map(p=>_c(p))).then(d).catch(p=>et(p,s)).finally(h)}u?u.then(()=>{l(),c(),Rr()}):c()}function vc(){var r=j,e=N,n=Ee,t=I;return function(a=!0){Mn(r),mn(e),di(n),a&&!(r.f&fn)&&(t==null||t.activate(),t==null||t.apply())}}function Rr(r=!0){Mn(null),mn(null),di(null),r&&(I==null||I.deactivate())}function sl(){var r=j,e=r.b,n=I,t=!!(e!=null&&e.is_rendered());return e==null||e.update_pending_count(1,n),n.increment(t,r),()=>{e==null||e.update_pending_count(-1,n),n.decrement(t,r)}}function oo(r){var e=ve|me;return j!==null&&(j.f|=ki),{ctx:Ee,deps:null,effects:null,equals:Js,f:e,fn:r,reactions:null,rv:0,v:be,wv:0,parent:j,ac:null}}const Ci=Symbol("obsolete");function _c(r,e,n){let t=j;t===null&&Wd();var i=void 0,a=Rt(be),o=!N,s=new Set;return Fc(()=>{var p,y;var l=j,u=Vs();i=u.promise;try{Promise.resolve(r()).then(u.resolve,f=>{f!==ir&&u.reject(f)}).finally(Rr)}catch(f){u.reject(f),Rr()}var d=I;if(o){if(l.f&bi)var h=sl();if((p=t.b)!=null&&p.is_rendered())(y=d.async_deriveds.get(l))==null||y.reject(Ci);else for(const f of s.values())f.reject(Ci);s.add(u),d.async_deriveds.set(l,u)}const c=(f,b=void 0)=>{h==null||h(),s.delete(u),b!==Ci&&(d.activate(),b?(a.f|=rt,ci(a,b)):(a.f&rt&&(a.f^=rt),ci(a,f)),d.deactivate())};u.promise.then(c,f=>c(null,f||"unknown"))}),wl(()=>{for(const l of s)l.reject(Ci)}),new Promise(l=>{function u(d){function h(){d===i?l(a):u(i)}d.then(h,h)}u(i)})}function Ht(r){const e=oo(r);return Bl(e),e}function wc(r){const e=oo(r);return e.equals=Qs,e}function zc(r){var e=r.effects;if(e!==null){r.effects=null;for(var n=0;n<e.length;n+=1)Ne(e[n])}}function so(r){var e,n=j,t=r.parent;if(!st&&t!==null&&r.v!==be&&t.f&(fn|Ie))return oc(),r.v;Mn(t);try{r.f&=~Mt,zc(r),e=Dl(r)}finally{Mn(n)}return e}function ll(r){var e=so(r);if(!r.equals(e)&&(r.wv=El(),(!(I!=null&&I.is_fork)||r.deps===null)&&(I!==null?(I.capture(r,e,!0),Ri==null||Ri.capture(r,e,!0)):r.v=e,r.deps===null))){ue(r,ke);return}st||(we!==null?(co()||I!=null&&I.is_fork)&&we.set(r,e):ao(r))}function xc(r){var e;if(r.effects!==null)for(const n of r.effects)(n.teardown||n.ac)&&((e=n.teardown)==null||e.call(n),n.ac!==null&&rr(()=>{n.ac.abort(ir),n.ac=null}),n.fn!==null&&(n.teardown=jd),Ui(n,0),fo(n))}function ul(r){if(r.effects!==null)for(const e of r.effects)e.teardown&&e.fn!==null&&hi(e)}let ca=null,Ut=null,I=null,Ri=null,we=null,Ra=null,Oi=!1,ha=!1,Gt=null,Ar=null;var cs=0;let Tc=1;var ti,Jn,zt,ii,ri,ai,$n,oi,Re,er,Hn,gn,xn,si,xt,q,Oa,Pi,Fa,dl,cl,Yt,Ac,Bi;const Zr=class Zr{constructor(){R(this,q);O(this,"id",Tc++);R(this,ti,!1);O(this,"linked",!0);R(this,Jn,null);R(this,zt,null);O(this,"async_deriveds",new Map);O(this,"current",new Map);O(this,"previous",new Map);R(this,ii,new Set);R(this,ri,new Set);R(this,ai,0);R(this,$n,new Map);R(this,oi,null);R(this,Re,[]);R(this,er,[]);R(this,Hn,new Set);R(this,gn,new Set);R(this,xn,new Map);R(this,si,new Set);O(this,"is_fork",!1);R(this,xt,!1);Ut===null?ca=Ut=this:(M(Ut,zt,this),M(this,Jn,Ut)),Ut=this}skip_effect(e){_(this,xn).has(e)||_(this,xn).set(e,{d:[],m:[]}),_(this,si).delete(e)}unskip_effect(e,n=t=>this.schedule(t)){var t=_(this,xn).get(e);if(t){_(this,xn).delete(e);for(var i of t.d)ue(i,me),n(i);for(i of t.m)ue(i,_n),n(i)}_(this,si).add(e)}capture(e,n,t=!1){e.v!==be&&!this.previous.has(e)&&this.previous.set(e,e.v),e.f&rt||(this.current.set(e,[n,t]),we==null||we.set(e,n)),this.is_fork||(e.v=n)}activate(){I=this}deactivate(){I=null,we=null}flush(){try{ha=!0,I=this,F(this,q,Pi).call(this)}finally{cs=0,Ra=null,Gt=null,Ar=null,ha=!1,I=null,we=null,In.clear()}}discard(){var e;for(const n of _(this,ri))n(this);_(this,ri).clear();for(const n of this.async_deriveds.values())n.reject(Ci);F(this,q,Bi).call(this),(e=_(this,oi))==null||e.resolve()}register_created_effect(e){_(this,er).push(e)}increment(e,n){if(M(this,ai,_(this,ai)+1),e){let t=_(this,$n).get(n)??0;_(this,$n).set(n,t+1)}}decrement(e,n){if(M(this,ai,_(this,ai)-1),e){let t=_(this,$n).get(n)??0;t===1?_(this,$n).delete(n):_(this,$n).set(n,t-1)}_(this,xt)||(M(this,xt,!0),Qn(()=>{M(this,xt,!1),this.linked&&this.flush()}))}transfer_effects(e,n){for(const t of e)_(this,Hn).add(t);for(const t of n)_(this,gn).add(t);e.clear(),n.clear()}oncommit(e){_(this,ii).add(e)}ondiscard(e){_(this,ri).add(e)}settled(){return(_(this,oi)??M(this,oi,Vs())).promise}static ensure(){if(I===null){const e=I=new Zr;!ha&&!Oi&&Qn(()=>{_(e,ti)||e.flush()})}return I}apply(){{we=null;return}}schedule(e){var i;if(Ra=e,(i=e.b)!=null&&i.is_pending&&e.f&(li|Qr|Zs)&&!(e.f&bi)){e.b.defer_effect(e);return}for(var n=e;n.parent!==null;){n=n.parent;var t=n.f;if(Gt!==null&&n===j&&(N===null||!(N.f&ve)))return;if(t&(Wn|pn)){if(!(t&ke))return;n.f^=ke}}_(this,Re).push(n)}};ti=new WeakMap,Jn=new WeakMap,zt=new WeakMap,ii=new WeakMap,ri=new WeakMap,ai=new WeakMap,$n=new WeakMap,oi=new WeakMap,Re=new WeakMap,er=new WeakMap,Hn=new WeakMap,gn=new WeakMap,xn=new WeakMap,si=new WeakMap,xt=new WeakMap,q=new WeakSet,Oa=function(){if(this.is_fork)return!0;for(const t of _(this,$n).keys()){for(var e=t,n=!1;e.parent!==null;){if(_(this,xn).has(e)){n=!0;break}e=e.parent}if(!n)return!0}return!1},Pi=function(){var l,u,d,h;M(this,ti,!0),cs++>1e3&&(F(this,q,Bi).call(this),Cc());for(const c of _(this,Hn))_(this,gn).delete(c),ue(c,me),this.schedule(c);for(const c of _(this,gn))ue(c,_n),this.schedule(c);const e=_(this,Re);M(this,Re,[]),this.apply();var n=Gt=[],t=[],i=Ar=[];for(const c of e)try{F(this,q,Fa).call(this,c,n,t)}catch(p){throw pl(c),F(this,q,Oa).call(this)||this.discard(),p}if(I=null,i.length>0){var a=Zr.ensure();for(const c of i)a.schedule(c)}if(Gt=null,Ar=null,F(this,q,Oa).call(this)){F(this,q,Yt).call(this,t),F(this,q,Yt).call(this,n);for(const[c,p]of _(this,xn))fl(c,p);i.length>0&&F(l=I,q,Pi).call(l);return}const o=F(this,q,dl).call(this);if(o){F(this,q,Yt).call(this,t),F(this,q,Yt).call(this,n),F(u=o,q,cl).call(u,this);return}_(this,Hn).clear(),_(this,gn).clear();for(const c of _(this,ii))c(this);_(this,ii).clear(),Ri=this,hs(t),hs(n),Ri=null,(d=_(this,oi))==null||d.resolve();var s=I;if(_(this,ai)===0&&(_(this,Re).length===0||s!==null)&&F(this,q,Bi).call(this),_(this,Re).length>0)if(s!==null){const c=s;_(c,Re).push(..._(this,Re).filter(p=>!_(c,Re).includes(p)))}else s=this;s!==null&&(In.clear(),F(h=s,q,Pi).call(h))},Fa=function(e,n,t){e.f^=ke;for(var i=e.first;i!==null;){var a=i.f,o=(a&(pn|Wn))!==0,s=o&&(a&ke)!==0,l=s||(a&Ie)!==0||_(this,xn).has(i);if(!l&&i.fn!==null){o?i.f^=ke:a&li?n.push(i):ar(i)&&(a&kn&&_(this,gn).add(i),hi(i));var u=i.first;if(u!==null){i=u;continue}}for(;i!==null;){var d=i.next;if(d!==null){i=d;break}i=i.parent}}},dl=function(){for(var e=_(this,Jn);e!==null;){if(!e.is_fork){for(const[n,[,t]]of this.current)if(e.current.has(n)&&!t)return e}e=_(e,Jn)}return null},cl=function(e){var t;for(const[i,a]of e.current)!this.previous.has(i)&&e.previous.has(i)&&this.previous.set(i,e.previous.get(i)),this.current.set(i,a);for(const[i,a]of e.async_deriveds){const o=this.async_deriveds.get(i);o&&a.promise.then(o.resolve).catch(o.reject)}e.async_deriveds.clear(),this.transfer_effects(_(e,Hn),_(e,gn));const n=i=>{var a=i.reactions;if(a!==null&&!(i.f&ve&&!(i.f&(me|_n))))for(const l of a){var o=l.f;if(o&ve)n(l);else{var s=l;o&(Kt|kn)&&!this.async_deriveds.has(s)&&(_(this,gn).delete(s),ue(s,me),this.schedule(s))}}};for(const i of this.current.keys())n(i);this.oncommit(()=>e.discard()),F(t=e,q,Bi).call(t),I=this,F(this,q,Pi).call(this)},Yt=function(e){for(var n=0;n<e.length;n+=1)ol(e[n],_(this,Hn),_(this,gn))},Ac=function(){var h;for(let c=ca;c!==null;c=_(c,zt)){var e=c.id<this.id,n=[];for(const[p,[y,f]]of this.current){if(c.current.has(p)){var t=c.current.get(p)[0];if(e&&y!==t)c.current.set(p,[y,f]);else continue}n.push(p)}if(e)for(const[p,y]of this.async_deriveds){const f=c.async_deriveds.get(p);f&&y.promise.then(f.resolve).catch(f.reject)}var i=[...c.current.keys()].filter(p=>!c.current.get(p)[1]);if(!(!_(c,ti)||i.length===0)){var a=i.filter(p=>!this.current.has(p));if(a.length===0)e&&c.discard();else if(n.length>0){if(e)for(const p of _(this,si))c.unskip_effect(p,y=>{var f;y.f&(kn|Kt)?c.schedule(y):F(f=c,q,Yt).call(f,[y])});c.activate();var o=new Set,s=new Map;for(var l of n)hl(l,a,o,s);s=new Map;var u=[...c.current].filter(([p,y])=>{const f=this.current.get(p);return f?f[0]!==y[0]||f[1]!==y[1]:!0}).map(([p])=>p);if(u.length>0)for(const p of _(this,er))!(p.f&(fn|Ie|Mr))&&lo(p,u,s)&&(p.f&(Kt|kn)?(ue(p,me),c.schedule(p)):_(c,Hn).add(p));if(_(c,Re).length>0&&!_(c,xt)){c.apply();for(var d of _(c,Re))F(h=c,q,Fa).call(h,d,[],[]);M(c,Re,[])}c.deactivate()}}}},Bi=function(){if(this.linked){var e=_(this,Jn),n=_(this,zt);e===null?ca=n:M(e,zt,n),n===null?Ut=e:M(n,Jn,e),this.linked=!1}};let Dt=Zr;function Sc(r){var e=Oi;Oi=!0;try{for(var n;;){if(dc(),I===null)return n;I.flush()}}finally{Oi=e}}function Cc(){try{Vd()}catch(r){et(r,Ra)}}let yn=null;function hs(r){var e=r.length;if(e!==0){for(var n=0;n<e;){var t=r[n++];if(!(t.f&(fn|Ie))&&ar(t)&&(yn=new Set,hi(t),t.deps===null&&t.first===null&&t.nodes===null&&t.teardown===null&&t.ac===null&&Sl(t),(yn==null?void 0:yn.size)>0)){In.clear();for(const i of yn){if(i.f&(fn|Ie))continue;const a=[i];let o=i.parent;for(;o!==null;)yn.has(o)&&(yn.delete(o),a.push(o)),o=o.parent;for(let s=a.length-1;s>=0;s--){const l=a[s];l.f&(fn|Ie)||hi(l)}}yn.clear()}}yn=null}}function hl(r,e,n,t){if(!n.has(r)&&(n.add(r),r.reactions!==null))for(const i of r.reactions){const a=i.f;a&ve?hl(i,e,n,t):a&(Kt|kn)&&!(a&me)&&lo(i,e,t)&&(ue(i,me),uo(i))}}function lo(r,e,n){const t=n.get(r);if(t!==void 0)return t;if(r.deps!==null)for(const i of r.deps){if(Er.call(e,i))return!0;if(i.f&ve&&lo(i,e,n))return n.set(i,!0),!0}return n.set(r,!1),!1}function uo(r){I.schedule(r)}function fl(r,e){if(!(r.f&pn&&r.f&ke)){r.f&me?e.d.push(r):r.f&_n&&e.m.push(r),ue(r,ke);for(var n=r.first;n!==null;)fl(n,e),n=n.next}}function pl(r){ue(r,ke);for(var e=r.first;e!==null;)pl(e),e=e.next}let Or=new Set;const In=new Map;let ml=!1;function Rt(r,e){var n={f:0,v:r,reactions:null,equals:Js,rv:0,wv:0};return n}function he(r,e){const n=Rt(r);return Bl(n),n}function Pc(r,e=!1,n=!0){const t=Rt(r);return e||(t.equals=Qs),t}function U(r,e,n=!1){N!==null&&(!vn||N.f&Mr)&&tl()&&N.f&(ve|kn|Kt|Mr)&&(En===null||!En.has(r))&&Jd();let t=n?An(e):e;return ci(r,t,Ar)}function ci(r,e,n=null){if(!r.equals(e)){st?In.set(r,e):In.has(r)||In.set(r,r.v);var t=Dt.ensure();if(t.capture(r,e),r.f&ve){const i=r;r.f&me&&so(i),we===null&&ao(i)}r.wv=El(),yl(r,me,n),j!==null&&j.f&ke&&!(j.f&(pn|Wn))&&(an===null?jc([r]):an.push(r)),!t.is_fork&&Or.size>0&&!ml&&Bc()}return e}function Bc(){ml=!1;for(const r of Or){r.f&ke&&ue(r,_n);let e;try{e=ar(r)}catch{e=!0}e&&hi(r)}Or.clear()}function Fi(r){U(r,r.v+1)}function yl(r,e,n){var t=r.reactions;if(t!==null)for(var i=t.length,a=0;a<i;a++){var o=t[a],s=o.f,l=(s&me)===0;if(l&&ue(o,e),s&Mr)Or.add(o);else if(s&ve){var u=o;we==null||we.delete(u),s&Mt||(s&hn&&(j===null||!(j.f&Dr))&&(o.f|=Mt),yl(u,_n,n))}else if(l){var d=o;s&kn&&yn!==null&&yn.add(d),n!==null?n.push(d):uo(d)}}}function An(r){if(typeof r!="object"||r===null||wr in r)return r;const e=Xs(r);if(e!==Fd&&e!==Nd)return r;var n=new Map,t=Gs(r),i=he(0),a=Ct,o=s=>{if(Ct===a)return s();var l=N,u=Ct;mn(null),ps(a);var d=s();return mn(l),ps(u),d};return t&&n.set("length",he(r.length)),new Proxy(r,{defineProperty(s,l,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Zd();var d=n.get(l);return d===void 0?o(()=>{var h=he(u.value);return n.set(l,h),h}):U(d,u.value,!0),!0},deleteProperty(s,l){var u=n.get(l);if(u===void 0){if(l in s){const d=o(()=>he(be));n.set(l,d),Fi(i)}}else U(u,be),Fi(i);return!0},get(s,l,u){var p;if(l===wr)return r;var d=n.get(l),h=l in s;if(d===void 0&&(!h||(p=Di(s,l))!=null&&p.writable)&&(d=o(()=>{var y=An(h?s[l]:be),f=he(y);return f}),n.set(l,d)),d!==void 0){var c=S(d);return c===be?void 0:c}return Reflect.get(s,l,u)},getOwnPropertyDescriptor(s,l){var u=Reflect.getOwnPropertyDescriptor(s,l);if(u&&"value"in u){var d=n.get(l);d&&(u.value=S(d))}else if(u===void 0){var h=n.get(l),c=h==null?void 0:h.v;if(h!==void 0&&c!==be)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return u},has(s,l){var c;if(l===wr)return!0;var u=n.get(l),d=u!==void 0&&u.v!==be||Reflect.has(s,l);if(u!==void 0||j!==null&&(!d||(c=Di(s,l))!=null&&c.writable)){u===void 0&&(u=o(()=>{var p=d?An(s[l]):be,y=he(p);return y}),n.set(l,u));var h=S(u);if(h===be)return!1}return d},set(s,l,u,d){var g;var h=n.get(l),c=l in s;if(t&&l==="length")for(var p=u;p<h.v;p+=1){var y=n.get(p+"");y!==void 0?U(y,be):p in s&&(y=o(()=>he(be)),n.set(p+"",y))}if(h===void 0)(!c||(g=Di(s,l))!=null&&g.writable)&&(h=o(()=>he(void 0)),U(h,An(u)),n.set(l,h));else{c=h.v!==be;var f=o(()=>An(u));U(h,f)}var b=Reflect.getOwnPropertyDescriptor(s,l);if(b!=null&&b.set&&b.set.call(d,u),!c){if(t&&typeof l=="string"){var w=n.get("length"),m=Number(l);Number.isInteger(m)&&m>=w.v&&U(w,m+1)}Fi(i)}return!0},ownKeys(s){S(i);var l=Reflect.ownKeys(s).filter(h=>{var c=n.get(h);return c===void 0||c.v!==be});for(var[u,d]of n)d.v!==be&&!(u in s)&&l.push(u);return l},setPrototypeOf(){Kd()}})}var Fr,gl,bl,kl;function Ic(){if(Fr===void 0){Fr=window,gl=/Firefox/.test(navigator.userAgent);var r=Element.prototype,e=Node.prototype,n=Text.prototype;bl=Di(e,"firstChild").get,kl=Di(e,"nextSibling").get,ds(r)&&(r[Pa]=void 0,r[zr]=null,r[Ba]=void 0,r.__e=void 0),ds(n)&&(n[Si]=void 0)}}function At(r=""){return document.createTextNode(r)}function Xt(r){return bl.call(r)}function ea(r){return kl.call(r)}function B(r,e){return Xt(r)}function L(r,e=1,n=!1){let t=r;for(;e--;)t=ea(t);return t}function Ec(r){r.textContent=""}function vl(){return!1}function _l(r,e,n){return e==null||e===Ks?n?document.createElement(r,{is:n}):document.createElement(r):n?document.createElementNS(e,r,{is:n}):document.createElementNS(e,r)}function Mc(r){j===null&&(N===null&&Xd(),Gd()),st&&qd()}function Dc(r,e){var n=e.last;n===null?e.last=e.first=r:(n.next=r,r.prev=n,e.last=r)}function Gn(r,e){var n=j;n!==null&&n.f&Ie&&(r|=Ie);var t={ctx:Ee,deps:null,nodes:null,f:r|me|hn,first:null,fn:e,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};I==null||I.register_created_effect(t);var i=t;if(r&li)Gt!==null?Gt.push(t):Dt.ensure().schedule(t);else if(e!==null){try{hi(t)}catch(o){throw Ne(t),o}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&!(i.f&ki)&&(i=i.first,r&kn&&r&ui&&i!==null&&(i.f|=ui))}if(i!==null&&(i.parent=n,n!==null&&Dc(i,n),N!==null&&N.f&ve&&!(r&Wn))){var a=N;(a.effects??(a.effects=[])).push(i)}return t}function co(){return N!==null&&!vn}function wl(r){const e=Gn(Qr,null);return ue(e,ke),e.teardown=r,e}function wn(r){Mc();var e=j.f,n=!N&&(e&pn)!==0&&Ee!==null&&!Ee.i;if(n){var t=Ee;(t.e??(t.e=[])).push(r)}else return zl(r)}function zl(r){return Gn(li|Hd,r)}function Rc(r){Dt.ensure();const e=Gn(Wn|ki,r);return(n={})=>new Promise(t=>{n.outro?St(e,()=>{Ne(e),t(void 0)}):(Ne(e),t(void 0))})}function Oc(r){return Gn(li,r)}function Fc(r){return Gn(Kt|ki,r)}function xl(r,e=0){return Gn(Qr|e,r)}function qt(r,e=[],n=[],t=[]){kc(t,e,n,i=>{Gn(Qr,()=>{r(...i.map(S))})})}function ho(r,e=0){var n=Gn(kn|e,r);return n}function un(r){return Gn(pn|ki,r)}function Tl(r){var e=r.teardown;if(e!==null){const n=st,t=N;fs(!0),mn(null);try{e.call(null)}finally{fs(n),mn(t)}}}function fo(r,e=!1){var n=r.first;for(r.first=r.last=null;n!==null;){const i=n.ac;i!==null&&rr(()=>{i.abort(ir)});var t=n.next;n.f&Wn?n.parent=null:Ne(n,e),n=t}}function Nc(r){for(var e=r.first;e!==null;){var n=e.next;e.f&pn||Ne(e),e=n}}function Ne(r,e=!0){var n=!1;(e||r.f&$d)&&r.nodes!==null&&r.nodes.end!==null&&(Al(r.nodes.start,r.nodes.end),n=!0),r.f|=Ca,fo(r,e&&!n),Ui(r,0);var t=r.nodes&&r.nodes.t;if(t!==null)for(const a of t)a.stop();Tl(r),r.f^=Ca,r.f|=fn;var i=r.parent;i!==null&&i.first!==null&&Sl(r),r.next=r.prev=r.teardown=r.ctx=r.deps=r.fn=r.nodes=r.ac=r.b=null}function Al(r,e){for(;r!==null;){var n=r===e?null:ea(r);r.remove(),r=n}}function Sl(r){var e=r.parent,n=r.prev,t=r.next;n!==null&&(n.next=t),t!==null&&(t.prev=n),e!==null&&(e.first===r&&(e.first=t),e.last===r&&(e.last=n))}function St(r,e,n=!0){var t=[];Cl(r,t,!0);var i=()=>{n&&Ne(r),e&&e()},a=t.length;if(a>0){var o=()=>--a||i();for(var s of t)s.out(o)}else i()}function Cl(r,e,n){if(!(r.f&Ie)){r.f^=Ie;var t=r.nodes&&r.nodes.t;if(t!==null)for(const s of t)(s.is_global||n)&&e.push(s);for(var i=r.first;i!==null;){var a=i.next;if(!(i.f&Wn)){var o=(i.f&ui)!==0||(i.f&pn)!==0&&(r.f&kn)!==0;Cl(i,e,o?n:!1)}i=a}}}function Nr(r){Pl(r,!0)}function Pl(r,e){if(r.f&Ie){r.f^=Ie,r.f&ke||(ue(r,me),Dt.ensure().schedule(r));for(var n=r.first;n!==null;){var t=n.next,i=(n.f&ui)!==0||(n.f&pn)!==0;Pl(n,i?e:!1),n=t}var a=r.nodes&&r.nodes.t;if(a!==null)for(const o of a)(o.is_global||e)&&o.in()}}function po(r,e){if(r.nodes)for(var n=r.nodes.start,t=r.nodes.end;n!==null;){var i=n===t?null:ea(n);e.append(n),n=i}}let Sr=!1,st=!1;function fs(r){st=r}let N=null,vn=!1;function mn(r){N=r}let j=null;function Mn(r){j=r}let En=null;function Bl(r){N!==null&&(En??(En=new Set)).add(r)}let Oe=null,qe=0,an=null;function jc(r){an=r}let Il=1,bt=0,Ct=bt;function ps(r){Ct=r}function El(){return++Il}function ar(r){var e=r.f;if(e&me)return!0;if(e&ve&&(r.f&=~Mt),e&_n){for(var n=r.deps,t=n.length,i=0;i<t;i++){var a=n[i];if(ar(a)&&ll(a),a.wv>r.wv)return!0}e&hn&&we===null&&ue(r,ke)}return!1}function Ml(r,e,n=!0){var t=r.reactions;if(t!==null&&!(En!==null&&En.has(r)))for(var i=0;i<t.length;i++){var a=t[i];a.f&ve?Ml(a,e,!1):e===a&&(n?ue(a,me):a.f&ke&&ue(a,_n),uo(a))}}function Dl(r){var f;var e=Oe,n=qe,t=an,i=N,a=En,o=Ee,s=vn,l=Ct,u=r.f;Oe=null,qe=0,an=null,N=u&(pn|Wn)?null:r,En=null,di(r.ctx),vn=!1,Ct=++bt,r.ac!==null&&(rr(()=>{r.ac.abort(ir)}),r.ac=null);try{r.f|=Dr;var d=r.fn,h=d();r.f|=bi;var c=r.deps,p=I==null?void 0:I.is_fork;if(Oe!==null){var y;if(p||Ui(r,qe),c!==null&&qe>0)for(c.length=qe+Oe.length,y=0;y<Oe.length;y++)c[qe+y]=Oe[y];else r.deps=c=Oe;if(co()&&r.f&hn)for(y=qe;y<c.length;y++)((f=c[y]).reactions??(f.reactions=[])).push(r)}else!p&&c!==null&&qe<c.length&&(Ui(r,qe),c.length=qe);if(tl()&&an!==null&&!vn&&c!==null&&!(r.f&(ve|_n|me)))for(y=0;y<an.length;y++)Ml(an[y],r);if(i!==null&&i!==r){if(bt++,i.deps!==null)for(let b=0;b<n;b+=1)i.deps[b].rv=bt;if(e!==null)for(const b of e)b.rv=bt;an!==null&&(t===null?t=an:t.push(...an))}return r.f&rt&&(r.f^=rt),h}catch(b){return rl(b)}finally{r.f^=Dr,Oe=e,qe=n,an=t,N=i,En=a,di(o),vn=s,Ct=l}}function Lc(r,e){let n=e.reactions;if(n!==null){var t=Dd.call(n,r);if(t!==-1){var i=n.length-1;i===0?n=e.reactions=null:(n[t]=n[i],n.pop())}}if(n===null&&e.f&ve&&(Oe===null||!Er.call(Oe,e))){var a=e;a.f&hn&&(a.f^=hn,a.f&=~Mt),a.v!==be&&ao(a),a.ac!==null&&rr(()=>{a.ac.abort(ir),a.ac=null,ue(a,me)}),xc(a),Ui(a,0)}}function Ui(r,e){var n=r.deps;if(n!==null)for(var t=e;t<n.length;t++)Lc(r,n[t])}function hi(r){var e=r.f;if(!(e&fn)){ue(r,ke);var n=j,t=Sr;j=r,Sr=(e&(pn|Wn))===0;try{e&(kn|Zs)?Nc(r):fo(r),Tl(r);var i=Dl(r);r.teardown=typeof i=="function"?i:null,r.wv=Il;var a;qs&&uc&&r.f&me&&r.deps}finally{Sr=t,j=n}}}async function $c(){await Promise.resolve(),Sc()}function S(r){var e=r.f,n=(e&ve)!==0;if(N!==null&&!vn){var t=j!==null&&(j.f&fn)!==0;if(!t&&(En===null||!En.has(r))){var i=N.deps;if(N.f&Dr)r.rv<bt&&(r.rv=bt,Oe===null&&i!==null&&i[qe]===r?qe++:Oe===null?Oe=[r]:Oe.push(r));else{N.deps??(N.deps=[]),Er.call(N.deps,r)||N.deps.push(r);var a=r.reactions;a===null?r.reactions=[N]:Er.call(a,N)||a.push(N)}}}if(st&&In.has(r))return In.get(r);if(n){var o=r;if(st){var s=o.v;return(!(o.f&ke)&&o.reactions!==null||Ol(o))&&(s=so(o)),In.set(o,s),s}var l=(o.f&hn)===0&&!vn&&N!==null&&(Sr||(N.f&hn)!==0),u=(o.f&bi)===0;ar(o)&&(l&&(o.f|=hn),ll(o)),l&&!u&&(ul(o),Rl(o))}if(we!=null&&we.has(r))return we.get(r);if(r.f&rt)throw r.v;return r.v}function Rl(r){if(r.f|=hn,r.deps!==null)for(const e of r.deps)(e.reactions??(e.reactions=[])).push(r),e.f&ve&&!(e.f&hn)&&(ul(e),Rl(e))}function Ol(r){if(r.v===be)return!0;if(r.deps===null)return!1;for(const e of r.deps)if(In.has(e)||e.f&ve&&Ol(e))return!0;return!1}function Fl(r){var e=vn;try{return vn=!0,r()}finally{vn=e}}const Hc=["touchstart","touchmove"];function Uc(r){return Hc.includes(r)}const kt=Symbol("events"),Nl=new Set,Na=new Set;function Wc(r,e,n,t={}){function i(a){if(t.capture||ja.call(e,a),!a.cancelBubble)return rr(()=>n==null?void 0:n.call(this,a))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?Qn(()=>{e.addEventListener(r,i,t)}):e.addEventListener(r,i,t),i}function fa(r,e,n,t,i){var a={capture:t,passive:i},o=Wc(r,e,n,a);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&wl(()=>{e.removeEventListener(r,o,a)})}function ge(r,e,n){(e[kt]??(e[kt]={}))[r]=n}function Yc(r){for(var e=0;e<r.length;e++)Nl.add(r[e]);for(var n of Na)n(r)}let pa=null,ma=!1;function ja(r){var f,b;var e=this,n=e.ownerDocument,t=r.type,i=((f=r.composedPath)==null?void 0:f.call(r))||[],a=i[0]||r.target;pa=r,ma||(ma=!0,setTimeout(()=>{ma=!1,pa=null}));var o=0,s=pa===r&&r[kt];if(s){var l=i.indexOf(s);if(l!==-1&&(e===document||e===window)){r[kt]=e;return}var u=i.indexOf(e);if(u===-1)return;l<=u&&(o=l)}if(a=i[o]||r.target,a!==e){Rd(r,"currentTarget",{configurable:!0,get(){return a||n}});var d=N,h=j;mn(null),Mn(null);try{for(var c,p=[];a!==null&&a!==e;){try{var y=(b=a[kt])==null?void 0:b[t];y!=null&&(!a.disabled||r.target===a)&&y.call(a,r)}catch(w){c?p.push(w):c=w}if(r.cancelBubble)break;o++,a=o<i.length?i[o]:null}if(c){for(let w of p)queueMicrotask(()=>{throw w});throw c}}finally{r[kt]=e,delete r.currentTarget,mn(d),Mn(h)}}}var Ws;const ya=((Ws=globalThis==null?void 0:globalThis.window)==null?void 0:Ws.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:r=>r});function qc(r){return(ya==null?void 0:ya.createHTML(r))??r}function Gc(r){var e=_l("template");return e.innerHTML=qc(r.replaceAll("<!>","<!---->")),e.content}function La(r,e){var n=j;n.nodes===null&&(n.nodes={start:r,end:e,a:null,t:null})}function vi(r,e){var n=(e&ic)!==0,t,i=!r.startsWith("<!>");return()=>{t===void 0&&(t=Gc(i?r:"<!>"+r),t=Xt(t));var a=n||gl?document.importNode(t,!0):t.cloneNode(!0);return La(a,a),a}}function ft(r,e){r!==null&&r.before(e)}function K(r,e){var n=e==null?"":typeof e=="object"?`${e}`:e;n!==(r[Si]??(r[Si]=r.nodeValue))&&(r[Si]=n,r.nodeValue=`${n}`)}function Xc(r,e){return Vc(r,e)}const br=new Map;function Vc(r,{target:e,anchor:n,props:t={},events:i,context:a,intro:o=!0,transformError:s}){Ic();var l=void 0,u=Rc(()=>{var d=n??e.appendChild(At());pc(d,{pending:()=>{}},p=>{el({});var y=Ee;a&&(y.c=a),i&&(t.$$events=i),l=r(p,t)||{},nl()},s);var h=new Set,c=p=>{for(var y=0;y<p.length;y++){var f=p[y];if(!h.has(f)){h.add(f);var b=Uc(f);for(const g of[e,document]){var w=br.get(g);w===void 0&&(w=new Map,br.set(g,w));var m=w.get(f);m===void 0?(g.addEventListener(f,ja,{passive:b}),w.set(f,1)):w.set(f,m+1)}}}};return c(Jr(Nl)),Na.add(c),()=>{var b;for(var p of h)for(const w of[e,document]){var y=br.get(w),f=y.get(p);--f==0?(w.removeEventListener(p,ja),y.delete(p),y.size===0&&br.delete(w)):y.set(p,f)}Na.delete(c),d!==n&&((b=d.parentNode)==null||b.removeChild(d))}});return Zc.set(l,u),l}let Zc=new WeakMap;var bn,Tn,Xe,Tt,nr,tr,Kr;class Kc{constructor(e,n=!0){O(this,"anchor");R(this,bn,new Map);R(this,Tn,new Map);R(this,Xe,new Map);R(this,Tt,new Set);R(this,nr,!0);R(this,tr,e=>{if(_(this,bn).has(e)){var n=_(this,bn).get(e),t=_(this,Tn).get(n);if(t)Nr(t),_(this,Tt).delete(n);else{var i=_(this,Xe).get(n);i&&(Nr(i.effect),_(this,Tn).set(n,i.effect),_(this,Xe).delete(n),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),t=i.effect)}for(const[a,o]of _(this,bn)){if(_(this,bn).delete(a),a===e)break;const s=_(this,Xe).get(o);s&&(Ne(s.effect),_(this,Xe).delete(o))}for(const[a,o]of _(this,Tn)){if(a===n||_(this,Tt).has(a))continue;const s=()=>{if(Array.from(_(this,bn).values()).includes(a)){var u=document.createDocumentFragment();po(o,u),u.append(At()),_(this,Xe).set(a,{effect:o,fragment:u})}else Ne(o);_(this,Tt).delete(a),_(this,Tn).delete(a)};_(this,nr)||!t?(_(this,Tt).add(a),St(o,s,!1)):s()}}});R(this,Kr,e=>{_(this,bn).delete(e);const n=Array.from(_(this,bn).values());for(const[t,i]of _(this,Xe))n.includes(t)||(Ne(i.effect),_(this,Xe).delete(t))});this.anchor=e,M(this,nr,n)}ensure(e,n){var t=I,i=vl();if(n&&!_(this,Tn).has(e)&&!_(this,Xe).has(e))if(i){var a=document.createDocumentFragment(),o=At();a.append(o),_(this,Xe).set(e,{effect:un(()=>n(o)),fragment:a})}else _(this,Tn).set(e,un(()=>n(this.anchor)));if(_(this,bn).set(t,e),i){for(const[s,l]of _(this,Tn))s===e?t.unskip_effect(l):t.skip_effect(l);for(const[s,l]of _(this,Xe))s===e?t.unskip_effect(l.effect):t.skip_effect(l.effect);t.oncommit(_(this,tr)),t.ondiscard(_(this,Kr))}else _(this,tr).call(this,t)}}bn=new WeakMap,Tn=new WeakMap,Xe=new WeakMap,Tt=new WeakMap,nr=new WeakMap,tr=new WeakMap,Kr=new WeakMap;function ga(r,e,n=!1){var t=new Kc(r),i=n?ui:0;function a(o,s){t.ensure(o,s)}ho(()=>{var o=!1;e((s,l=0)=>{o=!0,a(l,s)}),o||a(-1,null)},i)}function Jc(r,e){return e}function Qc(r,e,n){for(var t=[],i=e.length,a,o=e.length,s=0;s<i;s++){let h=e[s];St(h,()=>{if(a){if(a.pending.delete(h),a.done.add(h),a.pending.size===0){var c=r.outrogroups;$a(r,Jr(a.done)),c.delete(a),c.size===0&&(r.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=t.length===0&&n!==null&&r.pending.size===0;if(l){var u=n,d=u.parentNode;Ec(d),d.append(u),r.items.clear()}$a(r,e,!l)}else a={pending:new Set(e),done:new Set},(r.outrogroups??(r.outrogroups=new Set)).add(a)}function $a(r,e,n=!0){var t;if(r.pending.size>0){t=new Set;for(const o of r.pending.values())for(const s of o)t.add(r.items.get(s).e)}for(var i=0;i<e.length;i++){var a=e[i];if(t!=null&&t.has(a)){a.f|=Un;const o=document.createDocumentFragment();po(a,o)}else Ne(e[i],n)}}var ms;function eh(r,e,n,t,i,a=null){var o=r,s=new Map;{var l=r;o=l.appendChild(At())}var u=null,d=wc(()=>{var m=n();return Gs(m)?m:m==null?[]:Jr(m)}),h,c=new Map,p=!0;function y(m){w.effect.f&fn||(w.pending.delete(m),w.fallback=u,nh(w,h,o,e,t),u!==null&&(h.length===0?u.f&Un?(u.f^=Un,Ii(u,null,o)):Nr(u):St(u,()=>{u=null})))}function f(m){w.pending.delete(m)}var b=ho(()=>{h=S(d);for(var m=h.length,g=new Set,v=I,k=vl(),x=0;x<m;x+=1){var T=h[x],A=t(T,x),z=p?null:s.get(A);z?(z.v&&ci(z.v,T),z.i&&ci(z.i,x),k&&v.unskip_effect(z.e)):(z=th(s,p?o:ms??(ms=At()),T,A,x,i,e,n),p||(z.e.f|=Un),s.set(A,z)),g.add(A)}if(m===0&&a&&!u&&(p?u=un(()=>a(o)):(u=un(()=>a(ms??(ms=At()))),u.f|=Un)),m>g.size&&Yd(),!p)if(c.set(v,g),k){for(const[C,E]of s)g.has(C)||v.skip_effect(E.e);v.oncommit(y),v.ondiscard(f)}else y(v);S(d)}),w={effect:b,items:s,pending:c,outrogroups:null,fallback:u};p=!1}function xi(r){for(;r!==null&&!(r.f&pn);)r=r.next;return r}function nh(r,e,n,t,i){var A;var a=e.length,o=r.items,s=xi(r.effect.first),l,u=null,d=[],h=[],c,p,y,f;for(f=0;f<a;f+=1){if(c=e[f],p=i(c,f),y=o.get(p).e,r.outrogroups!==null)for(const z of r.outrogroups)z.pending.delete(y),z.done.delete(y);if(y.f&Ie&&Nr(y),y.f&Un)if(y.f^=Un,y===s)Ii(y,null,n);else{var b=u?u.next:s;y===r.effect.last&&(r.effect.last=y.prev),y.prev&&(y.prev.next=y.next),y.next&&(y.next.prev=y.prev),Zn(r,u,y),Zn(r,y,b),Ii(y,b,n),u=y,d=[],h=[],s=xi(u.next);continue}if(y!==s){if(l!==void 0&&l.has(y)){if(d.length<h.length){var w=h[0],m;u=w.prev;var g=d[0],v=d[d.length-1];for(m=0;m<d.length;m+=1)Ii(d[m],w,n);for(m=0;m<h.length;m+=1)l.delete(h[m]);Zn(r,g.prev,v.next),Zn(r,u,g),Zn(r,v,w),s=w,u=v,f-=1,d=[],h=[]}else l.delete(y),Ii(y,s,n),Zn(r,y.prev,y.next),Zn(r,y,u===null?r.effect.first:u.next),Zn(r,u,y),u=y;continue}for(d=[],h=[];s!==null&&s!==y;)(l??(l=new Set)).add(s),h.push(s),s=xi(s.next);if(s===null)continue}y.f&Un||d.push(y),u=y,s=xi(y.next)}if(r.outrogroups!==null){for(const z of r.outrogroups)z.pending.size===0&&($a(r,Jr(z.done)),(A=r.outrogroups)==null||A.delete(z));r.outrogroups.size===0&&(r.outrogroups=null)}if(s!==null||l!==void 0){var k=[];if(l!==void 0)for(y of l)y.f&Ie||k.push(y);for(;s!==null;)!(s.f&Ie)&&s!==r.fallback&&k.push(s),s=xi(s.next);var x=k.length;if(x>0){var T=a===0?n:null;Qc(r,k,T)}}}function th(r,e,n,t,i,a,o,s){var l=o&ec?o&tc?Rt(n):Pc(n,!1,!1):null,u=o&nc?Rt(i):null;return{v:l,i:u,e:un(()=>(a(e,l??n,u??i,s),()=>{r.delete(t)}))}}function Ii(r,e,n){if(r.nodes)for(var t=r.nodes.start,i=r.nodes.end,a=e&&!(e.f&Un)?e.nodes.start:n;t!==null;){var o=ea(t);if(a.before(t),t===i)return;t=o}}function Zn(r,e,n){e===null?r.effect.first=n:e.next=n,n===null?r.effect.last=e:n.prev=e}function ih(r,e,n=!1,t=!1,i=!1,a=!1){var o=r,s="";if(n)var l=r;qt(()=>{var u=j;if(s!==(s=e()??"")){if(n){u.nodes=null,l.innerHTML=s,s!==""&&La(Xt(l),l.lastChild);return}if(u.nodes!==null&&(Al(u.nodes.start,u.nodes.end),u.nodes=null),s!==""){var d=t?rc:i?ac:void 0,h=_l(t?"svg":i?"math":"template",d);h.innerHTML=s;var c=t||i?h:h.content;if(La(Xt(c),c.lastChild),t||i)for(;Xt(c);)o.before(Xt(c));else o.before(c)}}})}const ys=[...` 	
\r\f \v\uFEFF`];function rh(r,e,n){var t=r==null?"":""+r;if(e&&(t=t?t+" "+e:e),n){for(var i of Object.keys(n))if(n[i])t=t?t+" "+i:i;else if(t.length)for(var a=i.length,o=0;(o=t.indexOf(i,o))>=0;){var s=o+a;(o===0||ys.includes(t[o-1]))&&(s===t.length||ys.includes(t[s]))?t=(o===0?"":t.substring(0,o))+t.substring(s+1):o=s}}return t===""?null:t}function ah(r,e){return r==null?null:String(r)}function Pe(r,e,n,t,i,a){var o=r[Pa];if(o!==n||o===void 0){var s=rh(n,t,a);s==null?r.removeAttribute("class"):r.className=s,r[Pa]=n}else if(a&&i!==a)for(var l in a){var u=!!a[l];(i==null||u!==!!i[l])&&r.classList.toggle(l,u)}return a}function oh(r,e,n,t){var i=r[Ba];if(i!==e){var a=ah(e);a==null?r.removeAttribute("style"):r.style.cssText=a,r[Ba]=e}return t}const sh=Symbol("is custom element"),lh=Symbol("is html");function uh(r,e){var n=jl(r);n.checked!==(n.checked=e??void 0)&&(r.checked=e)}function gs(r,e,n,t){var i=jl(r);i[e]!==(i[e]=n)&&(e==="loading"&&(r[Ud]=n),n==null?r.removeAttribute(e):typeof n!="string"&&dh(r).includes(e)?r[e]=n:r.setAttribute(e,n))}function jl(r){return r[zr]??(r[zr]={[sh]:r.nodeName.includes("-"),[lh]:r.namespaceURI===Ks})}var bs=new Map;function dh(r){var e=r.getAttribute("is")||r.nodeName,n=bs.get(e);if(n)return n;bs.set(e,n=[]);for(var t,i=r,a=Element.prototype;a!==i;){t=Od(i);for(var o in t)t[o].set&&o!=="innerHTML"&&o!=="textContent"&&o!=="innerText"&&n.push(o);i=Xs(i)}return n}function ba(r,e){return r===e||(r==null?void 0:r[wr])===e}function ch(r={},e,n,t){var i=Ee.r,a=j;return Oc(()=>{var o,s;return xl(()=>{o=s,s=[],Fl(()=>{ba(n(...s),r)||(e(r,...s),o&&ba(n(...o),r)&&e(null,...o))})}),()=>{let l=a;for(;l!==i&&l.parent!==null&&l.parent.f&Ca;)l=l.parent;const u=()=>{s&&ba(n(...s),r)&&e(null,...s)},d=l.teardown;l.teardown=()=>{u(),d==null||d()}}}),r}const hh="5";var Ys;typeof window<"u"&&((Ys=window.__svelte??(window.__svelte={})).v??(Ys.v=new Set)).add(hh);function mo(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Nt=mo();function Ll(r){Nt=r}const $l=/[&<>"']/,fh=new RegExp($l.source,"g"),Hl=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,ph=new RegExp(Hl.source,"g"),mh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ks=r=>mh[r];function Ve(r,e){if(e){if($l.test(r))return r.replace(fh,ks)}else if(Hl.test(r))return r.replace(ph,ks);return r}const yh=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function gh(r){return r.replace(yh,(e,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const bh=/(^|[^\[])\^/g;function V(r,e){let n=typeof r=="string"?r:r.source;e=e||"";const t={replace:(i,a)=>{let o=typeof a=="string"?a:a.source;return o=o.replace(bh,"$1"),n=n.replace(i,o),t},getRegex:()=>new RegExp(n,e)};return t}function vs(r){try{r=encodeURI(r).replace(/%25/g,"%")}catch{return null}return r}const Ni={exec:()=>null};function _s(r,e){const n=r.replace(/\|/g,(a,o,s)=>{let l=!1,u=o;for(;--u>=0&&s[u]==="\\";)l=!l;return l?"|":" |"}),t=n.split(/ \|/);let i=0;if(t[0].trim()||t.shift(),t.length>0&&!t[t.length-1].trim()&&t.pop(),e)if(t.length>e)t.splice(e);else for(;t.length<e;)t.push("");for(;i<t.length;i++)t[i]=t[i].trim().replace(/\\\|/g,"|");return t}function kr(r,e,n){const t=r.length;if(t===0)return"";let i=0;for(;i<t&&r.charAt(t-i-1)===e;)i++;return r.slice(0,t-i)}function kh(r,e){if(r.indexOf(e[1])===-1)return-1;let n=0;for(let t=0;t<r.length;t++)if(r[t]==="\\")t++;else if(r[t]===e[0])n++;else if(r[t]===e[1]&&(n--,n<0))return t;return-1}function ws(r,e,n,t){const i=e.href,a=e.title?Ve(e.title):null,o=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){t.state.inLink=!0;const s={type:"link",raw:n,href:i,title:a,text:o,tokens:t.inlineTokens(o)};return t.state.inLink=!1,s}return{type:"image",raw:n,href:i,title:a,text:Ve(o)}}function vh(r,e){const n=r.match(/^(\s+)(?:```)/);if(n===null)return e;const t=n[1];return e.split(`
`).map(i=>{const a=i.match(/^\s+/);if(a===null)return i;const[o]=a;return o.length>=t.length?i.slice(t.length):i}).join(`
`)}class jr{constructor(e){O(this,"options");O(this,"rules");O(this,"lexer");this.options=e||Nt}space(e){const n=this.rules.block.newline.exec(e);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(e){const n=this.rules.block.code.exec(e);if(n){const t=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?t:kr(t,`
`)}}}fences(e){const n=this.rules.block.fences.exec(e);if(n){const t=n[0],i=vh(t,n[3]||"");return{type:"code",raw:t,lang:n[2]?n[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):n[2],text:i}}}heading(e){const n=this.rules.block.heading.exec(e);if(n){let t=n[2].trim();if(/#$/.test(t)){const i=kr(t,"#");(this.options.pedantic||!i||/ $/.test(i))&&(t=i.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(e){const n=this.rules.block.hr.exec(e);if(n)return{type:"hr",raw:n[0]}}blockquote(e){const n=this.rules.block.blockquote.exec(e);if(n){let t=n[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);t=kr(t.replace(/^ *>[ \t]?/gm,""),`
`);const i=this.lexer.state.top;this.lexer.state.top=!0;const a=this.lexer.blockTokens(t);return this.lexer.state.top=i,{type:"blockquote",raw:n[0],tokens:a,text:t}}}list(e){let n=this.rules.block.list.exec(e);if(n){let t=n[1].trim();const i=t.length>1,a={type:"list",raw:"",ordered:i,start:i?+t.slice(0,-1):"",loose:!1,items:[]};t=i?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=i?t:"[*+-]");const o=new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`);let s="",l="",u=!1;for(;e;){let d=!1;if(!(n=o.exec(e))||this.rules.block.hr.test(e))break;s=n[0],e=e.substring(s.length);let h=n[2].split(`
`,1)[0].replace(/^\t+/,w=>" ".repeat(3*w.length)),c=e.split(`
`,1)[0],p=0;this.options.pedantic?(p=2,l=h.trimStart()):(p=n[2].search(/[^ ]/),p=p>4?1:p,l=h.slice(p),p+=n[1].length);let y=!1;if(!h&&/^ *$/.test(c)&&(s+=c+`
`,e=e.substring(c.length+1),d=!0),!d){const w=new RegExp(`^ {0,${Math.min(3,p-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),m=new RegExp(`^ {0,${Math.min(3,p-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),g=new RegExp(`^ {0,${Math.min(3,p-1)}}(?:\`\`\`|~~~)`),v=new RegExp(`^ {0,${Math.min(3,p-1)}}#`);for(;e;){const k=e.split(`
`,1)[0];if(c=k,this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),g.test(c)||v.test(c)||w.test(c)||m.test(e))break;if(c.search(/[^ ]/)>=p||!c.trim())l+=`
`+c.slice(p);else{if(y||h.search(/[^ ]/)>=4||g.test(h)||v.test(h)||m.test(h))break;l+=`
`+c}!y&&!c.trim()&&(y=!0),s+=k+`
`,e=e.substring(k.length+1),h=c.slice(p)}}a.loose||(u?a.loose=!0:/\n *\n *$/.test(s)&&(u=!0));let f=null,b;this.options.gfm&&(f=/^\[[ xX]\] /.exec(l),f&&(b=f[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),a.items.push({type:"list_item",raw:s,task:!!f,checked:b,loose:!1,text:l,tokens:[]}),a.raw+=s}a.items[a.items.length-1].raw=s.trimEnd(),a.items[a.items.length-1].text=l.trimEnd(),a.raw=a.raw.trimEnd();for(let d=0;d<a.items.length;d++)if(this.lexer.state.top=!1,a.items[d].tokens=this.lexer.blockTokens(a.items[d].text,[]),!a.loose){const h=a.items[d].tokens.filter(p=>p.type==="space"),c=h.length>0&&h.some(p=>/\n.*\n/.test(p.raw));a.loose=c}if(a.loose)for(let d=0;d<a.items.length;d++)a.items[d].loose=!0;return a}}html(e){const n=this.rules.block.html.exec(e);if(n)return{type:"html",block:!0,raw:n[0],pre:n[1]==="pre"||n[1]==="script"||n[1]==="style",text:n[0]}}def(e){const n=this.rules.block.def.exec(e);if(n){const t=n[1].toLowerCase().replace(/\s+/g," "),i=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):n[3];return{type:"def",tag:t,raw:n[0],href:i,title:a}}}table(e){const n=this.rules.block.table.exec(e);if(!n||!/[:|]/.test(n[2]))return;const t=_s(n[1]),i=n[2].replace(/^\||\| *$/g,"").split("|"),a=n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[],o={type:"table",raw:n[0],header:[],align:[],rows:[]};if(t.length===i.length){for(const s of i)/^ *-+: *$/.test(s)?o.align.push("right"):/^ *:-+: *$/.test(s)?o.align.push("center"):/^ *:-+ *$/.test(s)?o.align.push("left"):o.align.push(null);for(const s of t)o.header.push({text:s,tokens:this.lexer.inline(s)});for(const s of a)o.rows.push(_s(s,o.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return o}}lheading(e){const n=this.rules.block.lheading.exec(e);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(e){const n=this.rules.block.paragraph.exec(e);if(n){const t=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:t,tokens:this.lexer.inline(t)}}}text(e){const n=this.rules.block.text.exec(e);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(e){const n=this.rules.inline.escape.exec(e);if(n)return{type:"escape",raw:n[0],text:Ve(n[1])}}tag(e){const n=this.rules.inline.tag.exec(e);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:n[0]}}link(e){const n=this.rules.inline.link.exec(e);if(n){const t=n[2].trim();if(!this.options.pedantic&&/^</.test(t)){if(!/>$/.test(t))return;const o=kr(t.slice(0,-1),"\\");if((t.length-o.length)%2===0)return}else{const o=kh(n[2],"()");if(o>-1){const l=(n[0].indexOf("!")===0?5:4)+n[1].length+o;n[2]=n[2].substring(0,o),n[0]=n[0].substring(0,l).trim(),n[3]=""}}let i=n[2],a="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);o&&(i=o[1],a=o[3])}else a=n[3]?n[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(t)?i=i.slice(1):i=i.slice(1,-1)),ws(n,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer)}}reflink(e,n){let t;if((t=this.rules.inline.reflink.exec(e))||(t=this.rules.inline.nolink.exec(e))){const i=(t[2]||t[1]).replace(/\s+/g," "),a=n[i.toLowerCase()];if(!a){const o=t[0].charAt(0);return{type:"text",raw:o,text:o}}return ws(t,a,t[0],this.lexer)}}emStrong(e,n,t=""){let i=this.rules.inline.emStrongLDelim.exec(e);if(!i||i[3]&&t.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!t||this.rules.inline.punctuation.exec(t)){const o=[...i[0]].length-1;let s,l,u=o,d=0;const h=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,n=n.slice(-1*e.length+o);(i=h.exec(n))!=null;){if(s=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!s)continue;if(l=[...s].length,i[3]||i[4]){u+=l;continue}else if((i[5]||i[6])&&o%3&&!((o+l)%3)){d+=l;continue}if(u-=l,u>0)continue;l=Math.min(l,l+u+d);const c=[...i[0]][0].length,p=e.slice(0,o+i.index+c+l);if(Math.min(o,l)%2){const f=p.slice(1,-1);return{type:"em",raw:p,text:f,tokens:this.lexer.inlineTokens(f)}}const y=p.slice(2,-2);return{type:"strong",raw:p,text:y,tokens:this.lexer.inlineTokens(y)}}}}codespan(e){const n=this.rules.inline.code.exec(e);if(n){let t=n[2].replace(/\n/g," ");const i=/[^ ]/.test(t),a=/^ /.test(t)&&/ $/.test(t);return i&&a&&(t=t.substring(1,t.length-1)),t=Ve(t,!0),{type:"codespan",raw:n[0],text:t}}}br(e){const n=this.rules.inline.br.exec(e);if(n)return{type:"br",raw:n[0]}}del(e){const n=this.rules.inline.del.exec(e);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(e){const n=this.rules.inline.autolink.exec(e);if(n){let t,i;return n[2]==="@"?(t=Ve(n[1]),i="mailto:"+t):(t=Ve(n[1]),i=t),{type:"link",raw:n[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}url(e){var t;let n;if(n=this.rules.inline.url.exec(e)){let i,a;if(n[2]==="@")i=Ve(n[0]),a="mailto:"+i;else{let o;do o=n[0],n[0]=((t=this.rules.inline._backpedal.exec(n[0]))==null?void 0:t[0])??"";while(o!==n[0]);i=Ve(n[0]),n[1]==="www."?a="http://"+n[0]:a=n[0]}return{type:"link",raw:n[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const n=this.rules.inline.text.exec(e);if(n){let t;return this.lexer.state.inRawBlock?t=n[0]:t=Ve(n[0]),{type:"text",raw:n[0],text:t}}}}const _h=/^(?: *(?:\n|$))+/,wh=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,zh=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,or=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,xh=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ul=/(?:[*+-]|\d{1,9}[.)])/,Wl=V(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,Ul).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),yo=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Th=/^[^\n]+/,go=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Ah=V(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",go).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Sh=V(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Ul).getRegex(),na="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",bo=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ch=V("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",bo).replace("tag",na).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Yl=V(yo).replace("hr",or).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",na).getRegex(),Ph=V(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Yl).getRegex(),ko={blockquote:Ph,code:wh,def:Ah,fences:zh,heading:xh,hr:or,html:Ch,lheading:Wl,list:Sh,newline:_h,paragraph:Yl,table:Ni,text:Th},zs=V("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",or).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",na).getRegex(),Bh={...ko,table:zs,paragraph:V(yo).replace("hr",or).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",zs).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",na).getRegex()},Ih={...ko,html:V(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",bo).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ni,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:V(yo).replace("hr",or).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Wl).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},ql=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Eh=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Gl=/^( {2,}|\\)\n(?!\s*$)/,Mh=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,sr="\\p{P}\\p{S}",Dh=V(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,sr).getRegex(),Rh=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,Oh=V(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,sr).getRegex(),Fh=V("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,sr).getRegex(),Nh=V("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,sr).getRegex(),jh=V(/\\([punct])/,"gu").replace(/punct/g,sr).getRegex(),Lh=V(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),$h=V(bo).replace("(?:-->|$)","-->").getRegex(),Hh=V("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",$h).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Lr=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Uh=V(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Lr).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Xl=V(/^!?\[(label)\]\[(ref)\]/).replace("label",Lr).replace("ref",go).getRegex(),Vl=V(/^!?\[(ref)\](?:\[\])?/).replace("ref",go).getRegex(),Wh=V("reflink|nolink(?!\\()","g").replace("reflink",Xl).replace("nolink",Vl).getRegex(),vo={_backpedal:Ni,anyPunctuation:jh,autolink:Lh,blockSkip:Rh,br:Gl,code:Eh,del:Ni,emStrongLDelim:Oh,emStrongRDelimAst:Fh,emStrongRDelimUnd:Nh,escape:ql,link:Uh,nolink:Vl,punctuation:Dh,reflink:Xl,reflinkSearch:Wh,tag:Hh,text:Mh,url:Ni},Yh={...vo,link:V(/^!?\[(label)\]\((.*?)\)/).replace("label",Lr).getRegex(),reflink:V(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Lr).getRegex()},Ha={...vo,escape:V(ql).replace("])","~|])").getRegex(),url:V(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},qh={...Ha,br:V(Gl).replace("{2,}","*").getRegex(),text:V(Ha.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},vr={normal:ko,gfm:Bh,pedantic:Ih},Ti={normal:vo,gfm:Ha,breaks:qh,pedantic:Yh};class Cn{constructor(e){O(this,"tokens");O(this,"options");O(this,"state");O(this,"tokenizer");O(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Nt,this.options.tokenizer=this.options.tokenizer||new jr,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:vr.normal,inline:Ti.normal};this.options.pedantic?(n.block=vr.pedantic,n.inline=Ti.pedantic):this.options.gfm&&(n.block=vr.gfm,this.options.breaks?n.inline=Ti.breaks:n.inline=Ti.gfm),this.tokenizer.rules=n}static get rules(){return{block:vr,inline:Ti}}static lex(e,n){return new Cn(n).lex(e)}static lexInline(e,n){return new Cn(n).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const t=this.inlineQueue[n];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(s,l,u)=>l+"    ".repeat(u.length));let t,i,a,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(s=>(t=s.call({lexer:this},e,n))?(e=e.substring(t.raw.length),n.push(t),!0):!1))){if(t=this.tokenizer.space(e)){e=e.substring(t.raw.length),t.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(t);continue}if(t=this.tokenizer.code(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(t);continue}if(t=this.tokenizer.fences(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.heading(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.hr(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.blockquote(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.list(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.html(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.def(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+t.raw,i.text+=`
`+t.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[t.tag]||(this.tokens.links[t.tag]={href:t.href,title:t.title});continue}if(t=this.tokenizer.table(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.lheading(e)){e=e.substring(t.raw.length),n.push(t);continue}if(a=e,this.options.extensions&&this.options.extensions.startBlock){let s=1/0;const l=e.slice(1);let u;this.options.extensions.startBlock.forEach(d=>{u=d.call({lexer:this},l),typeof u=="number"&&u>=0&&(s=Math.min(s,u))}),s<1/0&&s>=0&&(a=e.substring(0,s+1))}if(this.state.top&&(t=this.tokenizer.paragraph(a))){i=n[n.length-1],o&&i.type==="paragraph"?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(t),o=a.length!==e.length,e=e.substring(t.raw.length);continue}if(t=this.tokenizer.text(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&i.type==="text"?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):n.push(t);continue}if(e){const s="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(s);break}else throw new Error(s)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){let t,i,a,o=e,s,l,u;if(this.tokens.links){const d=Object.keys(this.tokens.links);if(d.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)d.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,s.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(u=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(d=>(t=d.call({lexer:this},e,n))?(e=e.substring(t.raw.length),n.push(t),!0):!1))){if(t=this.tokenizer.escape(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.tag(e)){e=e.substring(t.raw.length),i=n[n.length-1],i&&t.type==="text"&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):n.push(t);continue}if(t=this.tokenizer.link(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(t.raw.length),i=n[n.length-1],i&&t.type==="text"&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):n.push(t);continue}if(t=this.tokenizer.emStrong(e,o,u)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.codespan(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.br(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.del(e)){e=e.substring(t.raw.length),n.push(t);continue}if(t=this.tokenizer.autolink(e)){e=e.substring(t.raw.length),n.push(t);continue}if(!this.state.inLink&&(t=this.tokenizer.url(e))){e=e.substring(t.raw.length),n.push(t);continue}if(a=e,this.options.extensions&&this.options.extensions.startInline){let d=1/0;const h=e.slice(1);let c;this.options.extensions.startInline.forEach(p=>{c=p.call({lexer:this},h),typeof c=="number"&&c>=0&&(d=Math.min(d,c))}),d<1/0&&d>=0&&(a=e.substring(0,d+1))}if(t=this.tokenizer.inlineText(a)){e=e.substring(t.raw.length),t.raw.slice(-1)!=="_"&&(u=t.raw.slice(-1)),l=!0,i=n[n.length-1],i&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):n.push(t);continue}if(e){const d="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return n}}class $r{constructor(e){O(this,"options");this.options=e||Nt}code(e,n,t){var a;const i=(a=(n||"").match(/^\S*/))==null?void 0:a[0];return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="language-'+Ve(i)+'">'+(t?e:Ve(e,!0))+`</code></pre>
`:"<pre><code>"+(t?e:Ve(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,n){return e}heading(e,n,t){return`<h${n}>${e}</h${n}>
`}hr(){return`<hr>
`}list(e,n,t){const i=n?"ol":"ul",a=n&&t!==1?' start="'+t+'"':"";return"<"+i+a+`>
`+e+"</"+i+`>
`}listitem(e,n,t){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){return`<p>${e}</p>
`}table(e,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+n+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,n){const t=n.header?"th":"td";return(n.align?`<${t} align="${n.align}">`:`<${t}>`)+e+`</${t}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,n,t){const i=vs(e);if(i===null)return t;e=i;let a='<a href="'+e+'"';return n&&(a+=' title="'+n+'"'),a+=">"+t+"</a>",a}image(e,n,t){const i=vs(e);if(i===null)return t;e=i;let a=`<img src="${e}" alt="${t}"`;return n&&(a+=` title="${n}"`),a+=">",a}text(e){return e}}class _o{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,n,t){return""+t}image(e,n,t){return""+t}br(){return""}}class Pn{constructor(e){O(this,"options");O(this,"renderer");O(this,"textRenderer");this.options=e||Nt,this.options.renderer=this.options.renderer||new $r,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new _o}static parse(e,n){return new Pn(n).parse(e)}static parseInline(e,n){return new Pn(n).parseInline(e)}parse(e,n=!0){let t="";for(let i=0;i<e.length;i++){const a=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const o=a,s=this.options.extensions.renderers[o.type].call({parser:this},o);if(s!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(o.type)){t+=s||"";continue}}switch(a.type){case"space":continue;case"hr":{t+=this.renderer.hr();continue}case"heading":{const o=a;t+=this.renderer.heading(this.parseInline(o.tokens),o.depth,gh(this.parseInline(o.tokens,this.textRenderer)));continue}case"code":{const o=a;t+=this.renderer.code(o.text,o.lang,!!o.escaped);continue}case"table":{const o=a;let s="",l="";for(let d=0;d<o.header.length;d++)l+=this.renderer.tablecell(this.parseInline(o.header[d].tokens),{header:!0,align:o.align[d]});s+=this.renderer.tablerow(l);let u="";for(let d=0;d<o.rows.length;d++){const h=o.rows[d];l="";for(let c=0;c<h.length;c++)l+=this.renderer.tablecell(this.parseInline(h[c].tokens),{header:!1,align:o.align[c]});u+=this.renderer.tablerow(l)}t+=this.renderer.table(s,u);continue}case"blockquote":{const o=a,s=this.parse(o.tokens);t+=this.renderer.blockquote(s);continue}case"list":{const o=a,s=o.ordered,l=o.start,u=o.loose;let d="";for(let h=0;h<o.items.length;h++){const c=o.items[h],p=c.checked,y=c.task;let f="";if(c.task){const b=this.renderer.checkbox(!!p);u?c.tokens.length>0&&c.tokens[0].type==="paragraph"?(c.tokens[0].text=b+" "+c.tokens[0].text,c.tokens[0].tokens&&c.tokens[0].tokens.length>0&&c.tokens[0].tokens[0].type==="text"&&(c.tokens[0].tokens[0].text=b+" "+c.tokens[0].tokens[0].text)):c.tokens.unshift({type:"text",text:b+" "}):f+=b+" "}f+=this.parse(c.tokens,u),d+=this.renderer.listitem(f,y,!!p)}t+=this.renderer.list(d,s,l);continue}case"html":{const o=a;t+=this.renderer.html(o.text,o.block);continue}case"paragraph":{const o=a;t+=this.renderer.paragraph(this.parseInline(o.tokens));continue}case"text":{let o=a,s=o.tokens?this.parseInline(o.tokens):o.text;for(;i+1<e.length&&e[i+1].type==="text";)o=e[++i],s+=`
`+(o.tokens?this.parseInline(o.tokens):o.text);t+=n?this.renderer.paragraph(s):s;continue}default:{const o='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return t}parseInline(e,n){n=n||this.renderer;let t="";for(let i=0;i<e.length;i++){const a=e[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]){const o=this.options.extensions.renderers[a.type].call({parser:this},a);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){t+=o||"";continue}}switch(a.type){case"escape":{const o=a;t+=n.text(o.text);break}case"html":{const o=a;t+=n.html(o.text);break}case"link":{const o=a;t+=n.link(o.href,o.title,this.parseInline(o.tokens,n));break}case"image":{const o=a;t+=n.image(o.href,o.title,o.text);break}case"strong":{const o=a;t+=n.strong(this.parseInline(o.tokens,n));break}case"em":{const o=a;t+=n.em(this.parseInline(o.tokens,n));break}case"codespan":{const o=a;t+=n.codespan(o.text);break}case"br":{t+=n.br();break}case"del":{const o=a;t+=n.del(this.parseInline(o.tokens,n));break}case"text":{const o=a;t+=n.text(o.text);break}default:{const o='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return t}}class ji{constructor(e){O(this,"options");this.options=e||Nt}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}O(ji,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var Ft,Ua,Kl;class Zl{constructor(...e){R(this,Ft);O(this,"defaults",mo());O(this,"options",this.setOptions);O(this,"parse",F(this,Ft,Ua).call(this,Cn.lex,Pn.parse));O(this,"parseInline",F(this,Ft,Ua).call(this,Cn.lexInline,Pn.parseInline));O(this,"Parser",Pn);O(this,"Renderer",$r);O(this,"TextRenderer",_o);O(this,"Lexer",Cn);O(this,"Tokenizer",jr);O(this,"Hooks",ji);this.use(...e)}walkTokens(e,n){var i,a;let t=[];for(const o of e)switch(t=t.concat(n.call(this,o)),o.type){case"table":{const s=o;for(const l of s.header)t=t.concat(this.walkTokens(l.tokens,n));for(const l of s.rows)for(const u of l)t=t.concat(this.walkTokens(u.tokens,n));break}case"list":{const s=o;t=t.concat(this.walkTokens(s.items,n));break}default:{const s=o;(a=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&a[s.type]?this.defaults.extensions.childTokens[s.type].forEach(l=>{const u=s[l].flat(1/0);t=t.concat(this.walkTokens(u,n))}):s.tokens&&(t=t.concat(this.walkTokens(s.tokens,n)))}}return t}use(...e){const n=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(t=>{const i={...t};if(i.async=this.defaults.async||i.async||!1,t.extensions&&(t.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){const o=n.renderers[a.name];o?n.renderers[a.name]=function(...s){let l=a.renderer.apply(this,s);return l===!1&&(l=o.apply(this,s)),l}:n.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=n[a.level];o?o.unshift(a.tokenizer):n[a.level]=[a.tokenizer],a.start&&(a.level==="block"?n.startBlock?n.startBlock.push(a.start):n.startBlock=[a.start]:a.level==="inline"&&(n.startInline?n.startInline.push(a.start):n.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(n.childTokens[a.name]=a.childTokens)}),i.extensions=n),t.renderer){const a=this.defaults.renderer||new $r(this.defaults);for(const o in t.renderer){if(!(o in a))throw new Error(`renderer '${o}' does not exist`);if(o==="options")continue;const s=o,l=t.renderer[s],u=a[s];a[s]=(...d)=>{let h=l.apply(a,d);return h===!1&&(h=u.apply(a,d)),h||""}}i.renderer=a}if(t.tokenizer){const a=this.defaults.tokenizer||new jr(this.defaults);for(const o in t.tokenizer){if(!(o in a))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const s=o,l=t.tokenizer[s],u=a[s];a[s]=(...d)=>{let h=l.apply(a,d);return h===!1&&(h=u.apply(a,d)),h}}i.tokenizer=a}if(t.hooks){const a=this.defaults.hooks||new ji;for(const o in t.hooks){if(!(o in a))throw new Error(`hook '${o}' does not exist`);if(o==="options")continue;const s=o,l=t.hooks[s],u=a[s];ji.passThroughHooks.has(o)?a[s]=d=>{if(this.defaults.async)return Promise.resolve(l.call(a,d)).then(c=>u.call(a,c));const h=l.call(a,d);return u.call(a,h)}:a[s]=(...d)=>{let h=l.apply(a,d);return h===!1&&(h=u.apply(a,d)),h}}i.hooks=a}if(t.walkTokens){const a=this.defaults.walkTokens,o=t.walkTokens;i.walkTokens=function(s){let l=[];return l.push(o.call(this,s)),a&&(l=l.concat(a.call(this,s))),l}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,n){return Cn.lex(e,n??this.defaults)}parser(e,n){return Pn.parse(e,n??this.defaults)}}Ft=new WeakSet,Ua=function(e,n){return(t,i)=>{const a={...i},o={...this.defaults,...a};this.defaults.async===!0&&a.async===!1&&(o.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),o.async=!0);const s=F(this,Ft,Kl).call(this,!!o.silent,!!o.async);if(typeof t>"u"||t===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(o.hooks&&(o.hooks.options=o),o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(t):t).then(l=>e(l,o)).then(l=>o.hooks?o.hooks.processAllTokens(l):l).then(l=>o.walkTokens?Promise.all(this.walkTokens(l,o.walkTokens)).then(()=>l):l).then(l=>n(l,o)).then(l=>o.hooks?o.hooks.postprocess(l):l).catch(s);try{o.hooks&&(t=o.hooks.preprocess(t));let l=e(t,o);o.hooks&&(l=o.hooks.processAllTokens(l)),o.walkTokens&&this.walkTokens(l,o.walkTokens);let u=n(l,o);return o.hooks&&(u=o.hooks.postprocess(u)),u}catch(l){return s(l)}}},Kl=function(e,n){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const i="<p>An error occurred:</p><pre>"+Ve(t.message+"",!0)+"</pre>";return n?Promise.resolve(i):i}if(n)return Promise.reject(t);throw t}};const Ot=new Zl;function X(r,e){return Ot.parse(r,e)}X.options=X.setOptions=function(r){return Ot.setOptions(r),X.defaults=Ot.defaults,Ll(X.defaults),X};X.getDefaults=mo;X.defaults=Nt;X.use=function(...r){return Ot.use(...r),X.defaults=Ot.defaults,Ll(X.defaults),X};X.walkTokens=function(r,e){return Ot.walkTokens(r,e)};X.parseInline=Ot.parseInline;X.Parser=Pn;X.parser=Pn.parse;X.Renderer=$r;X.TextRenderer=_o;X.Lexer=Cn;X.lexer=Cn.lex;X.Tokenizer=jr;X.Hooks=ji;X.parse=X;X.options;X.setOptions;X.use;X.walkTokens;X.parseInline;Pn.parse;Cn.lex;var xs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gh(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Jl={exports:{}};(function(r){var e=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(t){var i=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,a=0,o={},s={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function m(g){return g instanceof l?new l(g.type,m(g.content),g.alias):Array.isArray(g)?g.map(m):g.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(m){return Object.prototype.toString.call(m).slice(8,-1)},objId:function(m){return m.__id||Object.defineProperty(m,"__id",{value:++a}),m.__id},clone:function m(g,v){v=v||{};var k,x;switch(s.util.type(g)){case"Object":if(x=s.util.objId(g),v[x])return v[x];k={},v[x]=k;for(var T in g)g.hasOwnProperty(T)&&(k[T]=m(g[T],v));return k;case"Array":return x=s.util.objId(g),v[x]?v[x]:(k=[],v[x]=k,g.forEach(function(A,z){k[z]=m(A,v)}),k);default:return g}},getLanguage:function(m){for(;m;){var g=i.exec(m.className);if(g)return g[1].toLowerCase();m=m.parentElement}return"none"},setLanguage:function(m,g){m.className=m.className.replace(RegExp(i,"gi"),""),m.classList.add("language-"+g)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(k){var m=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(k.stack)||[])[1];if(m){var g=document.getElementsByTagName("script");for(var v in g)if(g[v].src==m)return g[v]}return null}},isActive:function(m,g,v){for(var k="no-"+g;m;){var x=m.classList;if(x.contains(g))return!0;if(x.contains(k))return!1;m=m.parentElement}return!!v}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(m,g){var v=s.util.clone(s.languages[m]);for(var k in g)v[k]=g[k];return v},insertBefore:function(m,g,v,k){k=k||s.languages;var x=k[m],T={};for(var A in x)if(x.hasOwnProperty(A)){if(A==g)for(var z in v)v.hasOwnProperty(z)&&(T[z]=v[z]);v.hasOwnProperty(A)||(T[A]=x[A])}var C=k[m];return k[m]=T,s.languages.DFS(s.languages,function(E,H){H===C&&E!=m&&(this[E]=T)}),T},DFS:function m(g,v,k,x){x=x||{};var T=s.util.objId;for(var A in g)if(g.hasOwnProperty(A)){v.call(g,A,g[A],k||A);var z=g[A],C=s.util.type(z);C==="Object"&&!x[T(z)]?(x[T(z)]=!0,m(z,v,null,x)):C==="Array"&&!x[T(z)]&&(x[T(z)]=!0,m(z,v,A,x))}}},plugins:{},highlightAll:function(m,g){s.highlightAllUnder(document,m,g)},highlightAllUnder:function(m,g,v){var k={callback:v,container:m,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",k),k.elements=Array.prototype.slice.apply(k.container.querySelectorAll(k.selector)),s.hooks.run("before-all-elements-highlight",k);for(var x=0,T;T=k.elements[x++];)s.highlightElement(T,g===!0,k.callback)},highlightElement:function(m,g,v){var k=s.util.getLanguage(m),x=s.languages[k];s.util.setLanguage(m,k);var T=m.parentElement;T&&T.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(T,k);var A=m.textContent,z={element:m,language:k,grammar:x,code:A};function C(H){z.highlightedCode=H,s.hooks.run("before-insert",z),z.element.innerHTML=z.highlightedCode,s.hooks.run("after-highlight",z),s.hooks.run("complete",z),v&&v.call(z.element)}if(s.hooks.run("before-sanity-check",z),T=z.element.parentElement,T&&T.nodeName.toLowerCase()==="pre"&&!T.hasAttribute("tabindex")&&T.setAttribute("tabindex","0"),!z.code){s.hooks.run("complete",z),v&&v.call(z.element);return}if(s.hooks.run("before-highlight",z),!z.grammar){C(s.util.encode(z.code));return}if(g&&t.Worker){var E=new Worker(s.filename);E.onmessage=function(H){C(H.data)},E.postMessage(JSON.stringify({language:z.language,code:z.code,immediateClose:!0}))}else C(s.highlight(z.code,z.grammar,z.language))},highlight:function(m,g,v){var k={code:m,grammar:g,language:v};if(s.hooks.run("before-tokenize",k),!k.grammar)throw new Error('The language "'+k.language+'" has no grammar.');return k.tokens=s.tokenize(k.code,k.grammar),s.hooks.run("after-tokenize",k),l.stringify(s.util.encode(k.tokens),k.language)},tokenize:function(m,g){var v=g.rest;if(v){for(var k in v)g[k]=v[k];delete g.rest}var x=new h;return c(x,x.head,m),d(m,x,g,x.head,0),y(x)},hooks:{all:{},add:function(m,g){var v=s.hooks.all;v[m]=v[m]||[],v[m].push(g)},run:function(m,g){var v=s.hooks.all[m];if(!(!v||!v.length))for(var k=0,x;x=v[k++];)x(g)}},Token:l};t.Prism=s;function l(m,g,v,k){this.type=m,this.content=g,this.alias=v,this.length=(k||"").length|0}l.stringify=function m(g,v){if(typeof g=="string")return g;if(Array.isArray(g)){var k="";return g.forEach(function(C){k+=m(C,v)}),k}var x={type:g.type,content:m(g.content,v),tag:"span",classes:["token",g.type],attributes:{},language:v},T=g.alias;T&&(Array.isArray(T)?Array.prototype.push.apply(x.classes,T):x.classes.push(T)),s.hooks.run("wrap",x);var A="";for(var z in x.attributes)A+=" "+z+'="'+(x.attributes[z]||"").replace(/"/g,"&quot;")+'"';return"<"+x.tag+' class="'+x.classes.join(" ")+'"'+A+">"+x.content+"</"+x.tag+">"};function u(m,g,v,k){m.lastIndex=g;var x=m.exec(v);if(x&&k&&x[1]){var T=x[1].length;x.index+=T,x[0]=x[0].slice(T)}return x}function d(m,g,v,k,x,T){for(var A in v)if(!(!v.hasOwnProperty(A)||!v[A])){var z=v[A];z=Array.isArray(z)?z:[z];for(var C=0;C<z.length;++C){if(T&&T.cause==A+","+C)return;var E=z[C],H=E.inside,Y=!!E.lookbehind,Z=!!E.greedy,se=E.alias;if(Z&&!E.pattern.global){var ne=E.pattern.toString().match(/[imsuy]*$/)[0];E.pattern=RegExp(E.pattern.source,ne+"g")}for(var G=E.pattern||E,W=k.next,ye=x;W!==g.tail&&!(T&&ye>=T.reach);ye+=W.value.length,W=W.next){var Me=W.value;if(g.length>m.length)return;if(!(Me instanceof l)){var We=1,le;if(Z){if(le=u(G,ye,m,Y),!le||le.index>=m.length)break;var Lt=le.index,Xn=le.index+le[0].length,ce=ye;for(ce+=W.value.length;Lt>=ce;)W=W.next,ce+=W.value.length;if(ce-=W.value.length,ye=ce,W.value instanceof l)continue;for(var Se=W;Se!==g.tail&&(ce<Xn||typeof Se.value=="string");Se=Se.next)We++,ce+=Se.value.length;We--,Me=m.slice(ye,ce),le.index-=ye}else if(le=u(G,0,Me,Y),!le)continue;var Lt=le.index,$t=le[0],ht=Me.slice(0,Lt),ur=Me.slice(Lt+$t.length),_i=ye+Me.length;T&&_i>T.reach&&(T.reach=_i);var Rn=W.prev;ht&&(Rn=c(g,Rn,ht),ye+=ht.length),p(g,Rn,We);var dr=new l(A,H?s.tokenize($t,H):$t,se,$t);if(W=c(g,Rn,dr),ur&&c(g,W,ur),We>1){var wi={cause:A+","+C,reach:_i};d(m,g,v,W.prev,ye,wi),T&&wi.reach>T.reach&&(T.reach=wi.reach)}}}}}}function h(){var m={value:null,prev:null,next:null},g={value:null,prev:m,next:null};m.next=g,this.head=m,this.tail=g,this.length=0}function c(m,g,v){var k=g.next,x={value:v,prev:g,next:k};return g.next=x,k.prev=x,m.length++,x}function p(m,g,v){for(var k=g.next,x=0;x<v&&k!==m.tail;x++)k=k.next;g.next=k,k.prev=g,m.length-=x}function y(m){for(var g=[],v=m.head.next;v!==m.tail;)g.push(v.value),v=v.next;return g}if(!t.document)return t.addEventListener&&(s.disableWorkerMessageHandler||t.addEventListener("message",function(m){var g=JSON.parse(m.data),v=g.language,k=g.code,x=g.immediateClose;t.postMessage(s.highlight(k,s.languages[v],v)),x&&t.close()},!1)),s;var f=s.util.currentScript();f&&(s.filename=f.src,f.hasAttribute("data-manual")&&(s.manual=!0));function b(){s.manual||s.highlightAll()}if(!s.manual){var w=document.readyState;w==="loading"||w==="interactive"&&f&&f.defer?document.addEventListener("DOMContentLoaded",b):window.requestAnimationFrame?window.requestAnimationFrame(b):window.setTimeout(b,16)}return s}(e);r.exports&&(r.exports=n),typeof xs<"u"&&(xs.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(i,a){var o={};o["language-"+a]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[a]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};s["language-"+a]={pattern:/[\s\S]+/,inside:n.languages[a]};var l={};l[i]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return i}),"i"),lookbehind:!0,greedy:!0,inside:s},n.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(t,i){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[i,"language-"+i],inside:n.languages[i]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(t){var i=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+i.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+i.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+i.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+i.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:i,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var a=t.languages.markup;a&&(a.tag.addInlined("style","css"),a.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var t="Loading…",i=function(f,b){return"✖ Error "+f+" while fetching file: "+b},a="✖ Error: File does not exist or is empty",o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",l="loading",u="loaded",d="failed",h="pre[data-src]:not(["+s+'="'+u+'"]):not(['+s+'="'+l+'"])';function c(f,b,w){var m=new XMLHttpRequest;m.open("GET",f,!0),m.onreadystatechange=function(){m.readyState==4&&(m.status<400&&m.responseText?b(m.responseText):m.status>=400?w(i(m.status,m.statusText)):w(a))},m.send(null)}function p(f){var b=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(f||"");if(b){var w=Number(b[1]),m=b[2],g=b[3];return m?g?[w,Number(g)]:[w,void 0]:[w,w]}}n.hooks.add("before-highlightall",function(f){f.selector+=", "+h}),n.hooks.add("before-sanity-check",function(f){var b=f.element;if(b.matches(h)){f.code="",b.setAttribute(s,l);var w=b.appendChild(document.createElement("CODE"));w.textContent=t;var m=b.getAttribute("data-src"),g=f.language;if(g==="none"){var v=(/\.(\w+)$/.exec(m)||[,"none"])[1];g=o[v]||v}n.util.setLanguage(w,g),n.util.setLanguage(b,g);var k=n.plugins.autoloader;k&&k.loadLanguages(g),c(m,function(x){b.setAttribute(s,u);var T=p(b.getAttribute("data-range"));if(T){var A=x.split(/\r\n?|\n/g),z=T[0],C=T[1]==null?A.length:T[1];z<0&&(z+=A.length),z=Math.max(0,Math.min(z-1,A.length)),C<0&&(C+=A.length),C=Math.max(0,Math.min(C,A.length)),x=A.slice(z,C).join(`
`),b.hasAttribute("data-start")||b.setAttribute("data-start",String(z+1))}w.textContent=x,n.highlightElement(w)},function(x){b.setAttribute(s,d),w.textContent=x})}}),n.plugins.fileHighlight={highlight:function(b){for(var w=(b||document).querySelectorAll(h),m=0,g;g=w[m++];)n.highlightElement(g)}};var y=!1;n.fileHighlight=function(){y||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),y=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Jl);var Xh=Jl.exports;const Vh=Gh(Xh);Prism.languages.c=Prism.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/});Prism.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}});Prism.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},Prism.languages.c.string],char:Prism.languages.c.char,comment:Prism.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:Prism.languages.c}}}});Prism.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/});delete Prism.languages.c.boolean;function Fn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Ql(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var en={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Wi={duration:.5,overwrite:!1,delay:0},wo,ze,ie,dn=1e8,Q=1/dn,Wa=Math.PI*2,Zh=Wa/4,Kh=0,eu=Math.sqrt,Jh=Math.cos,Qh=Math.sin,_e=function(e){return typeof e=="string"},de=function(e){return typeof e=="function"},Yn=function(e){return typeof e=="number"},zo=function(e){return typeof e>"u"},Dn=function(e){return typeof e=="object"},je=function(e){return e!==!1},xo=function(){return typeof window<"u"},_r=function(e){return de(e)||_e(e)},nu=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ae=Array.isArray,ef=/random\([^)]+\)/g,nf=/,\s*/g,Ts=/(?:-?\.?\d|\.)+/gi,tu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Vt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ka=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,iu=/[+-]=-?[.\d]+/,tf=/[^,'"\[\]\s]+/gi,rf=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ae,zn,Ya,To,nn={},Hr={},ru,au=function(e){return(Hr=fi(e,nn))&&Ue},Ao=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},Yi=function(e,n){return!n&&console.warn(e)},ou=function(e,n){return e&&(nn[e]=n)&&Hr&&(Hr[e]=n)||nn},qi=function(){return 0},af={suppressEvents:!0,isStart:!0,kill:!1},Cr={suppressEvents:!0,kill:!1},of={suppressEvents:!0},So={},at=[],qa={},su,Ze={},va={},As=30,Pr=[],Co="",Po=function(e){var n=e[0],t,i;if(Dn(n)||de(n)||(e=[e]),!(t=(n._gsap||{}).harness)){for(i=Pr.length;i--&&!Pr[i].targetTest(n););t=Pr[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Pu(e[i],t)))||e.splice(i,1);return e},Pt=function(e){return e._gsap||Po(cn(e))[0]._gsap},lu=function(e,n,t){return(t=e[n])&&de(t)?e[n]():zo(t)&&e.getAttribute&&e.getAttribute(n)||t},Le=function(e,n){return(e=e.split(",")).forEach(n)||e},fe=function(e){return Math.round(e*1e5)/1e5||0},re=function(e){return Math.round(e*1e7)/1e7||0},Jt=function(e,n){var t=n.charAt(0),i=parseFloat(n.substr(2));return e=parseFloat(e),t==="+"?e+i:t==="-"?e-i:t==="*"?e*i:e/i},sf=function(e,n){for(var t=n.length,i=0;e.indexOf(n[i])<0&&++i<t;);return i<t},Ur=function(){var e=at.length,n=at.slice(0),t,i;for(qa={},at.length=0,t=0;t<e;t++)i=n[t],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Bo=function(e){return!!(e._initted||e._startAt||e.add)},uu=function(e,n,t,i){at.length&&!ze&&Ur(),e.render(n,t,!!(ze&&n<0&&Bo(e))),at.length&&!ze&&Ur()},du=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(tf).length<2?n:_e(e)?e.trim():e},cu=function(e){return e},tn=function(e,n){for(var t in n)t in e||(e[t]=n[t]);return e},lf=function(e){return function(n,t){for(var i in t)i in n||i==="duration"&&e||i==="ease"||(n[i]=t[i])}},fi=function(e,n){for(var t in n)e[t]=n[t];return e},Ss=function r(e,n){for(var t in n)t!=="__proto__"&&t!=="constructor"&&t!=="prototype"&&(e[t]=Dn(n[t])?r(e[t]||(e[t]={}),n[t]):n[t]);return e},Wr=function(e,n){var t={},i;for(i in e)i in n||(t[i]=e[i]);return t},Li=function(e){var n=e.parent||ae,t=e.keyframes?lf(Ae(e.keyframes)):tn;if(je(e.inherit))for(;n;)t(e,n.vars.defaults),n=n.parent||n._dp;return e},uf=function(e,n){for(var t=e.length,i=t===n.length;i&&t--&&e[t]===n[t];);return t<0},hu=function(e,n,t,i,a){var o=e[i],s;if(a)for(s=n[a];o&&o[a]>s;)o=o._prev;return o?(n._next=o._next,o._next=n):(n._next=e[t],e[t]=n),n._next?n._next._prev=n:e[i]=n,n._prev=o,n.parent=n._dp=e,n},ta=function(e,n,t,i){t===void 0&&(t="_first"),i===void 0&&(i="_last");var a=n._prev,o=n._next;a?a._next=o:e[t]===n&&(e[t]=o),o?o._prev=a:e[i]===n&&(e[i]=a),n._next=n._prev=n.parent=null},lt=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Bt=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var t=e;t;)t._dirty=1,t=t.parent;return e},df=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},Ga=function(e,n,t,i){return e._startAt&&(ze?e._startAt.revert(Cr):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,i))},cf=function r(e){return!e||e._ts&&r(e.parent)},Cs=function(e){return e._repeat?pi(e._tTime,e=e.duration()+e._rDelay)*e:0},pi=function(e,n){var t=Math.floor(e=re(e/n));return e&&t===e?t-1:t},Yr=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},ia=function(e){return e._end=re(e._start+(e._tDur/Math.abs(e._ts||e._rts||Q)||0))},ra=function(e,n){var t=e._dp;return t&&t.smoothChildTiming&&e._ts&&(e._start=re(t._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),ia(e),t._dirty||Bt(t,e)),e},fu=function(e,n){var t;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(t=Yr(e.rawTime(),n),(!n._dur||lr(0,n.totalDuration(),t)-n._tTime>Q)&&n.render(t,!0)),Bt(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(t=e;t._dp;)t.rawTime()>=0&&t.totalTime(t._tTime),t=t._dp;e._zTime=-Q}},Sn=function(e,n,t,i){return n.parent&&lt(n),n._start=re((Yn(t)?t:t||e!==ae?rn(e,t,n):e._time)+n._delay),n._end=re(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),hu(e,n,"_first","_last",e._sort?"_start":0),Xa(n)||(e._recent=n),i||fu(e,n),e._ts<0&&ra(e,e._tTime),e},pu=function(e,n){return(nn.ScrollTrigger||Ao("scrollTrigger",n))&&nn.ScrollTrigger.create(n,e)},mu=function(e,n,t,i,a){if(Eo(e,n,a),!e._initted)return 1;if(!t&&e._pt&&!ze&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&su!==Ke.frame)return at.push(e),e._lazy=[a,i],1},hf=function r(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||r(n))},Xa=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},ff=function(e,n,t,i){var a=e.ratio,o=n<0||!n&&(!e._start&&hf(e)&&!(!e._initted&&Xa(e))||(e._ts<0||e._dp._ts<0)&&!Xa(e))?0:1,s=e._rDelay,l=0,u,d,h;if(s&&e._repeat&&(l=lr(0,e._tDur,n),d=pi(l,s),e._yoyo&&d&1&&(o=1-o),d!==pi(e._tTime,s)&&(a=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==a||ze||i||e._zTime===Q||!n&&e._zTime){if(!e._initted&&mu(e,n,i,t,l))return;for(h=e._zTime,e._zTime=n||(t?Q:0),t||(t=n&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;n<0&&Ga(e,n,t,!0),e._onUpdate&&!t&&Je(e,"onUpdate"),l&&e._repeat&&!t&&e.parent&&Je(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===o&&(o&&lt(e,1),!t&&!ze&&(Je(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},pf=function(e,n,t){var i;if(t>n)for(i=e._first;i&&i._start<=t;){if(i.data==="isPause"&&i._start>n)return i;i=i._next}else for(i=e._last;i&&i._start>=t;){if(i.data==="isPause"&&i._start<n)return i;i=i._prev}},mi=function(e,n,t,i){var a=e._repeat,o=re(n)||0,s=e._tTime/e._tDur;return s&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=a?a<0?1e10:re(o*(a+1)+e._rDelay*a):o,s>0&&!i&&ra(e,e._tTime=e._tDur*s),e.parent&&ia(e),t||Bt(e.parent,e),e},Ps=function(e){return e instanceof Fe?Bt(e):mi(e,e._dur)},mf={_start:0,endTime:qi,totalDuration:qi},rn=function r(e,n,t){var i=e.labels,a=e._recent||mf,o=e.duration()>=dn?a.endTime(!1):e._dur,s,l,u;return _e(n)&&(isNaN(n)||n in i)?(l=n.charAt(0),u=n.substr(-1)==="%",s=n.indexOf("="),l==="<"||l===">"?(s>=0&&(n=n.replace(/=/,"")),(l==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(u?(s<0?a:t).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(l=parseFloat(n.charAt(s-1)+n.substr(s+1)),u&&t&&(l=l/100*(Ae(t)?t[0]:t).totalDuration()),s>1?r(e,n.substr(0,s-1),t)+l:o+l)):n==null?o:+n},$i=function(e,n,t){var i=Yn(n[1]),a=(i?2:1)+(e<2?0:1),o=n[a],s,l;if(i&&(o.duration=n[1]),o.parent=t,e){for(s=o,l=t;l&&!("immediateRender"in s);)s=l.vars.defaults||{},l=je(l.vars.inherit)&&l.parent;o.immediateRender=je(s.immediateRender),e<2?o.runBackwards=1:o.startAt=n[a-1]}return new pe(n[0],o,n[a+1])},ct=function(e,n){return e||e===0?n(e):n},lr=function(e,n,t){return t<e?e:t>n?n:t},Te=function(e,n){return!_e(e)||!(n=rf.exec(e))?"":n[1]},yf=function(e,n,t){return ct(t,function(i){return lr(e,n,i)})},Va=[].slice,yu=function(e,n){return e&&Dn(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&Dn(e[0]))&&!e.nodeType&&e!==zn},gf=function(e,n,t){return t===void 0&&(t=[]),e.forEach(function(i){var a;return _e(i)&&!n||yu(i,1)?(a=t).push.apply(a,cn(i)):t.push(i)})||t},cn=function(e,n,t){return ie&&!n&&ie.selector?ie.selector(e):_e(e)&&!t&&(Ya||!yi())?Va.call((n||To).querySelectorAll(e),0):Ae(e)?gf(e,t):yu(e)?Va.call(e,0):e?[e]:[]},Za=function(e){return e=cn(e)[0]||Yi("Invalid scope")||{},function(n){var t=e.current||e.nativeElement||e;return cn(n,t.querySelectorAll?t:t===e?Yi("Invalid scope")||To.createElement("div"):e)}},gu=function(e){return e.sort(function(){return .5-Math.random()})},bu=function(e){if(de(e))return e;var n=Dn(e)?e:{each:e},t=It(n.ease),i=n.from||0,a=parseFloat(n.base)||0,o={},s=i>0&&i<1,l=isNaN(i)||s,u=n.axis,d=i,h=i;return _e(i)?d=h={center:.5,edges:.5,end:1}[i]||0:!s&&l&&(d=i[0],h=i[1]),function(c,p,y){var f=(y||n).length,b=o[f],w,m,g,v,k,x,T,A,z;if(!b){if(z=n.grid==="auto"?0:(n.grid||[1,dn])[1],!z){for(T=-dn;T<(T=y[z++].getBoundingClientRect().left)&&z<f;);z<f&&z--}for(b=o[f]=[],w=l?Math.min(z,f)*d-.5:i%z,m=z===dn?0:l?f*h/z-.5:i/z|0,T=0,A=dn,x=0;x<f;x++)g=x%z-w,v=m-(x/z|0),b[x]=k=u?Math.abs(u==="y"?v:g):eu(g*g+v*v),k>T&&(T=k),k<A&&(A=k);i==="random"&&gu(b),b.max=T-A,b.min=A,b.v=f=(parseFloat(n.amount)||parseFloat(n.each)*(z>f?f-1:u?u==="y"?f/z:z:Math.max(z,f/z))||0)*(i==="edges"?-1:1),b.b=f<0?a-f:a,b.u=Te(n.amount||n.each)||0,t=t&&f<0?Bf(t):t}return f=(b[c]-b.min)/b.max||0,re(b.b+(t?t(f):f)*b.v)+b.u}},Ka=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(t){var i=re(Math.round(parseFloat(t)/e)*e*n);return(i-i%1)/n+(Yn(t)?0:Te(t))}},ku=function(e,n){var t=Ae(e),i,a;return!t&&Dn(e)&&(i=t=e.radius||dn,e.values?(e=cn(e.values),(a=!Yn(e[0]))&&(i*=i)):e=Ka(e.increment)),ct(n,t?de(e)?function(o){return a=e(o),Math.abs(a-o)<=i?a:o}:function(o){for(var s=parseFloat(a?o.x:o),l=parseFloat(a?o.y:0),u=dn,d=0,h=e.length,c,p;h--;)a?(c=e[h].x-s,p=e[h].y-l,c=c*c+p*p):c=Math.abs(e[h]-s),c<u&&(u=c,d=h);return d=!i||u<=i?e[d]:o,a||d===o||Yn(o)?d:d+Te(o)}:Ka(e))},vu=function(e,n,t,i){return ct(Ae(e)?!n:t===!0?!!(t=0):!i,function(){return Ae(e)?e[~~(Math.random()*e.length)]:(t=t||1e-5)&&(i=t<1?Math.pow(10,(t+"").length-2):1)&&Math.floor(Math.round((e-t/2+Math.random()*(n-e+t*.99))/t)*t*i)/i})},bf=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(i){return n.reduce(function(a,o){return o(a)},i)}},kf=function(e,n){return function(t){return e(parseFloat(t))+(n||Te(t))}},vf=function(e,n,t){return wu(e,n,0,1,t)},_u=function(e,n,t){return ct(t,function(i){return e[~~n(i)]})},_f=function r(e,n,t){var i=n-e;return Ae(e)?_u(e,r(0,e.length),n):ct(t,function(a){return(i+(a-e)%i)%i+e})},wf=function r(e,n,t){var i=n-e,a=i*2;return Ae(e)?_u(e,r(0,e.length-1),n):ct(t,function(o){return o=(a+(o-e)%a)%a||0,e+(o>i?a-o:o)})},Gi=function(e){return e.replace(ef,function(n){var t=n.indexOf("[")+1,i=n.substring(t||7,t?n.indexOf("]"):n.length-1).split(nf);return vu(t?i:+i[0],t?0:+i[1],+i[2]||1e-5)})},wu=function(e,n,t,i,a){var o=n-e,s=i-t;return ct(a,function(l){return t+((l-e)/o*s||0)})},zf=function r(e,n,t,i){var a=isNaN(e+n)?0:function(p){return(1-p)*e+p*n};if(!a){var o=_e(e),s={},l,u,d,h,c;if(t===!0&&(i=1)&&(t=null),o)e={p:e},n={p:n};else if(Ae(e)&&!Ae(n)){for(d=[],h=e.length,c=h-2,u=1;u<h;u++)d.push(r(e[u-1],e[u]));h--,a=function(y){y*=h;var f=Math.min(c,~~y);return d[f](y-f)},t=n}else i||(e=fi(Ae(e)?[]:{},e));if(!d){for(l in n)Io.call(s,e,l,"get",n[l]);a=function(y){return Ro(y,s)||(o?e.p:e)}}}return ct(t,a)},Bs=function(e,n,t){var i=e.labels,a=dn,o,s,l;for(o in i)s=i[o]-n,s<0==!!t&&s&&a>(s=Math.abs(s))&&(l=o,a=s);return l},Je=function(e,n,t){var i=e.vars,a=i[n],o=ie,s=e._ctx,l,u,d;if(a)return l=i[n+"Params"],u=i.callbackScope||e,t&&at.length&&Ur(),s&&(ie=s),d=l?a.apply(u,l):a.call(u),ie=o,d},Ei=function(e){return lt(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ze),e.progress()<1&&Je(e,"onInterrupt"),e},Zt,zu=[],xu=function(e){if(e)if(e=!e.name&&e.default||e,xo()||e.headless){var n=e.name,t=de(e),i=n&&!t&&e.init?function(){this._props=[]}:e,a={init:qi,render:Ro,add:Io,kill:Lf,modifier:jf,rawVars:0},o={targetTest:0,get:0,getSetter:Do,aliases:{},register:0};if(yi(),e!==i){if(Ze[n])return;tn(i,tn(Wr(e,a),o)),fi(i.prototype,fi(a,Wr(e,o))),Ze[i.prop=n]=i,e.targetTest&&(Pr.push(i),So[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}ou(n,i),e.register&&e.register(Ue,i,$e)}else zu.push(e)},J=255,Mi={aqua:[0,J,J],lime:[0,J,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,J],navy:[0,0,128],white:[J,J,J],olive:[128,128,0],yellow:[J,J,0],orange:[J,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[J,0,0],pink:[J,192,203],cyan:[0,J,J],transparent:[J,J,J,0]},_a=function(e,n,t){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(t-n)*e*6:e<.5?t:e*3<2?n+(t-n)*(2/3-e)*6:n)*J+.5|0},Tu=function(e,n,t){var i=e?Yn(e)?[e>>16,e>>8&J,e&J]:0:Mi.black,a,o,s,l,u,d,h,c,p,y;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Mi[e])i=Mi[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),o=e.charAt(2),s=e.charAt(3),e="#"+a+a+o+o+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&J,i&J,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&J,e&J]}else if(e.substr(0,3)==="hsl"){if(i=y=e.match(Ts),!n)l=+i[0]%360/360,u=+i[1]/100,d=+i[2]/100,o=d<=.5?d*(u+1):d+u-d*u,a=d*2-o,i.length>3&&(i[3]*=1),i[0]=_a(l+1/3,a,o),i[1]=_a(l,a,o),i[2]=_a(l-1/3,a,o);else if(~e.indexOf("="))return i=e.match(tu),t&&i.length<4&&(i[3]=1),i}else i=e.match(Ts)||Mi.transparent;i=i.map(Number)}return n&&!y&&(a=i[0]/J,o=i[1]/J,s=i[2]/J,h=Math.max(a,o,s),c=Math.min(a,o,s),d=(h+c)/2,h===c?l=u=0:(p=h-c,u=d>.5?p/(2-h-c):p/(h+c),l=h===a?(o-s)/p+(o<s?6:0):h===o?(s-a)/p+2:(a-o)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(u*100+.5),i[2]=~~(d*100+.5)),t&&i.length<4&&(i[3]=1),i},Au=function(e){var n=[],t=[],i=-1;return e.split(ot).forEach(function(a){var o=a.match(Vt)||[];n.push.apply(n,o),t.push(i+=o.length+1)}),n.c=t,n},Is=function(e,n,t){var i="",a=(e+i).match(ot),o=n?"hsla(":"rgba(",s=0,l,u,d,h;if(!a)return e;if(a=a.map(function(c){return(c=Tu(c,n,1))&&o+(n?c[0]+","+c[1]+"%,"+c[2]+"%,"+c[3]:c.join(","))+")"}),t&&(d=Au(e),l=t.c,l.join(i)!==d.c.join(i)))for(u=e.replace(ot,"1").split(Vt),h=u.length-1;s<h;s++)i+=u[s]+(~l.indexOf(s)?a.shift()||o+"0,0,0,0)":(d.length?d:a.length?a:t).shift());if(!u)for(u=e.split(ot),h=u.length-1;s<h;s++)i+=u[s]+a[s];return i+u[h]},ot=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Mi)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),xf=/hsl[a]?\(/,Su=function(e){var n=e.join(" "),t;if(ot.lastIndex=0,ot.test(n))return t=xf.test(n),e[1]=Is(e[1],t),e[0]=Is(e[0],t,Au(e[1])),!0},Xi,Ke=function(){var r=Date.now,e=500,n=33,t=r(),i=t,a=1e3/240,o=a,s=[],l,u,d,h,c,p,y=function f(b){var w=r()-i,m=b===!0,g,v,k,x;if((w>e||w<0)&&(t+=w-n),i+=w,k=i-t,g=k-o,(g>0||m)&&(x=++h.frame,c=k-h.time*1e3,h.time=k=k/1e3,o+=g+(g>=a?4:a-g),v=1),m||(l=u(f)),v)for(p=0;p<s.length;p++)s[p](k,c,x,b)};return h={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(b){return c/(1e3/(b||60))},wake:function(){ru&&(!Ya&&xo()&&(zn=Ya=window,To=zn.document||{},nn.gsap=Ue,(zn.gsapVersions||(zn.gsapVersions=[])).push(Ue.version),au(Hr||zn.GreenSockGlobals||!zn.gsap&&zn||{}),zu.forEach(xu)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),u=d||function(b){return setTimeout(b,o-h.time*1e3+1|0)},Xi=1,y(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(l),Xi=0,u=qi},lagSmoothing:function(b,w){e=b||1/0,n=Math.min(w||33,e)},fps:function(b){a=1e3/(b||240),o=h.time*1e3+a},add:function(b,w,m){var g=w?function(v,k,x,T){b(v,k,x,T),h.remove(g)}:b;return h.remove(b),s[m?"unshift":"push"](g),yi(),g},remove:function(b,w){~(w=s.indexOf(b))&&s.splice(w,1)&&p>=w&&p--},_listeners:s},h}(),yi=function(){return!Xi&&Ke.wake()},$={},Tf=/^[\d.\-M][\d.\-,\s]/,Af=/["']/g,Sf=function(e){for(var n={},t=e.substr(1,e.length-3).split(":"),i=t[0],a=1,o=t.length,s,l,u;a<o;a++)l=t[a],s=a!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,s),n[i]=isNaN(u)?u.replace(Af,"").trim():+u,i=l.substr(s+1).trim();return n},Cf=function(e){var n=e.indexOf("(")+1,t=e.indexOf(")"),i=e.indexOf("(",n);return e.substring(n,~i&&i<t?e.indexOf(")",t+1):t)},Pf=function(e){var n=(e+"").split("("),t=$[n[0]];return t&&n.length>1&&t.config?t.config.apply(null,~e.indexOf("{")?[Sf(n[1])]:Cf(e).split(",").map(du)):$._CE&&Tf.test(e)?$._CE("",e):t},Bf=function(e){return function(n){return 1-e(1-n)}},It=function(e,n){return e&&(de(e)?e:$[e]||Pf(e))||n},jt=function(e,n,t,i){t===void 0&&(t=function(l){return 1-n(1-l)}),i===void 0&&(i=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var a={easeIn:n,easeOut:t,easeInOut:i},o;return Le(e,function(s){$[s]=nn[s]=a,$[o=s.toLowerCase()]=t;for(var l in a)$[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=$[s+"."+l]=a[l]}),a},Cu=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},wa=function r(e,n,t){var i=n>=1?n:1,a=(t||(e?.3:.45))/(n<1?n:1),o=a/Wa*(Math.asin(1/i)||0),s=function(d){return d===1?1:i*Math.pow(2,-10*d)*Qh((d-o)*a)+1},l=e==="out"?s:e==="in"?function(u){return 1-s(1-u)}:Cu(s);return a=Wa/a,l.config=function(u,d){return r(e,u,d)},l},za=function r(e,n){n===void 0&&(n=1.70158);var t=function(o){return o?--o*o*((n+1)*o+n)+1:0},i=e==="out"?t:e==="in"?function(a){return 1-t(1-a)}:Cu(t);return i.config=function(a){return r(e,a)},i};Le("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var n=e<5?e+1:e;jt(r+",Power"+(n-1),e?function(t){return Math.pow(t,n)}:function(t){return t},function(t){return 1-Math.pow(1-t,n)},function(t){return t<.5?Math.pow(t*2,n)/2:1-Math.pow((1-t)*2,n)/2})});$.Linear.easeNone=$.none=$.Linear.easeIn;jt("Elastic",wa("in"),wa("out"),wa());(function(r,e){var n=1/e,t=2*n,i=2.5*n,a=function(s){return s<n?r*s*s:s<t?r*Math.pow(s-1.5/e,2)+.75:s<i?r*(s-=2.25/e)*s+.9375:r*Math.pow(s-2.625/e,2)+.984375};jt("Bounce",function(o){return 1-a(1-o)},a)})(7.5625,2.75);jt("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});jt("Circ",function(r){return-(eu(1-r*r)-1)});jt("Sine",function(r){return r===1?1:-Jh(r*Zh)+1});jt("Back",za("in"),za("out"),za());$.SteppedEase=$.steps=nn.SteppedEase={config:function(e,n){e===void 0&&(e=1);var t=1/e,i=e+(n?0:1),a=n?1:0,o=1-Q;return function(s){return((i*lr(0,o,s)|0)+a)*t}}};Wi.ease=$["quad.out"];Le("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Co+=r+","+r+"Params,"});var Pu=function(e,n){this.id=Kh++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:lu,this.set=n?n.getSetter:Do},Vi=function(){function r(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,mi(this,+n.duration,1,1),this.data=n.data,ie&&(this._ctx=ie,ie.data.push(this)),Xi||Ke.wake()}var e=r.prototype;return e.delay=function(t){return t||t===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},e.duration=function(t){return arguments.length?this.totalDuration(this._repeat>0?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},e.totalDuration=function(t){return arguments.length?(this._dirty=0,mi(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(t,i){if(yi(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(ra(this,t),!a._dp||a.parent||fu(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&t<this._tDur||this._ts<0&&t>0||!this._tDur&&!t)&&Sn(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Q||!this._initted&&this._dur&&t||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),uu(this,t,i)),this},e.time=function(t,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+Cs(this))%(this._dur+this._rDelay)||(t?this._dur:0),i):this._time},e.totalProgress=function(t,i){return arguments.length?this.totalTime(this.totalDuration()*t,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(t,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-t:t)+Cs(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(t,i){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*a,i):this._repeat?pi(this._tTime,a)+1:1},e.timeScale=function(t,i){if(!arguments.length)return this._rts===-Q?0:this._rts;if(this._rts===t)return this;var a=this.parent&&this._ts?Yr(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-Q?0:this._rts,this.totalTime(lr(-Math.abs(this._delay),this.totalDuration(),a),i!==!1),ia(this),df(this)},e.paused=function(t){return arguments.length?(this._ps!==t&&(this._ps=t,t?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(yi(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Q&&(this._tTime-=Q)))),this):this._ps},e.startTime=function(t){if(arguments.length){this._start=re(t);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Sn(i,this,this._start-this._delay),this}return this._start},e.endTime=function(t){return this._start+(je(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(t){var i=this.parent||this._dp;return i?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Yr(i.rawTime(t),this):this._tTime:this._tTime},e.revert=function(t){t===void 0&&(t=of);var i=ze;return ze=t,Bo(this)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),this.data!=="nested"&&t.kill!==!1&&this.kill(),ze=i,this},e.globalTime=function(t){for(var i=this,a=arguments.length?t:i.rawTime();i;)a=i._start+a/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(t):a},e.repeat=function(t){return arguments.length?(this._repeat=t===1/0?-2:t,Ps(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(t){if(arguments.length){var i=this._time;return this._rDelay=t,Ps(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},e.seek=function(t,i){return this.totalTime(rn(this,t),je(i))},e.restart=function(t,i){return this.play().totalTime(t?-this._delay:0,je(i)),this._dur||(this._zTime=-Q),this},e.play=function(t,i){return t!=null&&this.seek(t,i),this.reversed(!1).paused(!1)},e.reverse=function(t,i){return t!=null&&this.seek(t||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(t,i){return t!=null&&this.seek(t,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-Q:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Q,this},e.isActive=function(){var t=this.parent||this._dp,i=this._start,a;return!!(!t||this._ts&&this._initted&&t.isActive()&&(a=t.rawTime(!0))>=i&&a<this.endTime(!0)-Q)},e.eventCallback=function(t,i,a){var o=this.vars;return arguments.length>1?(i?(o[t]=i,a&&(o[t+"Params"]=a),t==="onUpdate"&&(this._onUpdate=i)):delete o[t],this):o[t]},e.then=function(t){var i=this,a=i._prom;return new Promise(function(o){var s=de(t)?t:cu,l=function(){var d=i.then;i.then=null,a&&a(),de(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=d),o(s),i.then=d};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Ei(this)},r}();tn(Vi.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Q,_prom:0,_ps:!1,_rts:1});var Fe=function(r){Ql(e,r);function e(t,i){var a;return t===void 0&&(t={}),a=r.call(this,t)||this,a.labels={},a.smoothChildTiming=!!t.smoothChildTiming,a.autoRemoveChildren=!!t.autoRemoveChildren,a._sort=je(t.sortChildren),ae&&Sn(t.parent||ae,Fn(a),i),t.reversed&&a.reverse(),t.paused&&a.paused(!0),t.scrollTrigger&&pu(Fn(a),t.scrollTrigger),a}var n=e.prototype;return n.to=function(i,a,o){return $i(0,arguments,this),this},n.from=function(i,a,o){return $i(1,arguments,this),this},n.fromTo=function(i,a,o,s){return $i(2,arguments,this),this},n.set=function(i,a,o){return a.duration=0,a.parent=this,Li(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new pe(i,a,rn(this,o),1),this},n.call=function(i,a,o){return Sn(this,pe.delayedCall(0,i,a),o)},n.staggerTo=function(i,a,o,s,l,u,d){return o.duration=a,o.stagger=o.stagger||s,o.onComplete=u,o.onCompleteParams=d,o.parent=this,new pe(i,o,rn(this,l)),this},n.staggerFrom=function(i,a,o,s,l,u,d){return o.runBackwards=1,Li(o).immediateRender=je(o.immediateRender),this.staggerTo(i,a,o,s,l,u,d)},n.staggerFromTo=function(i,a,o,s,l,u,d,h){return s.startAt=o,Li(s).immediateRender=je(s.immediateRender),this.staggerTo(i,a,s,l,u,d,h)},n.render=function(i,a,o){var s=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,d=i<=0?0:re(i),h=this._zTime<0!=i<0&&(this._initted||!u),c,p,y,f,b,w,m,g,v,k,x,T;if(this!==ae&&d>l&&i>=0&&(d=l),d!==this._tTime||o||h){if(s!==this._time&&u&&(d+=this._time-s,i+=this._time-s),c=d,v=this._start,g=this._ts,w=!g,h&&(u||(s=this._zTime),(i||!a)&&(this._zTime=i)),this._repeat){if(x=this._yoyo,b=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(b*100+i,a,o);if(c=re(d%b),d===l?(f=this._repeat,c=u):(k=re(d/b),f=~~k,f&&f===k&&(c=u,f--),c>u&&(c=u)),k=pi(this._tTime,b),!s&&this._tTime&&k!==f&&this._tTime-k*b-this._dur<=0&&(k=f),x&&f&1&&(c=u-c,T=1),f!==k&&!this._lock){var A=x&&k&1,z=A===(x&&f&1);if(f<k&&(A=!A),s=A?0:d%u?u:d,this._lock=1,this.render(s||(T?0:re(f*b)),a,!u)._lock=0,this._tTime=d,!a&&this.parent&&Je(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,k=f),s&&s!==this._time||w!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,z&&(this._lock=2,s=A?u:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!w)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=pf(this,re(s),re(c)),m&&(d-=c-(c=m._start))),this._tTime=d,this._time=c,this._act=!!g,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&d&&u&&!a&&!k&&(Je(this,"onStart"),this._tTime!==d))return this;if(c>=s&&i>=0)for(p=this._first;p;){if(y=p._next,(p._act||c>=p._start)&&p._ts&&m!==p){if(p.parent!==this)return this.render(i,a,o);if(p.render(p._ts>0?(c-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(c-p._start)*p._ts,a,o),c!==this._time||!this._ts&&!w){m=0,y&&(d+=this._zTime=-Q);break}}p=y}else{p=this._last;for(var C=i<0?i:c;p;){if(y=p._prev,(p._act||C<=p._end)&&p._ts&&m!==p){if(p.parent!==this)return this.render(i,a,o);if(p.render(p._ts>0?(C-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(C-p._start)*p._ts,a,o||ze&&Bo(p)),c!==this._time||!this._ts&&!w){m=0,y&&(d+=this._zTime=C?-Q:Q);break}}p=y}}if(m&&!a&&(this.pause(),m.render(c>=s?0:-Q)._zTime=c>=s?1:-1,this._ts))return this._start=v,ia(this),this.render(i,a,o);this._onUpdate&&!a&&Je(this,"onUpdate",!0),(d===l&&this._tTime>=this.totalDuration()||!d&&s)&&(v===this._start||Math.abs(g)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(d===l&&this._ts>0||!d&&this._ts<0)&&lt(this,1),!a&&!(i<0&&!s)&&(d||s||!l)&&(Je(this,d===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(i,a){var o=this;if(Yn(a)||(a=rn(this,a,i)),!(i instanceof Vi)){if(Ae(i))return i.forEach(function(s){return o.add(s,a)}),this;if(_e(i))return this.addLabel(i,a);if(de(i))i=pe.delayedCall(0,i);else return this}return this!==i?Sn(this,i,a):this},n.getChildren=function(i,a,o,s){i===void 0&&(i=!0),a===void 0&&(a=!0),o===void 0&&(o=!0),s===void 0&&(s=-dn);for(var l=[],u=this._first;u;)u._start>=s&&(u instanceof pe?a&&l.push(u):(o&&l.push(u),i&&l.push.apply(l,u.getChildren(!0,a,o)))),u=u._next;return l},n.getById=function(i){for(var a=this.getChildren(1,1,1),o=a.length;o--;)if(a[o].vars.id===i)return a[o]},n.remove=function(i){return _e(i)?this.removeLabel(i):de(i)?this.killTweensOf(i):(i.parent===this&&ta(this,i),i===this._recent&&(this._recent=this._last),Bt(this))},n.totalTime=function(i,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=re(Ke.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,a),this._forcing=0,this):this._tTime},n.addLabel=function(i,a){return this.labels[i]=rn(this,a),this},n.removeLabel=function(i){return delete this.labels[i],this},n.addPause=function(i,a,o){var s=pe.delayedCall(0,a||qi,o);return s.data="isPause",this._hasPause=1,Sn(this,s,rn(this,i))},n.removePause=function(i){var a=this._first;for(i=rn(this,i);a;)a._start===i&&a.data==="isPause"&&lt(a),a=a._next},n.killTweensOf=function(i,a,o){for(var s=this.getTweensOf(i,o),l=s.length;l--;)nt!==s[l]&&s[l].kill(i,a);return this},n.getTweensOf=function(i,a){for(var o=[],s=cn(i),l=this._first,u=Yn(a),d;l;)l instanceof pe?sf(l._targets,s)&&(u?(!nt||l._initted&&l._ts)&&l.globalTime(0)<=a&&l.globalTime(l.totalDuration())>a:!a||l.isActive())&&o.push(l):(d=l.getTweensOf(s,a)).length&&o.push.apply(o,d),l=l._next;return o},n.tweenTo=function(i,a){a=a||{};var o=this,s=rn(o,i),l=a,u=l.startAt,d=l.onStart,h=l.onStartParams,c=l.immediateRender,p,y=pe.to(o,tn({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:a.duration||Math.abs((s-(u&&"time"in u?u.time:o._time))/o.timeScale())||Q,onStart:function(){if(o.pause(),!p){var b=a.duration||Math.abs((s-(u&&"time"in u?u.time:o._time))/o.timeScale());y._dur!==b&&mi(y,b,0,1).render(y._time,!0,!0),p=1}d&&d.apply(y,h||[])}},a));return c?y.render(0):y},n.tweenFromTo=function(i,a,o){return this.tweenTo(a,tn({startAt:{time:rn(this,i)}},o))},n.recent=function(){return this._recent},n.nextLabel=function(i){return i===void 0&&(i=this._time),Bs(this,rn(this,i))},n.previousLabel=function(i){return i===void 0&&(i=this._time),Bs(this,rn(this,i),1)},n.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Q)},n.shiftChildren=function(i,a,o){o===void 0&&(o=0);var s=this._first,l=this.labels,u;for(i=re(i);s;)s._start>=o&&(s._start+=i,s._end+=i),s=s._next;if(a)for(u in l)l[u]>=o&&(l[u]+=i);return Bt(this)},n.invalidate=function(i){var a=this._first;for(this._lock=0;a;)a.invalidate(i),a=a._next;return r.prototype.invalidate.call(this,i)},n.clear=function(i){i===void 0&&(i=!0);for(var a=this._first,o;a;)o=a._next,this.remove(a),a=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Bt(this)},n.totalDuration=function(i){var a=0,o=this,s=o._last,l=dn,u,d,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;s;)u=s._prev,s._dirty&&s.totalDuration(),d=s._start,d>l&&o._sort&&s._ts&&!o._lock?(o._lock=1,Sn(o,s,d-s._delay,1)._lock=0):l=d,d<0&&s._ts&&(a-=d,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=re(d/o._ts),o._time-=d,o._tTime-=d),o.shiftChildren(-d,!1,-1/0),l=0),s._end>a&&s._ts&&(a=s._end),s=u;mi(o,o===ae&&o._time>a?o._time:a,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(ae._ts&&(uu(ae,Yr(i,ae)),su=Ke.frame),Ke.frame>=As){As+=en.autoSleep||120;var a=ae._first;if((!a||!a._ts)&&en.autoSleep&&Ke._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||Ke.sleep()}}},e}(Vi);tn(Fe.prototype,{_lock:0,_hasPause:0,_forcing:0});var If=function(e,n,t,i,a,o,s){var l=new $e(this._pt,e,n,0,1,Ru,null,a),u=0,d=0,h,c,p,y,f,b,w,m;for(l.b=t,l.e=i,t+="",i+="",(w=~i.indexOf("random("))&&(i=Gi(i)),o&&(m=[t,i],o(m,e,n),t=m[0],i=m[1]),c=t.match(ka)||[];h=ka.exec(i);)y=h[0],f=i.substring(u,h.index),p?p=(p+1)%5:f.substr(-5)==="rgba("&&(p=1),y!==c[d++]&&(b=parseFloat(c[d-1])||0,l._pt={_next:l._pt,p:f||d===1?f:",",s:b,c:y.charAt(1)==="="?Jt(b,y)-b:parseFloat(y)-b,m:p&&p<4?Math.round:0},u=ka.lastIndex);return l.c=u<i.length?i.substring(u,i.length):"",l.fp=s,(iu.test(i)||w)&&(l.e=0),this._pt=l,l},Io=function(e,n,t,i,a,o,s,l,u,d){de(i)&&(i=i(a||0,e,o));var h=e[n],c=t!=="get"?t:de(h)?u?e[n.indexOf("set")||!de(e["get"+n.substr(3)])?n:"get"+n.substr(3)](u):e[n]():h,p=de(h)?u?Of:Mu:Mo,y;if(_e(i)&&(~i.indexOf("random(")&&(i=Gi(i)),i.charAt(1)==="="&&(y=Jt(c,i)+(Te(c)||0),(y||y===0)&&(i=y))),!d||c!==i||Ja)return!isNaN(c*i)&&i!==""?(y=new $e(this._pt,e,n,+c||0,i-(c||0),typeof h=="boolean"?Nf:Du,0,p),u&&(y.fp=u),s&&y.modifier(s,this,e),this._pt=y):(!h&&!(n in e)&&Ao(n,i),If.call(this,e,n,c,i,p,l||en.stringFilter,u))},Ef=function(e,n,t,i,a){if(de(e)&&(e=Hi(e,a,n,t,i)),!Dn(e)||e.style&&e.nodeType||Ae(e)||nu(e))return _e(e)?Hi(e,a,n,t,i):e;var o={},s;for(s in e)o[s]=Hi(e[s],a,n,t,i);return o},Bu=function(e,n,t,i,a,o){var s,l,u,d;if(Ze[e]&&(s=new Ze[e]).init(a,s.rawVars?n[e]:Ef(n[e],i,a,o,t),t,i,o)!==!1&&(t._pt=l=new $e(t._pt,a,e,0,1,s.render,s,0,s.priority),t!==Zt))for(u=t._ptLookup[t._targets.indexOf(a)],d=s._props.length;d--;)u[s._props[d]]=l;return s},nt,Ja,Eo=function r(e,n,t){var i=e.vars,a=i.ease,o=i.startAt,s=i.immediateRender,l=i.lazy,u=i.onUpdate,d=i.runBackwards,h=i.yoyoEase,c=i.keyframes,p=i.autoRevert,y=e._dur,f=e._startAt,b=e._targets,w=e.parent,m=w&&w.data==="nested"?w.vars.targets:b,g=e._overwrite==="auto"&&!wo,v=e.timeline,k=i.easeReverse||h,x,T,A,z,C,E,H,Y,Z,se,ne,G,W;if(v&&(!c||!a)&&(a="none"),e._ease=It(a,Wi.ease),e._rEase=k&&(It(k)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||c&&!i.stagger){if(Y=b[0]?Pt(b[0]).harness:0,G=Y&&i[Y.prop],x=Wr(i,So),f&&(f._zTime<0&&f.progress(1),n<0&&d&&s&&!p?f.render(-1,!0):f.revert(d&&y?Cr:af),f._lazy=0),o){if(lt(e._startAt=pe.set(b,tn({data:"isStart",overwrite:!1,parent:w,immediateRender:!0,lazy:!f&&je(l),startAt:null,delay:0,onUpdate:u&&function(){return Je(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(ze||!s&&!p)&&e._startAt.revert(Cr),s&&y&&n<=0&&t<=0){n&&(e._zTime=n);return}}else if(d&&y&&!f){if(n&&(s=!1),A=tn({overwrite:!1,data:"isFromStart",lazy:s&&!f&&je(l),immediateRender:s,stagger:0,parent:w},x),G&&(A[Y.prop]=G),lt(e._startAt=pe.set(b,A)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(ze?e._startAt.revert(Cr):e._startAt.render(-1,!0)),e._zTime=n,!s)r(e._startAt,Q,Q);else if(!n)return}for(e._pt=e._ptCache=0,l=y&&je(l)||l&&!y,T=0;T<b.length;T++){if(C=b[T],H=C._gsap||Po(b)[T]._gsap,e._ptLookup[T]=se={},qa[H.id]&&at.length&&Ur(),ne=m===b?T:m.indexOf(C),Y&&(Z=new Y).init(C,G||x,e,ne,m)!==!1&&(e._pt=z=new $e(e._pt,C,Z.name,0,1,Z.render,Z,0,Z.priority),Z._props.forEach(function(ye){se[ye]=z}),Z.priority&&(E=1)),!Y||G)for(A in x)Ze[A]&&(Z=Bu(A,x,e,ne,C,m))?Z.priority&&(E=1):se[A]=z=Io.call(e,C,A,"get",x[A],ne,m,0,i.stringFilter);e._op&&e._op[T]&&e.kill(C,e._op[T]),g&&e._pt&&(nt=e,ae.killTweensOf(C,se,e.globalTime(n)),W=!e.parent,nt=0),e._pt&&l&&(qa[H.id]=1)}E&&Ou(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!W,c&&n<=0&&v.render(dn,!0,!0)},Mf=function(e,n,t,i,a,o,s,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[n],d,h,c,p;if(!u)for(u=e._ptCache[n]=[],c=e._ptLookup,p=e._targets.length;p--;){if(d=c[p][n],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==n&&d.fp!==n;)d=d._next;if(!d)return Ja=1,e.vars[n]="+=0",Eo(e,s),Ja=0,l?Yi(n+" not eligible for reset. Try splitting into individual properties"):1;u.push(d)}for(p=u.length;p--;)h=u[p],d=h._pt||h,d.s=(i||i===0)&&!a?i:d.s+(i||0)+o*d.c,d.c=t-d.s,h.e&&(h.e=fe(t)+Te(h.e)),h.b&&(h.b=d.s+Te(h.b))},Df=function(e,n){var t=e[0]?Pt(e[0]).harness:0,i=t&&t.aliases,a,o,s,l;if(!i)return n;a=fi({},n);for(o in i)if(o in a)for(l=i[o].split(","),s=l.length;s--;)a[l[s]]=a[o];return a},Rf=function(e,n,t,i){var a=n.ease||i||"power1.inOut",o,s;if(Ae(n))s=t[e]||(t[e]=[]),n.forEach(function(l,u){return s.push({t:u/(n.length-1)*100,v:l,e:a})});else for(o in n)s=t[o]||(t[o]=[]),o==="ease"||s.push({t:parseFloat(e),v:n[o],e:a})},Hi=function(e,n,t,i,a){return de(e)?e.call(n,t,i,a):_e(e)&&~e.indexOf("random(")?Gi(e):e},Iu=Co+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Eu={};Le(Iu+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Eu[r]=1});var pe=function(r){Ql(e,r);function e(t,i,a,o){var s;typeof i=="number"&&(a.duration=i,i=a,a=null),s=r.call(this,o?i:Li(i))||this;var l=s.vars,u=l.duration,d=l.delay,h=l.immediateRender,c=l.stagger,p=l.overwrite,y=l.keyframes,f=l.defaults,b=l.scrollTrigger,w=i.parent||ae,m=(Ae(t)||nu(t)?Yn(t[0]):"length"in i)?[t]:cn(t),g,v,k,x,T,A,z,C;if(s._targets=m.length?Po(m):Yi("GSAP target "+t+" not found. https://gsap.com",!en.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=p,y||c||_r(u)||_r(d)){i=s.vars;var E=i.easeReverse||i.yoyoEase;if(g=s.timeline=new Fe({data:"nested",defaults:f||{},targets:w&&w.data==="nested"?w.vars.targets:m}),g.kill(),g.parent=g._dp=Fn(s),g._start=0,c||_r(u)||_r(d)){if(x=m.length,z=c&&bu(c),Dn(c))for(T in c)~Iu.indexOf(T)&&(C||(C={}),C[T]=c[T]);for(v=0;v<x;v++)k=Wr(i,Eu),k.stagger=0,E&&(k.easeReverse=E),C&&fi(k,C),A=m[v],k.duration=+Hi(u,Fn(s),v,A,m),k.delay=(+Hi(d,Fn(s),v,A,m)||0)-s._delay,!c&&x===1&&k.delay&&(s._delay=d=k.delay,s._start+=d,k.delay=0),g.to(A,k,z?z(v,A,m):0),g._ease=$.none;g.duration()?u=d=0:s.timeline=0}else if(y){Li(tn(g.vars.defaults,{ease:"none"})),g._ease=It(y.ease||i.ease||"none");var H=0,Y,Z,se;if(Ae(y))y.forEach(function(ne){return g.to(m,ne,">")}),g.duration();else{k={};for(T in y)T==="ease"||T==="easeEach"||Rf(T,y[T],k,y.easeEach);for(T in k)for(Y=k[T].sort(function(ne,G){return ne.t-G.t}),H=0,v=0;v<Y.length;v++)Z=Y[v],se={ease:Z.e,duration:(Z.t-(v?Y[v-1].t:0))/100*u},se[T]=Z.v,g.to(m,se,H),H+=se.duration;g.duration()<u&&g.to({},{duration:u-g.duration()})}}u||s.duration(u=g.duration())}else s.timeline=0;return p===!0&&!wo&&(nt=Fn(s),ae.killTweensOf(m),nt=0),Sn(w,Fn(s),a),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(h||!u&&!y&&s._start===re(w._time)&&je(h)&&cf(Fn(s))&&w.data!=="nested")&&(s._tTime=-Q,s.render(Math.max(0,-d)||0)),b&&pu(Fn(s),b),s}var n=e.prototype;return n.render=function(i,a,o){var s=this._time,l=this._tDur,u=this._dur,d=i<0,h=i>l-Q&&!d?l:i<Q?0:i,c,p,y,f,b,w,m,g;if(!u)ff(this,i,a,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(c=h,g=this.timeline,this._repeat){if(f=u+this._rDelay,this._repeat<-1&&d)return this.totalTime(f*100+i,a,o);if(c=re(h%f),h===l?(y=this._repeat,c=u):(b=re(h/f),y=~~b,y&&y===b?(c=u,y--):c>u&&(c=u)),w=this._yoyo&&y&1,w&&(c=u-c),b=pi(this._tTime,f),c===s&&!o&&this._initted&&y===b)return this._tTime=h,this;y!==b&&this.vars.repeatRefresh&&!w&&!this._lock&&c!==f&&this._initted&&(this._lock=o=1,this.render(re(f*y),!0).invalidate()._lock=0)}if(!this._initted){if(mu(this,d?i:c,o,a,h))return this._tTime=0,this;if(s!==this._time&&!(o&&this.vars.repeatRefresh&&y!==b))return this;if(u!==this._dur)return this.render(i,a,o)}if(this._rEase){var v=c<s;if(v!==this._inv){var k=v?s:u-s;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=s,this._invRecip=k?(v?-1:1)/k:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((c-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(c/u);if(this._from&&(this.ratio=m=1-m),this._tTime=h,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),!s&&h&&!a&&!b&&(Je(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(m,p.d),p=p._next;g&&g.render(i<0?i:g._dur*g._ease(c/this._dur),a,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!a&&(d&&Ga(this,i,a,o),Je(this,"onUpdate")),this._repeat&&y!==b&&this.vars.onRepeat&&!a&&this.parent&&Je(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(d&&!this._onUpdate&&Ga(this,i,!0,!0),(i||!u)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&lt(this,1),!a&&!(d&&!s)&&(h||s||w)&&(Je(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},n.resetTo=function(i,a,o,s,l){Xi||Ke.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||Eo(this,u),d=this._ease(u/this._dur),Mf(this,i,a,o,s,d,u,l)?this.resetTo(i,a,o,s,1):(ra(this,0),this.parent||hu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(i,a){if(a===void 0&&(a="all"),!i&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?Ei(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ze),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,a,nt&&nt.vars.overwrite!==!0)._first||Ei(this),this.parent&&o!==this.timeline.totalDuration()&&mi(this,this._dur*this.timeline._tDur/o,0,1),this}var s=this._targets,l=i?cn(i):s,u=this._ptLookup,d=this._pt,h,c,p,y,f,b,w;if((!a||a==="all")&&uf(s,l))return a==="all"&&(this._pt=0),Ei(this);for(h=this._op=this._op||[],a!=="all"&&(_e(a)&&(f={},Le(a,function(m){return f[m]=1}),a=f),a=Df(s,a)),w=s.length;w--;)if(~l.indexOf(s[w])){c=u[w],a==="all"?(h[w]=a,y=c,p={}):(p=h[w]=h[w]||{},y=a);for(f in y)b=c&&c[f],b&&((!("kill"in b.d)||b.d.kill(f)===!0)&&ta(this,b,"_pt"),delete c[f]),p!=="all"&&(p[f]=1)}return this._initted&&!this._pt&&d&&Ei(this),this},e.to=function(i,a){return new e(i,a,arguments[2])},e.from=function(i,a){return $i(1,arguments)},e.delayedCall=function(i,a,o,s){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:a,onReverseComplete:a,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:s})},e.fromTo=function(i,a,o){return $i(2,arguments)},e.set=function(i,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(i,a)},e.killTweensOf=function(i,a,o){return ae.killTweensOf(i,a,o)},e}(Vi);tn(pe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Le("staggerTo,staggerFrom,staggerFromTo",function(r){pe[r]=function(){var e=new Fe,n=Va.call(arguments,0);return n.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,n)}});var Mo=function(e,n,t){return e[n]=t},Mu=function(e,n,t){return e[n](t)},Of=function(e,n,t,i){return e[n](i.fp,t)},Ff=function(e,n,t){return e.setAttribute(n,t)},Do=function(e,n){return de(e[n])?Mu:zo(e[n])&&e.setAttribute?Ff:Mo},Du=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},Nf=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},Ru=function(e,n){var t=n._pt,i="";if(!e&&n.b)i=n.b;else if(e===1&&n.e)i=n.e;else{for(;t;)i=t.p+(t.m?t.m(t.s+t.c*e):Math.round((t.s+t.c*e)*1e4)/1e4)+i,t=t._next;i+=n.c}n.set(n.t,n.p,i,n)},Ro=function(e,n){for(var t=n._pt;t;)t.r(e,t.d),t=t._next},jf=function(e,n,t,i){for(var a=this._pt,o;a;)o=a._next,a.p===i&&a.modifier(e,n,t),a=o},Lf=function(e){for(var n=this._pt,t,i;n;)i=n._next,n.p===e&&!n.op||n.op===e?ta(this,n,"_pt"):n.dep||(t=1),n=i;return!t},$f=function(e,n,t,i){i.mSet(e,n,i.m.call(i.tween,t,i.mt),i)},Ou=function(e){for(var n=e._pt,t,i,a,o;n;){for(t=n._next,i=a;i&&i.pr>n.pr;)i=i._next;(n._prev=i?i._prev:o)?n._prev._next=n:a=n,(n._next=i)?i._prev=n:o=n,n=t}e._pt=a},$e=function(){function r(n,t,i,a,o,s,l,u,d){this.t=t,this.s=a,this.c=o,this.p=i,this.r=s||Du,this.d=l||this,this.set=u||Mo,this.pr=d||0,this._next=n,n&&(n._prev=this)}var e=r.prototype;return e.modifier=function(t,i,a){this.mSet=this.mSet||this.set,this.set=$f,this.m=t,this.mt=a,this.tween=i},r}();Le(Co+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return So[r]=1});nn.TweenMax=nn.TweenLite=pe;nn.TimelineLite=nn.TimelineMax=Fe;ae=new Fe({sortChildren:!1,defaults:Wi,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});en.stringFilter=Su;var Et=[],Br={},Hf=[],Es=0,Uf=0,xa=function(e){return(Br[e]||Hf).map(function(n){return n()})},Qa=function(){var e=Date.now(),n=[];e-Es>2&&(xa("matchMediaInit"),Et.forEach(function(t){var i=t.queries,a=t.conditions,o,s,l,u;for(s in i)o=zn.matchMedia(i[s]).matches,o&&(l=1),o!==a[s]&&(a[s]=o,u=1);u&&(t.revert(),l&&n.push(t))}),xa("matchMediaRevert"),n.forEach(function(t){return t.onMatch(t,function(i){return t.add(null,i)})}),Es=e,xa("matchMedia"))},Fu=function(){function r(n,t){this.selector=t&&Za(t),this.data=[],this._r=[],this.isReverted=!1,this.id=Uf++,n&&this.add(n)}var e=r.prototype;return e.add=function(t,i,a){de(t)&&(a=i,i=t,t=de);var o=this,s=function(){var u=ie,d=o.selector,h;return u&&u!==o&&u.data.push(o),a&&(o.selector=Za(a)),ie=o,h=i.apply(o,arguments),de(h)&&o._r.push(h),ie=u,o.selector=d,o.isReverted=!1,h};return o.last=s,t===de?s(o,function(l){return o.add(null,l)}):t?o[t]=s:s},e.ignore=function(t){var i=ie;ie=null,t(this),ie=i},e.getTweens=function(){var t=[];return this.data.forEach(function(i){return i instanceof r?t.push.apply(t,i.getTweens()):i instanceof pe&&!(i.parent&&i.parent.data==="nested")&&t.push(i)}),t},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(t,i){var a=this;if(t?function(){for(var s=a.getTweens(),l=a.data.length,u;l--;)u=a.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(d){return s.splice(s.indexOf(d),1)}));for(s.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,h){return h.g-d.g||-1/0}).forEach(function(d){return d.t.revert(t)}),l=a.data.length;l--;)u=a.data[l],u instanceof Fe?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof pe)&&u.revert&&u.revert(t);a._r.forEach(function(d){return d(t,a)}),a.isReverted=!0}():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),i)for(var o=Et.length;o--;)Et[o].id===this.id&&Et.splice(o,1)},e.revert=function(t){this.kill(t||{})},r}(),Wf=function(){function r(n){this.contexts=[],this.scope=n,ie&&ie.data.push(this)}var e=r.prototype;return e.add=function(t,i,a){Dn(t)||(t={matches:t});var o=new Fu(0,a||this.scope),s=o.conditions={},l,u,d;ie&&!o.selector&&(o.selector=ie.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=t;for(u in t)u==="all"?d=1:(l=zn.matchMedia(t[u]),l&&(Et.indexOf(o)<0&&Et.push(o),(s[u]=l.matches)&&(d=1),l.addListener?l.addListener(Qa):l.addEventListener("change",Qa)));return d&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(t){this.kill(t||{})},e.kill=function(t){this.contexts.forEach(function(i){return i.kill(t,!0)})},r}(),qr={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];n.forEach(function(i){return xu(i)})},timeline:function(e){return new Fe(e)},getTweensOf:function(e,n){return ae.getTweensOf(e,n)},getProperty:function(e,n,t,i){_e(e)&&(e=cn(e)[0]);var a=Pt(e||{}).get,o=t?cu:du;return t==="native"&&(t=""),e&&(n?o((Ze[n]&&Ze[n].get||a)(e,n,t,i)):function(s,l,u){return o((Ze[s]&&Ze[s].get||a)(e,s,l,u))})},quickSetter:function(e,n,t){if(e=cn(e),e.length>1){var i=e.map(function(d){return Ue.quickSetter(d,n,t)}),a=i.length;return function(d){for(var h=a;h--;)i[h](d)}}e=e[0]||{};var o=Ze[n],s=Pt(e),l=s.harness&&(s.harness.aliases||{})[n]||n,u=o?function(d){var h=new o;Zt._pt=0,h.init(e,t?d+t:d,Zt,0,[e]),h.render(1,h),Zt._pt&&Ro(1,Zt)}:s.set(e,l);return o?u:function(d){return u(e,l,t?d+t:d,s,1)}},quickTo:function(e,n,t){var i,a=Ue.to(e,tn((i={},i[n]="+=0.1",i.paused=!0,i.stagger=0,i),t||{})),o=function(l,u,d){return a.resetTo(n,l,u,d)};return o.tween=a,o},isTweening:function(e){return ae.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=It(e.ease,Wi.ease)),Ss(Wi,e||{})},config:function(e){return Ss(en,e||{})},registerEffect:function(e){var n=e.name,t=e.effect,i=e.plugins,a=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!Ze[s]&&!nn[s]&&Yi(n+" effect requires "+s+" plugin.")}),va[n]=function(s,l,u){return t(cn(s),tn(l||{},a),u)},o&&(Fe.prototype[n]=function(s,l,u){return this.add(va[n](s,Dn(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,n){$[e]=It(n)},parseEase:function(e,n){return arguments.length?It(e,n):$},getById:function(e){return ae.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var t=new Fe(e),i,a;for(t.smoothChildTiming=je(e.smoothChildTiming),ae.remove(t),t._dp=0,t._time=t._tTime=ae._time,i=ae._first;i;)a=i._next,(n||!(!i._dur&&i instanceof pe&&i.vars.onComplete===i._targets[0]))&&Sn(t,i,i._start-i._delay),i=a;return Sn(ae,t,0),t},context:function(e,n){return e?new Fu(e,n):ie},matchMedia:function(e){return new Wf(e)},matchMediaRefresh:function(){return Et.forEach(function(e){var n=e.conditions,t,i;for(i in n)n[i]&&(n[i]=!1,t=1);t&&e.revert()})||Qa()},addEventListener:function(e,n){var t=Br[e]||(Br[e]=[]);~t.indexOf(n)||t.push(n)},removeEventListener:function(e,n){var t=Br[e],i=t&&t.indexOf(n);i>=0&&t.splice(i,1)},utils:{wrap:_f,wrapYoyo:wf,distribute:bu,random:vu,snap:ku,normalize:vf,getUnit:Te,clamp:yf,splitColor:Tu,toArray:cn,selector:Za,mapRange:wu,pipe:bf,unitize:kf,interpolate:zf,shuffle:gu},install:au,effects:va,ticker:Ke,updateRoot:Fe.updateRoot,plugins:Ze,globalTimeline:ae,core:{PropTween:$e,globals:ou,Tween:pe,Timeline:Fe,Animation:Vi,getCache:Pt,_removeLinkedListItem:ta,reverting:function(){return ze},context:function(e){return e&&ie&&(ie.data.push(e),e._ctx=ie),ie},suppressOverwrites:function(e){return wo=e}}};Le("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return qr[r]=pe[r]});Ke.add(Fe.updateRoot);Zt=qr.to({},{duration:0});var Yf=function(e,n){for(var t=e._pt;t&&t.p!==n&&t.op!==n&&t.fp!==n;)t=t._next;return t},qf=function(e,n){var t=e._targets,i,a,o;for(i in n)for(a=t.length;a--;)o=e._ptLookup[a][i],o&&(o=o.d)&&(o._pt&&(o=Yf(o,i)),o&&o.modifier&&o.modifier(n[i],e,t[a],i))},Ta=function(e,n){return{name:e,headless:1,rawVars:1,init:function(i,a,o){o._onInit=function(s){var l,u;if(_e(a)&&(l={},Le(a,function(d){return l[d]=1}),a=l),n){l={};for(u in a)l[u]=n(a[u]);a=l}qf(s,a)}}}},Ue=qr.registerPlugin({name:"attr",init:function(e,n,t,i,a){var o,s,l;this.tween=t;for(o in n)l=e.getAttribute(o)||"",s=this.add(e,"setAttribute",(l||0)+"",n[o],i,a,0,0,o),s.op=o,s.b=l,this._props.push(o)},render:function(e,n){for(var t=n._pt;t;)ze?t.set(t.t,t.p,t.b,t):t.r(e,t.d),t=t._next}},{name:"endArray",headless:1,init:function(e,n){for(var t=n.length;t--;)this.add(e,t,e[t]||0,n[t],0,0,0,0,0,1)}},Ta("roundProps",Ka),Ta("modifiers"),Ta("snap",ku))||qr;pe.version=Fe.version=Ue.version="3.15.0";ru=1;xo()&&yi();$.Power0;$.Power1;$.Power2;$.Power3;$.Power4;$.Linear;$.Quad;$.Cubic;$.Quart;$.Quint;$.Strong;$.Elastic;$.Back;$.SteppedEase;$.Bounce;$.Sine;$.Expo;$.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ms,tt,Qt,Oo,vt,Ds,Fo,Gf=function(){return typeof window<"u"},qn={},yt=180/Math.PI,ei=Math.PI/180,Wt=Math.atan2,Rs=1e8,No=/([A-Z])/g,Xf=/(left|right|width|margin|padding|x)/i,Vf=/[\s,\(]\S/,Bn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},eo=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},Zf=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},Kf=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},Jf=function(e,n){return n.set(n.t,n.p,e===1?n.e:e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},Qf=function(e,n){var t=n.s+n.c*e;n.set(n.t,n.p,~~(t+(t<0?-.5:.5))+n.u,n)},Nu=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},ju=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},ep=function(e,n,t){return e.style[n]=t},np=function(e,n,t){return e.style.setProperty(n,t)},tp=function(e,n,t){return e._gsap[n]=t},ip=function(e,n,t){return e._gsap.scaleX=e._gsap.scaleY=t},rp=function(e,n,t,i,a){var o=e._gsap;o.scaleX=o.scaleY=t,o.renderTransform(a,o)},ap=function(e,n,t,i,a){var o=e._gsap;o[n]=t,o.renderTransform(a,o)},oe="transform",He=oe+"Origin",op=function r(e,n){var t=this,i=this.target,a=i.style,o=i._gsap;if(e in qn&&a){if(this.tfm=this.tfm||{},e!=="transform")e=Bn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(s){return t.tfm[s]=Nn(i,s)}):this.tfm[e]=o.x?o[e]:Nn(i,e),e===He&&(this.tfm.zOrigin=o.zOrigin);else return Bn.transform.split(",").forEach(function(s){return r.call(t,s,n)});if(this.props.indexOf(oe)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(He,n,"")),e=oe}(a||n)&&this.props.push(e,n,a[e])},Lu=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},sp=function(){var e=this.props,n=this.target,t=n.style,i=n._gsap,a,o;for(a=0;a<e.length;a+=3)e[a+1]?e[a+1]===2?n[e[a]](e[a+2]):n[e[a]]=e[a+2]:e[a+2]?t[e[a]]=e[a+2]:t.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(No,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),a=Fo(),(!a||!a.isStart)&&!t[oe]&&(Lu(t),i.zOrigin&&t[He]&&(t[He]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},$u=function(e,n){var t={target:e,props:[],revert:sp,save:op};return e._gsap||Ue.core.getCache(e),n&&e.style&&e.nodeType&&n.split(",").forEach(function(i){return t.save(i)}),t},Hu,no=function(e,n){var t=tt.createElementNS?tt.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):tt.createElement(e);return t&&t.style?t:tt.createElement(e)},Qe=function r(e,n,t){var i=getComputedStyle(e);return i[n]||i.getPropertyValue(n.replace(No,"-$1").toLowerCase())||i.getPropertyValue(n)||!t&&r(e,gi(n)||n,1)||""},Os="O,Moz,ms,Ms,Webkit".split(","),gi=function(e,n,t){var i=n||vt,a=i.style,o=5;if(e in a&&!t)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Os[o]+e in a););return o<0?null:(o===3?"ms":o>=0?Os[o]:"")+e},to=function(){Gf()&&window.document&&(Ms=window,tt=Ms.document,Qt=tt.documentElement,vt=no("div")||{style:{}},no("div"),oe=gi(oe),He=oe+"Origin",vt.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Hu=!!gi("perspective"),Fo=Ue.core.reverting,Oo=1)},Fs=function(e){var n=e.ownerSVGElement,t=no("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),a;i.style.display="block",t.appendChild(i),Qt.appendChild(t);try{a=i.getBBox()}catch{}return t.removeChild(i),Qt.removeChild(t),a},Ns=function(e,n){for(var t=n.length;t--;)if(e.hasAttribute(n[t]))return e.getAttribute(n[t])},Uu=function(e){var n,t;try{n=e.getBBox()}catch{n=Fs(e),t=1}return n&&(n.width||n.height)||t||(n=Fs(e)),n&&!n.width&&!n.x&&!n.y?{x:+Ns(e,["x","cx","x1"])||0,y:+Ns(e,["y","cy","y1"])||0,width:0,height:0}:n},Wu=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Uu(e))},ut=function(e,n){if(n){var t=e.style,i;n in qn&&n!==He&&(n=oe),t.removeProperty?(i=n.substr(0,2),(i==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),t.removeProperty(i==="--"?n:n.replace(No,"-$1").toLowerCase())):t.removeAttribute(n)}},it=function(e,n,t,i,a,o){var s=new $e(e._pt,n,t,0,1,o?ju:Nu);return e._pt=s,s.b=i,s.e=a,e._props.push(t),s},js={deg:1,rad:1,turn:1},lp={grid:1,flex:1},dt=function r(e,n,t,i){var a=parseFloat(t)||0,o=(t+"").trim().substr((a+"").length)||"px",s=vt.style,l=Xf.test(n),u=e.tagName.toLowerCase()==="svg",d=(u?"client":"offset")+(l?"Width":"Height"),h=100,c=i==="px",p=i==="%",y,f,b,w;if(i===o||!a||js[i]||js[o])return a;if(o!=="px"&&!c&&(a=r(e,n,t,"px")),w=e.getCTM&&Wu(e),(p||o==="%")&&(qn[n]||~n.indexOf("adius")))return y=w?e.getBBox()[l?"width":"height"]:e[d],fe(p?a/y*h:a/100*y);if(s[l?"width":"height"]=h+(c?o:i),f=i!=="rem"&&~n.indexOf("adius")||i==="em"&&e.appendChild&&!u?e:e.parentNode,w&&(f=(e.ownerSVGElement||{}).parentNode),(!f||f===tt||!f.appendChild)&&(f=tt.body),b=f._gsap,b&&p&&b.width&&l&&b.time===Ke.time&&!b.uncache)return fe(a/b.width*h);if(p&&(n==="height"||n==="width")){var m=e.style[n];e.style[n]=h+i,y=e[d],m?e.style[n]=m:ut(e,n)}else(p||o==="%")&&!lp[Qe(f,"display")]&&(s.position=Qe(e,"position")),f===e&&(s.position="static"),f.appendChild(vt),y=vt[d],f.removeChild(vt),s.position="absolute";return l&&p&&(b=Pt(f),b.time=Ke.time,b.width=f[d]),fe(c?y*a/h:y&&a?h/y*a:0)},Nn=function(e,n,t,i){var a;return Oo||to(),n in Bn&&n!=="transform"&&(n=Bn[n],~n.indexOf(",")&&(n=n.split(",")[0])),qn[n]&&n!=="transform"?(a=Ki(e,i),a=n!=="transformOrigin"?a[n]:a.svg?a.origin:Xr(Qe(e,He))+" "+a.zOrigin+"px"):(a=e.style[n],(!a||a==="auto"||i||~(a+"").indexOf("calc("))&&(a=Gr[n]&&Gr[n](e,n,t)||Qe(e,n)||lu(e,n)||(n==="opacity"?1:0))),t&&!~(a+"").trim().indexOf(" ")?dt(e,n,a,t)+t:a},up=function(e,n,t,i){if(!t||t==="none"){var a=gi(n,e,1),o=a&&Qe(e,a,1);o&&o!==t?(n=a,t=o):n==="borderColor"&&(t=Qe(e,"borderTopColor"))}var s=new $e(this._pt,e.style,n,0,1,Ru),l=0,u=0,d,h,c,p,y,f,b,w,m,g,v,k;if(s.b=t,s.e=i,t+="",i+="",i.substring(0,6)==="var(--"&&(i=Qe(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(f=e.style[n],e.style[n]=i,i=Qe(e,n)||i,f?e.style[n]=f:ut(e,n)),d=[t,i],Su(d),t=d[0],i=d[1],c=t.match(Vt)||[],k=i.match(Vt)||[],k.length){for(;h=Vt.exec(i);)b=h[0],m=i.substring(l,h.index),y?y=(y+1)%5:(m.substr(-5)==="rgba("||m.substr(-5)==="hsla(")&&(y=1),b!==(f=c[u++]||"")&&(p=parseFloat(f)||0,v=f.substr((p+"").length),b.charAt(1)==="="&&(b=Jt(p,b)+v),w=parseFloat(b),g=b.substr((w+"").length),l=Vt.lastIndex-g.length,g||(g=g||en.units[n]||v,l===i.length&&(i+=g,s.e+=g)),v!==g&&(p=dt(e,n,f,g)||0),s._pt={_next:s._pt,p:m||u===1?m:",",s:p,c:w-p,m:y&&y<4||n==="zIndex"?Math.round:0});s.c=l<i.length?i.substring(l,i.length):""}else s.r=n==="display"&&i==="none"?ju:Nu;return iu.test(i)&&(s.e=0),this._pt=s,s},Ls={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},dp=function(e){var n=e.split(" "),t=n[0],i=n[1]||"50%";return(t==="top"||t==="bottom"||i==="left"||i==="right")&&(e=t,t=i,i=e),n[0]=Ls[t]||t,n[1]=Ls[i]||i,n.join(" ")},cp=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var t=n.t,i=t.style,a=n.u,o=t._gsap,s,l,u;if(a==="all"||a===!0)i.cssText="",l=1;else for(a=a.split(","),u=a.length;--u>-1;)s=a[u],qn[s]&&(l=1,s=s==="transformOrigin"?He:oe),ut(t,s);l&&(ut(t,oe),o&&(o.svg&&t.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ki(t,1),o.uncache=1,Lu(i)))}},Gr={clearProps:function(e,n,t,i,a){if(a.data!=="isFromStart"){var o=e._pt=new $e(e._pt,n,t,0,0,cp);return o.u=i,o.pr=-10,o.tween=a,e._props.push(t),1}}},Zi=[1,0,0,1,0,0],Yu={},qu=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},$s=function(e){var n=Qe(e,oe);return qu(n)?Zi:n.substr(7).match(tu).map(fe)},jo=function(e,n){var t=e._gsap||Pt(e),i=e.style,a=$s(e),o,s,l,u;return t.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,a=[l.a,l.b,l.c,l.d,l.e,l.f],a.join(",")==="1,0,0,1,0,0"?Zi:a):(a===Zi&&!e.offsetParent&&e!==Qt&&!t.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,s=e.nextElementSibling,Qt.appendChild(e)),a=$s(e),l?i.display=l:ut(e,"display"),u&&(s?o.insertBefore(e,s):o?o.appendChild(e):Qt.removeChild(e))),n&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},io=function(e,n,t,i,a,o){var s=e._gsap,l=a||jo(e,!0),u=s.xOrigin||0,d=s.yOrigin||0,h=s.xOffset||0,c=s.yOffset||0,p=l[0],y=l[1],f=l[2],b=l[3],w=l[4],m=l[5],g=n.split(" "),v=parseFloat(g[0])||0,k=parseFloat(g[1])||0,x,T,A,z;t?l!==Zi&&(T=p*b-y*f)&&(A=v*(b/T)+k*(-f/T)+(f*m-b*w)/T,z=v*(-y/T)+k*(p/T)-(p*m-y*w)/T,v=A,k=z):(x=Uu(e),v=x.x+(~g[0].indexOf("%")?v/100*x.width:v),k=x.y+(~(g[1]||g[0]).indexOf("%")?k/100*x.height:k)),i||i!==!1&&s.smooth?(w=v-u,m=k-d,s.xOffset=h+(w*p+m*f)-w,s.yOffset=c+(w*y+m*b)-m):s.xOffset=s.yOffset=0,s.xOrigin=v,s.yOrigin=k,s.smooth=!!i,s.origin=n,s.originIsAbsolute=!!t,e.style[He]="0px 0px",o&&(it(o,s,"xOrigin",u,v),it(o,s,"yOrigin",d,k),it(o,s,"xOffset",h,s.xOffset),it(o,s,"yOffset",c,s.yOffset)),e.setAttribute("data-svg-origin",v+" "+k)},Ki=function(e,n){var t=e._gsap||new Pu(e);if("x"in t&&!n&&!t.uncache)return t;var i=e.style,a=t.scaleX<0,o="px",s="deg",l=getComputedStyle(e),u=Qe(e,He)||"0",d,h,c,p,y,f,b,w,m,g,v,k,x,T,A,z,C,E,H,Y,Z,se,ne,G,W,ye,Me,We,le,Xn,ce,Se;return d=h=c=f=b=w=m=g=v=0,p=y=1,t.svg=!!(e.getCTM&&Wu(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[oe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[oe]!=="none"?l[oe]:"")),i.scale=i.rotate=i.translate="none"),T=jo(e,t.svg),t.svg&&(t.uncache?(W=e.getBBox(),u=t.xOrigin-W.x+"px "+(t.yOrigin-W.y)+"px",G=""):G=!n&&e.getAttribute("data-svg-origin"),io(e,G||u,!!G||t.originIsAbsolute,t.smooth!==!1,T)),k=t.xOrigin||0,x=t.yOrigin||0,T!==Zi&&(E=T[0],H=T[1],Y=T[2],Z=T[3],d=se=T[4],h=ne=T[5],T.length===6?(p=Math.sqrt(E*E+H*H),y=Math.sqrt(Z*Z+Y*Y),f=E||H?Wt(H,E)*yt:0,m=Y||Z?Wt(Y,Z)*yt+f:0,m&&(y*=Math.abs(Math.cos(m*ei))),t.svg&&(d-=k-(k*E+x*Y),h-=x-(k*H+x*Z))):(Se=T[6],Xn=T[7],Me=T[8],We=T[9],le=T[10],ce=T[11],d=T[12],h=T[13],c=T[14],A=Wt(Se,le),b=A*yt,A&&(z=Math.cos(-A),C=Math.sin(-A),G=se*z+Me*C,W=ne*z+We*C,ye=Se*z+le*C,Me=se*-C+Me*z,We=ne*-C+We*z,le=Se*-C+le*z,ce=Xn*-C+ce*z,se=G,ne=W,Se=ye),A=Wt(-Y,le),w=A*yt,A&&(z=Math.cos(-A),C=Math.sin(-A),G=E*z-Me*C,W=H*z-We*C,ye=Y*z-le*C,ce=Z*C+ce*z,E=G,H=W,Y=ye),A=Wt(H,E),f=A*yt,A&&(z=Math.cos(A),C=Math.sin(A),G=E*z+H*C,W=se*z+ne*C,H=H*z-E*C,ne=ne*z-se*C,E=G,se=W),b&&Math.abs(b)+Math.abs(f)>359.9&&(b=f=0,w=180-w),p=fe(Math.sqrt(E*E+H*H+Y*Y)),y=fe(Math.sqrt(ne*ne+Se*Se)),A=Wt(se,ne),m=Math.abs(A)>2e-4?A*yt:0,v=ce?1/(ce<0?-ce:ce):0),t.svg&&(G=e.getAttribute("transform"),t.forceCSS=e.setAttribute("transform","")||!qu(Qe(e,oe)),G&&e.setAttribute("transform",G))),Math.abs(m)>90&&Math.abs(m)<270&&(a?(p*=-1,m+=f<=0?180:-180,f+=f<=0?180:-180):(y*=-1,m+=m<=0?180:-180)),n=n||t.uncache,t.x=d-((t.xPercent=d&&(!n&&t.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*t.xPercent/100:0)+o,t.y=h-((t.yPercent=h&&(!n&&t.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*t.yPercent/100:0)+o,t.z=c+o,t.scaleX=fe(p),t.scaleY=fe(y),t.rotation=fe(f)+s,t.rotationX=fe(b)+s,t.rotationY=fe(w)+s,t.skewX=m+s,t.skewY=g+s,t.transformPerspective=v+o,(t.zOrigin=parseFloat(u.split(" ")[2])||!n&&t.zOrigin||0)&&(i[He]=Xr(u)),t.xOffset=t.yOffset=0,t.force3D=en.force3D,t.renderTransform=t.svg?fp:Hu?Gu:hp,t.uncache=0,t},Xr=function(e){return(e=e.split(" "))[0]+" "+e[1]},Aa=function(e,n,t){var i=Te(n);return fe(parseFloat(n)+parseFloat(dt(e,"x",t+"px",i)))+i},hp=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,Gu(e,n)},pt="0deg",Ai="0px",mt=") ",Gu=function(e,n){var t=n||this,i=t.xPercent,a=t.yPercent,o=t.x,s=t.y,l=t.z,u=t.rotation,d=t.rotationY,h=t.rotationX,c=t.skewX,p=t.skewY,y=t.scaleX,f=t.scaleY,b=t.transformPerspective,w=t.force3D,m=t.target,g=t.zOrigin,v="",k=w==="auto"&&e&&e!==1||w===!0;if(g&&(h!==pt||d!==pt)){var x=parseFloat(d)*ei,T=Math.sin(x),A=Math.cos(x),z;x=parseFloat(h)*ei,z=Math.cos(x),o=Aa(m,o,T*z*-g),s=Aa(m,s,-Math.sin(x)*-g),l=Aa(m,l,A*z*-g+g)}b!==Ai&&(v+="perspective("+b+mt),(i||a)&&(v+="translate("+i+"%, "+a+"%) "),(k||o!==Ai||s!==Ai||l!==Ai)&&(v+=l!==Ai||k?"translate3d("+o+", "+s+", "+l+") ":"translate("+o+", "+s+mt),u!==pt&&(v+="rotate("+u+mt),d!==pt&&(v+="rotateY("+d+mt),h!==pt&&(v+="rotateX("+h+mt),(c!==pt||p!==pt)&&(v+="skew("+c+", "+p+mt),(y!==1||f!==1)&&(v+="scale("+y+", "+f+mt),m.style[oe]=v||"translate(0, 0)"},fp=function(e,n){var t=n||this,i=t.xPercent,a=t.yPercent,o=t.x,s=t.y,l=t.rotation,u=t.skewX,d=t.skewY,h=t.scaleX,c=t.scaleY,p=t.target,y=t.xOrigin,f=t.yOrigin,b=t.xOffset,w=t.yOffset,m=t.forceCSS,g=parseFloat(o),v=parseFloat(s),k,x,T,A,z;l=parseFloat(l),u=parseFloat(u),d=parseFloat(d),d&&(d=parseFloat(d),u+=d,l+=d),l||u?(l*=ei,u*=ei,k=Math.cos(l)*h,x=Math.sin(l)*h,T=Math.sin(l-u)*-c,A=Math.cos(l-u)*c,u&&(d*=ei,z=Math.tan(u-d),z=Math.sqrt(1+z*z),T*=z,A*=z,d&&(z=Math.tan(d),z=Math.sqrt(1+z*z),k*=z,x*=z)),k=fe(k),x=fe(x),T=fe(T),A=fe(A)):(k=h,A=c,x=T=0),(g&&!~(o+"").indexOf("px")||v&&!~(s+"").indexOf("px"))&&(g=dt(p,"x",o,"px"),v=dt(p,"y",s,"px")),(y||f||b||w)&&(g=fe(g+y-(y*k+f*T)+b),v=fe(v+f-(y*x+f*A)+w)),(i||a)&&(z=p.getBBox(),g=fe(g+i/100*z.width),v=fe(v+a/100*z.height)),z="matrix("+k+","+x+","+T+","+A+","+g+","+v+")",p.setAttribute("transform",z),m&&(p.style[oe]=z)},pp=function(e,n,t,i,a){var o=360,s=_e(a),l=parseFloat(a)*(s&&~a.indexOf("rad")?yt:1),u=l-i,d=i+u+"deg",h,c;return s&&(h=a.split("_")[1],h==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),h==="cw"&&u<0?u=(u+o*Rs)%o-~~(u/o)*o:h==="ccw"&&u>0&&(u=(u-o*Rs)%o-~~(u/o)*o)),e._pt=c=new $e(e._pt,n,t,i,u,Zf),c.e=d,c.u="deg",e._props.push(t),c},Hs=function(e,n){for(var t in n)e[t]=n[t];return e},mp=function(e,n,t){var i=Hs({},t._gsap),a="perspective,force3D,transformOrigin,svgOrigin",o=t.style,s,l,u,d,h,c,p,y;i.svg?(u=t.getAttribute("transform"),t.setAttribute("transform",""),o[oe]=n,s=Ki(t,1),ut(t,oe),t.setAttribute("transform",u)):(u=getComputedStyle(t)[oe],o[oe]=n,s=Ki(t,1),o[oe]=u);for(l in qn)u=i[l],d=s[l],u!==d&&a.indexOf(l)<0&&(p=Te(u),y=Te(d),h=p!==y?dt(t,l,u,y):parseFloat(u),c=parseFloat(d),e._pt=new $e(e._pt,s,l,h,c-h,eo),e._pt.u=y||0,e._props.push(l));Hs(s,i)};Le("padding,margin,Width,Radius",function(r,e){var n="Top",t="Right",i="Bottom",a="Left",o=(e<3?[n,t,i,a]:[n+a,n+t,i+t,i+a]).map(function(s){return e<2?r+s:"border"+s+r});Gr[e>1?"border"+r:r]=function(s,l,u,d,h){var c,p;if(arguments.length<4)return c=o.map(function(y){return Nn(s,y,u)}),p=c.join(" "),p.split(c[0]).length===5?c[0]:p;c=(d+"").split(" "),p={},o.forEach(function(y,f){return p[y]=c[f]=c[f]||c[(f-1)/2|0]}),s.init(l,p,h)}});var Xu={name:"css",register:to,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,t,i,a){var o=this._props,s=e.style,l=t.vars.startAt,u,d,h,c,p,y,f,b,w,m,g,v,k,x,T,A,z;Oo||to(),this.styles=this.styles||$u(e),A=this.styles.props,this.tween=t;for(f in n)if(f!=="autoRound"&&(d=n[f],!(Ze[f]&&Bu(f,n,t,i,e,a)))){if(p=typeof d,y=Gr[f],p==="function"&&(d=d.call(t,i,e,a),p=typeof d),p==="string"&&~d.indexOf("random(")&&(d=Gi(d)),y)y(this,e,f,d,t)&&(T=1);else if(f.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(f)+"").trim(),d+="",ot.lastIndex=0,ot.test(u)||(b=Te(u),w=Te(d),w?b!==w&&(u=dt(e,f,u,w)+w):b&&(d+=b)),this.add(s,"setProperty",u,d,i,a,0,0,f),o.push(f),A.push(f,0,s[f]);else if(p!=="undefined"){if(l&&f in l?(u=typeof l[f]=="function"?l[f].call(t,i,e,a):l[f],_e(u)&&~u.indexOf("random(")&&(u=Gi(u)),Te(u+"")||u==="auto"||(u+=en.units[f]||Te(Nn(e,f))||""),(u+"").charAt(1)==="="&&(u=Nn(e,f))):u=Nn(e,f),c=parseFloat(u),m=p==="string"&&d.charAt(1)==="="&&d.substr(0,2),m&&(d=d.substr(2)),h=parseFloat(d),f in Bn&&(f==="autoAlpha"&&(c===1&&Nn(e,"visibility")==="hidden"&&h&&(c=0),A.push("visibility",0,s.visibility),it(this,s,"visibility",c?"inherit":"hidden",h?"inherit":"hidden",!h)),f!=="scale"&&f!=="transform"&&(f=Bn[f],~f.indexOf(",")&&(f=f.split(",")[0]))),g=f in qn,g){if(this.styles.save(f),z=d,p==="string"&&d.substring(0,6)==="var(--"){if(d=Qe(e,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var C=e.style.perspective;e.style.perspective=d,d=Qe(e,"perspective"),C?e.style.perspective=C:ut(e,"perspective")}h=parseFloat(d)}if(v||(k=e._gsap,k.renderTransform&&!n.parseTransform||Ki(e,n.parseTransform),x=n.smoothOrigin!==!1&&k.smooth,v=this._pt=new $e(this._pt,s,oe,0,1,k.renderTransform,k,0,-1),v.dep=1),f==="scale")this._pt=new $e(this._pt,k,"scaleY",k.scaleY,(m?Jt(k.scaleY,m+h):h)-k.scaleY||0,eo),this._pt.u=0,o.push("scaleY",f),f+="X";else if(f==="transformOrigin"){A.push(He,0,s[He]),d=dp(d),k.svg?io(e,d,0,x,0,this):(w=parseFloat(d.split(" ")[2])||0,w!==k.zOrigin&&it(this,k,"zOrigin",k.zOrigin,w),it(this,s,f,Xr(u),Xr(d)));continue}else if(f==="svgOrigin"){io(e,d,1,x,0,this);continue}else if(f in Yu){pp(this,k,f,c,m?Jt(c,m+d):d);continue}else if(f==="smoothOrigin"){it(this,k,"smooth",k.smooth,d);continue}else if(f==="force3D"){k[f]=d;continue}else if(f==="transform"){mp(this,d,e);continue}}else f in s||(f=gi(f)||f);if(g||(h||h===0)&&(c||c===0)&&!Vf.test(d)&&f in s)b=(u+"").substr((c+"").length),h||(h=0),w=Te(d)||(f in en.units?en.units[f]:b),b!==w&&(c=dt(e,f,u,w)),this._pt=new $e(this._pt,g?k:s,f,c,(m?Jt(c,m+h):h)-c,!g&&(w==="px"||f==="zIndex")&&n.autoRound!==!1?Qf:eo),this._pt.u=w||0,g&&z!==d?(this._pt.b=u,this._pt.e=z,this._pt.r=Jf):b!==w&&w!=="%"&&(this._pt.b=u,this._pt.r=Kf);else if(f in s)up.call(this,e,f,u,m?m+d:d);else if(f in e)this.add(e,f,u||e[f],m?m+d:d,i,a);else if(f!=="parseTransform"){Ao(f,d);continue}g||(f in s?A.push(f,0,s[f]):typeof e[f]=="function"?A.push(f,2,e[f]()):A.push(f,1,u||e[f])),o.push(f)}}T&&Ou(this)},render:function(e,n){if(n.tween._time||!Fo())for(var t=n._pt;t;)t.r(e,t.d),t=t._next;else n.styles.revert()},get:Nn,aliases:Bn,getSetter:function(e,n,t){var i=Bn[n];return i&&i.indexOf(",")<0&&(n=i),n in qn&&n!==He&&(e._gsap.x||Nn(e,"x"))?t&&Ds===t?n==="scale"?ip:tp:(Ds=t||{})&&(n==="scale"?rp:ap):e.style&&!zo(e.style[n])?ep:~n.indexOf("-")?np:Do(e,n)},core:{_removeProperty:ut,_getMatrix:jo}};Ue.utils.checkPrefix=gi;Ue.core.getStyleSaver=$u;(function(r,e,n,t){var i=Le(r+","+e+","+n,function(a){qn[a]=1});Le(e,function(a){en.units[a]="deg",Yu[a]=1}),Bn[i[13]]=r+","+e,Le(t,function(a){var o=a.split(":");Bn[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Le("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){en.units[r]="px"});Ue.registerPlugin(Xu);var Ir=Ue.registerPlugin(Xu)||Ue;Ir.core.Tween;const yp=` A Tutorial on Pointers and Arrays in C        

* * *

Welcome to Ted Jensen's Tutorial on  
Pointers and Arrays in C


------------------------------------------------------------------

**Version 1.2**  
  
Last Updated in Feb. 2001  
(See Notes at bottom of this page.)

* * *

This tutorial covers the basics of using pointers and arrays in the C programming language.

*   You can [Read it Online](cpoint.htm):
*   [Download](ptrtut12.zip) it as a set of HTML pages compressed to a .ZIP File
*   [Download](ptrtut12.exe) it as the same set of pages compressed to a .EXE File which unzips itself under MS-DOS or Windows

The tutorial takes up about a dozen web pages. The printed version from either your browser or the text file is going to run around 2500 lines. (About 50 pages at 55 lines/page).

If you have questions or comments you can email me at [tjensen@ix.netcom.com](mailto:tjensen@ix.netcom.com).

* * *

Notes regarding latest revision 1.2:  Feb. 2002

I still program using an MS-DOS 16 bit command line compiler.  Victor Volkman of [http://www.hal9k.com/cug](http://www.hal9k.com/cug) was kind enough to point out that most PC compilers today are 32 bit systems and as a result sizeof(int) is different on these systems.  This version assumes a 32 bit system when discussing sizeof(int).  This is made clear in Chapter 1.

I've no longer offer a plain text version of the tutorial.  If you feel this is a must, please contact me.`,gp=`PREFACE
-------

This document is intended to introduce pointers to beginning programmers in the C programming language. Over several years of reading and contributing to various conferences on C including those on the FidoNet and UseNet, I have noted a large number of newcomers to C appear to have a difficult time in grasping the fundamentals of pointers. I therefore undertook the task of trying to explain them in plain language with lots of examples.

The first version of this document was placed in the public domain, as is this one. It was picked up by Bob Stout who included it as a file called PTR-HELP.TXT in his widely distributed collection of SNIPPETS. Since that original 1995 release, I have added a significant amount of material and made some minor corrections in the original work.

In the HTML version 1.1 I made a number of minor changes to the wording as a result of comments emailed to me from around the world.  In version 1.2 I updated the first two chapters to acknowledge the shift from 16 bit compilers to 32 bit compilers on PCs.

### Acknowledgements:

There are so many people who have unknowingly contributed to this work because of the questions they have posed in the FidoNet C Echo, or the UseNet Newsgroup comp.lang.c, or several other conferences in other networks, that it would be impossible to list them all. Special thanks go to Bob Stout who was kind enough to include the first version of this material in his SNIPPETS file.

### About the Author:

Ted Jensen is a retired Electronics Engineer who worked as a hardware designer or manager of hardware designers in the field of magnetic recording. Programming has been a hobby of his off and on since 1968 when he learned how to keypunch cards for submission to be run on a mainframe. (The mainframe had 64K of magnetic core memory!).

### Use of this Material:

Everything contained herein is hereby released to the Public Domain. Any person may copy or distribute this material in any manner they wish. The only thing I ask is that if this material is used as a teaching aid in a class, I would appreciate it if it were distributed in its entirety, i.e. including all chapters, the preface and the introduction. I would also appreciate it if, under such circumstances, the instructor of such a class would drop me a note at one of the addresses below informing me of this. I have written this with the hope that it will be useful to others and since I'm not asking any financial remuneration, the only way I know that I have at least partially reached that goal is via feedback from those who find this material useful.

By the way, you needn't be an instructor or teacher to contact me. I would appreciate a note from anyone who finds the material useful, or who has constructive criticism to offer. I'm also willing to answer questions submitted by email at the addresses shown below.

### Other versions of this document:

In addition to this hypertext version of this document, I have made available other versions more suitable for printing or for downloading of the entire document. If you are interested in keeping up to date on my progress in that area, or want to check for more recent versions of this document, see https://github.com/jflaherty/ptrtut13/releases

Ted Jensen  
Redwood City, California  
Feb. 2000  

[Introduction](introx.md)

[Back to Table of Contents](pointers.md)
`,bp=`INTRODUCTION
------------

If you want to be proficient in the writing of code in the C programming language, you must have a thorough working knowledge of how to use pointers. Unfortunately, C pointers appear to represent a stumbling block to newcomers, particularly those coming from other computer languages such as Fortran, Pascal or Basic.

To aid those newcomers in the understanding of pointers I have written the following material. To get the maximum benefit from this material, I feel it is important that the user be able to run the code in the various listings contained in the article. I have attempted, therefore, to keep all code ANSI compliant so that it will work with any ANSI compliant compiler. I have also tried to carefully block the code within the text. That way, with the help of an ASCII text editor, you can copy a given block of code to a new file and compile it on your system. I recommend that readers do this as it will help in understanding the material.

[Chapter 1: What is a Pointer?](ch1x.md)

[Back to Table of Contents](pointers.md)
`,kp=`CHAPTER 1: What is a pointer?
-----------------------------

One of those things beginners in C find difficult is the concept of pointers. The purpose of this tutorial is to provide an introduction to pointers and their use to these beginners.

I have found that often the main reason beginners have a problem with pointers is that they have a weak or minimal feeling for variables, (as they are used in C). Thus we start with a discussion of C variables in general.

A variable in a program is something with a name, the value of which can vary. The way the compiler and linker handles this is that it assigns a specific block of memory within the computer to hold the value of that variable. The size of that block depends on the range over which the variable is allowed to vary. For example, on 32 bit PC's the size of an integer variable is 4 bytes. On older 16 bit PCs integers were 2 bytes.  In C the size of a variable type such as an integer need not be the same on all types of machines.  Further more there is more than one type of integer variable in C.  We have integers, long integers and short integers which you can read up on in any basic text on C.  This document assumes the use of a 32 bit system with 4 byte integers.

If you want to know the size of the various types of integers on your system, running the following code will give you that information.

	#include <stdio.h>
	
	int main()  
	{  
		printf("size of a short is %d\\\\n", sizeof(short));  
		printf("size of a int is %d\\\\n", sizeof(int));  
		printf("size of a long is %d\\\\n", sizeof(long));  
	}

When we declare a variable we inform the compiler of two things, the name of the variable and the type of the variable. For example, we declare a variable of type integer with the name **k** by writing:

    
        int k; 
    

On seeing the "int" part of this statement the compiler sets aside 4 bytes of memory (on a PC) to hold the value of the integer. It also sets up a symbol table. In that table it adds the symbol **k** and the relative address in memory where those 4 bytes were set aside.

Thus, later if we write:

    
        k = 2; 
    

we expect that, at run time when this statement is executed, the value 2 will be placed in that memory location reserved for the storage of the value of **k**. In C we refer to a variable such as the integer **k** as an "object".

In a sense there are two "values" associated with the object **k**. One is the value of the integer stored there (2 in the above example) and the other the "value" of the memory location, i.e., the address of **k**. Some texts refer to these two values with the nomenclature _**rvalue**_ (right value, pronounced "are value") and _**lvalue**_ (left value, pronounced "el value") respectively.

In some languages, the lvalue is the value permitted on the left side of the assignment operator '=' (i.e. the address where the result of evaluation of the right side ends up). The rvalue is that which is on the right side of the assignment statement, the **2** above. Rvalues cannot be used on the left side of the assignment statement. Thus: **2 = k**; is illegal.

Actually, the above definition of "lvalue" is somewhat modified for C. According to K&R II (page 197): \\[1\\]

> "An _**object**_ is a named region of storage; an _**lvalue**_ is an expression referring to an object."

However, at this point, the definition originally cited above is sufficient. As we become more familiar with pointers we will go into more detail on this.

Okay, now consider:

    
       int j, k; 
    
        k = 2; 
        j = 7;    <-- line 1 
        k = j;    <-- line 2 
    

In the above, the compiler interprets the **j** in line 1 as the address of the variable **j** (its lvalue) and creates code to copy the value 7 to that address. In line 2, however, the **j** is interpreted as its rvalue (since it is on the right hand side of the assignment operator '='). That is, here the **j** refers to the value _**stored**_ at the memory location set aside for **j**, in this case 7. So, the 7 is copied to the address designated by the lvalue of **k**.

In all of these examples, we are using 4 byte integers so all copying of rvalues from one storage location to the other is done by copying 4 bytes. Had we been using two byte integers, we would be copying 2 bytes.

Now, let's say that we have a reason for wanting a variable designed to hold an lvalue (an address). The size required to hold such a value depends on the system. On older desk top computers with 64K of memory total, the address of any point in memory can be contained in 2 bytes. Computers with more memory would require more bytes to hold an address.  The actual size required is not too important so long as we have a way of informing the compiler that what we want to store is an address.

Such a variable is called a _**pointer variable**_ (for reasons which hopefully will become clearer a little later). In C when we define a pointer variable we do so by preceding its name with an asterisk. In C we also give our pointer a type which, in this case, refers to the type of data stored at the address we will be storing in our pointer. For example, consider the variable declaration:

    
       int *ptr;
    

**ptr** is the name of our variable (just as **k** was the name of our integer variable). The '\\*' informs the compiler that we want a pointer variable, i.e. to set aside however many bytes is required to store an address in memory. The **int** says that we intend to use our pointer variable to store the address of an integer. Such a pointer is said to "point to" an integer. However, note that when we wrote **int k;** we did not give **k** a value. If this definition is made outside of any function ANSI compliant compilers will initialize it to zero. Similarly, **ptr** has no value, that is we haven't stored an address in it in the above declaration. In this case, again if the declaration is outside of any function, it is initialized to a value guaranteed in such a way that it is guaranteed to not point to any C object or function. A pointer initialized in this manner is called a "null" pointer.

The actual bit pattern used for a null pointer may or may not evaluate to zero since it depends on the specific system on which the code is developed. To make the source code compatible between various compilers on various systems, a macro is used to represent a null pointer. That macro goes under the name NULL. Thus, setting the value of a pointer using the NULL macro, as with an assignment statement such as ptr = NULL, guarantees that the pointer has become a null pointer. Similarly, just as one can test for an integer value of zero, as in **if(k == 0)**, we can test for a null pointer using **if (ptr == NULL)**.

But, back to using our new variable **ptr**. Suppose now that we want to store in **ptr** the address of our integer variable **k**. To do this we use the unary **&** operator and write:

    
        ptr = &k; 
    

What the **&** operator does is retrieve the lvalue (address) of **k**, even though **k** is on the right hand side of the assignment operator '=', and copies that to the contents of our pointer ptr. Now, ptr is said to "point to" **k**. Bear with us now, there is only one more operator we need to discuss.

The "dereferencing operator" is the asterisk and it is used as follows:

    
        *ptr = 7; 
    

will copy 7 to the address pointed to by **ptr**. Thus if **ptr** "points to" (contains the address of) **k**, the above statement will set the value of **k** to 7. That is, when we use the '\\*' this way we are referring to the value of that which ptr is pointing to, not the value of the pointer itself.

Similarly, we could write:

    
     printf("%d\\n",*ptr); 
    

to print to the screen the integer value stored at the address pointed to by **ptr**;.

One way to see how all this stuff fits together would be to run the following program and then review the code and the output carefully.

    
    ------------ Program 1.1 --------------------------------- 
    
    /* Program 1.1 from PTRTUT10.TXT   6/10/97 */
    
    #include <stdio.h>
    
    int j, k;
    int *ptr;
    
    int main(void)
    {
        j = 1;
        k = 2;
        ptr = &k;
        printf("\\n");
        printf("j has the value %d and is stored at %p\\n", j, (void *)&j);
        printf("k has the value %d and is stored at %p\\n", k, (void *)&k);
        printf("ptr has the value %p and is stored at %p\\n", ptr, (void *)&ptr);
        printf("The value of the integer pointed to by ptr is %d\\n", *ptr);
    
        return 0;
    }
    

Note: We have yet to discuss those aspects of C which require the use of the **(void \\*)** expression used here. For now, include it in your test code. We'll explain the reason behind this expression later.

* * *

To review:

*   A variable is declared by giving it a type and a name (e.g. **int k;**)
*   A pointer variable is declared by giving it a type and a name (e.g. **int \\*ptr**) where the asterisk tells the compiler that the variable named **ptr** is a pointer variable and the type tells the compiler what type the pointer is to point to (integer in this case).
*   Once a variable is declared, we can get its address by preceding its name with the unary **&** operator, as in **&k**.
*   We can "dereference" a pointer, i.e. refer to the value of that which it points to, by using the unary '\\*' operator as in **\\*ptr**.
*   An "lvalue" of a variable is the value of its address, i.e. where it is stored in memory. The "rvalue" of a variable is the value stored in that variable (at that address).

### References for Chapter 1:

1.  "The C Programming Language" 2nd Edition  
    B. Kernighan and D. Ritchie  
    Prentice Hall  
    ISBN 0-13-110362-8  
    

[Chapter 2: Pointer Types and Arrays](ch2x.md)

[Back to Table of Contents](pointers.md)
`,vp=`CHAPTER 2: Pointer types and Arrays
-----------------------------------

Okay, let's move on. Let us consider why we need to identify the _**type**_ of variable that a pointer points to, as in:

    
         int *ptr;
    

One reason for doing this is so that later, once ptr "points to" something, if we write:

    
        *ptr = 2;
    

the compiler will know how many bytes to copy into that memory location pointed to by **ptr**. If **ptr** was declared as pointing to an integer, 4 bytes would be copied. Similarly for floats and doubles the appropriate number will be copied. But, defining the type that the pointer points to permits a number of other interesting ways a compiler can interpret code. For example, consider a block in memory consisting if ten integers in a row. That is, 40 bytes of memory are set aside to hold 10 integers.

Now, let's say we point our integer pointer **ptr** at the first of these integers. Furthermore lets say that integer is located at memory location 100 (decimal). What happens when we write:

    
        ptr + 1;
     
    

Because the compiler "knows" this is a pointer (i.e. its value is an address) and that it points to an integer (its current address, 100, is the address of an integer), it adds 4 to **ptr** instead of 1, so the pointer "points to" the **next** **integer**, at memory location 104. Similarly, were the **ptr** declared as a pointer to a short, it would add 2 to it instead of 1. The same goes for other data types such as floats, doubles, or even user defined data types such as structures. This is obviously not the same kind of "addition" that we normally think of. In C it is referred to as addition using "pointer arithmetic", a term which we will come back to later.

Similarly, since **++ptr** and **ptr++** are both equivalent to **ptr + 1** (though the point in the program when **ptr** is incremented may be different), incrementing a pointer using the unary ++ operator, either pre- or post-, increments the address it stores by the amount sizeof(type) where "type" is the type of the object pointed to. (i.e. 4 for an integer).

Since a block of 10 integers located contiguously in memory is, by definition, an array of integers, this brings up an interesting relationship between arrays and pointers.

Consider the following:

    
        int my_array[] = {1,23,17,4,-5,100}; 
    

Here we have an array containing 6 integers. We refer to each of these integers by means of a subscript to **my\\_array**, i.e. using **my\\_array\\[0\\]** through **my\\_array\\[5\\]**. But, we could alternatively access them via a pointer as follows:

    
        int *ptr;
        ptr = &my_array[0];       /* point our pointer at the first
                                     integer in our array */ 
    

And then we could print out our array either using the array notation or by dereferencing our pointer. The following code illustrates this:

    
    -----------  Program 2.1  -----------------------------------
    
    /* Program 2.1 from PTRTUT10.HTM   6/13/97 */
    
    #include <stdio.h>
    
    int my_array[] = {1,23,17,4,-5,100};
    int *ptr;
    
    int main(void)
    {
        int i;
        ptr = &my_array[0];     /* point our pointer to the first
                                          element of the array */
        printf("\\n\\n");
        for (i = 0; i < 6; i++)
        {
          printf("my_array[%d] = %d   ",i,my_array[i]);   /*<-- A */
          printf("ptr + %d = %d\\n",i, *(ptr + i));        /*<-- B */
        }
        return 0;
    }
    

Compile and run the above program and carefully note lines A and B and that the program prints out the same values in either case. Also observe how we dereferenced our pointer in line B, i.e. we first added i to it and then dereferenced the new pointer. Change line B to read:

    
        printf("ptr + %d = %d\\n",i, *ptr++);
    

and run it again... then change it to:

    
        printf("ptr + %d = %d\\n",i, *(++ptr));
    

and try once more. Each time try and predict the outcome and carefully look at the actual outcome.

In C, the standard states that wherever we might use **&var\\_name\\[0\\]** we can replace that with **var\\_name**, thus in our code where we wrote:

    
        ptr = &my_array[0];
    

we can write:

    
        ptr = my_array;
    

to achieve the same result.

This leads many texts to state that the name of an array is a pointer. I prefer to mentally think "the name of the array is the address of first element in the array". Many beginners (including myself when I was learning) have a tendency to become confused by thinking of it as a pointer. For example, while we can write

    
        ptr = my_array;
    

we cannot write

    
        my_array = ptr;
    

The reason is that while **ptr** is a variable, **my\\_array** is a constant. That is, the location at which the first element of **my\\_array** will be stored cannot be changed once **my\\_array\\[\\]** has been declared.

Earlier when discussing the term "lvalue" I cited K&R-2 where it stated:

> "An **object** is a named region of storage; an **lvalue** is an expression referring to an object".

This raises an interesting problem. Since **my\\_array** is a named region of storage, why is **my\\_array** in the above assignment statement not an lvalue? To resolve this problem, some refer to **my\\_array** as an "unmodifiable lvalue".

Modify the example program above by changing

    
        ptr = &my_array[0];
    

to

    
        ptr = my_array;
    

and run it again to verify the results are identical.

Now, let's delve a little further into the difference between the names **ptr** and **my\\_array** as used above. Some writers will refer to an array's name as a _**constant**_ pointer. What do we mean by that? Well, to understand the term "constant" in this sense, let's go back to our definition of the term "variable". When we declare a variable we set aside a spot in memory to hold the value of the appropriate type. Once that is done the name of the variable can be interpreted in one of two ways. When used on the left side of the assignment operator, the compiler interprets it as the memory location to which to move that value resulting from evaluation of the right side of the assignment operator. But, when used on the right side of the assignment operator, the name of a variable is interpreted to mean the contents stored at that memory address set aside to hold the value of that variable.

With that in mind, let's now consider the simplest of constants, as in:

    
        int i, k;
        i = 2;
    

Here, while **i** is a variable and then occupies space in the data portion of memory, **2** is a constant and, as such, instead of setting aside memory in the data segment, it is imbedded directly in the code segment of memory. That is, while writing something like **k = i;** tells the compiler to create code which at run time will look at memory location **&i** to determine the value to be moved to **k**, code created by **i = 2;** simply puts the **2** in the code and there is no referencing of the data segment. That is, both **k** and **i** are objects, but **2** is not an object.

Similarly, in the above, since **my\\_array** is a constant, once the compiler establishes where the array itself is to be stored, it "knows" the address of **my\\_array\\[0\\]** and on seeing:

    
        ptr = my_array;
    

it simply uses this address as a constant in the code segment and there is no referencing of the data segment beyond that.

This might be a good place explain further the use of the **(void \\*)** expression used in Program 1.1 of Chapter 1. As we have seen we can have pointers of various types. So far we have discussed pointers to integers and pointers to characters. In coming chapters we will be learning about pointers to structures and even pointer to pointers.

Also we have learned that on different systems the size of a pointer can vary. As it turns out it is also possible that the size of a pointer can vary depending on the data type of the object to which it points. Thus, as with integers where you can run into trouble attempting to assign a long integer to a variable of type short integer, you can run into trouble attempting to assign the values of pointers of various types to pointer variables of other types.

To minimize this problem, C provides for a pointer of type void. We can declare such a pointer by writing:

    
    void *vptr;
    

A void pointer is sort of a generic pointer. For example, while C will not permit the comparison of a pointer to type integer with a pointer to type character, for example, either of these can be compared to a void pointer. Of course, as with other variables, casts can be used to convert from one type of pointer to another under the proper circumstances. In Program 1.1. of Chapter 1 I cast the pointers to integers into void pointers to make them compatible with the %p conversion specification. In later chapters other casts will be made for reasons defined therein.

Well, that's a lot of technical stuff to digest and I don't expect a beginner to understand all of it on first reading. With time and experimentation you will want to come back and re-read the first 2 chapters. But for now, let's move on to the relationship between pointers, character arrays, and strings.

[Chapter 3: Pointers and Strings](ch3x.md)

[Back to Table of Contents](pointers.md)
`,_p=`CHAPTER 3: Pointers and Strings
-------------------------------

The study of strings is useful to further tie in the relationship between pointers and arrays. It also makes it easy to illustrate how some of the standard C string functions can be implemented. Finally it illustrates how and when pointers can and should be passed to functions.

In C, strings are arrays of characters. This is not necessarily true in other languages. In BASIC, Pascal, Fortran and various other languages, a string has its own data type. But in C it does not. In C a string is an array of characters terminated with a binary zero character (written as **'\\\\0'**). To start off our discussion we will write some code which, while preferred for illustrative purposes, you would probably never write in an actual program. Consider, for example:

    
        char my_string[40];
    
        my_string[0] = 'T';
        my_string[1] = 'e';
        my_string[2] = 'd':
        my_string[3] = '\\0';
    
    

While one would never build a string like this, the end result is a string in that it is an array of characters **terminated with a nul character**. By definition, in C, a string is an array of characters terminated with the nul character. Be aware that "nul" is **not** the same as "NULL". The nul refers to a zero as defined by the escape sequence **'\\\\0'**. That is it occupies one byte of memory. NULL, on the other hand, is the name of the macro used to initialize null pointers. NULL is #defined in a header file in your C compiler, nul may not be #defined at all.

Since writing the above code would be very time consuming, C permits two alternate ways of achieving the same thing. First, one might write:

    
        char my_string[40] = {'T', 'e', 'd', '\\0',};    
    

But this also takes more typing than is convenient. So, C permits:

    
        char my_string[40] = "Ted";
    

When the double quotes are used, instead of the single quotes as was done in the previous examples, the nul character ( **'\\\\0**' ) is automatically appended to the end of the string.

In all of the above cases, the same thing happens. The compiler sets aside an contiguous block of memory 40 bytes long to hold characters and initialized it such that the first 4 characters are **Ted\\\\0**.

Now, consider the following program:

    
    ------------------program 3.1-------------------------------------
    
    /* Program 3.1 from PTRTUT10.HTM   6/13/97 */
    
    #include <stdio.h>
    
    char strA[80] = "A string to be used for demonstration purposes";
    char strB[80];
    
    int main(void)
    {
    
        char *pA;     /* a pointer to type character */
        char *pB;     /* another pointer to type character */
        puts(strA);   /* show string A */
        pA = strA;    /* point pA at string A */
        puts(pA);     /* show what pA is pointing to */
        pB = strB;    /* point pB at string B */
        putchar('\\n');       /* move down one line on the screen */
        while(*pA != '\\0')   /* line A (see text) */
        {
            *pB++ = *pA++;   /* line B (see text) */
        }
        *pB = '\\0';          /* line C (see text) */
        puts(strB);          /* show strB on screen */
        return 0;
    }
    
    --------- end program 3.1 -------------------------------------
    
        
    

In the above we start out by defining two character arrays of 80 characters each. Since these are globally defined, they are initialized to all **'\\\\0**'s first. Then, **strA** has the first 42 characters initialized to the string in quotes.

Now, moving into the code, we declare two character pointers and show the string on the screen. We then "point" the pointer **pA** at **strA**. That is, by means of the assignment statement we copy the address of **strA\\[0\\]** into our variable **pA**. We now use **puts()** to show that which is pointed to by **pA** on the screen. Consider here that the function prototype for **puts()** is:

    
        int puts(const char *s); 
    

For the moment, ignore the **const**. The parameter passed to **puts()** is a pointer, that is the **value** of a pointer (since all parameters in C are passed by value), and the value of a pointer is the address to which it points, or, simply, an address. Thus when we write **puts(strA);** as we have seen, we are passing the address of **strA\\[0\\]**.

Similarly, when we write **puts(pA);** we are passing the same address, since we have set **pA = strA;**

Given that, follow the code down to the **while()** statement on line A. Line A states:

While the character pointed to by **pA** (i.e. **\\*pA**) is not a nul character (i.e. the terminating **'\\\\0**'), do the following:

Line B states: copy the character pointed to by **pA** to the space pointed to by **pB**, then increment **pA** so it points to the next character and **pB** so it points to the next space.

When we have copied the last character, **pA** now points to the terminating nul character and the loop ends. However, we have not copied the nul character. And, by definition a string in C **must** be nul terminated. So, we add the nul character with line C.

It is very educational to run this program with your debugger while watching **strA**, **strB**, **pA** and **pB** and single stepping through the program. It is even more educational if instead of simply defining **strB\\[\\]** as has been done above, initialize it also with something like:

    
        strB[80] = "12345678901234567890123456789012345678901234567890"
    

where the number of digits used is greater than the length of **strA** and then repeat the single stepping procedure while watching the above variables. Give these things a try!

Getting back to the prototype for **puts()** for a moment, the "const" used as a parameter modifier informs the user that the function will not modify the string pointed to by **s**, i.e. it will treat that string as a constant.

Of course, what the above program illustrates is a simple way of copying a string. After playing with the above until you have a good understanding of what is happening, we can proceed to creating our own replacement for the standard **strcpy()** that comes with C. It might look like:

    
       char *my_strcpy(char *destination, char *source)
       {
           char *p = destination;
           while (*source != '\\0')
           {
               *p++ = *source++;
           }
           *p = '\\0';
           return destination;
       }   
    

In this case, I have followed the practice used in the standard routine of returning a pointer to the destination.

Again, the function is designed to accept the values of two character pointers, i.e. addresses, and thus in the previous program we could write:

    
        int main(void)
        {
            my_strcpy(strB, strA);
            puts(strB);
        }    
    

I have deviated slightly from the form used in standard C which would have the prototype:

    
        char *my_strcpy(char *destination, const char *source);  
    

Here the "const" modifier is used to assure the user that the function will not modify the contents pointed to by the source pointer. You can prove this by modifying the function above, and its prototype, to include the "const" modifier as shown. Then, within the function you can add a statement which attempts to change the contents of that which is pointed to by source, such as:

    
        *source = 'X';
    

which would normally change the first character of the string to an X. The const modifier should cause your compiler to catch this as an error. Try it and see.

Now, let's consider some of the things the above examples have shown us. First off, consider the fact that **\\*ptr++** is to be interpreted as returning the value pointed to by **ptr** and then incrementing the pointer value. This has to do with the precedence of the operators. Were we to write **(\\*ptr)++** we would increment, not the pointer, but that which the pointer points to! i.e. if used on the first character of the above example string the 'T' would be incremented to a 'U'. You can write some simple example code to illustrate this.

Recall again that a string is nothing more than an array of characters, with the last character being a **'\\\\0'**. What we have done above is deal with copying an array. It happens to be an array of characters but the technique could be applied to an array of integers, doubles, etc. In those cases, however, we would not be dealing with strings and hence the end of the array would not be marked with a special value like the nul character. We could implement a version that relied on a special value to identify the end. For example, we could copy an array of positive integers by marking the end with a negative integer. On the other hand, it is more usual that when we write a function to copy an array of items other than strings we pass the function the number of items to be copied as well as the address of the array, e.g. something like the following prototype might indicate:

    
        void int_copy(int *ptrA, int *ptrB, int nbr);
    

where **nbr** is the number of integers to be copied. You might want to play with this idea and create an array of integers and see if you can write the function **int\\_copy()** and make it work.

This permits using functions to manipulate large arrays. For example, if we have an array of 5000 integers that we want to manipulate with a function, we need only pass to that function the address of the array (and any auxiliary information such as nbr above, depending on what we are doing). The array itself does **not** get passed, i.e. the whole array is not copied and put on the stack before calling the function, only its address is sent.

This is different from passing, say an integer, to a function. When we pass an integer we make a copy of the integer, i.e. get its value and put it on the stack. Within the function any manipulation of the value passed can in no way effect the original integer. But, with arrays and pointers we can pass the address of the variable and hence manipulate the values of the original variables.

[Chapter 4: More on Strings](ch4x.md)

[Back to Table of Contents](pointers.md)
`,wp=`CHAPTER 4: More on Strings
--------------------------

Well, we have progressed quite a way in a short time! Let's back up a little and look at what was done in Chapter 3 on copying of strings but in a different light. Consider the following function:

    
        char *my_strcpy(char dest[], char source[])
        {
            int i = 0;
            while (source[i] != '\\0')
            {
                dest[i] = source[i];
                i++;
            }
            dest[i] = '\\0';
            return dest;
        }
    

Recall that strings are arrays of characters. Here we have chosen to use array notation instead of pointer notation to do the actual copying. The results are the same, i.e. the string gets copied using this notation just as accurately as it did before. This raises some interesting points which we will discuss.

Since parameters are passed by value, in both the passing of a character pointer or the name of the array as above, what actually gets passed is the address of the first element of each array. Thus, the numerical value of the parameter passed is the same whether we use a character pointer or an array name as a parameter. This would tend to imply that somehow **source\\[i\\]** is the same as **\\*(p+i)**.

In fact, this is true, i.e wherever one writes **a\\[i\\]** it can be replaced with **\\*(a + i)** without any problems. In fact, the compiler will create the same code in either case. Thus we see that pointer arithmetic is the same thing as array indexing. Either syntax produces the same result.

This is NOT saying that pointers and arrays are the same thing, they are not. We are only saying that to identify a given element of an array we have the choice of two syntaxes, one using array indexing and the other using pointer arithmetic, which yield identical results.

Now, looking at this last expression, part of it.. **(a + i)**, is a simple addition using the **+** operator and the rules of C state that such an expression is commutative. That is **(a + i)** is identical to **(i + a)**. Thus we could write **\\*(i + a)** just as easily as **\\*(a + i)**.

But **\\*(i + a)** could have come from **i\\[a\\]** ! From all of this comes the curious truth that if:

    
        char a[20];
        int i;
    

writing

    
        a[3] = 'x';
    

is the same as writing

    
        3[a] = 'x';
    

Try it! Set up an array of characters, integers or longs, etc. and assigned the 3rd or 4th element a value using the conventional approach and then print out that value to be sure you have that working. Then reverse the array notation as I have done above. A good compiler will not balk and the results will be identical. A curiosity... nothing more!

Now, looking at our function above, when we write:

    
        dest[i] = source[i];
    

due to the fact that array indexing and pointer arithmetic yield identical results, we can write this as:

    
        *(dest + i) = *(source + i);
    

But, this takes 2 additions for each value taken on by i. Additions, generally speaking, take more time than incrementations (such as those done using the **++** operator as in **i++**). This may not be true in modern optimizing compilers, but one can never be sure. Thus, the pointer version may be a bit faster than the array version.

Another way to speed up the pointer version would be to change:

    
        while (*source != '\\0')
    

to simply

    
        while (*source)
    

since the value within the parenthesis will go to zero (FALSE) at the same time in either case.

At this point you might want to experiment a bit with writing some of your own programs using pointers. Manipulating strings is a good place to experiment. You might want to write your own versions of such standard functions as:

    
        strlen();
        strcat();
        strchr();
    

and any others you might have on your system.

We will come back to strings and their manipulation through pointers in a future chapter. For now, let's move on and discuss structures for a bit.

[Chapter 5: Pointers and Structures](ch5x.md)

[Back to Table of Contents](pointers.md)
`,zp=`CHAPTER 5: Pointers and Structures
----------------------------------

As you may know, we can declare the form of a block of data containing different data types by means of a structure declaration. For example, a personnel file might contain structures which look something like:

    
        struct tag {
            char lname[20];        /* last name */
            char fname[20];        /* first name */
            int age;               /* age */
            float rate;            /* e.g. 12.75 per hour */
        };
    

Let's say we have a bunch of these structures in a disk file and we want to read each one out and print out the first and last name of each one so that we can have a list of the people in our files. The remaining information will not be printed out. We will want to do this printing with a function call and pass to that function a pointer to the structure at hand. For demonstration purposes I will use only one structure for now. But realize the goal is the writing of the function, not the reading of the file which, presumably, we know how to do.

For review, recall that we can access structure members with the dot operator as in:

    
    --------------- program 5.1 ------------------
    
    /* Program 5.1 from PTRTUT10.HTM     6/13/97 */
    
    
    #include <stdio.h>
    #include <string.h>
    
    struct tag {
        char lname[20];      /* last name */
        char fname[20];      /* first name */
        int age;             /* age */
        float rate;          /* e.g. 12.75 per hour */
    };
    
    struct tag my_struct;       /* declare the structure my_struct */
    
    int main(void)
    {
        strcpy(my_struct.lname,"Jensen");
        strcpy(my_struct.fname,"Ted");
        printf("\\n%s ",my_struct.fname);
        printf("%s\\n",my_struct.lname);
        return 0;
    }
    
    -------------- end of program 5.1 --------------
    

Now, this particular structure is rather small compared to many used in C programs. To the above we might want to add:

    
        date_of_hire;                  (data types not shown)
        date_of_last_raise;
        last_percent_increase;
        emergency_phone;
        medical_plan;
        Social_S_Nbr;
        etc.....
    

If we have a large number of employees, what we want to do is manipulate the data in these structures by means of functions. For example we might want a function print out the name of the employee listed in any structure passed to it. However, in the original C (Kernighan & Ritchie, 1st Edition) it was not possible to pass a structure, only a pointer to a structure could be passed. In ANSI C, it is now permissible to pass the complete structure. But, since our goal here is to learn more about pointers, we won't pursue that.

Anyway, if we pass the whole structure it means that we must copy the contents of the structure from the calling function to the called function. In systems using stacks, this is done by pushing the contents of the structure on the stack. With large structures this could prove to be a problem. However, passing a pointer uses a minimum amount of stack space.

In any case, since this is a discussion of pointers, we will discuss how we go about passing a pointer to a structure and then using it within the function.

Consider the case described, i.e. we want a function that will accept as a parameter a pointer to a structure and from within that function we want to access members of the structure. For example we want to print out the name of the employee in our example structure.

Okay, so we know that our pointer is going to point to a structure declared using struct tag. We declare such a pointer with the declaration:

    
        struct tag *st_ptr;
    

and we point it to our example structure with:

    
        st_ptr = &my_struct;
    

Now, we can access a given member by de-referencing the pointer. But, how do we de-reference the pointer to a structure? Well, consider the fact that we might want to use the pointer to set the age of the employee. We would write:

    
        (*st_ptr).age = 63;
    

Look at this carefully. It says, replace that within the parenthesis with that which **st\\_ptr** points to, which is the structure **my\\_struct**. Thus, this breaks down to the same as **my\\_struct.age**.

However, this is a fairly often used expression and the designers of C have created an alternate syntax with the same meaning which is:

    
        st_ptr->age = 63;
    

With that in mind, look at the following program:

    
    ------------ program 5.2 ---------------------
    
    /* Program 5.2 from PTRTUT10.HTM   6/13/97 */
    
    #include <stdio.h>
    #include <string.h>
    
    struct tag{                     /* the structure type */
        char lname[20];             /* last name */
        char fname[20];             /* first name */
        int age;                    /* age */
        float rate;                 /* e.g. 12.75 per hour */
    };
    
    struct tag my_struct;           /* define the structure */
    void show_name(struct tag *p);  /* function prototype */
    
    int main(void)
    {
        struct tag *st_ptr;         /* a pointer to a structure */
        st_ptr = &my_struct;        /* point the pointer to my_struct */
        strcpy(my_struct.lname,"Jensen");
        strcpy(my_struct.fname,"Ted");
        printf("\\n%s ",my_struct.fname);
        printf("%s\\n",my_struct.lname);
        my_struct.age = 63;
        show_name(st_ptr);          /* pass the pointer */
        return 0;
    }
    
    void show_name(struct tag *p)
    {
        printf("\\n%s ", p->fname);  /* p points to a structure */
        printf("%s ", p->lname);
        printf("%d\\n", p->age);
    }
    
    -------------------- end of program 5.2 ----------------
    

Again, this is a lot of information to absorb at one time. The reader should compile and run the various code snippets and using a debugger monitor things like **my\\_struct** and **p** while single stepping through the main and following the code down into the function to see what is happening.  

[Chapter 6: Some more on Strings, and Arrays of Strings](ch6x.md)

[Back to Table of Contents](pointers.md)
`,xp=`CHAPTER 6: Some more on Strings, and Arrays of Strings
------------------------------------------------------

Well, let's go back to strings for a bit. In the following all assignments are to be understood as being global, i.e. made outside of any function, including main().

We pointed out in an earlier chapter that we could write:

    
       char my_string[40] = "Ted";
    

which would allocate space for a 40 byte array and put the string in the first 4 bytes (three for the characters in the quotes and a 4th to handle the terminating **'\\\\0'**).

Actually, if all we wanted to do was store the name "Ted" we could write:

    
       char my_name[] = "Ted";
    

and the compiler would count the characters, leave room for the nul character and store the total of the four characters in memory the location of which would be returned by the array name, in this case **my\\_name**.

In some code, instead of the above, you might see:

    
       char *my_name = "Ted";
    

which is an alternate approach. Is there a difference between these? The answer is.. yes. Using the array notation 4 bytes of storage in the static memory block are taken up, one for each character and one for the terminating nul character. But, in the pointer notation the same 4 bytes required, **plus** N bytes to store the pointer variable **my\\_name** (where N depends on the system but is usually a minimum of 2 bytes and can be 4 or more).

In the array notation, **my\\_name** is short for **&myname\\[0\\]** which is the address of the first element of the array. Since the location of the array is fixed during run time, this is a constant (not a variable). In the pointer notation **my\\_name** is a variable. As to which is the **better** method, that depends on what you are going to do within the rest of the program.

Let's now go one step further and consider what happens if each of these declarations are done within a function as opposed to globally outside the bounds of any function.

    
    void my_function_A(char *ptr)
    {
        char a[] = "ABCDE"
        .
        .
    } 
    
    
    void my_function_B(char *ptr)
    {
        char *cp = "FGHIJ"
        .
        .
    }
    

In the case of **my\\_function\\_A**, the content, or value(s), of the array **a\\[\\]** is considered to be the data. The array is said to be initialized to the values ABCDE. In the case of **my\\_function\\_B**, the value of the pointer **cp** is considered to be the data. The pointer has been initialized to point to the string **FGHIJ**. In both **my\\_function\\_A** and **my\\_function\\_B** the definitions are local variables and thus the string **ABCDE** is stored on the stack, as is the value of the pointer **cp**. The string **FGHIJ** can be stored anywhere. On my system it gets stored in the data segment.

By the way, array initialization of automatic variables as I have done in **my\\_function\\_A** was illegal in the older K&R C and only "came of age" in the newer ANSI C. A fact that may be important when one is considering portability and backwards compatibility.

As long as we are discussing the relationship/differences between pointers and arrays, let's move on to multi-dimensional arrays. Consider, for example the array:

    
        char multi[5][10];
    

Just what does this mean? Well, let's consider it in the following light.

    
        char multi[5][10];
    

Let's take the underlined part to be the "name" of an array. Then prepending the **char** and appending the **\\[10\\]** we have an array of 10 characters. But, the name **multi\\[5\\]** is itself an array indicating that there are 5 elements each being an array of 10 characters. Hence we have an array of 5 arrays of 10 characters each..

Assume we have filled this two dimensional array with data of some kind. In memory, it might look as if it had been formed by initializing 5 separate arrays using something like:

    
        multi[0] = {'0','1','2','3','4','5','6','7','8','9'}
        multi[1] = {'a','b','c','d','e','f','g','h','i','j'}
        multi[2] = {'A','B','C','D','E','F','G','H','I','J'}
        multi[3] = {'9','8','7','6','5','4','3','2','1','0'}
        multi[4] = {'J','I','H','G','F','E','D','C','B','A'}
    
    
    

At the same time, individual elements might be addressable using syntax such as:

    
        multi[0][3] = '3'
        multi[1][7] = 'h'
        multi[4][0] = 'J'
    

Since arrays are contiguous in memory, our actual memory block for the above should look like:

    
        0123456789abcdefghijABCDEFGHIJ9876543210JIHGFEDCBA
        ^
        |_____ starting at the address &multi[0][0]
    
    

Note that I did **not** write **multi\\[0\\] = "0123456789"**. Had I done so a terminating **'\\\\0'** would have been implied since whenever double quotes are used a **'\\\\0**' character is appended to the characters contained within those quotes. Had that been the case I would have had to set aside room for 11 characters per row instead of 10.

My goal in the above is to illustrate how memory is laid out for 2 dimensional arrays. That is, this is a 2 dimensional array of characters, NOT an array of "strings".

Now, the compiler knows how many columns are present in the array so it can interpret **multi + 1** as the address of the 'a' in the 2nd row above. That is, it adds 10, the number of columns, to get this location. If we were dealing with integers and an array with the same dimension the compiler would add **10\\*sizeof(int)** which, on my machine, would be 20. Thus, the address of the **9** in the 4th row above would be **&multi\\[3\\]\\[0\\]** or **\\*(multi + 3)** in pointer notation. To get to the content of the 2nd element in the 4th row we add 1 to this address and dereference the result as in

    
        *(*(multi + 3) + 1)
    

With a little thought we can see that:

    
        *(*(multi + row) + col)    and
        multi[row][col]            yield the same results.
    

The following program illustrates this using integer arrays instead of character arrays.

    
    ------------------- program 6.1 ----------------------
    
    /* Program 6.1 from PTRTUT10.HTM   6/13/97*/
    
    #include <stdio.h>
    #define ROWS 5
    #define COLS 10
    
    int multi[ROWS][COLS];
    
    int main(void)
    {
        int row, col;
        for (row = 0; row < ROWS; row++)
        {
            for (col = 0; col < COLS; col++)
            {
                multi[row][col] = row*col;
            }
        }
    
        for (row = 0; row < ROWS; row++)
        {
            for (col = 0; col < COLS; col++)
            {
                printf("\\n%d  ",multi[row][col]);
                printf("%d ",*(*(multi + row) + col));
            }
        }
    
        return 0;
    }
    ----------------- end of program 6.1 ---------------------   
    

Because of the double de-referencing required in the pointer version, the name of a 2 dimensional array is often said to be equivalent to a pointer to a pointer. With a three dimensional array we would be dealing with an array of arrays of arrays and some might say its name would be equivalent to a pointer to a pointer to a pointer. However, here we have initially set aside the block of memory for the array by defining it using array notation. Hence, we are dealing with a constant, not a variable. That is we are talking about a fixed address not a variable pointer. The dereferencing function used above permits us to access any element in the array of arrays without the need of changing the value of that address (the address of **multi\\[0\\]\\[0\\]** as given by the symbol **multi**).

[Chapter 7: More on Multi-Dimensional Arrays](ch7x.md)

[Back to Table of Contents](pointers.md)
`,Tp=`CHAPTER 7: More on Multi-Dimensional Arrays
-------------------------------------------

In the previous chapter we noted that given

    
        #define ROWS 5
        #define COLS 10
    
        int multi[ROWS][COLS];
    

we can access individual elements of the array **multi** using either:

    
        multi[row][col]
    

or

    
        *(*(multi + row) + col)
    

To understand more fully what is going on, let us replace

    
        *(multi + row)
    

with **X** as in:

    
        *(X + col)
    

Now, from this we see that **X** is like a pointer since the expression is de-referenced and we know that **col** is an integer. Here the arithmetic being used is of a special kind called "pointer arithmetic" is being used. That means that, since we are talking about an integer array, the address pointed to by (i.e. value of) **X + col + 1** must be greater than the address **X + col** by and amount equal to **sizeof(int)**.

Since we know the memory layout for 2 dimensional arrays, we can determine that in the expression **multi + row** as used above, **multi + row + 1** must increase by value an amount equal to that needed to "point to" the next row, which in this case would be an amount equal to **COLS \\* sizeof(int)**.

That says that if the expression **\\*(\\*(multi + row) + col)** is to be evaluated correctly at run time, the compiler must generate code which takes into consideration the value of **COLS**, i.e. the 2nd dimension. Because of the equivalence of the two forms of expression, this is true whether we are using the pointer expression as here or the array expression **multi\\[row\\]\\[col\\]**.

Thus, to evaluate either expression, a total of 5 values must be known:

1.  The address of the first element of the array, which is returned by the expression **multi**, i.e., the name of the array.
2.  The size of the type of the elements of the array, in this case **sizeof(int)**.
3.  The 2nd dimension of the array
4.  The specific index value for the first dimension, **row** in this case.
5.  The specific index value for the second dimension, **col** in this case.

Given all of that, consider the problem of designing a function to manipulate the element values of a previously declared array. For example, one which would set all the elements of the array **multi** to the value 1.

    
    
        void set_value(int m_array[][COLS])
        {
            int row, col;
            for (row = 0; row < ROWS; row++)
            {
                for (col = 0; col < COLS; col++)
                {
                    m_array[row][col] = 1;
                }
            }
        }
    
    

And to call this function we would then use:

    
        set_value(multi);
    

Now, within the function we have used the values #defined by ROWS and COLS that set the limits on the for loops. But, these #defines are just constants as far as the compiler is concerned, i.e. there is nothing to connect them to the array size within the function. **row** and **col** are local variables, of course. The formal parameter definition permits the compiler to determine the characteristics associated with the pointer value that will be passed at run time. We really don�t need the first dimension and, as will be seen later, there are occasions where we would prefer not to define it within the parameter definition, out of habit or consistency, I have not used it here. But, the second dimension must be used as has been shown in the expression for the parameter. The reason is that we need this in the evaluation of **m\\_array\\[row\\]\\[col\\]** as has been described. While the parameter defines the data type (**int** in this case) and the automatic variables for row and column are defined in the for loops, only one value can be passed using a single parameter. In this case, that is the value of **multi** as noted in the call statement, i.e. the address of the first element, often referred to as a pointer to the array. Thus, the only way we have of informing the compiler of the 2nd dimension is by explicitly including it in the parameter definition.

In fact, in general all dimensions of higher order than one are needed when dealing with multi-dimensional arrays. That is if we are talking about 3 dimensional arrays, the 2nd **and** 3rd dimension must be specified in the parameter definition.

[Chapter 8: Pointers to Arrays](ch8x.md)

[Back to Table of Contents](pointers.md)
`,Ap=`CHAPTER 8: Pointers to Arrays
-----------------------------

Pointers, of course, can be "pointed at" any type of data object, including arrays. While that was evident when we discussed program 3.1, it is important to expand on how we do this when it comes to multi-dimensional arrays.

To review, in Chapter 2 we stated that given an array of integers we could point an integer pointer at that array using:

    
        int *ptr;
        ptr = &my_array[0];       /* point our pointer at the first
                                     integer in our array */
    

As we stated there, the type of the pointer variable must match the type of the first element of the array.

In addition, we can use a pointer as a formal parameter of a function which is designed to manipulate an array. e.g.

Given:

    
        int array[3] = {'1', '5', '7'};
        void a_func(int *p);
    

Some programmers might prefer to write the function prototype as:

    
       void a_func(int p[]);
    

which would tend to inform others who might use this function that the function is designed to manipulate the elements of an array. Of course, in either case, what actually gets passed is the value of a pointer to the first element of the array, independent of which notation is used in the function prototype or definition. Note that if the array notation is used, there is no need to pass the actual dimension of the array since we are not passing the whole array, only the address to the first element.

We now turn to the problem of the 2 dimensional array. As stated in the last chapter, C interprets a 2 dimensional array as an array of one dimensional arrays. That being the case, the first element of a 2 dimensional array of integers is a one dimensional array of integers. And a pointer to a two dimensional array of integers must be a pointer to that data type. One way of accomplishing this is through the use of the keyword "typedef". typedef assigns a new name to a specified data type. For example:

    
        typedef unsigned char byte;
    

causes the name **byte** to mean type **unsigned char**. Hence

    
        byte b[10];     would be an array of unsigned characters.
    

Note that in the typedef declaration, the word **byte** has replaced that which would normally be the name of our **unsigned char**. That is, the rule for using **typedef** is that the new name for the data type is the name used in the definition of the data type. Thus in:

    
        typedef int Array[10];
    

Array becomes a data type for an array of 10 integers. i.e. **Array my\\_arr;** declares **my\\_arr** as an array of 10 integers and **Array arr2d\\[5\\];** makes **arr2d** an array of 5 arrays of 10 integers each.

Also note that **Array \\*p1d;** makes **p1d** a pointer to an array of 10 integers. Because **\\*p1d** points to the same type as **arr2d**, assigning the address of the two dimensional array **arr2d** to **p1d**, the pointer to a one dimensional array of 10 integers is acceptable. i.e. **p1d = &arr2d\\[0\\];** or **p1d = arr2d;** are both correct.

Since the data type we use for our pointer is an array of 10 integers we would expect that incrementing **p1d** by 1 would change its value by **10\\*sizeof(int)**, which it does. That is, **sizeof(\\*p1d)** is 20. You can prove this to yourself by writing and running a simple short program.

Now, while using typedef makes things clearer for the reader and easier on the programmer, it is not really necessary. What we need is a way of declaring a pointer like **p1d** without the need of the **typedef** keyword. It turns out that this can be done and that

    
        int (*p1d)[10];
    

is the proper declaration, i.e. **p1d** here is a pointer to an array of 10 integers just as it was under the declaration using the Array type. Note that this is different from

    
        int *p1d[10];
    

which would make **p1d** the name of an array of 10 pointers to type **int**.

[Chapter 9: Pointers and Dynamic Allocation of Memory](ch9x.md)

[Back to Table of Contents](pointers.md)
`,Sp=`CHAPTER 9: Pointers and Dynamic Allocation of Memory
----------------------------------------------------

There are times when it is convenient to allocate memory at run time using **malloc()**, **calloc()**, or other allocation functions. Using this approach permits postponing the decision on the size of the memory block need to store an array, for example, until run time. Or it permits using a section of memory for the storage of an array of integers at one point in time, and then when that memory is no longer needed it can be freed up for other uses, such as the storage of an array of structures.

When memory is allocated, the allocating function (such as **malloc()**, **calloc()**, etc.) returns a pointer. The type of this pointer depends on whether you are using an older K&R compiler or the newer ANSI type compiler. With the older compiler the type of the returned pointer is **char**, with the ANSI compiler it is **void**.

If you are using an older compiler, and you want to allocate memory for an array of integers you will have to cast the char pointer returned to an integer pointer. For example, to allocate space for 10 integers we might write:

    
        int *iptr;
        iptr = (int *)malloc(10 * sizeof(int));
        if (iptr == NULL)
    
        { .. ERROR ROUTINE GOES HERE .. }
    

If you are using an ANSI compliant compiler, **malloc()** returns a **void** pointer and since a void pointer can be assigned to a pointer variable of any object type, the **(int \\*)** cast shown above is not needed. The array dimension can be determined at run time and is not needed at compile time. That is, the **10** above could be a variable read in from a data file or keyboard, or calculated based on some need, at run time.

Because of the equivalence between array and pointer notation, once **iptr** has been assigned as above, one can use the array notation. For example, one could write:

    
        int k;
        for (k = 0; k < 10; k++)
           iptr[k] = 2;
    

to set the values of all elements to 2.

Even with a reasonably good understanding of pointers and arrays, one place the newcomer to C is likely to stumble at first is in the dynamic allocation of multi-dimensional arrays. In general, we would like to be able to access elements of such arrays using array notation, not pointer notation, wherever possible. Depending on the application we may or may not know both dimensions at compile time. This leads to a variety of ways to go about our task.

As we have seen, when dynamically allocating a one dimensional array its dimension can be determined at run time. Now, when using dynamic allocation of higher order arrays, we never need to know the first dimension at compile time. Whether we need to know the higher dimensions depends on how we go about writing the code. Here I will discuss various methods of dynamically allocating room for 2 dimensional arrays of integers.

First we will consider cases where the 2nd dimension is known at compile time.

### METHOD 1:

One way of dealing with the problem is through the use of the **typedef** keyword. To allocate a 2 dimensional array of integers recall that the following two notations result in the same object code being generated:

    
    
        multi[row][col] = 1;     *(*(multi + row) + col) = 1;
    
    

It is also true that the following two notations generate the same code:

    
    
        multi[row]            *(multi + row)
    
    

Since the one on the right must evaluate to a pointer, the array notation on the left must also evaluate to a pointer. In fact **multi\\[0\\]** will return a pointer to the first integer in the first row, **multi\\[1\\]** a pointer to the first integer of the second row, etc. Actually, **multi\\[n\\]** evaluates to a pointer to that array of integers that make up the n-th row of our 2 dimensional array. That is, **multi** can be thought of as an array of arrays and **multi\\[n\\]** as a pointer to the n-th array of this array of arrays. Here the word **pointer** is being used to represent an address value. While such usage is common in the literature, when reading such statements one must be careful to distinguish between the constant address of an array and a variable pointer which is a data object in itself.

Consider now:

    
    
    --------------- Program 9.1 --------------------------------
    
    /* Program 9.1 from PTRTUT10.HTM  6/13/97 */
    
    #include <stdio.h>
    #include <stdlib.h>
    
    #define COLS 5
    
    typedef int RowArray[COLS];
    RowArray *rptr;
    
    int main(void)
    {
        int nrows = 10;
        int row, col;
        rptr = malloc(nrows * COLS * sizeof(int));
        for (row = 0; row < nrows; row++)
        {
            for (col = 0; col < COLS; col++)
            {
                rptr[row][col] = 17;
            }
        }
    
        return 0;
    }
    ------------- End of Prog. 9.1 --------------------------------
    
    

Here I have assumed an ANSI compiler so a cast on the void pointer returned by **malloc()** is not required. If you are using an older K&R compiler you will have to cast using:

    
        rptr = (RowArray *)malloc(.... etc.
    

Using this approach, **rptr** has all the characteristics of an array name name, (except that rptr is modifiable), and array notation may be used throughout the rest of the program. That also means that if you intend to write a function to modify the array contents, you must use COLS as a part of the formal parameter in that function, just as we did when discussing the passing of two dimensional arrays to a function.

### METHOD 2:

In the METHOD 1 above, rptr turned out to be a pointer to type "one dimensional array of COLS integers". It turns out that there is syntax which can be used for this type without the need of **typedef**. If we write:

    
    
        int (*xptr)[COLS];
    
    

the variable **xptr** will have all the same characteristics as the variable **rptr** in METHOD 1 above, and we need not use the **typedef** keyword. Here **xptr** is a pointer to an array of integers and the size of that array is given by the **#defined COLS**. The parenthesis placement makes the pointer notation predominate, even though the array notation has higher precedence. i.e. had we written

    
        int *xptr[COLS];
    

we would have defined **xptr** as an array of pointers holding the number of pointers equal to that #defined by COLS. That is not the same thing at all. However, arrays of pointers have their use in the dynamic allocation of two dimensional arrays, as will be seen in the next 2 methods.

### METHOD 3:

Consider the case where we do not know the number of elements in each row at compile time, i.e. both the number of rows and number of columns must be determined at run time. One way of doing this would be to create an array of pointers to type **int** and then allocate space for each row and point these pointers at each row. Consider:

    
    
    -------------- Program 9.2 ------------------------------------
    
    /* Program 9.2 from PTRTUT10.HTM   6/13/97 */
    
    #include <stdio.h>
    #include <stdlib.h>
    
    int main(void)
    {
        int nrows = 5;     /* Both nrows and ncols could be evaluated */
        int ncols = 10;    /* or read in at run time */
        int row;
        int **rowptr;
        rowptr = malloc(nrows * sizeof(int *));
        if (rowptr == NULL)
        {
            puts("\\nFailure to allocate room for row pointers.\\n");
            exit(0);
        }
    
        printf("\\n\\n\\nIndex   Pointer(hex)   Pointer(dec)   Diff.(dec)");
    
        for (row = 0; row < nrows; row++)
        {
            rowptr[row] = malloc(ncols * sizeof(int));
            if (rowptr[row] == NULL)
            {
                printf("\\nFailure to allocate for row[%d]\\n",row);
                exit(0);
            }
            printf("\\n%d         %p         %d", row, rowptr[row], rowptr[row]);
            if (row > 0)
            printf("              %d",(int)(rowptr[row] - rowptr[row-1]));
        }
    
        return 0;
    }
    
    --------------- End 9.2 ------------------------------------
    
    

In the above code **rowptr** is a pointer to pointer to type **int**. In this case it points to the first element of an array of pointers to type **int**. Consider the number of calls to **malloc()**:

    
    
        To get the array of pointers             1     call
        To get space for the rows                5     calls
                                              -----
                         Total                   6     calls
    

If you choose to use this approach note that while you can use the array notation to access individual elements of the array, e.g. **rowptr\\[row\\]\\[col\\] = 17;**, it does not mean that the data in the "two dimensional array" is contiguous in memory.

You can, however, use the array notation just as if it were a continuous block of memory. For example, you can write:

    
        rowptr[row][col] = 176;
    

just as if rowptr were the name of a two dimensional array created at compile time. Of course **row** and **col** must be within the bounds of the array you have created, just as with an array created at compile time.

If you want to have a contiguous block of memory dedicated to the storage of the elements in the array you can do it as follows:

### METHOD 4:

In this method we allocate a block of memory to hold the whole array first. We then create an array of pointers to point to each row. Thus even though the array of pointers is being used, the actual array in memory is contiguous. The code looks like this:

    
    ----------------- Program 9.3 -----------------------------------
    
    /* Program 9.3 from PTRTUT10.HTM   6/13/97 */
    
    #include <stdio.h>
    #include <stdlib.h>
    
    int main(void)
    {
        int **rptr;
        int *aptr;
        int *testptr;
        int k;
        int nrows = 5;     /* Both nrows and ncols could be evaluated */
        int ncols = 8;    /* or read in at run time */
        int row, col;
    
        /* we now allocate the memory for the array */
    
        aptr = malloc(nrows * ncols * sizeof(int));
        if (aptr == NULL)
        {
            puts("\\nFailure to allocate room for the array");
            exit(0);
        }
    
        /* next we allocate room for the pointers to the rows */
    
        rptr = malloc(nrows * sizeof(int *));
        if (rptr == NULL)
        {
            puts("\\nFailure to allocate room for pointers");
            exit(0);
        }
    
        /* and now we 'point' the pointers */
    
        for (k = 0; k < nrows; k++)
        {
            rptr[k] = aptr + (k * ncols);
        }
    
        /* Now we illustrate how the row pointers are incremented */
        printf("\\n\\nIllustrating how row pointers are incremented");
        printf("\\n\\nIndex   Pointer(hex)  Diff.(dec)");
    
        for (row = 0; row < nrows; row++)
        {
            printf("\\n%d         %p", row, rptr[row]);
            if (row > 0)
            printf("              %d",(rptr[row] - rptr[row-1]));
        }
        printf("\\n\\nAnd now we print out the array\\n");
        for (row = 0; row < nrows; row++)
        {
            for (col = 0; col < ncols; col++)
            {
                rptr[row][col] = row + col;
                printf("%d ", rptr[row][col]);
            }
            putchar('\\n');
        }
    
        puts("\\n");
    
        /* and here we illustrate that we are, in fact, dealing with
           a 2 dimensional array in a contiguous block of memory. */
        printf("And now we demonstrate that they are contiguous in memory\\n");
    
        testptr = aptr;
        for (row = 0; row < nrows; row++)
        {
            for (col = 0; col < ncols; col++)
            {
                printf("%d ", *(testptr++));
            }
            putchar('\\n');
        }
    
        return 0;
    }
    
    
    
    
    ------------- End Program 9.3 -----------------
    
    

Consider again, the number of calls to malloc()

    
        To get room for the array itself      1      call
        To get room for the array of ptrs     1      call
                                            ----
                             Total            2      calls
    
    

Now, each call to **malloc()** creates additional space overhead since **malloc()** is generally implemented by the operating system forming a linked list which contains data concerning the size of the block. But, more importantly, with large arrays (several hundred rows) keeping track of what needs to be freed when the time comes can be more cumbersome. This, combined with the contiguousness of the data block that permits initialization to all zeroes using **memset()** would seem to make the second alternative the preferred one.

As a final example on multidimensional arrays we will illustrate the dynamic allocation of a three dimensional array. This example will illustrate one more thing to watch when doing this kind of allocation. For reasons cited above we will use the approach outlined in alternative two. Consider the following code:

    
    
    ------------------- Program 9.4 -------------------------------------
    
    /* Program 9.4 from PTRTUT10.HTM   6/13/97 */
    
    #include <stdio.h>
    #include <stdlib.h>
    #include <stddef.h>
    
    int X_DIM=16;
    int Y_DIM=5;
    int Z_DIM=3;
    
    int main(void)
    {
        char *space;
        char ***Arr3D;
        int y, z;
        ptrdiff_t diff;
    
        /* first we set aside space for the array itself */
    
        space = malloc(X_DIM * Y_DIM * Z_DIM * sizeof(char));
    
        /* next we allocate space of an array of pointers, each
           to eventually point to the first element of a
           2 dimensional array of pointers to pointers */
    
        Arr3D = malloc(Z_DIM * sizeof(char **));
    
        /* and for each of these we assign a pointer to a newly
           allocated array of pointers to a row */
    
        for (z = 0; z < Z_DIM; z++)
        {
            Arr3D[z] = malloc(Y_DIM * sizeof(char *));
    
            /* and for each space in this array we put a pointer to
               the first element of each row in the array space
               originally allocated */
    
            for (y = 0; y < Y_DIM; y++)
            {
                Arr3D[z][y] = space + (z*(X_DIM * Y_DIM) + y*X_DIM);
            }
        }
    
        /* And, now we check each address in our 3D array to see if
           the indexing of the Arr3d pointer leads through in a
           continuous manner */
    
        for (z = 0; z < Z_DIM; z++)
        {
            printf("Location of array %d is %p\\n", z, *Arr3D[z]);
            for ( y = 0; y < Y_DIM; y++)
            {
                printf("  Array %d and Row %d starts at %p", z, y, Arr3D[z][y]);
                diff = Arr3D[z][y] - space;
                printf("    diff = %d  ",diff);
                printf(" z = %d  y = %d\\n", z, y);
            }
        }
        return 0;
    }
    
    ------------------- End of Prog. 9.4 ----------------------------
    
    

If you have followed this tutorial up to this point you should have no problem deciphering the above on the basis of the comments alone. There are a couple of points that should be made however. Let's start with the line which reads:

    
        Arr3D[z][y] = space + (z*(X_DIM * Y_DIM) + y*X_DIM);
    

Note that here **space** is a character pointer, which is the same type as **Arr3D\\[z\\]\\[y\\]**. It is important that when adding an integer, such as that obtained by evaluation of the expression **(z\\*(X\\_DIM \\* Y\\_DIM) + y\\*X\\_DIM)**, to a pointer, the result is a new pointer value. And when assigning pointer values to pointer variables the data types of the value and variable must match.

[Chapter 10: Pointers to Functions](ch10x.md)

[Back to Table of Contents](pointers.md)
`,Cp=`CHAPTER 10: Pointers to Functions
---------------------------------

Up to this point we have been discussing pointers to data objects. C also permits the declaration of pointers to functions. Pointers to functions have a variety of uses and some of them will be discussed here.

Consider the following real problem. You want to write a function that is capable of sorting virtually any collection of data that can be stored in an array. This might be an array of strings, or integers, or floats, or even structures. The sorting algorithm can be the same for all. For example, it could be a simple bubble sort algorithm, or the more complex shell or quick sort algorithm. We'll use a simple bubble sort for demonstration purposes.

Sedgewick \\[1\\] has described the bubble sort using C code by setting up a function which when passed a pointer to the array would sort it. If we call that function **bubble()**, a sort program is described by bubble\\_1.c, which follows:

    
    
    /*-------------------- bubble_1.c --------------------*/
    
    /* Program bubble_1.c from PTRTUT10.HTM   6/13/97 */
    
    #include <stdio.h>
    
    int arr[10] = { 3,6,1,2,3,8,4,1,7,2};
    
    void bubble(int a[], int N);
    
    int main(void)
    {
        int i;
        putchar('\\n');
        for (i = 0; i < 10; i++)
        {
            printf("%d ", arr[i]);
        }
        bubble(arr,10);
        putchar('\\n');
    
        for (i = 0; i < 10; i++)
        {
            printf("%d ", arr[i]);
        }
        return 0;
    }
    
    void bubble(int a[], int N)
    {
        int i, j, t;
        for (i = N-1; i >= 0; i--)
        {
            for (j = 1; j <= i; j++)
            {
                if (a[j-1] > a[j])
                {
                    t = a[j-1];
                    a[j-1] = a[j];
                    a[j] = t;
                }
            }
        }
    }
    
    
    
    /*---------------------- end bubble_1.c -----------------------*/
    
    

The bubble sort is one of the simpler sorts. The algorithm scans the array from the second to the last element comparing each element with the one which precedes it. If the one that precedes it is larger than the current element, the two are swapped so the larger one is closer to the end of the array. On the first pass, this results in the largest element ending up at the end of the array. The array is now limited to all elements except the last and the process repeated. This puts the next largest element at a point preceding the largest element. The process is repeated for a number of times equal to the number of elements minus 1. The end result is a sorted array.

Here our function is designed to sort an array of integers. Thus in line 1 we are comparing integers and in lines 2 through 4 we are using temporary integer storage to store integers. What we want to do now is see if we can convert this code so we can use any data type, i.e. not be restricted to integers.

At the same time we don't want to have to analyze our algorithm and the code associated with it each time we use it. We start by removing the comparison from within the function **bubble()** so as to make it relatively easy to modify the comparison function without having to re-write portions related to the actual algorithm. This results in bubble\\_2.c:

    
    
    /*---------------------- bubble_2.c -------------------------*/
    
    /* Program bubble_2.c from PTRTUT10.HTM   6/13/97 */
    
       /* Separating the comparison function */
    
    #include <stdio.h>
    
    int arr[10] = { 3,6,1,2,3,8,4,1,7,2};
    
    void bubble(int a[], int N);
    int compare(int m, int n);
    
    int main(void)
    {
        int i;
        putchar('\\n');
        for (i = 0; i < 10; i++)
        {
            printf("%d ", arr[i]);
        }
        bubble(arr,10);
        putchar('\\n');
    
        for (i = 0; i < 10; i++)
        {
            printf("%d ", arr[i]);
        }
        return 0;
    }
    
    void bubble(int a[], int N)
    
    {
        int i, j, t;
        for (i = N-1; i >= 0; i--)
        {
            for (j = 1; j <= i; j++)
            {
                if (compare(a[j-1], a[j]))
                {
                    t = a[j-1];
                    a[j-1] = a[j];
                    a[j] = t;
                }
            }
        }
    }
    
    int compare(int m, int n)
    {
        return (m > n);
    }
    /*--------------------- end of bubble_2.c -----------------------*/
    

If our goal is to make our sort routine data type independent, one way of doing this is to use pointers to type void to point to the data instead of using the integer data type. As a start in that direction let's modify a few things in the above so that pointers can be used. To begin with, we'll stick with pointers to type integer.

    
    
    /*----------------------- bubble_3.c -------------------------*/
    
    /* Program bubble_3.c from PTRTUT10.HTM    6/13/97 */
    
    #include <stdio.h>
    
    int arr[10] = { 3,6,1,2,3,8,4,1,7,2};
    
    void bubble(int *p, int N);
    int compare(int *m, int *n);
    
    int main(void)
    {
        int i;
        putchar('\\n');
    
        for (i = 0; i < 10; i++)
        {
            printf("%d ", arr[i]);
        }
        bubble(arr,10);
        putchar('\\n');
    
        for (i = 0; i < 10; i++)
        {
            printf("%d ", arr[i]);
        }
        return 0;
    }
    
    void bubble(int *p, int N)
    {
        int i, j, t;
        for (i = N-1; i >= 0; i--)
        {
            for (j = 1; j <= i; j++)
            {
                if (compare(&p[j-1], &p[j]))
                {
                    t = p[j-1];
                    p[j-1] = p[j];
                    p[j] = t;
                }
            }
        }
    }
    
    int compare(int *m, int *n)
    {
        return (*m > *n);
    }
    
    /*------------------ end of bubble3.c -------------------------*/
    
    

Note the changes. We are now passing a pointer to an integer (or array of integers) to **bubble()**. And from within bubble we are passing pointers to the elements of the array that we want to compare to our comparison function. And, of course we are dereferencing these pointer in our **compare()** function in order to make the actual comparison. Our next step will be to convert the pointers in **bubble()** to pointers to type void so that that function will become more type insensitive. This is shown in bubble\\_4.

    
    
    /*------------------ bubble_4.c ----------------------------*/
    
    /* Program bubble_4.c from PTRTUT10,HTM   6/13/97 */
    
    #include <stdio.h>
    
    int arr[10] = { 3,6,1,2,3,8,4,1,7,2};
    
    void bubble(int *p, int N);
    int compare(void *m, void *n);
    
    int main(void)
    {
        int i;
        putchar('\\n');
    
        for (i = 0; i < 10; i++)
        {
            printf("%d ", arr[i]);
        }
        bubble(arr,10);
        putchar('\\n');
    
        for (i = 0; i < 10; i++)
        {
            printf("%d ", arr[i]);
        }
        return 0;
    }
    
    void bubble(int *p, int N)
    {
        int i, j, t;
        for (i = N-1; i >= 0; i--)
        {
            for (j = 1; j <= i; j++)
            {
                if (compare((void *)&p[j-1], (void *)&p[j]))
                {
                    t = p[j-1];
                    p[j-1] = p[j];
                    p[j] = t;
                }
            }
        }
    }
    
    int compare(void *m, void *n)
    {
        int *m1, *n1;
        m1 = (int *)m;
        n1 = (int *)n;
        return (*m1 > *n1);
    }
    
    /*------------------ end of bubble_4.c ---------------------*/
    
    

Note that, in doing this, in **compare()** we had to introduce the casting of the void pointer types passed to the actual type being sorted. But, as we'll see later that's okay. And since what is being passed to **bubble()** is still a pointer to an array of integers, we had to cast these pointers to void pointers when we passed them as parameters in our call to **compare()**.

We now address the problem of what we pass to **bubble()**. We want to make the first parameter of that function a void pointer also. But, that means that within **bubble()** we need to do something about the variable **t**, which is currently an integer. Also, where we use **t = p\\[j-1\\];** the type of **p\\[j-1\\]** needs to be known in order to know how many bytes to copy to the variable **t** (or whatever we replace **t** with).

Currently, in bubble\\_4.c, knowledge within **bubble()** as to the type of the data being sorted (and hence the size of each individual element) is obtained from the fact that the first parameter is a pointer to type integer. If we are going to be able to use **bubble()** to sort any type of data, we need to make that pointer a pointer to type **void**. But, in doing so we are going to lose information concerning the size of individual elements within the array. So, in bubble\\_5.c we will add a separate parameter to handle this size information.

These changes, from bubble4.c to bubble5.c are, perhaps, a bit more extensive than those we have made in the past. So, compare the two modules carefully for differences.

    
    
    /*---------------------- bubble5.c ---------------------------*/
    
    /* Program bubble_5.c from PTRTUT10.HTM    6/13/97 */
    
    
    
    #include <stdio.h>
    #include <string.h>
    
    long arr[10] = { 3,6,1,2,3,8,4,1,7,2};
    
    void bubble(void *p, size_t width, int N);
    int compare(void *m, void *n);
    
    int main(void)
    {
        int i;
        putchar('\\n');
    
        for (i = 0; i < 10; i++)
        {
            printf("%d ", arr[i]);
        }
        bubble(arr, sizeof(long), 10);
        putchar('\\n');
    
        for (i = 0; i < 10; i++)
        {
            printf("%ld ", arr[i]);
        }
    
        return 0;
    }
    
    void bubble(void *p, size_t width, int N)
    {
        int i, j;
        unsigned char buf[4];
        unsigned char *bp = p;
    
        for (i = N-1; i >= 0; i--)
        {
            for (j = 1; j <= i; j++)
            {
                if (compare((void *)(bp + width*(j-1)),
                            (void *)(bp + j*width)))  /* 1 */
                {
    /*              t = p[j-1];   */
                    memcpy(buf, bp + width*(j-1), width);
    /*              p[j-1] = p[j];   */
                    memcpy(bp + width*(j-1), bp + j*width , width);
    /*              p[j] = t;   */
                    memcpy(bp + j*width, buf, width);
                }
            }
        }
    }
    
    int compare(void *m, void *n)
    {
        long *m1, *n1;
        m1 = (long *)m;
        n1 = (long *)n;
        return (*m1 > *n1);
    }
    
    /*--------------------- end of bubble5.c ---------------------*/
    
    

Note that I have changed the data type of the array from **int** to **long** to illustrate the changes needed in the **compare()** function. Within **bubble()** I've done away with the variable **t** (which we would have had to change from type **int** to type **long**). I have added a buffer of size 4 unsigned characters, which is the size needed to hold a long (this will change again in future modifications to this code). The unsigned character pointer **\\*bp** is used to point to the base of the array to be sorted, i.e. to the first element of that array.

We also had to modify what we passed to **compare()**, and how we do the swapping of elements that the comparison indicates need swapping. Use of **memcpy()** and pointer notation instead of array notation work towards this reduction in type sensitivity.

Again, making a careful comparison of bubble5.c with bubble4.c can result in improved understanding of what is happening and why.

We move now to bubble6.c where we use the same function bubble() that we used in bubble5.c to sort strings instead of long integers. Of course we have to change the comparison function since the means by which strings are compared is different from that by which long integers are compared. And,in bubble6.c we have deleted the lines within **bubble()** that were commented out in bubble5.c.

    
    /*--------------------- bubble6.c ---------------------*/
    /* Program bubble_6.c from PTRTUT10.HTM   6/13/97 */
    
    #include <stdio.h>
    #include <string.h>
    
    #define MAX_BUF 256
    
    char arr2[5][20] = {  "Mickey Mouse",
    
                          "Donald Duck",
    
                          "Minnie Mouse",
    
                          "Goofy",
    
                          "Ted Jensen" };
    
    void bubble(void *p, int width, int N);
    int compare(void *m, void *n);
    
    int main(void)
    {
        int i;
        putchar('\\n');
    
        for (i = 0; i < 5; i++)
        {
            printf("%s\\n", arr2[i]);
        }
        bubble(arr2, 20, 5);
        putchar('\\n\\n');
    
        for (i = 0; i < 5; i++)
        {
            printf("%s\\n", arr2[i]);
        }
        return 0;
    }
    
    void bubble(void *p, int width, int N)
    {
        int i, j, k;
        unsigned char buf[MAX_BUF];
        unsigned char *bp = p;
    
        for (i = N-1; i >= 0; i--)
        {
            for (j = 1; j <= i; j++)
            {
              k = compare((void *)(bp + width*(j-1)), (void *)(bp + j*width));
              if (k > 0)
                {
                 memcpy(buf, bp + width*(j-1), width);
                 memcpy(bp + width*(j-1), bp + j*width , width);
                 memcpy(bp + j*width, buf, width);
                }
            }
        }
    }
    
    int compare(void *m, void *n)
    {
        char *m1 = m;
        char *n1 = n;
        return (strcmp(m1,n1));
    }
    
    /*------------------- end of bubble6.c ---------------------*/
    
    

But, the fact that **bubble()** was unchanged from that used in bubble5.c indicates that that function is capable of sorting a wide variety of data types. What is left to do is to pass to **bubble()** the name of the comparison function we want to use so that it can be truly universal. Just as the name of an array is the address of the first element of the array in the data segment, the name of a function decays into the address of that function in the code segment. Thus we need to use a pointer to a function. In this case the comparison function.

Pointers to functions must match the functions pointed to in the number and types of the parameters and the type of the return value. In our case, we declare our function pointer as:

    
       int (*fptr)(const void *p1, const void *p2);
    

Note that were we to write:

    
        int *fptr(const void *p1, const void *p2);
    

we would have a function prototype for a function which returned a pointer to type **int**. That is because in C the parenthesis () operator have a higher precedence than the pointer \\* operator. By putting the parenthesis around the string (\\*fptr) we indicate that we are declaring a function pointer.

We now modify our declaration of **bubble()** by adding, as its 4th parameter, a function pointer of the proper type. It's function prototype becomes:

    
        void bubble(void *p, int width, int N,
                    int(*fptr)(const void *, const void *));
    

When we call the **bubble()**, we insert the name of the comparison function that we want to use. bubble7.c illustrate how this approach permits the use of the same **bubble()** function for sorting different types of data.

    
    
    /*------------------- bubble7.c ------------------*/
    
    /* Program bubble_7.c from PTRTUT10.HTM  6/10/97 */
    
    #include <stdio.h>
    #include <string.h>
    
    #define MAX_BUF 256
    
    long arr[10] = { 3,6,1,2,3,8,4,1,7,2};
    char arr2[5][20] = {  "Mickey Mouse",
                          "Donald Duck",
                          "Minnie Mouse",
                          "Goofy",
                          "Ted Jensen" };
    
    void bubble(void *p, int width, int N,
                int(*fptr)(const void *, const void *));
    int compare_string(const void *m, const void *n);
    int compare_long(const void *m, const void *n);
    
    int main(void)
    {
        int i;
        puts("\\nBefore Sorting:\\n");
    
        for (i = 0; i < 10; i++)               /* show the long ints */
        {
            printf("%ld ",arr[i]);
        }
        puts("\\n");
    
        for (i = 0; i < 5; i++)                  /* show the strings */
        {
            printf("%s\\n", arr2[i]);
        }
        bubble(arr, 4, 10, compare_long);          /* sort the longs */
        bubble(arr2, 20, 5, compare_string);     /* sort the strings */
        puts("\\n\\nAfter Sorting:\\n");
    
        for (i = 0; i < 10; i++)             /* show the sorted longs */
        {
            printf("%d ",arr[i]);
        }
        puts("\\n");
    
        for (i = 0; i < 5; i++)            /* show the sorted strings */
        {
            printf("%s\\n", arr2[i]);
        }
        return 0;
    }
    
    void bubble(void *p, int width, int N,
                int(*fptr)(const void *, const void *))
    {
        int i, j, k;
        unsigned char buf[MAX_BUF];
        unsigned char *bp = p;
    
        for (i = N-1; i >= 0; i--)
        {
            for (j = 1; j <= i; j++)
            {
                k = fptr((void *)(bp + width*(j-1)), (void *)(bp + j*width));
                if (k > 0)
                {
                    memcpy(buf, bp + width*(j-1), width);
                    memcpy(bp + width*(j-1), bp + j*width , width);
                    memcpy(bp + j*width, buf, width);
                }
            }
        }
    }
    
    int compare_string(const void *m, const void *n)
    {
        char *m1 = (char *)m;
        char *n1 = (char *)n;
        return (strcmp(m1,n1));
    }
    
    int compare_long(const void *m, const void *n)
    {
        long *m1, *n1;
        m1 = (long *)m;
        n1 = (long *)n;
        return (*m1 > *n1);
    }
    
    /*----------------- end of bubble7.c -----------------*/
    
    

### References for Chapter 10:

1.  "Algorithms in C"  
    Robert Sedgewick  
    Addison-Wesley  
    ISBN 0-201-51425-7  
    

[Epilog](epilogx.md)

[Back to Table of Contents](pointers.md)
`,Pp=`EPILOG
------

I have written the preceding material to provide an introduction to pointers for newcomers to C. In C, the more one understands about pointers the greater flexibility one has in the writing of code. The above expands on my first effort at this which was entitled ptr\\_help.txt and found in an early version of Bob Stout's collection of C code SNIPPETS. The content in this version has been updated from that in PTRTUTOT.ZIP included in SNIP9510.ZIP.

I am always ready to accept constructive criticism on this material, or review requests for the addition of other relevant material. Therefore, if you have questions, comments, criticisms, etc. concerning that which has been presented, I would greatly appreciate your contacting me via email me at [tjensen@ix.netcom.com](mailto:tjensen@ix.netcom.com).  
  

[Back to Table of Contents](pointers.md)
`,Bp=`C'de Pointer'lar ve Array'ler Üzerine Bir Eğitim

* * *

Ted Jensen'ın C'de Pointer'lar ve Array'ler Üzerine 
Eğitimi'ne Hoş Geldiniz


------------------------------------------------------------------

**Versiyon 1.3**  
  
Son Güncelleme: Mart 2019  
(Bu sayfanın altındaki Notlar'a bakın.)

* * *

Bu eğitim, C programlama dilinde pointer'ların ve array'lerin kullanımının temellerini kapsamaktadır.

*   [Çevrimiçi Okuyabilirsiniz](md/pointers.md)
*   Bir .ZIP dosyası halinde sıkıştırılmış HTML/MD/PDF sayfaları kümesi olarak [İndirin](archive/v1.3.zip)
*   Bir .tar.gz dosyası halinde sıkıştırılmış HTML/MD/PDF sayfaları kümesi olarak [İndirin](archive/v1.3.tar.gz)

En son revizyon 1.3 ile ilgili notlar: Mart 2019

Bu, Ted'in eğitiminin github repository'sinden çevrimiçi olarak kolayca okunabilmesi için hazırlanmış Markdown versiyonudur.
`,Ip=`ÖNSÖZ
-----

Bu döküman, C programlama diline yeni başlayan programcıları pointer'larla tanıştırmak amacıyla hazırlanmıştır. FidoNet ve UseNet'tekiler de dahil olmak üzere C ile ilgili çeşitli konferansları okuyarak ve bunlara katkıda bulunarak geçirdiğim birkaç yıl boyunca, C'ye yeni başlayan pek çok kişinin pointer'ların temellerini kavramakta zorlandığını fark ettim. Bu nedenle, bunları bol miktarda örnekle ve sade bir dille açıklamaya çalışma görevini üstlendim.

Bu dökümanın ilk versiyonu, şimdiki gibi kamu malı olarak sunulmuştu. Bu döküman Bob Stout tarafından fark edildi ve kendisinin yaygın olarak dağıtılan SNIPPETS koleksiyonuna PTR-HELP.TXT adında bir dosya olarak dahil edildi. O orijinal 1995 sürümünden bu yana, önemli miktarda materyal ekledim ve orijinal çalışma üzerinde bazı küçük düzeltmeler yaptım.

HTML versiyon 1.1'de, dünyanın dört bir yanından bana e-postayla gönderilen yorumların bir sonucu olarak ifadelendirmede bazı küçük değişiklikler yaptım. Versiyon 1.2'de ise, PC'lerde 16 bitlik compiler'lardan 32 bitlik compiler'lara geçişi yansıtmak amacıyla ilk iki bölümü güncelledim.

### Teşekkür:

FidoNet C Echo'da, comp.lang.c UseNet haber grubunda veya diğer ağlardaki diğer birkaç konferansta sordukları sorularla bu çalışmaya bilmeden katkıda bulunan o kadar çok insan var ki, hepsini listelemek imkansız olurdu. Bu materyalin ilk versiyonunu SNIPPETS dosyasına dahil etme nezaketini gösteren Bob Stout'a özel olarak teşekkür ederim.

### Yazar Hakkında:

Ted Jensen, manyetik kayıt alanında donanım tasarımcısı veya donanım tasarımcılarının yöneticisi olarak çalışmış emekli bir Elektronik Mühendisidir. Programlama, mainframe üzerinde çalıştırılmak üzere delikli kart hazırlamayı öğrendiği 1968 yılından beri zaman zaman uğraştığı bir hobisidir. (Mainframe, 64K manyetik çekirdek memory'sine sahipti!).

### Bu Materyalin Kullanımı:

Burada yer alan her şey kamu malı olarak sunulmuştur. İsteyen herkes bu materyali dilediği şekilde kopyalayabilir veya dağıtabilir. Tek ricam, bu materyalin bir sınıfta ders aracı olarak kullanılması durumunda, tüm bölümler, önsöz ve giriş dahil olmak üzere tamamının dağıtılmasıdır. Ayrıca böyle bir durumda, o sınıfın eğitmeninin aşağıdaki address'lerden birine bana durumu bildiren kısa bir not yazmasından memnuniyet duyarım. Bunu başkalarına faydalı olması ümidiyle yazdım ve herhangi bir maddi karşılık talep etmediğim için, en azından bu hedefe kısmen de olsa ulaştığımı bilmemin tek yolu, bu materyali faydalı bulanların geri bildirimleridir.

Bu arada, benimle iletişime geçmek için eğitmen veya öğretmen olmanıza gerek yok. Materyali faydalı bulan veya yapıcı eleştirileri olan herkesten gelecek bir nottan memnuniyet duyarım. Ayrıca aşağıdaki address'lere e-postayla gönderilen soruları da yanıtlamaya hazırım.

### Bu dökümanın diğer versiyonları:

Bu dökümanın hypertext versiyonuna ek olarak, tüm dökümanın yazdırılmasına veya indirilmesine daha uygun başka versiyonlarını da kullanıma sundum. Bu alandaki ilerlemelerimden haberdar olmak veya bu dökümanın daha güncel versiyonlarını kontrol etmek isterseniz, bkz. https://github.com/jflaherty/ptrtut13/releases

Ted Jensen  
Redwood City, California  
Şubat 2000  

[Giriş](introx.md)

[İçindekiler Tablosuna Dön](pointers.md)
`,Ep=`GİRİŞ
-----

C programming language'inde code yazma konusunda yetkin olmak istiyorsanız, pointer'ların nasıl kullanılacağı hakkında kapsamlı bir çalışma bilgisine sahip olmalısınız. Ne yazık ki, C pointer'ları yeni başlayanlar için, özellikle de Fortran, Pascal veya Basic gibi diğer bilgisayar dillerinden gelenler için bir engel teşkil ediyor gibi görünmektedir.

Yeni başlayanların pointer'ları anlamalarına yardımcı olmak için aşağıdaki materyali hazırladım. Bu materyalden maksimum yararı sağlamak için, kullanıcının makalede yer alan çeşitli listing'lerdeki code'ları çalıştırabilmesinin önemli olduğunu düşünüyorum. Bu nedenle, tüm code'ların herhangi bir ANSI uyumlu compiler ile çalışabilmesi için ANSI uyumlu kalmasına özen gösterdim. Ayrıca code'ları metin içinde dikkatlice bloklamaya çalıştım. Bu sayede, bir ASCII text editor yardımıyla, belirli bir code bloğunu yeni bir dosyaya kopyalayabilir ve sisteminizde compile edebilirsiniz. Materyalin anlaşılmasına yardımcı olacağı için okuyucuların bunu yapmasını tavsiye ederim.

[Bölüm 1: Pointer Nedir?](ch1x.md)

[İçindekiler Tablosuna Dön](pointers.md)
`,Mp=`BÖLÜM 1: Pointer nedir?
-----------------------

C'ye yeni başlayanların zor bulduğu konulardan biri de pointer kavramıdır. Bu rehberin amacı, bu yeni başlayanlar için pointer'lara ve pointer'ların kullanımına bir giriş sunmaktır.

Yeni başlayanların pointer'larla ilgili sorun yaşamasının temel nedeninin, (C'de kullanıldıkları şekliyle) variable'lar hakkında zayıf veya yetersiz bir anlayışa sahip olmaları olduğunu sıklıkla gördüm. Bu yüzden genel olarak C variable'ları hakkında bir tartışma ile başlıyoruz.

Bir program'daki variable, ismi olan ve value'su değişebilen bir şeydir. compiler ve linker'ın bunu ele alma yöntemi, o variable'ın value'sunu tutmak için bilgisayar içinde belirli bir memory bloğu atamasıdır. Bu bloğun boyutu, variable'ın değişmesine izin verilen aralığa bağlıdır. Örneğin, 32 bit PC'lerde bir integer variable'ın boyutu 4 byte'tır. Daha eski 16 bit PC'lerde integer'lar 2 byte'tı. C'de, integer gibi bir variable type'ının boyutu tüm makine type'larında aynı olmak zorunda değildir. Ayrıca C'de birden fazla integer variable type'ı vardır. C ile ilgili herhangi bir temel metinde okuyabileceğiniz integer'lar, long integer'lar ve short integer'lar vardır. Bu belge, 4 byte integer'lara sahip 32 bitlik bir sistemin kullanıldığını varsaymaktadır.

Sisteminizdeki çeşitli integer type'larının boyutunu öğrenmek istiyorsanız, aşağıdaki kodun çalıştırılması size bu bilgiyi verecektir.

	#include <stdio.h>
	
	int main()  
	{  
		printf("size of a short is %d\\n", sizeof(short));  
		printf("size of a int is %d\\n", sizeof(int));  
		printf("size of a long is %d\\n", sizeof(long));  
	}

Bir variable declare ettiğimizde compiler'a iki şeyi bildiririz: variable'ın adı ve variable'ın type'ı. Örneğin, yazarak **k** adında integer type'ında bir variable declare ederiz:

    
        int k; 
    

Bu ifadenin "int" kısmını gördüğünde compiler, integer'ın value'sunu tutmak için (bir PC'de) memory'den 4 byte ayırır. Ayrıca bir sembol tablosu oluşturur. Bu tabloya **k** sembolünü ve o 4 byte'ın ayrıldığı memory'deki göreceli address'i ekler.

Böylece, daha sonra eğer şöyle yazarsak:

    
        k = 2; 
    

bu ifade run time'da execute edildiğinde, 2 value'sunun **k**'nin value'sunun saklanması için ayrılmış olan o memory konumuna yerleştirilmesini bekleriz. C'de, integer **k** gibi bir variable'ı bir "object" olarak adlandırırız.

Bir bakıma, **k** object'i ile ilişkilendirilmiş iki "value" vardır. Biri orada saklanan integer'ın value'sudur (yukarıdaki örnekte 2) ve diğeri memory konumunun "value'sudur", yani **k**'nin address'idir. Bazı metinler bu iki value'yu sırasıyla _**rvalue**_ (right value, "are value" olarak telaffuz edilir) ve _**lvalue**_ (left value, "el value" olarak telaffuz edilir) terimleriyle adlandırır.

Bazı dillerde lvalue, assignment operatörü '='in sol tarafında bulunmasına izin verilen value'dur (yani sağ tarafın değerlendirilme sonucunun ulaştığı address). rvalue ise assignment ifadesinin sağ tarafında olan şeydir, yukarıdaki **2** gibi. rvalue'lar assignment ifadesinin sol tarafında kullanılamaz. Dolayısıyla: **2 = k**; geçersizdir.

Aslında, yukarıdaki "lvalue" tanımı C için biraz modifiye edilmiştir. K&R II'ye (sayfa 197) göre: \\[1\\]

> "Bir _**object**_, isimlendirilmiş bir depolama alanıdır; bir _**lvalue**_ ise bir object'e atıfta bulunan bir ifadedir."

Ancak bu noktada, ilk başta alıntılanan yukarıdaki tanım yeterlidir. Pointer'lara daha aşina hale geldikçe bu konuda daha fazla ayrıntıya gireceğiz.

Tamam, şimdi şunu ele alalım:

    
       int j, k; 
    
        k = 2; 
        j = 7;    <-- satır 1 
        k = j;    <-- satır 2 
    

Yukarıdakinde compiler, satır 1'deki **j**'yi **j** variable'ının address'i (kendi lvalue'su) olarak yorumlar ve 7 value'sunu bu address'e kopyalamak için kod oluşturur. Ancak satır 2'de **j**, kendi rvalue'su olarak yorumlanır (çünkü assignment operatörü '='in sağ tarafındadır). Yani burada **j**, **j** için ayrılmış olan memory konumunda _**saklanan**_ value'ya (bu durumda 7) atıfta bulunur. Böylece 7, **k**'nin lvalue'su tarafından belirtilen address'e kopyalanır.

Bu örneklerin tümünde 4 byte'lık integer'lar kullanıyoruz, bu nedenle rvalue'ların bir saklama konumundan diğerine tüm kopyalama işlemi 4 byte kopyalanarak yapılır. İki byte'lık integer'lar kullanıyor olsaydık, 2 byte kopyalıyor olurduk.

Şimdi, bir lvalue (bir address) tutmak için tasarlanmış bir variable istemek için bir nedenimiz olduğunu varsayalım. Böyle bir value'yu tutmak için gereken boyut sisteme bağlıdır. Toplam 64K memory'ye sahip daha eski masaüstü bilgisayarlarda, memory'deki herhangi bir noktanın address'i 2 byte içinde barındırılabilir. Daha fazla memory'ye sahip bilgisayarlar, bir address tutmak için daha fazla byte gerektirecektir. Depolamak istediğimiz şeyin bir address olduğunu compiler'a bildirmenin bir yoluna sahip olduğumuz sürece, gereken gerçek boyut çok da önemli değildir.

Böylece bir variable'a bir _**pointer variable**_ denir (nedenleri umarız birazdan daha netleşecektir). C'de bir pointer variable tanımladığımızda, bunu adının önüne bir yıldız işareti koyarak yaparız. C'de ayrıca pointer'ımıza, bu durumda pointer'ımızda depolayacağımız address'te saklanan veri type'ına atıfta bulunan bir type veririz. Örneğin, şu variable declaration'ını ele alalım:

    
       int *ptr;
    

**ptr** variable'ımızın adıdır (tıpkı **k**'nin integer variable'ımızın adı olması gibi). '*' işareti compiler'a bir pointer variable istediğimizi bildirir, yani memory'de bir address depolamak için kaç byte gerekiyorsa o kadarını ayırır. **int** ise pointer variable'ımızı bir integer'ın address'ini depolamak için kullanmayı amaçladığımızı belirtir. Böyle bir pointer'ın bir integer'a "point ettiği" söylenir. Ancak, **int k;** yazdığımızda **k**'ye bir value vermediğimize dikkat edin. Eğer bu tanım herhangi bir function'ın dışında yapılırsa, ANSI uyumlu compiler'lar bunu sıfıra initialize edecektir. Benzer şekilde, **ptr**'nin de bir value'su yoktur, yani yukarıdaki declaration'da içine bir address depolamadık. Bu durumda, yine declaration herhangi bir function'ın dışındaysa, herhangi bir C object'ine veya function'ına point etmeyeceği garanti edilecek şekilde bir value'ya initialize edilir. Bu şekilde initialize edilen bir pointer'a "null" pointer denir.

Bir null pointer için kullanılan gerçek bit deseni, kodun geliştirildiği belirli sisteme bağlı olduğundan sıfıra eşit olabilir veya olmayabilir. Kaynak kodunu çeşitli sistemlerdeki çeşitli compiler'lar arasında uyumlu hale getirmek için, bir null pointer'ı temsil etmek amacıyla bir makro kullanılır. Bu makro NULL adını taşır. Dolayısıyla, ptr = NULL gibi bir assignment ifadesiyle olduğu gibi, NULL makrosunu kullanarak bir pointer'ın value'sunu ayarlamak, pointer'ın bir null pointer haline gelmesini garanti eder. Benzer şekilde, tıpkı **if(k == 0)** ifadesindeki gibi bir integer sıfır value'su için test yapılabileceği gibi, **if (ptr == NULL)** kullanarak bir null pointer için de test yapabiliriz.

Ancak yeni variable'ımız **ptr**'yi kullanmaya geri dönelim. Şimdi **ptr** içinde integer variable'ımız **k**'nin address'ini depolamak istediğimizi varsayalım. Bunu yapmak için unary **&** operatörünü kullanırız ve şöyle yazarız:

    
        ptr = &k; 
    

**&** operatörünün yaptığı şey, **k** assignment operatörü '='in sağ tarafında olsa bile, **k**'nin lvalue'sunu (address'ini) almak ve bunu pointer'ımız ptr'nin içeriğine kopyalamaktır. Şimdi ptr'nin **k**'ye "point ettiği" söylenir. Bizimle kalın, tartışmamız gereken sadece bir operatör daha kaldı.

"dereferencing operatörü" yıldız işaretidir ve aşağıdaki gibi kullanılır:

    
        *ptr = 7; 
    

**ptr** tarafından point edilen address'e 7'yi kopyalayacaktır. Böylece, eğer **ptr** **k**'ye "point ediyorsa" (**k**'nin address'ini içeriyorsa), yukarıdaki ifade **k**'nin value'sunu 7 yapacaktır. Yani, '*' işaretini bu şekilde kullandığımızda, pointer'ın kendi value'suna değil, ptr'nin point ettiği şeyin value'suna atıfta bulunuyoruz.

Benzer şekilde, şöyle yazabiliriz:

    
     printf("%d\\n",*ptr); 
    

**ptr** tarafından point edilen address'te saklanan integer value'sunu ekrana yazdırmak için.

Tüm bu şeylerin birbiriyle nasıl uyum sağladığını görmenin bir yolu, aşağıdaki program'ı çalıştırmak ve ardından kodu ve çıktıyı dikkatlice incelemektir.

    
    ------------ Program 1.1 --------------------------------- 
    
    /* PTRTUT10.TXT dosyasından Program 1.1   6/10/97 */
    
    #include <stdio.h>
    
    int j, k;
    int *ptr;
    
    int main(void)
    {
        j = 1;
        k = 2;
        ptr = &k;
        printf("\\n");
        printf("j has the value %d and is stored at %p\\n", j, (void *)&j);
        printf("k has the value %d and is stored at %p\\n", k, (void *)&k);
        printf("ptr has the value %p and is stored at %p\\n", ptr, (void *)&ptr);
        printf("The value of the integer pointed to by ptr is %d\\n", *ptr);
    
        return 0;
    }
    

Not: C'nin burada kullanılan **(void \\*)** ifadesini gerektiren yönlerini henüz tartışmadık. Şimdilik bunu test kodunuza dahil edin. Bu ifadenin arkasındaki nedeni daha sonra açıklayacağız.

* * *

Gözden geçirmek gerekirse:

*   Bir variable, ona bir type ve bir isim verilerek declare edilir (örneğin **int k;**)
*   Bir pointer variable, ona bir type ve bir isim verilerek declare edilir (örneğin **int \\*ptr**); burada yıldız işareti compiler'a **ptr** adlı variable'ın bir pointer variable olduğunu söyler ve type da compiler'a pointer'ın hangi type'a point edeceğini belirtir (bu durumda integer).
*   Bir variable declare edildikten sonra, **&k** ifadesinde olduğu gibi adının önüne unary **&** operatörü getirilerek address'i elde edilebilir.
*   **\\*ptr** ifadesinde olduğu gibi unary '*' operatörünü kullanarak bir pointer'ı "dereference" edebiliriz, yani point ettiği şeyin value'suna atıfta bulunabiliriz.
*   Bir variable'ın "lvalue"su, kendi address'inin value'sudur, yani memory'de nerede saklandığıdır. Bir variable'ın "rvalue"su ise o variable'da (o address'te) saklanan value'dur.

### Bölüm 1 için Reference'lar:

1.  "The C Programming Language" 2nd Edition  
    B. Kernighan ve D. Ritchie  
    Prentice Hall  
    ISBN 0-13-110362-8  
    

[Bölüm 2: Pointer Type'ları ve Array'ler](ch2x.md)

[İçindekiler Tablosuna Geri Dön](pointers.md)
`,Dp=`BÖLÜM 2: Pointer type'ları ve Array'ler
---------------------------------------

Tamam, devam edelim. Şunun gibi, bir pointer'ın işaret ettiği variable'ın _**type**_'ını neden belirlememiz gerektiğini düşünelim:

    
         int *ptr;
    

Bunu yapmanın bir nedeni, daha sonra ptr bir şeye "işaret ettiğinde", eğer şöyle yazarsak:

    
        *ptr = 2;
    

compiler, **ptr** tarafından işaret edilen o memory konumuna kaç byte kopyalayacağını bilecektir. Eğer **ptr** bir integer'ı işaret edecek şekilde deklare edildiyse, 4 byte kopyalanacaktır. Benzer şekilde, float'lar ve double'lar için de uygun sayıda kopyalama yapılacaktır. Ancak, pointer'ın işaret ettiği type'ı tanımlamak, compiler'ın kodu yorumlaması için başka ilginç yollar da sağlar. Örneğin, memory'de yan yana duran on integer'dan oluşan bir blok düşünün. Yani, 10 integer'ı tutmak için 40 byte'lık memory ayrılmıştır.

Şimdi, integer pointer'ımız **ptr**'ı bu integer'ların ilkine işaret ettirdiğimizi varsayalım. Dahası, o integer'ın decimal 100 memory konumunda bulunduğunu farz edelim. Şöyle yazdığımızda ne olur:

    
        ptr + 1;
     
    

Compiler bunun bir pointer olduğunu (yani value'sunun bir address olduğunu) ve bir integer'ı işaret ettiğini (mevcut address'i olan 100, bir integer'ın address'idir) 'bildiği' için, **ptr**'a 1 yerine 4 ekler; böylece pointer, 104 memory konumundaki **bir sonraki** **integer**'ı 'işaret eder'. Benzer şekilde, eğer **ptr** bir short pointer'ı olarak deklare edilmiş olsaydı, 1 yerine 2 ekleyecekti. Aynı durum float'lar, double'lar gibi diğer data type'ları veya struct'lar gibi kullanıcı tanımlı data type'ları için de geçerlidir. Bu, şüphesiz normalde düşündüğümüz 'toplama' ile aynı şey değildir. C'de bu, daha sonra tekrar döneceğimiz bir terim olan 'pointer arithmetic' kullanılarak yapılan toplama olarak adlandırılır.

Benzer şekilde, **++ptr** ve **ptr++** ifadelerinin her ikisi de **ptr + 1** ile eşdeğer olduğundan (program içinde **ptr**'ın artırıldığı an farklı olabilse de), pre- veya post- olarak unary ++ operatörü kullanılarak bir pointer'ın artırılması, sakladığı address'i, "type" işaret edilen object'in type'ı olmak üzere sizeof(type) değeri kadar artırır (yani bir integer için 4).

Memory'de bitişik olarak yer alan 10 integer'lık bir blok, tanım gereği bir integer array'i olduğundan, bu durum array'ler ve pointer'lar arasında ilginç bir ilişkiyi ortaya çıkarır.

Aşağıdakini düşünelim:

    
        int my_array[] = {1,23,17,4,-5,100}; 
    

Burada 6 integer içeren bir array'imiz var. Bu integer'ların her birine **my_array**'e ait bir subscript vasıtasıyla, yani **my_array[0]** ile **my_array[5]** arasını kullanarak erişiriz. Ancak, alternatif olarak onlara bir pointer aracılığıyla şu şekilde de erişebiliriz:

    
        int *ptr;
        ptr = &my_array[0];       /* pointer'ımızı array'imizdeki ilk
                                     integer'a işaret ettirelim */ 
    

Ve sonra array'imizi ya array notasyonunu kullanarak ya da pointer'ımızı dereference ederek yazdırabiliriz. Aşağıdaki kod bunu göstermektedir:

    
    -----------  Program 2.1  -----------------------------------
    
    /* Program 2.1 from PTRTUT10.HTM   6/13/97 */
    
    #include <stdio.h>
    
    int my_array[] = {1,23,17,4,-5,100};
    int *ptr;
    
    int main(void)
    {
        int i;
        ptr = &my_array[0];     /* pointer'ımızı array'in ilk
                                           element'ine işaret ettirelim */
        printf("\\n\\n");
        for (i = 0; i < 6; i++)
        {
          printf("my_array[%d] = %d   ",i,my_array[i]);   /*<-- A */
          printf("ptr + %d = %d\\n",i, *(ptr + i));        /*<-- B */
        }
        return 0;
    }
    

Yukarıdaki programı compile edip çalıştırın; A ve B satırlarına ve programın her iki durumda da aynı value'ları yazdırdığına dikkat edin. Ayrıca B satırında pointer'ımızı nasıl dereference ettiğimizi gözlemleyin; yani önce ona i ekledik ve ardından yeni pointer'ı dereference ettik. B satırını şu şekilde değiştirelim:

    
        printf("ptr + %d = %d\\n",i, *ptr++);
    

ve tekrar çalıştırın... ardından şu şekilde değiştirin:

    
        printf("ptr + %d = %d\\n",i, *(++ptr));
    

ve bir kez daha deneyin. Her seferinde sonucu tahmin etmeye çalışın ve gerçek sonucu dikkatlice inceleyin.

C'de standart, **&var_name[0]** kullanabileceğimiz her yerde bunu **var_name** ile değiştirebileceğimizi belirtir; dolayısıyla kodumuzda yazdığımız yerdeki:

    
        ptr = &my_array[0];
    

yerine şunu yazabiliriz:

    
        ptr = my_array;
    

ve aynı sonucu elde ederiz.

Bu durum, birçok kaynağın bir array isminin bir pointer olduğunu belirtmesine yol açar. Ben zihnen "array isminin, array'deki ilk element'in address'i" olduğunu düşünmeyi tercih ediyorum. Birçok yeni başlayan (öğrenirken ben dahil), bunu bir pointer olarak düşünerek kafa karışıklığı yaşama eğilimindedir. Örneğin, şöyle yazabilirken:

    
        ptr = my_array;
    

şöyle yazamayız:

    
        my_array = ptr;
    

Bunun nedeni, **ptr** bir variable iken, **my_array**'in bir constant olmasıdır. Yani, **my_array[]** deklare edildikten sonra **my_array**'in ilk element'inin saklanacağı konum değiştirilemez.

Daha önce "lvalue" terimini tartışırken, K&R-2'den şu alıntıyı yapmıştım:

> "Bir **object**, isimlendirilmiş bir storage alanıdır; bir **lvalue** ise bir object'e reference eden bir ifadedir".

Bu ilginç bir soruyu ortaya çıkarır. **my_array** isimlendirilmiş bir storage alanı olduğuna göre, yukarıdaki assignment ifadesinde **my_array** neden bir lvalue değildir? Bu sorunu çözmek için bazıları **my_array**'i bir "unmodifiable lvalue" olarak adlandırır.

Yukarıdaki örnek programı,

    
        ptr = &my_array[0];
    

ifadesini

    
        ptr = my_array;
    

olarak değiştirerek modifiye edin ve sonuçların aynı olduğunu doğrulamak için tekrar çalıştırın.

Şimdi, yukarıda kullanılan **ptr** ve **my_array** isimleri arasındaki farkı biraz daha derinlemesine inceleyelim. Bazı yazarlar bir array'in ismini bir _**constant**_ pointer olarak adlandırır. Bununla ne kast ediyoruz? Bu anlamda "constant" terimini anlamak için, "variable" terimine dair tanımımıza geri dönelim. Bir variable deklare ettiğimizde, uygun type'taki value'yu tutmak için memory'de bir yer ayırırız. Bu yapıldıktan sonra, variable'ın ismi iki yoldan biriyle yorumlanabilir. Assignment operatörünün sol tarafında kullanıldığında, compiler bunu, assignment operatörünün sağ tarafının değerlendirilmesiyle elde edilen value'nun taşınacağı memory konumu olarak yorumlar. Ancak, assignment operatörünün sağ tarafında kullanıldığında, bir variable'ın ismi, o variable'ın value'sunu tutmak için ayrılmış olan memory address'inde saklanan içerik anlamına gelecek şekilde yorumlanır.

Bunu aklımızda tutarak, şimdi şunun gibi en basit constant'ları ele alalım:

    
        int i, k;
        i = 2;
    

Burada, **i** bir variable iken ve memory'nin data kısmında yer kaplarken, **2** bir constant'tır ve bu nedenle, memory'nin data segment'inde yer ayırmak yerine, doğrudan memory'nin code segment'ine gömülür. Yani, **k = i;** gibi bir şey yazmak compiler'a, run time'da **k**'ye taşınacak value'yu belirlemek için **&i** memory konumuna bakacak bir kod oluşturmasını söylerken; **i = 2;** tarafından oluşturulan kod ise sadece **2**'yi kodun içine yerleştirir ve data segment'ine herhangi bir reference'ta bulunulmaz. Yani, hem **k** hem de **i** birer object'tir, ancak **2** bir object değildir.

Benzer şekilde, yukarıdaki örnekte, **my_array** bir constant olduğundan, compiler array'in kendisinin nereye saklanacağını belirledikten sonra, şunu gördüğünde **my_array[0]**'ın address'ini "bilir":

    
        ptr = my_array;
    

ve bu address'i basitçe code segment'inde bir constant olarak kullanır; bunun ötesinde data segment'ine herhangi bir reference'ta bulunulmaz.

Burası, Bölüm 1'deki Program 1.1'de kullanılan **(void *)** ifadesinin kullanımını daha ayrıntılı açıklamak için iyi bir yer olabilir. Gördüğümüz gibi, çeşitli type'larda pointer'lara sahip olabiliriz. Şimdiye kadar integer'lara işaret eden pointer'ları ve character'lara işaret eden pointer'ları tartıştık. Gelecek bölümlerde structure'lara işaret eden pointer'ları ve hatta pointer to pointer'ları öğreneceğiz.

Ayrıca farklı sistemlerde bir pointer'ın boyutunun değişebileceğini öğrendik. Görünüşe göre, bir pointer'ın boyutu, işaret ettiği object'in data type'ına bağlı olarak da değişiklik gösterebilir. Bu nedenle, bir long integer'ı short integer type'ındaki bir variable'a assign etmeye çalışırken sorun yaşayabileceğiniz gibi, çeşitli type'lardaki pointer'ların value'larını diğer type'lardaki pointer variable'larına assign etmeye çalışırken de sorunlarla karşılaşabilirsiniz.

Bu sorunu en aza indirmek için C, void type'ında bir pointer sağlar. Şöyle yazarak böyle bir pointer deklare edebiliriz:

    
    void *vptr;
    

Bir void pointer, bir bakıma generic bir pointer'dır. Örneğin C, bir integer type'ına işaret eden pointer ile bir character type'ına işaret eden pointer'ın karşılaştırılmasına izin vermezken; bunların her ikisi de bir void pointer ile karşılaştırılabilir. Elbette, diğer variable'larda olduğu gibi, uygun durumlarda bir pointer type'ından diğerine dönüşüm yapmak için cast'ler kullanılabilir. Bölüm 1'deki Program 1.1'de, integer pointer'larını, %p conversion specification'ı ile uyumlu hale getirmek için void pointer'lara cast ettim. Sonraki bölümlerde, orada belirtilen nedenlerden dolayı başka cast'ler de yapılacaktır.

Evet, sindirilmesi gereken pek çok teknik konu var ve yeni başlayan birinin ilk okumada bunların hepsini anlamasını beklemiyorum. Zamanla ve deneyerek geri dönüp ilk 2 bölümü tekrar okumak isteyeceksiniz. Ama şimdilik, pointer'lar, character array'leri ve string'ler arasındaki ilişkiye geçelim.

[Bölüm 3: Pointer'lar ve String'ler](ch3x.md)

[İçindekiler Tablosuna Geri Dön](pointers.md)
`,Rp=`CHAPTER 3: Pointer'lar ve String'ler
----------------------------------

String'lerin incelenmesi, pointer'lar ve array'ler arasındaki ilişkiyi daha da pekiştirmek açısından yararlıdır. Ayrıca bazı standart C string function'larının nasıl implement edilebileceğini göstermeyi de kolaylaştırır. Son olarak, pointer'ların function'lara nasıl ve ne zaman geçirilebileceğini ve geçirilmesi gerektiğini gösterir.

C'de string'ler, character array'leridir. Bu durum diğer dillerde her zaman geçerli değildir. BASIC, Pascal, Fortran ve diğer çeşitli dillerde, bir string'in kendine ait bir data type'ı vardır. Ancak C'de böyle değildir. C'de bir string, binary sıfır character'ı ( **'\\0'** olarak yazılır) ile sonlandırılmış bir character array'idir. Tartışmamıza başlamak için, açıklama amacıyla tercih edilse de gerçek bir program'da muhtemelen asla yazmayacağınız bazı kodlar yazacağız. Örneğin, şunu düşünün:

    
        char my_string[40];
    
        my_string[0] = 'T';
        my_string[1] = 'e';
        my_string[2] = 'd':
        my_string[3] = '\\0';
    
    

Kimse bir string'i bu şekilde oluşturmayacak olsa da, nihai sonuç, bir **nul character'ı ile sonlandırılmış** bir character array'i olması bakımından bir string'dir. Tanım gereği C'de bir string, nul character'ı ile sonlandırılmış bir character array'idir. "nul" ifadesinin "NULL" ile aynı **olmadığının** farkında olun. nul, **'\\0'** kaçış dizisi (escape sequence) ile tanımlanan bir sıfırı ifade eder. Yani memory'de bir byte yer kaplar. Diğer taraftan NULL, null pointer'ları initialize etmek için kullanılan makronun adıdır. NULL, C compiler'ınızdaki bir header dosyasında #define edilmiştir, nul ise hiç #define edilmemiş olabilir.

Yukarıdaki kodu yazmak çok zaman alıcı olacağından, C aynı sonuca ulaşmak için iki alternatif yola izin verir. İlk olarak, şöyle yazılabilir:

    
        char my_string[40] = {'T', 'e', 'd', '\\0',};    
    

Fakat bu da pratik olandan daha fazla yazmayı gerektirir. Bu yüzden C şuna izin verir:

    
        char my_string[40] = "Ted";
    

Önceki örneklerde yapıldığı gibi tek tırnak kullanmak yerine çift tırnak kullanıldığında, nul character'ı ( **'\\0**' ) otomatik olarak string'in sonuna eklenir.

Yukarıdaki durumların tümünde aynı şey gerçekleşir. compiler, character'ları tutmak için 40 byte uzunluğunda bitişik bir memory bloğu ayırır ve ilk 4 character **Ted\\0** olacak şekilde initialize eder.

Şimdi, aşağıdaki program'ı inceleyin:

    
    ------------------program 3.1-------------------------------------
    
    /* Program 3.1 from PTRTUT10.HTM   6/13/97 */
    
    #include <stdio.h>
    
    char strA[80] = "A string to be used for demonstration purposes";
    char strB[80];
    
    int main(void)
    {
    
        char *pA;     /* character type'ına bir pointer */
        char *pB;     /* character type'ına başka bir pointer */
        puts(strA);   /* A string'ini göster */
        pA = strA;    /* pA'nın A string'ini göstermesini sağla */
        puts(pA);     /* pA'nın neyi gösterdiğini görüntüle */
        pB = strB;    /* pB'nin B string'ini göstermesini sağla */
        putchar('\\n');       /* ekranda bir satır aşağı in */
        while(*pA != '\\0')   /* A satırı (metne bakın) */
        {
            *pB++ = *pA++;   /* B satırı (metne bakın) */
        }
        *pB = '\\0';          /* C satırı (metne bakın) */
        puts(strB);          /* strB'yi ekranda göster */
        return 0;
    }
    
    --------- program 3.1 sonu -------------------------------------
    
        
    

Yukarıdaki kodda, her biri 80 character'dan oluşan iki character array'i tanımlayarak başlıyoruz. Bunlar global olarak tanımlandığı için, ilk olarak tamamı **'\\0**' olacak şekilde initialize edilirler. Daha sonra, **strA**'nın ilk 42 character'ı tırnak içindeki string ile initialize edilir.

Şimdi koda geçerek, iki character pointer'ı tanımlıyoruz ve string'i ekranda gösteriyoruz. Ardından **pA** pointer'ını **strA**'ya "yönlendiriyoruz". Yani, atama ifadesi (assignment statement) aracılığıyla **strA[0]**'ın address'ini **pA** variable'ımızın içine kopyalıyoruz. Şimdi, **pA** tarafından gösterilen şeyi ekranda göstermek için **puts()** function'ını kullanıyoruz. Burada **puts()** function prototipinin şu şekilde olduğunu düşünün:

    
        int puts(const char *s); 
    

Şimdilik **const** ifadesini yoksayın. **puts()** function'ına geçirilen parameter bir pointer'dır, yani bir pointer'ın **value**'sudur (C'deki tüm parameter'lar value ile geçirildiği için) ve bir pointer'ın value'su, gösterdiği yerin address'i veya basitçe bir address'tir. Dolayısıyla, gördüğümüz gibi **puts(strA);** yazdığımızda, **strA[0]**'ın address'ini geçirmiş oluruz.

Benzer şekilde, **pA = strA;** atamasını yaptığımız için, **puts(pA);** yazdığımızda da aynı address'i geçirmiş oluruz.

Bunu göz önünde bulundurarak, A satırındaki **while()** ifadesine kadar kodu takip edin. A satırı şunu belirtir:

**pA** tarafından gösterilen character (yani **\\*pA**) bir nul character'ı (yani sonlandırıcı **'\\0**') olmadığı sürece şunları yapın:

B satırı şunu belirtir: **pA** tarafından gösterilen character'ı, **pB** tarafından gösterilen alana kopyala; ardından **pA**'yı bir sonraki character'ı gösterecek şekilde, **pB**'yi ise bir sonraki alanı gösterecek şekilde artır.

Son character'ı kopyaladığımızda, **pA** artık sonlandırıcı nul character'ını gösterir ve döngü biter. Ancak nul character'ını kopyalamış olmayız. Ve tanım gereği, C'deki bir string **mutlaka** nul ile sonlandırılmış olmalıdır. Bu yüzden, C satırıyla nul character'ını ekleriz.

Bu program'ı, **strA**, **strB**, **pA** ve **pB** variable'larını izlerken ve program boyunca adım adım ilerlerken debugger'ınızla çalıştırmak çok eğiticidir. Yukarıda yapıldığı gibi sadece **strB[]** array'ini tanımlamak yerine, onu da aşağıdaki gibi bir değerle initialize ederseniz daha da eğitici olur:

    
        strB[80] = "12345678901234567890123456789012345678901234567890"
    

burada kullanılan basamak sayısı **strA**'nın uzunluğundan daha büyüktür ve ardından yukarıdaki variable'ları izlerken single stepping prosedürünü tekrarlayın. Bunları bir deneyin!

Bir an için **puts()** prototipine geri dönersek, parameter niteleyicisi (parameter modifier) olarak kullanılan "const", kullanıcıya function'ın **s** tarafından gösterilen string'i değiştirmeyeceğini, yani o string'e bir constant gibi davranacağını bildirir.

Elbette, yukarıdaki program'ın gösterdiği şey, bir string'i kopyalamanın basit bir yoludur. Neler olduğunu iyice anlayana kadar yukarıdaki kodla uğraştıktan sonra, C ile birlikte gelen standart **strcpy()**'nin yerine kendi alternatifimizi oluşturmaya geçebiliriz. Şöyle görünebilir:

    
       char *my_strcpy(char *destination, char *source)
       {
           char *p = destination;
           while (*source != '\\0')
           {
               *p++ = *source++;
           }
           *p = '\\0';
           return destination;
       }   
    

Bu durumda, standart rutin'de kullanılan, destination'a bir pointer döndürme pratiğini takip ettim.

Yine, function iki character pointer'ının value'larını, yani address'lerini kabul edecek şekilde tasarlanmıştır ve böylece önceki program'da şunu yazabilirdik:

    
        int main(void)
        {
            my_strcpy(strB, strA);
            puts(strB);
        }    
    

Standart C'de kullanılan ve şu prototipe sahip olan formdan biraz saptım:

    
        char *my_strcpy(char *destination, const char *source);  
    

Burada "const" modifier'ı, kullanıcıya function'ın, source pointer'ı tarafından gösterilen içeriği değiştirmeyeceğini garanti etmek için kullanılır. Yukarıdaki function'ı ve prototipini gösterildiği gibi "const" modifier'ını içerecek şekilde değiştirerek bunu kanıtlayabilirsiniz. Ardından, function içinde, source tarafından gösterilen içeriği değiştirmeye çalışan bir ifade ekleyebilirsiniz, örneğin:

    
        *source = 'X';
    

bu da normalde string'in ilk character'ını X olarak değiştirecektir. const modifier'ı, compiler'ınızın bunu bir hata olarak yakalamasını sağlamalıdır. Deneyin ve görün.

Şimdi, yukarıdaki örneklerin bize gösterdiği bazı şeyleri ele alalım. İlk olarak, **\\*ptr++** ifadesinin, **ptr** tarafından gösterilen value'yu döndürmek ve ardından pointer value'sunu artırmak şeklinde yorumlanması gerektiğini düşünün. Bu durum, operatörlerin öncelik sırası ile ilgilidir. Eğer **(\\*ptr)++** yazacak olsaydık, pointer'ın kendisini değil, pointer'ın gösterdiği şeyi artırırdık! Yani, yukarıdaki örnek string'in ilk character'ında kullanılsaydı 'T' character'i 'U'ya yükseltilirdi. Bunu göstermek için basit bir örnek kod yazabilirsiniz.

Bir string'in, son character'ı **'\\0'** olan bir character array'inden başka bir şey olmadığını tekrar hatırlayın. Yukarıda yaptığımız işlem, bir array'i kopyalamakla ilgilidir. Bu örnekte bir character array'i söz konusudur ancak aynı teknik integer, double vb. array'lerine de uygulanabilir. Ancak bu durumlarda string'lerle uğraşmıyor olacağımız için array'in sonu nul character'ı gibi özel bir value ile işaretlenmiş olmayacaktır. Sonu tanımlamak için özel bir value'ya güvenen bir versiyon implement edebilirdik. Örneğin, sonu negatif bir integer ile işaretleyerek pozitif integer'lardan oluşan bir array'i kopyalayabilirdik. Öte yandan, string'ler dışındaki öğelerin array'ini kopyalamak için bir function yazdığımızda, array'in address'inin yanı sıra kopyalanacak öğe sayısını da function'a geçirmemiz daha yaygındır; örneğin aşağıdaki prototipin gösterebileceği gibi bir şey:

    
        void int_copy(int *ptrA, int *ptrB, int nbr);
    

burada **nbr**, kopyalanacak integer'ların sayısıdır. Bu fikirle oynamak ve integer'lardan oluşan bir array oluşturup **int_copy()** function'ını yazıp yazamayacağınızı ve çalıştırıp çalıştıramayacağınızı görmek isteyebilirsiniz.

Bu, büyük array'leri manipüle etmek için function'ların kullanılmasına olanak tanır. Örneğin, bir function ile manipüle etmek istediğimiz 5000 integer'lık bir array'imiz varsa, o function'a yalnızca array'in address'ini (ve yaptığımız işe bağlı olarak yukarıdaki nbr gibi yardımcı bilgileri) geçirmemiz yeterlidir. Array'in kendisi **geçirilmez**, yani function çağrılmadan önce tüm array kopyalanıp stack'e konulmaz, sadece address'i gönderilir.

Bu, örneğin bir integer'ı bir function'a geçirmekten farklıdır. Bir integer geçirdiğimizde, integer'ın bir kopyasını çıkarırız, yani onun value'sunu alıp stack'e koyarız. function içinde geçirilen value üzerindeki herhangi bir manipülasyon, orijinal integer'ı hiçbir şekilde etkileyemez. Ancak array'ler ve pointer'lar ile, variable'ın address'ini geçirebilir ve böylece orijinal variable'ların value'larını manipüle edebiliriz.

[Bölüm 4: String'ler Hakkında Daha Fazlası](ch4x.md)

[İçindekiler Tablosuna Dön](pointers.md)
`,Op=`BÖLÜM 4: String'ler Hakkında Daha Fazlası
-----------------------------------------

Kısa sürede epey yol katettik! Biraz geri dönelim ve Bölüm 3'te string'lerin kopyalanması üzerine yaptıklarımıza farklı bir açıdan bakalım. Aşağıdaki function'ı ele alalım:

    
        char *my_strcpy(char dest[], char source[])
        {
            int i = 0;
            while (source[i] != '\\0')
            {
                dest[i] = source[i];
                i++;
            }
            dest[i] = '\\0';
            return dest;
        }
    

String'lerin, character array'leri olduğunu hatırlayın. Burada, asıl kopyalama işlemini yapmak için pointer notation yerine array notation kullanmayı seçtik. Sonuçlar aynıdır, yani string bu notation kullanılarak da daha önce olduğu gibi tam olarak kopyalanır. Bu durum, üzerinde tartışacağımız bazı ilginç noktaları ortaya çıkarır.

Parameter'lar value ile geçildiğinden, yukarıdaki gibi hem bir character pointer'ının hem de array adının geçilmesinde, gerçekte geçilen şey her bir array'in ilk element'inin address'idir. Böylece, ister bir character pointer'ı ister bir array adını parameter olarak kullanalım, geçilen parameter'ın sayısal value'su aynı olur. Bu da bir şekilde **source\\[i\\]** ifadesinin **\\*(p+i)** ile aynı olduğunu ima eder.

Aslında bu doğrudur, yani birinin **a\\[i\\]** yazdığı her yerde, bu ifade hiçbir sorun olmadan **\\*(a + i)** ile değiştirilebilir. Hatta compiler, her iki durumda da aynı kodu üretecektir. Böylece pointer aritmetiğinin, array index'lemesi ile aynı şey olduğunu görürüz. Her iki syntax de aynı sonucu üretir.

Bu, pointer'lar ile array'lerin aynı şey olduğunu söylemek DEĞİLDİR; değillerdir. Biz sadece, bir array'in belirli bir element'ini tanımlamak için, biri array index'lemesini, diğeri ise pointer aritmetiğini kullanan ve aynı sonuçları veren iki syntax seçeneğine sahip olduğumuzu söylüyoruz.

Şimdi, bu son ifadeye baktığımızda, bir kısmı olan **(a + i)**, **+** operatörünü kullanan basit bir toplamadır ve C kuralları böyle bir ifadenin değişmeli olduğunu belirtir. Yani **(a + i)**, **(i + a)** ile özdeştir. Dolayısıyla, **\\*(i + a)** ifadesini de **\\*(a + i)** kadar kolay bir şekilde yazabiliriz.

Fakat **\\*(i + a)** ifadesi **i\\[a\\]**'dan gelmiş olabilir! Bütün bunlardan, eğer:

    
        char a[20];
        int i;
    

yazmak

    
        a[3] = 'x';
    

şununla aynıdır:

    
        3[a] = 'x';
    

Deneyin! Character'lerden, integer'lardan veya long'lardan oluşan bir array tanımlayın; geleneksel yaklaşımı kullanarak 3. veya 4. element'e bir value atayın ve çalıştığından emin olmak için bu value'yu yazdırın. Sonra yukarıda yaptığım gibi array notation'ını tersine çevirin. İyi bir compiler buna itiraz etmeyecektir ve sonuçlar aynı olacaktır. Sadece bir merak konusu... fazlası değil!

Şimdi, yukarıdaki function'ımıza bakarsak, şunu yazdığımızda:

    
        dest[i] = source[i];
    

array index'lemesi ve pointer aritmetiğinin aynı sonuçları vermesi nedeniyle, bunu şu şekilde yazabiliriz:

    
        *(dest + i) = *(source + i);
    

Fakat bu, i'nin aldığı her value için 2 toplama işlemi gerektirir. Genel olarak konuşursak, toplama işlemleri, artırma işlemlerinden (**i++** ifadesinde olduğu gibi **++** operatörü kullanılarak yapılanlar gibi) daha fazla zaman alır. Bu durum modern optimize eden compiler'larda geçerli olmayabilir, ancak hiçbir zaman kesin olarak emin olunamaz. Dolayısıyla, pointer versiyonu, array versiyonundan biraz daha hızlı olabilir.

Pointer versiyonunu hızlandırmanın bir başka yolu da şunu değiştirmek olacaktır:

    
        while (*source != '\\0')
    

sadece şununla:

    
        while (*source)
    

çünkü parantez içindeki value, her iki durumda da aynı anda sıfır (FALSE) olacaktır.

Bu noktada, pointer'ları kullanarak kendi program'larınızı yazarak biraz deneme yapmak isteyebilirsiniz. String'leri manipüle etmek, deneme yapmak için iyi bir yerdir. Aşağıdaki gibi standart function'ların kendi versiyonlarınızı yazmak isteyebilirsiniz:

    
        strlen();
        strcat();
        strchr();
    

ve sisteminizde bulunabilecek diğerlerini.

Gelecek bir bölümde string'lere ve pointer'lar aracılığıyla manipüle edilmelerine geri döneceğiz. Şimdilik devam edelim ve biraz structure'ları tartışalım.

[Bölüm 5: Pointer'lar ve Structure'lar](ch5x.md)

[İçindekiler Tablosuna Dön](pointers.md)
`,Fp=`BÖLÜM 5: Pointer'lar ve Structure'lar
-------------------------------------

Bileceğiniz gibi, farklı data type'ları içeren bir data bloğunun formunu bir structure declaration'ı aracılığıyla declare edebiliriz. Örneğin, bir personel dosyası şuna benzer structure'lar içerebilir:

    
        struct tag {
            char lname[20];        /* soyadı */
            char fname[20];        /* adı */
            int age;               /* yaş */
            float rate;            /* örn. saatlik 12.75 */
        };
    

Diyelim ki bir disk dosyasında bu structure'lardan birçoğu var ve dosyalarımızdaki kişilerin bir listesine sahip olmak için her birini okumak ve her birinin adını ve soyadını yazdırmak istiyoruz. Geri kalan bilgiler yazdırılmayacaktır. Bu yazdırma işlemini bir function call ile gerçekleştirmek ve bu function'a elimizdeki structure'a işaret eden bir pointer pass etmek isteyeceğiz. Gösterim amacıyla şimdilik sadece tek bir structure kullanacağım. Ancak amacın, muhtemelen nasıl yapılacağını zaten bildiğimiz dosyayı okumak değil, function'ın kendisini yazmak olduğunu fark edin.

Gözden geçirmek gerekirse, structure member'larına nokta operatörüyle erişebileceğimizi hatırlayın, tıpkı şuradaki gibi:

    
    --------------- program 5.1 ------------------
    
    /* PTRTUT10.HTM'den Program 5.1     13/6/97 */
    
    
    #include <stdio.h>
    #include <string.h>
    
    struct tag {
        char lname[20];      /* soyadı */
        char fname[20];      /* adı */
        int age;             /* yaş */
        float rate;          /* örn. saatlik 12.75 */
    };
    
    struct tag my_struct;       /* my_struct structure'ını declare et */
    
    int main(void)
    {
        strcpy(my_struct.lname,"Jensen");
        strcpy(my_struct.fname,"Ted");
        printf("\\n%s ",my_struct.fname);
        printf("%s\\n",my_struct.lname);
        return 0;
    }
    
    -------------- end of program 5.1 --------------
    

Şimdi, bu özel structure, C program'larında kullanılan birçok structure'a kıyasla oldukça küçüktür. Yukarıdakilere şunları eklemek isteyebiliriz:

    
        date_of_hire;                  (data type'ları gösterilmemiştir)
        date_of_last_raise;
        last_percent_increase;
        emergency_phone;
        medical_plan;
        Social_S_Nbr;
        etc.....
    

Çok sayıda çalışanımız varsa, yapmak istediğimiz şey bu structure'lardaki data'yı function'lar yardımıyla manipüle etmektir. Örneğin, kendisine pass edilen herhangi bir structure'da listelenen çalışanın adını yazdıran bir function isteyebiliriz. Ancak orijinal C'de (Kernighan & Ritchie, 1. Baskı) bir structure'ı pass etmek mümkün değildi, sadece bir structure'a pointer pass edilebilirdi. ANSI C'de artık tüm structure'ı pass etmek mümkündür. Fakat buradaki amacımız pointer'lar hakkında daha fazla şey öğrenmek olduğundan, bunun üzerinde durmayacağız.

Her halükarda, structure'ın tamamını pass edersek bu, structure'ın içeriğini çağıran function'dan çağrılan function'a kopyalamamız gerektiği anlamına gelir. Stack kullanan sistemlerde bu, structure'ın içeriğinin stack'e push edilmesiyle yapılır. Büyük structure'larda bu bir sorun teşkil edebilir. Ancak, bir pointer pass etmek minimum düzeyde stack alanı kullanır.

Her halükarda, bu konu pointer'lar hakkında bir tartışma olduğundan, bir structure'a nasıl pointer pass edeceğimizi ve ardından bunu function içinde nasıl kullanacağımızı tartışacağız.

Açıklanan durumu ele alalım, yani bir parameter olarak bir structure'a pointer kabul edecek bir function istiyoruz ve bu function'ın içinden structure'ın member'larına erişmek istiyoruz. Örneğin, örnek structure'ımızdaki çalışanın adını yazdırmak istiyoruz.

Tamam, yani pointer'ımızın struct tag kullanılarak declare edilmiş bir structure'ı göstereceğini biliyoruz. Böyle bir pointer'ı şu declaration ile declare ederiz:

    
        struct tag *st_ptr;
    

ve onu şu şekilde örnek structure'ımıza yönlendiririz:

    
        st_ptr = &my_struct;
    

Şimdi, pointer'ı de-reference ederek belirli bir member'a erişebiliriz. Ama bir structure'a olan pointer'ı nasıl de-reference ederiz? Pointer'ı çalışanın yaşını set etmek için kullanmak isteyebileceğimiz gerçeğini göz önüne alalım. Şöyle yazardık:

    
        (*st_ptr).age = 63;
    

Buna dikkatlice bakın. Parantez içindeki ifadeyi, **st\\_ptr**'ın gösterdiği şeyle yani **my\\_struct** structure'ı ile değiştirmeyi ifade eder. Böylece bu, **my\\_struct.age** ile aynı şekle indirgenir.

Ancak, bu oldukça sık kullanılan bir ifadedir ve C tasarımcıları aynı anlama gelen alternatif bir syntax oluşturmuşlardır:

    
        st_ptr->age = 63;
    

Bunu aklımızda tutarak aşağıdaki program'a bakalım:

    
    ------------ program 5.2 ---------------------
    
    /* PTRTUT10.HTM'den Program 5.2   13/6/97 */
    
    #include <stdio.h>
    #include <string.h>
    
    struct tag{                     /* structure type'ı */
        char lname[20];             /* soyadı */
        char fname[20];             /* adı */
        int age;                    /* yaş */
        float rate;                 /* örn. saatlik 12.75 */
    };
    
    struct tag my_struct;           /* structure'ı tanımla */
    void show_name(struct tag *p);  /* function prototype'ı */
    
    int main(void)
    {
        struct tag *st_ptr;         /* bir structure'a pointer */
        st_ptr = &my_struct;        /* pointer'ı my_struct'a yönlendir */
        strcpy(my_struct.lname,"Jensen");
        strcpy(my_struct.fname,"Ted");
        printf("\\n%s ",my_struct.fname);
        printf("%s\\n",my_struct.lname);
        my_struct.age = 63;
        show_name(st_ptr);          /* pointer'ı pass et */
        return 0;
    }
    
    void show_name(struct tag *p)
    {
        printf("\\n%s ", p->fname);  /* p bir structure'ı gösteriyor */
        printf("%s ", p->lname);
        printf("%d\\n", p->age);
    }
    
    -------------------- end of program 5.2 ----------------
    

Yine, bu tek seferde özümsenmesi gereken çok fazla bilgidir. Okuyucu, çeşitli kod parçacıklarını compile edip çalıştırmalı; main içinde single step yaparken ve kodu function'ın içine doğru takip ederken neler olduğunu görmek için bir debugger kullanarak **my\\_struct** ve **p** gibi şeyleri gözlemlemelidir.

[Bölüm 6: String'ler ve String Array'leri Hakkında Biraz Daha Fazlası](ch6x.md)

[İçindekiler Tablosuna Dön](pointers.md)
`,Np=`CHAPTER 6: String'ler ve String Array'leri Hakkında Biraz Daha Fazlası
------------------------------------------------------

Şimdi, bir süreliğine string'lere geri dönelim. Aşağıdakilerin tümünde, tüm assignment'ların global olduğu, yani main() de dahil olmak üzere herhangi bir function'ın dışında yapıldığı anlaşılmalıdır.

Daha önceki bir bölümde şöyle yazabileceğimizi belirtmiştik:

    
       char my_string[40] = "Ted";
    

bu işlem, 40 byte'lık bir array için allocation yapacak ve string'i ilk 4 byte'a (üçü tırnak içindeki character'ler için ve dördüncüsü sonlandırıcı **'\\\\0'**'ı işlemek için) yerleştirecektir.

Aslında, tek yapmak istediğimiz "Ted" adını store etmek olsaydı şöyle yazabilirdik:

    
       char my_name[] = "Ted";
    

ve compiler character'leri sayacak, nul character için yer bırakacak ve toplam dört character'i memory'de store edecektir; bu memory'nin location'ı ise array name'i (bu durumda **my\\_name**) tarafından döndürülecektir.

Bazı kodlarda, yukarıdakiler yerine şunu görebilirsiniz:

    
       char *my_name = "Ted";
    

bu alternatif bir yaklaşımdır. Bunlar arasında bir fark var mı? Cevap... evet. Array notation'ı kullanıldığında, static memory block'unda her bir character için bir tane ve sonlandırıcı nul character'i için bir tane olmak üzere 4 byte'lık storage alanı kaplanır. Ancak pointer notation'ında aynı 4 byte'ın yanı sıra, **my\\_name** pointer variable'ını store etmek için **artı** N byte gerekir (burada N sisteme bağlıdır ancak genellikle minimum 2 byte'tır ve 4 veya daha fazla olabilir).

Array notation'ında **my\\_name**, array'in ilk element'inin address'i olan **&myname\\[0\\]** ifadesinin kısaltılmışıdır. Array'in location'ı run time sırasında sabit olduğundan, bu bir constant'tır (bir variable değildir). Pointer notation'ında ise **my\\_name** bir variable'dır. Hangisinin daha iyi bir yöntem olduğuna gelince, bu program'ın geri kalanında ne yapacağınıza bağlıdır.

Şimdi bir adım daha ileri gidelim ve bu declaration'ların her birinin, herhangi bir function'ın sınırları dışında global olarak yapılmasının aksine, bir function içinde yapılması durumunda ne olacağını ele alalım.

    
    void my_function_A(char *ptr)
    {
        char a[] = "ABCDE"
        .
        .
    } 
    
    
    void my_function_B(char *ptr)
    {
        char *cp = "FGHIJ"
        .
        .
    }
    

**my\\_function\\_A** durumunda, **a\\[\\]** array'inin içeriği veya value'ları data olarak kabul edilir. Array'in ABCDE value'larına initialize edildiği söylenir. **my\\_function\\_B** durumunda ise **cp** pointer'ının value'su data olarak kabul edilir. Pointer, **FGHIJ** string'ini point edecek şekilde initialize edilmiştir. Hem **my\\_function\\_A** hem de **my\\_function\\_B**'de definition'lar local variable'lardır ve bu nedenle **ABCDE** string'i, **cp** pointer'ının value'su gibi stack'te store edilir. **FGHIJ** string'i herhangi bir yerde store edilebilir. Benim sistemimde bu, data segment'inde store edilir.

Bu arada, **my\\_function\\_A**'da yaptığım gibi automatic variable'ların array initialization'ı, eski K&R C'de geçersizdi ve ancak daha yeni olan ANSI C ile "olgunluğa ulaştı". Bu durum, portability ve backwards compatibility konuları düşünüldüğünde önemli olabilecek bir gerçektir.

Pointer'lar ve array'ler arasındaki ilişkiyi/farkları tartışırken, multidimensional array'lere geçelim. Örneğin, şu array'i ele alalım:

    
        char multi[5][10];
    

Bu tam olarak ne anlama geliyor? Şöyle değerlendirelim.

    
        char multi[5][10];
    

Altı çizili kısmı bir array'in "name"i olarak kabul edelim. Başına **char** ekleyip sonuna **\\[10\\]** getirdiğimizde, 10 character'lik bir array elde ederiz. Ancak **multi\\[5\\]** name'inin kendisi de her biri 10 character'lik bir array olan 5 element bulunduğunu belirten bir array'dir. Dolayısıyla, her biri 10 character'lik 5 array'den oluşan bir array'e sahibiz...

Bu 2 dimensional array'i bir tür data ile doldurduğumuzu varsayalım. Memory'de, sanki aşağıdakine benzer bir şekilde 5 ayrı array'i initialize ederek oluşturulmuş gibi görünebilir:

    
        multi[0] = {'0','1','2','3','4','5','6','7','8','9'}
        multi[1] = {'a','b','c','d','e','f','g','h','i','j'}
        multi[2] = {'A','B','C','D','E','F','G','H','I','J'}
        multi[3] = {'9','8','7','6','5','4','3','2','1','0'}
        multi[4] = {'J','I','H','G','F','E','D','C','B','A'}
    
    
    

Aynı zamanda, münferit element'ler şu şekilde bir syntax kullanılarak address'lenebilir:

    
        multi[0][3] = '3'
        multi[1][7] = 'h'
        multi[4][0] = 'J'
    

Array'ler memory'de contiguous olduğundan, yukarıdaki durum için gerçek memory block'umuz şu şekilde görünmelidir:

    
        0123456789abcdefghijABCDEFGHIJ9876543210JIHGFEDCBA
        ^
        |_____ &multi[0][0] address'inden başlayarak
    
    

**multi\\[0\\] = "0123456789"** yazmadığıma dikkat edin. Eğer öyle yazsaydım, çift tırnak kullanıldığında tırnak içindeki character'lerin sonuna her zaman bir **'\\0'** character'i ekleneceğinden, bir sonlandırıcı **'\\0'** ima edilmiş olacaktı. Durum böyle olsaydı, her satır için 10 yerine 11 character'lik yer ayırmam gerekecekti.

Yukarıdaki amacım, memory'nin 2 dimensional array'ler için nasıl düzenlendiğini (layout'unu) göstermektir. Yani bu, character'lerden oluşan 2 dimensional bir array'dir, "string'lerin" bir array'i DEĞİLDİR.

Şimdi, compiler array'de kaç column olduğunu bilir, bu yüzden **multi + 1** ifadesini yukarıdaki 2. row'daki 'a' character'inin address'i olarak yorumlayabilir. Yani bu location'ı elde etmek için column sayısı olan 10'u ekler. Eğer integer'larla ve aynı dimension'a sahip bir array ile uğraşıyor olsaydık, compiler **10\\*sizeof(int)** eklerdi ki bu benim makinemde 20 olurdu. Böylece, yukarıdaki 4. row'daki **9**'un address'i **&multi\\[3\\]\\[0\\]** veya pointer notation'ında **\\*(multi + 3)** olurdu. 4. row'daki 2. element'in içeriğine ulaşmak için bu address'e 1 ekler ve sonucu aşağıdaki gibi dereference ederiz:

    
        *(*(multi + 3) + 1)
    

Biraz düşünerek şunları görebiliriz:

    
        *(*(multi + row) + col)    ve
        multi[row][col]            aynı sonuçları verir.
    

Aşağıdaki program, bunu character array'leri yerine integer array'leri kullanarak gösterir.

    
    ------------------- program 6.1 ----------------------
    
    /* Program 6.1 from PTRTUT10.HTM   6/13/97*/
    
    #include <stdio.h>
    #define ROWS 5
    #define COLS 10
    
    int multi[ROWS][COLS];
    
    int main(void)
    {
        int row, col;
        for (row = 0; row < ROWS; row++)
        {
            for (col = 0; col < COLS; col++)
            {
                multi[row][col] = row*col;
            }
        }
    
        for (row = 0; row < ROWS; row++)
        {
            for (col = 0; col < COLS; col++)
            {
                printf("\\n%d  ",multi[row][col]);
                printf("%d ",*(*(multi + row) + col));
            }
        }
    
        return 0;
    }
    ----------------- program 6.1'in sonu ---------------------   
    

Pointer versiyonunda gereken double dereferencing nedeniyle, 2 dimensional bir array'in name'inin genellikle bir pointer to a pointer'a eşdeğer olduğu söylenir. 3 dimensional bir array'de ise bir array of arrays of arrays ile uğraşıyor olurduk ve bazıları bunun name'inin bir pointer to a pointer to a pointer'a eşdeğer olduğunu söyleyebilir. Ancak burada, array'i array notation'ı kullanarak tanımlayarak onun için memory'de başlangıçta bir block ayırdık. Bu nedenle, bir variable ile değil, bir constant ile uğraşıyoruz. Yani, variable olan bir pointer'dan değil, sabit bir address'ten bahsediyoruz. Yukarıda kullanılan dereference işlemi, o address'in value'sunu (**multi** sembolü tarafından verilen **multi\\[0\\]\\[0\\]** address'i) değiştirmeye gerek kalmadan array'lerin array'indeki herhangi bir element'e erişmemizi sağlar.

[Bölüm 7: Multidimensional Array'ler Hakkında Daha Fazlası](ch7x.md)

[İçindekiler Tablosuna Dön](pointers.md)
`,jp=`BÖLÜM 7: Multi-Dimensional Array'ler Hakkında Daha Fazlası
----------------------------------------------------------

Önceki bölümde, verilen

    
        #define ROWS 5
        #define COLS 10
    
        int multi[ROWS][COLS];
    

durumunda, **multi** array'inin tekil element'lerine şu iki yöntemden biriyle erişebileceğimizi belirtmiştik:

    
        multi[row][col]
    

veya

    
        *(*(multi + row) + col)
    

Neler olup bittiğini daha iyi anlamak için, şunun yerine:

    
        *(multi + row)
    

**X** koyalım, yani:

    
        *(X + col)
    

Şimdi, buradan ifadenin dereference edilmesi ve **col**'un bir integer olduğunu bilmemiz nedeniyle **X**'in bir pointer gibi olduğunu görürüz. Burada kullanılan aritmetik, "pointer arithmetic" adı verilen özel bir çeşittir. Bu, bir integer array'den bahsettiğimiz için, **X + col + 1** tarafından point edilen address'in (yani bunun value'sunun), **X + col** address'inden **sizeof(int)** kadar büyük olması gerektiği anlamına gelir.

2 dimensional array'lerin memory layout'unu bildiğimiz için, yukarıda kullanılan **multi + row** ifadesinde, **multi + row + 1**'in value olarak bir sonraki satırı "point etmesi" için gereken miktar kadar artması gerektiğini belirleyebiliriz; bu da bu durumda **COLS \\* sizeof(int)**'e eşit bir miktar olacaktır.

Bu da, eğer **\\*(\\*(multi + row) + col)** ifadesinin run time'da doğru şekilde evaluate edilmesi isteniyorsa, compiler'ın **COLS**'un value'sunu, yani 2. dimension'ı hesaba katan bir kod üretmesi gerektiği anlamına gelir. İki ifade biçiminin denkliği nedeniyle, bu durum ister buradaki gibi pointer ifadesini, ister **multi\\[row\\]\\[col\\]** array ifadesini kullanıyor olalım geçerlidir.

Böylece, her iki ifadeyi de evaluate etmek için toplam 5 value'nun bilinmesi gerekir:

1.  Array'in ilk element'inin, **multi** ifadesi (yani array'in ismi) tarafından döndürülen address'i.
2.  Array'in element'lerinin type'ının boyutu, bu durumda **sizeof(int)**.
3.  Array'in 2. dimension'ı.
4.  İlk dimension için spesifik index value'su, bu durumda **row**.
5.  İkinci dimension için spesifik index value'su, bu durumda **col**.

Tüm bunları göz önünde bulundurarak, önceden deklare edilmiş bir array'in element value'larını manipüle edecek bir function tasarlama problemini ele alalım. Örneğin, **multi** array'inin tüm element'lerini 1 value'suna eşitleyen bir function:

    
    
        void set_value(int m_array[][COLS])
        {
            int row, col;
            for (row = 0; row < ROWS; row++)
            {
                for (col = 0; col < COLS; col++)
                {
                    m_array[row][col] = 1;
                }
            }
        }
    
    

Ve bu function'ı çağırmak için ardından şunu kullanırız:

    
        set_value(multi);
    

Şimdi, function içinde, for loop'larının sınırlarını belirleyen, ROWS ve COLS ile #define edilmiş value'ları kullandık. Fakat bu #define'lar, compiler açısından sadece constant'lardır; yani function içinde onları array boyutuyla ilişkilendirecek hiçbir şey yoktur. Elbette **row** ve **col** local variable'lardır. Formal parameter tanımı, compiler'ın run time'da aktarılacak pointer value'su ile ilişkili özellikleri belirlemesine izin verir. İlk dimension'a gerçekten ihtiyacımız yoktur ve daha sonra görüleceği üzere, alışkanlık veya tutarlılık gereği onu parameter tanımı içinde tanımlamamayı tercih edeceğimiz durumlar olabilir; ben de burada onu kullanmadım. Ancak, parameter ifadesinde gösterildiği gibi ikinci dimension kullanılmalıdır. Bunun nedeni, açıklandığı gibi **m\\_array\\[row\\]\\[col\\]**'un evaluate edilmesinde buna ihtiyaç duymamızdır. Parameter data type'ını (bu durumda **int**) tanımlarken ve row ile col için otomatik variable'lar for loop'larında tanımlanmışken, tek bir parameter kullanılarak yalnızca tek bir value aktarılabilir. Bu durumda, call ifadesinde belirtildiği gibi bu, **multi**'nin value'sudur; yani genellikle array'e bir pointer olarak adlandırılan ilk element'in address'idir. Bu nedenle, compiler'ı 2. dimension hakkında bilgilendirmenin tek yolu, onu parameter tanımına açıkça dahil etmektir.

Aslında genel olarak, multi-dimensional array'lerle çalışırken birden büyük tüm dimension'lara ihtiyaç duyulur. Yani eğer 3 dimensional array'lerden bahsediyorsak, parameter tanımında 2. ve 3. dimension'lar belirtilmelidir.

[Bölüm 8: Array'lere Pointer'lar](ch8x.md)

[İçindekiler Tablosuna Geri Dön](pointers.md)
`,Lp=`CHAPTER 8: Array'lere Pointer'lar
-----------------------------

Pointer'lar, elbette, array'ler de dahil olmak üzere her type veri object'ine point edilebilir. Bu durum, program 3.1'i tartışırken açıkça görülmüş olsa da, konu multidimensional array'lere geldiğinde bunu nasıl yaptığımızı detaylandırmak önemlidir.

Hatırlamak gerekirse, Bölüm 2'de bir integer array'i verildiğinde, aşağıdaki şekilde bir integer pointer'ı bu array'e point edebileceğimizi belirtmiştik:

    
        int *ptr;
        ptr = &my_array[0];       /* pointer'ımızı array'imizdeki ilk
                                     integer'a point ederiz */
    

Orada da belirttiğimiz gibi, pointer variable'ının type'ı, array'in ilk element'inin type'ı ile eşleşmelidir.

Ayrıca, bir array'i manipüle etmek için tasarlanmış bir function'ın formal parameter'ı olarak bir pointer kullanabiliriz. Örneğin:

Verilen:

    
        int array[3] = {'1', '5', '7'};
        void a_func(int *p);
    

Bazı yazılımcılar function prototype'ını şu şekilde yazmayı tercih edebilir:

    
       void a_func(int p[]);
    

bu da bu function'ı kullanabilecek diğer kişilere, function'ın bir array'in element'lerini manipüle etmek üzere tasarlandığını gösterme eğilimindedir. Elbette, her iki durumda da, function prototype'ında veya definition'ında hangi notasyonun kullanıldığından bağımsız olarak, gerçekte aktarılan şey, array'in ilk element'ine olan bir pointer'ın value'sudur. Eğer array notasyonu kullanılırsa, tüm array'i değil, yalnızca ilk element'in address'ini aktardığımız için array'in gerçek boyutunu aktarmaya gerek olmadığını unutmayın.

Şimdi 2 dimensional array problemine dönelim. Geçen bölümde belirtildiği gibi, C bir 2 dimensional array'i, one dimensional array'lerden oluşan bir array olarak yorumlar. Durum böyle olunca, integer'lardan oluşan bir 2 dimensional array'in ilk element'i, integer'lardan oluşan bir one dimensional array'dir. Ve integer'lardan oluşan bir two dimensional array'e yönelik bir pointer, bu data type'ına bir pointer olmalıdır. Bunu gerçekleştirmenin bir yolu, "typedef" keyword'ünün kullanılmasıdır. typedef, belirtilen bir data type'ına yeni bir ad atar. Örneğin:

    
        typedef unsigned char byte;
    

**byte** adının **unsigned char** type'ı anlamına gelmesini sağlar. Böylece

    
        byte b[10];     unsigned character'lardan oluşan bir array olur.
    

typedef declaration'ında, **byte** kelimesinin, normalde **unsigned char**'ımızın adı olacak olan şeyin yerini aldığına dikkat edin. Yani, **typedef** kullanma kuralı, bu data type'ı için yeni adın, data type'ının definition'ında kullanılan ad olmasıdır. Böylece:

    
        typedef int Array[10];
    

Array, 10 integer'dan oluşan bir array için bir data type'ı haline gelir. yani **Array my\\_arr;** ifadesi **my\\_arr**'i 10 integer'lık bir array olarak deklare eder ve **Array arr2d\\[5\\];** ifadesi **arr2d**'yi her biri 10 integer'lık 5 array'den oluşan bir array yapar.

Ayrıca **Array \\*p1d;** ifadesinin, **p1d**'yi 10 integer'lık bir array'e bir pointer yaptığını unutmayın. **\\*p1d**, **arr2d** ile aynı type'a point ettiğinden, two dimensional array **arr2d**'nin address'ini, 10 integer'lık bir one dimensional array'e pointer olan **p1d**'ye atamak kabul edilebilirdir. yani **p1d = &arr2d\\[0\\];** veya **p1d = arr2d;** ifadelerinin her ikisi de doğrudur.

Pointer'ımız için kullandığımız data type'ı 10 integer'lık bir array olduğundan, **p1d**'yi 1 artırmanın onun value'sunu **10\\*sizeof(int)** kadar değiştirmesini bekleriz ki öyle de olur. Yani, **sizeof(\\*p1d)** 20'dir. Bunu, basit ve kısa bir program yazıp çalıştırarak kendiniz de kanıtlayabilirsiniz.

Şimdi, typedef kullanmak okuyucu için işleri daha net ve programcı için daha kolay hale getirse de aslında gerekli değildir. İhtiyacımız olan şey, **typedef** keyword'üne ihtiyaç duymadan **p1d** gibi bir pointer'ı deklare etmenin bir yoludur. Bunun yapılabileceği ve

    
        int (*p1d)[10];
    

ifadesinin uygun declaration olduğu görülür; yani buradaki **p1d**, tıpkı Array type'ı kullanılarak yapılan declaration'da olduğu gibi 10 integer'lık bir array'e bir pointer'dır. Bunun şundan farklı olduğuna dikkat edin:

    
        int *p1d[10];
    

ki bu da **p1d**'yi, **int** type'ına yönelik 10 pointer'lık bir array'in adı yapacaktır.

[Bölüm 9: Pointer'lar ve Memory'nin Dynamic Allocation'ı](ch9x.md)

[İçindekiler'e Geri Dön](pointers.md)
`,$p=`BÖLÜM 9: Pointer'lar ve Memory'nin Dynamic Allocation'ı
------------------------------------------------------

Bazen **malloc()**, **calloc()** veya diğer allocation function'larını kullanarak run time'da memory allocate etmek elverişli olur. Bu yaklaşımı kullanmak, örneğin bir array'i saklamak için gereken memory block'unun boyutu hakkındaki kararı run time'a kadar ertelemeye olanak tanır. Veya bir zaman diliminde integer array'inin saklanması için memory'nin bir bölümünün kullanılmasına izin verir ve ardından bu memory'ye artık ihtiyaç duyulmadığında, bir structure array'inin saklanması gibi diğer kullanımlar için free edilebilir.

Memory allocate edildiğinde, allocate eden function (örneğin **malloc()**, **calloc()** vb.) bir pointer return eder. Bu pointer'ın type'ı, eski bir K&R compiler mı yoksa daha yeni olan ANSI tipi compiler mı kullandığınıza bağlıdır. Eski compiler'da return edilen pointer'ın type'ı **char** iken, ANSI compiler'da **void**'dir.

Eğer eski bir compiler kullanıyorsanız ve bir integer array'i için memory allocate etmek istiyorsanız, return edilen char pointer'ı bir integer pointer'ına cast etmeniz gerekecektir. Örneğin, 10 integer için yer allocate etmek amacıyla şöyle yazabiliriz:

    
        int *iptr;
        iptr = (int *)malloc(10 * sizeof(int));
        if (iptr == NULL)
    
        { .. ERROR ROUTINE GOES HERE .. }
    

Eğer ANSI uyumlu bir compiler kullanıyorsanız, **malloc()** bir **void** pointer return eder ve void pointer herhangi bir object type'ındaki pointer variable'ına assign edilebildiğinden, yukarıda gösterilen **(int \\*)** cast işlemine ihtiyaç duyulmaz. Array boyutu run time'da belirlenebilir ve compile time'da bilinmesi gerekmez. Yani, yukarıdaki **10** değeri, run time'da bir veri dosyasından veya klavyeden okunan ya da bir ihtiyaca göre hesaplanan bir variable olabilir.

Array ve pointer notation'ı arasındaki eşdeğerlik nedeniyle, **iptr** yukarıdaki gibi assign edildikten sonra array notation'ı kullanılabilir. Örneğin, şöyle yazılabilir:

    
        int k;
        for (k = 0; k < 10; k++)
           iptr[k] = 2;
    

tüm element'lerin value'larını 2 yapmak için.

Pointer'lar ve array'ler hakkında makul düzeyde iyi bir anlayışa sahip olunduğunda bile, C programlamaya yeni başlayanların ilk başta tökezlemesi muhtemel olan yerlerden biri multidimensional array'lerin dynamic allocation'ıdır. Genel olarak, mümkün olan her yerde bu tür array'lerin element'lerine pointer notation'ı ile değil, array notation'ı kullanarak erişebilmek isteriz. Uygulamaya bağlı olarak, compile time'da her iki boyutu da bilebilir veya bilmeyebiliriz. Bu durum, görevimizi gerçekleştirmek için çeşitli yollara kapı açar.

Gördüğümüz gibi, tek boyutlu bir array'i dynamically allocate ederken, array'in boyutu run time'da belirlenebilir. Şimdi, daha yüksek dereceli array'lerin dynamic allocation'ını kullanırken, compile time'da ilk boyutu bilmemize hiçbir zaman gerek yoktur. Daha yüksek boyutları bilmemiz gerekip gerekmediği, kodu nasıl yazacağımıza bağlıdır. Burada, integer'ların 2 boyutlu array'leri için dinamik olarak yer allocate etmenin çeşitli yöntemlerini tartışacağım.

İlk olarak, 2. boyutun compile time'da bilindiği durumları ele alacağız.

### YÖNTEM 1:

Bu sorunla başa çıkmanın bir yolu, **typedef** keyword'ünün kullanılmasıdır. 2 boyutlu bir integer array'ini allocate etmek için aşağıdaki iki notation'ın aynı object code'un üretilmesiyle sonuçlandığını hatırlayın:

    
    
        multi[row][col] = 1;     *(*(multi + row) + col) = 1;
    
    

Aşağıdaki iki notation'ın da aynı kodu ürettiği doğrudur:

    
    
        multi[row]            *(multi + row)
    
    

Sağdaki ifadenin bir pointer olarak evaluate edilmesi gerektiğinden, soldaki array notation'ının da bir pointer olarak evaluate edilmesi gerekir. Aslında **multi[0]**, ilk satırdaki ilk integer'a bir pointer return edecektir; **multi[1]** ise ikinci satırın ilk integer'ına bir pointer return edecektir vb. Gerçekte **multi[n]**, 2 boyutlu array'imizin n. satırını oluşturan integer array'ine bir pointer olarak evaluate edilir. Yani **multi**, array'lerin bir array'i olarak düşünülebilir ve **multi[n]** de bu array'lerin array'inin n. array'ine bir pointer'dır. Burada **pointer** kelimesi, bir address value'sunu temsil etmek için kullanılmaktadır. Literatürde bu tür kullanımlar yaygın olsa da, bu tür ifadeleri okurken bir array'in sabit address'i ile kendi başına bir veri nesnesi olan bir variable pointer arasındaki farkı ayırt etmeye dikkat edilmelidir.

Consider now:

    
    
    --------------- Program 9.1 --------------------------------
    
    /* PTRTUT10.HTM'den Program 9.1  13/6/97 */
    
    #include <stdio.h>
    #include <stdlib.h>
    
    #define COLS 5
    
    typedef int RowArray[COLS];
    RowArray *rptr;
    
    int main(void)
    {
        int nrows = 10;
        int row, col;
        rptr = malloc(nrows * COLS * sizeof(int));
        for (row = 0; row < nrows; row++)
        {
            for (col = 0; col < COLS; col++)
            {
                rptr[row][col] = 17;
            }
        }
    
        return 0;
    }
    ------------- End of Prog. 9.1 --------------------------------
    
    

Burada ANSI bir compiler varsaydım, bu nedenle **malloc()** tarafından return edilen void pointer üzerinde bir cast işlemine gerek yoktur. Eğer daha eski bir K&R compiler kullanıyorsanız, şu şekilde cast etmeniz gerekecektir:

    
        rptr = (RowArray *)malloc(.... etc.
    

Bu yaklaşımı kullanarak **rptr**, bir array isminin tüm özelliklerine sahip olur (rptr'ın değiştirilebilir olması hariç) ve programın geri kalanında array notation'ı kullanılabilir. Bu aynı zamanda, array içeriklerini değiştirmek için bir function yazmak istiyorsanız, tıpkı iki boyutlu array'lerin bir function'a geçirilmesini tartışırken yaptığımız gibi, o function'daki formal parameter'ın bir parçası olarak COLS kullanmanız gerektiği anlamına gelir.

### YÖNTEM 2:

Yukarıdaki YÖNTEM 1'de rptr, "COLS tane integer'dan oluşan tek boyutlu array" type'ına bir pointer haline geldi. **typedef** kullanmaya gerek kalmadan bu type için kullanılabilecek bir syntax olduğu ortaya çıkıyor. Şöyle yazarsak:

    
    
        int (*xptr)[COLS];
    
    

**xptr** variable'ı, yukarıdaki YÖNTEM 1'deki **rptr** variable'ı ile tamamen aynı özelliklere sahip olacaktır ve **typedef** keyword'ünü kullanmamıza gerek kalmaz. Burada **xptr**, bir integer array'ine pointer'dır ve bu array'in boyutu **#define** ile tanımlanan COLS ile verilir. Parantezlerin yerleşimi, array notation'ının önceliği daha yüksek olmasına rağmen pointer notation'ının baskın olmasını sağlar. Yani, eğer şöyle yazmış olsaydık:

    
        int *xptr[COLS];
    

**xptr**'ı, COLS ile tanımlanan sayıya eşit miktarda pointer tutan bir pointer array'i olarak tanımlamış olurduk. Bu kesinlikle aynı şey değildir. Bununla birlikte, pointer array'lerinin iki boyutlu array'lerin dynamic allocation'ında kullanım alanları vardır; bu durum sonraki 2 yöntemde görülecektir.

### YÖNTEM 3:

Her satırdaki element sayısını compile time'da bilmediğimiz, yani hem satır sayısının hem de sütun sayısının run time'da belirlenmesi gereken durumu düşünün. Bunu yapmanın bir yolu, **int** type'ına pointer array'i oluşturmak ve ardından her satır için yer allocate edip bu pointer'ları her bir satıra yönlendirmektir. Şunu inceleyin:

    
    
    -------------- Program 9.2 ------------------------------------
    
    /* PTRTUT10.HTM'den Program 9.2   13/6/97 */
    
    #include <stdio.h>
    #include <stdlib.h>
    
    int main(void)
    {
        int nrows = 5;     /* Hem nrows hem de ncols evaluate edilebilir */
        int ncols = 10;    /* veya run time'da okunabilir */
        int row;
        int **rowptr;
        rowptr = malloc(nrows * sizeof(int *));
        if (rowptr == NULL)
        {
            puts("\\nFailure to allocate room for row pointers.\\n");
            exit(0);
        }
    
        printf("\\n\\n\\nIndex   Pointer(hex)   Pointer(dec)   Diff.(dec)");
    
        for (row = 0; row < nrows; row++)
        {
            rowptr[row] = malloc(ncols * sizeof(int));
            if (rowptr[row] == NULL)
            {
                printf("\\nFailure to allocate for row[%d]\\n",row);
                exit(0);
            }
            printf("\\n%d         %p         %d", row, rowptr[row], rowptr[row]);
            if (row > 0)
            printf("              %d",(int)(rowptr[row] - rowptr[row-1]));
        }
    
        return 0;
    }
    
    --------------- End 9.2 ------------------------------------
    
    

Yukarıdaki kodda **rowptr**, **int** type'ına pointer pointer'ıdır. Bu durumda **int** type'ına pointer'lar array'inin ilk element'ine işaret eder. **malloc()** çağrılarının sayısını düşünün:

    
    
        Pointer array'ini elde etmek için             1     çağrı
        Satırlar için yer elde etmek için              5     çağrı
                                                    -----
                         Toplam                        6     çağrı
    

Eğer bu yaklaşımı kullanmayı seçerseniz, array'in bireysel element'lerine erişmek için array notation'ını kullanabilseniz de (örneğin **rowptr[row][col] = 17;**), bunun "2 boyutlu array"deki verilerin memory'de contiguous olduğu anlamına gelmediğini unutmayın.

Bununla birlikte, array notation'ını tıpkı continuous bir memory block'uymuş gibi kullanabilirsiniz. Örneğin şöyle yazabilirsiniz:

    
        rowptr[row][col] = 176;
    

tıpkı **rowptr**, compile time'da oluşturulmuş 2 boyutlu bir array'in ismiymiş gibi. Tabii ki **row** ve **col**, tıpkı compile time'da oluşturulmuş bir array'de olduğu gibi, oluşturduğunuz array'in bounds'ları içinde olmalıdır.

Eğer array'deki element'lerin saklanmasına ayrılmış contiguous bir memory block'una sahip olmak istiyorsanız, bunu aşağıdaki gibi yapabilirsiniz:

### YÖNTEM 4:

Bu yöntemde, öncelikle tüm array'i tutmak için bir memory block'u allocate ederiz. Daha sonra her satıra işaret edecek bir pointer array'i oluştururuz. Böylece, bir pointer array'i kullanılıyor olsa bile, memory'deki gerçek array contiguous olur. Kod şu şekildedir:

    
    ----------------- Program 9.3 -----------------------------------
    
    /* PTRTUT10.HTM'den Program 9.3   13/6/97 */
    
    #include <stdio.h>
    #include <stdlib.h>
    
    int main(void)
    {
        int **rptr;
        int *aptr;
        int *testptr;
        int k;
        int nrows = 5;     /* Hem nrows hem de ncols evaluate edilebilir */
        int ncols = 8;    /* veya run time'da okunabilir */
        int row, col;
    
        /* şimdi array için memory allocate ediyoruz */
    
        aptr = malloc(nrows * ncols * sizeof(int));
        if (aptr == NULL)
        {
            puts("\\nFailure to allocate room for the array");
            exit(0);
        }
    
        /* sonra satır pointer'ları için yer allocate ediyoruz */
    
        rptr = malloc(nrows * sizeof(int *));
        if (rptr == NULL)
        {
            puts("\\nFailure to allocate room for pointers");
            exit(0);
        }
    
        /* ve şimdi pointer'ları 'yönlendiriyoruz' */
    
        for (k = 0; k < nrows; k++)
        {
            rptr[k] = aptr + (k * ncols);
        }
    
        /* Şimdi satır pointer'larının nasıl artırıldığını gösteriyoruz */
        printf("\\n\\nIllustrating how row pointers are incremented");
        printf("\\n\\nIndex   Pointer(hex)  Diff.(dec)");
    
        for (row = 0; row < nrows; row++)
        {
            printf("\\n%d         %p", row, rptr[row]);
            if (row > 0)
            printf("              %d",(rptr[row] - rptr[row-1]));
        }
        printf("\\n\\nAnd now we print out the array\\n");
        for (row = 0; row < nrows; row++)
        {
            for (col = 0; col < ncols; col++)
            {
                rptr[row][col] = row + col;
                printf("%d ", rptr[row][col]);
            }
            putchar('\\n');
        }
    
        puts("\\n");
    
        /* ve burada aslında contiguous bir memory block'undaki
           2 boyutlu bir array ile uğraştığımızı gösteriyoruz. */
        printf("And now we demonstrate that they are contiguous in memory\\n");
    
        testptr = aptr;
        for (row = 0; row < nrows; row++)
        {
            for (col = 0; col < ncols; col++)
            {
                printf("%d ", *(testptr++));
            }
            putchar('\\n');
        }
    
        return 0;
    }
    
    
    
    
    ------------- End Program 9.3 -----------------
    
    

Tekrar **malloc()** çağrılarının sayısını düşünün:

    
        Array'in kendisi için yer elde etmek üzere      1      çağrı
        Pointer array'i için yer elde etmek üzere       1      çağrı
                                                      ----
                             Toplam                     2      çağrı
    
    

Şimdi, **malloc()**'a yapılan her çağrı ek alan overhead'i oluşturur, çünkü **malloc()** genellikle işletim sistemi tarafından block boyutuyla ilgili verileri içeren bir linked list oluşturarak implement edilir. Ancak daha da önemlisi, büyük array'lerde (birkaç yüz satır) zamanı geldiğinde neyin free edilmesi gerektiğini takip etmek daha zahmetli olabilir. Bu durum, veri block'unun contiguous olması sayesinde **memset()** kullanılarak tümünün sıfıra initialize edilmesine izin vermesiyle birleştiğinde, ikinci alternatifi daha çok tercih edilen seçenek haline getirmektedir.

Multidimensional array'ler üzerindeki son bir örnek olarak, 3 boyutlu bir array'in dynamic allocation'ını göstereceğiz. Bu örnek, bu tür bir allocation yaparken dikkat edilmesi gereken bir hususu daha gösterecektir. Yukarıda belirtilen nedenlerden dolayı, ikinci alternatifte açıklanan yaklaşımı kullanacağız. Aşağıdaki kodu inceleyin:

    
    
    ------------------- Program 9.4 -------------------------------------
    
    /* PTRTUT10.HTM'den Program 9.4   13/6/97 */
    
    #include <stdio.h>
    #include <stdlib.h>
    #include <stddef.h>
    
    int X_DIM=16;
    int Y_DIM=5;
    int Z_DIM=3;
    
    int main(void)
    {
        char *space;
        char ***Arr3D;
        int y, z;
        ptrdiff_t diff;
    
        /* öncelikle array'in kendisi için yer ayırıyoruz */
    
        space = malloc(X_DIM * Y_DIM * Z_DIM * sizeof(char));
    
        /* sonra, her biri en nihayetinde bir double pointer'lar 2 boyutlu
           array'inin ilk element'ine işaret edecek bir pointer array'i
           için yer allocate ediyoruz */
    
        Arr3D = malloc(Z_DIM * sizeof(char **));
    
        /* ve bunların her biri için yeni allocate edilmiş bir
           satır pointer'ları array'ine bir pointer assign ediyoruz */
    
        for (z = 0; z < Z_DIM; z++)
        {
            Arr3D[z] = malloc(Y_DIM * sizeof(char *));
    
            /* ve bu array'deki her bir alan için, orijinal olarak allocate edilen
               array alanındaki her satırın ilk element'ine
               bir pointer yerleştiriyoruz */
    
            for (y = 0; y < Y_DIM; y++)
            {
                Arr3D[z][y] = space + (z*(X_DIM * Y_DIM) + y*X_DIM);
            }
        }
    
        /* Ve şimdi, Arr3D pointer'ının indexing'inin continuous bir şekilde
           ilerleyip ilerlemediğini görmek için 3D array'imizdeki her address'i
           kontrol ediyoruz */
    
        for (z = 0; z < Z_DIM; z++)
        {
            printf("Location of array %d is %p\\n", z, *Arr3D[z]);
            for ( y = 0; y < Y_DIM; y++)
            {
                printf("  Array %d and Row %d starts at %p", z, y, Arr3D[z][y]);
                diff = Arr3D[z][y] - space;
                printf("    diff = %d  ",diff);
                printf(" z = %d  y = %d\\n", z, y);
            }
        }
        return 0;
    }
    
    ------------------- End of Prog. 9.4 ----------------------------
    
    

Eğer bu tutorial'ı bu noktaya kadar takip ettiyseniz, yalnızca comment'lere dayanarak yukarıdakileri çözmekte sorun yaşamamalısınız. Ancak belirtilmesi gereken birkaç nokta var. Şu satırla başlayalım:

    
        Arr3D[z][y] = space + (z*(X_DIM * Y_DIM) + y*X_DIM);
    

Burada **space**'in, **Arr3D[z][y]** ile aynı type'ta olan bir character pointer olduğuna dikkat edin. Pointer'a, **(z*(X_DIM * Y_DIM) + y*X_DIM)** ifadesinin evaluate edilmesiyle elde edilen gibi bir integer eklendiğinde, sonucun yeni bir pointer value'su olması önemlidir. Ve pointer value'larını pointer variable'larına assign ederken, value ile variable'ın veri type'ları eşleşmelidir.

[Bölüm 10: Function'lara Pointer'lar](ch10x.md)

[İçindekiler Tablosuna Dön](pointers.md)
`,Hp=`BÖLÜM 10: Function'lara Yönelik Pointer'lar
-------------------------------------------

Bu noktaya kadar data object'lerine yönelik pointer'ları tartıştık. C, function'lara yönelik pointer'ların declare edilmesine de izin verir. Function'lara yönelik pointer'ların çeşitli kullanım alanları vardır ve bunlardan bazıları burada ele alınacaktır.

Aşağıdaki gerçek problemi ele alalım. Bir array içinde saklanabilen hemen hemen her türlü veri koleksiyonunu sıralayabilen bir function yazmak istiyorsunuz. Bu bir string'ler, integer'lar, float'lar veya hatta structure'lar array'i olabilir. Sıralama algoritması hepsi için aynı olabilir. Örneğin, basit bir bubble sort algoritması veya daha karmaşık bir shell ya da quick sort algoritması olabilir. Gösterim amacıyla basit bir bubble sort kullanacağız.

Sedgewick \\[1\\], array'e bir pointer geçirildiğinde bunu sıralayacak bir function kurarak bubble sort'u C kodu kullanarak tanımlamıştır. Eğer bu function'ı **bubble()** olarak adlandırırsak, bir sıralama program'ı olan bubble\\_1.c aşağıdaki gibidir:

    
    
    /*-------------------- bubble_1.c --------------------*/
    
    /* PTRTUT10.HTM'den bubble_1.c program'ı   6/13/97 */
    
    #include <stdio.h>
    
    int arr[10] = { 3,6,1,2,3,8,4,1,7,2};
    
    void bubble(int a[], int N);
    
    int main(void)
    {
        int i;
        putchar('\\n');
        for (i = 0; i < 10; i++)
        {
            printf("%d ", arr[i]);
        }
        bubble(arr,10);
        putchar('\\n');
    
        for (i = 0; i < 10; i++)
        {
            printf("%d ", arr[i]);
        }
        return 0;
    }
    
    void bubble(int a[], int N)
    {
        int i, j, t;
        for (i = N-1; i >= 0; i--)
        {
            for (j = 1; j <= i; j++)
            {
                if (a[j-1] > a[j])
                {
                    t = a[j-1];
                    a[j-1] = a[j];
                    a[j] = t;
                }
            }
        }
    }
    
    
    
    /*---------------------- bubble_1.c'nin sonu -----------------------*/
    
    

Bubble sort, daha basit sıralama yöntemlerinden biridir. Algoritma, array'i ikinci element'ten sonuncu element'e kadar tarayarak her bir element'i kendisinden önceki element'le karşılaştırır. Kendisinden önceki element mevcut element'ten daha büyükse, büyük olan array'in sonuna daha yakın olacak şekilde ikisi yer değiştirir. İlk geçişte bu, en büyük element'in array'in en sonunda yer almasıyla sonuçlanır. Array artık son element hariç tüm element'lerle sınırlandırılır ve işlem tekrarlanır. Bu, bir sonraki en büyük element'i en büyük element'ten önceki bir noktaya yerleştirir. İşlem, element sayısının 1 eksiğine eşit sayıda tekrarlanır. Nihai sonuç sıralanmış bir array'dir.

Burada function'ımız, integer'lardan oluşan bir array'i sıralamak için tasarlanmıştır. Bu nedenle 1. satırda integer'ları karşılaştırıyoruz ve 2. satırdan 4. satıra kadar integer'ları saklamak için geçici bir integer alanı kullanıyoruz. Şimdi yapmak istediğimiz şey, bu kodu herhangi bir data type'ını kullanabilecek şekilde dönüştürüp dönüştüremeyeceğimizi görmek, yani integer'lar ile sınırlandırılmamaktır.

Aynı zamanda, her kullandığımızda algoritma'mızı ve onunla ilişkili kodu analiz etmek zorunda kalmak istemiyoruz. Karşılaştırma işlemini **bubble()** function'ının içinden çıkararak işe başlıyoruz; böylece asıl algoritma ile ilgili bölümleri yeniden yazmak zorunda kalmadan karşılaştırma function'ını değiştirmeyi nispeten kolaylaştırıyoruz. Bu, bubble\\_2.c ile sonuçlanır:

    
    
    /*---------------------- bubble_2.c -------------------------*/
    
    /* PTRTUT10.HTM'den bubble_2.c program'ı   6/13/97 */
    
       /* Karşılaştırma function'ının ayrılması */
    
    #include <stdio.h>
    
    int arr[10] = { 3,6,1,2,3,8,4,1,7,2};
    
    void bubble(int a[], int N);
    int compare(int m, int n);
    
    int main(void)
    {
        int i;
        putchar('\\n');
        for (i = 0; i < 10; i++)
        {
            printf("%d ", arr[i]);
        }
        bubble(arr,10);
        putchar('\\n');
    
        for (i = 0; i < 10; i++)
        {
            printf("%d ", arr[i]);
        }
        return 0;
    }
    
    void bubble(int a[], int N)
    
    {
        int i, j, t;
        for (i = N-1; i >= 0; i--)
        {
            for (j = 1; j <= i; j++)
            {
                if (compare(a[j-1], a[j]))
                {
                    t = a[j-1];
                    a[j-1] = a[j];
                    a[j] = t;
                }
            }
        }
    }
    
    int compare(int m, int n)
    {
        return (m > n);
    }
    /*--------------------- bubble_2.c'nin sonu -----------------------*/
    
    

Eğer amacımız sıralama rutinimizin data type'ından bağımsız olmasını sağlamaksa, bunu yapmanın bir yolu, integer data type'ını kullanmak yerine veriyi göstermek için void type'ına yönelik pointer'lar kullanmaktır. Bu yönde bir başlangıç olarak, yukarıdaki kodda pointer'ların kullanılabilmesi için birkaç şeyi değiştirelim. Başlangıç olarak, integer type'ına yönelik pointer'lara bağlı kalacağız.

    
    
    /*----------------------- bubble_3.c -------------------------*/
    
    /* PTRTUT10.HTM'den bubble_3.c program'ı    6/13/97 */
    
    #include <stdio.h>
    
    int arr[10] = { 3,6,1,2,3,8,4,1,7,2};
    
    void bubble(int *p, int N);
    int compare(int *m, int *n);
    
    int main(void)
    {
        int i;
        putchar('\\n');
    
        for (i = 0; i < 10; i++)
        {
            printf("%d ", arr[i]);
        }
        bubble(arr,10);
        putchar('\\n');
    
        for (i = 0; i < 10; i++)
        {
            printf("%d ", arr[i]);
        }
        return 0;
    }
    
    void bubble(int *p, int N)
    {
        int i, j, t;
        for (i = N-1; i >= 0; i--)
        {
            for (j = 1; j <= i; j++)
            {
                if (compare(&p[j-1], &p[j]))
                {
                    t = p[j-1];
                    p[j-1] = p[j];
                    p[j] = t;
                }
            }
        }
    }
    
    int compare(int *m, int *n)
    {
        return (*m > *n);
    }
    
    /*------------------ bubble_3.c'nin sonu -------------------------*/
    
    

Değişikliklere dikkat edin. Artık **bubble()** function'ına bir integer'a (veya integer array'ine) yönelik bir pointer geçiriyoruz. Ve bubble içinden, karşılaştırmak istediğimiz array element'lerinin pointer'larını karşılaştırma function'ımıza geçiriyoruz. Ve tabii ki, gerçek karşılaştırmayı yapabilmek için **compare()** function'ımızda bu pointer'ları dereference ediyoruz. Bir sonraki adımımız, **bubble()** içindeki pointer'ları void type'ına yönelik pointer'lara dönüştürmek olacak, böylece bu function type duyarlılığından daha bağımsız hale gelecektir. Bu durum bubble\\_4'te gösterilmektedir.

    
    
    /*------------------ bubble_4.c ----------------------------*/
    
    /* PTRTUT10.HTM'den bubble_4.c program'ı   6/13/97 */
    
    #include <stdio.h>
    
    int arr[10] = { 3,6,1,2,3,8,4,1,7,2};
    
    void bubble(int *p, int N);
    int compare(void *m, void *n);
    
    int main(void)
    {
        int i;
        putchar('\\n');
    
        for (i = 0; i < 10; i++)
        {
            printf("%d ", arr[i]);
        }
        bubble(arr,10);
        putchar('\\n');
    
        for (i = 0; i < 10; i++)
        {
            printf("%d ", arr[i]);
        }
        return 0;
    }
    
    void bubble(int *p, int N)
    {
        int i, j, t;
        for (i = N-1; i >= 0; i--)
        {
            for (j = 1; j <= i; j++)
            {
                if (compare((void *)&p[j-1], (void *)&p[j]))
                {
                    t = p[j-1];
                    p[j-1] = p[j];
                    p[j] = t;
                }
            }
        }
    }
    
    int compare(void *m, void *n)
    {
        int *m1, *n1;
        m1 = (int *)m;
        n1 = (int *)n;
        return (*m1 > *n1);
    }
    
    /*------------------ bubble_4.c'nin sonu ---------------------*/
    
    

Bunu yaparken, **compare()** içinde, geçirilen void pointer type'larının sıralanan gerçek type'a cast edilmesini eklemek zorunda kaldığımızı unutmayın. Ancak daha sonra göreceğimiz gibi bu sorun değil. Ve **bubble()**'a geçirilen şey hala bir integer array'ine yönelik pointer olduğundan, **compare()** çağrımızda bunları parameter olarak geçirirken bu pointer'ları void pointer'lara cast etmek zorunda kaldık.

Şimdi **bubble()** function'ına ne geçireceğimiz problemine odaklanalım. Bu function'ın ilk parameter'ını da bir void pointer yapmak istiyoruz. Ancak bu, **bubble()** içinde şu anda bir integer olan **t** variable'ı hakkında bir şeyler yapmamız gerektiği anlamına gelir. Ayrıca, **t = p[j-1];** kullandığımız yerde, **t** variable'ına (veya **t** yerine ne koyarsak ona) kaç byte kopyalanacağını bilmek için **p[j-1]** ifadesinin type'ının bilinmesi gerekir.

Şu anda bubble\\_4.c'de, **bubble()** içinde sıralanan verinin type'ına (ve dolayısıyla her bir bağımsız element'in boyutuna) ilişkin bilgi, ilk parameter'ın integer type'ına yönelik bir pointer olması gerçeğinden elde edilmektedir. Eğer herhangi bir veri type'ını sıralamak için **bubble()** function'ını kullanabilmek istiyorsak, bu pointer'ı **void** type'ına yönelik bir pointer yapmalıyız. Ancak bunu yaptığımızda, array içindeki bağımsız element'lerin boyutuna ilişkin bilgiyi kaybetmiş olacağız. Bu yüzden bubble\\_5.c'de, bu boyut bilgisini işlemek için ayrı bir parameter ekleyeceğiz.

bubble4.c'den bubble5.c'ye yapılan bu değişiklikler, belki de geçmişte yaptıklarımızdan biraz daha kapsamlıdır. Bu yüzden aralarındaki farklar için iki modülü dikkatlice karşılaştırın.

    
    
    /*---------------------- bubble5.c ---------------------------*/
    
    /* PTRTUT10.HTM'den bubble_5.c program'ı    6/13/97 */
    
    
    
    #include <stdio.h>
    #include <string.h>
    
    long arr[10] = { 3,6,1,2,3,8,4,1,7,2};
    
    void bubble(void *p, size_t width, int N);
    int compare(void *m, void *n);
    
    int main(void)
    {
        int i;
        putchar('\\n');
    
        for (i = 0; i < 10; i++)
        {
            printf("%d ", arr[i]);
        }
        bubble(arr, sizeof(long), 10);
        putchar('\\n');
    
        for (i = 0; i < 10; i++)
        {
            printf("%ld ", arr[i]);
        }
    
        return 0;
    }
    
    void bubble(void *p, size_t width, int N)
    {
        int i, j;
        unsigned char buf[4];
        unsigned char *bp = p;
    
        for (i = N-1; i >= 0; i--)
        {
            for (j = 1; j <= i; j++)
            {
                if (compare((void *)(bp + width*(j-1)),
                            (void *)(bp + j*width)))  /* 1 */
                {
    /*              t = p[j-1];   */
                    memcpy(buf, bp + width*(j-1), width);
    /*              p[j-1] = p[j];   */
                    memcpy(bp + width*(j-1), bp + j*width , width);
    /*              p[j] = t;   */
                    memcpy(bp + j*width, buf, width);
                }
            }
        }
    }
    
    int compare(void *m, void *n)
    {
        long *m1, *n1;
        m1 = (long *)m;
        n1 = (long *)n;
        return (*m1 > *n1);
    }
    
    /*--------------------- bubble5.c'nin sonu ---------------------*/
    
    

**compare()** function'ında gereken değişiklikleri göstermek için array'in data type'ını **int**'ten **long**'a değiştirdiğime dikkat edin. **bubble()** içinde (type'ını **int**'ten **long**'a değiştirmek zorunda kalacağımız) **t** variable'ını ortadan kaldırdım. Bir long veriyi tutmak için gereken boyut olan 4 unsigned character boyutunda bir buffer ekledim (bu, kodun gelecekteki modifikasyonlarında tekrar değişecektir). Unsigned character pointer'ı olan **\\*bp**, sıralanacak array'in tabanını, yani o array'in ilk element'ini göstermek için kullanılır.

Ayrıca **compare()**'e geçirdiğimiz şeyleri ve karşılaştırmanın yer değiştirmesi gerektiğini belirttiği element'lerin yer değiştirme işlemini nasıl yapacağımızı da değiştirmek zorunda kaldık. Array notasyonu yerine **memcpy()** ve pointer notasyonu kullanımı, bu type duyarlılığının azaltılmasına katkı sağlar.

Yine, bubble5.c ile bubble4.c arasında dikkatli bir karşılaştırma yapmak, neyin neden olduğunu daha iyi anlamanızı sağlayabilir.

Şimdi, string'leri long integer'lar yerine sıralamak için bubble5.c'de kullandığımız aynı bubble() function'ını kullandığımız bubble6.c'ye geçiyoruz. Tabii ki string'lerin karşılaştırılma yöntemi ile long integer'ların karşılaştırılma yöntemi farklı olduğundan karşılaştırma function'ını değiştirmemiz gerekiyor. Ve bubble6.c'de, bubble5.c'de yorum satırı haline getirilmiş olan **bubble()** içindeki satırları sildik.

    
    /*--------------------- bubble6.c ---------------------*/
    /* PTRTUT10.HTM'den bubble_6.c program'ı   6/13/97 */
    
    #include <stdio.h>
    #include <string.h>
    
    #define MAX_BUF 256
    
    char arr2[5][20] = {  "Mickey Mouse",
    
                          "Donald Duck",
    
                          "Minnie Mouse",
    
                          "Goofy",
    
                          "Ted Jensen" };
    
    void bubble(void *p, int width, int N);
    int compare(void *m, void *n);
    
    int main(void)
    {
        int i;
        putchar('\\n');
    
        for (i = 0; i < 5; i++)
        {
            printf("%s\\n", arr2[i]);
        }
        bubble(arr2, 20, 5);
        putchar('\\n\\n');
    
        for (i = 0; i < 5; i++)
        {
            printf("%s\\n", arr2[i]);
        }
        return 0;
    }
    
    void bubble(void *p, int width, int N)
    {
        int i, j, k;
        unsigned char buf[MAX_BUF];
        unsigned char *bp = p;
    
        for (i = N-1; i >= 0; i--)
        {
            for (j = 1; j <= i; j++)
            {
              k = compare((void *)(bp + width*(j-1)), (void *)(bp + j*width));
              if (k > 0)
                {
                 memcpy(buf, bp + width*(j-1), width);
                 memcpy(bp + width*(j-1), bp + j*width , width);
                 memcpy(bp + j*width, buf, width);
                }
            }
        }
    }
    
    int compare(void *m, void *n)
    {
        char *m1 = m;
        char *n1 = n;
        return (strcmp(m1,n1));
    }
    
    /*------------------- bubble6.c'nin sonu ---------------------*/
    
    

Ancak **bubble()** function'ının bubble5.c'de kullanılandan değiştirilmemiş olması, bu function'ın çok çeşitli data type'larını sıralama yeteneğine sahip olduğunu gösterir. Geriye kalan tek şey, gerçekten evrensel olabilmesi için **bubble()** function'ına kullanmak istediğimiz karşılaştırma function'ının adını geçirmektir. Bir array'in adının, array'in data segment'indeki ilk element'inin address'i olması gibi, bir function'ın adı da decay ederek o function'ın code segment'indeki address'ine dönüşür. Bu nedenle bir function'a yönelik pointer kullanmamız gerekir. Bu durumda bu, karşılaştırma function'ıdır.

Function'lara yönelik pointer'ların, işaret edilen function'larla parameter'ların sayısı ve type'ları ile return value'sunun type'ı açısından eşleşmesi gerekir. Bizim durumumuzda, function pointer'ımızı şu şekilde declare ederiz:

    
       int (*fptr)(const void *p1, const void *p2);
    

Şunu yazmış olsaydık:

    
        int *fptr(const void *p1, const void *p2);
    

**int** type'ına yönelik bir pointer döndüren bir function için bir function prototype'ına sahip olurduk. Bunun nedeni, C'de parantez () operatörünün pointer \\* operatöründen daha yüksek önceliğe sahip olmasıdır. Parantezleri (\\*fptr) string'inin etrafına koyarak bir function pointer'ı declare ettiğimizi belirtiriz.

Şimdi, 4. parameter olarak uygun type'ta bir function pointer'ı ekleyerek **bubble()** declaration'ımızı değiştiriyoruz. Function prototype'ı şu hale gelir:

    
        void bubble(void *p, int width, int N,
                    int(*fptr)(const void *, const void *));
    

**bubble()** function'ını çağırdığımızda, kullanmak istediğimiz karşılaştırma function'ının adını yerleştiririz. bubble7.c, bu yaklaşımın farklı veri type'larını sıralamak için aynı **bubble()** function'ının kullanılmasına nasıl izin verdiğini göstermektedir.

    
    
    /*------------------- bubble7.c ------------------*/
    
    /* PTRTUT10.HTM'den bubble_7.c program'ı  6/10/97 */
    
    #include <stdio.h>
    #include <string.h>
    
    #define MAX_BUF 256
    
    long arr[10] = { 3,6,1,2,3,8,4,1,7,2};
    char arr2[5][20] = {  "Mickey Mouse",
                          "Donald Duck",
                          "Minnie Mouse",
                          "Goofy",
                          "Ted Jensen" };
    
    void bubble(void *p, int width, int N,
                int(*fptr)(const void *, const void *));
    int compare_string(const void *m, const void *n);
    int compare_long(const void *m, const void *n);
    
    int main(void)
    {
        int i;
        puts("\\nBefore Sorting:\\n");
    
        for (i = 0; i < 10; i++)               /* long int'leri göster */
        {
            printf("%ld ",arr[i]);
        }
        puts("\\n");
    
        for (i = 0; i < 5; i++)                  /* string'leri göster */
        {
            printf("%s\\n", arr2[i]);
        }
        bubble(arr, 4, 10, compare_long);          /* long'ları sırala */
        bubble(arr2, 20, 5, compare_string);     /* string'leri sırala */
        puts("\\n\\nAfter Sorting:\\n");
    
        for (i = 0; i < 10; i++)             /* sıralanmış long'ları göster */
        {
            printf("%d ",arr[i]);
        }
        puts("\\n");
    
        for (i = 0; i < 5; i++)            /* sıralanmış string'leri göster */
        {
            printf("%s\\n", arr2[i]);
        }
        return 0;
    }
    
    void bubble(void *p, int width, int N,
                int(*fptr)(const void *, const void *))
    {
        int i, j, k;
        unsigned char buf[MAX_BUF];
        unsigned char *bp = p;
    
        for (i = N-1; i >= 0; i--)
        {
            for (j = 1; j <= i; j++)
            {
                k = fptr((void *)(bp + width*(j-1)), (void *)(bp + j*width));
                if (k > 0)
                {
                    memcpy(buf, bp + width*(j-1), width);
                    memcpy(bp + width*(j-1), bp + j*width , width);
                    memcpy(bp + j*width, buf, width);
                }
            }
        }
    }
    
    int compare_string(const void *m, const void *n)
    {
        char *m1 = (char *)m;
        char *n1 = (char *)n;
        return (strcmp(m1,n1));
    }
    
    int compare_long(const void *m, const void *n)
    {
        long *m1, *n1;
        m1 = (long *)m;
        n1 = (long *)n;
        return (*m1 > *n1);
    }
    
    /*----------------- bubble7.c'nin sonu -----------------*/
    
    

### Bölüm 10 İçin Reference'lar:

1.  "Algorithms in C"  
    Robert Sedgewick  
    Addison-Wesley  
    ISBN 0-201-51425-7  
    

[Sonsöz](epilogx.md)

[İçindekiler Tablosuna Dön](pointers.md)
`,Up=`EPİLOG
------

Yukarıdaki materyali, C diline yeni başlayanlar için pointer'lara bir giriş sağlamak amacıyla hazırladım. C'de, pointer'lar hakkında ne kadar çok şey anlaşılırsa, kod yazarken o kadar fazla esnekliğe sahip olunur. Yukarıdaki çalışma, ptr\\_help.txt başlığını taşıyan ve Bob Stout'un C kodu SNIPPETS koleksiyonunun erken bir versiyonunda bulunan bu konudaki ilk çalışmamı genişletmektedir. Bu versiyondaki içerik, SNIP9510.ZIP içinde yer alan PTRTUTOT.ZIP'teki içeriğe göre güncellenmiştir.

Bu materyal hakkında yapıcı eleştirileri kabul etmeye veya diğer ilgili materyallerin eklenmesi yönündeki talepleri incelemeye her zaman hazırım. Bu nedenle, sunulan konularla ilgili sorularınız, yorumlarınız, eleştirileriniz vb. varsa, benimle [tjensen@ix.netcom.com](mailto:tjensen@ix.netcom.com) adresi üzerinden e-posta yoluyla iletişime geçmenizden büyük memnuniyet duyarım.  
  

[İçindekiler Tablosuna Dön](pointers.md)
`,Wp=`# Glossary of C Terms (C Terimleri Sözlüğü)

This glossary contains the English technical terms used throughout the tutorial along with their Turkish translations and brief descriptions.

| Term (English) | Turkish Translation | Description |
| :--- | :--- | :--- |
| **pointer** | işaretçi | A variable type that stores the memory address of another variable. |
| **array** | dizi | A data structure where data of the same type is stored sequentially in memory. |
| **compiler** | derleyici | A program that translates C source code into machine code that the computer can execute. |
| **linker** | bağlayıcı | A program that combines compiled object files and libraries into a single executable file. |
| **memory** | bellek | Transient storage area (RAM) where program data and code are stored during execution. |
| **address** | adres | A unique numeric location indicating where a single byte of data is in memory. |
| **value** | değer | The data stored inside a variable or memory cell. |
| **type** | tür / tip | Definition specifying what kind of data (integer, character, etc.) a variable stores and how much space it occupies. |
| **variable** | değişken | A storage area in memory that has a name and whose value can change. |
| **function** | fonksiyon / işlev | A reusable block of code that performs a specific task. |
| **string** | karakter dizisi | A sequence of characters (letters, numbers, etc.). In C, it is terminated by a null character \`\\0\`. |
| **structure / struct** | yapı | A user-defined data type that groups different data types under a single name. |
| **allocation** | tahsis / yer ayırma | The process of reserving space in memory for program use. |
| **dynamic allocation** | dinamik bellek tahsisi | Allocation of memory dynamically as needed during program execution (run-time) (e.g. using \`malloc\`). |
| **dereference** | dereferans | The process of accessing the value stored at the address pointed to by a pointer (using the \`*\` operator in C). |
| **lvalue** | sol değer | Refers to persistent objects (storage locations) in memory that have a name and can be assigned a value. |
| **rvalue** | sağ değer | Refers to transient values, results of expressions, or constants; cannot be directly assigned a value. |
| **stack** | yığın | Fast memory region where local variables and function call details are automatically managed. |
| **heap** | öbek | Large memory region managed by the programmer, used for dynamic memory allocation. |
| **parameter** | parametre | Input variables expected in a function definition. |
| **argument** | argüman | Actual values sent to a function when it is called. |
| **index** | indis | Number indicating the position of an element in an array (arrays in C start at index 0). |
| **offset** | ofset / sapma | Distance or position deviation from a starting point. |
| **byte** | bayt | Basic unit of memory consisting of 8 bits. |
| **syntax** | sözdizimi | Grammatical and formatting rules of a programming language. |
| **cast / casting** | tür dönüşümü | The process of temporarily converting one data type to another. |
| **object** | nesne | A concrete entity that occupies space in memory and has a value. |
| **null / NULL** | boş | A special empty value that does not point to any valid address or object. |
| **function pointer** | fonksiyon işaretçisi | A special pointer type that holds the starting address of a function in memory. |
| **segment** | bölüt | Portions of memory reserved for specific purposes (code segment, data segment, etc.). |

[Back to Table of Contents](pointers.md)
`,Yp=`# C Terimleri Sözlüğü (Glossary of C Terms)

Bu sözlük, eğitim belgelerinde geçen İngilizce teknik terimlerin Türkçe karşılıklarını ve kısa açıklamalarını içermektedir.

| Terim (English) | Türkçe Karşılığı | Açıklama |
| :--- | :--- | :--- |
| **pointer** | işaretçi | Bellekteki başka bir değişkenin adresini saklayan değişken türü. |
| **array** | dizi | Aynı türden verilerin bellekte ardışık olarak saklandığı veri yapısı. |
| **compiler** | derleyici | C kaynak kodunu bilgisayarın çalıştırabileceği makine koduna çeviren program. |
| **linker** | bağlayıcı | Derlenmiş nesne dosyalarını ve kütüphaneleri birleştirerek tek bir çalıştırılabilir dosya haline getiren program. |
| **memory** | bellek | Program verilerinin ve kodunun çalışma zamanında saklandığı geçici depolama alanı (RAM). |
| **address** | adres | Bellekteki her bir baytlık verinin yerini belirten benzersiz sayısal konum. |
| **value** | değer | Bir değişkenin veya bellek hücresinin içinde saklanan veri. |
| **type** | tür / tip | Bir değişkenin ne tür veri (tamsayı, karakter vb.) saklayacağını ve ne kadar yer kaplayacağını belirten tanım. |
| **variable** | değişken | Değeri değişebilen ve bellekte bir adı olan depolama alanı. |
| **function** | fonksiyon / işlev | Belirli bir görevi yerine getiren ve tekrar kullanılabilen kod bloğu. |
| **string** | karakter dizisi | Karakterlerin (harfler, sayılar vb.) bir araya gelmesiyle oluşan metin verisi. C'de null karakteri \`\\0\` ile sonlandırılır. |
| **structure / struct** | yapı | Farklı veri türlerini tek bir çatı altında birleştiren kullanıcı tanımlı veri türü. |
| **allocation** | tahsis / yer ayırma | Bellekten program kullanımı için yer ayrılması işlemi. |
| **dynamic allocation** | dinamik bellek tahsisi | Programın çalışması sırasında (run-time), ihtiyaca göre bellekten dinamik olarak yer ayrılması (örn: \`malloc\` ile). |
| **dereference** | dereferans | Bir pointer'ın işaret ettiği adresteki değere erişme işlemi (C'de \`*\` operatörü ile yapılır). |
| **lvalue** | sol değer | Bellekte adı olan ve değer atanabilen kalıcı nesneleri (depolama alanlarını) ifade eder. |
| **rvalue** | sağ değer | Geçici değerleri, ifadelerin sonuçlarını veya sabitleri ifade eder; doğrudan değer atanamaz. |
| **stack** | yığın | Yerel değişkenlerin ve fonksiyon çağrı bilgilerinin otomatik olarak yönetildiği hızlı bellek bölgesi. |
| **heap** | öbek | Dinamik bellek tahsisi için kullanılan ve programcı tarafından yönetilen büyük bellek bölgesi. |
| **parameter** | parametre | Bir fonksiyonun tanımında beklenen girdi değişkenleri. |
| **argument** | argüman | Bir fonksiyon çağrılırken fonksiyona fiilen gönderilen değerler. |
| **index** | indis | Bir dizideki elemanların konumunu belirten sayı (C'de diziler 0. indisten başlar). |
| **offset** | ofset / sapma | Bir başlangıç noktasına olan uzaklık veya konum sapma miktarı. |
| **byte** | bayt | 8 bitten oluşan temel bellek birimi. |
| **syntax** | sözdizimi | Programlama dilinin dil bilgisi ve yazım kuralları. |
| **cast / casting** | tür dönüşümü | Bir veri türünü geçici olarak başka bir veri türüne dönüştürme işlemi. |
| **object** | nesne | Bellekte yer kaplayan ve bir değere sahip olan somut varlık. |
| **null / NULL** | boş | Herhangi bir geçerli adresi veya nesneyi işaret etmeyen özel boş değer. |
| **function pointer** | fonksiyon işaretçisi | Bellekte bir fonksiyonun başlangıç adresini tutan özel pointer türü. |
| **segment** | bölüt | Belleğin belirli amaçlar için ayrılmış bölümleri (kod bölütü, veri bölütü vb.). |

[İçindekiler Tablosuna Dön](pointers.md)
`,Ye=[{id:"welcome",title:{en:"Welcome",tr:"Hoş Geldiniz"},content:{en:yp,tr:Bp}},{id:"prefacex",title:{en:"Preface",tr:"Önsöz"},content:{en:gp,tr:Ip}},{id:"introx",title:{en:"Introduction",tr:"Giriş"},content:{en:bp,tr:Ep}},{id:"ch1x",title:{en:"What is a Pointer?",tr:"Pointer Nedir?"},content:{en:kp,tr:Mp}},{id:"ch2x",title:{en:"Pointer Types and Arrays",tr:"Pointer Türleri ve Array'ler"},content:{en:vp,tr:Dp}},{id:"ch3x",title:{en:"Pointers and Strings",tr:"Pointer'lar ve String'ler"},content:{en:_p,tr:Rp}},{id:"ch4x",title:{en:"More on Strings",tr:"String'ler Hakkında Daha Fazlası"},content:{en:wp,tr:Op}},{id:"ch5x",title:{en:"Pointers and Structures",tr:"Pointer'lar ve Structure'lar"},content:{en:zp,tr:Fp}},{id:"ch6x",title:{en:"More on Strings and Arrays of Strings",tr:"String'ler ve String Array'leri"},content:{en:xp,tr:Np}},{id:"ch7x",title:{en:"More on Multi-Dimensional Arrays",tr:"Çok Boyutlu Dizi'ler Hakkında"},content:{en:Tp,tr:jp}},{id:"ch8x",title:{en:"Pointers to Arrays",tr:"Array Pointer'ları"},content:{en:Ap,tr:Lp}},{id:"ch9x",title:{en:"Pointers and Dynamic Allocation of Memory",tr:"Pointer'lar ve Dinamik Bellek Tahsisi"},content:{en:Sp,tr:$p}},{id:"ch10x",title:{en:"Pointers to Functions",tr:"Fonksiyon İşaretçileri"},content:{en:Cp,tr:Hp}},{id:"epilog",title:{en:"Epilog",tr:"Sonsöz"},content:{en:Pp,tr:Up}},{id:"dictionary",title:{en:"Glossary of C Terms",tr:"C Terimleri Sözlüğü"},content:{en:Wp,tr:Yp}}];var qp=vi('<button><span style="opacity: 0.5; margin-right: 0.25rem; font-size: 0.8em; font-family: var(--font-mono)"> </span> </button>'),Gp=vi('<div id="settings-panel" class="settings-popover"><div class="settings-section"><span class="settings-section-title"> </span> <div class="settings-row" style="flex-wrap: wrap; gap: 0.5rem;"><button> </button> <button> </button> <button> </button> <button> </button> <button> </button> <button> </button></div></div> <div class="settings-section"><span class="settings-section-title"> </span> <div class="settings-row"><button> </button> <button> </button></div></div> <div class="settings-section"><span class="settings-section-title"> </span> <div class="font-size-control"><button class="font-size-btn">-</button> <span class="font-size-value"> </span> <button class="font-size-btn">+</button></div></div> <div class="settings-section" style="border-top: 1px solid var(--border-color); padding-top: 0.75rem;"><label class="toggle-switch"><div class="toggle-label-wrap"><span class="toggle-label"> </span> <span class="toggle-desc"> </span></div> <input type="checkbox" class="toggle-checkbox"/></label></div> <div style="font-size: 0.7rem; color: var(--text-muted); border-top: 1px solid var(--border-color); padding-top: 0.75rem;"><span style="font-weight: bold; display: block; margin-bottom: 2px;"> </span> </div></div>'),Xp=vi('<button class="nav-btn" style="text-align: left;"><span class="nav-btn-label"> </span> <span class="nav-btn-title"> </span></button>'),Us=vi('<div style="flex: 1;"></div>'),Vp=vi('<button class="nav-btn" style="text-align: right; align-items: flex-end;"><span class="nav-btn-label"> </span> <span class="nav-btn-title"> </span></button>'),Zp=vi('<div class="app-container"><aside><div class="sidebar-toc"></div></aside> <main class="main-content"><header class="top-header"><div class="header-left"><button title="Menu"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></button> <span style="font-family: var(--font-sans); font-size: 0.85rem; font-weight: 600; color: var(--text-muted);"> </span></div> <div class="header-right"><button class="icon-btn" title="Dil / Language"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> <span style="font-size: 0.65rem; font-weight: bold; position: absolute; margin-top: 10px; margin-left: 12px; background: var(--bg-content); border: 1px solid var(--border-color); border-radius: 3px; padding: 0px 2px; color: var(--text-color);"> </span></button> <button id="settings-toggle-btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg></button> <!></div></header>  <div id="reader-area" class="reader-container"><div><article></article> <nav class="nav-buttons"><!> <!></nav></div> <button title="Scroll to top"><svg class="progress-svg" width="40" height="40" viewBox="0 0 40 40"><rect class="progress-bg" x="1" y="1" width="38" height="38" fill="none" stroke="var(--border-color)" stroke-width="2"></rect><rect class="progress-bar-rect" x="1" y="1" width="38" height="38" fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="152"></rect></svg> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="z-index: 1;"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg></button></div> <footer class="bottom-status-bar"><div class="status-left"><span> </span></div> <div class="status-right"><span> </span> <span>•</span> <span> </span></div></footer></main></div>');function Kp(r,e){el(e,!0);const n={tr:{title:"C Kılavuzu",subtitle:"Pointer ve Array Rehberi",toc:"İÇİNDEKİLER",prev:"Önceki Bölüm",next:"Sonraki Bölüm",theme:"Tema Seçimi",font:"Yazı Karakteri",fontSize:"Yazı Boyutu",focusMode:"Odak Modu",focusModeDesc:"Sadece aktif paragrafa odaklanın",light:"Açık",dark:"Koyu",sepia:"Sepya",forest:"Orman",nord:"Kuzey",solarized:"Solarize",sans:"Geist Sans",serif:"Serif (Kitap)",mono:"Geist Mono",wordCount:"kelime",readTime:"dk okuma",close:"Kapat",settings:"Görünüm Ayarları",chapterInfo:"Bölüm",keyboardNav:"Klavye Navigasyonu",keyboardNavDesc:"Bölümler arası geçiş için Sol ve Sağ yön tuşlarını kullanabilirsiniz."},en:{title:"C Tutorial",subtitle:"Pointers & Arrays",toc:"TABLE OF CONTENTS",prev:"Previous Chapter",next:"Next Chapter",theme:"Theme Selection",font:"Typography",fontSize:"Font Size",focusMode:"Focus Mode",focusModeDesc:"Focus on the hovered paragraph",light:"Light",dark:"Dark",sepia:"Sepia",forest:"Forest",nord:"Nord",solarized:"Solarized",sans:"Geist Sans",serif:"Serif (Book)",mono:"Geist Mono",wordCount:"words",readTime:"min read",close:"Close",settings:"Appearance Settings",chapterInfo:"Chapter",keyboardNav:"Keyboard Navigation",keyboardNavDesc:"You can use Left and Right arrow keys to switch chapters."}};let t=he(An(localStorage.getItem("reader-lang")||"tr")),i=he(An(localStorage.getItem("reader-chapter")||"welcome")),a=he(An(localStorage.getItem("reader-theme")||"light")),o=he(An(localStorage.getItem("reader-font")||"sans")),s=he(An(Number(localStorage.getItem("reader-fontsize"))||18)),l=he(!1);wn(()=>{const P=localStorage.getItem("reader-sidebar");P!==null?U(l,P==="true"):U(l,window.innerWidth>1024)});let u=he(localStorage.getItem("reader-focus")==="true"),d=he(!1),h=he(0),c=he(!0),p=he(!1),y=he(!1),f=he(null);wn(()=>{localStorage.setItem("reader-lang",S(t))}),wn(()=>{localStorage.setItem("reader-chapter",S(i))}),wn(()=>{localStorage.setItem("reader-theme",S(a)),document.documentElement.setAttribute("data-theme",S(a))}),wn(()=>{localStorage.setItem("reader-font",S(o))}),wn(()=>{localStorage.setItem("reader-fontsize",S(s).toString())}),wn(()=>{localStorage.setItem("reader-focus",S(u).toString())}),wn(()=>{localStorage.setItem("reader-sidebar",S(l).toString())}),wn(()=>{S(l)?setTimeout(()=>{Ir.fromTo(".toc-item",{opacity:0,x:-10,transition:"none"},{opacity:(P,D)=>D.classList.contains("active")?1:.6,x:0,stagger:.025,duration:.4,ease:"power2.out",clearProps:"opacity,transform,transition",overwrite:"auto"})},50):(Ir.killTweensOf(".toc-item"),setTimeout(()=>{S(l)||Ir.set(".toc-item",{opacity:0,x:-10})},300))});let b=Ht(()=>Ye.find(P=>P.id===S(i))||Ye[0]),w=Ht(()=>Ye.findIndex(P=>P.id===S(i))),m=Ht(()=>S(b).content[S(t)]||S(b).content.en||"");const g=new Zl({renderer:{code(P,D){const te=(D||"c").trim().split(/\s+/)[0];return`<pre class="language-${te}"><code class="language-${te}">${P}</code></pre>`}}});let v=Ht(()=>S(m)?g.parse(S(m)):""),k=Ht(()=>S(m)?S(m).replace(/[#*`_\[\]()\-]/g,"").trim().split(/\s+/).filter(te=>te.length>0).length:0),x=Ht(()=>Math.ceil(S(k)/200)||1),T=!1;wn(()=>{S(v)&&S(f)&&(T=!0,setTimeout(()=>{Vh.highlightAllUnder(S(f));const P=Number(localStorage.getItem("reader-scroll-pos"))||0,D=document.getElementById("reader-area");D&&(D.scrollTop=P),setTimeout(()=>{T=!1},100)},50))});async function A(P){T=!0,document.startViewTransition?document.startViewTransition(async()=>{U(i,P,!0),await $c()}):U(i,P,!0),localStorage.setItem("reader-scroll-pos","0"),E(),window.innerWidth<=1024&&U(l,!1)}function z(){S(w)>0&&A(Ye[S(w)-1].id)}function C(){S(w)<Ye.length-1&&A(Ye[S(w)+1].id)}function E(){const P=document.getElementById("reader-area");P&&(P.scrollTop=0),localStorage.setItem("reader-scroll-pos","0")}function H(P){const D=P.currentTarget,te=D.scrollHeight-D.clientHeight;te>0?U(h,D.scrollTop/te*100):U(h,0),U(y,D.scrollTop>300),U(c,D.scrollTop<50),U(p,D.scrollHeight-D.scrollTop-D.clientHeight<80),T||localStorage.setItem("reader-scroll-pos",D.scrollTop.toString())}function Y(P){const D=P.target.closest("a");if(D){const te=D.getAttribute("href");if(te){const xe=te.split("/").pop();if(xe.endsWith(".md")||xe.endsWith(".htm")||xe.endsWith(".html")){let Ce=xe.replace(/\.(md|htm|html)$/,"");(Ce==="index"||Ce==="cpoint"||Ce==="pointers")&&(Ce="welcome"),Ye.find(Vn=>Vn.id===Ce)&&(P.preventDefault(),A(Ce))}}}}function Z(P){P.target.tagName==="INPUT"||P.target.tagName==="TEXTAREA"||(P.key==="ArrowRight"?C():P.key==="ArrowLeft"&&z())}function se(P){const D=document.getElementById("settings-toggle-btn"),te=document.getElementById("settings-panel");S(d)&&D&&te&&!D.contains(P.target)&&!te.contains(P.target)&&U(d,!1)}var ne=Zp();fa("keydown",Fr,Z),fa("click",Fr,se);var G=B(ne);let W;var ye=B(G);eh(ye,21,()=>Ye,Jc,(P,D,te)=>{var xe=qp();let Ce;var On=B(xe),Vn=B(On),hr=L(On);qt(sa=>{Ce=Pe(xe,1,"toc-item",null,Ce,{active:S(i)===S(D).id}),K(Vn,`${sa??""}.`),K(hr,` ${S(D).title[S(t)]??""}`)},[()=>te.toString().padStart(2,"0")]),ge("click",xe,()=>A(S(D).id)),ft(P,xe)});var Me=L(G,2),We=B(Me),le=B(We),Xn=B(le);let ce;var Se=L(Xn,2),Lt=B(Se),$t=L(le,2),ht=B($t),ur=L(B(ht),2),_i=B(ur),Rn=L(ht,2);let dr;var wi=L(Rn,2);{var Vu=P=>{var D=Gp(),te=B(D),xe=B(te),Ce=B(xe),On=L(xe,2),Vn=B(On);let hr;var sa=B(Vn),fr=L(Vn,2);let Yo;var cd=B(fr),pr=L(fr,2);let qo;var hd=B(pr),mr=L(pr,2);let Go;var fd=B(mr),yr=L(mr,2);let Xo;var pd=B(yr),la=L(yr,2);let Vo;var md=B(la),Zo=L(te,2),Ko=B(Zo),yd=B(Ko),gd=L(Ko,2),gr=B(gd);let Jo;var bd=B(gr),ua=L(gr,2);let Qo;var kd=B(ua),es=L(Zo,2),ns=B(es),vd=B(ns),_d=L(ns,2),ts=B(_d),is=L(ts,2),wd=B(is),zd=L(is,2),rs=L(es,2),xd=B(rs),as=B(xd),os=B(as),Td=B(os),Ad=L(os,2),Sd=B(Ad),ss=L(as,2),Cd=L(rs,2),ls=B(Cd),Pd=B(ls),Bd=L(ls);qt(()=>{K(Ce,n[S(t)].theme),hr=Pe(Vn,1,"settings-btn",null,hr,{active:S(a)==="light"}),K(sa,n[S(t)].light),Yo=Pe(fr,1,"settings-btn",null,Yo,{active:S(a)==="dark"}),K(cd,n[S(t)].dark),qo=Pe(pr,1,"settings-btn",null,qo,{active:S(a)==="sepia"}),K(hd,n[S(t)].sepia),Go=Pe(mr,1,"settings-btn",null,Go,{active:S(a)==="forest"}),K(fd,n[S(t)].forest),Xo=Pe(yr,1,"settings-btn",null,Xo,{active:S(a)==="nord"}),K(pd,n[S(t)].nord),Vo=Pe(la,1,"settings-btn",null,Vo,{active:S(a)==="solarized"}),K(md,n[S(t)].solarized),K(yd,n[S(t)].font),Jo=Pe(gr,1,"settings-btn",null,Jo,{active:S(o)==="sans"}),K(bd,n[S(t)].sans),Qo=Pe(ua,1,"settings-btn",null,Qo,{active:S(o)==="mono"}),K(kd,n[S(t)].mono),K(vd,n[S(t)].fontSize),K(wd,`${S(s)??""}px`),K(Td,n[S(t)].focusMode),K(Sd,n[S(t)].focusModeDesc),uh(ss,S(u)),K(Pd,n[S(t)].keyboardNav),K(Bd,` ${n[S(t)].keyboardNavDesc??""}`)}),ge("click",Vn,()=>U(a,"light")),ge("click",fr,()=>U(a,"dark")),ge("click",pr,()=>U(a,"sepia")),ge("click",mr,()=>U(a,"forest")),ge("click",yr,()=>U(a,"nord")),ge("click",la,()=>U(a,"solarized")),ge("click",gr,()=>U(o,"sans")),ge("click",ua,()=>U(o,"mono")),ge("click",ts,()=>U(s,Math.max(12,S(s)-1),!0)),ge("click",zd,()=>U(s,Math.min(32,S(s)+1),!0)),ge("change",ss,Id=>U(u,Id.target.checked,!0)),ft(P,D)};ga(wi,P=>{S(d)&&P(Vu)})}var aa=L(We,2),cr=B(aa);let Lo;var zi=B(cr);ih(zi,()=>S(v),!0),ch(zi,P=>U(f,P),()=>S(f));var Zu=L(zi,2),$o=B(Zu);{var Ku=P=>{var D=Xp(),te=B(D),xe=B(te),Ce=L(te,2),On=B(Ce);qt(()=>{K(xe,`← ${n[S(t)].prev??""}`),K(On,Ye[S(w)-1].title[S(t)])}),ge("click",D,z),ft(P,D)},Ju=P=>{var D=Us();ft(P,D)};ga($o,P=>{S(w)>0?P(Ku):P(Ju,-1)})}var Qu=L($o,2);{var ed=P=>{var D=Vp(),te=B(D),xe=B(te),Ce=L(te,2),On=B(Ce);qt(()=>{K(xe,`${n[S(t)].next??""} →`),K(On,Ye[S(w)+1].title[S(t)])}),ge("click",D,C),ft(P,D)},nd=P=>{var D=Us();ft(P,D)};ga(Qu,P=>{S(w)<Ye.length-1?P(ed):P(nd,-1)})}var oa=L(cr,2);let Ho;var td=B(oa),id=L(B(td)),rd=L(aa,2),Uo=B(rd),ad=B(Uo),od=B(ad),sd=L(Uo,2),Wo=B(sd),ld=B(Wo),ud=L(Wo,4),dd=B(ud);qt(P=>{W=Pe(G,1,"sidebar",null,W,{closed:!S(l)}),ce=Pe(Xn,1,"icon-btn",null,ce,{active:S(l)}),K(Lt,`${n[S(t)].chapterInfo??""} ${S(w)+1} / ${Ye.length??""}`),K(_i,P),dr=Pe(Rn,1,"icon-btn",null,dr,{active:S(d)}),gs(Rn,"title",n[S(t)].settings),Lo=Pe(cr,1,"reader-inner",null,Lo,{"focus-active":S(u),"scroll-at-top":S(c),"scroll-at-bottom":S(p)}),oh(cr,`font-size: ${S(s)??""}px;`),Pe(zi,1,`prose font-${S(o)??""}`),Ho=Pe(oa,1,"scroll-top-btn",null,Ho,{visible:S(y)}),gs(id,"stroke-dashoffset",152-152*S(h)/100),K(od,Ye[S(w)].title[S(t)]),K(ld,`${S(k)??""} ${n[S(t)].wordCount??""}`),K(dd,`${S(x)??""} ${n[S(t)].readTime??""}`)},[()=>S(t).toUpperCase()]),ge("click",Xn,()=>U(l,!S(l))),ge("click",ht,()=>U(t,S(t)==="tr"?"en":"tr",!0)),ge("click",Rn,()=>U(d,!S(d))),fa("scroll",aa,H),ge("click",zi,Y),ge("click",oa,E),ft(r,ne),nl()}Yc(["click","change"]);Xc(Kp,{target:document.getElementById("app")});
