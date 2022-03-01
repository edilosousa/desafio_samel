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
## **Usando alguma ferramenta para enviar requisições HTTP tais como, POSTMAN ou INSOMNIA, passamos as seguintes rotas com requisições em formato JSON**:

# <br>
## **_SALA_**:
#### **HTTP POST:** <br>
http://localhost:3000/api/salas <br>
No corpo da requisição enviando as informações via JSON nesse formato, terás um cadastro de uma sala para o atendimento ao paciente. <br>
{
	"sala" : "10"
}
<br>
#### **HTTP GET:** <br>
http://localhost:3000/api/salas <br>
Essa rota listará todas as salas ja cadastradas.
<br>
#### **HTTP GET:** <br>
http://localhost:3000/api/salas/1 <br>
Essa rota listará apenas a sala com ID especificado por parâmetro
<br>
#### **HTTP PUT:** <br>
http://localhost:3000/api/salas/1 <br>
No corpo da requisição enviando as informações via JSON nesse formato, realizará a alteração apenas em uma sala <br>
{
	"SAL_NOME" : "111"
}
<br>
#### **HTTP DELETE:** <br>
http://localhost:3000/api/salas/1 <br>
No parametro da requisição uma sala sera deletada. <br>

# <br>
## **_PLANO_**:
#### **HTTP POST:** <br>
http://localhost:3000/api/planos <br>
No corpo da requisição enviando as informações via JSON nesse formato, terás um cadastro de um plano para associar aos pacientes. <br>
{
	"nome": "SAMEL"
}
<br>
#### **HTTP GET:** <br>
http://localhost:3000/api/planos <br>
Essa rota listará todas os Planos já cadastrados.
<br>
#### **HTTP GET:** <br>
http://localhost:3000/api/planos/1 <br>
Essa rota listará apenas o plano com ID especificado por parâmetro.
<br>
#### **HTTP PUT:** <br>
http://localhost:3000/api/planos/1 <br>
No corpo da requisição enviando as informações via JSON nesse formato, realizará a alteração apenas em um plano <br>
{
	"PLA_NOME": "SAMELs"
}
<br>
#### **HTTP DELETE:** <br>
http://localhost:3000/api/planos/1 <br>
No parametro da requisição um plano será deletada. <br>

# <br>
## **_PACIENTE_**:
#### **HTTP POST:** <br>
http://localhost:3000/api/pacientes <br>
No corpo da requisição enviando as informações via JSON nesse formato, terás um cadastro de um paciente. <br>
-- no campo plano passamos o ID do plano que o paciente tem. <br>
{
	"nome":"HENRIQUE DA SILVA SANTOS",
	"plano":3,
	"telefone":"92998452174"
}
<br>
#### **HTTP GET:** <br>
http://localhost:3000/api/pacientes <br>
Essa rota listará todas os Pacientes já cadastrados.
<br>
#### **HTTP GET:** <br>
http://localhost:3000/api/pacientes/1 <br>
Essa rota listará apenas o paciente com ID especificado por parâmetro.
<br>
#### **HTTP PUT:** <br>
http://localhost:3000/api/pacientes/1 <br>
No corpo da requisição enviando as informações via JSON nesse formato, realizará a alteração apenas em um paciente <br>
{
	"PAC_NOME": "JOAO",
    "PAC_FK_ID_PLA": 2,
    "PAC_TELEFONE": "99282837382"
}
<br>
#### **HTTP DELETE:** <br>
http://localhost:3000/api/pacientes/1 <br>
No parametro da requisição um paciente será deletado. <br>

# <br>
## **_ESPECIALIDADE_**:
#### **HTTP POST:** <br>
http://localhost:3000/api/especialidades <br>
No corpo da requisição enviando as informações via JSON nesse formato, terás um cadastro de uma especialidade. <br>
{
	"nome":"GINECOLOGIA"
}
<br>
#### **HTTP GET:** <br>
http://localhost:3000/api/especialidades <br>
Essa rota listará todas os Especialidades já cadastradas.
<br>
#### **HTTP GET:** <br>
http://localhost:3000/api/especialidades/1 <br>
Essa rota listará apenas o especialidade com ID especificado por parâmetro.
<br>
#### **HTTP PUT:** <br>
http://localhost:3000/api/especialidades/1 <br>
No corpo da requisição enviando as informações via JSON nesse formato, realizará a alteração apenas em uma especialidade <br>
{
	"ESP_AREA": "UROLOGIA",
}
<br>
#### **HTTP DELETE:** <br>
http://localhost:3000/api/especialidades/1 <br>
No parametro da requisição uma especialidade será deletada. <br>

# <br>
## **_MEDICO_**:
#### **HTTP POST:** <br>
http://localhost:3000/api/medicos <br>
No corpo da requisição enviando as informações via JSON nesse formato, terás um cadastro de um médico. <br>
-- Passamos o IDda especialidade ja cadastrada.<br>
{
	"nome":"MARIA RITA SILVA",
	"especialidade": 3,
	"uf":"PA",
	"crm": "9624"
}
<br>
#### **HTTP GET:** <br>
http://localhost:3000/api/medicos <br>
Essa rota listará todas os medicos já cadastrados.
<br>
#### **HTTP POST:** <br>
http://localhost:3000/api/medicos/crm/2241 <br>
Essa rota listará apenas o medico com CRM especificado por parâmetro.
<br>
#### **HTTP PUT:** <br>
http://localhost:3000/api/medicos/1 <br>
No corpo da requisição enviando as informações via JSON nesse formato, realizará a alteração apenas em uma medico. <br>
{
    "MED_NOME":"MARIA RITA SILVA SANTOS",
    "MED_FK_ID_ESP": 1,
    "uf":"MA",
	"crm": "2241"
}
<br>
#### **HTTP DELETE:** <br>
http://localhost:3000/api/medicos/1 <br>
No parametro da requisição uma medicos será deletado. <br>


# <br>
## **_AGENDA_**:
#### **HTTP POST:** <br>
http://localhost:3000/api/agendas <br>
No corpo da requisição enviando as informações via JSON nesse formato, terás um cadastro de uma agenda de consulta. <br>
-- Onde o campo médico precisamos passar o ID do médico e o campo sala precisamos passar o ID da sala onde será feito a consulta.
{
    "data":"2022-03-20 18:00:00",
    "medico":"3",
    "sala":"3"
}
<br>
#### **HTTP GET:** <br>
http://localhost:3000/api/agendas <br>
Essa rota listará todas os agendas já cadastradas.
<br>
#### **HTTP GET:** <br>
http://localhost:3000/api/agendas/1 <br>
Essa rota listará apenas o agenda com ID especificado por parâmetro.
<br>
#### **HTTP PUT:** <br>
http://localhost:3000/api/agendas/1 <br>
No corpo da requisição enviando as informações via JSON nesse formato, realizará a alteração apenas em uma agenda. <br>
{
    "AGE_DATA_DISPONIVEL":"2022-03-21 18:00:00",
    "AGE_FK_ID_SALA":"4",
}
<br>
#### **HTTP DELETE:** <br>
http://localhost:3000/api/agendas/1 <br>
No parametro da requisição uma agenda será deletada. <br>

# <br>
## **_CONSULTA_**:
#### **HTTP POST:** <br>
http://localhost:3000/api/consultas <br>
No corpo da requisição enviando as informações via JSON nesse formato, terás um cadastro de uma consulta. <br>
-- vai ser passado o ID da agenda onde constará todas as informações sobre o médico, especialidade, sala, e data da consulta.<br>
{
    "agenda":5,
	"paciente":1
}
<br>
#### **HTTP GET:** <br>
http://localhost:3000/api/consultas <br>
Essa rota listará todas os agendas já cadastradas.
<br>


