# Avaliação Sprint 1 - Programa de Bolsas Compass UOL AWS - Turma Janeiro/2025

Este projeto faz parte da avaliação da primeira sprint do programa de bolsas Compass UOL para formação em Inteligência Artificial para AWS. O objetivo é desenvolver um sistema simples de cadastro utilizando JavaScript, com armazenamento de dados no navegador através do **localStorage**.

## 📋 Especificações

O sistema desenvolvido permite o armazenamento e manipulação de dados cadastrais utilizando **HTML** e **JavaScript** com o padrão **Factory**. Os dados são armazenados localmente com o uso do **localStorage** e as seguintes funcionalidades são implementadas:

- Criação de um novo cadastro.
- Consulta de cadastros existentes.
- Deleção de cadastros.

### Dados cadastrais obrigatórios:
- Nome
- Data de nascimento
- Telefone
- E-mail

### Funcionalidades implementadas:
- **Cadastro**: O usuário pode cadastrar seus dados pessoais, sendo verificado se todos os campos obrigatórios estão preenchidos e se o e-mail informado já não está em uso.
- **Consulta**: O sistema permite que os usuários consultem todos os cadastros ou procurem por um cadastro específico através do nome.
- **Remoção**: O sistema permite que os usuários removam cadastros existentes.

## 🚀 Como iniciar o projeto?

### 1. Clone o repositório:

```bash
git clone https://github.com/Compass-pb-aws-2025-06-JANEIRO/sprint-1-pb-aws-janeiro
```

### 2. Acesse o diretório do projeto:

```bash
cd sprint-1-pb-aws-janeiro
```

### 3. Abra os arquivos HTML em seu navegador:

- **index.html**: Exibe a lista de usuários cadastrados e permite remover cadastros.
- **cadastro.html**: Tela para cadastro de novos usuários, onde os dados são inseridos.
- **index.js**: Arquivo de script que contém toda a lógica de manipulação dos dados cadastrados, como criação, consulta e remoção.
- Basta abrir o arquivo cadastro.html em um navegador para interagir com o sistema.

## ⚙️ Como funciona o sistema?

### Cadastro:
- O usuário insere seus dados no formulário de cadastro.
- O sistema valida se todos os campos estão preenchidos corretamente. Caso algum campo esteja vazio, é exibido um alerta informando sobre os dados faltantes.
- O sistema também verifica se o e-mail informado já está cadastrado. Caso positivo, um alerta é exibido, impedindo o cadastro do novo usuário.
- Após o cadastro, os dados são salvos no localStorage e o usuário é redirecionado para a página de consulta.

### Consulta:
- O usuário pode consultar todos os cadastros ou buscar por um nome específico.
- Quando a consulta for realizada, a tabela na página index.html será preenchida com os dados dos usuários cadastrados, retirando os que foram removidos ou atualizados.

### Remoção:
- O sistema permite que o usuário remova um cadastro ao clicar no botão "Remover" ao lado de cada entrada na tabela.
- Após a remoção, a tabela é atualizada e o localStorage é atualizado para refletir a exclusão do usuário.

## 📁 Estrutura do projeto:

```bash
/src
    /Scripts
        index.js             # Lógica de cadastro, consulta e remoção
    /Styles
        estiloCadastro.css   # Estilos para a página de cadastro
        estiloIndex.css      # Estilos para a página de consulta (index)
    /Templates
        index.html           # Página para visualização de cadastros
        cadastro.html        # Página para cadastro de novos usuários
```

## 🛠️ Tecnologias Utilizadas

- **HTML**: Estruturação da página de cadastro e consulta.
- **CSS**: Estilos básicos para as páginas.
- **JavaScript**: Lógica de manipulação dos dados com o uso do localStorage.

## 🚧 Dificuldades Enfrentadas

- **Validação de dados**: Garantir que os campos de entrada fossem preenchidos corretamente e que os dados fossem salvos de forma confiável.
- **Sincronização do localStorage**: Após a remoção de usuários, garantir que a tabela e os dados salvos no localStorage fossem atualizados corretamente sem causar inconsistências.

## 📝 Autor

 **Nome do Autor**: Carlos Eduardo dos Santos Vital