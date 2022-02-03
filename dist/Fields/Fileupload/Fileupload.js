"use strict";var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard"),_interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass")),_assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized")),_inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits")),_possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn")),_getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_react=_interopRequireWildcard(require("react")),_reactDropzone=_interopRequireDefault(require("react-dropzone")),_GFDropzone=_interopRequireDefault(require("./GFDropzone")),_InputLabel=_interopRequireDefault(require("../../FormElements/InputLabel"));function _createSuper(a){var b=_isNativeReflectConstruct();return function(){var c,d=(0,_getPrototypeOf2["default"])(a);if(b){var e=(0,_getPrototypeOf2["default"])(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return(0,_possibleConstructorReturn2["default"])(this,c)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}var Fileupload=function(a){function b(){var a;(0,_classCallCheck2["default"])(this,b);for(var d=arguments.length,e=Array(d),f=0;f<d;f++)e[f]=arguments[f];return a=c.call.apply(c,[this].concat(e)),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"state",{imagePreviewUrl:a.props.field.preview||null,selectedFile:!!a.props.field.preview||null,uploadFileText:"No file chosen",previewID:a.props.value||null,errorText:a.props.error||!1}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"inputFile",_react["default"].createRef()),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"onChangeHandler",function(b){var c=a.props.field,d=c.hasPreview,e=c.allowedExtensions;if(a.setState({imagePreviewUrl:null,selectedFile:b.target.files[0],uploadFileText:b.target.files[0]?b.target.files[0].name:"No file chosen"}),d&&b.target&&b.target.files[0]){var f=b.target.files[0].name.split(".").pop().toLowerCase(),g=-1<e.indexOf(f);if(g){var h=new FileReader;h.onloadend=function(){a.setState({imagePreviewUrl:h.result,previewID:!1})},h.readAsDataURL(b.target.files[0])}}}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"removeFilePreview",function(){var b=a.props,c=b.field,d=b.unsetError;a.inputFile.current.value="",a.setState({imagePreviewUrl:null,selectedFile:null,previewID:!1}),d(c.id)}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"prepareAllowedTypes",function(a){var b=a.split(",");return b=b.map(function(a){return".".concat(a.replace(/\s/g,""))}).join(", "),b}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"onButtonClickHandler",function(){a.inputFile.current.click()}),(0,_defineProperty2["default"])((0,_assertThisInitialized2["default"])(a),"removeFile",function(b,c){b.preventDefault();var d=a.props.updateForm;d({target:{value:""}},c),a.inputFile.current.value="",a.setState({imagePreviewUrl:!1,selectedFile:!1,previewID:!1,uploadFileText:"No file chosen"})}),a}(0,_inherits2["default"])(b,a);var c=_createSuper(b);return(0,_createClass2["default"])(b,[{key:"render",value:function render(){var a=this,b=this.state,c=b.selectedFile,d=b.uploadFileText,e=b.imagePreviewUrl,f=b.previewID,g=this.props,h=g.field,i=g.value,j=g.validationMessage,k=g.touched,l=g.setTouched,m=g.hideField,n=g.updateForm,o=g.formID,p=g.fieldError,q=g.styledComponents,r=g.error,s=g.unsetError,t=g.dropzoneText,u=h.id,v=h.type,w=h.label,x=h.cssClass,y=h.isRequired,z=h.description,A=h.descriptionPlacement,B=h.labelPlacement,C=h.width,D=h.allowedExtensions,E=h.buttonText,F=h.hasPreview,G=h.maxFileSize,H=q||!1,I=H.Button,J=void 0===I?"button":I,K=H.Label,L=void 0===K?"label":K,M=H.FileWrapper,N=void 0===M?"div":M,O=H.Box,P=void 0===O?"div":O,Q=-1<x.indexOf("dropzone");return console.log("hasDropzone",Q),_react["default"].createElement(P,{width:C,className:j&&k||r?"form-field error ".concat(x):"form-field ".concat(x),style:{display:m?"none":void 0}},_react["default"].createElement(N,{className:v},_react["default"].createElement(_InputLabel["default"],{formId:o,id:u,label:w,labelPlacement:B,isRequired:y,styledComponent:q}),"above"===A&&z&&z&&_react["default"].createElement("div",{className:"description"},z),Q?_react["default"].createElement(_GFDropzone["default"],{dropzoneText:t,field:h,id:u,formID:o,isRequired:y,updateForm:n,setTouched:l,unsetError:s}):_react["default"].createElement(_react["default"].Fragment,null,G&&_react["default"].createElement("input",{type:"hidden",name:"MAX_FILE_SIZE",value:1048576*G}),_react["default"].createElement("input",{id:"input_".concat(o,"_").concat(u),name:"input_".concat(u),type:"file",required:y,ref:this.inputFile,onChange:function onChange(b){var c,d,e;a.onChangeHandler(b),n({target:{value:null===b||void 0===b||null===(c=b.target)||void 0===c||null===(d=c.files)||void 0===d||null===(e=d[0])||void 0===e?void 0:e.name}},h),l(u),s(u)},onBlur:function onBlur(a){var b,c,d;n({target:{value:null===a||void 0===a||null===(b=a.target)||void 0===b||null===(c=b.files)||void 0===c||null===(d=c[0])||void 0===d?void 0:d.name}},h),l(u)},accept:this.prepareAllowedTypes(D)||void 0,"aria-label":w,"aria-describedby":"error_".concat(o,"_").concat(u),"aria-invalid":!!j||!!r,hidden:"hidden"}),f&&h.preview&&_react["default"].createElement("input",{type:"hidden",name:"file-upload-preview",value:f}),F&&_react["default"].createElement("div",{className:"file-preview",style:c&&e?{backgroundImage:"url(".concat(e,")")}:void 0},c&&e&&_react["default"].createElement("button",{type:"button",className:"remove-file",onClick:function onClick(){return a.removeFilePreview()}})),_react["default"].createElement("div",{"aria-pressed":"false",tabIndex:"0",role:"button",className:"fileUpload",onClick:this.onButtonClickHandler},_react["default"].createElement(J,{color:"yellow",tabIndex:"-1",type:"button"},E||"Choose a file"),!c&&_react["default"].createElement("span",{className:"no-file"},d)),c&&_react["default"].createElement("div",null,_react["default"].createElement("button",{type:"button",onClick:function onClick(b){return a.removeFile(b,h)}},"remove file"),_react["default"].createElement("span",null,d)),z&&"above"!==A&&_react["default"].createElement("div",{className:"description"},z)),(j&&k||r)&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(u)},j||r),p&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(o,"_").concat(u)},p)))}}]),b}(_react.Component),_default=Fileupload;exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9GaWVsZHMvRmlsZXVwbG9hZC9GaWxldXBsb2FkLmpzeCJdLCJuYW1lcyI6WyJGaWxldXBsb2FkIiwiaW1hZ2VQcmV2aWV3VXJsIiwicHJvcHMiLCJmaWVsZCIsInByZXZpZXciLCJzZWxlY3RlZEZpbGUiLCJ1cGxvYWRGaWxlVGV4dCIsInByZXZpZXdJRCIsInZhbHVlIiwiZXJyb3JUZXh0IiwiZXJyb3IiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImV2ZW50IiwiaGFzUHJldmlldyIsImFsbG93ZWRFeHRlbnNpb25zIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJmaWxlcyIsIm5hbWUiLCJleHRlbnNpb24iLCJzcGxpdCIsInBvcCIsInRvTG93ZXJDYXNlIiwiaXNTdWNjZXNzIiwiaW5kZXhPZiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwidW5zZXRFcnJvciIsImlucHV0RmlsZSIsImN1cnJlbnQiLCJpZCIsInR5cGVzIiwiYWNjZXB0IiwibWFwIiwic3RyIiwicmVwbGFjZSIsImpvaW4iLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZUZvcm0iLCJzdGF0ZSIsInZhbGlkYXRpb25NZXNzYWdlIiwidG91Y2hlZCIsInNldFRvdWNoZWQiLCJoaWRlRmllbGQiLCJmb3JtSUQiLCJmaWVsZEVycm9yIiwic3R5bGVkQ29tcG9uZW50cyIsImRyb3B6b25lVGV4dCIsInR5cGUiLCJsYWJlbCIsImNzc0NsYXNzIiwiaXNSZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25QbGFjZW1lbnQiLCJsYWJlbFBsYWNlbWVudCIsIndpZHRoIiwiYnV0dG9uVGV4dCIsIm1heEZpbGVTaXplIiwiQnV0dG9uIiwiTGFiZWwiLCJGaWxlV3JhcHBlciIsIkJveCIsImhhc0Ryb3B6b25lIiwiY29uc29sZSIsImxvZyIsImRpc3BsYXkiLCJvbkNoYW5nZUhhbmRsZXIiLCJwcmVwYXJlQWxsb3dlZFR5cGVzIiwiYmFja2dyb3VuZEltYWdlIiwicmVtb3ZlRmlsZVByZXZpZXciLCJvbkJ1dHRvbkNsaWNrSGFuZGxlciIsInJlbW92ZUZpbGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI4c0RBS01BLENBQUFBLFUsd1FBQ0ksQ0FDTkMsZUFBZSxDQUFFLEVBQUtDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsT0FBakIsRUFBNEIsSUFEdkMsQ0FFTkMsWUFBWSxHQUFFLEVBQUtILEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsT0FBbkIsRUFBb0MsSUFGMUMsQ0FHTkUsY0FBYyxDQUFFLGdCQUhWLENBSU5DLFNBQVMsQ0FBRSxFQUFLTCxLQUFMLENBQVdNLEtBQVgsRUFBb0IsSUFKekIsQ0FLTkMsU0FBUyxDQUFFLEVBQUtQLEtBQUwsQ0FBV1EsS0FBWCxJQUxMLEMsd0ZBUUlDLGtCQUFNQyxTQUFOLEUsOEZBRU0sU0FBQ0MsQ0FBRCxDQUFXLE9BQ2UsRUFBS1gsS0FBTCxDQUFXQyxLQUQxQixDQUNuQlcsQ0FEbUIsR0FDbkJBLFVBRG1CLENBQ1BDLENBRE8sR0FDUEEsaUJBRE8sQ0FVM0IsR0FSQSxFQUFLQyxRQUFMLENBQWMsQ0FDWmYsZUFBZSxDQUFFLElBREwsQ0FFWkksWUFBWSxDQUFFUSxDQUFLLENBQUNJLE1BQU4sQ0FBYUMsS0FBYixDQUFtQixDQUFuQixDQUZGLENBR1paLGNBQWMsQ0FBRU8sQ0FBSyxDQUFDSSxNQUFOLENBQWFDLEtBQWIsQ0FBbUIsQ0FBbkIsRUFDWkwsQ0FBSyxDQUFDSSxNQUFOLENBQWFDLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0JDLElBRFYsQ0FFWixnQkFMUSxDQUFkLENBUUEsQ0FBSUwsQ0FBVSxFQUFJRCxDQUFLLENBQUNJLE1BQXBCLEVBQThCSixDQUFLLENBQUNJLE1BQU4sQ0FBYUMsS0FBYixDQUFtQixDQUFuQixDQUFsQyxDQUF5RCxJQUVqREUsQ0FBQUEsQ0FBUyxDQUFHUCxDQUFLLENBQUNJLE1BQU4sQ0FBYUMsS0FBYixDQUFtQixDQUFu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LENBREgsQ0EzSEosQ0FURixDQTJJSCxDLE9BclFzQjJCLGdCLFdBd1FWOUUsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEcm9wem9uZSBmcm9tIFwicmVhY3QtZHJvcHpvbmVcIjtcbmltcG9ydCBHRkRyb3B6b25lIGZyb20gXCIuL0dGRHJvcHpvbmVcIjtcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gXCIuLi8uLi9Gb3JtRWxlbWVudHMvSW5wdXRMYWJlbFwiO1xuXG5jbGFzcyBGaWxldXBsb2FkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgaW1hZ2VQcmV2aWV3VXJsOiB0aGlzLnByb3BzLmZpZWxkLnByZXZpZXcgfHwgbnVsbCxcbiAgICBzZWxlY3RlZEZpbGU6IHRoaXMucHJvcHMuZmllbGQucHJldmlldyA/IHRydWUgOiBudWxsLFxuICAgIHVwbG9hZEZpbGVUZXh0OiBcIk5vIGZpbGUgY2hvc2VuXCIsXG4gICAgcHJldmlld0lEOiB0aGlzLnByb3BzLnZhbHVlIHx8IG51bGwsXG4gICAgZXJyb3JUZXh0OiB0aGlzLnByb3BzLmVycm9yIHx8IGZhbHNlLFxuICB9O1xuXG4gIGlucHV0RmlsZSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gIG9uQ2hhbmdlSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgaGFzUHJldmlldywgYWxsb3dlZEV4dGVuc2lvbnMgfSA9IHRoaXMucHJvcHMuZmllbGQ7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbWFnZVByZXZpZXdVcmw6IG51bGwsXG4gICAgICBzZWxlY3RlZEZpbGU6IGV2ZW50LnRhcmdldC5maWxlc1swXSxcbiAgICAgIHVwbG9hZEZpbGVUZXh0OiBldmVudC50YXJnZXQuZmlsZXNbMF1cbiAgICAgICAgPyBldmVudC50YXJnZXQuZmlsZXNbMF0ubmFtZVxuICAgICAgICA6IFwiTm8gZmlsZSBjaG9zZW5cIixcbiAgICB9KTtcblxuICAgIGlmIChoYXNQcmV2aWV3ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuZmlsZXNbMF0pIHtcbiAgICAgIC8vIGNoZWNrIGZpbGUgdHlwZVxuICAgICAgY29uc3QgZXh0ZW5zaW9uID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdLm5hbWVcbiAgICAgICAgLnNwbGl0KFwiLlwiKVxuICAgICAgICAucG9wKClcbiAgICAgICAgLnRvTG93ZXJDYXNlKCk7IC8vIGZpbGUgZXh0ZW5zaW9uIGZyb20gaW5wdXQgZmlsZVxuICAgICAgY29uc3QgaXNTdWNjZXNzID0gYWxsb3dlZEV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7IC8vIGlzIGV4dGVuc2lvbiBpbiBhY2NlcHRhYmxlIHR5cGVzXG4gICAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGltYWdlUHJldmlld1VybDogcmVhZGVyLnJlc3VsdCxcbiAgICAgICAgICAgIHByZXZpZXdJRDogZmFsc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmVtb3ZlRmlsZVByZXZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBmaWVsZCwgdW5zZXRFcnJvciB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLmlucHV0RmlsZS5jdXJyZW50LnZhbHVlID0gXCJcIjtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGltYWdlUHJldmlld1VybDogbnVsbCxcbiAgICAgIHNlbGVjdGVkRmlsZTogbnVsbCxcbiAgICAgIHByZXZpZXdJRDogZmFsc2UsXG4gICAgfSk7XG4gICAgdW5zZXRFcnJvcihmaWVsZC5pZCk7XG4gIH07XG5cbiAgcHJlcGFyZUFsbG93ZWRUeXBlcyA9ICh0eXBlcykgPT4ge1xuICAgIGxldCBhY2NlcHQgPSB0eXBlcy5zcGxpdChcIixcIik7XG4gICAgYWNjZXB0ID0gYWNjZXB0Lm1hcCgoc3RyKSA9PiBgLiR7c3RyLnJlcGxhY2UoL1xccy9nLCBcIlwiKX1gKS5qb2luKFwiLCBcIik7XG4gICAgcmV0dXJuIGFjY2VwdDtcbiAgfTtcblxuICBvbkJ1dHRvbkNsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICB0aGlzLmlucHV0RmlsZS5jdXJyZW50LmNsaWNrKCk7XG4gIH07XG5cbiAgcmVtb3ZlRmlsZSA9IChlLCBmaWVsZCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IHVwZGF0ZUZvcm0gfSA9IHRoaXMucHJvcHM7XG4gICAgdXBkYXRlRm9ybSh7IHRhcmdldDogeyB2YWx1ZTogXCJcIiB9IH0sIGZpZWxkKTtcbiAgICB0aGlzLmlucHV0RmlsZS5jdXJyZW50LnZhbHVlID0gXCJcIjtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGltYWdlUHJldmlld1VybDogZmFsc2UsXG4gICAgICBzZWxlY3RlZEZpbGU6IGZhbHNlLFxuICAgICAgcHJldmlld0lEOiBmYWxzZSxcbiAgICAgIHVwbG9hZEZpbGVUZXh0OiBcIk5vIGZpbGUgY2hvc2VuXCIsXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRGaWxlLCB1cGxvYWRGaWxlVGV4dCwgaW1hZ2VQcmV2aWV3VXJsLCBwcmV2aWV3SUQgfSA9XG4gICAgICB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3Qge1xuICAgICAgZmllbGQsXG4gICAgICB2YWx1ZSxcbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlLFxuICAgICAgdG91Y2hlZCxcbiAgICAgIHNldFRvdWNoZWQsXG4gICAgICBoaWRlRmllbGQsXG4gICAgICB1cGRhdGVGb3JtLFxuICAgICAgZm9ybUlELFxuICAgICAgZmllbGRFcnJvcixcbiAgICAgIHN0eWxlZENvbXBvbmVudHMsXG4gICAgICBlcnJvcixcbiAgICAgIHVuc2V0RXJyb3IsXG4gICAgICBkcm9wem9uZVRleHQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICB0eXBlLFxuICAgICAgbGFiZWwsXG4gICAgICBjc3NDbGFzcyxcbiAgICAgIGlzUmVxdWlyZWQsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGRlc2NyaXB0aW9uUGxhY2VtZW50LFxuICAgICAgbGFiZWxQbGFjZW1lbnQsXG4gICAgICB3aWR0aCxcbiAgICAgIGFsbG93ZWRFeHRlbnNpb25zLFxuICAgICAgYnV0dG9uVGV4dCxcbiAgICAgIGhhc1ByZXZpZXcsXG4gICAgICBtYXhGaWxlU2l6ZSxcbiAgICB9ID0gZmllbGQ7XG4gICAgY29uc3Qge1xuICAgICAgQnV0dG9uID0gXCJidXR0b25cIixcbiAgICAgIExhYmVsID0gXCJsYWJlbFwiLFxuICAgICAgRmlsZVdyYXBwZXIgPSBcImRpdlwiLFxuICAgICAgQm94ID0gXCJkaXZcIixcbiAgICB9ID0gc3R5bGVkQ29tcG9uZW50cyB8fCBmYWxzZTtcblxuICAgIGNvbnN0IGhhc0Ryb3B6b25lID0gY3NzQ2xhc3MuaW5kZXhPZihcImRyb3B6b25lXCIpID4gLTE7XG5cbiAgICBjb25zb2xlLmxvZyhcImhhc0Ryb3B6b25lXCIsIGhhc0Ryb3B6b25lKTtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgKHZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQpIHx8IGVycm9yXG4gICAgICAgICAgICA/IGBmb3JtLWZpZWxkIGVycm9yICR7Y3NzQ2xhc3N9YFxuICAgICAgICAgICAgOiBgZm9ybS1maWVsZCAke2Nzc0NsYXNzfWBcbiAgICAgICAgfVxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBoaWRlRmllbGQgPyBcIm5vbmVcIiA6IHVuZGVmaW5lZCB9fVxuICAgICAgPlxuICAgICAgICA8RmlsZVdyYXBwZXIgY2xhc3NOYW1lPXt0eXBlfT5cbiAgICAgICAgICA8SW5wdXRMYWJlbFxuICAgICAgICAgICAgZm9ybUlkPXtmb3JtSUR9XG4gICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgICAgICBsYWJlbFBsYWNlbWVudD17bGFiZWxQbGFjZW1lbnR9XG4gICAgICAgICAgICBpc1JlcXVpcmVkPXtpc1JlcXVpcmVkfVxuICAgICAgICAgICAgc3R5bGVkQ29tcG9uZW50PXtzdHlsZWRDb21wb25lbnRzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2Rlc2NyaXB0aW9uUGxhY2VtZW50ID09PSBcImFib3ZlXCIgJiYgZGVzY3JpcHRpb24gJiYgZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtoYXNEcm9wem9uZSA/IChcbiAgICAgICAgICAgIDxHRkRyb3B6b25lXG4gICAgICAgICAgICAgIGRyb3B6b25lVGV4dD17ZHJvcHpvbmVUZXh0fVxuICAgICAgICAgICAgICBmaWVsZD17ZmllbGR9XG4gICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgZm9ybUlEPXtmb3JtSUR9XG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2lzUmVxdWlyZWR9XG4gICAgICAgICAgICAgIHVwZGF0ZUZvcm09e3VwZGF0ZUZvcm19XG4gICAgICAgICAgICAgIHNldFRvdWNoZWQ9e3NldFRvdWNoZWR9XG4gICAgICAgICAgICAgIHVuc2V0RXJyb3I9e3Vuc2V0RXJyb3J9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICB7bWF4RmlsZVNpemUgJiYgKFxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiTUFYX0ZJTEVfU0laRVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17bWF4RmlsZVNpemUgKiAxMDQ4NTc2fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGlkPXtgaW5wdXRfJHtmb3JtSUR9XyR7aWR9YH1cbiAgICAgICAgICAgICAgICBuYW1lPXtgaW5wdXRfJHtpZH1gfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICByZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgICAgICAgICByZWY9e3RoaXMuaW5wdXRGaWxlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2VIYW5kbGVyKGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oXG4gICAgICAgICAgICAgICAgICAgIHsgdGFyZ2V0OiB7IHZhbHVlOiBldmVudD8udGFyZ2V0Py5maWxlcz8uWzBdPy5uYW1lIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgZmllbGRcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICAgIHVuc2V0RXJyb3IoaWQpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25CbHVyPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUZvcm0oXG4gICAgICAgICAgICAgICAgICAgIHsgdGFyZ2V0OiB7IHZhbHVlOiBldmVudD8udGFyZ2V0Py5maWxlcz8uWzBdPy5uYW1lIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgZmllbGRcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBzZXRUb3VjaGVkKGlkKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGFjY2VwdD17XG4gICAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVBbGxvd2VkVHlwZXMoYWxsb3dlZEV4dGVuc2lvbnMpIHx8IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtgZXJyb3JfJHtmb3JtSUR9XyR7aWR9YH1cbiAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9eyEhdmFsaWRhdGlvbk1lc3NhZ2UgfHwgISFlcnJvcn1cbiAgICAgICAgICAgICAgICBoaWRkZW49XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7cHJldmlld0lEICYmIGZpZWxkLnByZXZpZXcgJiYgKFxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZS11cGxvYWQtcHJldmlld1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cHJldmlld0lEfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtoYXNQcmV2aWV3ICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxlLXByZXZpZXdcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEZpbGUgJiYgaW1hZ2VQcmV2aWV3VXJsXG4gICAgICAgICAgICAgICAgICAgICAgPyB7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlUHJldmlld1VybH0pYCB9XG4gICAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRGaWxlICYmIGltYWdlUHJldmlld1VybCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZW1vdmUtZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5yZW1vdmVGaWxlUHJldmlldygpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGFyaWEtcHJlc3NlZD1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICB0YWJJbmRleD1cIjBcIlxuICAgICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGVVcGxvYWRcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25CdXR0b25DbGlja0hhbmRsZXJ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwieWVsbG93XCIgdGFiSW5kZXg9XCItMVwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgIHtidXR0b25UZXh0IHx8IFwiQ2hvb3NlIGEgZmlsZVwifVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIHshc2VsZWN0ZWRGaWxlICYmIChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5vLWZpbGVcIj57dXBsb2FkRmlsZVRleHR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7c2VsZWN0ZWRGaWxlICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHRoaXMucmVtb3ZlRmlsZShlLCBmaWVsZCl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZSBmaWxlXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPnt1cGxvYWRGaWxlVGV4dH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiBkZXNjcmlwdGlvblBsYWNlbWVudCAhPT0gXCJhYm92ZVwiICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7KCh2YWxpZGF0aW9uTWVzc2FnZSAmJiB0b3VjaGVkKSB8fCBlcnJvcikgJiYgKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtpZH1gfT5cbiAgICAgICAgICAgICAge3ZhbGlkYXRpb25NZXNzYWdlIHx8IGVycm9yfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2ZpZWxkRXJyb3IgJiYgKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiIGlkPXtgZXJyb3JfJHtmb3JtSUR9XyR7aWR9YH0+XG4gICAgICAgICAgICAgIHtmaWVsZEVycm9yfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRmlsZVdyYXBwZXI+XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGV1cGxvYWQ7XG4iXX0=