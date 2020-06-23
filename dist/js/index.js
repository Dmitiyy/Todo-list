/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Todo{
    constructor(input){
        this.input = document.querySelector(input);
        this.body = document.querySelector('.container__body');
    }
    addToStorage(selector){
        localStorage.setItem('item', selector);
    }
    init(){
        this.input.addEventListener('keydown', (e) => {
            if(e.code == 'Enter'){
                if(this.input.value.length > 25){
                    let inp2 = this.input.value;
                    let inp3 = inp2.slice(0, 25);
                    this.body.innerHTML += `
                        <div class="container-item">
                            <div class="container-inner animate__animated animate__bounceIn">
                                <div class="container-inner__block1">
                                    <img src="img/done1.png" alt="" class="container__img-done1">
                                    <img src="img/done2.png" alt="" class="container__img-done2">
                                </div>
                                <div class="container-inner__block2"><p>${inp3}...</p></div>
                                <div class="container-inner__block3">
                                    <div class="container-rectangle">&#10006;</div>
                                </div>
                            </div>
                        </div>
                    `; 
                } else if(this.input.value.length < 1){
                    alert('Введите задачу');
                } else {
                    this.body.innerHTML += `
                        <div class="container-item ">
                            <div class="container-inner animate__animated animate__bounceIn">
                                <div class="container-inner__block1">
                                    <img src="img/done1.png" alt="" class="container__img-done1">
                                    <img src="img/done2.png" alt="" class="container__img-done2">
                                </div>
                                <div class="container-inner__block2"><p>${this.input.value}</p></div>
                                <div class="container-inner__block3">
                                    <div class="container-rectangle">&#10006;</div>
                                </div>
                            </div>
                        </div>
                    `;
                }
                this.addToStorage(this.body.innerHTML);
            }
        });
        this.body.innerHTML = localStorage.getItem('item');
        this.body.addEventListener('click', (e) => {
            if(e.target.classList.contains('container-rectangle')){
                e.target.style.display = 'none';
                e.target.parentNode.parentNode.parentNode.remove();
                this.addToStorage(this.body.innerHTML);
            }
            const foo = (selector) => {
                if(e.target.classList.contains(selector)){
                    if(e.target.parentNode.nextElementSibling.style.textDecoration == 'line-through'){
                        e.target.parentNode.nextElementSibling.style.textDecoration = 'none';
                        e.target.parentNode.parentNode.style.background = 'rgb(226, 143, 143)';
                    } else {
                        e.target.parentNode.nextElementSibling.style.textDecoration = 'line-through';
                        e.target.parentNode.parentNode.style.background = 'rgb(135, 207, 139)';
                    }
                    this.addToStorage(this.body.innerHTML);
                }
            };
            foo('container__img-done1');
            foo('container__img-done2');
        });
    }
}
let todo = new Todo('.container__header__input');
todo.init();

/***/ })

/******/ });
//# sourceMappingURL=index.js.map