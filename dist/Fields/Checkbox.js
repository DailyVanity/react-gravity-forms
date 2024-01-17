"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_InputLabel=_interopRequireDefault(require("../FormElements/InputLabel")),_jsxRuntime=require("react/jsx-runtime"),_default=({field:a,value:b,validationMessage:c,touched:d,setTouched:e,hideField:f,updateForm:g,styledComponents:h,error:i,unsetError:j,...k})=>{const{id:l,formId:m,type:n,label:o,cssClass:p,isRequired:q,choices:r,inputs:s,description:t,descriptionPlacement:u,labelPlacement:v,width:w,customName:x}=a,{Checkbox:y="fieldset",Label:z="legend",Box:A="div"}=h||!1;return(0,_jsxRuntime.jsx)(A,{width:w,className:c&&d||i?`form-field error ${p}`:`form-field ${p}`,style:{display:f?"none":void 0},children:(0,_jsxRuntime.jsxs)(y,{className:"checkboxes",children:[(0,_jsxRuntime.jsx)(_InputLabel.default,{formId:m,id:l,label:o,labelPlacement:v,isRequired:q,styledComponent:h}),"above"===u&&t&&(0,_jsxRuntime.jsx)("div",{className:"description",dangerouslySetInnerHTML:{__html:t}}),r.map((c,d)=>(0,_jsxRuntime.jsxs)("div",{className:n,children:[(0,_jsxRuntime.jsx)("input",{id:`input_${m}_${s[d].id}`,type:"checkbox",name:x||`input_${s[d].id}`,value:c.value,checked:b.includes(c.value),onChange:b=>{g(b,a),e(l),j(l)}}),(0,_jsxRuntime.jsx)("label",{htmlFor:`input_${m}_${s[d].id}`,children:c.text})]},c.value)),"above"!==u&&t&&(0,_jsxRuntime.jsx)("div",{className:"description",dangerouslySetInnerHTML:{__html:t}}),(c&&d||i)&&(0,_jsxRuntime.jsx)("span",{className:"error-message",id:`error_${m}_${l}`,children:c||i})]})})};exports.default=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGVmYXVsdCIsImZpZWxkIiwidmFsdWUiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsInRvdWNoZWQiLCJzZXRUb3VjaGVkIiwiaGlkZUZpZWxkIiwidXBkYXRlRm9ybSIsInN0eWxlZENvbXBvbmVudHMiLCJlcnJvciIsInVuc2V0RXJyb3IiLCJwcm9wcyIsImlkIiwiZm9ybUlkIiwidHlwZSIsImxhYmVsIiwiY3NzQ2xhc3MiLCJpc1JlcXVpcmVkIiwiY2hvaWNlcyIsImlucHV0cyIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiY3VzdG9tTmFtZSIsIkNoZWNrYm94IiwiTGFiZWwiLCJCb3giLCJfanN4UnVudGltZSIsImpzeCIsIkEiLCJjbGFzc05hbWUiLCJzdHlsZSIsImRpc3BsYXkiLCJjaGlsZHJlbiIsImpzeHMiLCJ5IiwiX0lucHV0TGFiZWwiLCJkZWZhdWx0Iiwic3R5bGVkQ29tcG9uZW50IiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJtYXAiLCJjaG9pY2UiLCJpIiwibmFtZSIsImNoZWNrZWQiLCJpbmNsdWRlcyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJodG1sRm9yIiwidGV4dCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvRmllbGRzL0NoZWNrYm94LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tIFwiLi4vRm9ybUVsZW1lbnRzL0lucHV0TGFiZWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICB2YWxpZGF0aW9uTWVzc2FnZSxcbiAgdG91Y2hlZCxcbiAgc2V0VG91Y2hlZCxcbiAgaGlkZUZpZWxkLFxuICB1cGRhdGVGb3JtLFxuICBzdHlsZWRDb21wb25lbnRzLFxuICBlcnJvcixcbiAgdW5zZXRFcnJvcixcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIGZvcm1JZCxcbiAgICB0eXBlLFxuICAgIGxhYmVsLFxuICAgIGNzc0NsYXNzLFxuICAgIGlzUmVxdWlyZWQsXG4gICAgY2hvaWNlcyxcbiAgICBpbnB1dHMsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZGVzY3JpcHRpb25QbGFjZW1lbnQsXG4gICAgbGFiZWxQbGFjZW1lbnQsXG4gICAgd2lkdGgsXG4gICAgY3VzdG9tTmFtZSxcbiAgfSA9IGZpZWxkO1xuXG4gIGNvbnN0IHtcbiAgICBDaGVja2JveCA9IFwiZmllbGRzZXRcIixcbiAgICBMYWJlbCA9IFwibGVnZW5kXCIsXG4gICAgQm94ID0gXCJkaXZcIixcbiAgfSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICAodmFsaWRhdGlvbk1lc3NhZ2UgJiYgdG91Y2hlZCkgfHwgZXJyb3JcbiAgICAgICAgICA/IGBmb3JtLWZpZWxkIGVycm9yICR7Y3NzQ2xhc3N9YFxuICAgICAgICAgIDogYGZvcm0tZmllbGQgJHtjc3NDbGFzc31gXG4gICAgICB9XG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyBcIm5vbmVcIiA6IHVuZGVmaW5lZCB9fVxuICAgID5cbiAgICAgIDxDaGVja2JveCBjbGFzc05hbWU9XCJjaGVja2JveGVzXCI+XG4gICAgICAgIDxJbnB1dExhYmVsXG4gICAgICAgICAgZm9ybUlkPXtmb3JtSWR9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgICBsYWJlbFBsYWNlbWVudD17bGFiZWxQbGFjZW1lbnR9XG4gICAgICAgICAgaXNSZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICBzdHlsZWRDb21wb25lbnQ9e3N0eWxlZENvbXBvbmVudHN9XG4gICAgICAgIC8+XG4gICAgICAgIHtkZXNjcmlwdGlvblBsYWNlbWVudCA9PT0gXCJhYm92ZVwiICYmIGRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge2Nob2ljZXMubWFwKChjaG9pY2UsIGkpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dHlwZX0ga2V5PXtjaG9pY2UudmFsdWV9PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSWR9XyR7aW5wdXRzW2ldLmlkfWB9XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIG5hbWU9e2N1c3RvbU5hbWUgfHwgYGlucHV0XyR7aW5wdXRzW2ldLmlkfWB9XG4gICAgICAgICAgICAgIHZhbHVlPXtjaG9pY2UudmFsdWV9XG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3ZhbHVlLmluY2x1ZGVzKGNob2ljZS52YWx1ZSl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgdXBkYXRlRm9ybShldmVudCwgZmllbGQpO1xuICAgICAgICAgICAgICAgIHNldFRvdWNoZWQoaWQpO1xuICAgICAgICAgICAgICAgIHVuc2V0RXJyb3IoaWQpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgaW5wdXRfJHtmb3JtSWR9XyR7aW5wdXRzW2ldLmlkfWB9PlxuICAgICAgICAgICAgICB7Y2hvaWNlLnRleHR9XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ICE9PSBcImFib3ZlXCIgJiYgZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7KCh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvcikgJiYgKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIiBpZD17YGVycm9yXyR7Zm9ybUlkfV8ke2lkfWB9PlxuICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlIHx8IGVycm9yfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgIDwvQ2hlY2tib3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuIl0sIm1hcHBpbmdzIjoiOFZBR2VBLENBQUMsQ0FDZEMsS0FBSyxDQUFMQSxDQUFLLENBQ0xDLEtBQUssQ0FBTEEsQ0FBSyxDQUNMQyxpQkFBaUIsQ0FBakJBLENBQWlCLENBQ2pCQyxPQUFPLENBQVBBLENBQU8sQ0FDUEMsVUFBVSxDQUFWQSxDQUFVLENBQ1ZDLFNBQVMsQ0FBVEEsQ0FBUyxDQUNUQyxVQUFVLENBQVZBLENBQVUsQ0FDVkMsZ0JBQWdCLENBQWhCQSxDQUFnQixDQUNoQkMsS0FBSyxDQUFMQSxDQUFLLENBQ0xDLFVBQVUsQ0FBVkEsQ0FBVSxDQUNWLEdBQUdDLENBQ0wsQ0FBQyxHQUFLLE1BQ0UsQ0FDSkMsRUFBRSxDQUFGQSxDQUFFLENBQ0ZDLE1BQU0sQ0FBTkEsQ0FBTSxDQUNOQyxJQUFJLENBQUpBLENBQUksQ0FDSkMsS0FBSyxDQUFMQSxDQUFLLENBQ0xDLFFBQVEsQ0FBUkEsQ0FBUSxDQUNSQyxVQUFVLENBQVZBLENBQVUsQ0FDVkMsT0FBTyxDQUFQQSxDQUFPLENBQ1BDLE1BQU0s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