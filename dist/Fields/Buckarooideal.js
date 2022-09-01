"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard"),_interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireWildcard(require("react")),_reactSelect=_interopRequireDefault(require("react-select")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel")),_default=function(a){var b=a.field,c=a.value,d=a.validationMessage,e=a.touched,f=a.setTouched,g=a.setFocusClass,h=a.hideField,i=a.updateForm,j=a.styledComponents,k=a.error,l=a.cssClass,m=a.unsetError,n=(0,_objectWithoutProperties2["default"])(a,["field","value","validationMessage","touched","setTouched","setFocusClass","hideField","updateForm","styledComponents","error","cssClass","unsetError"]),o=b.id,p=b.formId,q=b.type,r=b.label,s=b.isRequired,t=b.choices,u=b.placeholder,v=b.description,w=b.descriptionPlacement,x=b.labelPlacement,y=b.width,z=b.customName,A="",B=t.map(function(a){var b={value:a.value,label:a.text};return a.isSelected&&(A=b),b}),C=(0,_react.useState)(c||A),D=(0,_slicedToArray2["default"])(C,2),E=D[0],F=D[1],G=function(a){F(a);i({target:{value:a}},b)},H=function(){i({target:{value:E}},b),f(o),g(E&&E.value)},I=j||!1,J=I.ReactSelect,K=I.Label,L=void 0===K?"label":K,M=I.Box,N=void 0===M?"div":M,O=J||_reactSelect["default"];return _react["default"].createElement(N,{width:y,className:d&&e||k?"form-field error ".concat(l):"form-field ".concat(l),style:{display:h?"none":void 0}},_react["default"].createElement("div",{className:q},_react["default"].createElement(_InputLabel["default"],{formId:p,id:o,label:r,labelPlacement:x,isRequired:s,styledComponent:j}),"above"===w&&v&&_react["default"].createElement("div",{className:"description"},v),_react["default"].createElement(O,{name:z||"input_".concat(o),required:s,value:E&&E.value?E:"",onChange:function onChange(a){G(a,b),m(o)},onBlur:function onBlur(){return H()},onFocus:function onFocus(){return g(!0)},placeholder:u,options:B,className:"form-select",autoFocus:!1,inputId:"input_".concat(p,"_").concat(o)}),"above"!==w&&v&&_react["default"].createElement("div",{className:"description"},v),(d&&e||k)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(p,"_").concat(o)},d||k)))};exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvQnVja2Fyb29pZGVhbC5qc3giXSwibmFtZXMiOlsiZmllbGQiLCJ2YWx1ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJzZXRGb2N1c0NsYXNzIiwiaGlkZUZpZWxkIiwidXBkYXRlRm9ybSIsInN0eWxlZENvbXBvbmVudHMiLCJlcnJvciIsImNzc0NsYXNzIiwidW5zZXRFcnJvciIsInByb3BzIiwiaWQiLCJmb3JtSWQiLCJ0eXBlIiwibGFiZWwiLCJpc1JlcXVpcmVkIiwiY2hvaWNlcyIsInBsYWNlaG9sZGVyIiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblBsYWNlbWVudCIsImxhYmVsUGxhY2VtZW50Iiwid2lkdGgiLCJjdXN0b21OYW1lIiwic2VsZWN0ZWQiLCJvcHRpb25zIiwibWFwIiwiY2hvaWNlIiwiaXRlbSIsInRleHQiLCJpc1NlbGVjdGVkIiwic2VsZWN0ZWRPcHRpb24iLCJzZWxlY3RPcHRpb24iLCJoYW5kbGVDaGFuZ2UiLCJvcHRpb24iLCJ0YXJnZXQiLCJoYW5kbGVCbHVyIiwiUmVhY3RTZWxlY3QiLCJMYWJlbCIsIkJveCIsIlJTZWxlY3QiLCJTZWxlY3QiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiMm9CQUllLFdBY1QsSUFiSkEsQ0FBQUEsQ0FhSSxHQWJKQSxLQWFJLENBWkpDLENBWUksR0FaSkEsS0FZSSxDQVhKQyxDQVdJLEdBWEpBLGlCQVdJLENBVkpDLENBVUksR0FWSkEsT0FVSSxDQVRKQyxDQVNJLEdBVEpBLFVBU0ksQ0FSSkMsQ0FRSSxHQVJKQSxhQVFJLENBUEpDLENBT0ksR0FQSkEsU0FPSSxDQU5KQyxDQU1JLEdBTkpBLFVBTUksQ0FMSkMsQ0FLSSxHQUxKQSxnQkFLSSxDQUpKQyxDQUlJLEdBSkpBLEtBSUksQ0FISkMsQ0FHSSxHQUhKQSxRQUdJLENBRkpDLENBRUksR0FGSkEsVUFFSSxDQUREQyxDQUNDLHNNQUVGQyxDQUZFLENBY0FiLENBZEEs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LEtBQWpDLENBQXlDK0IsQ0FBekMsQ0FBMEQsRUFIbkUsQ0FJRSxRQUFRLENBQUUsa0JBQUNHLENBQUQsQ0FBWSxDQUNwQkQsQ0FBWSxDQUFDQyxDQUFELENBQVNuQyxDQUFULENBRFEsQ0FFcEJXLENBQVUsQ0FBQ0UsQ0FBRCxDQUNYLENBUEgsQ0FRRSxNQUFNLENBQUUsd0JBQU13QixDQUFBQSxDQUFVLEVBQWhCLENBUlYsQ0FTRSxPQUFPLENBQUUseUJBQU1oQyxDQUFBQSxDQUFhLElBQW5CLENBVFgsQ0FVRSxXQUFXLENBQUVjLENBVmYsQ0FXRSxPQUFPLENBQUVPLENBWFgsQ0FZRSxTQUFTLENBQUMsYUFaWixDQWFFLFNBQVMsR0FiWCxDQWVFLE9BQU8saUJBQVdaLENBQVgsYUFBcUJELENBQXJCLENBZlQsRUFaRixDQTZCNEIsT0FBekIsR0FBQVEsQ0FBb0IsRUFBZ0JELENBQXBDLEVBQ0MsdUNBQUssU0FBUyxDQUFDLGFBQWYsRUFBOEJBLENBQTlCLENBOUJKLENBZ0NHLENBQUVsQixDQUFpQixFQUFJQyxDQUF0QixFQUFrQ00sQ0FBbkMsR0FDQyx3Q0FBTSxTQUFTLENBQUMsZUFBaEIsQ0FBZ0MsRUFBRSxpQkFBV0ssQ0FBWCxhQUFxQkQsQ0FBckIsQ0FBbEMsRUFDR1gsQ0FBaUIsRUFBSU8sQ0FEeEIsQ0FqQ0osQ0FURixDQWlESCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnO1xuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnLi4vRm9ybUVsZW1lbnRzL0lucHV0TGFiZWwnO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIHZhbGlkYXRpb25NZXNzYWdlLFxuICB0b3VjaGVkLFxuICBzZXRUb3VjaGVkLFxuICBzZXRGb2N1c0NsYXNzLFxuICBoaWRlRmllbGQsXG4gIHVwZGF0ZUZvcm0sXG4gIHN0eWxlZENvbXBvbmVudHMsXG4gIGVycm9yLFxuICBjc3NDbGFzcyxcbiAgdW5zZXRFcnJvcixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGZvcm1JZCxcbiAgICB0eXBlLFxuICAgIGxhYmVsLFxuICAgIGlzUmVxdWlyZWQsXG4gICAgY2hvaWNlcyxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkZXNjcmlwdGlvblBsYWNlbWVudCxcbiAgICBsYWJlbFBsYWNlbWVudCxcbiAgICB3aWR0aCxcbiAgICBjdXN0b21OYW1lLFxuICB9ID0gZmllbGQ7XG5cbiAgbGV0IHNlbGVjdGVkID0gJyc7XG4gIC8vIE1hcCBvcHRpb25zXG4gIGNvbnN0IG9wdGlvbnMgPSBjaG9pY2VzLm1hcCgoY2hvaWNlKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IHtcbiAgICAgIHZhbHVlOiBjaG9pY2UudmFsdWUsXG4gICAgICBsYWJlbDogY2hvaWNlLnRleHQsXG4gICAgfTtcbiAgICBpZiAoY2hvaWNlLmlzU2VsZWN0ZWQpIHtcbiAgICAgIHNlbGVjdGVkID0gaXRlbTtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZW07XG4gIH0pO1xuICAvLyBIYW5kbGUgU3RhdGVcbiAgY29uc3QgW3NlbGVjdGVkT3B0aW9uLCBzZWxlY3RPcHRpb25dID0gdXNlU3RhdGUodmFsdWUgfHwgc2VsZWN0ZWQpO1xuICAvLyBIYW5kbGUgY2hhbmdlXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChvcHRpb24pID0+IHtcbiAgICBzZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgICBjb25zdCBldmVudCA9IHtcbiAgICAgIHRhcmdldDoge1xuICAgICAgICB2YWx1ZTogb3B0aW9uLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKTtcbiAgfTtcbiAgLy8gSGFuZGxlIEJsdXJcbiAgY29uc3QgaGFuZGxlQmx1ciA9ICgpID0+IHtcbiAgICBjb25zdCBldmVudCA9IHtcbiAgICAgIHRhcmdldDoge1xuICAgICAgICB2YWx1ZTogc2VsZWN0ZWRPcHRpb24sXG4gICAgICB9LFxuICAgIH07XG4gICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgIHNldFRvdWNoZWQoaWQpO1xuICAgIHNldEZvY3VzQ2xhc3Moc2VsZWN0ZWRPcHRpb24gJiYgc2VsZWN0ZWRPcHRpb24udmFsdWUpO1xuICB9O1xuICBjb25zdCB7IFJlYWN0U2VsZWN0LCBMYWJlbCA9ICdsYWJlbCcsIEJveCA9ICdkaXYnIH0gPSBzdHlsZWRDb21wb25lbnRzIHx8IGZhbHNlO1xuXG4gIGNvbnN0IFJTZWxlY3QgPSBSZWFjdFNlbGVjdCB8fCBTZWxlY3Q7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICAodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3JcbiAgICAgICAgICA/IGBmb3JtLWZpZWxkIGVycm9yICR7Y3NzQ2xhc3N9YFxuICAgICAgICAgIDogYGZvcm0tZmllbGQgJHtjc3NDbGFzc31gXG4gICAgICB9XG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyAnbm9uZScgOiB1bmRlZmluZWQgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZX0+XG4gICAgICAgIDxJbnB1dExhYmVsXG4gICAgICAgICAgZm9ybUlkPXtmb3JtSWR9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgICBsYWJlbFBsYWNlbWVudD17bGFiZWxQbGFjZW1lbnR9XG4gICAgICAgICAgaXNSZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICBzdHlsZWRDb21wb25lbnQ9e3N0eWxlZENvbXBvbmVudHN9XG4gICAgICAgIC8+XG4gICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gJ2Fib3ZlJyAmJiBkZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPFJTZWxlY3RcbiAgICAgICAgICBuYW1lPXtjdXN0b21OYW1lIHx8IGBpbnB1dF8ke2lkfWB9XG4gICAgICAgICAgcmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgdmFsdWU9e3NlbGVjdGVkT3B0aW9uICYmIHNlbGVjdGVkT3B0aW9uLnZhbHVlID8gc2VsZWN0ZWRPcHRpb24gOiAnJ31cbiAgICAgICAgICBvbkNoYW5nZT17KG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKG9wdGlvbiwgZmllbGQpO1xuICAgICAgICAgICAgdW5zZXRFcnJvcihpZCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkJsdXI9eygpID0+IGhhbmRsZUJsdXIoKX1cbiAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRGb2N1c0NsYXNzKHRydWUpfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tc2VsZWN0XCJcbiAgICAgICAgICBhdXRvRm9jdXM9e2ZhbHNlfVxuICAgICAgICAgIC8vIHN0eWxlcz17Y3VzdG9tU3R5bGVzfVxuICAgICAgICAgIGlucHV0SWQ9e2BpbnB1dF8ke2Zvcm1JZH1fJHtpZH1gfVxuICAgICAgICAvPlxuICAgICAgICB7ZGVzY3JpcHRpb25QbGFjZW1lbnQgIT09ICdhYm92ZScgJiYgZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHsoKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yKSAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtmb3JtSWR9XyR7aWR9YH0+XG4gICAgICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2UgfHwgZXJyb3J9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuIl19