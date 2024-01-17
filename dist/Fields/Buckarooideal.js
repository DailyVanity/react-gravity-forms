"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireWildcard(require("react")),_reactSelect=_interopRequireDefault(require("react-select")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel")),_jsxRuntime=require("react/jsx-runtime");function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(b,c){if(!c&&b&&b.__esModule)return b;if(null===b||"object"!=typeof b&&"function"!=typeof b)return{default:b};var d=_getRequireWildcardCache(c);if(d&&d.has(b))return d.get(b);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in b)if("default"!=a&&Object.prototype.hasOwnProperty.call(b,a)){var g=f?Object.getOwnPropertyDescriptor(b,a):null;g&&(g.get||g.set)?Object.defineProperty(e,a,g):e[a]=b[a]}return e.default=b,d&&d.set(b,e),e}var _default=({field:a,value:b,validationMessage:c,touched:d,setTouched:e,setFocusClass:f,hideField:g,updateForm:h,styledComponents:i,error:j,cssClass:k,unsetError:l,...m})=>{const{id:n,formId:o,type:p,label:q,isRequired:r,choices:s,placeholder:t,description:u,descriptionPlacement:v,labelPlacement:w,width:x,customName:y}=a;let z="";const A=s.map(a=>{const b={value:a.value,label:a.text};return a.isSelected&&(z=b),b}),[B,C]=(0,_react.useState)(b||z),D=b=>{C(b);h({target:{value:b}},a)},E=()=>{h({target:{value:B}},a),e(n),f(B&&B.value)},{ReactSelect:F,Label:G="label",Box:H="div"}=i||!1,I=F||_reactSelect.default;return(0,_jsxRuntime.jsx)(H,{width:x,className:c&&d||j?`form-field error ${k}`:`form-field ${k}`,style:{display:g?"none":void 0},children:(0,_jsxRuntime.jsxs)("div",{className:p,children:[(0,_jsxRuntime.jsx)(_InputLabel.default,{formId:o,id:n,label:q,labelPlacement:w,isRequired:r,styledComponent:i}),"above"===v&&u&&(0,_jsxRuntime.jsx)("div",{className:"description",dangerouslySetInnerHTML:{__html:u}}),(0,_jsxRuntime.jsx)(I,{name:y||`input_${n}`,required:r,value:B&&B.value?B:"",onChange:b=>{D(b,a),l(n)},onBlur:()=>E(),onFocus:()=>f(!0),placeholder:t,options:A,className:"form-select",autoFocus:!1,inputId:`input_${o}_${n}`}),"above"!==v&&u&&(0,_jsxRuntime.jsx)("div",{className:"description",dangerouslySetInnerHTML:{__html:u}}),(c&&d||j)&&(0,_jsxRuntime.jsx)("span",{className:"error-message",id:`error_${o}_${n}`,children:c||j})]})})};exports.default=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGVmYXVsdCIsImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwic2V0Rm9jdXNDbGFzcyIsImhpZGVGaWVsZCIsInVwZGF0ZUZvcm0iLCJzdHlsZWRDb21wb25lbnRzIiwiZXJyb3IiLCJjc3NDbGFzcyIsInVuc2V0RXJyb3IiLCJwcm9wcyIsImlkIiwiZm9ybUlkIiwidHlwZSIsImxhYmVsIiwiaXNSZXF1aXJlZCIsImNob2ljZXMiLCJwbGFjZWhvbGRlciIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiY3VzdG9tTmFtZSIsInNlbGVjdGVkIiwib3B0aW9ucyIsIm1hcCIsImNob2ljZSIsIml0ZW0iLCJ0ZXh0IiwiaXNTZWxlY3RlZCIsInNlbGVjdGVkT3B0aW9uIiwic2VsZWN0T3B0aW9uIiwidXNlU3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJvcHRpb24iLCJ0YXJnZXQiLCJoYW5kbGVCbHVyIiwiUmVhY3RTZWxlY3QiLCJMYWJlbCIsIkJveCIsIlJTZWxlY3QiLCJTZWxlY3QiLCJfanN4UnVudGltZSIsImpzeCIsIkgiLCJjbGFzc05hbWUiLCJzdHlsZSIsImRpc3BsYXkiLCJjaGlsZHJlbiIsImpzeHMiLCJfSW5wdXRMYWJlbCIsImRlZmF1bHQiLCJzdHlsZWRDb21wb25lbnQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIkkiLCJuYW1lIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsIm9uQmx1ciIsIm9uRm9jdXMiLCJhdXRvRm9jdXMiLCJpbnB1dElkIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvQnVja2Fyb29pZGVhbC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3RcIjtcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gXCIuLi9Gb3JtRWxlbWVudHMvSW5wdXRMYWJlbFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIHZhbGlkYXRpb25NZXNzYWdlLFxuICB0b3VjaGVkLFxuICBzZXRUb3VjaGVkLFxuICBzZXRGb2N1c0NsYXNzLFxuICBoaWRlRmllbGQsXG4gIHVwZGF0ZUZvcm0sXG4gIHN0eWxlZENvbXBvbmVudHMsXG4gIGVycm9yLFxuICBjc3NDbGFzcyxcbiAgdW5zZXRFcnJvcixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGZvcm1JZCxcbiAgICB0eXBlLFxuICAgIGxhYmVsLFxuICAgIGlzUmVxdWlyZWQsXG4gICAgY2hvaWNlcyxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICBsYWJlbFBsYWNlbWVudCxcbiAgICB3aWR0aCxcbiAgICBjdXN0b21OYW1lLFxuICB9ID0gZmllbGQ7XG5cbiAgbGV0IHNlbGVjdGVkID0gXCJcIjtcbiAgLy8gTWFwIG9wdGlvbnNcbiAgY29uc3Qgb3B0aW9ucyA9IGNob2ljZXMubWFwKGNob2ljZSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IHtcbiAgICAgIHZhbHVlOiBjaG9pY2UudmFsdWUsXG4gICAgICBsYWJlbDogY2hvaWNlLnRleHQsXG4gICAgfTtcbiAgICBpZiAoY2hvaWNlLmlzU2VsZWN0ZWQpIHtcbiAgICAgIHNlbGVjdGVkID0gaXRlbTtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZW07XG4gIH0pO1xuICAvLyBIYW5kbGUgU3RhdGVcbiAgY29uc3QgW3NlbGVjdGVkT3B0aW9uLCBzZWxlY3RPcHRpb25dID0gdXNlU3RhdGUodmFsdWUgfHwgc2VsZWN0ZWQpO1xuICAvLyBIYW5kbGUgY2hhbmdlXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IG9wdGlvbiA9PiB7XG4gICAgc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgdmFsdWU6IG9wdGlvbixcbiAgICAgIH0sXG4gICAgfTtcbiAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gIH07XG4gIC8vIEhhbmRsZSBCbHVyXG4gIGNvbnN0IGhhbmRsZUJsdXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZXZlbnQgPSB7XG4gICAgICB0YXJnZXQ6IHtcbiAgICAgICAgdmFsdWU6IHNlbGVjdGVkT3B0aW9uLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICBzZXRGb2N1c0NsYXNzKHNlbGVjdGVkT3B0aW9uICYmIHNlbGVjdGVkT3B0aW9uLnZhbHVlKTtcbiAgfTtcbiAgY29uc3Qge1xuICAgIFJlYWN0U2VsZWN0LFxuICAgIExhYmVsID0gXCJsYWJlbFwiLFxuICAgIEJveCA9IFwiZGl2XCIsXG4gIH0gPSBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuXG4gIGNvbnN0IFJTZWxlY3QgPSBSZWFjdFNlbGVjdCB8fCBTZWxlY3Q7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICAodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3JcbiAgICAgICAgICA/IGBmb3JtLWZpZWxkIGVycm9yICR7Y3NzQ2xhc3N9YFxuICAgICAgICAgIDogYGZvcm0tZmllbGQgJHtjc3NDbGFzc31gXG4gICAgICB9XG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyBcIm5vbmVcIiA6IHVuZGVmaW5lZCB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfT5cbiAgICAgICAgPElucHV0TGFiZWxcbiAgICAgICAgICBmb3JtSWQ9e2Zvcm1JZH1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICAgIGxhYmVsUGxhY2VtZW50PXtsYWJlbFBsYWNlbWVudH1cbiAgICAgICAgICBpc1JlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgIHN0eWxlZENvbXBvbmVudD17c3R5bGVkQ29tcG9uZW50c31cbiAgICAgICAgLz5cbiAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSBcImFib3ZlXCIgJiYgZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8UlNlbGVjdFxuICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9YH1cbiAgICAgICAgICByZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRPcHRpb24gJiYgc2VsZWN0ZWRPcHRpb24udmFsdWUgPyBzZWxlY3RlZE9wdGlvbiA6IFwiXCJ9XG4gICAgICAgICAgb25DaGFuZ2U9e29wdGlvbiA9PiB7XG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2Uob3B0aW9uLCBmaWVsZCk7XG4gICAgICAgICAgICB1bnNldEVycm9yKGlkKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQmx1cj17KCkgPT4gaGFuZGxlQmx1cigpfVxuICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldEZvY3VzQ2xhc3ModHJ1ZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1zZWxlY3RcIlxuICAgICAgICAgIGF1dG9Gb2N1cz17ZmFsc2V9XG4gICAgICAgICAgLy8gc3R5bGVzPXtjdXN0b21TdHlsZXN9XG4gICAgICAgICAgaW5wdXRJZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfWB9XG4gICAgICAgIC8+XG4gICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCAhPT0gXCJhYm92ZVwiICYmIGRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgeygodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3IpICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfT5cbiAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSB8fCBlcnJvcn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXSwibWFwcGluZ3MiOiJxa0NBSWVBLENBQUMsQ0FDZEMsS0FBSyxDQUFMQSxDQUFLLENBQ0xDLEtBQUssQ0FBTEEsQ0FBSyxDQUNMQyxpQkFBaUIsQ0FBakJBLENBQWlCLENBQ2pCQyxPQUFPLENBQVBBLENBQU8sQ0FDUEMsVUFBVSxDQUFWQSxDQUFVLENBQ1ZDLGFBQWEsQ0FBYkEsQ0FBYSxDQUNiQyxTQUFTLENBQVRBLENBQVMsQ0FDVEMsVUFBVSxDQUFWQSxDQUFVLENBQ1ZDLGdCQUFnQixDQUFoQkEsQ0FBZ0IsQ0FDaEJDLEtBQUssQ0FBTEEsQ0FBSyxDQUNMQyxRQUFRLENBQVJBLENBQVEsQ0FDUkMsVUFBVSxDQUFWQSxDQUFVLENBQ1YsR0FBR0MsQ0FDTCxDQUFDLEdBQUssQ0FDSixLQUFNLENBQ0pDLEVBQUUs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