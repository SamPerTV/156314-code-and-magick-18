'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_COUNT = 4;
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var userDialog = document.querySelector('.setup');
var imgUserElement = document.querySelector('.setup-open-icon');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var setupClose = document.querySelector('.setup-close');
var setupNameInput = document.querySelector('.setup-user-name');
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var wizardCoatblock = document.querySelector('.wizard-coat');
var wizardEyesBlock = document.querySelector('.wizard-eyes');
var fairBolBackground = document.querySelector('.setup-fireball-wrap');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var getRandomElementArray = function (array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
};

var wizards = [];

for (var i = 0; i < WIZARDS_COUNT; i++) {
  var wizard = {
    name: getRandomElementArray(WIZARD_NAMES) + ' ' + getRandomElementArray(WIZARD_LASTNAMES),
    coatColor: getRandomElementArray(WIZARD_COATCOLOR),
    eyesColor: getRandomElementArray(WIZARD_EYESCOLOR)
  };
  wizards.push(wizard);
}

var renderWizard = function (wizardsObject) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizardsObject.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardsObject.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardsObject.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < wizards.length; j++) {
  fragment.appendChild(renderWizard(wizards[j]));
}
similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');

setupNameInput.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.stopPropagation();
  }
});

imgUserElement.addEventListener('click', function () {
  openPopup();
});

imgUserElement.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

wizardCoatblock.addEventListener('click', function () {
  wizardCoatblock.style.fill = getRandomElementArray(WIZARD_COATCOLOR);
});

wizardEyesBlock.addEventListener('click', function () {
  wizardEyesBlock.style.fill = getRandomElementArray(WIZARD_EYESCOLOR);
});

fairBolBackground.addEventListener('click', function () {
  fairBolBackground.style.background = getRandomElementArray(FIREBALL_COLOR);
});
