# desafio_samel
Desafio de backend para a empresa SAMEL

# Configuração DOCKER
## NETWORK - primeiro criaremos uma ponte para que possamos acessar externamente nosso container do mysql
### - comandos: docker network create -d bridge mysql-network

## DOCKER COMPOSE - Após criar a ponte de acesso externo, criaremos nosso container através do arquivo docker-compose.yml
### - comandos: docker compose up -d
