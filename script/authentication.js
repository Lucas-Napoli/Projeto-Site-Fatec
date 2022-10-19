const baseURL = "http://127.0.0.1:5500"

/** 
 * loginFiraBase
 * Realiza  a autenticação do usuário no firebase
 * @param {string} email - email do usuario
 * @param {string} senha - senha do usuario
 * @return {object} - objeto com o usuario logado
 */

function loginFireBase(email, senha){
    firebase
    .auth()
    .signInWithEmailAndPassword(email,senha)
    .then(result => {
        alert(`Bem vindo, ${JSON.stringify(result.user.email)}`)
        window.location.href = `${baseURL}/home.html`
    })
    .catch(error => {
        alert(`Erro ao efetuar o login: ${error.message}`)
    }) 
}
