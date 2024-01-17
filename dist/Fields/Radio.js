"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_react=_interopRequireWildcard(require("react")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel")),_jsxRuntime=require("react/jsx-runtime");function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(b,c){if(!c&&b&&b.__esModule)return b;if(null===b||"object"!=typeof b&&"function"!=typeof b)return{default:b};var d=_getRequireWildcardCache(c);if(d&&d.has(b))return d.get(b);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in b)if("default"!=a&&Object.prototype.hasOwnProperty.call(b,a)){var g=f?Object.getOwnPropertyDescriptor(b,a):null;g&&(g.get||g.set)?Object.defineProperty(e,a,g):e[a]=b[a]}return e.default=b,d&&d.set(b,e),e}function formatMoney(a,b=2,c=".",d=","){var e=Math.abs;try{b=e(b),b=isNaN(b)?2:b;const f=0>a?"-":"",g=parseInt(a=e(+a||0).toFixed(b)).toString(),h=3<g.length?g.length%3:0;return f+(h?g.substr(0,h)+d:"")+g.substr(h).replace(/(\d{3})(?=\d)/g,`$1${d}`)+(b?c+e(a-g).toFixed(b).slice(2):"")}catch(a){}}class Radio extends _react.Component{constructor(...a){super(...a),(0,_defineProperty2.default)(this,"state",{otherValue:!1,inputValue:!1}),(0,_defineProperty2.default)(this,"onFocus",a=>{let{value:b}=a.target;const{otherValue:c,inputValue:d}=this.state;c===b&&(b=""),this.otherRadio.click(),this.otherRadio.checked=!0,this.setState({inputValue:b})}),(0,_defineProperty2.default)(this,"onBlur",a=>{const{value:b}=a.target;""==b.replace(" ","")?(this.setState({inputValue:this.state.otherValue}),this.otherRadio.checked=!1):this.setState({inputValue:formatMoney(b)})}),(0,_defineProperty2.default)(this,"onChange",a=>{const{value:b}=a.target;this.setState({inputValue:b})}),(0,_defineProperty2.default)(this,"setFocus",()=>{this.otherChoise.focus()})}render(){const{field:a,value:b,validationMessage:c,touched:d,setTouched:e,updateForm:f,hideField:g,styledComponents:h,error:i,unsetError:j}=this.props,{id:k,formId:l,type:m,label:n,cssClass:o,isRequired:p,choices:q,description:r,descriptionPlacement:s,labelPlacement:t,width:u,customName:v,otherPlaceholder:w}=a,{inputValue:x}=this.state,{Radiogroup:y="fieldset",Label:z="legend",Box:A="div",Input:B="input"}=h||!1;return(0,_jsxRuntime.jsxs)(A,{width:u,className:c&&d||i?`form-field error ${o}`:`form-field ${o}`,style:{display:g?"none":void 0},children:[(0,_jsxRuntime.jsxs)(y,{className:"radios",children:[(0,_jsxRuntime.jsx)(_InputLabel.default,{formId:l,id:k,label:n,labelPlacement:t,isRequired:p,styledComponent:h}),"above"===s&&r&&(0,_jsxRuntime.jsx)("div",{className:"description",dangerouslySetInnerHTML:{__html:r}}),q.map((c,d)=>(0,_jsxRuntime.jsxs)("div",{className:m,children:[(0,_jsxRuntime.jsx)("input",{id:`input_${l}_${k}_${d}`,type:"radio",name:v||`input_${k}`,value:c.value,checked:b===c.value,onChange:b=>{f(b,a),e(k),j(k)}}),(0,_jsxRuntime.jsx)("label",{htmlFor:`input_${l}_${k}_${d}`,children:c.text})]},c.value)),a.enableOtherChoice&&(0,_jsxRuntime.jsxs)("div",{className:`${m} other-choise`,children:[(0,_jsxRuntime.jsx)("input",{id:`input_${l}_${k}_${q.length}`,type:"radio",name:`input_${k}`,value:x,onChange:b=>{f(b,a),e(k),j(k)},ref:a=>this.otherRadio=a,onFocus:a=>this.setFocus(a)}),(0,_jsxRuntime.jsx)(B,{id:`input_${l}_${k}_${q.length}_other`,type:"text",placeholder:w||"Other",value:x||"",onFocus:a=>this.onFocus(a),onBlur:b=>{f(b,a),this.onBlur(b)},onChange:a=>{this.onChange(a),j(k)},ref:a=>this.otherChoise=a})]}),"above"!==s&&r&&(0,_jsxRuntime.jsx)("div",{className:"description",dangerouslySetInnerHTML:{__html:r}})]}),(c&&d||i)&&(0,_jsxRuntime.jsx)("span",{className:"error-message",id:`error_${l}_${k}`,children:c||i})]})}}var _default=exports.default=Radio;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJmb3JtYXRNb25leSIsImFtb3VudCIsImRlY2ltYWxDb3VudCIsImRlY2ltYWwiLCJ0aG91c2FuZHMiLCJlIiwiTWF0aCIsImFicyIsImlzTmFOIiwibmVnYXRpdmVTaWduIiwiaSIsInBhcnNlSW50IiwidG9GaXhlZCIsInRvU3RyaW5nIiwiaiIsImxlbmd0aCIsInN1YnN0ciIsInJlcGxhY2UiLCJzbGljZSIsIlJhZGlvIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJhIiwiX2RlZmluZVByb3BlcnR5MiIsImRlZmF1bHQiLCJvdGhlclZhbHVlIiwiaW5wdXRWYWx1ZSIsInZhbHVlIiwidGFyZ2V0Iiwic3RhdGUiLCJvdGhlclJhZGlvIiwiY2xpY2siLCJjaGVja2VkIiwic2V0U3RhdGUiLCJvdGhlckNob2lzZSIsImZvY3VzIiwicmVuZGVyIiwiZmllbGQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwidXBkYXRlRm9ybSIsImhpZGVGaWVsZCIsInN0eWxlZENvbXBvbmVudHMiLCJlcnJvciIsInVuc2V0RXJyb3IiLCJwcm9wcyIsImlkIiwiZm9ybUlkIiwidHlwZSIsImxhYmVsIiwiY3NzQ2xhc3MiLCJpc1JlcXVpcmVkIiwiY2hvaWNlcyIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiY3VzdG9tTmFtZSIsIm90aGVyUGxhY2Vob2xkZXIiLCJSYWRpb2dyb3VwIiwiTGFiZWwiLCJCb3giLCJJbnB1dCIsIl9qc3hSdW50aW1lIiwianN4cyIsIkEiLCJjbGFzc05hbWUiLCJzdHlsZSIsImRpc3BsYXkiLCJjaGlsZHJlbiIsInkiLCJqc3giLCJfSW5wdXRMYWJlbCIsInN0eWxlZENvbXBvbmVudCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwibWFwIiwiY2hvaWNlIiwibmFtZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJodG1sRm9yIiwidGV4dCIsImVuYWJsZU90aGVyQ2hvaWNlIiwicmVmIiwib25Gb2N1cyIsInNldEZvY3VzIiwiQiIsInBsYWNlaG9sZGVyIiwib25CbHVyIiwiX2RlZmF1bHQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL0ZpZWxkcy9SYWRpby5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IElucHV0TGFiZWwgZnJvbSBcIi4uL0Zvcm1FbGVtZW50cy9JbnB1dExhYmVsXCI7XG5cbmZ1bmN0aW9uIGZvcm1hdE1vbmV5KGFtb3VudCwgZGVjaW1hbENvdW50ID0gMiwgZGVjaW1hbCA9IFwiLlwiLCB0aG91c2FuZHMgPSBcIixcIikge1xuICB0cnkge1xuICAgIGRlY2ltYWxDb3VudCA9IE1hdGguYWJzKGRlY2ltYWxDb3VudCk7XG4gICAgZGVjaW1hbENvdW50ID0gaXNOYU4oZGVjaW1hbENvdW50KSA/IDIgOiBkZWNpbWFsQ291bnQ7XG5cbiAgICBjb25zdCBuZWdhdGl2ZVNpZ24gPSBhbW91bnQgPCAwID8gXCItXCIgOiBcIlwiO1xuXG4gICAgY29uc3QgaSA9IHBhcnNlSW50KFxuICAgICAgKGFtb3VudCA9IE1hdGguYWJzKE51bWJlcihhbW91bnQpIHx8IDApLnRvRml4ZWQoZGVjaW1hbENvdW50KSlcbiAgICApLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgaiA9IGkubGVuZ3RoID4gMyA/IGkubGVuZ3RoICUgMyA6IDA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgbmVnYXRpdmVTaWduICtcbiAgICAgIChqID8gaS5zdWJzdHIoMCwgaikgKyB0aG91c2FuZHMgOiBcIlwiKSArXG4gICAgICBpLnN1YnN0cihqKS5yZXBsYWNlKC8oXFxkezN9KSg/PVxcZCkvZywgYCQxJHt0aG91c2FuZHN9YCkgK1xuICAgICAgKGRlY2ltYWxDb3VudFxuICAgICAgICA/IGRlY2ltYWwgK1xuICAgICAgICAgIE1hdGguYWJzKGFtb3VudCAtIGkpXG4gICAgICAgICAgICAudG9GaXhlZChkZWNpbWFsQ291bnQpXG4gICAgICAgICAgICAuc2xpY2UoMilcbiAgICAgICAgOiBcIlwiKVxuICAgICk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59XG5cbmNsYXNzIFJhZGlvIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgb3RoZXJWYWx1ZTogZmFsc2UsXG4gICAgaW5wdXRWYWx1ZTogZmFsc2UsXG4gIH07XG5cbiAgb25Gb2N1cyA9IGUgPT4ge1xuICAgIGxldCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBjb25zdCB7IG90aGVyVmFsdWUsIGlucHV0VmFsdWUgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAob3RoZXJWYWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHZhbHVlID0gXCJcIjtcbiAgICB9XG4gICAgdGhpcy5vdGhlclJhZGlvLmNsaWNrKCk7XG4gICAgdGhpcy5vdGhlclJhZGlvLmNoZWNrZWQgPSB0cnVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBvbkJsdXIgPSBlID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBpZiAodmFsdWUucmVwbGFjZShcIiBcIiwgXCJcIikgPT0gXCJcIikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWU6IHRoaXMuc3RhdGUub3RoZXJWYWx1ZSB9KTtcbiAgICAgIHRoaXMub3RoZXJSYWRpby5jaGVja2VkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiBmb3JtYXRNb25leSh2YWx1ZSkgfSk7XG4gICAgfVxuICB9O1xuXG4gIG9uQ2hhbmdlID0gZSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogdmFsdWUgfSk7XG4gIH07XG5cbiAgc2V0Rm9jdXMgPSBlID0+IHtcbiAgICB0aGlzLm90aGVyQ2hvaXNlLmZvY3VzKCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZpZWxkLFxuICAgICAgdmFsdWUsXG4gICAgICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgICAgIHRvdWNoZWQsXG4gICAgICBzZXRUb3VjaGVkLFxuICAgICAgdXBkYXRlRm9ybSxcbiAgICAgIGhpZGVGaWVsZCxcbiAgICAgIHN0eWxlZENvbXBvbmVudHMsXG4gICAgICBlcnJvcixcbiAgICAgIHVuc2V0RXJyb3IsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBmb3JtSWQsXG4gICAgICB0eXBlLFxuICAgICAgbGFiZWwsXG4gICAgICBjc3NDbGFzcyxcbiAgICAgIGlzUmVxdWlyZWQsXG4gICAgICBjaG9pY2VzLFxuICAgICAgZGVzY3JpcHRpb24sXG4gICAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICAgIGxhYmVsUGxhY2VtZW50LFxuICAgICAgd2lkdGgsXG4gICAgICBjdXN0b21OYW1lLFxuICAgICAgb3RoZXJQbGFjZWhvbGRlcixcbiAgICB9ID0gZmllbGQ7XG4gICAgY29uc3QgeyBpbnB1dFZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3Qge1xuICAgICAgUmFkaW9ncm91cCA9IFwiZmllbGRzZXRcIixcbiAgICAgIExhYmVsID0gXCJsZWdlbmRcIixcbiAgICAgIEJveCA9IFwiZGl2XCIsXG4gICAgICBJbnB1dCA9IFwiaW5wdXRcIixcbiAgICB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3JcbiAgICAgICAgICAgID8gYGZvcm0tZmllbGQgZXJyb3IgJHtjc3NDbGFzc31gXG4gICAgICAgICAgICA6IGBmb3JtLWZpZWxkICR7Y3NzQ2xhc3N9YFxuICAgICAgICB9XG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/IFwibm9uZVwiIDogdW5kZWZpbmVkIH19XG4gICAgICA+XG4gICAgICAgIDxSYWRpb2dyb3VwIGNsYXNzTmFtZT1cInJhZGlvc1wiPlxuICAgICAgICAgIDxJbnB1dExhYmVsXG4gICAgICAgICAgICBmb3JtSWQ9e2Zvcm1JZH1cbiAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgIGxhYmVsUGxhY2VtZW50PXtsYWJlbFBsYWNlbWVudH1cbiAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgICBzdHlsZWRDb21wb25lbnQ9e3N0eWxlZENvbXBvbmVudHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09IFwiYWJvdmVcIiAmJiBkZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkZXNjcmlwdGlvbiB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtjaG9pY2VzLm1hcCgoY2hvaWNlLCBpKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZX0ga2V5PXtjaG9pY2UudmFsdWV9PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfV8ke2l9YH1cbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9YH1cbiAgICAgICAgICAgICAgICB2YWx1ZT17Y2hvaWNlLnZhbHVlfVxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3ZhbHVlID09PSBjaG9pY2UudmFsdWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICAgICAgdW5zZXRFcnJvcihpZCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fJHtpfWB9PlxuICAgICAgICAgICAgICAgIHtjaG9pY2UudGV4dH1cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICAgIHtmaWVsZC5lbmFibGVPdGhlckNob2ljZSAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7dHlwZX0gb3RoZXItY2hvaXNlYH0+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9XyR7Y2hvaWNlcy5sZW5ndGh9YH1cbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIG5hbWU9e2BpbnB1dF8ke2lkfWB9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICAgICAgdW5zZXRFcnJvcihpZCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICByZWY9e2UgPT4gKHRoaXMub3RoZXJSYWRpbyA9IGUpfVxuICAgICAgICAgICAgICAgIG9uRm9jdXM9e2UgPT4gdGhpcy5zZXRGb2N1cyhlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1fJHtjaG9pY2VzLmxlbmd0aH1fb3RoZXJgfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17b3RoZXJQbGFjZWhvbGRlciB8fCBcIk90aGVyXCJ9XG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWUgfHwgXCJcIn1cbiAgICAgICAgICAgICAgICBvbkZvY3VzPXtlID0+IHRoaXMub25Gb2N1cyhlKX1cbiAgICAgICAgICAgICAgICBvbkJsdXI9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybShlLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICB0aGlzLm9uQmx1cihlKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZUZvcm0oZSwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgLy8gc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKGUpO1xuICAgICAgICAgICAgICAgICAgdW5zZXRFcnJvcihpZCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICByZWY9e2UgPT4gKHRoaXMub3RoZXJDaG9pc2UgPSBlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ICE9PSBcImFib3ZlXCIgJiYgZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9SYWRpb2dyb3VwPlxuICAgICAgICB7KCh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvcikgJiYgKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7Zm9ybUlkfV8ke2lkfWB9PlxuICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlIHx8IGVycm9yfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmFkaW87XG4iXSwibWFwcGluZ3MiOiJxbENBR0EsUUFBUyxDQUFBQSxXQUFXQSxDQUFDQyxDQUFNLENBQUVDLENBQVksQ0FBRyxDQUFDLENBQUVDLENBQU8sQ0FBRyxHQUFHLENBQUVDLENBQVMsQ0FBRyxHQUFHLENBQUUsS0FBQUMsQ0FBQSxDQUU1REMsSUFBSSxDQUFDQyxHQUFHLENBRHpCLEdBQUksQ0FDRkwsQ0FBWSxDQUFHRyxDQUFBLENBQVNILENBQVksQ0FBQyxDQUNyQ0EsQ0FBWSxDQUFHTSxLQUFLLENBQUNOLENBQVksQ0FBQyxDQUFHLENBQUMsQ0FBR0EsQ0FBWSxNQUUvQyxDQUFBTyxDQUFZLENBQVksQ0FBQyxDQUFWUixDQUFVLENBQUcsR0FBRyxDQUFHLEVBQUUsQ0FFcENTLENBQUMsQ0FBR0MsUUFBUSxDQUNmVixDQUFNLENBQUdJLENBQUEsQ0FBUyxDQUFPSixDQUFNLEVBQUssQ0FBQyxDQUFDLENBQUNXLE9BQU8sQ0FBQ1YsQ0FBWSxDQUM5RCxDQUFDLENBQUNXLFFBQVEsQ0FBQyxDQUFDLENBQ05DLENBQUMsQ0FBYyxD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