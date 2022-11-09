const baseURL = "http://127.0.0.1:5501"

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
        let mensagem = '';
        switch(error.code){
            case 'auth/invalid-email':
                mensagem = 'O E-mail informado é inválido!'
                break;
            case 'auth/email-already-exists':
                mensagem = 'O e-mail informado já está sendo utilizado!'
                break;
            default:
                mensagem = error.message    
        }
        alert(`Erro ao efetuar o login: ${mensagem}`)
    }) 
}

/**
 * Criar novo Usuario no banco firebase
 * @param {string} email - email do usuario
 * @param {string} senha - senha do usuario
 * @return {object} - o Usuario é criado
 */

function NovoUsuario(email,senha){
    firebase.auth().createUserWithEmailAndPassword(email,senha)
    .then((result) => {
        alert(`Bem vindo, ${JSON.stringify(result.user.email)}`)
        window.location.href = `${baseURL}/index.html`
    })
    .catch(error => {
        alert(`Não foi possivel cadastrar o usuário. Erro: ${error.message}`)
    })
}

/**
 * Verificar se usuario está logado
 * @return {null} 
 */

function verificarLogado(){
    firebase.auth().onAuthStateChanged(user =>{
        if(!user){
            console.log('Acesso Inválido. Redirecionando...')
            window.location.href = baseURL
        }
    })
}