import{e as B,a3 as nt,N as b,D as Y,C as it,J as at,a4 as ot,a5 as rt,o as lt,R as pt,g as J,a6 as E,a7 as st,f as K,a8 as V,a9 as ut,i as W,aa as ht,O as ct,ab as gt,$ as ft,ac as L,ad as dt,ae as vt,af as mt,U as yt,ag as _t,j as wt,A as Ct,ah as Mt}from"./index-DqzYUymv.js";import{S as It,y as xt,L as At,b as H,F as bt,V as Z,A as Pt,P as Ut}from"./customGraphicKeyframeAnimation-DZH67_Ry.js";function k(n,e){var t;return b(e,function(r){n[r]!=null&&n[r]!=="auto"&&(t=!0)}),t}var j=["transition","enterFrom","leaveTo"],zt=j.concat(["enterAnimation","updateAnimation","leaveAnimation"]);function G(n,e,t){if(t&&(!n[t]&&e[t]&&(n[t]={}),n=n[t],e=e[t]),n&&e)for(var r=t?j:zt,i=0;i<r.length;i++){var p=r[i];n[p]==null&&e[p]!=null&&(n[p]=e[p])}}var Ot=function(n){function e(){var t=n!==null&&n.apply(this,arguments)||this;return t.type=e.type,t.preventAutoZ=!0,t}return B(e,n),e.prototype.mergeOption=function(t,r){var i=this.option.elements;this.option.elements=null,n.prototype.mergeOption.call(this,t,r),this.option.elements=i},e.prototype.optionUpdated=function(t,r){var i=this.option,p=(r?i:t).elements,f=i.elements=r?[]:i.elements,C=[];this._flatten(p,C,null);var l=nt(f,C,"normalMerge"),y=this._elOptionsToUpdate=[];b(l,function(h,d){var m=h.newOption;m&&(y.push(m),function(u,a){var o=u.existing;if(a.id=u.keyInfo.id,!a.type&&o&&(a.type=o.type),a.parentId==null){var s=a.parentOption;s?a.parentId=s.id:o&&(a.parentId=o.parentId)}a.parentOption=null}(h,m),function(u,a,o){var s=Y({},o),c=u[a],M=o.$action||"merge";M==="merge"?c?(it(c,s,!0),at(c,s,{ignoreSize:!0}),ot(o,c),G(o,c),G(o,c,"shape"),G(o,c,"style"),G(o,c,"extra"),o.clipPath=c.clipPath):u[a]=s:M==="replace"?u[a]=s:M==="remove"&&c&&(u[a]=null)}(f,d,m),function(u,a){if(u&&(u.hv=a.hv=[k(a,["left","right"]),k(a,["top","bottom"])],u.type==="group")){var o=u,s=a;o.width==null&&(o.width=s.width=0),o.height==null&&(o.height=s.height=0)}}(f[d],m))},this),i.elements=rt(f,function(h){return h&&delete h.$action,h!=null})},e.prototype._flatten=function(t,r,i){b(t,function(p){if(p){i&&(p.parentOption=i),r.push(p);var f=p.children;f&&f.length&&this._flatten(f,r,p),delete p.children}},this)},e.prototype.useElOptionsToUpdate=function(){var t=this._elOptionsToUpdate;return this._elOptionsToUpdate=null,t},e.type="graphic",e.defaultOption={elements:[]},e}(lt),q={path:null,compoundPath:null,group:Ct,image:Mt,text:K},v=pt(),Tt=function(n){function e(){var t=n!==null&&n.apply(this,arguments)||this;return t.type=e.type,t}return B(e,n),e.prototype.init=function(){this._elMap=J()},e.prototype.render=function(t,r,i){t!==this._lastGraphicModel&&this._clear(),this._lastGraphicModel=t,this._updateElements(t),this._relocate(t,i)},e.prototype._updateElements=function(t){var r=t.useElOptionsToUpdate();if(r){var i=this._elMap,p=this.group,f=t.get("z"),C=t.get("zlevel");b(r,function(l){var y=E(l.id,null),h=y!=null?i.get(y):null,d=E(l.parentId,null),m=d!=null?i.get(d):p,u=l.type,a=l.style;u==="text"&&a&&l.hv&&l.hv[1]&&(a.textVerticalAlign=a.textBaseline=a.verticalAlign=a.align=null);var o=l.textContent,s=l.textConfig;if(a&&It(a,u,!!s,!!o)){var c=xt(a,u,!0);!s&&c.textConfig&&(s=l.textConfig=c.textConfig),!o&&c.textContent&&(o=c.textContent)}var M=function(w){return w=Y({},w),b(["id","parentId","$action","hv","bounding","textContent","clipPath"].concat(st),function(S){delete w[S]}),w}(l),I=l.$action||"merge",P=I==="merge",x=I==="replace";if(P){var _=h;(O=!h)?_=Q(y,m,l.type,i):(_&&(v(_).isNew=!1),At(_)),_&&(H(_,M,t,{isInit:O}),X(_,l,f,C))}else if(x){N(h,l,i,t);var A=Q(y,m,l.type,i);A&&(H(A,M,t,{isInit:!0}),X(A,l,f,C))}else I==="remove"&&(bt(h,l),N(h,l,i,t));var g=i.get(y);if(g&&o)if(P){var U=g.getTextContent();U?U.attr(o):g.setTextContent(new K(o))}else x&&g.setTextContent(new K(o));if(g){var T=l.clipPath;if(T){var F=T.type,z=void 0,O=!1;if(P){var R=g.getClipPath();z=(O=!R||v(R).type!==F)?D(F):R}else x&&(O=!0,z=D(F));g.setClipPath(z),H(z,T,t,{isInit:O}),Z(z,T.keyframeAnimation,t)}var tt=v(g);g.setTextConfig(s),tt.option=l,function(w,S,et){var $=V(w).eventData;w.silent||w.ignore||$||($=V(w).eventData={componentType:"graphic",componentIndex:S.componentIndex,name:w.name}),$&&($.info=et.info)}(g,t,l),ut({el:g,componentModel:t,itemName:g.name,itemTooltipOption:l.tooltip}),Z(g,l.keyframeAnimation,t)}})}},e.prototype._relocate=function(t,r){for(var i=t.option.elements,p=this.group,f=this._elMap,C=r.getWidth(),l=r.getHeight(),y=["x","y"],h=0;h<i.length;h++){var d=i[h];if((s=(o=E(d.id,null))!=null?f.get(o):null)&&s.isGroup){var m=(c=s.parent)===p,u=v(s),a=v(c);u.width=W(u.option.width,m?C:a.width)||0,u.height=W(u.option.height,m?l:a.height)||0}}for(h=i.length-1;h>=0;h--){var o,s;if(d=i[h],s=(o=E(d.id,null))!=null?f.get(o):null){var c=s.parent,M=(a=v(c),c===p?{width:C,height:l}:{width:a.width,height:a.height}),I={},P=ht(s,d,M,null,{hv:d.hv,boundingMode:d.bounding},I);if(!v(s).isNew&&P){for(var x=d.transition,_={},A=0;A<y.length;A++){var g=y[A],U=I[g];x&&(Pt(x)||ct(x,g)>=0)?_[g]=U:s[g]=U}gt(s,_,t,0)}else s.attr(I)}}},e.prototype._clear=function(){var t=this,r=this._elMap;r.each(function(i){N(i,v(i).option,r,t._lastGraphicModel)}),this._elMap=J()},e.prototype.dispose=function(){this._clear()},e.type="graphic",e}(ft);function D(n){var e=new(L(q,n)?q[n]:dt(n))({});return v(e).type=n,e}function Q(n,e,t,r){var i=D(t);return e.add(i),r.set(n,i),v(i).id=n,v(i).isNew=!0,i}function N(n,e,t,r){n&&n.parent&&(n.type==="group"&&n.traverse(function(i){N(i,e,t,r)}),Ut(n,e,r),t.removeKey(v(n).id))}function X(n,e,t,r){n.isGroup||b([["cursor",mt.prototype.cursor],["zlevel",r||0],["z",t||0],["z2",0]],function(i){var p=i[0];L(e,p)?n[p]=vt(e[p],i[1]):n[p]==null&&(n[p]=i[1])}),b(_t(e),function(i){if(i.indexOf("on")===0){var p=e[i];n[i]=yt(p)?p:null}}),L(e,"draggable")&&(n.draggable=e.draggable),e.name!=null&&(n.name=e.name),e.id!=null&&(n.id=e.id)}function Gt(n){n.registerComponentModel(Ot),n.registerComponentView(Tt),n.registerPreprocessor(function(e){var t=e.graphic;wt(t)?t[0]&&t[0].elements?e.graphic=[e.graphic[0]]:e.graphic=[{elements:t}]:t&&!t.elements&&(e.graphic=[{elements:[t]}])})}export{Gt as install};
