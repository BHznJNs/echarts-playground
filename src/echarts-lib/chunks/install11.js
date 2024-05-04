import{_ as t,d as e,ab as o,aV as r,H as a,aW as n,G as s,aE as i,aX as l,ah as p,u as h,o as f,aY as u,aZ as d,a_ as c,P as y,g as _,M as g,C as m,a$ as v,b as C,aJ as S,aH as w,S as L,m as A,b0 as I}from"./index.js";import{a as D,L as b}from"./LineDraw.js";import{c as P}from"./createClipPathFromCoordSys.js";var T=function(s){function p(t,e,o){var r=s.call(this)||this;return r.add(r.createLine(t,e,o)),r._updateEffectSymbol(t,e),r}return t(p,s),p.prototype.createLine=function(t,e,o){return new D(t,e,o)},p.prototype._updateEffectSymbol=function(t,r){var a=t.getItemModel(r).getModel("effect"),n=a.get("symbolSize"),s=a.get("symbol");e(n)||(n=[n,n]);var i=t.getItemVisual(r,"style"),l=a.get("color")||i&&i.stroke,p=this.childAt(1);this._symbolType!==s&&(this.remove(p),(p=o(s,-.5,-.5,1,1,l)).z2=100,p.culling=!0,this.add(p)),p&&(p.setStyle("shadowColor",l),p.setStyle(a.getItemStyle(["color"])),p.scaleX=n[0],p.scaleY=n[1],p.setColor(l),this._symbolType=s,this._symbolScale=n,this._updateEffectAnimation(t,a,r))},p.prototype._updateEffectAnimation=function(t,e,o){var n=this.childAt(1);if(n){var s=t.getItemLayout(o),i=1e3*e.get("period"),l=e.get("loop"),p=e.get("roundTrip"),h=e.get("constantSpeed"),f=r(e.get("delay"),(function(e){return e/t.count()*i/3}));if(n.ignore=!0,this._updateAnimationPoints(n,s),h>0&&(i=this._getLineLength(n)/h*1e3),i!==this._period||l!==this._loop||p!==this._roundTrip){n.stopAnimation();var u=void 0;u=a(f)?f(o):f,n.__t>0&&(u=-i*n.__t),this._animateSymbol(n,i,u,l,p)}this._period=i,this._loop=l,this._roundTrip=p}},p.prototype._animateSymbol=function(t,e,o,r,a){if(e>0){t.__t=0;var n=this,s=t.animate("",r).when(a?2*e:e,{__t:a?2:1}).delay(o).during((function(){n._updateSymbolPosition(t)}));r||s.done((function(){n.remove(t)})),s.start()}},p.prototype._getLineLength=function(t){return n(t.__p1,t.__cp1)+n(t.__cp1,t.__p2)},p.prototype._updateAnimationPoints=function(t,e){t.__p1=e[0],t.__p2=e[1],t.__cp1=e[2]||[(e[0][0]+e[1][0])/2,(e[0][1]+e[1][1])/2]},p.prototype.updateData=function(t,e,o){this.childAt(0).updateData(t,e,o),this._updateEffectSymbol(t,e)},p.prototype._updateSymbolPosition=function(t){var e=t.__p1,o=t.__p2,r=t.__cp1,a=t.__t<1?t.__t:2-t.__t,s=[t.x,t.y],p=s.slice(),h=i,f=l;s[0]=h(e[0],r[0],o[0],a),s[1]=h(e[1],r[1],o[1],a);var u=t.__t<1?f(e[0],r[0],o[0],a):f(o[0],r[0],e[0],1-a),d=t.__t<1?f(e[1],r[1],o[1],a):f(o[1],r[1],e[1],1-a);t.rotation=-Math.atan2(d,u)-Math.PI/2,"line"!==this._symbolType&&"rect"!==this._symbolType&&"roundRect"!==this._symbolType||(void 0!==t.__lastT&&t.__lastT<t.__t?(t.scaleY=1.05*n(p,s),1===a&&(s[0]=p[0]+(s[0]-p[0])/2,s[1]=p[1]+(s[1]-p[1])/2)):1===t.__lastT?t.scaleY=2*n(e,s):t.scaleY=this._symbolScale[1]),t.__lastT=t.__t,t.ignore=!1,t.x=s[0],t.y=s[1]},p.prototype.updateLayout=function(t,e){this.childAt(0).updateLayout(t,e);var o=t.getItemModel(e).getModel("effect");this._updateEffectAnimation(t,o,e)},p}(s),M=function(e){function o(t,o,r){var a=e.call(this)||this;return a._createPolyline(t,o,r),a}return t(o,e),o.prototype._createPolyline=function(t,e,o){var r=t.getItemLayout(e),a=new p({shape:{points:r}});this.add(a),this._updateCommonStl(t,e,o)},o.prototype.updateData=function(t,e,o){var r=t.hostModel,a=this.childAt(0),n={shape:{points:t.getItemLayout(e)}};h(a,n,r,e),this._updateCommonStl(t,e,o)},o.prototype._updateCommonStl=function(t,e,o){var r=this.childAt(0),a=t.getItemModel(e),n=o&&o.emphasisLineStyle,s=o&&o.focus,i=o&&o.blurScope,l=o&&o.emphasisDisabled;if(!o||t.hasItemOption){var p=a.getModel("emphasis");n=p.getModel("lineStyle").getLineStyle(),l=p.get("disabled"),s=p.get("focus"),i=p.get("blurScope")}r.useStyle(t.getItemVisual(e,"style")),r.style.fill=null,r.style.strokeNoScale=!0,r.ensureState("emphasis").style=n,f(this,s,i,l)},o.prototype.updateLayout=function(t,e){this.childAt(0).setShape("points",t.getItemLayout(e))},o}(s),x=function(e){function o(){var t=null!==e&&e.apply(this,arguments)||this;return t._lastFrame=0,t._lastFramePercent=0,t}return t(o,e),o.prototype.createLine=function(t,e,o){return new M(t,e,o)},o.prototype._updateAnimationPoints=function(t,e){this._points=e;for(var o=[0],r=0,a=1;a<e.length;a++){var s=e[a-1],i=e[a];r+=n(s,i),o.push(r)}if(0!==r){for(a=0;a<o.length;a++)o[a]/=r;this._offsets=o,this._length=r}else this._length=0},o.prototype._getLineLength=function(){return this._length},o.prototype._updateSymbolPosition=function(t){var e=t.__t<1?t.__t:2-t.__t,o=this._points,r=this._offsets,a=o.length;if(r){var n,s=this._lastFrame;if(e<this._lastFramePercent){for(n=Math.min(s+1,a-1);n>=0&&!(r[n]<=e);n--);n=Math.min(n,a-2)}else{for(n=s;n<a&&!(r[n]>e);n++);n=Math.min(n-1,a-2)}var i=(e-r[n])/(r[n+1]-r[n]),l=o[n],p=o[n+1];t.x=l[0]*(1-i)+i*p[0],t.y=l[1]*(1-i)+i*p[1];var h=t.__t<1?p[0]-l[0]:l[0]-p[0],f=t.__t<1?p[1]-l[1]:l[1]-p[1];t.rotation=-Math.atan2(f,h)-Math.PI/2,this._lastFrame=n,this._lastFramePercent=e,t.ignore=!1}},o}(T),F=function(){this.polyline=!1,this.curveness=0,this.segs=[]},O=function(e){function o(t){var o=e.call(this,t)||this;return o._off=0,o.hoverDataIdx=-1,o}return t(o,e),o.prototype.reset=function(){this.notClear=!1,this._off=0},o.prototype.getDefaultStyle=function(){return{stroke:"#000",fill:null}},o.prototype.getDefaultShape=function(){return new F},o.prototype.buildPath=function(t,e){var o,r=e.segs,a=e.curveness;if(e.polyline)for(o=this._off;o<r.length;){var n=r[o++];if(n>0){t.moveTo(r[o++],r[o++]);for(var s=1;s<n;s++)t.lineTo(r[o++],r[o++])}}else for(o=this._off;o<r.length;){var i=r[o++],l=r[o++],p=r[o++],h=r[o++];if(t.moveTo(i,l),a>0){var f=(i+p)/2-(l-h)*a,u=(l+h)/2-(p-i)*a;t.quadraticCurveTo(f,u,p,h)}else t.lineTo(p,h)}this.incremental&&(this._off=o,this.notClear=!0)},o.prototype.findDataIndex=function(t,e){var o=this.shape,r=o.segs,a=o.curveness,n=this.style.lineWidth;if(o.polyline)for(var s=0,i=0;i<r.length;){var l=r[i++];if(l>0)for(var p=r[i++],h=r[i++],f=1;f<l;f++){var c=r[i++],y=r[i++];if(u(p,h,c,y,n,t,e))return s}s++}else for(s=0,i=0;i<r.length;){p=r[i++],h=r[i++],c=r[i++],y=r[i++];if(a>0){if(d(p,h,(p+c)/2-(h-y)*a,(h+y)/2-(c-p)*a,c,y,n,t,e))return s}else if(u(p,h,c,y,n,t,e))return s;s++}return-1},o.prototype.contain=function(t,e){var o=this.transformCoordToLocal(t,e),r=this.getBoundingRect();return t=o[0],e=o[1],r.contain(t,e)?(this.hoverDataIdx=this.findDataIndex(t,e))>=0:(this.hoverDataIdx=-1,!1)},o.prototype.getBoundingRect=function(){var t=this._rect;if(!t){for(var e=this.shape.segs,o=1/0,r=1/0,a=-1/0,n=-1/0,s=0;s<e.length;){var i=e[s++],l=e[s++];o=Math.min(i,o),a=Math.max(i,a),r=Math.min(l,r),n=Math.max(l,n)}t=this._rect=new c(o,r,a,n)}return t},o}(y),V=function(){function t(){this.group=new s}return t.prototype.updateData=function(t){this._clear();var e=this._create();e.setShape({segs:t.getLayout("linesPoints")}),this._setCommon(e,t)},t.prototype.incrementalPrepareUpdate=function(t){this.group.removeAll(),this._clear()},t.prototype.incrementalUpdate=function(t,e){var o=this._newAdded[0],r=e.getLayout("linesPoints"),a=o&&o.shape.segs;if(a&&a.length<2e4){var n=a.length,s=new Float32Array(n+r.length);s.set(a),s.set(r,n),o.setShape({segs:s})}else{this._newAdded=[];var i=this._create();i.incremental=!0,i.setShape({segs:r}),this._setCommon(i,e),i.__startIndex=t.start}},t.prototype.remove=function(){this._clear()},t.prototype.eachRendered=function(t){this._newAdded[0]&&t(this._newAdded[0])},t.prototype._create=function(){var t=new O({cursor:"default",ignoreCoarsePointer:!0});return this._newAdded.push(t),this.group.add(t),t},t.prototype._setCommon=function(t,e,o){var r=e.hostModel;t.setShape({polyline:r.get("polyline"),curveness:r.get(["lineStyle","curveness"])}),t.useStyle(r.getModel("lineStyle").getLineStyle()),t.style.strokeNoScale=!0;var a=e.getVisual("style");a&&a.stroke&&t.setStyle("stroke",a.stroke),t.setStyle("fill",null);var n=_(t);n.seriesIndex=r.seriesIndex,t.on("mousemove",(function(e){n.dataIndex=null;var o=t.hoverDataIdx;o>0&&(n.dataIndex=o+t.__startIndex)}))},t.prototype._clear=function(){this._newAdded=[],this.group.removeAll()},t}(),E={seriesType:"lines",plan:g(),reset:function(t){var e=t.coordinateSystem;if(e){var o=t.get("polyline"),r=t.pipelineContext.large;return{progress:function(a,n){var s=[];if(r){var i=void 0,l=a.end-a.start;if(o){for(var p=0,h=a.start;h<a.end;h++)p+=t.getLineCoordsCount(h);i=new Float32Array(l+2*p)}else i=new Float32Array(4*l);var f=0,u=[];for(h=a.start;h<a.end;h++){var d=t.getLineCoords(h,s);o&&(i[f++]=d);for(var c=0;c<d;c++)u=e.dataToPoint(s[c],!1,u),i[f++]=u[0],i[f++]=u[1]}n.setLayout("linesPoints",i)}else for(h=a.start;h<a.end;h++){var y=n.getItemModel(h),_=(d=t.getLineCoords(h,s),[]);if(o)for(var g=0;g<d;g++)_.push(e.dataToPoint(s[g]));else{_[0]=e.dataToPoint(s[0]),_[1]=e.dataToPoint(s[1]);var m=y.get(["lineStyle","curveness"]);+m&&(_[2]=[(_[0][0]+_[1][0])/2-(_[0][1]-_[1][1])*m,(_[0][1]+_[1][1])/2-(_[1][0]-_[0][0])*m])}n.setItemLayout(h,_)}}}}}},z=function(e){function o(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=o.type,t}return t(o,e),o.prototype.render=function(t,e,o){var r=t.getData(),a=this._updateLineDraw(r,t),n=t.get("zlevel"),s=t.get(["effect","trailLength"]),i=o.getZr(),l="svg"===i.painter.getType();l||i.painter.getLayer(n).clear(!0),null==this._lastZlevel||l||i.configLayer(this._lastZlevel,{motionBlur:!1}),this._showEffect(t)&&s>0&&(l||i.configLayer(n,{motionBlur:!0,lastFrameAlpha:Math.max(Math.min(s/10+.9,1),0)})),a.updateData(r);var p=t.get("clip",!0)&&P(t.coordinateSystem,!1,t);p?this.group.setClipPath(p):this.group.removeClipPath(),this._lastZlevel=n,this._finished=!0},o.prototype.incrementalPrepareRender=function(t,e,o){var r=t.getData();this._updateLineDraw(r,t).incrementalPrepareUpdate(r),this._clearLayer(o),this._finished=!1},o.prototype.incrementalRender=function(t,e,o){this._lineDraw.incrementalUpdate(t,e.getData()),this._finished=t.end===e.getData().count()},o.prototype.eachRendered=function(t){this._lineDraw&&this._lineDraw.eachRendered(t)},o.prototype.updateTransform=function(t,e,o){var r=t.getData(),a=t.pipelineContext;if(!this._finished||a.large||a.progressiveRender)return{update:!0};var n=E.reset(t,e,o);n.progress&&n.progress({start:0,end:r.count(),count:r.count()},r),this._lineDraw.updateLayout(),this._clearLayer(o)},o.prototype._updateLineDraw=function(t,e){var o=this._lineDraw,r=this._showEffect(e),a=!!e.get("polyline"),n=e.pipelineContext.large;return o&&r===this._hasEffet&&a===this._isPolyline&&n===this._isLargeDraw||(o&&o.remove(),o=this._lineDraw=n?new V:new b(a?r?x:M:r?T:D),this._hasEffet=r,this._isPolyline=a,this._isLargeDraw=n),this.group.add(o.group),o},o.prototype._showEffect=function(t){return!!t.get(["effect","show"])},o.prototype._clearLayer=function(t){var e=t.getZr();"svg"===e.painter.getType()||null==this._lastZlevel||e.painter.getLayer(this._lastZlevel).clear(!0)},o.prototype.remove=function(t,e){this._lineDraw&&this._lineDraw.remove(),this._lineDraw=null,this._clearLayer(e)},o.prototype.dispose=function(t,e){this.remove(t,e)},o.type="lines",o}(m),R="undefined"==typeof Uint32Array?Array:Uint32Array,k="undefined"==typeof Float64Array?Array:Float64Array;function Z(t){var e=t.data;e&&e[0]&&e[0][0]&&e[0][0].coord&&(t.data=A(e,(function(t){var e={coords:[t[0].coord,t[1].coord]};return t[0].name&&(e.fromName=t[0].name),t[1].name&&(e.toName=t[1].name),I([e,t[0],t[1]])})))}var N=function(e){function o(){var t=null!==e&&e.apply(this,arguments)||this;return t.type=o.type,t.visualStyleAccessPath="lineStyle",t.visualDrawType="stroke",t}return t(o,e),o.prototype.init=function(t){t.data=t.data||[],Z(t);var o=this._processFlatCoordsArray(t.data);this._flatCoords=o.flatCoords,this._flatCoordsOffset=o.flatCoordsOffset,o.flatCoords&&(t.data=new Float32Array(o.count)),e.prototype.init.apply(this,arguments)},o.prototype.mergeOption=function(t){if(Z(t),t.data){var o=this._processFlatCoordsArray(t.data);this._flatCoords=o.flatCoords,this._flatCoordsOffset=o.flatCoordsOffset,o.flatCoords&&(t.data=new Float32Array(o.count))}e.prototype.mergeOption.apply(this,arguments)},o.prototype.appendData=function(t){var e=this._processFlatCoordsArray(t.data);e.flatCoords&&(this._flatCoords?(this._flatCoords=v(this._flatCoords,e.flatCoords),this._flatCoordsOffset=v(this._flatCoordsOffset,e.flatCoordsOffset)):(this._flatCoords=e.flatCoords,this._flatCoordsOffset=e.flatCoordsOffset),t.data=new Float32Array(e.count)),this.getRawData().appendData(t.data)},o.prototype._getCoordsFromItemModel=function(t){var e=this.getData().getItemModel(t);return e.option instanceof Array?e.option:e.getShallow("coords")},o.prototype.getLineCoordsCount=function(t){return this._flatCoordsOffset?this._flatCoordsOffset[2*t+1]:this._getCoordsFromItemModel(t).length},o.prototype.getLineCoords=function(t,e){if(this._flatCoordsOffset){for(var o=this._flatCoordsOffset[2*t],r=this._flatCoordsOffset[2*t+1],a=0;a<r;a++)e[a]=e[a]||[],e[a][0]=this._flatCoords[o+2*a],e[a][1]=this._flatCoords[o+2*a+1];return r}var n=this._getCoordsFromItemModel(t);for(a=0;a<n.length;a++)e[a]=e[a]||[],e[a][0]=n[a][0],e[a][1]=n[a][1];return n.length},o.prototype._processFlatCoordsArray=function(t){var e=0;if(this._flatCoords&&(e=this._flatCoords.length),C(t[0])){for(var o=t.length,r=new R(o),a=new k(o),n=0,s=0,i=0,l=0;l<o;){i++;var p=t[l++];r[s++]=n+e,r[s++]=p;for(var h=0;h<p;h++){var f=t[l++],u=t[l++];a[n++]=f,a[n++]=u}}return{flatCoordsOffset:new Uint32Array(r.buffer,0,s),flatCoords:a,count:i}}return{flatCoordsOffset:null,flatCoords:null,count:t.length}},o.prototype.getInitialData=function(t,e){var o=new S(["value"],this);return o.hasItemOption=!1,o.initData(t.data,[],(function(t,e,r,a){if(t instanceof Array)return NaN;o.hasItemOption=!0;var n=t.value;return null!=n?n instanceof Array?n[a]:n:void 0})),o},o.prototype.formatTooltip=function(t,e,o){var r=this.getData().getItemModel(t),a=r.get("name");if(a)return a;var n=r.get("fromName"),s=r.get("toName"),i=[];return null!=n&&i.push(n),null!=s&&i.push(s),w("nameValue",{name:i.join(" > ")})},o.prototype.preventIncremental=function(){return!!this.get(["effect","show"])},o.prototype.getProgressive=function(){var t=this.option.progressive;return null==t?this.option.large?1e4:this.get("progressive"):t},o.prototype.getProgressiveThreshold=function(){var t=this.option.progressiveThreshold;return null==t?this.option.large?2e4:this.get("progressiveThreshold"):t},o.prototype.getZLevelKey=function(){var t=this.getModel("effect"),e=t.get("trailLength");return this.getData().count()>this.getProgressiveThreshold()?this.id:t.get("show")&&e>0?e+"":""},o.type="series.lines",o.dependencies=["grid","polar","geo","calendar"],o.defaultOption={coordinateSystem:"geo",z:2,legendHoverLink:!0,xAxisIndex:0,yAxisIndex:0,symbol:["none","none"],symbolSize:[10,10],geoIndex:0,effect:{show:!1,period:4,constantSpeed:0,symbol:"circle",symbolSize:3,loop:!0,trailLength:.2},large:!1,largeThreshold:2e3,polyline:!1,clip:!0,label:{show:!1,position:"end"},lineStyle:{opacity:.5}},o}(L);function U(t){return t instanceof Array||(t=[t,t]),t}var Y={seriesType:"lines",reset:function(t){var e=U(t.get("symbol")),o=U(t.get("symbolSize")),r=t.getData();return r.setVisual("fromSymbol",e&&e[0]),r.setVisual("toSymbol",e&&e[1]),r.setVisual("fromSymbolSize",o&&o[0]),r.setVisual("toSymbolSize",o&&o[1]),{dataEach:r.hasItemOption?function(t,e){var o=t.getItemModel(e),r=U(o.getShallow("symbol",!0)),a=U(o.getShallow("symbolSize",!0));r[0]&&t.setItemVisual(e,"fromSymbol",r[0]),r[1]&&t.setItemVisual(e,"toSymbol",r[1]),a[0]&&t.setItemVisual(e,"fromSymbolSize",a[0]),a[1]&&t.setItemVisual(e,"toSymbolSize",a[1])}:null}}};function j(t){t.registerChartView(z),t.registerSeriesModel(N),t.registerLayout(E),t.registerVisual(Y)}export{j as install};
