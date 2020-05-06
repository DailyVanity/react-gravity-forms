"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(require("react")),_queryString=_interopRequireDefault(require("query-string"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}var _default=function(a){var b=a.field,c=a.value,d=a.validationMessage,e=a.touched,f=a.setTouched,g=a.updateForm,h=_objectWithoutProperties(a,["field","value","validationMessage","touched","setTouched","updateForm"]),i=b.id,j=b.type,k=b.isRequired,l=b.customName,m=b.formId,n=!1;if(b.allowsPrepopulate){var o=_queryString["default"].parse(location.search);n=o[b.inputName]}return _react["default"].createElement("div",null,_react["default"].createElement("input",{name:l||"input_".concat(i),type:j,value:n?n:c,required:k,onChange:function onChange(a){return g(a,b)},onBlur:function onBlur(a){g(a,b),f(i)},"aria-describedby":"error_".concat(m,"_").concat(i),"aria-invalid":!!d}),d&&e&&_react["default"].createElement("span",{className:"error-message",id:"error_".concat(m,"_").concat(i)},d))};exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9GaWVsZHMvSGlkZGVuLmpzeCJdLCJuYW1lcyI6WyJmaWVsZCIsInZhbHVlIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsInVwZGF0ZUZvcm0iLCJwcm9wcyIsImlkIiwidHlwZSIsImlzUmVxdWlyZWQiLCJjdXN0b21OYW1lIiwiZm9ybUlkIiwicHJlUG9wdWxhdGVkIiwiYWxsb3dzUHJlcG9wdWxhdGUiLCJxdWVyaWVzIiwicXVlcnlTdHJpbmciLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwiaW5wdXROYW1lIiwiZXZlbnQiXSwibWFwcGluZ3MiOiI2dUJBR2UsV0FFVCxJQURKQSxDQUFBQSxDQUNJLEdBREpBLEtBQ0ksQ0FER0MsQ0FDSCxHQURHQSxLQUNILENBRFVDLENBQ1YsR0FEVUEsaUJBQ1YsQ0FENkJDLENBQzdCLEdBRDZCQSxPQUM3QixDQURzQ0MsQ0FDdEMsR0FEc0NBLFVBQ3RDLENBRGtEQyxDQUNsRCxHQURrREEsVUFDbEQsQ0FEaUVDLENBQ2pFLHVHQUVGQyxDQUZFLENBR0FQLENBSEEsQ0FFRk8sRUFGRSxDQUVFQyxDQUZGLENBR0FSLENBSEEsQ0FFRVEsSUFGRixDQUVRQyxDQUZSLENBR0FULENBSEEsQ0FFUVMsVUFGUixDQUVvQkMsQ0FGcEIsQ0FHQVYsQ0FIQSxDQUVvQlUsVUFGcEIsQ0FFZ0NDLENBRmhDLENBR0FYLENBSEEsQ0FFZ0NXLE1BRmhDLENBSUFDLENBQVksR0FKWixDQUtKLEdBQUlaLENBQUssQ0FBQ2EsaUJBQVYsQ0FBNkIsQ0FDM0IsR0FBTUMsQ0FBQUEsQ0FBTyxDQUFHQyx3QkFBWUMsS0FBWixDQUFrQkMsUUFBUSxDQUFDQyxNQUEzQixDQUFoQixDQUNBTixDQUFZLENBQUdFLENBQU8sQ0FBQ2QsQ0FBSyxDQUFDbUIsU0FBUCxDQUN2QixDQUNELE1BQ0UsNENBQ0UseUNBQ0UsSUFBSSxDQUFFVCxDQUFVLGtCQUFhSCxDQUFiLENBRGxCLENBRUUsSUFBSSxDQUFFQyxDQUZSLENBR0UsS0FBSyxDQUFHSSxDQUFELENBQXdCQSxDQUF4QixDQUFnQlgsQ0FIekIsQ0FJRSxRQUFRLENBQUVRLENBSlosQ0FLRSxRQUFRLENBQUUsa0JBQUFXLENBQUssUUFBSWYsQ0FBQUEsQ0FBVSxDQUFDZSxDQUFELENBQVFwQixDQUFSLENBQWQsQ0FMakIsQ0FNRSxNQUFNLENBQUUsZ0JBQUNvQixDQUFELENBQVcsQ0FDakJmLENBQVUsQ0FBQ2UsQ0FBRCxDQUFRcEIsQ0FBUixDQURPLENBRWpCSSxDQUFVLENBQUNHLENBQUQsQ0FDWCxDQVRILENBVUUsbUNBQTJCSSxDQUEzQixhQUFxQ0osQ0FBckMsQ0FWRixDQVdFLGVBQWMsQ0FBQyxDQUFDTCxDQVhsQixFQURGLENBY0dBLENBQWlCLEVBQUlDLENBQXJCLEVBQ0Msd0NBQU0sU0FBUyxDQUFDLGVBQWhCLENBQWdDLEVBQUUsaUJBQVdRLENBQVgsYUFBcUJKLENBQXJCLENBQWxDLEVBQ0dMLENBREgsQ0FmSixDQXFCSCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tICdxdWVyeS1zdHJpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBmaWVsZCwgdmFsdWUsIHZhbGlkYXRpb25NZXNzYWdlLCB0b3VjaGVkLCBzZXRUb3VjaGVkLCB1cGRhdGVGb3JtLCAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsIHR5cGUsIGlzUmVxdWlyZWQsIGN1c3RvbU5hbWUsIGZvcm1JZCxcbiAgfSA9IGZpZWxkO1xuICBsZXQgcHJlUG9wdWxhdGVkID0gZmFsc2U7XG4gIGlmIChmaWVsZC5hbGxvd3NQcmVwb3B1bGF0ZSkge1xuICAgIGNvbnN0IHF1ZXJpZXMgPSBxdWVyeVN0cmluZy5wYXJzZShsb2NhdGlvbi5zZWFyY2gpO1xuICAgIHByZVBvcHVsYXRlZCA9IHF1ZXJpZXNbZmllbGQuaW5wdXROYW1lXTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aW5wdXRcbiAgICAgICAgbmFtZT17Y3VzdG9tTmFtZSB8fCBgaW5wdXRfJHtpZH1gfVxuICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICB2YWx1ZT17IXByZVBvcHVsYXRlZCA/IHZhbHVlIDogcHJlUG9wdWxhdGVkfVxuICAgICAgICByZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHVwZGF0ZUZvcm0oZXZlbnQsIGZpZWxkKX1cbiAgICAgICAgb25CbHVyPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICB1cGRhdGVGb3JtKGV2ZW50LCBmaWVsZCk7XG4gICAgICAgICAgc2V0VG91Y2hlZChpZCk7XG4gICAgICAgIH19XG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfVxuICAgICAgICBhcmlhLWludmFsaWQ9eyEhdmFsaWRhdGlvbk1lc3NhZ2V9XG4gICAgICAvPlxuICAgICAge3ZhbGlkYXRpb25NZXNzYWdlICYmIHRvdWNoZWQgJiYgKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCIgaWQ9e2BlcnJvcl8ke2Zvcm1JZH1fJHtpZH1gfT5cbiAgICAgICAgICB7dmFsaWRhdGlvbk1lc3NhZ2V9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19