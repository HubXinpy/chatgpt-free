import{r as f,n as c,j as V}from"./@vue_reactivity@3.3.4-7af2db68.js";import{p as P,q as k,g as X,b as U,z as g,A as B}from"./@vue_runtime-core@3.3.4-92a10329.js";import{o as h,a as v}from"./evtd@0.2.4-b614532e.js";function ee(e){const n=f(!!e.value);if(n.value)return c(n);const t=P(e,o=>{o&&(n.value=!0,t())});return c(n)}function ne(e){const n=k(e),t=f(n.value);return P(n,o=>{t.value=o}),typeof e=="function"?t:{__v_isRef:!0,get value(){return t.value},set value(o){e.set(o)}}}function I(){return X()!==null}const $=typeof window<"u";let y,L;const Y=()=>{var e,n;y=$?(n=(e=document)===null||e===void 0?void 0:e.fonts)===null||n===void 0?void 0:n.ready:void 0,L=!1,y!==void 0?y.then(()=>{L=!0}):L=!0};Y();function te(e){if(L)return;let n=!1;U(()=>{L||y==null||y.then(()=>{n||e()})}),g(()=>{n=!0})}const M=f(null);function D(e){if(e.clientX>0||e.clientY>0)M.value={x:e.clientX,y:e.clientY};else{const{target:n}=e;if(n instanceof Element){const{left:t,top:o,width:u,height:i}=n.getBoundingClientRect();t>0||o>0?M.value={x:t+u/2,y:o+i/2}:M.value={x:0,y:0}}else M.value=null}}let E=0,H=!0;function ie(){if(!$)return c(f(null));E===0&&h("click",document,D,!0);const e=()=>{E+=1};return H&&(H=I())?(B(e),g(()=>{E-=1,E===0&&v("click",document,D,!0)})):e(),c(M)}const z=f(void 0);let C=0;function S(){z.value=Date.now()}let F=!0;function ae(e){if(!$)return c(f(!1));const n=f(!1);let t=null;function o(){t!==null&&window.clearTimeout(t)}function u(){o(),n.value=!0,t=window.setTimeout(()=>{n.value=!1},e)}C===0&&h("click",window,S,!0);const i=()=>{C+=1,h("click",window,u,!0)};return F&&(F=I())?(B(i),g(()=>{C-=1,C===0&&v("click",window,S,!0),v("click",window,u,!0),o()})):i(),c(n)}let T=0;const A=typeof window<"u"&&window.matchMedia!==void 0,w=f(null);let r,p;function x(e){e.matches&&(w.value="dark")}function q(e){e.matches&&(w.value="light")}function K(){r=window.matchMedia("(prefers-color-scheme: dark)"),p=window.matchMedia("(prefers-color-scheme: light)"),r.matches?w.value="dark":p.matches?w.value="light":w.value=null,r.addEventListener?(r.addEventListener("change",x),p.addEventListener("change",q)):r.addListener&&(r.addListener(x),p.addListener(q))}function O(){"removeEventListener"in r?(r.removeEventListener("change",x),p.removeEventListener("change",q)):"removeListener"in r&&(r.removeListener(x),p.removeListener(q)),r=void 0,p=void 0}let R=!0;function oe(){return A?(T===0&&K(),R&&(R=I())&&(B(()=>{T+=1}),g(()=>{T-=1,T===0&&O()})),c(w)):c(w)}function ue(e,n){return P(e,t=>{t!==void 0&&(n.value=t)}),k(()=>e.value===void 0?n.value:e.value)}function se(){const e=f(!1);return U(()=>{e.value=!0}),c(e)}function re(e,n){return k(()=>{for(const t of n)if(e[t]!==void 0)return e[t];return e[n[n.length-1]]})}const Q=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function le(){return Q}const G={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function J(e){return`(min-width: ${e}px)`}const b={};function fe(e=G){if(!$)return k(()=>[]);if(typeof window.matchMedia!="function")return k(()=>[]);const n=f({}),t=Object.keys(e),o=(u,i)=>{u.matches?n.value[i]=!0:n.value[i]=!1};return t.forEach(u=>{const i=e[u];let s,l;b[i]===void 0?(s=window.matchMedia(J(i)),s.addEventListener?s.addEventListener("change",a=>{l.forEach(d=>{d(a,u)})}):s.addListener&&s.addListener(a=>{l.forEach(d=>{d(a,u)})}),l=new Set,b[i]={mql:s,cbs:l}):(s=b[i].mql,l=b[i].cbs),l.add(o),s.matches&&l.forEach(a=>{a(s,u)})}),g(()=>{t.forEach(u=>{const{cbs:i}=b[e[u]];i.has(o)&&i.delete(o)})}),k(()=>{const{value:u}=n;return t.filter(i=>u[i])})}function ce(e={},n){const t=V({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:o,keyup:u}=e,i=a=>{switch(a.key){case"Control":t.ctrl=!0;break;case"Meta":t.command=!0,t.win=!0;break;case"Shift":t.shift=!0;break;case"Tab":t.tab=!0;break}o!==void 0&&Object.keys(o).forEach(d=>{if(d!==a.key)return;const m=o[d];if(typeof m=="function")m(a);else{const{stop:j=!1,prevent:_=!1}=m;j&&a.stopPropagation(),_&&a.preventDefault(),m.handler(a)}})},s=a=>{switch(a.key){case"Control":t.ctrl=!1;break;case"Meta":t.command=!1,t.win=!1;break;case"Shift":t.shift=!1;break;case"Tab":t.tab=!1;break}u!==void 0&&Object.keys(u).forEach(d=>{if(d!==a.key)return;const m=u[d];if(typeof m=="function")m(a);else{const{stop:j=!1,prevent:_=!1}=m;j&&a.stopPropagation(),_&&a.preventDefault(),m.handler(a)}})},l=()=>{(n===void 0||n.value)&&(h("keydown",document,i),h("keyup",document,s)),n!==void 0&&P(n,a=>{a?(h("keydown",document,i),h("keyup",document,s)):(v("keydown",document,i),v("keyup",document,s))})};return I()?(B(l),g(()=>{(n===void 0||n.value)&&(v("keydown",document,i),v("keyup",document,s))})):l(),c(t)}export{le as a,ue as b,re as c,ce as d,ae as e,ie as f,fe as g,ee as h,se as i,oe as j,te as o,ne as u};