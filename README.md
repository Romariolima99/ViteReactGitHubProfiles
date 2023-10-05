# React + TypeScript + Vite

Este modelo fornece uma configuração mínima para fazer o React funcionar no Vite com HMR e algumas regras ESLint.

Atualmente, dois plugins oficiais estão disponíveis:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expandindo a configuração do ESLint

Se você estiver desenvolvendo um aplicativo de produção, recomendamos atualizar a configuração para ativar regras de lint com reconhecimento de tipo:

- Configure a propriedade `parserOptions` de nível superior assim:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


# GitHub Profile Viewer

O GitHub Profile Viewer é uma aplicação web desenvolvida em React e Vite que permite aos usuários consultar perfis do GitHub. Esta aplicação utiliza a API do GitHub para buscar informações públicas de usuários e exibir suas informações de perfil.

# Funcionalidades 

Consultar perfis do GitHub por nome de usuário.
Exibir informações públicas do perfil, incluindo nome, avatar, número de seguidores, número de repositórios, etc.
Links diretos para os repositórios e perfil do GitHub do usuário.

# Pré-requisitos

- Node.js e npm instalados na máquina.

# Instalação

- Clone este repositório:

```js
    git clone https://github.com/seu-usuario/github-profile-viewer.git
 ```

# Uso

- Inicie a aplicação localmente executando o comando na pasta do projeto.

- npm run dev

- Digite o nome de usuário do GitHub que você deseja consultar na barra de pesquisa e pressione Enter.

 - Você verá as informações do perfil do usuário, incluindo nome, bio, e linkedin.

 <img src="https://i.imgur.com/5aIiHSF.png" alt="GIF" data-canonical-src="https://i.imgur.com/5aIiHSF.png" style="max-width: 50%;">