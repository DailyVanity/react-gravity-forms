"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard"),_interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_react=_interopRequireWildcard(require("react")),FormFields=_interopRequireWildcard(require("../Fields")),frac2dec=function(a){var b=a.split("-");if(1===b.length&&(b=a.split(" ")),1<b.length&&-1!==a.indexOf("/")){var c=parseInt(b[0]),d=b[1].split("/"),e=parseInt(d[0])/parseInt(d[1]);return c+e}if(-1!==a.indexOf("/")){var f=a.split("/"),g=parseInt(f[0])/parseInt(f[1]);return g}return parseInt(a)},formatComponentName=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},formatWidthFromCss=function(a){if(!a)return{};var b=a.indexOf("["),c=a.indexOf("]");if(-1===b||-1===c)return{};var d=a.substring(b+1,c).split(",").map(function(a){return frac2dec(a.replace(/\s/g,""))}),e="".concat(a.replace(a.substring(b,c+1),"")," custom-width");return{width:d,cleanedCssClass:e}},RenderField=function(a){var b=a.field,c=a.formValues,d=a.submitFailed,e=a.submitSuccess,f=a.setTouched,g=a.touched,h=a.updateForm,i=a.pages,j=a.prevStep,k=a.nextStep,l=a.isNextDisabled,m=a.saveStateToHtmlField,n=a.styledComponents,o=a.customComponents,p=a.error,q=a.unsetError,r=a.dropzoneText,s=a.formatChars,t=FormFields[formatComponentName(b.type)];o&&(o[b.id]||o[b.cssClass]||o[b.inputName])&&(t=FormFields[formatComponentName("custom")]);var u=formatWidthFromCss(b.cssClass),v=u.cleanedCssClass,w=u.width;w&&(b.cssClass=v,b.width=w);var x=c[b.id]?c[b.id].value:b.defaultValue,y=(0,_react.useState)("".concat(b.cssClass).concat("select"===b.type?x.value&&""!==x.value?" filled":"":x&&""!==x?" filled":"")),z=(0,_slicedToArray2["default"])(y,2),A=z[0],B=z[1];return _react["default"].createElement(t,{key:"el-".concat(b.formId,"-").concat(b.id),field:b,value:x,updateForm:h,validationMessage:!!c[b.id]&&c[b.id].valid,submitFailed:d,submitSuccess:e,touched:g[b.id],setTouched:f,unsetError:q,error:p,pages:i,prevStep:j,nextStep:k,isNextDisabled:l,hideField:!!c[b.id]&&c[b.id].hideField,saveStateToHtmlField:!("html"!==b.type||-1===b.cssClass.indexOf("set-state"))&&{formValues:c,saveStateToHtmlField:m},styledComponents:n,cssClass:A,setFocusClass:function setFocusClass(a){a?-1===A.indexOf(" filled")&&B("".concat(A," filled")):B(A.replace(" filled",""))},component:o&&(o[b.id]||o[b.cssClass]),dropzoneText:r,formatChars:s})},_default=RenderField;exports["default"]=_default;