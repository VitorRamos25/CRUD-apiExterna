inicialmente foi criado o modulo do node usando o comando "npm init", instalado também
as bibliotecas "express" e "axios".

- Pasta index na raiz do projeto:

responsável por iniciar o framework express, onde poderá utilizar rotas
para a api, temos 5 rotas, 2 diretamente para os dados da api, 1 responsável
por tratar os dados em json, 1 pra tratar erros diversos e outra para escuta 
do servidor.

para melhor organização, foi criado a pasta "src" onde la estara a api.
criamos também mais 3 pastas para separar a conexão do banco, a criação do Schema 
do banco e as rotas para o CRUD.

temos 2 rotas (console e jogo), ambas tem o CRUD implementado com seus erros devidamente
tratados, porém na rota jogo onde chamamos o "get", temos implementado uma estrutura onde
foi tratado o "axios", ele retorna dados de uma API externa, esses dados
foi tratado e comparados com o banco da nossa API para a população de váriaveis vazia.