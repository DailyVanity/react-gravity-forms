"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const forceValidation=(a,b,c,d)=>{const e=a?Object.keys(b).some(c=>b[c].pageNumber===a&&!b[c].hideField&&b[c].valid):Object.keys(b).some(a=>!b[a].hideField&&b[a].valid);if(e){const e=a?Object.keys(b).filter(c=>b[c].pageNumber===a):Object.keys(b);return setTouchedFields(e,c,d),!1}return!0};function setTouchedFields(a,b,c){const d=a.reduce((a,b)=>(a={...a,[b]:!0},a),{});b(!0),c(d)}var _default=exports.default=forceValidation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJmb3JjZVZhbGlkYXRpb24iLCJwYWdlIiwiZm9ybVZhbHVlcyIsInNldFNob3dQYWdlVmFsaWRhdGlvbk1zZyIsInNldFRvdWNoZWQiLCJub3RWYWxpZCIsIk9iamVjdCIsImtleXMiLCJzb21lIiwieCIsInBhZ2VOdW1iZXIiLCJoaWRlRmllbGQiLCJ2YWxpZCIsImZpZWxkcyIsImZpbHRlciIsInNldFRvdWNoZWRGaWVsZHMiLCJjdXJyZW50UGFnZVRvdWNoZWQiLCJyZWR1Y2UiLCJjdXJyZW50VG91Y2hlZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvSGVscGVycy9mb3JtL2ZvcmNlVmFsaWRhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEZvcmNlIHZhbGlkYXRlIGN1cnJlbnQgcGFnZSBmaWVsZHNcbiAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlXG4gKi9cblxuY29uc3QgZm9yY2VWYWxpZGF0aW9uID0gKHBhZ2UsIGZvcm1WYWx1ZXMsIHNldFNob3dQYWdlVmFsaWRhdGlvbk1zZywgc2V0VG91Y2hlZCkgPT4ge1xuICAvLyBjaGVjayBpZiBjdXJyZW50IG9hZ2UgaGFzIHJlcXVpcmVkIGZpZWxkc1xuICBjb25zdCBub3RWYWxpZCA9IHBhZ2VcbiAgICA/IE9iamVjdC5rZXlzKGZvcm1WYWx1ZXMpLnNvbWUoXG4gICAgICAgICh4KSA9PiBmb3JtVmFsdWVzW3hdLnBhZ2VOdW1iZXIgPT09IHBhZ2UgJiYgIWZvcm1WYWx1ZXNbeF0uaGlkZUZpZWxkICYmIGZvcm1WYWx1ZXNbeF0udmFsaWRcbiAgICAgIClcbiAgICA6IE9iamVjdC5rZXlzKGZvcm1WYWx1ZXMpLnNvbWUoKHgpID0+ICFmb3JtVmFsdWVzW3hdLmhpZGVGaWVsZCAmJiBmb3JtVmFsdWVzW3hdLnZhbGlkKTtcblxuICBpZiAobm90VmFsaWQpIHtcbiAgICAvLyBtYWtlIGFsbCBmaWVsZHMgb2YgY3VycmVudCBwYWdlIHRvIGJlIHRvdWNoZWQgdG8gdHJpZ2dlciBmaWVsZCB2YWxpZGF0aW9uXG4gICAgY29uc3QgZmllbGRzID0gcGFnZVxuICAgICAgPyBPYmplY3Qua2V5cyhmb3JtVmFsdWVzKS5maWx0ZXIoKHgpID0+IGZvcm1WYWx1ZXNbeF0ucGFnZU51bWJlciA9PT0gcGFnZSlcbiAgICAgIDogT2JqZWN0LmtleXMoZm9ybVZhbHVlcyk7XG4gICAgc2V0VG91Y2hlZEZpZWxkcyhmaWVsZHMsIHNldFNob3dQYWdlVmFsaWRhdGlvbk1zZywgc2V0VG91Y2hlZCk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogTWFrZSBmaWVsZHMgb2YgY3VycmVudCBwYWdlIHRvdWNoZWRcbiAqIGlmIG5vbiBtdWx0aXBhZ2VzIGZvcm0gLSBtYWtlIGFsbCBmaWVsZHMgdG91Y2hlZFxuICogQHBhcmFtIHthcnJheX0gZmllbGRzXG4gKiBAcGFyYW0ge2ZufSBzZXRTaG93UGFnZVZhbGlkYXRpb25Nc2dcbiAqIEBwYXJhbSB7Zm59IHNldFRvdWNoZWRcbiAqL1xuZnVuY3Rpb24gc2V0VG91Y2hlZEZpZWxkcyhmaWVsZHMsIHNldFNob3dQYWdlVmFsaWRhdGlvbk1zZywgc2V0VG91Y2hlZCkge1xuICBjb25zdCBjdXJyZW50UGFnZVRvdWNoZWQgPSBmaWVsZHMucmVkdWNlKChjdXJyZW50VG91Y2hlZCwgeCkgPT4ge1xuICAgIGN1cnJlbnRUb3VjaGVkID0geyAuLi5jdXJyZW50VG91Y2hlZCwgW3hdOiB0cnVlIH07XG4gICAgcmV0dXJuIGN1cnJlbnRUb3VjaGVkO1xuICB9LCB7fSk7XG5cbiAgc2V0U2hvd1BhZ2VWYWxpZGF0aW9uTXNnKHRydWUpO1xuICBzZXRUb3VjaGVkKGN1cnJlbnRQYWdlVG91Y2hlZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcmNlVmFsaWRhdGlvbjtcbiJdLCJtYXBwaW5ncyI6IjJGQUtBLEtBQU0sQ0FBQUEsZUFBZSxDQUFHQSxDQUFDQyxDQUFJLENBQUVDLENBQVUsQ0FBRUMsQ0FBd0IsQ0FBRUMsQ0FBVSxHQUFLLENBRWxGLEtBQU0sQ0FBQUMsQ0FBUSxDQUFHSixDQUFJLENBQ2pCSyxNQUFNLENBQUNDLElBQUksQ0FBQ0wsQ0FBVSxDQUFDLENBQUNNLElBQUksQ0FDekJDLENBQUMsRUFBS1AsQ0FBVSxDQUFDTyxDQUFDLENBQUMsQ0FBQ0MsVUFBVSxHQUFLVCxDQUFJLEVBQUksQ0FBQ0MsQ0FBVSxDQUFDTyxDQUFDLENBQUMsQ0FBQ0UsU0FBUyxFQUFJVCxDQUFVLENBQUNPLENBQUMsQ0FBQyxDQUFDRyxLQUN4RixDQUFDLENBQ0ROLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDTCxDQUFVLENBQUMsQ0FBQ00sSUFBSSxDQUFFQyxDQUFDLEVBQUssQ0FBQ1AsQ0FBVSxDQUFDTyxDQUFDLENBQUMsQ0FBQ0UsU0FBUyxFQUFJVCxDQUFVLENBQUNPLENBQUMsQ0FBQyxDQUFDRyxLQUFLLENBQUMsQ0FFeEYsR0FBSVAsQ0FBUSxDQUFFLENBRVosS0FBTSxDQUFBUSxDQUFNLENBQUdaLENBQUksQ0FDZkssTUFBTSxDQUFDQyxJQUFJLENBQUNMLENBQVUsQ0FBQyxDQUFDWSxNQUFNLENBQUVMLENBQUMsRUFBS1AsQ0FBVSxDQUFDTyxDQUFDLENBQUMsQ0FBQ0MsVUFBVSxHQUFLVCxDQUFJLENBQUMsQ0FDeEVLLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDTCxDQUFVLENBQUMsQ0FHM0IsTUFGQSxDQUFBYSxnQkFBZ0IsQ0FBQ0YsQ0FBTSxDQUFFVixDQUF3QixDQUFFQyxDQUFVLENBQUMsR0FHaEUsQ0FFQSxRQUNGLENBQUMsQ0FTRCxRQUFTLENBQUFXLGdCQUFnQkEsQ0FBQ0YsQ0FBTSxDQUFFVixDQUF3QixDQUFFQyxDQUFVLENBQUUsQ0FDdEUsS0FBTSxDQUFBWSxDQUFrQixDQUFHSCxDQUFNLENBQUNJLE1BQU0sQ0FBQyxDQUFDQyxDQUFjLENBQUVULENBQUMsSUFDekRTLENBQWMsQ0FBRyxDQUFFLEdBQUdBLENBQWMsQ0FBRSxDQUFDVCxDQUFDLElBQVEsQ0FBQyxDQUMxQ1MsQ0FBYyxDQUN0QixDQUFFLENBQUMsQ0FBQyxDQUFDLENBRU5mLENBQXdCLEdBQUssQ0FBQyxDQUM5QkMsQ0FBVSxDQUFDWSxDQUFrQixDQUMvQixDQUFDLElBQUFHLFFBQUEsQ0FBQUMsT0FBQSxDQUFBQyxPQUFBLENBRWNyQixlQUFlIn0=