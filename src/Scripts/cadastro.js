//Funções de movimento das páginas
function redirecionarParaIndex(){
    console.log('Redirecionando para index...');
    window.location.href = 'index.html';
}

function trocarDeSecao() {
    if(document.getElementById('secao1')){
        document.getElementById('secaoCadastro').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    document.getElementById('secao1').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function btnConsulta() {
    const formConsulta = document.getElementById('formConsulta');
    const btnConsultar = document.getElementById('btnConsultar');

    if (formConsulta.style.display === 'block') {
        btnConsultar.style.display = 'block';
    } else {
        formConsulta.style.display = 'block';
        btnConsultar.style.display = 'none';
    }
}

//Funções de factory
function fabricaUsuario(nome, dataNasc, telefone, email) {
    return {
        nome: nome,
        dataNascimento: dataNasc,
        telefone: telefone,
        email: email
    };
}

function fabricaConsulta(tipo) {
    return function(usuarios, nomeBusca = "") {
        if (tipo === "todos") {
            return usuarios;
        } else if (tipo === "nome") {
            return usuarios.filter(user =>
                user.nome.toLowerCase().includes(nomeBusca.toLowerCase())
            );
        }
    };
}

//Funções das regras de negócio
function usuarioCadastro(event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let dataNasc = document.getElementById('data').value;
    let telefone = document.getElementById('numero').value;
    let email = document.getElementById('email').value;

    if (!nome || !dataNasc || !telefone || !email) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const emailExistente = usuarios.find(user => user.email === email);

    if (emailExistente) {
        alert("Este e-mail já está cadastrado. Por favor, use um e-mail diferente.");
        return;
    }

    usuarios.push(fabricaUsuario(nome, dataNasc, telefone, email));

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert("Usuário cadastrado com sucesso!");

    document.getElementById('nome').value = ''; 
    document.getElementById('data').value = ''; 
    document.getElementById('numero').value = ''; 
    document.getElementById('email').value = '';    

    trocarDeSecao();
}

function usuarioConsulta(event) {
    event.preventDefault();

    const botaoClickado = event.submitter;
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));

    const tipoConsulta = botaoClickado.value === "consultarTodos" ? "todos" : "nome";
    const consulta = fabricaConsulta(tipoConsulta);

    let resultado;
    if (tipoConsulta === "nome") {
        const nomeBusca = document.getElementById('nomeConsulta').value.trim();
        resultado = consulta(usuarios, nomeBusca);
    } else {
        resultado = consulta(usuarios);
    }

    localStorage.setItem('resultadoConsulta', JSON.stringify(resultado));
    redirecionarParaIndex();
}


//Funções de formatação
function formatarData(event) {
    let input = event.target;
    let valor = input.value.replace(/\D/g, '');

    if (valor.length <= 2) {
        input.value = valor.replace(/(\d{2})(\d{0,2})/, '$1/$2');
    } else if (valor.length <= 4) {
        input.value = valor.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
    } else {
        input.value = valor.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
    }
}

function formatarTelefone(event) {
    let input = event.target;
    let valor = input.value.replace(/\D/g, ''); 

    if (valor.length <= 2) {
        input.value = `(${valor}`;
    } else if (valor.length <= 6) {
        input.value = `(${valor.substring(0, 2)}) ${valor.substring(2)}`;
    } else if (valor.length <= 10) {
        input.value = `(${valor.substring(0, 2)}) ${valor.substring(2, 7)}-${valor.substring(7)}`;
    } else {
        input.value = `(${valor.substring(0, 2)}) ${valor.substring(2, 7)}-${valor.substring(7, 11)}`;
    }
}
