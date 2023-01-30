"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray")),_readOnlyError2=_interopRequireDefault(require("@babel/runtime/helpers/readOnlyError")),_validation=require("../validation"),_checkConditionalLogic=_interopRequireDefault(require("./checkConditionalLogic"));function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var _default=function(a,b,c,d,e,f,g){for(var h=arguments.length,j=Array(7<h?h-7:0),k=7;k<h;k++)j[k-7]=arguments[k];var l,m=j.onChange,n=a.id,o=a.type,p=a.isRequired;if("checkbox"===a.type){var q=(0,_toConsumableArray2["default"])(d[a.id].value),r=q.indexOf(b.target.value);-1<r?q.splice(r,1):q.push(b.target.value),l=q}else if("date"==a.type&&"datepicker"!==a.dateType){var s=a.subId,t=a.dateLabel,u=(0,_toConsumableArray2["default"])(d[a.id].value);u[s]={val:b.target.value,label:t},l=u}else if("consent"===a.type)l=b.target?b.target.checked:"null";else if("address"===a.type){var D=_objectSpread({},d[a.id].value);c&&(D[c]=b.target.value),l=D}else if("postcode"===a.type)l=b.target?b.target.value:null,Object.values(d).filter(function(a){return"field--street"===a.cssClass})[0].value=null===b||void 0===b?void 0:b.street,Object.values(d).filter(function(a){return"field--city"===a.cssClass})[0].value=null===b||void 0===b?void 0:b.city;else if("name"===a.type){var v=(0,_toConsumableArray2["default"])(d[a.id].value),w=v.indexOf(c);-1<w?v.splice(w,1):v[c]=b.target.value,l=b.target.value}else if("password"===a.type||"email"===a.type&&a.emailConfirmEnabled){var x=a.subId,y=d[a.id]&&d[a.id].value?(0,_toConsumableArray2["default"])(d[a.id].value):[];y[x]={val:b.target.value},l=y}else l=b.target?b.target.value:"null";"text"===o&&-1<a.cssClass.indexOf("iban")&&(o=((0,_readOnlyError2["default"])("type"),"iban"));var z=(0,_validation.validateField)(l,a);if(-1!==f.indexOf(n)){d[n].value=l;for(var E=0;E<g.length;E++){var A=g[E].id,B=(0,_checkConditionalLogic["default"])(g[E].conditionalLogic,d);d[A].hideField=B,B&&(d[A].isRequired&&B&&(d[A].value=""),d[A].valid=!!d[A].isRequired)}}var C=_objectSpread(_objectSpread({},d),{},(0,_defineProperty2["default"])({},n,{value:l,id:n,valid:z,label:a.label,pageNumber:a.pageNumber,cssClass:a.cssClass,isRequired:a.isRequired}));e(_objectSpread({},C)),m&&m(C)};exports["default"]=_default;