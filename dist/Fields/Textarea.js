"use strict";var _react=_interopRequireDefault(require("react"));Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}var _default=function(a){var b=a.field,c=a.value,d=a.validationMessage,e=a.touched,f=a.setTouched,g=a.hideField,h=a.updateForm,i=a.styledComponents,j=a.error,k=a.unsetError,l=a.setFocusClass,m=a.cssClass,n=_objectWithoutProperties(a,["field","value","validationMessage","touched","setTouched","hideField","updateForm","styledComponents","error","unsetError","setFocusClass","cssClass"]),o=b.id,p=b.formId,q=b.type,r=b.label,s=b.placeholder,t=b.isRequired,u=b.maxLength,v=b.description,w=b.descriptionPlacement,x=b.labelPlacement,y=b.width,z=b.customName,A=i||!1,B=A.Textarea,C=void 0===B?"textarea":B,D=A.Label,E=void 0===D?"label":D,F=A.Box,G=void 0===F?"div":F;return _react["default"].createElement(G,{width:y,className:d&&e||j?"form-field error ".concat(m):"form-field ".concat(m),style:{display:g?"none":void 0}},_react["default"].createElement("div",{className:q},_react["default"].createElement(E,{htmlFor:"input_".concat(p,"_").concat(o),className:"gf-label ".concat(x)},r,t?_react["default"].createElement("abbr",null,"*"):null),"above"===w&&v&&_react["default"].createElement("div",{className:"description"},v),_react["default"].createElement(C,{id:"input_".concat(p,"_").concat(o),name:z||"input_".concat(o),type:q,value:c?c:"",placeholder:s,maxLength:u,required:t,onChange:function onChange(a){h(a,b),k(o)},onBlur:function onBlur(a){h(a,b),f(o),l(""!==c)},onFocus:function onFocus(){return l(!0)},"aria-describedby":"error_".concat(p,"_").concat(o),"aria-invalid":!!d&&e||!!j}),"above"!==w&&v&&_react["default"].createElement("div",{className:"description"},v),(d&&e||j)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(p,"_").concat(o)},d||j)))};exports["default"]=_default;