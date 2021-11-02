import{useEffect as e,useRef as t,createElement as i,useState as l,useContext as o}from"react";import r from"react-window-infinite-loader";import{FixedSizeList as n}from"react-window";import s,{css as a}from"styled-components";import{transparentize as c}from"polished";import{jsx as d,jsxs as h}from"react/jsx-runtime";import{space as p,color as m}from"styled-system";import{EngineContext as g}from"@motor-js/engine";import{ThemeContext as x,defaultTheme as b}from"@motor-js/theme";import f from"prop-types";function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var i,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)t.indexOf(i=r[l])>=0||(o[i]=e[i]);return o}let w,y,v=e=>e;const S=a(w||(w=v`
  border: ${0};
  font-size:  ${0};
  font-family: ${0};
  position: relative;
  width: ${0};
`),e=>e.theme.filter.border,e=>e.theme.filter.size[e.size].fontSize,e=>e.theme.fontFamily,({width:e})=>`${e}px`);let z;a(y||(y=v`
  background-color: ${0};
`),e=>"A"===e.selected?e.theme.colors.gray100:"");const $=s.svg(z||(z=(e=>e)`
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
`),e=>e.strokeWidth,e=>e.strokeColor,e=>e.height,e=>e.width,e=>e.viewbox);let C,L,H,I,O,j,N,D=e=>e;const P=s.div(C||(C=D`
  width: 100%;
  display: flex;
  align-items: center;
  &:hover {
    background-color: ${0};
  }
  cursor: pointer;
`),e=>c(.92,e.theme.colors[e.colorTheme][500])),T=s.div(L||(L=D`
  ${0};
  shadow: ${0};
  margin-top: 10px;
  border-radius:  ${0};
`),S,e=>e.theme.shadows.input,e=>e.theme.filter.borderRadius),W=s.div(H||(H=D`
  ${0};
  margin-top: 10px;
`),S),q=s.input.attrs({type:"checkbox"})(I||(I=D`
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
`)),E=s.div(O||(O=D`
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
`),e=>"S"===e.selected?e.theme.colors[e.colorTheme][500]:"white",e=>"S"===e.selected?e.theme.colors.brand[500]:e.theme.colors.gray[300],q,e=>e.theme.colors.brand[400],$,e=>"S"===e.selected?"visible":"hidden"),R=s.div(j||(j=D`
  display: flex;
  align-items: center;
`)),A=s.span(N||(N=D`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`)),K=()=>d($,{viewBox:"0 0 24 24",strokeWidth:3,strokeColor:"white",children:d("polyline",{points:"20 6 9 17 4 12"})}),B=e=>{let{className:t,selected:i}=e,l=k(e,["className","checked","selected"]);return h(R,u({className:t},l,{children:[d(q,u({selected:i},l)),d(E,u({},l,{selected:i,children:d(K,{})}))]}))},F=e=>{let{isNextPageLoading:t=!1,items:i,loadNextPage:l,numberOfItems:o,pageHeight:s,dropHeight:a,handleSelectCallback:c,size:p}=e,m=k(e,["isNextPageLoading","items","loadNextPage","numberOfItems","pageHeight","dropHeight","handleSelectCallback","size"]);const g=u({},m).theme.filter.size[p].itemHeight,x=i.length<o,b=x?s+1:s,f=e=>!x||e<s,w=({index:e,style:t})=>{let l,o,r;return f(e)&&0!=i.length&&null!=i[e]?(l=i[e].text,o=i[e],r=i[e].state):(l="Loading...",o="",r=""),d("div",{className:"drop-item",children:i.length>0&&h(P,u({className:"drop-item",style:t,onClick:()=>(e=>c(e))(o),selected:r},m,{children:[d(B,u({className:"drop-item",selected:r},m)),d(A,u({className:"drop-item"},m,{children:l}))]}))})};return d(r,{isItemLoaded:f,itemCount:b,loadMoreItems:t?()=>{}:l,threshold:80,children:({onItemsRendered:e,ref:t})=>i.length>0?d(T,u({size:p},m,{children:d(n,{className:"list",itemCount:b,onItemsRendered:e,ref:t,height:a,width:"100%",itemSize:g,children:w})})):d(W,u({size:p},m,{children:"No results found."}))})};let M,G,J,Q,U,V,X,Y,Z,_,ee,te=e=>e;const ie=s.div(M||(M=te`
  ${0};
  ${0};
  font-size: ${0};
`),p,m,e=>e.theme.filter.size[e.size].fontSize),le=s.div(G||(G=te`
  padding: 2px 6px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`)),oe=s.div(J||(J=te`
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

`),e=>e.theme.filter.borderRadius,e=>e.theme.filter.border,e=>e.theme.filter.borderHovered,e=>e.theme.colors[e.colorTheme][500]),re=s.div(Q||(Q=te`
  display: grid;
  flex: 1 1 0%;
  flex-wrap: wrap;

`)),ne=s.input(U||(U=te`
  border: none;
  border-radius: ${0};
  font-size: ${0};
  margin: 2px;
  outline: 0px !important;
  width: 100%;
  padding: 4px 0px;
`),e=>e.theme.filter.borderRadius,e=>e.theme.filter.size[e.size].fontSize);s.div(V||(V=te` 

`));const se=s.span(X||(X=te`
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
`),e=>e.theme.filter.size[e.size].fontSize,e=>e.theme.filter.borderRadius,e=>e.theme.colors.gray[200],e=>e.theme.colors.black),ae=s.span(Y||(Y=te`
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 8px;
  margin: 2px;
  font-size: ${0};
  color: ${0};
  white-space: nowrap;
`),e=>e.theme.filter.size[e.size].fontSize,e=>e.theme.colors.black),ce=s.button(Z||(Z=te`
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
`),e=>e.theme.colors.black,e=>c(.3,e.theme.colors[e.colorTheme][500])),de=s.span(_||(_=te`
  padding: 2px 8px 2px 2px;
  max-width: 100px;
  overflow: hidden;
  font-size: 85%;
  white-space: nowrap;
  text-overflow:ellipsis;
`)),he=s.div(ee||(ee=te`
  display: flex;
  align-items: center;
  margin-right: 4px
`));let pe;s.svg(pe||(pe=(e=>e)`
  fill: none;
  stroke: black;
  stroke-width: 2px;
  display: flex;
  height: 18px;
  width: 18px;
  stroke-linecap:round; 
  stroke-linejoin: join;
`));const me=({stroke:e,strokeWidth:t,height:i,width:l})=>h($,u({viewBox:"0 0 24 24"},{stroke:e,strokeWidth:t,height:i,width:l},{children:[d("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),d("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}));let ge;const xe=s.svg(ge||(ge=(e=>e)`
  fill: none;
  stroke: black;
  stroke-width: 1px;
  display: flex;
  height: 18px;
  width: 18px;
  stroke-linecap:round; 
  stroke-linejoin: join;
`)),be=()=>d(xe,{viewBox:"0 0 24 24",children:d("polyline",{points:"6 9 12 15 18 9"})}),fe=e=>{let{selectionsLabels:l,selectionLabelLimit:o,numberOfSelections:r,numberOfItems:n,handleKeyDownCallback:s,handleSearchCallback:a,handleInputSelectCallback:c,handleIconSelectCallback:p,handleDeselectCallback:m,deselectAllCallback:g,placeholderState:x,singleSelection:b,size:f}=e,w=k(e,["selectionsLabels","selectionLabelLimit","numberOfSelections","numberOfItems","handleKeyDownCallback","handleSearchCallback","handleInputSelectCallback","handleIconSelectCallback","handleDeselectCallback","deselectAllCallback","placeholderState","singleSelection","size"]);const[y,v]=(()=>{const e=t(null);return[e,()=>{e.current&&e.current.focus()}]})();return h(oe,u({onClick:()=>v()},w,{children:[h(le,u({},w,{children:[b&&l&&l.length>0?d(ae,u({size:f},w,{children:l[0].text})):!b&&l&&o<r?h(se,u({size:f},w,{children:[d(de,u({},w,{children:`${r} of ${n}`})),d(ce,u({},w,{onClick:g,children:d(me,{stroke:"black",strokeWidth:1,height:"14px",width:"14px"})}))]})):l&&l.map((e,t)=>i(se,u({},w,{size:f,key:e.key}),d(de,u({},w,{children:e.text})),d(ce,u({},w,{onClick:()=>m(e),children:d(me,{stroke:"black",strokeWidth:1,height:"14px",width:"14px",padding:"10px"})})))),d(re,u({},w,{children:d(ne,u({ref:y,size:f,onSelect:c,onChange:e=>(e=>{a(e)})(e),onKeyDown:s,placeholder:x},w))}))]})),h("div",{style:{display:"flex",flexDirection:"row"},children:[d(he,{onClick:g,children:r>0&&d(me,{stroke:"black",strokeWidth:1,height:"14px",width:"14px"})}),d(he,u({},w,{onClick:p,children:d(be,{stroke:"black",strokeWidth:1,height:"14px",width:"14px"})}))]})]}))};function ue(i){let{listData:o,motorListProps:r,singleSelection:n,dropHeight:s="200px",pageHeight:a,selectionLabelLimit:c,placeholder:p,onSelectionChange:m,size:g}=i,x=k(i,["engine","engineError","listData","motorListProps","singleSelection","dropHeight","pageHeight","selectionLabelLimit","placeholder","onSelectionChange","defaultSelections","size"]);const b=t(),[f,w]=l(!1),[y,v]=l(null),[S,z]=l(null),[$,C]=l(a),[L,H]=l(p);e(()=>{o&&C(o.length)},[o]);const{layout:I,select:O,selections:j,searchList:N,confirmListSearch:D,clearSelections:P,changePage:T}=r,W=I&&I.qListObject.qSize.qcy,q=parseInt(s,10);e(()=>{j&&v(j.slice(0,c)),j&&z(j.length)},[j]),e(()=>{H(S&&0!==S?"":p)},[S]),((t,i)=>{const l=e=>{t.current&&!t.current.contains(e.target)&&f&&(w(!1),T({qTop:0,qHeight:a}))};e(()=>(document.addEventListener("click",l),()=>{document.removeEventListener("click",l)}))})(b);const E=u({selectionsLabels:y,numberOfSelections:S,selectionLabelLimit:c,numberOfItems:W,handleKeyDownCallback:e=>{"Enter"===e.key&&D()},handleSearchCallback:e=>N(e.target.value),handleInputSelectCallback:()=>w(!0),handleIconSelectCallback:()=>w(!f),handleDeselectCallback:e=>O([e.key],!0),deselectAllCallback:()=>{P()},placeholderState:L,singleSelection:n,selections:j,size:g},x),R=u({items:o,loadNextPage:()=>T({qHeight:a+$}),pageHeight:$||a,numberOfItems:W,dropHeight:q,handleSelectCallback:e=>{H("");const{key:t}=e;O([t],!n),m()},size:g},x);return h(ie,u({ref:b,size:g},x,{children:[d(fe,u({},E)),f&&d(F,u({},R))]}))}function ke(e){let t=u({},e);const i=o(x)||b,{engine:l,engineError:r}=o(g);return d(ue,u({engine:l,theme:i,engineError:r},t))}ke.propTypes={listData:f.array,colorTheme:f.oneOf(["brand","gray","red","orange","yellow","green","teal","pink","blue","cyan","purple"]),singleSelection:f.bool,pageHeight:f.number,selectionLabelLimit:f.number,size:f.oneOf(["small","medium","large"]),placeholder:f.string,onSelectionChange:f.func},ke.defaultProps={colorTheme:"brand",singleSelection:!1,pageHeight:50,selectionLabelLimit:5,size:"medium",placeholder:"Select..",onSelectionChange:()=>{}};export{ke as Filter};
//# sourceMappingURL=index.modern.js.map
