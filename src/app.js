const NumberFormView = require('./views/number_form_view');
const Number = require('./models/number.js')

document.addEventListener('DOMContentLoaded', () => {
  const numberForm = document.querySelector('form#number-form');
  const numberFormView = new NumberFormView(numberForm);
  numberFormView.bindEvents();

  const number = new Number();
  number.receiveData();
  number.getNumberData();

});
