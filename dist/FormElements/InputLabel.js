"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_jsxRuntime=require("react/jsx-runtime");const InputLabel=({formId:a,id:b,label:c,isRequired:d,labelPlacement:e,styledComponent:f})=>{const{Label:g="label"}=f||!1;return(0,_jsxRuntime.jsxs)(g,{htmlFor:`input_${a}_${b}`,className:`gf-label ${e}`,style:{display:"hidden_label"===e?"none":void 0},children:[c,d?(0,_jsxRuntime.jsx)("abbr",{children:"*"}):null]})};var _default=exports.default=InputLabel;