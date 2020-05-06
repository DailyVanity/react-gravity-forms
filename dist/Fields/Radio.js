"use strict";var _react=_interopRequireWildcard(require("react"));Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return _getRequireWildcardCache=function(){return a},a}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var b=_getRequireWildcardCache();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c["default"]=a,b&&b.set(a,c),c}function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function formatMoney(a){var b=Math.abs,c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:2,d=2<arguments.length&&void 0!==arguments[2]?arguments[2]:".",e=3<arguments.length&&void 0!==arguments[3]?arguments[3]:",";try{c=b(c),c=isNaN(c)?2:c;var f=0>a?"-":"",g=parseInt(a=b(+a||0).toFixed(c)).toString(),h=3<g.length?g.length%3:0;return f+(h?g.substr(0,h)+e:"")+g.substr(h).replace(/(\d{3})(?=\d)/g,"$1".concat(e))+(c?d+b(a-g).toFixed(c).slice(2):"")}catch(a){console.log(a)}}var Radio=function(a){function b(){var a,c;_classCallCheck(this,b);for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=_possibleConstructorReturn(this,(a=_getPrototypeOf(b)).call.apply(a,[this].concat(e))),_defineProperty(_assertThisInitialized(c),"state",{otherValue:!1,inputValue:!1}),_defineProperty(_assertThisInitialized(c),"onFocus",function(a){var b=a.target.value,d=c.state,e=d.otherValue,f=d.inputValue;e===b&&(b=""),c.otherRadio.click(),c.otherRadio.checked=!0,c.setState({inputValue:b})}),_defineProperty(_assertThisInitialized(c),"onBlur",function(a){var b=a.target.value;""==b.replace(" ","")?(c.setState({inputValue:c.state.otherValue}),c.otherRadio.checked=!1):c.setState({inputValue:formatMoney(b)})}),_defineProperty(_assertThisInitialized(c),"onChange",function(a){var b=a.target.value;c.setState({inputValue:b})}),_defineProperty(_assertThisInitialized(c),"setFocus",function(){c.otherChoise.focus()}),c}return _inherits(b,a),_createClass(b,[{key:"render",value:function render(){var a=this,b=this.props,c=b.field,d=b.value,e=b.validationMessage,f=b.touched,g=b.setTouched,h=b.updateForm,i=b.hideField,j=b.styledComponents,k=b.error,l=b.unsetError,m=c.id,n=c.formId,o=c.type,p=c.label,q=c.cssClass,r=c.isRequired,s=c.choices,t=c.description,u=c.descriptionPlacement,v=c.labelPlacement,w=c.width,x=c.customName,y=c.otherPlaceholder,z=this.state.inputValue,A=j||!1,B=A.Radiogroup,C=void 0===B?"fieldset":B,D=A.Label,E=void 0===D?"legend":D,F=A.Box,G=void 0===F?"div":F,H=A.Input,I=void 0===H?"input":H;return _react["default"].createElement(G,{width:w,className:e&&f||k?"form-field error ".concat(q):"form-field ".concat(q),style:{display:i?"none":void 0}},_react["default"].createElement(C,{className:"radios"},_react["default"].createElement(E,{as:"legend",className:"group-label ".concat(v)},p,r?_react["default"].createElement("abbr",null,"*"):null),"above"===u&&t&&_react["default"].createElement("div",{className:"description"},t),s.map(function(a,b){return _react["default"].createElement("div",{className:o,key:a.value},_react["default"].createElement("input",{id:"input_".concat(n,"_").concat(m,"_").concat(b),type:"radio",name:x||"input_".concat(m),value:a.value,checked:d===a.value,onChange:function onChange(a){h(a,c),g(m),l(m)}}),_react["default"].createElement("label",{htmlFor:"input_".concat(n,"_").concat(m,"_").concat(b)},a.text))}),c.enableOtherChoice&&_react["default"].createElement("div",{className:"".concat(o," other-choise")},_react["default"].createElement("input",{id:"input_".concat(n,"_").concat(m,"_").concat(s.length),type:"radio",name:"input_".concat(m),value:z,onChange:function onChange(a){h(a,c),g(m),l(m)},ref:function ref(b){return a.otherRadio=b},onFocus:function onFocus(b){return a.setFocus(b)}}),_react["default"].createElement(I,{id:"input_".concat(n,"_").concat(m,"_").concat(s.length,"_other"),type:"text",placeholder:y||"Other",value:z||"",onFocus:function onFocus(b){return a.onFocus(b)},onBlur:function onBlur(b){h(b,c),a.onBlur(b)},onChange:function onChange(b){a.onChange(b),l(m)},ref:function ref(b){return a.otherChoise=b}})),"above"!==u&&t&&_react["default"].createElement("div",{className:"description"},t)),(e&&f||k)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(n,"_").concat(m)},e||k))}}]),b}(_react.Component),_default=Radio;exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvUmFkaW8uanN4Il0sIm5hbWVzIjpbImZvcm1hdE1vbmV5IiwiYW1vdW50IiwiTWF0aCIsImFicyIsImRlY2ltYWxDb3VudCIsImRlY2ltYWwiLCJ0aG91c2FuZHMiLCJpc05hTiIsIm5lZ2F0aXZlU2lnbiIsImkiLCJwYXJzZUludCIsInRvRml4ZWQiLCJ0b1N0cmluZyIsImoiLCJsZW5ndGgiLCJzdWJzdHIiLCJyZXBsYWNlIiwic2xpY2UiLCJlIiwiY29uc29sZSIsImxvZyIsIlJhZGlvIiwib3RoZXJWYWx1ZSIsImlucHV0VmFsdWUiLCJ2YWx1ZSIsInRhcmdldCIsInN0YXRlIiwib3RoZXJSYWRpbyIsImNsaWNrIiwiY2hlY2tlZCIsInNldFN0YXRlIiwib3RoZXJDaG9pc2UiLCJmb2N1cyIsInByb3BzIiwiZmllbGQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwidXBkYXRlRm9ybSIsImhpZGVGaWVsZCIsInN0eWxlZENvbXBvbmVudHMiLCJlcnJvciIsInVuc2V0RXJyb3IiLCJpZCIsImZvcm1JZCIsInR5cGUiLCJsYWJlbCIsImNzc0NsYXNzIiwiaXNSZXF1aXJlZCIsImNob2ljZXMiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJvdGhlclBsYWNlaG9sZGVyIiwiUmFkaW9ncm91cCIsIkxhYmVsIiwiQm94IiwiSW5wdXQiLCJkaXNwbGF5IiwibWFwIiwiY2hvaWNlIiwiZXZlbnQiLCJ0ZXh0IiwiZW5hYmxlT3RoZXJDaG9pY2UiLCJzZXRGb2N1cyIsIm9uRm9jdXMiLCJvbkJsdXIiLCJvbkNoYW5nZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6ImFBQUEscUQsNnZFQUVBLFFBQVNBLENBQUFBLFdBQVQsQ0FBcUJDLENBQXJCLENBQStFLE9BRTVEQyxJQUFJLENBQUNDLEdBRnVELENBQWxE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TCxDQUFjbkQsQ0FBZCxDQUhhLENBSWJ3QixDQUFVLENBQUNDLENBQUQsQ0FDWCxDQWZILENBZ0JFLEdBQUcsQ0FBRSxhQUFBekIsQ0FBQyxRQUFLLENBQUEsQ0FBSSxDQUFDYSxXQUFMLENBQW1CYixDQUF4QixDQWhCUixFQWRGLENBNUJKLENBOEQ0QixPQUF6QixHQUFBaUMsQ0FBb0IsRUFBZ0JELENBQXBDLEVBQW1ELHVDQUFLLFNBQVMsQ0FBQyxhQUFmLEVBQThCQSxDQUE5QixDQTlEdEQsQ0FURixDQXlFRyxDQUFFZixDQUFpQixFQUFJQyxDQUF0QixFQUFrQ0ssQ0FBbkMsR0FDQyx3Q0FBTSxTQUFTLENBQUMsZUFBaEIsQ0FBZ0MsRUFBRSxpQkFBV0csQ0FBWCxhQUFxQkQsQ0FBckIsQ0FBbEMsRUFDR1IsQ0FBaUIsRUFBSU0sQ0FEeEIsQ0ExRUosQ0FnRkgsQyxPQTVKaUI2QixnQixXQStKTGpELEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIGZvcm1hdE1vbmV5KGFtb3VudCwgZGVjaW1hbENvdW50ID0gMiwgZGVjaW1hbCA9IFwiLlwiLCB0aG91c2FuZHMgPSBcIixcIikge1xuICB0cnkge1xuICAgIGRlY2ltYWxDb3VudCA9IE1hdGguYWJzKGRlY2ltYWxDb3VudCk7XG4gICAgZGVjaW1hbENvdW50ID0gaXNOYU4oZGVjaW1hbENvdW50KSA/IDIgOiBkZWNpbWFsQ291bnQ7XG5cbiAgICBjb25zdCBuZWdhdGl2ZVNpZ24gPSBhbW91bnQgPCAwID8gXCItXCIgOiBcIlwiO1xuXG4gICAgY29uc3QgaSA9IHBhcnNlSW50KFxuICAgICAgKGFtb3VudCA9IE1hdGguYWJzKE51bWJlcihhbW91bnQpIHx8IDApLnRvRml4ZWQoZGVjaW1hbENvdW50KSlcbiAgICApLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgaiA9IGkubGVuZ3RoID4gMyA/IGkubGVuZ3RoICUgMyA6IDA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgbmVnYXRpdmVTaWduICtcbiAgICAgIChqID8gaS5zdWJzdHIoMCwgaikgKyB0aG91c2FuZHMgOiBcIlwiKSArXG4gICAgICBpLnN1YnN0cihqKS5yZXBsYWNlKC8oXFxkezN9KSg/PVxcZCkvZywgYCQxJHt0aG91c2FuZHN9YCkgK1xuICAgICAgKGRlY2ltYWxDb3VudFxuICAgICAgICA/IGRlY2ltYWwgK1xuICAgICAgICAgIE1hdGguYWJzKGFtb3VudCAtIGkpXG4gICAgICAgICAgICAudG9GaXhlZChkZWNpbWFsQ291bnQpXG4gICAgICAgICAgICAuc2xpY2UoMilcbiAgICAgICAgOiBcIlwiKVxuICAgICk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgfVxufVxuXG5jbGFzcyBSYWRpbyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG90aGVyVmFsdWU6IGZhbHNlLFxuICAgIGlucHV0VmFsdWU6IGZhbHNlXG4gIH07XG5cbiAgb25Gb2N1cyA9IGUgPT4ge1xuICAgIGxldCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBjb25zdCB7IG90aGVyVmFsdWUsIGlucHV0VmFsdWUgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAob3RoZXJWYWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHZhbHVlID0gXCJcIjtcbiAgICB9XG4gICAgdGhpcy5vdGhlclJhZGlvLmNsaWNrKCk7XG4gICAgdGhpcy5vdGhlclJhZGlvLmNoZWNrZWQgPSB0cnVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBvbkJsdXIgPSBlID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBpZiAodmFsdWUucmVwbGFjZShcIiBcIiwgXCJcIikgPT0gXCJcIikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IHRoaXMuc3RhdGUub3RoZXJWYWx1ZSB9KTtcbiAgICAgIHRoaXMub3RoZXJSYWRpby5jaGVja2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiBmb3JtYXRNb25leSh2YWx1ZSkgfSk7XG4gICAgfVxuICB9O1xuXG4gIG9uQ2hhbmdlID0gZSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogdmFsdWUgfSk7XG4gIH07XG5cbiAgc2V0Rm9jdXMgPSBlID0+IHtcbiAgICB0aGlzLm90aGVyQ2hvaXNlLmZvY3VzKCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZpZWxkLFxuICAgICAgdmFsdWUsXG4gICAgICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgICAgIHRvdWNoZWQsXG4gICAgICBzZXRUb3VjaGVkLFxuICAgICAgdXBkYXRlRm9ybSxcbiAgICAgIGhpZGVGaWVsZCxcbiAgICAgIHN0eWxlZENvbXBvbmVudHMsXG4gICAgICBlcnJvcixcbiAgICAgIHVuc2V0RXJyb3JcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIGZvcm1JZCxcbiAgICAgIHR5cGUsXG4gICAgICBsYWJlbCxcbiAgICAgIGNzc0NsYXNzLFxuICAgICAgaXNSZXF1aXJlZCxcbiAgICAgIGNob2ljZXMsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGRlc2NyaXB0aW9uUGxhY2VtZW50LFxuICAgICAgbGFiZWxQbGFjZW1lbnQsXG4gICAgICB3aWR0aCxcbiAgICAgIGN1c3RvbU5hbWUsXG4gICAgICBvdGhlclBsYWNlaG9sZGVyXG4gICAgfSA9IGZpZWxkO1xuICAgIGNvbnN0IHsgaW5wdXRWYWx1ZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHtcbiAgICAgIFJhZGlvZ3JvdXAgPSBcImZpZWxkc2V0XCIsXG4gICAgICBMYWJlbCA9IFwibGVnZW5kXCIsXG4gICAgICBCb3ggPSBcImRpdlwiLFxuICAgICAgSW5wdXQgPSBcImlucHV0XCJcbiAgICB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3JcbiAgICAgICAgICAgID8gYGZvcm0tZmllbGQgZXJyb3IgJHtjc3NDbGFzc31gXG4gICAgICAgICAgICA6IGBmb3JtLWZpZWxkICR7Y3NzQ2xhc3N9YFxuICAgICAgICB9XG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/IFwibm9uZVwiIDogdW5kZWZpbmVkIH19XG4gICAgICA+XG4gICAgICAgIDxSYWRpb2dyb3VwIGNsYXNzTmFtZT1cInJhZGlvc1wiPlxuICAgICAgICAgIDxMYWJlbCBhcz1cImxlZ2VuZFwiIGNsYXNzTmFtZT17YGdyb3VwLWxhYmVsICR7bGFiZWxQbGFjZW1lbnR9YH0+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICB7aXNSZXF1aXJlZCA/IDxhYmJyPio8L2FiYnI+IDogbnVsbH1cbiAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gXCJhYm92ZVwiICYmIGRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7Y2hvaWNlcy5tYXAoKGNob2ljZSwgaSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGV9IGtleT17Y2hvaWNlLnZhbHVlfT5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fJHtpfWB9XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lkfWB9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2Nob2ljZS52YWx1ZX1cbiAgICAgICAgICAgICAgICBjaGVja2VkPXt2YWx1ZSA9PT0gY2hvaWNlLnZhbHVlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICAgIHVuc2V0RXJyb3IoaWQpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9XyR7aX1gfT5cbiAgICAgICAgICAgICAgICB7Y2hvaWNlLnRleHR9XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7ZmllbGQuZW5hYmxlT3RoZXJDaG9pY2UgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3R5cGV9IG90aGVyLWNob2lzZWB9PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfV8ke2Nob2ljZXMubGVuZ3RofWB9XG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICBuYW1lPXtgaW5wdXRfJHtpZH1gfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICAgIHVuc2V0RXJyb3IoaWQpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgcmVmPXtlID0+ICh0aGlzLm90aGVyUmFkaW8gPSBlKX1cbiAgICAgICAgICAgICAgICBvbkZvY3VzPXtlID0+IHRoaXMuc2V0Rm9jdXMoZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9XyR7Y2hvaWNlcy5sZW5ndGh9X290aGVyYH1cbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e290aGVyUGxhY2Vob2xkZXIgfHwgXCJPdGhlclwifVxuICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgb25Gb2N1cz17ZSA9PiB0aGlzLm9uRm9jdXMoZSl9XG4gICAgICAgICAgICAgICAgb25CbHVyPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZSwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgdGhpcy5vbkJsdXIoZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAvLyB1cGRhdGVGb3JtKGUsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgIC8vIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZShlKTtcbiAgICAgICAgICAgICAgICAgIHVuc2V0RXJyb3IoaWQpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgcmVmPXtlID0+ICh0aGlzLm90aGVyQ2hvaXNlID0gZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCAhPT0gXCJhYm92ZVwiICYmIGRlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+fVxuICAgICAgICA8L1JhZGlvZ3JvdXA+XG4gICAgICAgIHsoKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yKSAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtmb3JtSWR9XyR7aWR9YH0+XG4gICAgICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2UgfHwgZXJyb3J9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSYWRpbztcbiJdfQ==