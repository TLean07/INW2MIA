    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(userCredential) {
        // Login bem-sucedido
        var user = userCredential.user;
        // Redirecionar ou executar outras ações após o login
        })
        .catch(function(error) {
        // Tratar erros de autenticação
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        });
    }); //Certifique-se de substituir a ação "Redirecionar ou executar outras ações após o login" pelo código específico do seu aplicativo.
    