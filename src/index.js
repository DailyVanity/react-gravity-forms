import React, { useEffect, useState, useCallback, useRef } from 'react';
import fetch from 'isomorphic-unfetch';
import {
  FormConfirmation,
  FormError,
  RenderFields,
  Submit,
  ProgressBar,
} from './FormElements';

import {
  checkConditionalLogic,
  fetchForm,
  forceValidation,
  nextStep,
  prevStep,
  scrollToConfirmation,
  setTouchedHandler,
  unsetError,
  updateFieldsValuesBasedOnEntry,
  updateFormHandler,
} from './Helpers/form';

import { validateField } from './Helpers/validation';

import { GetForm, SaveEntry } from './lib/queries';

const GravityForm = (props) => {
  const { initialPage, populatedEntry, onChange, useQuery, useMutation, formID } = props;

  const [submitFailed, setSubmitFailed] = useState(false);
  const [errorMessages, setErrorMessages] = useState(false);
  const [formValues, setFormValues] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const [touched, setTouched] = useState({});
  const [activePage, setActivePage] = useState(initialPage || 1);
  const [conditionFields, setConditionFields] = useState({});
  const [conditionalIds, setConditionalIds] = useState({});
  const [isMultipart, setIsMultiPart] = useState(false);
  const [pageClicked, setPageClicked] = useState(false);
  const [showPageValidationMsg, setShowPageValidationMsg] = useState(false);
  const [pages, setPages] = useState({});

  const wrapperRef = useRef(null);

  const updateEntryFields = useCallback((populatedEntry) => {
    updateFieldsValuesBasedOnEntry(populatedEntry);
  }, []);

  const { error, data } =
    (useQuery && useQuery(GetForm, { variables: { formID } })) || {};
  const [createEntry, { loading, error: errorSubmit }] =
    useMutation && useMutation(SaveEntry);

  const { gfForm } = data || {};
  /**
   * Fetch form data
   */
  useEffect(() => {
    fetchForm({
      setFormData,
      setFormValues,
      setActivePage,
      setConditionFields,
      setConditionalIds,
      setPages,
      setIsMultiPart,
      gfForm,
      ...props,
    });
  }, [gfForm]);

  /**
   * Call custom onChange handler with passed values from form
   */
  useEffect(() => {
    if (onChange) {
      onChange(formValues);
    }
  }, [formValues]);

  /**
   * Set entry to the form
   */
  useEffect(() => {
    if (populatedEntry) {
      updateEntryFields(populatedEntry);
    }
  }, [populatedEntry]);

  /**
   * Scroll page to the first not valid field
   */
  const scrollToFirstInvalidField = () => {
    if (!wrapperRef) return;

    const firstErrEl = wrapperRef.current.querySelector('.form-field.error');
    if (firstErrEl) {
      firstErrEl.scrollIntoView();
    }
  };

  const {
    title,
    submitIcon,
    saveStateToHtmlField,
    styledComponents,
    customComponents,
    errorMessage,
    dropzoneText,
    loadingSpinner,
    onError,
    language,
    apiKeys,
  } = props;

  const {
    Button,
    Loading,
    FormError: SFormError,
    FormConfirmation: SFormConfirmation,
    GFWrapper = 'div',
  } = styledComponents || false;

  const { cssClass, button: { conditionalLogic } = {} } = formData || {};
  const hideSubmitButton =
    conditionalLogic &&
    checkConditionalLogic(
      conditionalLogic,
      Object.keys(formValues).length > 0 ? formValues : formData.fields
    );

  const handlePrevStep = (e) => {
    e.preventDefault();
    prevStep(formValues, pages, activePage, setActivePage, setPageClicked);
  };

  const onSubmit = async (event, fields) => {
    event.preventDefault();

    const { onSubmit: customOnSubmit, filterFormData } = props;
    let formData = new FormData(event.target);

    const entriesArray2 = [...formData.entries()]
      .filter(([name, value]) => name !== 'nonce')
      .map((item) => ({ id: parseInt(item[0].replace('input_', '')), value: item[1] }));

    const entriesArray = Object.values(
      [...formData.entries()]
        .filter(([name, value]) => name !== 'nonce')
        .map(([inputId, value]) => {
          const fieldID = parseInt(inputId.replace('input_', ''));
          const field = fields.find(({ id }) => id === fieldID);

          return {
            id: fieldID,
            inputId: parseFloat(inputId.replace('input_', '')),
            value,
            type: field?.type || null,
          };
        })
        .reduce((result, { id, inputId, value, type }) => {
          if (!result[id]) {
            result[id] = { id, ...(type === 'address' ? {} : { value }) };
          }

          if (type === 'address') {
            result[id].addressValues = result[id].addressValues || [];
            result[id].addressValues.push({ inputId, value });
          }
          if (type === 'checkbox') {
            result[id].checkboxValues = result[id].checkboxValues || [];
            result[id].checkboxValues.push({ inputId, value });
          }

          return result;
        }, {})
    );

    /*       input: {fieldValues: {id: 4, checkboxValues: {inputId: 4.1, value: "First Choice"}}, id: "1"}
     */
    if (filterFormData) formData = filterFormData(formData, formValues);

    const isFormValid = forceValidation(
      activePage,
      formValues,
      setShowPageValidationMsg,
      setTouched
    );

    if (!isFormValid) {
      scrollToFirstInvalidField();
      return false;
    }

    if (customOnSubmit) {
      customOnSubmit(formData);
    } else {
      setSubmitting(true);
      setSubmitSuccess(false);
      setSubmitFailed(false);
      setConfirmationMessage(false);
      setErrorMessages(false);

      const { formID, backendUrl, jumpToConfirmation, onSubmitSuccess, onError } = props;

      createEntry({ variables: { formID, fieldValues: entriesArray } })
        .then((response) => {
          /*          // Handle successful response
          console.log('Post created:', response.data.submitGfForm);
          const { data: { submitGfForm } = {} } = response || {};
          const { confirmation } = submitGfForm || {};

          const confirmationMessage = confirmation;
          const { type, url } = confirmationMessage || false;
          console.log('confirmationMessage:', confirmationMessage);

          if (type && url && type === 'REDIRECT') {
            if (typeof window !== 'undefined') {
              window.location.replace(url);
              return false;
            }
          }
          setSubmitting(false);
          setSubmitSuccess(true);
          console.log('response', response);
          setConfirmationMessage(confirmationMessage);
          if (jumpToConfirmation) {
            scrollToConfirmation(props, wrapperRef, jumpToConfirmation);
          } */
        })
        .catch((error) => {
          // Handle error
          console.error('Error creating post:', error);
        });

      /*       const gfSubmissionUrl = backendUrl.substring(0, backendUrl.indexOf('/wp-json'));
       */
      /*       fetch(`${gfSubmissionUrl}/wp-json/gf/v2/forms/${formID}/submissions`, {
        method: 'POST',
        body: formData,
      })
        .then((resp) => resp.json())
        .then((response) => {
          if (response && response.is_valid) {
            if (onSubmitSuccess) {
              const res = onSubmitSuccess(response);
              if (!res) {
                return false;
              }
            }
            const confirmationMessage = response.confirmation_message;
            const { type, link } = confirmationMessage || false;
            if (type && link && type === 'redirect') {
              if (typeof window !== 'undefined') {
                window.location.replace(link);
                return false;
              }
            }
            setSubmitting(false);
            setSubmitSuccess(true);
            setConfirmationMessage(confirmationMessage);

            if (jumpToConfirmation) {
              scrollToConfirmation(props, wrapperRef, jumpToConfirmation);
            }
          } else {
            throw {
              response,
            };
          }
        })
        .catch((error) => {
          const errorMessages =
            error && error.response && error.response.validation_messages
              ? error.response.validation_messages
              : 'Something went wrong';

          if (onError) {
            onError(errorMessages);
            setSubmitting(false);
            setSubmitFailed(true);
          } else {
            setSubmitting(false);
            setSubmitFailed(true);
            setErrorMessages(errorMessages);
          }

          if (jumpToConfirmation) {
            scrollToConfirmation(props, wrapperRef);
          }
        }); */
    }
  };

  return (
    <GFWrapper ref={wrapperRef} className="form-wrapper" id={`gravity_form_${formID}`}>
      {formData.title ? null : Loading && <Loading isLoading />}

      {submitFailed && !submitSuccess && !onError && (
        <FormError
          SFormError={SFormError || false}
          errorMessage={errorMessage || 'There was a problem with your submission'}
        />
      )}

      {submitSuccess && confirmationMessage?.message && (
        <FormConfirmation
          confirmation={confirmationMessage?.message}
          SFormConfirmation={SFormConfirmation}
        />
      )}

      {!submitSuccess && formData.fields ? (
        <form
          onSubmit={(event) => onSubmit(event, formData.fields)}
          className={cssClass}
          encType={isMultipart ? 'multipart/form-data' : undefined}
          noValidate
        >
          {(formData.title || formData.description) && (
            <div>
              {formData.title && title ? (
                <h3 className="form-title">{formData.title}</h3>
              ) : null}
              {formData.description ? (
                <p className="form-description">{formData.description}</p>
              ) : null}
            </div>
          )}
          <div className="form-wrapper">
            {formData?.pagination?.pages && (
              <ProgressBar
                pagination={formData.pagination}
                activePage={activePage}
                firstPageCssClass={formData.firstPageCssClass}
              />
            )}
            <RenderFields
              styledComponents={styledComponents}
              customComponents={customComponents}
              fields={formData.fields}
              formValues={formValues}
              submitFailed={submitFailed}
              submitSuccess={submitSuccess}
              updateForm={(event, field, inputID) =>
                updateFormHandler(
                  field,
                  event,
                  inputID,
                  formValues,
                  setFormValues,
                  conditionalIds,
                  conditionFields
                )
              }
              touched={touched}
              setTouched={(id) => setTouchedHandler(id, touched, setTouched)}
              setErrorMessages={setErrorMessages}
              pagination={formData.pagination}
              activePage={activePage}
              prevStep={(e) => handlePrevStep(e)}
              nextStep={(e) =>
                nextStep(
                  e,
                  props,
                  pages,
                  formValues,
                  activePage,
                  setActivePage,
                  setPageClicked,
                  setTouched,
                  setShowPageValidationMsg
                )
              }
              checkConditionalLogic={(condition, fields) =>
                checkConditionalLogic(condition, (fields = false))
              }
              saveStateToHtmlField={saveStateToHtmlField}
              enableHoneypot={formData.enableHoneypot}
              errors={errorMessages}
              unsetError={(id) => unsetError(id, errorMessages)}
              dropzoneText={dropzoneText}
              pageClicked={pageClicked}
              language={language}
              apiKeys={apiKeys}
              {...props}
            />
            {(!formData.pagination ||
              (formData.pagination &&
                formData.pagination.pages.length === activePage)) && (
              <Submit
                Button={Button}
                Loading={Loading}
                formData={formData}
                submitIcon={submitIcon}
                submitting={submitting}
                prevStep={(e) => handlePrevStep(e)}
                loadingSpinner={loadingSpinner}
                hideSubmitButton={hideSubmitButton}
              />
            )}
          </div>
        </form>
      ) : (
        ''
      )}
    </GFWrapper>
  );
};

GravityForm.defaultProps = {
  title: true,
  submitIcon: false,
  saveStateToHtmlField: false,
  jumpToConfirmation: true,
};

export { validateField, FormConfirmation, FormError, RenderFields, Submit };

export default GravityForm;
