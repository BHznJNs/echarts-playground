import{_ as n,G as r,e as t,W as e,bM as o,bd as i,m as a,a3 as s,ct as u,ah as c,aj as f,w as h,R as l,X as g,c3 as p,c2 as d,cW as v,a_ as _}from"./index.js";import{t as b,r as m}from"./interactionMutex.js";import{o as y}from"./cursorHelper.js";var C=!0,w=Math.min,O=Math.max,T=Math.pow,R=1e4,E=6,k=6,x="globalPan",z={w:[0,0],e:[0,1],n:[1,0],s:[1,1]},B={w:"ew",e:"ew",n:"ns",s:"ns",ne:"nesw",sw:"nesw",nw:"nwse",se:"nwse"},S={brushStyle:{lineWidth:2,stroke:"rgba(210,219,238,0.3)",fill:"#D2DBEE"},transformable:!0,brushMode:"single",removeOnClick:!1},I=0,L=function(u){function c(n){var o=u.call(this)||this;return o._track=[],o._covers=[],o._handlers={},o._zr=n,o.group=new r,o._uid="brushController_"+I++,t(sn,(function(n,r){this._handlers[r]=e(n,this)}),o),o}return n(c,u),c.prototype.enableBrush=function(n){return this._brushType&&this._doDisableBrush(),n.brushType&&this._doEnableBrush(n),this},c.prototype._doEnableBrush=function(n){var r=this._zr;this._enableGlobalPan||b(r,x,this._uid),t(this._handlers,(function(n,t){r.on(t,n)})),this._brushType=n.brushType,this._brushOption=o(i(S),n,!0)},c.prototype._doDisableBrush=function(){var n=this._zr;m(n,x,this._uid),t(this._handlers,(function(r,t){n.off(t,r)})),this._brushType=this._brushOption=null},c.prototype.setPanels=function(n){if(n&&n.length){var r=this._panels={};t(n,(function(n){r[n.panelId]=i(n)}))}else this._panels=null;return this},c.prototype.mount=function(n){n=n||{},this._enableGlobalPan=n.enableGlobalPan;var r=this.group;return this._zr.add(r),r.attr({x:n.x||0,y:n.y||0,rotation:n.rotation||0,scaleX:n.scaleX||1,scaleY:n.scaleY||1}),this._transform=r.getLocalTransform(),this},c.prototype.updateCovers=function(n){n=a(n,(function(n){return o(i(S),n,!0)}));var r="\0-brush-index-",t=this._covers,e=this._covers=[],u=this,c=this._creatingCover;return new s(t,n,(function(n,r){return f(n.__brushOption,r)}),f).add(h).update(h).remove((function(n){t[n]!==c&&u.group.remove(t[n])})).execute(),this;function f(n,t){return(null!=n.id?n.id:r+t)+"-"+n.brushType}function h(r,o){var i=n[r];if(null!=o&&t[o]===c)e[r]=t[o];else{var a=e[r]=null!=o?(t[o].__brushOption=i,t[o]):P(u,M(u,i));Y(u,a)}}},c.prototype.unmount=function(){return this.enableBrush(!1),N(this),this._zr.remove(this.group),this},c.prototype.dispose=function(){this.unmount(),this.off()},c}(u);function M(n,r){var t=cn[r.brushType].createCover(n,r);return t.__brushOption=r,j(t,r),n.group.add(t),t}function P(n,r){var t=D(r);return t.endCreating&&(t.endCreating(n,r),j(r,r.__brushOption)),r}function X(n,r){var t=r.__brushOption;D(r).updateCoverShape(n,r,t.range,t)}function j(n,r){var t=r.z;null==t&&(t=R),n.traverse((function(n){n.z=t,n.z2=t}))}function Y(n,r){D(r).updateCommon(n,r),X(n,r)}function D(n){return cn[n.__brushOption.brushType]}function W(n,r,e){var o,i=n._panels;if(!i)return C;var a=n._transform;return t(i,(function(n){n.isTargetByCursor(r,e,a)&&(o=n)})),o}function G(n,r){var t=n._panels;if(!t)return C;var e=r.__brushOption.panelId;return null!=e?t[e]:C}function N(n){var r=n._covers,e=r.length;return t(r,(function(r){n.group.remove(r)}),n),r.length=0,!!e}function A(n,r){var t=a(n._covers,(function(n){var r=n.__brushOption,t=i(r.range);return{brushType:r.brushType,panelId:r.panelId,range:t}}));n.trigger("brush",{areas:t,isEnd:!!r.isEnd,removeOnClick:!!r.removeOnClick})}function H(n){var r=n.length-1;return r<0&&(r=0),[n[0],n[r]]}function q(n,e,o,i){var a=new r;return a.add(new l({name:"main",style:Q(o),silent:!0,draggable:!0,cursor:"move",drift:h(Z,n,e,a,["n","s","w","e"]),ondragend:h(A,e,{isEnd:!0})})),t(i,(function(r){a.add(new l({name:r.join(""),style:{opacity:0},draggable:!0,silent:!0,invisible:!0,drift:h(Z,n,e,a,r),ondragend:h(A,e,{isEnd:!0})}))})),a}function F(n,r,t,e){var o=e.brushStyle.lineWidth||0,i=O(o,k),a=t[0][0],s=t[1][0],u=a-o/2,c=s-o/2,f=t[0][1],h=t[1][1],l=f-i+o/2,g=h-i+o/2,p=f-a,d=h-s,v=p+o,_=d+o;K(n,r,"main",a,s,p,d),e.transformable&&(K(n,r,"w",u,c,i,_),K(n,r,"e",l,c,i,_),K(n,r,"n",u,c,v,i),K(n,r,"s",u,g,v,i),K(n,r,"nw",u,c,i,i),K(n,r,"ne",l,c,i,i),K(n,r,"sw",u,g,i,i),K(n,r,"se",l,g,i,i))}function J(n,r){var e=r.__brushOption,o=e.transformable,i=r.childAt(0);i.useStyle(Q(e)),i.attr({silent:!o,cursor:o?"move":"default"}),t([["w"],["e"],["n"],["s"],["s","e"],["s","w"],["n","e"],["n","w"]],(function(t){var e=r.childOfName(t.join("")),i=1===t.length?V(n,t[0]):function(n,r){var t=[V(n,r[0]),V(n,r[1])];return("e"===t[0]||"w"===t[0])&&t.reverse(),t.join("")}(n,t);e&&e.attr({silent:!o,invisible:!o,cursor:o?B[i]+"-resize":null})}))}function K(n,r,t,e,o,i,a){var s,u,c,f,h,l=r.childOfName(t);l&&l.setShape((s=rn(n,r,[[e,o],[e+i,o+a]]),u=w(s[0][0],s[1][0]),c=w(s[0][1],s[1][1]),f=O(s[0][0],s[1][0]),h=O(s[0][1],s[1][1]),{x:u,y:c,width:f-u,height:h-c}))}function Q(n){return g({strokeNoScale:!0},n.brushStyle)}function U(n,r,t,e){var o=[w(n,t),w(r,e)],i=[O(n,t),O(r,e)];return[[o[0],i[0]],[o[1],i[1]]]}function V(n,r){var t=p({w:"left",e:"right",n:"top",s:"bottom"}[r],function(n){return d(n.group)}(n));return{left:"w",right:"e",top:"n",bottom:"s"}[t]}function Z(n,r,e,o,i,a){var s=e.__brushOption,u=n.toRectRange(s.range),c=nn(r,i,a);t(o,(function(n){var r=z[n];u[r[0]][r[1]]+=c[r[0]]})),s.range=n.fromRectRange(U(u[0][0],u[1][0],u[0][1],u[1][1])),Y(r,e),A(r,{isEnd:!1})}function $(n,r,e,o){var i=r.__brushOption.range,a=nn(n,e,o);t(i,(function(n){n[0]+=a[0],n[1]+=a[1]})),Y(n,r),A(n,{isEnd:!1})}function nn(n,r,t){var e=n.group,o=e.transformCoordToLocal(r,t),i=e.transformCoordToLocal(0,0);return[o[0]-i[0],o[1]-i[1]]}function rn(n,r,t){var e=G(n,r);return e&&e!==C?e.clipPath(t,n._transform):i(t)}function tn(n){var r=n.event;r.preventDefault&&r.preventDefault()}function en(n,r,t){return n.childOfName("main").contain(r,t)}function on(n,r,t,e){var o,a=n._creatingCover,s=n._creatingPanel,u=n._brushOption;if(n._track.push(t.slice()),function(n){var r=n._track;if(!r.length)return!1;var t=r[r.length-1],e=r[0],o=t[0]-e[0],i=t[1]-e[1];return T(o*o+i*i,.5)>E}(n)||a){if(s&&!a){"single"===u.brushMode&&N(n);var c=i(u);c.brushType=an(c.brushType,s),c.panelId=s===C?null:s.panelId,a=n._creatingCover=M(n,c),n._covers.push(a)}if(a){var f=cn[an(n._brushType,s)];a.__brushOption.range=f.getCreatingRange(rn(n,a,n._track)),e&&(P(n,a),f.updateCommon(n,a)),X(n,a),o={isEnd:e}}}else e&&"single"===u.brushMode&&u.removeOnClick&&W(n,r,t)&&N(n)&&(o={isEnd:e,removeOnClick:!0});return o}function an(n,r){return"auto"===n?r.defaultBrushType:n}var sn={mousedown:function(n){if(this._dragging)un(this,n);else if(!n.target||!n.target.draggable){tn(n);var r=this.group.transformCoordToLocal(n.offsetX,n.offsetY);this._creatingCover=null,(this._creatingPanel=W(this,n,r))&&(this._dragging=!0,this._track=[r.slice()])}},mousemove:function(n){var r=n.offsetX,t=n.offsetY,e=this.group.transformCoordToLocal(r,t);if(function(n,r,t){if(n._brushType&&!function(n,r,t){var e=n._zr;return r<0||r>e.getWidth()||t<0||t>e.getHeight()}(n,r.offsetX,r.offsetY)){var e=n._zr,o=n._covers,i=W(n,r,t);if(!n._dragging)for(var a=0;a<o.length;a++){var s=o[a].__brushOption;if(i&&(i===C||s.panelId===i.panelId)&&cn[s.brushType].contain(o[a],t[0],t[1]))return}i&&e.setCursorStyle("crosshair")}}(this,n,e),this._dragging){tn(n);var o=on(this,n,e,!1);o&&A(this,o)}},mouseup:function(n){un(this,n)}};function un(n,r){if(n._dragging){tn(r);var t=r.offsetX,e=r.offsetY,o=n.group.transformCoordToLocal(t,e),i=on(n,r,o,!0);n._dragging=!1,n._track=[],n._creatingCover=null,i&&A(n,i)}}var cn={lineX:fn(0),lineY:fn(1),rect:{createCover:function(n,r){function t(n){return n}return q({toRectRange:t,fromRectRange:t},n,r,[["w"],["e"],["n"],["s"],["s","e"],["s","w"],["n","e"],["n","w"]])},getCreatingRange:function(n){var r=H(n);return U(r[1][0],r[1][1],r[0][0],r[0][1])},updateCoverShape:function(n,r,t,e){F(n,r,t,e)},updateCommon:J,contain:en},polygon:{createCover:function(n,t){var e=new r;return e.add(new c({name:"main",style:Q(t),silent:!0})),e},getCreatingRange:function(n){return n},endCreating:function(n,r){r.remove(r.childAt(0)),r.add(new f({name:"main",draggable:!0,drift:h($,n,r),ondragend:h(A,n,{isEnd:!0})}))},updateCoverShape:function(n,r,t,e){r.childAt(0).setShape({points:rn(n,r,t)})},updateCommon:J,contain:en}};function fn(n){return{createCover:function(r,t){return q({toRectRange:function(r){var t=[r,[0,100]];return n&&t.reverse(),t},fromRectRange:function(r){return r[n]}},r,t,[[["w"],["e"]],[["n"],["s"]]][n])},getCreatingRange:function(r){var t=H(r);return[w(t[0][n],t[1][n]),O(t[0][n],t[1][n])]},updateCoverShape:function(r,t,e,o){var i,a=G(r,t);if(a!==C&&a.getLinearBrushOtherExtent)i=a.getLinearBrushOtherExtent(n);else{var s=r._zr;i=[0,[s.getWidth(),s.getHeight()][1-n]]}var u=[e,i];n&&u.reverse(),F(r,t,u,o)},updateCommon:J,contain:en}}var hn=L;function ln(n){return n=dn(n),function(r){return v(r,n)}}function gn(n,r){return n=dn(n),function(t){var e=null!=r?r:t,o=e?n.width:n.height,i=e?n.x:n.y;return[i,i+(o||0)]}}function pn(n,r,t){var e=dn(n);return function(n,o){return e.contain(o[0],o[1])&&!y(n,r,t)}}function dn(n){return _.create(n)}export{hn as B,pn as a,gn as b,ln as m};
