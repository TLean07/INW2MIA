const firebaseConfig = {
  apiKey: "AIzaSyD5IqsXJvvN5gOqAgKwxdJ_glQDpijaYtQ",
  authDomain: "projeto-9ed9c.firebaseapp.com",
  projectId: "projeto-9ed9c",
  storageBucket: "projeto-9ed9c.appspot.com",
  messagingSenderId: "992432186018",
  appId: "1:992432186018:web:9110fb9178f35d1b086dfb",
  measurementId: "G-B65JLBDGC5"
};

firebase.initializeApp(firebaseConfig);

const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', ()=>{
  const email = emailField.value;
  const password = passwordField.value;

  firebase.auth().signInWithEmailAndPassword(email,password)
  .then((userCredential)=>{
    const user = userCredential.user;
    console.log("Usuário logado : ", user)
  })
  .catch((error)=>{
    const errorMessage = error.message;
    console.error("Erro de autenticação : ", errorMessage)
  });
});