# SAMEL - Desafio de backend

## **DOCKER MYSQL**
## _Com o Docker já configurado, realize esses passos:_
### **_NETWORK_** - primeiro criaremos uma ponte para que possamos acessar externamente nosso container do mysql
#### **- Abra o prompt de comando e digite: docker network create -d bridge mysql-network**
## <br>
## **DOCKER COMPOSE**
### **_YML_** - Após criar a ponte de acesso externo, criaremos nosso container através do arquivo docker-compose.yml que ja está criado dentro do projeto, dentro desse arquivo, contará com a versão do mysql, configurações do banco como o PASSWORD, PORTA e a criação do BANCO DE DADOS mais sem as tabelas.
#### **- Abra o prompt de comando dentro da pasta do projeto e digite: docker compose up -d**
## <br>

## Acesso ao BD através de um gerenciador de banco de dados exemplo o HEIDI SQL ou MYSQL WORKBENCH
### **Credenciais** 
#### **HOST**: localhost
#### **USER**: root
#### **PASS**: 123
# <br>
## **NODE JS**
### Com o node js instalado na máquina em uma ultima versão estável, abra o prompt de comando dentro da pasta do projeto e digite o seguinte comando:
#### **npm install**: Responsável por instalar todas as dependências do projeto como o Sequelize, Mysql, Express, Cors, Body-parser e outros.
#### **npm start**: Responsável por iniciar o sistema para que possibilitamos a acessar suas rotas com devidos endpoints.
#### Esse comando será executado o sistema e criará todas as tabelas automaticamente ja definidas na MODELS do projeto.

# <br>
# Modelagem do Banco de dados:

![Diagram Samel DrawIO recortado](https://user-images.githubusercontent.com/30244120/156241962-9d79fce5-b116-42a1-ba73-bbb195e34928.jpg)

## **O banco de dados consiste em 7 tabelas com relações entre elas para o funcionamento correto de um agendamento de consulta, cadastro de medico,paciente,sala e disponibilização de consulta.**
# <br>
# Tabelas
- [x] tblpaciente
- [x] tblmedico
- [x] tblplano
- [x] tblconsulta
- [x] tblagenda
- [x] tblsala

# <br>

# **ROTAS API REST**
## **Usando alguma ferramenta para enviar requisições HTTP tais como, POSTMAN ou INSOMNIA, passamos as seguintes rotas com respostas em formato JSON**:

# <br>
## **_MEDICO_**:
#### **HTTP POST:** <br>
http://localhost:3000/api/medicos <br>
No corpo da requisição enviando as informações via JSON nesse formato, terás um cadastro de um médico. <br>
{
	"nome":"MARIA RITA SILVA",
	"especialidade":3,
	"uf":"PA",
	"crm": "9624"
}
