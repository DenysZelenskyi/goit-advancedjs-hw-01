const formData = {
  email: '',
  message: '',
};

const formEl = document.querySelector('.feedback-form');

const fillFormField = () => {
  try {
    const formDataFromLS = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );

    if (formDataFromLS === null) {
      return;
    }

    const formDataFromLSKyes = Object.keys(formDataFromLS);

    formDataFromLSKyes.forEach(key => {
      formEl.elements[key].value = formDataFromLS[key];
    });
  } catch (err) {
    console.log(err);
  }
};

fillFormField();

const onFormFieldInput = e => {
  const { target: formField } = e;
  const fieldName = formField.name;
  const fieldValue = formField.value;

  if (fieldName.toString() === 'email') {
    formData.email = fieldValue.toString();
  } else if (fieldName.toString() === 'message') {
    formData.message = fieldValue.toString();
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackOnSubmit = e => {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    console.log('Fill please all fields');
  } else {
    console.log(formData);
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
  }
};

formEl.addEventListener('input', onFormFieldInput);
formEl.addEventListener('submit', onFeedbackOnSubmit);

// let formData = {
//   email: "",
//   message: ""
// };

// const form = document.querySelector('.feedback-form');
// const emailInput = form.querySelector('input[name="email"]');
// const messageTextarea = form.querySelector('textarea[name="message"]');

// function saveToLocalStorage() {
//   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
// }

// function loadFromLocalStorage() {
//   const savedData = localStorage.getItem('feedback-form-state');
//   if (savedData) {
//     formData = JSON.parse(savedData);
//     emailInput.value = formData.email;
//     messageTextarea.value = formData.message;
//   }
// }

// form.addEventListener('input', event => {
//   if (event.target.name === 'email') {
//     formData.email = event.target.value;
//   } else if (event.target.name === 'message') {
//     formData.message = event.target.value;
//   }
//   saveToLocalStorage();
// });

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   if (!formData.email || !formData.message) {
//     alert('Fill please all fields');
//   } else {
//     console.log(formData);
//     localStorage.removeItem('feedback-form-state');
//     formData = { email: "", message: "" };
//     form.reset();
//   }
// });

// document.addEventListener('DOMContentLoaded', loadFromLocalStorage);
