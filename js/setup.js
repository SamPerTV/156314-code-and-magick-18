'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян','Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAMES = ['да Марья','Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)','rgb(0, 0, 0)']
var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

   
var renderNamesWizard = function (WIZARD_NAMES, WIZARD_LASTNAMES) {
    for(var i = 0; i < WIZARD_NAMES.length; i++) {
        var ranNames = Math.floor(Math.random() * WIZARD_NAMES.length);
        var wizardNames = WIZARD_NAMES[ranNames];
    }
    
    for(var i = 0; i < WIZARD_LASTNAMES.length; i++) {
        var ranLastNames = Math.floor(Math.random() * WIZARD_LASTNAMES.length);
        var wizardLastNames = WIZARD_LASTNAMES[ranLastNames];
    }
    return wizardNames  + ' ' + wizardLastNames;
}

var rendercoatsColor = function (wizardColor) {
 for(var i = 0; i < WIZARD_COATCOLOR.length; i++) {
  var randCoat = Math.floor(Math.random() * WIZARD_COATCOLOR.length);
  var  wizardColor = WIZARD_COATCOLOR[randCoat];
        
       
}
   
return wizardColor;
}
var rendrEyesColor = function (WIZARD_EYESCOLOR) {
 for(var i = 0; i < WIZARD_EYESCOLOR.length; i++) {
  var randEyes = Math.floor(Math.random() * WIZARD_EYESCOLOR.length);
  var wizardEyesColor = WIZARD_EYESCOLOR[randEyes];
    }
    return wizardEyesColor;
}
var coatColor = rendercoatsColor(WIZARD_COATCOLOR);
var WizardName = renderNamesWizard(WIZARD_NAMES, WIZARD_LASTNAMES);
var WizardeyesColor = rendrEyesColor(WIZARD_EYESCOLOR);
var wizards = [
  {
    name: WizardName,
    coatColor: coatColor,
    eyesColor: WizardeyesColor
  },
  {
    name: WizardName,
    coatColor: coatColor,
    eyesColor: WizardeyesColor
  },
  {
    name: WizardName,
    coatColor: coatColor,
    eyesColor: WizardeyesColor
  },
  {
    name: WizardName,
    coatColor: coatColor,
    eyesColor: WizardeyesColor
  }
];



var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  
  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');