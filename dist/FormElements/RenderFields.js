"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _RenderField = _interopRequireDefault(require("./RenderField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var divideFieldsIntoPages = function divideFieldsIntoPages(fields, pages) {
  var tmpFields = pages.map(function (item) {
    return [];
  });

  for (var i = 0; i < fields.length; i++) {
    var arr = tmpFields[fields[i].pageNumber];

    if (tmpFields[fields[i].pageNumber - 1]) {
      // move page field to the first group
      if (fields[i].type === 'page') {
        tmpFields[fields[i].pageNumber - 2].push(fields[i]);
      } else {
        tmpFields[fields[i].pageNumber - 1].push(fields[i]);
      }
    }
  }

  return tmpFields;
};

var getMaxFieldId = function getMaxFieldId(fields) {
  var max = 0;

  for (var i = 0; i < fields.length; i++) {
    if (parseInt(fields[i].id) > max) {
      max = parseInt(fields[i].id);
    }
  }

  return max + 1;
};

var fieldTypes = ['checkbox', 'email', 'hidden', 'html', 'number', 'phone', 'radio', 'select', 'multiselect', 'text', 'textarea', 'website', 'page', 'date'];
var honeyPotLables = ['Name', 'Email', 'Phone', 'Comments'];
var honeypotLabel = honeyPotLables[Math.floor(Math.random() * Math.floor(4))];

var _default = function _default(props) {
  var fields = props.fields,
      formValues = props.formValues,
      updateForm = props.updateForm,
      submitFailed = props.submitFailed,
      submitSuccess = props.submitSuccess,
      touched = props.touched,
      setTouched = props.setTouched,
      pagination = props.pagination,
      activePage = props.activePage,
      prevStep = props.prevStep,
      nextStep = props.nextStep,
      isNextDisabled = props.isNextDisabled,
      checkConditionalLogic = props.checkConditionalLogic,
      saveStateToHtmlField = props.saveStateToHtmlField,
      enableHoneypot = props.enableHoneypot,
      styledComponents = props.styledComponents; // get page indexes

  var dividedFields = pagination ? divideFieldsIntoPages(fields, pagination.pages) : undefined;
  var maxID = getMaxFieldId(fields);

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      honeypotValue = _useState2[0],
      setHoneypotValue = _useState2[1];

  var _ref = styledComponents || false,
      _ref$GFWrapper = _ref.GFWrapper,
      GFWrapper = _ref$GFWrapper === void 0 ? 'div' : _ref$GFWrapper;

  return _react["default"].createElement(GFWrapper, {
    className: "form-fields"
  }, pagination && pagination.pages.length > 1 ? pagination.pages.map(function (page, index) {
    return _react["default"].createElement("div", {
      className: "page".concat(activePage === index + 1 ? ' active' : ''),
      key: "page-".concat(index)
    }, dividedFields[index].map(function (field) {
      return fieldTypes.includes(field.type) && _react["default"].createElement(_RenderField["default"], {
        key: field.id,
        field: field,
        formValues: formValues,
        submitFailed: submitFailed,
        setTouched: setTouched,
        submitSuccess: submitSuccess,
        updateForm: updateForm,
        touched: touched,
        pages: pagination.pages.length,
        prevStep: prevStep,
        nextStep: nextStep,
        isNextDisabled: isNextDisabled,
        checkConditionalLogic: checkConditionalLogic,
        saveStateToHtmlField: saveStateToHtmlField,
        styledComponents: styledComponents
      });
    }));
  }) : fields.map(function (field) {
    return fieldTypes.includes(field.type) && _react["default"].createElement(_RenderField["default"], {
      key: field.id,
      field: field,
      formValues: formValues,
      submitFailed: submitFailed,
      setTouched: setTouched,
      submitSuccess: submitSuccess,
      updateForm: updateForm,
      touched: touched,
      checkConditionalLogic: checkConditionalLogic,
      styledComponents: styledComponents
    });
  }), enableHoneypot && _react["default"].createElement("div", {
    className: "form-field gform_validation_container"
  }, _react["default"].createElement("label", {
    htmlFor: "input_".concat(maxID),
    className: "gf-label "
  }, honeypotLabel), _react["default"].createElement("input", {
    type: "text",
    name: "input_".concat(maxID),
    id: "input_".concat(maxID),
    value: honeypotValue,
    onChange: function onChange(e) {
      return setHoneypotValue(e.target.value);
    },
    autoComplete: "off"
  })));
};

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Gb3JtRWxlbWVudHMvUmVuZGVyRmllbGRzLmpzeCJdLCJuYW1lcyI6WyJkaXZpZGVGaWVsZHNJbnRvUGFnZXMiLCJmaWVsZHMiLCJwYWdlcyIsInRtcEZpZWxkcyIsIm1hcCIsIml0ZW0iLCJpIiwibGVuZ3RoIiwiYXJyIiwicGFnZU51bWJlciIsInR5cGUiLCJwdXNoIiwiZ2V0TWF4RmllbGRJZCIsIm1heCIsInBhcnNlSW50IiwiaWQiLCJmaWVsZFR5cGVzIiwiaG9uZXlQb3RMYWJsZXMiLCJob25leXBvdExhYmVsIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHJvcHMiLCJmb3JtVmFsdWVzIiwidXBkYXRlRm9ybSIsInN1Ym1pdEZhaWxlZCIsInN1Ym1pdFN1Y2Nlc3MiLCJ0b3VjaGVkIiwic2V0VG91Y2hlZCIsInBhZ2luYXRpb24iLCJhY3RpdmVQYWdlIiwicHJldlN0ZXAiLCJuZXh0U3RlcCIsImlzTmV4dERpc2FibGVkIiwiY2hlY2tDb25kaXRpb25hbExvZ2ljIiwic2F2ZVN0YXRlVG9IdG1sRmllbGQiLCJlbmFibGVIb25leXBvdCIsInN0eWxlZENvbXBvbmVudHMiLCJkaXZpZGVkRmllbGRzIiwidW5kZWZpbmVkIiwibWF4SUQiLCJob25leXBvdFZhbHVlIiwic2V0SG9uZXlwb3RWYWx1ZSIsIkdGV3JhcHBlciIsInBhZ2UiLCJpbmRleCIsImZpZWxkIiwiaW5jbHVkZXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNDLE1BQUQsRUFBU0MsS0FBVCxFQUFtQjtBQUMvQyxNQUFNQyxTQUFTLEdBQUdELEtBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSxXQUFVLEVBQVY7QUFBQSxHQUFWLENBQWxCOztBQUVBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFB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TmY7QUFPQSxNQUFBLFVBQVUsRUFBRUYsVUFQWjtBQVFBLE1BQUEsT0FBTyxFQUFFRyxPQVJUO0FBU0EsTUFBQSxxQkFBcUIsRUFBRU8scUJBVHZCO0FBVUEsTUFBQSxnQkFBZ0IsRUFBRUc7QUFWbEIsTUFGSjtBQUFBLEdBREYsQ0EvQk4sRUFnREdELGNBQWMsSUFDYjtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRTtBQUFPLElBQUEsT0FBTyxrQkFBV0ksS0FBWCxDQUFkO0FBQWtDLElBQUEsU0FBUyxFQUFDO0FBQTVDLEtBQ0d0QixhQURILENBREYsRUFJRTtBQUNFLElBQUEsSUFBSSxFQUFDLE1BRFA7QUFFRSxJQUFBLElBQUksa0JBQVdzQixLQUFYLENBRk47QUFHRSxJQUFBLEVBQUUsa0JBQVdBLEtBQVgsQ0FISjtBQUlFLElBQUEsS0FBSyxFQUFFQyxhQUpUO0FBS0UsSUFBQSxRQUFRLEVBQUUsa0JBQUNPLENBQUQ7QUFBQSxhQUFPTixnQkFBZ0IsQ0FBQ00sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBdkI7QUFBQSxLQUxaO0FBTUUsSUFBQSxZQUFZLEVBQUM7QUFOZixJQUpGLENBakRKLENBREY7QUFrRUQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZW5kZXJGaWVsZCBmcm9tICcuL1JlbmRlckZpZWxkJztcblxuY29uc3QgZGl2aWRlRmllbGRzSW50b1BhZ2VzID0gKGZpZWxkcywgcGFnZXMpID0+IHtcbiAgY29uc3QgdG1wRmllbGRzID0gcGFnZXMubWFwKChpdGVtKSA9PiBbXSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBhcnIgPSB0bXBGaWVsZHNbZmllbGRzW2ldLnBhZ2VOdW1iZXJdO1xuICAgIGlmICh0bXBGaWVsZHNbZmllbGRzW2ldLnBhZ2VOdW1iZXIgLSAxXSkge1xuICAgICAgLy8gbW92ZSBwYWdlIGZpZWxkIHRvIHRoZSBmaXJzdCBncm91cFxuICAgICAgaWYgKGZpZWxkc1tpXS50eXBlID09PSAncGFnZScpIHtcbiAgICAgICAgdG1wRmllbGRzW2ZpZWxkc1tpXS5wYWdlTnVtYmVyIC0gMl0ucHVzaChmaWVsZHNbaV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG1wRmllbGRzW2ZpZWxkc1tpXS5wYWdlTnVtYmVyIC0gMV0ucHVzaChmaWVsZHNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdG1wRmllbGRzO1xufTtcblxuY29uc3QgZ2V0TWF4RmllbGRJZCA9IChmaWVsZHMpID0+IHtcbiAgbGV0IG1heCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHBhcnNlSW50KGZpZWxkc1tpXS5pZCkgPiBtYXgpIHtcbiAgICAgIG1heCA9IHBhcnNlSW50KGZpZWxkc1tpXS5pZCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBtYXggKyAxO1xufTtcblxuY29uc3QgZmllbGRUeXBlcyA9IFtcbiAgJ2NoZWNrYm94JyxcbiAgJ2VtYWlsJyxcbiAgJ2hpZGRlbicsXG4gICdodG1sJyxcbiAgJ251bWJlcicsXG4gICdwaG9uZScsXG4gICdyYWRpbycsXG4gICdzZWxlY3QnLFxuICAnbXVsdGlzZWxlY3QnLFxuICAndGV4dCcsXG4gICd0ZXh0YXJlYScsXG4gICd3ZWJzaXRlJyxcbiAgJ3BhZ2UnLFxuICAnZGF0ZScsXG5dO1xuXG5jb25zdCBob25leVBvdExhYmxlcyA9IFsnTmFtZScsICdFbWFpbCcsICdQaG9uZScsICdDb21tZW50cyddO1xuY29uc3QgaG9uZXlwb3RMYWJlbCA9IGhvbmV5UG90TGFibGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoNCkpXTtcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBmaWVsZHMsXG4gICAgZm9ybVZhbHVlcyxcbiAgICB1cGRhdGVGb3JtLFxuICAgIHN1Ym1pdEZhaWxlZCxcbiAgICBzdWJtaXRTdWNjZXNzLFxuICAgIHRvdWNoZWQsXG4gICAgc2V0VG91Y2hlZCxcbiAgICBwYWdpbmF0aW9uLFxuICAgIGFjdGl2ZVBhZ2UsXG4gICAgcHJldlN0ZXAsXG4gICAgbmV4dFN0ZXAsXG4gICAgaXNOZXh0RGlzYWJsZWQsXG4gICAgY2hlY2tDb25kaXRpb25hbExvZ2ljLFxuICAgIHNhdmVTdGF0ZVRvSHRtbEZpZWxkLFxuICAgIGVuYWJsZUhvbmV5cG90LFxuICAgIHN0eWxlZENvbXBvbmVudHMsXG4gIH0gPSBwcm9wcztcblxuICAvLyBnZXQgcGFnZSBpbmRleGVzXG4gIGNvbnN0IGRpdmlkZWRGaWVsZHMgPSBwYWdpbmF0aW9uID8gZGl2aWRlRmllbGRzSW50b1BhZ2VzKGZpZWxkcywgcGFnaW5hdGlvbi5wYWdlcykgOiB1bmRlZmluZWQ7XG4gIGNvbnN0IG1heElEID0gZ2V0TWF4RmllbGRJZChmaWVsZHMpO1xuICBjb25zdCBbaG9uZXlwb3RWYWx1ZSwgc2V0SG9uZXlwb3RWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IHsgR0ZXcmFwcGVyID0gJ2RpdicgfSA9IHN0eWxlZENvbXBvbmVudHMgfHwgZmFsc2U7XG4gIHJldHVybiAoXG4gICAgPEdGV3JhcHBlciBjbGFzc05hbWU9XCJmb3JtLWZpZWxkc1wiPlxuICAgICAge3BhZ2luYXRpb24gJiYgcGFnaW5hdGlvbi5wYWdlcy5sZW5ndGggPiAxXG4gICAgICAgID8gcGFnaW5hdGlvbi5wYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHBhZ2Uke2FjdGl2ZVBhZ2UgPT09IGluZGV4ICsgMSA/ICcgYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgICAgICAgIGtleT17YHBhZ2UtJHtpbmRleH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7ZGl2aWRlZEZpZWxkc1tpbmRleF0ubWFwKFxuICAgICAgICAgICAgICAgIChmaWVsZCkgPT5cbiAgICAgICAgICAgICAgICAgIGZpZWxkVHlwZXMuaW5jbHVkZXMoZmllbGQudHlwZSkgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8UmVuZGVyRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2ZpZWxkLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkPXtmaWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICBmb3JtVmFsdWVzPXtmb3JtVmFsdWVzfVxuICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEZhaWxlZD17c3VibWl0RmFpbGVkfVxuICAgICAgICAgICAgICAgICAgICAgIHNldFRvdWNoZWQ9e3NldFRvdWNoZWR9XG4gICAgICAgICAgICAgICAgICAgICAgc3VibWl0U3VjY2Vzcz17c3VibWl0U3VjY2Vzc31cbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVGb3JtPXt1cGRhdGVGb3JtfVxuICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZWQ9e3RvdWNoZWR9XG4gICAgICAgICAgICAgICAgICAgICAgcGFnZXM9e3BhZ2luYXRpb24ucGFnZXMubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgIHByZXZTdGVwPXtwcmV2U3RlcH1cbiAgICAgICAgICAgICAgICAgICAgICBuZXh0U3RlcD17bmV4dFN0ZXB9XG4gICAgICAgICAgICAgICAgICAgICAgaXNOZXh0RGlzYWJsZWQ9e2lzTmV4dERpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrQ29uZGl0aW9uYWxMb2dpYz17Y2hlY2tDb25kaXRpb25hbExvZ2ljfVxuICAgICAgICAgICAgICAgICAgICAgIHNhdmVTdGF0ZVRvSHRtbEZpZWxkPXtzYXZlU3RhdGVUb0h0bWxGaWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZWRDb21wb25lbnRzPXtzdHlsZWRDb21wb25lbnRzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSlcbiAgICAgICAgOiBmaWVsZHMubWFwKFxuICAgICAgICAgICAgKGZpZWxkKSA9PlxuICAgICAgICAgICAgICBmaWVsZFR5cGVzLmluY2x1ZGVzKGZpZWxkLnR5cGUpICYmIChcbiAgICAgICAgICAgICAgICA8UmVuZGVyRmllbGRcbiAgICAgICAgICAgICAgICBrZXk9e2ZpZWxkLmlkfVxuICAgICAgICAgICAgICAgIGZpZWxkPXtmaWVsZH1cbiAgICAgICAgICAgICAgICBmb3JtVmFsdWVzPXtmb3JtVmFsdWVzfVxuICAgICAgICAgICAgICAgIHN1Ym1pdEZhaWxlZD17c3VibWl0RmFpbGVkfVxuICAgICAgICAgICAgICAgIHNldFRvdWNoZWQ9e3NldFRvdWNoZWR9XG4gICAgICAgICAgICAgICAgc3VibWl0U3VjY2Vzcz17c3VibWl0U3VjY2Vzc31cbiAgICAgICAgICAgICAgICB1cGRhdGVGb3JtPXt1cGRhdGVGb3JtfVxuICAgICAgICAgICAgICAgIHRvdWNoZWQ9e3RvdWNoZWR9XG4gICAgICAgICAgICAgICAgY2hlY2tDb25kaXRpb25hbExvZ2ljPXtjaGVja0NvbmRpdGlvbmFsTG9naWN9XG4gICAgICAgICAgICAgICAgc3R5bGVkQ29tcG9uZW50cz17c3R5bGVkQ29tcG9uZW50c31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKX1cbiAgICAgIHtlbmFibGVIb25leXBvdCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1maWVsZCBnZm9ybV92YWxpZGF0aW9uX2NvbnRhaW5lclwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtgaW5wdXRfJHttYXhJRH1gfSBjbGFzc05hbWU9XCJnZi1sYWJlbCBcIj5cbiAgICAgICAgICAgIHtob25leXBvdExhYmVsfVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPXtgaW5wdXRfJHttYXhJRH1gfVxuICAgICAgICAgICAgaWQ9e2BpbnB1dF8ke21heElEfWB9XG4gICAgICAgICAgICB2YWx1ZT17aG9uZXlwb3RWYWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SG9uZXlwb3RWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L0dGV3JhcHBlcj5cbiAgKTtcbn07XG4iXX0=