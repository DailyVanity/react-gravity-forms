"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _forceValidation=_interopRequireDefault(require("./forceValidation")),_getNextStep=_interopRequireDefault(require("./getNextStep")),_default=function(a,b,c,d,e,f,g,h,i){a.preventDefault();var j=b.activePage,k=(0,_forceValidation["default"])(e,d,i,h);if(!k)return!1;var l=(0,_getNextStep["default"])(e,c,d);j&&j(e,d,l),f(l),g(!0),i(!1),f(l),g(!0),i(!1)};exports["default"]=_default;