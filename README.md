API de Aluguel de Estúdio para Ensaios Musicais
Este projeto consiste em uma API RESTful desenvolvida em Node.js, Express, Sequelize, dotenv e MySQL, que permite o gerenciamento de reservas de estúdios para ensaios musicais. Cada banda pode alugar um estúdio por até 2 horas, com uma taxa de R$30 por hora.

Configuração do Ambiente
Antes de executar a API, certifique-se de ter o Node.js instalado em sua máquina. Em seguida, siga os passos abaixo para configurar o ambiente de desenvolvimento:

Clone o repositório para o seu computador:

bash
Copiar código
git clone https://github.com/seu-usuario/nome-do-repositorio.git
Navegue até a pasta do projeto:

bash
Copiar código
cd nome-do-repositorio
Instale as dependências do projeto:

bash
Copiar código
npm install
Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:

makefile
Copiar código
DB_HOST=seu-host
DB_USER=seu-usuario
DB_PASSWORD=sua-senha
Substitua seu-host, seu-usuario e sua-senha pelas informações do seu banco de dados MySQL.

Execute as migrações para criar as tabelas no banco de dados:

bash
Copiar código
npx sequelize-cli db:migrate
Executando a API
Após configurar o ambiente, você pode executar a API com o seguinte comando:

bash
Copiar código
npm start
A API estará disponível em http://localhost:3000.

Rotas Disponíveis
A API oferece as seguintes rotas para gerenciamento de reservas:

POST /bandas: Cria uma nova banda.

GET /bandas/:id: Retorna os detalhes de uma banda específica.

PUT /bandas/:id: Atualiza os detalhes de uma banda existente.

DELETE /bandas/:id: Exclui uma banda existente.

POST /reservas: Cria uma nova reserva de estúdio.

GET /reservas/:id: Retorna os detalhes de uma reserva específica.

PUT /reservas/:id: Atualiza os detalhes de uma reserva existente.

DELETE /reservas/:id: Exclui uma reserva existente.