"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _isomorphicUnfetch=_interopRequireDefault(require("isomorphic-unfetch")),_index=require("./index"),_validation=require("../validation"),_checkConditionalLogic=require("./checkConditionalLogic");async function fetchForm({initialPage:a,fetchOptions:b,setFormData:c,setFormValues:d,setActivePage:e,setConditionFields:f,setConditionalIds:g,setPages:h,setIsMultiPart:i,populatedFields:j,populatedEntry:k,getParams:l,backendUrl:m,formID:n}){let o=!1;const p=l?Object.keys(l).map(a=>`${a}=${l[a]}`).join("&"):"",q=`${m}/${n}${p?`?${p}`:""}`,r=await(0,_isomorphicUnfetch.default)(q,b).then(a=>a.json()).then(a=>a).catch(a=>console.log(a));if(r){const b={},l=[],m=[],n=[];for(const a of r.fields){let c;if("page"===a.type&&n.push(a.id),c=(0,_index.getFieldPrepopulatedValue)(a,j,k),"fileupload"===a.type&&(o=!0),a.conditionalLogic){const b={id:a.id,conditionalLogic:a.conditionalLogic},c=a.conditionalLogic.rules.map(a=>a.fieldId);for(let a=0;a<c.length;a++){const b=parseInt(c[a]);-1===m.indexOf(b)&&m.push(b)}l.push(b)}b[a.id]={valid:(0,_validation.validateField)(c,a),value:c,label:a.label,pageNumber:a.pageNumber,cssClass:a.cssClass,isRequired:a.isRequired,type:a.type,inputName:a.inputName}}for(let a=0;a<l.length;a++)b[l[a].id].hideField=(0,_checkConditionalLogic.checkConditionalLogic)(l[a].conditionalLogic,b);c(r),d(b),e(a||!!r.pagination&&1),f(l),g(m),o&&i(o),!n.length||h(n)}}var _default=exports.default=fetchForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJmZXRjaEZvcm0iLCJpbml0aWFsUGFnZSIsImZldGNoT3B0aW9ucyIsInNldEZvcm1EYXRhIiwic2V0Rm9ybVZhbHVlcyIsInNldEFjdGl2ZVBhZ2UiLCJzZXRDb25kaXRpb25GaWVsZHMiLCJzZXRDb25kaXRpb25hbElkcyIsInNldFBhZ2VzIiwic2V0SXNNdWx0aVBhcnQiLCJwb3B1bGF0ZWRGaWVsZHMiLCJwb3B1bGF0ZWRFbnRyeSIsImdldFBhcmFtcyIsImJhY2tlbmRVcmwiLCJmb3JtSUQiLCJpc011bHRpcGFydCIsInF1ZXJ5U3RyaW5nIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImpvaW4iLCJyZXF1ZXN0VXJsIiwiZm9ybSIsImZldGNoIiwidGhlbiIsInJlc3AiLCJqc29uIiwicmVzcG9uc2UiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJmb3JtVmFsdWVzIiwiY29uZGl0aW9uRmllbGRzIiwiY29uZGl0aW9uYWxJZHMiLCJwYWdlcyIsImZpZWxkIiwiZmllbGRzIiwidmFsdWUiLCJ0eXBlIiwicHVzaCIsImlkIiwiZ2V0RmllbGRQcmVwb3B1bGF0ZWRWYWx1ZSIsImNvbmRpdGlvbmFsTG9naWMiLCJ0bXBGaWVsZCIsImlkcyIsInJ1bGVzIiwiaXRlbSIsImZpZWxkSWQiLCJpIiwibGVuZ3RoIiwicGFyc2VJbnQiLCJpbmRleE9mIiwidmFsaWQiLCJ2YWxpZGF0ZUZpZWxkIiwibGFiZWwiLCJwYWdlTnVtYmVyIiwiY3NzQ2xhc3MiLCJpc1JlcXVpcmVkIiwiaW5wdXROYW1lIiwiaGlkZUZpZWxkIiwiY2hlY2tDb25kaXRpb25hbExvZ2ljIiwicGFnaW5hdGlvbiIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvSGVscGVycy9mb3JtL2ZldGNoRm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuaW1wb3J0IHsgZ2V0RmllbGRQcmVwb3B1bGF0ZWRWYWx1ZSB9IGZyb20gXCIuL2luZGV4XCI7XG5pbXBvcnQgeyB2YWxpZGF0ZUZpZWxkIH0gZnJvbSBcIi4uL3ZhbGlkYXRpb25cIjtcbmltcG9ydCB7Y2hlY2tDb25kaXRpb25hbExvZ2ljfSBmcm9tIFwiLi9jaGVja0NvbmRpdGlvbmFsTG9naWNcIjtcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hGb3JtKHtcbiAgaW5pdGlhbFBhZ2UsXG4gIGZldGNoT3B0aW9ucyxcbiAgc2V0Rm9ybURhdGEsXG4gIHNldEZvcm1WYWx1ZXMsXG4gIHNldEFjdGl2ZVBhZ2UsXG4gIHNldENvbmRpdGlvbkZpZWxkcyxcbiAgc2V0Q29uZGl0aW9uYWxJZHMsXG4gIHNldFBhZ2VzLFxuICBzZXRJc011bHRpUGFydCxcbiAgcG9wdWxhdGVkRmllbGRzLFxuICBwb3B1bGF0ZWRFbnRyeSxcbiAgZ2V0UGFyYW1zLFxuICBiYWNrZW5kVXJsLFxuICBmb3JtSUQsXG59KSB7XG4gIGxldCBpc011bHRpcGFydCA9IGZhbHNlO1xuXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gZ2V0UGFyYW1zXG4gICAgPyBPYmplY3Qua2V5cyhnZXRQYXJhbXMpXG4gICAgICAgIC5tYXAoa2V5ID0+IGAke2tleX09JHtnZXRQYXJhbXNba2V5XX1gKVxuICAgICAgICAuam9pbihcIiZcIilcbiAgICA6IFwiXCI7XG4gIGNvbnN0IHJlcXVlc3RVcmwgPSBgJHtiYWNrZW5kVXJsfS8ke2Zvcm1JRH0ke1xuICAgIHF1ZXJ5U3RyaW5nID8gYD8ke3F1ZXJ5U3RyaW5nfWAgOiBcIlwiXG4gIH1gO1xuICBcbiAgY29uc3QgZm9ybSA9IGF3YWl0IGZldGNoKHJlcXVlc3RVcmwsIGZldGNoT3B0aW9ucylcbiAgICAudGhlbihyZXNwID0+IHJlc3AuanNvbigpKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlKVxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcblxuXG4gIGlmIChmb3JtKSB7XG4gICAgY29uc3QgZm9ybVZhbHVlcyA9IHt9O1xuICAgIGNvbnN0IGNvbmRpdGlvbkZpZWxkcyA9IFtdO1xuICAgIGNvbnN0IGNvbmRpdGlvbmFsSWRzID0gW107XG4gICAgY29uc3QgcGFnZXMgPSBbXTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGZvcm0uZmllbGRzKSB7XG4gICAgICBsZXQgdmFsdWU7XG5cbiAgICAgIGlmIChmaWVsZC50eXBlID09PSBcInBhZ2VcIikge1xuICAgICAgICBwYWdlcy5wdXNoKGZpZWxkLmlkKTtcbiAgICAgIH1cblxuICAgICAgdmFsdWUgPSBnZXRGaWVsZFByZXBvcHVsYXRlZFZhbHVlKGZpZWxkLCBwb3B1bGF0ZWRGaWVsZHMsIHBvcHVsYXRlZEVudHJ5KTtcblxuICAgICAgaWYgKGZpZWxkLnR5cGUgPT09IFwiZmlsZXVwbG9hZFwiKSB7XG4gICAgICAgIGlzTXVsdGlwYXJ0ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gZ3JhYiBhbGwgY29uZGl0aW9uYWwgbG9naWMgZmllbGRzXG4gICAgICBpZiAoZmllbGQuY29uZGl0aW9uYWxMb2dpYykge1xuICAgICAgICBjb25zdCB0bXBGaWVsZCA9IHtcbiAgICAgICAgICBpZDogZmllbGQuaWQsXG4gICAgICAgICAgY29uZGl0aW9uYWxMb2dpYzogZmllbGQuY29uZGl0aW9uYWxMb2dpYyxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaWRzID0gZmllbGQuY29uZGl0aW9uYWxMb2dpYy5ydWxlcy5tYXAoaXRlbSA9PiBpdGVtLmZpZWxkSWQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQoaWRzW2ldKTtcbiAgICAgICAgICBpZiAoY29uZGl0aW9uYWxJZHMuaW5kZXhPZihpZCkgPT09IC0xKSB7XG4gICAgICAgICAgICBjb25kaXRpb25hbElkcy5wdXNoKGlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uZGl0aW9uRmllbGRzLnB1c2godG1wRmllbGQpO1xuICAgICAgfVxuXG4gICAgICBmb3JtVmFsdWVzW2ZpZWxkLmlkXSA9IHtcbiAgICAgICAgdmFsaWQ6IHZhbGlkYXRlRmllbGQodmFsdWUsIGZpZWxkKSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGxhYmVsOiBmaWVsZC5sYWJlbCxcbiAgICAgICAgcGFnZU51bWJlcjogZmllbGQucGFnZU51bWJlcixcbiAgICAgICAgY3NzQ2xhc3M6IGZpZWxkLmNzc0NsYXNzLFxuICAgICAgICBpc1JlcXVpcmVkOiBmaWVsZC5pc1JlcXVpcmVkLFxuICAgICAgICB0eXBlOiBmaWVsZC50eXBlLFxuICAgICAgICBpbnB1dE5hbWU6IGZpZWxkLmlucHV0TmFtZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgY29uZGl0aW9uIGxvZ2ljXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25kaXRpb25GaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvcm1WYWx1ZXNbY29uZGl0aW9uRmllbGRzW2ldLmlkXS5oaWRlRmllbGQgPSBjaGVja0NvbmRpdGlvbmFsTG9naWMoXG4gICAgICAgIGNvbmRpdGlvbkZpZWxkc1tpXS5jb25kaXRpb25hbExvZ2ljLFxuICAgICAgICBmb3JtVmFsdWVzXG4gICAgICApO1xuICAgIH1cbiAgICBzZXRGb3JtRGF0YShmb3JtKTtcbiAgICBzZXRGb3JtVmFsdWVzKGZvcm1WYWx1ZXMpO1xuICAgIHNldEFjdGl2ZVBhZ2UoaW5pdGlhbFBhZ2UgfHwgKGZvcm0ucGFnaW5hdGlvbiA/IDEgOiBmYWxzZSkpO1xuICAgIHNldENvbmRpdGlvbkZpZWxkcyhjb25kaXRpb25GaWVsZHMpO1xuICAgIHNldENvbmRpdGlvbmFsSWRzKGNvbmRpdGlvbmFsSWRzKTtcblxuICAgIGlmIChpc011bHRpcGFydCkgc2V0SXNNdWx0aVBhcnQoaXNNdWx0aXBhcnQpO1xuXG4gICAgaWYgKCEhcGFnZXMubGVuZ3RoKSBzZXRQYWdlcyhwYWdlcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hGb3JtO1xuIl0sIm1hcHBpbmdzIjoib1hBS0EsY0FBZSxDQUFBQSxTQUFTQSxDQUFDLENBQ3ZCQyxXQUFXLENBQVhBLENBQVcsQ0FDWEMsWUFBWSxDQUFaQSxDQUFZLENBQ1pDLFdBQVcsQ0FBWEEsQ0FBVyxDQUNYQyxhQUFhLENBQWJBLENBQWEsQ0FDYkMsYUFBYSxDQUFiQSxDQUFhLENBQ2JDLGtCQUFrQixDQUFsQkEsQ0FBa0IsQ0FDbEJDLGlCQUFpQixDQUFqQkEsQ0FBaUIsQ0FDakJDLFFBQVEsQ0FBUkEsQ0FBUSxDQUNSQyxjQUFjLENBQWRBLENBQWMsQ0FDZEMsZUFBZSxDQUFmQSxDQUFlLENBQ2ZDLGNBQWMsQ0FBZEEsQ0FBYyxDQUNkQyxTQUFTLENBQVRBLENBQVMsQ0FDVEMsVUFBVSxDQUFWQSxDQUFVLENBQ1ZDLE1BQU0sQ0FBTkEsQ0FDRixDQUFDLENBQUUsQ0FDRCxHQUFJLENBQUFDLENBQVcsR0FBUSxDQUFDLEtBRWxCLENBQUFDLENBQVcsQ0FBR0osQ0FBUyxDQUN6QkssTUFBTSxDQUFDQyxJQUFJLENBQUNOLENBQVMsQ0FBQyxDQUNuQk8sR0FBRyxDQUFDQyxDQUFHLEVBQUssR0FBRUEsQ0FBSSxJQUFHUixDQUFTLENBQUNRLENBQUcsQ0FBRSxFQUFDLENBQUMsQ0FDdENDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FDWixFQUFFLENBQ0FDLENBQVUsQ0FBSSxHQUFFVCxDQUFXLElBQUdDLENBQU8sR0FDekNFLENBQVcsQ0FBSSxJQUFHQSxDQUFZLEVBQUMsQ0FBRyxFQUNuQyxFQUFDLENBRUlPLENBQUksQ0FBRyxLQUFNLEdBQUFDLDBCQUFLLEVBQUNGLENBQVUsQ0FBRXBCLENBQVksQ0FBQyxDQUMvQ3VCLElBQUksQ0FBQ0MsQ0FBSSxFQUFJQSxDQUFJLENBQUNDLElBQUksQ0FBQyxD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