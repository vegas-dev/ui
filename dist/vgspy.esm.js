// @vegas-dev/apps/VGSpy v1.0.0
class t{constructor(t,e={}){this.isInit=!1,this.isClick=!1,t&&("string"==typeof t&&(t=document.querySelector(t)),t instanceof HTMLElement&&(this.settings={offset:t.dataset.offset?parseInt(t.dataset.offset):parseInt(e.offset)||0,isState:t.dataset.state?t.dataset.state:e.state||!1,onActive:e.onActive||null,onClick:e.onClick||null,activeClass:e.activeClass?e.activeClass.trim().split(" "):["active"]},this.links=t.querySelectorAll("[data-target]").length?t.querySelectorAll("[data-target]"):t.querySelectorAll("a"),this.isInit=!0,this.onLoad(),this.onClick(),this.onScroll()))}onLoad(){if(!this.isInit)return;let t=this;window.onload=function(){t.setCurrentSection(null)}}onClick(){if(!this.isInit)return;let t=this;for(let e=0;e<this.links.length;e++)this.links[e].onclick=function(){return"function"==typeof t.settings.onClick&&t.settings.onClick(this.links[e]),t.setCurrentSection(this),!1}}onScroll(){if(!this.isInit)return;let t=this;t.isClick||(window.onscroll=function(){t.setCurrentSection(null)})}setCurrentSection(t=null){if(this.settings.isState,t){let e=this.attributes(t,"target"),s=this.attributes(t,"offset"),i=document.getElementById(e),n=i.offsetTop+s+this.settings.offset;i&&(this.removeCurrentActive(),this.setActive(t,i),window.scrollTo(0,n),this.isClick=!1)}else for(let t=0;t<this.links.length;t++){let e=this.attributes(this.links[t],"target"),s=this.attributes(this.links[t],"offset"),i=document.getElementById(e),n=i.offsetTop+s+this.settings.offset,l=n+i.offsetHeight,o=document.documentElement.scrollTop||document.body.scrollTop;o>=n&&o<l&&(this.removeCurrentActive({ignore:this.links[t]}),this.setActive(this.links[t],i))}}setActive(t,e){if(!this.isInit)return;const s=this.settings.activeClass.every((function(e){return t.classList.contains(e)}));if(this.settings.isState){let e=this.attributes(t,"text"),s=this.attributes(t,"target");history.pushState("",document.title+e,"#"+s)}s||(e&&e.classList.add(...this.settings.activeClass),t&&t.classList.add(...this.settings.activeClass),"function"==typeof this.settings.onActive&&this.settings.onActive(t,e))}removeCurrentActive(t={ignore:null}){for(let e=0;e<this.links.length;e++){let s=this.attributes(this.links[e],"target"),i=document.getElementById(s);t.ignore!==this.links[e]&&(this.links[e].classList.remove(...this.settings.activeClass),i.classList.remove(...this.settings.activeClass))}}attributes(t,e=""){let s=t.getAttribute("href")||t.dataset.target;"undefined"!==s&&-1!==s.indexOf("#")?s=s.replace(/(^.+)#/gm,""):"undefined"!==s&&-1===s.indexOf("#")&&(s="");let i=t.dataset.offset?parseInt(t.dataset.offset):0,n=t.innerHTML;return"target"===e?s:"offset"===e?i:"text"===e?n:{target:s,offset:i,text:n}}}let e=document.querySelectorAll("[data-vgspy]");if(e.length)for(let s of e)new t(s);export{t as VGSpy};
