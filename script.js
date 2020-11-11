// En el siguiente ejercicio debéis sacar por consola (console.log) una lista con el nombre de los usuarios.
// Dicha la lista la obtendréis del documento "users.json" haciendo uso de la función "fetch". Una vez tengáis el array de usuarios, debéis generar otro array con la función "filter" para que solo estén los usuarios que tengán más de 500 en la propiedad "money".
// Teniendo la lista ya filtrada, la recorreréis con el método "forEach" para mostrar por consola el nombre de cada usuario.

let buttonShowList = document.getElementById("showList");
buttonShowList.addEventListener("click", getUsers);

function getUsers() {


//Sacar por consola lista con el nombre de los usuarios
 fetch('users.json')  
 .then(response => response.json())
  .then(data => {
    console.log("Lista nombres:");
    for(let i=0; i<data.length; i++) {
      console.log(data[i].name);

    }});


//Sacar por consola usuarios que tengan mas de 500
fetch('users.json')  
 .then(response => response.json())
  .then(data => {
    let result= data.filter(elemento => elemento.money>500)
    
    console.log("Lista nombres filtrada:");
     for(let i=0; i<result.length; i++) {
      console.log(result[i].name);

    }
   
   
   });

  
  
  
  
}

  
