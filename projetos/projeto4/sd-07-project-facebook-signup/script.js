const pMensageInvalid = document.getElementById('mensage-invalid');
const btButtonLogin = document.getElementById('button-login');
btButtonLogin.addEventListener('click', function () {
  const inpUserEmailPhone = document.getElementById('user-email-phone');
  alert(inpUserEmailPhone.value);
});

function createTag(tag, text, nameClass) {
  const obj = document.createElement(tag);
  obj.innerText = text;
  obj.className = nameClass;
  return (obj);
}

function returnGender(obj) {
  if (obj[0].checked) {
    return ('Feminino');
  } else if (obj[1].checked) {
    return ('Masculino');
  }
  return ('Personalizado');
}

function printData() {
  const rightContent = document.getElementsByClassName('right-content')[0];

  const firstName = document.getElementsByName('firstname')[0].value;
  const lastName = document.getElementsByName('lastname')[0].value;
  const phoneEmail = document.getElementsByName('phone_email')[0].value;
  const birthdate = document.getElementsByName('birthdate')[0].value;
  const gender = document.getElementsByName('gender');
  const genderSelected = returnGender(gender);
  rightContent.innerHTML = '';

  rightContent.appendChild(createTag('h1', `Olá, ${firstName} ${lastName}`, 'open-account'));

  rightContent.appendChild(createTag('label', 'Nome:', 'label-input'));
  rightContent.appendChild(createTag('label', firstName, 'input-style input-size'));

  rightContent.appendChild(createTag('label', 'Sobrenome:', 'label-input'));
  rightContent.appendChild(createTag('label', lastName, 'input-style input-size'));

  rightContent.appendChild(createTag('label', 'Celular ou e-mail:', 'label-input'));
  rightContent.appendChild(createTag('label', phoneEmail, 'input-style input-size'));

  rightContent.appendChild(createTag('label', 'Data de Nascimento:', 'label-input'));
  rightContent.appendChild(createTag('label', birthdate, 'input-style input-size'));

  rightContent.appendChild(createTag('label', 'Gênero:', 'label-input'));
  rightContent.appendChild(createTag('label', genderSelected, 'input-style input-size'));
}

const btnSubmit = document.getElementById('facebook-register');
btnSubmit.addEventListener('click', function (event) {
  event.preventDefault();
  const inpFirstname = document.getElementsByName('firstname')[0];
  const inpLastname = document.getElementsByName('lastname')[0];
  const inpPhoneEmail = document.getElementsByName('phone_email')[0];
  const inpPassword = document.getElementsByName('password')[0];
  const inpBirthdate = document.getElementsByName('birthdate')[0];
  const inpGender = document.getElementsByName('gender');
  let innerIf = false;

  if (inpFirstname.value.trim() === '') {
    innerIf = true;
  }

  if (inpLastname.value.trim() === '') {
    innerIf = true;
  }

  if (inpPhoneEmail.value.trim() === '') {
    innerIf = true;
  }

  if (inpPassword.value.trim() === '') {
    innerIf = true;
  }

  if (inpBirthdate.value.trim() === '') {
    innerIf = true;
  }

  if (!(inpGender[0].checked) && !(inpGender[1].checked) && !(inpGender[2].checked)) {
    innerIf = true;
  }

  if (innerIf) {
    pMensageInvalid.innerText = 'Campos inválidos';
  } else {
    printData();
  }
});

const radioFemale = document.getElementById('female');
const radioMale = document.getElementById('male');
const radioPerson = document.getElementById('person');

function clearInput() {
  const addDivPerson = document.getElementById('div-person');
  addDivPerson.innerHTML = '';
}
radioFemale.addEventListener('change', clearInput);

radioMale.addEventListener('change', clearInput);

radioPerson.addEventListener('change', function () {
  const personMargin = document.getElementsByClassName('person-margin').length;
  if (personMargin === 0) {
    const inputRadio = document.createElement('input');
    inputRadio.placeholder = 'Gênero (opcional)';
    inputRadio.name = 'gender-custom';
    inputRadio.className = 'inputLarge input-style person-margin';
    const addDivPerson = document.getElementById('div-person');
    addDivPerson.appendChild(inputRadio);
  }
});
