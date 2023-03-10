const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");
const contents = document.querySelector(".contents");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  // 기본 동작이 발생하지 않도록 해야함
  e.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  loginForm.parentElement.classList.add(HIDDEN_CLASSNAME);
  contents.classList.remove(HIDDEN_CLASSNAME);
  // welcome인사 추가하기
  greeting.innerText = `Hello ${username} ✨`;
}

// submit = enter or click
const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the contents
  paintGreeting(savedUserName);
}

// change the bg
const imgs = [
  "https://images.unsplash.com/photo-1525672716948-1f0bb9c49883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1618821545945-e91f1b97a906?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
];

const chosenImg = imgs[Math.floor(Math.random() * imgs.length)];
const bgImg = document.querySelector(".contents");

bgImg.style.background = `url("${chosenImg}") no-repeat center / cover`;
