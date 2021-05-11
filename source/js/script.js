    //header
    var navMain = document.querySelector('.header__navigation');
    var navToggle = document.querySelector('.header__toggle');

    navMain.classList.remove('header__navigation--nojs');
    navMain.classList.remove('header__navigation--open');

    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('header__navigation--open')) {
        navMain.classList.remove('header__navigation--open');
      } else {
        navMain.classList.add('header__navigation--open');
      }
    });
//catalog
    var countriesFilter = document.querySelector('.countries__content-container');
    var toggleOpen = document.querySelector('.countries__toggle');
    var countryFiltersClose = document.querySelector('.countries__toggle-close');
    var countryFiltersCloseBtn = document.querySelector('.countries__collapse-btn');


    countriesFilter.classList.remove("countries__content-container--nojs");
    countriesFilter.classList.add('countries__content-container--collapse');

    toggleOpen.addEventListener('click', function () {
      countriesFilter.classList.remove('countries__content-container--collapse')
    });

    countryFiltersClose.addEventListener('click', function () {
      countriesFilter.classList.add('countries__content-container--collapse')
    });

    countryFiltersCloseBtn.addEventListener('click', function () {
      countriesFilter.classList.add('countries__content-container--collapse')
    });

  //form

    var openSelectCountry = document.querySelector('.country-list__item--unselected');
    var modalSelectCountry = document.querySelector('.step-2__country-select-wrapper');
    var selectCountryClose = document.querySelector('.select-country__close');
    var unselectedCloseHide = document.querySelector('.country-list__delete--unselected');

    openSelectCountry.addEventListener('click', function (e) {
      modalSelectCountry.classList.remove('select-country--close');
      unselectedCloseHide.classList.add('country-list__delete--hide');
      openSelectCountry.classList.add('country-list__item--open')
      e.preventDefault();
    });

    selectCountryClose.addEventListener('click', function (e) {
      modalSelectCountry.classList.add('select-country--close');
      unselectedCloseHide.classList.remove('country-list__delete--hide');
      openSelectCountry.classList.remove('country-list__item--open')
      e.preventDefault();
    })

//index

    var businessPrice = document.querySelector('.price__business');
    var businessPriceBtnOpen = document.querySelector('.price__business-tax-btn');
    var businessPriceBtnClose = document.querySelector('.business-prices__close');

    businessPriceBtnOpen.addEventListener('click', function (e) {
      e.preventDefault();
      businessPrice.classList.remove('price__business--hide')
    })

    businessPriceBtnClose.addEventListener('click', function (e) {
      businessPrice.classList.add('price__business--hide')
      e.preventDefault()
    })
