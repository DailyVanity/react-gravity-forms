"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends")),_objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireDefault(require("react")),_reactInputMask=_interopRequireDefault(require("react-input-mask")),_default=function(a){var b=a.field,c=a.value,d=a.validationMessage,e=a.touched,f=a.setTouched,g=a.updateForm,h=a.hideField,i=a.styledComponents,j=a.error,k=a.unsetError,l=a.setFocusClass,m=a.cssClass,n=a.formatChars,o=(0,_objectWithoutProperties2["default"])(a,["field","value","validationMessage","touched","setTouched","updateForm","hideField","styledComponents","error","unsetError","setFocusClass","cssClass","formatChars"]),p=b.id,q=b.formId,r=b.type,s=b.label,t=b.placeholder,u=b.isRequired,v=b.maxLength,w=b.description,x=b.descriptionPlacement,y=b.labelPlacement,z=b.width,A=b.customName,B=b.inputMask,C=b.inputMaskValue,D=i||!1,E=D.Input,F=void 0===E?"input":E,G=D.Label,H=void 0===G?"label":G,I=D.Box,J=void 0===I?"div":I;return _react["default"].createElement(J,{width:z,className:d&&e||j?"form-field error ".concat(m):"form-field ".concat(m),style:{display:h?"none":void 0}},_react["default"].createElement("div",{className:r},_react["default"].createElement(H,{htmlFor:"input_".concat(q,"_").concat(p),className:"gf-label ".concat(y)},s,u?_react["default"].createElement("abbr",null,"*"):null),"above"===x&&w&&_react["default"].createElement("div",{className:"description"},w),_react["default"].createElement(_reactInputMask["default"],{formatChars:n,value:c?c:"",defaultValue:c?c:"",mask:B&&C,onChange:function onChange(a){g(a,b),k(p)},onBlur:function onBlur(a){g(a,b,!0),f(p),l(""!==c)},onFocus:function onFocus(){return l(!0)}},function(a){return _react["default"].createElement(F,(0,_extends2["default"])({},a,{id:"input_".concat(q,"_").concat(p),name:A||"input_".concat(p),type:r,placeholder:t,maxLength:v,required:u,"aria-label":s,"aria-describedby":"error_".concat(q,"_").concat(p),"aria-invalid":!!d&&e||!!j}))}),"above"!==x&&w&&_react["default"].createElement("div",{className:"description"},w),(d&&e||j)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(q,"_").concat(p)},d||j)))};exports["default"]=_default;