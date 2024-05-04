import{e as O,C as V,N as g,g as A,b7 as Z,as as w,o as N,$ as z,O as L,T as E,V as M,b8 as B,b9 as b,E as F,ba as k,P as U}from"./index-DqzYUymv.js";import{n as $}from"./sliderMove-mmwzGRlj.js";var C=["x","y","radius","angle","single"],q=["cartesian2d","polar","singleAxis"];function v(s){return s+"Axis"}function Y(s,o){var t,e=A(),n=[],i=A();s.eachComponent({mainType:"dataZoom",query:o},function(r){i.get(r.uid)||u(r)});do t=!1,s.eachComponent("dataZoom",a);while(t);function a(r){!i.get(r.uid)&&function(p){var c=!1;return p.eachTargetAxis(function(h,l){var d=e.get(h);d&&d[l]&&(c=!0)}),c}(r)&&(u(r),t=!0)}function u(r){i.set(r.uid,!0),n.push(r),r.eachTargetAxis(function(p,c){(e.get(p)||e.set(p,[]))[c]=!0})}return n}function K(s){var o=s.ecModel,t={infoList:[],infoMap:A()};return s.eachTargetAxis(function(e,n){var i=o.getComponent(v(e),n);if(i){var a=i.getCoordSysModel();if(a){var u=a.uid,r=t.infoMap.get(u);r||(r={model:a,axisModels:[]},t.infoList.push(r),t.infoMap.set(u,r)),r.axisModels.push(i)}}}),t}var T=function(){function s(){this.indexList=[],this.indexMap=[]}return s.prototype.add=function(o){this.indexMap[o]||(this.indexList.push(o),this.indexMap[o]=!0)},s}(),Q=function(s){function o(){var t=s!==null&&s.apply(this,arguments)||this;return t.type=o.type,t._autoThrottle=!0,t._noTarget=!0,t._rangePropMode=["percent","percent"],t}return O(o,s),o.prototype.init=function(t,e,n){var i=D(t);this.settledOption=i,this.mergeDefaultAndTheme(t,n),this._doInit(i)},o.prototype.mergeOption=function(t){var e=D(t);V(this.option,t,!0),V(this.settledOption,e,!0),this._doInit(e)},o.prototype._doInit=function(t){var e=this.option;this._setDefaultThrottle(t),this._updateRangeUse(t);var n=this.settledOption;g([["start","startValue"],["end","endValue"]],function(i,a){this._rangePropMode[a]==="value"&&(e[i[0]]=n[i[0]]=null)},this),this._resetTarget()},o.prototype._resetTarget=function(){var t=this.get("orient",!0),e=this._targetAxisInfoMap=A();this._fillSpecifiedTargetAxis(e)?this._orient=t||this._makeAutoOrientByTargetAxis():(this._orient=t||"horizontal",this._fillAutoTargetAxisByOrient(e,this._orient)),this._noTarget=!0,e.each(function(n){n.indexList.length&&(this._noTarget=!1)},this)},o.prototype._fillSpecifiedTargetAxis=function(t){var e=!1;return g(C,function(n){var i=this.getReferringComponents(v(n),Z);if(i.specified){e=!0;var a=new T;g(i.models,function(u){a.add(u.componentIndex)}),t.set(n,a)}},this),e},o.prototype._fillAutoTargetAxisByOrient=function(t,e){var n=this.ecModel,i=!0;if(i){var a=e==="vertical"?"y":"x";u(n.findComponents({mainType:a+"Axis"}),a)}i&&u(n.findComponents({mainType:"singleAxis",filter:function(r){return r.get("orient",!0)===e}}),"single");function u(r,p){var c=r[0];if(c){var h=new T;if(h.add(c.componentIndex),t.set(p,h),i=!1,p==="x"||p==="y"){var l=c.getReferringComponents("grid",w).models[0];l&&g(r,function(d){c.componentIndex!==d.componentIndex&&l===d.getReferringComponents("grid",w).models[0]&&h.add(d.componentIndex)})}}}i&&g(C,function(r){if(i){var p=n.findComponents({mainType:v(r),filter:function(h){return h.get("type",!0)==="category"}});if(p[0]){var c=new T;c.add(p[0].componentIndex),t.set(r,c),i=!1}}},this)},o.prototype._makeAutoOrientByTargetAxis=function(){var t;return this.eachTargetAxis(function(e){!t&&(t=e)},this),t==="y"?"vertical":"horizontal"},o.prototype._setDefaultThrottle=function(t){if(t.hasOwnProperty("throttle")&&(this._autoThrottle=!1),this._autoThrottle){var e=this.ecModel.option;this.option.throttle=e.animation&&e.animationDurationUpdate>0?100:20}},o.prototype._updateRangeUse=function(t){var e=this._rangePropMode,n=this.get("rangeMode");g([["start","startValue"],["end","endValue"]],function(i,a){var u=t[i[0]]!=null,r=t[i[1]]!=null;u&&!r?e[a]="percent":!u&&r?e[a]="value":n?e[a]=n[a]:u&&(e[a]="percent")})},o.prototype.noTarget=function(){return this._noTarget},o.prototype.getFirstTargetAxisModel=function(){var t;return this.eachTargetAxis(function(e,n){t==null&&(t=this.ecModel.getComponent(v(e),n))},this),t},o.prototype.eachTargetAxis=function(t,e){this._targetAxisInfoMap.each(function(n,i){g(n.indexList,function(a){t.call(e,i,a)})})},o.prototype.getAxisProxy=function(t,e){var n=this.getAxisModel(t,e);if(n)return n.__dzAxisProxy},o.prototype.getAxisModel=function(t,e){var n=this._targetAxisInfoMap.get(t);if(n&&n.indexMap[e])return this.ecModel.getComponent(v(t),e)},o.prototype.setRawRange=function(t){var e=this.option,n=this.settledOption;g([["start","startValue"],["end","endValue"]],function(i){t[i[0]]==null&&t[i[1]]==null||(e[i[0]]=n[i[0]]=t[i[0]],e[i[1]]=n[i[1]]=t[i[1]])},this),this._updateRangeUse(t)},o.prototype.setCalculatedRange=function(t){var e=this.option;g(["start","startValue","end","endValue"],function(n){e[n]=t[n]})},o.prototype.getPercentRange=function(){var t=this.findRepresentativeAxisProxy();if(t)return t.getDataPercentWindow()},o.prototype.getValueRange=function(t,e){if(t!=null||e!=null)return this.getAxisProxy(t,e).getDataValueWindow();var n=this.findRepresentativeAxisProxy();return n?n.getDataValueWindow():void 0},o.prototype.findRepresentativeAxisProxy=function(t){if(t)return t.__dzAxisProxy;for(var e,n=this._targetAxisInfoMap.keys(),i=0;i<n.length;i++)for(var a=n[i],u=this._targetAxisInfoMap.get(a),r=0;r<u.indexList.length;r++){var p=this.getAxisProxy(a,u.indexList[r]);if(p.hostedBy(this))return p;e||(e=p)}return e},o.prototype.getRangePropMode=function(){return this._rangePropMode.slice()},o.prototype.getOrient=function(){return this._orient},o.type="dataZoom",o.dependencies=["xAxis","yAxis","radiusAxis","angleAxis","singleAxis","series","toolbox"],o.defaultOption={z:4,filterMode:"filter",start:0,end:100},o}(N);function D(s){var o={};return g(["start","end","startValue","endValue","throttle"],function(t){s.hasOwnProperty(t)&&(o[t]=s[t])}),o}var X=function(s){function o(){var t=s!==null&&s.apply(this,arguments)||this;return t.type=o.type,t}return O(o,s),o.prototype.render=function(t,e,n,i){this.dataZoomModel=t,this.ecModel=e,this.api=n},o.type="dataZoom",o}(z),_=g,I=U,j=function(){function s(o,t,e,n){this._dimName=o,this._axisIndex=t,this.ecModel=n,this._dataZoomModel=e}return s.prototype.hostedBy=function(o){return this._dataZoomModel===o},s.prototype.getDataValueWindow=function(){return this._valueWindow.slice()},s.prototype.getDataPercentWindow=function(){return this._percentWindow.slice()},s.prototype.getTargetSeriesModels=function(){var o=[];return this.ecModel.eachSeries(function(t){if(function(i){var a=i.get("coordinateSystem");return L(q,a)>=0}(t)){var e=v(this._dimName),n=t.getReferringComponents(e,w).models[0];n&&this._axisIndex===n.componentIndex&&o.push(t)}},this),o},s.prototype.getAxisModel=function(){return this.ecModel.getComponent(this._dimName+"Axis",this._axisIndex)},s.prototype.getMinMaxSpan=function(){return E(this._minMaxSpan)},s.prototype.calculateDataWindow=function(o){var t,e=this._dataExtent,n=this.getAxisModel().axis.scale,i=this._dataZoomModel.getRangePropMode(),a=[0,100],u=[],r=[];_(["start","end"],function(h,l){var d=o[h],f=o[h+"Value"];i[l]==="percent"?(d==null&&(d=a[l]),f=n.parse(M(d,a,e))):(t=!0,f=f==null?e[l]:n.parse(f),d=M(f,e,a)),r[l]=f==null||isNaN(f)?e[l]:f,u[l]=d==null||isNaN(d)?a[l]:d}),I(r),I(u);var p=this._minMaxSpan;function c(h,l,d,f,m){var y=m?"Span":"ValueSpan";$(0,h,d,"all",p["min"+y],p["max"+y]);for(var x=0;x<2;x++)l[x]=M(h[x],d,f,!0),m&&(l[x]=n.parse(l[x]))}return t?c(r,u,e,a,!1):c(u,r,a,e,!0),{valueWindow:r,percentWindow:u}},s.prototype.reset=function(o){if(o===this._dataZoomModel){var t=this.getTargetSeriesModels();this._dataExtent=function(n,i,a){var u=[1/0,-1/0];_(a,function(c){B(u,c.getData(),i)});var r=n.getAxisModel(),p=b(r.axis.scale,r,u).calculate();return[p.min,p.max]}(this,this._dimName,t),this._updateMinMaxSpan();var e=this.calculateDataWindow(o.settledOption);this._valueWindow=e.valueWindow,this._percentWindow=e.percentWindow,this._setAxisModel()}},s.prototype.filterData=function(o,t){if(o===this._dataZoomModel){var e=this._dimName,n=this.getTargetSeriesModels(),i=o.get("filterMode"),a=this._valueWindow;i!=="none"&&_(n,function(u){var r=u.getData(),p=r.mapDimensionsAll(e);if(p.length){if(i==="weakFilter"){var c=r.getStore(),h=F(p,function(l){return r.getDimensionIndex(l)},r);r.filterSelf(function(l){for(var d,f,m,y=0;y<p.length;y++){var x=c.get(h[y],l),P=!isNaN(x),R=x<a[0],S=x>a[1];if(P&&!R&&!S)return!0;P&&(m=!0),R&&(d=!0),S&&(f=!0)}return m&&d&&f})}else _(p,function(l){if(i==="empty")u.setData(r=r.map(l,function(f){return function(m){return m>=a[0]&&m<=a[1]}(f)?f:NaN}));else{var d={};d[l]=a,r.selectRange(d)}});_(p,function(l){r.setApproximateExtent(a,l)})}})}},s.prototype._updateMinMaxSpan=function(){var o=this._minMaxSpan={},t=this._dataZoomModel,e=this._dataExtent;_(["min","max"],function(n){var i=t.get(n+"Span"),a=t.get(n+"ValueSpan");a!=null&&(a=this.getAxisModel().axis.scale.parse(a)),a!=null?i=M(e[0]+a,e,[0,100],!0):i!=null&&(a=M(i,[0,100],e,!0)-e[0]),o[n+"Span"]=i,o[n+"ValueSpan"]=a},this)},s.prototype._setAxisModel=function(){var o=this.getAxisModel(),t=this._percentWindow,e=this._valueWindow;if(t){var n=k(e,[0,500]);n=Math.min(n,20);var i=o.axis.scale.rawExtentInfo;t[0]!==0&&i.setDeterminedMinMax("min",+e[0].toFixed(n)),t[1]!==100&&i.setDeterminedMinMax("max",+e[1].toFixed(n)),i.freeze()}},s}(),G={getTargetSeries:function(s){function o(n){s.eachComponent("dataZoom",function(i){i.eachTargetAxis(function(a,u){var r=s.getComponent(v(a),u);n(a,u,r,i)})})}o(function(n,i,a,u){a.__dzAxisProxy=null});var t=[];o(function(n,i,a,u){a.__dzAxisProxy||(a.__dzAxisProxy=new j(n,i,u,s),t.push(a.__dzAxisProxy))});var e=A();return g(t,function(n){g(n.getTargetSeriesModels(),function(i){e.set(i.uid,i)})}),e},overallReset:function(s,o){s.eachComponent("dataZoom",function(t){t.eachTargetAxis(function(e,n){t.getAxisProxy(e,n).reset(t)}),t.eachTargetAxis(function(e,n){t.getAxisProxy(e,n).filterData(t,o)})}),s.eachComponent("dataZoom",function(t){var e=t.findRepresentativeAxisProxy();if(e){var n=e.getDataPercentWindow(),i=e.getDataValueWindow();t.setCalculatedRange({start:n[0],end:n[1],startValue:i[0],endValue:i[1]})}})}},W=!1;function tt(s){W||(W=!0,s.registerProcessor(s.PRIORITY.PROCESSOR.FILTER,G),function(o){o.registerAction("dataZoom",function(t,e){var n=Y(e,t);g(n,function(i){i.setRawRange({start:t.start,end:t.end,startValue:t.startValue,endValue:t.endValue})})})}(s),s.registerSubTypeDefaulter("dataZoom",function(){return"slider"}))}export{tt as C,K as M,X as P,Q as T,v as y};
