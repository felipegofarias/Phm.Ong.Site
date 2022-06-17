
$(document).ready( function() {
    $('#table_idd').DataTable({
      ajax: `https://localhost:4438/Usuario/ListarTodos`,
      columns: [
          { data: 'id' },
          { data: 'cpf' },
          { data: 'nome' },
          { data: 'email' },
          { data: 'senha' },
          { data: 'dataAtualizacao' },
          { data: 'ativo' },
          { data: 'dataCadastro' }
      ]
  });
} );


function addNewUser(){
  axios.post(`https://localhost:44384/Usuario/Cadatrar`, {
   cpf : document.getElementById("cpf").value,
   nome  : document.getElementById("nome").value,
   email : document.getElementById("email").value,
   senha : document.getElementById("senha").value
  }) 
        .then(function (response) {
          
          console.log(response);
        })
        .catch(function (error) {
          console.error(error);
        });

}

function addProjeto(){
  event.preventDefault()
  axios.post(`https://localhost:44384/Projeto/Cadatrar`, {
   nome : document.getElementById("nome").value,
   estado  : document.getElementById("estado").value,
   cidade : document.getElementById("cidade").value
   
  }) 
        .then(function (response) {
          
          console.log(response);
        })
        .catch(function (error) {
          console.error(error);
        });

}




