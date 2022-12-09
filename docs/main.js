/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/index.scss?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/inputs */ \"./js/inputs.js\");\n/* harmony import */ var _js_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/sliders */ \"./js/sliders.js\");\n/* harmony import */ var _js_price_price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/price/price */ \"./js/price/price.js\");\n/* harmony import */ var _js_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/gallery */ \"./js/gallery.js\");\n/* harmony import */ var _js_mobile_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/mobile-menu */ \"./js/mobile-menu.js\");\n/* harmony import */ var _js_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/menu */ \"./js/menu.js\");\n/* harmony import */ var _js_consultation_consultation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/consultation/consultation */ \"./js/consultation/consultation.js\");\n/* harmony import */ var _js_button_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/button/button */ \"./js/button/button.js\");\n/* harmony import */ var _js_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/select */ \"./js/select.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/css */ \"../node_modules/swiper/swiper.min.css\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/index.scss */ \"./styles/index.scss\");\n\n\n\n\n\n\n\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_js_sliders__WEBPACK_IMPORTED_MODULE_1__.createPromoSlider)();\n  (0,_js_sliders__WEBPACK_IMPORTED_MODULE_1__.createPortfolioSlider)();\n  (0,_js_sliders__WEBPACK_IMPORTED_MODULE_1__.createReviewSlider)();\n  (0,_js_sliders__WEBPACK_IMPORTED_MODULE_1__.createServicesSlider)();\n\n  (0,_js_price_price__WEBPACK_IMPORTED_MODULE_2__.createPriceCalculator)();\n  (0,_js_inputs__WEBPACK_IMPORTED_MODULE_0__.createInputTel)();\n  (0,_js_select__WEBPACK_IMPORTED_MODULE_8__.createSelects)();\n  (0,_js_consultation_consultation__WEBPACK_IMPORTED_MODULE_6__.createConsultationForm)();\n\n  (0,_js_gallery__WEBPACK_IMPORTED_MODULE_3__.createGallery)();\n  (0,_js_mobile_menu__WEBPACK_IMPORTED_MODULE_4__.createMobileMenu)();\n  (0,_js_menu__WEBPACK_IMPORTED_MODULE_5__.createMenuAnchors)();\n  (0,_js_button_button__WEBPACK_IMPORTED_MODULE_7__.createButtonWithAnchors)();\n});\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/button/button.js":
/*!*****************************!*\
  !*** ./js/button/button.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createButtonWithAnchors\": () => (/* binding */ createButtonWithAnchors),\n/* harmony export */   \"createButtonWithLoader\": () => (/* binding */ createButtonWithLoader)\n/* harmony export */ });\n/* harmony import */ var _loader_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loader/loader */ \"./js/loader/loader.js\");\n/* harmony import */ var _scroll_to__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scroll-to */ \"./js/scroll-to.js\");\n\n\n\nconst createButtonWithLoader = (button, onClick) => {\n  if (!button) {\n    return;\n  }\n\n  const loaderEl = button.querySelector('[data-el=\"loader\"]');\n  const contentEl = button.querySelector('[data-el=\"button-content\"]');\n\n  button.addEventListener('click', async (event) => {\n    try {\n      event.preventDefault();\n      (0,_loader_loader__WEBPACK_IMPORTED_MODULE_0__.showLoader)(loaderEl, contentEl);\n      await onClick();\n    } catch (error) {\n      console.error(error);\n    } finally {\n      (0,_loader_loader__WEBPACK_IMPORTED_MODULE_0__.hideLoader)(loaderEl, contentEl);\n    }\n  });\n};\n\nconst createButtonWithAnchors = () => {\n  const buttonEls = document.querySelectorAll('[data-el=\"buton-anchor\"]');\n\n  if (!buttonEls) {\n    return;\n  }\n\n  buttonEls.forEach((buttonEl) => {\n    buttonEl.addEventListener('click', () => {\n      const anchor = buttonEl.dataset.anchor;\n\n      if (!anchor) {\n        return;\n      }\n\n      (0,_scroll_to__WEBPACK_IMPORTED_MODULE_1__.scrollTo)(`#${anchor}`);\n    });\n  });\n};\n\n\n//# sourceURL=webpack:///./js/button/button.js?");

/***/ }),

/***/ "./js/consultation/consultation.js":
/*!*****************************************!*\
  !*** ./js/consultation/consultation.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createConsultationForm\": () => (/* binding */ createConsultationForm)\n/* harmony export */ });\n/* harmony import */ var _telegram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./telegram */ \"./js/consultation/telegram.js\");\n/* harmony import */ var _telegram_telegram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../telegram/telegram */ \"./js/telegram/telegram.js\");\n/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/button */ \"./js/button/button.js\");\n\n\n\n\nconst createConsultationForm = () => {\n  const formEls = document.querySelectorAll('[data-el=\"consultation-form\"]');\n\n  if (!formEls) {\n    return;\n  }\n\n  formEls.forEach((formEl) => {\n    const phoneEl = formEl.querySelector('[data-el=\"input-tel\"]');\n    const buttonEl = formEl.querySelector('[data-el=\"submit-button\"]');\n\n    (0,_button_button__WEBPACK_IMPORTED_MODULE_2__.createButtonWithLoader)(buttonEl, () => {\n      const { message } = (0,_telegram__WEBPACK_IMPORTED_MODULE_0__.createConsultationMessage)(phoneEl.value);\n      return (0,_telegram_telegram__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(message);\n    });\n  });\n};\n\n\n//# sourceURL=webpack:///./js/consultation/consultation.js?");

/***/ }),

/***/ "./js/consultation/telegram.js":
/*!*************************************!*\
  !*** ./js/consultation/telegram.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createConsultationMessage\": () => (/* binding */ createConsultationMessage)\n/* harmony export */ });\nconst createConsultationMessage = (phone) => {\n  const phoneNumber = phone.replaceAll(/\\_|\\(|\\)|\\-|/g, '').replace('+', '%2B');\n\n  const message = `*Заявка на дзвінок* 📞 %0AНомер телефона: *${phoneNumber}* %0AНатисніть на номер щоб зателефонувати`;\n\n  return { message };\n};\n\n\n//# sourceURL=webpack:///./js/consultation/telegram.js?");

/***/ }),

/***/ "./js/gallery.js":
/*!***********************!*\
  !*** ./js/gallery.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createGallery\": () => (/* binding */ createGallery)\n/* harmony export */ });\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"../node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromodal */ \"../node_modules/micromodal/dist/micromodal.es.js\");\n\n\n\nswiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_0__.EffectFade, swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation]);\n\nconst createGallerySlider = () => {\n  new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-el=\"gallery-slider\"]', {\n    slidesPerView: 1,\n    spaceBetween: 10,\n    navigation: {\n      nextEl: '[data-el=\"gallery-next\"]',\n      prevEl: '[data-el=\"gallery-prev\"]',\n    },\n  });\n};\n\nconst createGallery = () => {\n  const openBtnEls = document.querySelectorAll('[data-el=\"gallery-open\"]');\n  const galleryEl = document.querySelector('[data-el=\"gallery\"]');\n\n  openBtnEls.forEach((openBtnEl) => {\n    openBtnEl.addEventListener('click', () => {\n      const images = JSON.parse(openBtnEl.dataset.gallery);\n\n      if (!images) {\n        return;\n      }\n\n      createGalleryItems(images);\n      createGallerySlider();\n      micromodal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].show('gallery-modal');\n    });\n  });\n\n  const createGalleryItems = (images) => {\n    galleryEl.innerHTML = '';\n    const slideView = (image) => `<div class=\"swiper-slide gallery-slide\" data-el=\"gallery-item\">\n      <img class=\"gallery-slide__image\" src=\"${image}\"/>\n    </div>`;\n\n    images.forEach((image) => {\n      galleryEl.innerHTML += slideView(image);\n    });\n  };\n};\n\n\n//# sourceURL=webpack:///./js/gallery.js?");

/***/ }),

/***/ "./js/inputs.js":
/*!**********************!*\
  !*** ./js/inputs.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createInputTel\": () => (/* binding */ createInputTel)\n/* harmony export */ });\n/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! imask */ \"../node_modules/imask/esm/index.js\");\n\n\nconst createInputTel = (onChange) => {\n  const inputs = document.querySelectorAll('[data-el=\"input-tel\"]');\n  const maskOptions = {\n    mask: '+{38}(000)000-00-00',\n    lazy: false,\n  };\n\n  if (!inputs) {\n    return;\n  }\n\n  inputs.forEach((input) => {\n    const mask = (0,imask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input, maskOptions);\n\n    if (onChange) {\n      mask.on('accept', onChange);\n    }\n  });\n};\n\n\n//# sourceURL=webpack:///./js/inputs.js?");

/***/ }),

/***/ "./js/loader/loader.js":
/*!*****************************!*\
  !*** ./js/loader/loader.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hideLoader\": () => (/* binding */ hideLoader),\n/* harmony export */   \"showLoader\": () => (/* binding */ showLoader)\n/* harmony export */ });\nconst showLoader = (loader, content) => {\n  loader.classList.add('loader--visible');\n  content.classList.add('button-content--hidden');\n};\n\nconst hideLoader = (loader, content) => {\n  loader.classList.remove('loader--visible');\n  content.classList.remove('button-content--hidden');\n};\n\n\n//# sourceURL=webpack:///./js/loader/loader.js?");

/***/ }),

/***/ "./js/menu.js":
/*!********************!*\
  !*** ./js/menu.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenuAnchors\": () => (/* binding */ createMenuAnchors)\n/* harmony export */ });\n/* harmony import */ var _scroll_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-to */ \"./js/scroll-to.js\");\n\n\nconst createMenuAnchors = () => {\n  const anchorsEls = Array.from(document.querySelectorAll('[data-el=\"menu-item\"]'));\n\n  if (!anchorsEls) {\n    return;\n  }\n\n  anchorsEls.forEach((anchorEl) => {\n    anchorEl.addEventListener('click', (event) => {\n      event.preventDefault();\n\n      const href = anchorEl.getAttribute('href');\n\n      (0,_scroll_to__WEBPACK_IMPORTED_MODULE_0__.scrollTo)(`#${href}`);\n    });\n  });\n};\n\n\n//# sourceURL=webpack:///./js/menu.js?");

/***/ }),

/***/ "./js/mobile-menu.js":
/*!***************************!*\
  !*** ./js/mobile-menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMobileMenu\": () => (/* binding */ createMobileMenu)\n/* harmony export */ });\nconst createMobileMenu = () => {\n  if (!window.matchMedia('(max-width: 768px)').matches) {\n    return;\n  }\n\n  const openBtnEl = document.querySelector('[data-el=\"header-mobile-btn\"]');\n  const closeBtnEl = document.querySelector('[data-el=\"menu-close-btn\"]');\n  const menuEl = document.querySelector('[data-el=\"mobile-menu\"]');\n\n  if (!openBtnEl || !menuEl || !closeBtnEl) {\n    return;\n  }\n\n  openBtnEl.addEventListener('click', () => {\n    menuEl.classList.add('opened');\n  });\n\n  closeBtnEl.addEventListener('click', () => {\n    menuEl.classList.remove('opened');\n  });\n};\n\n\n//# sourceURL=webpack:///./js/mobile-menu.js?");

/***/ }),

/***/ "./js/price/animated-box.js":
/*!**********************************!*\
  !*** ./js/price/animated-box.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animateBoxClose\": () => (/* binding */ animateBoxClose),\n/* harmony export */   \"animateBoxOpen\": () => (/* binding */ animateBoxOpen)\n/* harmony export */ });\nconst boxEl = document.querySelector('[data-el=\"box\"]');\n\nconst animateBoxOpen = () => {\n  boxEl.classList.add('active');\n};\n\nconst animateBoxClose = () => {\n  boxEl.classList.remove('active');\n};\n\n\n//# sourceURL=webpack:///./js/price/animated-box.js?");

/***/ }),

/***/ "./js/price/form.js":
/*!**************************!*\
  !*** ./js/price/form.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createForm\": () => (/* binding */ createForm)\n/* harmony export */ });\n/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.set */ \"../node_modules/lodash.set/index.js\");\n/* harmony import */ var lodash_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_set__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.get */ \"../node_modules/lodash.get/index.js\");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst createForm = (formEl, { onValid, onInvalid }) => {\n  const fields = formEl.querySelectorAll('input');\n\n  const orderDefaultData = {\n    work: '',\n    stairs: '',\n    wood: '',\n    railing: '',\n    contact: createFormState(onValid, onInvalid),\n  };\n\n  const setValue = (fieldName, fieldValue) => {\n    lodash_set__WEBPACK_IMPORTED_MODULE_0___default()(form.fields, fieldName, fieldValue);\n  };\n\n  const getValue = (fieldName) => {\n    if (!fieldName) {\n      return form.fields;\n    }\n\n    return lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(form.fields, fieldName);\n  };\n\n  const handleFieldChange = (inputEl) => {\n    const onInputChange = () => {\n      const name = inputEl.getAttribute('name');\n      const value = inputEl.value;\n\n      setValue(name, value);\n    };\n\n    inputEl.addEventListener('input', onInputChange);\n  };\n\n  const applyInputChangeHandlers = () => {\n    fields.forEach(handleFieldChange);\n  };\n\n  const form = {\n    fields: orderDefaultData,\n    setValue,\n    getValue,\n  };\n\n  applyInputChangeHandlers();\n\n  return form;\n};\n\nconst createFormState = (onValid, onInvalid) => {\n  return new Proxy(\n    { name: null, messanger: 'Viber', location: 'Львівська (область)', phone: null },\n    {\n      set: (obj, prop, value) => {\n        Reflect.set(obj, prop, value);\n\n        if (hasValues(obj)) {\n          onValid && onValid();\n        } else {\n          onInvalid();\n        }\n\n        return true;\n      },\n    },\n  );\n};\n\nconst hasValues = (fields) => {\n  return Object.values(fields).every((field) => field || field?.length > 0);\n};\n\n\n//# sourceURL=webpack:///./js/price/form.js?");

/***/ }),

/***/ "./js/price/pagination.js":
/*!********************************!*\
  !*** ./js/price/pagination.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPagination\": () => (/* binding */ createPagination)\n/* harmony export */ });\nconst createPagination = () => {\n  const paginationEls = Array.from(document.querySelectorAll('[data-el=\"step-pagination\"]'));\n  const counterEl = document.querySelector('[data-el=\"step-counter\"]');\n\n  const setCurrentPagination = (page) => {\n    const index = page - 1;\n\n    if (index < 0) {\n      return clearPagination();\n    }\n\n    clearPagination();\n\n    const paginationEl = paginationEls[index];\n    paginationEl.classList.add('active');\n    counterEl.innerText = page;\n  };\n\n  const clearPagination = () => {\n    paginationEls.forEach((paginationEl) => {\n      paginationEl.classList.remove('active');\n    });\n  };\n\n  return {\n    setCurrentPagination,\n  };\n};\n\n\n//# sourceURL=webpack:///./js/price/pagination.js?");

/***/ }),

/***/ "./js/price/price.js":
/*!***************************!*\
  !*** ./js/price/price.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPriceCalculator\": () => (/* binding */ createPriceCalculator)\n/* harmony export */ });\n/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button/button */ \"./js/button/button.js\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ \"./js/price/form.js\");\n/* harmony import */ var _telegram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./telegram */ \"./js/price/telegram.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider */ \"./js/price/slider.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ \"./js/price/services.js\");\n/* harmony import */ var _animated_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./animated-box */ \"./js/price/animated-box.js\");\n\n\n\n\n\n\n\nlet form;\nlet pagination;\n\nconst createPriceCalculator = () => {\n  pagination = (0,_slider__WEBPACK_IMPORTED_MODULE_3__.createPriceSlider)();\n  initForm();\n  initServices();\n};\n\nconst initServices = () => {\n  const onServiceClick = (serviceName, serviceValue) => {\n    pagination.next();\n    form.setValue(serviceName, serviceValue);\n  };\n\n  (0,_services__WEBPACK_IMPORTED_MODULE_4__.createServices)(onServiceClick);\n};\n\nconst initForm = () => {\n  const formEl = document.querySelector('.price-form');\n  const [submitButtonDesktop, submitButtonMobile] = Array.from(\n    document.querySelectorAll('[data-el=\"price-finish\"]'),\n  );\n\n  const onValid = () => {\n    submitButtonDesktop.classList.remove('slider-finish--disabled');\n    submitButtonMobile.classList.remove('slider-finish--disabled');\n    (0,_animated_box__WEBPACK_IMPORTED_MODULE_5__.animateBoxOpen)();\n  };\n\n  const onInvalid = () => {\n    submitButtonDesktop.classList.add('slider-finish--disabled');\n    submitButtonMobile.classList.add('slider-finish--disabled');\n    (0,_animated_box__WEBPACK_IMPORTED_MODULE_5__.animateBoxClose)();\n  };\n\n  form = (0,_form__WEBPACK_IMPORTED_MODULE_1__.createForm)(formEl, { onValid, onInvalid });\n\n  const onSubmitFormDesktop = () => {\n    const fields = form.getValue();\n    (0,_telegram__WEBPACK_IMPORTED_MODULE_2__.sendOrder)(fields);\n  };\n\n  const onSubmitFormMobile = () => {\n    const fields = form.getValue();\n\n    (0,_telegram__WEBPACK_IMPORTED_MODULE_2__.sendOrder)(fields);\n    slider.slideNext();\n  };\n\n  (0,_button_button__WEBPACK_IMPORTED_MODULE_0__.createButtonWithLoader)(submitButtonDesktop, onSubmitFormDesktop);\n  (0,_button_button__WEBPACK_IMPORTED_MODULE_0__.createButtonWithLoader)(submitButtonMobile, onSubmitFormMobile);\n};\n\n\n//# sourceURL=webpack:///./js/price/price.js?");

/***/ }),

/***/ "./js/price/services.js":
/*!******************************!*\
  !*** ./js/price/services.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createServices\": () => (/* binding */ createServices)\n/* harmony export */ });\nconst createServices = (onClick) => {\n  const servicesEls = Array.from(document.querySelectorAll('[data-el=\"service\"]'));\n  servicesEls.forEach((serviceEl) => {\n    serviceEl.addEventListener('click', () => {\n      const field = serviceEl.dataset.field;\n      const value = serviceEl.dataset.value;\n\n      onClick(field, value);\n\n      clearActiveServices(servicesEls);\n      renderActiveService(serviceEl);\n    });\n  });\n};\n\nconst renderActiveService = (serviceEl) => {\n  serviceEl.classList.add('selected');\n};\n\nconst clearActiveServices = (servicesEls) => {\n  servicesEls.forEach((serviceEl) => {\n    serviceEl.classList.remove('selected');\n  });\n};\n\n\n//# sourceURL=webpack:///./js/price/services.js?");

/***/ }),

/***/ "./js/price/slider.js":
/*!****************************!*\
  !*** ./js/price/slider.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPriceSlider\": () => (/* binding */ createPriceSlider)\n/* harmony export */ });\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"../node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination */ \"./js/price/pagination.js\");\n\n\n\nswiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_0__.EffectFade, swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation]);\n\nconst createPriceSlider = () => {\n  const slider = new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.section-price__slider');\n  const prevEls = Array.from(document.querySelectorAll('[data-el=\"price-prev\"]'));\n  const startButtonEl = document.querySelector('[data-el=\"price-start\"]');\n  const { setCurrentPagination } = (0,_pagination__WEBPACK_IMPORTED_MODULE_1__.createPagination)();\n\n  const next = () => {\n    slider.slideNext();\n    setCurrentPagination(slider.activeIndex);\n  };\n\n  const prev = () => {\n    slider.slidePrev();\n    setCurrentPagination(slider.activeIndex);\n  };\n\n  prevEls.forEach((prevEl) => {\n    prevEl.addEventListener('click', prev);\n  });\n\n  startButtonEl.addEventListener('click', next);\n\n  return { prev, next };\n};\n\n\n//# sourceURL=webpack:///./js/price/slider.js?");

/***/ }),

/***/ "./js/price/telegram.js":
/*!******************************!*\
  !*** ./js/price/telegram.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendOrder\": () => (/* binding */ sendOrder)\n/* harmony export */ });\n/* harmony import */ var _telegram_telegram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../telegram/telegram */ \"./js/telegram/telegram.js\");\n\n\nconst sendOrder = async (order) => {\n  if (!order) {\n    return;\n  }\n\n  const { message } = orderMessage(order);\n  const { ok } = await (0,_telegram_telegram__WEBPACK_IMPORTED_MODULE_0__.sendMessage)(message);\n\n  return ok;\n};\n\nconst orderMessage = (order) => {\n  const phoneNumber = order.contact.phone.replaceAll(/\\_|\\(|\\)|\\-|/g, '').replace('+', '%2B');\n\n  let message = `*Заявка на розрахунок вартості* 💲 %0A`;\n  message += `------------------------------------------- %0A  %0A`;\n  message += `Ім'я: *${order.contact.name}* %0A`;\n  message += `Звідки: *${order.contact.location}* %0A`;\n  message += `Номер телефона: *${phoneNumber}* %0A`;\n  message += `Куди відправити бонус: *${order.contact.messanger}* %0A %0A`;\n  message += `------------------------------------------- %0A`;\n  message += `✅ Вид робіт: *${order.work}* %0A`;\n  message += `✅ Тип сходів: *${order.stairs}* %0A`;\n  message += `✅ Вид деревини: *${order.wood}* %0A`;\n  message += `✅ Тип перил: *${order.railing}* %0A`;\n\n  return {\n    message,\n  };\n};\n\n\n//# sourceURL=webpack:///./js/price/telegram.js?");

/***/ }),

/***/ "./js/scroll-to.js":
/*!*************************!*\
  !*** ./js/scroll-to.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scrollTo\": () => (/* binding */ scrollTo)\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"../node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollToPlugin */ \"../node_modules/gsap/ScrollToPlugin.js\");\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].registerPlugin(gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_1__.ScrollToPlugin);\n\nconst scrollTo = (selector) => {\n  gsap__WEBPACK_IMPORTED_MODULE_0__[\"default\"].to(window, { duration: 2, scrollTo: selector });\n};\n\n\n//# sourceURL=webpack:///./js/scroll-to.js?");

/***/ }),

/***/ "./js/select.js":
/*!**********************!*\
  !*** ./js/select.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createSelect\": () => (/* binding */ createSelect),\n/* harmony export */   \"createSelects\": () => (/* binding */ createSelects)\n/* harmony export */ });\nconst createSelect = (target, onSelect) => {\n  if (!target) {\n    return;\n  }\n\n  const valueEl = target.querySelector('[data-el=\"select-value\"]');\n  const valueInputEl = target.querySelector('#select-value');\n  const optionEls = Array.from(target.querySelectorAll('[data-el=\"option\"]'));\n  const inputEl = target.querySelector('[data-el=\"select-input\"]');\n\n  const isOpened = () => target.classList.contains('select-field--opened');\n  const open = () => {\n    target.classList.add('select-field--opened');\n  };\n\n  const close = () => {\n    target.classList.remove('select-field--opened');\n  };\n\n  const setValue = (value) => {\n    if (!value) {\n      return;\n    }\n\n    valueInputEl.value = value;\n    valueEl.innerText = value;\n\n    valueInputEl.dispatchEvent(new Event('input', { bubbles: true }));\n  };\n\n  inputEl.addEventListener('click', (event) => {\n    if (isOpened()) {\n      close();\n    } else {\n      open();\n    }\n  });\n\n  optionEls.forEach((optionEl) => {\n    optionEl.addEventListener('click', (event) => {\n      const value = event.target.innerText;\n\n      setValue(value);\n      close();\n    });\n  });\n};\n\nconst createSelects = () => {\n  const selectEls = Array.from(document.querySelectorAll('[data-el=\"select\"]'));\n  selectEls.forEach((selectEl) => {\n    createSelect(selectEl);\n  });\n};\n\n\n//# sourceURL=webpack:///./js/select.js?");

/***/ }),

/***/ "./js/sliders.js":
/*!***********************!*\
  !*** ./js/sliders.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPortfolioSlider\": () => (/* binding */ createPortfolioSlider),\n/* harmony export */   \"createPromoSlider\": () => (/* binding */ createPromoSlider),\n/* harmony export */   \"createReviewSlider\": () => (/* binding */ createReviewSlider),\n/* harmony export */   \"createServicesSlider\": () => (/* binding */ createServicesSlider)\n/* harmony export */ });\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ \"../node_modules/swiper/swiper.esm.js\");\n\n\nswiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_0__.EffectFade, swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation]);\n\nconst createPromoSlider = () => {\n  new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.section-promo__slider', {\n    speed: 1000,\n    autoplay: {\n      delay: 2500,\n      disableOnInteraction: false,\n    },\n    loop: true,\n    pagination: {\n      el: '.swiper-pagination',\n    },\n  });\n};\n\nconst createServicesSlider = () => {\n  if (window.matchMedia('(max-width: 768px)').matches) {\n    new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.section-services__slider', {\n      spaceBetween: 8,\n      slidesPerView: 1.25,\n      centeredSlides: true,\n    });\n  }\n};\n\nconst createPortfolioSlider = () => {\n  new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.section-portfolio__slider', {\n    slidesPerGroup: 1,\n    slidesPerView: 1.25,\n    spaceBetween: 8,\n    centeredSlides: true,\n    navigation: {\n      prevEl: '[data-el=\"portfolio-prev\"]',\n      nextEl: '[data-el=\"portfolio-next\"]',\n    },\n\n    breakpoints: {\n      768: {\n        slidesPerGroup: 1,\n        slidesPerView: 2.8,\n        spaceBetween: 10,\n        centeredSlides: false,\n      },\n\n      1025: {\n        slidesPerGroup: 1,\n        slidesPerView: 3.2,\n        spaceBetween: 20,\n        centeredSlides: false,\n      },\n    },\n  });\n};\n\nconst createReviewSlider = () => {\n  new swiper__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.section-reviews__slider', {\n    slidesPerGroup: 1,\n    slidesPerView: 1.35,\n    spaceBetween: 10,\n    centeredSlides: true,\n    navigation: {\n      prevEl: '[data-el=\"reviews-prev\"]',\n      nextEl: '[data-el=\"reviews-next\"]',\n    },\n\n    breakpoints: {\n      768: {\n        slidesPerGroup: 1,\n        slidesPerView: 3.2,\n        centeredSlides: false,\n      },\n      1025: {\n        slidesPerGroup: 1,\n        slidesPerView: 4,\n        centeredSlides: false,\n      },\n    },\n  });\n};\n\n\n//# sourceURL=webpack:///./js/sliders.js?");

/***/ }),

/***/ "./js/telegram/telegram.js":
/*!*********************************!*\
  !*** ./js/telegram/telegram.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendMessage\": () => (/* binding */ sendMessage)\n/* harmony export */ });\nconst TELEGRAM_API_KEY = '5487817810:AAEC6H1x16_T8xXK-izVibphKEwUVwfOlXA';\nconst TELEGRAM_API_URL = 'https://api.telegram.org/bot';\n\nconst sendMessage = async (message, reply) => {\n  const chatId = 593128405;\n  let url = `${TELEGRAM_API_URL}${TELEGRAM_API_KEY}/sendMessage?chat_id=${chatId}&text=${message}&parse_mode=markdown`;\n\n  if (reply) {\n    url += `&reply_markup=${JSON.stringify(reply)}`;\n  }\n\n  const response = await fetch(url, { method: 'GET' });\n\n  return response.json();\n};\n\n\n//# sourceURL=webpack:///./js/telegram/telegram.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_ScrollToPlugin_js-node_modules_gsap_index_js-node_modules_imask_esm-3c6581"], () => (__webpack_require__("./index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;