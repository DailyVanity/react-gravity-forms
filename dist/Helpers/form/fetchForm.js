"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator")),_asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator")),_isomorphicUnfetch=_interopRequireDefault(require("isomorphic-unfetch")),_index=require("./index"),_validation=require("../validation"),_checkConditionalLogic=_interopRequireDefault(require("./checkConditionalLogic"));function _createForOfIteratorHelper(a,b){var c;if("undefined"==typeof Symbol||null==a[Symbol.iterator]){if(Array.isArray(a)||(c=_unsupportedIterableToArray(a))||b&&a&&"number"==typeof a.length){c&&(a=c);var d=0,e=function(){};return{s:e,n:function n(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}},e:function e(a){throw a},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f,g=!0,h=!1;return{s:function s(){c=a[Symbol.iterator]()},n:function n(){var a=c.next();return g=a.done,a},e:function e(a){h=!0,f=a},f:function f(){try{g||null==c["return"]||c["return"]()}finally{if(h)throw f}}}}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function fetchForm(){return _fetchForm.apply(this,arguments)}function _fetchForm(){return _fetchForm=(0,_asyncToGenerator2["default"])(_regenerator["default"].mark(function a(b){var c,d,e,f,g,h,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H;return _regenerator["default"].wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=b.initialPage,d=b.fetchOptions,e=b.setFormData,f=b.setFormValues,g=b.setActivePage,h=b.setConditionFields,j=b.setConditionalIds,k=b.setPages,l=b.setIsMultiPart,m=b.populatedFields,n=b.populatedEntry,o=b.getParams,p=b.backendUrl,q=b.formID,r=!1,s=o?Object.keys(o).map(function(a){return"".concat(a,"=").concat(o[a])}).join("&"):"",t="".concat(p,"/").concat(q).concat(s?"?".concat(s):""),a.next=6,(0,_isomorphicUnfetch["default"])(t,d).then(function(a){return a.json()}).then(function(a){return a})["catch"](function(){return!1});case 6:if(u=a.sent,u){v={},w=[],x=[],y=[],z=_createForOfIteratorHelper(u.fields);try{for(z.s();!(A=z.n()).done;){if(B=A.value,C=void 0,"page"===B.type&&y.push(B.id),C=(0,_index.getFieldPrepopulatedValue)(B,m,n),"fileupload"===B.type&&(r=!0),B.conditionalLogic){for(D={id:B.id,conditionalLogic:B.conditionalLogic},E=B.conditionalLogic.rules.map(function(a){return a.fieldId}),F=0;F<E.length;F++)G=parseInt(E[F]),-1===x.indexOf(G)&&x.push(G);w.push(D)}v[B.id]={valid:(0,_validation.validateField)(C,B),value:C,label:B.label,pageNumber:B.pageNumber,cssClass:B.cssClass,isRequired:B.isRequired,type:B.type}}}catch(a){z.e(a)}finally{z.f()}for(H=0;H<w.length;H++)v[w[H].id].hideField=(0,_checkConditionalLogic["default"])(w[H].conditionalLogic,v);e(u),f(v),g(c||!!u.pagination&&1),h(w),j(x),r&&l(r),!y.length||k(y)}case 8:case"end":return a.stop();}},a)})),_fetchForm.apply(this,arguments)}var _default=fetchForm;exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9IZWxwZXJzL2Zvcm0vZmV0Y2hGb3JtLmpzIl0sIm5hbWVzIjpbImZldGNoRm9ybSIsImluaXRpYWxQYWdlIiwiZmV0Y2hPcHRpb25zIiwic2V0Rm9ybURhdGEiLCJzZXRGb3JtVmFsdWVzIiwic2V0QWN0aXZlUGFnZSIsInNldENvbmRpdGlvbkZpZWxkcyIsInNldENvbmRpdGlvbmFsSWRzIiwic2V0UGFnZXMiLCJzZXRJc011bHRpUGFydCIsInBvcHVsYXRlZEZpZWxkcyIsInBvcHVsYXRlZEVudHJ5IiwiZ2V0UGFyYW1zIiwiYmFja2VuZFVybCIsImZvcm1JRCIsImlzTXVsdGlwYXJ0IiwicXVlcnlTdHJpbmciLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5Iiwiam9pbiIsInJlcXVlc3RVcmwiLCJ0aGVuIiwicmVzcCIsImpzb24iLCJyZXNwb25zZSIsImZvcm0iLCJmb3JtVmFsdWVzIiwiY29uZGl0aW9uRmllbGRzIiwiY29uZGl0aW9uYWxJZHMiLCJwYWdlcyIsImZpZWxkcyIsImZpZWxkIiwidmFsdWUiLCJ0eXBlIiwicHVzaCIsImlkIiwiY29uZGl0aW9uYWxMb2dpYyIsInRtcEZpZWxkIiwiaWRzIiwicnVsZXMiLCJpdGVtIiwiZmllbGRJZCIsImkiLCJsZW5ndGgiLCJwYXJzZUludCIsImluZGV4T2YiLCJ2YWxpZCIsImxhYmVsIiwicGFnZU51bWJlciIsImNzc0NsYXNzIiwiaXNSZXF1aXJlZCIsImhpZGVGaWVsZCIsInBhZ2luYXRpb24iXSwibWFwcGluZ3MiOiJrdERBS2VBLENBQUFBLFMsa0pBQWYsMEtBQ0VDLENBQUFBLENBREYsR0FDRUEsV0FERixDQUVFQyxDQUZGLEdBRUVBLFlBRkYsQ0FHRUMsQ0FIRixHQUdFQSxXQUhGLENBSUVDLENBSkYsR0FJRUEsYUFKRixDQUtFQyxDQUxGLEdBS0VBLGFBTEYsQ0FNRUMsQ0FORixHQU1FQSxrQkFORixDQU9FQyxDQVBGLEdBT0VBLGlCQVBGLENBUUVDLENBUkYsR0FR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YixDQUFnQkEsQ0FBQyxDQUFHZixDQUFlLENBQUNnQixNQUFwQyxDQUE0Q0QsQ0FBQyxFQUE3QyxDQUNFaEIsQ0FBVSxDQUFDQyxDQUFlLENBQUNlLENBQUQsQ0FBZixDQUFtQlAsRUFBcEIsQ0FBVixDQUFrQ2dCLFNBQWxDLENBQThDLHNDQUM1Q3hCLENBQWUsQ0FBQ2UsQ0FBRCxDQUFmLENBQW1CTixnQkFEeUIsQ0FFNUNWLENBRjRDLENBQTlDLENBS0Z6QixDQUFXLENBQUN3QixDQUFELENBckRILENBc0RSdkIsQ0FBYSxDQUFDd0IsQ0FBRCxDQXRETCxDQXVEUnZCLENBQWEsQ0FBQ0osQ0FBVyxJQUFLMEIsQ0FBSSxDQUFDMkIsVUFBVixFQUF1QixDQUFuQyxDQXZETCxDQXdEUmhELENBQWtCLENBQUN1QixDQUFELENBeERWLENBeURSdEIsQ0FBaUIsQ0FBQ3VCLENBQUQsQ0F6RFQsQ0EyREpmLENBM0RJLEVBMkRTTixDQUFjLENBQUNNLENBQUQsQ0EzRHZCLENBNkRILENBQUNnQixDQUFLLENBQUNjLE1BN0RKLEVBNkRZckMsQ0FBUSxDQUFDdUIsQ0FBRCxDQUM3QixDQTVGSCx1QyxpREErRmUvQixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyBnZXRGaWVsZFByZXBvcHVsYXRlZFZhbHVlIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyB2YWxpZGF0ZUZpZWxkIH0gZnJvbSAnLi4vdmFsaWRhdGlvbic7XG5pbXBvcnQgY2hlY2tDb25kaXRpb25hbExvZ2ljIGZyb20gJy4vY2hlY2tDb25kaXRpb25hbExvZ2ljJztcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hGb3JtKHtcbiAgaW5pdGlhbFBhZ2UsXG4gIGZldGNoT3B0aW9ucyxcbiAgc2V0Rm9ybURhdGEsXG4gIHNldEZvcm1WYWx1ZXMsXG4gIHNldEFjdGl2ZVBhZ2UsXG4gIHNldENvbmRpdGlvbkZpZWxkcyxcbiAgc2V0Q29uZGl0aW9uYWxJZHMsXG4gIHNldFBhZ2VzLFxuICBzZXRJc011bHRpUGFydCxcbiAgcG9wdWxhdGVkRmllbGRzLFxuICBwb3B1bGF0ZWRFbnRyeSxcbiAgZ2V0UGFyYW1zLFxuICBiYWNrZW5kVXJsLFxuICBmb3JtSUQsXG59KSB7XG4gIGxldCBpc011bHRpcGFydCA9IGZhbHNlO1xuXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gZ2V0UGFyYW1zXG4gICAgPyBPYmplY3Qua2V5cyhnZXRQYXJhbXMpXG4gICAgICAgIC5tYXAoKGtleSkgPT4gYCR7a2V5fT0ke2dldFBhcmFtc1trZXldfWApXG4gICAgICAgIC5qb2luKCcmJylcbiAgICA6ICcnO1xuICBjb25zdCByZXF1ZXN0VXJsID0gYCR7YmFja2VuZFVybH0vJHtmb3JtSUR9JHtxdWVyeVN0cmluZyA/IGA/JHtxdWVyeVN0cmluZ31gIDogJyd9YDtcblxuICBjb25zdCBmb3JtID0gYXdhaXQgZmV0Y2gocmVxdWVzdFVybCwgZmV0Y2hPcHRpb25zKVxuICAgIC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlKVxuICAgIC5jYXRjaCgoKSA9PiBmYWxzZSk7XG5cbiAgaWYgKGZvcm0pIHtcbiAgICBjb25zdCBmb3JtVmFsdWVzID0ge307XG4gICAgY29uc3QgY29uZGl0aW9uRmllbGRzID0gW107XG4gICAgY29uc3QgY29uZGl0aW9uYWxJZHMgPSBbXTtcbiAgICBjb25zdCBwYWdlcyA9IFtdO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgZm9ybS5maWVsZHMpIHtcbiAgICAgIGxldCB2YWx1ZTtcblxuICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdwYWdlJykge1xuICAgICAgICBwYWdlcy5wdXNoKGZpZWxkLmlkKTtcbiAgICAgIH1cblxuICAgICAgdmFsdWUgPSBnZXRGaWVsZFByZXBvcHVsYXRlZFZhbHVlKGZpZWxkLCBwb3B1bGF0ZWRGaWVsZHMsIHBvcHVsYXRlZEVudHJ5KTtcblxuICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdmaWxldXBsb2FkJykge1xuICAgICAgICBpc011bHRpcGFydCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIGdyYWIgYWxsIGNvbmRpdGlvbmFsIGxvZ2ljIGZpZWxkc1xuICAgICAgaWYgKGZpZWxkLmNvbmRpdGlvbmFsTG9naWMpIHtcbiAgICAgICAgY29uc3QgdG1wRmllbGQgPSB7XG4gICAgICAgICAgaWQ6IGZpZWxkLmlkLFxuICAgICAgICAgIGNvbmRpdGlvbmFsTG9naWM6IGZpZWxkLmNvbmRpdGlvbmFsTG9naWMsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGlkcyA9IGZpZWxkLmNvbmRpdGlvbmFsTG9naWMucnVsZXMubWFwKChpdGVtKSA9PiBpdGVtLmZpZWxkSWQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQoaWRzW2ldKTtcbiAgICAgICAgICBpZiAoY29uZGl0aW9uYWxJZHMuaW5kZXhPZihpZCkgPT09IC0xKSB7XG4gICAgICAgICAgICBjb25kaXRpb25hbElkcy5wdXNoKGlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uZGl0aW9uRmllbGRzLnB1c2godG1wRmllbGQpO1xuICAgICAgfVxuXG4gICAgICBmb3JtVmFsdWVzW2ZpZWxkLmlkXSA9IHtcbiAgICAgICAgdmFsaWQ6IHZhbGlkYXRlRmllbGQodmFsdWUsIGZpZWxkKSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGxhYmVsOiBmaWVsZC5sYWJlbCxcbiAgICAgICAgcGFnZU51bWJlcjogZmllbGQucGFnZU51bWJlcixcbiAgICAgICAgY3NzQ2xhc3M6IGZpZWxkLmNzc0NsYXNzLFxuICAgICAgICBpc1JlcXVpcmVkOiBmaWVsZC5pc1JlcXVpcmVkLFxuICAgICAgICB0eXBlOiBmaWVsZC50eXBlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayBjb25kaXRpb24gbG9naWNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmRpdGlvbkZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgZm9ybVZhbHVlc1tjb25kaXRpb25GaWVsZHNbaV0uaWRdLmhpZGVGaWVsZCA9IGNoZWNrQ29uZGl0aW9uYWxMb2dpYyhcbiAgICAgICAgY29uZGl0aW9uRmllbGRzW2ldLmNvbmRpdGlvbmFsTG9naWMsXG4gICAgICAgIGZvcm1WYWx1ZXNcbiAgICAgICk7XG4gICAgfVxuICAgIHNldEZvcm1EYXRhKGZvcm0pO1xuICAgIHNldEZvcm1WYWx1ZXMoZm9ybVZhbHVlcyk7XG4gICAgc2V0QWN0aXZlUGFnZShpbml0aWFsUGFnZSB8fCAoZm9ybS5wYWdpbmF0aW9uID8gMSA6IGZhbHNlKSk7XG4gICAgc2V0Q29uZGl0aW9uRmllbGRzKGNvbmRpdGlvbkZpZWxkcyk7XG4gICAgc2V0Q29uZGl0aW9uYWxJZHMoY29uZGl0aW9uYWxJZHMpO1xuXG4gICAgaWYgKGlzTXVsdGlwYXJ0KSBzZXRJc011bHRpUGFydChpc011bHRpcGFydCk7XG5cbiAgICBpZiAoISFwYWdlcy5sZW5ndGgpIHNldFBhZ2VzKHBhZ2VzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmZXRjaEZvcm07XG4iXX0=