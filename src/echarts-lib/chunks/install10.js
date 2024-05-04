import{_ as e,c as t,G as i,ab as n,S as a,m as o,aN as s,b as r,O as l,aO as h,f as p,X as u,p as d,g as c,o as g,aP as m,C as f,aQ as y,H as v,a6 as _,k as b,j as S,aR as x,l as w,u as D,e as I,aS as N,aT as k,aU as L}from"./index.js";import{S as O}from"./SymbolDraw.js";import{S as A}from"./Symbol.js";import{E as P,a as C}from"./poly.js";import{a as M,b as T}from"./createClipPathFromCoordSys.js";import{i as E}from"./CoordinateSystem.js";import{a as G,g as R}from"./labelHelper.js";import{p as V}from"./points.js";import{d as z}from"./dataSample.js";var H=function(a){function o(){var e=null!==a&&a.apply(this,arguments)||this;return e.type=o.type,e.hasSymbolVisual=!0,e}return e(o,a),o.prototype.getInitialData=function(e){return t(null,this,{useEncodeDefaulter:!0})},o.prototype.getLegendIcon=function(e){var t=new i,a=n("line",0,e.itemHeight/2,e.itemWidth,0,e.lineStyle.stroke,!1);t.add(a),a.setStyle(e.lineStyle);var o=this.getData().getVisual("symbol"),s=this.getData().getVisual("symbolRotate"),r="none"===o?"circle":o,l=.8*e.itemHeight,h=n(r,(e.itemWidth-l)/2,(e.itemHeight-l)/2,l,l,e.itemStyle.fill);t.add(h),h.setStyle(e.itemStyle);var p="inherit"===e.iconRotate?s:e.iconRotate||0;return h.rotation=p*Math.PI/180,h.setOrigin([e.itemWidth/2,e.itemHeight/2]),r.indexOf("empty")>-1&&(h.style.stroke=h.style.fill,h.style.fill="#fff",h.style.lineWidth=2),t},o.type="series.line",o.dependencies=["grid","polar"],o.defaultOption={z:3,coordinateSystem:"cartesian2d",legendHoverLink:!0,clip:!0,label:{position:"top"},endLabel:{show:!1,valueAnimation:!0,distance:8},lineStyle:{width:2,type:"solid"},emphasis:{scale:!0},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:"auto",connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0,universalTransition:{divideShape:"clone"},triggerLineEvent:!1},o}(a);function F(e,t,i){var n=e.getBaseAxis(),a=e.getOtherAxis(n),l=function(e,t){var i=0,n=e.scale.getExtent();"start"===t?i=n[0]:"end"===t?i=n[1]:r(t)&&!isNaN(t)?i=t:n[0]>0?i=n[0]:n[1]<0&&(i=n[1]);return i}(a,i),h=n.dim,p=a.dim,u=t.mapDimension(p),d=t.mapDimension(h),c="x"===p||"radius"===p?1:0,g=o(e.dimensions,(function(e){return t.mapDimension(e)})),m=!1,f=t.getCalculationInfo("stackResultDimension");return s(t,g[0])&&(m=!0,g[0]=f),s(t,g[1])&&(m=!0,g[1]=f),{dataDimsForPoint:g,valueStart:l,valueAxisDim:p,baseAxisDim:h,stacked:!!m,valueDim:u,baseDim:d,baseDataOffset:c,stackedOverDimension:t.getCalculationInfo("stackedOverDimension")}}function j(e,t,i,n){var a=NaN;e.stacked&&(a=i.get(i.getCalculationInfo("stackedOverDimension"),n)),isNaN(a)&&(a=e.valueStart);var o=e.baseDataOffset,s=[];return s[o]=i.get(e.baseDim,n),s[1-o]=a,t.dataToPoint(s)}function W(e,t){if(e.length===t.length){for(var i=0;i<e.length;i++)if(e[i]!==t[i])return;return!0}}function B(e){for(var t=1/0,i=1/0,n=-1/0,a=-1/0,o=0;o<e.length;){var s=e[o++],r=e[o++];isNaN(s)||(t=Math.min(s,t),n=Math.max(s,n)),isNaN(r)||(i=Math.min(r,i),a=Math.max(r,a))}return[[t,i],[n,a]]}function X(e,t){var i=B(e),n=i[0],a=i[1],o=B(t),s=o[0],r=o[1];return Math.max(Math.abs(n[0]-s[0]),Math.abs(n[1]-s[1]),Math.abs(a[0]-r[0]),Math.abs(a[1]-r[1]))}function U(e){return r(e)?e:e?.5:0}function Y(e,t,i,n){var a=t.getBaseAxis(),o="x"===a.dim||"radius"===a.dim?0:1,s=[],r=0,l=[],h=[],p=[],u=[];if(n){for(r=0;r<e.length;r+=2)isNaN(e[r])||isNaN(e[r+1])||u.push(e[r],e[r+1]);e=u}for(r=0;r<e.length-2;r+=2)switch(p[0]=e[r+2],p[1]=e[r+3],h[0]=e[r],h[1]=e[r+1],s.push(h[0],h[1]),i){case"end":l[o]=p[o],l[1-o]=h[1-o],s.push(l[0],l[1]);break;case"middle":var d=(h[o]+p[o])/2,c=[];l[o]=c[o]=d,l[1-o]=h[1-o],c[1-o]=p[1-o],s.push(l[0],l[1]),s.push(c[0],c[1]);break;default:l[o]=h[o],l[1-o]=p[1-o],s.push(l[0],l[1])}return s.push(e[r++],e[r++]),s}function J(e,t,i){var n=e.getVisual("visualMeta");if(n&&n.length&&e.count()&&"cartesian2d"===t.type){for(var a,s,r=n.length-1;r>=0;r--){var l=e.getDimensionInfo(n[r].dimension);if("x"===(a=l&&l.coordDim)||"y"===a){s=n[r];break}}if(s){var h=t.getAxis(a),p=o(s.stops,(function(e){return{coord:h.toGlobalCoord(h.dataToCoord(e.value)),color:e.color}})),u=p.length,d=s.outerColors.slice();u&&p[0].coord>p[u-1].coord&&(p.reverse(),d.reverse());var c=function(e,t){var i,n,a=[],o=e.length;function s(e,t,i){var n=e.coord,a=(i-n)/(t.coord-n);return{coord:i,color:L(a,[e.color,t.color])}}for(var r=0;r<o;r++){var l=e[r],h=l.coord;if(h<0)i=l;else{if(h>t){n?a.push(s(n,l,t)):i&&a.push(s(i,l,0),s(i,l,t));break}i&&(a.push(s(i,l,0)),i=null),a.push(l),n=l}}return a}(p,"x"===a?i.getWidth():i.getHeight()),g=c.length;if(!g&&u)return p[0].coord<0?d[1]?d[1]:p[u-1].color:d[0]?d[0]:p[0].color;var m=c[0].coord-10,f=c[g-1].coord+10,y=f-m;if(y<.001)return"transparent";I(c,(function(e){e.offset=(e.coord-m)/y})),c.push({offset:g?c[g-1].offset:.5,color:d[1]||"transparent"}),c.unshift({offset:g?c[0].offset:.5,color:d[0]||"transparent"});var v=new N(0,0,0,0,c,!0);return v[a]=m,v[a+"2"]=f,v}}}function Q(e,t,i){var n=e.get("showAllSymbol"),a="auto"===n;if(!n||a){var o=i.getAxesByScale("ordinal")[0];if(o&&(!a||!function(e,t){var i=e.getExtent(),n=Math.abs(i[1]-i[0])/e.scale.count();isNaN(n)&&(n=0);for(var a=t.count(),o=Math.max(1,Math.round(a/5)),s=0;s<a;s+=o)if(1.5*A.getSymbolSize(t,s)[e.isHorizontal()?1:0]>n)return!1;return!0}(o,t))){var s=t.mapDimension(o.dim),r={};return I(o.getViewLabels(),(function(e){var t=o.scale.getRawOrdinalNumber(e.tickValue);r[t]=1})),function(e){return!r.hasOwnProperty(t.get(s,e))}}}}function Z(e,t){return[e[2*t],e[2*t+1]]}function q(e){if(e.get(["endLabel","show"]))return!0;for(var t=0;t<k.length;t++)if(e.get([k[t],"endLabel","show"]))return!0;return!1}function K(e,t,i,n){if(E(t,"cartesian2d")){var a=n.getModel("endLabel"),o=a.get("valueAnimation"),s=n.getData(),r={lastFrameIndex:0},l=q(n)?function(i,n){e._endLabelOnDuring(i,n,s,r,o,a,t)}:null,h=t.getBaseAxis().isHorizontal(),p=M(t,i,n,(function(){var t=e._endLabel;t&&i&&null!=r.originalX&&t.attr({x:r.originalX,y:r.originalY})}),l);if(!n.get("clip",!0)){var u=p.shape,d=Math.max(u.width,u.height);h?(u.y-=d,u.height+=2*d):(u.x-=d,u.width+=2*d)}return l&&l(1,p),p}return T(t,i,n)}var $=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.init=function(){var e=new i,t=new O;this.group.add(t.group),this._symbolDraw=t,this._lineGroup=e},n.prototype.render=function(e,t,i){var n=this,a=e.coordinateSystem,o=this.group,s=e.getData(),r=e.getModel("lineStyle"),m=e.getModel("areaStyle"),f=s.getLayout("points")||[],y="polar"===a.type,v=this._coordSys,_=this._symbolDraw,b=this._polyline,S=this._polygon,x=this._lineGroup,w=!t.ssr&&e.get("animation"),D=!m.isEmpty(),I=m.get("origin"),N=F(a,s,I),k=D&&function(e,t,i){if(!i.valueDim)return[];for(var n=t.count(),a=l(2*n),o=0;o<n;o++){var s=j(i,e,t,o);a[2*o]=s[0],a[2*o+1]=s[1]}return a}(a,s,N),L=e.get("showSymbol"),O=e.get("connectNulls"),A=L&&!y&&Q(e,s,a),P=this._data;P&&P.eachItemGraphicEl((function(e,t){e.__temp&&(o.remove(e),P.setItemGraphicEl(t,null))})),L||_.remove(),o.add(x);var C,M=!y&&e.get("step");a&&a.getArea&&e.get("clip",!0)&&(null!=(C=a.getArea()).width?(C.x-=.1,C.y-=.1,C.width+=.2,C.height+=.2):C.r0&&(C.r0-=.5,C.r+=.5)),this._clipShapeForSymbol=C;var T=J(s,a,i)||s.getVisual("style")[s.getVisual("drawType")];if(b&&v.type===a.type&&M===this._step){D&&!S?S=this._newPolygon(f,k):S&&!D&&(x.remove(S),S=this._polygon=null),y||this._initOrUpdateEndLabel(e,a,h(T));var E=x.getClipPath();if(E){var G=K(this,a,!1,e);p(E,{shape:G.shape},e)}else x.setClipPath(K(this,a,!0,e));L&&_.updateData(s,{isIgnore:A,clipShape:C,disableAnimation:!0,getSymbolPoint:function(e){return[f[2*e],f[2*e+1]]}}),W(this._stackedOnPoints,k)&&W(this._points,f)||(w?this._doUpdateAnimation(s,k,a,i,M,I,O):(M&&(f=Y(f,a,M,O),k&&(k=Y(k,a,M,O))),b.setShape({points:f}),S&&S.setShape({points:f,stackedOnPoints:k})))}else L&&_.updateData(s,{isIgnore:A,clipShape:C,disableAnimation:!0,getSymbolPoint:function(e){return[f[2*e],f[2*e+1]]}}),w&&this._initSymbolLabelAnimation(s,a,C),M&&(f=Y(f,a,M,O),k&&(k=Y(k,a,M,O))),b=this._newPolyline(f),D?S=this._newPolygon(f,k):S&&(x.remove(S),S=this._polygon=null),y||this._initOrUpdateEndLabel(e,a,h(T)),x.setClipPath(K(this,a,!0,e));var R=e.getModel("emphasis"),V=R.get("focus"),z=R.get("blurScope"),H=R.get("disabled");(b.useStyle(u(r.getLineStyle(),{fill:"none",stroke:T,lineJoin:"bevel"})),d(b,e,"lineStyle"),b.style.lineWidth>0&&"bolder"===e.get(["emphasis","lineStyle","width"]))&&(b.getState("emphasis").style.lineWidth=+b.style.lineWidth+1);c(b).seriesIndex=e.seriesIndex,g(b,V,z,H);var B=U(e.get("smooth")),X=e.get("smoothMonotone");if(b.setShape({smooth:B,smoothMonotone:X,connectNulls:O}),S){var Z=s.getCalculationInfo("stackedOnSeries"),q=0;S.useStyle(u(m.getAreaStyle(),{fill:T,opacity:.7,lineJoin:"bevel",decal:s.getVisual("style").decal})),Z&&(q=U(Z.get("smooth"))),S.setShape({smooth:B,stackedOnSmooth:q,smoothMonotone:X,connectNulls:O}),d(S,e,"areaStyle"),c(S).seriesIndex=e.seriesIndex,g(S,V,z,H)}var $=function(e){n._changePolyState(e)};s.eachItemGraphicEl((function(e){e&&(e.onHoverStateChange=$)})),this._polyline.onHoverStateChange=$,this._data=s,this._coordSys=a,this._stackedOnPoints=k,this._points=f,this._step=M,this._valueOrigin=I,e.get("triggerLineEvent")&&(this.packEventData(e,b),S&&this.packEventData(e,S))},n.prototype.packEventData=function(e,t){c(t).eventData={componentType:"series",componentSubType:"line",componentIndex:e.componentIndex,seriesIndex:e.seriesIndex,seriesName:e.name,seriesType:"line"}},n.prototype.highlight=function(e,t,i,n){var a=e.getData(),o=m(a,n);if(this._changePolyState("emphasis"),!(o instanceof Array)&&null!=o&&o>=0){var s=a.getLayout("points"),r=a.getItemGraphicEl(o);if(!r){var l=s[2*o],h=s[2*o+1];if(isNaN(l)||isNaN(h))return;if(this._clipShapeForSymbol&&!this._clipShapeForSymbol.contain(l,h))return;var p=e.get("zlevel")||0,u=e.get("z")||0;(r=new A(a,o)).x=l,r.y=h,r.setZ(p,u);var d=r.getSymbolPath().getTextContent();d&&(d.zlevel=p,d.z=u,d.z2=this._polyline.z2+1),r.__temp=!0,a.setItemGraphicEl(o,r),r.stopSymbolAnimation(!0),this.group.add(r)}r.highlight()}else f.prototype.highlight.call(this,e,t,i,n)},n.prototype.downplay=function(e,t,i,n){var a=e.getData(),o=m(a,n);if(this._changePolyState("normal"),null!=o&&o>=0){var s=a.getItemGraphicEl(o);s&&(s.__temp?(a.setItemGraphicEl(o,null),this.group.remove(s)):s.downplay())}else f.prototype.downplay.call(this,e,t,i,n)},n.prototype._changePolyState=function(e){var t=this._polygon;y(this._polyline,e),t&&y(t,e)},n.prototype._newPolyline=function(e){var t=this._polyline;return t&&this._lineGroup.remove(t),t=new P({shape:{points:e},segmentIgnoreThreshold:2,z2:10}),this._lineGroup.add(t),this._polyline=t,t},n.prototype._newPolygon=function(e,t){var i=this._polygon;return i&&this._lineGroup.remove(i),i=new C({shape:{points:e,stackedOnPoints:t},segmentIgnoreThreshold:2}),this._lineGroup.add(i),this._polygon=i,i},n.prototype._initSymbolLabelAnimation=function(e,t,i){var n,a,o=t.getBaseAxis(),s=o.inverse;"cartesian2d"===t.type?(n=o.isHorizontal(),a=!1):"polar"===t.type&&(n="angle"===o.dim,a=!0);var r=e.hostModel,l=r.get("animationDuration");v(l)&&(l=l(null));var h=r.get("animationDelay")||0,p=v(h)?h(null):h;e.eachItemGraphicEl((function(e,o){var r=e;if(r){var u=[e.x,e.y],d=void 0,c=void 0,g=void 0;if(i)if(a){var m=i,f=t.pointToCoord(u);n?(d=m.startAngle,c=m.endAngle,g=-f[1]/180*Math.PI):(d=m.r0,c=m.r,g=f[0])}else{var y=i;n?(d=y.x,c=y.x+y.width,g=e.x):(d=y.y+y.height,c=y.y,g=e.y)}var _=c===d?0:(g-d)/(c-d);s&&(_=1-_);var b=v(h)?h(o):l*_+p,S=r.getSymbolPath(),x=S.getTextContent();r.attr({scaleX:0,scaleY:0}),r.animateTo({scaleX:1,scaleY:1},{duration:200,setToFinal:!0,delay:b}),x&&x.animateFrom({style:{opacity:0}},{duration:300,delay:b}),S.disableLabelAnimation=!0}}))},n.prototype._initOrUpdateEndLabel=function(e,t,i){var n=e.getModel("endLabel");if(q(e)){var a=e.getData(),o=this._polyline,s=a.getLayout("points");if(!s)return o.removeTextContent(),void(this._endLabel=null);var r=this._endLabel;r||((r=this._endLabel=new _({z2:200})).ignoreClip=!0,o.setTextContent(this._endLabel),o.disableLabelAnimation=!0);var l=function(e){for(var t,i,n=e.length/2;n>0&&(t=e[2*n-2],i=e[2*n-1],isNaN(t)||isNaN(i));n--);return n-1}(s);l>=0&&(b(o,S(e,"endLabel"),{inheritColor:i,labelFetcher:e,labelDataIndex:l,defaultText:function(e,t,i){return null!=i?G(a,i):R(a,e)},enableTextSetter:!0},function(e,t){var i=t.getBaseAxis(),n=i.isHorizontal(),a=i.inverse,o=n?a?"right":"left":"center",s=n?"middle":a?"top":"bottom";return{normal:{align:e.get("align")||o,verticalAlign:e.get("verticalAlign")||s}}}(n,t)),o.textConfig.position=null)}else this._endLabel&&(this._polyline.removeTextContent(),this._endLabel=null)},n.prototype._endLabelOnDuring=function(e,t,i,n,a,o,s){var r=this._endLabel,l=this._polyline;if(r){e<1&&null==n.originalX&&(n.originalX=r.x,n.originalY=r.y);var h=i.getLayout("points"),p=i.hostModel,u=p.get("connectNulls"),d=o.get("precision"),c=o.get("distance")||0,g=s.getBaseAxis(),m=g.isHorizontal(),f=g.inverse,y=t.shape,v=f?m?y.x:y.y+y.height:m?y.x+y.width:y.y,_=(m?c:0)*(f?-1:1),b=(m?0:-c)*(f?-1:1),S=m?"x":"y",D=function(e,t,i){for(var n,a,o=e.length/2,s="x"===i?0:1,r=0,l=-1,h=0;h<o;h++)if(a=e[2*h+s],!isNaN(a)&&!isNaN(e[2*h+1-s]))if(0!==h){if(n<=t&&a>=t||n>=t&&a<=t){l=h;break}r=h,n=a}else n=a;return{range:[r,l],t:(t-n)/(a-n)}}(h,v,S),I=D.range,N=I[1]-I[0],k=void 0;if(N>=1){if(N>1&&!u){var L=Z(h,I[0]);r.attr({x:L[0]+_,y:L[1]+b}),a&&(k=p.getRawValue(I[0]))}else{(L=l.getPointOn(v,S))&&r.attr({x:L[0]+_,y:L[1]+b});var O=p.getRawValue(I[0]),A=p.getRawValue(I[1]);a&&(k=x(i,d,O,A,D.t))}n.lastFrameIndex=I[0]}else{var P=1===e||n.lastFrameIndex>0?I[0]:0;L=Z(h,P);a&&(k=p.getRawValue(P)),r.attr({x:L[0]+_,y:L[1]+b})}if(a){var C=w(r);"function"==typeof C.setLabelText&&C.setLabelText(k)}}},n.prototype._doUpdateAnimation=function(e,t,i,n,a,o,s){var r=this._polyline,h=this._polygon,p=e.hostModel,u=function(e,t,i,n,a,o,s,r){for(var h=function(e,t){var i=[];return t.diff(e).add((function(e){i.push({cmd:"+",idx:e})})).update((function(e,t){i.push({cmd:"=",idx:t,idx1:e})})).remove((function(e){i.push({cmd:"-",idx:e})})).execute(),i}(e,t),p=[],u=[],d=[],c=[],g=[],m=[],f=[],y=F(a,t,s),v=e.getLayout("points")||[],_=t.getLayout("points")||[],b=0;b<h.length;b++){var S=h[b],x=!0,w=void 0,D=void 0;switch(S.cmd){case"=":w=2*S.idx,D=2*S.idx1;var I=v[w],N=v[w+1],k=_[D],L=_[D+1];(isNaN(I)||isNaN(N))&&(I=k,N=L),p.push(I,N),u.push(k,L),d.push(i[w],i[w+1]),c.push(n[D],n[D+1]),f.push(t.getRawIndex(S.idx1));break;case"+":var O=S.idx,A=y.dataDimsForPoint,P=a.dataToPoint([t.get(A[0],O),t.get(A[1],O)]);D=2*O,p.push(P[0],P[1]),u.push(_[D],_[D+1]);var C=j(y,a,t,O);d.push(C[0],C[1]),c.push(n[D],n[D+1]),f.push(t.getRawIndex(O));break;case"-":x=!1}x&&(g.push(S),m.push(m.length))}m.sort((function(e,t){return f[e]-f[t]}));var M=p.length,T=l(M),E=l(M),G=l(M),R=l(M),V=[];for(b=0;b<m.length;b++){var z=m[b],H=2*b,W=2*z;T[H]=p[W],T[H+1]=p[W+1],E[H]=u[W],E[H+1]=u[W+1],G[H]=d[W],G[H+1]=d[W+1],R[H]=c[W],R[H+1]=c[W+1],V[b]=g[z]}return{current:T,next:E,stackedOnCurrent:G,stackedOnNext:R,status:V}}(this._data,e,this._stackedOnPoints,t,this._coordSys,0,this._valueOrigin),d=u.current,c=u.stackedOnCurrent,g=u.next,m=u.stackedOnNext;if(a&&(d=Y(u.current,i,a,s),c=Y(u.stackedOnCurrent,i,a,s),g=Y(u.next,i,a,s),m=Y(u.stackedOnNext,i,a,s)),X(d,g)>3e3||h&&X(c,m)>3e3)return r.stopAnimation(),r.setShape({points:g}),void(h&&(h.stopAnimation(),h.setShape({points:g,stackedOnPoints:m})));r.shape.__points=u.current,r.shape.points=d;var f={shape:{points:g}};u.current!==d&&(f.shape.__points=u.next),r.stopAnimation(),D(r,f,p),h&&(h.setShape({points:d,stackedOnPoints:c}),h.stopAnimation(),D(h,{shape:{stackedOnPoints:m}},p),r.shape.points!==h.shape.points&&(h.shape.points=r.shape.points));for(var y=[],v=u.status,_=0;_<v.length;_++){if("="===v[_].cmd){var b=e.getItemGraphicEl(v[_].idx1);b&&y.push({el:b,ptIdx:_})}}r.animators&&r.animators.length&&r.animators[0].during((function(){h&&h.dirtyShape();for(var e=r.shape.__points,t=0;t<y.length;t++){var i=y[t].el,n=2*y[t].ptIdx;i.x=e[n],i.y=e[n+1],i.markRedraw()}}))},n.prototype.remove=function(e){var t=this.group,i=this._data;this._lineGroup.removeAll(),this._symbolDraw.remove(!0),i&&i.eachItemGraphicEl((function(e,n){e.__temp&&(t.remove(e),i.setItemGraphicEl(n,null))})),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._endLabel=this._data=null},n.type="line",n}(f);function ee(e){e.registerChartView($),e.registerSeriesModel(H),e.registerLayout(V("line",!0)),e.registerVisual({seriesType:"line",reset:function(e){var t=e.getData(),i=e.getModel("lineStyle").getLineStyle();i&&!i.stroke&&(i.stroke=t.getVisual("style").fill),t.setVisual("legendLineStyle",i)}}),e.registerProcessor(e.PRIORITY.PROCESSOR.STATISTIC,z("line"))}export{ee as install};
