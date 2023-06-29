import { getFieldPrepopulatedValue } from './index';
import { validateField } from '../validation';
import checkConditionalLogic from './checkConditionalLogic';

async function fetchForm({
  initialPage,
  setFormData,
  setFormValues,
  setActivePage,
  setConditionFields,
  setConditionalIds,
  setPages,
  setIsMultiPart,
  gfForm,
  populatedFields,
  populatedEntry,
}) {
  let isMultipart = false;
  let form = {};

  if (gfForm && gfForm.fields) {
    form = {
      ...gfForm,
      fields: gfForm.fields.nodes.map((node) => ({
        ...node,
        formId: 1,
        type: node.type?.toLowerCase(),
      })),
    };
  }

  if (form?.fields) {
    const formValues = {};
    const conditionFields = [];
    const conditionalIds = [];
    const pages = [];

    const fields = form?.fields;

    // eslint-disable-next-line no-restricted-syntax
    for (const field of form?.fields) {
      let value;

      if (field.type === 'page') {
        pages.push(field.id);
      }

      value = getFieldPrepopulatedValue(field, populatedFields, populatedEntry);

      if (field.type === 'fileupload') {
        isMultipart = true;
      }

      // grab all conditional logic fields
      if (field.conditionalLogic) {
        const tmpField = {
          id: field.id,
          conditionalLogic: field.conditionalLogic,
        };
        const ids = field.conditionalLogic.rules.map((item) => item.fieldId);
        for (let i = 0; i < ids.length; i++) {
          const id = parseInt(ids[i]);
          if (conditionalIds.indexOf(id) === -1) {
            conditionalIds.push(id);
          }
        }
        conditionFields.push(tmpField);
      }

      formValues[field.id] = {
        valid: validateField(value, field),
        value,
        label: field.label,
        pageNumber: field.pageNumber,
        cssClass: field.cssClass,
        isRequired: field.isRequired,
        type: field.type,
        inputName: field.inputName,
      };
    }

    // check condition logic
    for (let i = 0; i < conditionFields.length; i++) {
      formValues[conditionFields[i].id].hideField = checkConditionalLogic(
        conditionFields[i].conditionalLogic,
        formValues
      );
    }

    setFormData(form);
    setFormValues(formValues);
    setActivePage(initialPage || (form.pagination ? 1 : false));
    setConditionFields(conditionFields);
    setConditionalIds(conditionalIds);

    if (isMultipart) setIsMultiPart(isMultipart);

    if (!!pages.length) setPages(pages);
  }
}

export default fetchForm;
