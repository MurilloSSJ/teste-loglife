# Introdução
Neste projeto, foi desenvolvido uma aplicação, no qual era realizado um controle de clientes, permitindo a alteração, remoção, visualização, e a adição de novos clientes.
Além da construção de um CRUD, também foi realizado a construção de uma página de administrador, onde permitiria cadastrar / visualizar os clientes.

## Como fazer login
Basta inserir os seguintes dados na página de login:
* *email : admin@admin.com*
* *senha : admin1234*
## Funcionalidade
O projeto foi dividido e segmentado em duas partes, a parte do client, e a API, que são respectivamente o back e o front end.
Todas as rotas são privadas, com um controle de login, que ao inserir os dados corretos, redireciona-o para a página de administrador, e cede o acesso a parte administrativa do site.

Foi construído um front e um back end:
O front com react, responsável pela renderização do conteúdo, controle de rotas, e autenticação.
O back, com node e express, responsável por criar as rotas de requisição e resposta, além dos models e conexão com o database.
É importante ressaltar que o back end está rodando em servidor local, na porta 5000, e o front, na porta 3000.
### Front-end
O front-end do projeto, foi realizado com react, com o auxilio do react-routes para construir as rotas no front-end.
Além disso, o sistema de autenticação também foi gerado no front-end, criando um login e senha padrão, pre-definido, que sera dado mais abaixo.
Packages Utilizados:
 * react
 * react-router
 
### Back-end
O back-end foi gerado com o NodeJS e express, sua principal função é retornar os dados dos usuários do banco de dados, e armazená-los quando requisitado.
Além disso, também foi utilizado o body-parser, para conseguir capturar dados do formulário, o cors para permitir a conexão com o back-end, o mongoose para se conectar com o banco de dados, e o nodemon para não ser necessária a reinicialização do servidor sempre que alterar algo no código.
Packages utilizados:
 * express
 * mongoose
 * nodemon
 * body-parser
 * cors
Banco de dados utilizado:
* Mongo

Além disso, é importante ressaltar que o banco de dados utilizado foi o mongoDB, e a conexão é feita via internet, utilizando a cloud.
 
 ## Utilização
 
### Requisitos
 Para conseguir executar o código, têm-se os seguintes requisitos:
 * Conexão a internet para conectar ao database
 * Node instalado na máquina
 * Instalação dos packages e dependencias necessárias (Instalação automática ao startar o projeto)
### Passo a passo para rodar o projeto
1. Fazer o download via github do código
2. Abrir um terminal
3. Localizar a página API e acessá-la via terminal (comando cd no windows)
4. Realizar o comando nodemon app.js no terminal (dentro da pasta API)
5. Abrir um novo terminal
6. Localizar a pasta Client e acessá-la via terminal
7. Realizar o comando npm start
8. Uma janela do navegador deverá ser aberta, indicada pela url: localhost:3000/
### Fazendo Login
Todas as demais rotas, exceto a de login, são privativas, portanto, somente inserindo os dados corretos consegue-se acessar. O endpoint de acesso do login é o '/' .
É importante ressaltar que não é possível acessar essa rota enquanto logado, se tentar, será redirecionado pro endpoint '/admin', porém, sera possivel fazer logOut, clicando no botão logOut nesta página.
Os dados para fazer login são:
 * *email : admin@admin.com*
 * *password : admin1234*
 
## Rotas front-end

### Cadastrando Cliente (Rota Privada)
Para cadastrar um novo cliente, é necessário estar logado no sistema, e para acessar o formulário, pode-se tentar por:
* endpoint : '/newclient'
* Via navMenu
* Via botão na página do painel de administrador.
É exibido um formulário, e sua validação foi construida via HTML5.

### Ver clientes(Rota Privada)
Secção dividida em duas partes, os clientes físicos e jurídicos, definidos na hora do cadastro.
Acesso:
* endpoint : '/clients'
* Via navMenu
* Via botão na página do administrador

### Ver clientes Físicos ou Jurídicos(Rota Privada)
Seção que exibe todos os clientes físicos cadastrados, e permite alterar, ver, ou excluir clientes.
Além disso, para paginação, elaborei um botão, que exibe 10 clientes por click, e quando não possui mais para exibir ele fica disabled
Acesso:
* Cliente Físico:
  * endpoint : '/clients/clientPerson'
  * Via botão na página de clientes
* Cliente Jurídico
  * endpoint : '/clients/enterpriseClient'
  * Via botão na página de clientes

### Login (Rota pública)
Rota de fazer login
Acesso:
* endpoint : '/'
* Via logOut na página do administrador

### Página do administrador (Privada)
Página que dá acesso as funcionalidades do CRUD de clientes.
Acesso:
* endpoint : '/admin'
* Ao fazer login, é redirecionado.

## Rotas Back end
Rota   | Retorno
--------- | ------
http://localhost:5000/clients/search | Todos os clientes
http://localhost:5000/clients/search/:typeClient | Um tipo de cliente, físico ou juridico definido pelo parâmetro
http://localhost:5000/clients/search/:typeClient/:id | Um único cliente, determinado pelo ID
http://localhost:5000/clients/add | Adiciona um novo cliente no banco de dados
http://localhost:5000/clients/delete/:typeClient/:id | Deleta um cliente do banco de dados
http://localhost:5000/clients/alter/:typeClient/:id | Altera os dados de um cliente no banco de dados




