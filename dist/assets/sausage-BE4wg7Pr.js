import{e as I,bV as x}from"./index-DqzYUymv.js";var y=function(){this.cx=0,this.cy=0,this.r0=0,this.r=0,this.startAngle=0,this.endAngle=2*Math.PI,this.clockwise=!0},d=function(g){function i(a){var t=g.call(this,a)||this;return t.type="sausage",t}return I(i,g),i.prototype.getDefaultShape=function(){return new y},i.prototype.buildPath=function(a,t){var h=t.cx,n=t.cy,s=Math.max(t.r0||0,0),o=Math.max(t.r,0),l=.5*(o-s),u=s+l,r=t.startAngle,e=t.endAngle,c=t.clockwise,M=2*Math.PI,P=c?e-r<M:r-e<M;P||(r=e-(c?M:-M));var p=Math.cos(r),f=Math.sin(r),m=Math.cos(e),v=Math.sin(e);P?(a.moveTo(p*s+h,f*s+n),a.arc(p*u+h,f*u+n,l,-Math.PI+r,r,!c)):a.moveTo(p*o+h,f*o+n),a.arc(h,n,o,r,e,!c),a.arc(m*u+h,v*u+n,l,e-2*Math.PI,e-Math.PI,!c),s!==0&&a.arc(h,n,s,e,r,c)},i}(x);export{d as e};
