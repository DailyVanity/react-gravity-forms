"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_jsxRuntime=require("react/jsx-runtime"),_default=({field:a,saveStateToHtmlField:b,hideField:c,styledComponents:d})=>{let{content:e,label:f,cssClass:g,width:h}=a;if(b){const{saveStateToHtmlField:a,formValues:c}=b,d=Object.keys(a),f=[];if(d)for(const b in c){const e=c[b];for(let b=0;b<d.length;b++)-1===e.cssClass.indexOf(d[b])||e.valid||(f[a[d[b]]]=e.value)}if(f){const a=Object.keys(f);for(let b=0;b<a.length;b++)"%price%"===a[b]&&(f[a[b]]=`€${f[a[b]]}`),e=e.replace(a[b],f[a[b]])}}const{Box:i="div",Label:j="label"}=d||!1;return(0,_jsxRuntime.jsxs)(i,{width:h,className:`form-field ${g}`,style:{display:c?"none":void 0},children:[(0,_jsxRuntime.jsx)(j,{className:"gf-label",children:f}),(0,_jsxRuntime.jsx)("div",{className:"html-content",dangerouslySetInnerHTML:{__html:e}})]})};exports.default=_default;