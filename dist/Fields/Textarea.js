<<<<<<< HEAD
"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireDefault(require("react")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel")),_default=function(a){var b=a.field,c=a.value,d=a.validationMessage,e=a.touched,f=a.setTouched,g=a.hideField,h=a.updateForm,i=a.styledComponents,j=a.error,k=a.unsetError,l=a.setFocusClass,m=a.cssClass,n=(0,_objectWithoutProperties2["default"])(a,["field","value","validationMessage","touched","setTouched","hideField","updateForm","styledComponents","error","unsetError","setFocusClass","cssClass"]),o=b.id,p=b.formId,q=b.type,r=b.label,s=b.placeholder,t=b.isRequired,u=b.maxLength,v=b.description,w=b.descriptionPlacement,x=b.labelPlacement,y=b.width,z=b.customName,A=i||!1,B=A.Textarea,C=void 0===B?"textarea":B,D=A.Label,E=void 0===D?"label":D,F=A.Box,G=void 0===F?"div":F,H=(n||{}).i18n;return _react["default"].createElement(G,{width:y,className:d&&e||j?"form-field error ".concat(m):"form-field ".concat(m),style:{display:g?"none":void 0}},_react["default"].createElement("div",{className:q},_react["default"].createElement(_InputLabel["default"],{formId:p,id:o,label:r,labelPlacement:x,isRequired:t,styledComponent:i}),"above"===w&&v&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:v}}),_react["default"].createElement(C,{id:"input_".concat(p,"_").concat(o),name:z||"input_".concat(o),type:q,value:c?c:"",placeholder:s,maxLength:u,required:t,onChange:function onChange(a){h(a,b),k(o)},onBlur:function onBlur(a){h(a,b),f(o),l(""!==c)},onFocus:function onFocus(){return l(!0)},"aria-describedby":"error_".concat(p,"_").concat(o),"aria-invalid":!!d&&e||!!j}),u&&0<u&&_react["default"].createElement("div",{className:"charleft"},H?"".concat(H.t("maxCharachters",{length:c.length||0,maxLength:u})):"".concat(c.length||0," of ").concat(u," max charachters")),"above"!==w&&v&&_react["default"].createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:v}}),(d&&e||j)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(p,"_").concat(o)},d||j)))};exports["default"]=_default;
=======
"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireDefault(require("react")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel")),_default=function(a){var b=a.field,c=a.value,d=a.validationMessage,e=a.touched,f=a.setTouched,g=a.hideField,h=a.updateForm,i=a.styledComponents,j=a.error,k=a.unsetError,l=a.setFocusClass,m=a.cssClass,n=(0,_objectWithoutProperties2["default"])(a,["field","value","validationMessage","touched","setTouched","hideField","updateForm","styledComponents","error","unsetError","setFocusClass","cssClass"]),o=b.id,p=b.formId,q=b.type,r=b.label,s=b.placeholder,t=b.isRequired,u=b.maxLength,v=b.description,w=b.descriptionPlacement,x=b.labelPlacement,y=b.width,z=b.customName,A=i||!1,B=A.Textarea,C=void 0===B?"textarea":B,D=A.Label,E=void 0===D?"label":D,F=A.Box,G=void 0===F?"div":F,H=(n||{}).i18n;return _react["default"].createElement(G,{width:y,className:d&&e||j?"form-field error ".concat(m):"form-field ".concat(m),style:{display:g?"none":void 0}},_react["default"].createElement("div",{className:q},_react["default"].createElement(_InputLabel["default"],{formId:p,id:o,label:r,labelPlacement:x,isRequired:t,styledComponent:i}),"above"===w&&v&&_react["default"].createElement("div",{className:"description"},v),_react["default"].createElement(C,{id:"input_".concat(p,"_").concat(o),name:z||"input_".concat(o),type:q,value:c?c:"",placeholder:s,maxLength:u,required:t,onChange:function onChange(a){h(a,b),k(o)},onBlur:function onBlur(a){h(a,b),f(o),l(""!==c)},onFocus:function onFocus(){return l(!0)},"aria-describedby":"error_".concat(p,"_").concat(o),"aria-invalid":!!d&&e||!!j}),u&&0<u&&_react["default"].createElement("div",{className:"charleft"},H?"".concat(H.t("maxCharachters",{length:c.length||0,maxLength:u})):"".concat(c.length||0," of ").concat(u," max charachters")),"above"!==w&&v&&_react["default"].createElement("div",{className:"description"},v),(d&&e||j)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(p,"_").concat(o)},d||j)))};exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvVGV4dGFyZWEuanN4Il0sIm5hbWVzIjpbImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwiaGlkZUZpZWxkIiwidXBkYXRlRm9ybSIsInN0eWxlZENvbXBvbmVudHMiLCJlcnJvciIsInVuc2V0RXJyb3IiLCJzZXRGb2N1c0NsYXNzIiwiY3NzQ2xhc3MiLCJwcm9wcyIsImlkIiwiZm9ybUlkIiwidHlwZSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJpc1JlcXVpcmVkIiwibWF4TGVuZ3RoIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblBsYWNlbWVudCIsImxhYmVsUGxhY2VtZW50Iiwid2lkdGgiLCJjdXN0b21OYW1lIiwiVGV4dGFyZWEiLCJMYWJlbCIsIkJveCIsImkxOG4iLCJkaXNwbGF5IiwiZXZlbnQiLCJ0IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoib2FBR2UsV0FjVCxJQWJKQSxDQUFBQSxDQWFJLEdBYkpBLEtBYUksQ0FaSkMsQ0FZSSxHQVpKQSxLQVlJLENBWEpDLENBV0ksR0FYSkEsaUJBV0ksQ0FWSkMsQ0FVSSxHQVZKQSxPQVVJLENBVEpDLENBU0ksR0FUSkEsVUFTSSxDQVJKQyxDQVFJLEdBUkpBLFNBUUksQ0FQSkMsQ0FPSSxHQVBKQSxVQU9JLENBTkpDLENBTUksR0FOSkEsZ0JBTUksQ0FMSkMsQ0FLSSxHQUxKQSxLQUtJLENBSkpDLENBSUksR0FKSkEsVUFJSSxDQUhKQyxDQUdJLEdBSEpBLGFBR0ksQ0FGSkMsQ0FFSSxHQUZKQSxRQUVJLENBRERDLENBQ0Msc01BRUZDLENBRkUsQ0FjQWIsQ0FkQSxDQUVGYSxFQUZFLENBR0ZDLENBSEUsQ0FjQWQsQ0FkQSxDQUdGYyxNQUhFLENBSUZDLENBSkUsQ0FjQWYsQ0FkQSxDQUlGZSxJQUpFLENBS0ZDLENBTEUsQ0FjQWhCLENBZEEsQ0FLRmdCLEtBTEUsQ0FNRkMsQ0FORSxDQWNBakIsQ0FkQSxDQU1G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QW9CLEVBQWdCRCxDQUFwQyxFQUNDLHVDQUFLLFNBQVMsQ0FBQyxhQUFmLEVBQThCQSxDQUE5QixDQTVDSixDQThDRyxDQUFFbEIsQ0FBaUIsRUFBSUMsQ0FBdEIsRUFBa0NLLENBQW5DLEdBQ0Msd0NBQU0sU0FBUyxDQUFDLGVBQWhCLENBQWdDLEVBQUUsaUJBQVdNLENBQVgsYUFBcUJELENBQXJCLENBQWxDLEVBQ0dYLENBQWlCLEVBQUlNLENBRHhCLENBL0NKLENBVEYsQ0ErREgsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICcuLi9Gb3JtRWxlbWVudHMvSW5wdXRMYWJlbCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gIHRvdWNoZWQsXG4gIHNldFRvdWNoZWQsXG4gIGhpZGVGaWVsZCxcbiAgdXBkYXRlRm9ybSxcbiAgc3R5bGVkQ29tcG9uZW50cyxcbiAgZXJyb3IsXG4gIHVuc2V0RXJyb3IsXG4gIHNldEZvY3VzQ2xhc3MsXG4gIGNzc0NsYXNzLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgZm9ybUlkLFxuICAgIHR5cGUsXG4gICAgbGFiZWwsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgaXNSZXF1aXJlZCxcbiAgICBtYXhMZW5ndGgsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZGVzY3JpcHRpb25QbGFjZW1lbnQsXG4gICAgbGFiZWxQbGFjZW1lbnQsXG4gICAgd2lkdGgsXG4gICAgY3VzdG9tTmFtZSxcbiAgfSA9IGZpZWxkO1xuXG4gIGNvbnN0IHsgVGV4dGFyZWEgPSAndGV4dGFyZWEnLCBMYWJlbCA9ICdsYWJlbCcsIEJveCA9ICdkaXYnIH0gPSBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuICBjb25zdCB7IGkxOG4gfSA9IHByb3BzIHx8IHt9O1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yXG4gICAgICAgICAgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWBcbiAgICAgICAgICA6IGBmb3JtLWZpZWxkICR7Y3NzQ2xhc3N9YFxuICAgICAgfVxuICAgICAgc3R5bGU9e3sgZGlzcGxheTogaGlkZUZpZWxkID8gJ25vbmUnIDogdW5kZWZpbmVkIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGV9PlxuICAgICAgICA8SW5wdXRMYWJlbFxuICAgICAgICAgIGZvcm1JZD17Zm9ybUlkfVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgICAgbGFiZWxQbGFjZW1lbnQ9e2xhYmVsUGxhY2VtZW50fVxuICAgICAgICAgIGlzUmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgc3R5bGVkQ29tcG9uZW50PXtzdHlsZWRDb21wb25lbnRzfVxuICAgICAgICAvPlxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09ICdhYm92ZScgJiYgZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9YH1cbiAgICAgICAgICBuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lkfWB9XG4gICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICB2YWx1ZT17IXZhbHVlID8gJycgOiB2YWx1ZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgbWF4TGVuZ3RoPXttYXhMZW5ndGh9XG4gICAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgIHVuc2V0RXJyb3IoaWQpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25CbHVyPXtldmVudCA9PiB7XG4gICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgIHNldEZvY3VzQ2xhc3ModmFsdWUgIT09ICcnKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldEZvY3VzQ2xhc3ModHJ1ZSl9XG4gICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17YGVycm9yXyR7Zm9ybUlkfV8ke2lkfWB9XG4gICAgICAgICAgYXJpYS1pbnZhbGlkPXsoISF2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCAhIWVycm9yfVxuICAgICAgICAvPlxuICAgICAgICB7bWF4TGVuZ3RoICYmIG1heExlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhcmxlZnRcIj5cbiAgICAgICAgICAgIHtpMThuXG4gICAgICAgICAgICAgID8gYCR7aTE4bi50KCdtYXhDaGFyYWNodGVycycsIHtcbiAgICAgICAgICAgICAgICAgIGxlbmd0aDogdmFsdWUubGVuZ3RoIHx8IDAsXG4gICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IG1heExlbmd0aCxcbiAgICAgICAgICAgICAgICB9KX1gXG4gICAgICAgICAgICAgIDogYCR7dmFsdWUubGVuZ3RoIHx8IDB9IG9mICR7bWF4TGVuZ3RofSBtYXggY2hhcmFjaHRlcnNgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgIT09ICdhYm92ZScgJiYgZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHsoKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yKSAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtmb3JtSWR9XyR7aWR9YH0+XG4gICAgICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2UgfHwgZXJyb3J9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG4iXX0=
>>>>>>> 5ac330496faa95732f357b19345a44ba8ae1f764
