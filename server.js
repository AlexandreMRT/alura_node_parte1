app = require('./src/config/custom-express');

app.listen(3000, function() {
  console.log("Servidor rodando na porta 3000")
});



// const http = require('http');

// const servidor = http.createServer(function (req, resp){
//     let text = '';
//     if (req.url == '/') {
//       text = '{ "employees" : [' +
//         '{ "firstName":"John" , "lastName":"Doe" },' +
//         '{ "firstName":"Anna" , "lastName":"Smith" },' +
//         '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
//     } else if (req.url == '/livros') {
//       text = '{ "employees" : [' +
//         '{ "firstName":"Alexandre" , "lastName":"Teixeira" },' +
//         '{ "firstName":"Ana Maria" , "lastName":"Ramalho" },' +
//         '{ "firstName":"Pedro" , "lastName":"Teixeira" } ]}';
//     }
    
//     resp.end(text);
// });

// servidor.listen(3000);
