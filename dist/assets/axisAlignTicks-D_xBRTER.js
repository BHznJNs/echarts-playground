import{aQ as T,d4 as b,d5 as s,cg as u}from"./index-DqzYUymv.js";var p=Math.log;function y(i,N,v){var r=T.prototype,f=r.getTicks.call(v),M=r.getTicks.call(v,!0),l=f.length-1,h=r.getInterval.call(v),g=b(i,N),e=g.extent,c=g.fixMin,x=g.fixMax;if(i.type==="log"){var F=p(i.base);e=[p(e[0])/F,p(e[1])/F]}i.setExtent(e[0],e[1]),i.calcNiceExtent({splitNumber:l,fixMin:c,fixMax:x});var k=r.getExtent.call(i);c&&(e[0]=k[0]),x&&(e[1]=k[1]);var t=r.getInterval.call(i),n=e[0],a=e[1];if(c&&x)t=(a-n)/l;else if(c)for(a=e[0]+t*l;a<e[1]&&isFinite(a)&&isFinite(e[1]);)t=s(t),a=e[0]+t*l;else if(x)for(n=e[1]-t*l;n>e[0]&&isFinite(n)&&isFinite(e[0]);)t=s(t),n=e[1]-t*l;else{i.getTicks().length-1>l&&(t=s(t));var o=t*l;a=Math.ceil(e[1]/t)*t,(n=u(a-o))<0&&e[0]>=0?(n=0,a=u(o)):a>0&&e[1]<=0&&(a=0,n=-u(o))}var m=(f[0].value-M[0].value)/h,E=(f[l].value-M[l].value)/h;r.setExtent.call(i,n+t*m,a+t*E),r.setInterval.call(i,t),(m||E)&&r.setNiceExtent.call(i,n+t,a-t)}export{y as s};
