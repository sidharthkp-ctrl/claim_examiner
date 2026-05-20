(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(t){if(t.ep)return;t.ep=!0;const l=i(t);fetch(t.href,l)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=globalThis,ne=q.ShadowRoot&&(q.ShadyCSS===void 0||q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Le=Symbol(),fe=new WeakMap;let Ke=class{constructor(e,i,s){if(this._$cssResult$=!0,s!==Le)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=i}get styleSheet(){let e=this.o;const i=this.t;if(ne&&e===void 0){const s=i!==void 0&&i.length===1;s&&(e=fe.get(i)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&fe.set(i,e))}return e}toString(){return this.cssText}};const Ye=a=>new Ke(typeof a=="string"?a:a+"",void 0,Le),Ze=(a,e)=>{if(ne)a.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of e){const s=document.createElement("style"),t=q.litNonce;t!==void 0&&s.setAttribute("nonce",t),s.textContent=i.cssText,a.appendChild(s)}},be=ne?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let i="";for(const s of e.cssRules)i+=s.cssText;return Ye(i)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ge,defineProperty:Qe,getOwnPropertyDescriptor:et,getOwnPropertyNames:tt,getOwnPropertySymbols:at,getPrototypeOf:it}=Object,C=globalThis,he=C.trustedTypes,st=he?he.emptyScript:"",Q=C.reactiveElementPolyfillSupport,I=(a,e)=>a,z={toAttribute(a,e){switch(e){case Boolean:a=a?st:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let i=a;switch(e){case Boolean:i=a!==null;break;case Number:i=a===null?null:Number(a);break;case Object:case Array:try{i=JSON.parse(a)}catch{i=null}}return i}},de=(a,e)=>!Ge(a,e),ge={attribute:!0,type:String,converter:z,reflect:!1,useDefault:!1,hasChanged:de};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),C.litPropertyMetadata??(C.litPropertyMetadata=new WeakMap);let M=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,i=ge){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(e,i),!i.noAccessor){const s=Symbol(),t=this.getPropertyDescriptor(e,s,i);t!==void 0&&Qe(this.prototype,e,t)}}static getPropertyDescriptor(e,i,s){const{get:t,set:l}=et(this.prototype,e)??{get(){return this[i]},set(r){this[i]=r}};return{get:t,set(r){const d=t==null?void 0:t.call(this);l==null||l.call(this,r),this.requestUpdate(e,d,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ge}static _$Ei(){if(this.hasOwnProperty(I("elementProperties")))return;const e=it(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(I("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(I("properties"))){const i=this.properties,s=[...tt(i),...at(i)];for(const t of s)this.createProperty(t,i[t])}const e=this[Symbol.metadata];if(e!==null){const i=litPropertyMetadata.get(e);if(i!==void 0)for(const[s,t]of i)this.elementProperties.set(s,t)}this._$Eh=new Map;for(const[i,s]of this.elementProperties){const t=this._$Eu(i,s);t!==void 0&&this._$Eh.set(t,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const t of s)i.unshift(be(t))}else e!==void 0&&i.push(be(e));return i}static _$Eu(e,i){const s=i.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(i=>i(this))}addController(e){var i;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)==null||i.call(e))}removeController(e){var i;(i=this._$EO)==null||i.delete(e)}_$E_(){const e=new Map,i=this.constructor.elementProperties;for(const s of i.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ze(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostConnected)==null?void 0:s.call(i)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostDisconnected)==null?void 0:s.call(i)})}attributeChangedCallback(e,i,s){this._$AK(e,s)}_$ET(e,i){var l;const s=this.constructor.elementProperties.get(e),t=this.constructor._$Eu(e,s);if(t!==void 0&&s.reflect===!0){const r=(((l=s.converter)==null?void 0:l.toAttribute)!==void 0?s.converter:z).toAttribute(i,s.type);this._$Em=e,r==null?this.removeAttribute(t):this.setAttribute(t,r),this._$Em=null}}_$AK(e,i){var l,r;const s=this.constructor,t=s._$Eh.get(e);if(t!==void 0&&this._$Em!==t){const d=s.getPropertyOptions(t),n=typeof d.converter=="function"?{fromAttribute:d.converter}:((l=d.converter)==null?void 0:l.fromAttribute)!==void 0?d.converter:z;this._$Em=t;const u=n.fromAttribute(i,d.type);this[t]=u??((r=this._$Ej)==null?void 0:r.get(t))??u,this._$Em=null}}requestUpdate(e,i,s,t=!1,l){var r;if(e!==void 0){const d=this.constructor;if(t===!1&&(l=this[e]),s??(s=d.getPropertyOptions(e)),!((s.hasChanged??de)(l,i)||s.useDefault&&s.reflect&&l===((r=this._$Ej)==null?void 0:r.get(e))&&!this.hasAttribute(d._$Eu(e,s))))return;this.C(e,i,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,i,{useDefault:s,reflect:t,wrapped:l},r){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,r??i??this[e]),l!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(i=void 0),this._$AL.set(e,i)),t===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[l,r]of this._$Ep)this[l]=r;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[l,r]of t){const{wrapped:d}=r,n=this[l];d!==!0||this._$AL.has(l)||n===void 0||this.C(l,void 0,r,n)}}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(s=this._$EO)==null||s.forEach(t=>{var l;return(l=t.hostUpdate)==null?void 0:l.call(t)}),this.update(i)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(i)}willUpdate(e){}_$AE(e){var i;(i=this._$EO)==null||i.forEach(s=>{var t;return(t=s.hostUpdated)==null?void 0:t.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(i=>this._$ET(i,this[i]))),this._$EM()}updated(e){}firstUpdated(e){}};M.elementStyles=[],M.shadowRootOptions={mode:"open"},M[I("elementProperties")]=new Map,M[I("finalized")]=new Map,Q==null||Q({ReactiveElement:M}),(C.reactiveElementVersions??(C.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,ve=a=>a,W=B.trustedTypes,xe=W?W.createPolicy("lit-html",{createHTML:a=>a}):void 0,He="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,Ve="?"+_,lt=`<${Ve}>`,E=document,R=()=>E.createComment(""),k=a=>a===null||typeof a!="object"&&typeof a!="function",me=Array.isArray,rt=a=>me(a)||typeof(a==null?void 0:a[Symbol.iterator])=="function",ee=`[ 	
\f\r]`,F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,we=/-->/g,ye=/>/g,D=RegExp(`>|${ee}(?:([^\\s"'>=/]+)(${ee}*=${ee}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$e=/'/g,Ae=/"/g,je=/^(?:script|style|textarea|title)$/i,ot=a=>(e,...i)=>({_$litType$:a,strings:e,values:i}),o=ot(1),N=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),_e=new WeakMap,P=E.createTreeWalker(E,129);function Ue(a,e){if(!me(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return xe!==void 0?xe.createHTML(e):e}const ct=(a,e)=>{const i=a.length-1,s=[];let t,l=e===2?"<svg>":e===3?"<math>":"",r=F;for(let d=0;d<i;d++){const n=a[d];let u,g,h=-1,$=0;for(;$<n.length&&(r.lastIndex=$,g=r.exec(n),g!==null);)$=r.lastIndex,r===F?g[1]==="!--"?r=we:g[1]!==void 0?r=ye:g[2]!==void 0?(je.test(g[2])&&(t=RegExp("</"+g[2],"g")),r=D):g[3]!==void 0&&(r=D):r===D?g[0]===">"?(r=t??F,h=-1):g[1]===void 0?h=-2:(h=r.lastIndex-g[2].length,u=g[1],r=g[3]===void 0?D:g[3]==='"'?Ae:$e):r===Ae||r===$e?r=D:r===we||r===ye?r=F:(r=D,t=void 0);const A=r===D&&a[d+1].startsWith("/>")?" ":"";l+=r===F?n+lt:h>=0?(s.push(u),n.slice(0,h)+He+n.slice(h)+_+A):n+_+(h===-2?d:A)}return[Ue(a,l+(a[i]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class L{constructor({strings:e,_$litType$:i},s){let t;this.parts=[];let l=0,r=0;const d=e.length-1,n=this.parts,[u,g]=ct(e,i);if(this.el=L.createElement(u,s),P.currentNode=this.el.content,i===2||i===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(t=P.nextNode())!==null&&n.length<d;){if(t.nodeType===1){if(t.hasAttributes())for(const h of t.getAttributeNames())if(h.endsWith(He)){const $=g[r++],A=t.getAttribute(h).split(_),U=/([.?@])?(.*)/.exec($);n.push({type:1,index:l,name:U[2],strings:A,ctor:U[1]==="."?dt:U[1]==="?"?mt:U[1]==="@"?pt:Z}),t.removeAttribute(h)}else h.startsWith(_)&&(n.push({type:6,index:l}),t.removeAttribute(h));if(je.test(t.tagName)){const h=t.textContent.split(_),$=h.length-1;if($>0){t.textContent=W?W.emptyScript:"";for(let A=0;A<$;A++)t.append(h[A],R()),P.nextNode(),n.push({type:2,index:++l});t.append(h[$],R())}}}else if(t.nodeType===8)if(t.data===Ve)n.push({type:2,index:l});else{let h=-1;for(;(h=t.data.indexOf(_,h+1))!==-1;)n.push({type:7,index:l}),h+=_.length-1}l++}}static createElement(e,i){const s=E.createElement("template");return s.innerHTML=e,s}}function O(a,e,i=a,s){var r,d;if(e===N)return e;let t=s!==void 0?(r=i._$Co)==null?void 0:r[s]:i._$Cl;const l=k(e)?void 0:e._$litDirective$;return(t==null?void 0:t.constructor)!==l&&((d=t==null?void 0:t._$AO)==null||d.call(t,!1),l===void 0?t=void 0:(t=new l(a),t._$AT(a,i,s)),s!==void 0?(i._$Co??(i._$Co=[]))[s]=t:i._$Cl=t),t!==void 0&&(e=O(a,t._$AS(a,e.values),t,s)),e}class nt{constructor(e,i){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:i},parts:s}=this._$AD,t=((e==null?void 0:e.creationScope)??E).importNode(i,!0);P.currentNode=t;let l=P.nextNode(),r=0,d=0,n=s[0];for(;n!==void 0;){if(r===n.index){let u;n.type===2?u=new j(l,l.nextSibling,this,e):n.type===1?u=new n.ctor(l,n.name,n.strings,this,e):n.type===6&&(u=new ut(l,this,e)),this._$AV.push(u),n=s[++d]}r!==(n==null?void 0:n.index)&&(l=P.nextNode(),r++)}return P.currentNode=E,t}p(e){let i=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,i),i+=s.strings.length-2):s._$AI(e[i])),i++}}class j{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,i,s,t){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=i,this._$AM=s,this.options=t,this._$Cv=(t==null?void 0:t.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=i.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,i=this){e=O(this,e,i),k(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==N&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):rt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&k(this._$AH)?this._$AA.nextSibling.data=e:this.T(E.createTextNode(e)),this._$AH=e}$(e){var l;const{values:i,_$litType$:s}=e,t=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=L.createElement(Ue(s.h,s.h[0]),this.options)),s);if(((l=this._$AH)==null?void 0:l._$AD)===t)this._$AH.p(i);else{const r=new nt(t,this),d=r.u(this.options);r.p(i),this.T(d),this._$AH=r}}_$AC(e){let i=_e.get(e.strings);return i===void 0&&_e.set(e.strings,i=new L(e)),i}k(e){me(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,t=0;for(const l of e)t===i.length?i.push(s=new j(this.O(R()),this.O(R()),this,this.options)):s=i[t],s._$AI(l),t++;t<i.length&&(this._$AR(s&&s._$AB.nextSibling,t),i.length=t)}_$AR(e=this._$AA.nextSibling,i){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,i);e!==this._$AB;){const t=ve(e).nextSibling;ve(e).remove(),e=t}}setConnected(e){var i;this._$AM===void 0&&(this._$Cv=e,(i=this._$AP)==null||i.call(this,e))}}class Z{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,i,s,t,l){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=i,this._$AM=t,this.options=l,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=v}_$AI(e,i=this,s,t){const l=this.strings;let r=!1;if(l===void 0)e=O(this,e,i,0),r=!k(e)||e!==this._$AH&&e!==N,r&&(this._$AH=e);else{const d=e;let n,u;for(e=l[0],n=0;n<l.length-1;n++)u=O(this,d[s+n],i,n),u===N&&(u=this._$AH[n]),r||(r=!k(u)||u!==this._$AH[n]),u===v?e=v:e!==v&&(e+=(u??"")+l[n+1]),this._$AH[n]=u}r&&!t&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class dt extends Z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}}class mt extends Z{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}}class pt extends Z{constructor(e,i,s,t,l){super(e,i,s,t,l),this.type=5}_$AI(e,i=this){if((e=O(this,e,i,0)??v)===N)return;const s=this._$AH,t=e===v&&s!==v||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,l=e!==v&&(s===v||t);t&&this.element.removeEventListener(this.name,this,s),l&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,e):this._$AH.handleEvent(e)}}class ut{constructor(e,i,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){O(this,e)}}const te=B.litHtmlPolyfillSupport;te==null||te(L,j),(B.litHtmlVersions??(B.litHtmlVersions=[])).push("3.3.3");const ft=(a,e,i)=>{const s=(i==null?void 0:i.renderBefore)??e;let t=s._$litPart$;if(t===void 0){const l=(i==null?void 0:i.renderBefore)??null;s._$litPart$=t=new j(e.insertBefore(R(),l),l,void 0,i??{})}return t._$AI(a),t};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=globalThis;class T extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i;const e=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=e.firstChild),e}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ft(i,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return N}}var ke;T._$litElement$=!0,T.finalized=!0,(ke=S.litElementHydrateSupport)==null||ke.call(S,{LitElement:T});const ae=S.litElementPolyfillSupport;ae==null||ae({LitElement:T});(S.litElementVersions??(S.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=a=>(e,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(a,e)}):customElements.define(a,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:de},ht=(a=bt,e,i)=>{const{kind:s,metadata:t}=i;let l=globalThis.litPropertyMetadata.get(t);if(l===void 0&&globalThis.litPropertyMetadata.set(t,l=new Map),s==="setter"&&((a=Object.create(a)).wrapped=!0),l.set(i.name,a),s==="accessor"){const{name:r}=i;return{set(d){const n=e.get.call(this);e.set.call(this,d),this.requestUpdate(r,n,a,!0,d)},init(d){return d!==void 0&&this.C(r,void 0,a,d),d}}}if(s==="setter"){const{name:r}=i;return function(d){const n=this[r];e.call(this,d),this.requestUpdate(r,n,a,!0,d)}}throw Error("Unsupported decorator location: "+s)};function x(a){return(e,i)=>typeof i=="object"?ht(a,e,i):((s,t,l)=>{const r=t.hasOwnProperty(l);return t.constructor.createProperty(l,s),r?Object.getOwnPropertyDescriptor(t,l):void 0})(a,e,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function pe(a){return x({...a,state:!0,attribute:!1})}class b extends T{createRenderRoot(){return this}}const gt={"case-context":"Case Context","event-details":"Event Details","policy-info":"Policy Info",documents:"Documents",integrations:"External Integrations",medical:"Medical Review",referral:"Referral",worksheet:"Worksheet",tools:"Tools",comms:"External Communications",decision:"Decision"},vt=[{id:"case-context",label:"Case Context",section:"Case"},{id:"event-details",label:"Event Details",section:"Case"},{id:"policy-info",label:"Policy Info",section:"Policy"},{id:"documents",label:"Documents",section:"Documents"},{id:"integrations",label:"External Integrations",section:"Integrations"},{id:"medical",label:"Medical Review",section:"Medical"},{id:"referral",label:"Referral",section:"Referral"},{id:"worksheet",label:"Worksheet",section:"Worksheet"},{id:"tools",label:"Tools",section:"Tools"},{id:"comms",label:"External Communications",section:"Communications"},{id:"decision",label:"Decision",section:"Decision"}];function y(...a){return a.filter(Boolean).join(" ")}function p(a,e){return o`<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="${a}"
  >
    ${e}
  </svg>`}const c={shieldCheck:(a="w-4 h-4")=>p(a,o`<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>`),clock:(a="w-3.5 h-3.5")=>p(a,o`<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>`),alertTriangle:(a="w-3 h-3")=>p(a,o`<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>`),logOut:(a="w-3 h-3")=>p(a,o`<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>`),info:(a="w-4 h-4")=>p(a,o`<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>`),user:(a="w-4 h-4")=>p(a,o`<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>`),activity:(a="w-4 h-4")=>p(a,o`<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>`),flag:(a="w-4 h-4")=>p(a,o`<path d="M4 22V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"/><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V4s-1 1-4 1-5-2-8-2-4 1-4 1"/>`),bot:(a="w-4 h-4")=>p(a,o`<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>`),messageCircle:(a="w-4 h-4")=>p(a,o`<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>`),fileText:(a="w-4 h-4")=>p(a,o`<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>`),calendar:(a="w-4 h-4")=>p(a,o`<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>`),globe:(a="w-4 h-4")=>p(a,o`<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>`),gavel:(a="w-4 h-4")=>p(a,o`<path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10"/><path d="m16 16 6-6"/><path d="m8 8 6-6"/><path d="m9 7 8 8"/><path d="m21 11-8-8"/>`),files:(a="w-4 h-4")=>p(a,o`<path d="M20 7h-3a2 2 0 0 1-2-2V2"/><path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"/><path d="M2 13a2 2 0 0 1 2-2h1"/><path d="M2 17a2 2 0 0 0 2 2h1"/>`),upload:(a="w-3.5 h-3.5")=>p(a,o`<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>`),fileWarning:(a="w-4 h-4")=>p(a,o`<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>`),dollarSign:(a="w-4 h-4")=>p(a,o`<line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>`),shield:(a="w-4 h-4")=>p(a,o`<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>`),users:(a="w-4 h-4")=>p(a,o`<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`),building:(a="w-4 h-4")=>p(a,o`<rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>`),stethoscope:(a="w-4 h-4")=>p(a,o`<path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>`),send:(a="w-4 h-4")=>p(a,o`<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>`),mail:(a="w-4 h-4")=>p(a,o`<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>`),plus:(a="w-3.5 h-3.5")=>p(a,o`<path d="M5 12h14"/><path d="M12 5v14"/>`),calculator:(a="w-4 h-4")=>p(a,o`<rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/>`),mapPin:(a="w-4 h-4")=>p(a,o`<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>`),settings:(a="w-4 h-4")=>p(a,o`<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>`),refreshCw:(a="w-3.5 h-3.5")=>p(a,o`<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>`),receipt:(a="w-4 h-4")=>p(a,o`<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/>`),userSearch:(a="w-4 h-4")=>p(a,o`<circle cx="10" cy="7" r="4"/><path d="M10.3 15H7a4 4 0 0 0-4 4v2"/><circle cx="17" cy="17" r="3"/><path d="m21 21-1.9-1.9"/>`),globe2:(a="w-4 h-4")=>p(a,o`<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>`),microscope:(a="w-4 h-4")=>p(a,o`<path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/>`),sparkles:(a="w-4 h-4")=>p(a,o`<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>`),check:(a="w-3 h-3")=>p(a,o`<path d="M20 6 9 17l-5-5"/>`)},xt={"case-context":c.info,"event-details":c.fileText,"policy-info":c.dollarSign,documents:c.files,integrations:c.globe,medical:c.stethoscope,referral:c.send,worksheet:c.activity,tools:c.settings,comms:c.mail,decision:c.gavel};var wt=Object.defineProperty,yt=Object.getOwnPropertyDescriptor,qe=(a,e,i,s)=>{for(var t=s>1?void 0:s?yt(e,i):e,l=a.length-1,r;l>=0;l--)(r=a[l])&&(t=(s?r(e,i,t):r(t))||t);return s&&t&&wt(e,i,t),t};let ie=class extends b{constructor(){super(...arguments),this.activePage="case-context"}get groupedItems(){const a={};for(const e of vt)a[e.section]||(a[e.section]=[]),a[e.section].push(e);return a}handleNav(a){this.dispatchEvent(new CustomEvent("page-change",{detail:{page:a},bubbles:!0,composed:!0}))}render(){const a=this.groupedItems;return o`
      <aside
        class="w-[220px] min-w-[220px] bg-card border-r border-border flex flex-col overflow-y-auto shadow-sm"
      >
        <div class="px-4 py-4 border-b border-border flex items-center gap-2.5 bg-gradient-to-r from-[#E6F1FB] to-white">
          <span class="text-[#185FA5] flex items-center justify-center w-8 h-8 rounded-lg bg-white shadow-sm border border-border">
            ${c.shieldCheck("w-4 h-4")}
          </span>
          <div>
            <div class="font-semibold text-[13px] text-[#0C447C] leading-tight">Neutrinos</div>
            <div class="text-[10px] text-muted-foreground">Claims Workbench</div>
          </div>
        </div>

        <nav class="flex-1 py-2">
          ${Object.entries(a).map(([e,i])=>o`
              <div class="mb-1">
                <div
                  class="px-4 py-1.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider"
                >
                  ${e}
                </div>
                ${i.map(s=>{const t=xt[s.id]??c.info,l=this.activePage===s.id;return o`
                    <button
                      type="button"
                      @click=${()=>this.handleNav(s.id)}
                      class=${y("w-full flex items-center gap-2.5 px-4 py-2 text-left text-[12px] transition-all border-l-[3px]",l?"border-l-[#185FA5] bg-[#E6F1FB] text-[#0C447C] font-semibold":"border-l-transparent text-muted-foreground hover:bg-secondary hover:text-foreground")}
                    >
                      <span
                        class=${y("flex items-center justify-center w-7 h-7 rounded-md shrink-0",l?"bg-white text-[#185FA5] shadow-sm":"text-[#6b7c8f]")}
                      >
                        ${t("w-4 h-4")}
                      </span>
                      <span class="truncate">${s.label}</span>
                    </button>
                  `})}
              </div>
            `)}
        </nav>
      </aside>
    `}};qe([x({type:String})],ie.prototype,"activePage",2);ie=qe([f("claims-sidebar")],ie);var $t=Object.defineProperty,At=Object.getOwnPropertyDescriptor,ze=(a,e,i,s)=>{for(var t=s>1?void 0:s?At(e,i):e,l=a.length-1,r;l>=0;l--)(r=a[l])&&(t=(s?r(e,i,t):r(t))||t);return s&&t&&$t(e,i,t),t};let se=class extends b{constructor(){super(...arguments),this.breadcrumbLabel=""}render(){return o`
      <header
        class="bg-card border-b border-border px-5 py-2.5 flex items-center gap-3 shadow-sm min-h-[48px]"
      >
        <nav class="text-[12px] text-muted-foreground flex items-center gap-1">
          <a href="#" class="text-[#185FA5] hover:underline font-medium">Home</a>
          <span>/</span>
          <span class="text-foreground font-medium">${this.breadcrumbLabel}</span>
        </nav>
        <div class="ml-auto flex items-center gap-3">
          <span
            class="text-[10px] font-semibold uppercase tracking-wide text-[#534AB7] bg-[#EEEDFE] border border-[#c4b5fd] px-2 py-0.5 rounded-full"
            >AI-Assisted Review</span
          >
          <span class="text-[11px] text-muted-foreground hidden sm:inline">Examiner: Sarah M.</span>
          <div
            class="flex items-center gap-2 pl-2 border-l border-border"
          >
            <span
              class="w-7 h-7 rounded-full bg-[#185FA5] text-white text-[10px] font-semibold flex items-center justify-center"
              >SM</span
            >
            <button
              type="button"
              class="flex items-center gap-1 px-2.5 py-1.5 text-[11px] border border-border rounded-md text-muted-foreground hover:bg-secondary hover:border-[#185FA5]/30 transition-colors"
            >
              ${c.logOut()}
              Release
            </button>
          </div>
        </div>
      </header>
    `}};ze([x({type:String})],se.prototype,"breadcrumbLabel",2);se=ze([f("claims-topbar")],se);var _t=Object.defineProperty,Ct=Object.getOwnPropertyDescriptor,ue=(a,e,i,s)=>{for(var t=s>1?void 0:s?Ct(e,i):e,l=a.length-1,r;l>=0;l--)(r=a[l])&&(t=(s?r(e,i,t):r(t))||t);return s&&t&&_t(e,i,t),t};const Dt={success:"bg-[#EAF3DE] text-[#3B6D11]",warning:"bg-[#FAEEDA] text-[#854F0B]",danger:"bg-[#FCEBEB] text-[#A32D2D]",info:"bg-[#E6F1FB] text-[#185FA5]",neutral:"bg-secondary text-muted-foreground",purple:"bg-[#EEEDFE] text-[#534AB7]"};let X=class extends b{constructor(){super(...arguments),this.variant="neutral",this.className=""}render(){return o`
      <span
        class=${y("inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold",Dt[this.variant],this.className)}
      >
        <slot></slot>
      </span>
    `}};ue([x({type:String})],X.prototype,"variant",2);ue([x({type:String})],X.prototype,"className",2);X=ue([f("claims-badge")],X);var Pt=Object.getOwnPropertyDescriptor,St=(a,e,i,s)=>{for(var t=s>1?void 0:s?Pt(e,i):e,l=a.length-1,r;l>=0;l--)(r=a[l])&&(t=r(t)||t);return t};let Ce=class extends b{render(){return o`
      <div
        class="bg-gradient-to-r from-[#EAF3DE] to-[#f4faf0] border-b border-[#97C459]/60 px-5 py-2 flex items-center gap-4 text-[11px] flex-wrap"
      >
        <span class="text-[#27500A] font-medium flex items-center gap-1">
          ${c.clock()}
          SLA: 8 days remaining
        </span>
        <span class="text-[#3B6D11]">Claim type: <strong>Death</strong></span>
        <span class="text-[#3B6D11]">Submitted: 04/20/2026</span>
        <span class="text-[#3B6D11]">NY 5-day ack: <strong>Sent</strong></span>
        <span class="text-[#3B6D11]">Fair Claim state: TX — standard</span>
        <div class="ml-auto">
          <claims-badge variant="warning" className="text-[10px]">
            ${c.alertTriangle()}
            3 items pending
          </claims-badge>
        </div>
      </div>
    `}};Ce=St([f("claims-sla-banner")],Ce);var Et=Object.getOwnPropertyDescriptor,Mt=(a,e,i,s)=>{for(var t=s>1?void 0:s?Et(e,i):e,l=a.length-1,r;l>=0;l--)(r=a[l])&&(t=r(t)||t);return t};const Nt=[{label:"Claim ID",value:"CLM-20260420-00123"},{label:"Claim type",value:"Death Claim"},{label:"Source",value:"BAU — Portal"},{label:"Status",value:"In Review",color:"#BA7517"},{label:"Verification",value:"Verified",color:"#3B6D11"},{label:"SLA remaining",value:"8 days",color:"#3B6D11"},{label:"Affected person",value:"John A. Smith"}];let De=class extends b{render(){return o`
      <div
        class="bg-card border-b border-border px-5 py-3 flex gap-6 flex-wrap shadow-sm"
      >
        ${Nt.map(a=>o`
            <div class="flex flex-col gap-0.5 min-w-[100px]">
              <span class="text-[10px] font-medium text-muted-foreground uppercase tracking-wide"
                >${a.label}</span
              >
              <span
                class="text-[13px] font-semibold"
                style=${a.color?`color: ${a.color}`:"color: var(--primary-dark)"}
              >
                ${a.value}
              </span>
            </div>
          `)}
      </div>
    `}};De=Mt([f("claims-claim-header")],De);function m(a,e){return o`<span slot="icon" style="color: ${e}">${a()}</span>`}var Ot=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,G=(a,e,i,s)=>{for(var t=s>1?void 0:s?Ft(e,i):e,l=a.length-1,r;l>=0;l--)(r=a[l])&&(t=(s?r(e,i,t):r(t))||t);return s&&t&&Ot(e,i,t),t};const It={default:"bg-white text-muted-foreground border-border hover:bg-secondary hover:border-[#185FA5]/30",primary:"bg-[#185FA5] text-white border-[#185FA5] hover:bg-[#0C447C] shadow-sm shadow-[#185FA5]/25",success:"bg-[#3B6D11] text-white border-[#3B6D11] hover:bg-[#27500A] shadow-sm",danger:"bg-white text-[#A32D2D] border-[#F09595] hover:bg-[#FCEBEB]"};let J=class extends b{constructor(){super(...arguments),this.variant="default",this.className=""}render(){return o`
      <button
        type="button"
        class=${y("inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md text-[12px] font-semibold border cursor-pointer transition-all",It[this.variant],this.className)}
      >
        <slot></slot>
      </button>
    `}};G([x({type:String})],J.prototype,"variant",2);G([x({type:String})],J.prototype,"className",2);J=G([f("claims-button")],J);let Pe=class extends b{render(){return o`
      <div
        class="bg-card border-t border-border px-5 py-3 flex gap-2 items-center shadow-[0_-2px_8px_rgba(24,95,165,0.06)]"
      >
        <slot></slot>
      </div>
    `}};Pe=G([f("claims-action-bar")],Pe);var Bt=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,w=(a,e,i,s)=>{for(var t=s>1?void 0:s?Tt(e,i):e,l=a.length-1,r;l>=0;l--)(r=a[l])&&(t=(s?r(e,i,t):r(t))||t);return s&&t&&Bt(e,i,t),t};let H=class extends b{constructor(){super(...arguments),this.title="",this.className="",this.ai=!1}render(){return o`
      <div class=${y("claims-card-shell",this.className)}>
        ${this.title?o`
              <div
                class=${y("claims-card-header",this.ai&&"claims-card-header--ai")}
              >
                <slot name="icon"></slot>
                <span>${this.title}</span>
                ${this.ai?o`<span class="claims-ai-pill">AI Powered</span>`:""}
              </div>
            `:""}
        <div class="claims-card-body">
          <slot></slot>
        </div>
      </div>
    `}};w([x({type:String})],H.prototype,"title",2);w([x({type:String})],H.prototype,"className",2);w([x({type:Boolean})],H.prototype,"ai",2);H=w([f("claims-card")],H);let K=class extends b{constructor(){super(...arguments),this.label="",this.className=""}render(){return o`
      <div
        class=${y("flex justify-between items-start py-2 border-b border-border/80 last:border-b-0 gap-4",this.className)}
      >
        <span class="text-[11px] text-muted-foreground shrink-0">${this.label}</span>
        <span class="text-[12px] font-semibold text-foreground text-right">
          <slot></slot>
        </span>
      </div>
    `}};w([x({type:String})],K.prototype,"label",2);w([x({type:String})],K.prototype,"className",2);K=w([f("claims-field-row")],K);let V=class extends b{constructor(){super(...arguments),this.label="",this.value="",this.color=""}render(){return o`
      <div class="claims-stat-tile">
        <div class="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">
          ${this.label}
        </div>
        <div
          class="text-[22px] font-semibold mt-1 leading-tight"
          style=${this.color?`color: ${this.color}`:"color: var(--primary-dark)"}
        >
          ${this.value}
        </div>
      </div>
    `}};w([x({type:String})],V.prototype,"label",2);w([x({type:String})],V.prototype,"value",2);w([x({type:String})],V.prototype,"color",2);V=w([f("claims-stat-card")],V);let Y=class extends b{constructor(){super(...arguments),this.variant="info",this.className=""}render(){return o`
      <div class=${y("rounded-lg p-3 text-[11px] leading-relaxed",{info:"bg-[#E6F1FB] text-[#0C447C] border border-[#B8D4EF]",warning:"bg-[#FAEEDA] text-[#633806] border border-[#FAC775]",danger:"bg-[#FCEBEB] text-[#791F1F] border border-[#F09595]"}[this.variant],this.className)}>
        <slot></slot>
      </div>
    `}};w([x({type:String})],Y.prototype,"variant",2);w([x({type:String})],Y.prototype,"className",2);Y=w([f("claims-info-box")],Y);let Se=class extends b{render(){return o`
      <div class="claims-ai-banner mb-4">
        <div class="text-[13px] font-semibold text-[#534AB7] mb-2 flex items-center gap-2 flex-wrap">
          <slot name="title"></slot>
        </div>
        <div class="text-[12px] text-[#1a2332] leading-relaxed">
          <slot></slot>
        </div>
      </div>
    `}};Se=w([f("claims-ai-box")],Se);let le=class extends b{constructor(){super(...arguments),this.label=""}render(){return o`
      <div class="bg-secondary/80 border border-border rounded-lg p-2.5">
        <div class="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">
          ${this.label}
        </div>
        <div class="text-[12px] font-semibold text-foreground mt-1">
          <slot></slot>
        </div>
      </div>
    `}};w([x({type:String})],le.prototype,"label",2);le=w([f("claims-mini-field")],le);var Rt=Object.getOwnPropertyDescriptor,kt=(a,e,i,s)=>{for(var t=s>1?void 0:s?Rt(e,i):e,l=a.length-1,r;l>=0;l--)(r=a[l])&&(t=r(t)||t);return t};let Ee=class extends b{_handleContinue(){this.dispatchEvent(new CustomEvent("page-change",{detail:{page:"event-details"},bubbles:!0,composed:!0}))}_timelineItem(a){const{color:e,title:i,time:s,isActive:t,isPending:l}=a;return o`
      <div class="flex gap-2 py-1.5">
        <div
          class="w-2 h-2 min-w-[8px] rounded-full mt-1"
          style="background-color: ${e}"
        ></div>
        <div>
          <div
            class="text-[12px] font-medium ${t?"text-[#185FA5]":l?"text-muted-foreground":"text-foreground"}"
          >
            ${i}
          </div>
          ${s?o`<div class="text-[11px] text-muted-foreground">${s}</div>`:""}
        </div>
      </div>
    `}render(){return o`
      <div class="claims-page">
        <div class="grid grid-cols-3 gap-3 mb-4">
          <claims-stat-card label="Claim age" value="0 days"></claims-stat-card>
          <claims-stat-card label="Review progress" value="57%" color="#185FA5"></claims-stat-card>
          <claims-stat-card label="Flags active" value="4" color="#A32D2D"></claims-stat-card>
        </div>

        <claims-card title="AI confidence summary" .ai=${!0} className="mb-4">
          ${m(c.bot,"#534AB7")}
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
            <claims-field-row label="Death certificate"
              ><claims-badge variant="success">94%</claims-badge></claims-field-row
            >
            <claims-field-row label="Claim form"
              ><claims-badge variant="success">98%</claims-badge></claims-field-row
            >
            <claims-field-row label="Authorization"
              ><claims-badge variant="success">91%</claims-badge></claims-field-row
            >
            <claims-field-row label="Funeral assignment"
              ><claims-badge variant="danger">Missing</claims-badge></claims-field-row
            >
            <claims-field-row label="Rule check failures"
              ><claims-badge variant="warning">2 — manner, funeral</claims-badge></claims-field-row
            >
          </div>
        </claims-card>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div>
            <claims-card title="Claim summary">
              ${m(c.info,"#185FA5")}
              <claims-field-row label="Claim ID">CLM-20260420-00123</claims-field-row>
              <claims-field-row label="Claim type">Death Claim</claims-field-row>
              <claims-field-row label="Claim source"
                ><claims-badge variant="info">BAU</claims-badge></claims-field-row
              >
              <claims-field-row label="Entry point">Portal Submission</claims-field-row>
              <claims-field-row label="Assigned examiner">Sarah M.</claims-field-row>
              <claims-field-row label="Status"
                ><claims-badge variant="warning">In Review</claims-badge></claims-field-row
              >
              <claims-field-row label="Verification"
                ><claims-badge variant="success">Verified</claims-badge></claims-field-row
              >
            </claims-card>

            <claims-card title="Insured / claimant">
              ${m(c.user,"#534AB7")}
              <claims-field-row label="Insured">John A. Smith</claims-field-row>
              <claims-field-row label="Date of death">02/28/2026</claims-field-row>
              <claims-field-row label="Claimant">Jane Smith (Spouse)</claims-field-row>
              <claims-field-row label="Beneficiary type">Primary — 100%</claims-field-row>
              <claims-field-row label="Minor beneficiary"
                ><claims-badge variant="success">No — age 42</claims-badge></claims-field-row
              >
              <claims-field-row label="Incorrect claimant"
                ><claims-badge variant="success">No — matches record</claims-badge></claims-field-row
              >
            </claims-card>

            <claims-card title="Activity timeline">
              ${m(c.activity,"#1D9E75")}
              ${this._timelineItem({color:"#639922",title:"Claim received and verified",time:"04/20/2026 09:00 AM"})}
              ${this._timelineItem({color:"#639922",title:"System assessment — 28/28 rules run",time:"04/20/2026 10:42 AM"})}
              ${this._timelineItem({color:"#185FA5",title:"Examiner review in progress",time:"04/20/2026 11:00 AM — ongoing",isActive:!0})}
              ${this._timelineItem({color:"#d1d5db",title:"Decision pending",isPending:!0})}
            </claims-card>
          </div>

          <div>
            <claims-card title="Active flags">
              ${m(c.flag,"#D85A30")}
              <claims-field-row label="Contestable period"
                ><claims-badge variant="warning">Active — 23 months</claims-badge></claims-field-row
              >
              <claims-field-row label="Manner discrepancy"
                ><claims-badge variant="danger">Refer</claims-badge></claims-field-row
              >
              <claims-field-row label="ADB rider"
                ><claims-badge variant="info">Review required</claims-badge></claims-field-row
              >
              <claims-field-row label="Funeral assignment"
                ><claims-badge variant="warning">Pending docs</claims-badge></claims-field-row
              >
              <claims-field-row label="Foreign death"
                ><claims-badge variant="success">Cleared</claims-badge></claims-field-row
              >
              <claims-field-row label="Minor beneficiary"
                ><claims-badge variant="success">Cleared</claims-badge></claims-field-row
              >
              <claims-field-row label="Divorce revocation"
                ><claims-badge variant="neutral">N/A</claims-badge></claims-field-row
              >
              <claims-field-row label="NRA / foreign payee"
                ><claims-badge variant="success">No — US citizen</claims-badge></claims-field-row
              >
              <claims-field-row label="Simultaneous death"
                ><claims-badge variant="neutral">Not triggered</claims-badge></claims-field-row
              >
              <claims-field-row label="Disclaimer"
                ><claims-badge variant="neutral">Not triggered</claims-badge></claims-field-row
              >
              <claims-field-row label="Disappearance"
                ><claims-badge variant="neutral">N/A</claims-badge></claims-field-row
              >
            </claims-card>

            <claims-card title="Communication log summary">
              ${m(c.messageCircle,"#185FA5")}
              <claims-field-row label="Last contact">04/20/2026 — Phone (claimant)</claims-field-row>
              <claims-field-row label="Total interactions">3</claims-field-row>
              <claims-field-row label="Outstanding outreach"
                ><claims-badge variant="warning">1 — funeral form</claims-badge></claims-field-row
              >
            </claims-card>
          </div>
        </div>
      </div>

      <claims-action-bar>
        <claims-button>Save draft</claims-button>
        <claims-button variant="primary" className="ml-auto" @click=${this._handleContinue}>
          Continue to Event Details
        </claims-button>
      </claims-action-bar>
    `}};Ee=kt([f("claims-case-context-page")],Ee);var Lt=Object.getOwnPropertyDescriptor,Ht=(a,e,i,s)=>{for(var t=s>1?void 0:s?Lt(e,i):e,l=a.length-1,r;l>=0;l--)(r=a[l])&&(t=r(t)||t);return t};let Me=class extends b{render(){return o`
      <div class="claims-page">
        <div class="grid grid-cols-2 gap-2.5">
          <div>
            <claims-card title="Death event">
              ${m(c.fileText,"#185FA5")}
              <claims-field-row label="Date of death">02/28/2026</claims-field-row>
              <claims-field-row label="Place of death">Austin, TX — Domestic</claims-field-row>
              <claims-field-row label="Foreign death flag"
                ><claims-badge variant="success">No</claims-badge></claims-field-row
              >
              <claims-field-row label="Declared manner (claimant)"
                ><claims-badge variant="warning">Natural</claims-badge></claims-field-row
              >
              <claims-field-row label="Certificate manner"
                ><claims-badge variant="danger">Accidental</claims-badge></claims-field-row
              >
              <claims-field-row label="Cause stated on certificate">Blunt force trauma</claims-field-row>
              <claims-field-row label="Certifying physician">Dr. Robert Lee, MD</claims-field-row>
              <claims-field-row label="Certificate #">TX-2026-03921</claims-field-row>
              <claims-field-row label="AI extraction confidence"
                ><claims-badge variant="success">94%</claims-badge></claims-field-row
              >
            </claims-card>

            <claims-card title="Key dates & contestability">
              ${m(c.calendar,"#854F0B")}
              <claims-field-row label="Policy issue date">03/15/2024</claims-field-row>
              <claims-field-row label="Date of death">02/28/2026</claims-field-row>
              <claims-field-row label="Months since issue">23 months</claims-field-row>
              <claims-field-row label="Within contestable period"
                ><claims-badge variant="warning">Yes — 2-yr window</claims-badge></claims-field-row
              >
              <claims-field-row label="HORD (date claim received)">04/20/2026</claims-field-row>
              <claims-field-row label="Claim submitted on">04/20/2026</claims-field-row>
            </claims-card>
          </div>

          <div>
            <claims-card title="Manner discrepancy (D-08)">
              ${m(c.alertTriangle,"#D85A30")}
              <claims-info-box variant="danger" className="mb-2">
                <div class="font-medium text-[#A32D2D]">Mismatch — examiner action required</div>
                <div class="mt-1 text-[#791F1F]">
                  Claimant declared Natural; death certificate states Accidental. Must be reconciled before
                  decision. ADB rider on policy requires separate accidental death verification.
                </div>
              </claims-info-box>
              <claims-field-row label="ADB rider present"
                ><claims-badge variant="info">Yes — two-check process</claims-badge></claims-field-row
              >
              <claims-field-row label="Resolution status"
                ><claims-badge variant="warning">Pending examiner action</claims-badge></claims-field-row
              >
              <div class="mt-2">
                <label class="text-[11px] text-muted-foreground">Examiner resolution notes</label>
                <textarea
                  class="w-full mt-1 border border-border rounded-md p-2 text-[12px] min-h-[60px] resize-y"
                  placeholder="Document how manner discrepancy was resolved..."
                ></textarea>
              </div>
            </claims-card>

            <claims-card title="Special manner handling">
              ${m(c.gavel,"#534AB7")}
              <claims-field-row label="Homicide review (D-08)"
                ><claims-badge variant="neutral">N/A — not homicide</claims-badge></claims-field-row
              >
              <claims-field-row label="Suicide review (D-08)"
                ><claims-badge variant="neutral">N/A</claims-badge></claims-field-row
              >
              <claims-field-row label="Suicide exclusion period"
                ><claims-badge variant="neutral">Not applicable</claims-badge></claims-field-row
              >
              <claims-field-row label="Undetermined — investigation"
                ><claims-badge variant="neutral">N/A</claims-badge></claims-field-row
              >
              <claims-info-box variant="info" className="mt-2">
                If manner were suicide: verify contestable period (1-yr in some states, 2-yr in others).
                Payment = return of premiums paid to DOD, not face value.
              </claims-info-box>
            </claims-card>

            <claims-card title="Foreign death (D-11)">
              ${m(c.globe,"#1D9E75")}
              <claims-field-row label="Death location">Austin, TX — USA</claims-field-row>
              <claims-field-row label="Foreign death triggered"
                ><claims-badge variant="success">No</claims-badge></claims-field-row
              >
              <claims-info-box variant="info" className="mt-1.5">
                If foreign: gather domestic info first, refer to Pru. Vendor estimate ≤$1,000 can proceed
                without Pru approval.
              </claims-info-box>
            </claims-card>
          </div>
        </div>
      </div>
    `}};Me=Ht([f("claims-event-details-page")],Me);var Vt=Object.getOwnPropertyDescriptor,jt=(a,e,i,s)=>{for(var t=s>1?void 0:s?Vt(e,i):e,l=a.length-1,r;l>=0;l--)(r=a[l])&&(t=r(t)||t);return t};let Ne=class extends b{render(){return o`
      <div class="claims-page">
        <div class="grid grid-cols-2 gap-2.5">
          <div>
            <claims-card title="Policy details">
              ${m(c.dollarSign,"#185FA5")}
              <claims-field-row label="Policy number">TL12345</claims-field-row>
              <claims-field-row label="Product">20-year term life</claims-field-row>
              <claims-field-row label="Face value"
                ><span class="text-[#1D9E75]">$500,000.00</span></claims-field-row
              >
              <claims-field-row label="Issue date">03/15/2024</claims-field-row>
              <claims-field-row label="Issue state">TX</claims-field-row>
              <claims-field-row label="Insured residence state">TX</claims-field-row>
              <claims-field-row label="Policy status"
                ><claims-badge variant="success">In force</claims-badge></claims-field-row
              >
              <claims-field-row label="Grace period default"
                ><claims-badge variant="success">No</claims-badge></claims-field-row
              >
              <claims-field-row label="Lapsed / reinstated"
                ><claims-badge variant="success">No</claims-badge></claims-field-row
              >
              <claims-field-row label="Annual premium">$1,240.00</claims-field-row>
              <claims-field-row label="Last premium paid">02/01/2026</claims-field-row>
            </claims-card>

            <claims-card title="Riders & benefits">
              ${m(c.shield,"#D85A30")}
              <claims-field-row label="ADB rider"
                ><claims-badge variant="info">Present — under review</claims-badge></claims-field-row
              >
              <claims-field-row label="Terminal illness rider"
                ><claims-badge variant="neutral">Not present</claims-badge></claims-field-row
              >
              <claims-field-row label="Waiver of premium"
                ><claims-badge variant="neutral">Not present</claims-badge></claims-field-row
              >
              <claims-field-row label="Prior TI claim paid"
                ><claims-badge variant="success">None</claims-badge></claims-field-row
              >
              <claims-field-row label="Prior death claim"
                ><claims-badge variant="success">None</claims-badge></claims-field-row
              >
            </claims-card>
          </div>

          <div>
            <claims-card title="Misstatement of age (D-06)">
              ${m(c.clock,"#854F0B")}
              <claims-field-row label="DOB on policy">09/04/1978</claims-field-row>
              <claims-field-row label="DOB on death certificate">09/04/1978</claims-field-row>
              <claims-field-row label="Discrepancy"
                ><claims-badge variant="success">None — DOBs match</claims-badge></claims-field-row
              >
              <claims-info-box variant="info" className="mt-2">
                <div class="font-medium text-[#0C447C] mb-1">Waiver thresholds (if insured is older)</div>
                <div class="text-[#185FA5] leading-relaxed">
                  1 yr diff → waive up to $16,000 benefit&nbsp;&nbsp;2 yr → $8,000&nbsp;&nbsp;3 yr →
                  $6,000&nbsp;&nbsp;4 yr → $4,000&nbsp;&nbsp;5 yr → $3,000
                </div>
                <div class="text-[#185FA5] mt-1">
                  Beyond threshold: refer to Actuary for recalculation. Send Increased/Decreased benefit
                  letter.
                </div>
              </claims-info-box>
              <claims-field-row label="Actuary referral needed"
                ><claims-badge variant="neutral">No</claims-badge></claims-field-row
              >
            </claims-card>

            <claims-card title="Beneficiary & special designations">
              ${m(c.users,"#534AB7")}
              <claims-field-row label="Primary beneficiary">Jane Smith — 100%</claims-field-row>
              <claims-field-row label="Contingent beneficiary">Michael Smith (son)</claims-field-row>
              <claims-field-row label="Irrevocable beneficiary"
                ><claims-badge variant="neutral">No</claims-badge></claims-field-row
              >
              <claims-field-row label="Ex-spouse beneficiary"
                ><claims-badge variant="neutral">No</claims-badge></claims-field-row
              >
              <claims-field-row label="Divorce revocation check (D-09)"
                ><claims-badge variant="neutral">N/A</claims-badge></claims-field-row
              >
              <claims-field-row label="Minor beneficiary (D-10)"
                ><claims-badge variant="success">No — age 42</claims-badge></claims-field-row
              >
              <claims-field-row label="FL/OK non-divorce statement"
                ><claims-badge variant="neutral">N/A — TX policy</claims-badge></claims-field-row
              >
              <claims-field-row label="Incompetent/incapacitated bene"
                ><claims-badge variant="neutral">No</claims-badge></claims-field-row
              >
            </claims-card>

            <claims-card title="Funeral home assignment (D-12)">
              ${m(c.building,"#1D9E75")}
              <claims-field-row label="Assignee">Oakwood Funeral Services</claims-field-row>
              <claims-field-row label="Assignment amount">$8,500.00</claims-field-row>
              <claims-field-row label="W-9 / TIN verified"
                ><claims-badge variant="warning">Pending</claims-badge></claims-field-row
              >
              <claims-field-row label="Signatures confirmed"
                ><claims-badge variant="warning">Pending</claims-badge></claims-field-row
              >
              <claims-field-row label="Payment split">FH $8,500 · Bene $491,500</claims-field-row>
            </claims-card>
          </div>
        </div>
      </div>
    `}};Ne=jt([f("claims-policy-info-page")],Ne);var Ut=Object.getOwnPropertyDescriptor,qt=(a,e,i,s)=>{for(var t=s>1?void 0:s?Ut(e,i):e,l=a.length-1,r;l>=0;l--)(r=a[l])&&(t=r(t)||t);return t};let Oe=class extends b{render(){return o`
      <div class="claims-page">
        <div class="flex items-center justify-between mb-4">
          <span class="text-[15px] font-semibold text-[#0C447C]">Claim documents</span>
          <claims-button className="text-[11px]">
            ${c.upload()}
            Upload document
          </claims-button>
        </div>

        <claims-card title="AI extraction — death certificate" .ai=${!0} className="mb-4">
          ${m(c.bot,"#534AB7")}
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <claims-mini-field label="Insured name">
              John Alan Smith
              <claims-badge variant="success" className="text-[10px]">Match</claims-badge>
            </claims-mini-field>
            <claims-mini-field label="Date of death">
              02/28/2026
              <claims-badge variant="success" className="text-[10px]">Match</claims-badge>
            </claims-mini-field>
            <claims-mini-field label="Manner of death">
              <span class="text-[#A32D2D]"
                >Accidental <claims-badge variant="danger" className="text-[10px]">Mismatch</claims-badge></span
              >
            </claims-mini-field>
            <claims-mini-field label="Cause of death">Blunt force trauma</claims-mini-field>
            <claims-mini-field label="State of death">Texas (TX)</claims-mini-field>
            <claims-mini-field label="Certificate issuer">Travis County, TX</claims-mini-field>
          </div>
        </claims-card>

        <claims-card title="Uploaded documents">
          ${m(c.files,"#185FA5")}
          <div class="overflow-x-auto">
            <table class="w-full border-collapse text-left">
              <thead>
                <tr class="border-b border-border bg-secondary">
                  <th class="text-[10px] font-medium text-muted-foreground p-2">Document</th>
                  <th class="text-[10px] font-medium text-muted-foreground p-2">Source</th>
                  <th class="text-[10px] font-medium text-muted-foreground p-2">Uploaded</th>
                  <th class="text-[10px] font-medium text-muted-foreground p-2">Channel</th>
                  <th class="text-[10px] font-medium text-muted-foreground p-2">AI conf.</th>
                  <th class="text-[10px] font-medium text-muted-foreground p-2">Extraction</th>
                  <th class="text-[10px] font-medium text-muted-foreground p-2">Status</th>
                  <th class="text-[10px] font-medium text-muted-foreground p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-border">
                  <td class="p-2 text-[12px]">
                    <span class="font-medium flex items-center gap-1">
                      ${c.fileText("w-4 h-4 text-[#185FA5]")}
                      Death certificate
                    </span>
                  </td>
                  <td class="p-2 text-[12px]">Portal</td>
                  <td class="p-2 text-[12px]">04/20/2026</td>
                  <td class="p-2 text-[12px]">Online</td>
                  <td class="p-2"><claims-badge variant="success">94%</claims-badge></td>
                  <td class="p-2"><claims-badge variant="success">Reviewed</claims-badge></td>
                  <td class="p-2"><claims-badge variant="success">Verified</claims-badge></td>
                  <td class="p-2">
                    <claims-button className="text-[10px] py-0.5 px-1.5">View</claims-button>
                  </td>
                </tr>
                <tr class="border-b border-border">
                  <td class="p-2 text-[12px]">
                    <span class="font-medium flex items-center gap-1">
                      ${c.fileText("w-4 h-4 text-[#1D9E75]")}
                      Claim form
                    </span>
                  </td>
                  <td class="p-2 text-[12px]">Portal</td>
                  <td class="p-2 text-[12px]">04/20/2026</td>
                  <td class="p-2 text-[12px]">Online</td>
                  <td class="p-2"><claims-badge variant="success">98%</claims-badge></td>
                  <td class="p-2"><claims-badge variant="success">Reviewed</claims-badge></td>
                  <td class="p-2"><claims-badge variant="success">Verified</claims-badge></td>
                  <td class="p-2">
                    <claims-button className="text-[10px] py-0.5 px-1.5">View</claims-button>
                  </td>
                </tr>
                <tr class="border-b border-border">
                  <td class="p-2 text-[12px]">
                    <span class="font-medium flex items-center gap-1">
                      ${c.fileText("w-4 h-4 text-[#1D9E75]")}
                      Authorization to release
                    </span>
                  </td>
                  <td class="p-2 text-[12px]">Portal</td>
                  <td class="p-2 text-[12px]">04/20/2026</td>
                  <td class="p-2 text-[12px]">Online</td>
                  <td class="p-2"><claims-badge variant="success">91%</claims-badge></td>
                  <td class="p-2"><claims-badge variant="success">Reviewed</claims-badge></td>
                  <td class="p-2"><claims-badge variant="success">Verified</claims-badge></td>
                  <td class="p-2">
                    <claims-button className="text-[10px] py-0.5 px-1.5">View</claims-button>
                  </td>
                </tr>
                <tr>
                  <td class="p-2 text-[12px]">
                    <span class="font-medium flex items-center gap-1">
                      ${c.fileWarning("w-4 h-4 text-[#E24B4A]")}
                      Funeral assignment form
                    </span>
                  </td>
                  <td class="p-2 text-[12px]">—</td>
                  <td class="p-2 text-[12px]">—</td>
                  <td class="p-2 text-[12px]">—</td>
                  <td class="p-2"><claims-badge variant="neutral">—</claims-badge></td>
                  <td class="p-2"><claims-badge variant="neutral">—</claims-badge></td>
                  <td class="p-2"><claims-badge variant="danger">Missing</claims-badge></td>
                  <td class="p-2">
                    <claims-button variant="danger" className="text-[10px] py-0.5 px-1.5"
                      >Request</claims-button
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </claims-card>

        <claims-card title="Out-of-channel document upload (D-02)">
          ${m(c.upload,"#854F0B")}
          <div class="grid grid-cols-2 gap-2 mb-2">
            <div>
              <label class="text-[11px] text-muted-foreground">Document type</label>
              <select class="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]">
                <option>Death certificate</option>
                <option>Claim form</option>
                <option>Funeral assignment form</option>
                <option>Medical records</option>
                <option>Legal document</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label class="text-[11px] text-muted-foreground">Received via</label>
              <select class="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]">
                <option>Email</option>
                <option>Fax</option>
                <option>Physical mail</option>
                <option>In-person</option>
              </select>
            </div>
            <div>
              <label class="text-[11px] text-muted-foreground">Receipt date</label>
              <input type="date" class="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]" />
            </div>
            <div>
              <label class="text-[11px] text-muted-foreground">Source / sender</label>
              <input
                type="text"
                class="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]"
                placeholder="e.g. Oakwood Funeral Services"
              />
            </div>
          </div>
          <claims-button variant="primary" className="text-[11px]">Upload &amp; stamp document</claims-button>
        </claims-card>
      </div>
    `}};Oe=qt([f("claims-documents-page")],Oe);var zt=Object.getOwnPropertyDescriptor,Wt=(a,e,i,s)=>{for(var t=s>1?void 0:s?zt(e,i):e,l=a.length-1,r;l>=0;l--)(r=a[l])&&(t=r(t)||t);return t};let Fe=class extends b{_integrationCard(a){const{icon:e,iconBg:i,iconColor:s,title:t,description:l,status:r,statusVariant:d}=a;return o`
      <div class="border border-border rounded-md p-3 flex items-center gap-2.5 mb-2">
        <div
          class="w-8 h-8 min-w-[30px] rounded-md flex items-center justify-center"
          style="background-color: ${i}; color: ${s}"
        >
          ${e}
        </div>
        <div class="flex-1 min-w-0">
          <div class="text-[12px] font-medium">${t}</div>
          <div class="text-[11px] text-muted-foreground">${l}</div>
        </div>
        <claims-badge variant=${d} className="text-[10px]">${r}</claims-badge>
      </div>
    `}_activityLogItem(a){const{initials:e,bgColor:i,textColor:s,title:t,time:l,description:r,isLast:d}=a;return o`
      <div class="flex gap-2.5 py-2.5 ${d?"":"border-b border-border"}">
        <div
          class="w-7 h-7 min-w-[28px] rounded-full flex items-center justify-center text-[9px] font-medium"
          style="background-color: ${i}; color: ${s}"
        >
          ${e}
        </div>
        <div>
          <div class="text-[12px] font-medium">${t}</div>
          <div class="text-[11px] text-muted-foreground">${l}</div>
          <div class="text-[11px] text-foreground mt-0.5">${r}</div>
        </div>
      </div>
    `}render(){return o`
      <div class="claims-page">
        <div class="grid grid-cols-2 gap-2.5">
          <div>
            <div class="text-[11px] font-medium text-muted-foreground mb-2 uppercase tracking-wide">
              Active integrations
            </div>

            ${this._integrationCard({icon:c.userSearch("w-4 h-4"),iconBg:"#E6F1FB",iconColor:"#185FA5",title:"Accurint / LexisNexis",description:"Identity, name history, address lookup",status:"Connected",statusVariant:"success"})}

            ${this._integrationCard({icon:c.building("w-4 h-4"),iconBg:"#E6F1FB",iconColor:"#185FA5",title:"CSLN — Child support liens",description:"State-specific lien lookup (CA CO MA NV RI TX WA)",status:"Connected",statusVariant:"success"})}

            ${this._integrationCard({icon:c.globe("w-4 h-4"),iconBg:"#E6F1FB",iconColor:"#185FA5",title:"SSDI Death Index",description:"Social Security death verification",status:"Connected",statusVariant:"success"})}

            ${this._integrationCard({icon:c.receipt("w-4 h-4"),iconBg:"#E6F1FB",iconColor:"#185FA5",title:"IRS lien / federal levy",description:"Tax lien and levy lookup",status:"Connected",statusVariant:"success"})}

            ${this._integrationCard({icon:c.send("w-4 h-4"),iconBg:"#FAEEDA",iconColor:"#854F0B",title:"Prudential referral portal",description:"Approval and referral routing to Pru",status:"Auth required",statusVariant:"warning"})}

            ${this._integrationCard({icon:c.microscope("w-4 h-4"),iconBg:"#EEEDFE",iconColor:"#534AB7",title:"MRX — Medical record check",description:"Contestable period medical discrepancy check",status:"Last run 04/20",statusVariant:"purple"})}

            ${this._integrationCard({icon:c.globe2("w-4 h-4"),iconBg:"#E1F5EE",iconColor:"#0F6E56",title:"Foreign investigation vendor",description:"D-11 — estimate ≤$1K no Pru approval; >$1K requires Pru",status:"Not triggered",statusVariant:"neutral"})}
          </div>

          <div>
            <div class="text-[11px] font-medium text-muted-foreground mb-2 uppercase tracking-wide">
              Last activity log
            </div>

            <claims-card className="p-3">
              ${this._activityLogItem({initials:"SS",bgColor:"#EAF3DE",textColor:"#3B6D11",title:"SSDI lookup",time:"04/20/2026 10:42 AM",description:"Death confirmed. SSN match. DOD 02/28/2026."})}

              ${this._activityLogItem({initials:"AC",bgColor:"#EAF3DE",textColor:"#3B6D11",title:"Accurint search",time:"04/20/2026 10:44 AM",description:"Identity confirmed. Name variant: John Alan Smith."})}

              ${this._activityLogItem({initials:"CS",bgColor:"#EAF3DE",textColor:"#3B6D11",title:"CSLN check — TX",time:"04/20/2026 10:45 AM",description:"No child support liens. TX confirmed."})}

              ${this._activityLogItem({initials:"MX",bgColor:"#EEEDFE",textColor:"#534AB7",title:"MRX medical check",time:"04/20/2026 10:48 AM",description:"Contestable period review initiated. Records requested from Austin Regional Clinic.",isLast:!0})}
            </claims-card>
          </div>
        </div>
      </div>
    `}};Fe=Wt([f("claims-integrations-page")],Fe);var Xt=Object.getOwnPropertyDescriptor,Jt=(a,e,i,s)=>{for(var t=s>1?void 0:s?Xt(e,i):e,l=a.length-1,r;l>=0;l--)(r=a[l])&&(t=r(t)||t);return t};let Ie=class extends b{render(){return o`
      <div class="claims-page">
        <div class="grid grid-cols-2 gap-2.5">
          <div>
            <claims-card title="Medical records request (D-18)">
              ${m(c.stethoscope,"#185FA5")}
              <claims-field-row label="Contestable period">
                <claims-badge variant="warning">Active — 23 months</claims-badge>
              </claims-field-row>
              <claims-field-row label="Records requested">Austin Regional Clinic</claims-field-row>
              <claims-field-row label="Date range requested">03/15/2022 — 03/15/2024</claims-field-row>
              <claims-field-row label="Request sent">04/19/2026</claims-field-row>
              <claims-field-row label="Status">
                <claims-badge variant="warning">Pending response</claims-badge>
              </claims-field-row>
              <claims-info-box variant="info" className="mt-2">
                Per BOG 6.1: For contestable claims, request medical records for 2 years prior to policy
                issue date to check for material misrepresentation.
              </claims-info-box>
            </claims-card>

            <claims-card title="Medical history summary">
              ${m(c.fileText,"#534AB7")}
              <claims-field-row label="Pre-existing conditions">
                <claims-badge variant="warning">Under review</claims-badge>
              </claims-field-row>
              <claims-field-row label="Application disclosures">Hypertension disclosed</claims-field-row>
              <claims-field-row label="Undisclosed conditions">
                <claims-badge variant="warning">Pending records</claims-badge>
              </claims-field-row>
              <claims-field-row label="Materiality assessment">
                <claims-badge variant="warning">Pending</claims-badge>
              </claims-field-row>
            </claims-card>
          </div>

          <div>
            <claims-card title="Contestable investigation (D-19)">
              ${m(c.alertTriangle,"#D85A30")}
              <claims-field-row label="Investigation status">
                <claims-badge variant="info">In progress</claims-badge>
              </claims-field-row>
              <claims-field-row label="Assigned investigator">Medical Review Team</claims-field-row>
              <claims-field-row label="Target completion">05/04/2026</claims-field-row>

              <div class="mt-3">
                <div class="text-[11px] text-muted-foreground mb-1">Investigation notes</div>
                <textarea
                  class="w-full border border-border rounded-md p-2 text-[12px] min-h-[80px] resize-y"
                  placeholder="Document investigation findings..."
                >
Hypertension disclosed on application. Awaiting medical records to verify no additional undisclosed conditions. Will assess materiality once records received.</textarea>
              </div>

              <div class="mt-2 flex gap-2">
                <claims-button className="text-[11px]">Save notes</claims-button>
                <claims-button variant="primary" className="text-[11px]"
                  >Request additional records</claims-button
                >
              </div>
            </claims-card>

            <claims-card title="MRX results">
              ${m(c.stethoscope,"#1D9E75")}
              <claims-field-row label="MRX check run">04/20/2026</claims-field-row>
              <claims-field-row label="Prescription history">No red flags</claims-field-row>
              <claims-field-row label="Hospital admissions">None found in period</claims-field-row>
              <claims-field-row label="Specialist visits">
                <claims-badge variant="warning">1 cardiology visit — reviewing</claims-badge>
              </claims-field-row>
            </claims-card>
          </div>
        </div>
      </div>
    `}};Ie=Jt([f("claims-medical-page")],Ie);var Kt=Object.getOwnPropertyDescriptor,Yt=(a,e,i,s)=>{for(var t=s>1?void 0:s?Kt(e,i):e,l=a.length-1,r;l>=0;l--)(r=a[l])&&(t=r(t)||t);return t};let Be=class extends b{render(){return o`
      <div class="claims-page">
        <div class="grid grid-cols-2 gap-2.5">
          <div>
            <claims-card title="Prudential referral status">
              ${m(c.send,"#185FA5")}
              <claims-field-row label="Referral required">
                <claims-badge variant="warning">Yes — over TPA limit</claims-badge>
              </claims-field-row>
              <claims-field-row label="TPA death limit">$100,000</claims-field-row>
              <claims-field-row label="Claim amount">
                <span class="text-[#A32D2D]">$492,750.00</span>
              </claims-field-row>
              <claims-field-row label="Referral status">
                <claims-badge variant="info">Not yet submitted</claims-badge>
              </claims-field-row>
              <claims-field-row label="Contestable referral">
                <claims-badge variant="warning">Required — 23 months</claims-badge>
              </claims-field-row>

              <claims-info-box variant="info" className="mt-2">
                Claims exceeding TPA authority limits must be referred to Prudential for approval before
                payment can be issued.
              </claims-info-box>
            </claims-card>

            <claims-card title="Referral package checklist">
              ${m(c.fileText,"#534AB7")}
              <div class="space-y-2">
                <label class="flex items-center gap-2 text-[12px]">
                  <input type="checkbox" checked class="rounded" />
                  Claim summary completed
                </label>
                <label class="flex items-center gap-2 text-[12px]">
                  <input type="checkbox" checked class="rounded" />
                  All documents uploaded
                </label>
                <label class="flex items-center gap-2 text-[12px]">
                  <input type="checkbox" class="rounded" />
                  Contestable investigation complete
                </label>
                <label class="flex items-center gap-2 text-[12px]">
                  <input type="checkbox" checked class="rounded" />
                  Manner discrepancy resolved
                </label>
                <label class="flex items-center gap-2 text-[12px]">
                  <input type="checkbox" class="rounded" />
                  Funeral assignment validated
                </label>
                <label class="flex items-center gap-2 text-[12px]">
                  <input type="checkbox" checked class="rounded" />
                  Benefit calculation confirmed
                </label>
              </div>

              <div class="mt-3 flex gap-2">
                <claims-button variant="primary" className="text-[11px]"
                  >Submit referral to Prudential</claims-button
                >
              </div>
            </claims-card>
          </div>

          <div>
            <claims-card title="Referral history">
              ${m(c.clock,"#854F0B")}
              <div class="text-[12px] text-muted-foreground text-center py-4">
                No previous referrals for this claim.
              </div>
            </claims-card>

            <claims-card title="Examiner recommendation">
              ${m(c.fileText,"#1D9E75")}
              <div class="mb-2">
                <label class="text-[11px] text-muted-foreground">Recommendation</label>
                <select class="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]">
                  <option>Approve — Pay full benefit</option>
                  <option>Approve — Pay with adjustments</option>
                  <option>Deny — Material misrepresentation</option>
                  <option>Deny — Policy exclusion</option>
                  <option>Recommend rescission</option>
                </select>
              </div>

              <div class="mb-2">
                <label class="text-[11px] text-muted-foreground">Recommendation notes</label>
                <textarea
                  class="w-full mt-1 border border-border rounded-md p-2 text-[12px] min-h-[80px] resize-y"
                  placeholder="Provide detailed rationale for recommendation..."
                >
Recommend approval pending contestable investigation completion. Manner discrepancy resolved — certificate shows Accidental, ADB rider conditions met. Awaiting medical records to complete contestable review per BOG 6.1.</textarea>
              </div>
            </claims-card>
          </div>
        </div>
      </div>
    `}};Be=Yt([f("claims-referral-page")],Be);var Zt=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor,We=(a,e,i,s)=>{for(var t=s>1?void 0:s?Gt(e,i):e,l=a.length-1,r;l>=0;l--)(r=a[l])&&(t=(s?r(e,i,t):r(t))||t);return s&&t&&Zt(e,i,t),t};const Qt={success:"#97C459",warning:"#EF9F27",danger:"#E24B4A",purple:"#AFA9EC"};let re=class extends b{constructor(){super(...arguments),this.activeTab="system"}_reviewItem(a){const{status:e,statusLabel:i,title:s,titleMuted:t,subtitle:l,subtitleColor:r,children:d,rightAction:n,collapsed:u}=a;return o`
      <div class="border border-border rounded-md mb-2 overflow-hidden">
        <div
          class="px-3 py-2 bg-card flex items-start gap-2"
          style="border-left: 3px solid ${Qt[e]}"
        >
          <claims-badge variant=${e} className="text-[10px]">${i}</claims-badge>
          <div class="flex-1 min-w-0">
            <div class=${y("text-[12px] font-medium",t&&"text-muted-foreground")}>
              ${s}
            </div>
            ${l?o`<div class="text-[11px] text-muted-foreground" style=${r?`color: ${r}`:""}>
                  ${l}
                </div>`:""}
          </div>
          ${n??""}
        </div>
        ${!u&&d?o`<div class="px-3 py-2.5 bg-secondary border-t border-border">${d}</div>`:""}
      </div>
    `}_systemAssessmentTab(){return o`
      <claims-ai-box className="mb-4">
        <span slot="title" class="flex items-center gap-1.5 w-full">
          ${c.sparkles()}
          AI assessment summary
          <claims-button className="ml-auto text-[11px] py-0.5 px-2">
            ${c.refreshCw()}
            Refresh
          </claims-button>
        </span>
        Claim for John A. Smith submitted 04/20/2026 by beneficiary Jane Smith (spouse). Policy TL12345
        (20-yr term, $500K face) is in-force on DOD 02/28/2026 within contestable period. Documents: Death
        Certificate ✓ Claim Form ✓ Authorization ✓ Funeral Assignment ✗. Manner of death flagged — claimant
        declared Natural, certificate shows Accidental. ADB rider present — accidental manner requires
        additional handling and two separate payment checks. Recommend examiner review for manner validation
        and funeral assignment follow-up before proceeding to decision.
      </claims-ai-box>

      <div class="grid grid-cols-2 gap-3 mb-2">
        <claims-card title="Rule engine results — 28 rules evaluated" className="col-span-2">
          <table class="w-full border-collapse">
            <thead>
              <tr class="border-b border-border bg-secondary">
                <th class="text-[10px] font-medium text-muted-foreground p-2 text-left">Rule</th>
                <th class="text-[10px] font-medium text-muted-foreground p-2 text-left">Outcome</th>
                <th class="text-[10px] font-medium text-muted-foreground p-2 text-left">Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-border">
                <td class="p-2 text-[12px]">Contestability</td>
                <td class="p-2"><claims-badge variant="warning">Flag</claims-badge></td>
                <td class="p-2 text-[11px] text-muted-foreground">Within 2-yr period</td>
              </tr>
              <tr class="border-b border-border">
                <td class="p-2 text-[12px]">Manner validation</td>
                <td class="p-2"><claims-badge variant="danger">Refer</claims-badge></td>
                <td class="p-2 text-[11px] text-muted-foreground">Declared ≠ certificate</td>
              </tr>
              <tr class="border-b border-border">
                <td class="p-2 text-[12px]">Foreign death</td>
                <td class="p-2"><claims-badge variant="success">Approve</claims-badge></td>
                <td class="p-2 text-[11px] text-muted-foreground">Death in US</td>
              </tr>
              <tr class="border-b border-border">
                <td class="p-2 text-[12px]">Minor beneficiary</td>
                <td class="p-2"><claims-badge variant="success">Approve</claims-badge></td>
                <td class="p-2 text-[11px] text-muted-foreground">Bene age 42</td>
              </tr>
              <tr class="border-b border-border">
                <td class="p-2 text-[12px]">Name discrepancy</td>
                <td class="p-2"><claims-badge variant="success">Resolved</claims-badge></td>
                <td class="p-2 text-[11px] text-muted-foreground">Matched via SSN+DOB</td>
              </tr>
              <tr class="border-b border-border">
                <td class="p-2 text-[12px]">Fast track</td>
                <td class="p-2"><claims-badge variant="neutral">N/A</claims-badge></td>
                <td class="p-2 text-[11px] text-muted-foreground">Disabled at MVP</td>
              </tr>
              <tr>
                <td class="p-2 text-[12px]">Overall assessment</td>
                <td class="p-2"><claims-badge variant="danger">Refer</claims-badge></td>
                <td class="p-2 text-[11px] text-muted-foreground">Manner requires review</td>
              </tr>
            </tbody>
          </table>
        </claims-card>
      </div>
    `}_examinerReviewTab(){return o`
      <div class="grid grid-cols-[1fr_220px] gap-2.5">
        <div>
          <div class="flex items-center justify-between mb-1.5">
            <span class="text-[13px] font-medium">Examiner review items</span>
            <claims-badge variant="info" className="text-[10px]">4 of 7 resolved — 57%</claims-badge>
          </div>
          <p class="text-[11px] text-muted-foreground mb-2.5">
            Each item requires an action before the case can proceed to Decision.
          </p>

          ${this._reviewItem({status:"warning",statusLabel:"Pending",title:"Manner of death validation (D-08)",subtitle:"Claimant declared Natural — certificate states Accidental",children:o`
              <div class="grid grid-cols-2 gap-1.5 mb-2">
                <div>
                  <div class="text-[10px] text-muted-foreground mb-0.5">DECLARED BY CLAIMANT</div>
                  <div class="inline-block text-[12px] font-medium bg-[#FCEBEB] text-[#A32D2D] px-2 py-0.5 rounded">
                    Natural
                  </div>
                </div>
                <div>
                  <div class="text-[10px] text-muted-foreground mb-0.5">ON DEATH CERTIFICATE</div>
                  <div class="inline-block text-[12px] font-medium bg-[#FCEBEB] text-[#A32D2D] px-2 py-0.5 rounded">
                    Accidental
                  </div>
                </div>
              </div>
              <div class="flex gap-1.5 items-start">
                <select class="flex-1 border border-border rounded-md p-1.5 text-[11px]">
                  <option>Select resolution...</option>
                  <option>Accept certificate — Accidental</option>
                  <option>Request additional documentation</option>
                  <option>Refer to supervisor</option>
                </select>
                <textarea
                  class="flex-[2] min-h-[36px] border border-border rounded-md p-1.5 text-[11px]"
                  placeholder="Resolution notes..."
                ></textarea>
                <claims-button variant="primary" className="text-[11px]">Resolve</claims-button>
              </div>
            `})}

          ${this._reviewItem({status:"warning",statusLabel:"Pending",title:"Funeral home assignment (D-12)",subtitle:"Validate form, verify TIN, approve payment split",children:o`
              <div class="grid grid-cols-2 gap-1.5 mb-2">
                <div>
                  <div class="text-[11px] text-muted-foreground">Assignee</div>
                  <div class="text-[12px] font-medium">Oakwood Funeral Services</div>
                </div>
                <div>
                  <div class="text-[11px] text-muted-foreground">Assignment amount</div>
                  <div class="text-[12px] font-medium">$8,500.00</div>
                </div>
              </div>
              <div class="bg-[#EAF3DE] rounded-md px-2.5 py-1.5 text-[12px] text-[#27500A] font-medium mb-2">
                Payment split: FH $8,500.00 · Bene $491,500.00
              </div>
              <div class="flex gap-2.5 items-center">
                <label class="text-[11px] flex items-center gap-1">
                  <input type="checkbox" /> Verify TIN
                </label>
                <label class="text-[11px] flex items-center gap-1">
                  <input type="checkbox" /> Confirm signatures
                </label>
                <claims-button variant="success" className="ml-auto text-[11px]">Approve split</claims-button>
              </div>
            `})}

          ${this._reviewItem({status:"danger",statusLabel:"Blocked",title:"Document completeness",subtitle:"Missing: Funeral Assignment Form",subtitleColor:"#A32D2D",rightAction:o`<claims-button variant="danger" className="text-[11px]">Escalate</claims-button>`,collapsed:!0})}

          ${this._reviewItem({status:"success",statusLabel:o`${c.check()} Resolved`,title:"Name discrepancy resolution (D-05)",titleMuted:!0,rightAction:o`<span class="text-[11px] text-[#185FA5] cursor-pointer">View details</span>`,collapsed:!0})}

          ${this._reviewItem({status:"success",statusLabel:o`${c.check()} Resolved`,title:"ADB rider accidental verification (D-21)",titleMuted:!0,rightAction:o`<span class="text-[11px] text-[#185FA5] cursor-pointer">View details</span>`,collapsed:!0})}

          ${this._reviewItem({status:"danger",statusLabel:"Pending",title:"NRA / foreign payee check (D-15)",subtitle:"Beneficiary citizenship — W-8BEN required if NRA",children:o`
              <claims-field-row label="Beneficiary citizenship"
                ><claims-badge variant="success">US Citizen confirmed</claims-badge></claims-field-row
              >
              <claims-field-row label="W-8BEN required"
                ><claims-badge variant="success">No</claims-badge></claims-field-row
              >
              <claims-field-row label="Withholding applicable"
                ><claims-badge variant="success">None</claims-badge></claims-field-row
              >
              <claims-button variant="success" className="mt-2 text-[11px]">Mark resolved</claims-button>
            `})}

          ${this._reviewItem({status:"purple",statusLabel:"Info",title:"Simultaneous death check (D-17)",subtitle:"Confirm insured and beneficiary did not die in same event",children:o`
              <claims-field-row label="Beneficiary alive"
                ><claims-badge variant="success">Yes — confirmed</claims-badge></claims-field-row
              >
              <claims-field-row label="Simultaneous death triggered"
                ><claims-badge variant="success">No</claims-badge></claims-field-row
              >
            `})}
        </div>

        <div>
          <div class="bg-secondary border border-border rounded-md p-3">
            <div class="text-[11px] font-medium text-muted-foreground mb-1.5">Related BOG sections</div>
            <a class="block text-[11px] text-[#185FA5] cursor-pointer py-0.5">Section 7.3 — Name discrepancies</a>
            <a class="block text-[11px] text-[#185FA5] cursor-pointer py-0.5">Section 7.2 — Misstatement of age</a>
            <a class="block text-[11px] text-[#185FA5] cursor-pointer py-0.5">Cause of death requirements</a>
            <a class="block text-[11px] text-[#185FA5] cursor-pointer py-0.5"
              >Section 6.1 — Contestable investigation</a
            >
            <a class="block text-[11px] text-[#185FA5] cursor-pointer py-0.5">Section 7.5 — Foreign payee NRA</a>
            <a class="block text-[11px] text-[#185FA5] cursor-pointer py-0.5"
              >Section 7.10 — Simultaneous death</a
            >

            <div class="text-[11px] font-medium text-muted-foreground mt-2.5 mb-1.5">Open clarifications</div>
            <a class="block text-[11px] text-[#185FA5] cursor-pointer py-0.5">#34 Un-suspend communication</a>
            <a class="block text-[11px] text-[#185FA5] cursor-pointer py-0.5">#27 TI follow-up deviation</a>

            <div class="text-[11px] font-medium text-muted-foreground mt-2.5 mb-1.5">Case notes (3)</div>
            <div class="text-[11px] text-muted-foreground leading-relaxed">
              04/20 — Claimant called re: funeral assignment timing. Stated death was from a fall.
            </div>
            <a class="block text-[11px] text-[#185FA5] cursor-pointer mt-1">+ Add note</a>

            <div class="text-[11px] font-medium text-muted-foreground mt-2.5 mb-1.5">Authority limits</div>
            <div class="flex justify-between py-0.5">
              <span class="text-[11px] text-muted-foreground">Death TPA limit</span>
              <span class="text-[12px] font-medium">$100K</span>
            </div>
            <div class="flex justify-between py-0.5">
              <span class="text-[11px] text-muted-foreground">This claim</span>
              <span class="text-[12px] font-medium text-[#A32D2D]">$492.7K — Pru needed</span>
            </div>
          </div>
        </div>
      </div>
    `}render(){return o`
      <div class="flex flex-col flex-1 overflow-hidden">
        <div class="bg-card border-b border-border px-4 flex gap-0">
          <button
            type="button"
            @click=${()=>{this.activeTab="system"}}
            class=${y("px-3.5 py-2.5 text-[12px] cursor-pointer border-b-2 border-transparent",this.activeTab==="system"?"text-[#185FA5] border-b-[#185FA5] font-medium":"text-muted-foreground hover:text-foreground")}
          >
            System Assessment
          </button>
          <button
            type="button"
            @click=${()=>{this.activeTab="examiner"}}
            class=${y("px-3.5 py-2.5 text-[12px] cursor-pointer border-b-2 border-transparent",this.activeTab==="examiner"?"text-[#185FA5] border-b-[#185FA5] font-medium":"text-muted-foreground hover:text-foreground")}
          >
            Examiner Review
          </button>
        </div>

        <div class="claims-page">
          ${this.activeTab==="system"?this._systemAssessmentTab():this._examinerReviewTab()}
        </div>
      </div>
    `}};We([pe()],re.prototype,"activeTab",2);re=We([f("claims-worksheet-page")],re);var ea=Object.getOwnPropertyDescriptor,ta=(a,e,i,s)=>{for(var t=s>1?void 0:s?ea(e,i):e,l=a.length-1,r;l>=0;l--)(r=a[l])&&(t=r(t)||t);return t};let Te=class extends b{render(){return o`
      <div class="claims-page">
        <div class="grid grid-cols-2 gap-2.5">
          <claims-card title="Child support lien — CSLN (D-13)">
            ${m(c.building,"#185FA5")}
            <claims-field-row label="State trigger">TX (issue state)</claims-field-row>
            <claims-field-row label="CSLN result"
              ><claims-badge variant="success">No lien found</claims-badge></claims-field-row
            >
            <claims-field-row label="Checked on">04/20/2026</claims-field-row>
            <claims-info-box variant="info" className="mt-1.5">
              CA: 24-hour rule applies. MA: separate process outside CSLN.
            </claims-info-box>
            <claims-button className="w-full mt-2 text-[11px]">
              ${c.refreshCw()}
              Recheck CSLN
            </claims-button>
          </claims-card>

          <claims-card title="IRS lien / federal levy (D-14)">
            ${m(c.receipt,"#854F0B")}
            <claims-field-row label="IRS lien flag"
              ><claims-badge variant="success">No lien</claims-badge></claims-field-row
            >
            <claims-field-row label="Federal tax levy"
              ><claims-badge variant="success">None</claims-badge></claims-field-row
            >
            <claims-field-row label="Checked on">04/20/2026</claims-field-row>
            <claims-button className="w-full mt-2 text-[11px]">Run IRS check</claims-button>
          </claims-card>

          <claims-card title="Identity verification — Accurint (D-05)">
            ${m(c.userSearch,"#534AB7")}
            <claims-field-row label="Search criteria">SSN + DOB + DOD</claims-field-row>
            <claims-field-row label="Result"
              ><claims-badge variant="success">Identity confirmed</claims-badge></claims-field-row
            >
            <claims-field-row label="Name variants found">John A. Smith, John Alan Smith</claims-field-row>
            <claims-field-row label="Resolution applied">Policy name accepted</claims-field-row>
            <claims-button className="w-full mt-2 text-[11px]">View Accurint report</claims-button>
          </claims-card>

          <claims-card title="Benefit calculation (D-24)">
            ${m(c.calculator,"#1D9E75")}
            <claims-field-row label="Face value">$500,000.00</claims-field-row>
            <claims-field-row label="Funeral assignment deduction">− $8,500.00</claims-field-row>
            <claims-field-row label="DCI (HORD → settlement)">+ $1,250.00</claims-field-row>
            <claims-field-row label="IRS / CSLN deductions">$0.00</claims-field-row>
            <claims-field-row label="Net payable to beneficiary">
              <span class="text-[#1D9E75] text-[14px]">$492,750.00</span>
            </claims-field-row>
            <claims-field-row label="ADB benefit (separate check)"
              ><claims-badge variant="warning">Pending manner confirm</claims-badge></claims-field-row
            >
            <claims-field-row label="DCI rate applied">Higher of company rate or state rate</claims-field-row>
          </claims-card>

          <claims-card title="SSDI death verification (D-29)">
            ${m(c.globe,"#185FA5")}
            <claims-field-row label="SSDI result"
              ><claims-badge variant="success">Death confirmed</claims-badge></claims-field-row
            >
            <claims-field-row label="SSN match"
              ><claims-badge variant="success">Confirmed</claims-badge></claims-field-row
            >
            <claims-field-row label="DOD in SSDI">02/28/2026</claims-field-row>
            <claims-field-row label="Obituary / funeral home check"
              ><claims-badge variant="success">Confirmed</claims-badge></claims-field-row
            >
          </claims-card>

          <claims-card title="State requirements check (D-23)">
            ${m(c.mapPin,"#D85A30")}
            <claims-field-row label="Issue state">TX</claims-field-row>
            <claims-field-row label="IL 45-day letter"
              ><claims-badge variant="neutral">N/A — not IL</claims-badge></claims-field-row
            >
            <claims-field-row label="CA Fair Claim"
              ><claims-badge variant="neutral">N/A — not CA</claims-badge></claims-field-row
            >
            <claims-field-row label="DOI notice states trigger"
              ><claims-badge variant="success">Not triggered</claims-badge></claims-field-row
            >
            <claims-field-row label="NY 5-day acknowledgment"
              ><claims-badge variant="neutral">N/A — not NY</claims-badge></claims-field-row
            >
            <claims-field-row label="TX standard rules apply"
              ><claims-badge variant="success">Confirmed</claims-badge></claims-field-row
            >
          </claims-card>

          <claims-card title="ADB investigation (D-21)">
            ${m(c.settings,"#534AB7")}
            <claims-field-row label="ADB rider present"
              ><claims-badge variant="success">Yes</claims-badge></claims-field-row
            >
            <claims-field-row label="Certificate manner">Accidental — confirmed</claims-field-row>
            <claims-field-row label="ADB rider conditions met"
              ><claims-badge variant="success">Yes — covered accident</claims-badge></claims-field-row
            >
            <claims-field-row label="ADB exclusions"
              ><claims-badge variant="success">None apply</claims-badge></claims-field-row
            >
            <claims-field-row label="Contractual death benefit">Check 1 — pay first</claims-field-row>
            <claims-field-row label="ADB benefit">Check 2 — separate payment</claims-field-row>
            <claims-info-box variant="info" className="mt-1.5">
              Two separate payment checks required. Contractual death benefit issued first; ADB issued
              separately.
            </claims-info-box>
          </claims-card>

          <claims-card title="Quote recalculation — TI only (T-22)">
            ${m(c.refreshCw,"#1D9E75")}
            <claims-field-row label="Claim type"
              ><claims-badge variant="neutral">Death claim — N/A</claims-badge></claims-field-row
            >
            <claims-info-box variant="info" className="mt-1.5">
              For TI claims only: if original quote is over 30 days old at claim form receipt, trigger
              recalculation. If reduced, obtain new signed Claimant Statement before payment.
            </claims-info-box>
          </claims-card>
        </div>
      </div>
    `}};Te=ta([f("claims-tools-page")],Te);var aa=Object.getOwnPropertyDescriptor,ia=(a,e,i,s)=>{for(var t=s>1?void 0:s?aa(e,i):e,l=a.length-1,r;l>=0;l--)(r=a[l])&&(t=r(t)||t);return t};let Re=class extends b{_communicationItem(a){const{initials:e,bgColor:i,textColor:s,sender:t,type:l,typeVariant:r,timestamp:d,recipient:n,content:u,isLast:g}=a;return o`
      <div class="flex gap-2.5 py-2.5 ${g?"":"border-b border-border"}">
        <div
          class="w-7 h-7 min-w-[28px] rounded-full flex items-center justify-center text-[10px] font-medium"
          style="background-color: ${i}; color: ${s}"
        >
          ${e}
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-[12px] font-medium">${t}</span>
            <claims-badge variant=${r} className="text-[10px]">${l}</claims-badge>
            <span class="text-[11px] text-muted-foreground ml-auto">${d}</span>
          </div>
          ${n?o`<div class="text-[11px] text-muted-foreground">${n}</div>`:""}
          <div class="text-[12px] text-foreground mt-1 leading-relaxed">${u}</div>
        </div>
      </div>
    `}render(){return o`
      <div class="claims-page">
        <div class="flex items-center justify-between mb-2.5">
          <span class="text-[13px] font-medium text-foreground">External communications</span>
          <claims-button variant="primary" className="text-[11px]">
            ${c.plus()}
            Log communication
          </claims-button>
        </div>

        <claims-card>
          ${this._communicationItem({initials:"EX",bgColor:"#E6F1FB",textColor:"#185FA5",sender:"Sarah M. (Examiner)",type:"Outbound email",typeVariant:"info",timestamp:"04/20/2026 11:30 AM",recipient:"To: jane.smith@email.com",content:"Sent initial acknowledgment letter and missing document request for Funeral Assignment Form. Advised 10-business-day response window. TX standard letter template used."})}

          ${this._communicationItem({initials:"JS",bgColor:"#EEEDFE",textColor:"#534AB7",sender:"Jane Smith (Claimant)",type:"Inbound phone",typeVariant:"neutral",timestamp:"04/20/2026 02:15 PM — 8 min",content:"Claimant called re: timeline and assignment form. Confirmed form en route from Oakwood. Stated death was result of a fall — consistent with Accidental on certificate. No additional documents provided this call."})}

          ${this._communicationItem({initials:"EX",bgColor:"#E6F1FB",textColor:"#185FA5",sender:"Sarah M. (Examiner)",type:"Outbound email",typeVariant:"info",timestamp:"04/19/2026 09:00 AM",recipient:"To: Austin Regional Clinic — medical records request",content:"Medical records request for John A. Smith. Requesting all records 03/15/2022 — 03/15/2024 per contestable review BOG 6.1. Authorization form enclosed.",isLast:!0})}
        </claims-card>

        <claims-card title="Log new communication">
          ${m(c.mail,"#185FA5")}
          <div class="grid grid-cols-2 gap-2 mb-2">
            <div>
              <label class="text-[11px] text-muted-foreground">Communication type</label>
              <select class="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]">
                <option>Outbound phone</option>
                <option>Inbound phone</option>
                <option>Outbound email</option>
                <option>Inbound email</option>
                <option>Fax</option>
                <option>Physical mail</option>
              </select>
            </div>
            <div>
              <label class="text-[11px] text-muted-foreground">Contact name / party</label>
              <input
                type="text"
                class="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]"
                placeholder="Name..."
              />
            </div>
            <div>
              <label class="text-[11px] text-muted-foreground">Date and time</label>
              <input type="date" class="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]" />
            </div>
            <div>
              <label class="text-[11px] text-muted-foreground">Letter template</label>
              <select class="w-full mt-1 border border-border rounded-md p-1.5 text-[12px]">
                <option>None / free text</option>
                <option>Acknowledgment — standard</option>
                <option>Missing document request</option>
                <option>IL 45-day letter</option>
                <option>CA Fair Claim notice</option>
                <option>Denial — with appeal language</option>
                <option>DOI notice (CA IL NE NH NJ RI TN WA WV)</option>
                <option>Incorrect claimant — state-specific</option>
              </select>
            </div>
          </div>
          <div>
            <label class="text-[11px] text-muted-foreground">Notes</label>
            <textarea
              class="w-full mt-1 border border-border rounded-md p-2 text-[12px] min-h-[60px] resize-y"
              placeholder="Communication notes — include all relevant details and outcomes..."
            ></textarea>
          </div>
          <div class="mt-2 flex gap-2">
            <claims-button variant="primary" className="text-[11px]">Save log entry</claims-button>
          </div>
        </claims-card>
      </div>
    `}};Re=ia([f("claims-communications-page")],Re);var sa=Object.defineProperty,la=Object.getOwnPropertyDescriptor,Xe=(a,e,i,s)=>{for(var t=s>1?void 0:s?la(e,i):e,l=a.length-1,r;l>=0;l--)(r=a[l])&&(t=(s?r(e,i,t):r(t))||t);return s&&t&&sa(e,i,t),t};const ra=[{id:"approve-pay",title:"Approve — Pay (D-24)",description:"All checks pass. DCI from HORD to settlement. Route to Payment Process. Within TPA authority for amounts up to $100K aggregate — this claim requires Pru referral first."},{id:"approve-suicide",title:"Approve — Pay suicide provision (D-25)",description:"Suicide confirmed within contestable period. Payment = return of premiums paid to DOD (not face value). State-specific language applies."},{id:"deny-tpa",title:"Deny — within TPA authority (D-26)",description:"Very limited scenarios. Prepare denial letter with appeal language for CA IL NE NH NJ RI TN WA WV. Most death denials require Pru referral first."},{id:"deny-ti-life",title:"Deny — TI life expectancy (T-26)",description:"TI only. Life expectancy does not meet threshold (>6 months, or >12 months CA). TPA denial authority — does not require Pru approval."},{id:"deny-ti-other",title:"Deny — other reasons, Pru required (T-27)",description:"TI non-life-expectancy denials — $0 TPA authority. Refer to Pru for approval before sending denial letter."},{id:"refer-pru",title:"Refer to Prudential for decision (D-27)",description:"Over TPA authority, complex cases, most denials, rescission recommendations. Assemble referral package with recommendation and supporting documents."},{id:"rescission",title:"Recommend rescission (D-28)",description:"Material misrepresentation found. Complete Contestable Claim Summary Form. Send to Pru for approval. Upon approval draft rescission letter, send to Pru for review, then send final to policy owner."}];let oe=class extends b{constructor(){super(...arguments),this.selectedDecision="approve-pay"}_checklistItem(a){const{label:e,status:i,statusVariant:s}=a;return o`
      <div class="flex justify-between items-center py-1">
        <span class="text-[11px]">${e}</span>
        <claims-badge variant=${s} className="text-[10px]">${i}</claims-badge>
      </div>
    `}render(){return o`
      <div class="claims-page">
        <div class="grid grid-cols-[1fr_220px] gap-2.5">
          <div>
            <claims-card title="Examiner recommendation">
              ${m(c.gavel,"#185FA5")}
              ${ra.map(a=>o`
                  <div
                    @click=${()=>{this.selectedDecision=a.id}}
                    class=${y("border rounded-md p-3 mb-2 cursor-pointer transition-colors",this.selectedDecision===a.id?"border-[#185FA5] border-2 bg-[#E6F1FB]":"border-border")}
                  >
                    <div class="flex items-start gap-2">
                      <input
                        type="radio"
                        name="decision"
                        .checked=${this.selectedDecision===a.id}
                        @change=${()=>{this.selectedDecision=a.id}}
                        class="mt-0.5"
                      />
                      <div>
                        <div class="text-[12px] font-medium">${a.title}</div>
                        <div class="text-[11px] text-muted-foreground mt-0.5">${a.description}</div>
                      </div>
                    </div>
                  </div>
                `)}
            </claims-card>

            <claims-card title="Decision summary & notes">
              ${m(c.fileText,"#534AB7")}
              <claims-field-row label="Net payable amount">
                <span class="text-[#1D9E75]">$492,750.00</span>
              </claims-field-row>
              <claims-field-row label="Payment to">Jane Smith + Oakwood Funeral</claims-field-row>
              <claims-field-row label="ADB check (separate)">
                <claims-badge variant="warning">Pending manner confirm</claims-badge>
              </claims-field-row>
              <claims-field-row label="Contestable review status">
                <claims-badge variant="warning">Pending Pru direction</claims-badge>
              </claims-field-row>
              <div class="mt-2">
                <textarea
                  class="w-full border border-border rounded-md p-2 text-[12px] min-h-[80px] resize-y"
                >
Manner discrepancy resolved — certificate shows Accidental confirmed. ADB rider conditions met, no exclusion applies. Contestable investigation initiated per BOG 6.1 — hypertension materiality inconclusive, referring to Pru. Recommend Approve-Pay pending Pru contestable clearance. Two separate checks required.</textarea>
              </div>
              <div class="mt-2 flex gap-2">
                <claims-button>Save draft</claims-button>
                <claims-button variant="primary">Submit decision</claims-button>
              </div>
            </claims-card>
          </div>

          <div>
            <div class="bg-secondary border border-border rounded-md p-3">
              <div class="text-[11px] font-medium text-muted-foreground mb-1.5">Decision checklist</div>
              ${this._checklistItem({label:"All review items resolved",status:"3 pending",statusVariant:"warning"})}
              ${this._checklistItem({label:"State requirements verified",status:"Done",statusVariant:"success"})}
              ${this._checklistItem({label:"Benefit calculation confirmed",status:"Done",statusVariant:"success"})}
              ${this._checklistItem({label:"Contestable referral sent",status:"Pending Pru",statusVariant:"warning"})}
              ${this._checklistItem({label:"Funeral assignment validated",status:"Pending",statusVariant:"warning"})}
              ${this._checklistItem({label:"NRA / foreign payee cleared",status:"Done",statusVariant:"success"})}
              ${this._checklistItem({label:"Simultaneous death checked",status:"Done",statusVariant:"success"})}
              ${this._checklistItem({label:"Misstatement of age cleared",status:"Done — no discrepancy",statusVariant:"success"})}

              <div class="text-[11px] font-medium text-muted-foreground mt-2.5 mb-1.5">TPA authority limits</div>
              <div class="flex justify-between py-0.5">
                <span class="text-[11px] text-muted-foreground">Death approve-pay</span>
                <span class="text-[12px] font-medium">$100K aggregate</span>
              </div>
              <div class="flex justify-between py-0.5">
                <span class="text-[11px] text-muted-foreground">TI approve-pay</span>
                <span class="text-[12px] font-medium">$50K / $101K aggregate</span>
              </div>
              <div class="flex justify-between py-0.5">
                <span class="text-[11px] text-muted-foreground">This claim</span>
                <span class="text-[12px] font-medium text-[#A32D2D]">$492.7K — Pru required</span>
              </div>
              <div class="flex justify-between py-0.5">
                <span class="text-[11px] text-muted-foreground">TI other deny</span>
                <span class="text-[12px] font-medium">$0 — always Pru</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}};Xe([pe()],oe.prototype,"selectedDecision",2);oe=Xe([f("claims-decision-page")],oe);var oa=Object.defineProperty,ca=Object.getOwnPropertyDescriptor,Je=(a,e,i,s)=>{for(var t=s>1?void 0:s?ca(e,i):e,l=a.length-1,r;l>=0;l--)(r=a[l])&&(t=(s?r(e,i,t):r(t))||t);return s&&t&&oa(e,i,t),t};let ce=class extends b{constructor(){super(...arguments),this.activePage="case-context",this._onPageChange=a=>{const e=a.detail;e!=null&&e.page&&(this.activePage=e.page)}}connectedCallback(){super.connectedCallback(),this.addEventListener("page-change",this._onPageChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("page-change",this._onPageChange)}_renderPage(){switch(this.activePage){case"case-context":return o`<claims-case-context-page></claims-case-context-page>`;case"event-details":return o`<claims-event-details-page></claims-event-details-page>`;case"policy-info":return o`<claims-policy-info-page></claims-policy-info-page>`;case"documents":return o`<claims-documents-page></claims-documents-page>`;case"integrations":return o`<claims-integrations-page></claims-integrations-page>`;case"medical":return o`<claims-medical-page></claims-medical-page>`;case"referral":return o`<claims-referral-page></claims-referral-page>`;case"worksheet":return o`<claims-worksheet-page></claims-worksheet-page>`;case"tools":return o`<claims-tools-page></claims-tools-page>`;case"comms":return o`<claims-communications-page></claims-communications-page>`;case"decision":return o`<claims-decision-page></claims-decision-page>`;default:return o`<claims-case-context-page></claims-case-context-page>`}}render(){const a=gt[this.activePage]??this.activePage;return o`
      <div class="flex h-screen min-h-[720px] bg-[#eef3f8] text-[13px] font-sans antialiased">
        <claims-sidebar .activePage=${this.activePage}></claims-sidebar>
        <main class="flex-1 flex flex-col overflow-hidden min-w-0">
          <claims-topbar .breadcrumbLabel=${a}></claims-topbar>
          <claims-sla-banner></claims-sla-banner>
          <claims-claim-header></claims-claim-header>
          <div class="flex-1 flex flex-col overflow-hidden">${this._renderPage()}</div>
        </main>
      </div>
    `}};Je([pe()],ce.prototype,"activePage",2);ce=Je([f("claims-workbench")],ce);
