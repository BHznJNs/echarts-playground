function m(g,n,u,l,a,h){g=g||0;var p=u[1]-u[0];if(a!=null&&(a=M(a,[0,p])),h!=null&&(h=Math.max(h,a??0)),l==="all"){var c=Math.abs(n[1]-n[0]);c=M(c,[0,p]),a=h=M(c,[a,h]),l=0}n[0]=M(n[0],u),n[1]=M(n[1],u);var t=o(n,l);n[l]+=g;var v,e=a||0,f=u.slice();return t.sign<0?f[0]+=e:f[1]-=e,n[l]=M(n[l],f),v=o(n,l),a!=null&&(v.sign!==t.sign||v.span<a)&&(n[1-l]=n[l]+t.sign*a),v=o(n,l),h!=null&&v.span>h&&(n[1-l]=n[l]+v.sign*h),n}function o(g,n){var u=g[n]-g[1-n];return{span:Math.abs(u),sign:u>0?-1:u<0?1:n?-1:1}}function M(g,n){return Math.min(n[1]!=null?n[1]:1/0,Math.max(n[0]!=null?n[0]:-1/0,g))}export{m as n};
