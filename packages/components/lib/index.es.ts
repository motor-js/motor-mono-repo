import{forwardRef as e,useContext as n,useEffect as t,useRef as i,createElement as r,useState as o}from"react";import l from"react-window-infinite-loader";import{FixedSizeList as c}from"react-window";import{ThemeContext as a,defaultTheme as s,space as d,color as h}from"@motor-js/theme";import u,{css as p}from"styled-components";import{transparentize as f}from"polished";import{jsx as m,jsxs as g}from"react/jsx-runtime";import x from"prop-types";function b(){return(b=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function k(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n.indexOf(t=o[i])>=0||(r[t]=e[t]);return r}function w(e,n){return n||(n=e.slice(0)),e.raw=n,e}var v,y,S,z=p(v||(v=w(["\n  border: ",";\n  font-size:  ",";\n  font-family: ",";\n  position: relative;\n  width: ",";\n"])),function(e){return e.theme.filter.border},function(e){return e.theme.filter.size[e.size].fontSize},function(e){return e.theme.fontFamily},function(e){return e.width+"px"});p(y||(y=w(["\n  background-color: ",";\n"])),function(e){return"A"===e.selected?e.theme.colors.gray100:""});var C,L,O,H,I,N,j,D,P,R,T,W,q,A,K,B,E,V,F,M=u.svg(S||(S=w(["\n  stroke-width: ",";\n  stroke: ",";\n  height: ",";\n  width: ",";\n  viewbox: ",";\n  stroke-linejoin: join;\n  stroke-linecap: round; \n  fill: none;\n  display: flex;\n  fill: none;\n  display: flex;\n"])),function(e){return e.strokeWidth},function(e){return e.strokeColor},function(e){return e.height},function(e){return e.width},function(e){return e.viewbox}),X=u.div(C||(C=w(["\n  width: 100%;\n  position: absolute;\n  z-index:1000;\n  background-color: white;\n"]))),G=u.div.attrs(function(e){var n;switch(e.selected){case"S":case"O":n="";break;case"A":n=e.theme.colors.gray[100];break;case"X":n=e.theme.colors.gray[400];break;default:n=""}return{style:{backgroundColor:n}}})(L||(L=w(["\nwidth: 100%;\ndisplay: flex;\nalign-items: center;\n&:hover {\n  background-color: ",";\n}\ncursor: pointer;\n"])),function(e){return f(.92,e.theme.colors[e.colorTheme][500])}),J=u.div(O||(O=w(["\n  ",";\n  shadow: ",";\n  margin-top: 10px;\n  border-radius:  ",";\n"])),z,function(e){return e.theme.shadows.input},function(e){return e.theme.filter.borderRadius}),Q=u.div(H||(H=w(["\n  ",";\n  margin-top: 10px;\n"])),z),U=u.input.attrs({type:"checkbox"})(I||(I=w(["\n  // Hide checkbox visually but remain accessible to screen readers.\n  // Source: https://polished.js.org/docs/#hidevisually\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"]))),Y=u.div(N||(N=w(["\n  display: inline-block;\n  vertical-align: middle;\n  width: 14px;\n  height: 14px;\n  margin: 0px 5px;\n  background: ",";\n  border-radius: 4px;\n  transition: all 150ms;\n  border: 1px solid ",";\n\n  ",":focus + & {\n    box-shadow: 0 0 0 3px ",";\n  }\n\n  "," {\n    visibility: ","\n  }\n"])),function(e){return"S"===e.selected?e.theme.colors[e.colorTheme][500]:"white"},function(e){return"S"===e.selected?e.theme.colors[e.colorTheme][500]:e.theme.colors.gray[300]},U,function(e){return e.theme.colors[e.colorTheme][400]},M,function(e){return"S"===e.selected?"visible":"hidden"}),Z=u.div(j||(j=w(["\n  display: flex;\n  align-items: center;\n"]))),$=u.span(D||(D=w(["\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"]))),_=function(){return m(M,{viewBox:"0 0 24 24",strokeWidth:3,strokeColor:"white",children:m("polyline",{points:"20 6 9 17 4 12"})})},ee=function(e){var n=e.className,t=e.selected,i=k(e,["className","checked","selected"]);return g(Z,b({className:n},i,{children:[m(U,b({selected:t},i)),m(Y,b({},i,{selected:t,children:m(_,{})}))]}))},ne=e(function(e,t){var i=e.isNextPageLoading,r=void 0!==i&&i,o=e.items,d=e.loadNextPage,h=e.numberOfItems,u=e.pageHeight,p=e.dropHeight,f=e.handleSelectCallback,x=e.size,w=k(e,["isNextPageLoading","items","loadNextPage","numberOfItems","pageHeight","dropHeight","handleSelectCallback","size"]),v=(n(a)||s).filter.size[x].itemHeight,y=o.length<h,S=y?u+1:u,z=function(e){return!y||e<u},C=function(e){var n,t,i,r=e.index,l=e.style;return z(r)&&0!=o.length&&null!=o[r]?(n=o[r].text,t=o[r],i=o[r].state):(n="Loading...",t="",i=""),m("div",{className:"drop-item",children:o.length>0&&g(G,b({className:"drop-item",style:l,onClick:function(){return function(e){return f(e)}(t)},selected:i},w,{children:[m(ee,b({className:"drop-item",selected:i},w)),m($,b({className:"drop-item"},w,{children:n}))]}))})};return m(X,{ref:t,children:m(l,{isItemLoaded:z,itemCount:S,loadMoreItems:r?function(){}:d,threshold:80,children:function(e){return o.length>0?m(J,b({size:x},w,{children:m(c,{className:"list",itemCount:S,onItemsRendered:e.onItemsRendered,ref:e.ref,height:p,width:"100%",itemSize:v,children:C})})):m(Q,b({size:x},w,{children:"No results found."}))}})})}),te=u.div(P||(P=w(["\n  ",";\n  ",";\n  position: relative;\n"])),d,h),ie=u.div(R||(R=w(["\n  padding: 2px 6px;\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n"]))),re=u.div(T||(T=w(["\n  display: flex;\n  flexDirection: row;\n  border-radius: ",";\n  border: ",";\n  &:hover {\n    border:  ",";\n  }\n\n  &:focus-within {\n    border: 1px solid ",";\n    outline: none;\n  }\n"])),function(e){return e.theme.filter.borderRadius},function(e){return e.theme.filter.border},function(e){return e.theme.filter.borderHovered},function(e){return e.theme.colors[e.colorTheme][500]}),oe=u.div(W||(W=w(["\n  display: grid;\n  flex: 1 1 0%;\n  flex-wrap: wrap;\n"]))),le=u.input(q||(q=w(["\n  border: none;\n  border-radius: ",";\n  font-size: ",";\n  margin: 2px;\n  outline: 0px !important;\n  width: 100%;\n  padding: 4px 0px;\n"])),function(e){return e.theme.filter.borderRadius},function(e){return e.theme.filter.size[e.size].fontSize});u.div(A||(A=w([" \n\n"])));var ce,ae=u.span(K||(K=w(["\n  display: flex;\n  align-items: center;\n  padding: 0px 0px 0px 4px;\n  margin: 2px;\n  font-size: ",";\n  border-radius:  ",";\n  background-color:  ",";\n  color: ",";\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"])),function(e){return e.theme.filter.size[e.size].fontSize},function(e){return e.theme.filter.borderRadius},function(e){return e.theme.colors.gray[200]},function(e){return e.theme.colors.black}),se=u.span(B||(B=w(["\n  display: flex;\n  align-items: center;\n  padding: 0px 0px 0px 8px;\n  margin: 2px;\n  font-size: ",";\n  color: ",";\n  white-space: nowrap;\n"])),function(e){return e.theme.filter.size[e.size].fontSize},function(e){return e.theme.colors.black}),de=u.button(E||(E=w(["\n  display: flex;\n  align-items: center;\n  height: 100%;\n  border: none;\n  background-color: unset;\n  border: none;\n  cursor: pointer;\n  color: ",";\n  border-radius: 0px 5px 5px 0px;\n  padding: 0px 4px 0px 2px;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),function(e){return e.theme.colors.black},function(e){return f(.3,e.theme.colors[e.colorTheme][500])}),he=u.span(V||(V=w(["\n  padding: 2px 8px 2px 2px;\n  max-width: 100px;\n  overflow: hidden;\n  font-size: 85%;\n  white-space: nowrap;\n  text-overflow:ellipsis;\n"]))),ue=u.div(F||(F=w(["\n  display: flex;\n  align-items: center;\n  margin-right: 4px\n"])));u.svg(ce||(ce=w(["\n  fill: none;\n  stroke: black;\n  stroke-width: 2px;\n  display: flex;\n  height: 18px;\n  width: 18px;\n  stroke-linecap:round; \n  stroke-linejoin: join;\n"])));var pe,fe=function(e){return g(M,b({viewBox:"0 0 24 24"},{stroke:e.stroke,strokeWidth:e.strokeWidth,height:e.height,width:e.width},{children:[m("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),m("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}))},me=u.svg(pe||(pe=w(["\n  fill: none;\n  stroke: black;\n  stroke-width: 1px;\n  display: flex;\n  height: 18px;\n  width: 18px;\n  stroke-linecap:round; \n  stroke-linejoin: join;\n"]))),ge=function(){return m(me,{viewBox:"0 0 24 24",children:m("polyline",{points:"6 9 12 15 18 9"})})},xe=function(e){var n,t=e.selectionsLabels,o=e.selectionLabelLimit,l=e.numberOfSelections,c=e.numberOfItems,a=e.handleKeyDownCallback,s=e.handleSearchCallback,d=e.handleInputSelectCallback,h=e.handleIconSelectCallback,u=e.handleDeselectCallback,p=e.deselectAllCallback,f=e.placeholderState,x=e.singleSelection,w=e.size,v=e.searchValue,y=k(e,["selectionsLabels","selectionLabelLimit","numberOfSelections","numberOfItems","handleKeyDownCallback","handleSearchCallback","handleInputSelectCallback","handleIconSelectCallback","handleDeselectCallback","deselectAllCallback","placeholderState","singleSelection","size","searchValue"]),S=[n=i(null),function(){n.current&&n.current.focus()}],z=S[0],C=S[1];return g(re,b({onClick:function(){return C()}},y,{children:[g(ie,b({},y,{onClick:function(){return d()},children:[x&&t&&t.length>0?m(se,b({size:w},y,{children:t[0].text})):!x&&t&&o<l?g(ae,b({size:w},y,{children:[m(he,b({},y,{children:l+" of "+c})),m(de,b({},y,{onClick:p,children:m(fe,{stroke:"black",strokeWidth:1,height:"14px",width:"14px"})}))]})):t&&t.map(function(e,n){return r(ae,b({},y,{size:w,key:e.key}),m(he,b({},y,{children:e.text})),m(de,b({},y,{onClick:function(){return u(e)},children:m(fe,{stroke:"black",strokeWidth:1,height:"14px",width:"14px",padding:"10px"})})))}),m(oe,b({},y,{children:m(le,b({ref:z,size:w,onChange:function(e){return function(e){s(e)}(e)},onKeyDown:a,placeholder:f,value:v},y))}))]})),g("div",{style:{display:"flex",flexDirection:"row"},children:[m(ue,{onClick:p,children:l>0&&m(fe,{stroke:"black",strokeWidth:1,height:"14px",width:"14px"})}),m(ue,b({},y,{onClick:h,children:m(ge,{stroke:"black",strokeWidth:1,height:"14px",width:"14px"})}))]})]}))};function be(e){var n=e.listData,r=e.motorListProps,l=e.singleSelection,c=e.dropHeight,a=void 0===c?"200px":c,s=e.pageHeight,d=e.selectionLabelLimit,h=e.placeholder,u=e.onSelectionChange,p=e.size,f=k(e,["listData","motorListProps","singleSelection","dropHeight","pageHeight","selectionLabelLimit","placeholder","onSelectionChange","defaultSelections","size"]),x=i(),w=i(),v=o(!1),y=v[0],S=v[1],z=o(null),C=z[0],L=z[1],O=o(null),H=O[0],I=O[1],N=o(s),j=N[0],D=N[1],P=o(h),R=P[0],T=P[1],W=o(""),q=W[0],A=W[1];t(function(){n&&D(n.length)},[n]);var K=r.layout,B=r.select,E=r.endSelections,V=r.beginSelections,F=r.selections,M=r.searchList,X=r.confirmListSearch,G=r.clearSelections,J=r.changePage,Q=K&&K.qListObject.qSize.qcy,U=parseInt(a,10);t(function(){F&&L(F.slice(0,d)),F&&I(F.length)},[F]),t(function(){T(H&&0!==H?"":h)},[H]),function(e,n){var i=e.filterRef,r=e.dropRef,o=function(e){i.current&&!i.current.contains(e.target)&&r.current&&!r.current.contains(e.target)&&y&&(S(!y),A(""),J({qTop:0,qHeight:s}),E(!0))};t(function(){return document.addEventListener("click",o,{capture:!0}),function(){document.removeEventListener("click",o,{capture:!0})}})}({filterRef:x,dropRef:w});var Y=b({selectionsLabels:C,numberOfSelections:H,selectionLabelLimit:d,numberOfItems:Q,handleKeyDownCallback:function(e){"Enter"===e.key&&(X(),A(""))},handleSearchCallback:function(e){A(e.target.value),M(e.target.value)},handleInputSelectCallback:function(){y||(V(),S(!0))},handleIconSelectCallback:function(){y?E(!0):V(),S(!y)},handleDeselectCallback:function(e){B([e.key],!0),A("")},deselectAllCallback:function(){G(),A("")},placeholderState:R,singleSelection:l,selections:F,size:p,searchValue:q},f),Z=b({items:n,loadNextPage:function(){return J({qHeight:s+j})},pageHeight:j||s,numberOfItems:Q,dropHeight:U,handleSelectCallback:function(e){T(""),A(""),B([e.key],!l),u()},size:p},f);return g(te,b({ref:x,size:p},f,{children:[m(xe,b({},Y)),n&&y&&m(ne,b({ref:w},Z))]}))}function ke(e){var n=b({},e);return m(be,b({},n))}ke.propTypes={listData:x.array,colorTheme:x.oneOf(["brand","gray","red","orange","yellow","green","teal","pink","blue","cyan","purple"]),singleSelection:x.bool,pageHeight:x.number,selectionLabelLimit:x.number,size:x.oneOf(["small","medium","large"]),placeholder:x.string,onSelectionChange:x.func},ke.defaultProps={colorTheme:"brand",singleSelection:!1,pageHeight:50,selectionLabelLimit:5,size:"medium",placeholder:"Select..",onSelectionChange:function(){}};export{ke as Filter};
//# sourceMappingURL=index.es.ts.map
