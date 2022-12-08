import set from 'lodash.set';
import get from 'lodash.get';

export const createForm = (formEl, { onValid, onInvalid }) => {
  const fields = formEl.querySelectorAll('input');

  const orderDefaultData = {
    work: '',
    stairs: '',
    wood: '',
    railing: '',
    contact: createFormState(onValid, onInvalid),
  };

  const setValue = (fieldName, fieldValue) => {
    set(form.fields, fieldName, fieldValue);
  };

  const getValue = (fieldName) => {
    if (!fieldName) {
      return form.fields;
    }

    return get(form.fields, fieldName);
  };

  const handleFieldChange = (inputEl) => {
    const onInputChange = () => {
      const name = inputEl.getAttribute('name');
      const value = inputEl.value;

      setValue(name, value);
    };

    inputEl.addEventListener('input', onInputChange);
  };

  const applyInputChangeHandlers = () => {
    fields.forEach(handleFieldChange);
  };

  const form = {
    fields: orderDefaultData,
    setValue,
    getValue,
  };

  applyInputChangeHandlers();

  return form;
};

const createFormState = (onValid, onInvalid) => {
  return new Proxy(
    { name: null, messanger: 'Viber', location: 'Львівська (область)', phone: null },
    {
      set: (obj, prop, value) => {
        Reflect.set(obj, prop, value);

        if (hasValues(obj)) {
          onValid && onValid();
        } else {
          onInvalid();
        }

        return true;
      },
    },
  );
};

const hasValues = (fields) => {
  return Object.values(fields).every((field) => field || field?.length > 0);
};
