import{_ as t,ab as e,ac as s,ad as l,u as a,s as i,f as o,j as r,af as n,a5 as c,h,k as y,o as u,g as m,bt as p,ae as d,G as f}from"./index.js";import{g}from"./labelHelper.js";var b=function(f){function b(t,e,s,l){var a=f.call(this)||this;return a.updateData(t,e,s,l),a}return t(b,f),b.prototype._createSymbol=function(t,s,l,a,i){this.removeAll();var o=e(t,-1,-1,2,2,null,i);o.attr({z2:100,culling:!0,scaleX:a[0]/2,scaleY:a[1]/2}),o.drift=S,this._symbolType=t,this.add(o)},b.prototype.stopSymbolAnimation=function(t){this.childAt(0).stopAnimation(null,t)},b.prototype.getSymbolType=function(){return this._symbolType},b.prototype.getSymbolPath=function(){return this.childAt(0)},b.prototype.highlight=function(){s(this.childAt(0))},b.prototype.downplay=function(){l(this.childAt(0))},b.prototype.setZ=function(t,e){var s=this.childAt(0);s.zlevel=t,s.z=e},b.prototype.setDraggable=function(t,e){var s=this.childAt(0);s.draggable=t,s.cursor=!e&&t?"move":s.cursor},b.prototype.updateData=function(t,e,s,l){this.silent=!1;var r=t.getItemVisual(e,"symbol")||"circle",n=t.hostModel,c=b.getSymbolSize(t,e),h=r!==this._symbolType,y=l&&l.disableAnimation;if(h){var u=t.getItemVisual(e,"symbolKeepAspect");this._createSymbol(r,t,e,c,u)}else{(p=this.childAt(0)).silent=!1;var m={scaleX:c[0]/2,scaleY:c[1]/2};y?p.attr(m):a(p,m,n,e),i(p)}if(this._updateCommon(t,e,c,s,l),h){var p=this.childAt(0);if(!y){m={scaleX:this._sizeX,scaleY:this._sizeY,style:{opacity:p.style.opacity}};p.scaleX=p.scaleY=0,p.style.opacity=0,o(p,m,n,e)}}y&&this.childAt(0).stopAnimation("leave")},b.prototype._updateCommon=function(t,e,s,l,a){var i,o,m,p,d,f,b,S,v,I=this.childAt(0),_=t.hostModel;if(l&&(i=l.emphasisItemStyle,o=l.blurItemStyle,m=l.selectItemStyle,p=l.focus,d=l.blurScope,b=l.labelStatesModels,S=l.hoverScale,v=l.cursorStyle,f=l.emphasisDisabled),!l||t.hasItemOption){var z=l&&l.itemModel?l.itemModel:t.getItemModel(e),A=z.getModel("emphasis");i=A.getModel("itemStyle").getItemStyle(),m=z.getModel(["select","itemStyle"]).getItemStyle(),o=z.getModel(["blur","itemStyle"]).getItemStyle(),p=A.get("focus"),d=A.get("blurScope"),f=A.get("disabled"),b=r(z),S=A.getShallow("scale"),v=z.getShallow("cursor")}var x=t.getItemVisual(e,"symbolRotate");I.attr("rotation",(x||0)*Math.PI/180||0);var M=n(t.getItemVisual(e,"symbolOffset"),s);M&&(I.x=M[0],I.y=M[1]),v&&I.attr("cursor",v);var Y=t.getItemVisual(e,"style"),X=Y.fill;if(I instanceof c){var C=I.style;I.useStyle(h({image:C.image,x:C.x,y:C.y,width:C.width,height:C.height},Y))}else I.__isEmptyBrush?I.useStyle(h({},Y)):I.useStyle(Y),I.style.decal=null,I.setColor(X,a&&a.symbolInnerColor),I.style.strokeNoScale=!0;var T=t.getItemVisual(e,"liftZ"),V=this._z2;null!=T?null==V&&(this._z2=I.z2,I.z2+=T):null!=V&&(I.z2=V,this._z2=null);var O=a&&a.useNameLabel;y(I,b,{labelFetcher:_,labelDataIndex:e,defaultText:function(e){return O?t.getName(e):g(t,e)},inheritColor:X,defaultOpacity:Y.opacity}),this._sizeX=s[0]/2,this._sizeY=s[1]/2;var w=I.ensureState("emphasis");w.style=i,I.ensureState("select").style=m,I.ensureState("blur").style=o;var D=null==S||!0===S?Math.max(1.1,3/this._sizeY):isFinite(S)&&S>0?+S:1;w.scaleX=this._sizeX*D,w.scaleY=this._sizeY*D,this.setSymbolScale(1),u(this,p,d,f)},b.prototype.setSymbolScale=function(t){this.scaleX=this.scaleY=t},b.prototype.fadeOut=function(t,e,s){var l=this.childAt(0),a=m(this).dataIndex,i=s&&s.animation;if(this.silent=l.silent=!0,s&&s.fadeLabel){var o=l.getTextContent();o&&p(o,{style:{opacity:0}},e,{dataIndex:a,removeOpt:i,cb:function(){l.removeTextContent()}})}else l.removeTextContent();p(l,{style:{opacity:0},scaleX:0,scaleY:0},e,{dataIndex:a,cb:t,removeOpt:i})},b.getSymbolSize=function(t,e){return d(t.getItemVisual(e,"symbolSize"))},b}(f);function S(t,e){this.parent.drift(t,e)}export{b as S};
