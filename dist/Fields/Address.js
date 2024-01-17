"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireWildcard(require("react")),_reactSelect=_interopRequireDefault(require("react-select")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel")),_jsxRuntime=require("react/jsx-runtime");function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(b,c){if(!c&&b&&b.__esModule)return b;if(null===b||"object"!=typeof b&&"function"!=typeof b)return{default:b};var d=_getRequireWildcardCache(c);if(d&&d.has(b))return d.get(b);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in b)if("default"!=a&&Object.prototype.hasOwnProperty.call(b,a)){var g=f?Object.getOwnPropertyDescriptor(b,a):null;g&&(g.get||g.set)?Object.defineProperty(e,a,g):e[a]=b[a]}return e.default=b,d&&d.set(b,e),e}var _default=({field:a,value:b,validationMessage:c,touched:d,setTouched:e,hideField:f,updateForm:g,styledComponents:h,error:i,unsetError:j,setFocusClass:k,cssClass:l,language:m,...n})=>{function o(){Promise.resolve().then(()=>_interopRequireWildcard(require("i18n-iso-countries"))).then(a=>{a.registerLocale(require(`i18n-iso-countries/langs/${m?m:"en"}.json`));const b=Object.values(a.getNames(m?m:"en",{select:"official"})).map(b=>b).sort((c,a)=>c.localeCompare(a));D(b)}).catch(a=>console.log(a))}const{id:p,formId:q,type:r,label:s,placeholder:t,isRequired:u,inputs:v,maxLength:w,description:x,descriptionPlacement:y,labelPlacement:z,width:A,customName:B}=a,[C,D]=(0,_react.useState)([]),{Input:F="input",Label:G="label",Box:H="div",ReactSelect:E}=h||!1,I=E||_reactSelect.default,J=b=>{const c=b&&b.target?b:{target:{value:b}};g(c,a)};return(0,_react.useEffect)(()=>{o()},[]),(0,_jsxRuntime.jsx)(H,{width:A,className:c&&d||i?`form-field error ${l}`:`form-field ${l}`,style:{display:f?"none":void 0},children:null===v||void 0===v?void 0:v.map((f,l)=>!f.isHidden&&(0,_jsxRuntime.jsxs)("div",{className:r,children:[(0,_jsxRuntime.jsx)(_InputLabel.default,{formId:q,id:f.id,label:f.label,labelPlacement:z,isRequired:u,styledComponent:h}),"above"===y&&x&&(0,_jsxRuntime.jsx)("div",{className:"description",dangerouslySetInnerHTML:{__html:x}}),5===l&&C?(0,_jsxRuntime.jsx)(I,{onChange:a=>{J(a),j(f.id)},onBlur:c=>{g(c,a),e(f.id),k(""!==b)},onFocus:()=>k(!0),options:C.map(a=>({label:a,value:a})),children:C.map(a=>(0,_jsxRuntime.jsx)("option",{value:a,children:a}))}):(0,_jsxRuntime.jsx)(F,{id:`input_${q}_${f.id}`,name:B||`input_${f.id}`,type:r,value:b?b[f.id]:"",placeholder:f.placeholder,maxLength:w,required:u,onChange:b=>{g(b,a,f.id),j(f.id)},onBlur:c=>{g(c,a),e(f.id),k(""!==b)},onFocus:()=>k(!0),"aria-label":f.label,"aria-describedby":`error_${q}_${f.id}`,"aria-invalid":!!c&&d||!!i},f.id),"above"!==y&&x&&(0,_jsxRuntime.jsx)("div",{className:"description",dangerouslySetInnerHTML:{__html:x}}),(c&&d||i)&&(0,_jsxRuntime.jsx)("span",{className:"error-message",id:`error_${q}_${p}`,children:c||i})]},f.id))})};exports.default=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGVmYXVsdCIsImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwiaGlkZUZpZWxkIiwidXBkYXRlRm9ybSIsInN0eWxlZENvbXBvbmVudHMiLCJlcnJvciIsInVuc2V0RXJyb3IiLCJzZXRGb2N1c0NsYXNzIiwiY3NzQ2xhc3MiLCJsYW5ndWFnZSIsInByb3BzIiwiZ2V0Q291bnRyaWVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiY291bnRyaWVzIiwicmVnaXN0ZXJMb2NhbGUiLCJuYW1lcyIsIk9iamVjdCIsInZhbHVlcyIsImdldE5hbWVzIiwic2VsZWN0IiwibWFwIiwiYSIsInNvcnQiLCJiIiwibG9jYWxlQ29tcGFyZSIsInNldE5hbWVzIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImlzUmVxdWlyZWQiLCJpbnB1dHMiLCJtYXhMZW5ndGgiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJjb3VudHJ5TmFtZXMiLCJ1c2VTdGF0ZSIsIklucHV0IiwiTGFiZWwiLCJCb3giLCJSZWFjdFNlbGVjdCIsIlJTZWxlY3QiLCJTZWxlY3QiLCJoYW5kbGVDaGFuZ2UiLCJvcHRpb24iLCJldmVudCIsInRhcmdldCIsInVzZUVmZmVjdCIsIl9qc3hSdW50aW1lIiwianN4IiwiSCIsImNsYXNzTmFtZSIsInN0eWxlIiwiZGlzcGxheSIsImNoaWxkcmVuIiwiaW5wdXQiLCJrZXkiLCJpc0hpZGRlbiIsImpzeHMiLCJfSW5wdXRMYWJlbCIsImRlZmF1bHQiLCJzdHlsZWRDb21wb25lbnQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIkkiLCJvbkNoYW5nZSIsIm9uQmx1ciIsIm9uRm9jdXMiLCJvcHRpb25zIiwiaXRlbSIsImNvdW50cnkiLCJGIiwibmFtZSIsInJlcXVpcmVkIiwiXCJhcmlhLWxhYmVsXCIiLCJcImFyaWEtZGVzY3JpYmVkYnlcIiIsIlwiYXJpYS1pbnZhbGlkXCIiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL0ZpZWxkcy9BZGRyZXNzLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0XCI7XG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tIFwiLi4vRm9ybUVsZW1lbnRzL0lucHV0TGFiZWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgdG91Y2hlZCxcbiAgc2V0VG91Y2hlZCxcbiAgaGlkZUZpZWxkLFxuICB1cGRhdGVGb3JtLFxuICBzdHlsZWRDb21wb25lbnRzLFxuICBlcnJvcixcbiAgdW5zZXRFcnJvcixcbiAgc2V0Rm9jdXNDbGFzcyxcbiAgY3NzQ2xhc3MsXG4gIGxhbmd1YWdlLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgZm9ybUlkLFxuICAgIHR5cGUsXG4gICAgbGFiZWwsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgaXNSZXF1aXJlZCxcbiAgICBpbnB1dHMsXG4gICAgbWF4TGVuZ3RoLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGRlc2NyaXB0aW9uUGxhY2VtZW50LFxuICAgIGxhYmVsUGxhY2VtZW50LFxuICAgIHdpZHRoLFxuICAgIGN1c3RvbU5hbWUsXG4gIH0gPSBmaWVsZDtcblxuICBjb25zdCBbY291bnRyeU5hbWVzLCBzZXROYW1lc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgZnVuY3Rpb24gZ2V0Q291bnRyaWVzKCkge1xuICAgIC8vIER5bmFtaWMgaW1wb3J0XG4gICAgaW1wb3J0KFwiaTE4bi1pc28tY291bnRyaWVzXCIpXG4gICAgICAudGhlbihjb3VudHJpZXMgPT4ge1xuICAgICAgICBjb3VudHJpZXMucmVnaXN0ZXJMb2NhbGUoXG4gICAgICAgICAgcmVxdWlyZShgaTE4bi1pc28tY291bnRyaWVzL2xhbmdzLyR7bGFuZ3VhZ2UgPyBsYW5ndWFnZSA6IFwiZW5cIn0uanNvbmApXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgbmFtZXMgPSBPYmplY3QudmFsdWVzKFxuICAgICAgICAgIGNvdW50cmllcy5nZXROYW1lcyhsYW5ndWFnZSA/IGxhbmd1YWdlIDogXCJlblwiLCB7IHNlbGVjdDogXCJvZmZpY2lhbFwiIH0pXG4gICAgICAgIClcbiAgICAgICAgICAubWFwKGEgPT4gYSlcbiAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5sb2NhbGVDb21wYXJlKGIpKTtcblxuICAgICAgICBzZXROYW1lcyhuYW1lcyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gIH1cblxuICBjb25zdCB7XG4gICAgSW5wdXQgPSBcImlucHV0XCIsXG4gICAgTGFiZWwgPSBcImxhYmVsXCIsXG4gICAgQm94ID0gXCJkaXZcIixcbiAgICBSZWFjdFNlbGVjdCxcbiAgfSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG5cbiAgY29uc3QgUlNlbGVjdCA9IFJlYWN0U2VsZWN0IHx8IFNlbGVjdDtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBvcHRpb24gPT4ge1xuICAgIGNvbnN0IGV2ZW50ID1cbiAgICAgIG9wdGlvbiAmJiBvcHRpb24udGFyZ2V0XG4gICAgICAgID8gb3B0aW9uXG4gICAgICAgIDoge1xuICAgICAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBvcHRpb24sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH07XG4gICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0Q291bnRyaWVzKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvclxuICAgICAgICAgID8gYGZvcm0tZmllbGQgZXJyb3IgJHtjc3NDbGFzc31gXG4gICAgICAgICAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgIH1cbiAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/IFwibm9uZVwiIDogdW5kZWZpbmVkIH19XG4gICAgPlxuICAgICAge2lucHV0cz8ubWFwKFxuICAgICAgICAoaW5wdXQsIGtleSkgPT5cbiAgICAgICAgICAhaW5wdXQuaXNIaWRkZW4gJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGV9IGtleT17aW5wdXQuaWR9PlxuICAgICAgICAgICAgICA8SW5wdXRMYWJlbFxuICAgICAgICAgICAgICAgIGZvcm1JZD17Zm9ybUlkfVxuICAgICAgICAgICAgICAgIGlkPXtpbnB1dC5pZH1cbiAgICAgICAgICAgICAgICBsYWJlbD17aW5wdXQubGFiZWx9XG4gICAgICAgICAgICAgICAgbGFiZWxQbGFjZW1lbnQ9e2xhYmVsUGxhY2VtZW50fVxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgICAgICAgc3R5bGVkQ29tcG9uZW50PXtzdHlsZWRDb21wb25lbnRzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09IFwiYWJvdmVcIiAmJiBkZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkZXNjcmlwdGlvbiB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtrZXkgPT09IDUgJiYgY291bnRyeU5hbWVzID8gKFxuICAgICAgICAgICAgICAgIDxSU2VsZWN0XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UoZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB1bnNldEVycm9yKGlucHV0LmlkKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlucHV0LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0Rm9jdXNDbGFzcyh2YWx1ZSAhPT0gXCJcIik7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0Rm9jdXNDbGFzcyh0cnVlKX1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NvdW50cnlOYW1lcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGxhYmVsOiBpdGVtLCB2YWx1ZTogaXRlbSB9O1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2NvdW50cnlOYW1lcy5tYXAoY291bnRyeSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2NvdW50cnl9Pntjb3VudHJ5fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9SU2VsZWN0PlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpbnB1dC5pZH1gfVxuICAgICAgICAgICAgICAgICAga2V5PXtpbnB1dC5pZH1cbiAgICAgICAgICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aW5wdXQuaWR9YH1cbiAgICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17IXZhbHVlID8gXCJcIiA6IHZhbHVlW2lucHV0LmlkXX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtpbnB1dC5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17bWF4TGVuZ3RofVxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCwgaW5wdXQuaWQpO1xuICAgICAgICAgICAgICAgICAgICB1bnNldEVycm9yKGlucHV0LmlkKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlucHV0LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0Rm9jdXNDbGFzcyh2YWx1ZSAhPT0gXCJcIik7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0Rm9jdXNDbGFzcyh0cnVlKX1cbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9e2lucHV0LmxhYmVsfVxuICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17YGVycm9yXyR7Zm9ybUlkfV8ke2lucHV0LmlkfWB9XG4gICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9eyghIXZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8ICEhZXJyb3J9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ICE9PSBcImFib3ZlXCIgJiYgZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7KCh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvcikgJiYgKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7Zm9ybUlkfV8ke2lkfWB9PlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlIHx8IGVycm9yfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICl9XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuIl0sIm1hcHBpbmdzIjoicWtDQUllQSxDQUFDLENBQ2RDLEtBQUssQ0FBTEEsQ0FBSyxDQUNMQyxLQUFLLENBQUxBLENBQUssQ0FDTEMsaUJBQWlCLENBQWpCQSxDQUFpQixDQUNqQkMsT0FBTyxDQUFQQSxDQUFPLENBQ1BDLFVBQVUsQ0FBVkEsQ0FBVSxDQUNWQyxTQUFTLENBQVRBLENBQVMsQ0FDVEMsVUFBVSxDQUFWQSxD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