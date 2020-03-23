"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"RenderFields",{enumerable:!0,get:function get(){return _RenderFields["default"]}}),Object.defineProperty(exports,"FormError",{enumerable:!0,get:function get(){return _FormError["default"]}}),Object.defineProperty(exports,"FormConfirmation",{enumerable:!0,get:function get(){return _FormConfirmation["default"]}}),Object.defineProperty(exports,"validateField",{enumerable:!0,get:function get(){return _validation.validateField}}),Object.defineProperty(exports,"Submit",{enumerable:!0,get:function get(){return _Submit["default"]}}),exports["default"]=void 0;var _react=_interopRequireWildcard(require("react")),_isomorphicUnfetch=_interopRequireDefault(require("isomorphic-unfetch")),_RenderFields=_interopRequireDefault(require("./FormElements/RenderFields")),_FormError=_interopRequireDefault(require("./FormElements/FormError")),_FormConfirmation=_interopRequireDefault(require("./FormElements/FormConfirmation")),_validation=require("./Helpers/validation"),_Submit=_interopRequireDefault(require("./FormElements/Submit"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return _getRequireWildcardCache=function(){return a},a}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;if(null===a||"object"!==_typeof(a)&&"function"!=typeof a)return{default:a};var b=_getRequireWildcardCache();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c["default"]=a,b&&b.set(a,c),c}function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var GravityForm=function(a){function b(a){var c;return _classCallCheck(this,b),c=_possibleConstructorReturn(this,_getPrototypeOf(b).call(this,a)),_defineProperty(_assertThisInitialized(c),"setTouched",function(a){c.setState({touched:_objectSpread({},c.state.touched,_defineProperty({},a,!0))})}),_defineProperty(_assertThisInitialized(c),"unsetError",function(a){var b=c.state.errorMessages;!b||b[a]&&(delete b[a],c.setState({errorMessages:b}))}),_defineProperty(_assertThisInitialized(c),"updateFormHandler",function(a,b){var d,e=c.state,f=e.formValues,g=e.conditioanlIds,h=e.conditionFields,j=b.id,k=b.type,l=b.isRequired;if("checkbox"===b.type){var m=_toConsumableArray(f[b.id].value),n=m.indexOf(a.target.value);-1<n?m.splice(n,1):m.push(a.target.value),d=m}else if("date"==b.type&&"datepicker"!==b.dateType){var o=b.subId,p=b.dateLabel,q=_toConsumableArray(f[b.id].value);q[o]={val:a.target.value,label:p},d=q}else if("consent"==b.type)d=a.target?a.target.checked:"null";else if("password"===b.type){var r=b.subId,s=f[b.id]&&f[b.id].value?_toConsumableArray(f[b.id].value):[];s[r]={val:a.target.value},d=s}else if("email"===b.type&&b.emailConfirmEnabled){var t=b.subId,u=f[b.id]&&f[b.id].value?_toConsumableArray(f[b.id].value):[];u[t]={val:a.target.value},d=u}else d=a.target?a.target.value:"null";"text"===k&&-1<b.cssClass.indexOf("iban")&&(k="iban");var v=(0,_validation.validateField)(d,b);if(-1!==g.indexOf(j)){f[j].value=d;for(var y=0;y<h.length;y++){var w=h[y].id,x=c.checkConditionalLogic(h[y].conditionalLogic,f);f[w].hideField=x,x&&(f[w].isRequired&&x&&(f[w].value=""),f[w].valid=!!f[w].isRequired)}}c.setState({formValues:_objectSpread({},f,_defineProperty({},j,{value:d,id:j,valid:v,label:b.label,pageNumber:b.pageNumber,cssClass:b.cssClass,isRequired:b.isRequired}))},function(){var a=c.props.onChange;a&&a(c.state.formValues)})}),_defineProperty(_assertThisInitialized(c),"scrollToConfirmation",function(){var a=!!c.wrapperRef&&c.wrapperRef.getBoundingClientRect();if(a&&window){var b=window.pageYOffset||document.documentElement.scrollTop;window.scrollTo({top:b+a.top-100})}}),_defineProperty(_assertThisInitialized(c),"onSubmit",function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b){var d,e,f,g,h,i,j;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:b.preventDefault(),c.setState({submitting:!0,submitSuccess:!1,submitFailed:!1,confirmationMessage:!1,errorMessages:!1}),d=c.props,e=d.formID,f=d.backendUrl,g=d.jumpToConfirmation,h=d.onSubmitSuccess,i=f.substring(0,f.indexOf("/wp-json")),j=new FormData(b.target),(0,_isomorphicUnfetch["default"])("".concat(i,"/wp-json/gf/v2/forms/").concat(e,"/submissions"),{method:"POST",body:j}).then(function(a){return a.json()}).then(function(a){if(a&&a.is_valid){if(h){var i=h(a);if(!i)return!1}var b=a.confirmation_message,d=b||!1,e=d.type,f=d.link;if(e&&f&&"redirect"===e&&"undefined"!=typeof window)return window.location.replace(f),!1;c.setState({submitting:!1,submitSuccess:!0,confirmationMessage:a.confirmation_message}),g&&c.scrollToConfirmation()}else c.setState({submitting:!1,submitFailed:!0,errorMessages:"Something went wrong"})})["catch"](function(a){c.setState({submitting:!1,submitFailed:!0,errorMessages:a.response.validation_messages})});case 6:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}()),_defineProperty(_assertThisInitialized(c),"nextStep",function(a){a.preventDefault();var b=c.state.activePage;c.setState({activePage:b+1},function(){return c.scrollToConfirmation()})}),_defineProperty(_assertThisInitialized(c),"prevStep",function(a){a.preventDefault();var b=c.state.activePage;c.setState({activePage:b-1},function(){return c.scrollToConfirmation()})}),_defineProperty(_assertThisInitialized(c),"checkConditionalLogic",function(a){var b=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],d=a.rules,e=a.actionType;if(!d)return!0;for(var f=b||c.state.formValues,g="hide"!==e,h=[],j=0;j<d.length;j++){var k=d[j],l=k.fieldId,m=k.value,n=k.operator,o=f[l].value&&f[l].value.value?f[l].value.value:f[l].value||!1,p=Array.isArray(o)?o.join(""):o;h[j]=m?p&&m==p?"hide"===e:"hide"!==e:p||m?"hide"!==e:"hide"===e,"isnot"===n&&(h[j]=!h[j])}return g=h.every(function(a){return!0===a}),g}),c.state={submitFailed:!1,errorMessages:!1,formValues:{},loading:!0,submitting:!1,submitSuccess:!1,confirmationMessage:!1,isValid:!1,formData:{},touched:{},activePage:!1,conditionFields:{},conditioanlIds:{},isMultipart:!1},c}return _inherits(b,a),_createClass(b,[{key:"componentDidMount",value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(){var b,c,d,e,f,g,h,j,k,l,m,n,o,p,q,r;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return b=this.props,c=b.formID,d=b.backendUrl,e=b.populatedFields,this._isMounted=!0,f=!1,a.next=5,(0,_isomorphicUnfetch["default"])("".concat(d,"/").concat(c)).then(function(a){return a.json()}).then(function(a){return a})["catch"](function(){return!1});case 5:if(g=a.sent,!(g&&this._isMounted)){a.next=32;break}for(h={},j=[],k=[],l=!0,m=!1,n=void 0,a.prev=13,o=function(){var a=q.value,b=void 0,c=a.inputName&&e&&e[a.inputName];if("checkbox"===a.type)b=a.choices.filter(function(b){return c?b.value===e[a.inputName]:b.isSelected}).map(function(a){return a.value});else if("radio"===a.type){if(c)b=e[a.inputName];else{var m=a.choices.find(function(a){return a.isSelected});b=m?m.value:""}}else if("select"===a.type){var n=a.choices.filter(function(b){return c?b.value===e[a.inputName]:b.isSelected}).map(function(a){return{value:a.value,label:a.text}});b=n&&0<n.length?n[0]:""}else b=c?e[a.inputName]:a.defaultValue,"fileupload"===a.type&&(f=!0);if(a.conditionalLogic){for(var d,g={id:a.id,conditionalLogic:a.conditionalLogic},i=a.conditionalLogic.rules.map(function(a){return a.fieldId}),l=0;l<i.length;l++)d=parseInt(i[l]),-1===k.indexOf(d)&&k.push(d);j.push(g)}h[a.id]={valid:(0,_validation.validateField)(b,a),value:b,label:a.label,pageNumber:a.pageNumber,cssClass:a.cssClass,isRequired:a.isRequired}},p=g.fields[Symbol.iterator]();!(l=(q=p.next()).done);l=!0)o();a.next=22;break;case 18:a.prev=18,a.t0=a["catch"](13),m=!0,n=a.t0;case 22:a.prev=22,a.prev=23,l||null==p["return"]||p["return"]();case 25:if(a.prev=25,!m){a.next=28;break}throw n;case 28:return a.finish(25);case 29:return a.finish(22);case 30:for(r=0;r<j.length;r++)h[j[r].id].hideField=this.checkConditionalLogic(j[r].conditionalLogic,h);this.setState({formData:g,formValues:h,activePage:!!g.pagination&&1,conditionFields:j,conditioanlIds:k,isMultipart:f});case 32:case"end":return a.stop();}},a,this,[[13,18,22,30],[23,,25,29]])}));return function componentDidMount(){return a.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function componentWillUnmount(){this._isMounted=!1}},{key:"render",value:function render(){var a=this,b=this.state,c=b.formData,d=b.formValues,e=b.submitFailed,f=b.submitSuccess,g=b.touched,h=b.submitting,i=b.activePage,j=b.isMultipart,k=this.props,l=k.title,m=k.submitIcon,n=k.saveStateToHtmlField,o=k.styledComponents,p=k.customComponents,q=k.errorMessage,r=k.dropzoneText,s=o||!1,t=s.Button,u=s.Loading,v=s.GFWrapper,w=void 0===v?"div":v,x=s.FormError,y=c.cssClass,z=Object.keys(d).some(function(a){return!d[a].hideField&&d[a].valid}),A=!!i&&Object.keys(d).some(function(a){return d[a].pageNumber===i&&!d[a].hideField&&d[a].valid});return _react["default"].createElement(w,{ref:function ref(b){return a.wrapperRef=b},className:"form-wrapper",css:{position:"relative"},id:"gravity_form_".concat(this.props.formID)},c.title?null:u&&_react["default"].createElement(u,{isLoading:!0}),e&&!f&&_react["default"].createElement(_FormError["default"],{SFormError:x||!1,errorMessage:q||"There was a problem with your submission"}),f&&this.state.confirmationMessage&&_react["default"].createElement(_FormConfirmation["default"],{confirmation:this.state.confirmationMessage}),!f&&c.fields?_react["default"].createElement("form",{onSubmit:function onSubmit(b){return a.onSubmit(b)},className:y,encType:j?"multipart/form-data":void 0,noValidate:!0},(c.title||c.description)&&_react["default"].createElement("div",null,c.title&&l?_react["default"].createElement("h3",{className:"form-title"},c.title):null,c.description?_react["default"].createElement("p",{className:"form-description"},c.description):null),_react["default"].createElement("div",{className:"form-wrapper"},_react["default"].createElement(_RenderFields["default"],{styledComponents:o,customComponents:p,fields:c.fields,formValues:d,submitFailed:e,submitSuccess:f,updateForm:this.updateFormHandler,touched:g,setTouched:this.setTouched,pagination:c.pagination,activePage:i,prevStep:this.prevStep,nextStep:this.nextStep,isNextDisabled:A,checkConditionalLogic:this.checkConditionalLogic,saveStateToHtmlField:n,enableHoneypot:c.enableHoneypot,errors:this.state.errorMessages,unsetError:this.unsetError,dropzoneText:r}),(!c.pagination||c.pagination&&c.pagination.pages.length===i)&&_react["default"].createElement(_Submit["default"],{Button:t,Loading:u,formData:c,submitIcon:m,isDisabled:z,submitting:h,prevStep:this.prevStep}))):"")}}]),b}(_react.Component);GravityForm.defaultProps={title:!0,submitIcon:!1,saveStateToHtmlField:!1,jumpToConfirmation:!0};var _default=GravityForm;exports["default"]=_default;