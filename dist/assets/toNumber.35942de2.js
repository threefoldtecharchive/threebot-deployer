import{c as o}from"../deployer.js";var g=typeof o=="object"&&o&&o.Object===Object&&o,d=g,T=d,S=typeof self=="object"&&self&&self.Object===Object&&self,O=T||S||Function("return this")(),l=O,p=l,v=p.Symbol,f=v,a=f,m=Object.prototype,$=m.hasOwnProperty,_=m.toString,e=a?a.toStringTag:void 0;function u(r){var t=$.call(r,e),n=r[e];try{r[e]=void 0;var y=!0}catch{}var j=_.call(r);return y&&(t?r[e]=n:delete r[e]),j}var I=u,w=Object.prototype,x=w.toString;function G(r){return x.call(r)}var h=G,i=f,N=I,P=h,k="[object Null]",B="[object Undefined]",b=i?i.toStringTag:void 0;function E(r){return r==null?r===void 0?B:k:b&&b in Object(r)?N(r):P(r)}var L=E;function R(r){return r!=null&&typeof r=="object"}var A=R;function F(r){var t=typeof r;return r!=null&&(t=="object"||t=="function")}var H=F,U=L,W=A,q="[object Symbol]";function z(r){return typeof r=="symbol"||W(r)&&U(r)==q}var C=z,D=/\s/;function J(r){for(var t=r.length;t--&&D.test(r.charAt(t)););return t}var K=J,M=K,Q=/^\s+/;function V(r){return r&&r.slice(0,M(r)+1).replace(Q,"")}var X=V,Y=X,c=H,Z=C,s=0/0,rr=/^[-+]0x[0-9a-f]+$/i,tr=/^0b[01]+$/i,er=/^0o[0-7]+$/i,nr=parseInt;function or(r){if(typeof r=="number")return r;if(Z(r))return s;if(c(r)){var t=typeof r.valueOf=="function"?r.valueOf():r;r=c(t)?t+"":t}if(typeof r!="string")return r===0?r:+r;r=Y(r);var n=tr.test(r);return n||er.test(r)?nr(r.slice(2),n?2:8):rr.test(r)?s:+r}var br=or;export{L as _,l as a,d as b,H as c,f as d,C as e,K as f,A as i,br as t};
