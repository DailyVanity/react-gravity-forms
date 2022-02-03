"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireDefault(require("react")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel")),_default=function(a){var b=a.field,c=a.value,d=a.validationMessage,e=a.touched,f=a.setTouched,g=a.hideField,h=a.updateForm,i=a.styledComponents,j=a.error,k=a.unsetError,l=a.setFocusClass,m=a.cssClass,n=(0,_objectWithoutProperties2["default"])(a,["field","value","validationMessage","touched","setTouched","hideField","updateForm","styledComponents","error","unsetError","setFocusClass","cssClass"]),o=b.id,p=b.formId,q=b.type,r=b.label,s=b.placeholder,t=b.isRequired,u=b.maxLength,v=b.description,w=b.descriptionPlacement,x=b.labelPlacement,y=b.width,z=b.customName,A=i||!1,B=A.Textarea,C=void 0===B?"textarea":B,D=A.Label,E=void 0===D?"label":D,F=A.Box,G=void 0===F?"div":F;return _react["default"].createElement(G,{width:y,className:d&&e||j?"form-field error ".concat(m):"form-field ".concat(m),style:{display:g?"none":void 0}},_react["default"].createElement("div",{className:q},_react["default"].createElement(_InputLabel["default"],{formId:p,id:o,label:r,labelPlacement:x,isRequired:t,styledComponent:i}),"above"===w&&v&&_react["default"].createElement("div",{className:"description"},v),_react["default"].createElement(C,{id:"input_".concat(p,"_").concat(o),name:z||"input_".concat(o),type:q,value:c?c:"",placeholder:s,maxLength:u,required:t,onChange:function onChange(a){h(a,b),k(o)},onBlur:function onBlur(a){h(a,b),f(o),l(""!==c)},onFocus:function onFocus(){return l(!0)},"aria-describedby":"error_".concat(p,"_").concat(o),"aria-invalid":!!d&&e||!!j}),"above"!==w&&v&&_react["default"].createElement("div",{className:"description"},v),(d&&e||j)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(p,"_").concat(o)},d||j)))};exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvVGV4dGFyZWEuanN4Il0sIm5hbWVzIjpbImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwiaGlkZUZpZWxkIiwidXBkYXRlRm9ybSIsInN0eWxlZENvbXBvbmVudHMiLCJlcnJvciIsInVuc2V0RXJyb3IiLCJzZXRGb2N1c0NsYXNzIiwiY3NzQ2xhc3MiLCJwcm9wcyIsImlkIiwiZm9ybUlkIiwidHlwZSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJpc1JlcXVpcmVkIiwibWF4TGVuZ3RoIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblBsYWNlbWVudCIsImxhYmVsUGxhY2VtZW50Iiwid2lkdGgiLCJjdXN0b21OYW1lIiwiVGV4dGFyZWEiLCJMYWJlbCIsIkJveCIsImRpc3BsYXkiLCJldmVudCJdLCJtYXBwaW5ncyI6Im9hQUdlLFdBY1QsSUFiSkEsQ0FBQUEsQ0FhSSxHQWJKQSxLQWFJLENBWkpDLENBWUksR0FaSkEsS0FZSSxDQVhKQyxDQVdJLEdBWEpBLGlCQVdJLENBVkpDLENBVUksR0FWSkEsT0FVSSxDQVRKQyxDQVNJLEdBVEpBLFVBU0ksQ0FSSkMsQ0FRSSxHQVJKQSxTQVFJLENBUEpDLENBT0ksR0FQSkEsVUFPSSxDQU5KQyxDQU1JLEdBTkpBLGdCQU1JLENBTEpDLENBS0ksR0FMSkEsS0FLSSxDQUpKQyxDQUlJLEdBSkpBLFVBSUksQ0FISkMsQ0FHSSxHQUhKQSxhQUdJLENBRkpDLENBRUksR0FGSkEsUUFFSSxDQUREQyxDQUNDLHNNQUVGQyxDQUZFLENBY0FiLENBZEEsQ0FFRmEsRUFGRSxDQUdGQyxDQUhFLENBY0FkLENBZEEsQ0FHRmMsTUFIRSxDQUlGQyxDQUpFLENBY0FmLENBZEEsQ0FJRmUsSUFKRSxDQUtGQyxDQUxFLENBY0FoQixDQWRBLENBS0ZnQixLQUxFLENBTUZDLENBTkUsQ0FjQWpCLENBZEEsQ0FNRmlCLFdBTkUsQ0FPRkMsQ0FQRSxDQWNBbEIsQ0FkQSxDQU9Ga0IsVUFQRSxDQVFGQyxDQVJFLENBY0FuQixDQWRBLENBUUZtQixTQVJFLENBU0ZDLENBVEUsQ0FjQXBCLENBZEEsQ0FTRm9CLFdBVEUsQ0FVRkMsQ0FWRSxDQWNBckIsQ0FkQSxDQVVGcUIsb0JBVkUsQ0FXRkMsQ0FYRSxDQWNBdEIsQ0FkQSxDQVdGc0IsY0FYRSxDQVlGQyxDQVpFLENBY0F2QixDQWRBLENBWUZ1QixLQVpFLENBYUZDLENBYkUsQ0FjQXhCLENBZEEsQ0FhRndCLFVBYkUsR0FnQjREakIsQ0FBZ0IsSUFoQjVFLEtBZ0JJa0IsUUFoQkosQ0FnQklBLENBaEJKLFlBZ0JlLFVBaEJmLE9BZ0IyQkMsS0FoQjNCLENBZ0IyQkEsQ0FoQjNCLFlBZ0JtQyxPQWhCbkMsT0FnQjRDQyxHQWhCNUMsQ0FnQjRDQSxDQWhCNUMsWUFnQmtELEtBaEJsRCxHQWtCSixNQUNFLGlDQUFDLENBQUQsRUFDRSxLQUFLLENBQUVKLENBRFQsQ0FFRSxTQUFTLENBQ05yQixDQUFpQixFQUFJQyxDQUF0QixFQUFrQ0ssQ0FBbEMsNEJBQ3dCRyxDQUR4Qix1QkFFa0JBLENBRmxCLENBSEosQ0FPRSxLQUFLLENBQUUsQ0FBRWlCLE9BQU8sQ0FBRXZCLENBQVMsQ0FBRyxNQUFILE9BQXBCLENBUFQsRUFTRSx1Q0FBSyxTQUFTLENBQUVVLENBQWhCLEVBQ0UsZ0NBQUMsc0JBQUQsRUFDRSxNQUFNLENBQUVELENBRFYsQ0FFRSxFQUFFLENBQUVELENBRk4sQ0FHRSxLQUFLLENBQUVHLENBSFQsQ0FJRSxjQUFjLENBQUVNLENBSmxCLENBS0UsVUFBVSxDQUFFSixDQUxkLENBTUUsZUFBZSxDQUFFWCxDQU5uQixFQURGLENBUzRCLE9BQXpCLEdBQUFjLENBQW9CLEVBQWdCRCxDQUFwQyxFQUNDLHVDQUFLLFNBQVMsQ0FBQyxhQUFmLEVBQThCQSxDQUE5QixDQVZKLENBWUUsZ0NBQUMsQ0FBRCxFQUNFLEVBQUUsaUJBQVdOLENBQVgsYUFBcUJELENBQXJCLENBREosQ0FFRSxJQUFJLENBQUVXLENBQVUsa0JBQWFYLENBQWIsQ0FGbEIsQ0FHRSxJQUFJLENBQUVFLENBSFIsQ0FJRSxLQUFLLENBQUdkLENBQUQsQ0FBY0EsQ0FBZCxDQUFTLEVBSmxCLENBS0UsV0FBVyxDQUFFZ0IsQ0FMZixDQU1FLFNBQVMsQ0FBRUUsQ0FOYixDQU9FLFFBQVEsQ0FBRUQsQ0FQWixDQVFFLFFBQVEsQ0FBRSxrQkFBQ1csQ0FBRCxDQUFXLENBQ25CdkIsQ0FBVSxDQUFDdUIsQ0FBRCxDQUFRN0IsQ0FBUixDQURTLENBRW5CUyxDQUFVLENBQUNJLENBQUQsQ0FDWCxDQVhILENBWUUsTUFBTSxDQUFFLGdCQUFDZ0IsQ0FBRCxDQUFXLENBQ2pCdkIsQ0FBVSxDQUFDdUIsQ0FBRCxDQUFRN0IsQ0FBUixDQURPLENBRWpCSSxDQUFVLENBQUNTLENBQUQsQ0FGTyxDQUdqQkgsQ0FBYSxDQUFXLEVBQVYsR0FBQVQsQ0FBRCxDQUNkLENBaEJILENBaUJFLE9BQU8sQ0FBRSx5QkFBTVMsQ0FBQUEsQ0FBYSxJQUFuQixDQWpCWCxDQWtCRSxtQ0FBMkJJLENBQTNCLGFBQXFDRCxDQUFyQyxDQWxCRixDQW1CRSxlQUFlLENBQUMsQ0FBQ1gsQ0FBRixFQUF1QkMsQ0FBeEIsRUFBb0MsQ0FBQyxDQUFDSyxDQW5CdEQsRUFaRixDQWlDNEIsT0FBekIsR0FBQWEsQ0FBb0IsRUFBZ0JELENBQXBDLEVBQW1ELHVDQUFLLFNBQVMsQ0FBQyxhQUFmLEVBQThCQSxDQUE5QixDQWpDdEQsQ0FrQ0csQ0FBRWxCLENBQWlCLEVBQUlDLENBQXRCLEVBQWtDSyxDQUFuQyxHQUNDLHdDQUFNLFNBQVMsQ0FBQyxlQUFoQixDQUFnQyxFQUFFLGlCQUFXTSxDQUFYLGFBQXFCRCxDQUFyQixDQUFsQyxFQUNHWCxDQUFpQixFQUFJTSxDQUR4QixDQW5DSixDQVRGLENBbURILEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnLi4vRm9ybUVsZW1lbnRzL0lucHV0TGFiZWwnXG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gIHRvdWNoZWQsXG4gIHNldFRvdWNoZWQsXG4gIGhpZGVGaWVsZCxcbiAgdXBkYXRlRm9ybSxcbiAgc3R5bGVkQ29tcG9uZW50cyxcbiAgZXJyb3IsXG4gIHVuc2V0RXJyb3IsXG4gIHNldEZvY3VzQ2xhc3MsXG4gIGNzc0NsYXNzLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgZm9ybUlkLFxuICAgIHR5cGUsXG4gICAgbGFiZWwsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgaXNSZXF1aXJlZCxcbiAgICBtYXhMZW5ndGgsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZGVzY3JpcHRpb25QbGFjZW1lbnQsXG4gICAgbGFiZWxQbGFjZW1lbnQsXG4gICAgd2lkdGgsXG4gICAgY3VzdG9tTmFtZSxcbiAgfSA9IGZpZWxkO1xuXG4gIGNvbnN0IHsgVGV4dGFyZWEgPSAndGV4dGFyZWEnLCBMYWJlbCA9ICdsYWJlbCcsIEJveCA9ICdkaXYnIH0gPSBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yXG4gICAgICAgICAgPyBgZm9ybS1maWVsZCBlcnJvciAke2Nzc0NsYXNzfWBcbiAgICAgICAgICA6IGBmb3JtLWZpZWxkICR7Y3NzQ2xhc3N9YFxuICAgICAgfVxuICAgICAgc3R5bGU9e3sgZGlzcGxheTogaGlkZUZpZWxkID8gJ25vbmUnIDogdW5kZWZpbmVkIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3R5cGV9PlxuICAgICAgICA8SW5wdXRMYWJlbFxuICAgICAgICAgIGZvcm1JZD17Zm9ybUlkfVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgICAgbGFiZWxQbGFjZW1lbnQ9e2xhYmVsUGxhY2VtZW50fVxuICAgICAgICAgIGlzUmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgc3R5bGVkQ29tcG9uZW50PXtzdHlsZWRDb21wb25lbnRzfVxuICAgICAgICAvPlxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgPT09IFwiYWJvdmVcIiAmJiBkZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgaWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1gfVxuICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9YH1cbiAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgIHZhbHVlPXshdmFsdWUgPyAnJyA6IHZhbHVlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICBtYXhMZW5ndGg9e21heExlbmd0aH1cbiAgICAgICAgICByZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICB1bnNldEVycm9yKGlkKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQmx1cj17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgIHNldEZvY3VzQ2xhc3ModmFsdWUgIT09ICcnKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldEZvY3VzQ2xhc3ModHJ1ZSl9XG4gICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17YGVycm9yXyR7Zm9ybUlkfV8ke2lkfWB9XG4gICAgICAgICAgYXJpYS1pbnZhbGlkPXsoISF2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCAhIWVycm9yfVxuICAgICAgICAvPlxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgIT09IFwiYWJvdmVcIiAmJiBkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2Pn1cbiAgICAgICAgeygodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3IpICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfT5cbiAgICAgICAgICAgIHt2YWxpZGF0aW9uTWVzc2FnZSB8fCBlcnJvcn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXX0=