import{e as w,H as q,T as _,$ as W,E as U,o as F,N as m,x as D,_ as J,j as k,I as K,O as Q,p as tt,z as X,C as rt,b as et,v as V,u as S}from"./index-DqzYUymv.js";import{h as nt}from"./brushHelper-BBpK21Kc.js";import{p as ot,u as it,f as st}from"./visualSolution-B6UEv2F-.js";import{S as ut,I as at,A as ht}from"./featureManager-DhSZtoFo.js";import"./interactionMutex-CZF7ZBng.js";import"./VisualMapping-E-qMu4f7.js";import"./cursorHelper-IgNoiH07.js";var pt=["rect","polygon","keep","clear"];function ct(t,e){var r=J(t?t.brush:[]);if(r.length){var n=[];m(r,function(a){var d=a.hasOwnProperty("toolbox")?a.toolbox:[];d instanceof Array&&(n=n.concat(d))});var o=t&&t.toolbox;k(o)&&(o=o[0]),o||(o={feature:{}},t.toolbox=[o]);var i=o.feature||(o.feature={}),s=i.brush||(i.brush={}),u=s.type||(s.type=[]);u.push.apply(u,n),function(a){var d={};m(a,function(g){d[g]=1}),a.length=0,m(d,function(g,M){a.push(M)})}(u),e&&!u.length&&u.push.apply(u,pt)}}var $={lineX:z(0),lineY:z(1),rect:{point:function(t,e,r){return t&&r.boundingRect.contain(t[0],t[1])},rect:function(t,e,r){return t&&r.boundingRect.intersect(t)}},polygon:{point:function(t,e,r){return t&&r.boundingRect.contain(t[0],t[1])&&V(r.range,t[0],t[1])},rect:function(t,e,r){var n=r.range;if(!t||n.length<=1)return!1;var o=t.x,i=t.y,s=t.width,u=t.height,a=n[0];return!!(V(n,o,i)||V(n,o+s,i)||V(n,o,i+u)||V(n,o+s,i+u)||X.create(t).contain(a[0],a[1])||S(o,i,o+s,i,n)||S(o,i,o,i+u,n)||S(o+s,i,o+s,i+u,n)||S(o,i+u,o+s,i+u,n))||void 0}}};function z(t){var e=["x","y"],r=["width","height"];return{point:function(n,o,i){if(n){var s=i.range;return C(n[t],s)}},rect:function(n,o,i){if(n){var s=i.range,u=[n[e[t]],n[e[t]]+n[r[t]]];return u[1]<u[0]&&u.reverse(),C(u[0],s)||C(u[1],s)||C(s[0],u)||C(s[1],u)}}}}function C(t,e){return e[0]<=t&&t<=e[1]}var L=["inBrush","outOfBrush"],A="__ecBrushSelect",H="__ecInBrushSelectEvent";function j(t){t.eachComponent({mainType:"brush"},function(e){(e.brushTargetManager=new at(e.option,t)).setInputRanges(e.areas,t)})}function lt(t,e,r){var n,o,i=[];t.eachComponent({mainType:"brush"},function(s){r&&r.type==="takeGlobalCursor"&&s.setBrushOption(r.key==="brush"?r.brushOption:{brushType:!1})}),j(t),t.eachComponent({mainType:"brush"},function(s,u){var a={brushId:s.id,brushIndex:u,brushName:s.name,areas:_(s.areas),selected:[]};i.push(a);var d=s.option,g=d.brushLink,M=[],T=[],R=[],O=!1;u||(n=d.throttleType,o=d.throttleDelay);var G=U(s.areas,function(h){var b=dt[h.brushType],y=K({boundingRect:b?b(h):void 0},h);return y.selectors=function(p){var f=p.brushType,l={point:function(c){return $[f].point(c,l,p)},rect:function(c){return $[f].rect(c,l,p)}};return l}(y),y}),N=it(s.option,L,function(h){h.mappingMethod="fixed"});function I(h){return g==="all"||!!M[h]}function B(h){return!!h.length}k(g)&&m(g,function(h){M[h]=1}),t.eachSeries(function(h,b){var y=R[b]=[];h.subType==="parallel"?function(p,f){var l=p.coordinateSystem;O=O||l.hasAxisBrushed(),I(f)&&l.eachActiveState(p.getData(),function(c,v){c==="active"&&(T[v]=1)})}(h,b):function(p,f,l){if(!(!p.brushSelector||function(v,E){var x=v.option.seriesIndex;return x!=null&&x!=="all"&&(k(x)?Q(x,E)<0:E!==x)}(s,f))&&(m(G,function(v){s.brushTargetManager.controlSeries(v,p,t)&&l.push(v),O=O||B(l)}),I(f)&&B(l))){var c=p.getData();c.each(function(v){P(p,l,c,v)&&(T[v]=1)})}}(h,b,y)}),t.eachSeries(function(h,b){var y={seriesId:h.id,seriesIndex:b,seriesName:h.name,dataIndex:[]};a.selected.push(y);var p=R[b],f=h.getData(),l=I(b)?function(c){return T[c]?(y.dataIndex.push(f.getRawIndex(c)),"inBrush"):"outOfBrush"}:function(c){return P(h,p,f,c)?(y.dataIndex.push(f.getRawIndex(c)),"inBrush"):"outOfBrush"};(I(b)?O:B(p))&&st(L,N,f,l)})}),function(s,u,a,d,g){if(g){var M=s.getZr();if(!M[H]){M[A]||(M[A]=ft);var T=tt(M,A,a,u);T(s,d)}}}(e,n,o,i,r)}function ft(t,e){if(!t.isDisposed()){var r=t.getZr();r[H]=!0,t.dispatchAction({type:"brushSelect",batch:e}),r[H]=!1}}function P(t,e,r,n){for(var o=0,i=e.length;o<i;o++){var s=e[o];if(t.brushSelector(n,r,s.selectors,s))return!0}}var dt={rect:function(t){return Z(t.range)},polygon:function(t){for(var e,r=t.range,n=0,o=r.length;n<o;n++){e=e||[[1/0,-1/0],[1/0,-1/0]];var i=r[n];i[0]<e[0][0]&&(e[0][0]=i[0]),i[0]>e[0][1]&&(e[0][1]=i[0]),i[1]<e[1][0]&&(e[1][0]=i[1]),i[1]>e[1][1]&&(e[1][1]=i[1])}return e&&Z(e)}};function Z(t){return new X(t[0][0],t[1][0],t[0][1]-t[0][0],t[1][1]-t[1][0])}var bt=function(t){function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.type=e.type,r}return w(e,t),e.prototype.init=function(r,n){this.ecModel=r,this.api=n,this.model,(this._brushController=new nt(n.getZr())).on("brush",q(this._onBrush,this)).mount()},e.prototype.render=function(r,n,o,i){this.model=r,this._updateController(r,n,o,i)},e.prototype.updateTransform=function(r,n,o,i){j(n),this._updateController(r,n,o,i)},e.prototype.updateVisual=function(r,n,o,i){this.updateTransform(r,n,o,i)},e.prototype.updateView=function(r,n,o,i){this._updateController(r,n,o,i)},e.prototype._updateController=function(r,n,o,i){(!i||i.$from!==r.id)&&this._brushController.setPanels(r.brushTargetManager.makePanelOpts(o)).enableBrush(r.brushOption).updateCovers(r.areas.slice())},e.prototype.dispose=function(){this._brushController.dispose()},e.prototype._onBrush=function(r){var n=this.model.id,o=this.model.brushTargetManager.setOutputRanges(r.areas,this.ecModel);(!r.isEnd||r.removeOnClick)&&this.api.dispatchAction({type:"brush",brushId:n,areas:_(o),$from:n}),r.isEnd&&this.api.dispatchAction({type:"brushEnd",brushId:n,areas:_(o),$from:n})},e.type="brush",e}(W);function Y(t,e){return rt({brushType:t.brushType,brushMode:t.brushMode,transformable:t.transformable,brushStyle:new et(t.brushStyle).getItemStyle(),removeOnClick:t.removeOnClick,z:t.z},e,!0)}var Mt=function(t){function e(){var r=t!==null&&t.apply(this,arguments)||this;return r.type=e.type,r.areas=[],r.brushOption={},r}return w(e,t),e.prototype.optionUpdated=function(r,n){var o=this.option;!n&&ot(o,r,["inBrush","outOfBrush"]);var i=o.inBrush=o.inBrush||{};o.outOfBrush=o.outOfBrush||{color:"#ddd"},i.hasOwnProperty("liftZ")||(i.liftZ=5)},e.prototype.setAreas=function(r){r&&(this.areas=U(r,function(n){return Y(this.option,n)},this))},e.prototype.setBrushOption=function(r){this.brushOption=Y(this.option,r),this.brushType=this.brushOption.brushType},e.type="brush",e.dependencies=["geo","grid","xAxis","yAxis","parallel","series"],e.defaultOption={seriesIndex:"all",brushType:"rect",brushMode:"single",transformable:!0,brushStyle:{borderWidth:1,color:"rgba(210,219,238,0.3)",borderColor:"#D2DBEE"},throttleType:"fixRate",throttleDelay:0,removeOnClick:!0,z:1e4},e}(F),yt=["rect","polygon","lineX","lineY","keep","clear"],vt=function(t){function e(){return t!==null&&t.apply(this,arguments)||this}return w(e,t),e.prototype.render=function(r,n,o){var i,s,u;n.eachComponent({mainType:"brush"},function(a){i=a.brushType,s=a.brushOption.brushMode||"single",u=u||!!a.areas.length}),this._brushType=i,this._brushMode=s,m(r.get("type",!0),function(a){r.setIconStatus(a,(a==="keep"?s==="multiple":a==="clear"?u:a===i)?"emphasis":"normal")})},e.prototype.updateView=function(r,n,o){this.render(r,n,o)},e.prototype.getIcons=function(){var r=this.model,n=r.get("icon",!0),o={};return m(r.get("type",!0),function(i){n[i]&&(o[i]=n[i])}),o},e.prototype.onclick=function(r,n,o){var i=this._brushType,s=this._brushMode;o==="clear"?(n.dispatchAction({type:"axisAreaSelect",intervals:[]}),n.dispatchAction({type:"brush",command:"clear",areas:[]})):n.dispatchAction({type:"takeGlobalCursor",key:"brush",brushOption:{brushType:o==="keep"?i:i!==o&&o,brushMode:o==="keep"?s==="multiple"?"single":"multiple":s}})},e.getDefaultOption=function(r){return{show:!0,type:yt.slice(),icon:{rect:"M7.3,34.7 M0.4,10V-0.2h9.8 M89.6,10V-0.2h-9.8 M0.4,60v10.2h9.8 M89.6,60v10.2h-9.8 M12.3,22.4V10.5h13.1 M33.6,10.5h7.8 M49.1,10.5h7.8 M77.5,22.4V10.5h-13 M12.3,31.1v8.2 M77.7,31.1v8.2 M12.3,47.6v11.9h13.1 M33.6,59.5h7.6 M49.1,59.5 h7.7 M77.5,47.6v11.9h-13",polygon:"M55.2,34.9c1.7,0,3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1 s-3.1-1.4-3.1-3.1S53.5,34.9,55.2,34.9z M50.4,51c1.7,0,3.1,1.4,3.1,3.1c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1 C47.3,52.4,48.7,51,50.4,51z M55.6,37.1l1.5-7.8 M60.1,13.5l1.6-8.7l-7.8,4 M59,19l-1,5.3 M24,16.1l6.4,4.9l6.4-3.3 M48.5,11.6 l-5.9,3.1 M19.1,12.8L9.7,5.1l1.1,7.7 M13.4,29.8l1,7.3l6.6,1.6 M11.6,18.4l1,6.1 M32.8,41.9 M26.6,40.4 M27.3,40.2l6.1,1.6 M49.9,52.1l-5.6-7.6l-4.9-1.2",lineX:"M15.2,30 M19.7,15.6V1.9H29 M34.8,1.9H40.4 M55.3,15.6V1.9H45.9 M19.7,44.4V58.1H29 M34.8,58.1H40.4 M55.3,44.4 V58.1H45.9 M12.5,20.3l-9.4,9.6l9.6,9.8 M3.1,29.9h16.5 M62.5,20.3l9.4,9.6L62.3,39.7 M71.9,29.9H55.4",lineY:"M38.8,7.7 M52.7,12h13.2v9 M65.9,26.6V32 M52.7,46.3h13.2v-9 M24.9,12H11.8v9 M11.8,26.6V32 M24.9,46.3H11.8v-9 M48.2,5.1l-9.3-9l-9.4,9.2 M38.9-3.9V12 M48.2,53.3l-9.3,9l-9.4-9.2 M38.9,62.3V46.4",keep:"M4,10.5V1h10.3 M20.7,1h6.1 M33,1h6.1 M55.4,10.5V1H45.2 M4,17.3v6.6 M55.6,17.3v6.6 M4,30.5V40h10.3 M20.7,40 h6.1 M33,40h6.1 M55.4,30.5V40H45.2 M21,18.9h62.9v48.6H21V18.9z",clear:"M22,14.7l30.9,31 M52.9,14.7L22,45.7 M4.7,16.8V4.2h13.1 M26,4.2h7.8 M41.6,4.2h7.8 M70.3,16.8V4.2H57.2 M4.7,25.9v8.6 M70.3,25.9v8.6 M4.7,43.2v12.6h13.1 M26,55.8h7.8 M41.6,55.8h7.8 M70.3,43.2v12.6H57.2"},title:r.getLocaleModel().get(["toolbox","brush","title"])}},e}(ut);function It(t){t.registerComponentView(bt),t.registerComponentModel(Mt),t.registerPreprocessor(ct),t.registerVisual(t.PRIORITY.VISUAL.BRUSH,lt),t.registerAction({type:"brush",event:"brush",update:"updateVisual"},function(e,r){r.eachComponent({mainType:"brush",query:e},function(n){n.setAreas(e.areas)})}),t.registerAction({type:"brushSelect",event:"brushSelected",update:"none"},D),t.registerAction({type:"brushEnd",event:"brushEnd",update:"none"},D),ht("brush",vt)}export{It as install};
