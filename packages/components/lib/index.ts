!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("react"),require("react-window-infinite-loader"),require("react-window"),require("styled-components"),require("polished"),require("react/jsx-runtime"),require("@motor-js/theme"),require("@motor-js/engine")):"function"==typeof define&&define.amd?define(["exports","react","react-window-infinite-loader","react-window","styled-components","polished","react/jsx-runtime","@motor-js/theme","@motor-js/engine"],r):r((e||self).components={},e.react,0,0,e.styledComponents,e.polished,e.jsx,0,e.engine)}(this,function(e,r,t,n,o,i,a,d,s){function p(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l,c,f=p(o);function u(){return u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},u.apply(this,arguments)}function g(e,r){return r||(r=e.slice(0)),e.raw=r,e}var m,h=o.css(l||(l=g(["\n  border: ",";\n  font-size:  ",";\n  font-family: ",";\n  position: relative;\n  width: ",";\n"])),function(e){return e.theme.filter.border},function(e){return e.theme.filter.size[e.size].fontSize},function(e){return e.theme.fontFamily},function(e){return e.width+"px"});o.css(c||(c=g(["\n  background-color: ",";\n"])),function(e){return"A"===e.selected?e.theme.colors.gray100:""});var b,y,v,x,S,w,k,R=f.default.svg(m||(m=g(["\n  stroke-width: ",";\n  stroke: ",";\n  height: ",";\n  width: ",";\n  viewbox: ",";\n  stroke-linejoin: join;\n  stroke-linecap: round; \n  fill: none;\n  display: flex;\n  fill: none;\n  display: flex;\n"])),function(e){return e.strokeWidth},function(e){return e.strokeColor},function(e){return e.height},function(e){return e.width},function(e){return e.viewbox});f.default.div(b||(b=g(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  &:hover {\n    background-color:  ",";\n  }\n"])),function(e){return i.transparentize(.92,e.theme.colors[e.colorTheme][500])}),f.default.div(y||(y=g(["\n  ",";\n  shadow: ",";\n  margin-top: 10px;\n  border-radius:  ",";\n"])),h,function(e){return e.theme.shadows.input},function(e){return e.theme.filter.borderRadius}),f.default.div(v||(v=g(["\n  ",";\n  margin-top: 10px;\n"])),h);var z=f.default.input.attrs({type:"checkbox"})(x||(x=g(["\n  // Hide checkbox visually but remain accessible to screen readers.\n  // Source: https://polished.js.org/docs/#hidevisually\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"])));f.default.div(S||(S=g(["\n  display: inline-block;\n  vertical-align: middle;\n  width: 14px;\n  height: 14px;\n  margin: 0px 5px;\n  background: ",";\n  border-radius: 4px;\n  transition: all 150ms;\n  border: 1px solid ",";\n\n  ",":focus + & {\n    box-shadow: 0 0 0 3px ",";\n  }\n\n  "," {\n    visibility: ","\n  }\n"])),function(e){return"S"===e.selected?e.theme.colors[e.colorTheme][500]:"white"},function(e){return"S"===e.selected?e.theme.colors.brand[500]:e.theme.filter.border},z,function(e){return e.theme.colors.brand[400]},R,function(e){return"S"===e.selected?"visible":"hidden"}),f.default.div(w||(w=g(["\n  display: flex;\n  align-items: center;\n"]))),f.default.span(k||(k=g(["\n\n"])));var j=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;function C(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var W=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map(function(e){return r[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,r){for(var t,n,o=C(e),i=1;i<arguments.length;i++){for(var a in t=Object(arguments[i]))T.call(t,a)&&(o[a]=t[a]);if(j){n=j(t);for(var d=0;d<n.length;d++)L.call(t,n[d])&&(o[n[d]]=t[n[d]])}}return o},B=function(e,r){var t=W({},e,r);for(var n in e){var o;e[n]&&"object"==typeof r[n]&&W(t,((o={})[n]=W(e[n],r[n]),o))}return t},O={breakpoints:[40,52,64].map(function(e){return e+"em"})},E=function(e){return"@media screen and (min-width: "+e+")"},H=function(e,r){return A(r,e,e)},A=function(e,r,t,n,o){for(r=r&&r.split?r.split("."):[r],n=0;n<r.length;n++)e=e?e[r[n]]:o;return e===o?t:e},P=function e(r){var t={},n=function(e){var n,o,i={},a=!1,d=e.theme&&e.theme.disableStyledSystemCache;for(var s in e)if(r[s]){var p=r[s],l=e[s],c=A(e.theme,p.scale,p.defaults);if("object"!=typeof l)W(i,p(l,c,e));else{if(t.breakpoints=!d&&t.breakpoints||A(e.theme,"breakpoints",O.breakpoints),Array.isArray(l)){t.media=!d&&t.media||[null].concat(t.breakpoints.map(E)),i=B(i,X(t.media,p,c,l,e));continue}null!==l&&(i=B(i,Y(t.breakpoints,p,c,l,e)),a=!0)}}return a&&(n=i,o={},Object.keys(n).sort(function(e,r){return e.localeCompare(r,void 0,{numeric:!0,sensitivity:"base"})}).forEach(function(e){o[e]=n[e]}),i=o),i};n.config=r,n.propNames=Object.keys(r),n.cache=t;var o=Object.keys(r).filter(function(e){return"config"!==e});return o.length>1&&o.forEach(function(t){var o;n[t]=e(((o={})[t]=r[t],o))}),n},X=function(e,r,t,n,o){var i={};return n.slice(0,e.length).forEach(function(n,a){var d,s=e[a],p=r(n,t,o);W(i,s?((d={})[s]=W({},i[s],p),d):p)}),i},Y=function(e,r,t,n,o){var i={};for(var a in n){var d=e[a],s=r(n[a],t,o);if(d){var p,l=E(d);W(i,((p={})[l]=W({},i[l],s),p))}else W(i,s)}return i},q=function(e){var r=e.properties,t=e.transform,n=void 0===t?H:t,o=e.defaultScale;r=r||[e.property];var i=function(e,t,o){var i={},a=n(e,t,o);if(null!==a)return r.forEach(function(e){i[e]=a}),i};return i.scale=e.scale,i.defaults=o,i},G=function(e){void 0===e&&(e={});var r={};return Object.keys(e).forEach(function(t){var n=e[t];r[t]=!0!==n?"function"!=typeof n?q(n):n:q({property:t,scale:t})}),P(r)};G({width:{property:"width",scale:"sizes",transform:function(e,r){return A(r,e,!function(e){return"number"==typeof e&&!isNaN(e)}(e)||e>1?e:100*e+"%")}},height:{property:"height",scale:"sizes"},minWidth:{property:"minWidth",scale:"sizes"},minHeight:{property:"minHeight",scale:"sizes"},maxWidth:{property:"maxWidth",scale:"sizes"},maxHeight:{property:"maxHeight",scale:"sizes"},size:{properties:["width","height"],scale:"sizes"},overflow:!0,overflowX:!0,overflowY:!0,display:!0,verticalAlign:!0});var I={color:{property:"color",scale:"colors"},backgroundColor:{property:"backgroundColor",scale:"colors"},opacity:!0};I.bg=I.backgroundColor;var N=G(I);G({fontFamily:{property:"fontFamily",scale:"fonts"},fontSize:{property:"fontSize",scale:"fontSizes",defaultScale:[12,14,16,20,24,32,48,64,72]},fontWeight:{property:"fontWeight",scale:"fontWeights"},lineHeight:{property:"lineHeight",scale:"lineHeights"},letterSpacing:{property:"letterSpacing",scale:"letterSpacings"},textAlign:!0,fontStyle:!0}),G({alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:!0,flex:!0,flexGrow:!0,flexShrink:!0,flexBasis:!0,justifySelf:!0,alignSelf:!0,order:!0});var F={space:[0,4,8,16,32,64,128,256,512]};G({gridGap:{property:"gridGap",scale:"space",defaultScale:F.space},gridColumnGap:{property:"gridColumnGap",scale:"space",defaultScale:F.space},gridRowGap:{property:"gridRowGap",scale:"space",defaultScale:F.space},gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridAutoRows:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0}),G({border:{property:"border",scale:"borders"},borderWidth:{property:"borderWidth",scale:"borderWidths"},borderStyle:{property:"borderStyle",scale:"borderStyles"},borderColor:{property:"borderColor",scale:"colors"},borderRadius:{property:"borderRadius",scale:"radii"},borderTop:{property:"borderTop",scale:"borders"},borderTopLeftRadius:{property:"borderTopLeftRadius",scale:"radii"},borderTopRightRadius:{property:"borderTopRightRadius",scale:"radii"},borderRight:{property:"borderRight",scale:"borders"},borderBottom:{property:"borderBottom",scale:"borders"},borderBottomLeftRadius:{property:"borderBottomLeftRadius",scale:"radii"},borderBottomRightRadius:{property:"borderBottomRightRadius",scale:"radii"},borderLeft:{property:"borderLeft",scale:"borders"},borderX:{properties:["borderLeft","borderRight"],scale:"borders"},borderY:{properties:["borderTop","borderBottom"],scale:"borders"},borderTopWidth:{property:"borderTopWidth",scale:"borderWidths"},borderTopColor:{property:"borderTopColor",scale:"colors"},borderTopStyle:{property:"borderTopStyle",scale:"borderStyles"},borderBottomWidth:{property:"borderBottomWidth",scale:"borderWidths"},borderBottomColor:{property:"borderBottomColor",scale:"colors"},borderBottomStyle:{property:"borderBottomStyle",scale:"borderStyles"},borderLeftWidth:{property:"borderLeftWidth",scale:"borderWidths"},borderLeftColor:{property:"borderLeftColor",scale:"colors"},borderLeftStyle:{property:"borderLeftStyle",scale:"borderStyles"},borderRightWidth:{property:"borderRightWidth",scale:"borderWidths"},borderRightColor:{property:"borderRightColor",scale:"colors"},borderRightStyle:{property:"borderRightStyle",scale:"borderStyles"}});var D={background:!0,backgroundImage:!0,backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0};D.bgImage=D.backgroundImage,D.bgSize=D.backgroundSize,D.bgPosition=D.backgroundPosition,D.bgRepeat=D.backgroundRepeat,G(D);var M={space:[0,4,8,16,32,64,128,256,512]};G({position:!0,zIndex:{property:"zIndex",scale:"zIndices"},top:{property:"top",scale:"space",defaultScale:M.space},right:{property:"right",scale:"space",defaultScale:M.space},bottom:{property:"bottom",scale:"space",defaultScale:M.space},left:{property:"left",scale:"space",defaultScale:M.space}});var _={space:[0,4,8,16,32,64,128,256,512]},J=function(e){return"number"==typeof e&&!isNaN(e)},K=function(e,r){if(!J(e))return A(r,e,e);var t=e<0,n=Math.abs(e),o=A(r,n,n);return J(o)?o*(t?-1:1):t?"-"+o:o},Q={};Q.margin={margin:{property:"margin",scale:"space",transform:K,defaultScale:_.space},marginTop:{property:"marginTop",scale:"space",transform:K,defaultScale:_.space},marginRight:{property:"marginRight",scale:"space",transform:K,defaultScale:_.space},marginBottom:{property:"marginBottom",scale:"space",transform:K,defaultScale:_.space},marginLeft:{property:"marginLeft",scale:"space",transform:K,defaultScale:_.space},marginX:{properties:["marginLeft","marginRight"],scale:"space",transform:K,defaultScale:_.space},marginY:{properties:["marginTop","marginBottom"],scale:"space",transform:K,defaultScale:_.space}},Q.margin.m=Q.margin.margin,Q.margin.mt=Q.margin.marginTop,Q.margin.mr=Q.margin.marginRight,Q.margin.mb=Q.margin.marginBottom,Q.margin.ml=Q.margin.marginLeft,Q.margin.mx=Q.margin.marginX,Q.margin.my=Q.margin.marginY,Q.padding={padding:{property:"padding",scale:"space",defaultScale:_.space},paddingTop:{property:"paddingTop",scale:"space",defaultScale:_.space},paddingRight:{property:"paddingRight",scale:"space",defaultScale:_.space},paddingBottom:{property:"paddingBottom",scale:"space",defaultScale:_.space},paddingLeft:{property:"paddingLeft",scale:"space",defaultScale:_.space},paddingX:{properties:["paddingLeft","paddingRight"],scale:"space",defaultScale:_.space},paddingY:{properties:["paddingTop","paddingBottom"],scale:"space",defaultScale:_.space}},Q.padding.p=Q.padding.padding,Q.padding.pt=Q.padding.paddingTop,Q.padding.pr=Q.padding.paddingRight,Q.padding.pb=Q.padding.paddingBottom,Q.padding.pl=Q.padding.paddingLeft,Q.padding.px=Q.padding.paddingX,Q.padding.py=Q.padding.paddingY;var U=function(){for(var e={},r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];t.forEach(function(r){r&&r.config&&W(e,r.config)});var o=P(e);return o}(G(Q.margin),G(Q.padding));function V(){return V=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},V.apply(this,arguments)}G({boxShadow:{property:"boxShadow",scale:"shadows"},textShadow:{property:"textShadow",scale:"shadows"}});var Z,$,ee,re,te,ne,oe,ie,ae,de,se,pe,le,ce=function(e,r,t,n,o){for(r=r&&r.split?r.split("."):[r],n=0;n<r.length;n++)e=e?e[r[n]]:o;return e===o?t:e},fe=[40,52,64].map(function(e){return e+"em"}),ue={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},ge={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},me={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},he={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},be=function(e,r){if("number"!=typeof r||r>=0)return ce(e,r,r);var t=Math.abs(r),n=ce(e,t,t);return"string"==typeof n?"-"+n:-1*n},ye=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce(function(e,r){var t;return V({},e,((t={})[r]=be,t))},{}),ve=function e(r){return function(t){void 0===t&&(t={});var n=V({},ue,{},t.theme||t),o={},i=function(e){return function(r){var t={},n=ce(r,"breakpoints",fe),o=[null].concat(n.map(function(e){return"@media screen and (min-width: "+e+")"}));for(var i in e){var a="function"==typeof e[i]?e[i](r):e[i];if(null!=a)if(Array.isArray(a))for(var d=0;d<a.slice(0,o.length).length;d++){var s=o[d];s?(t[s]=t[s]||{},null!=a[d]&&(t[s][i]=a[d])):t[i]=a[d]}else t[i]=a}return t}}("function"==typeof r?r(n):r)(n);for(var a in i){var d=i[a],s="function"==typeof d?d(n):d;if("variant"!==a)if(s&&"object"==typeof s)o[a]=e(s)(n);else{var p=ce(ge,a,a),l=ce(he,p),c=ce(n,l,ce(n,p,{})),f=ce(ye,p,ce)(c,s,s);if(me[p])for(var u=me[p],g=0;g<u.length;g++)o[u[g]]=f;else o[p]=f}else o=V({},o,{},e(ce(n,s))(n))}return o}},xe=function(e){var r,t,n=e.scale,o=e.prop,i=void 0===o?"variant":o,a=e.variants,d=void 0===a?{}:a,s=e.key;t=Object.keys(d).length?function(e,r,t){return ve(A(r,e,null))(t.theme)}:function(e,r){return A(r,e,null)},t.scale=n||s,t.defaults=d;var p=((r={})[i]=t,r);return P(p)};xe({key:"buttons"}),xe({key:"textStyles",prop:"textStyle"}),xe({key:"colorStyles",prop:"colors"}),f.default.div(Z||(Z=g(["\n  ",";\n  ",";\n  font-size: ",";\n"])),U,N,function(e){return e.theme.filter.size[e.size].fontSize}),f.default.div($||($=g(["\n  padding: 2px 6px;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n"]))),f.default.div(ee||(ee=g(["\n  display: flex;\n  flexDirection: row;\n  border-radius: ",";\n  border: ",";\n  &:hover {\n    border:  ",";\n  }\n\n  &:focus-within {\n    border: 1px solid ",";\n    outline: none;\n  }\n\n"])),function(e){return e.theme.filter.borderRadius},function(e){return e.theme.filter.border},function(e){return e.theme.filter.borderHovered},function(e){return e.theme.colors[e.colorTheme][500]}),f.default.div(re||(re=g(["\ndisplay: grid;\nflex: 1 1 0%;\nflex-wrap: wrap;\n\n"]))),f.default.input(te||(te=g(["\n  border: none;\n  border-radius: ",";\n  font-size: ",";\n  margin: 2px;\n  outline: 0px !important;\n  width: 100%;\n \n"])),function(e){return e.theme.filter.borderRadius},function(e){return e.theme.filter.size[e.size].fontSize}),f.default.div(ne||(ne=g([" \n\n"]))),f.default.span(oe||(oe=g(["\n  display: flex;\n  align-items: center;\n  padding-left: 8px;\n  margin: 2px;\n  font-size: ",";\n  border-radius:  ",";\n  background-color:  ",";\n  color: ",";\n  white-space: nowrap;\n"])),function(e){return e.theme.filter.size[e.size].fontSize},function(e){return e.theme.filter.borderRadius},function(e){return e.theme.colors.gray[200]},function(e){return e.theme.colors.black}),f.default.span(ie||(ie=g(["\n  display: flex;\n  align-items: center;\n  padding: 0px 0px 0px 8px;\n  margin: 2px;\n  font-size: ",";\n  color: ",";\n  white-space: nowrap;\n"])),function(e){return e.theme.filter.size[e.size].fontSize},function(e){return e.theme.colors.black}),f.default.button(ae||(ae=g(["\n  display: flex;\n  align-items: center;\n  height: 100%;\n  border: none;\n  background-color: unset;\n  border: none;\n  cursor: pointer;\n  color: ",";\n  border-radius: 0px 5px 5px 0px;\n  padding: 0px 4px 0px 2px;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),function(e){return e.theme.colors.black},function(e){return i.transparentize(.3,e.theme.colors[e.colorTheme][500])}),f.default.span(de||(de=g(["\n  padding-right: 5px;\n"]))),f.default.div(se||(se=g(["\n  display: flex;\n  align-items: center;\n  margin-right: 4px\n"]))),f.default.svg(pe||(pe=g(["\n  fill: none;\n  stroke: black;\n  stroke-width: 2px;\n  display: flex;\n  height: 18px;\n  width: 18px;\n  stroke-linecap:round; \n  stroke-linejoin: join;\n"]))),f.default.svg(le||(le=g(["\n  fill: none;\n  stroke: black;\n  stroke-width: 1px;\n  display: flex;\n  height: 18px;\n  width: 18px;\n  stroke-linecap:round; \n  stroke-linejoin: join;\n"])));var Se=["engine","engineError","listData","motorListProps","singleSelection","dropHeight","pageHeight","selectionLabelLimit","placeholder","onSelectionChange","defaultSelections","colorTheme","size"];function we(e){var t=e.listData,n=e.motorListProps,o=e.pageHeight,i=e.selectionLabelLimit,d=e.placeholder,s=e.size;!function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r.indexOf(t=i[n])>=0||(o[t]=e[t])}(e,Se),console.log("size",s);var p=r.useRef(),l=r.useState(!1),c=l[0],f=l[1],u=r.useState(null)[1],g=r.useState(null),m=g[0],h=g[1],b=r.useState(o)[1],y=r.useState(d)[1];r.useEffect(function(){t&&b(t.length)},[t]);var v,x,S,w=n.selections,k=n.changePage;return r.useEffect(function(){w&&u(w.slice(0,i)),w&&h(w.length)},[w]),r.useEffect(function(){y(m&&0!==m?"":d)},[m]),v=p,x=function(){c&&(f(!1),k({qTop:0,qHeight:o}))},S=function(e){v.current&&!v.current.contains(e.target)&&x()},r.useEffect(function(){return document.addEventListener("click",S),function(){document.removeEventListener("click",S)}}),a.jsx("div",{children:"test"})}function ke(e){var t=u({},e),n=r.useContext(s.EngineContext);return a.jsx(we,u({engine:n.engine,engineError:n.engineError},t))}ke.propTypes={},ke.defaultProps={},e.Filter=ke});
//# sourceMappingURL=index.ts.map
