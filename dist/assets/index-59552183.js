var Q=(l,s,n)=>{if(!s.has(l))throw TypeError("Cannot "+n)};var t=(l,s,n)=>(Q(l,s,"read from private field"),n?n.call(l):s.get(l)),c=(l,s,n)=>{if(s.has(l))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(l):s.set(l,n)},Y=(l,s,n,i)=>(Q(l,s,"write to private field"),i?i.call(l,n):s.set(l,n),n);var o=(l,s,n)=>(Q(l,s,"access private method"),n);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();let ht=document.getElementsByClassName("btn-burger")[0],ft=document.getElementsByClassName("burger")[0],St=document.getElementsByClassName("burger-list__item");const At=[...St],Z=document.body;ht.addEventListener("click",Bt);function Bt(){ft.classList.toggle("burger--active"),ht.classList.toggle("active-btn"),Z.classList.toggle("stop-scroll"),Z.classList.toggle("open-menu")}At.forEach(l=>l.addEventListener("click",Tt));function Tt(){ft.classList.remove("burger--active"),ht.classList.remove("active-btn"),Z.classList.remove("stop-scroll")}let $t=document.getElementsByClassName("products-tabs__item"),dt=document.getElementsByClassName("products-contents__item"),ut=document.getElementsByClassName("products-img");const $=[...$t];$.forEach(l=>l.addEventListener("click",qt));function qt(l){l.preventDefault();let s=i=>{$[i].classList.add("active-tab"),dt[i].classList.add("active"),ut[i].classList.add("active")},n=i=>{$[i].classList.remove("active-tab"),dt[i].classList.remove("active"),ut[i].classList.remove("active")};$.forEach((i,r)=>i===this?s(r):n(r))}let Ot=document.querySelectorAll(".accordion-item");for(let l of Ot){let s=function(){this.classList.toggle("accordion-item--show")};l.addEventListener("click",s)}let I=document.querySelectorAll(".question-form-step"),tt=document.querySelector(".question-form-footer__buttonNext"),et=document.querySelector(".question-form-footer__buttonPrev"),mt=document.querySelector(".question-form-footer__buttonSubmit"),g=0;function vt(){let l=n=>{I[n].classList.add("active")},s=n=>{I[n].classList.remove("active")};I.forEach((n,i)=>i===g?l(i):s(i))}function Pt(){g<I.length-1&&(g++,vt(),pt(),gt(),bt())}function Rt(){g>0&&(g--,vt(),pt(),gt(),bt())}function pt(){return g>=1?et.classList.add("active"):et.classList.remove("active")}function gt(){return g===I.length-1?mt.classList.add("active"):mt.classList.remove("active")}function bt(){return g===I.length-1?tt.style.display="none":tt.style.display="block"}tt.addEventListener("click",Pt);et.addEventListener("click",Rt);let st=document.querySelector(".modal"),Dt=document.getElementsByClassName("modal-callback__close")[0];document.addEventListener("click",kt);function kt(l){l.target===st&&st.classList.remove("active")}Dt.addEventListener("click",()=>st.classList.remove("active"));/**
 * @class ItcSlider
 * @version 1.0.1
 * @author https://github.com/itchief
 * @copyright Alexander Maltsev 2020 - 2023
 * @license MIT (https://github.com/itchief/ui-components/blob/master/LICENSE)
 * @tutorial https://itchief.ru/javascript/slider
 */var O,P,R,y,D,x,E,w,k,M,b,h,e,F,It,H,xt,W,Lt,X,yt,_,it,C,nt,V,Et,j,wt,z,Mt,K,_t,U,Ct,G,Nt,d,m,N,rt,S,ot,v,p,A,at,B,ct,T,lt,L,q;class f{constructor(s,n={},i="itc-slider-"){c(this,F);c(this,H);c(this,W);c(this,X);c(this,_);c(this,C);c(this,V);c(this,j);c(this,z);c(this,K);c(this,U);c(this,G);c(this,d);c(this,N);c(this,S);c(this,v);c(this,A);c(this,B);c(this,T);c(this,L);c(this,h,void 0);c(this,e,void 0);Y(this,e,{prefix:i,el:s,elWrapper:s.querySelector(`.${i}${t(this.constructor,O)}`),elItems:s.querySelector(`.${i}${t(this.constructor,P)}`),elListItem:s.querySelectorAll(`.${i}${t(this.constructor,R)}`),btnPrev:s.querySelector(`.${i}${t(this.constructor,E)}`),btnNext:s.querySelector(`.${i}${t(this.constructor,w)}`),btnClassHide:i+t(this.constructor,k),exOrderMin:0,exOrderMax:0,exItemMin:null,exItemMax:null,exTranslateMin:0,exTranslateMax:0,direction:"next",intervalId:null,isSwiping:!1,swipeX:0}),Y(this,h,{loop:!0,autoplay:!1,interval:5e3,refresh:!0,swipe:!0,...n}),o(this,B,ct).call(this),o(this,U,Ct).call(this)}static getInstance(s){const n=t(this,b).find(i=>i.target===s);return n?n.instance:null}static getOrCreateInstance(s,n={},i="itc-slider-"){const r=typeof s=="string"?document.querySelector(s):s,a=this.getInstance(r);if(a)return a;const u=new this(r,n,i);return t(this,b).push({target:r,instance:u}),u}static createInstances(){document.querySelectorAll('[data-slider="itc-slider"]').forEach(s=>{const{dataset:n}=s,i={};Object.keys(n).forEach(r=>{if(r==="slider")return;let a=n[r];a=a==="true"?!0:a,a=a==="false"?!1:a,a=Number.isNaN(Number(a))?Number(a):a,i[r]=a}),this.getOrCreateInstance(s,i)})}slideNext(){t(this,e).direction="next",o(this,v,p).call(this)}slidePrev(){t(this,e).direction="prev",o(this,v,p).call(this)}slideTo(s){o(this,A,at).call(this,s)}reset(){o(this,T,lt).call(this)}get autoplay(){return{start:()=>{t(this,h).autoplay=!0,o(this,d,m).call(this)},stop:()=>{o(this,d,m).call(this,"stop"),t(this,h).autoplay=!1}}}dispose(){o(this,G,Nt).call(this);const s=t(this,e).prefix+t(this.constructor,M),n=t(this,e).prefix+t(this.constructor,y);o(this,d,m).call(this,"stop"),t(this,e).elItems.classList.add(s),t(this,e).elItems.style.transform="",t(this,e).elListItem.forEach(a=>{a.style.transform="",a.classList.remove(n)});const i=`${t(this,e).prefix}${t(this.constructor,x)}`;document.querySelectorAll(`.${i}`).forEach(a=>{a.classList.remove(i)}),t(this,e).elItems.offsetHeight,t(this,e).elItems.classList.remove(s);const r=t(this.constructor,b).findIndex(a=>a.target===t(this,e).el);t(this.constructor,b).splice(r,1)}}O=new WeakMap,P=new WeakMap,R=new WeakMap,y=new WeakMap,D=new WeakMap,x=new WeakMap,E=new WeakMap,w=new WeakMap,k=new WeakMap,M=new WeakMap,b=new WeakMap,h=new WeakMap,e=new WeakMap,F=new WeakSet,It=function(s){if(!(s.target.closest(".itc-slider-btn")||s.target.closest(".itc-slider-indicators")))return;s.preventDefault();const n=t(this,e).prefix+t(this.constructor,E),i=t(this,e).prefix+t(this.constructor,w);if(o(this,d,m).call(this,"stop"),s.target.closest(`.${n}`)||s.target.closest(`.${i}`))t(this,e).direction=s.target.closest(`.${n}`)?"prev":"next",o(this,v,p).call(this);else if(s.target.dataset.slideTo){const r=parseInt(s.target.dataset.slideTo,10);o(this,A,at).call(this,r)}t(this,h).loop&&o(this,d,m).call(this)},H=new WeakSet,xt=function(){o(this,d,m).call(this,"stop")},W=new WeakSet,Lt=function(){o(this,d,m).call(this)},X=new WeakSet,yt=function(){window.requestAnimationFrame(o(this,T,lt).bind(this))},_=new WeakSet,it=function(s){o(this,d,m).call(this,"stop");const n=s.type.search("touch")===0?s.touches[0]:s;t(this,e).swipeX=n.clientX,t(this,e).isSwiping=!0},C=new WeakSet,nt=function(s){if(!t(this,e).isSwiping)return;const n=s.type.search("touch")===0?s.changedTouches[0]:s,i=t(this,e).swipeX-n.clientX;i>50?(t(this,e).direction="next",o(this,v,p).call(this)):i<-50&&(t(this,e).direction="prev",o(this,v,p).call(this)),t(this,e).isSwiping=!1,t(this,h).loop&&o(this,d,m).call(this)},V=new WeakSet,Et=function(){t(this,e).isBalancing||(t(this,e).isBalancing=!0,window.requestAnimationFrame(o(this,N,rt).bind(this)))},j=new WeakSet,wt=function(){t(this,e).isBalancing=!1},z=new WeakSet,Mt=function(s){s.preventDefault()},K=new WeakSet,_t=function(){document.visibilityState==="hidden"?o(this,d,m).call(this,"stop"):document.visibilityState==="visible"&&t(this,h).loop&&o(this,d,m).call(this)},U=new WeakSet,Ct=function(){t(this,e).events={click:[t(this,e).el,o(this,F,It).bind(this),!0],mouseenter:[t(this,e).el,o(this,H,xt).bind(this),!0],mouseleave:[t(this,e).el,o(this,W,Lt).bind(this),!0],resize:[window,o(this,X,yt).bind(this),t(this,h).refresh],animating:[t(this,e).elItems,o(this,V,Et).bind(this),t(this,h).loop],transitionend:[t(this,e).elItems,o(this,j,wt).bind(this),t(this,h).loop],touchstart:[t(this,e).el,o(this,_,it).bind(this),t(this,h).swipe],mousedown:[t(this,e).el,o(this,_,it).bind(this),t(this,h).swipe],touchend:[document,o(this,C,nt).bind(this),t(this,h).swipe],mouseup:[document,o(this,C,nt).bind(this),t(this,h).swipe],dragstart:[t(this,e).el,o(this,z,Mt).bind(this),!0],visibilitychange:[document,o(this,K,_t).bind(this),!0]},Object.keys(t(this,e).events).forEach(s=>{if(t(this,e).events[s][2]){const n=t(this,e).events[s][0],i=t(this,e).events[s][1];n.addEventListener(s,i)}})},G=new WeakSet,Nt=function(){Object.keys(t(this,e).events).forEach(s=>{if(t(this,e).events[s][2]){const n=t(this,e).events[s][0],i=t(this,e).events[s][1];n.removeEventListener(s,i)}})},d=new WeakSet,m=function(s){if(t(this,h).autoplay){if(s==="stop"){clearInterval(t(this,e).intervalId),t(this,e).intervalId=null;return}t(this,e).intervalId===null&&(t(this,e).intervalId=setInterval(()=>{t(this,e).direction="next",o(this,v,p).call(this)},t(this,h).interval))}},N=new WeakSet,rt=function(){if(!t(this,e).isBalancing)return;const s=t(this,e).elWrapper.getBoundingClientRect(),n=s.width/t(this,e).countActiveItems/2,i=t(this,e).elListItem.length;if(t(this,e).direction==="next"){if(t(this,e).exItemMin.getBoundingClientRect().right<s.left-n){const a=t(this,e).els.find(J=>J.el===t(this,e).exItemMin);a.order=t(this,e).exOrderMin+i;const u=t(this,e).exTranslateMin+i*t(this,e).width;a.translate=u,t(this,e).exItemMin.style.transform=`translate3D(${u}px, 0px, 0.1px)`,o(this,L,q).call(this)}}else if(t(this,e).exItemMax.getBoundingClientRect().left>s.right+n){const a=t(this,e).els.find(J=>J.el===t(this,e).exItemMax);a.order=t(this,e).exOrderMax-i;const u=t(this,e).exTranslateMax-i*t(this,e).width;a.translate=u,t(this,e).exItemMax.style.transform=`translate3D(${u}px, 0px, 0.1px)`,o(this,L,q).call(this)}window.requestAnimationFrame(o(this,N,rt).bind(this))},S=new WeakSet,ot=function(){const s=t(this,e).prefix+t(this.constructor,y);t(this,e).activeItems.forEach((n,i)=>{n?t(this,e).elListItem[i].classList.add(s):t(this,e).elListItem[i].classList.remove(s);const r=t(this,e).el.querySelectorAll(`.${t(this,e).prefix}${t(this.constructor,D)}`);r.length&&n?r[i].classList.add(`${t(this,e).prefix}${t(this.constructor,x)}`):r.length&&!n&&r[i].classList.remove(`${t(this,e).prefix}${t(this.constructor,x)}`)})},v=new WeakSet,p=function(){const s=t(this,e).direction==="next"?-t(this,e).width:t(this,e).width,n=t(this,e).translate+s;if(!t(this,h).loop){const i=t(this,e).width*(t(this,e).elListItem.length-t(this,e).countActiveItems);if(n<-i||n>0)return;t(this,e).btnPrev&&(t(this,e).btnPrev.classList.remove(t(this,e).btnClassHide),t(this,e).btnNext.classList.remove(t(this,e).btnClassHide)),t(this,e).btnPrev&&n===-i?t(this,e).btnNext.classList.add(t(this,e).btnClassHide):t(this,e).btnPrev&&n===0&&t(this,e).btnPrev.classList.add(t(this,e).btnClassHide)}t(this,e).direction==="next"?t(this,e).activeItems=[...t(this,e).activeItems.slice(-1),...t(this,e).activeItems.slice(0,-1)]:t(this,e).activeItems=[...t(this,e).activeItems.slice(1),...t(this,e).activeItems.slice(0,1)],o(this,S,ot).call(this),t(this,e).translate=n,t(this,e).elItems.style.transform=`translate3D(${n}px, 0px, 0.1px)`,t(this,e).elItems.dispatchEvent(new Event("animating",{bubbles:!0}))},A=new WeakSet,at=function(s){const n=t(this,e).activeItems.reduce((i,r,a)=>{const u=r?s-a:i;return Math.abs(u)<Math.abs(i)?u:i},t(this,e).activeItems.length);if(n!==0){t(this,e).direction=n>0?"next":"prev";for(let i=0;i<Math.abs(n);i++)o(this,v,p).call(this)}},B=new WeakSet,ct=function(){t(this,e).els=[],t(this,e).translate=0,t(this,e).activeItems=[],t(this,e).isBalancing=!1;const s=parseFloat(getComputedStyle(t(this,e).elItems).gap)||0;t(this,e).width=t(this,e).elListItem[0].getBoundingClientRect().width+s;const n=t(this,e).elWrapper.getBoundingClientRect().width;if(t(this,e).countActiveItems=Math.round(n/t(this,e).width),t(this,e).elListItem.forEach((i,r)=>{i.style.transform="",t(this,e).activeItems.push(r<t(this,e).countActiveItems?1:0),t(this,e).els.push({el:i,index:r,order:r,translate:0})}),t(this,h).loop){const i=t(this,e).elListItem.length-1,r=-(i+1)*t(this,e).width;t(this,e).elListItem[i].style.transform=`translate3D(${r}px, 0px, 0.1px)`,t(this,e).els[i].order=-1,t(this,e).els[i].translate=r,o(this,L,q).call(this)}else t(this,e).btnPrev&&t(this,e).btnPrev.classList.add(t(this,e).btnClassHide);o(this,S,ot).call(this),o(this,d,m).call(this)},T=new WeakSet,lt=function(){const s=t(this,e).prefix+t(this.constructor,M),n=parseFloat(getComputedStyle(t(this,e).elItems).gap)||0,i=t(this,e).elListItem[0].getBoundingClientRect().width+n,r=t(this,e).elWrapper.getBoundingClientRect().width,a=Math.round(r/i);i===t(this,e).width&&a===t(this,e).countActiveItems||(o(this,d,m).call(this,"stop"),t(this,e).elItems.classList.add(s),t(this,e).elItems.style.transform="translate3D(0px, 0px, 0.1px)",o(this,B,ct).call(this),window.requestAnimationFrame(()=>{t(this,e).elItems.classList.remove(s)}))},L=new WeakSet,q=function(){const s=t(this,e).els.map(a=>a.el),n=t(this,e).els.map(a=>a.order);t(this,e).exOrderMin=Math.min(...n),t(this,e).exOrderMax=Math.max(...n);const i=n.indexOf(t(this,e).exOrderMin),r=n.indexOf(t(this,e).exOrderMax);t(this,e).exItemMin=s[i],t(this,e).exItemMax=s[r],t(this,e).exTranslateMin=t(this,e).els[i].translate,t(this,e).exTranslateMax=t(this,e).els[r].translate},c(f,O,"wrapper"),c(f,P,"items"),c(f,R,"item"),c(f,y,"item-active"),c(f,D,"indicator"),c(f,x,"indicator-active"),c(f,E,"btn-prev"),c(f,w,"btn-next"),c(f,k,"btn-hide"),c(f,M,"transition-none"),c(f,b,[]);f.createInstances();let Ft=document.querySelectorAll(".deliver-body__button, .products-block__button, .welcome-col__button, .algorithm-wrapper__button, .footer-right__button, .barrel-body__button, .contact__img"),Ht=document.querySelector(".modal");for(let l of Ft)l.addEventListener("click",()=>{Ht.classList.add("active")});
