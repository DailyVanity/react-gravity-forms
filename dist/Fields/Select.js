"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireWildcard(require("react")),_reactSelect=_interopRequireDefault(require("react-select")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel")),_jsxRuntime=require("react/jsx-runtime");function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(b,c){if(!c&&b&&b.__esModule)return b;if(null===b||"object"!=typeof b&&"function"!=typeof b)return{default:b};var d=_getRequireWildcardCache(c);if(d&&d.has(b))return d.get(b);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in b)if("default"!=a&&Object.prototype.hasOwnProperty.call(b,a)){var g=f?Object.getOwnPropertyDescriptor(b,a):null;g&&(g.get||g.set)?Object.defineProperty(e,a,g):e[a]=b[a]}return e.default=b,d&&d.set(b,e),e}var _default=({field:a,value:b,validationMessage:c,touched:d,setTouched:e,setFocusClass:f,hideField:g,updateForm:h,styledComponents:i,error:j,cssClass:k,unsetError:l,...m})=>{const{id:n,formId:o,type:p,label:q,isRequired:r,choices:s,placeholder:t,description:u,descriptionPlacement:v,labelPlacement:w,width:x,customName:y}=a,[z,A]=(0,_react.useState)("");let B="";const C=s.map(a=>{const b={value:a.value,label:a.text};return a.isSelected&&(B=b),b}),[D,E]=(0,_react.useState)(b||B),F=b=>{E(b);h({target:{value:b}},a)},G=()=>{h({target:{value:D}},a),e(n),f(D&&D.value),A("")},{ReactSelect:H,Label:I="label",Box:J="div"}=i||!1,K=H||_reactSelect.default;return(0,_jsxRuntime.jsx)(J,{width:x,className:c&&d||j?`form-field error ${k} ${z}`:`form-field ${k} ${z}`,style:{display:g?"none":void 0},children:(0,_jsxRuntime.jsxs)("div",{className:p,children:[(0,_jsxRuntime.jsx)(_InputLabel.default,{formId:o,id:n,label:q,labelPlacement:w,isRequired:r,styledComponent:i}),"above"===v&&u&&(0,_jsxRuntime.jsx)("div",{className:"description",dangerouslySetInnerHTML:{__html:u}}),(0,_jsxRuntime.jsx)(K,{name:y||`input_${n}`,required:r,value:D&&D.value?D:"",onChange:b=>{F(b,a),l(n)},onBlur:()=>G(),onFocus:()=>{f(!0),A("is-open")},placeholder:t,options:C,className:"form-select",autoFocus:!1,inputId:`input_${o}_${n}`}),"above"!==v&&u&&(0,_jsxRuntime.jsx)("div",{className:"description",dangerouslySetInnerHTML:{__html:u}}),(c&&d||j)&&(0,_jsxRuntime.jsx)("span",{className:"error-message",id:`error_${o}_${n}`,children:c||j})]})})};exports.default=_default;