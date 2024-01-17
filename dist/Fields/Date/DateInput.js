"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_ValidationMessage=_interopRequireDefault(require("../../FormElements/ValidationMessage")),_jsxRuntime=require("react/jsx-runtime"),_default=({defaultProps:a})=>{const{field:b,validationMessage:c,touched:d,setTouched:e,updateForm:f,formattedInputs:g,error:h,unsetError:i,setFocusClass:j,styledComponents:k}=a,{id:l,formId:m,type:n,customName:o}=b,{Input:p="input"}=k||!1;return(0,_jsxRuntime.jsx)(_jsxRuntime.Fragment,{children:g&&g.map((a,g)=>(0,_jsxRuntime.jsxs)("div",{className:n,children:[(0,_jsxRuntime.jsx)(p,{id:`input_${m}_${l}_${g}`,type:"number",name:o||`input_${l}[]`,placeholder:a.placeholder,step:"1",min:"1",max:"MM"===a.label?12:"DD"===a.label?31:new Date().getFullYear()+1,maxLength:"YYYY"===a.label?4:2,value:a.value,onBlur:c=>{b.subId=g,b.dateLabel=a.label,f(c,b),e(l),i(l),j(""!==a.value)},onFocus:()=>j(!0)}),(0,_jsxRuntime.jsx)("label",{htmlFor:`input_${m}_${l}_${g}`,className:"hide-label",children:a.label}),c&&d&&c[g]&&g===c[g].index&&c[g].message&&(0,_jsxRuntime.jsx)("span",{className:"error-message",id:`error_${m}_${a.id}`,children:c[g].message}),h&&(0,_jsxRuntime.jsx)("span",{className:"error-message",children:h})]},a.id))})};exports.default=_default;