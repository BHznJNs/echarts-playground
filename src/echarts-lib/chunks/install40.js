import{K as e,d as t,m as r,bL as n,dz as a,a0 as u,dA as o,L as i,cz as s,I as l,dB as c,b as f,b4 as v,e as d,dC as p,J as h,dD as m,bv as g}from"./index.js";var I={value:"eq","<":"lt","<=":"lte",">":"gt",">=":"gte","=":"eq","!=":"ne","<>":"ne"},V=function(){function t(t){if(null==(this._condVal=l(t)?new RegExp(t):c(t)?t:null)){e("")}}return t.prototype.evaluate=function(e){var t=typeof e;return l(t)?this._condVal.test(e):!!f(t)&&this._condVal.test(e+"")},t}(),w=function(){function e(){}return e.prototype.evaluate=function(){return this.value},e}(),x=function(){function e(){}return e.prototype.evaluate=function(){for(var e=this.children,t=0;t<e.length;t++)if(!e[t].evaluate())return!1;return!0},e}(),y=function(){function e(){}return e.prototype.evaluate=function(){for(var e=this.children,t=0;t<e.length;t++)if(e[t].evaluate())return!0;return!1},e}(),b=function(){function e(){}return e.prototype.evaluate=function(){return!this.child.evaluate()},e}(),G=function(){function e(){}return e.prototype.evaluate=function(){for(var e=!!this.valueParser,t=(0,this.getValue)(this.valueGetterParam),r=e?this.valueParser(t):null,n=0;n<this.subCondList.length;n++)if(!this.subCondList[n].evaluate(e?r:t))return!1;return!0},e}();function D(t,r){if(!0===t||!1===t){var i=new w;return i.value=t,i}return P(t)||e(""),t.and?L("and",t,r):t.or?L("or",t,r):t.not?function(t,r){var n=t.not,a="";P(n)||e(a);var u=new b;u.child=D(n,r),u.child||e(a);return u}(t,r):function(t,r){for(var i="",s=r.prepareGetValue(t),l=[],c=n(t),f=t.parser,v=f?a(f):null,d=0;d<c.length;d++){var p=c[d];if("parser"!==p&&!r.valueGetterAttrMap.get(p)){var h=u(I,p)?I[p]:p,m=t[p],g=v?v(m):m,w=o(h,g)||"reg"===h&&new V(g);w||e(i),l.push(w)}}l.length||e(i);var x=new G;return x.valueGetterParam=s,x.valueParser=v,x.getValue=r.getValue,x.subCondList=l,x}(t,r)}function L(n,a,u){var o=a[n];t(o)||e(""),o.length||e("");var i="and"===n?new x:new y;return i.children=r(o,(function(e){return D(e,u)})),i.children.length||e(""),i}function P(e){return i(e)&&!s(e)}var _=function(){function e(e,t){this._cond=D(e,t)}return e.prototype.evaluate=function(){return this._cond.evaluate()},e}();var C={type:"echarts:filter",transform:function(t){for(var r,n,a,o=t.upstream,i=(n=t.config,a={valueGetterAttrMap:v({dimension:!0}),prepareGetValue:function(t){var r=t.dimension;u(t,"dimension")||e("");var n=o.getDimensionInfo(r);return n||e(""),{dimIdx:n.index}},getValue:function(e){return o.retrieveValueFromItem(r,e.dimIdx)}},new _(n,a)),s=[],l=0,c=o.count();l<c;l++)r=o.getRawDataItem(l),i.evaluate()&&s.push(r);return{data:s}}},F={type:"echarts:sort",transform:function(t){var r=t.upstream,n=t.config,u="",o=g(n);o.length||e(u);var i=[];d(o,(function(t){var n=t.dimension,o=t.order,s=t.parser,l=t.incomparable;if(null==n&&e(u),"asc"!==o&&"desc"!==o&&e(u),l&&"min"!==l&&"max"!==l){e("")}if("asc"!==o&&"desc"!==o){e("")}var c=r.getDimensionInfo(n);c||e(u);var f=s?a(s):null;s&&!f&&e(u),i.push({dimIdx:c.index,parser:f,comparator:new p(o,l)})}));var s=r.sourceFormat;s!==h&&s!==m&&e(u);for(var l=[],c=0,f=r.count();c<f;c++)l.push(r.getRawDataItem(c));return l.sort((function(e,t){for(var n=0;n<i.length;n++){var a=i[n],u=r.retrieveValueFromItem(e,a.dimIdx),o=r.retrieveValueFromItem(t,a.dimIdx);a.parser&&(u=a.parser(u),o=a.parser(o));var s=a.comparator.evaluate(u,o);if(0!==s)return s}return 0})),{data:l}}};function A(e){e.registerTransform(C),e.registerTransform(F)}export{A as install};
