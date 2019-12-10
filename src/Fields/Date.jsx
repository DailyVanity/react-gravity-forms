import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

export default ({
  field,
  value,
  validationMessage,
  touched,
  setTouched,
  hideField,
  updateForm,
  styledComponents,
  error,
  unsetError,
  setFocusClass,
  cssClass,
  ...props
}) => {
  const {
    id,
    formId,
    type,
    label,
    placeholder,
    isRequired,
    maxLength,
    description,
    descriptionPlacement,
    labelPlacement,
    width,
    inputs,
    customName,
    dateType,
    dateFormat,
  } = field;

  const [startDate, setDate] = useState(null);

  const {
 Input = 'input', Label = 'label', Box = 'div', DatePicker: SdatePicker = 'div' 
} =    styledComponents || false;

  // conver date format
  const format = dateFormat && dateFormat === 'dmy' ? 'dd/MM/yyyy' : false;
  return (
    <Box
      width={width}
      className={
        (validationMessage && touched) || error
          ? `form-field error ${cssClass}`
          : `form-field ${cssClass}`
      }
      style={{ display: hideField ? 'none' : undefined }}
    >
      <Label htmlFor={`input_${formId}_${id}`} className={`gf-label ${labelPlacement}`}>
        {label}
        {isRequired ? <abbr>*</abbr> : null}
      </Label>
      <div className={type}>
        {descriptionPlacement === 'above' && description ? (
          description && <div className="description">{description}</div>
        ) : (
          <React.Fragment>
            {dateType && dateType === 'datepicker' ? (
              <React.Fragment>
                <SdatePicker className="ginput_container ginput_container_date">
                  <DatePicker
                    name={`input_${id}`}
                    id={`input_${formId}_25_${id}`}
                    type="text"
                    className="datepicker hasDatepicker"
                    selected={startDate}
                    onChange={(date) => {
                      setDate(date);
                      updateForm(
                        {
                          target: {
                            value: date,
                          },
                        },
                        field,
                      );
                      setTouched(id);
                      unsetError(id);
                      setFocusClass(date);
                    }}
                    onBlur={(e) => {
                      updateForm(
                        {
                          target: {
                            value: startDate,
                          },
                        },
                        field,
                      );
                      setTouched(id);
                      unsetError(id);
                      setFocusClass(startDate);
                    }}
                    dateFormat={format || undefined}
                    onFocus={() => setFocusClass(true)}
                    required={isRequired}
                    placeholderText={placeholder}
                  />
                </SdatePicker>
                {((validationMessage && touched) || error) && (
                  <span className="error-message" id={`error_${formId}_${id}`}>
                    {validationMessage || error}
                  </span>
                )}
              </React.Fragment>
            ) : (
              <React.Fragment>
                {inputs
                  && inputs.map((item, index) => (
                    <div className={type} key={item.id}>
                      <Input
                        id={`input_${formId}_${id}_${index}`}
                        type="number"
                        name={customName || `input_${id}[]`}
                        placeholder={item.placeholder}
                        step="1"
                        min="1"
                        max={
                          item.label === 'MM'
                            ? 12
                            : item.label === 'DD'
                              ? 31
                              : new Date().getFullYear() + 1
                        }
                        maxLength={item.label === 'YYYY' ? 4 : 2}
                        value={item.value}
                        onBlur={(event) => {
                          field.subId = index;
                          field.dateLabel = item.label;
                          updateForm(event, field);
                          setTouched(id);
                          unsetError(id);
                          setFocusClass(item.value !== '');
                        }}
                        onFocus={() => setFocusClass(true)}
                      />
                      <label htmlFor={`input_${formId}_${id}_${index}`} className="hide-label">
                        {item.label}
                      </label>
                      {validationMessage
                        && touched
                        && validationMessage[index]
                        && index === validationMessage[index].index
                        && validationMessage[index].message && (
                        <span className="error-message" id={`error_${formId}_${item.id}`}>
                          {validationMessage[index].message}
                        </span>
                      )}
                      {error && <span className="error-message">{error}</span>}
                    </div>
                  ))}

                {description && <div className="description">{description}</div>}
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>
    </Box>
  );
};
