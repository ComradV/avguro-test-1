// console.log('loaded!')
(function () {
  feature_descriptions = {
    "feature0": {
      text: 'Text feature 0',
      name: 'Сайт-визитка',
      path: 'images/features/businesscard.svg',
      class:'feature-top column1',
    },
    "feature1": {
      text: 'Text feature 1',
      name: 'Поддержка DNS',
      path: 'images/features/dns.svg',
      class:'feature-top column2',
    },
    "feature2": {
      text: 'Text feature 2',
      name: 'Сертификат о владении доменом',
      path: 'images/features/certificate.svg',
      class:'feature-top column3',
    },
    "feature3": {
      text: 'Text feature 3',
      name: 'Автопродление',
      path: 'images/features/autorenewal.svg',
      class:'feature-top column4',
    },
    "feature4": {
      text: 'Text feature 4',
      name: 'Облачное хранилище на 20 Гб',
      path: 'images/features/cloud.svg',
      class:'feature-bottom column1',
    },
    "feature5": {
      text: 'Text feature 5',
      name: 'Бесплатный SSL-сертификат',
      path: 'images/features/freessl.svg',
      class:'feature-bottom column2',
    },
    "feature6": {
      text: 'Text feature 6',
      name: 'DNSSEC в один клик',
      path: 'images/features/dnssec.svg',
      class:'feature-bottom column3',
    },
    "feature7": {
      text: 'Text feature 7',
      name: 'Перенаправление',
      path: 'images/features/redirect.svg',
      class:'feature-bottom column4',
    },
  }

  let feature_DOM = document.getElementsByClassName("feature")
  let description_element = document.getElementById("feature-description")
  let description_text = document.getElementById("feature-description-text")
  for (let i = 0; i < feature_DOM.length; i++) {
    let feature = feature_DOM[i];
    let feature_description = feature_descriptions[feature.dataset.index]
    feature.getElementsByTagName('p')[0].textContent = feature_description.name
    feature.getElementsByTagName('img')[0].src = feature_description.path
    feature.addEventListener("click", activate_feature(feature), false)
  }
  activate_feature(feature_DOM[0])()

  function activate_feature(feature) {
    return function () {
      description_text.textContent = feature_descriptions[feature.dataset.index].text
      description_element.classList = feature_descriptions[feature.dataset.index].class
    }
  }
})()

// document.getElementById("feature-description").addEventListener('click', (event) => console.log(event.target))
// console.log(feature_DOM.length)