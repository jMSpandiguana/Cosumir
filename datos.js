document.querySelector('#dolar').addEventListener('click', function(){
    obtenerDatos();
});

function obtenerDatos(){

    let url ="https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin";
    const api = new XMLHttpRequest();
    api.open('GET',url, true);
    api.send();

    api.onreadystatechange=function(){

        if(this.status==200 && this.readyState==4){

            let datos= JSON.parse(this.responseText);
        console.log(datos);

        let resultado = document.querySelector("#resultado");
        //resultado='';
        resultado.innerHTML="";

        for(let item of Object.values(datos)){
           console.log(item);

           for(var j=0; j <item.length; j++){
            

            resultado.innerHTML += `<li>${item[j].strDrink}</li>` + `<img  Br  class="imagen"     src="${item[j].strDrinkThumb}">`;

          //  resultado.innerHTML +=`<img    class="imagen"     src="${item[j].strDrinkThumb}" align ="rigth"> `;
            //resultado.innerHTML += `<li>${item[j].strDrinkThumb}</li>`
            
           }
        //    resultado.innerHTML +=`<li>${item.fecha}</li>`;
        }

        }

       // console.log(this.responseText);
    }
  










    function buscarN(){

        for(let item of Object.values(datos)){
            console.log(item);
 
            for(let j=0; j <item.length; j++){
 console.log(item);
            // resultado.innerHTML += `<li>${item[j].strDrink}</li>`;
 
            // resultado.innerHTML +=`<img  class="imagen" align="center" src="${item[j].strDrinkThumb}">`;
             //resultado.innerHTML += `<li>${item[j].strDrinkThumb}</li>`
             
            }
         //    resultado.innerHTML +=`<li>${item.fecha}</li>`;
         }
 
         }

    

}