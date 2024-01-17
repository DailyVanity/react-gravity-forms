"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.validateField=exports.selectValidation=exports.isUrl=exports.isRequired=exports.isEmpty=exports.isEmail=exports.checkboxValidation=void 0;const getMessage=(a,b)=>!!b&&(a&&"object"==typeof a&&a.custom?a.custom:a&&"object"==typeof a&&a[b]?a[b]:a),isEmail=(a,b,c)=>{if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)){const a=getMessage(c,"email");return a||"Enter a valid email"}return!1};exports.isEmail=isEmail;const isUrl=(a,b,c)=>{if(!/^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i.test(a)){const a=getMessage(c,"url");return a||"Enter a valid url"}return!1};exports.isUrl=isUrl;const isEmpty=a=>!a;exports.isEmpty=isEmpty;const isRequired=(a,b,c)=>{if(a&&b){const a=getMessage(c,"required");return a||"This field is required"}return!1};exports.isRequired=isRequired;const selectValidation=(a,b,c)=>!(b===c&&a);exports.selectValidation=selectValidation;const checkboxValidation=(a,b)=>!!(1>a.length)&&(b||"This field is required");exports.checkboxValidation=checkboxValidation;const emailValidation=(a,b)=>{const{inputs:c,isRequired:d,errorMessage:e}=b||!1,{required:f,mismatch:g}=e||!1,h=a&&a.filter(a=>a&&""===a.val).length;if((a&&2>a.length||0!==h)&&d)return f||"This field is required";if(a&&0<a.length)for(let b=0;a.length>b;b++){const c=isEmail(a[b].val);if(c)return c}return!!(a&&2===a.length&&c&&2===c.length&&a[1]&&a[0]&&""!==a[1].val&&a[1].val!==a[0].val)&&(g||"Mismatch")},passwordValidation=(a,b)=>{const{inputs:c,isRequired:d,errorMessage:e}=b||!1,{required:f,mismatch:g}=e||!1,h=c.filter(a=>!a.isHidden),i=a&&a.filter(a=>a&&""===a.val).length;return(a&&0===a.length||i===h.length)&&d?f||"This field is required":!!(a&&2===a.length&&h&&2===h.length&&a[1]&&a[0]&&""!==a[1].val&&a[1].val!==a[0].val)&&(g||"Mismatch")},isPostcode=(a,b,c)=>{if(!/^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(a)){const a=getMessage(c,"email");return a||"Enter a valid postcode"}return!1},isDate=(a,b)=>{const c=[];for(let d=0;d<a.length;d++)if(a[d]){const{val:e,label:f}=a[d];if(e)if("MM"===f){const a=b.errorMessage.month;(e.length>2||e<1||e>12)&&(c[d]={index:d,message:getMessage(a,"date")||"Enter a valid month"})}else if("DD"===f){const a=b.errorMessage.date;(e.length>2||e<1||e>31)&&(c[d]={index:d,message:getMessage(a,"date")||"Enter a valid date"})}else if("YYYY"===f){const a=b.errorMessage.year,f=new Date().getFullYear()+1;(e.length>4||e<1920||e>f)&&(c[d]={index:d,message:getMessage(a,"date")||"Enter a valid year"})}}return c},validateField=(a,b)=>{const{type:c,isRequired:d}=b;if(("checkbox"===c||"radio"===c)&&d)return checkboxValidation(a,b.errorMessage);if("password"===c)return passwordValidation(a,b);if("email"===c&&b.emailConfirmEnabled)return emailValidation(a,b);const e=isEmpty(a);let f="";const g=!!(b&&b.errorMessage)&&b.errorMessage;if(f=!!d&&isRequired(d,e,g),!f&&!e)if("email"===c)f=isEmail(a,b,g);else if("website"===c)f=isUrl(a,b,g);else if("date"===c){let c=!0;c=b.dateType&&"datepicker"===b.dateType?!!d&&isRequired(d,e,g):isDate(a,b),f=!!(0<c.length)&&c}else"postcode"===c&&(f=isPostcode(a,b,g));return f};exports.validateField=validateField;