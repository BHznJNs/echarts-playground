import{e as B,B as j,r as F,bL as M,A as T,bM as w,ab as C,I as _,bU as L,N as P,ah as H,D as O,T as Y,al as J,bR as Q,bT as U,bP as X,H as V,dx as Z,aP as k,E as N,bJ as q,Y as K,dy as W,j as G,ax as tt,aT as et,L as at}from"./index-DqzYUymv.js";import{e as it}from"./dataFilter-_M4AusE-.js";import{s as rt}from"./createSeriesDataSimply-Dbw0MyfP.js";import{t as ot}from"./LegendVisualProvider-B8AjwPa5.js";import{install as nt}from"./install34-CRqHnDo4.js";import"./axisDefault--AiVwrJc.js";import"./AxisBuilder-BvSfZ_CI.js";import"./axisAlignTicks-D_xBRTER.js";import"./labelLayoutHelper-C9kjGaZq.js";function st(t){t.eachSeriesByType("radar",function(a){var e=a.getData(),i=[],m=a.coordinateSystem;if(m){var h=m.getIndicatorAxes();P(h,function(d,o){e.each(e.mapDimension(h[o].dim),function(g,v){i[v]=i[v]||[];var I=m.dataToPoint(g,o);i[v][o]=z(I)?I:$(m)})}),e.each(function(d){var o=W(i[d],function(g){return z(g)})||$(m);i[d].push(o.slice()),e.setItemLayout(d,i[d])})}})}function z(t){return!isNaN(t[0])&&!isNaN(t[1])}function $(t){return[t.cx,t.cy]}function lt(t){var a=t.polar;if(a){G(a)||(a=[a]);var e=[];P(a,function(i,m){i.indicator?(i.type&&!i.shape&&(i.shape=i.type),t.radar=t.radar||[],G(t.radar)||(t.radar=[t.radar]),t.radar.push(i)):e.push(i)}),t.polar=e}P(t.series,function(i){i&&i.type==="radar"&&i.polarIndex&&(i.radarIndex=i.polarIndex)})}var dt=function(t){function a(){var e=t!==null&&t.apply(this,arguments)||this;return e.type=a.type,e}return B(a,t),a.prototype.render=function(e,i,m){var h=e.coordinateSystem,d=this.group,o=e.getData(),g=this._data;function v(r,n){var s=r.getItemVisual(n,"symbol")||"circle";if(s!=="none"){var p=et(r.getItemVisual(n,"symbolSize")),c=at(s,-1,-1,2,2),y=r.getItemVisual(n,"symbolRotate")||0;return c.attr({style:{strokeNoScale:!0},z2:100,scaleX:p[0]/2,scaleY:p[1]/2,rotation:y*Math.PI/180||0}),c}}function I(r,n,s,p,c,y){s.removeAll();for(var l=0;l<n.length-1;l++){var f=v(p,c);f&&(f.__dimIdx=l,r[l]?(f.setPosition(r[l]),tt[y?"initProps":"updateProps"](f,{x:n[l][0],y:n[l][1]},e,c)):f.setPosition(n[l]),s.add(f))}}function b(r){return N(r,function(n){return[h.cx,h.cy]})}o.diff(g).add(function(r){var n=o.getItemLayout(r);if(n){var s=new j,p=new F,c={shape:{points:n}};s.shape.points=b(n),p.shape.points=b(n),M(s,c,e,r),M(p,c,e,r);var y=new T,l=new T;y.add(p),y.add(s),y.add(l),I(p.shape.points,n,l,o,r,!0),o.setItemGraphicEl(r,y)}}).update(function(r,n){var s=g.getItemGraphicEl(n),p=s.childAt(0),c=s.childAt(1),y=s.childAt(2),l={shape:{points:o.getItemLayout(r)}};l.shape.points&&(I(p.shape.points,l.shape.points,y,o,r,!1),w(c),w(p),C(p,l,e),C(c,l,e),o.setItemGraphicEl(r,s))}).remove(function(r){d.remove(g.getItemGraphicEl(r))}).execute(),o.eachItemGraphicEl(function(r,n){var s=o.getItemModel(n),p=r.childAt(0),c=r.childAt(1),y=r.childAt(2),l=o.getItemVisual(n,"style"),f=l.fill;d.add(r),p.useStyle(_(s.getModel("lineStyle").getLineStyle(),{fill:"none",stroke:f})),L(p,s,"lineStyle"),L(c,s,"areaStyle");var A=s.getModel("areaStyle"),E=A.isEmpty()&&A.parentModel.isEmpty();c.ignore=E,P(["emphasis","select","blur"],function(u){var S=s.getModel([u,"areaStyle"]),x=S.isEmpty()&&S.parentModel.isEmpty();c.ensureState(u).ignore=x&&E}),c.useStyle(_(A.getAreaStyle(),{fill:f,opacity:.7,decal:l.decal}));var D=s.getModel("emphasis"),R=D.getModel("itemStyle").getItemStyle();y.eachChild(function(u){if(u instanceof H){var S=u.style;u.useStyle(O({image:S.image,x:S.x,y:S.y,width:S.width,height:S.height},l))}else u.useStyle(l),u.setColor(f),u.style.strokeNoScale=!0;u.ensureState("emphasis").style=Y(R);var x=o.getStore().get(o.getDimensionIndex(u.__dimIdx),n);(x==null||isNaN(x))&&(x=""),J(u,Q(s),{labelFetcher:o.hostModel,labelDataIndex:n,labelDimIndex:u.__dimIdx,defaultText:x,inheritColor:f,defaultOpacity:l.opacity})}),U(r,D.get("focus"),D.get("blurScope"),D.get("disabled"))}),this._data=o},a.prototype.remove=function(){this.group.removeAll(),this._data=null},a.type="radar",a}(X),pt=function(t){function a(){var e=t!==null&&t.apply(this,arguments)||this;return e.type=a.type,e.hasSymbolVisual=!0,e}return B(a,t),a.prototype.init=function(e){t.prototype.init.apply(this,arguments),this.legendVisualProvider=new ot(V(this.getData,this),V(this.getRawData,this))},a.prototype.getInitialData=function(e,i){return rt(this,{generateCoord:"indicator_",generateCoordCount:1/0})},a.prototype.formatTooltip=function(e,i,m){var h=this.getData(),d=this.coordinateSystem.getIndicatorAxes(),o=this.getData().getName(e),g=o===""?this.name:o,v=Z(this,e);return k("section",{header:g,sortBlocks:!0,blocks:N(d,function(I){var b=h.get(h.mapDimension(I.dim),e);return k("nameValue",{markerType:"subItem",markerColor:v,name:I.name,value:b,sortParam:b})})})},a.prototype.getTooltipPosition=function(e){if(e!=null){for(var i=this.getData(),m=this.coordinateSystem,h=i.getValues(N(m.dimensions,function(v){return i.mapDimension(v)}),e),d=0,o=h.length;d<o;d++)if(!isNaN(h[d])){var g=m.getIndicatorAxes();return m.coordToPoint(g[d].dataToCoord(h[d]),d)}}},a.type="series.radar",a.dependencies=["radar"],a.defaultOption={z:2,colorBy:"data",coordinateSystem:"radar",legendHoverLink:!0,radarIndex:0,lineStyle:{width:2,type:"solid",join:"round"},label:{position:"top"},symbolSize:8},a}(q);function St(t){K(nt),t.registerChartView(dt),t.registerSeriesModel(pt),t.registerLayout(st),t.registerProcessor(it("radar")),t.registerPreprocessor(lt)}export{St as install};
