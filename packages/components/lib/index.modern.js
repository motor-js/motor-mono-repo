import{useEffect as e,useRef as r,useState as o,useContext as t}from"react";import"react-window-infinite-loader";import"react-window";import i,{css as a}from"styled-components";import{transparentize as n}from"polished";import{jsx as d}from"react/jsx-runtime";import"@motor-js/theme";import{EngineContext as s}from"@motor-js/engine";function p(){return p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},p.apply(this,arguments)}let l,c,g=e=>e;const f=a(l||(l=g`
  border: ${0};
  font-size:  ${0};
  font-family: ${0};
  position: relative;
  width: ${0};
`),e=>e.theme.filter.border,e=>e.theme.filter.size[e.size].fontSize,e=>e.theme.fontFamily,({width:e})=>`${e}px`);let m;a(c||(c=g`
  background-color: ${0};
`),e=>"A"===e.selected?e.theme.colors.gray100:"");const h=i.svg(m||(m=(e=>e)`
  stroke-width: ${0};
  stroke: ${0};
  height: ${0};
  width: ${0};
  viewbox: ${0};
  stroke-linejoin: join;
  stroke-linecap: round; 
  fill: none;
  display: flex;
  fill: none;
  display: flex;
`),e=>e.strokeWidth,e=>e.strokeColor,e=>e.height,e=>e.width,e=>e.viewbox);let b,u,y,v,x,S,w,k=e=>e;i.div(b||(b=k`
  width: 100%;
  display: flex;
  align-items: center;
  &:hover {
    background-color:  ${0};
  }
`),e=>n(.92,e.theme.colors[e.colorTheme][500])),i.div(u||(u=k`
  ${0};
  shadow: ${0};
  margin-top: 10px;
  border-radius:  ${0};
`),f,e=>e.theme.shadows.input,e=>e.theme.filter.borderRadius),i.div(y||(y=k`
  ${0};
  margin-top: 10px;
`),f);const R=i.input.attrs({type:"checkbox"})(v||(v=k`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`));i.div(x||(x=k`
  display: inline-block;
  vertical-align: middle;
  width: 14px;
  height: 14px;
  margin: 0px 5px;
  background: ${0};
  border-radius: 4px;
  transition: all 150ms;
  border: 1px solid ${0};

  ${0}:focus + & {
    box-shadow: 0 0 0 3px ${0};
  }

  ${0} {
    visibility: ${0}
  }
`),e=>"S"===e.selected?e.theme.colors[e.colorTheme][500]:"white",e=>"S"===e.selected?e.theme.colors.brand[500]:e.theme.filter.border,R,e=>e.theme.colors.brand[400],h,e=>"S"===e.selected?"visible":"hidden"),i.div(S||(S=k`
  display: flex;
  align-items: center;
`)),i.span(w||(w=k`

`));var z=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;function L(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var $=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},o=0;o<10;o++)r["_"+String.fromCharCode(o)]=o;if("0123456789"!==Object.getOwnPropertyNames(r).map(function(e){return r[e]}).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach(function(e){t[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(e){return!1}}()?Object.assign:function(e,r){for(var o,t,i=L(e),a=1;a<arguments.length;a++){for(var n in o=Object(arguments[a]))T.call(o,n)&&(i[n]=o[n]);if(z){t=z(o);for(var d=0;d<t.length;d++)j.call(o,t[d])&&(i[t[d]]=o[t[d]])}}return i},W=function(e,r){var o=$({},e,r);for(var t in e){var i;e[t]&&"object"==typeof r[t]&&$(o,((i={})[t]=$(e[t],r[t]),i))}return o},B={breakpoints:[40,52,64].map(function(e){return e+"em"})},C=function(e){return"@media screen and (min-width: "+e+")"},O=function(e,r){return H(r,e,e)},H=function(e,r,o,t,i){for(r=r&&r.split?r.split("."):[r],t=0;t<r.length;t++)e=e?e[r[t]]:i;return e===i?o:e},E=function e(r){var o={},t=function(e){var t,i,a={},n=!1,d=e.theme&&e.theme.disableStyledSystemCache;for(var s in e)if(r[s]){var p=r[s],l=e[s],c=H(e.theme,p.scale,p.defaults);if("object"!=typeof l)$(a,p(l,c,e));else{if(o.breakpoints=!d&&o.breakpoints||H(e.theme,"breakpoints",B.breakpoints),Array.isArray(l)){o.media=!d&&o.media||[null].concat(o.breakpoints.map(C)),a=W(a,A(o.media,p,c,l,e));continue}null!==l&&(a=W(a,P(o.breakpoints,p,c,l,e)),n=!0)}}return n&&(t=a,i={},Object.keys(t).sort(function(e,r){return e.localeCompare(r,void 0,{numeric:!0,sensitivity:"base"})}).forEach(function(e){i[e]=t[e]}),a=i),a};t.config=r,t.propNames=Object.keys(r),t.cache=o;var i=Object.keys(r).filter(function(e){return"config"!==e});return i.length>1&&i.forEach(function(o){var i;t[o]=e(((i={})[o]=r[o],i))}),t},A=function(e,r,o,t,i){var a={};return t.slice(0,e.length).forEach(function(t,n){var d,s=e[n],p=r(t,o,i);$(a,s?((d={})[s]=$({},a[s],p),d):p)}),a},P=function(e,r,o,t,i){var a={};for(var n in t){var d=e[n],s=r(t[n],o,i);if(d){var p,l=C(d);$(a,((p={})[l]=$({},a[l],s),p))}else $(a,s)}return a},X=function(e){var r=e.properties,o=e.transform,t=void 0===o?O:o,i=e.defaultScale;r=r||[e.property];var a=function(e,o,i){var a={},n=t(e,o,i);if(null!==n)return r.forEach(function(e){a[e]=n}),a};return a.scale=e.scale,a.defaults=i,a},Y=function(e){void 0===e&&(e={});var r={};return Object.keys(e).forEach(function(o){var t=e[o];r[o]=!0!==t?"function"!=typeof t?X(t):t:X({property:o,scale:o})}),E(r)};Y({width:{property:"width",scale:"sizes",transform:function(e,r){return H(r,e,!function(e){return"number"==typeof e&&!isNaN(e)}(e)||e>1?e:100*e+"%")}},height:{property:"height",scale:"sizes"},minWidth:{property:"minWidth",scale:"sizes"},minHeight:{property:"minHeight",scale:"sizes"},maxWidth:{property:"maxWidth",scale:"sizes"},maxHeight:{property:"maxHeight",scale:"sizes"},size:{properties:["width","height"],scale:"sizes"},overflow:!0,overflowX:!0,overflowY:!0,display:!0,verticalAlign:!0});var G={color:{property:"color",scale:"colors"},backgroundColor:{property:"backgroundColor",scale:"colors"},opacity:!0};G.bg=G.backgroundColor;var I=Y(G);Y({fontFamily:{property:"fontFamily",scale:"fonts"},fontSize:{property:"fontSize",scale:"fontSizes",defaultScale:[12,14,16,20,24,32,48,64,72]},fontWeight:{property:"fontWeight",scale:"fontWeights"},lineHeight:{property:"lineHeight",scale:"lineHeights"},letterSpacing:{property:"letterSpacing",scale:"letterSpacings"},textAlign:!0,fontStyle:!0}),Y({alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:!0,flex:!0,flexGrow:!0,flexShrink:!0,flexBasis:!0,justifySelf:!0,alignSelf:!0,order:!0});var N={space:[0,4,8,16,32,64,128,256,512]};Y({gridGap:{property:"gridGap",scale:"space",defaultScale:N.space},gridColumnGap:{property:"gridColumnGap",scale:"space",defaultScale:N.space},gridRowGap:{property:"gridRowGap",scale:"space",defaultScale:N.space},gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridAutoRows:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0}),Y({border:{property:"border",scale:"borders"},borderWidth:{property:"borderWidth",scale:"borderWidths"},borderStyle:{property:"borderStyle",scale:"borderStyles"},borderColor:{property:"borderColor",scale:"colors"},borderRadius:{property:"borderRadius",scale:"radii"},borderTop:{property:"borderTop",scale:"borders"},borderTopLeftRadius:{property:"borderTopLeftRadius",scale:"radii"},borderTopRightRadius:{property:"borderTopRightRadius",scale:"radii"},borderRight:{property:"borderRight",scale:"borders"},borderBottom:{property:"borderBottom",scale:"borders"},borderBottomLeftRadius:{property:"borderBottomLeftRadius",scale:"radii"},borderBottomRightRadius:{property:"borderBottomRightRadius",scale:"radii"},borderLeft:{property:"borderLeft",scale:"borders"},borderX:{properties:["borderLeft","borderRight"],scale:"borders"},borderY:{properties:["borderTop","borderBottom"],scale:"borders"},borderTopWidth:{property:"borderTopWidth",scale:"borderWidths"},borderTopColor:{property:"borderTopColor",scale:"colors"},borderTopStyle:{property:"borderTopStyle",scale:"borderStyles"},borderBottomWidth:{property:"borderBottomWidth",scale:"borderWidths"},borderBottomColor:{property:"borderBottomColor",scale:"colors"},borderBottomStyle:{property:"borderBottomStyle",scale:"borderStyles"},borderLeftWidth:{property:"borderLeftWidth",scale:"borderWidths"},borderLeftColor:{property:"borderLeftColor",scale:"colors"},borderLeftStyle:{property:"borderLeftStyle",scale:"borderStyles"},borderRightWidth:{property:"borderRightWidth",scale:"borderWidths"},borderRightColor:{property:"borderRightColor",scale:"colors"},borderRightStyle:{property:"borderRightStyle",scale:"borderStyles"}});var F={background:!0,backgroundImage:!0,backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0};F.bgImage=F.backgroundImage,F.bgSize=F.backgroundSize,F.bgPosition=F.backgroundPosition,F.bgRepeat=F.backgroundRepeat,Y(F);var q={space:[0,4,8,16,32,64,128,256,512]};Y({position:!0,zIndex:{property:"zIndex",scale:"zIndices"},top:{property:"top",scale:"space",defaultScale:q.space},right:{property:"right",scale:"space",defaultScale:q.space},bottom:{property:"bottom",scale:"space",defaultScale:q.space},left:{property:"left",scale:"space",defaultScale:q.space}});var D={space:[0,4,8,16,32,64,128,256,512]},M=function(e){return"number"==typeof e&&!isNaN(e)},_=function(e,r){if(!M(e))return H(r,e,e);var o=e<0,t=Math.abs(e),i=H(r,t,t);return M(i)?i*(o?-1:1):o?"-"+i:i},J={};J.margin={margin:{property:"margin",scale:"space",transform:_,defaultScale:D.space},marginTop:{property:"marginTop",scale:"space",transform:_,defaultScale:D.space},marginRight:{property:"marginRight",scale:"space",transform:_,defaultScale:D.space},marginBottom:{property:"marginBottom",scale:"space",transform:_,defaultScale:D.space},marginLeft:{property:"marginLeft",scale:"space",transform:_,defaultScale:D.space},marginX:{properties:["marginLeft","marginRight"],scale:"space",transform:_,defaultScale:D.space},marginY:{properties:["marginTop","marginBottom"],scale:"space",transform:_,defaultScale:D.space}},J.margin.m=J.margin.margin,J.margin.mt=J.margin.marginTop,J.margin.mr=J.margin.marginRight,J.margin.mb=J.margin.marginBottom,J.margin.ml=J.margin.marginLeft,J.margin.mx=J.margin.marginX,J.margin.my=J.margin.marginY,J.padding={padding:{property:"padding",scale:"space",defaultScale:D.space},paddingTop:{property:"paddingTop",scale:"space",defaultScale:D.space},paddingRight:{property:"paddingRight",scale:"space",defaultScale:D.space},paddingBottom:{property:"paddingBottom",scale:"space",defaultScale:D.space},paddingLeft:{property:"paddingLeft",scale:"space",defaultScale:D.space},paddingX:{properties:["paddingLeft","paddingRight"],scale:"space",defaultScale:D.space},paddingY:{properties:["paddingTop","paddingBottom"],scale:"space",defaultScale:D.space}},J.padding.p=J.padding.padding,J.padding.pt=J.padding.paddingTop,J.padding.pr=J.padding.paddingRight,J.padding.pb=J.padding.paddingBottom,J.padding.pl=J.padding.paddingLeft,J.padding.px=J.padding.paddingX,J.padding.py=J.padding.paddingY;var K=function(){for(var e={},r=arguments.length,o=new Array(r),t=0;t<r;t++)o[t]=arguments[t];o.forEach(function(r){r&&r.config&&$(e,r.config)});var i=E(e);return i}(Y(J.margin),Y(J.padding));function Q(){return Q=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},Q.apply(this,arguments)}Y({boxShadow:{property:"boxShadow",scale:"shadows"},textShadow:{property:"textShadow",scale:"shadows"}});var U=function(e,r,o,t,i){for(r=r&&r.split?r.split("."):[r],t=0;t<r.length;t++)e=e?e[r[t]]:i;return e===i?o:e},V=[40,52,64].map(function(e){return e+"em"}),Z={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},ee={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},re={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},oe={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},te=function(e,r){if("number"!=typeof r||r>=0)return U(e,r,r);var o=Math.abs(r),t=U(e,o,o);return"string"==typeof t?"-"+t:-1*t},ie=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce(function(e,r){var o;return Q({},e,((o={})[r]=te,o))},{}),ae=function e(r){return function(o){void 0===o&&(o={});var t=Q({},Z,{},o.theme||o),i={},a=function(e){return function(r){var o={},t=U(r,"breakpoints",V),i=[null].concat(t.map(function(e){return"@media screen and (min-width: "+e+")"}));for(var a in e){var n="function"==typeof e[a]?e[a](r):e[a];if(null!=n)if(Array.isArray(n))for(var d=0;d<n.slice(0,i.length).length;d++){var s=i[d];s?(o[s]=o[s]||{},null!=n[d]&&(o[s][a]=n[d])):o[a]=n[d]}else o[a]=n}return o}}("function"==typeof r?r(t):r)(t);for(var n in a){var d=a[n],s="function"==typeof d?d(t):d;if("variant"!==n)if(s&&"object"==typeof s)i[n]=e(s)(t);else{var p=U(ee,n,n),l=U(oe,p),c=U(t,l,U(t,p,{})),g=U(ie,p,U)(c,s,s);if(re[p])for(var f=re[p],m=0;m<f.length;m++)i[f[m]]=g;else i[p]=g}else i=Q({},i,{},e(U(t,s))(t))}return i}},ne=function(e){var r,o,t=e.scale,i=e.prop,a=void 0===i?"variant":i,n=e.variants,d=void 0===n?{}:n,s=e.key;o=Object.keys(d).length?function(e,r,o){return ae(H(r,e,null))(o.theme)}:function(e,r){return H(r,e,null)},o.scale=t||s,o.defaults=d;var p=((r={})[a]=o,r);return E(p)};ne({key:"buttons"}),ne({key:"textStyles",prop:"textStyle"}),ne({key:"colorStyles",prop:"colors"});let de,se,pe,le,ce,ge,fe,me,he,be,ue,ye,ve,xe=e=>e;i.div(de||(de=xe`
  ${0};
  ${0};
  font-size: ${0};
`),K,I,e=>e.theme.filter.size[e.size].fontSize),i.div(se||(se=xe`
  padding: 2px 6px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`)),i.div(pe||(pe=xe`
  display: flex;
  flexDirection: row;
  border-radius: ${0};
  border: ${0};
  &:hover {
    border:  ${0};
  }

  &:focus-within {
    border: 1px solid ${0};
    outline: none;
  }

`),e=>e.theme.filter.borderRadius,e=>e.theme.filter.border,e=>e.theme.filter.borderHovered,e=>e.theme.colors[e.colorTheme][500]),i.div(le||(le=xe`
display: grid;
flex: 1 1 0%;
flex-wrap: wrap;

`)),i.input(ce||(ce=xe`
  border: none;
  border-radius: ${0};
  font-size: ${0};
  margin: 2px;
  outline: 0px !important;
  width: 100%;
 
`),e=>e.theme.filter.borderRadius,e=>e.theme.filter.size[e.size].fontSize),i.div(ge||(ge=xe` 

`)),i.span(fe||(fe=xe`
  display: flex;
  align-items: center;
  padding-left: 8px;
  margin: 2px;
  font-size: ${0};
  border-radius:  ${0};
  background-color:  ${0};
  color: ${0};
  white-space: nowrap;
`),e=>e.theme.filter.size[e.size].fontSize,e=>e.theme.filter.borderRadius,e=>e.theme.colors.gray[200],e=>e.theme.colors.black),i.span(me||(me=xe`
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 8px;
  margin: 2px;
  font-size: ${0};
  color: ${0};
  white-space: nowrap;
`),e=>e.theme.filter.size[e.size].fontSize,e=>e.theme.colors.black),i.button(he||(he=xe`
  display: flex;
  align-items: center;
  height: 100%;
  border: none;
  background-color: unset;
  border: none;
  cursor: pointer;
  color: ${0};
  border-radius: 0px 5px 5px 0px;
  padding: 0px 4px 0px 2px;

  &:hover {
    background-color: ${0};
  }
`),e=>e.theme.colors.black,e=>n(.3,e.theme.colors[e.colorTheme][500])),i.span(be||(be=xe`
  padding-right: 5px;
`)),i.div(ue||(ue=xe`
  display: flex;
  align-items: center;
  margin-right: 4px
`)),i.svg(ye||(ye=(e=>e)`
  fill: none;
  stroke: black;
  stroke-width: 2px;
  display: flex;
  height: 18px;
  width: 18px;
  stroke-linecap:round; 
  stroke-linejoin: join;
`)),i.svg(ve||(ve=(e=>e)`
  fill: none;
  stroke: black;
  stroke-width: 1px;
  display: flex;
  height: 18px;
  width: 18px;
  stroke-linecap:round; 
  stroke-linejoin: join;
`));const Se=["engine","engineError","listData","motorListProps","singleSelection","dropHeight","pageHeight","selectionLabelLimit","placeholder","onSelectionChange","defaultSelections","colorTheme","size"];function we(t){let{listData:i,motorListProps:a,dropHeight:n="200px",pageHeight:s,selectionLabelLimit:p,placeholder:l,size:c}=t;!function(e,r){if(null==e)return{};var o,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r.indexOf(o=a[t])>=0||(i[o]=e[o])}(t,Se),console.log("size",c);const g=r(),[f,m]=o(!1),[h,b]=o(null),[u,y]=o(null),[v,x]=o(s),[S,w]=o(l);e(()=>{i&&x(i.length)},[i]);const{selections:k,changePage:R}=a;return e(()=>{k&&b(k.slice(0,p)),k&&y(k.length)},[k]),e(()=>{w(u&&0!==u?"":l)},[u]),((r,o)=>{const t=e=>{r.current&&!r.current.contains(e.target)&&f&&(m(!1),R({qTop:0,qHeight:s}))};e(()=>(document.addEventListener("click",t),()=>{document.removeEventListener("click",t)}))})(g),d("div",{children:"test"})}function ke(e){let r=p({},e);const{engine:o,engineError:i}=t(s);return d(we,p({engine:o,engineError:i},r))}ke.propTypes={},ke.defaultProps={};export{ke as Filter};
//# sourceMappingURL=index.modern.js.map
