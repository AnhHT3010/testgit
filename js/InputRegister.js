const $template = document.createElement('template');
$template.innerHTML=`
    <div class="input-register">
        <div class="input-text"></div>
        <input type = "text" class= "input-main">
        <div class="input-error">Input error message</div>
    </div>
`;

export default class InputRegister extends HTMLElement{
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$text = this.querySelector(".input-text")
        this.$main = this.querySelector(".input-main");
        this.$error = this.querySelector(".input-error");
    }

    static get observedAttributes() {
        return ['text', 'placeholder', 'error', 'type'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if(attrName == 'text'){
            this.$text.innerHTML = newValue;
        } else if(attrName == 'placeholder'){
            this.$main.placeholder = newValue;
        } else if(attrName == 'error'){ 
            this.$error.innerHTML = newValue;
        } else if(attrName == 'type'){
            this.$main.type = newValue;
        }
    }

    validate(condition, error){
        let value = this.$main.value;
        // condition là một hàm truyền vào 1 hàm khác thông qua tham số.
        if(condition(value)) {
            this.setAttribute('error', '');
            return true;
        } else {
            this.setAttribute('error', error);
            return false;
        }
    }

    get value() {
        return this.$main.value;
    }
}

window.customElements.define('input-register', InputRegister);