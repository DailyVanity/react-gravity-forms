"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireDefault(require("react")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel")),_default=function(a){var b=a.field,c=a.value,d=a.validationMessage,e=a.touched,f=a.setTouched,g=a.hideField,h=a.updateForm,i=a.styledComponents,j=a.error,k=a.unsetError,l=a.setFocusClass,m=a.cssClass,n=(0,_objectWithoutProperties2["default"])(a,["field","value","validationMessage","touched","setTouched","hideField","updateForm","styledComponents","error","unsetError","setFocusClass","cssClass"]),o=b.id,p=b.formId,q=b.type,r=b.label,s=b.placeholder,t=b.isRequired,u=b.maxLength,v=b.description,w=b.descriptionPlacement,x=b.labelPlacement,y=b.width,z=b.customName,A=i||!1,B=A.Input,C=void 0===B?"input":B,D=A.Label,E=void 0===D?"label":D,F=A.Box,G=void 0===F?"div":F;return _react["default"].createElement(G,{width:y,className:d&&e||j?"form-field error ".concat(m):"form-field ".concat(m),style:{display:g?"none":void 0}},_react["default"].createElement("div",{className:q},_react["default"].createElement(_InputLabel["default"],{formId:p,id:o,label:r,labelPlacement:x,isRequired:t,styledComponent:i}),"above"===w&&v&&_react["default"].createElement("div",{className:"description"},v),_react["default"].createElement(C,{id:"input_".concat(p,"_").concat(o),name:z||"input_".concat(o),type:q,value:c?c:"",placeholder:s,maxLength:u,required:t,onChange:function onChange(a){h(a,b),k(o)},onBlur:function onBlur(a){h(a,b),f(o),l(""!==c)},onFocus:function onFocus(){return l(!0)},"aria-describedby":"error_".concat(p,"_").concat(o),"aria-invalid":!!d&&e||!!j}),"above"!==w&&v&&_react["default"].createElement("div",{className:"description"},v),(d&&e||j)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(p,"_").concat(o)},d||j)))};exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvUGhvbmUuanN4Il0sIm5hbWVzIjpbImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwiaGlkZUZpZWxkIiwidXBkYXRlRm9ybSIsInN0eWxlZENvbXBvbmVudHMiLCJlcnJvciIsInVuc2V0RXJyb3IiLCJzZXRGb2N1c0NsYXNzIiwiY3NzQ2xhc3MiLCJwcm9wcyIsImlkIiwiZm9ybUlkIiwidHlwZSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJpc1JlcXVpcmVkIiwibWF4TGVuZ3RoIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblBsYWNlbWVudCIsImxhYmVsUGxhY2VtZW50Iiwid2lkdGgiLCJjdXN0b21OYW1lIiwiSW5wdXQiLCJMYWJlbCIsIkJveCIsImRpc3BsYXkiLCJldmVudCJdLCJtYXBwaW5ncyI6Im9hQUdlLFdBY1QsSUFiSkEsQ0FBQUEsQ0FhSSxHQWJKQSxLQWFJLENBWkpDLENBWUksR0FaSkEsS0FZSSxDQVhKQyxDQVdJLEdBWEpBLGlCQVdJLENBVkpDLENBVUksR0FWSkEsT0FVSSxDQVRKQyxDQVNJLEdBVEpBLFVBU0ksQ0FSSkMsQ0FRSSxHQVJKQSxTQVFJLENBUEpDLENBT0ksR0FQSkEsVUFPSSxDQU5KQyxDQU1JLEdBTkpBLGdCQU1JLENBTEpDLENBS0ksR0FMSkEsS0FLSSxDQUpKQyxDQUlJLEdBSkpBLFVBSUksQ0FISkMsQ0FHSSxHQUhKQSxhQUdJLENBRkpDLENBRUksR0FGSkEsUUFFSSxDQUREQyxDQUNDLHNNQUVGQyxDQUZFLENBY0FiLENBZEEsQ0FFRmEsRUFGRSxDQUdGQyxDQUhFLENBY0FkLENBZEEsQ0FHRmMsTUFIRSxDQUlGQyxDQUpFLENBY0FmLENBZEEsQ0FJRmUsSUFKRSxDQUtGQyxDQUxFLENBY0FoQixDQWRBLENBS0ZnQixLQUxFLENBTUZDLENBTkUsQ0FjQWpCLENBZEEsQ0FNRmlCLFdBTkUsQ0FPRkMsQ0FQRSxDQWNBbEIsQ0FkQSxDQU9Ga0IsVUFQRSxDQVFGQyxDQVJFLENBY0FuQixDQWRBLENBUUZtQixTQVJFLENBU0ZDLENBVEUsQ0FjQXBCLENBZEEsQ0FTRm9CLFdBVEUsQ0FVRkMsQ0FWRSxDQWNBckIsQ0FkQSxDQVVGcUIsb0JBVkUsQ0FXRkMsQ0FYRSxDQWNBdEIsQ0FkQSxDQVdGc0IsY0FYRSxDQVlGQyxDQVpFLENBY0F2QixDQWRBLENBWUZ1QixLQVpFLENBYUZDLENBYkUsQ0FjQXhCLENBZEEsQ0FhRndCLFVBYkUsR0FnQnNEakIsQ0FBZ0IsSUFoQnRFLEtBZ0JJa0IsS0FoQkosQ0FnQklBLENBaEJKLFlBZ0JZLE9BaEJaLE9BZ0JxQkMsS0FoQnJCLENBZ0JxQkEsQ0FoQnJCLFlBZ0I2QixPQWhCN0IsT0FnQnNDQyxHQWhCdEMsQ0FnQnNDQSxDQWhCdEMsWUFnQjRDLEtBaEI1QyxHQWlCSixNQUNFLGlDQUFDLENBQUQsRUFDRSxLQUFLLENBQUVKLENBRFQsQ0FFRSxTQUFTLENBQ05yQixDQUFpQixFQUFJQyxDQUF0QixFQUFrQ0ssQ0FBbEMsNEJBQ3dCRyxDQUR4Qix1QkFFa0JBLENBRmxCLENBSEosQ0FPRSxLQUFLLENBQUUsQ0FBRWlCLE9BQU8sQ0FBRXZCLENBQVMsQ0FBRyxNQUFILE9BQXBCLENBUFQsRUFTRSx1Q0FBSyxTQUFTLENBQUVVLENBQWhCLEVBQ0UsZ0NBQUMsc0JBQUQsRUFDRSxNQUFNLENBQUVELENBRFYsQ0FFRSxFQUFFLENBQUVELENBRk4sQ0FHRSxLQUFLLENBQUVHLENBSFQsQ0FJRSxjQUFjLENBQUVNLENBSmxCLENBS0UsVUFBVSxDQUFFSixDQUxkLENBTUUsZUFBZSxDQUFFWCxDQU5uQixFQURGLENBUzRCLE9BQXpCLEdBQUFjLENBQW9CLEVBQWdCRCxDQUFwQyxFQUNDLHVDQUFLLFNBQVMsQ0FBQyxhQUFmLEVBQThCQSxDQUE5QixDQVZKLENBWUUsZ0NBQUMsQ0FBRCxFQUNFLEVBQUUsaUJBQVdOLENBQVgsYUFBcUJELENBQXJCLENBREosQ0FFRSxJQUFJLENBQUVXLENBQVUsa0JBQWFYLENBQWIsQ0FGbEIsQ0FHRSxJQUFJLENBQUVFLENBSFIsQ0FJRSxLQUFLLENBQUdkLENBQUQsQ0FBY0EsQ0FBZCxDQUFTLEVBSmxCLENBS0UsV0FBVyxDQUFFZ0IsQ0FMZixDQU1FLFNBQVMsQ0FBRUUsQ0FOYixDQU9FLFFBQVEsQ0FBRUQsQ0FQWixDQVFFLFFBQVEsQ0FBRSxrQkFBQ1csQ0FBRCxDQUFXLENBQ25CdkIsQ0FBVSxDQUFDdUIsQ0FBRCxDQUFRN0IsQ0FBUixDQURTLENBRW5CUyxDQUFVLENBQUNJLENBQUQsQ0FDWCxDQVhILENBWUUsTUFBTSxDQUFFLGdCQUFDZ0IsQ0FBRCxDQUFXLENBQ2pCdkIsQ0FBVSxDQUFDdUIsQ0FBRCxDQUFRN0IsQ0FBUixDQURPLENBRWpCSSxDQUFVLENBQUNTLENBQUQsQ0FGTyxDQUdqQkgsQ0FBYSxDQUFXLEVBQVYsR0FBQVQsQ0FBRCxDQUNkLENBaEJILENBaUJFLE9BQU8sQ0FBRSx5QkFBTVMsQ0FBQUEsQ0FBYSxJQUFuQixDQWpCWCxDQWtCRSxtQ0FBMkJJLENBQTNCLGFBQXFDRCxDQUFyQyxDQWxCRixDQW1CRSxlQUFlLENBQUMsQ0FBQ1gsQ0FBRixFQUF1QkMsQ0FBeEIsRUFBb0MsQ0FBQyxDQUFDSyxDQW5CdEQsRUFaRixDQWlDNEIsT0FBekIsR0FBQWEsQ0FBb0IsRUFBZ0JELENBQXBDLEVBQW1ELHVDQUFLLFNBQVMsQ0FBQyxhQUFmLEVBQThCQSxDQUE5QixDQWpDdEQsQ0FrQ0csQ0FBRWxCLENBQWlCLEVBQUlDLENBQXRCLEVBQWtDSyxDQUFuQyxHQUNDLHdDQUFNLFNBQVMsQ0FBQyxlQUFoQixDQUFnQyxFQUFFLGlCQUFXTSxDQUFYLGFBQXFCRCxDQUFyQixDQUFsQyxFQUNHWCxDQUFpQixFQUFJTSxDQUR4QixDQW5DSixDQVRGLENBbURILEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnLi4vRm9ybUVsZW1lbnRzL0lucHV0TGFiZWwnXG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gIHRvdWNoZWQsXG4gIHNldFRvdWNoZWQsXG4gIGhpZGVGaWVsZCxcbiAgdXBkYXRlRm9ybSxcbiAgc3R5bGVkQ29tcG9uZW50cyxcbiAgZXJyb3IsXG4gIHVuc2V0RXJyb3IsXG4gIHNldEZvY3VzQ2xhc3MsXG4gIGNzc0NsYXNzLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgZm9ybUlkLFxuICAgIHR5cGUsXG4gICAgbGFiZWwsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgaXNSZXF1aXJlZCxcbiAgICBtYXhMZW5ndGgsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZGVzY3JpcHRpb25QbGFjZW1lbnQsXG4gICAgbGFiZWxQbGFjZW1lbnQsXG4gICAgd2lkdGgsXG4gICAgY3VzdG9tTmFtZSxcbiAgfSA9IGZpZWxkO1xuXG4gIGNvbnN0IHsgSW5wdXQgPSAnaW5wdXQnLCBMYWJlbCA9ICdsYWJlbCcsIEJveCA9ICdkaXYnIH0gPSBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvclxuICAgICAgICAgID8gYGZvcm0tZmllbGQgZXJyb3IgJHtjc3NDbGFzc31gXG4gICAgICAgICAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgIH1cbiAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IGhpZGVGaWVsZCA/ICdub25lJyA6IHVuZGVmaW5lZCB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0eXBlfT5cbiAgICAgICAgPElucHV0TGFiZWxcbiAgICAgICAgICBmb3JtSWQ9e2Zvcm1JZH1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICAgIGxhYmVsUGxhY2VtZW50PXtsYWJlbFBsYWNlbWVudH1cbiAgICAgICAgICBpc1JlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgIHN0eWxlZENvbXBvbmVudD17c3R5bGVkQ29tcG9uZW50c31cbiAgICAgICAgLz5cbiAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSBcImFib3ZlXCIgJiYgZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9YH1cbiAgICAgICAgICBuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lkfWB9XG4gICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICB2YWx1ZT17IXZhbHVlID8gJycgOiB2YWx1ZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgbWF4TGVuZ3RoPXttYXhMZW5ndGh9XG4gICAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgdW5zZXRFcnJvcihpZCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkJsdXI9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICAgICAgICBzZXRGb2N1c0NsYXNzKHZhbHVlICE9PSAnJyk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRGb2N1c0NsYXNzKHRydWUpfVxuICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfVxuICAgICAgICAgIGFyaWEtaW52YWxpZD17KCEhdmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgISFlcnJvcn1cbiAgICAgICAgLz5cbiAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ICE9PSBcImFib3ZlXCIgJiYgZGVzY3JpcHRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj59XG4gICAgICAgIHsoKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yKSAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtmb3JtSWR9XyR7aWR9YH0+XG4gICAgICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2UgfHwgZXJyb3J9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuIl19