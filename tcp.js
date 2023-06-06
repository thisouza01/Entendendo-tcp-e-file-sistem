// Instanciar o pacote para trabalhar com o TCP, o "net.js"
const net = require("net");

// Criando um array para guardar todos os clientes "sockets" conectados
let listaClientes = [];
let ids = 0

// Criando um servidor a partir de um objeto "net" 
const servidor = net.createServer(function(cliente){
 // Adicionando todos os clientes que se conectarem ao servidor ao array listaClientes
 cliente.id = ids++
 listaClientes.push(cliente);
 
 // Enviando uma mensgem aos clientes que acabam de se conectar
 cliente.write("Bem vindo ao Chat!\n");
 
 // Evento acionado sempre que um cliente conecta-se ao servidor
 cliente.on("connect", function(){
  //imprimindo no servidor o id do cliente conectado
  console.log(cliente.id+" conectado!");
 });
 
 // Evento acionado sempre que alguém envia dados ao servidor
 cliente.on("data", function(dados){
  // Cirando um mecanismo de logout
  if(String(dados).match(/sair/)){
   //Desconectando o cliente
   cliente.end();
  }
  // Implementação de um broadcast
  for(var i=0; i < listaClientes.length; i++){
   // Impedindo que um dado seja enviado para quem o enviou
   if(listaClientes[i] == cliente){
    continue;
   }
   // Enviando o dado para o referido cliente na posição i do array
   listaClientes[i].write(dados);
  }
 });
 
 // Evento acionado sempre que um cliente desconecta-se do servidor
 cliente.on("end", function(){
  //achando a posição do cliente que desconectou no array
  var i = listaClientes.indexOf(cliente);
  //retirando o cliente da lista
  listaClientes.splice(i, 1);
  //imprimindo uma mensagem que o cliente com este id desconectou-se
  console.log(cliente.id+" desconectado!");
 });
});

//configurando a porta a qual este servidor deve ficar escutando
servidor.listen(8000);

//imprimindo um aviso que o servidor está rodando
console.log("Servidor TCP conectado em 127.0.0.1 porta 8000, aguardando conexões!!!");


//para se tornar um cliente use: telnet localhost 8000