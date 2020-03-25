class LivroDao  {
  constructor(db) {
    this._db = db;
  }

  adiciona(livro) {
    return new Promise((resolve, reject) => {
      this._db.run(`
      INSERT INTO LIVROS (
        titulo,
        preco,
        descricao
        ) values (?, ?, ?)
      `,
        [
          livro.titulo,
          livro.preco,
          livro.descricao
        ],
        function (err) {
          if (err) {
            console.log(err);
            return reject('Nao foi possivel adicionar o livro!');
          }
          resolve();
        }
      )
    });
}

  lista() {
    return new Promise((resolve, reject) => {
      this._db.all(
        'SELECT * FROM livros',
        (erro, resultados) =>  {
          if(erro) return reject('Nao foi possivel listar os livros!');

          return resolve(resultados);
        }
      )
    })
  }
  
  buscaPorId(id) {
    
    return new Promise((resolve, reject) => {
      this._db.get(
        ` SELECT * FROM LIVROS WHERE id = ?
        `, [id],
        (erro, livro) => {
          if(erro)  {
            return reject('Nao foi possivel encontrar um livro com este id')
          }
          return resolve(livro);
        }
        )
      });
    }

  atualiza(livro) {
    return new Promise((resolve, reject) => {
      this._db.run(
        ` UPDATE livros SET
          titulo = ?,
          preco = ?,
          descricao = ?
          WHERE id = ?
        `,
        [
          livro.titulo,
          livro.preco,
          livro.descricao,
          livro.id
        ],
        erro => {
          if (erro) {
            return reject('Nao foi possivel atualizar o livro');
          }

          resolve();
        }
      );
    });
  }

  remove(id){
    return new Promise((resolve, reject) => {
      this._db.run(
        `
        DELETE FROM LIVROS WHERE id = ?
        `, [id],
        erro => {
          if (erro){
            return reject('Nao foi possivel excluir o livro');
          }
          
          resolve();
        }
      );
    });
  }

  }
    module.exports = LivroDao;