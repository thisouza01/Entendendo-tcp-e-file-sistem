const fs = require('fs');

//                PARA CRIAÇÂO

// informamos o local que será criado o arquivo
// toda a informação que esse arquivo conterá, e por ultimo temos nossa função callback

fs.writeFile("./files/example.txt", 'Um textinho aqui!', function(err) {
    // Caso ocorra algum erro
    if(err) {
        return console.log('Erro')
    }
    // Caso não tenha erro, retornamos uma mensagem de sucesso
    console.log('Arquivo Criado!');
});

//                PARA LEITURA

fs.readFile('./files/FILE_NAME', 'utf-8', function(err) {
    //Enviandpo para o terminal o resultado da leitura
    console.log(data);
});

//                 PARA RENOMEAR

// Envio o caminho que quero renomear e o caminho/nome para sua nova situação

fs.rename('./files/example.txt', './files/007.txt', function(err) {
    //Caso a execução encontre algum erro
    if(err) {
        // A execução irá parar e mostrar o erro
        throw err;
    } else {
        // Caso não tenha erro, apenas a mensagem será exibida no terminal
        console.log('Arquivo renomeado!')
    }
    
});

//                PARA EXLUIR

// unlinkSync = dizemos um diretório para a exclusão de todos os arquivos
// unlink = excluimos arquivo por arquivo

fs.unlink('./files/007.txt');



