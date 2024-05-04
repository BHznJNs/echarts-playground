import{_ as e,e as t,bM as o,bR as n,a3 as i,w as a,aG as r,cg as s,ac as l,ad as c,I as u,cP as p,a6 as d,a2 as g,ch as h,W as f,H as m,d4 as v,bQ as x,d6 as y,B as b,cQ as C,X as w,bo as M,di as A,dj as k,h as S,bg as T,m as I,L as _,d as O,V as L,bd as V,dk as D,d7 as Z,dl as B,b5 as z}from"./index.js";import{D as E,a as H,i as R}from"./installCommon.js";import{g as j,T as P,B as N,r as F}from"./featureManager.js";import{l as U,m as G}from"./listComponent.js";import{B as W}from"./brushHelper.js";import{s as X}from"./sliderMove.js";import"./interactionMutex.js";import"./cursorHelper.js";var q=function(t){function o(){var e=null!==t&&t.apply(this,arguments)||this;return e.type=o.type,e}return e(o,t),o.type="dataZoom.select",o}(E),Q=function(t){function o(){var e=null!==t&&t.apply(this,arguments)||this;return e.type=o.type,e}return e(o,t),o.type="dataZoom.select",o}(H);function Y(e){e.registerComponentModel(q),e.registerComponentView(Q),R(e)}var $=function(n){function i(){var e=null!==n&&n.apply(this,arguments)||this;return e.type=i.type,e}return e(i,n),i.prototype.optionUpdated=function(){n.prototype.optionUpdated.apply(this,arguments);var e=this.ecModel;t(this.option.feature,(function(t,n){var i=j(n);i&&(i.getDefaultOption&&(i.defaultOption=i.getDefaultOption(e)),o(t,i.defaultOption))}))},i.type="toolbox",i.layoutMode={type:"box",ignoreSize:!0},i.defaultOption={show:!0,z:6,orient:"horizontal",left:"right",top:"top",backgroundColor:"transparent",borderColor:"#ccc",borderRadius:0,borderWidth:0,padding:5,itemSize:15,itemGap:8,showTitle:!0,iconStyle:{borderColor:"#666",color:"none"},emphasis:{iconStyle:{borderColor:"#3E98C5"}},tooltip:{show:!1,position:"bottom"}},i}(n);var J=function(o){function n(){return null!==o&&o.apply(this,arguments)||this}return e(n,o),n.prototype.render=function(e,o,n,x){var y=this.group;if(y.removeAll(),e.get("show")){var b=+e.get("itemSize"),C="vertical"===e.get("orient"),w=e.get("feature")||{},M=this._features||(this._features={}),A=[];t(w,(function(e,t){A.push(t)})),new i(this._featureNames||[],A).add(k).update(k).remove(a(k,null)).execute(),this._featureNames=A,U(y,e,n),y.add(G(y.getBoundingRect(),e)),C||y.eachChild((function(e){var t=e.__title,o=e.ensureState("emphasis"),i=o.textConfig||(o.textConfig={}),a=e.getTextContent(),r=a&&a.ensureState("emphasis");if(r&&!m(r)&&t){var s=r.style||(r.style={}),l=v(t,d.makeFont(s)),c=e.x+y.x,u=!1;e.y+y.y+b+l.height>n.getHeight()&&(i.position="top",u=!0);var p=u?-5-l.height:b+10;c+l.width/2>n.getWidth()?(i.position=["100%",p],s.align="right"):c-l.width/2<0&&(i.position=[0,p],s.align="left")}}))}function k(i,a){var m,v=A[i],k=A[a],S=w[v],T=new r(S,e,e.ecModel);if(x&&null!=x.newTitle&&x.featureName===v&&(S.title=x.newTitle),v&&!k){if(function(e){return 0===e.indexOf("my")}(v))m={onclick:T.option.onclick,featureName:v};else{var I=j(v);if(!I)return;m=new I}M[v]=m}else if(!(m=M[k]))return;m.uid=s("toolbox-feature"),m.model=T,m.ecModel=o,m.api=n;var _=m instanceof P;v||!k?!T.get("show")||_&&m.unusable?_&&m.remove&&m.remove(o,n):(!function(i,a,r){var s,m,v=i.getModel("iconStyle"),x=i.getModel(["emphasis","iconStyle"]),w=a instanceof P&&a.getIcons?a.getIcons():i.get("icon"),M=i.get("title")||{};u(w)?(s={})[r]=w:s=w;u(M)?(m={})[r]=M:m=M;var A=i.iconPaths={};t(s,(function(t,r){var s=p(t,{},{x:-b/2,y:-b/2,width:b,height:b});s.setStyle(v.getItemStyle()),s.ensureState("emphasis").style=x.getItemStyle();var u=new d({style:{text:m[r],align:x.get("textAlign"),borderRadius:x.get("textBorderRadius"),padding:x.get("textPadding"),fill:null,font:g({fontStyle:x.get("textFontStyle"),fontFamily:x.get("textFontFamily"),fontSize:x.get("textFontSize"),fontWeight:x.get("textFontWeight")},o)},ignore:!0});s.setTextContent(u),h({el:s,componentModel:e,itemName:r,formatterParamsExtra:{title:m[r]}}),s.__title=m[r],s.on("mouseover",(function(){var t=x.getItemStyle(),o=C?null==e.get("right")&&"right"!==e.get("left")?"right":"left":null==e.get("bottom")&&"bottom"!==e.get("top")?"bottom":"top";u.setStyle({fill:x.get("textFill")||t.fill||t.stroke||"#000",backgroundColor:x.get("textBackgroundColor")}),s.setTextConfig({position:x.get("textPosition")||o}),u.ignore=!e.get("showTitle"),n.enterEmphasis(this)})).on("mouseout",(function(){"emphasis"!==i.get(["iconStatus",r])&&n.leaveEmphasis(this),u.hide()})),("emphasis"===i.get(["iconStatus",r])?l:c)(s),y.add(s),s.on("click",f(a.onclick,a,o,n,r)),A[r]=s}))}(T,m,v),T.setIconStatus=function(e,t){var o=this.option,n=this.iconPaths;o.iconStatus=o.iconStatus||{},o.iconStatus[e]=t,n[e]&&("emphasis"===t?l:c)(n[e])},m instanceof P&&m.render&&m.render(T,o,n,x)):_&&m.dispose&&m.dispose(o,n)}},n.prototype.updateView=function(e,o,n,i){t(this._features,(function(e){e instanceof P&&e.updateView&&e.updateView(e.model,o,n,i)}))},n.prototype.remove=function(e,o){t(this._features,(function(t){t instanceof P&&t.remove&&t.remove(e,o)})),this.group.removeAll()},n.prototype.dispose=function(e,o){t(this._features,(function(t){t instanceof P&&t.dispose&&t.dispose(e,o)}))},n.type="toolbox",n}(x),K=function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return e(o,t),o.prototype.onclick=function(e,t){var o=this.model,n=o.get("name")||e.get("title.0.text")||"echarts",i="svg"===t.getZr().painter.getType(),a=i?"svg":o.get("type",!0)||"png",r=t.getConnectedDataURL({type:a,backgroundColor:o.get("backgroundColor",!0)||e.get("backgroundColor")||"#fff",connectedBackgroundColor:o.get("connectedBackgroundColor"),excludeComponents:o.get("excludeComponents"),pixelRatio:o.get("pixelRatio")}),s=y.browser;if(m(MouseEvent)&&(s.newEdge||!s.ie&&!s.edge)){var l=document.createElement("a");l.download=n+"."+a,l.target="_blank",l.href=r;var c=new MouseEvent("click",{view:document.defaultView,bubbles:!0,cancelable:!1});l.dispatchEvent(c)}else if(window.navigator.msSaveOrOpenBlob||i){var u=r.split(","),p=u[0].indexOf("base64")>-1,d=i?decodeURIComponent(u[1]):u[1];p&&(d=window.atob(d));var g=n+"."+a;if(window.navigator.msSaveOrOpenBlob){for(var h=d.length,f=new Uint8Array(h);h--;)f[h]=d.charCodeAt(h);var v=new Blob([f]);window.navigator.msSaveOrOpenBlob(v,g)}else{var x=document.createElement("iframe");document.body.appendChild(x);var b=x.contentWindow,C=b.document;C.open("image/svg+xml","replace"),C.write(d),C.close(),b.focus(),C.execCommand("SaveAs",!0,g),document.body.removeChild(x)}}else{var w=o.get("lang"),M='<body style="margin:0;"><img src="'+r+'" style="max-width:100%;" title="'+(w&&w[0]||"")+'" /></body>',A=window.open();A.document.write(M),A.document.title=n}},o.getDefaultOption=function(e){return{show:!0,icon:"M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6M29.2,45.1L29.2,0",title:e.getLocaleModel().get(["toolbox","saveAsImage","title"]),type:"png",connectedBackgroundColor:"#fff",name:"",excludeComponents:["toolbox"],lang:e.getLocaleModel().get(["toolbox","saveAsImage","lang"])}},o}(P),ee="__ec_magicType_stack__",te=[["line","bar"],["stack"]],oe=function(n){function i(){return null!==n&&n.apply(this,arguments)||this}return e(i,n),i.prototype.getIcons=function(){var e=this.model,o=e.get("icon"),n={};return t(e.get("type"),(function(e){o[e]&&(n[e]=o[e])})),n},i.getDefaultOption=function(e){return{show:!0,type:[],icon:{line:"M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4",bar:"M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7",stack:"M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z"},title:e.getLocaleModel().get(["toolbox","magicType","title"]),option:{},seriesIndex:{}}},i.prototype.onclick=function(e,n,i){var a=this.model,r=a.get(["seriesIndex",i]);if(ne[i]){var s,l={series:[]};t(te,(function(e){b(e,i)>=0&&t(e,(function(e){a.setIconStatus(e,"normal")}))})),a.setIconStatus(i,"emphasis"),e.eachComponent({mainType:"series",query:null==r?null:{seriesIndex:r}},(function(e){var t=e.subType,o=e.id,n=ne[i](t,o,e,a);n&&(w(n,e.option),l.series.push(n));var r=e.coordinateSystem;if(r&&"cartesian2d"===r.type&&("line"===i||"bar"===i)){var s=r.getAxesByScale("ordinal")[0];if(s){var c=s.dim+"Axis",u=e.getReferringComponents(c,M).models[0].componentIndex;l[c]=l[c]||[];for(var p=0;p<=u;p++)l[c][u]=l[c][u]||{};l[c][u].boundaryGap="bar"===i}}}));var c=i;"stack"===i&&(s=o({stack:a.option.title.tiled,tiled:a.option.title.stack},a.option.title),"emphasis"!==a.get(["iconStatus",i])&&(c="tiled")),n.dispatchAction({type:"changeMagicType",currentType:c,newOption:l,newTitle:s,featureName:"magicType"})}},i}(P),ne={line:function(e,t,n,i){if("bar"===e)return o({id:t,type:"line",data:n.get("data"),stack:n.get("stack"),markPoint:n.get("markPoint"),markLine:n.get("markLine")},i.get(["option","line"])||{},!0)},bar:function(e,t,n,i){if("line"===e)return o({id:t,type:"bar",data:n.get("data"),stack:n.get("stack"),markPoint:n.get("markPoint"),markLine:n.get("markLine")},i.get(["option","bar"])||{},!0)},stack:function(e,t,n,i){var a=n.get("stack")===ee;if("line"===e||"bar"===e)return i.setIconStatus("stack",a?"normal":"emphasis"),o({id:t,stack:a?"":ee},i.get(["option","stack"])||{},!0)}};C({type:"changeMagicType",event:"magicTypeChanged",update:"prepareAndUpdate"},(function(e,t){t.mergeOption(e.newOption)}));var ie=oe,ae=new Array(60).join("-"),re="\t";function se(e){return e.replace(/^\s\s*/,"").replace(/\s\s*$/,"")}var le=new RegExp("["+re+"]+","g");function ce(e,o){var n=e.split(new RegExp("\n*"+ae+"\n*","g")),i={series:[]};return t(n,(function(e,t){if(function(e){if(e.slice(0,e.indexOf("\n")).indexOf(re)>=0)return!0}(e)){var n=function(e){for(var t=e.split(/\n+/g),o=se(t.shift()).split(le),n=[],i=I(o,(function(e){return{name:e,data:[]}})),a=0;a<t.length;a++){var r=se(t[a]).split(le);n.push(r.shift());for(var s=0;s<r.length;s++)i[s]&&(i[s].data[a]=r[s])}return{series:i,categories:n}}(e),a=o[t],r=a.axisDim+"Axis";a&&(i[r]=i[r]||[],i[r][a.axisIndex]={data:n.categories},i.series=i.series.concat(n.series))}else{n=function(e){for(var t=e.split(/\n+/g),o=se(t.shift()),n=[],i=0;i<t.length;i++){var a=se(t[i]);if(a){var r=a.split(le),s="",l=void 0,c=!1;isNaN(r[0])?(c=!0,s=r[0],r=r.slice(1),n[i]={name:s,value:[]},l=n[i].value):l=n[i]=[];for(var u=0;u<r.length;u++)l.push(+r[u]);1===l.length&&(c?n[i].value=l[0]:n[i]=l[0])}}return{name:o,data:n}}(e);i.series.push(n)}})),i}var ue=function(o){function n(){return null!==o&&o.apply(this,arguments)||this}return e(n,o),n.prototype.onclick=function(e,o){setTimeout((function(){o.dispatchAction({type:"hideTip"})}));var n=o.getDom(),i=this.model;this._dom&&n.removeChild(this._dom);var a=document.createElement("div");a.style.cssText="position:absolute;top:0;bottom:0;left:0;right:0;padding:5px",a.style.backgroundColor=i.get("backgroundColor")||"#fff";var r=document.createElement("h4"),s=i.get("lang")||[];r.innerHTML=s[0]||i.get("title"),r.style.cssText="margin:10px 20px",r.style.color=i.get("textColor");var l=document.createElement("div"),c=document.createElement("textarea");l.style.cssText="overflow:auto";var p=i.get("optionToContent"),d=i.get("contentToOption"),g=function(e){var o,n,i,a=function(e){var t={},o=[],n=[];return e.eachRawSeries((function(e){var i=e.coordinateSystem;if(!i||"cartesian2d"!==i.type&&"polar"!==i.type)o.push(e);else{var a=i.getBaseAxis();if("category"===a.type){var r=a.dim+"_"+a.index;t[r]||(t[r]={categoryAxis:a,valueAxis:i.getOtherAxis(a),series:[]},n.push({axisDim:a.dim,axisIndex:a.index})),t[r].series.push(e)}else o.push(e)}})),{seriesGroupByCategoryAxis:t,other:o,meta:n}}(e);return{value:T([(n=a.seriesGroupByCategoryAxis,i=[],t(n,(function(e,o){var n=e.categoryAxis,a=e.valueAxis.dim,r=[" "].concat(I(e.series,(function(e){return e.name}))),s=[n.model.getCategories()];t(e.series,(function(e){var t=e.getRawData();s.push(e.getRawData().mapArray(t.mapDimension(a),(function(e){return e})))}));for(var l=[r.join(re)],c=0;c<s[0].length;c++){for(var u=[],p=0;p<s.length;p++)u.push(s[p][c]);l.push(u.join(re))}i.push(l.join("\n"))})),i.join("\n\n"+ae+"\n\n")),(o=a.other,I(o,(function(e){var t=e.getRawData(),o=[e.name],n=[];return t.each(t.dimensions,(function(){for(var e=arguments.length,i=arguments[e-1],a=t.getName(i),r=0;r<e-1;r++)n[r]=arguments[r];o.push((a?a+re:"")+n.join(re))})),o.join("\n")})).join("\n\n"+ae+"\n\n"))],(function(e){return!!e.replace(/[\n\t\s]/g,"")})).join("\n\n"+ae+"\n\n"),meta:a.meta}}(e);if(m(p)){var h=p(o.getOption());u(h)?l.innerHTML=h:A(h)&&l.appendChild(h)}else{c.readOnly=i.get("readOnly");var f=c.style;f.cssText="display:block;width:100%;height:100%;font-family:monospace;font-size:14px;line-height:1.6rem;resize:none;box-sizing:border-box;outline:none",f.color=i.get("textColor"),f.borderColor=i.get("textareaBorderColor"),f.backgroundColor=i.get("textareaColor"),c.value=g.value,l.appendChild(c)}var v=g.meta,x=document.createElement("div");x.style.cssText="position:absolute;bottom:5px;left:0;right:0";var y="float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px",b=document.createElement("div"),C=document.createElement("div");y+=";background-color:"+i.get("buttonColor"),y+=";color:"+i.get("buttonTextColor");var w=this;function M(){n.removeChild(a),w._dom=null}k(b,"click",M),k(C,"click",(function(){if(null==d&&null!=p||null!=d&&null==p)M();else{var e;try{e=m(d)?d(l,o.getOption()):ce(c.value,v)}catch(e){throw M(),new Error("Data view format error "+e)}e&&o.dispatchAction({type:"changeDataView",newOption:e}),M()}})),b.innerHTML=s[1],C.innerHTML=s[2],C.style.cssText=b.style.cssText=y,!i.get("readOnly")&&x.appendChild(C),x.appendChild(b),a.appendChild(r),a.appendChild(l),a.appendChild(x),l.style.height=n.clientHeight-80+"px",n.appendChild(a),this._dom=a},n.prototype.remove=function(e,t){this._dom&&t.getDom().removeChild(this._dom)},n.prototype.dispose=function(e,t){this.remove(e,t)},n.getDefaultOption=function(e){return{show:!0,readOnly:!1,optionToContent:null,contentToOption:null,icon:"M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28",title:e.getLocaleModel().get(["toolbox","dataView","title"]),lang:e.getLocaleModel().get(["toolbox","dataView","lang"]),backgroundColor:"#fff",textColor:"#000",textareaColor:"#fff",textareaBorderColor:"#333",buttonColor:"#c23531",buttonTextColor:"#fff"}},n}(P);function pe(e,t){return I(e,(function(e,o){var n=t&&t[o];if(_(n)&&!O(n)){_(e)&&!O(e)||(e={value:e});var i=null!=n.name&&null==e.name;return e=w(e,n),i&&delete e.name,e}return e}))}C({type:"changeDataView",event:"dataViewChanged",update:"prepareAndUpdate"},(function(e,o){var n=[];t(e.newOption.series,(function(e){var t=o.getSeriesByName(e.name)[0];if(t){var i=t.get("data");n.push({name:e.name,data:pe(e.data,i)})}else n.push(S({type:"scatter"},e))})),o.mergeOption(w({series:n},e.newOption))}));var de=ue,ge=t,he=L();function fe(e){var t=he(e);return t.snapshots||(t.snapshots=[{}]),t.snapshots}var me=function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return e(o,t),o.prototype.onclick=function(e,t){!function(e){he(e).snapshots=null}(e),t.dispatchAction({type:"restore",from:this.uid})},o.getDefaultOption=function(e){return{show:!0,icon:"M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5",title:e.getLocaleModel().get(["toolbox","restore","title"])}},o}(P);C({type:"restore",event:"restore",update:"prepareAndUpdate"},(function(e,t){t.resetOption("recreate")}));var ve=me,xe=t,ye=B("toolbox-dataZoom_"),be=function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return e(o,t),o.prototype.render=function(e,t,o,n){this._brushController||(this._brushController=new W(o.getZr()),this._brushController.on("brush",f(this._onBrush,this)).mount()),function(e,t,o,n,i){var a=o._isZoomActive;n&&"takeGlobalCursor"===n.type&&(a="dataZoomSelect"===n.key&&n.dataZoomSelectActive);o._isZoomActive=a,e.setIconStatus("zoom",a?"emphasis":"normal");var r=new N(we(e),t,{include:["grid"]}),s=r.makePanelOpts(i,(function(e){return e.xAxisDeclared&&!e.yAxisDeclared?"lineX":!e.xAxisDeclared&&e.yAxisDeclared?"lineY":"rect"}));o._brushController.setPanels(s).enableBrush(!(!a||!s.length)&&{brushType:"auto",brushStyle:e.getModel("brushStyle").getItemStyle()})}(e,t,this,n,o),function(e,t){e.setIconStatus("back",function(e){return fe(e).length}(t)>1?"emphasis":"normal")}(e,t)},o.prototype.onclick=function(e,t,o){Ce[o].call(this)},o.prototype.remove=function(e,t){this._brushController&&this._brushController.unmount()},o.prototype.dispose=function(e,t){this._brushController&&this._brushController.dispose()},o.prototype._onBrush=function(e){var t=e.areas;if(e.isEnd&&t.length){var o={},n=this.ecModel;this._brushController.updateCovers([]),new N(we(this.model),n,{include:["grid"]}).matchOutputRanges(t,n,(function(e,t,o){if("cartesian2d"===o.type){var n=e.brushType;"rect"===n?(i("x",o,t[0]),i("y",o,t[1])):i({lineX:"x",lineY:"y"}[n],o,t)}})),function(e,t){var o=fe(e);ge(t,(function(t,n){for(var i=o.length-1;i>=0&&!o[i][n];i--);if(i<0){var a=e.queryComponents({mainType:"dataZoom",subType:"select",id:n})[0];if(a){var r=a.getPercentRange();o[0][n]={dataZoomId:n,start:r[0],end:r[1]}}}})),o.push(t)}(n,o),this._dispatchZoomAction(o)}function i(e,t,i){var a=t.getAxis(e),r=a.model,s=function(e,t,o){var n;return o.eachComponent({mainType:"dataZoom",subType:"select"},(function(o){o.getAxisModel(e,t.componentIndex)&&(n=o)})),n}(e,r,n),l=s.findRepresentativeAxisProxy(r).getMinMaxSpan();null==l.minValueSpan&&null==l.maxValueSpan||(i=X(0,i.slice(),a.scale.getExtent(),0,l.minValueSpan,l.maxValueSpan)),s&&(o[s.id]={dataZoomId:s.id,startValue:i[0],endValue:i[1]})}},o.prototype._dispatchZoomAction=function(e){var t=[];xe(e,(function(e,o){t.push(V(e))})),t.length&&this.api.dispatchAction({type:"dataZoom",from:this.uid,batch:t})},o.getDefaultOption=function(e){return{show:!0,filterMode:"filter",icon:{zoom:"M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1",back:"M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26"},title:e.getLocaleModel().get(["toolbox","dataZoom","title"]),brushStyle:{borderWidth:0,color:"rgba(210,219,238,0.2)"}}},o}(P),Ce={zoom:function(){var e=!this._isZoomActive;this.api.dispatchAction({type:"takeGlobalCursor",key:"dataZoomSelect",dataZoomSelectActive:e})},back:function(){this._dispatchZoomAction(function(e){var t=fe(e),o=t[t.length-1];t.length>1&&t.pop();var n={};return ge(o,(function(e,o){for(var i=t.length-1;i>=0;i--)if(e=t[i][o]){n[o]=e;break}})),n}(this.ecModel))}};function we(e){var t={xAxisIndex:e.get("xAxisIndex",!0),yAxisIndex:e.get("yAxisIndex",!0),xAxisId:e.get("xAxisId",!0),yAxisId:e.get("yAxisId",!0)};return null==t.xAxisIndex&&null==t.xAxisId&&(t.xAxisIndex="all"),null==t.yAxisIndex&&null==t.yAxisId&&(t.yAxisIndex="all"),t}D("dataZoom",(function(e){var t=e.getComponent("toolbox",0),o=["feature","dataZoom"];if(t&&null!=t.get(o)){var n=t.getModel(o),i=[],a=we(n),r=Z(e,a);return xe(r.xAxisModels,(function(e){return s(e,"xAxis","xAxisIndex")})),xe(r.yAxisModels,(function(e){return s(e,"yAxis","yAxisIndex")})),i}function s(e,t,o){var a=e.componentIndex,r={type:"select",$fromToolbox:!0,filterMode:n.get("filterMode",!0)||"filter",id:ye+t+a};r[o]=a,i.push(r)}}));var Me=be;function Ae(e){e.registerComponentModel($),e.registerComponentView(J),F("saveAsImage",K),F("magicType",ie),F("dataView",de),F("dataZoom",Me),F("restore",ve),z(Y)}export{Ae as install};
