import{
r as e
}from"./rolldown-runtime-C60lm6uB.js";
import{
i as t,n,r
}from"./framework-D_rUT4EX.js";
var i=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),a=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),o=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),s=e=>{
let t=o(e);
return t.charAt(0).toUpperCase()+t.slice(1)
},c={
xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`
},l=e=>{
for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;
return!1
},u=e(t(),1),d=(0,u.createContext)({

}),f=()=>(0,u.useContext)(d),p=(0,u.forwardRef)(({
color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:a=``,children:o,iconNode:s,...d
},p)=>{
let{
size:m=24,strokeWidth:h=2,absoluteStrokeWidth:g=!1,color:_=`currentColor`,className:v=``
}=f()??{

},y=r??g?Number(n??h)*24/Number(t??m):n??h;
return(0,u.createElement)(`svg`,{
ref:p,...c,width:t??m??c.width,height:t??m??c.height,stroke:e??_,strokeWidth:y,className:i(`lucide`,v,a),...!o&&!l(d)&&{
"aria-hidden":`true`
},...d
},[...s.map(([e,t])=>(0,u.createElement)(e,t)),...Array.isArray(o)?o:[o]])
}),m=(e,t)=>{
let n=(0,u.forwardRef)(({
className:n,...r
},o)=>(0,u.createElement)(p,{
ref:o,iconNode:t,className:i(`lucide-${
a(s(e))
}`,`lucide-${
e
}`,n),...r
}));
return n.displayName=s(e),n
},h=m(`armchair`,[[`path`,{
d:`M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3`,key:`irtipd`
}],[`path`,{
d:`M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z`,key:`1qyhux`
}],[`path`,{
d:`M5 18v2`,key:`ppbyun`
}],[`path`,{
d:`M19 18v2`,key:`gy7782`
}]]),g=m(`arrow-left`,[[`path`,{
d:`m12 19-7-7 7-7`,key:`1l729n`
}],[`path`,{
d:`M19 12H5`,key:`x3x0zl`
}]]),_=m(`arrow-right`,[[`path`,{
d:`M5 12h14`,key:`1ays0h`
}],[`path`,{
d:`m12 5 7 7-7 7`,key:`xquz4c`
}]]),v=m(`badge-dollar-sign`,[[`path`,{
d:`M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z`,key:`3c2336`
}],[`path`,{
d:`M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8`,key:`1h4pet`
}],[`path`,{
d:`M12 18V6`,key:`zqpxq5`
}]]),y=m(`bed-double`,[[`path`,{
d:`M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8`,key:`1k78r4`
}],[`path`,{
d:`M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4`,key:`fb3tl2`
}],[`path`,{
d:`M12 4v6`,key:`1dcgq2`
}],[`path`,{
d:`M2 18h20`,key:`ajqnye`
}]]),b=m(`camera`,[[`path`,{
d:`M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z`,key:`18u6gg`
}],[`circle`,{
cx:`12`,cy:`13`,r:`3`,key:`1vg3eu`
}]]),x=m(`check`,[[`path`,{
d:`M20 6 9 17l-5-5`,key:`1gmf2c`
}]]),ee=m(`chevron-right`,[[`path`,{
d:`m9 18 6-6-6-6`,key:`mthhwq`
}]]),S=m(`circle-dollar-sign`,[[`circle`,{
cx:`12`,cy:`12`,r:`10`,key:`1mglay`
}],[`path`,{
d:`M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8`,key:`1h4pet`
}],[`path`,{
d:`M12 18V6`,key:`zqpxq5`
}]]),C=m(`clipboard-list`,[[`rect`,{
width:`8`,height:`4`,x:`8`,y:`2`,rx:`1`,ry:`1`,key:`tgr4d6`
}],[`path`,{
d:`M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,key:`116196`
}],[`path`,{
d:`M12 11h4`,key:`1jrz19`
}],[`path`,{
d:`M12 16h4`,key:`n85exb`
}],[`path`,{
d:`M8 11h.01`,key:`1dfujw`
}],[`path`,{
d:`M8 16h.01`,key:`18s6g9`
}]]),w=m(`copy`,[[`rect`,{
width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`
}],[`path`,{
d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`
}]]),T=m(`download`,[[`path`,{
d:`M12 15V3`,key:`m9g1x1`
}],[`path`,{
d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`
}],[`path`,{
d:`m7 10 5 5 5-5`,key:`brsn70`
}]]),te=m(`house`,[[`path`,{
d:`M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`,key:`5wwlr5`
}],[`path`,{
d:`M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,key:`r6nss1`
}]]),ne=m(`layers`,[[`path`,{
d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`
}],[`path`,{
d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`
}],[`path`,{
d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`
}]]),re=m(`lightbulb`,[[`path`,{
d:`M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5`,key:`1gvzjb`
}],[`path`,{
d:`M9 18h6`,key:`x1upvd`
}],[`path`,{
d:`M10 22h4`,key:`ceow96`
}]]),ie=m(`maximize-2`,[[`path`,{
d:`M15 3h6v6`,key:`1q9fwt`
}],[`path`,{
d:`m21 3-7 7`,key:`1l2asr`
}],[`path`,{
d:`m3 21 7-7`,key:`tjx5ai`
}],[`path`,{
d:`M9 21H3v-6`,key:`wtvkvv`
}]]),E=m(`message-circle`,[[`path`,{
d:`M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719`,key:`1sd12s`
}]]),D=m(`message-square-text`,[[`path`,{
d:`M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z`,key:`18887p`
}],[`path`,{
d:`M7 11h10`,key:`1twpyw`
}],[`path`,{
d:`M7 15h6`,key:`d9of3u`
}],[`path`,{
d:`M7 7h8`,key:`af5zfr`
}]]),O=m(`move-3d`,[[`path`,{
d:`M5 3v16h16`,key:`1mqmf9`
}],[`path`,{
d:`m5 19 6-6`,key:`jh6hbb`
}],[`path`,{
d:`m2 6 3-3 3 3`,key:`tkyvxa`
}],[`path`,{
d:`m18 16 3 3-3 3`,key:`1d4glt`
}]]),k=m(`panel-left`,[[`rect`,{
width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`
}],[`path`,{
d:`M9 3v18`,key:`fh3hqa`
}]]),ae=m(`replace`,[[`path`,{
d:`M14 4a1 1 0 0 1 1-1`,key:`dhj8ez`
}],[`path`,{
d:`M15 10a1 1 0 0 1-1-1`,key:`1mnyi5`
}],[`path`,{
d:`M21 4a1 1 0 0 0-1-1`,key:`sfs9ap`
}],[`path`,{
d:`M21 9a1 1 0 0 1-1 1`,key:`mp6qeo`
}],[`path`,{
d:`m3 7 3 3 3-3`,key:`x25e72`
}],[`path`,{
d:`M6 10V5a2 2 0 0 1 2-2h2`,key:`15xut4`
}],[`rect`,{
x:`3`,y:`14`,width:`7`,height:`7`,rx:`1`,key:`1bkyp8`
}]]),A=m(`scan-line`,[[`path`,{
d:`M3 7V5a2 2 0 0 1 2-2h2`,key:`aa7l1z`
}],[`path`,{
d:`M17 3h2a2 2 0 0 1 2 2v2`,key:`4qcy5o`
}],[`path`,{
d:`M21 17v2a2 2 0 0 1-2 2h-2`,key:`6vwrx8`
}],[`path`,{
d:`M7 21H5a2 2 0 0 1-2-2v-2`,key:`ioqczr`
}],[`path`,{
d:`M7 12h10`,key:`b7w52i`
}]]),oe=m(`search`,[[`path`,{
d:`m21 21-4.34-4.34`,key:`14j7rj`
}],[`circle`,{
cx:`11`,cy:`11`,r:`8`,key:`4ej97u`
}]]),se=m(`send`,[[`path`,{
d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`
}],[`path`,{
d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`
}]]),ce=m(`sofa`,[[`path`,{
d:`M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3`,key:`1dgpiv`
}],[`path`,{
d:`M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z`,key:`xacw8m`
}],[`path`,{
d:`M4 18v2`,key:`jwo5n2`
}],[`path`,{
d:`M20 18v2`,key:`1ar1qi`
}],[`path`,{
d:`M12 4v9`,key:`oqhhn3`
}]]),j=m(`sparkles`,[[`path`,{
d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`
}],[`path`,{
d:`M20 2v4`,key:`1rf3ol`
}],[`path`,{
d:`M22 4h-4`,key:`gwowj6`
}],[`circle`,{
cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`
}]]),M=m(`store`,[[`path`,{
d:`M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5`,key:`slp6dd`
}],[`path`,{
d:`M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244`,key:`o0xfot`
}],[`path`,{
d:`M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05`,key:`wn3emo`
}]]),N=m(`table-2`,[[`path`,{
d:`M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18`,key:`gugj83`
}]]),le=m(`trash-2`,[[`path`,{
d:`M10 11v6`,key:`nco0om`
}],[`path`,{
d:`M14 11v6`,key:`outv1u`
}],[`path`,{
d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`
}],[`path`,{
d:`M3 6h18`,key:`d0wm0j`
}],[`path`,{
d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`
}]]),ue=m(`upload`,[[`path`,{
d:`M12 3v12`,key:`1x0j5s`
}],[`path`,{
d:`m17 8-5-5-5 5`,key:`7q97r8`
}],[`path`,{
d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`
}]]),P=m(`wand-sparkles`,[[`path`,{
d:`m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72`,key:`ul74o6`
}],[`path`,{
d:`m14 7 3 3`,key:`1r5n42`
}],[`path`,{
d:`M5 6v4`,key:`ilb8ba`
}],[`path`,{
d:`M19 14v4`,key:`blhpug`
}],[`path`,{
d:`M10 2v2`,key:`7u0qdc`
}],[`path`,{
d:`M7 8H3`,key:`zfb6yr`
}],[`path`,{
d:`M21 16h-4`,key:`1cnmox`
}],[`path`,{
d:`M11 3H9`,key:`1obp7u`
}]]),de=m(`x`,[[`path`,{
d:`M18 6 6 18`,key:`1bl5f8`
}],[`path`,{
d:`m6 6 12 12`,key:`d8bk6v`
}]]);
function fe(e){
var t,n,r=``;
if(typeof e==`string`||typeof e==`number`)r+=e;
else if(typeof e==`object`)if(Array.isArray(e)){
var i=e.length;
for(t=0;
t<i;
t++)e[t]&&(n=fe(e[t]))&&(r&&(r+=` `),r+=n)
}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);
return r
}function F(){
for(var e,t,n=0,r=``,i=arguments.length;
n<i;
n++)(e=arguments[n])&&(t=fe(e))&&(r&&(r+=` `),r+=t);
return r
}var pe=e=>typeof e==`boolean`?`${
e
}`:e===0?`0`:e,I=F,me=(e,t)=>n=>{
if(t?.variants==null)return I(e,n?.class,n?.className);
let{
variants:r,defaultVariants:i
}=t,a=Object.keys(r).map(e=>{
let t=n?.[e],a=i?.[e];
if(t===null)return null;
let o=pe(t)||pe(a);
return r[e][o]
}),o=n&&Object.entries(n).reduce((e,t)=>{
let[n,r]=t;
return r===void 0||(e[n]=r),e
},{

});
return I(e,a,t?.compoundVariants?.reduce((e,t)=>{
let{
class:n,className:r,...a
}=t;
return Object.entries(a).every(e=>{
let[t,n]=e;
return Array.isArray(n)?n.includes({
...i,...o
}[t]):{
...i,...o
}[t]===n
})?[...e,n,r]:e
},[]),n?.class,n?.className)
},he=Object.defineProperty,ge=(e,t)=>he(e,`name`,{
value:t,configurable:!0
});
function _e(e,t){
if(typeof e==`function`)return e(t);
e!=null&&(e.current=t)
}ge(_e,`setRef`);
function L(...e){
return t=>{
let n=!1,r=e.map(e=>{
let r=_e(e,t);
return!n&&typeof r==`function`&&(n=!0),r
});
if(n)return()=>{
for(let t=0;
t<r.length;
t++){
let n=r[t];
typeof n==`function`?n():_e(e[t],null)
}
}
}
}ge(L,`composeRefs`);
function R(...e){
return u.useCallback(L(...e),e)
}ge(R,`useComposedRefs`);
var ve=Object.defineProperty,z=(e,t)=>ve(e,`name`,{
value:t,configurable:!0
});
function ye(e){
let t=u.forwardRef((t,n)=>{
let{
children:r,...i
}=t,a=null,o=!1,s=[];
De(r)&&typeof je==`function`&&(r=je(r._payload)),u.Children.forEach(r,e=>{
if(Te(e)){
o=!0;
let t=e,n=`child`in t.props?t.props.child:t.props.children;
De(n)&&typeof je==`function`&&(n=je(n._payload)),a=Se(t,n),s.push(a?.props?.children)
}else s.push(e)
}),a?a=u.cloneElement(a,void 0,s):!o&&u.Children.count(r)===1&&u.isValidElement(r)&&(a=r);
let c=a?we(a):void 0,l=R(n,c);
if(!a){
if(r||r===0)throw Error(o?Ae(e):ke(e));
return r
}let d=Ce(i,a.props??{

});
return a.type!==u.Fragment&&(d.ref=n?l:c),u.cloneElement(a,d)
});
return t.displayName=`${
e
}.Slot`,t
}z(ye,`createSlot`);
var be=Symbol.for(`radix.slottable`);
function xe(e){
let t=z(e=>`child`in e?e.children(e.child):e.children,`Slottable`);
return t.displayName=`${
e
}.Slottable`,t.__radixId=be,t
}z(xe,`createSlottable`);
var Se=z((e,t)=>{
if(`child`in e.props){
let t=e.props.child;
return u.isValidElement(t)?u.cloneElement(t,void 0,e.props.children(t.props.children)):null
}return u.isValidElement(t)?t:null
},`getSlottableElementFromSlottable`);
function Ce(e,t){
let n={
...t
};
for(let r in t){
let i=e[r],a=t[r];
/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{
let t=a(...e);
return i(...e),t
}:i&&(n[r]=i):r===`style`?n[r]={
...i,...a
}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))
}return{
...e,...n
}
}z(Ce,`mergeProps`);
function we(e){
let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;
return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)
}z(we,`getElementRef`);
function Te(e){
return u.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===be
}z(Te,`isSlottable`);
var Ee=Symbol.for(`react.lazy`);
function De(e){
return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===Ee&&`_payload`in e&&Oe(e._payload)
}z(De,`isLazyComponent`);
function Oe(e){
return typeof e==`object`&&!!e&&`then`in e
}z(Oe,`isPromiseLike`);
var ke=z(e=>`${
e
} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,`createSlotError`),Ae=z(e=>`${
e
} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,`createSlottableError`),je=u.use,Me=e(n(),1),B=r(),Ne=Object.defineProperty,Pe=(e,t)=>Ne(e,`name`,{
value:t,configurable:!0
}),Fe=[`a`,`button`,`div`,`form`,`h2`,`h3`,`img`,`input`,`label`,`li`,`nav`,`ol`,`p`,`select`,`span`,`svg`,`ul`].reduce((e,t)=>{
let n=ye(`Primitive.${
t
}`),r=u.forwardRef((e,r)=>{
let{
asChild:i,...a
}=e,o=i?n:t;
return window[Symbol.for(`radix-ui`)]=!0,(0,B.jsx)(o,{
...a,ref:r
})
});
return r.displayName=`Primitive.${
t
}`,{
...e,[t]:r
}
},{

});
function Ie(e,t){
e&&Me.flushSync(()=>e.dispatchEvent(t))
}Pe(Ie,`dispatchDiscreteCustomEvent`);
var Le=Object.defineProperty,V=(e,t)=>Le(e,`name`,{
value:t,configurable:!0
});
function Re(e,t){
let n=u.createContext(t);
n.displayName=e+`Context`;
let r=V(e=>{
let{
children:t,...r
}=e,i=u.useMemo(()=>r,Object.values(r));
return(0,B.jsx)(n.Provider,{
value:i,children:t
})
},`Provider`);
r.displayName=e+`Provider`;
function i(r,i={

}){
let{
optional:a=!1
}=i,o=u.useContext(n);
if(o)return o;
if(t!==void 0)return t;
if(!a)throw Error(`\`${
r
}\` must be used within \`${
e
}\``)
}return V(i,`useContext`),[r,i]
}V(Re,`createContext`);
function ze(e,t=[]){
let n=[];
function r(t,r){
let i=u.createContext(r);
i.displayName=t+`Context`;
let a=n.length;
n=[...n,r];
let o=V(t=>{
let{
scope:n,children:r,...o
}=t,s=n?.[e]?.[a]||i,c=u.useMemo(()=>o,Object.values(o));
return(0,B.jsx)(s.Provider,{
value:c,children:r
})
},`Provider`);
o.displayName=t+`Provider`;
function s(n,o,s={

}){
let{
optional:c=!1
}=s,l=o?.[e]?.[a]||i,d=u.useContext(l);
if(d)return d;
if(r!==void 0)return r;
if(!c)throw Error(`\`${
n
}\` must be used within \`${
t
}\``)
}return V(s,`useContext`),[o,s]
}V(r,`createContext`);
let i=V(()=>{
let t=n.map(e=>u.createContext(e));
return V(function(n){
let r=n?.[e]||t;
return u.useMemo(()=>({
[`__scope${
e
}`]:{
...n,[e]:r
}
}),[n,r])
},`useScope`)
},`createScope`);
return i.scopeName=e,[r,Be(i,...t)]
}V(ze,`createContextScope`);
function Be(...e){
let t=e[0];
if(e.length===1)return t;
let n=V(()=>{
let n=e.map(e=>({
useScope:e(),scopeName:e.scopeName
}));
return V(function(e){
let r=n.reduce((t,{
useScope:n,scopeName:r
})=>{
let i=n(e)[`__scope${
r
}`];
return{
...t,...i
}
},{

});
return u.useMemo(()=>({
[`__scope${
t.scopeName
}`]:r
}),[r])
},`useComposedScopes`)
},`createScope`);
return n.scopeName=t.scopeName,n
}V(Be,`composeContextScopes`);
var Ve=Object.defineProperty,He=(e,t)=>Ve(e,`name`,{
value:t,configurable:!0
});
function Ue(e,t){
if(typeof e==`function`)return e(t);
e!=null&&(e.current=t)
}He(Ue,`setRef`);
function We(...e){
return t=>{
let n=!1,r=e.map(e=>{
let r=Ue(e,t);
return!n&&typeof r==`function`&&(n=!0),r
});
if(n)return()=>{
for(let t=0;
t<r.length;
t++){
let n=r[t];
typeof n==`function`?n():Ue(e[t],null)
}
}
}
}He(We,`composeRefs`);
function Ge(...e){
return u.useCallback(We(...e),e)
}He(Ge,`useComposedRefs`);
var Ke=Object.defineProperty,H=(e,t)=>Ke(e,`name`,{
value:t,configurable:!0
});
function qe(e){
let t=u.forwardRef((t,n)=>{
let{
children:r,...i
}=t,a=null,o=!1,s=[];
tt(r)&&typeof at==`function`&&(r=at(r._payload)),u.Children.forEach(r,e=>{
if($e(e)){
o=!0;
let t=e,n=`child`in t.props?t.props.child:t.props.children;
tt(n)&&typeof at==`function`&&(n=at(n._payload)),a=Xe(t,n),s.push(a?.props?.children)
}else s.push(e)
}),a?a=u.cloneElement(a,void 0,s):!o&&u.Children.count(r)===1&&u.isValidElement(r)&&(a=r);
let c=a?Qe(a):void 0,l=Ge(n,c);
if(!a){
if(r||r===0)throw Error(o?it(e):rt(e));
return r
}let d=Ze(i,a.props??{

});
return a.type!==u.Fragment&&(d.ref=n?l:c),u.cloneElement(a,d)
});
return t.displayName=`${
e
}.Slot`,t
}H(qe,`createSlot`);
var Je=Symbol.for(`radix.slottable`);
function Ye(e){
let t=H(e=>`child`in e?e.children(e.child):e.children,`Slottable`);
return t.displayName=`${
e
}.Slottable`,t.__radixId=Je,t
}H(Ye,`createSlottable`);
var Xe=H((e,t)=>{
if(`child`in e.props){
let t=e.props.child;
return u.isValidElement(t)?u.cloneElement(t,void 0,e.props.children(t.props.children)):null
}return u.isValidElement(t)?t:null
},`getSlottableElementFromSlottable`);
function Ze(e,t){
let n={
...t
};
for(let r in t){
let i=e[r],a=t[r];
/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{
let t=a(...e);
return i(...e),t
}:i&&(n[r]=i):r===`style`?n[r]={
...i,...a
}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))
}return{
...e,...n
}
}H(Ze,`mergeProps`);
function Qe(e){
let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;
return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)
}H(Qe,`getElementRef`);
function $e(e){
return u.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===Je
}H($e,`isSlottable`);
var et=Symbol.for(`react.lazy`);
function tt(e){
return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===et&&`_payload`in e&&nt(e._payload)
}H(tt,`isLazyComponent`);
function nt(e){
return typeof e==`object`&&!!e&&`then`in e
}H(nt,`isPromiseLike`);
var rt=H(e=>`${
e
} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,`createSlotError`),it=H(e=>`${
e
} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,`createSlottableError`),at=u.use,ot=Object.defineProperty,U=(e,t)=>ot(e,`name`,{
value:t,configurable:!0
});
function st(e){
let t=e+`CollectionProvider`,[n,r]=ze(t),[i,a]=n(t,{
collectionRef:{
current:null
},itemMap:new Map
}),o=U(e=>{
let{
scope:t,children:n
}=e,r=u.useRef(null),a=u.useRef(new Map).current;
return(0,B.jsx)(i,{
scope:t,itemMap:a,collectionRef:r,children:n
})
},`CollectionProvider`);
o.displayName=t;
let s=e+`CollectionSlot`,c=qe(s),l=u.forwardRef((e,t)=>{
let{
scope:n,children:r
}=e;
return(0,B.jsx)(c,{
ref:Ge(t,a(s,n).collectionRef),children:r
})
});
l.displayName=s;
let d=e+`CollectionItemSlot`,f=`data-radix-collection-item`,p=qe(d),m=u.forwardRef((e,t)=>{
let{
scope:n,children:r,...i
}=e,o=u.useRef(null),s=Ge(t,o),c=a(d,n);
return u.useEffect(()=>(c.itemMap.set(o,{
ref:o,...i
}),()=>void c.itemMap.delete(o))),(0,B.jsx)(p,{
[f]:``,ref:s,children:r
})
});
m.displayName=d;
function h(t){
let n=a(e+`CollectionConsumer`,t);
return u.useCallback(()=>{
let e=n.collectionRef.current;
if(!e)return[];
let t=Array.from(e.querySelectorAll(`[${
f
}]`));
return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))
},[n.collectionRef,n.itemMap])
}return U(h,`useCollection`),[{
Provider:o,Slot:l,ItemSlot:m
},h,r]
}U(st,`createCollection`);
var ct=new WeakMap,lt=class e extends Map{
static{
U(this,`OrderedDict`)
}#e;
constructor(e){
super(e),this.#e=[...super.keys()],ct.set(this,!0)
}set(e,t){
return ct.get(this)&&(this.has(e)?this.#e[this.#e.indexOf(e)]=e:this.#e.push(e)),super.set(e,t),this
}insert(e,t,n){
let r=this.has(t),i=this.#e.length,a=ft(e),o=a>=0?a:i+a,s=o<0||o>=i?-1:o;
if(s===this.size||r&&s===this.size-1||s===-1)return this.set(t,n),this;
let c=this.size+ +!r;
a<0&&o++;
let l=[...this.#e],u,d=!1;
for(let e=o;
e<c;
e++)if(o===e){
let i=l[e];
l[e]===t&&(i=l[e+1]),r&&this.delete(t),u=this.get(i),this.set(t,n)
}else{
!d&&l[e-1]===t&&(d=!0);
let n=l[d?e:e-1],r=u;
u=this.get(n),this.delete(n),this.set(n,r)
}return this
}with(t,n,r){
let i=new e(this);
return i.insert(t,n,r),i
}before(e){
let t=this.#e.indexOf(e)-1;
if(!(t<0))return this.entryAt(t)
}setBefore(e,t,n){
let r=this.#e.indexOf(e);
return r===-1?this:this.insert(r,t,n)
}after(e){
let t=this.#e.indexOf(e);
if(t=t===-1||t===this.size-1?-1:t+1,t!==-1)return this.entryAt(t)
}setAfter(e,t,n){
let r=this.#e.indexOf(e);
return r===-1?this:this.insert(r+1,t,n)
}first(){
return this.entryAt(0)
}last(){
return this.entryAt(-1)
}clear(){
return this.#e=[],super.clear()
}delete(e){
let t=super.delete(e);
return t&&this.#e.splice(this.#e.indexOf(e),1),t
}deleteAt(e){
let t=this.keyAt(e);
return t===void 0?!1:this.delete(t)
}at(e){
let t=ut(this.#e,e);
if(t!==void 0)return this.get(t)
}entryAt(e){
let t=ut(this.#e,e);
if(t!==void 0)return[t,this.get(t)]
}indexOf(e){
return this.#e.indexOf(e)
}keyAt(e){
return ut(this.#e,e)
}from(e,t){
let n=this.indexOf(e);
if(n===-1)return;
let r=n+t;
return r<0&&(r=0),r>=this.size&&(r=this.size-1),this.at(r)
}keyFrom(e,t){
let n=this.indexOf(e);
if(n===-1)return;
let r=n+t;
return r<0&&(r=0),r>=this.size&&(r=this.size-1),this.keyAt(r)
}find(e,t){
let n=0;
for(let r of this){
if(Reflect.apply(e,t,[r,n,this]))return r;
n++
}
}findIndex(e,t){
let n=0;
for(let r of this){
if(Reflect.apply(e,t,[r,n,this]))return n;
n++
}return-1
}filter(t,n){
let r=[],i=0;
for(let e of this)Reflect.apply(t,n,[e,i,this])&&r.push(e),i++;
return new e(r)
}map(t,n){
let r=[],i=0;
for(let e of this)r.push([e[0],Reflect.apply(t,n,[e,i,this])]),i++;
return new e(r)
}reduce(...e){
let[t,n]=e,r=0,i=n??this.at(0);
for(let n of this)i=r===0&&e.length===1?n:Reflect.apply(t,this,[i,n,r,this]),r++;
return i
}reduceRight(...e){
let[t,n]=e,r=n??this.at(-1);
for(let n=this.size-1;
n>=0;
n--){
let i=this.at(n);
r=n===this.size-1&&e.length===1?i:Reflect.apply(t,this,[r,i,n,this])
}return r
}toSorted(t){
return new e([...this.entries()].sort(t))
}toReversed(){
let t=new e;
for(let e=this.size-1;
e>=0;
e--){
let n=this.keyAt(e),r=this.get(n);
t.set(n,r)
}return t
}toSpliced(...t){
let n=[...this.entries()];
return n.splice(...t),new e(n)
}slice(t,n){
let r=new e,i=this.size-1;
if(t===void 0)return r;
t<0&&(t+=this.size),n!==void 0&&n>0&&(i=n-1);
for(let e=t;
e<=i;
e++){
let t=this.keyAt(e),n=this.get(t);
r.set(t,n)
}return r
}every(e,t){
let n=0;
for(let r of this){
if(!Reflect.apply(e,t,[r,n,this]))return!1;
n++
}return!0
}some(e,t){
let n=0;
for(let r of this){
if(Reflect.apply(e,t,[r,n,this]))return!0;
n++
}return!1
}
};
function ut(e,t){
if(`at`in Array.prototype)return Array.prototype.at.call(e,t);
let n=dt(e,t);
return n===-1?void 0:e[n]
}U(ut,`at`);
function dt(e,t){
let n=e.length,r=ft(t),i=r>=0?r:n+r;
return i<0||i>=n?-1:i
}U(dt,`toSafeIndex`);
function ft(e){
return e!==e||e===0?0:Math.trunc(e)
}U(ft,`toSafeInteger`);
function pt(e){
let t=e+`CollectionProvider`,[n,r]=ze(t),[i,a]=n(t,{
collectionElement:null,collectionRef:{
current:null
},collectionRefObject:{
current:null
},itemMap:new lt,setItemMap:U(()=>void 0,`setItemMap`)
}),o=U(({
state:e,...t
})=>e?(0,B.jsx)(c,{
...t,state:e
}):(0,B.jsx)(s,{
...t
}),`CollectionProvider`);
o.displayName=t;
let s=U(e=>{
let t=g();
return(0,B.jsx)(c,{
...e,state:t
})
},`CollectionInit`);
s.displayName=t+`Init`;
let c=U(e=>{
let{
scope:t,children:n,state:r
}=e,a=u.useRef(null),[o,s]=u.useState(null),c=Ge(a,s),[l,d]=r;
return u.useEffect(()=>{
if(!o)return;
let e=_t(()=>{

});
return e.observe(o,{
childList:!0,subtree:!0
}),()=>{
e.disconnect()
}
},[o]),(0,B.jsx)(i,{
scope:t,itemMap:l,setItemMap:d,collectionRef:c,collectionRefObject:a,collectionElement:o,children:n
})
},`CollectionProviderImpl`);
c.displayName=t+`Impl`;
let l=e+`CollectionSlot`,d=qe(l),f=u.forwardRef((e,t)=>{
let{
scope:n,children:r
}=e;
return(0,B.jsx)(d,{
ref:Ge(t,a(l,n).collectionRef),children:r
})
});
f.displayName=l;
let p=e+`CollectionItemSlot`,m=qe(p),h=u.forwardRef((e,t)=>{
let{
scope:n,children:r,...i
}=e,o=u.useRef(null),[s,c]=u.useState(null),l=Ge(t,o,c),{
setItemMap:d
}=a(p,n),f=u.useRef(i);
mt(f.current,i)||(f.current=i);
let h=f.current;
return u.useEffect(()=>{
let e=h;
return d(t=>s?t.has(s)?t.set(s,{
...e,element:s
}).toSorted(gt):(t.set(s,{
...e,element:s
}),t.toSorted(gt)):t),()=>{
d(e=>!s||!e.has(s)?e:(e.delete(s),new lt(e)))
}
},[s,h,d]),(0,B.jsx)(m,{
"data-radix-collection-item":``,ref:l,children:r
})
});
h.displayName=p;
function g(){
return u.useState(new lt)
}U(g,`useInitCollection`);
function _(t){
let{
itemMap:n
}=a(e+`CollectionConsumer`,t);
return n
}return U(_,`useCollection`),[{
Provider:o,Slot:f,ItemSlot:h
},{
createCollectionScope:r,useCollection:_,useInitCollection:g
}]
}U(pt,`createCollection`);
function mt(e,t){
if(e===t)return!0;
if(typeof e!=`object`||typeof t!=`object`||e==null||t==null)return!1;
let n=Object.keys(e),r=Object.keys(t);
if(n.length!==r.length)return!1;
for(let r of n)if(!Object.prototype.hasOwnProperty.call(t,r)||e[r]!==t[r])return!1;
return!0
}U(mt,`shallowEqual`);
function ht(e,t){
return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)
}U(ht,`isElementPreceding`);
function gt(e,t){
return!e[1].element||!t[1].element?0:ht(e[1].element,t[1].element)?-1:1
}U(gt,`sortByDocumentPosition`);
function _t(e){
return new MutationObserver(t=>{
for(let n of t)if(n.type===`childList`){
e();
return
}
})
}U(_t,`getChildListObserver`);
var vt=Object.defineProperty,yt=(e,t)=>vt(e,`name`,{
value:t,configurable:!0
}),bt=!!(window.document&&window.document.createElement);
function xt(e,t,{
checkForDefaultPrevented:n=!0
}={

}){
return yt(function(r){
if(e?.(r),n===!1||!r||!r.defaultPrevented)return t?.(r)
},`handleEvent`)
}yt(xt,`composeEventHandlers`);
function St(e){
if(!bt)throw Error(`Cannot access window outside of the DOM`);
return e?.ownerDocument?.defaultView??window
}yt(St,`getOwnerWindow`);
function Ct(e){
if(!bt)throw Error(`Cannot access document outside of the DOM`);
return e?.ownerDocument??document
}yt(Ct,`getOwnerDocument`);
function wt(e,t=!1){
let{
activeElement:n
}=Ct(e);
if(!n?.nodeName)return null;
if(Tt(n)&&n.contentDocument)return wt(n.contentDocument.body,t);
if(t){
let e=n.getAttribute(`aria-activedescendant`);
if(e){
let t=Ct(n).getElementById(e);
if(t)return t
}
}return n
}yt(wt,`getActiveElement`);
function Tt(e){
return e.tagName===`IFRAME`
}yt(Tt,`isFrame`);
var Et=globalThis?.document?u.useLayoutEffect:()=>{

},Dt=Object.defineProperty,Ot=(e,t)=>Dt(e,`name`,{
value:t,configurable:!0
}),kt=u.useEffectEvent,At=u.useInsertionEffect;
function jt(e){
if(typeof kt==`function`)return kt(e);
let t=u.useRef(()=>{
throw Error(`Cannot call an event handler while rendering.`)
});
return typeof At==`function`?At(()=>{
t.current=e
}):Et(()=>{
t.current=e
}),u.useMemo(()=>((...e)=>t.current?.(...e)),[])
}Ot(jt,`useEffectEvent`);
var Mt=Object.defineProperty,Nt=(e,t)=>Mt(e,`name`,{
value:t,configurable:!0
}),Pt=u.useInsertionEffect||Et;
function Ft({
prop:e,defaultProp:t,onChange:n=Nt(()=>{

},`onChange`),caller:r
}){
let[i,a,o]=It({
defaultProp:t,onChange:n
}),s=e!==void 0;
return[s?e:i,u.useCallback(t=>{
if(s){
let n=Lt(t)?t(e):t;
n!==e&&o.current?.(n)
}else a(t)
},[s,e,a,o])]
}Nt(Ft,`useControllableState`);
function It({
defaultProp:e,onChange:t
}){
let[n,r]=u.useState(e),i=u.useRef(n),a=u.useRef(t);
return Pt(()=>{
a.current=t
},[t]),u.useEffect(()=>{
i.current!==n&&(a.current?.(n),i.current=n)
},[n,i]),[n,r,a]
}Nt(It,`useUncontrolledState`);
function Lt(e){
return typeof e==`function`
}Nt(Lt,`isFunction`);
var Rt=Symbol(`RADIX:SYNC_STATE`);
function zt(e,t,n,r){
let{
prop:i,defaultProp:a,onChange:o,caller:s
}=t,c=i!==void 0,l=jt(o),d=[{
...n,state:a
}];
r&&d.push(r);
let[f,p]=u.useReducer((t,n)=>{
if(n.type===Rt)return{
...t,state:n.state
};
let r=e(t,n);
return c&&!Object.is(r.state,t.state)&&l(r.state),r
},...d),m=f.state,h=u.useRef(m);
u.useEffect(()=>{
h.current!==m&&(h.current=m,c||l(m))
},[m,h,c]);
let g=u.useMemo(()=>i===void 0?f:{
...f,state:i
},[f,i]);
return u.useEffect(()=>{
c&&!Object.is(i,f.state)&&p({
type:Rt,state:i
})
},[i,f.state,c]),[g,p]
}Nt(zt,`useControllableStateReducer`);
var Bt=Object.defineProperty,Vt=(e,t)=>Bt(e,`name`,{
value:t,configurable:!0
});
function Ht(e,t){
return u.useReducer((e,n)=>t[e][n]??e,e)
}Vt(Ht,`useStateMachine`);
var Ut=Vt(e=>{
let{
present:t,children:n
}=e,r=Wt(t),i=typeof n==`function`?n({
present:r.isPresent
}):u.Children.only(n),a=Kt(r.ref,Jt(i));
return typeof n==`function`||r.isPresent?u.cloneElement(i,{
ref:a
}):null
},`Presence`);
function Wt(e){
let[t,n]=u.useState(),r=u.useRef(null),i=u.useRef(e),a=u.useRef(`none`),o=u.useRef(void 0),[s,c]=Ht(e?`mounted`:`unmounted`,{
mounted:{
UNMOUNT:`unmounted`,ANIMATION_OUT:`unmountSuspended`
},unmountSuspended:{
MOUNT:`mounted`,ANIMATION_END:`unmounted`
},unmounted:{
MOUNT:`mounted`
}
});
return u.useEffect(()=>{
s===`mounted`?(a.current=o.current??qt(r.current),o.current=void 0):a.current=`none`
},[s]),Et(()=>{
let t=r.current,n=i.current;
if(n!==e){
let r=a.current,s=qt(t);
e?(o.current=s,c(`MOUNT`)):s===`none`||t?.display===`none`?c(`UNMOUNT`):c(n&&r!==s?`ANIMATION_OUT`:`UNMOUNT`),i.current=e
}
},[e,c]),Et(()=>{
if(t){
let e,n=t.ownerDocument.defaultView??window,o=Vt(a=>{
let o=qt(r.current).includes(CSS.escape(a.animationName));
if(a.target===t&&o&&(c(`ANIMATION_END`),!i.current)){
let r=t.style.animationFillMode;
t.style.animationFillMode=`forwards`,e=n.setTimeout(()=>{
t.style.animationFillMode===`forwards`&&(t.style.animationFillMode=r)
})
}
},`handleAnimationEnd`),s=Vt(e=>{
e.target===t&&(a.current=qt(r.current))
},`handleAnimationStart`);
return t.addEventListener(`animationstart`,s),t.addEventListener(`animationcancel`,o),t.addEventListener(`animationend`,o),()=>{
n.clearTimeout(e),t.removeEventListener(`animationstart`,s),t.removeEventListener(`animationcancel`,o),t.removeEventListener(`animationend`,o)
}
}else c(`ANIMATION_END`)
},[t,c]),{
isPresent:[`mounted`,`unmountSuspended`].includes(s),ref:u.useCallback(e=>{
if(e){
let t=getComputedStyle(e);
r.current=t,o.current=qt(t)
}else r.current=null;
n(e)
},[])
}
}Vt(Wt,`usePresence`);
function Gt(e,t){
if(typeof e==`function`)return e(t);
e!=null&&(e.current=t)
}Vt(Gt,`setRef`);
function Kt(...e){
let t=u.useRef(e);
return t.current=e,u.useCallback(e=>{
let n=t.current,r=!1,i=n.map(t=>{
let n=Gt(t,e);
return!r&&typeof n==`function`&&(r=!0),n
});
if(r)return()=>{
for(let e=0;
e<i.length;
e++){
let t=i[e];
typeof t==`function`?t():Gt(n[e],null)
}
}
},[])
}Vt(Kt,`useStableComposedRefs`);
function qt(e){
return e?.animationName||`none`
}Vt(qt,`getAnimationName`);
function Jt(e){
let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;
return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)
}Vt(Jt,`getElementRef`);
var Yt=Object.defineProperty,Xt=(e,t)=>Yt(e,`name`,{
value:t,configurable:!0
}),Zt=u.createContext(void 0);
function Qt(e){
let t=u.useContext(Zt);
return e||t||`ltr`
}Xt(Qt,`useDirection`);
var $t=Object.defineProperty,en=(e,t)=>$t(e,`name`,{
value:t,configurable:!0
});
function tn(e,t){
if(typeof e==`function`)return e(t);
e!=null&&(e.current=t)
}en(tn,`setRef`);
function nn(...e){
return t=>{
let n=!1,r=e.map(e=>{
let r=tn(e,t);
return!n&&typeof r==`function`&&(n=!0),r
});
if(n)return()=>{
for(let t=0;
t<r.length;
t++){
let n=r[t];
typeof n==`function`?n():tn(e[t],null)
}
}
}
}en(nn,`composeRefs`);
function rn(...e){
return u.useCallback(nn(...e),e)
}en(rn,`useComposedRefs`);
var an=Object.defineProperty,on=(e,t)=>an(e,`name`,{
value:t,configurable:!0
});
function sn(e){
let[t,n]=u.useState(void 0);
return Et(()=>{
if(e){
n({
width:e.offsetWidth,height:e.offsetHeight
});
let t=new ResizeObserver(t=>{
if(!Array.isArray(t)||!t.length)return;
let r=t[0],i,a;
if(`borderBoxSize`in r){
let e=r.borderBoxSize,t=Array.isArray(e)?e[0]:e;
i=t.inlineSize,a=t.blockSize
}else i=e.offsetWidth,a=e.offsetHeight;
n({
width:i,height:a
})
});
return t.observe(e,{
box:`border-box`
}),()=>t.unobserve(e)
}else n(void 0)
},[e]),t
}on(sn,`useSize`);
var cn=Object.defineProperty,ln=(e,t)=>cn(e,`name`,{
value:t,configurable:!0
}),un=`Checkbox`,[dn,fn]=ze(un),[pn,mn]=dn(un);
function hn(e){
let{
__scopeCheckbox:t,checked:n,children:r,defaultChecked:i,disabled:a,form:o,name:s,onCheckedChange:c,required:l,value:d=`on`,internal_do_not_use_render:f
}=e,[p,m]=Ft({
prop:n,defaultProp:i??!1,onChange:c,caller:un
}),[h,g]=u.useState(null),[_,v]=u.useState(null),y=u.useRef(!1),[b,x]=u.useReducer(e=>e+1,0),ee=h?!!o||!!h.closest(`form`):!0,S={
checked:p,disabled:a,setChecked:m,control:h,setControl:g,name:s,form:o,value:d,hasConsumerStoppedPropagationRef:y,userInteractionCount:b,onUserInteraction:x,required:l,defaultChecked:wn(i)?!1:i,isFormControl:ee,bubbleInput:_,setBubbleInput:v
};
return(0,B.jsx)(pn,{
scope:t,...S,children:Cn(f)?f(S):r
})
}ln(hn,`CheckboxProvider`);
var gn=`CheckboxTrigger`,_n=u.forwardRef(ln(function({
__scopeCheckbox:e,onKeyDown:t,onClick:n,...r
},i){
let{
control:a,value:o,disabled:s,checked:c,required:l,setControl:d,setChecked:f,hasConsumerStoppedPropagationRef:p,onUserInteraction:m,isFormControl:h,bubbleInput:g
}=mn(gn,e),_=rn(i,d),v=u.useRef(c);
return u.useEffect(()=>{
let e=a?.form;
if(e){
let t=ln(()=>f(v.current),`reset`);
return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)
}
},[a,f]),(0,B.jsx)(Fe.button,{
type:`button`,role:`checkbox`,"aria-checked":wn(c)?`mixed`:c,"aria-required":l,"data-state":Tn(c),"data-disabled":s?``:void 0,disabled:s,value:o,...r,ref:_,onKeyDown:xt(t,e=>{
e.key===`Enter`&&e.preventDefault()
}),onClick:xt(n,e=>{
m(),f(e=>wn(e)?!0:!e),g&&h&&(p.current=e.isPropagationStopped(),p.current||e.stopPropagation())
})
})
},`CheckboxTrigger`)),vn=u.forwardRef(ln(function(e,t){
let{
__scopeCheckbox:n,name:r,checked:i,defaultChecked:a,required:o,disabled:s,value:c,onCheckedChange:l,form:u,...d
}=e;
return(0,B.jsx)(hn,{
__scopeCheckbox:n,checked:i,defaultChecked:a,disabled:s,required:o,onCheckedChange:l,name:r,form:u,value:c,internal_do_not_use_render:({
isFormControl:e
})=>(0,B.jsxs)(B.Fragment,{
children:[(0,B.jsx)(_n,{
...d,ref:t,__scopeCheckbox:n
}),e&&(0,B.jsx)(Sn,{
__scopeCheckbox:n
})]
})
})
},`Checkbox`)),yn=`CheckboxIndicator`,bn=u.forwardRef(ln(function(e,t){
let{
__scopeCheckbox:n,forceMount:r,...i
}=e,a=mn(yn,n);
return(0,B.jsx)(Ut,{
present:r||wn(a.checked)||a.checked===!0,children:(0,B.jsx)(Fe.span,{
"data-state":Tn(a.checked),"data-disabled":a.disabled?``:void 0,...i,ref:t,style:{
pointerEvents:`none`,...e.style
}
})
})
},`CheckboxIndicator`)),xn=`CheckboxBubbleInput`,Sn=u.forwardRef(ln(function({
__scopeCheckbox:e,onClick:t,...n
},r){
let{
control:i,hasConsumerStoppedPropagationRef:a,userInteractionCount:o,checked:s,defaultChecked:c,required:l,disabled:d,name:f,value:p,form:m,bubbleInput:h,setBubbleInput:g
}=mn(xn,e),_=rn(r,g),v=sn(i),y=u.useRef(!1),b=u.useRef(s),x=u.useRef(o);
u.useEffect(()=>{
let e=h;
if(!e)return;
let t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,`checked`).set,r=o!==x.current;
x.current=o;
let i=b.current!==s;
b.current=s;
let c=!(r&&a.current);
if(i&&n){
y.current=!r;
let t=new Event(`click`,{
bubbles:c
});
e.indeterminate=wn(s),n.call(e,wn(s)?!1:s),e.dispatchEvent(t),y.current=!1
}
},[h,s,a,o]);
let ee=u.useRef(wn(s)?!1:s);
return(0,B.jsx)(Fe.input,{
type:`checkbox`,"aria-hidden":!0,defaultChecked:c??ee.current,required:l,disabled:d,name:f,value:p,form:m,...n,tabIndex:-1,ref:_,onClick:xt(t,e=>{
y.current&&e.stopPropagation()
}),style:{
...n.style,...v,position:`absolute`,pointerEvents:`none`,opacity:0,margin:0,transform:`translateX(-100%)`
}
})
},`CheckboxBubbleInput`));
function Cn(e){
return typeof e==`function`
}ln(Cn,`isFunction`);
function wn(e){
return e===`indeterminate`
}ln(wn,`isIndeterminate`);
function Tn(e){
return wn(e)?`indeterminate`:e?`checked`:`unchecked`
}ln(Tn,`getState`);
var En=Object.defineProperty,Dn=(e,t)=>En(e,`name`,{
value:t,configurable:!0
}),On=`Popper`,[kn,An]=ze(On),[jn,Mn]=kn(On),[Nn,Pn]=kn(`PopperContent`);
function Fn(e){
return e!==null
}Dn(Fn,`isNotNull`);
function In(e){
let[t,n=`center`]=e.split(`-`);
return[t,n]
}Dn(In,`getSideAndAlignFromPlacement`);
var Ln=Object.defineProperty,Rn=(e,t)=>Ln(e,`name`,{
value:t,configurable:!0
});
function zn(e){
let t=u.useRef({
value:e,previous:e
});
return u.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])
}Rn(zn,`usePrevious`);
var Bn=Object.defineProperty,Vn=(e,t)=>Bn(e,`name`,{
value:t,configurable:!0
});
function Hn(e,[t,n]){
return Math.min(n,Math.max(t,e))
}Vn(Hn,`clamp`);
var Un=Object.defineProperty,Wn=(e,t)=>Un(e,`name`,{
value:t,configurable:!0
}),Gn=`Progress`,Kn=100,[qn,Jn]=ze(Gn),[Yn,Xn]=qn(Gn),Zn=u.forwardRef(Wn(function(e,t){
let{
__scopeProgress:n,value:r=null,max:i,getValueLabel:a=er,...o
}=e;
(i||i===0)&&!rr(i)&&console.error(ar(`${
i
}`,`Progress`));
let s=rr(i)?i:Kn;
r!==null&&!ir(r,s)&&console.error(or(`${
r
}`,`Progress`));
let c=ir(r,s)?r:null,l=nr(c)?a(c,s):void 0;
return(0,B.jsx)(Yn,{
scope:n,value:c,max:s,children:(0,B.jsx)(Fe.div,{
"aria-valuemax":s,"aria-valuemin":0,"aria-valuenow":nr(c)?c:void 0,"aria-valuetext":l,role:`progressbar`,"data-state":tr(c,s),"data-value":c??void 0,"data-max":s,...o,ref:t
})
})
},`Progress`)),Qn=`ProgressIndicator`,$n=u.forwardRef(Wn(function(e,t){
let{
__scopeProgress:n,...r
}=e,i=Xn(Qn,n);
return(0,B.jsx)(Fe.div,{
"data-state":tr(i.value,i.max),"data-value":i.value??void 0,"data-max":i.max,...r,ref:t
})
},`ProgressIndicator`));
function er(e,t){
return`${
Math.round(e/t*100)
}%`
}Wn(er,`defaultGetValueLabel`);
function tr(e,t){
return e==null?`indeterminate`:e===t?`complete`:`loading`
}Wn(tr,`getProgressState`);
function nr(e){
return typeof e==`number`
}Wn(nr,`isNumber`);
function rr(e){
return nr(e)&&!isNaN(e)&&e>0
}Wn(rr,`isValidMaxNumber`);
function ir(e,t){
return nr(e)&&!isNaN(e)&&e<=t&&e>=0
}Wn(ir,`isValidValueNumber`);
function ar(e,t){
return`Invalid prop \`max\` of value \`${
e
}\` supplied to \`${
t
}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${
Kn
}\`.`
}Wn(ar,`getInvalidMaxError`);
function or(e,t){
return`Invalid prop \`value\` of value \`${
e
}\` supplied to \`${
t
}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${
Kn
} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`
}Wn(or,`getInvalidValueError`);
var sr=Zn,cr=$n,lr=Object.defineProperty,ur=(e,t)=>lr(e,`name`,{
value:t,configurable:!0
});
function dr(e,t){
if(typeof e==`function`)return e(t);
e!=null&&(e.current=t)
}ur(dr,`setRef`);
function fr(...e){
return t=>{
let n=!1,r=e.map(e=>{
let r=dr(e,t);
return!n&&typeof r==`function`&&(n=!0),r
});
if(n)return()=>{
for(let t=0;
t<r.length;
t++){
let n=r[t];
typeof n==`function`?n():dr(e[t],null)
}
}
}
}ur(fr,`composeRefs`);
function pr(...e){
return u.useCallback(fr(...e),e)
}ur(pr,`useComposedRefs`);
var mr=Object.defineProperty,W=(e,t)=>mr(e,`name`,{
value:t,configurable:!0
}),hr=[`PageUp`,`PageDown`],gr=[`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`],_r={
"from-left":[`Home`,`PageDown`,`ArrowDown`,`ArrowLeft`],"from-right":[`Home`,`PageDown`,`ArrowDown`,`ArrowRight`],"from-bottom":[`Home`,`PageDown`,`ArrowDown`,`ArrowLeft`],"from-top":[`Home`,`PageDown`,`ArrowUp`,`ArrowLeft`]
},vr=`Slider`,[yr,br,xr]=st(vr),[Sr,Cr]=ze(vr,[xr]),[wr,Tr]=Sr(vr),Er=u.forwardRef(W(function(e,t){
let{
name:n,min:r=0,max:i=100,step:a=1,orientation:o=`horizontal`,disabled:s=!1,minStepsBetweenThumbs:c=0,defaultValue:l=[r],value:d,onValueChange:f=W(()=>{

},`onValueChange`),onValueCommit:p=W(()=>{

},`onValueCommit`),inverted:m=!1,form:h,...g
}=e,_=u.useRef(new Set),v=u.useRef(0),y=u.useRef(!1),b=o===`horizontal`?kr:Ar,[x,ee]=u.useState(null),S=pr(t,ee),[C=[],w]=Ft({
prop:d,defaultProp:l,onChange:W(e=>{
[..._.current][v.current]?.focus({
preventScroll:!0,focusVisible:y.current
}),y.current=!1,f(e)
},`onChange`)
}),T=u.useRef(C),te=u.useRef(C);
u.useEffect(()=>{
let e=h?x?.ownerDocument.getElementById(h):x?.closest(`form`);
if(e instanceof HTMLFormElement){
let t=W(()=>w(te.current),`reset`);
return e.addEventListener(`reset`,t),()=>e.removeEventListener(`reset`,t)
}
},[x,h,w]);
function ne(e){
E(e,Jr(C,e))
}W(ne,`handleSlideStart`);
function re(e){
E(e,v.current)
}W(re,`handleSlideMove`);
function ie(){
String(C)!==String(T.current)&&p(C)
}W(ie,`handleSlideEnd`);
function E(e,t,{
commit:n
}={
commit:!1
}){
let o=$r(a),s=Hn(ei(Math.round((e-r)/a)*a+r,o),[r,i]);
w((e=[])=>{
let r=Gr(e,s,t);
if(Zr(r,c*a)){
v.current=r.indexOf(s);
let t=String(r)!==String(e);
return t&&n&&p(r),t?r:e
}else return e
})
}return W(E,`updateValues`),(0,B.jsx)(wr,{
scope:e.__scopeSlider,name:n,disabled:s,min:r,max:i,valueIndexToChangeRef:v,thumbs:_.current,values:C,orientation:o,form:h,children:(0,B.jsx)(yr.Provider,{
scope:e.__scopeSlider,children:(0,B.jsx)(yr.Slot,{
scope:e.__scopeSlider,children:(0,B.jsx)(b,{
"aria-disabled":s,"data-disabled":s?``:void 0,...g,ref:S,onPointerDown:xt(g.onPointerDown,()=>{
s||(T.current=C,y.current=!1)
}),min:r,max:i,inverted:m,onSlideStart:s?void 0:ne,onSlideMove:s?void 0:re,onSlideEnd:s?void 0:ie,onHomeKeyDown:()=>{
s||(y.current=!0,E(r,0,{
commit:!0
}))
},onEndKeyDown:()=>{
s||(y.current=!0,E(i,C.length-1,{
commit:!0
}))
},onStepKeyDown:({
event:e,direction:t
})=>{
if(!s){
y.current=!0;
let n=hr.includes(e.key)||e.shiftKey&&gr.includes(e.key)?10:1,i=v.current,o=C[i];
E(ti(o,{
min:r,step:a,direction:t,multiplier:n
}),i,{
commit:!0
})
}
}
})
})
})
})
},`Slider`)),[Dr,Or]=Sr(vr,{
startEdge:`left`,endEdge:`right`,size:`width`,direction:1
}),kr=u.forwardRef(W(function(e,t){
let{
min:n,max:r,dir:i,inverted:a,onSlideStart:o,onSlideMove:s,onSlideEnd:c,onStepKeyDown:l,...d
}=e,[f,p]=u.useState(null),m=pr(t,p),h=u.useRef(void 0),g=Qt(i),_=g===`ltr`,v=_&&!a||!_&&a;
function y(e){
let t=h.current||f.getBoundingClientRect(),i=Qr([0,t.width],v?[n,r]:[r,n]);
return h.current=t,i(e-t.left)
}return W(y,`getValueFromPointer`),(0,B.jsx)(Dr,{
scope:e.__scopeSlider,startEdge:v?`left`:`right`,endEdge:v?`right`:`left`,direction:v?1:-1,size:`width`,children:(0,B.jsx)(jr,{
dir:g,"data-orientation":`horizontal`,...d,ref:m,style:{
...d.style,"--radix-slider-thumb-transform":`translateX(-50%)`
},onSlideStart:e=>{
let t=y(e.clientX);
o?.(t)
},onSlideMove:e=>{
let t=y(e.clientX);
s?.(t)
},onSlideEnd:()=>{
h.current=void 0,c?.()
},onStepKeyDown:e=>{
let t=_r[v?`from-left`:`from-right`].includes(e.key);
l?.({
event:e,direction:t?-1:1
})
}
})
})
},`SliderHorizontal`)),Ar=u.forwardRef(W(function(e,t){
let{
min:n,max:r,inverted:i,onSlideStart:a,onSlideMove:o,onSlideEnd:s,onStepKeyDown:c,...l
}=e,d=u.useRef(null),f=pr(t,d),p=u.useRef(void 0),m=!i;
function h(e){
let t=p.current||d.current.getBoundingClientRect(),i=Qr([0,t.height],m?[r,n]:[n,r]);
return p.current=t,i(e-t.top)
}return W(h,`getValueFromPointer`),(0,B.jsx)(Dr,{
scope:e.__scopeSlider,startEdge:m?`bottom`:`top`,endEdge:m?`top`:`bottom`,size:`height`,direction:m?1:-1,children:(0,B.jsx)(jr,{
"data-orientation":`vertical`,...l,ref:f,style:{
...l.style,"--radix-slider-thumb-transform":`translateY(50%)`
},onSlideStart:e=>{
let t=h(e.clientY);
a?.(t)
},onSlideMove:e=>{
let t=h(e.clientY);
o?.(t)
},onSlideEnd:()=>{
p.current=void 0,s?.()
},onStepKeyDown:e=>{
let t=_r[m?`from-bottom`:`from-top`].includes(e.key);
c?.({
event:e,direction:t?-1:1
})
}
})
})
},`SliderVertical`)),jr=u.forwardRef(W(function(e,t){
let{
__scopeSlider:n,onSlideStart:r,onSlideMove:i,onSlideEnd:a,onHomeKeyDown:o,onEndKeyDown:s,onStepKeyDown:c,...l
}=e,u=Tr(vr,n);
return(0,B.jsx)(Fe.span,{
...l,ref:t,onKeyDown:xt(e.onKeyDown,e=>{
e.key===`Home`?(o(e),e.preventDefault()):e.key===`End`?(s(e),e.preventDefault()):hr.concat(gr).includes(e.key)&&(c(e),e.preventDefault())
}),onPointerDown:xt(e.onPointerDown,e=>{
let t=e.target;
t.setPointerCapture(e.pointerId),e.preventDefault(),u.thumbs.has(t)?t.focus({
preventScroll:!0,focusVisible:!1
}):r(e)
}),onPointerMove:xt(e.onPointerMove,e=>{
e.target.hasPointerCapture(e.pointerId)&&i(e)
}),onPointerUp:xt(e.onPointerUp,e=>{
let t=e.target;
t.hasPointerCapture(e.pointerId)&&(t.releasePointerCapture(e.pointerId),a(e))
})
})
},`SliderImpl`)),Mr=`SliderTrack`,Nr=u.forwardRef(W(function(e,t){
let{
__scopeSlider:n,...r
}=e,i=Tr(Mr,n);
return(0,B.jsx)(Fe.span,{
"data-disabled":i.disabled?``:void 0,"data-orientation":i.orientation,...r,ref:t
})
},`SliderTrack`)),Pr=`SliderRange`,Fr=u.forwardRef(W(function(e,t){
let{
__scopeSlider:n,...r
}=e,i=Tr(Pr,n),a=Or(Pr,n),o=pr(t,u.useRef(null)),s=i.values.length,c=i.values.map(e=>Kr(e,i.min,i.max)),l=s>1?Math.min(...c):0,d=100-Math.max(...c);
return(0,B.jsx)(Fe.span,{
"data-orientation":i.orientation,"data-disabled":i.disabled?``:void 0,...r,ref:o,style:{
...e.style,[a.startEdge]:l+`%`,[a.endEdge]:d+`%`
}
})
},`SliderRange`)),[Ir,Lr]=Sr(`SliderThumb`),Rr=`SliderThumbProvider`;
function zr(e){
let{
__scopeSlider:t,name:n,children:r,internal_do_not_use_render:i
}=e,a=Tr(Rr,t),o=br(t),[s,c]=u.useState(null),l=u.useMemo(()=>s?o().findIndex(e=>e.ref.current===s):-1,[o,s]),d=sn(s),f=s?!!a.form||!!s.closest(`form`):!0,p=a.values[l],m=n??(a.name?a.name+(a.values.length>1?`[]`:``):void 0),h=p===void 0?0:Kr(p,a.min,a.max);
u.useEffect(()=>{
if(s)return a.thumbs.add(s),()=>{
a.thumbs.delete(s)
}
},[s,a.thumbs]);
let g={
value:p,name:m,form:a.form,isFormControl:f,index:l,thumb:s,onThumbChange:c,percent:h,size:d
};
return(0,B.jsx)(Ir,{
scope:t,...g,children:ni(i)?i(g):r
})
}W(zr,`SliderThumbProvider`);
var Br=`SliderThumbTrigger`,Vr=u.forwardRef(W(function(e,t){
let{
__scopeSlider:n,...r
}=e,i=Tr(Br,n),a=Or(Br,n),{
index:o,value:s,percent:c,size:l,onThumbChange:u
}=Lr(Br,n),d=pr(t,u),f=qr(o,i.values.length),p=l?.[a.size],m=p?Yr(p,c,a.direction):0;
return(0,B.jsx)(`span`,{
style:{
transform:`var(--radix-slider-thumb-transform)`,position:`absolute`,[a.startEdge]:`calc(${
c
}% + ${
m
}px)`
},children:(0,B.jsx)(yr.ItemSlot,{
scope:n,children:(0,B.jsx)(Fe.span,{
role:`slider`,"aria-label":e[`aria-label`]||f,"aria-valuemin":i.min,"aria-valuenow":s,"aria-valuemax":i.max,"aria-orientation":i.orientation,"data-orientation":i.orientation,"data-disabled":i.disabled?``:void 0,tabIndex:i.disabled?void 0:0,...r,ref:d,style:s===void 0?{
display:`none`
}:e.style,onFocus:xt(e.onFocus,()=>{
i.valueIndexToChangeRef.current=o
})
})
})
})
},`SliderThumbTrigger`)),Hr=u.forwardRef(W(function(e,t){
let{
__scopeSlider:n,name:r,...i
}=e;
return(0,B.jsx)(zr,{
__scopeSlider:n,name:r,internal_do_not_use_render:({
index:e,isFormControl:r
})=>(0,B.jsxs)(B.Fragment,{
children:[(0,B.jsx)(Vr,{
...i,ref:t,__scopeSlider:n
}),r?(0,B.jsx)(Wr,{
__scopeSlider:n
},e):null]
})
})
},`SliderThumb`)),Ur=`SliderBubbleInput`,Wr=u.forwardRef(W(function({
__scopeSlider:e,...t
},n){
let{
value:r,name:i,form:a
}=Lr(Ur,e),o=u.useRef(null),s=pr(o,n),c=zn(r);
return u.useEffect(()=>{
let e=o.current;
if(!e)return;
let t=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(t,`value`).set;
if(c!==r&&n){
let t=new Event(`input`,{
bubbles:!0
});
n.call(e,r),e.dispatchEvent(t)
}
},[c,r]),(0,B.jsx)(Fe.input,{
style:{
display:`none`
},name:i,form:a,...t,ref:s,defaultValue:r
})
},`SliderBubbleInput`));
function Gr(e=[],t,n){
let r=[...e];
return r[n]=t,r.sort((e,t)=>e-t)
}W(Gr,`getNextSortedValues`);
function Kr(e,t,n){
return Hn(100/(n-t)*(e-t),[0,100])
}W(Kr,`convertValueToPercentage`);
function qr(e,t){
if(t>2)return`Value ${
e+1
} of ${
t
}`;
if(t===2)return[`Minimum`,`Maximum`][e]
}W(qr,`getLabel`);
function Jr(e,t){
if(e.length===1)return 0;
let n=e.map(e=>Math.abs(e-t)),r=Math.min(...n);
return n.indexOf(r)
}W(Jr,`getClosestValueIndex`);
function Yr(e,t,n){
let r=e/2;
return(r-Qr([0,50],[0,r])(t)*n)*n
}W(Yr,`getThumbInBoundsOffset`);
function Xr(e){
return e.slice(0,-1).map((t,n)=>e[n+1]-t)
}W(Xr,`getStepsBetweenValues`);
function Zr(e,t){
if(t>0){
let n=Xr(e);
return Math.min(...n)>=t
}return!0
}W(Zr,`hasMinStepsBetweenValues`);
function Qr(e,t){
return n=>{
if(e[0]===e[1]||t[0]===t[1])return t[0];
let r=(t[1]-t[0])/(e[1]-e[0]);
return t[0]+r*(n-e[0])
}
}W(Qr,`linearScale`);
function $r(e){
if(!Number.isFinite(e))return 0;
let t=e.toString();
if(t.includes(`e`)){
let[e,n]=t.split(`e`),r=e.split(`.`)[1]||``,i=Number(n);
return Math.max(0,r.length-i)
}let n=t.split(`.`)[1];
return n?n.length:0
}W($r,`getDecimalCount`);
function ei(e,t){
let n=10**t;
return Math.round(e*n)/n
}W(ei,`roundValue`);
function ti(e,{
min:t,step:n,direction:r,multiplier:i
}){
let a=$r(n),o=(e-t)/n,s=Math.round(o),c=ei(s*n+t,a)===ei(e,a),l;
return l=c?s+i*r:r>0?Math.ceil(o):Math.floor(o),ei(l*n+t,a)
}W(ti,`getNextStepValue`);
function ni(e){
return typeof e==`function`
}W(ni,`isFunction`);
var ri=Object.defineProperty,ii=(e,t)=>ri(e,`name`,{
value:t,configurable:!0
});
function ai(e,t){
if(typeof e==`function`)return e(t);
e!=null&&(e.current=t)
}ii(ai,`setRef`);
function oi(...e){
return t=>{
let n=!1,r=e.map(e=>{
let r=ai(e,t);
return!n&&typeof r==`function`&&(n=!0),r
});
if(n)return()=>{
for(let t=0;
t<r.length;
t++){
let n=r[t];
typeof n==`function`?n():ai(e[t],null)
}
}
}
}ii(oi,`composeRefs`);
function si(...e){
return u.useCallback(oi(...e),e)
}ii(si,`useComposedRefs`);
var ci=Object.defineProperty,G=(e,t)=>ci(e,`name`,{
value:t,configurable:!0
});
function li(e){
let t=u.forwardRef((t,n)=>{
let{
children:r,...i
}=t,a=null,o=!1,s=[];
vi(r)&&typeof Si==`function`&&(r=Si(r._payload)),u.Children.forEach(r,e=>{
if(gi(e)){
o=!0;
let t=e,n=`child`in t.props?t.props.child:t.props.children;
vi(n)&&typeof Si==`function`&&(n=Si(n._payload)),a=pi(t,n),s.push(a?.props?.children)
}else s.push(e)
}),a?a=u.cloneElement(a,void 0,s):!o&&u.Children.count(r)===1&&u.isValidElement(r)&&(a=r);
let c=a?hi(a):void 0,l=si(n,c);
if(!a){
if(r||r===0)throw Error(o?xi(e):bi(e));
return r
}let d=mi(i,a.props??{

});
return a.type!==u.Fragment&&(d.ref=n?l:c),u.cloneElement(a,d)
});
return t.displayName=`${
e
}.Slot`,t
}G(li,`createSlot`);
var ui=li(`Slot`),di=Symbol.for(`radix.slottable`);
function fi(e){
let t=G(e=>`child`in e?e.children(e.child):e.children,`Slottable`);
return t.displayName=`${
e
}.Slottable`,t.__radixId=di,t
}G(fi,`createSlottable`);
var pi=G((e,t)=>{
if(`child`in e.props){
let t=e.props.child;
return u.isValidElement(t)?u.cloneElement(t,void 0,e.props.children(t.props.children)):null
}return u.isValidElement(t)?t:null
},`getSlottableElementFromSlottable`);
function mi(e,t){
let n={
...t
};
for(let r in t){
let i=e[r],a=t[r];
/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{
let t=a(...e);
return i(...e),t
}:i&&(n[r]=i):r===`style`?n[r]={
...i,...a
}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))
}return{
...e,...n
}
}G(mi,`mergeProps`);
function hi(e){
let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;
return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)
}G(hi,`getElementRef`);
function gi(e){
return u.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===di
}G(gi,`isSlottable`);
var _i=Symbol.for(`react.lazy`);
function vi(e){
return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===_i&&`_payload`in e&&yi(e._payload)
}G(vi,`isLazyComponent`);
function yi(e){
return typeof e==`object`&&!!e&&`then`in e
}G(yi,`isPromiseLike`);
var bi=G(e=>`${
e
} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,`createSlotError`),xi=G(e=>`${
e
} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,`createSlottableError`),Si=u.use,Ci=Object.defineProperty,wi=(e,t)=>Ci(e,`name`,{
value:t,configurable:!0
});
function Ti(e,t){
if(typeof e==`function`)return e(t);
e!=null&&(e.current=t)
}wi(Ti,`setRef`);
function Ei(...e){
return t=>{
let n=!1,r=e.map(e=>{
let r=Ti(e,t);
return!n&&typeof r==`function`&&(n=!0),r
});
if(n)return()=>{
for(let t=0;
t<r.length;
t++){
let n=r[t];
typeof n==`function`?n():Ti(e[t],null)
}
}
}
}wi(Ei,`composeRefs`);
function Di(...e){
return u.useCallback(Ei(...e),e)
}wi(Di,`useComposedRefs`);
var Oi=Object.defineProperty,K=(e,t)=>Oi(e,`name`,{
value:t,configurable:!0
});
function ki(e){
let t=u.forwardRef((t,n)=>{
let{
children:r,...i
}=t,a=null,o=!1,s=[];
Li(r)&&typeof Vi==`function`&&(r=Vi(r._payload)),u.Children.forEach(r,e=>{
if(Fi(e)){
o=!0;
let t=e,n=`child`in t.props?t.props.child:t.props.children;
Li(n)&&typeof Vi==`function`&&(n=Vi(n._payload)),a=Mi(t,n),s.push(a?.props?.children)
}else s.push(e)
}),a?a=u.cloneElement(a,void 0,s):!o&&u.Children.count(r)===1&&u.isValidElement(r)&&(a=r);
let c=a?Pi(a):void 0,l=Di(n,c);
if(!a){
if(r||r===0)throw Error(o?Bi(e):zi(e));
return r
}let d=Ni(i,a.props??{

});
return a.type!==u.Fragment&&(d.ref=n?l:c),u.cloneElement(a,d)
});
return t.displayName=`${
e
}.Slot`,t
}K(ki,`createSlot`);
var Ai=Symbol.for(`radix.slottable`);
function ji(e){
let t=K(e=>`child`in e?e.children(e.child):e.children,`Slottable`);
return t.displayName=`${
e
}.Slottable`,t.__radixId=Ai,t
}K(ji,`createSlottable`);
var Mi=K((e,t)=>{
if(`child`in e.props){
let t=e.props.child;
return u.isValidElement(t)?u.cloneElement(t,void 0,e.props.children(t.props.children)):null
}return u.isValidElement(t)?t:null
},`getSlottableElementFromSlottable`);
function Ni(e,t){
let n={
...t
};
for(let r in t){
let i=e[r],a=t[r];
/^on[A-Z]/.test(r)?i&&a?n[r]=(...e)=>{
let t=a(...e);
return i(...e),t
}:i&&(n[r]=i):r===`style`?n[r]={
...i,...a
}:r===`className`&&(n[r]=[i,a].filter(Boolean).join(` `))
}return{
...e,...n
}
}K(Ni,`mergeProps`);
function Pi(e){
let t=Object.getOwnPropertyDescriptor(e.props,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning;
return n?e.ref:(t=Object.getOwnPropertyDescriptor(e,`ref`)?.get,n=t&&`isReactWarning`in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)
}K(Pi,`getElementRef`);
function Fi(e){
return u.isValidElement(e)&&typeof e.type==`function`&&`__radixId`in e.type&&e.type.__radixId===Ai
}K(Fi,`isSlottable`);
var Ii=Symbol.for(`react.lazy`);
function Li(e){
return typeof e==`object`&&!!e&&`$$typeof`in e&&e.$$typeof===Ii&&`_payload`in e&&Ri(e._payload)
}K(Li,`isLazyComponent`);
function Ri(e){
return typeof e==`object`&&!!e&&`then`in e
}K(Ri,`isPromiseLike`);
var zi=K(e=>`${
e
} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,`createSlotError`),Bi=K(e=>`${
e
} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,`createSlottableError`),Vi=u.use,Hi=Object.defineProperty,Ui=(e,t)=>Hi(e,`name`,{
value:t,configurable:!0
}),[Wi,Gi]=ze(`Tooltip`,[An]);
An();
var Ki=`TooltipProvider`,qi=700,[Ji,Yi]=Wi(Ki),Xi=Ui(e=>{
let{
__scopeTooltip:t,delayDuration:n=qi,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:a
}=e,o=u.useRef(!0),s=u.useRef(!1),c=u.useRef(0);
return u.useEffect(()=>{
let e=c.current;
return()=>window.clearTimeout(e)
},[]),(0,B.jsx)(Ji,{
scope:t,isOpenDelayedRef:o,delayDuration:n,onOpen:u.useCallback(()=>{
r<=0||(window.clearTimeout(c.current),o.current=!1)
},[r]),onClose:u.useCallback(()=>{
r<=0||(window.clearTimeout(c.current),c.current=window.setTimeout(()=>o.current=!0,r))
},[r]),isPointerInTransitRef:s,onPointerInTransitChange:u.useCallback(e=>{
s.current=e
},[]),disableHoverableContent:i,children:a
})
},`TooltipProvider`),[Zi,Qi]=Wi(`Tooltip`),[$i,ea]=Wi(`TooltipPortal`,{
forceMount:void 0
});
function ta(e,t){
let n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),i=Math.abs(t.right-e.x),a=Math.abs(t.left-e.x);
switch(Math.min(n,r,i,a)){
case a:return`left`;
case i:return`right`;
case n:return`top`;
case r:return`bottom`;
default:throw Error(`unreachable`)
}
}Ui(ta,`getExitSideFromRect`);
function na(e,t,n=5){
let r=[];
switch(t){
case`top`:r.push({
x:e.x-n,y:e.y+n
},{
x:e.x+n,y:e.y+n
});
break;
case`bottom`:r.push({
x:e.x-n,y:e.y-n
},{
x:e.x+n,y:e.y-n
});
break;
case`left`:r.push({
x:e.x+n,y:e.y-n
},{
x:e.x+n,y:e.y+n
});
break;
case`right`:r.push({
x:e.x-n,y:e.y-n
},{
x:e.x-n,y:e.y+n
});
break
}return r
}Ui(na,`getPaddedExitPoints`);
function ra(e){
let{
top:t,right:n,bottom:r,left:i
}=e;
return[{
x:i,y:t
},{
x:n,y:t
},{
x:n,y:r
},{
x:i,y:r
}]
}Ui(ra,`getPointsFromRect`);
function ia(e,t){
let{
x:n,y:r
}=e,i=!1;
for(let e=0,a=t.length-1;
e<t.length;
a=e++){
let o=t[e],s=t[a],c=o.x,l=o.y,u=s.x,d=s.y;
l>r!=d>r&&n<(u-c)*(r-l)/(d-l)+c&&(i=!i)
}return i
}Ui(ia,`isPointInPolygon`);
function aa(e){
let t=e.slice();
return t.sort((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:+(e.y>t.y)),oa(t)
}Ui(aa,`getHull`);
function oa(e){
if(e.length<=1)return e.slice();
let t=[];
for(let n=0;
n<e.length;
n++){
let r=e[n];
for(;
t.length>=2;
){
let e=t[t.length-1],n=t[t.length-2];
if((e.x-n.x)*(r.y-n.y)>=(e.y-n.y)*(r.x-n.x))t.pop();
else break
}t.push(r)
}t.pop();
let n=[];
for(let t=e.length-1;
t>=0;
t--){
let r=e[t];
for(;
n.length>=2;
){
let e=n[n.length-1],t=n[n.length-2];
if((e.x-t.x)*(r.y-t.y)>=(e.y-t.y)*(r.x-t.x))n.pop();
else break
}n.push(r)
}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)
}Ui(oa,`getHullPresorted`);
var sa=Xi,ca=(e,t)=>{
let n=Array(e.length+t.length);
for(let t=0;
t<e.length;
t++)n[t]=e[t];
for(let r=0;
r<t.length;
r++)n[e.length+r]=t[r];
return n
},la=(e,t)=>({
classGroupId:e,validator:t
}),ua=(e=new Map,t=null,n)=>({
nextPart:e,validators:t,classGroupId:n
}),da=`-`,fa=[],pa=`arbitrary..`,ma=e=>{
let t=_a(e),{
conflictingClassGroups:n,conflictingClassGroupModifiers:r
}=e;
return{
getClassGroupId:e=>{
if(e.startsWith(`[`)&&e.endsWith(`]`))return ga(e);
let n=e.split(da);
return ha(n,+(n[0]===``&&n.length>1),t)
},getConflictingClassGroupIds:(e,t)=>{
if(t){
let t=r[e],i=n[e];
return t?i?ca(i,t):t:i||fa
}return n[e]||fa
}
}
},ha=(e,t,n)=>{
if(e.length-t===0)return n.classGroupId;
let r=e[t],i=n.nextPart.get(r);
if(i){
let n=ha(e,t+1,i);
if(n)return n
}let a=n.validators;
if(a===null)return;
let o=t===0?e.join(da):e.slice(t).join(da),s=a.length;
for(let e=0;
e<s;
e++){
let t=a[e];
if(t.validator(o))return t.classGroupId
}
},ga=e=>e.slice(1,-1).indexOf(`:`)===-1?void 0:(()=>{
let t=e.slice(1,-1),n=t.indexOf(`:`),r=t.slice(0,n);
return r?pa+r:void 0
})(),_a=e=>{
let{
theme:t,classGroups:n
}=e;
return va(n,t)
},va=(e,t)=>{
let n=ua();
for(let r in e){
let i=e[r];
ya(i,n,r,t)
}return n
},ya=(e,t,n,r)=>{
let i=e.length;
for(let a=0;
a<i;
a++){
let i=e[a];
ba(i,t,n,r)
}
},ba=(e,t,n,r)=>{
if(typeof e==`string`){
xa(e,t,n);
return
}if(typeof e==`function`){
Sa(e,t,n,r);
return
}Ca(e,t,n,r)
},xa=(e,t,n)=>{
let r=e===``?t:wa(t,e);
r.classGroupId=n
},Sa=(e,t,n,r)=>{
if(Ta(e)){
ya(e(r),t,n,r);
return
}t.validators===null&&(t.validators=[]),t.validators.push(la(n,e))
},Ca=(e,t,n,r)=>{
let i=Object.entries(e),a=i.length;
for(let e=0;
e<a;
e++){
let[a,o]=i[e];
ya(o,wa(t,a),n,r)
}
},wa=(e,t)=>{
let n=e,r=t.split(da),i=r.length;
for(let e=0;
e<i;
e++){
let t=r[e],i=n.nextPart.get(t);
i||(i=ua(),n.nextPart.set(t,i)),n=i
}return n
},Ta=e=>`isThemeGetter`in e&&e.isThemeGetter===!0,Ea=e=>{
if(e<1)return{
get:()=>void 0,set:()=>{

}
};
let t=0,n=Object.create(null),r=Object.create(null),i=(i,a)=>{
n[i]=a,t++,t>e&&(t=0,r=n,n=Object.create(null))
};
return{
get(e){
let t=n[e];
if(t!==void 0)return t;
if((t=r[e])!==void 0)return i(e,t),t
},set(e,t){
e in n?n[e]=t:i(e,t)
}
}
},Da=`!`,Oa=`:`,ka=[],Aa=(e,t,n,r,i)=>({
modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:r,isExternal:i
}),ja=e=>{
let{
prefix:t,experimentalParseClassName:n
}=e,r=e=>{
let t=[],n=0,r=0,i=0,a,o=e.length;
for(let s=0;
s<o;
s++){
let o=e[s];
if(n===0&&r===0){
if(o===Oa){
t.push(e.slice(i,s)),i=s+1;
continue
}if(o===`/`){
a=s;
continue
}
}o===`[`?n++:o===`]`?n--:o===`(`?r++:o===`)`&&r--
}let s=t.length===0?e:e.slice(i),c=s,l=!1;
s.endsWith(Da)?(c=s.slice(0,-1),l=!0):s.startsWith(Da)&&(c=s.slice(1),l=!0);
let u=a&&a>i?a-i:void 0;
return Aa(t,l,c,u)
};
if(t){
let e=t+Oa,n=r;
r=t=>t.startsWith(e)?n(t.slice(e.length)):Aa(ka,!1,t,void 0,!0)
}if(n){
let e=r;
r=t=>n({
className:t,parseClassName:e
})
}return r
},Ma=e=>{
let t=new Map;
return e.orderSensitiveModifiers.forEach((e,n)=>{
t.set(e,1e6+n)
}),e=>{
let n=[],r=[];
for(let i=0;
i<e.length;
i++){
let a=e[i],o=a[0]===`[`,s=t.has(a);
o||s?(r.length>0&&(r.sort(),n.push(...r),r=[]),n.push(a)):r.push(a)
}return r.length>0&&(r.sort(),n.push(...r)),n
}
},Na=e=>({
cache:Ea(e.cacheSize),parseClassName:ja(e),sortModifiers:Ma(e),postfixLookupClassGroupIds:Pa(e),...ma(e)
}),Pa=e=>{
let t=Object.create(null),n=e.postfixLookupClassGroups;
if(n)for(let e=0;
e<n.length;
e++)t[n[e]]=!0;
return t
},Fa=/\s+/,Ia=(e,t)=>{
let{
parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:a,postfixLookupClassGroupIds:o
}=t,s=[],c=e.trim().split(Fa),l=``;
for(let e=c.length-1;
e>=0;
--e){
let t=c[e],{
isExternal:u,modifiers:d,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:m
}=n(t);
if(u){
l=t+(l.length>0?` `+l:l);
continue
}let h=!!m,g;
if(h){
g=r(p.substring(0,m));
let e=g&&o[g]?r(p):void 0;
e&&e!==g&&(g=e,h=!1)
}else g=r(p);
if(!g){
if(!h){
l=t+(l.length>0?` `+l:l);
continue
}if(g=r(p),!g){
l=t+(l.length>0?` `+l:l);
continue
}h=!1
}let _=d.length===0?``:d.length===1?d[0]:a(d).join(`:`),v=f?_+Da:_,y=v+g;
if(s.indexOf(y)>-1)continue;
s.push(y);
let b=i(g,h);
for(let e=0;
e<b.length;
++e){
let t=b[e];
s.push(v+t)
}l=t+(l.length>0?` `+l:l)
}return l
},La=(...e)=>{
let t=0,n,r,i=``;
for(;
t<e.length;
)(n=e[t++])&&(r=Ra(n))&&(i&&(i+=` `),i+=r);
return i
},Ra=e=>{
if(typeof e==`string`)return e;
let t,n=``;
for(let r=0;
r<e.length;
r++)e[r]&&(t=Ra(e[r]))&&(n&&(n+=` `),n+=t);
return n
},za=(e,...t)=>{
let n,r,i,a,o=o=>(n=Na(t.reduce((e,t)=>t(e),e())),r=n.cache.get,i=n.cache.set,a=s,s(o)),s=e=>{
let t=r(e);
if(t)return t;
let a=Ia(e,n);
return i(e,a),a
};
return a=o,(...e)=>a(La(...e))
},Ba=[],q=e=>{
let t=t=>t[e]||Ba;
return t.isThemeGetter=!0,t
},Va=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Ha=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Ua=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,Wa=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ga=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ka=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,qa=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ja=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ya=e=>Ua.test(e),J=e=>!!e&&!Number.isNaN(Number(e)),Xa=e=>!!e&&Number.isInteger(Number(e)),Za=e=>e.endsWith(`%`)&&J(e.slice(0,-1)),Qa=e=>Wa.test(e),$a=()=>!0,eo=e=>Ga.test(e)&&!Ka.test(e),to=()=>!1,no=e=>qa.test(e),ro=e=>Ja.test(e),io=e=>!Y(e)&&!X(e),ao=e=>e.startsWith(`@container`)&&(e[10]===`/`&&e[11]!==void 0||e[11]===`s`&&e[16]!==void 0&&e.startsWith(`-size/`,10)||e[11]===`n`&&e[18]!==void 0&&e.startsWith(`-normal/`,10)),oo=e=>So(e,Eo,to),Y=e=>Va.test(e),so=e=>So(e,Do,eo),co=e=>So(e,Oo,J),lo=e=>So(e,Ao,$a),uo=e=>So(e,ko,to),fo=e=>So(e,wo,to),po=e=>So(e,To,ro),mo=e=>So(e,jo,no),X=e=>Ha.test(e),ho=e=>Co(e,Do),go=e=>Co(e,ko),_o=e=>Co(e,wo),vo=e=>Co(e,Eo),yo=e=>Co(e,To),bo=e=>Co(e,jo,!0),xo=e=>Co(e,Ao,!0),So=(e,t,n)=>{
let r=Va.exec(e);
return r?r[1]?t(r[1]):n(r[2]):!1
},Co=(e,t,n=!1)=>{
let r=Ha.exec(e);
return r?r[1]?t(r[1]):n:!1
},wo=e=>e===`position`||e===`percentage`,To=e=>e===`image`||e===`url`,Eo=e=>e===`length`||e===`size`||e===`bg-size`,Do=e=>e===`length`,Oo=e=>e===`number`,ko=e=>e===`family-name`,Ao=e=>e===`number`||e===`weight`,jo=e=>e===`shadow`,Mo=za(()=>{
let e=q(`color`),t=q(`font`),n=q(`text`),r=q(`font-weight`),i=q(`tracking`),a=q(`leading`),o=q(`breakpoint`),s=q(`container`),c=q(`spacing`),l=q(`radius`),u=q(`shadow`),d=q(`inset-shadow`),f=q(`text-shadow`),p=q(`drop-shadow`),m=q(`blur`),h=q(`perspective`),g=q(`aspect`),_=q(`ease`),v=q(`animate`),y=()=>[`auto`,`avoid`,`all`,`avoid-page`,`page`,`left`,`right`,`column`],b=()=>[`center`,`top`,`bottom`,`left`,`right`,`top-left`,`left-top`,`top-right`,`right-top`,`bottom-right`,`right-bottom`,`bottom-left`,`left-bottom`],x=()=>[...b(),X,Y],ee=()=>[`auto`,`hidden`,`clip`,`visible`,`scroll`],S=()=>[`auto`,`contain`,`none`],C=()=>[X,Y,c],w=()=>[Ya,`full`,`auto`,...C()],T=()=>[Xa,`none`,`subgrid`,X,Y],te=()=>[`auto`,{
span:[`full`,Xa,X,Y]
},Xa,X,Y],ne=()=>[Xa,`auto`,X,Y],re=()=>[`auto`,`min`,`max`,`fr`,X,Y],ie=()=>[`start`,`end`,`center`,`between`,`around`,`evenly`,`stretch`,`baseline`,`center-safe`,`end-safe`],E=()=>[`start`,`end`,`center`,`stretch`,`center-safe`,`end-safe`],D=()=>[`auto`,...C()],O=()=>[Ya,`auto`,`full`,`dvw`,`dvh`,`lvw`,`lvh`,`svw`,`svh`,`min`,`max`,`fit`,...C()],k=()=>[Ya,`screen`,`full`,`dvw`,`lvw`,`svw`,`min`,`max`,`fit`,...C()],ae=()=>[Ya,`screen`,`full`,`lh`,`dvh`,`lvh`,`svh`,`min`,`max`,`fit`,...C()],A=()=>[e,X,Y],oe=()=>[...b(),_o,fo,{
position:[X,Y]
}],se=()=>[`no-repeat`,{
repeat:[``,`x`,`y`,`space`,`round`]
}],ce=()=>[`auto`,`cover`,`contain`,vo,oo,{
size:[X,Y]
}],j=()=>[Za,ho,so],M=()=>[``,`none`,`full`,l,X,Y],N=()=>[``,J,ho,so],le=()=>[`solid`,`dashed`,`dotted`,`double`],ue=()=>[`normal`,`multiply`,`screen`,`overlay`,`darken`,`lighten`,`color-dodge`,`color-burn`,`hard-light`,`soft-light`,`difference`,`exclusion`,`hue`,`saturation`,`color`,`luminosity`],P=()=>[J,Za,_o,fo],de=()=>[``,`none`,m,X,Y],fe=()=>[`none`,J,X,Y],F=()=>[`none`,J,X,Y],pe=()=>[J,X,Y],I=()=>[Ya,`full`,...C()];
return{
cacheSize:500,theme:{
animate:[`spin`,`ping`,`pulse`,`bounce`],aspect:[`video`],blur:[Qa],breakpoint:[Qa],color:[$a],container:[Qa],"drop-shadow":[Qa],ease:[`in`,`out`,`in-out`],font:[io],"font-weight":[`thin`,`extralight`,`light`,`normal`,`medium`,`semibold`,`bold`,`extrabold`,`black`],"inset-shadow":[Qa],leading:[`none`,`tight`,`snug`,`normal`,`relaxed`,`loose`],perspective:[`dramatic`,`near`,`normal`,`midrange`,`distant`,`none`],radius:[Qa],shadow:[Qa],spacing:[`px`,J],text:[Qa],"text-shadow":[Qa],tracking:[`tighter`,`tight`,`normal`,`wide`,`wider`,`widest`]
},classGroups:{
aspect:[{
aspect:[`auto`,`square`,Ya,Y,X,g]
}],container:[`container`],"container-type":[{
"@container":[``,`normal`,`size`,X,Y]
}],"container-named":[ao],columns:[{
columns:[J,Y,X,s]
}],"break-after":[{
"break-after":y()
}],"break-before":[{
"break-before":y()
}],"break-inside":[{
"break-inside":[`auto`,`avoid`,`avoid-page`,`avoid-column`]
}],"box-decoration":[{
"box-decoration":[`slice`,`clone`]
}],box:[{
box:[`border`,`content`]
}],display:[`block`,`inline-block`,`inline`,`flex`,`inline-flex`,`table`,`inline-table`,`table-caption`,`table-cell`,`table-column`,`table-column-group`,`table-footer-group`,`table-header-group`,`table-row-group`,`table-row`,`flow-root`,`grid`,`inline-grid`,`contents`,`list-item`,`hidden`],sr:[`sr-only`,`not-sr-only`],float:[{
float:[`right`,`left`,`none`,`start`,`end`]
}],clear:[{
clear:[`left`,`right`,`both`,`none`,`start`,`end`]
}],isolation:[`isolate`,`isolation-auto`],"object-fit":[{
object:[`contain`,`cover`,`fill`,`none`,`scale-down`]
}],"object-position":[{
object:x()
}],overflow:[{
overflow:ee()
}],"overflow-x":[{
"overflow-x":ee()
}],"overflow-y":[{
"overflow-y":ee()
}],overscroll:[{
overscroll:S()
}],"overscroll-x":[{
"overscroll-x":S()
}],"overscroll-y":[{
"overscroll-y":S()
}],position:[`static`,`fixed`,`absolute`,`relative`,`sticky`],inset:[{
inset:w()
}],"inset-x":[{
"inset-x":w()
}],"inset-y":[{
"inset-y":w()
}],start:[{
"inset-s":w(),start:w()
}],end:[{
"inset-e":w(),end:w()
}],"inset-bs":[{
"inset-bs":w()
}],"inset-be":[{
"inset-be":w()
}],top:[{
top:w()
}],right:[{
right:w()
}],bottom:[{
bottom:w()
}],left:[{
left:w()
}],visibility:[`visible`,`invisible`,`collapse`],z:[{
z:[Xa,`auto`,X,Y]
}],basis:[{
basis:[Ya,`full`,`auto`,s,...C()]
}],"flex-direction":[{
flex:[`row`,`row-reverse`,`col`,`col-reverse`]
}],"flex-wrap":[{
flex:[`nowrap`,`wrap`,`wrap-reverse`]
}],flex:[{
flex:[J,Ya,`auto`,`initial`,`none`,Y]
}],grow:[{
grow:[``,J,X,Y]
}],shrink:[{
shrink:[``,J,X,Y]
}],order:[{
order:[Xa,`first`,`last`,`none`,X,Y]
}],"grid-cols":[{
"grid-cols":T()
}],"col-start-end":[{
col:te()
}],"col-start":[{
"col-start":ne()
}],"col-end":[{
"col-end":ne()
}],"grid-rows":[{
"grid-rows":T()
}],"row-start-end":[{
row:te()
}],"row-start":[{
"row-start":ne()
}],"row-end":[{
"row-end":ne()
}],"grid-flow":[{
"grid-flow":[`row`,`col`,`dense`,`row-dense`,`col-dense`]
}],"auto-cols":[{
"auto-cols":re()
}],"auto-rows":[{
"auto-rows":re()
}],gap:[{
gap:C()
}],"gap-x":[{
"gap-x":C()
}],"gap-y":[{
"gap-y":C()
}],"justify-content":[{
justify:[...ie(),`normal`]
}],"justify-items":[{
"justify-items":[...E(),`normal`]
}],"justify-self":[{
"justify-self":[`auto`,...E()]
}],"align-content":[{
content:[`normal`,...ie()]
}],"align-items":[{
items:[...E(),{
baseline:[``,`last`]
}]
}],"align-self":[{
self:[`auto`,...E(),{
baseline:[``,`last`]
}]
}],"place-content":[{
"place-content":ie()
}],"place-items":[{
"place-items":[...E(),`baseline`]
}],"place-self":[{
"place-self":[`auto`,...E()]
}],p:[{
p:C()
}],px:[{
px:C()
}],py:[{
py:C()
}],ps:[{
ps:C()
}],pe:[{
pe:C()
}],pbs:[{
pbs:C()
}],pbe:[{
pbe:C()
}],pt:[{
pt:C()
}],pr:[{
pr:C()
}],pb:[{
pb:C()
}],pl:[{
pl:C()
}],m:[{
m:D()
}],mx:[{
mx:D()
}],my:[{
my:D()
}],ms:[{
ms:D()
}],me:[{
me:D()
}],mbs:[{
mbs:D()
}],mbe:[{
mbe:D()
}],mt:[{
mt:D()
}],mr:[{
mr:D()
}],mb:[{
mb:D()
}],ml:[{
ml:D()
}],"space-x":[{
"space-x":C()
}],"space-x-reverse":[`space-x-reverse`],"space-y":[{
"space-y":C()
}],"space-y-reverse":[`space-y-reverse`],size:[{
size:O()
}],"inline-size":[{
inline:[`auto`,...k()]
}],"min-inline-size":[{
"min-inline":[`auto`,...k()]
}],"max-inline-size":[{
"max-inline":[`none`,...k()]
}],"block-size":[{
block:[`auto`,...ae()]
}],"min-block-size":[{
"min-block":[`auto`,...ae()]
}],"max-block-size":[{
"max-block":[`none`,...ae()]
}],w:[{
w:[s,`screen`,...O()]
}],"min-w":[{
"min-w":[s,`screen`,`none`,...O()]
}],"max-w":[{
"max-w":[s,`screen`,`none`,`prose`,{
screen:[o]
},...O()]
}],h:[{
h:[`screen`,`lh`,...O()]
}],"min-h":[{
"min-h":[`screen`,`lh`,`none`,...O()]
}],"max-h":[{
"max-h":[`screen`,`lh`,...O()]
}],"font-size":[{
text:[`base`,n,ho,so]
}],"font-smoothing":[`antialiased`,`subpixel-antialiased`],"font-style":[`italic`,`not-italic`],"font-weight":[{
font:[r,xo,lo]
}],"font-stretch":[{
"font-stretch":[`ultra-condensed`,`extra-condensed`,`condensed`,`semi-condensed`,`normal`,`semi-expanded`,`expanded`,`extra-expanded`,`ultra-expanded`,Za,Y]
}],"font-family":[{
font:[go,uo,t]
}],"font-features":[{
"font-features":[Y]
}],"fvn-normal":[`normal-nums`],"fvn-ordinal":[`ordinal`],"fvn-slashed-zero":[`slashed-zero`],"fvn-figure":[`lining-nums`,`oldstyle-nums`],"fvn-spacing":[`proportional-nums`,`tabular-nums`],"fvn-fraction":[`diagonal-fractions`,`stacked-fractions`],tracking:[{
tracking:[i,X,Y]
}],"line-clamp":[{
"line-clamp":[J,`none`,X,co]
}],leading:[{
leading:[a,...C()]
}],"list-image":[{
"list-image":[`none`,X,Y]
}],"list-style-position":[{
list:[`inside`,`outside`]
}],"list-style-type":[{
list:[`disc`,`decimal`,`none`,X,Y]
}],"text-alignment":[{
text:[`left`,`center`,`right`,`justify`,`start`,`end`]
}],"placeholder-color":[{
placeholder:A()
}],"text-color":[{
text:A()
}],"text-decoration":[`underline`,`overline`,`line-through`,`no-underline`],"text-decoration-style":[{
decoration:[...le(),`wavy`]
}],"text-decoration-thickness":[{
decoration:[J,`from-font`,`auto`,X,so]
}],"text-decoration-color":[{
decoration:A()
}],"underline-offset":[{
"underline-offset":[J,`auto`,X,Y]
}],"text-transform":[`uppercase`,`lowercase`,`capitalize`,`normal-case`],"text-overflow":[`truncate`,`text-ellipsis`,`text-clip`],"text-wrap":[{
text:[`wrap`,`nowrap`,`balance`,`pretty`]
}],indent:[{
indent:C()
}],"tab-size":[{
tab:[Xa,X,Y]
}],"vertical-align":[{
align:[`baseline`,`top`,`middle`,`bottom`,`text-top`,`text-bottom`,`sub`,`super`,X,Y]
}],whitespace:[{
whitespace:[`normal`,`nowrap`,`pre`,`pre-line`,`pre-wrap`,`break-spaces`]
}],break:[{
break:[`normal`,`words`,`all`,`keep`]
}],wrap:[{
wrap:[`break-word`,`anywhere`,`normal`]
}],hyphens:[{
hyphens:[`none`,`manual`,`auto`]
}],content:[{
content:[`none`,X,Y]
}],"bg-attachment":[{
bg:[`fixed`,`local`,`scroll`]
}],"bg-clip":[{
"bg-clip":[`border`,`padding`,`content`,`text`]
}],"bg-origin":[{
"bg-origin":[`border`,`padding`,`content`]
}],"bg-position":[{
bg:oe()
}],"bg-repeat":[{
bg:se()
}],"bg-size":[{
bg:ce()
}],"bg-image":[{
bg:[`none`,{
linear:[{
to:[`t`,`tr`,`r`,`br`,`b`,`bl`,`l`,`tl`]
},Xa,X,Y],radial:[``,X,Y],conic:[Xa,X,Y]
},yo,po]
}],"bg-color":[{
bg:A()
}],"gradient-from-pos":[{
from:j()
}],"gradient-via-pos":[{
via:j()
}],"gradient-to-pos":[{
to:j()
}],"gradient-from":[{
from:A()
}],"gradient-via":[{
via:A()
}],"gradient-to":[{
to:A()
}],rounded:[{
rounded:M()
}],"rounded-s":[{
"rounded-s":M()
}],"rounded-e":[{
"rounded-e":M()
}],"rounded-t":[{
"rounded-t":M()
}],"rounded-r":[{
"rounded-r":M()
}],"rounded-b":[{
"rounded-b":M()
}],"rounded-l":[{
"rounded-l":M()
}],"rounded-ss":[{
"rounded-ss":M()
}],"rounded-se":[{
"rounded-se":M()
}],"rounded-ee":[{
"rounded-ee":M()
}],"rounded-es":[{
"rounded-es":M()
}],"rounded-tl":[{
"rounded-tl":M()
}],"rounded-tr":[{
"rounded-tr":M()
}],"rounded-br":[{
"rounded-br":M()
}],"rounded-bl":[{
"rounded-bl":M()
}],"border-w":[{
border:N()
}],"border-w-x":[{
"border-x":N()
}],"border-w-y":[{
"border-y":N()
}],"border-w-s":[{
"border-s":N()
}],"border-w-e":[{
"border-e":N()
}],"border-w-bs":[{
"border-bs":N()
}],"border-w-be":[{
"border-be":N()
}],"border-w-t":[{
"border-t":N()
}],"border-w-r":[{
"border-r":N()
}],"border-w-b":[{
"border-b":N()
}],"border-w-l":[{
"border-l":N()
}],"divide-x":[{
"divide-x":N()
}],"divide-x-reverse":[`divide-x-reverse`],"divide-y":[{
"divide-y":N()
}],"divide-y-reverse":[`divide-y-reverse`],"border-style":[{
border:[...le(),`hidden`,`none`]
}],"divide-style":[{
divide:[...le(),`hidden`,`none`]
}],"border-color":[{
border:A()
}],"border-color-x":[{
"border-x":A()
}],"border-color-y":[{
"border-y":A()
}],"border-color-s":[{
"border-s":A()
}],"border-color-e":[{
"border-e":A()
}],"border-color-bs":[{
"border-bs":A()
}],"border-color-be":[{
"border-be":A()
}],"border-color-t":[{
"border-t":A()
}],"border-color-r":[{
"border-r":A()
}],"border-color-b":[{
"border-b":A()
}],"border-color-l":[{
"border-l":A()
}],"divide-color":[{
divide:A()
}],"outline-style":[{
outline:[...le(),`none`,`hidden`]
}],"outline-offset":[{
"outline-offset":[J,X,Y]
}],"outline-w":[{
outline:[``,J,ho,so]
}],"outline-color":[{
outline:A()
}],shadow:[{
shadow:[``,`none`,u,bo,mo]
}],"shadow-color":[{
shadow:A()
}],"inset-shadow":[{
"inset-shadow":[`none`,d,bo,mo]
}],"inset-shadow-color":[{
"inset-shadow":A()
}],"ring-w":[{
ring:N()
}],"ring-w-inset":[`ring-inset`],"ring-color":[{
ring:A()
}],"ring-offset-w":[{
"ring-offset":[J,so]
}],"ring-offset-color":[{
"ring-offset":A()
}],"inset-ring-w":[{
"inset-ring":N()
}],"inset-ring-color":[{
"inset-ring":A()
}],"text-shadow":[{
"text-shadow":[`none`,f,bo,mo]
}],"text-shadow-color":[{
"text-shadow":A()
}],opacity:[{
opacity:[J,X,Y]
}],"mix-blend":[{
"mix-blend":[...ue(),`plus-darker`,`plus-lighter`]
}],"bg-blend":[{
"bg-blend":ue()
}],"mask-clip":[{
"mask-clip":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]
},`mask-no-clip`],"mask-composite":[{
mask:[`add`,`subtract`,`intersect`,`exclude`]
}],"mask-image-linear-pos":[{
"mask-linear":[J]
}],"mask-image-linear-from-pos":[{
"mask-linear-from":P()
}],"mask-image-linear-to-pos":[{
"mask-linear-to":P()
}],"mask-image-linear-from-color":[{
"mask-linear-from":A()
}],"mask-image-linear-to-color":[{
"mask-linear-to":A()
}],"mask-image-t-from-pos":[{
"mask-t-from":P()
}],"mask-image-t-to-pos":[{
"mask-t-to":P()
}],"mask-image-t-from-color":[{
"mask-t-from":A()
}],"mask-image-t-to-color":[{
"mask-t-to":A()
}],"mask-image-r-from-pos":[{
"mask-r-from":P()
}],"mask-image-r-to-pos":[{
"mask-r-to":P()
}],"mask-image-r-from-color":[{
"mask-r-from":A()
}],"mask-image-r-to-color":[{
"mask-r-to":A()
}],"mask-image-b-from-pos":[{
"mask-b-from":P()
}],"mask-image-b-to-pos":[{
"mask-b-to":P()
}],"mask-image-b-from-color":[{
"mask-b-from":A()
}],"mask-image-b-to-color":[{
"mask-b-to":A()
}],"mask-image-l-from-pos":[{
"mask-l-from":P()
}],"mask-image-l-to-pos":[{
"mask-l-to":P()
}],"mask-image-l-from-color":[{
"mask-l-from":A()
}],"mask-image-l-to-color":[{
"mask-l-to":A()
}],"mask-image-x-from-pos":[{
"mask-x-from":P()
}],"mask-image-x-to-pos":[{
"mask-x-to":P()
}],"mask-image-x-from-color":[{
"mask-x-from":A()
}],"mask-image-x-to-color":[{
"mask-x-to":A()
}],"mask-image-y-from-pos":[{
"mask-y-from":P()
}],"mask-image-y-to-pos":[{
"mask-y-to":P()
}],"mask-image-y-from-color":[{
"mask-y-from":A()
}],"mask-image-y-to-color":[{
"mask-y-to":A()
}],"mask-image-radial":[{
"mask-radial":[X,Y]
}],"mask-image-radial-from-pos":[{
"mask-radial-from":P()
}],"mask-image-radial-to-pos":[{
"mask-radial-to":P()
}],"mask-image-radial-from-color":[{
"mask-radial-from":A()
}],"mask-image-radial-to-color":[{
"mask-radial-to":A()
}],"mask-image-radial-shape":[{
"mask-radial":[`circle`,`ellipse`]
}],"mask-image-radial-size":[{
"mask-radial":[{
closest:[`side`,`corner`],farthest:[`side`,`corner`]
}]
}],"mask-image-radial-pos":[{
"mask-radial-at":b()
}],"mask-image-conic-pos":[{
"mask-conic":[J]
}],"mask-image-conic-from-pos":[{
"mask-conic-from":P()
}],"mask-image-conic-to-pos":[{
"mask-conic-to":P()
}],"mask-image-conic-from-color":[{
"mask-conic-from":A()
}],"mask-image-conic-to-color":[{
"mask-conic-to":A()
}],"mask-mode":[{
mask:[`alpha`,`luminance`,`match`]
}],"mask-origin":[{
"mask-origin":[`border`,`padding`,`content`,`fill`,`stroke`,`view`]
}],"mask-position":[{
mask:oe()
}],"mask-repeat":[{
mask:se()
}],"mask-size":[{
mask:ce()
}],"mask-type":[{
"mask-type":[`alpha`,`luminance`]
}],"mask-image":[{
mask:[`none`,X,Y]
}],filter:[{
filter:[``,`none`,X,Y]
}],blur:[{
blur:de()
}],brightness:[{
brightness:[J,X,Y]
}],contrast:[{
contrast:[J,X,Y]
}],"drop-shadow":[{
"drop-shadow":[``,`none`,p,bo,mo]
}],"drop-shadow-color":[{
"drop-shadow":A()
}],grayscale:[{
grayscale:[``,J,X,Y]
}],"hue-rotate":[{
"hue-rotate":[J,X,Y]
}],invert:[{
invert:[``,J,X,Y]
}],saturate:[{
saturate:[J,X,Y]
}],sepia:[{
sepia:[``,J,X,Y]
}],"backdrop-filter":[{
"backdrop-filter":[``,`none`,X,Y]
}],"backdrop-blur":[{
"backdrop-blur":de()
}],"backdrop-brightness":[{
"backdrop-brightness":[J,X,Y]
}],"backdrop-contrast":[{
"backdrop-contrast":[J,X,Y]
}],"backdrop-grayscale":[{
"backdrop-grayscale":[``,J,X,Y]
}],"backdrop-hue-rotate":[{
"backdrop-hue-rotate":[J,X,Y]
}],"backdrop-invert":[{
"backdrop-invert":[``,J,X,Y]
}],"backdrop-opacity":[{
"backdrop-opacity":[J,X,Y]
}],"backdrop-saturate":[{
"backdrop-saturate":[J,X,Y]
}],"backdrop-sepia":[{
"backdrop-sepia":[``,J,X,Y]
}],"border-collapse":[{
border:[`collapse`,`separate`]
}],"border-spacing":[{
"border-spacing":C()
}],"border-spacing-x":[{
"border-spacing-x":C()
}],"border-spacing-y":[{
"border-spacing-y":C()
}],"table-layout":[{
table:[`auto`,`fixed`]
}],caption:[{
caption:[`top`,`bottom`]
}],transition:[{
transition:[``,`all`,`colors`,`opacity`,`shadow`,`transform`,`none`,X,Y]
}],"transition-behavior":[{
transition:[`normal`,`discrete`]
}],duration:[{
duration:[J,`initial`,X,Y]
}],ease:[{
ease:[`linear`,`initial`,_,X,Y]
}],delay:[{
delay:[J,X,Y]
}],animate:[{
animate:[`none`,v,X,Y]
}],backface:[{
backface:[`hidden`,`visible`]
}],perspective:[{
perspective:[h,X,Y]
}],"perspective-origin":[{
"perspective-origin":x()
}],rotate:[{
rotate:fe()
}],"rotate-x":[{
"rotate-x":fe()
}],"rotate-y":[{
"rotate-y":fe()
}],"rotate-z":[{
"rotate-z":fe()
}],scale:[{
scale:F()
}],"scale-x":[{
"scale-x":F()
}],"scale-y":[{
"scale-y":F()
}],"scale-z":[{
"scale-z":F()
}],"scale-3d":[`scale-3d`],skew:[{
skew:pe()
}],"skew-x":[{
"skew-x":pe()
}],"skew-y":[{
"skew-y":pe()
}],transform:[{
transform:[X,Y,``,`none`,`gpu`,`cpu`]
}],"transform-origin":[{
origin:x()
}],"transform-style":[{
transform:[`3d`,`flat`]
}],translate:[{
translate:I()
}],"translate-x":[{
"translate-x":I()
}],"translate-y":[{
"translate-y":I()
}],"translate-z":[{
"translate-z":I()
}],"translate-none":[`translate-none`],zoom:[{
zoom:[Xa,X,Y]
}],accent:[{
accent:A()
}],appearance:[{
appearance:[`none`,`auto`]
}],"caret-color":[{
caret:A()
}],"color-scheme":[{
scheme:[`normal`,`dark`,`light`,`light-dark`,`only-dark`,`only-light`]
}],cursor:[{
cursor:[`auto`,`default`,`pointer`,`wait`,`text`,`move`,`help`,`not-allowed`,`none`,`context-menu`,`progress`,`cell`,`crosshair`,`vertical-text`,`alias`,`copy`,`no-drop`,`grab`,`grabbing`,`all-scroll`,`col-resize`,`row-resize`,`n-resize`,`e-resize`,`s-resize`,`w-resize`,`ne-resize`,`nw-resize`,`se-resize`,`sw-resize`,`ew-resize`,`ns-resize`,`nesw-resize`,`nwse-resize`,`zoom-in`,`zoom-out`,X,Y]
}],"field-sizing":[{
"field-sizing":[`fixed`,`content`]
}],"pointer-events":[{
"pointer-events":[`auto`,`none`]
}],resize:[{
resize:[`none`,``,`y`,`x`]
}],"scroll-behavior":[{
scroll:[`auto`,`smooth`]
}],"scrollbar-thumb-color":[{
"scrollbar-thumb":A()
}],"scrollbar-track-color":[{
"scrollbar-track":A()
}],"scrollbar-gutter":[{
"scrollbar-gutter":[`auto`,`stable`,`both`]
}],"scrollbar-w":[{
scrollbar:[`auto`,`thin`,`none`]
}],"scroll-m":[{
"scroll-m":C()
}],"scroll-mx":[{
"scroll-mx":C()
}],"scroll-my":[{
"scroll-my":C()
}],"scroll-ms":[{
"scroll-ms":C()
}],"scroll-me":[{
"scroll-me":C()
}],"scroll-mbs":[{
"scroll-mbs":C()
}],"scroll-mbe":[{
"scroll-mbe":C()
}],"scroll-mt":[{
"scroll-mt":C()
}],"scroll-mr":[{
"scroll-mr":C()
}],"scroll-mb":[{
"scroll-mb":C()
}],"scroll-ml":[{
"scroll-ml":C()
}],"scroll-p":[{
"scroll-p":C()
}],"scroll-px":[{
"scroll-px":C()
}],"scroll-py":[{
"scroll-py":C()
}],"scroll-ps":[{
"scroll-ps":C()
}],"scroll-pe":[{
"scroll-pe":C()
}],"scroll-pbs":[{
"scroll-pbs":C()
}],"scroll-pbe":[{
"scroll-pbe":C()
}],"scroll-pt":[{
"scroll-pt":C()
}],"scroll-pr":[{
"scroll-pr":C()
}],"scroll-pb":[{
"scroll-pb":C()
}],"scroll-pl":[{
"scroll-pl":C()
}],"snap-align":[{
snap:[`start`,`end`,`center`,`align-none`]
}],"snap-stop":[{
snap:[`normal`,`always`]
}],"snap-type":[{
snap:[`none`,`x`,`y`,`both`]
}],"snap-strictness":[{
snap:[`mandatory`,`proximity`]
}],touch:[{
touch:[`auto`,`none`,`manipulation`]
}],"touch-x":[{
"touch-pan":[`x`,`left`,`right`]
}],"touch-y":[{
"touch-pan":[`y`,`up`,`down`]
}],"touch-pz":[`touch-pinch-zoom`],select:[{
select:[`none`,`text`,`all`,`auto`]
}],"will-change":[{
"will-change":[`auto`,`scroll`,`contents`,`transform`,X,Y]
}],fill:[{
fill:[`none`,...A()]
}],"stroke-w":[{
stroke:[J,ho,so,co]
}],stroke:[{
stroke:[`none`,...A()]
}],"forced-color-adjust":[{
"forced-color-adjust":[`auto`,`none`]
}]
},conflictingClassGroups:{
"container-named":[`container-type`],overflow:[`overflow-x`,`overflow-y`],overscroll:[`overscroll-x`,`overscroll-y`],inset:[`inset-x`,`inset-y`,`inset-bs`,`inset-be`,`start`,`end`,`top`,`right`,`bottom`,`left`],"inset-x":[`right`,`left`],"inset-y":[`top`,`bottom`],flex:[`basis`,`grow`,`shrink`],gap:[`gap-x`,`gap-y`],p:[`px`,`py`,`ps`,`pe`,`pbs`,`pbe`,`pt`,`pr`,`pb`,`pl`],px:[`pr`,`pl`],py:[`pt`,`pb`],m:[`mx`,`my`,`ms`,`me`,`mbs`,`mbe`,`mt`,`mr`,`mb`,`ml`],mx:[`mr`,`ml`],my:[`mt`,`mb`],size:[`w`,`h`],"font-size":[`leading`],"fvn-normal":[`fvn-ordinal`,`fvn-slashed-zero`,`fvn-figure`,`fvn-spacing`,`fvn-fraction`],"fvn-ordinal":[`fvn-normal`],"fvn-slashed-zero":[`fvn-normal`],"fvn-figure":[`fvn-normal`],"fvn-spacing":[`fvn-normal`],"fvn-fraction":[`fvn-normal`],"line-clamp":[`display`,`overflow`],rounded:[`rounded-s`,`rounded-e`,`rounded-t`,`rounded-r`,`rounded-b`,`rounded-l`,`rounded-ss`,`rounded-se`,`rounded-ee`,`rounded-es`,`rounded-tl`,`rounded-tr`,`rounded-br`,`rounded-bl`],"rounded-s":[`rounded-ss`,`rounded-es`],"rounded-e":[`rounded-se`,`rounded-ee`],"rounded-t":[`rounded-tl`,`rounded-tr`],"rounded-r":[`rounded-tr`,`rounded-br`],"rounded-b":[`rounded-br`,`rounded-bl`],"rounded-l":[`rounded-tl`,`rounded-bl`],"border-spacing":[`border-spacing-x`,`border-spacing-y`],"border-w":[`border-w-x`,`border-w-y`,`border-w-s`,`border-w-e`,`border-w-bs`,`border-w-be`,`border-w-t`,`border-w-r`,`border-w-b`,`border-w-l`],"border-w-x":[`border-w-r`,`border-w-l`],"border-w-y":[`border-w-t`,`border-w-b`],"border-color":[`border-color-x`,`border-color-y`,`border-color-s`,`border-color-e`,`border-color-bs`,`border-color-be`,`border-color-t`,`border-color-r`,`border-color-b`,`border-color-l`],"border-color-x":[`border-color-r`,`border-color-l`],"border-color-y":[`border-color-t`,`border-color-b`],translate:[`translate-x`,`translate-y`,`translate-none`],"translate-none":[`translate`,`translate-x`,`translate-y`,`translate-z`],"scroll-m":[`scroll-mx`,`scroll-my`,`scroll-ms`,`scroll-me`,`scroll-mbs`,`scroll-mbe`,`scroll-mt`,`scroll-mr`,`scroll-mb`,`scroll-ml`],"scroll-mx":[`scroll-mr`,`scroll-ml`],"scroll-my":[`scroll-mt`,`scroll-mb`],"scroll-p":[`scroll-px`,`scroll-py`,`scroll-ps`,`scroll-pe`,`scroll-pbs`,`scroll-pbe`,`scroll-pt`,`scroll-pr`,`scroll-pb`,`scroll-pl`],"scroll-px":[`scroll-pr`,`scroll-pl`],"scroll-py":[`scroll-pt`,`scroll-pb`],touch:[`touch-x`,`touch-y`,`touch-pz`],"touch-x":[`touch`],"touch-y":[`touch`],"touch-pz":[`touch`]
},conflictingClassGroupModifiers:{
"font-size":[`leading`]
},postfixLookupClassGroups:[`container-type`],orderSensitiveModifiers:[`*`,`**`,`after`,`backdrop`,`before`,`details-content`,`file`,`first-letter`,`first-line`,`marker`,`placeholder`,`selection`]
}
});
function No(...e){
return Mo(F(e))
}var Po=me(`inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3`,{
variants:{
variant:{
default:`bg-primary text-primary-foreground [a&]:hover:bg-primary/90`,secondary:`bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90`,destructive:`bg-destructive text-white focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90`,outline:`border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground`,ghost:`[a&]:hover:bg-accent [a&]:hover:text-accent-foreground`,link:`text-primary underline-offset-4 [a&]:hover:underline`
}
},defaultVariants:{
variant:`default`
}
});
function Z({
className:e,variant:t=`default`,asChild:n=!1,...r
}){
return(0,B.jsx)(n?ui:`span`,{
"data-slot":`badge`,"data-variant":t,className:No(Po({
variant:t
}),e),...r
})
}var Fo=me(`inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,{
variants:{
variant:{
default:`bg-primary text-primary-foreground hover:bg-primary/90`,destructive:`bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40`,outline:`border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50`,secondary:`bg-secondary text-secondary-foreground hover:bg-secondary/80`,ghost:`hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50`,link:`text-primary underline-offset-4 hover:underline`
},size:{
default:`h-9 px-4 py-2 has-[>svg]:px-3`,xs:`h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3`,sm:`h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5`,lg:`h-10 rounded-md px-6 has-[>svg]:px-4`,icon:`size-9`,"icon-xs":`size-6 rounded-md [&_svg:not([class*='size-'])]:size-3`,"icon-sm":`size-8`,"icon-lg":`size-10`
}
},defaultVariants:{
variant:`default`,size:`default`
}
});
function Q({
className:e,variant:t=`default`,size:n=`default`,asChild:r=!1,...i
}){
return(0,B.jsx)(r?ui:`button`,{
"data-slot":`button`,"data-variant":t,"data-size":n,className:No(Fo({
variant:t,size:n,className:e
})),...i
})
}function Io({
className:e,...t
}){
return(0,B.jsx)(vn,{
"data-slot":`checkbox`,className:No(`peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary`,e),...t,children:(0,B.jsx)(bn,{
"data-slot":`checkbox-indicator`,className:`grid place-content-center text-current transition-none`,children:(0,B.jsx)(x,{
className:`size-3.5`
})
})
})
}function Lo({
className:e,value:t,...n
}){
return(0,B.jsx)(sr,{
"data-slot":`progress`,value:t,className:No(`relative h-2 w-full overflow-hidden rounded-full bg-primary/20`,e),...n,children:(0,B.jsx)(cr,{
"data-slot":`progress-indicator`,className:`h-full w-full flex-1 bg-primary transition-all`,style:{
transform:`translateX(-${
100-(t??0)
}%)`
}
})
})
}function Ro({
className:e,defaultValue:t,value:n,min:r=0,max:i=100,...a
}){
let o=u.useMemo(()=>Array.isArray(n)?n:Array.isArray(t)?t:[r,i],[n,t,r,i]);
return(0,B.jsxs)(Er,{
"data-slot":`slider`,defaultValue:t,value:n,min:r,max:i,className:No(`relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col`,e),...a,children:[(0,B.jsx)(Nr,{
"data-slot":`slider-track`,className:No(`relative grow overflow-hidden rounded-full bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5`),children:(0,B.jsx)(Fr,{
"data-slot":`slider-range`,className:No(`absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full`)
})
}),Array.from({
length:o.length
},(e,t)=>(0,B.jsx)(Hr,{
"data-slot":`slider-thumb`,className:`block size-4 shrink-0 rounded-full border border-primary bg-white shadow-sm ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50`
},t))]
})
}function zo({
delayDuration:e=0,...t
}){
return(0,B.jsx)(sa,{
"data-slot":`tooltip-provider`,delayDuration:e,...t
})
}function Bo(e){
return e.rotation%180==0?{
width:e.widthCm,depth:e.depthCm
}:{
width:e.depthCm,depth:e.widthCm
}
}function Vo(e,t=0){
let{
width:n,depth:r
}=Bo(e);
return{
left:e.xCm-n/2-t,right:e.xCm+n/2+t,top:e.yCm-r/2-t,bottom:e.yCm+r/2+t
}
}function Ho(e,t){
return e.left<t.right&&e.right>t.left&&e.top<t.bottom&&e.bottom>t.top
}function Uo(e,t){
let n=`${
e.name
} ${
t.name
}`.toLowerCase();
return/chair/.test(n)&&/table|desk/.test(n)?75:/wardrobe|cabinet/.test(n)?60:/bed/.test(n)?45:/sofa/.test(n)&&/coffee table|table/.test(n)?35:0
}function Wo(e,t){
return e.wall===`north`?{
left:e.offsetCm,right:e.offsetCm+e.widthCm,top:0,bottom:85
}:e.wall===`south`?{
left:e.offsetCm,right:e.offsetCm+e.widthCm,top:t.depthCm-85,bottom:t.depthCm
}:e.wall===`west`?{
left:0,right:85,top:e.offsetCm,bottom:e.offsetCm+e.widthCm
}:{
left:t.widthCm-85,right:t.widthCm,top:e.offsetCm,bottom:e.offsetCm+e.widthCm
}
}function Go(e,t,n){
let r=e.openings.filter(e=>e.type===`door`||e.type===`balcony`);
if(!r.length)return!0;
let i=Math.max(1,Math.floor(e.widthCm/15)),a=Math.max(1,Math.floor(e.depthCm/15)),o=t.map(e=>Vo(e,n/2)),s=(e,t)=>o.some(n=>e>n.left&&e<n.right&&t>n.top&&t<n.bottom),c=(e,t)=>`${
e
},${
t
}`;
return r.every(t=>{
let n=t.offsetCm+t.widthCm/2,r=t.wall===`north`?[n,15]:t.wall===`south`?[n,e.depthCm-15]:t.wall===`west`?[15,n]:[e.widthCm-15,n],o=[[Math.max(0,Math.min(i-1,Math.floor(r[0]/15))),Math.max(0,Math.min(a-1,Math.floor(r[1]/15)))]],l=new Set;
for(;
o.length;
){
let[t,n]=o.shift(),r=(t+.5)*15,u=(n+.5)*15,d=c(t,n);
if(!(l.has(d)||s(r,u))){
if(l.add(d),Math.abs(r-e.widthCm/2)<e.widthCm*.22&&Math.abs(u-e.depthCm/2)<e.depthCm*.22)return!0;
for(let[e,r]of[[1,0],[-1,0],[0,1],[0,-1]]){
let s=t+e,u=n+r;
s>=0&&s<i&&u>=0&&u<a&&!l.has(c(s,u))&&o.push([s,u])
}
}
}return!1
})
}function Ko(e,t,n,r=75){
let i=[],a=[];
for(let r of t){
let t=Vo(r);
(t.left<-.5||t.top<-.5||t.right>e.widthCm+.5||t.bottom>e.depthCm+.5)&&i.push({
code:`OUTSIDE_ROOM`,message:`${
r.name
} extends beyond the room boundary.`,itemIds:[r.id]
});
for(let n of e.openings.filter(e=>e.type!==`window`))Ho(t,Wo(n,e))&&i.push({
code:`BLOCKED_OPENING`,message:`${
r.name
} blocks the ${
n.type
} access zone.`,itemIds:[r.id]
});
let a=n.find(e=>e.id===r.id);
a?.mobility===`Fixed`&&(Math.abs(a.xCm-r.xCm)>1||Math.abs(a.yCm-r.yCm)>1||a.rotation!==r.rotation)&&i.push({
code:`FIXED_ITEM_MOVED`,message:`${
r.name
} is fixed and cannot be moved.`,itemIds:[r.id]
})
}for(let e=0;
e<t.length;
e+=1)for(let n=e+1;
n<t.length;
n+=1){
Ho(Vo(t[e],4),Vo(t[n],4))&&i.push({
code:`OVERLAP`,message:`${
t[e].name
} overlaps ${
t[n].name
}.`,itemIds:[t[e].id,t[n].id]
});
let r=Uo(t[e],t[n]),o=qo(Vo(t[e]),Vo(t[n]));
r&&o<r&&a.push(`${
t[e].name
} and ${
t[n].name
} have only ${
Math.round(o)
} cm usable spacing;
 confirm at least ${
r
} cm is comfortable.`)
}return!i.length&&!Go(e,t,r)&&i.push({
code:`NO_CLEAR_PATH`,message:`No usable ${
r
} cm route connects the entrance to the room.`,itemIds:[]
}),{
valid:i.length===0,issues:i,warnings:[...new Set(a)]
}
}function qo(e,t){
let n=Math.max(e.left-t.right,t.left-e.right,0),r=Math.max(e.top-t.bottom,t.top-e.bottom,0);
return Math.hypot(n,r)
}var Jo={
room:{
widthCm:480,depthCm:360,openings:[{
id:`door-1`,type:`door`,wall:`south`,offsetCm:35,widthCm:90
},{
id:`window-1`,type:`window`,wall:`north`,offsetCm:130,widthCm:180
},{
id:`balcony-1`,type:`balcony`,wall:`east`,offsetCm:90,widthCm:110
}]
},furniture:[{
id:`sofa`,name:`Linen sofa`,widthCm:210,depthCm:92,xCm:250,yCm:302,rotation:0,mobility:`Movable`
},{
id:`console`,name:`Oak media console`,widthCm:160,depthCm:40,xCm:20,yCm:180,rotation:90,mobility:`Fixed`
},{
id:`table`,name:`Square coffee table`,widthCm:95,depthCm:95,xCm:250,yCm:180,rotation:0,mobility:`Movable`
},{
id:`bookshelf`,name:`Low bookshelf`,widthCm:120,depthCm:34,xCm:400,yCm:20,rotation:0,mobility:`Movable`
}],notes:[`Room dimensions and furniture positions are estimates until confirmed by the user.`]
},Yo=[`Home`,`Scan Room`,`Check Scan`,`KAR Choices`,`Goals & Constraints`,`Generate & Check`,`Resolve Conflicts`,`Choose Layout`,`Selected Layout`,`Adjust Plan`,`Final Plan`,`Give Feedback`,`Layout Ideas`,`Furniture Finder`,`Plans`,`Budget Target`,`My Plans`],Xo=11,Zo=[1,2,4,5,7,9,10,11],Qo=[1,2,3,15,13,4,5,7,9,10,11],$o=[{
title:`Plan a Room`,items:[[0,`Home`],[1,`Scan Room`],[2,`Check Scan`],[3,`KAR Choices`],[4,`Goals & Constraints`],[5,`Generate & Check`],[6,`Resolve Conflicts`],[7,`Choose Layout`],[8,`Selected Layout`],[9,`Adjust Plan`],[10,`Final Plan`],[11,`Give Feedback`]]
},{
title:`Explore`,items:[[12,`Layout Ideas`],[13,`Furniture Finder`]]
}],es=[{
key:`Keep`,icon:x,title:`Keep`,description:`Protect useful pieces and avoid unnecessary spending.`,count:`4 items`
},{
key:`Rearrange`,icon:O,title:`Rearrange`,description:`Improve flow before buying anything new.`,count:`5 moves`
},{
key:`Add`,icon:h,title:`Add`,description:`Fill missing function with right-sized pieces.`,count:`3 gaps`
},{
key:`Replace`,icon:ae,title:`Replace`,description:`Swap items that block space, clash, or no longer work.`,count:`2 items`
}],ts=[{
label:`Living Room`,icon:ce
},{
label:`Bedroom`,icon:y
},{
label:`Dining Room`,icon:N
},{
label:`Home Office`,icon:C
},{
label:`Kids' Room`,icon:y
}],ns=[`More walking space`,`Clearer pathways`,`Better study setup`,`More usable floor area`,`Easier storage access`,`Minimise spending`,`Desk closer to natural light`,`More seating for guests`,`Improve TV viewing`,`Create clearer activity zones`,`Make the room feel less cramped`,`Minimise furniture movement`,`Improve access to storage`,`Create a calmer room`],rs=[`Keep all current furniture`,`Keep fixed furniture in place`,`Do not block doors`,`Do not block windows`,`Maintain a 75 cm main walkway`,`Bed must remain`,`Wardrobe must remain`,`Desk must stay near a window`,`No new furniture purchases`,`Stay within the selected budget`],is=[{
action:`Keep`,item:`Oak media console`,reason:`Low profile and warm tone already anchor the TV wall.`,priority:`Protected`
},{
action:`Rearrange`,item:`Linen sofa`,reason:`Rotate toward the window to open the walking path.`,priority:`High priority`
},{
action:`Add`,item:`Nesting side tables`,reason:`Adds flexible surfaces without crowding the seating zone.`,priority:`Optional`
},{
action:`Replace`,item:`Oversized coffee table`,reason:`A slimmer oval table gives the room 18% more passage space.`,priority:`Only if needed`
}],as=[{
name:`Minimal Changes`,spend:0,score:86,keep:`100% kept`,clearance:`78 cm path`,note:`Keeps every usable item and gains 24% more walking clearance.`
},{
name:`Maximum Space`,spend:280,score:91,keep:`75% kept`,clearance:`94 cm path`,note:`Widest clear path;
 replaces one oversized item after validation.`
},{
name:`Best Overall`,spend:210,score:94,keep:`80% kept`,clearance:`86 cm path`,note:`Best balance of function, clearance, reuse and budget.`
},{
name:`Storage First`,spend:160,score:89,keep:`100% kept`,clearance:`81 cm path`,note:`Adds closed storage while preserving every existing item and access route.`
},{
name:`Hosting Ready`,spend:120,score:87,keep:`100% kept`,clearance:`79 cm path`,note:`Creates a clearer conversation zone with flexible extra seating.`
}],os=[{
name:`Small Living Room Reset`,room:`Living Room`,bestFor:`Cramped seating area`,pattern:`Sofa against long wall, narrow table, storage on TV wall`
},{
name:`Rental-Friendly Small Space`,room:`Living Room`,bestFor:`No drilling, flexible zones`,pattern:`Open shelving divider, movable desk, low-profile lounge`
},{
name:`Bedroom + Study Corner`,room:`Bedroom`,bestFor:`Sleep and work in one room`,pattern:`Bed away from window glare, compact desk, vertical storage`
}],ss=[{
id:`table`,name:`Aalto Oval Coffee Table`,type:`Replace`,price:189,alt:149,fit:`Fits checked zone`,dimensions:`100 x 55 cm`,style:`Warm minimal`,source:`Haven Living SG · In stock`
},{
id:`lamp`,name:`Nora Floor Lamp`,type:`Add`,price:118,alt:89,fit:`Fits checked zone`,dimensions:`32 x 145 cm`,style:`Soft modern`,source:`Nook SG · 3–5 days`
},{
id:`tables`,name:`Stack Nesting Tables`,type:`Add`,price:159,alt:119,fit:`Fits checked zone`,dimensions:`48 x 48 cm`,style:`Oak and stone`,source:`Form & Function SG · In stock`
},{
id:`chair`,name:`Sora Accent Chair`,type:`Replace`,price:299,alt:229,fit:`Fits checked zone`,dimensions:`78 x 82 cm`,style:`Textured cream`,source:`Kanso Home SG · Low stock`
}];
function cs(e){
return new Intl.NumberFormat(`en-SG`,{
style:`currency`,currency:`SGD`,maximumFractionDigits:0
}).format(e)
}function ls(){
let[e,t]=(0,u.useState)(0),[n,r]=(0,u.useState)(`free`),[i,a]=(0,u.useState)([`Keep`,`Rearrange`]),[o,s]=(0,u.useState)(`Living Room`),[c,l]=(0,u.useState)(`manual`),[d,f]=(0,u.useState)([`Feels cramped`,`Needs more storage`,`Calmer visual style`]),[p,m]=(0,u.useState)([`More walking space`,`Easier storage access`,`Minimise spending`]),[h,y]=(0,u.useState)([`Keep all current furniture`,`Keep fixed furniture in place`,`Do not block doors`,`Maintain a 75 cm main walkway`]),[b,x]=(0,u.useState)([500]),[S,w]=(0,u.useState)(`Best Overall`),[T,re]=(0,u.useState)(3),[ie,E]=(0,u.useState)([]),[D,O]=(0,u.useState)(null),[k,ae]=(0,u.useState)(Jo.furniture),[A,oe]=(0,u.useState)([]),[se,ce]=(0,u.useState)(null),[j,M]=(0,u.useState)({

}),[N,le]=(0,u.useState)(``),ue=as.find(e=>e.name===S)??as[0],P=ss.filter(e=>ie.includes(e.id)),de=ue.spend+P.reduce((e,t)=>e+t.price,0),fe=b[0]-de,F=n===`free`?Zo:Qo,pe=e>Xo&&!F.includes(e),I=n===`free`?[12,14,16]:[12,13,14,16],me=F.indexOf(e),he=p,ge=(0,u.useMemo)(()=>h.join(`. `),[h]),_e=pe?100:e===0?0:Math.round((me+1)/F.length*100),L=(0,u.useRef)({
step:e,planMode:n,selectedKrar:i,selectedNeeds:d,dimensionMode:c,layout:S,layoutCount:T,budget:b[0],estimatedSpend:de,remainingBudget:fe
});
function R(e){
t(Math.min(Math.max(e,0),Yo.length-1))
}function ve(n){
r(n),a([`Keep`,`Rearrange`]),n===`free`&&[3,13,15].includes(e)&&t(1)
}function z(){
if(e===0)return R(F[0]);
e===4&&(oe([]),ce(null));
let t=F.indexOf(e);
if(t>=0&&t<F.length-1)return R(F[t+1]);
if(pe){
let t=I.indexOf(e);
t>=0&&t<I.length-1&&R(I[t+1])
}
}function ye(){
let t=F.indexOf(e);
if(t>0)return R(F[t-1]);
if(t===0)return R(0);
if(pe){
let t=I.indexOf(e);
R(t>0?I[t-1]:0)
}
}function be(e,t,n){
n(t.includes(e)?t.filter(t=>t!==e):[...t,e])
}function xe(e){
E(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])
}function Se(e){
O(e),ae(e.furniture),oe([]),ce(null),M(Object.fromEntries(e.furniture.map(e=>[e.id,{
action:`Keep`,need:``
}])))
}function Ce(e){
w(e),ce(A.find(t=>t.name===e)??null)
}let we=(0,u.useCallback)(e=>{
oe(e),e[0]&&(w(e[0].name),ce(e[0]))
},[]),Te=(0,u.useCallback)(e=>{
ae(e),O(prev=>{if(prev===null)return null;return{...prev,furniture:e}})
},[]),Ee=se??A.find(e=>e.name===S)??null,De=n===`free`||(!i.includes(`Add`)||N.trim().length>0)&&k.every(e=>j[e.id]?.action!==`Replace`||j[e.id].need.trim().length>0);
(0,u.useEffect)(()=>{
`scrollRestoration`in window.history&&(window.history.scrollRestoration=`manual`)
},[]),(0,u.useEffect)(()=>{
window.scrollTo({
top:0,left:0
})
},[e]),(0,u.useEffect)(()=>{
L.current={
step:e,planMode:n,selectedKrar:i,selectedNeeds:d,dimensionMode:c,layout:S,layoutCount:T,budget:b[0],estimatedSpend:de,remainingBudget:fe
}
},[e,n,i,d,c,S,T,b,de,fe]),(0,u.useEffect)(()=>{
let e=document.modelContext;
if(!e?.registerTool)return;
let n=new AbortController,r=async t=>{
try{
await e.registerTool(t,{
signal:n.signal
})
}catch{

}
};
return r({
name:`read_spacify_mock_plan`,title:`Read Spacify mock plan`,description:`Read the current visible mock plan state in the Spacify prototype.`,inputSchema:{
type:`object`,properties:{

},additionalProperties:!1
},annotations:{
readOnlyHint:!0,untrustedContentHint:!1
},execute:()=>({
step:Yo[L.current.step],planMode:L.current.planMode,selectedNeeds:L.current.selectedNeeds,dimensionMode:L.current.dimensionMode,selectedKrar:L.current.selectedKrar,layout:L.current.layout,layoutCount:L.current.layoutCount,budget:L.current.budget,estimatedSpend:L.current.estimatedSpend,remainingBudget:L.current.remainingBudget
})
}),r({
name:`configure_spacify_mock_plan`,title:`Configure Spacify mock plan`,description:`Update visible prototype state such as step, KAR choices, selected layout, products added to the plan, and budget.`,inputSchema:{
type:`object`,properties:{
stepIndex:{
type:`number`,minimum:0,maximum:Yo.length-1
},planMode:{
type:`string`,enum:[`free`,`premium`]
},dimensionMode:{
type:`string`,enum:[`manual`]
},krar:{
type:`array`,items:{
type:`string`,enum:es.map(e=>e.key)
}
},layout:{
type:`string`,enum:as.map(e=>e.name)
},layoutCount:{
type:`number`,minimum:2,maximum:5
},budget:{
type:`number`,minimum:0,maximum:1500
}
},additionalProperties:!1
},annotations:{
readOnlyHint:!1,untrustedContentHint:!1
},execute:e=>{
let n=e&&typeof e==`object`?e:{

};
return typeof n.stepIndex==`number`&&t(Math.min(Math.max(n.stepIndex,0),Yo.length-1)),n.dimensionMode===`manual`&&l(n.dimensionMode),Array.isArray(n.krar)&&a(n.krar.filter(e=>typeof e==`string`)),typeof n.layout==`string`&&as.some(e=>e.name===n.layout)&&w(n.layout),(n.planMode===`free`||n.planMode===`premium`)&&ve(n.planMode),typeof n.layoutCount==`number`&&re(Math.min(5,Math.max(2,Math.round(n.layoutCount)))),typeof n.budget==`number`&&x([Math.min(1500,Math.max(0,n.budget))]),{
ok:!0
}
}
}),()=>n.abort()
},[]);
let Oe=(0,u.useMemo)(()=>{
switch(e){
case 0:return(0,B.jsx)(ds,{
planMode:n,onStart:()=>R(1),onJump:R
});
case 1:return(0,B.jsx)(gs,{
room:o,planMode:n,scanResult:D,onRoom:s,onScan:Se
});
case 2:return(0,B.jsx)(_s,{
scan:{
...D,
furniture:k
},onFurniture:Te,onRoomDimensions:(e,t)=>O(n=>({
...n,room:{
...n.room,widthCm:e,depthCm:t
}
}))
},k.map(e=>e.id).join(`|`));
case 3:return(0,B.jsx)(vs,{
planMode:n,selectedKrar:i,furniture:k,itemDecisions:j,onDecisions:M,addRequest:N,onAddRequest:le,onToggle:e=>be(e,i,a),onUpgrade:()=>ve(`premium`)
});
case 4:return(0,B.jsx)(ms,{
selectedGoals:p,selectedConstraints:h,selectedKrar:i,planMode:n,budget:b,onToggleGoal:e=>be(e,p,m),onToggleConstraint:e=>be(e,h,y),onBudget:x,layoutCount:T,onLayoutCount:e=>{
re(e),e<3&&w(`Minimal Changes`)
}
});
case 5:return(0,B.jsx)(ys,{
planMode:n,selectedGoals:he,constraintNote:ge,layoutCount:T,roomModel:D.room,furniture:k,onLayouts:we,onAdjust:()=>R(4),onContinue:()=>R(7),onOpenFinder:()=>R(13)
});
case 6:return(0,B.jsx)(bs,{
selectedKrar:i,planMode:n
});
case 7:return(0,B.jsx)(xs,{
selectedLayout:S,budget:b[0],layoutCount:T,selectedGoals:he,planMode:n,roomModel:D?.room,generatedLayouts:A,onLayout:Ce
});
case 8:return(0,B.jsx)(Ss,{
selectedLayout:S,selectedKrar:i,room:D?.room,layoutResult:Ee
});
case 9:return(0,B.jsx)(Es,{
planMode:n,room:D?.room,sourceFurniture:k,layoutResult:Ee,onLayoutChange:ce
});
case 10:return(0,B.jsx)(Ds,{
selectedGoals:he,constraintNote:ge,layout:S,planMode:n,room:D?.room,layoutResult:Ee
});
case 11:return(0,B.jsx)(Os,{

});
case 12:return(0,B.jsx)(ps,{
onUseIdea:()=>R(1)
});
case 13:return(0,B.jsx)(Cs,{
savedProducts:ie,onSave:xe,selectedKrar:i,planMode:n,onUpgrade:()=>ve(`premium`),furniture:k,itemDecisions:j,addRequest:N,budget:b[0]
});
case 14:return(0,B.jsx)(fs,{
selectedMode:n,onChoose:e=>{
ve(e),R(1)
}
});
case 15:return(0,B.jsx)(Ts,{
budget:b,onBudget:x
});
default:return(0,B.jsx)(As,{

})
}
},[e,n,i,o,d,p,h,ge,b,c,S,T,ie,de,fe,P,D,k,A,se,j,N,we,Te]),ke=[[te,`Plan`,0],[C,`My plans`,16],[ne,`Ideas`,12],[v,`Plans`,14]];
return(0,B.jsx)(zo,{
delayDuration:180,children:(0,B.jsx)(`main`,{
className:`mobile-app min-h-screen bg-[radial-gradient(circle_at_top,#eef1e7_0%,#d9ddd2_58%,#cbd2c4_100%)] text-[var(--foreground)]`,children:(0,B.jsxs)(`div`,{
className:`mx-auto min-h-screen w-full max-w-[430px] bg-[linear-gradient(180deg,#f8f5ed_0%,var(--background)_28%,#f1eee5_100%)] shadow-[0_0_56px_rgba(36,54,23,0.16)]`,children:[(0,B.jsxs)(`aside`,{
className:`hidden`,children:[(0,B.jsx)(us,{

}),(0,B.jsx)(`div`,{
className:`mt-7 space-y-6 overflow-y-auto pr-1`,children:$o.map(t=>(0,B.jsxs)(`div`,{
children:[(0,B.jsx)(`p`,{
className:`mb-2 px-3 text-xs font-semibold uppercase tracking-wide text-zinc-400`,children:t.title
}),(0,B.jsx)(`div`,{
className:`space-y-1`,children:t.items.map(([n,r])=>(0,B.jsxs)(`button`,{
onClick:()=>R(n),className:`group flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm transition ${
e===n?`bg-[#243617] text-white shadow-sm`:`text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950`
}`,children:[(0,B.jsx)(`span`,{
className:`flex size-6 shrink-0 items-center justify-center rounded-full text-xs ${
e===n?`bg-white/16 text-white`:`bg-zinc-100 text-zinc-500 group-hover:bg-white`
}`,children:n===0||t.title===`Explore`?`•`:n
}),(0,B.jsx)(`span`,{
className:`min-w-0 truncate`,children:r
})]
},r))
})]
},t.title))
}),(0,B.jsxs)(`div`,{
className:`mt-5 rounded-md border border-zinc-200 bg-[#f3f1e8] p-4`,children:[(0,B.jsx)(`p`,{
className:`text-sm font-medium text-zinc-950`,children:`Planning principle`
}),(0,B.jsx)(`p`,{
className:`mt-1 text-sm leading-5 text-zinc-600`,children:`Reuse first. Shop only after a feasible layout shows a genuine need.`
})]
})]
}),(0,B.jsxs)(`section`,{
className:`flex min-h-screen flex-col pb-24`,children:[(0,B.jsx)(`header`,{
className:`spacify-header sticky top-0 z-20 border-b border-white/10 px-4 py-3 shadow-[0_8px_24px_rgba(36,54,23,0.16)] backdrop-blur`,children:(0,B.jsxs)(`div`,{
className:`flex items-center justify-between gap-3`,children:[(0,B.jsxs)(`div`,{
className:`flex min-w-0 flex-1 items-center gap-3`,children:[(0,B.jsx)(`div`,{
children:(0,B.jsx)(us,{
compact:!0
})
}),(0,B.jsxs)(`div`,{
className:`min-w-0 flex-1`,children:[(0,B.jsxs)(`div`,{
className:`flex items-center gap-2 text-xs font-medium uppercase text-zinc-500`,children:[(0,B.jsx)(`span`,{
children:pe?`Explore`:e===0?`Start`:`Step ${
me+1
} of ${
F.length
}`
}),(0,B.jsx)(ee,{
className:`size-3.5`
}),(0,B.jsx)(`span`,{
className:`truncate`,children:Yo[e]
})]
}),(0,B.jsx)(Lo,{
value:_e,className:`mt-2 h-1.5 w-full max-w-xl bg-zinc-200 [&_[data-slot=progress-indicator]]:bg-[#536b35]`
}),(0,B.jsxs)(`button`,{
onClick:()=>ve(n===`free`?`premium`:`free`),className:`mt-2 flex min-h-7 items-center gap-2 rounded-full px-2.5 py-1 text-xs font-semibold normal-case ${
n===`premium`?`bg-[#d5bd7b] text-[#243617]`:`bg-[#dfe6d2] text-[#243617]`
}`,"aria-label":`Switch to ${
n===`free`?`Premium`:`Free`
} mode`,children:[(0,B.jsx)(`span`,{
className:`size-2 rounded-full ${
n===`premium`?`bg-[#243617]`:`bg-[#536b35]`
}`
}),n===`premium`?`Premium mode`:`Free mode`,(0,B.jsx)(`span`,{
className:`font-normal opacity-70`,children:`· tap to switch`
})]
})]
})]
}),me>=0&&(0,B.jsxs)(`div`,{
className:`flex shrink-0 items-center gap-2`,children:[(0,B.jsxs)(Q,{
variant:`outline`,size:`sm`,onClick:ye,disabled:e===0,children:[(0,B.jsx)(g,{
className:`size-4`
}),(0,B.jsx)(`span`,{
className:`hidden sm:inline`,children:`Back`
})]
}),(0,B.jsxs)(Q,{
size:`sm`,onClick:z,disabled:e===3&&!De||e===5&&A.length===0||e===7&&!Ee||e===F[F.length-1]||pe&&e===I[I.length-1],className:`bg-[#d5bd7b] text-[#243617] hover:bg-[#e1ce9a]`,children:[(0,B.jsx)(`span`,{
className:`hidden sm:inline`,children:`Next`
}),(0,B.jsx)(_,{
className:`size-4`
})]
})]
})]
})
}),(0,B.jsx)(`div`,{
className:`mobile-content flex-1 overflow-x-hidden px-4 py-5`,children:(0,B.jsx)(`div`,{
className:`mx-auto w-full`,children:Oe
})
}),(0,B.jsx)(`nav`,{
className:`mobile-bottom-nav fixed bottom-0 left-1/2 z-30 grid w-full max-w-[430px] -translate-x-1/2 border-t border-[var(--border)] bg-[#f4f1e8]/96 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur`,style:{
gridTemplateColumns:`repeat(${
ke.length
}, minmax(0, 1fr))`
},"aria-label":`Mobile app navigation`,children:ke.map(([t,n,r])=>(0,B.jsxs)(`button`,{
onClick:()=>R(Number(r)),className:`flex min-h-12 flex-col items-center justify-center gap-1 rounded-md text-xs font-medium ${
e===r?`bg-[#eef1e7] text-[#243617]`:`text-zinc-500`
}`,children:[(0,B.jsx)(t,{
className:`size-5`
}),n]
},n))
}),(0,B.jsx)(ks,{
context:{
step:Yo[e],planMode:n,room:o,goals:p,constraints:ge
}
})]
})]
})
})
})
}function us({
compact:e=!1
}){
return(0,B.jsxs)(`div`,{
className:`flex items-center gap-3`,children:[(0,B.jsx)(`div`,{
className:`flex size-11 items-center justify-center overflow-hidden rounded-lg border border-[#d7d7c9] bg-white shadow-sm`,children:(0,B.jsx)(`img`,{
src:`/brand/spacify-logo.png`,alt:`Spacify logo`,className:`size-11 object-cover`
})
}),!e&&(0,B.jsxs)(`div`,{
children:[(0,B.jsx)(`p`,{
className:`text-lg font-semibold tracking-tight`,children:`Spacify`
}),(0,B.jsx)(`p`,{
className:`text-xs text-[#6f7867]`,children:`KAR room planning`
})]
})]
})
}function $({
eyebrow:e,title:t,children:n
}){
return(0,B.jsxs)(`div`,{
className:`screen-enter`,children:[(0,B.jsx)(`p`,{
className:`text-sm font-medium uppercase text-[#536b35]`,children:e
}),(0,B.jsx)(`h1`,{
className:`mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-zinc-950`,children:t
}),(0,B.jsx)(`div`,{
className:`mt-7`,children:n
})]
})
}function ds({
planMode:e,onStart:t,onJump:n
}){
return(0,B.jsx)(`div`,{
className:`grid gap-5`,children:(0,B.jsxs)(`section`,{
className:`deck-hero overflow-hidden rounded-lg border border-[#344c22] bg-[#243617] p-5 text-[#f7f3e8] shadow-[0_18px_45px_rgba(36,54,23,0.2)]`,children:[(0,B.jsxs)(`div`,{
className:`flex flex-wrap items-center gap-2`,children:[(0,B.jsx)(Z,{
className:`rounded-md bg-[#dfe6d2] text-[#243617] hover:bg-[#dfe6d2]`,children:`Reuse-first planning`
}),(0,B.jsx)(Z,{
variant:`outline`,className:`rounded-md border-white/25 text-[#f7f3e8]`,children:`For Singapore homeowners`
})]
}),(0,B.jsx)(`h1`,{
className:`mt-7 max-w-2xl text-4xl font-medium leading-[1.03] tracking-[-0.045em] text-[#f7f3e8]`,children:`Make your room work better before buying more furniture.`
}),(0,B.jsx)(`p`,{
className:`mt-5 max-w-xl text-base leading-7 text-[#d8decc]`,children:`Scan your room, confirm what you own, and get practical 2D layouts built around your goals.`
}),(0,B.jsxs)(`div`,{
className:`mt-8 flex flex-wrap gap-3`,children:[(0,B.jsxs)(Q,{
onClick:t,size:`lg`,className:`bg-[#f7f3e8] text-[#243617] hover:bg-[#dfe6d2]`,children:[`Plan my room`,(0,B.jsx)(_,{
className:`size-4`
})]
}),(0,B.jsxs)(Q,{
variant:`outline`,size:`lg`,onClick:()=>n(12),className:`border-white/30 bg-transparent text-[#f7f3e8] hover:bg-white/10 hover:text-white`,children:[`Browse layout ideas`,(0,B.jsx)(k,{
className:`size-4`
})]
})]
}),(0,B.jsx)(`div`,{
className:`mt-10 grid gap-3 sm:grid-cols-2`,children:[[`Plan a room`,`Scan → check results → choose a verified layout`,1],[`Layout ideas`,`Start from proven room patterns`,12],[`Compare plans`,`See what Free and Premium include`,14],...e===`premium`?[[`Furniture finder`,`Find dimension-checked alternatives`,13]]:[]].map(([e,t,r])=>(0,B.jsxs)(`button`,{
onClick:()=>n(Number(r)),className:`rounded-md border border-zinc-200 bg-[#f6f3eb] p-4 text-left transition hover:-translate-y-0.5 hover:border-[#536b35] hover:bg-[#eef1e7]`,children:[(0,B.jsx)(`p`,{
className:`font-semibold text-zinc-950`,children:e
}),(0,B.jsx)(`p`,{
className:`mt-1 text-sm leading-6 text-zinc-600`,children:t
})]
},e))
})]
})
})
}function fs({
selectedMode:e,onChoose:t
}){
return(0,B.jsx)($,{
eyebrow:`Plans`,title:`Choose how much planning support you need.`,children:(0,B.jsxs)(`section`,{
"aria-labelledby":`plans-heading`,className:`overflow-hidden rounded-xl border border-[#cbd9d0] bg-white shadow-sm`,children:[(0,B.jsxs)(`div`,{
className:`bg-[linear-gradient(135deg,#eef1e7_0%,#ffffff_62%,#f2eee6_100%)] px-5 py-6 text-center`,children:[(0,B.jsx)(`p`,{
className:`text-sm font-semibold uppercase tracking-[0.18em] text-[#536b35]`,children:`Plan`
}),(0,B.jsx)(`h2`,{
id:`plans-heading`,className:`mt-2 text-2xl font-semibold tracking-tight text-zinc-950`,children:`Start with what you already own.`
}),(0,B.jsx)(`p`,{
className:`mx-auto mt-2 max-w-sm text-sm leading-6 text-zinc-600`,children:`Upgrade only when you want help adding or replacing furniture.`
})]
}),(0,B.jsxs)(`div`,{
className:`grid gap-3 p-4`,children:[(0,B.jsxs)(`article`,{
className:`rounded-lg border bg-[#fbfdfb] p-5 transition ${
e===`free`?`border-[#536b35] ring-2 ring-[#536b35]/10`:`border-zinc-200`
}`,children:[(0,B.jsxs)(`div`,{
className:`flex items-start justify-between gap-3`,children:[(0,B.jsxs)(`div`,{
children:[(0,B.jsx)(`p`,{
className:`text-sm font-medium text-[#536b35]`,children:`FREE`
}),(0,B.jsx)(`h3`,{
className:`mt-1 text-2xl font-semibold`,children:`Rearrange`
})]
}),(0,B.jsx)(Z,{
variant:`outline`,className:`rounded-full bg-white`,children:`Reuse first`
})]
}),(0,B.jsx)(`p`,{
className:`mt-3 text-sm leading-6 text-zinc-600`,children:`Plan a better room using your current furniture.`
}),(0,B.jsx)(`div`,{
className:`mt-5 space-y-3`,children:[`Keep and rearrange recommendations`,`Room and furniture measurements`,`Goals and spatial constraints`,`Practical 2D layout options`,`Basic positioning guide`].map(e=>(0,B.jsxs)(`div`,{
className:`flex items-start gap-3 text-sm leading-5 text-zinc-700`,children:[(0,B.jsx)(`span`,{
className:`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[#dfe6d2] text-[#243617]`,children:(0,B.jsx)(x,{
className:`size-3.5`
})
}),e]
},e))
}),(0,B.jsx)(Q,{
onClick:()=>t(`free`),variant:`outline`,className:`mt-6 w-full border-[#243617] text-[#243617] hover:bg-[#eef1e7]`,children:e===`free`?`Continue in Free mode`:`Test Free mode`
})]
}),(0,B.jsxs)(`article`,{
className:`relative overflow-hidden rounded-lg bg-[linear-gradient(145deg,#243617_0%,#344c22_100%)] p-5 text-white shadow-[0_14px_34px_rgba(23,61,50,0.24)] ${
e===`premium`?`ring-2 ring-[#d5bd7b] ring-offset-2`:``
}`,children:[(0,B.jsx)(`div`,{
className:`absolute -right-10 -top-12 size-36 rounded-full bg-white/8`
}),(0,B.jsxs)(`div`,{
className:`relative`,children:[(0,B.jsxs)(`div`,{
className:`flex items-start justify-between gap-3`,children:[(0,B.jsxs)(`div`,{
children:[(0,B.jsx)(`p`,{
className:`text-sm font-medium text-[#ccd3bc]`,children:`PREMIUM`
}),(0,B.jsx)(`h3`,{
className:`mt-1 text-2xl font-semibold`,children:`Complete Plan`
})]
}),(0,B.jsx)(Z,{
className:`rounded-full bg-[#d5bd7b] text-[#243617] hover:bg-[#d5bd7b]`,children:`Most flexible`
})]
}),(0,B.jsx)(`p`,{
className:`mt-3 text-sm leading-6 text-white/72`,children:`Get shopping support only when Add or Replace is part of your goal.`
}),(0,B.jsx)(`div`,{
className:`mt-5 space-y-3`,children:[`Everything in Free`,`Personalised Add and Replace suggestions`,`Dimension-checked Furniture Finder`,`Budget-aware product alternatives`,`Personalised recovery when goals conflict`].map(e=>(0,B.jsxs)(`div`,{
className:`flex items-start gap-3 text-sm leading-5 text-white/88`,children:[(0,B.jsx)(`span`,{
className:`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white/14 text-white`,children:(0,B.jsx)(x,{
className:`size-3.5`
})
}),e]
},e))
}),(0,B.jsxs)(Q,{
onClick:()=>t(`premium`),className:`mt-6 w-full bg-white text-[#243617] hover:bg-[#eef1e7]`,children:[(0,B.jsx)(j,{
className:`size-4`
}),e===`premium`?`Continue in Premium mode`:`Test Premium mode`]
})]
})]
})]
}),(0,B.jsx)(`p`,{
className:`border-t border-zinc-200 bg-[#f3f1e8] px-5 py-4 text-center text-sm leading-6 text-zinc-600`,children:`No price shown yet—subscription pricing is still being validated.`
})]
})
})
}function ps({
onUseIdea:e
}){
return(0,B.jsx)($,{
eyebrow:`Layout Ideas`,title:`Start from practical layout patterns, then customise them to your room.`,children:(0,B.jsxs)(`div`,{
className:`grid gap-6 xl:grid-cols-[1fr_0.9fr]`,children:[(0,B.jsx)(`section`,{
className:`grid gap-4`,children:os.map((t,n)=>(0,B.jsxs)(`button`,{
onClick:e,className:`rounded-lg border p-5 text-left transition hover:-translate-y-0.5 hover:shadow-md ${
n===0?`border-[#243617] bg-[#eef1e7]`:`border-zinc-200 bg-white`
}`,children:[(0,B.jsxs)(`div`,{
className:`flex flex-wrap items-start justify-between gap-4`,children:[(0,B.jsxs)(`div`,{
children:[(0,B.jsx)(Z,{
variant:`outline`,className:`rounded-md`,children:t.room
}),(0,B.jsx)(`h2`,{
className:`mt-3 text-2xl font-semibold tracking-tight`,children:t.name
}),(0,B.jsx)(`p`,{
className:`mt-2 text-sm leading-6 text-zinc-600`,children:t.bestFor
})]
}),(0,B.jsx)(Q,{
variant:n===0?`default`:`outline`,className:n===0?`bg-[#243617] hover:bg-[#344c22]`:``,children:`Adapt to my room`
})]
}),(0,B.jsxs)(`div`,{
className:`mt-5 grid gap-4 md:grid-cols-[180px_1fr]`,children:[(0,B.jsx)(`div`,{
className:`aspect-[4/3] rounded-md bg-[#e8e0d2] p-4`,children:(0,B.jsx)(Ns,{
variant:n===1?`Open Hosting`:n===2?`Minimal Reset`:`Calm Conversation`
})
}),(0,B.jsxs)(`div`,{
className:`rounded-md bg-white/70 p-4`,children:[(0,B.jsx)(`p`,{
className:`text-sm font-medium text-zinc-500`,children:`Pattern`
}),(0,B.jsx)(`p`,{
className:`mt-2 leading-7 text-zinc-700`,children:t.pattern
})]
})]
})]
},t.name))
}),(0,B.jsxs)(`section`,{
className:`rounded-lg border border-zinc-200 bg-[#243617] p-6 text-white`,children:[(0,B.jsx)(re,{
className:`size-8 text-[#b7c7b9]`
}),(0,B.jsx)(`h2`,{
className:`mt-5 text-2xl font-semibold`,children:`Why this sits outside the flow`
}),(0,B.jsx)(`p`,{
className:`mt-3 leading-7 text-white/68`,children:`Layout Ideas are an inspiration shortcut. Users can browse them anytime, then bring one into the planning flow where Spacify adapts it using confirmed dimensions, furniture inventory, goals and KAR preferences.`
}),(0,B.jsx)(`div`,{
className:`mt-6 space-y-3`,children:[`Browse ideas`,`Choose a pattern`,`Adapt to my room`,`Confirm dimensions`,`Generate final layouts`].map((e,t)=>(0,B.jsxs)(`div`,{
className:`flex items-center gap-3 rounded-md bg-white/10 px-4 py-3 text-sm`,children:[(0,B.jsx)(`span`,{
className:`flex size-6 items-center justify-center rounded-full bg-white/12 text-xs`,children:t+1
}),e]
},e))
})]
})]
})
})
}function ms({
selectedGoals:e,selectedConstraints:t,selectedKrar:n,planMode:r,budget:i,onToggleGoal:a,onToggleConstraint:o,onBudget:s,layoutCount:c,onLayoutCount:l
}){
return(0,B.jsx)($,{
eyebrow:`Goals & Constraints`,title:`Choose your goals and must-haves.`,children:(0,B.jsxs)(`div`,{
className:`space-y-5`,children:[(0,B.jsxs)(`section`,{
className:`rounded-lg border border-zinc-200 bg-white p-5`,children:[(0,B.jsxs)(`div`,{
className:`flex items-start justify-between gap-3`,children:[(0,B.jsxs)(`div`,{
children:[(0,B.jsx)(`p`,{
className:`text-xs font-semibold uppercase tracking-[0.18em] text-[#536b35]`,children:`1 · Goals`
}),(0,B.jsx)(`h2`,{
className:`mt-2 text-xl font-semibold`,children:`What should improve?`
})]
}),(0,B.jsx)(Z,{
variant:`outline`,className:`rounded-md`,children:`Choose any`
})]
}),(0,B.jsx)(`div`,{
className:`mt-4 grid gap-3 sm:grid-cols-2`,children:ns.map(t=>{
let n=e.includes(t);
return(0,B.jsxs)(`button`,{
onClick:()=>a(t),className:`flex items-center gap-3 rounded-md border px-4 py-3 text-left transition ${
n?`border-[#536b35] bg-[#eef1e7]`:`border-zinc-200 bg-white hover:bg-[#f3f1e8]`
}`,children:[(0,B.jsx)(`span`,{
className:`flex size-6 shrink-0 items-center justify-center rounded-full border ${
n?`border-[#243617] bg-[#243617] text-white`:`border-zinc-300 bg-white`
}`,children:n&&(0,B.jsx)(x,{
className:`size-4`,strokeWidth:3
})
}),(0,B.jsx)(`span`,{
className:`text-sm font-medium`,children:t
})]
},t)
})
}),(0,B.jsxs)(`div`,{
className:`mt-5 border-t border-zinc-200 pt-5`,children:[(0,B.jsx)(`h3`,{
className:`font-semibold`,children:`How many layouts?`
}),(0,B.jsx)(`p`,{
className:`mt-1 text-sm text-zinc-500`,children:`Choose two to five feasible 2D options.`
}),(0,B.jsx)(`div`,{
className:`mt-3 grid grid-cols-4 gap-2`,children:[2,3,4,5].map(e=>(0,B.jsx)(`button`,{
onClick:()=>l(e),className:`h-11 rounded-md border text-base font-semibold ${
c===e?`border-[#243617] bg-[#243617] text-white`:`border-zinc-200 bg-white text-zinc-600`
}`,children:e
},e))
})]
})]
}),(0,B.jsxs)(`section`,{
className:`rounded-lg border border-zinc-200 bg-white p-5`,children:[(0,B.jsx)(`p`,{
className:`text-xs font-semibold uppercase tracking-[0.18em] text-[#536b35]`,children:`2 · Constraints`
}),(0,B.jsx)(`h2`,{
className:`mt-2 text-xl font-semibold`,children:`What must the layout respect?`
}),(0,B.jsx)(`p`,{
className:`mt-1 text-sm leading-6 text-zinc-600`,children:`Choose all non-negotiables.`
}),(0,B.jsx)(`div`,{
className:`mt-4 grid gap-3 sm:grid-cols-2`,children:rs.filter(e=>r===`premium`||e!==`Stay within the selected budget`).map(e=>{
let n=t.includes(e);
return(0,B.jsxs)(`button`,{
onClick:()=>o(e),className:`flex items-center gap-3 rounded-md border px-4 py-3 text-left transition ${
n?`border-[#536b35] bg-[#eef1e7]`:`border-zinc-200 bg-white hover:bg-[#f3f1e8]`
}`,children:[(0,B.jsx)(`span`,{
className:`flex size-6 shrink-0 items-center justify-center rounded-full border ${
n?`border-[#243617] bg-[#243617] text-white`:`border-zinc-300 bg-white`
}`,children:n&&(0,B.jsx)(x,{
className:`size-4`,strokeWidth:3
})
}),(0,B.jsx)(`span`,{
className:`text-sm font-medium`,children:e
})]
},e)
})
})]
})]
})
})
}function hs({
onMeasured:e,onFallback:t
}){
let n=(0,u.useRef)(null),r=(0,u.useRef)(null),i=(0,u.useRef)(null),a=(0,u.useRef)([]),o=(0,u.useRef)(0),s=(0,u.useRef)(!1),[c,l]=(0,u.useState)(`checking`),[d,f]=(0,u.useState)(`Checking Chrome WebXR support…`),[p,m]=(0,u.useState)(0),[h,g]=(0,u.useState)(!1),[_,v]=(0,u.useState)(!1);
(0,u.useEffect)(()=>{
let e=navigator.xr;
if(!e){
l(`unsupported`),f(`WebXR AR is unavailable in this browser or device.`);
return
}return e.isSessionSupported(`immersive-ar`).then(e=>{
l(e?`supported`:`unsupported`),f(e?`Ready. You will tap the four floor corners in order.`:`This phone or Chrome installation does not support immersive AR.`)
}).catch(()=>{
l(`error`),f(`Chrome could not check AR support.`)
}),()=>{
r.current?.end?.().catch(()=>void 0)
}
},[]);
function y(){
let t=i.current;
if(!h||!t||a.current.length>=4){
f(`No floor surface detected yet. Move the phone slowly and keep the centre aimed at the floor corner.`);
return
}let n=Date.now();
if(n-o.current<650)return;
o.current=n,a.current.push({
...t
});
let s=a.current.length;
if(m(s),navigator.vibrate?.(45),s<4){
f(`Corner ${
s
} saved. Move to corner ${
s+1
};
 wait for “Floor found”, then press Capture.`);
return
}let c=a.current.map(e=>e.x),l=a.current.map(e=>e.z),u=Math.max(150,Math.round((Math.max(...c)-Math.min(...c))*100)),d=Math.max(150,Math.round((Math.max(...l)-Math.min(...l))*100));
f(`Room measured at approximately ${
(u/100).toFixed(2)
} × ${
(d/100).toFixed(2)
} m.`),g(!1),e({
widthCm:u,depthCm:d
}),r.current?.end?.()
}async function x(){
try{
let e=navigator.xr;
if(!e||!n.current)throw Error(`WebXR is not available.`);
m(0),v(!1),a.current=[],i.current=null,f(`Starting camera and surface tracking…`);
let t=await e.requestSession(`immersive-ar`,{
requiredFeatures:[`hit-test`],optionalFeatures:[`dom-overlay`],domOverlay:{
root:n.current
}
});
r.current=t;
let o=document.createElement(`canvas`).getContext(`webgl`,{
alpha:!0,antialias:!0
});
if(!o)throw Error(`WebGL could not start.`);
await o.makeXRCompatible?.();
let c=window.XRWebGLLayer;
if(!c)throw Error(`Chrome did not provide an XR graphics layer.`);
t.updateRenderState({
baseLayer:new c(t,o)
});
let l=await t.requestReferenceSpace(`local`),u=await t.requestReferenceSpace(`viewer`),d=await t.requestHitTestSource({
space:u
});
t.addEventListener(`end`,()=>{
r.current=null,g(!1),v(!1),i.current=null
});
let p=(e,n)=>{
let r=n.getHitTestResults(d)[0]?.getPose(l);
i.current=r?{
x:r.transform.position.x,y:r.transform.position.y,z:r.transform.position.z
}:null;
let c=!!r;
c!==s.current&&(s.current=c,v(c),c&&a.current.length===0&&f(`Floor found. Aim at corner 1 and press Capture corner.`));
let u=t.renderState.baseLayer;
o.bindFramebuffer(o.FRAMEBUFFER,u.framebuffer),o.clearColor(0,0,0,0),o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT),t.requestAnimationFrame(p)
};
t.requestAnimationFrame(p),g(!0),f(`Move the phone slowly across the floor while Chrome finds a surface.`)
}catch(e){
l(`error`),f(e instanceof Error?e.message:`The AR session could not start.`)
}
}return(0,B.jsxs)(`section`,{
ref:n,className:`rounded-lg bg-[#243617] p-5 text-white shadow-sm`,children:[(0,B.jsxs)(`div`,{
className:`flex items-start justify-between gap-3`,children:[(0,B.jsxs)(`div`,{
className:`flex items-center gap-3`,children:[(0,B.jsx)(`span`,{
className:`flex size-11 items-center justify-center rounded-md bg-white/12`,children:(0,B.jsx)(A,{
className:`size-5`
})
}),(0,B.jsxs)(`div`,{
children:[(0,B.jsx)(`h2`,{
className:`text-xl font-semibold`,children:`Chrome AR room measurement`
}),(0,B.jsx)(`p`,{
className:`text-sm text-white/65`,children:`Tap four floor corners to establish real-world scale.`
})]
})]
}),(0,B.jsx)(Z,{
className:`shrink-0 bg-[#d5bd7b] text-[#243617] hover:bg-[#d5bd7b]`,children:`WebXR`
})]
}),(0,B.jsx)(`div`,{
className:`mt-5 grid grid-cols-4 gap-2`,children:[`Front-left`,`Front-right`,`Back-right`,`Back-left`].map((e,t)=>(0,B.jsxs)(`div`,{
className:`rounded-md px-1 py-3 text-center text-xs font-semibold ${
t<p?`bg-white text-[#243617]`:t===p&&h?`bg-[#d5bd7b] text-[#243617] ring-2 ring-white`:`bg-white/10 text-white/65`
}`,children:[(0,B.jsx)(`span`,{
className:`block text-sm`,children:t<p?`✓`:t+1
}),(0,B.jsx)(`span`,{
className:`mt-1 block`,children:e
})]
},e))
}),(0,B.jsxs)(`div`,{
className:`mt-4 rounded-md bg-white/10 p-4 text-sm leading-6 text-white/75`,children:[(0,B.jsxs)(`div`,{
className:`flex items-center gap-2`,children:[(0,B.jsx)(`span`,{
className:`size-2.5 rounded-full ${
_?`bg-[#d5bd7b]`:`animate-pulse bg-white/35`
}`
}),(0,B.jsx)(`strong`,{
children:h?_?`Floor found`:`Searching for floor…`:`Scanner ready`
})]
}),(0,B.jsx)(`p`,{
className:`mt-2`,children:d
}),(0,B.jsx)(`p`,{
className:`mt-2 text-xs text-white/55`,children:`Start at the front-left corner near the entrance and continue clockwise. Hold the phone still briefly at each corner before capturing.`
})]
}),h?(0,B.jsxs)(`div`,{
className:`mt-4 grid grid-cols-[1fr_auto] gap-2`,children:[(0,B.jsxs)(Q,{
onClick:y,disabled:!_||p>=4,className:`min-h-14 bg-[#d5bd7b] text-base font-semibold text-[#243617] hover:bg-[#ead99f] disabled:bg-white/20 disabled:text-white/50`,children:[(0,B.jsx)(`span`,{
className:`mr-1 inline-flex size-5 items-center justify-center rounded-full border-2 border-current`,children:`+`
}),_?`Capture corner ${
p+1
}`:`Finding floor…`]
}),(0,B.jsx)(Q,{
variant:`outline`,onClick:()=>void r.current?.end?.(),className:`min-h-14 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white`,children:`Cancel`
})]
}):c===`supported`?(0,B.jsxs)(Q,{
onClick:()=>void x(),className:`mt-4 w-full bg-white text-[#243617] hover:bg-[#eef1e7]`,children:[(0,B.jsx)(A,{
className:`size-4`
}),`Start guided AR scan`]
}):c===`checking`?(0,B.jsx)(Q,{
disabled:!0,className:`mt-4 w-full bg-white/25`,children:`Checking device…`
}):(0,B.jsxs)(Q,{
onClick:t,className:`mt-4 w-full bg-white text-[#243617] hover:bg-[#eef1e7]`,children:[(0,B.jsx)(b,{
className:`size-4`
}),`Use photos instead`]
}),h&&(0,B.jsx)(`button`,{
onClick:()=>{
r.current?.end?.(),t()
},className:`mt-3 w-full text-center text-sm font-semibold text-white/75 underline underline-offset-4`,children:`AR taking too long? Use photos + measurements`
}),(0,B.jsx)(`p`,{
className:`mt-3 text-xs leading-5 text-white/55`,children:`Requires Chrome on an ARCore-compatible Android phone with Google Play Services for AR. Plain desktop browsers are not supported.`
})]
})
}function gs({
room:e,planMode:t,scanResult:n,onRoom:r,onScan:i
}){
let[a,o]=(0,u.useState)(n?`ready`:`idle`),[s,c]=(0,u.useState)(``),[l,d]=(0,u.useState)(`ar`),[f,p]=(0,u.useState)([]),[m,h]=(0,u.useState)(null),g=[`Front`,`Back`,`Left`,`Right`];
async function _(e){
if(e?.length)try{
let t=await Promise.all(Array.from(e).slice(0,6).map(async e=>{
try{
let t=await createImageBitmap(e),n=Math.min(1,1280/Math.max(t.width,t.height)),r=document.createElement(`canvas`);
return r.width=Math.max(1,Math.round(t.width*n)),r.height=Math.max(1,Math.round(t.height*n)),r.getContext(`2d`)?.drawImage(t,0,0,r.width,r.height),t.close(),r.toDataURL(`image/jpeg`,.72)
}catch{
return await new Promise((t,n)=>{
let r=new FileReader;
r.onload=()=>t(String(r.result)),r.onerror=()=>n(Error(`A selected photo could not be read.`)),r.readAsDataURL(e)
})
}
}));
p(e=>[...e,...t].slice(0,6)),c(m?`Photos added. Four directional views are recommended even after AR measurement.`:`Photos added. Capture at least four angles, then analyse them together.`)
}catch(e){
o(`error`),c(e instanceof Error?e.message:`The photos could not be added.`)
}
}async function v(){
if(f.length<4)return c(`Add at least 4 room angles before scanning.`);
o(`scanning`),c(`Analysing all room views together…`);
try{
let e=await fetch(`/api/scan`,{
method:`POST`,headers:{
"Content-Type":`application/json`
},body:JSON.stringify({
images:f,planMode:t
})
}),n=await e.json();
if(!e.ok)throw Error(n.error??`Room scan failed.`);
i(m?{
...n,room:{
...n.room,...m
},notes:[...n.notes,`Room width and length came from the four-corner WebXR measurement.`]
}:n),o(`ready`),c(`${
t===`premium`?`Claude`:`Gemini`
} scan complete. Confirm all estimates in the next step.`)
}catch(e){
o(`error`),c(e instanceof Error?e.message:`Room scan failed.`)
}
}function y(){
i(Jo),o(`ready`),c(`Sample room loaded for testing.`)
}return(0,B.jsxs)($,{
eyebrow:`Scan Room`,title:`Scan your room.`,children:[(0,B.jsxs)(`div`,{
className:`mb-5 rounded-lg border border-[#c8cfb7] bg-[#eef1e7] p-4`,children:[(0,B.jsx)(`p`,{
className:`text-sm font-semibold text-[#243617]`,children:t===`free`?`Free plan includes`:`Every plan includes`
}),(0,B.jsxs)(`div`,{
className:`mt-3 grid grid-cols-2 gap-2`,children:[(0,B.jsxs)(`div`,{
className:`flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-[#243617]`,children:[(0,B.jsx)(x,{
className:`size-4`
}),`Keep`]
}),(0,B.jsxs)(`div`,{
className:`flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-[#243617]`,children:[(0,B.jsx)(x,{
className:`size-4`
}),`Rearrange`]
})]
}),(0,B.jsx)(`p`,{
className:`mt-3 text-sm text-zinc-600`,children:`Keep and Rearrange are always included.`
})]
}),(0,B.jsxs)(`div`,{
className:`grid gap-5`,children:[(0,B.jsxs)(`section`,{
className:`rounded-lg border border-zinc-200 bg-white p-5`,children:[(0,B.jsx)(`p`,{
className:`text-sm font-medium text-zinc-500`,children:`What room are you planning?`
}),(0,B.jsx)(`div`,{
className:`mt-4 grid gap-3 sm:grid-cols-2`,children:ts.map(t=>(0,B.jsxs)(`button`,{
onClick:()=>r(t.label),className:`flex items-center gap-3 rounded-md border p-4 text-left transition hover:bg-[#f3f1e8] ${
e===t.label?`border-[#243617] bg-[#eef1e7]`:`border-zinc-200 bg-white`
}`,children:[(0,B.jsx)(t.icon,{
className:`size-5 text-[#536b35]`
}),(0,B.jsx)(`span`,{
className:`font-medium`,children:t.label
})]
},t.label))
})]
}),(0,B.jsxs)(`section`,{
className:`rounded-lg border border-zinc-200 bg-white p-4`,children:[(0,B.jsx)(`p`,{
className:`text-sm font-semibold text-zinc-500`,children:`Capture method`
}),(0,B.jsxs)(`div`,{
className:`mt-3 grid grid-cols-2 gap-2`,children:[(0,B.jsxs)(`button`,{
onClick:()=>d(`ar`),className:`rounded-md border p-3 text-left ${
l===`ar`?`border-[#243617] bg-[#eef1e7]`:`border-zinc-200`
}`,children:[(0,B.jsx)(A,{
className:`size-5 text-[#536b35]`
}),(0,B.jsx)(`span`,{
className:`mt-2 block font-semibold`,children:`Guided AR scan`
}),(0,B.jsx)(`span`,{
className:`mt-1 block text-xs leading-5 text-zinc-500`,children:`Measure 4 corners, then add photos`
})]
}),(0,B.jsxs)(`button`,{
onClick:()=>d(`photos`),className:`rounded-md border p-3 text-left ${
l===`photos`?`border-[#243617] bg-[#eef1e7]`:`border-zinc-200`
}`,children:[(0,B.jsx)(b,{
className:`size-5 text-[#536b35]`
}),(0,B.jsx)(`span`,{
className:`mt-2 block font-semibold`,children:`Photos + measurements`
}),(0,B.jsx)(`span`,{
className:`mt-1 block text-xs leading-5 text-zinc-500`,children:`Use when AR is unavailable`
})]
})]
})]
}),l===`ar`?(0,B.jsx)(hs,{
onMeasured:e=>{
h(e),d(`photos`),c(`AR measured approximately ${
(e.widthCm/100).toFixed(2)
} × ${
(e.depthCm/100).toFixed(2)
} m. Now add photos so AI can identify furniture and openings.`)
},onFallback:()=>d(`photos`)
}):(0,B.jsxs)(`section`,{
className:`rounded-lg bg-[#243617] p-5 text-white shadow-sm`,children:[(0,B.jsxs)(`div`,{
className:`flex items-center gap-3`,children:[(0,B.jsx)(`span`,{
className:`flex size-11 items-center justify-center rounded-md bg-white/12`,children:(0,B.jsx)(b,{
className:`size-5`
})
}),(0,B.jsxs)(`div`,{
children:[(0,B.jsxs)(`div`,{
className:`flex flex-wrap items-center gap-2`,children:[(0,B.jsx)(`h2`,{
className:`text-xl font-semibold`,children:`Take or upload room photos`
}),(0,B.jsx)(Z,{
className:`bg-white text-[#243617] hover:bg-white`,children:t===`premium`?`Claude`:`Gemini`
})]
}),(0,B.jsx)(`p`,{
className:`text-sm text-white/65`,children:`Upload four clear pictures: Front, Back, Left and Right.`
})]
})]
}),m&&(0,B.jsxs)(`div`,{
className:`mt-4 rounded-md bg-[#d5bd7b] px-4 py-3 text-sm font-semibold text-[#243617]`,children:[`AR room measurement saved · `,(m.widthCm/100).toFixed(2),` × `,(m.depthCm/100).toFixed(2),` m`]
}),(0,B.jsxs)(`div`,{
className:`mt-4 rounded-md bg-white/10 p-4`,children:[(0,B.jsx)(`p`,{
className:`text-sm font-semibold`,children:`For a better scan`
}),(0,B.jsxs)(`div`,{
className:`mt-2 space-y-1 text-sm leading-6 text-white/72`,children:[(0,B.jsx)(`p`,{
children:`• Photograph Front, Back, Left, then Right.`
}),(0,B.jsx)(`p`,{
children:`• Hold the phone level at chest height.`
}),(0,B.jsx)(`p`,{
children:`• Include walls, floor edges, openings and every major item.`
}),(0,B.jsx)(`p`,{
children:`• Add an extra photo for hidden areas.`
})]
}),(0,B.jsx)(`p`,{
className:`mt-3 text-xs leading-5 text-white/60`,children:m?`AR sets the scale;
 photos identify the contents.`:`Confirm all dimensions on the next screen.`
})]
}),(0,B.jsx)(`div`,{
className:`mt-4 grid grid-cols-4 gap-2`,"aria-label":`Required room photo directions`,children:g.map((e,t)=>(0,B.jsxs)(`div`,{
className:`rounded-md border px-2 py-3 text-center ${
f[t]?`border-[#d5bd7b] bg-[#d5bd7b] text-[#243617]`:`border-white/20 bg-white/8 text-white`
}`,children:[(0,B.jsx)(`span`,{
className:`block text-xs font-semibold`,children:t+1
}),(0,B.jsx)(`span`,{
className:`mt-1 block text-xs`,children:e
}),f[t]&&(0,B.jsx)(x,{
className:`mx-auto mt-1 size-4`
})]
},e))
}),(0,B.jsxs)(`div`,{
className:`mt-5 grid grid-cols-2 gap-3`,children:[(0,B.jsxs)(`label`,{
className:`flex min-h-28 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-white/30 bg-white/8 px-3 text-center`,children:[(0,B.jsx)(b,{
className:`size-6`
}),(0,B.jsx)(`span`,{
className:`mt-2 font-semibold`,children:`Take a picture`
}),(0,B.jsx)(`span`,{
className:`mt-1 text-xs text-white/60`,children:`Add one direction at a time`
}),(0,B.jsx)(`input`,{
type:`file`,accept:`image/*`,capture:`environment`,className:`sr-only`,disabled:a===`scanning`||f.length>=6,onChange:e=>{
_(e.target.files),e.currentTarget.value=``
}
})]
}),(0,B.jsxs)(`label`,{
className:`flex min-h-28 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-[#d5bd7b] bg-[#d5bd7b] px-3 text-center text-[#243617]`,children:[(0,B.jsx)(ue,{
className:`size-6`
}),(0,B.jsx)(`span`,{
className:`mt-2 font-semibold`,children:`Upload 4 pictures`
}),(0,B.jsx)(`span`,{
className:`mt-1 text-xs text-[#243617]/65`,children:`Choose them together`
}),(0,B.jsx)(`input`,{
type:`file`,accept:`image/*`,multiple:!0,className:`sr-only`,disabled:a===`scanning`||f.length>=6,onChange:e=>{
_(e.target.files),e.currentTarget.value=``
}
})]
})]
}),(0,B.jsxs)(`div`,{
className:`mt-3 flex items-center justify-between rounded-md bg-white/10 px-3 py-3 text-sm`,children:[(0,B.jsxs)(`span`,{
children:[f.length,` of 4 required pictures added`,f.length>4?` · ${
f.length-4
} extra`:``]
}),f.length>0&&(0,B.jsx)(`button`,{
onClick:()=>p([]),className:`font-semibold text-white`,children:`Clear`
})]
}),(0,B.jsxs)(Q,{
onClick:()=>void v(),disabled:a===`scanning`||f.length<4,className:`mt-3 w-full bg-white text-[#243617] hover:bg-[#eef1e7] disabled:bg-white/25 disabled:text-white/55`,children:[(0,B.jsx)(A,{
className:`size-4`
}),a===`scanning`?`Building room model…`:f.length<4?`Add ${
4-f.length
} more photo${
4-f.length==1?``:`s`
}`:`Analyse all photos`]
}),(0,B.jsxs)(Q,{
onClick:y,variant:`outline`,className:`mt-3 w-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white`,children:[(0,B.jsx)(A,{
className:`size-4`
}),`Use sample scan`]
}),s&&(0,B.jsx)(`p`,{
className:`mt-3 rounded-md px-3 py-2 text-sm ${
a===`error`?`bg-[#fff0e9] text-[#7d3f2f]`:`bg-white/10 text-white/80`
}`,children:s
})]
}),(0,B.jsxs)(`section`,{
className:`rounded-lg border border-zinc-200 bg-white p-5`,children:[(0,B.jsx)(`h2`,{
className:`text-xl font-semibold`,children:`What the scan detects`
}),(0,B.jsx)(`p`,{
className:`mt-2 text-sm leading-6 text-zinc-600`,children:`Review and correct every result next.`
}),(0,B.jsx)(`div`,{
className:`mt-4 grid gap-3`,children:[[`Room boundary`,`Wall shape and estimated room size`],[`Furniture items`,`Visible furniture and approximate dimensions`],[`Openings`,`Doors, windows and balcony access`],[`Blind spots`,`Hidden areas you need to check`]].map(([e,t])=>(0,B.jsxs)(`div`,{
className:`flex gap-3 rounded-md bg-[#f3f1e8] p-3`,children:[(0,B.jsx)(x,{
className:`mt-0.5 size-4 shrink-0 text-[#536b35]`
}),(0,B.jsxs)(`div`,{
children:[(0,B.jsx)(`p`,{
className:`font-medium`,children:e
}),(0,B.jsx)(`p`,{
className:`mt-0.5 text-sm text-zinc-600`,children:t
})]
})]
},e))
})]
}),n&&(0,B.jsxs)(`section`,{
className:`rounded-lg border border-[#c8cfb7] bg-[#eef1e7] p-5`,children:[(0,B.jsxs)(`div`,{
className:`flex items-center justify-between`,children:[(0,B.jsx)(`h2`,{
className:`text-xl font-semibold`,children:`Room model found`
}),(0,B.jsx)(Z,{
className:`bg-[#243617] text-white hover:bg-[#243617]`,children:`Ready to confirm`
})]
}),(0,B.jsx)(`div`,{
className:`mt-4 aspect-[4/3] rounded-md bg-[#e8e0d2] p-5`,children:(0,B.jsx)(Ms,{
room:n.room,placements:n.furniture
})
}),(0,B.jsxs)(`div`,{
className:`mt-4 grid grid-cols-2 gap-2 text-sm`,children:[(0,B.jsxs)(`span`,{
className:`rounded-md bg-white px-3 py-2`,children:[(n.room.widthCm/100).toFixed(2),` × `,(n.room.depthCm/100).toFixed(2),` m`]
}),(0,B.jsxs)(`span`,{
className:`rounded-md bg-white px-3 py-2`,children:[n.furniture.length,` furniture items`]
}),(0,B.jsxs)(`span`,{
className:`col-span-2 rounded-md bg-white px-3 py-2`,children:[n.room.openings.filter(e=>e.type===`door`).length,` door · `,n.room.openings.filter(e=>e.type===`window`).length,` windows`]
})]
}),n.notes.length>0&&(0,B.jsxs)(`div`,{
className:`mt-4 rounded-md border border-[#e5c99a] bg-[#fff8e8] p-4`,children:[(0,B.jsx)(`p`,{
className:`font-semibold text-[#765221]`,children:`Check before continuing`
}),(0,B.jsx)(`div`,{
className:`mt-2 space-y-1`,children:n.notes.map(e=>(0,B.jsxs)(`p`,{
className:`text-sm leading-6 text-zinc-700`,children:[`• `,e]
},e))
})]
})]
}),(0,B.jsxs)(`section`,{
className:`rounded-lg border border-zinc-200 bg-white p-5`,children:[(0,B.jsx)(`h2`,{
className:`text-lg font-semibold`,children:`Walking clearance`
}),(0,B.jsx)(`p`,{
className:`mt-2 text-sm leading-6 text-zinc-600`,children:`Layouts must keep the main walking path at least this wide.`
}),(0,B.jsxs)(`label`,{
className:`mt-4 flex items-center justify-between rounded-md bg-zinc-50 px-4 py-3`,children:[(0,B.jsx)(`span`,{
className:`text-sm font-medium`,children:`Minimum clear path`
}),(0,B.jsxs)(`span`,{
className:`flex items-center gap-2`,children:[(0,B.jsx)(`input`,{
className:`w-14 bg-transparent text-right font-semibold outline-none`,defaultValue:`75`
}),(0,B.jsx)(`span`,{
className:`text-sm text-zinc-500`,children:`cm`
})]
})]
})]
})]
})]
})
}function _s({
scan:e,onFurniture:t,onRoomDimensions:n
}){
let[r,i]=(0,u.useState)(()=>e.furniture.map(e=>({
id:e.id,item:e.name,size:`${
e.widthCm
} x ${
e.depthCm
} cm`,location:`Placed from room scan`,mobility:e.mobility,protected:e.mobility===`Fixed`,width:String(e.widthCm),depth:String(e.depthCm),addedByUser:!1
}))),[a,o]=(0,u.useState)(!1),[s,c]=(0,u.useState)(0),[l,d]=(0,u.useState)(()=>{
let t=[];
return Object.fromEntries(e.furniture.map((n,r)=>{
let i=Math.max(10,Math.min(90,n.xCm/e.room.widthCm*100)),a=Math.max(12,Math.min(88,n.yCm/e.room.depthCm*100)),o=0;
for(;
t.some(e=>Math.abs(e.x-i)<13&&Math.abs(e.y-a)<13)&&o<12;
)i=14+(r*19+o*17)%72,a=16+(r*23+o*13)%66,o+=1;
return t.push({
x:i,y:a
}),[r,{
x:i,y:a,rotation:n.rotation
}]
}))
});
function f(e,t){
i(n=>n.map((n,r)=>r===e?{
...n,...t
}:n))
}function p(){
i(e=>{
let t=e.length;
return d(e=>({
...e,[t]:{
x:50,y:50,rotation:0
}
})),c(t),o(!0),[...e,{
id:`manual-${
Date.now()
}`,item:`New furniture item`,size:``,location:`Placed manually`,mobility:`Movable`,protected:!1,width:``,depth:``,addedByUser:!0
}]
})
}function m(e){
let t=r[e];
if(!t)return;
let n=l[e]??{
x:50,y:50,rotation:0
};
i(e=>{
let r=e.length,i=t.item.trim()?t.item:`Furniture item`;
return d(e=>({
...e,[r]:{
x:Math.max(8,Math.min(92,n.x+8)),y:Math.max(10,Math.min(90,n.y+8)),rotation:n.rotation
}
})),c(r),o(!0),[...e,{
...t,id:`duplicate-${
t.id
}-${
Date.now()
}`,item:i,location:`Same as ${
i
};
 place on room plan`,mobility:t.mobility===`Fixed`?`Movable`:t.mobility,protected:!1,addedByUser:!0
}]
})
}function h(e){
i(t=>t.filter((t,n)=>n!==e)),d(t=>{
let n={

};
return Object.values(t).filter((t,n)=>n!==e).forEach((e,t)=>{
n[t]=e
}),n
}),c(t=>Math.max(0,t>e?t-1:Math.min(t,r.length-2)))
}(0,u.useEffect)(()=>{
t(r.map((t,n)=>{
let r=l[n]??{
x:50,y:50,rotation:0
};
return{
id:t.id,name:t.item,widthCm:Math.max(10,Number(t.width)||60),depthCm:Math.max(10,Number(t.depth)||45),xCm:r.x/100*e.room.widthCm,yCm:r.y/100*e.room.depthCm,rotation:r.rotation,mobility:t.mobility
}
}))
},[r,l,e.room.depthCm,e.room.widthCm,t]);
function g(e,t){
let n=t.currentTarget.getBoundingClientRect(),r=Math.max(8,Math.min(92,(t.clientX-n.left)/n.width*100)),i=Math.max(10,Math.min(90,(t.clientY-n.top)/n.height*100));
d(t=>({
...t,[e]:{
...t[e]??{
rotation:0
},x:r,y:i
}
}))
}return(0,B.jsxs)($,{
eyebrow:`Check Scan`,title:`Check your room plan.`,children:[(0,B.jsx)(`div`,{
className:`mb-5 rounded-lg border border-[#c8cfb7] bg-[#eef1e7] p-4 text-sm leading-6 text-zinc-700`,children:`Confirm each item, its size, and whether it can move. Edit positions on the full plan.`
}),(0,B.jsxs)(`section`,{
className:`mb-4 rounded-lg border border-zinc-200 bg-white p-5`,children:[(0,B.jsxs)(`div`,{
className:`flex items-start justify-between gap-3`,children:[(0,B.jsxs)(`div`,{
children:[(0,B.jsx)(`h2`,{
className:`text-lg font-semibold`,children:`Current room plan`
}),(0,B.jsxs)(`p`,{
className:`mt-1 text-sm text-zinc-500`,children:[(e.room.widthCm/100).toFixed(2),` × `,(e.room.depthCm/100).toFixed(2),` m · `,r.length,` of `,r.length,` furniture items shown`]
})]
}),(0,B.jsx)(Z,{
variant:`outline`,children:`Rough 2D`
})]
}),(0,B.jsxs)(`div`,{
className:`mt-4 grid grid-cols-2 gap-3`,children:[(0,B.jsxs)(`label`,{
className:`rounded-md bg-[#f3f1e8] p-3`,children:[(0,B.jsx)(`span`,{
className:`text-sm text-zinc-500`,children:`Room width`
}),(0,B.jsxs)(`span`,{
className:`mt-1 flex items-center gap-1`,children:[(0,B.jsx)(`input`,{
value:e.room.widthCm,onChange:t=>n(Math.max(150,Number(t.target.value)||150),e.room.depthCm),className:`w-full bg-transparent font-semibold outline-none`,inputMode:`decimal`
}),(0,B.jsx)(`span`,{
className:`text-sm text-zinc-500`,children:`cm`
})]
})]
}),(0,B.jsxs)(`label`,{
className:`rounded-md bg-[#f3f1e8] p-3`,children:[(0,B.jsx)(`span`,{
className:`text-sm text-zinc-500`,children:`Room length`
}),(0,B.jsxs)(`span`,{
className:`mt-1 flex items-center gap-1`,children:[(0,B.jsx)(`input`,{
value:e.room.depthCm,onChange:t=>n(e.room.widthCm,Math.max(150,Number(t.target.value)||150)),className:`w-full bg-transparent font-semibold outline-none`,inputMode:`decimal`
}),(0,B.jsx)(`span`,{
className:`text-sm text-zinc-500`,children:`cm`
})]
})]
})]
}),(0,B.jsx)(`p`,{
className:`mt-2 text-xs leading-5 text-zinc-500`,children:`These measurements set the scale for every layout.`
}),(0,B.jsxs)(`div`,{
onPointerDown:e=>{
a&&e.target===e.currentTarget&&(e.currentTarget.setPointerCapture(e.pointerId),g(s,e))
},onPointerMove:e=>{
a&&e.currentTarget.hasPointerCapture(e.pointerId)&&g(s,e)
},className:`relative mt-4 aspect-[4/3] overflow-hidden rounded-md border-2 border-[#756f65] bg-[#f7f0e5] ${
a?`touch-none cursor-crosshair`:``
}`,children:[(0,B.jsx)(js,{

}),(0,B.jsx)(`div`,{
className:`absolute inset-x-[8%] top-1/2 border-t border-dashed border-[#756f65]/40`
}),r.map((e,t)=>{
let n=l[t]??{
x:50,y:50,rotation:0
},r=Math.max(48,Math.min(116,Number(e.width||60)*.45)),i=Math.max(34,Math.min(74,Number(e.depth||45)*.45)),o=e=>{
let n=e.currentTarget.parentElement;
if(!n)return;
let r=n.getBoundingClientRect(),i=Math.max(8,Math.min(92,(e.clientX-r.left)/r.width*100)),a=Math.max(10,Math.min(90,(e.clientY-r.top)/r.height*100));
d(e=>({
...e,[t]:{
...e[t]??{
rotation:0
},x:i,y:a
}
}))
};
return(0,B.jsxs)(`button`,{
type:`button`,onPointerDown:n=>{
n.stopPropagation(),a&&e.mobility!==`Fixed`&&(c(t),n.currentTarget.setPointerCapture(n.pointerId),o(n))
},onPointerMove:e=>{
a&&e.currentTarget.hasPointerCapture(e.pointerId)&&o(e)
},className:`absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center overflow-visible rounded-sm px-1 text-[10px] font-semibold leading-tight shadow-sm ${
e.mobility===`Fixed`?`bg-[#c9d0c4] text-zinc-700`:s===t&&a?`z-20 cursor-grabbing bg-[#243617] text-white ring-2 ring-[#d5bd7b] ring-offset-2`:`bg-[#536b35] text-white`
}`,style:{
left:`${
n.x
}%`,top:`${
n.y
}%`,rotate:`${
n.rotation
}deg`,width:r,height:i
},children:[(0,B.jsx)(`span`,{
className:`absolute -left-2 -top-2 flex size-5 items-center justify-center rounded-full bg-[#d5bd7b] text-[10px] font-bold text-[#243617] shadow`,children:t+1
}),(0,B.jsx)(`span`,{
className:`max-w-full truncate`,children:e.item
}),(0,B.jsxs)(`span`,{
className:`opacity-75`,children:[e.width||`?`,` × `,e.depth||`?`,` cm`]
})]
},e.id)
}),(0,B.jsxs)(`span`,{
className:`absolute bottom-1 left-2 text-[10px] text-zinc-500`,children:[(e.room.widthCm/100).toFixed(2),` m`]
}),(0,B.jsxs)(`span`,{
className:`absolute right-1 top-2 text-[10px] text-zinc-500 [writing-mode:vertical-rl]`,children:[(e.room.depthCm/100).toFixed(2),` m`]
})]
}),(0,B.jsx)(`div`,{
className:`mt-3 flex flex-wrap gap-2`,children:r.map((e,t)=>(0,B.jsxs)(`span`,{
className:`rounded-full bg-[#f3f1e8] px-3 py-1.5 text-xs font-medium text-[#243617]`,children:[(0,B.jsx)(`strong`,{
children:t+1
}),` · `,e.item]
},e.id))
}),a?(0,B.jsxs)(`div`,{
className:`mt-3 rounded-md bg-[#eef1e7] p-3`,children:[(0,B.jsx)(`p`,{
className:`text-sm leading-6 text-zinc-600`,children:`Select an item, then drag it into place.`
}),(0,B.jsxs)(`div`,{
className:`mt-3 grid grid-cols-2 gap-2`,children:[(0,B.jsx)(Q,{
variant:`outline`,className:`bg-white`,onClick:()=>d(e=>({
...e,[s]:{
...e[s]??{
x:50,y:50,rotation:0
},rotation:((e[s]?.rotation??0)+90)%360
}
})),children:`Rotate selected 90°`
}),(0,B.jsxs)(Q,{
onClick:()=>o(!1),className:`bg-[#243617] hover:bg-[#344c22]`,children:[(0,B.jsx)(x,{
className:`size-4`
}),`Save plan`]
})]
})]
}):(0,B.jsxs)(Q,{
onClick:()=>o(!0),variant:`outline`,className:`mt-3 w-full`,children:[(0,B.jsx)(O,{
className:`size-4`
}),`Edit room plan`]
})]
}),(0,B.jsxs)(`div`,{
className:`grid gap-4`,children:[r.map((e,t)=>(0,B.jsxs)(`section`,{
className:`rounded-lg border border-zinc-200 bg-white p-5`,children:[(0,B.jsxs)(`div`,{
className:`flex flex-wrap items-center justify-between gap-3`,children:[(0,B.jsx)(Z,{
variant:`outline`,className:`rounded-md`,children:e.addedByUser?`Added by you`:`AI detected`
}),(0,B.jsxs)(`div`,{
className:`flex gap-2`,children:[(0,B.jsxs)(Q,{
type:`button`,size:`sm`,variant:`outline`,onClick:()=>m(t),"aria-label":`Add another ${
e.item
}`,children:[(0,B.jsx)(w,{
className:`size-4`
}),`Add same`]
}),(0,B.jsxs)(Q,{
type:`button`,size:`sm`,variant:`outline`,onClick:()=>h(t),"aria-label":`Remove ${
e.item
}`,className:`text-[#9d4b36]`,children:[(0,B.jsx)(le,{
className:`size-4`
}),`Remove`]
})]
})]
}),(0,B.jsxs)(`label`,{
className:`mt-4 block`,children:[(0,B.jsx)(`span`,{
className:`text-sm text-zinc-500`,children:`Furniture name`
}),(0,B.jsx)(`input`,{
value:e.item,onChange:e=>f(t,{
item:e.target.value
}),className:`mt-1 w-full border-b border-zinc-200 bg-transparent pb-2 text-lg font-semibold outline-none focus:border-[#536b35]`
})]
}),(0,B.jsxs)(`div`,{
className:`mt-4 grid grid-cols-2 gap-3`,children:[(0,B.jsxs)(`label`,{
className:`rounded-md bg-zinc-50 p-3`,children:[(0,B.jsx)(`span`,{
className:`text-sm text-zinc-500`,children:`Width`
}),(0,B.jsxs)(`span`,{
className:`mt-1 flex items-center gap-1`,children:[(0,B.jsx)(`input`,{
value:e.width,onChange:e=>f(t,{
width:e.target.value
}),className:`w-full bg-transparent font-semibold outline-none`,inputMode:`decimal`
}),(0,B.jsx)(`span`,{
className:`text-sm text-zinc-500`,children:`cm`
})]
})]
}),(0,B.jsxs)(`label`,{
className:`rounded-md bg-zinc-50 p-3`,children:[(0,B.jsx)(`span`,{
className:`text-sm text-zinc-500`,children:`Depth`
}),(0,B.jsxs)(`span`,{
className:`mt-1 flex items-center gap-1`,children:[(0,B.jsx)(`input`,{
value:e.depth,onChange:e=>f(t,{
depth:e.target.value
}),className:`w-full bg-transparent font-semibold outline-none`,inputMode:`decimal`
}),(0,B.jsx)(`span`,{
className:`text-sm text-zinc-500`,children:`cm`
})]
})]
})]
}),(0,B.jsxs)(`div`,{
className:`mt-4 grid grid-cols-2 gap-2`,children:[(0,B.jsx)(Q,{
variant:e.mobility===`Movable`?`default`:`outline`,className:e.mobility===`Movable`?`bg-[#243617] hover:bg-[#344c22]`:``,onClick:()=>f(t,{
mobility:`Movable`
}),children:`Movable`
}),(0,B.jsx)(Q,{
variant:e.mobility===`Fixed`?`default`:`outline`,className:e.mobility===`Fixed`?`bg-[#243617] hover:bg-[#344c22]`:``,onClick:()=>f(t,{
mobility:`Fixed`
}),children:`Fixed`
})]
})]
},e.id)),(0,B.jsx)(Q,{
onClick:p,variant:`outline`,className:`min-h-12 border-dashed`,children:`+ AI missed an item? Add it manually`
})]
})]
})
}function vs({
planMode:e,selectedKrar:t,furniture:n,itemDecisions:r,onDecisions:i,addRequest:a,onAddRequest:o,onToggle:s,onUpgrade:c
}){
function l(a,o){
e===`free`&&o===`Replace`||(i({
...r,[a.id]:{
action:o,need:r[a.id]?.need??``
}
}),t.includes(o)||s(o),o===`Keep`&&t.includes(`Replace`)&&!n.some(e=>e.id!==a.id&&r[e.id]?.action===`Replace`)&&s(`Replace`))
}return(0,B.jsx)($,{
eyebrow:`KAR Choices`,title:`Choose anything to add or replace.`,children:(0,B.jsxs)(`div`,{
className:`grid gap-4`,children:[n.map(t=>{
let n=r[t.id]??{
action:`Keep`,need:``
};
return(0,B.jsxs)(`section`,{
className:`rounded-lg border border-zinc-200 bg-white p-5`,children:[(0,B.jsxs)(`div`,{
className:`flex items-start justify-between gap-3`,children:[(0,B.jsxs)(`div`,{
children:[(0,B.jsx)(`h2`,{
className:`text-lg font-semibold`,children:t.name
}),(0,B.jsxs)(`p`,{
className:`mt-1 text-sm text-zinc-500`,children:[t.widthCm,` × `,t.depthCm,` cm · `,t.mobility]
})]
}),(0,B.jsx)(Z,{
variant:`outline`,className:`rounded-md`,children:`Your decision`
})]
}),(0,B.jsx)(`div`,{
className:`mt-4 grid grid-cols-2 gap-2`,children:[`Keep`,`Replace`].map(r=>(0,B.jsxs)(`button`,{
disabled:e===`free`&&r===`Replace`,onClick:()=>l(t,r),className:`rounded-md border px-2 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:border-zinc-200 disabled:bg-zinc-100 disabled:text-zinc-400 ${
n.action===r?`border-[#243617] bg-[#243617] text-white`:`border-zinc-200 bg-white text-zinc-600`
}`,children:[r,e===`free`&&r===`Replace`?` 🔒`:``]
},r))
}),n.action===`Replace`&&(0,B.jsxs)(`label`,{
className:`mt-4 block rounded-md border border-zinc-200 bg-zinc-50 p-3`,children:[(0,B.jsxs)(`span`,{
className:`flex items-center gap-2 text-sm font-medium text-zinc-700`,children:[`Replace with what? `,(0,B.jsx)(Z,{
variant:`outline`,className:`rounded-md bg-white`,children:`Required`
})]
}),(0,B.jsx)(`input`,{
value:n.need,onChange:e=>i({
...r,[t.id]:{
...n,need:e.target.value
}
}),className:`mt-2 w-full bg-transparent text-base outline-none`,placeholder:`e.g. a narrower coffee table under 70 cm`
}),!n.need.trim()&&(0,B.jsx)(`span`,{
className:`mt-2 block text-xs text-[#9d4b36]`,children:`Tell us what the replacement needs to be.`
})]
})]
},t.id)
}),(0,B.jsxs)(`section`,{
className:`rounded-lg border p-5 ${
t.includes(`Add`)?`border-[#536b35] bg-[#eef1e7]`:`border-zinc-200 bg-white`
}`,children:[(0,B.jsxs)(`div`,{
className:`flex items-center justify-between gap-3`,children:[(0,B.jsx)(`div`,{
children:(0,B.jsxs)(`div`,{
className:`flex items-center gap-2`,children:[(0,B.jsx)(`h2`,{
className:`text-lg font-semibold`,children:`Add something new?`
}),(0,B.jsx)(Z,{
variant:`outline`,className:`rounded-md bg-white`,children:`Premium`
})]
})
}),(0,B.jsx)(Io,{
disabled:e===`free`,checked:t.includes(`Add`),onCheckedChange:()=>s(`Add`),"aria-label":`Add new furniture`
})]
}),t.includes(`Add`)&&(0,B.jsxs)(`div`,{
className:`mt-4`,children:[(0,B.jsxs)(`p`,{
className:`mb-2 text-sm font-medium text-zinc-700`,children:[`What do you want to add? `,(0,B.jsx)(`span`,{
className:`text-[#9d4b36]`,children:`Required`
})]
}),(0,B.jsx)(`div`,{
className:`flex flex-wrap gap-2`,children:[`Closed storage`,`Side table`,`Task light`].map(e=>(0,B.jsx)(`button`,{
onClick:()=>o(e),className:`rounded-full border px-3 py-2 text-sm ${
a===e?`border-[#243617] bg-[#243617] text-white`:`border-[#c8cfb7] bg-white`
}`,children:e
},e))
}),(0,B.jsx)(`input`,{
value:a,onChange:e=>o(e.target.value),className:`mt-3 w-full rounded-md border border-[#c8cfb7] bg-white px-3 py-3 text-base outline-none`,placeholder:`e.g. compact task light beside sofa`
}),!a.trim()&&(0,B.jsx)(`p`,{
className:`mt-2 text-xs text-[#9d4b36]`,children:`Add a furniture type or purpose before continuing.`
})]
}),e===`free`&&(0,B.jsxs)(`div`,{
className:`mt-4 rounded-md bg-zinc-50 p-4`,children:[(0,B.jsx)(`p`,{
className:`text-sm leading-6 text-zinc-600`,children:`Add and Replace are unavailable in Free mode.`
}),(0,B.jsx)(Q,{
onClick:c,variant:`outline`,className:`mt-3 w-full`,children:`Switch to Premium mode`
})]
})]
})]
})
})
}function ys({
planMode:e,selectedGoals:t,constraintNote:n,layoutCount:r,roomModel:i,furniture:a,onLayouts:o,onAdjust:s,onContinue:c,onOpenFinder:l
}){
let[d,f]=(0,u.useState)(`running`),[p,m]=(0,u.useState)(0),[h,g]=(0,u.useState)(0),[_,v]=(0,u.useState)(0),[y,b]=(0,u.useState)([]),[C,w]=(0,u.useState)([]),[T,te]=(0,u.useState)([]),[ne,re]=(0,u.useState)([]),[ie,E]=(0,u.useState)(0),[D,O]=(0,u.useState)(`Layout engine`),[k,ae]=(0,u.useState)(`Checking candidate placements against the confirmed room model…`),se=[`Inside room boundary`,`No furniture overlap`,`Doors remain accessible`,`Walking route is usable`,`Fixed furniture has not moved`,`Hard constraints followed`],ce=[`Allow another movable item to change position`,`Prioritise study space over extra walking space`,`Use a smaller furniture item`],j=t.length?`${
_
} of ${
t.length
} goals`:`Constraints only`;
return(0,u.useEffect)(()=>{
let s=new AbortController;
return f(`running`),re([]),o([]),fetch(`/api/layouts`,{
method:`POST`,headers:{
"Content-Type":`application/json`
},signal:s.signal,body:JSON.stringify({
room:i,furniture:a,goals:t,constraints:n,count:r,clearanceCm:75,planMode:e
})
}).then(async e=>{
let t=await e.json();
if(!e.ok)throw Error(t.error??`Layout generation failed.`);
let n=t.layouts??[];
o(n),m(t.checked??n.length),g(n.length),v(n[0]?.goalsMet??0),O(t.aiProvider??`Layout engine`),b(t.interpretedGoals??[]),w(t.interpretedConstraints??[]),te(t.unsupported??[]),re([...new Set((t.rejected??[]).flat().map(e=>e.message))].slice(0,3)),f(`ready`),ae(n.length?`${
n.length
} valid layouts survived the geometry checks.`:t.rejected?.[0]?.[0]?.message??`No valid layout was found with the current inputs.`)
}).catch(e=>{
e instanceof DOMException&&e.name===`AbortError`||(f(`error`),ae(e instanceof Error?e.message:`Layout generation failed.`))
}),()=>s.abort()
},[i,a,t,n,r,e,o,ie]),(0,B.jsxs)($,{
eyebrow:`Generate & Check`,title:`Your valid layouts.`,children:[(0,B.jsx)(`div`,{
className:`grid grid-cols-3 gap-2`,children:[`Create possibilities`,`Check fit and access`,`Show valid plans`].map((e,t)=>(0,B.jsxs)(`div`,{
className:`rounded-md px-3 py-3 text-center text-xs font-semibold ${
t===2?`bg-[#243617] text-white`:`bg-[#dfe6d2] text-[#243617]`
}`,children:[(0,B.jsx)(`span`,{
className:`mb-1 block text-[11px] opacity-65`,children:t+1
}),e]
},e))
}),(0,B.jsxs)(`section`,{
className:`mt-4 rounded-lg border border-zinc-200 bg-white p-4`,children:[(0,B.jsxs)(`div`,{
className:`flex flex-wrap items-center justify-between gap-2`,children:[(0,B.jsx)(`p`,{
className:`font-semibold text-[#243617]`,children:`Your goals guide the layouts. Rules decide what is valid.`
}),(0,B.jsx)(Z,{
className:`bg-[#243617] text-white hover:bg-[#243617]`,children:D
})]
}),(0,B.jsx)(`p`,{
className:`mt-1 text-sm leading-6 text-zinc-600`,children:`Your goals rank the options. Room rules remove invalid layouts.`
})]
}),d===`ready`&&(0,B.jsxs)(`section`,{
className:`mt-4 rounded-lg border border-[#c8cfb7] bg-white p-4`,children:[(0,B.jsx)(`p`,{
className:`font-semibold text-[#243617]`,children:`What Spacify understood`
}),(0,B.jsxs)(`div`,{
className:`mt-3 space-y-3 text-sm`,children:[(0,B.jsxs)(`div`,{
children:[(0,B.jsx)(`span`,{
className:`font-medium text-zinc-700`,children:`Goals used:`
}),(0,B.jsx)(`div`,{
className:`mt-2 flex flex-wrap gap-2`,children:y.length?y.map(e=>(0,B.jsx)(Z,{
variant:`outline`,children:e
},e)):(0,B.jsx)(`span`,{
className:`text-zinc-500`,children:`No measurable goal selected`
})
})]
}),(0,B.jsxs)(`div`,{
children:[(0,B.jsx)(`span`,{
className:`font-medium text-zinc-700`,children:`User constraints enforced:`
}),(0,B.jsx)(`div`,{
className:`mt-2 space-y-1 text-zinc-600`,children:C.length?C.map(e=>(0,B.jsxs)(`p`,{
children:[`• `,e]
},e)):(0,B.jsx)(`p`,{
children:`• Standard room, access, clearance and fixed-item rules`
})
})]
}),T.length>0&&(0,B.jsxs)(`div`,{
className:`rounded-md bg-[#fff7f3] p-3 text-[#7d3f2f]`,children:[(0,B.jsx)(`p`,{
className:`font-semibold`,children:`Needs clarification`
}),T.map(e=>(0,B.jsxs)(`p`,{
className:`mt-1`,children:[`• `,e]
},e))]
})]
})]
}),(0,B.jsxs)(`section`,{
className:`mt-5 rounded-lg border border-[#c8cfb7] bg-[#eef1e7] p-5`,children:[(0,B.jsxs)(`div`,{
className:`flex items-start gap-3`,children:[(0,B.jsx)(`span`,{
className:`flex size-9 shrink-0 items-center justify-center rounded-full bg-[#243617] text-white`,children:d===`running`?(0,B.jsx)(A,{
className:`size-5 animate-pulse`
}):(0,B.jsx)(x,{
className:`size-5`
})
}),(0,B.jsxs)(`div`,{
children:[(0,B.jsx)(`h2`,{
className:`text-xl font-semibold`,children:d===`running`?`Generating and validating layouts`:d===`ready`?`${
h
} valid layouts from ${
p
} checked`:`Layout engine needs attention`
}),(0,B.jsx)(`p`,{
className:`mt-1 text-sm leading-6 text-zinc-600`,children:k
})]
})]
}),(0,B.jsx)(`div`,{
className:`mt-4 grid grid-cols-2 gap-2`,children:se.map(e=>(0,B.jsxs)(`div`,{
className:`flex items-start gap-2 rounded-md bg-white px-3 py-2 text-sm`,children:[(0,B.jsx)(x,{
className:`mt-0.5 size-4 shrink-0 text-[#536b35]`
}),e]
},e))
})]
}),e===`premium`&&(0,B.jsx)(`section`,{
className:`mt-4 rounded-lg border border-[#d9d0c0] bg-[#f6f3eb] p-5`,children:(0,B.jsxs)(`div`,{
className:`flex items-start gap-3`,children:[(0,B.jsx)(S,{
className:`mt-0.5 size-5 shrink-0 text-[#536b35]`
}),(0,B.jsxs)(`div`,{
children:[(0,B.jsx)(`h2`,{
className:`font-semibold`,children:`Added and replacement items checked`
}),(0,B.jsx)(`p`,{
className:`mt-1 text-sm leading-6 text-zinc-600`,children:`Only products that fit the room, rules and budget are included.`
})]
})]
})
}),d===`ready`&&h===0?(0,B.jsxs)(`section`,{
className:`mt-5 rounded-lg border border-zinc-200 bg-white p-5`,children:[(0,B.jsxs)(`div`,{
className:`flex items-start gap-3`,children:[(0,B.jsx)(`span`,{
className:`flex size-9 shrink-0 items-center justify-center rounded-full bg-[#fff0e9] font-bold text-[#9d4b36]`,children:`!`
}),(0,B.jsxs)(`div`,{
children:[(0,B.jsx)(`h2`,{
className:`text-xl font-semibold`,children:`No valid layout was found yet`
}),(0,B.jsx)(`p`,{
className:`mt-1 text-sm leading-6 text-zinc-600`,children:`Spacify checked your confirmed room and furniture but could not place every item while preserving the mandatory rules.`
})]
})]
}),(0,B.jsxs)(`div`,{
className:`mt-4 rounded-md border border-[#e2c9c1] bg-[#fff7f3] p-4`,children:[(0,B.jsx)(`p`,{
className:`text-sm font-semibold text-[#7d3f2f]`,children:`What blocked generation`
}),(0,B.jsx)(`div`,{
className:`mt-2 space-y-1 text-sm leading-6 text-zinc-700`,children:ne.length?ne.map(e=>(0,B.jsxs)(`p`,{
children:[`• `,e]
},e)):(0,B.jsx)(`p`,{
children:`• Check that the room and furniture dimensions are correct.`
})
})]
}),(0,B.jsxs)(`div`,{
className:`mt-4 grid gap-3 sm:grid-cols-2`,children:[(0,B.jsxs)(`div`,{
className:`rounded-md bg-zinc-50 p-4`,children:[(0,B.jsx)(`p`,{
className:`text-sm font-semibold`,children:`Hard constraints · never violated`
}),(0,B.jsx)(`div`,{
className:`mt-3 flex flex-wrap gap-2`,children:[`Room boundary`,`No overlap`,`Door clearance`,`Fixed items stay fixed`].map(e=>(0,B.jsx)(Z,{
variant:`outline`,className:`bg-white`,children:e
},e))
}),(0,B.jsx)(`p`,{
className:`mt-3 line-clamp-2 text-sm leading-6 text-zinc-500`,children:n
})]
}),(0,B.jsxs)(`div`,{
className:`rounded-md bg-zinc-50 p-4`,children:[(0,B.jsx)(`p`,{
className:`text-sm font-semibold`,children:`Goals · optimised where possible`
}),(0,B.jsx)(`div`,{
className:`mt-3 flex flex-wrap gap-2`,children:t.map(e=>(0,B.jsx)(Z,{
variant:`outline`,className:`bg-white`,children:e
},e))
})]
})]
})]
}):d===`ready`&&h>0?(0,B.jsx)(`section`,{
className:`mt-5 rounded-lg border border-[#c8cfb7] bg-white p-5`,children:(0,B.jsxs)(`div`,{
className:`flex items-start gap-3`,children:[(0,B.jsx)(`span`,{
className:`flex size-9 shrink-0 items-center justify-center rounded-full bg-[#dfe6d2] text-[#243617]`,children:(0,B.jsx)(x,{
className:`size-5`
})
}),(0,B.jsxs)(`div`,{
children:[(0,B.jsx)(`h2`,{
className:`text-xl font-semibold`,children:`All checks passed`
}),(0,B.jsx)(`p`,{
className:`mt-1 text-sm leading-6 text-zinc-600`,children:`The layouts fit your room and keep access clear.`
})]
})]
})
}):null,h>0&&(0,B.jsxs)(`section`,{
className:`mt-5 rounded-lg bg-[#243617] p-5 text-white`,children:[(0,B.jsxs)(`div`,{
className:`flex items-start justify-between gap-3`,children:[(0,B.jsxs)(`div`,{
children:[(0,B.jsx)(`p`,{
className:`text-xs font-semibold uppercase tracking-[0.16em] text-[#b7c7b9]`,children:`Best available plan`
}),(0,B.jsx)(`h2`,{
className:`mt-2 text-xl font-semibold`,children:`All constraints respected`
})]
}),(0,B.jsx)(Z,{
className:`bg-white text-[#243617] hover:bg-white`,children:j
})]
}),(0,B.jsx)(`p`,{
className:`mt-3 text-sm leading-6 text-white/75`,children:`The plan achieves as many selected goals as the room allows without breaking any mandatory rule.`
})]
}),h===0&&(0,B.jsxs)(`section`,{
className:`mt-5 rounded-lg border border-zinc-200 bg-white p-5`,children:[(0,B.jsx)(`h2`,{
className:`text-xl font-semibold`,children:`Possible adjustments`
}),(0,B.jsx)(`div`,{
className:`mt-3 space-y-2`,children:ce.map(e=>(0,B.jsxs)(`div`,{
className:`flex items-start gap-3 rounded-md bg-[#f3f1e8] px-4 py-3 text-sm`,children:[(0,B.jsx)(ee,{
className:`mt-0.5 size-4 shrink-0 text-[#536b35]`
}),e]
},e))
}),(0,B.jsxs)(`div`,{
className:`mt-4 rounded-md p-4 ${
e===`premium`?`bg-[#eef1e7]`:`border border-dashed border-zinc-300 bg-zinc-50`
}`,children:[(0,B.jsx)(`p`,{
className:`font-semibold`,children:e===`premium`?`Premium recovery`:`Free plan guidance`
}),(0,B.jsx)(`p`,{
className:`mt-1 text-sm leading-6 text-zinc-600`,children:e===`premium`?`Replacing the 140 cm cabinet with a unit below 100 cm would create enough clearance to better meet your study-space goal.`:`Your current furniture limits further improvement. Change a goal, constraint or furniture item, then regenerate.`
}),e===`premium`&&(0,B.jsxs)(Q,{
onClick:l,variant:`outline`,className:`mt-3 bg-white`,children:[(0,B.jsx)(oe,{
className:`size-4`
}),`Find suitable items`]
})]
}),(0,B.jsxs)(`div`,{
className:`mt-4 grid gap-3 sm:grid-cols-2`,children:[(0,B.jsx)(Q,{
onClick:s,variant:`outline`,children:`Check room or constraints`
}),(0,B.jsxs)(Q,{
onClick:()=>E(e=>e+1),className:`bg-[#243617] hover:bg-[#344c22]`,children:[`Try generating again`,(0,B.jsx)(A,{
className:`size-4`
})]
})]
})]
}),d===`error`&&(0,B.jsxs)(`section`,{
className:`mt-5 rounded-lg border border-[#e2c9c1] bg-[#fff7f3] p-5`,children:[(0,B.jsx)(`p`,{
className:`font-semibold text-[#7d3f2f]`,children:`Generation stopped`
}),(0,B.jsx)(`p`,{
className:`mt-1 text-sm leading-6 text-zinc-700`,children:k
}),(0,B.jsx)(Q,{
onClick:()=>E(e=>e+1),className:`mt-4 bg-[#243617] hover:bg-[#344c22]`,children:`Try again`
})]
})]
})
}function bs({
selectedKrar:e,planMode:t
}){
let n=t===`free`?is.filter(e=>e.action===`Keep`||e.action===`Rearrange`):is;
return(0,B.jsxs)($,{
eyebrow:`Resolve Conflicts`,title:`Alternative ways to make your plan work.`,children:[(0,B.jsx)(`p`,{
className:`mb-5 max-w-3xl text-base leading-7 text-zinc-600`,children:t===`free`?`Free mode suggests ways to keep and rearrange your existing furniture only.`:`Premium mode first preserves your choices, then may suggest Add or Replace when it resolves a conflict. Any change still requires approval.`
}),(0,B.jsxs)(`div`,{
className:`mb-5 grid gap-3`,children:[(0,B.jsxs)(`div`,{
className:`rounded-lg border border-[#c8cfb7] bg-[#eef1e7] p-4`,children:[(0,B.jsx)(`p`,{
className:`font-semibold text-[#243617]`,children:`Option A · Respect my submitted plan`
}),(0,B.jsx)(`p`,{
className:`mt-1 text-sm leading-6 text-zinc-600`,children:`Use a narrower storage unit and keep every existing decision.`
})]
}),t===`premium`?(0,B.jsxs)(`div`,{
className:`rounded-lg border border-zinc-200 bg-white p-4`,children:[(0,B.jsx)(`p`,{
className:`font-semibold`,children:`Option B · AI-recommended change`
}),(0,B.jsx)(`p`,{
className:`mt-1 text-sm leading-6 text-zinc-600`,children:`Replace the oversized coffee table to create more clearance. This requires your approval.`
}),(0,B.jsx)(Q,{
variant:`outline`,className:`mt-3`,children:`Approve this change`
})]
}):(0,B.jsxs)(`div`,{
className:`rounded-lg border border-dashed border-zinc-300 bg-zinc-50 p-4`,children:[(0,B.jsxs)(`div`,{
className:`flex items-center justify-between gap-3`,children:[(0,B.jsx)(`p`,{
className:`font-semibold`,children:`Add and Replace alternatives`
}),(0,B.jsx)(Z,{
variant:`outline`,children:`Premium`
})]
}),(0,B.jsx)(`p`,{
className:`mt-1 text-sm leading-6 text-zinc-600`,children:`Switch modes from the header to test purchase-assisted recommendations.`
})]
})]
}),(0,B.jsx)(`div`,{
className:`grid gap-4`,children:n.map((t,n)=>{
let r=e.includes(t.action);
return(0,B.jsx)(`section`,{
className:`rounded-lg border p-5 transition ${
r?`border-zinc-200 bg-white`:`border-zinc-200 bg-zinc-50 opacity-55`
}`,children:(0,B.jsx)(`div`,{
className:`flex flex-wrap items-start justify-between gap-4`,children:(0,B.jsxs)(`div`,{
children:[(0,B.jsx)(Z,{
className:`rounded-md ${
r?`bg-[#dfe6d2] text-[#243617] hover:bg-[#dfe6d2]`:`bg-zinc-200 text-zinc-500 hover:bg-zinc-200`
}`,children:t.action
}),(0,B.jsx)(Z,{
variant:`outline`,className:`ml-2 rounded-md`,children:n<2?`Your choice`:`AI suggestion`
}),(0,B.jsx)(`h2`,{
className:`mt-3 text-2xl font-semibold tracking-tight`,children:t.item
}),(0,B.jsx)(`p`,{
className:`mt-2 max-w-2xl leading-7 text-zinc-600`,children:t.reason
}),(0,B.jsx)(`p`,{
className:`mt-3 text-sm font-medium text-[#536b35]`,children:n<2?`Preserved from your plan`:`Suggested to resolve the conflict`
})]
})
})
},t.item)
})
})]
})
}function xs({
selectedLayout:e,budget:t,layoutCount:n,selectedGoals:r,planMode:i,roomModel:a,generatedLayouts:o,onLayout:s
}){
let c=o.slice(0,n).map(e=>({
name:e.name,spend:0,score:e.score,keep:`100% kept`,clearance:`${
e.clearanceCm
} cm path`,note:e.decisions.slice(0,2).join(` `)||`Validated arrangement using the confirmed room model.`,engine:e
}));
return(0,B.jsxs)($,{
eyebrow:`Choose Layout`,title:`Choose a layout.`,children:[(0,B.jsx)(`div`,{
className:`grid gap-4 lg:grid-cols-3`,children:c.map((n,o)=>(0,B.jsxs)(`button`,{
onClick:()=>s(n.name),className:`rounded-lg border p-5 text-left transition hover:-translate-y-0.5 hover:shadow-md ${
e===n.name?`border-[#243617] bg-[#eef1e7]`:`border-zinc-200 bg-white`
}`,children:[(0,B.jsxs)(`div`,{
className:`flex items-center justify-between`,children:[(0,B.jsx)(Z,{
variant:`outline`,className:`rounded-md`,children:i===`free`?`Free · Existing furniture`:n.name===`Minimal Changes`?`Your KAR plan`:`AI alternative`
}),e===n.name&&(0,B.jsx)(`span`,{
className:`flex size-7 items-center justify-center rounded-full bg-[#243617] text-white`,children:(0,B.jsx)(x,{
className:`size-4`,strokeWidth:3
})
})]
}),(0,B.jsx)(`div`,{
className:`mt-5 aspect-[4/3] rounded-md bg-[#e8e0d2] p-4`,children:n.engine?(0,B.jsx)(Ms,{
room:a,placements:n.engine.placements
}):(0,B.jsx)(Ns,{
variant:n.name
})
}),(0,B.jsx)(`h2`,{
className:`mt-5 text-xl font-semibold`,children:n.name
}),(0,B.jsx)(`p`,{
className:`mt-2 min-h-[52px] text-sm leading-6 text-zinc-600`,children:n.note
}),(0,B.jsxs)(`p`,{
className:`mt-3 text-sm font-medium text-[#536b35]`,children:[`All mandatory checks passed · `,r.length?`Meets ${
n.engine?.goalsMet??Math.max(0,r.length-1)
} of ${
r.length
} goals`:`No optional goals selected`]
}),!!n.engine?.warnings?.length&&(0,B.jsxs)(`div`,{
className:`mt-3 rounded-md border border-[#e5c99a] bg-[#fff8e8] p-3 text-sm leading-5 text-[#765221]`,children:[(0,B.jsx)(`span`,{
className:`font-semibold`,children:`Check on-site: `
}),n.engine.warnings[0]]
}),(0,B.jsxs)(`div`,{
className:`mt-4 grid grid-cols-2 gap-2 text-xs text-zinc-600`,children:[(0,B.jsxs)(`span`,{
className:`rounded-md bg-zinc-50 px-3 py-2`,children:[`Room `,(a.widthCm/100).toFixed(2),` × `,(a.depthCm/100).toFixed(2),` m`]
}),(0,B.jsx)(`span`,{
className:`rounded-md bg-zinc-50 px-3 py-2`,children:n.engine?`${
n.engine.placements.length
} placed items`:`Sofa 210 × 92 cm`
}),(0,B.jsx)(`span`,{
className:`rounded-md bg-zinc-50 px-3 py-2`,children:n.engine?`Collision checked`:`Table 95 × 95 cm`
}),(0,B.jsx)(`span`,{
className:`rounded-md bg-zinc-50 px-3 py-2`,children:`Scale 1:40`
})]
}),(0,B.jsxs)(`div`,{
className:`mt-4 grid grid-cols-2 gap-2 text-sm`,children:[(0,B.jsx)(`span`,{
className:`rounded-md bg-[#f3f1e8] px-3 py-2 font-medium text-[#243617]`,children:n.keep
}),(0,B.jsx)(`span`,{
className:`rounded-md bg-[#f3f1e8] px-3 py-2 font-medium text-[#243617]`,children:n.clearance
})]
}),(0,B.jsxs)(`div`,{
className:`mt-5 flex items-center justify-between text-sm`,children:[(0,B.jsx)(`span`,{
className:`text-zinc-500`,children:i===`free`?`Furniture purchases`:`Estimated add-ons`
}),(0,B.jsx)(`span`,{
className:i===`free`||n.spend<=t?`font-semibold text-[#243617]`:`font-semibold text-[#9d4b36]`,children:i===`free`?`S$0`:cs(n.spend)
})]
})]
},n.name))
}),c.length===0&&(0,B.jsxs)(`div`,{
className:`rounded-lg border border-[#e5c99a] bg-[#fff8e8] p-5 text-sm leading-6 text-[#765221]`,children:[(0,B.jsx)(`p`,{
className:`font-semibold`,children:`No generated layout is available yet.`
}),(0,B.jsx)(`p`,{
className:`mt-1`,children:`Return to Generate & Check and adjust the requirement identified there.`
})]
})]
})
}function Ss({
selectedLayout:e,selectedKrar:t,room:n,layoutResult:r
}){
let i=r?.placements??[];
return(0,B.jsx)($,{
eyebrow:`Selected Layout`,title:`Review your layout.`,children:(0,B.jsxs)(`div`,{
className:`grid gap-6 xl:grid-cols-[1.15fr_0.85fr]`,children:[(0,B.jsxs)(`section`,{
className:`rounded-lg border border-zinc-200 bg-white p-5`,children:[(0,B.jsxs)(`div`,{
className:`flex flex-wrap items-center justify-between gap-3`,children:[(0,B.jsxs)(`div`,{
children:[(0,B.jsx)(`h2`,{
className:`text-xl font-semibold`,children:e
}),(0,B.jsx)(`p`,{
className:`mt-1 text-sm text-zinc-500`,children:`Selected layout`
})]
}),(0,B.jsxs)(Q,{
variant:`outline`,children:[(0,B.jsx)(ie,{
className:`size-4`
}),`Inspect`]
})]
}),(0,B.jsx)(`div`,{
className:`mt-5 aspect-[16/10] rounded-md bg-[#e8e0d2] p-6`,children:i.length?(0,B.jsx)(Ms,{
room:n,placements:i
}):(0,B.jsx)(`p`,{
className:`flex h-full items-center justify-center text-center text-sm text-zinc-500`,children:`Generate and choose a layout first.`
})
}),(0,B.jsxs)(`div`,{
className:`mt-4 grid grid-cols-2 gap-2 text-sm`,children:[(0,B.jsxs)(`span`,{
className:`rounded-md bg-zinc-50 px-3 py-2`,children:[`Room: `,(n.widthCm/100).toFixed(2),` × `,(n.depthCm/100).toFixed(2),` m`]
}),(0,B.jsxs)(`span`,{
className:`rounded-md bg-zinc-50 px-3 py-2`,children:[i.length,` placed items`]
}),i.slice(0,4).map(e=>(0,B.jsxs)(`span`,{
className:`rounded-md bg-zinc-50 px-3 py-2`,children:[e.name,`: `,e.widthCm,` × `,e.depthCm,` cm`]
},e.id))]
})]
}),(0,B.jsxs)(`section`,{
className:`rounded-lg border border-zinc-200 bg-[#f3f1e8] p-6`,children:[(0,B.jsx)(`h2`,{
className:`text-xl font-semibold`,children:`Included plan decisions`
}),(0,B.jsx)(`div`,{
className:`mt-5 space-y-3`,children:es.map(e=>(0,B.jsxs)(`div`,{
className:`flex items-center justify-between rounded-md bg-white px-4 py-3`,children:[(0,B.jsxs)(`div`,{
className:`flex items-center gap-3`,children:[(0,B.jsx)(e.icon,{
className:`size-5 text-[#536b35]`
}),(0,B.jsx)(`span`,{
className:`font-medium`,children:e.title
})]
}),(0,B.jsx)(Io,{
checked:t.includes(e.key),"aria-label":`${
e.title
} layer`
})]
},e.key))
}),(0,B.jsx)(`p`,{
className:`mt-6 text-sm leading-6 text-zinc-600`,children:`Continue to adjust this plan.`
}),(0,B.jsxs)(`div`,{
className:`mt-4 grid grid-cols-2 gap-2 text-sm`,children:[(0,B.jsxs)(`span`,{
className:`rounded-md bg-white px-3 py-2 font-medium text-[#243617]`,children:[r?.clearanceCm??75,` cm clear path ✓`]
}),(0,B.jsx)(`span`,{
className:`rounded-md bg-white px-3 py-2 font-medium text-[#243617]`,children:`Door usable ✓`
}),(0,B.jsx)(`span`,{
className:`rounded-md bg-white px-3 py-2 font-medium text-[#243617]`,children:`No overlap ✓`
}),(0,B.jsx)(`span`,{
className:`rounded-md bg-white px-3 py-2 font-medium text-[#243617]`,children:`Fixed items safe ✓`
})]
})]
})]
})
})
}function Cs({
savedProducts:e,onSave:t,selectedKrar:n,planMode:r,onUpgrade:i,furniture:a,itemDecisions:o,addRequest:s,budget:c
}){
let l=n.includes(`Add`)||n.includes(`Replace`),d=[...a.filter(e=>o[e.id]?.action===`Replace`).map(e=>({
id:`replace-${
e.id
}`,label:`Replace ${
e.name
}`,detail:o[e.id].need,type:`Replace`,query:`${
e.name
} ${
o[e.id].need
}`
})),...n.includes(`Add`)&&s.trim()?[{
id:`add`,label:`Add ${
s
}`,detail:`Requested for this room`,type:`Add`,query:s
}]:[]],[f,p]=(0,u.useState)(d[0]?.id??`add`),m=d.find(e=>e.id===f)??d[0],h=(m?.query??``).toLowerCase().split(/\W+/).filter(e=>e.length>2),[g,_]=(0,u.useState)([]),[v,y]=(0,u.useState)(`idle`),b=(m?ss.filter(e=>e.type===m.type):ss).map(e=>({
product:e,relevance:h.filter(t=>`${
e.name
} ${
e.style
} ${
e.dimensions
}`.toLowerCase().includes(t)).length+ +(e.price<=c)
})).sort((e,t)=>t.relevance-e.relevance),ee=[...b].sort((e,t)=>{
let n=g.findIndex(t=>t.id===e.product.id),r=g.findIndex(e=>e.id===t.product.id);
return(n<0?99:n)-(r<0?99:r)
});
return(0,u.useEffect)(()=>{
d.length&&!d.some(e=>e.id===f)&&p(d[0].id)
},[d,f]),(0,u.useEffect)(()=>{
if(r!==`premium`||!m){
_([]),y(`idle`);
return
}let e=new AbortController;
return y(`loading`),fetch(`/api/furniture-advice`,{
method:`POST`,headers:{
"Content-Type":`application/json`
},signal:e.signal,body:JSON.stringify({
task:m,budget:c,candidates:b.map(({
product:e
})=>e)
})
}).then(async e=>{
let t=await e.json();
if(!e.ok)throw Error(t.error??`Claude recommendations failed.`);
_(t.recommendations??[]),y(`ready`)
}).catch(e=>{
e instanceof DOMException&&e.name===`AbortError`||y(`error`)
}),()=>e.abort()
},[r,m?.id,c]),r===`free`?(0,B.jsxs)($,{
eyebrow:`Furniture Finder`,title:`Product matching is a Premium tool.`,children:[(0,B.jsxs)(`section`,{
className:`overflow-hidden rounded-xl bg-[linear-gradient(145deg,#243617_0%,#344c22_100%)] p-6 text-white shadow-[0_14px_34px_rgba(23,61,50,0.22)]`,children:[(0,B.jsx)(Z,{
className:`rounded-full bg-[#d5bd7b] text-[#243617] hover:bg-[#d5bd7b]`,children:`Premium mode`
}),(0,B.jsx)(`h2`,{
className:`mt-5 text-2xl font-semibold`,children:`Find furniture that fits before you buy.`
}),(0,B.jsx)(`p`,{
className:`mt-3 leading-7 text-white/72`,children:`See products that fit your room and budget.`
}),(0,B.jsx)(`div`,{
className:`mt-5 space-y-3`,children:[`Personalised Add and Replace results`,`Dimension and clearance validation`,`Cheaper alternatives from retailer feeds`].map(e=>(0,B.jsxs)(`div`,{
className:`flex items-center gap-3 rounded-md bg-white/10 px-4 py-3 text-sm`,children:[(0,B.jsx)(x,{
className:`size-4 text-[#d5bd7b]`
}),e]
},e))
}),(0,B.jsxs)(Q,{
onClick:i,className:`mt-6 w-full bg-white text-[#243617] hover:bg-[#eef1e7]`,children:[(0,B.jsx)(j,{
className:`size-4`
}),`Switch to Premium mode`]
})]
}),(0,B.jsx)(`p`,{
className:`mt-4 text-center text-sm leading-6 text-zinc-500`,children:`You can switch back to Free mode at any time from the header.`
})]
}):(0,B.jsxs)($,{
eyebrow:`Furniture Finder`,title:m?m.label:`Choose what you want to add or replace.`,children:[(0,B.jsx)(`div`,{
className:`mb-5 rounded-lg border p-5 ${
l?`border-[#c8cfb7] bg-[#eef1e7]`:`border-zinc-200 bg-white`
}`,children:(0,B.jsxs)(`div`,{
className:`flex flex-wrap items-center justify-between gap-4`,children:[(0,B.jsxs)(`div`,{
children:[(0,B.jsx)(`p`,{
className:`font-semibold`,children:l?`Recommendations based on your request`:`Available outside this plan`
}),(0,B.jsx)(`p`,{
className:`mt-1 text-sm leading-6 text-zinc-600`,children:l?`Filtered by size, stock and budget.`:`Shopping is optional for this plan.`
})]
}),(0,B.jsx)(Z,{
className:`rounded-md bg-[#243617] text-white hover:bg-[#243617]`,children:v===`loading`?`Claude is ranking…`:v===`error`?`Claude unavailable`:l?`Claude · Plan-linked`:`Claude · Browse only`
})]
})
}),(0,B.jsxs)(`div`,{
id:`retailer-feed`,className:`mb-5 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-zinc-200 bg-white p-4`,children:[(0,B.jsxs)(`div`,{
className:`flex items-center gap-3`,children:[(0,B.jsx)(`span`,{
className:`flex size-10 items-center justify-center rounded-md bg-[#eef1e7] text-[#243617]`,children:(0,B.jsx)(M,{
className:`size-5`
})
}),(0,B.jsxs)(`div`,{
children:[(0,B.jsx)(`p`,{
className:`font-semibold`,children:`Singapore SME catalogue pilot`
}),(0,B.jsx)(`p`,{
className:`text-sm text-zinc-500`,children:`Merchant spreadsheet feeds now · live APIs or webhooks later`
})]
})]
}),(0,B.jsx)(Z,{
variant:`outline`,className:`rounded-md`,children:`3 feeds updated today`
})]
}),(0,B.jsxs)(`section`,{
className:`mb-5 rounded-lg border border-zinc-200 bg-white p-4`,children:[(0,B.jsx)(`p`,{
className:`text-sm font-semibold text-zinc-500`,children:`What Furniture Finder is solving`
}),(0,B.jsx)(`div`,{
className:`mt-3 grid gap-2`,children:d.map(e=>(0,B.jsxs)(`button`,{
onClick:()=>p(e.id),className:`flex items-center justify-between rounded-md border px-4 py-3 text-left ${
f===e.id?`border-[#536b35] bg-[#eef1e7]`:`border-zinc-200`
}`,children:[(0,B.jsxs)(`span`,{
children:[(0,B.jsx)(`span`,{
className:`block font-semibold`,children:e.label
}),(0,B.jsx)(`span`,{
className:`mt-1 block text-sm text-zinc-500`,children:e.detail
})]
}),f===e.id&&(0,B.jsx)(x,{
className:`size-5 text-[#536b35]`
})]
},e.id))
}),!d.length&&(0,B.jsx)(`p`,{
className:`mt-3 rounded-md bg-zinc-50 p-4 text-sm leading-6 text-zinc-600`,children:`No Add or Replace task was selected. Return to KAR Choices to specify what Furniture Finder should solve.`
})]
}),(0,B.jsxs)(`section`,{
className:`mb-5 rounded-lg border border-[#c8cfb7] bg-[#eef1e7] p-4`,children:[(0,B.jsx)(`p`,{
className:`font-semibold text-[#243617]`,children:`Fit checks`
}),(0,B.jsx)(`p`,{
className:`mt-1 text-sm leading-6 text-zinc-600`,children:`Products that break room, access or budget rules are hidden.`
})]
}),(0,B.jsx)(`div`,{
className:`rounded-lg border border-zinc-200 bg-white p-4`,children:(0,B.jsxs)(`div`,{
className:`flex flex-wrap items-center gap-3`,children:[(0,B.jsxs)(`div`,{
className:`flex min-w-[220px] flex-1 items-center gap-2 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2`,children:[(0,B.jsx)(oe,{
className:`size-4 text-zinc-500`
}),(0,B.jsx)(`span`,{
className:`text-sm text-zinc-500`,children:`Search dimension-checked local products`
})]
}),[`All`,`In stock`,`Add`,`Replace`,`Under S$300`].map(e=>(0,B.jsx)(Q,{
variant:e===`All`?`default`:`outline`,className:e===`All`?`bg-[#243617] hover:bg-[#344c22]`:``,children:e
},e))]
})
}),(0,B.jsx)(`div`,{
className:`mt-5 grid gap-4 lg:grid-cols-4`,children:ee.map(({
product:n,relevance:r
})=>(0,B.jsx)(ws,{
product:n,saved:e.includes(n.id),onSave:()=>t(n.id),reason:m?g.find(e=>e.id===n.id)?.reason??`${
r>1?`Strong`:`Possible`
} match for “${
m.detail
}”${
n.price<=c?` and within your target budget`:``
}.`:void 0
},n.id))
})]
})
}function ws({
product:e,saved:t,onSave:n,reason:r
}){
return(0,B.jsxs)(`section`,{
className:`group rounded-lg border border-zinc-200 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-md`,children:[(0,B.jsxs)(`div`,{
className:`relative aspect-[4/3] overflow-hidden rounded-md bg-[#ece5da]`,children:[(0,B.jsx)(`div`,{
className:`absolute inset-x-6 bottom-8 h-8 rounded-full bg-[#9b8e7e]`
}),(0,B.jsx)(`div`,{
className:`absolute left-1/2 top-10 h-24 w-28 -translate-x-1/2 rounded-md bg-white/70 shadow-sm`
})]
}),(0,B.jsxs)(`div`,{
className:`mt-4 flex items-start justify-between gap-3`,children:[(0,B.jsxs)(`div`,{
children:[(0,B.jsxs)(`div`,{
className:`flex flex-wrap gap-2`,children:[(0,B.jsx)(Z,{
variant:`outline`,className:`rounded-md`,children:e.type
}),(0,B.jsx)(Z,{
className:`rounded-md bg-[#dfe6d2] text-[#243617] hover:bg-[#dfe6d2]`,children:`Valid dimensions`
})]
}),(0,B.jsx)(`h2`,{
className:`mt-3 text-lg font-semibold leading-6`,children:e.name
})]
}),(0,B.jsx)(`p`,{
className:`text-lg font-semibold`,children:cs(e.price)
})]
}),(0,B.jsxs)(`div`,{
className:`mt-4 space-y-2 text-sm text-zinc-600`,children:[(0,B.jsxs)(`div`,{
className:`flex justify-between gap-4`,children:[(0,B.jsx)(`span`,{
children:e.fit
}),(0,B.jsx)(`span`,{
children:e.dimensions
})]
}),(0,B.jsxs)(`div`,{
className:`flex justify-between gap-4`,children:[(0,B.jsx)(`span`,{
children:e.style
}),(0,B.jsxs)(`span`,{
children:[`Alt `,cs(e.alt)]
})]
}),(0,B.jsx)(`p`,{
className:`text-xs font-medium uppercase text-zinc-400`,children:e.source
}),r&&(0,B.jsxs)(`p`,{
className:`rounded-md bg-[#f3f1e8] p-3 text-sm leading-5 text-[#243617]`,children:[(0,B.jsx)(`span`,{
className:`font-semibold`,children:`Why it matches: `
}),r]
})]
}),(0,B.jsxs)(`div`,{
className:`mt-4 grid grid-cols-2 gap-2`,children:[(0,B.jsx)(Q,{
variant:`outline`,children:`Retailer ↗`
}),(0,B.jsx)(Q,{
onClick:n,className:`bg-[#243617] hover:bg-[#344c22]`,children:t?`In plan`:`Add to plan`
})]
})]
})
}function Ts({
budget:e,onBudget:t
}){
return(0,B.jsx)($,{
eyebrow:`Budget Target`,title:`How much can this plan spend?`,children:(0,B.jsxs)(`section`,{
className:`rounded-lg border border-zinc-200 bg-white p-5`,children:[(0,B.jsxs)(`div`,{
className:`flex items-start justify-between gap-3`,children:[(0,B.jsxs)(`div`,{
children:[(0,B.jsx)(`p`,{
className:`text-sm text-zinc-500`,children:`Maximum budget`
}),(0,B.jsx)(`p`,{
className:`mt-2 text-4xl font-semibold tracking-tight`,children:cs(e[0])
})]
}),(0,B.jsx)(Z,{
className:`bg-[#243617] text-white hover:bg-[#243617]`,children:`Premium`
})]
}),(0,B.jsx)(Ro,{
value:e,onValueChange:t,min:0,max:1500,step:50,className:`mt-7 [&_[data-slot=slider-range]]:bg-[#536b35] [&_[data-slot=slider-thumb]]:border-[#536b35]`
}),(0,B.jsxs)(`div`,{
className:`mt-3 flex justify-between text-sm text-zinc-500`,children:[(0,B.jsx)(`span`,{
children:`S$0`
}),(0,B.jsx)(`span`,{
children:`S$1,500`
})]
}),(0,B.jsx)(`div`,{
className:`mt-6 rounded-md bg-[#f3f1e8] p-4`,children:(0,B.jsx)(`p`,{
className:`text-sm leading-6 text-zinc-600`,children:`Furniture Finder will use this limit.`
})
}),(0,B.jsxs)(`label`,{
className:`mt-4 flex items-start gap-3 rounded-md border border-zinc-200 p-4`,children:[(0,B.jsx)(Io,{
defaultChecked:!0,"aria-label":`Allow lower-cost alternatives`
}),(0,B.jsxs)(`span`,{
children:[(0,B.jsx)(`span`,{
className:`block font-medium`,children:`Include lower-cost alternatives`
}),(0,B.jsx)(`span`,{
className:`mt-1 block text-sm leading-6 text-zinc-500`,children:`Show cheaper compatible items when the first recommendation is too expensive.`
})]
})]
})]
})
})
}function Es({
planMode:e,room:t,sourceFurniture:n,layoutResult:r,onLayoutChange:i
}){
let[a,o]=(0,u.useState)(`Keep the sofa where it is and improve the walking path.`),[s,c]=(0,u.useState)(r?.placements??[]),[l,d]=(0,u.useState)(r?.placements.find(e=>e.mobility===`Movable`)?.id??``),[f,p]=(0,u.useState)(``),[m,h]=(0,u.useState)(!1),g=e===`premium`;
(0,u.useEffect)(()=>{
c(r?.placements??[])
},[r?.id]);
let _=s.find(e=>e.id===l);
function v(e){
if(!_||_.mobility===`Fixed`)return;
let n=e.currentTarget.getBoundingClientRect(),r=Math.max(0,Math.min(t.widthCm,(e.clientX-n.left)/n.width*t.widthCm)),i=Math.max(0,Math.min(t.depthCm,(e.clientY-n.top)/n.height*t.depthCm));
c(e=>e.map(e=>e.id===_.id?{
...e,xCm:r,yCm:i
}:e)),p(`Unsaved manual change`)
}function y(){
if(!r)return;
let e=Ko(t,s,n,75);
if(!e.valid)return p(e.issues[0]?.message??`This position is not valid.`);
i({
...r,id:`${
r.id
}-manual-${
Date.now()
}`,placements:s,issues:[],warnings:e.warnings,decisions:[...r.decisions,`Manual adjustment saved and geometry checked.`]
}),p(`Manual changes saved and validated.`)
}async function b(){
if(!(!r||!a.trim())){
h(!0),p(`AI is adjusting the selected layout…`);
try{
let o=await fetch(`/api/adjust`,{
method:`POST`,headers:{
"Content-Type":`application/json`
},body:JSON.stringify({
room:t,sourceFurniture:n,layout:{
...r,placements:s
},request:a,planMode:e
})
}),l=await o.json();
if(!o.ok||!l.layout)throw Error(l.error??`The adjustment could not be applied.`);
c(l.layout.placements),i(l.layout),p(`${
l.aiProvider??(e===`premium`?`Claude`:`Gemini`)
} adjustment applied and validated.`)
}catch(e){
p(e instanceof Error?e.message:`The adjustment could not be applied.`)
}finally{
h(!1)
}
}
}return r?(0,B.jsx)($,{
eyebrow:`Adjust Plan`,title:g?`Adjust the layout you chose.`:`Ask AI to refine your chosen layout.`,children:(0,B.jsxs)(`section`,{
className:`rounded-lg border border-zinc-200 bg-white p-5`,children:[(0,B.jsxs)(`div`,{
className:`flex items-center gap-3`,children:[(0,B.jsx)(`span`,{
className:`flex size-11 shrink-0 items-center justify-center rounded-md bg-[#eef1e7] text-[#243617]`,children:(0,B.jsx)(O,{
className:`size-5`
})
}),(0,B.jsx)(`div`,{
className:`min-w-0 flex-1`,children:(0,B.jsxs)(`div`,{
className:`flex flex-wrap items-center gap-2`,children:[(0,B.jsx)(`h2`,{
className:`text-xl font-semibold`,children:r.name
}),(0,B.jsx)(Z,{
variant:`outline`,children:e===`premium`?`Claude · Premium`:`Gemini · Free`
})]
})
})]
}),(0,B.jsx)(`div`,{
className:`mt-4 rounded-md border p-3 text-sm leading-6 ${
g?`border-[#c8cfb7] bg-[#eef1e7] text-[#243617]`:`border-[#ead9ae] bg-[#fff9e9] text-[#6f5620]`
}`,children:g?`Drag and rotate items, or ask AI.`:`Free plan: describe the change and Gemini will update the layout.`
}),(0,B.jsxs)(`div`,{
onPointerDown:g?e=>{
e.target===e.currentTarget&&(e.currentTarget.setPointerCapture(e.pointerId),v(e))
}:void 0,onPointerMove:g?e=>{
e.currentTarget.hasPointerCapture(e.pointerId)&&v(e)
}:void 0,className:`relative mt-5 aspect-[4/3] overflow-hidden rounded-md border-2 border-[#756f65] bg-[#f7f0e5] ${
g?`touch-none`:`select-none`
}`,children:[(0,B.jsx)(js,{

}),s.map(e=>{
let n=e.rotation%180!=0,r=n=>{
let r=n.currentTarget.parentElement;
if(!g||!r||e.mobility===`Fixed`)return;
let i=r.getBoundingClientRect(),a=Math.max(0,Math.min(t.widthCm,(n.clientX-i.left)/i.width*t.widthCm)),o=Math.max(0,Math.min(t.depthCm,(n.clientY-i.top)/i.height*t.depthCm));
c(t=>t.map(t=>t.id===e.id?{
...t,xCm:a,yCm:o
}:t)),p(`Unsaved manual change`)
};
return(0,B.jsx)(`button`,{
type:`button`,disabled:!g,onPointerDown:g?t=>{
t.stopPropagation(),d(e.id),e.mobility!==`Fixed`&&(t.currentTarget.setPointerCapture(t.pointerId),r(t))
}:void 0,onPointerMove:g?e=>{
e.currentTarget.hasPointerCapture(e.pointerId)&&r(e)
}:void 0,className:`absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-sm px-1 text-[9px] font-semibold ${
g&&l===e.id?`cursor-grabbing bg-[#243617] text-white ring-2 ring-[#d5bd7b]`:e.mobility===`Fixed`?`bg-[#c9d0c4] text-zinc-700`:`bg-[#536b35] text-white`
}`,style:{
left:`${
e.xCm/t.widthCm*100
}%`,top:`${
e.yCm/t.depthCm*100
}%`,width:`${
Math.max(7,(n?e.depthCm:e.widthCm)/t.widthCm*100)
}%`,height:`${
Math.max(7,(n?e.widthCm:e.depthCm)/t.depthCm*100)
}%`
},children:e.name
},e.id)
})]
}),g&&(0,B.jsxs)(`div`,{
className:`mt-3`,children:[(0,B.jsxs)(`p`,{
className:`text-sm text-zinc-500`,children:[`Selected: `,(0,B.jsx)(`span`,{
className:`font-semibold text-zinc-800`,children:_?.name??`Choose an item`
}),_?.mobility===`Fixed`?` · Fixed items cannot move`:` · hold and drag it to move`]
}),(0,B.jsxs)(`div`,{
className:`mt-3 grid grid-cols-2 gap-2`,children:[(0,B.jsx)(Q,{
variant:`outline`,disabled:!_||_.mobility===`Fixed`,onClick:()=>c(e=>e.map(e=>e.id===l?{
...e,rotation:(e.rotation+90)%360
}:e)),children:`Rotate 90°`
}),(0,B.jsx)(Q,{
onClick:y,className:`bg-[#243617] hover:bg-[#344c22]`,children:`Save manual changes`
})]
})]
}),(0,B.jsx)(`div`,{
className:`mt-5 flex flex-wrap gap-2`,children:[`Keep the sofa fixed and improve the walkway.`,`Move the desk nearer the window.`,`Create more open floor space.`].map(e=>(0,B.jsx)(`button`,{
onClick:()=>o(e),className:`rounded-full border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-600`,children:e
},e))
}),(0,B.jsxs)(`label`,{
className:`mt-4 block rounded-lg border border-zinc-200 bg-zinc-50 p-4`,children:[(0,B.jsx)(`span`,{
className:`text-sm font-medium text-zinc-600`,children:`Ask AI to adjust this plan`
}),(0,B.jsx)(`textarea`,{
value:a,onChange:e=>o(e.target.value),className:`mt-2 min-h-24 w-full resize-none bg-transparent text-base leading-7 outline-none`
})]
}),(0,B.jsxs)(Q,{
disabled:m||!a.trim(),onClick:()=>void b(),className:`mt-4 w-full bg-[#243617] hover:bg-[#344c22]`,children:[(0,B.jsx)(P,{
className:`size-4`
}),m?`Adjusting…`:`Adjust with AI`]
}),f&&(0,B.jsx)(`p`,{
className:`mt-3 rounded-md p-3 text-sm ${
f.includes(`saved`)||f.includes(`applied`)?`bg-[#eef1e7] text-[#243617]`:`bg-[#fff7f3] text-[#7d3f2f]`
}`,children:f
})]
})
}):(0,B.jsx)($,{
eyebrow:`Adjust Plan`,title:`Choose a layout first.`,children:(0,B.jsx)(`p`,{
className:`rounded-lg border border-zinc-200 bg-white p-5 text-sm text-zinc-600`,children:`Go back to Choose Layout and select one of the generated plans.`
})
})
}function Ds({
selectedGoals:e,constraintNote:t,layout:n,planMode:r,room:i,layoutResult:a
}){
let[o,s]=(0,u.useState)(!1),[c,l]=(0,u.useState)(!1),d=a?.decisions.join(` `)||`Choose and adjust a generated layout to complete this plan.`;
return(0,B.jsx)($,{
eyebrow:`Final Plan`,title:n,children:(0,B.jsxs)(`div`,{
className:`space-y-5`,children:[(0,B.jsxs)(`section`,{
className:`rounded-lg border border-zinc-200 bg-white p-5`,children:[(0,B.jsxs)(`div`,{
className:`flex items-center justify-between gap-3`,children:[(0,B.jsxs)(`div`,{
children:[(0,B.jsx)(`p`,{
className:`font-semibold`,children:`Dimensioned 2D floor plan`
}),(0,B.jsxs)(`p`,{
className:`mt-1 text-sm text-zinc-500`,children:[`Room · `,(i.widthCm/100).toFixed(2),` × `,(i.depthCm/100).toFixed(2),` m`]
})]
}),(0,B.jsx)(Z,{
variant:`outline`,children:r===`premium`?`Premium`:`Free`
})]
}),(0,B.jsx)(`div`,{
className:`mt-4 aspect-[16/10] rounded-md bg-[#e8e0d2] p-5`,children:a?(0,B.jsx)(Ms,{
room:i,placements:a.placements
}):(0,B.jsx)(`p`,{
className:`flex h-full items-center justify-center text-center text-sm text-zinc-500`,children:`No chosen layout yet.`
})
}),(0,B.jsx)(`div`,{
className:`mt-4 grid grid-cols-2 gap-2 text-sm text-zinc-700`,children:a?.placements.map(e=>(0,B.jsxs)(`span`,{
className:`rounded-md bg-zinc-50 px-3 py-2`,children:[e.name,` · `,e.widthCm,` × `,e.depthCm,` cm`]
},e.id))
})]
}),(0,B.jsxs)(`section`,{
className:`rounded-lg border border-zinc-200 bg-white p-5`,children:[(0,B.jsx)(`h2`,{
className:`text-xl font-semibold`,children:`Layout details`
}),(0,B.jsx)(`div`,{
className:`mt-4 space-y-3`,children:[[`Goals addressed`,e.join(`, `)],[`Constraints respected`,t],[`Plan decisions`,d],[`Key clearances`,a?`Main walkway ${
a.clearanceCm
} cm · Door access clear · No overlaps`:`Not checked yet`],[`Warnings`,a?.warnings?.length?a.warnings.join(` `):`No spacing warnings detected`]].map(([e,t])=>(0,B.jsxs)(`div`,{
className:`rounded-md bg-[#f3f1e8] p-4`,children:[(0,B.jsx)(`p`,{
className:`text-sm font-semibold text-[#536b35]`,children:e
}),(0,B.jsx)(`p`,{
className:`mt-1 text-sm leading-6 text-zinc-700`,children:t
})]
},e))
}),(0,B.jsxs)(`div`,{
className:`mt-5 grid gap-3 sm:grid-cols-2`,children:[(0,B.jsxs)(Q,{
onClick:()=>s(!0),className:`bg-[#243617] hover:bg-[#344c22]`,children:[(0,B.jsx)(x,{
className:`size-4`
}),o?`Layout confirmed`:`Confirm this layout`]
}),(0,B.jsxs)(Q,{
variant:`outline`,disabled:!a,onClick:()=>{
if(!a)return;
let o=e=>e.replace(/&/g,`&amp;
`).replace(/</g,`&lt;
`).replace(/>/g,`&gt;
`).replace(/\"/g,`&quot;
`).replace(/'/g,`&apos;
`),s=(e,t=92)=>{
let n=e.trim().split(/\s+/),r=[],i=``;
for(let e of n)i&&`${
i
} ${
e
}`.length>t?(r.push(i),i=e):i=i?`${
i
} ${
e
}`:e;
return i&&r.push(i),r.length?r:[`—`]
},c=(e,t,n,r)=>{
let i=s(t||`—`);
return{
height:34+i.length*24,markup:`<text x="${
n
}" y="${
r
}" class="detail-label">${
o(e)
}</text>${
i.map((e,t)=>`<text x="${
n
}" y="${
r+27+t*24
}" class="detail-text">${
o(e)
}</text>`).join(``)
}`
}
},u=1200,f=Math.min(900/i.widthCm,570/i.depthCm),p=i.widthCm*f,m=i.depthCm*f,h=(u-p)/2,g=[[`Goals addressed`,e.join(`, `)],[`Constraints respected`,t],[`Plan decisions`,d],[`Key clearances`,`Main walkway ${
a.clearanceCm
} cm · Door access clear · No overlaps`],[`Warnings`,a.warnings?.length?a.warnings.join(` `):`No spacing warnings detected`]],_=180+m+120,v=g.map(([e,t])=>{
let n=c(e,t,100,_);
return _+=n.height+20,n.markup
}).join(``),y=_+90,b=i.openings.map(e=>{
let t=e.wall===`north`||e.wall===`south`,n=e.offsetCm*f,r=e.widthCm*f;
return`<rect x="${
e.wall===`west`?h-5:e.wall===`east`?h+p-5:h+n
}" y="${
e.wall===`north`?175:e.wall===`south`?180+m-5:180+n
}" width="${
t?r:10
}" height="${
t?10:r
}" rx="5" fill="#d5bd7b"><title>${
o(e.type)
}</title></rect>`
}).join(``),x=a.placements.map(e=>{
let t=e.rotation%180!=0,n=(t?e.depthCm:e.widthCm)*f,r=(t?e.widthCm:e.depthCm)*f,i=h+e.xCm*f-n/2,a=180+e.yCm*f-r/2;
return`${
e.name
}${
e.widthCm
}${
e.depthCm
}`,`<g><rect x="${
i
}" y="${
a
}" width="${
n
}" height="${
r
}" rx="8" fill="${
e.mobility===`Fixed`?`#c9d0c4`:`#536b35`
}" stroke="#243617" stroke-width="2"/><text x="${
i+n/2
}" y="${
a+r/2
}" class="item-label" fill="${
e.mobility===`Fixed`?`#26311f`:`#ffffff`
}">${
o(e.name)
}</text><text x="${
i+n/2
}" y="${
a+r/2+18
}" class="item-size" fill="${
e.mobility===`Fixed`?`#4b5545`:`#f7f0e5`
}">${
e.widthCm
} × ${
e.depthCm
} cm</text></g>`
}).join(``),ee=`<svg xmlns="http://www.w3.org/2000/svg" width="${
u
}" height="${
y
}" viewBox="0 0 ${
u
} ${
y
}">
      <style>.title{
font:700 34px Arial,sans-serif;
fill:#243617
}.subtitle{
font:16px Arial,sans-serif;
fill:#6b6b62
}.orientation{
font:700 13px Arial,sans-serif;
letter-spacing:2px;
fill:#536b35
}.dimension{
font:600 15px Arial,sans-serif;
fill:#756f65
}.item-label{
font:700 13px Arial,sans-serif;
text-anchor:middle
}.item-size{
font:11px Arial,sans-serif;
text-anchor:middle
}.detail-label{
font:700 16px Arial,sans-serif;
fill:#536b35
}.detail-text{
font:16px Arial,sans-serif;
fill:#30332e
}</style>
      <rect width="100%" height="100%" fill="#fbfaf5"/>
      <text x="100" y="66" class="title">${
o(n)
}</text>
      <text x="100" y="98" class="subtitle">Spacify ${
r===`premium`?`Premium`:`Free`
} · Exported ${
o(new Date().toLocaleDateString())
}</text>
      <text x="${
u/2
}" y="150" class="orientation" text-anchor="middle">FRONT</text>
      <text x="${
u/2
}" y="${
180+m+44
}" class="orientation" text-anchor="middle">BACK</text>
      <text x="${
h-35
}" y="${
180+m/2
}" class="orientation" text-anchor="middle" transform="rotate(-90 ${
h-35
} ${
180+m/2
})">LEFT</text>
      <text x="${
h+p+35
}" y="${
180+m/2
}" class="orientation" text-anchor="middle" transform="rotate(90 ${
h+p+35
} ${
180+m/2
})">RIGHT</text>
      <rect x="${
h
}" y="180" width="${
p
}" height="${
m
}" rx="8" fill="#f7f0e5" stroke="#756f65" stroke-width="5"/>
      ${
b
}${
x
}
      <text x="${
u/2
}" y="${
180+m+75
}" class="dimension" text-anchor="middle">Room ${
(i.widthCm/100).toFixed(2)
} m × ${
(i.depthCm/100).toFixed(2)
} m · Furniture shown to scale</text>
      ${
v
}
      <text x="100" y="${
y-40
}" class="subtitle">Generated by Spacify · Confirm measurements before moving furniture.</text>
    </svg>`,S=new Blob([ee],{
type:`image/svg+xml;
charset=utf-8`
}),C=URL.createObjectURL(S),w=document.createElement(`a`);
w.href=C,w.download=`${
n.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``)||`spacify-layout`
}.svg`,document.body.appendChild(w),w.click(),w.remove(),URL.revokeObjectURL(C),l(!0)
},children:[(0,B.jsx)(T,{
className:`size-4`
}),c?`Layout exported`:`Export layout`]
})]
})]
})]
})
})
}function Os(){
let[e,t]=(0,u.useState)(4),[n,r]=(0,u.useState)(!1);
return(0,B.jsxs)($,{
eyebrow:`Give Feedback`,title:`Did this plan help you make a decision?`,children:[(0,B.jsxs)(`section`,{
className:`rounded-lg border border-zinc-200 bg-white p-5`,children:[(0,B.jsx)(`p`,{
className:`font-semibold`,children:`Rate the final recommendation`
}),(0,B.jsx)(`div`,{
className:`mt-4 grid grid-cols-5 gap-2`,"aria-label":`Plan rating`,children:[1,2,3,4,5].map(n=>(0,B.jsx)(`button`,{
onClick:()=>{
t(n),r(!1)
},className:`rounded-md border text-lg font-semibold ${
e===n?`border-[#243617] bg-[#243617] text-white`:`border-zinc-200 bg-white text-zinc-600`
}`,children:n
},n))
}),(0,B.jsx)(`p`,{
className:`mt-6 font-semibold`,children:`What could Spacify improve?`
}),(0,B.jsx)(`div`,{
className:`mt-3 flex flex-wrap gap-2`,children:[`KAR suggestions`,`Layout variety`,`Explanations`,`Ease of adjusting`].map(e=>(0,B.jsx)(`button`,{
className:`rounded-full border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-700`,children:e
},e))
}),(0,B.jsxs)(`label`,{
className:`mt-5 block rounded-lg border border-zinc-200 bg-zinc-50 p-4`,children:[(0,B.jsx)(`span`,{
className:`text-sm font-medium text-zinc-600`,children:`Optional comments`
}),(0,B.jsx)(`textarea`,{
className:`mt-2 min-h-28 w-full resize-none bg-transparent text-base leading-7 outline-none`,placeholder:`Tell us what was useful or confusing…`
})]
}),(0,B.jsxs)(Q,{
onClick:()=>r(!0),className:`mt-4 w-full bg-[#243617] hover:bg-[#344c22]`,children:[(0,B.jsx)(D,{
className:`size-4`
}),n?`Feedback submitted`:`Submit feedback`]
})]
}),(0,B.jsx)(`p`,{
className:`mt-4 text-center text-sm leading-6 text-zinc-500`,children:`Feedback improves future recommendations. It does not change your confirmed plan.`
})]
})
}function ks({
context:e
}){
let t=e.planMode===`premium`?`Claude`:`Gemini`,[n,r]=(0,u.useState)(!1),[i,a]=(0,u.useState)(``),[o,s]=(0,u.useState)(!1),[c,l]=(0,u.useState)([{
role:`assistant`,text:`Hi — ask me anything about your room plan or this step.`
}]);
async function d(){
let t=i.trim();
if(!t||o)return;
let n=[...c,{
role:`user`,text:t
}];
l(n),a(``),s(!0);
try{
let t=await(await fetch(`/api/chat`,{
method:`POST`,headers:{
"Content-Type":`application/json`
},body:JSON.stringify({
messages:n.slice(-8),context:e
})
})).json();
l(e=>[...e,{
role:`assistant`,text:t.reply??t.error??`I couldn't answer that just now.`
}])
}catch{
l(e=>[...e,{
role:`assistant`,text:`I couldn't connect just now. Please try again.`
}])
}finally{
s(!1)
}
}return(0,B.jsxs)(`div`,{
className:`fixed bottom-20 left-1/2 z-50 w-full max-w-[430px] -translate-x-1/2 px-4 pointer-events-none`,children:[n&&(0,B.jsxs)(`section`,{
className:`pointer-events-auto ml-auto mb-3 flex h-[430px] w-full max-w-[370px] flex-col overflow-hidden rounded-xl border border-[#cbd9d0] bg-white shadow-2xl`,children:[(0,B.jsxs)(`header`,{
className:`flex items-center justify-between bg-[#243617] px-4 py-3 text-white`,children:[(0,B.jsxs)(`div`,{
className:`flex items-center gap-2`,children:[(0,B.jsx)(E,{
className:`size-5`
}),(0,B.jsxs)(`div`,{
children:[(0,B.jsx)(`p`,{
className:`font-semibold`,children:`Ask Spacify`
}),(0,B.jsxs)(`p`,{
className:`text-xs text-white/65`,children:[t,` · `,e.planMode===`premium`?`Premium`:`Free`,` assistant`]
})]
})]
}),(0,B.jsx)(`button`,{
onClick:()=>r(!1),"aria-label":`Close chat`,children:(0,B.jsx)(de,{
className:`size-5`
})
})]
}),(0,B.jsxs)(`div`,{
className:`flex-1 space-y-3 overflow-y-auto bg-[#f6f3eb] p-4`,children:[c.map((e,t)=>(0,B.jsx)(`div`,{
className:`max-w-[86%] rounded-lg px-3 py-2 text-sm leading-6 ${
e.role===`user`?`ml-auto bg-[#243617] text-white`:`bg-white text-zinc-700 shadow-sm`
}`,children:e.text
},t)),o&&(0,B.jsx)(`div`,{
className:`w-fit rounded-lg bg-white px-3 py-2 text-sm text-zinc-500 shadow-sm`,children:`Thinking…`
})]
}),(0,B.jsxs)(`div`,{
className:`flex gap-2 border-t border-zinc-200 p-3`,children:[(0,B.jsx)(`input`,{
value:i,onChange:e=>a(e.target.value),onKeyDown:e=>{
e.key===`Enter`&&d()
},className:`min-w-0 flex-1 rounded-md border border-zinc-200 px-3 py-2 text-sm outline-none focus:border-[#536b35]`,placeholder:`Ask a question…`
}),(0,B.jsx)(Q,{
size:`sm`,onClick:()=>void d(),disabled:!i.trim()||o,className:`bg-[#243617] hover:bg-[#344c22]`,"aria-label":`Send`,children:(0,B.jsx)(se,{
className:`size-4`
})
})]
})]
}),(0,B.jsx)(`button`,{
onClick:()=>r(e=>!e),className:`pointer-events-auto ml-auto flex size-14 items-center justify-center rounded-full bg-[#243617] text-white shadow-[0_10px_30px_rgba(23,61,50,0.32)]`,"aria-label":`Open Spacify help`,children:(0,B.jsx)(E,{
className:`size-6`
})
})]
})
}function As(){
return(0,B.jsx)($,{
eyebrow:`My Plans`,title:`Your previous room plans.`,children:(0,B.jsx)(`div`,{
className:`grid gap-4`,children:[{
name:`Living Room Flow`,room:`Living Room`,size:`4.80 × 3.60 m`,date:`Confirmed today`,variant:`Best Overall`
},{
name:`Study-Focused Bedroom`,room:`Bedroom`,size:`3.60 × 3.20 m`,date:`Confirmed 2 days ago`,variant:`Maximum Space`
},{
name:`Dining Room Reset`,room:`Dining Room`,size:`4.10 × 3.40 m`,date:`Confirmed last week`,variant:`Minimal Changes`
}].map((e,t)=>(0,B.jsxs)(`button`,{
className:`rounded-lg border border-zinc-200 bg-white p-5 text-left transition hover:border-[#536b35] hover:bg-[#f3f1e8]`,children:[(0,B.jsxs)(`div`,{
className:`flex items-start justify-between gap-3`,children:[(0,B.jsxs)(`div`,{
children:[(0,B.jsx)(Z,{
variant:`outline`,children:e.room
}),(0,B.jsx)(`h2`,{
className:`mt-3 text-xl font-semibold`,children:e.name
}),(0,B.jsxs)(`p`,{
className:`mt-1 text-sm text-zinc-500`,children:[e.size,` · `,e.date]
})]
}),t===0&&(0,B.jsx)(Z,{
className:`bg-[#243617] text-white hover:bg-[#243617]`,children:`Latest`
})]
}),(0,B.jsx)(`div`,{
className:`mt-4 aspect-[16/8] rounded-md bg-[#e8e0d2] p-4`,children:(0,B.jsx)(Ns,{
variant:e.variant
})
}),(0,B.jsxs)(`div`,{
className:`mt-4 flex items-center justify-between text-sm`,children:[(0,B.jsx)(`span`,{
className:`text-zinc-500`,children:`Open plan details`
}),(0,B.jsx)(ee,{
className:`size-5 text-[#536b35]`
})]
})]
},e.name))
})
})
}function js(){
let e=`pointer-events-none absolute z-30 rounded bg-white/85 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#243617] shadow-sm`;
return(0,B.jsxs)(B.Fragment,{
children:[(0,B.jsx)(`span`,{
className:`${
e
} left-1/2 top-1 -translate-x-1/2`,children:`Front`
}),(0,B.jsx)(`span`,{
className:`${
e
} bottom-1 left-1/2 -translate-x-1/2`,children:`Back`
}),(0,B.jsx)(`span`,{
className:`${
e
} left-1 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180`,children:`Left`
}),(0,B.jsx)(`span`,{
className:`${
e
} right-1 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl]`,children:`Right`
})]
})
}function Ms({
room:e,placements:t
}){
return(0,B.jsxs)(`div`,{
className:`relative h-full w-full overflow-hidden rounded-md border-2 border-[#756f65] bg-[#f7f0e5]`,children:[(0,B.jsx)(js,{

}),e.openings.map(t=>{
let n=t.wall===`north`||t.wall===`south`,r=n?t.offsetCm/e.widthCm*100:t.offsetCm/e.depthCm*100,i=n?t.widthCm/e.widthCm*100:t.widthCm/e.depthCm*100;
return(0,B.jsx)(`span`,{
className:`absolute z-10 bg-[#d5bd7b] ${
n?`h-1`:`w-1`
}`,style:n?{
left:`${
r
}%`,width:`${
i
}%`,[t.wall]:0
}:{
top:`${
r
}%`,height:`${
i
}%`,[t.wall]:0
},title:t.type
},t.id)
}),t.map(t=>{
let n=t.rotation%180!=0,r=(n?t.depthCm:t.widthCm)/e.widthCm*100,i=(n?t.widthCm:t.depthCm)/e.depthCm*100;
return(0,B.jsx)(`div`,{
className:`absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-sm px-1 text-center text-[9px] font-semibold leading-tight shadow-sm ${
t.mobility===`Fixed`?`bg-[#c9d0c4] text-zinc-700`:`bg-[#536b35] text-white`
}`,style:{
left:`${
t.xCm/e.widthCm*100
}%`,top:`${
t.yCm/e.depthCm*100
}%`,width:`${
Math.max(7,r)
}%`,height:`${
Math.max(7,i)
}%`
},children:t.name
},t.id)
})]
})
}function Ns({
variant:e=`Best Overall`
}){
let t=e===`Maximum Space`||e===`Open Hosting`,n=e===`Minimal Changes`||e===`Minimal Reset`;
return(0,B.jsxs)(`div`,{
className:`relative h-full w-full overflow-hidden rounded-md border-2 border-[#756f65] bg-[#f7f0e5]`,children:[(0,B.jsx)(js,{

}),(0,B.jsx)(`div`,{
className:`absolute left-5 top-5 h-10 w-24 rounded-sm bg-[#d7c4a4]`
}),(0,B.jsx)(`div`,{
className:`absolute bg-[#536b35] ${
t?`bottom-10 left-12 h-12 w-32`:`bottom-8 left-8 h-14 w-40`
} rounded-sm`
}),(0,B.jsx)(`div`,{
className:`absolute rounded-full bg-[#b08b6e] ${
n?`right-14 top-24 size-16`:`left-40 top-24 size-20`
}`
}),(0,B.jsx)(`div`,{
className:`absolute right-6 top-8 h-24 w-10 rounded-sm bg-[#c9d0c4]`
}),!n&&(0,B.jsx)(`div`,{
className:`absolute bottom-10 right-12 h-16 w-14 rounded-sm bg-[#e7e1d7]`
}),(0,B.jsx)(`div`,{
className:`absolute inset-x-8 top-1/2 border-t border-dashed border-[#756f65]/50`
})]
})
}export{
ls as default
};

