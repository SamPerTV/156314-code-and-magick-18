'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_COUNT = 4;
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

var renderWizard = function (wizards) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');