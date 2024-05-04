import{G as t,X as e,cp as a,h as n,ap as i,cK as o,I as r,af as l,e as s,ab as g,m as c,aV as u,a6 as f,Y as d,ch as h,g as x,cT as m,cU as p,cc as v,cb as y,L as b,aG as L,Q as T,H as w,cV as S,bk as k,b as M}from"./index.js";import{p as A,h as D}from"./labelLayoutHelper.js";var B=Math.PI,C=function(){function a(a,n){this.group=new t,this.opt=n,this.axisModel=a,e(n,{labelOffset:0,nameDirection:1,tickDirection:1,labelDirection:1,silent:!0,handleAutoShown:function(){return!0}});var i=new t({x:n.position[0],y:n.position[1],rotation:n.rotation});i.updateTransform(),this._transformGroup=i}return a.prototype.hasBuilder=function(t){return!!I[t]},a.prototype.add=function(t){I[t](this.opt,this.axisModel,this.group,this._transformGroup)},a.prototype.getGroup=function(){return this.group},a.innerTextLayout=function(t,e,a){var n,i,o=S(e-t);return k(o)?(i=a>0?"top":"bottom",n="center"):k(o-B)?(i=a>0?"bottom":"top",n="center"):(i="middle",n=o>0&&o<B?a>0?"right":"left":a>0?"left":"right"),{rotation:o,textAlign:n,textVerticalAlign:i}},a.makeAxisEventDataBase=function(t){var e={componentType:t.mainType,componentIndex:t.componentIndex};return e[t.mainType+"Index"]=t.componentIndex,e},a.isLabelSilent=function(t){var e=t.get("tooltip");return t.get("silent")||!(t.get("triggerEvent")||e&&e.show)},a}(),I={axisLine:function(t,e,c,u){var f=e.get(["axisLine","show"]);if("auto"===f&&t.handleAutoShown&&(f=t.handleAutoShown("axisLine")),f){var d=e.axis.getExtent(),h=u.transform,x=[d[0],0],m=[d[1],0],p=x[0]>m[0];h&&(a(x,x,h),a(m,m,h));var v=n({lineCap:"round"},e.getModel(["axisLine","lineStyle"]).getLineStyle()),y=new i({shape:{x1:x[0],y1:x[1],x2:m[0],y2:m[1]},style:v,strokeContainThreshold:t.strokeContainThreshold||5,silent:!0,z2:1});o(y.shape,y.style.lineWidth),y.anid="line",c.add(y);var b=e.get(["axisLine","symbol"]);if(null!=b){var L=e.get(["axisLine","symbolSize"]);r(b)&&(b=[b,b]),(r(L)||M(L))&&(L=[L,L]);var T=l(e.get(["axisLine","symbolOffset"])||0,L),w=L[0],S=L[1];s([{rotate:t.rotation+Math.PI/2,offset:T[0],r:0},{rotate:t.rotation-Math.PI/2,offset:T[1],r:Math.sqrt((x[0]-m[0])*(x[0]-m[0])+(x[1]-m[1])*(x[1]-m[1]))}],(function(e,a){if("none"!==b[a]&&null!=b[a]){var n=g(b[a],-w/2,-S/2,w,S,v.stroke,!0),i=e.r+e.offset,o=p?m:x;n.attr({rotation:e.rotate,x:o[0]+i*Math.cos(t.rotation),y:o[1]-i*Math.sin(t.rotation),silent:!0,z2:11}),c.add(n)}}))}}},axisTickLabel:function(t,a,n,i){var o=function(t,a,n,i){var o=n.axis,r=n.getModel("axisTick"),l=r.get("show");"auto"===l&&i.handleAutoShown&&(l=i.handleAutoShown("axisTick"));if(!l||o.scale.isBlank())return;for(var s=r.getModel("lineStyle"),g=i.tickDirection*r.get("length"),c=_(o.getTicksCoords(),a.transform,g,e(s.getLineStyle(),{stroke:n.get(["axisLine","lineStyle","color"])}),"ticks"),u=0;u<c.length;u++)t.add(c[u]);return c}(n,i,a,t),r=function(t,e,a,n){var i=a.axis,o=u(n.axisLabelShow,a.get(["axisLabel","show"]));if(!o||i.scale.isBlank())return;var r=a.getModel("axisLabel"),l=r.get("margin"),g=i.getViewLabels(),c=(u(n.labelRotate,r.get("rotate"))||0)*B/180,h=C.innerTextLayout(n.rotation,c,n.labelDirection),m=a.getCategories&&a.getCategories(!0),p=[],v=C.isLabelSilent(a),y=a.get("triggerEvent");return s(g,(function(o,s){var c="ordinal"===i.scale.type?i.scale.getRawOrdinalNumber(o.tickValue):o.tickValue,u=o.formattedLabel,S=o.rawLabel,k=r;if(m&&m[c]){var M=m[c];b(M)&&M.textStyle&&(k=new L(M.textStyle,r,a.ecModel))}var A=k.getTextColor()||a.get(["axisLine","lineStyle","color"]),D=i.dataToCoord(c),B=k.getShallow("align",!0)||h.textAlign,I=T(k.getShallow("alignMinLabel",!0),B),V=T(k.getShallow("alignMaxLabel",!0),B),E=k.getShallow("verticalAlign",!0)||k.getShallow("baseline",!0)||h.textVerticalAlign,z=T(k.getShallow("verticalAlignMinLabel",!0),E),_=T(k.getShallow("verticalAlignMaxLabel",!0),E),G=new f({x:D,y:n.labelOffset+n.labelDirection*l,rotation:h.rotation,silent:v,z2:10+(o.level||0),style:d(k,{text:u,align:0===s?I:s===g.length-1?V:B,verticalAlign:0===s?z:s===g.length-1?_:E,fill:w(A)?A("category"===i.type?S:"value"===i.type?c+"":c,s):A})});if(G.anid="label_"+c,y){var N=C.makeAxisEventDataBase(a);N.targetType="axisLabel",N.value=S,N.tickIndex=s,"category"===i.type&&(N.dataIndex=c),x(G).eventData=N}e.add(G),G.updateTransform(),p.push(G),t.add(G),G.decomposeTransform()})),p}(n,i,a,t);if(function(t,e,a){if(m(t.axis))return;var n=t.get(["axisLabel","showMinLabel"]),i=t.get(["axisLabel","showMaxLabel"]);e=e||[],a=a||[];var o=e[0],r=e[1],l=e[e.length-1],s=e[e.length-2],g=a[0],c=a[1],u=a[a.length-1],f=a[a.length-2];!1===n?(V(o),V(g)):E(o,r)&&(n?(V(r),V(c)):(V(o),V(g)));!1===i?(V(l),V(u)):E(s,l)&&(i?(V(s),V(f)):(V(l),V(u)))}(a,r,o),function(t,a,n,i){var o=n.axis,r=n.getModel("minorTick");if(!r.get("show")||o.scale.isBlank())return;var l=o.getMinorTicksCoords();if(!l.length)return;for(var s=r.getModel("lineStyle"),g=i*r.get("length"),c=e(s.getLineStyle(),e(n.getModel("axisTick").getLineStyle(),{stroke:n.get(["axisLine","lineStyle","color"])})),u=0;u<l.length;u++)for(var f=_(l[u],a.transform,g,c,"minorticks_"+u),d=0;d<f.length;d++)t.add(f[d])}(n,i,a,t.tickDirection),a.get(["axisLabel","hideOverlap"])){var l=A(c(r,(function(t){return{label:t,priority:t.z2,defaultAttr:{ignore:t.ignore}}})));D(l)}},axisName:function(t,e,a,n){var i=u(t.axisName,e.get("name"));if(i){var o,r,l=e.get("nameLocation"),s=t.nameDirection,g=e.getModel("nameTextStyle"),c=e.get("nameGap")||0,m=e.axis.getExtent(),p=m[0]>m[1]?-1:1,v=["start"===l?m[0]-p*c:"end"===l?m[1]+p*c:(m[0]+m[1])/2,z(l)?t.labelOffset+s*c:0],y=e.get("nameRotate");null!=y&&(y=y*B/180),z(l)?o=C.innerTextLayout(t.rotation,null!=y?y:t.rotation,s):(o=function(t,e,a,n){var i,o,r=S(a-t),l=n[0]>n[1],s="start"===e&&!l||"start"!==e&&l;k(r-B/2)?(o=s?"bottom":"top",i="center"):k(r-1.5*B)?(o=s?"top":"bottom",i="center"):(o="middle",i=r<1.5*B&&r>B/2?s?"left":"right":s?"right":"left");return{rotation:r,textAlign:i,textVerticalAlign:o}}(t.rotation,l,y||0,m),null!=(r=t.axisNameAvailableWidth)&&(r=Math.abs(r/Math.sin(o.rotation)),!isFinite(r)&&(r=null)));var b=g.getFont(),L=e.get("nameTruncate",!0)||{},T=L.ellipsis,w=u(t.nameTruncateMaxWidth,L.maxWidth,r),M=new f({x:v[0],y:v[1],rotation:o.rotation,silent:C.isLabelSilent(e),style:d(g,{text:i,font:b,overflow:"truncate",width:w,ellipsis:T,fill:g.getTextColor()||e.get(["axisLine","lineStyle","color"]),align:g.get("align")||o.textAlign,verticalAlign:g.get("verticalAlign")||o.textVerticalAlign}),z2:1});if(h({el:M,componentModel:e,itemName:i}),M.__fullText=i,M.anid="name",e.get("triggerEvent")){var A=C.makeAxisEventDataBase(e);A.targetType="axisName",A.name=i,x(M).eventData=A}n.add(M),M.updateTransform(),a.add(M),M.decomposeTransform()}}};function V(t){t&&(t.ignore=!0)}function E(t,e){var a=t&&t.getBoundingRect().clone(),n=e&&e.getBoundingRect().clone();if(a&&n){var i=p([]);return v(i,i,-t.rotation),a.applyTransform(y([],i,t.getLocalTransform())),n.applyTransform(y([],i,e.getLocalTransform())),a.intersect(n)}}function z(t){return"middle"===t||"center"===t}function _(t,e,n,r,l){for(var s=[],g=[],c=[],u=0;u<t.length;u++){var f=t[u].coord;g[0]=f,g[1]=0,c[0]=f,c[1]=n,e&&(a(g,g,e),a(c,c,e));var d=new i({shape:{x1:g[0],y1:g[1],x2:c[0],y2:c[1]},style:r,z2:2,autoBatch:!0,silent:!0});o(d.shape,d.style.lineWidth),d.anid=l+"_"+t[u].tickValue,s.push(d)}return s}export{C as A};
