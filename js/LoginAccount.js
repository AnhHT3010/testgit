// const $template = document.createElement('template');
// $template.innerHTML = `
//     <div class="container">
//     <form class="sign-in">
//         <h2 class="title">SIGN IN</h2>
//         <input-warpper class="email" placeholder = "Your email" type = "email" error = ""></input-warpper>
//         <input-warpper class="password" placeholder = "Your password" type ="password" error = ""></input-warpper>
//         <button class="signIn-btn">Enter</button>
//         <div class="space-50"></div>
//         <div class="sign-up">
//             <p>not a member? <a href="./SignUp/index.html">sign up now</a></p>
//         </div> 
//     </form>
//     </div>
// `;
// export default class SignIn extends HTMLElement{
//     constructor(){
//         super();
//         this.appendChild($template.content.cloneNode(true));
//         this.$signin = this.querySelector(".sign-in");
//         this.$email = this.querySelector(".email");
//         this.$password = this.querySelector(".password");
//     }
//     connectedCallback(){
//         this.$signin.onsubmit = (event) =>{
//             event.preventDefault();
//             let users = JSON.parse(localStorage.getItem("users"));
//             console.log(users);
//             let isPassed = this.$email.validate((value) => {
//                 return value != "";
//             }, "Invalid email") &
//                 this.$password.validate((value) => {
//                     return value != "";
//                 }, "Invalid password")
//             // kiểm tra xem 2 cái ở trên nó đúng chưa và check xem users có giá trị khong thì mới kiểm tra khong thì không kiểm tra     
//             if(isPassed && users){
//                 console.log(users.length);
//                 this.$password.validate((value) =>{
//                     for(let i = 0; i < users.length; i++){
//                         if(value == users[i].password && this.$email.value == users[i].email){
//                                 console.log("done");
//                                 alert("Done");
//                                 return true;
//                         }
//                     }
//                     console.log("khong có");
//                     return false;
//                 },"Incorrect email or password.");
//             }
//         }
//     }

// }
// window.customElements.define("sign-in",SignIn);
const $template = document.createElement('template');
$template.innerHTML = `
    <form class="login-form">
        <h2 class="title">Sign In</h2>
        <input-register class="email" placeholder="Your email" type ="email" error="" text = "Email" style = "magrin-bottom:1000px"></input-register>
        <br>
        <input-register class="password" placeholder="Your password" type ="password" error="" text = "Passwork"></input-register>
        <button class="login-in">LOGIN</button>
    </form>
`;

export default class LoginAccount extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
        this.$loginAccount = this.querySelector('.login-form');
        this.$email = this.querySelector('.email');
        this.$password = this.querySelector('.password');
        this.$text = this.querySelector('.text')
    }

    connectedCallback() {
        this.$loginAccount.onsubmit = (event) => {
            event.preventDefault();
            console.log("register form submitted");
            
            let isPassed = true;
            this.$email.validate((value) => {
                return value != '';
            }, "Invalid email") & 
            this.$password.validate((value) => {
                return value != '';
            }, "Invalid password");
            if(isPassed == true){
                console.log("Passs connected");
            }
        }
    }
}

window.customElements.define('login-form', LoginAccount);