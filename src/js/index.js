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