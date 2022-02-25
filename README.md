# desafio_samel
## Desafio de backend para a empresa SAMEL

# Configuração DOCKER MYSQL
## NETWORK - primeiro criaremos uma ponte para que possamos acessar externamente nosso container do mysql
### - comandos: docker network create -d bridge mysql-network

## DOCKER COMPOSE - Após criar a ponte de acesso externo, criaremos nosso container através do arquivo docker-compose.yml
### - comandos: docker compose up -d

## Acesso ao BD através de um gerenciador de banco de dados exemplo o HEIDI SQL ou MYSQL WORKBENCH
### Credenciais 
#### HOST: localhost
#### USER: root
#### PASS: 123
#### - Após realizada a conexão criar um Database com o nome de samel.

# NODE JS
## Com o node js instalado na máquina em uma ultima versão estável, abra o projeto e digite o seguinte comando:
### npm start
#### Esse comando será executado o sistema e criará todas as tabelas automaticamente ja definidas na MODELS do projeto

