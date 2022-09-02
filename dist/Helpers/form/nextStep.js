"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _forceValidation=_interopRequireDefault(require("./forceValidation")),_getNextStep=_interopRequireDefault(require("./getNextStep")),_default=function(a,b,c,d,e,f,g,h,i){a.preventDefault();var j=b.activePage,k=(0,_forceValidation["default"])(e,d,i,h);if(!k)return!1;var l=(0,_getNextStep["default"])(e,c,d);j&&j(e,d,l),f(l),g(!0),i(!1),f(l),g(!0),i(!1)};exports["default"]=_default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9IZWxwZXJzL2Zvcm0vbmV4dFN0ZXAuanMiXSwibmFtZXMiOlsiZXZlbnQiLCJwcm9wcyIsInBhZ2VzIiwiZm9ybVZhbHVlcyIsImFjdGl2ZVBhZ2UiLCJzZXRBY3RpdmVQYWdlIiwic2V0UGFnZUNsaWNrZWQiLCJzZXRUb3VjaGVkIiwic2V0U2hvd1BhZ2VWYWxpZGF0aW9uTXNnIiwicHJldmVudERlZmF1bHQiLCJiZWZvcmVOZXh0UGFnZSIsImlzUGFnZVZhbGlkYXRlZCIsIm5leHRQYWdlIl0sIm1hcHBpbmdzIjoia1VBR2UsU0FDYkEsQ0FEYSxDQUViQyxDQUZhLENBR2JDLENBSGEsQ0FJYkMsQ0FKYSxDQUtiQyxDQUxhLENBTWJDLENBTmEsQ0FPYkMsQ0FQYSxDQVFiQyxDQVJhLENBU2JDLENBVGEsQ0FVVixDQUNIUixDQUFLLENBQUNTLGNBQU4sRUFERyxJQUVpQkMsQ0FBQUEsQ0FGakIsQ0FFb0NULENBRnBDLENBRUtHLFVBRkwsQ0FJR08sQ0FBZSxDQUFHLGdDQUN0QlAsQ0FEc0IsQ0FFdEJELENBRnNCLENBR3RCSyxDQUhzQixDQUl0QkQsQ0FKc0IsQ0FKckIsQ0FVSCxHQUFJLENBQUNJLENBQUwsQ0FBc0IsU0FFdEIsR0FBTUMsQ0FBQUEsQ0FBUSxDQUFHLDRCQUFZUixDQUFaLENBQXdCRixDQUF4QixDQUErQkMsQ0FBL0IsQ0FBakIsQ0FFSU8sQ0FkRCxFQWVEQSxDQUFjLENBQUNOLENBQUQsQ0FBYUQsQ0FBYixDQUF5QlMsQ0FBekIsQ0FmYixDQWlCSFAsQ0FBYSxDQUFDTyxDQUFELENBakJWLENBa0JITixDQUFjLElBbEJYLENBbUJIRSxDQUF3QixJQW5CckIsQ0FxQkhILENBQWEsQ0FBQ08sQ0FBRCxDQXJCVixDQXNCSE4sQ0FBYyxJQXRCWCxDQXVCSEUsQ0FBd0IsSUFDekIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmb3JjZVZhbGlkYXRpb24gZnJvbSAnLi9mb3JjZVZhbGlkYXRpb24nO1xuaW1wb3J0IGdldE5leHRTdGVwIGZyb20gJy4vZ2V0TmV4dFN0ZXAnO1xuXG5leHBvcnQgZGVmYXVsdCAoXG4gIGV2ZW50LFxuICBwcm9wcyxcbiAgcGFnZXMsXG4gIGZvcm1WYWx1ZXMsXG4gIGFjdGl2ZVBhZ2UsXG4gIHNldEFjdGl2ZVBhZ2UsXG4gIHNldFBhZ2VDbGlja2VkLFxuICBzZXRUb3VjaGVkLFxuICBzZXRTaG93UGFnZVZhbGlkYXRpb25Nc2dcbikgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB7IGFjdGl2ZVBhZ2U6IGJlZm9yZU5leHRQYWdlIH0gPSBwcm9wcztcblxuICBjb25zdCBpc1BhZ2VWYWxpZGF0ZWQgPSBmb3JjZVZhbGlkYXRpb24oXG4gICAgYWN0aXZlUGFnZSxcbiAgICBmb3JtVmFsdWVzLFxuICAgIHNldFNob3dQYWdlVmFsaWRhdGlvbk1zZyxcbiAgICBzZXRUb3VjaGVkXG4gICk7XG4gIGlmICghaXNQYWdlVmFsaWRhdGVkKSByZXR1cm4gZmFsc2U7XG5cbiAgY29uc3QgbmV4dFBhZ2UgPSBnZXROZXh0U3RlcChhY3RpdmVQYWdlLCBwYWdlcywgZm9ybVZhbHVlcyk7XG5cbiAgaWYgKGJlZm9yZU5leHRQYWdlKSB7XG4gICAgYmVmb3JlTmV4dFBhZ2UoYWN0aXZlUGFnZSwgZm9ybVZhbHVlcywgbmV4dFBhZ2UpO1xuICB9XG4gIHNldEFjdGl2ZVBhZ2UobmV4dFBhZ2UpO1xuICBzZXRQYWdlQ2xpY2tlZCh0cnVlKTtcbiAgc2V0U2hvd1BhZ2VWYWxpZGF0aW9uTXNnKGZhbHNlKTtcblxuICBzZXRBY3RpdmVQYWdlKG5leHRQYWdlKTtcbiAgc2V0UGFnZUNsaWNrZWQodHJ1ZSk7XG4gIHNldFNob3dQYWdlVmFsaWRhdGlvbk1zZyhmYWxzZSk7XG59O1xuIl19