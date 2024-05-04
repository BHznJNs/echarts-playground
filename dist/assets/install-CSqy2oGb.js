import{e as U,bI as se,N as de,bJ as le,X as fe,bK as me,bL as F,ab as z,bM as ye,bN as ve,bO as j,A as be,E as Ae,a8 as Z,bP as xe,d as ue,D as he,bQ as q,bR as _e,al as Ie,ap as Se,j as we,bS as ke,bT as Le,bU as Me,bV as Re,bW as De,a2 as Ce,bX as Oe,bY as Ee,aC as ce}from"./index-DqzYUymv.js";import{i as Te}from"./dataSample-BbvOlvts.js";import{h as Pe}from"./createClipPathFromCoordSys-CxyqMHqa.js";import{e as Q}from"./sausage-BE4wg7Pr.js";import{t as ge}from"./CoordinateSystem-JCzg9rRI.js";import{r as Ne,a as Ve}from"./labelHelper--rZLAm30.js";import{u as ze}from"./sectorHelper-CetS_CSv.js";var H=function(n){function t(){var e=n!==null&&n.apply(this,arguments)||this;return e.type=t.type,e}return U(t,n),t.prototype.getInitialData=function(e,r){return se(null,this,{useEncodeDefaulter:!0})},t.prototype.getMarkerPosition=function(e,r,a){var i=this.coordinateSystem;if(i&&i.clampData){var o=i.clampData(e),l=i.dataToPoint(o);if(a)de(i.getAxes(),function(A,I){if(A.type==="category"&&r!=null){var x=A.getTicksCoords(),V=A.getTickModel().get("alignWithLabel"),S=o[I],M=r[I]==="x1"||r[I]==="y1";if(M&&!V&&(S+=1),x.length<2)return;if(x.length===2)return void(l[I]=A.toGlobalCoord(A.getExtent()[M?1:0]));for(var v=void 0,w=void 0,P=1,y=0;y<x.length;y++){var k=x[y].coord,_=y===x.length-1?x[y-1].tickValue+P:x[y].tickValue;if(_===S){w=k;break}if(_<S)v=k;else if(v!=null&&_>S){w=(k+v)/2;break}y===1&&(P=_-x[0].tickValue)}w==null&&(v?v&&(w=x[x.length-1].coord):w=x[0].coord),l[I]=A.toGlobalCoord(w)}});else{var d=this.getData(),h=d.getLayout("offset"),s=d.getLayout("size"),p=i.getBaseAxis().isHorizontal()?0:1;l[p]+=h+s/2}return l}return[NaN,NaN]},t.type="series.__base_bar__",t.defaultOption={z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,barMinHeight:0,barMinAngle:0,large:!1,largeThreshold:400,progressive:3e3,progressiveChunkMode:"mod"},t}(le);le.registerClass(H);var We=function(n){function t(){var e=n!==null&&n.apply(this,arguments)||this;return e.type=t.type,e}return U(t,n),t.prototype.getInitialData=function(){return se(null,this,{useEncodeDefaulter:!0,createInvertedIndices:!!this.get("realtimeSort",!0)||null})},t.prototype.getProgressive=function(){return!!this.get("large")&&this.get("progressive")},t.prototype.getProgressiveThreshold=function(){var e=this.get("progressiveThreshold"),r=this.get("largeThreshold");return r>e&&(e=r),e},t.prototype.brushSelector=function(e,r,a){return a.rect(r.getItemLayout(e))},t.type="series.bar",t.dependencies=["grid","polar"],t.defaultOption=fe(H.defaultOption,{clip:!0,roundCap:!1,showBackground:!1,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)",borderColor:null,borderWidth:0,borderType:"solid",borderRadius:0,shadowBlur:0,shadowColor:null,shadowOffsetX:0,shadowOffsetY:0,opacity:1},select:{itemStyle:{borderColor:"#212121"}},realtimeSort:!1}),t}(H);function W(n,t,e){return t*Math.sin(n)*(e?-1:1)}function B(n,t,e){return t*Math.cos(n)*(e?1:-1)}var X=Math.max,Y=Math.min,Be=function(n){function t(){var e=n.call(this)||this;return e.type=t.type,e._isFirstFrame=!0,e}return U(t,n),t.prototype.render=function(e,r,a,i){this._model=e,this._removeOnRenderedListener(a),this._updateDrawMode(e);var o=e.get("coordinateSystem");o!=="cartesian2d"&&o!=="polar"||(this._progressiveEls=null,this._isLargeDraw?this._renderLarge(e,r,a):this._renderNormal(e,r,a,i))},t.prototype.incrementalPrepareRender=function(e){this._clear(),this._updateDrawMode(e),this._updateLargeClip(e)},t.prototype.incrementalRender=function(e,r){this._progressiveEls=[],this._incrementalRenderLarge(e,r)},t.prototype.eachRendered=function(e){me(this._progressiveEls||this.group,e)},t.prototype._updateDrawMode=function(e){var r=e.pipelineContext.large;this._isLargeDraw!=null&&r===this._isLargeDraw||(this._isLargeDraw=r,this._clear())},t.prototype._renderNormal=function(e,r,a,i){var o,l=this.group,d=e.getData(),h=this._data,s=e.coordinateSystem,p=s.getBaseAxis();s.type==="cartesian2d"?o=p.isHorizontal():s.type==="polar"&&(o=p.dim==="angle");var A=e.isAnimationEnabled()?e:null,I=function(u,c){var g=u.get("realtimeSort",!0),f=c.getBaseAxis();if(g&&f.type==="category"&&c.type==="cartesian2d")return{baseAxis:f,otherAxis:c.getOtherAxis(f)}}(e,s);I&&this._enableRealtimeSort(I,d,a);var x=e.get("clip",!0)||I,V=function(u,c){var g=u.getArea&&u.getArea();if(ge(u,"cartesian2d")){var f=u.getBaseAxis();if(f.type!=="category"||!f.onBand){var m=c.getLayout("bandWidth");f.isHorizontal()?(g.x-=m,g.width+=2*m):(g.y-=m,g.height+=2*m)}}return g}(s,d);l.removeClipPath();var S=e.get("roundCap",!0),M=e.get("showBackground",!0),v=e.getModel("backgroundStyle"),w=v.get("borderRadius")||0,P=[],y=this._backgroundEls,k=i&&i.isInitSort,_=i&&i.type==="changeAxisOrder";function L(u){var c=G[s.type](d,u),g=function(f,m,D){var C=f.type==="polar"?ce:ue;return new C({shape:oe(m,D,f),silent:!0,z2:0})}(s,o,c);return g.useStyle(v.getItemStyle()),s.type==="cartesian2d"?g.setShape("r",w):g.setShape("cornerRadius",w),P[u]=g,g}d.diff(h).add(function(u){var c=d.getItemModel(u),g=G[s.type](d,u,c);if(M&&L(u),d.hasValue(u)&&te[s.type](g)){var f=!1;x&&(f=J[s.type](V,g));var m=K[s.type](e,d,u,g,o,A,p.model,!1,S);I&&(m.forceLabelAnimation=!0),re(m,d,u,c,g,e,o,s.type==="polar"),k?m.attr({shape:g}):I?$(I,A,m,g,u,o,!1,!1):F(m,{shape:g},e,u),d.setItemGraphicEl(u,m),l.add(m),m.ignore=f}}).update(function(u,c){var g=d.getItemModel(u),f=G[s.type](d,u,g);if(M){var m=void 0;y.length===0?m=L(c):((m=y[c]).useStyle(v.getItemStyle()),s.type==="cartesian2d"?m.setShape("r",w):m.setShape("cornerRadius",w),P[u]=m);var D=G[s.type](d,u),C=oe(o,D,s);z(m,{shape:C},A,u)}var b=h.getItemGraphicEl(c);if(d.hasValue(u)&&te[s.type](f)){var E=!1;if(x&&(E=J[s.type](V,f))&&l.remove(b),b?ye(b):b=K[s.type](e,d,u,f,o,A,p.model,!!b,S),I&&(b.forceLabelAnimation=!0),_){var T=b.getTextContent();if(T){var O=ve(T);O.prevValue!=null&&(O.prevValue=O.value)}}else re(b,d,u,g,f,e,o,s.type==="polar");k?b.attr({shape:f}):I?$(I,A,b,f,u,o,!0,_):z(b,{shape:f},e,u,null),d.setItemGraphicEl(u,b),b.ignore=E,l.add(b)}else l.remove(b)}).remove(function(u){var c=h.getItemGraphicEl(u);c&&j(c,e,u)}).execute();var R=this._backgroundGroup||(this._backgroundGroup=new be);R.removeAll();for(var N=0;N<P.length;++N)R.add(P[N]);l.add(R),this._backgroundEls=P,this._data=d},t.prototype._renderLarge=function(e,r,a){this._clear(),ne(e,this.group),this._updateLargeClip(e)},t.prototype._incrementalRenderLarge=function(e,r){this._removeBackground(),ne(r,this.group,this._progressiveEls,!0)},t.prototype._updateLargeClip=function(e){var r=e.get("clip",!0)&&Pe(e.coordinateSystem,!1,e),a=this.group;r?a.setClipPath(r):a.removeClipPath()},t.prototype._enableRealtimeSort=function(e,r,a){var i=this;if(r.count()){var o=e.baseAxis;if(this._isFirstFrame)this._dispatchInitSort(r,e,a),this._isFirstFrame=!1;else{var l=function(d){var h=r.getItemGraphicEl(d),s=h&&h.shape;return s&&Math.abs(o.isHorizontal()?s.height:s.width)||0};this._onRendered=function(){i._updateSortWithinSameData(r,l,o,a)},a.getZr().on("rendered",this._onRendered)}}},t.prototype._dataSort=function(e,r,a){var i=[];return e.each(e.mapDimension(r.dim),function(o,l){var d=a(l);d=d??NaN,i.push({dataIndex:l,mappedValue:d,ordinalNumber:o})}),i.sort(function(o,l){return l.mappedValue-o.mappedValue}),{ordinalNumbers:Ae(i,function(o){return o.ordinalNumber})}},t.prototype._isOrderChangedWithinSameData=function(e,r,a){for(var i=a.scale,o=e.mapDimension(a.dim),l=Number.MAX_VALUE,d=0,h=i.getOrdinalMeta().categories.length;d<h;++d){var s=e.rawIndexOf(o,i.getRawOrdinalNumber(d)),p=s<0?Number.MIN_VALUE:r(e.indexOfRawIndex(s));if(p>l)return!0;l=p}return!1},t.prototype._isOrderDifferentInView=function(e,r){for(var a=r.scale,i=a.getExtent(),o=Math.max(0,i[0]),l=Math.min(i[1],a.getOrdinalMeta().categories.length-1);o<=l;++o)if(e.ordinalNumbers[o]!==a.getRawOrdinalNumber(o))return!0},t.prototype._updateSortWithinSameData=function(e,r,a,i){if(this._isOrderChangedWithinSameData(e,r,a)){var o=this._dataSort(e,a,r);this._isOrderDifferentInView(o,a)&&(this._removeOnRenderedListener(i),i.dispatchAction({type:"changeAxisOrder",componentType:a.dim+"Axis",axisId:a.index,sortInfo:o}))}},t.prototype._dispatchInitSort=function(e,r,a){var i=r.baseAxis,o=this._dataSort(e,i,function(l){return e.get(e.mapDimension(r.otherAxis.dim),l)});a.dispatchAction({type:"changeAxisOrder",componentType:i.dim+"Axis",isInitSort:!0,axisId:i.index,sortInfo:o})},t.prototype.remove=function(e,r){this._clear(this._model),this._removeOnRenderedListener(r)},t.prototype.dispose=function(e,r){this._removeOnRenderedListener(r)},t.prototype._removeOnRenderedListener=function(e){this._onRendered&&(e.getZr().off("rendered",this._onRendered),this._onRendered=null)},t.prototype._clear=function(e){var r=this.group,a=this._data;e&&e.isAnimationEnabled()&&a&&!this._isLargeDraw?(this._removeBackground(),this._backgroundEls=[],a.eachItemGraphicEl(function(i){j(i,e,Z(i).dataIndex)})):r.removeAll(),this._data=null,this._isFirstFrame=!0},t.prototype._removeBackground=function(){this.group.remove(this._backgroundGroup),this._backgroundGroup=null},t.type="bar",t}(xe),J={cartesian2d:function(n,t){var e=t.width<0?-1:1,r=t.height<0?-1:1;e<0&&(t.x+=t.width,t.width=-t.width),r<0&&(t.y+=t.height,t.height=-t.height);var a=n.x+n.width,i=n.y+n.height,o=X(t.x,n.x),l=Y(t.x+t.width,a),d=X(t.y,n.y),h=Y(t.y+t.height,i),s=l<o,p=h<d;return t.x=s&&o>a?l:o,t.y=p&&d>i?h:d,t.width=s?0:l-o,t.height=p?0:h-d,e<0&&(t.x+=t.width,t.width=-t.width),r<0&&(t.y+=t.height,t.height=-t.height),s||p},polar:function(n,t){var e=t.r0<=t.r?1:-1;if(e<0){var r=t.r;t.r=t.r0,t.r0=r}var a=Y(t.r,n.r),i=X(t.r0,n.r0);t.r=a,t.r0=i;var o=a-i<0;return e<0&&(r=t.r,t.r=t.r0,t.r0=r),o}},K={cartesian2d:function(n,t,e,r,a,i,o,l,d){var h=new ue({shape:he({},r),z2:1});return h.__dataIndex=e,h.name="item",i&&(h.shape[a?"height":"width"]=0),h},polar:function(n,t,e,r,a,i,o,l,d){var h=!a&&d?Q:ce,s=new h({shape:r,z2:1});s.name="item";var p,A,I=pe(a);if(s.calculateTextPosition=(p=I,A=h===Q,function(S,M,v){var w=M.position;if(!w||w instanceof Array)return q(S,M,v);var P=p(w),y=M.distance!=null?M.distance:5,k=this.shape,_=k.cx,L=k.cy,R=k.r,N=k.r0,u=(R+N)/2,c=k.startAngle,g=k.endAngle,f=(c+g)/2,m=A?Math.abs(R-N)/2:0,D=Math.cos,C=Math.sin,b=_+R*D(c),E=L+R*C(c),T="left",O="top";switch(P){case"startArc":b=_+(N-y)*D(f),E=L+(N-y)*C(f),T="center",O="top";break;case"insideStartArc":b=_+(N+y)*D(f),E=L+(N+y)*C(f),T="center",O="bottom";break;case"startAngle":b=_+u*D(c)+W(c,y+m,!1),E=L+u*C(c)+B(c,y+m,!1),T="right",O="middle";break;case"insideStartAngle":b=_+u*D(c)+W(c,-y+m,!1),E=L+u*C(c)+B(c,-y+m,!1),T="left",O="middle";break;case"middle":b=_+u*D(f),E=L+u*C(f),T="center",O="middle";break;case"endArc":b=_+(R+y)*D(f),E=L+(R+y)*C(f),T="center",O="bottom";break;case"insideEndArc":b=_+(R-y)*D(f),E=L+(R-y)*C(f),T="center",O="top";break;case"endAngle":b=_+u*D(g)+W(g,y+m,!0),E=L+u*C(g)+B(g,y+m,!0),T="left",O="middle";break;case"insideEndAngle":b=_+u*D(g)+W(g,-y+m,!0),E=L+u*C(g)+B(g,-y+m,!0),T="right",O="middle";break;default:return q(S,M,v)}return(S=S||{}).x=b,S.y=E,S.align=T,S.verticalAlign=O,S}),i){var x=a?"r":"endAngle",V={};s.shape[x]=a?r.r0:r.startAngle,V[x]=r[x],(l?z:F)(s,{shape:V},i)}return s}};function $(n,t,e,r,a,i,o,l){var d,h;i?(h={x:r.x,width:r.width},d={y:r.y,height:r.height}):(h={y:r.y,height:r.height},d={x:r.x,width:r.width}),l||(o?z:F)(e,{shape:d},t,a,null);var s=t?n.baseAxis.model:null;(o?z:F)(e,{shape:h},s,a)}function ee(n,t){for(var e=0;e<t.length;e++)if(!isFinite(n[t[e]]))return!0;return!1}var Ge=["x","y","width","height"],Fe=["cx","cy","r","startAngle","endAngle"],te={cartesian2d:function(n){return!ee(n,Ge)},polar:function(n){return!ee(n,Fe)}},G={cartesian2d:function(n,t,e){var r=n.getItemLayout(t),a=e?function(l,d){var h=l.get(["itemStyle","borderColor"]);if(!h||h==="none")return 0;var s=l.get(["itemStyle","borderWidth"])||0,p=isNaN(d.width)?Number.MAX_VALUE:Math.abs(d.width),A=isNaN(d.height)?Number.MAX_VALUE:Math.abs(d.height);return Math.min(s,p,A)}(e,r):0,i=r.width>0?1:-1,o=r.height>0?1:-1;return{x:r.x+i*a/2,y:r.y+o*a/2,width:r.width-i*a,height:r.height-o*a}},polar:function(n,t,e){var r=n.getItemLayout(t);return{cx:r.cx,cy:r.cy,r0:r.r0,r:r.r,startAngle:r.startAngle,endAngle:r.endAngle,clockwise:r.clockwise}}};function pe(n){return function(t){var e=t?"Arc":"Angle";return function(r){switch(r){case"start":case"insideStart":case"end":case"insideEnd":return r+e;default:return r}}}(n)}function re(n,t,e,r,a,i,o,l){var d=t.getItemVisual(e,"style");if(l){if(!i.get("roundCap")){var h=n.shape,s=ze(r.getModel("itemStyle"),h,!0);he(h,s),n.setShape(h)}}else{var p=r.get(["itemStyle","borderRadius"])||0;n.setShape("r",p)}n.useStyle(d);var A=r.getShallow("cursor");A&&n.attr("cursor",A);var I=l?o?a.r>=a.r0?"endArc":"startArc":a.endAngle>=a.startAngle?"endAngle":"startAngle":o?a.height>=0?"bottom":"top":a.width>=0?"right":"left",x=_e(r);Ie(n,x,{labelFetcher:i,labelDataIndex:e,defaultText:Ne(i.getData(),e),inheritColor:d.fill,defaultOpacity:d.opacity,defaultOutsidePosition:I});var V=n.getTextContent();if(l&&V){var S=r.get(["label","position"]);n.textConfig.inside=S==="middle"||null,function(v,w,P,y){if(Se(y))v.setTextConfig({rotation:y});else if(we(w))v.setTextConfig({rotation:0});else{var k,_=v.shape,L=_.clockwise?_.startAngle:_.endAngle,R=_.clockwise?_.endAngle:_.startAngle,N=(L+R)/2,u=P(w);switch(u){case"startArc":case"insideStartArc":case"middle":case"insideEndArc":case"endArc":k=N;break;case"startAngle":case"insideStartAngle":k=L;break;case"endAngle":case"insideEndAngle":k=R;break;default:return void v.setTextConfig({rotation:0})}var c=1.5*Math.PI-k;u==="middle"&&c>Math.PI/2&&c<1.5*Math.PI&&(c-=Math.PI),v.setTextConfig({rotation:c})}}(n,S==="outside"?I:S,pe(o),r.get(["label","rotate"]))}ke(V,x,i.getRawValue(e),function(v){return Ve(t,v)});var M=r.getModel(["emphasis"]);Le(n,M.get("focus"),M.get("blurScope"),M.get("disabled")),Me(n,r),function(v){return v.startAngle!=null&&v.endAngle!=null&&v.startAngle===v.endAngle}(a)&&(n.style.fill="none",n.style.stroke="none",de(n.states,function(v){v.style&&(v.style.fill=v.style.stroke="none")}))}var Ue=function(){},ae=function(n){function t(e){var r=n.call(this,e)||this;return r.type="largeBar",r}return U(t,n),t.prototype.getDefaultShape=function(){return new Ue},t.prototype.buildPath=function(e,r){for(var a=r.points,i=this.baseDimIdx,o=1-this.baseDimIdx,l=[],d=[],h=this.barWidth,s=0;s<a.length;s+=3)d[i]=h,d[o]=a[s+2],l[i]=a[s+i],l[o]=a[s+o],e.rect(l[0],l[1],d[0],d[1])},t}(Re);function ne(n,t,e,r){var a=n.getData(),i=a.getLayout("valueAxisHorizontal")?1:0,o=a.getLayout("largeDataIndices"),l=a.getLayout("size"),d=n.getModel("backgroundStyle"),h=a.getLayout("largeBackgroundPoints");if(h){var s=new ae({shape:{points:h},incremental:!!r,silent:!0,z2:0});s.baseDimIdx=i,s.largeDataIndices=o,s.barWidth=l,s.useStyle(d.getItemStyle()),t.add(s),e&&e.push(s)}var p=new ae({shape:{points:a.getLayout("largePoints")},incremental:!!r,ignoreCoarsePointer:!0,z2:1});p.baseDimIdx=i,p.largeDataIndices=o,p.barWidth=l,t.add(p),p.useStyle(a.getVisual("style")),Z(p).seriesIndex=n.seriesIndex,n.get("silent")||(p.on("mousedown",ie),p.on("mousemove",ie)),e&&e.push(p)}var ie=De(function(n){var t=function(e,r,a){for(var i=e.baseDimIdx,o=1-i,l=e.shape.points,d=e.largeDataIndices,h=[],s=[],p=e.barWidth,A=0,I=l.length/3;A<I;A++){var x=3*A;if(s[i]=p,s[o]=l[x+2],h[i]=l[x+i],h[o]=l[x+o],s[o]<0&&(h[o]+=s[o],s[o]=-s[o]),r>=h[0]&&r<=h[0]+s[0]&&a>=h[1]&&a<=h[1]+s[1])return d[A]}return-1}(this,n.offsetX,n.offsetY);Z(this).dataIndex=t>=0?t:null},30,!1);function oe(n,t,e){if(ge(e,"cartesian2d")){var r=t,a=e.getArea();return{x:n?r.x:a.x,y:n?a.y:r.y,width:n?r.width:a.width,height:n?a.height:r.height}}var i=t;return{cx:(a=e.getArea()).cx,cy:a.cy,r0:n?a.r0:i.r0,r:n?a.r:i.r,startAngle:n?i.startAngle:0,endAngle:n?i.endAngle:2*Math.PI}}var Xe=Be;function Ke(n){n.registerChartView(Xe),n.registerSeriesModel(We),n.registerLayout(n.PRIORITY.VISUAL.LAYOUT,Ce(Oe,"bar")),n.registerLayout(n.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT,Ee("bar")),n.registerProcessor(n.PRIORITY.PROCESSOR.STATISTIC,Te("bar")),n.registerAction({type:"changeAxisOrder",event:"changeAxisOrder",update:"update"},function(t,e){var r=t.componentType||"series";e.eachComponent({mainType:r,query:t},function(a){t.sortInfo&&a.axis.setCategorySortInfo(t.sortInfo)})})}export{Ke as install};
