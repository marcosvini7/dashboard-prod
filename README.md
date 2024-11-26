## Instalação
1.  Instale o banco de dados MySQL (de preferência usando o XAMPP, pois permite instalar também o phpMyAdmin para administrar o banco)
2.  Usando o phpMyAdmin crie um banco de dados com o nome "dashboard" e execute os comandos do arquivo "database.sql" para a criação das tabelas
3.  Configure o arquivo ".env" de acordo com as suas configurações do banco de dados (caso não esteja usando as configurações padrão)
4.  No prompt de comando, acesse a pasta do projeto e execute o comando `npm install` para instalar as bibliotecas (é preciso ter o Node instalado)
5.  Instale o pm2 usando `npm install -g pm2`, pois é um gerenciador de processos mais confiável para executar a aplicação em produção
6.  Execute a aplicação com `pm2 start app.js`
  Alguns outros comandos uteis com pm2:
  - `pm2 logs` para visualizar e acompanhar os logs da aplicação
  - `pm2 stop app.js` para parar um processo
  - `pm2 list` para listar os processos
  - `pm2 flush` limpar os logs
  - `pm2 restart app.js` reinicia o processo