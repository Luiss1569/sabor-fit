# VibeFit - Site e CMS com Next.js e Strapi

![Logo VibeFit](https://github.com/Luiss1569/vibe-fit/assets/39037985/3d3c1c48-47fe-45a1-897b-a9dfc707c009)

Bem-vindo(a) ao repositório do projeto VibeFit, um site de uma empresa fictícia de alimentos fitness, desenvolvido usando o framework Next.js para o frontend e Strapi como CMS (Content Management System) para o backend. Este repositório contém os códigos-fonte do site e as configurações do Strapi para gerenciar o conteúdo.

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- Node.js (v14.x ou superior)
- npm (v7.x ou superior)
- Strapi CLI (v3.x ou superior, instalado globalmente)

## Configuração do Strapi

1. Navegue para a pasta `backend`:
   ```
   cd backend
   ```

2. Instale as dependências do Strapi:
   ```
   npm install
   ```

3. Inicie o servidor do Strapi em modo de desenvolvimento:
   ```
   npm run develop
   ```

O Strapi será executado em `http://localhost:1337` e você poderá acessar o painel de administração em `http://localhost:1337/admin` para gerenciar o conteúdo do site.

## Configuração do Next.js

1. Navegue para a pasta raiz do projeto:
   ```
   cd ..
   ```
2. Navegue para a pasta `backend`:
```
   cd frontend
```

3. Instale as dependências do Next.js:
   ```
   npm install
   ```

4. Inicie o servidor de desenvolvimento do Next.js:
   ```
   npm run dev
   ```

O servidor do Next.js será executado em `http://localhost:3000`, e você poderá acessar o site VibeFit em seu navegador.

## Personalização do Conteúdo

Para personalizar o conteúdo exibido no site, acesse o painel de administração do Strapi em `http://localhost:1337/admin` e faça login usando as credenciais de administrador que você configurou durante a primeira execução do Strapi.

No painel de administração, você poderá adicionar, editar ou excluir os diferentes tipos de conteúdo, como pratos, depoimentos, informações de contato, entre outros, para que o site VibeFit seja totalmente customizado de acordo com as necessidades da empresa fictícia.

Agradecemos por utilizar e contribuir com o projeto VibeFit! Se tiver alguma dúvida ou precisar de ajuda, não hesite em entrar em contato com a nossa equipe. Divirta-se explorando o site e gerenciando o conteúdo através do Strapi!
