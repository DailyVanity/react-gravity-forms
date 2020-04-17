"use strict";var _react=_interopRequireDefault(require("react"));Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}var _default=function(a){var b=a.field,c=a.value,d=a.validationMessage,e=a.touched,f=a.setTouched,g=a.hideField,h=a.updateForm,i=a.styledComponents,j=a.error,k=a.unsetError,l=a.setFocusClass,m=a.cssClass,n=_objectWithoutProperties(a,["field","value","validationMessage","touched","setTouched","hideField","updateForm","styledComponents","error","unsetError","setFocusClass","cssClass"]),o=b.id,p=b.formId,q=b.type,r=b.label,s=b.placeholder,t=b.isRequired,u=b.maxLength,v=b.description,w=b.descriptionPlacement,x=b.labelPlacement,y=b.width,z=b.customName,A=i||!1,B=A.Input,C=void 0===B?"input":B,D=A.Label,E=void 0===D?"label":D,F=A.Box,G=void 0===F?"div":F;return _react["default"].createElement(G,{width:y,className:d&&e||j?"form-field error ".concat(m):"form-field ".concat(m),style:{display:g?"none":void 0}},_react["default"].createElement("div",{className:q},_react["default"].createElement(E,{htmlFor:"input_".concat(p,"_").concat(o),className:"gf-label ".concat(x)},r,t?_react["default"].createElement("abbr",null,"*"):null),"above"===w&&v?v&&_react["default"].createElement("div",{className:"description"},v):_react["default"].createElement(_react["default"].Fragment,null,_react["default"].createElement(C,{id:"input_".concat(p,"_").concat(o),name:z||"input_".concat(o),type:q,value:c?c:"",placeholder:s,maxLength:u,required:t,onChange:function onChange(a){h(a,b),k(o)},onBlur:function onBlur(a){h(a,b),f(o),l(""!==c)},onFocus:function onFocus(){return l(!0)},"aria-describedby":"error_".concat(p,"_").concat(o),"aria-invalid":!!d&&e||!!j}),v&&_react["default"].createElement("div",{className:"description"},v)),(d&&e||j)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(p,"_").concat(o)},d||j)))};exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvV2Vic2l0ZS5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJ2YWx1ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJoaWRlRmllbGQiLCJ1cGRhdGVGb3JtIiwic3R5bGVkQ29tcG9uZW50cyIsImVycm9yIiwidW5zZXRFcnJvciIsInNldEZvY3VzQ2xhc3MiLCJjc3NDbGFzcyIsInByb3BzIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImlzUmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uUGxhY2VtZW50IiwibGFiZWxQbGFjZW1lbnQiLCJ3aWR0aCIsImN1c3RvbU5hbWUiLCJJbnB1dCIsIkxhYmVsIiwiQm94IiwiZGlzcGxheSIsImV2ZW50Il0sIm1hcHBpbmdzIjoiYUFBQSxvRCwrbUJBRWUsV0FjVCxJQWJKQSxDQUFBQSxDQWFJLEdBYkpBLEtBYUksQ0FaSkMsQ0FZSSxHQVpKQSxLQVlJLENBWEpDLENBV0ksR0FYSkEsaUJBV0ksQ0FWSkMsQ0FVSSxHQVZKQSxPQVVJLENBVEpDLENBU0ksR0FUSkEsVUFTSSxDQVJKQyxDQVFJLEdBUkpBLFNBUUksQ0FQSkMsQ0FPSSxHQVBKQSxVQU9JLENBTkpDLENBTUksR0FOSkEsZ0JBTUksQ0FMSkMsQ0FLSSxHQUxKQSxLQUtJLENBSkpDLENBSUksR0FKSkEsVUFJSSxDQUhKQyxDQUdJLEdBSEpBLGFBR0ksQ0FGSkMsQ0FFSSxHQUZKQSxRQUVJLENBRERDLENBQ0Msc0xBRUZDLENBRkUsQ0FjQWIsQ0FkQSxDQUVGYSxFQUZFLENBR0ZDLENBSEUsQ0FjQWQsQ0FkQSxDQUdGYyxNQUhFLENBSUZDLENBSkUsQ0FjQWYsQ0FkQSxDQUlGZSxJQUpFLENBS0ZDLENBTEUsQ0FjQWhCLENBZEEsQ0FLRmdCLEtBTEUsQ0FNRkMsQ0FORSxDQWNBakIsQ0FkQSxDQU1GaUIsV0FORSxDQU9GQyxDQVBFLENBY0FsQixDQWRBLENBT0ZrQixVQVBFLENBUUZDLENBUkUsQ0FjQW5CLENBZEEsQ0FRRm1CLFNBUkUsQ0FTRkMsQ0FURSxDQWNBcEIsQ0FkQSxDQVNGb0IsV0FURSxDQVVGQyxDQVZFLENBY0FyQixDQWRBLENBVUZxQixvQkFWRSxDQVdGQyxDQVhFLENBY0F0QixDQWRBLENBV0ZzQixjQVhFLENBWUZDLENBWkUsQ0FjQXZCLENBZEEsQ0FZRnVCLEtBWkUsQ0FhRkMsQ0FiRSxDQWNBeEIsQ0FkQSxDQWFGd0IsVUFiRSxHQWVzRGpCLENBQWdCLElBZnRFLEtBZUlrQixLQWZKLENBZUlBLENBZkosWUFlWSxPQWZaLE9BZXFCQyxLQWZyQixDQWVxQkEsQ0FmckIsWUFlNkIsT0FmN0IsT0Flc0NDLEdBZnRDLENBZXNDQSxDQWZ0QyxZQWU0QyxLQWY1QyxHQWdCSixNQUNFLGlDQUFDLENBQUQsRUFDRSxLQUFLLENBQUVKLENBRFQsQ0FFRSxTQUFTLENBQ05yQixDQUFpQixFQUFJQyxDQUF0QixFQUFrQ0ssQ0FBbEMsNEJBQ3dCRyxDQUR4Qix1QkFFa0JBLENBRmxCLENBSEosQ0FPRSxLQUFLLENBQUUsQ0FBRWlCLE9BQU8sQ0FBRXZCLENBQVMsQ0FBRyxNQUFILE9BQXBCLENBUFQsRUFTRSx1Q0FBSyxTQUFTLENBQUVVLENBQWhCLEVBQ0UsZ0NBQUMsQ0FBRCxFQUFPLE9BQU8saUJBQVdELENBQVgsYUFBcUJELENBQXJCLENBQWQsQ0FBeUMsU0FBUyxvQkFBY1MsQ0FBZCxDQUFsRCxFQUNHTixDQURILENBRUdFLENBQVUsQ0FBRyxnREFBSCxDQUFvQixJQUZqQyxDQURGLENBSzRCLE9BQXpCLEdBQUFHLENBQW9CLEVBQWdCRCxDQUFwQyxDQUNDQSxDQUFXLEVBQUksdUNBQUssU0FBUyxDQUFDLGFBQWYsRUFBOEJBLENBQTlCLENBRGhCLENBR0MsZ0NBQUMsaUJBQUQsQ0FBTyxRQUFQLE1BQ0UsZ0NBQUMsQ0FBRCxFQUNFLEVBQUUsaUJBQVdOLENBQVgsYUFBcUJELENBQXJCLENBREosQ0FFRSxJQUFJLENBQUVXLENBQVUsa0JBQWFYLENBQWIsQ0FGbEIsQ0FHRSxJQUFJLENBQUVFLENBSFIsQ0FJRSxLQUFLLENBQUdkLENBQUQsQ0FBY0EsQ0FBZCxDQUFTLEVBSmxCLENBS0UsV0FBVyxDQUFFZ0IsQ0FMZixDQU1FLFNBQVMsQ0FBRUUsQ0FOYixDQU9FLFFBQVEsQ0FBRUQsQ0FQWixDQVFFLFFBQVEsQ0FBRSxrQkFBQ1csQ0FBRCxDQUFXLENBQ25CdkIsQ0FBVSxDQUFDdUIsQ0FBRCxDQUFRN0IsQ0FBUixDQURTLENBRW5CUyxDQUFVLENBQUNJLENBQUQsQ0FDWCxDQVhILENBWUUsTUFBTSxDQUFFLGdCQUFDZ0IsQ0FBRCxDQUFXLENBQ2pCdkIsQ0FBVSxDQUFDdUIsQ0FBRCxDQUFRN0IsQ0FBUixDQURPLENBRWpCSSxDQUFVLENBQUNTLENBQUQsQ0FGTyxDQUdqQkgsQ0FBYSxDQUFXLEVBQVYsR0FBQVQsQ0FBRCxDQUNkLENBaEJILENBaUJFLE9BQU8sQ0FBRSx5QkFBTVMsQ0FBQUEsQ0FBYSxJQUFuQixDQWpCWCxDQWtCRSxtQ0FBMkJJLENBQTNCLGFBQXFDRCxDQUFyQyxDQWxCRixDQW1CRSxlQUFlLENBQUMsQ0FBQ1gsQ0FBRixFQUF1QkMsQ0FBeEIsRUFBb0MsQ0FBQyxDQUFDSyxDQW5CdEQsRUFERixDQXNCR1ksQ0FBVyxFQUFJLHVDQUFLLFNBQVMsQ0FBQyxhQUFmLEVBQThCQSxDQUE5QixDQXRCbEIsQ0FSSixDQWlDRyxDQUFFbEIsQ0FBaUIsRUFBSUMsQ0FBdEIsRUFBa0NLLENBQW5DLEdBQ0Msd0NBQU0sU0FBUyxDQUFDLGVBQWhCLENBQWdDLEVBQUUsaUJBQVdNLENBQVgsYUFBcUJELENBQXJCLENBQWxDLEVBQ0dYLENBQWlCLEVBQUlNLENBRHhCLENBbENKLENBVEYsQ0FrREgsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIGZpZWxkLFxuICB2YWx1ZSxcbiAgdmFsaWRhdGlvbk1lc3NhZ2UsXG4gIHRvdWNoZWQsXG4gIHNldFRvdWNoZWQsXG4gIGhpZGVGaWVsZCxcbiAgdXBkYXRlRm9ybSxcbiAgc3R5bGVkQ29tcG9uZW50cyxcbiAgZXJyb3IsXG4gIHVuc2V0RXJyb3IsXG4gIHNldEZvY3VzQ2xhc3MsXG4gIGNzc0NsYXNzLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgZm9ybUlkLFxuICAgIHR5cGUsXG4gICAgbGFiZWwsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgaXNSZXF1aXJlZCxcbiAgICBtYXhMZW5ndGgsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZGVzY3JpcHRpb25QbGFjZW1lbnQsXG4gICAgbGFiZWxQbGFjZW1lbnQsXG4gICAgd2lkdGgsXG4gICAgY3VzdG9tTmFtZSxcbiAgfSA9IGZpZWxkO1xuICBjb25zdCB7IElucHV0ID0gJ2lucHV0JywgTGFiZWwgPSAnbGFiZWwnLCBCb3ggPSAnZGl2JyB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICAodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3JcbiAgICAgICAgICA/IGBmb3JtLWZpZWxkIGVycm9yICR7Y3NzQ2xhc3N9YFxuICAgICAgICAgIDogYGZvcm0tZmllbGQgJHtjc3NDbGFzc31gXG4gICAgICB9XG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyAnbm9uZScgOiB1bmRlZmluZWQgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZX0+XG4gICAgICAgIDxMYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSWR9XyR7aWR9YH0gY2xhc3NOYW1lPXtgZ2YtbGFiZWwgJHtsYWJlbFBsYWNlbWVudH1gfT5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAge2lzUmVxdWlyZWQgPyA8YWJicj4qPC9hYmJyPiA6IG51bGx9XG4gICAgICAgIDwvTGFiZWw+XG4gICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gJ2Fib3ZlJyAmJiBkZXNjcmlwdGlvbiA/IChcbiAgICAgICAgICBkZXNjcmlwdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBpZD17YGlucHV0XyR7Zm9ybUlkfV8ke2lkfWB9XG4gICAgICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aWR9YH1cbiAgICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgICAgdmFsdWU9eyF2YWx1ZSA/ICcnIDogdmFsdWV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPXttYXhMZW5ndGh9XG4gICAgICAgICAgICAgIHJlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgICAgIHVuc2V0RXJyb3IoaWQpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvbkJsdXI9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICBzZXRGb2N1c0NsYXNzKHZhbHVlICE9PSAnJyk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldEZvY3VzQ2xhc3ModHJ1ZSl9XG4gICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfVxuICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9eyghIXZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8ICEhZXJyb3J9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+fVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICAgIHsoKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yKSAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtmb3JtSWR9XyR7aWR9YH0+XG4gICAgICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2UgfHwgZXJyb3J9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuIl19