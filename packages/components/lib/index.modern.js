import{forwardRef as e,useContext as t,useEffect as l,useRef as i,createElement as o,useState as r}from"react";import n from"react-window-infinite-loader";import{FixedSizeList as s}from"react-window";import{ThemeContext as a,defaultTheme as c,space as d,color as h}from"@motor-js/theme";import p,{css as m}from"styled-components";import{transparentize as g}from"polished";import{jsx as x,jsxs as b}from"react/jsx-runtime";import u from"prop-types";function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var l,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t.indexOf(l=r[i])>=0||(o[l]=e[l]);return o}let w,y,v=e=>e;const S=m(w||(w=v`
  border: ${0};
  font-size:  ${0};
  font-family: ${0};
  position: relative;
  width: ${0};
`),e=>e.theme.filter.border,e=>e.theme.filter.size[e.size].fontSize,e=>e.theme.fontFamily,({width:e})=>`${e}px`);let $;m(y||(y=v`
  background-color: ${0};
`),e=>"A"===e.selected?e.theme.colors.gray100:"");const z=p.svg($||($=(e=>e)`
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
`),e=>e.strokeWidth,e=>e.strokeColor,e=>e.height,e=>e.width,e=>e.viewbox);let C,L,O,H,I,N,j,D,P=e=>e;const R=p.div(C||(C=P`
  width: 100%;
  position: absolute;
  z-index:1000;
  background-color: white;
`)),T=p.div.attrs(e=>{let t;switch(e.selected){case"S":case"O":t="";break;case"A":t=e.theme.colors.gray[100];break;case"X":t=e.theme.colors.gray[400];break;default:t=""}return{style:{backgroundColor:t}}})(L||(L=P`
width: 100%;
display: flex;
align-items: center;
&:hover {
  background-color: ${0};
}
cursor: pointer;
`),e=>g(.92,e.theme.colors[e.colorTheme][500])),W=p.div(O||(O=P`
  ${0};
  shadow: ${0};
  margin-top: 10px;
  border-radius:  ${0};
`),S,e=>e.theme.shadows.input,e=>e.theme.filter.borderRadius),q=p.div(H||(H=P`
  ${0};
  margin-top: 10px;
`),S),A=p.input.attrs({type:"checkbox"})(I||(I=P`
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
`)),K=p.div(N||(N=P`
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
`),e=>"S"===e.selected?e.theme.colors[e.colorTheme][500]:"white",e=>"S"===e.selected?e.theme.colors[e.colorTheme][500]:e.theme.colors.gray[300],A,e=>e.theme.colors[e.colorTheme][400],z,e=>"S"===e.selected?"visible":"hidden"),B=p.div(j||(j=P`
  display: flex;
  align-items: center;
`)),E=p.span(D||(D=P`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`)),V=()=>x(z,{viewBox:"0 0 24 24",strokeWidth:3,strokeColor:"white",children:x("polyline",{points:"20 6 9 17 4 12"})}),F=e=>{let{className:t,selected:l}=e,i=k(e,["className","checked","selected"]);return b(B,f({className:t},i,{children:[x(A,f({selected:l},i)),x(K,f({},i,{selected:l,children:x(V,{})}))]}))},M=e((e,l)=>{let{isNextPageLoading:i=!1,items:o,loadNextPage:r,numberOfItems:d,pageHeight:h,dropHeight:p,handleSelectCallback:m,size:g}=e,u=k(e,["isNextPageLoading","items","loadNextPage","numberOfItems","pageHeight","dropHeight","handleSelectCallback","size"]);const w=(t(a)||c).filter.size[g].itemHeight,y=o.length<d,v=y?h+1:h,S=e=>!y||e<h,$=({index:e,style:t})=>{let l,i,r;return S(e)&&0!=o.length&&null!=o[e]?(l=o[e].text,i=o[e],r=o[e].state):(l="Loading...",i="",r=""),x("div",{className:"drop-item",children:o.length>0&&b(T,f({className:"drop-item",style:t,onClick:()=>(e=>m(e))(i),selected:r},u,{children:[x(F,f({className:"drop-item",selected:r},u)),x(E,f({className:"drop-item"},u,{children:l}))]}))})};return x(R,{ref:l,children:x(n,{isItemLoaded:S,itemCount:v,loadMoreItems:i?()=>{}:r,threshold:80,children:({onItemsRendered:e,ref:t})=>o.length>0?x(W,f({size:g},u,{children:x(s,{className:"list",itemCount:v,onItemsRendered:e,ref:t,height:p,width:"100%",itemSize:w,children:$})})):x(q,f({size:g},u,{children:"No results found."}))})})});let X,G,J,Q,U,Y,Z,_,ee,te,le,ie=e=>e;const oe=p.div(X||(X=ie`
  ${0};
  ${0};
  position: relative;
`),d,h),re=p.div(G||(G=ie`
  padding: 2px 6px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`)),ne=p.div(J||(J=ie`
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
`),e=>e.theme.filter.borderRadius,e=>e.theme.filter.border,e=>e.theme.filter.borderHovered,e=>e.theme.colors[e.colorTheme][500]),se=p.div(Q||(Q=ie`
  display: grid;
  flex: 1 1 0%;
  flex-wrap: wrap;
`)),ae=p.input(U||(U=ie`
  border: none;
  border-radius: ${0};
  font-size: ${0};
  margin: 2px;
  outline: 0px !important;
  width: 100%;
  padding: 4px 0px;
`),e=>e.theme.filter.borderRadius,e=>e.theme.filter.size[e.size].fontSize);p.div(Y||(Y=ie` 

`));const ce=p.span(Z||(Z=ie`
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 4px;
  margin: 2px;
  font-size: ${0};
  border-radius:  ${0};
  background-color:  ${0};
  color: ${0};
  white-space: nowrap;
  text-overflow: ellipsis;
`),e=>e.theme.filter.size[e.size].fontSize,e=>e.theme.filter.borderRadius,e=>e.theme.colors.gray[200],e=>e.theme.colors.black),de=p.span(_||(_=ie`
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 8px;
  margin: 2px;
  font-size: ${0};
  color: ${0};
  white-space: nowrap;
`),e=>e.theme.filter.size[e.size].fontSize,e=>e.theme.colors.black),he=p.button(ee||(ee=ie`
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
`),e=>e.theme.colors.black,e=>g(.3,e.theme.colors[e.colorTheme][500])),pe=p.span(te||(te=ie`
  padding: 2px 8px 2px 2px;
  max-width: 100px;
  overflow: hidden;
  font-size: 85%;
  white-space: nowrap;
  text-overflow:ellipsis;
`)),me=p.div(le||(le=ie`
  display: flex;
  align-items: center;
  margin-right: 4px
`));let ge;p.svg(ge||(ge=(e=>e)`
  fill: none;
  stroke: black;
  stroke-width: 2px;
  display: flex;
  height: 18px;
  width: 18px;
  stroke-linecap:round; 
  stroke-linejoin: join;
`));const xe=({stroke:e,strokeWidth:t,height:l,width:i})=>b(z,f({viewBox:"0 0 24 24"},{stroke:e,strokeWidth:t,height:l,width:i},{children:[x("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),x("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}));let be;const ue=p.svg(be||(be=(e=>e)`
  fill: none;
  stroke: black;
  stroke-width: 1px;
  display: flex;
  height: 18px;
  width: 18px;
  stroke-linecap:round; 
  stroke-linejoin: join;
`)),fe=()=>x(ue,{viewBox:"0 0 24 24",children:x("polyline",{points:"6 9 12 15 18 9"})}),ke=e=>{let{selectionsLabels:t,selectionLabelLimit:l,numberOfSelections:r,numberOfItems:n,handleKeyDownCallback:s,handleSearchCallback:a,handleInputSelectCallback:c,handleIconSelectCallback:d,handleDeselectCallback:h,deselectAllCallback:p,placeholderState:m,singleSelection:g,size:u,searchValue:w}=e,y=k(e,["selectionsLabels","selectionLabelLimit","numberOfSelections","numberOfItems","handleKeyDownCallback","handleSearchCallback","handleInputSelectCallback","handleIconSelectCallback","handleDeselectCallback","deselectAllCallback","placeholderState","singleSelection","size","searchValue"]);const[v,S]=(()=>{const e=i(null);return[e,()=>{e.current&&e.current.focus()}]})();return b(ne,f({onClick:()=>S()},y,{children:[b(re,f({},y,{onClick:()=>c(),children:[g&&t&&t.length>0?x(de,f({size:u},y,{children:t[0].text})):!g&&t&&l<r?b(ce,f({size:u},y,{children:[x(pe,f({},y,{children:`${r} of ${n}`})),x(he,f({},y,{onClick:p,children:x(xe,{stroke:"black",strokeWidth:1,height:"14px",width:"14px"})}))]})):t&&t.map((e,t)=>o(ce,f({},y,{size:u,key:e.key}),x(pe,f({},y,{children:e.text})),x(he,f({},y,{onClick:()=>h(e),children:x(xe,{stroke:"black",strokeWidth:1,height:"14px",width:"14px",padding:"10px"})})))),x(se,f({},y,{children:x(ae,f({ref:v,size:u,onChange:e=>(e=>{a(e)})(e),onKeyDown:s,placeholder:m,value:w},y))}))]})),b("div",{style:{display:"flex",flexDirection:"row"},children:[x(me,{onClick:p,children:r>0&&x(xe,{stroke:"black",strokeWidth:1,height:"14px",width:"14px"})}),x(me,f({},y,{onClick:d,children:x(fe,{stroke:"black",strokeWidth:1,height:"14px",width:"14px"})}))]})]}))};function we(e){let{listData:t,motorListProps:o,singleSelection:n,dropHeight:s="200px",pageHeight:a,selectionLabelLimit:c,placeholder:d,onSelectionChange:h,size:p}=e,m=k(e,["listData","motorListProps","singleSelection","dropHeight","pageHeight","selectionLabelLimit","placeholder","onSelectionChange","defaultSelections","size"]);const g=i(),u=i(),[w,y]=r(!1),[v,S]=r(null),[$,z]=r(null),[C,L]=r(a),[O,H]=r(d),[I,N]=r("");l(()=>{t&&L(t.length)},[t]);const{layout:j,select:D,endSelections:P,beginSelections:R,selections:T,searchList:W,confirmListSearch:q,clearSelections:A,changePage:K}=o,B=j&&j.qListObject.qSize.qcy,E=parseInt(s,10);l(()=>{T&&S(T.slice(0,c)),T&&z(T.length)},[T]),l(()=>{H($&&0!==$?"":d)},[$]),(({filterRef:e,dropRef:t},i)=>{const o=l=>{e.current&&!e.current.contains(l.target)&&t.current&&!t.current.contains(l.target)&&i()};l(()=>(document.addEventListener("click",o,{capture:!0}),()=>{document.removeEventListener("click",o,{capture:!0})}))})({filterRef:g,dropRef:u},()=>{w&&(y(!w),N(""),K({qTop:0,qHeight:a}),P(!0))});const V=f({selectionsLabels:v,numberOfSelections:$,selectionLabelLimit:c,numberOfItems:B,handleKeyDownCallback:e=>{"Enter"===e.key&&(q(),N(""))},handleSearchCallback:e=>{N(e.target.value),W(e.target.value)},handleInputSelectCallback:()=>{w||(R(),y(!0))},handleIconSelectCallback:()=>{w?P(!0):R(),y(!w)},handleDeselectCallback:e=>{D([e.key],!0),N("")},deselectAllCallback:()=>{A(),N("")},placeholderState:O,singleSelection:n,selections:T,size:p,searchValue:I},m),F=f({items:t,loadNextPage:()=>K({qHeight:a+C}),pageHeight:C||a,numberOfItems:B,dropHeight:E,handleSelectCallback:e=>{H(""),N("");const{key:t}=e;D([t],!n),h()},size:p},m);return b(oe,f({ref:g,size:p},m,{children:[x(ke,f({},V)),t&&w&&x(M,f({ref:u},F))]}))}function ye(e){let t=f({},e);return x(we,f({},t))}ye.propTypes={listData:u.array,colorTheme:u.oneOf(["brand","gray","red","orange","yellow","green","teal","pink","blue","cyan","purple"]),singleSelection:u.bool,pageHeight:u.number,selectionLabelLimit:u.number,size:u.oneOf(["small","medium","large"]),placeholder:u.string,onSelectionChange:u.func},ye.defaultProps={colorTheme:"brand",singleSelection:!1,pageHeight:50,selectionLabelLimit:5,size:"medium",placeholder:"Select..",onSelectionChange:()=>{}};export{ye as Filter};
//# sourceMappingURL=index.modern.js.map
