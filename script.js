/* let current_rotation = 0;
let random = Math.random()+1*2000
document.querySelector(".rotate").addEventListener('click', function(){
  current_rotation += random;
document.querySelector(".rotate").style.transform = 'rotate(' + current_rotation + 'deg)';
console.log(current_rotation)

});
 */


let seccionRuleta = document.getElementById("seccionRuleta")
seccionRuleta.style.display ="none"
let seccionRegistro =  document.getElementById("seccionRegistro")


let current_rotation = 0;

document.getElementById("girar").addEventListener('click', function() {
  // Asegurarse de que el giro sea siempre un múltiplo de 360 más un ángulo de 45 grados
  let randomSpin = Math.floor(Math.random() * 12) * 30 + 360 * Math.floor(Math.random() * 5 + 4);
  current_rotation += randomSpin;

  document.querySelector(".rotate").style.transition = 'transform 4s ease-out';
  document.querySelector(".rotate").style.transform = 'rotate(' + current_rotation + 'deg)';

  // Asegurar que la transición se haya terminado antes de calcular el resultado
  setTimeout(function() {
    // Calcular el segmento en el que la ruleta se detuvo
    let final_angle = current_rotation % 360;
    let segment_index = Math.floor(final_angle / 30);
    console.log(segment_index)

    // Definir las URL para cada resultado
    const urls = {
     0:'pagina-segui-participando.html', //ok
     1:'pagina-proba-de-vuelta.html', // ok
     2:'pagina-ganaste.html', // 
     3:'pagina-segui-participando.html',
     4:'pagina-ganaste.html',
     5:'pagina-proba-de-vuelta.html',
     6:'pagina-segui-participando.html',
     7:'pagina-proba-de-vuelta.html',
     8:'pagina-ganaste.html',
     9:'pagina-segui-participando.html', //ok
     10:'pagina-ganaste.html',
     11:'pagina-proba-de-vuelta.html', //ok
 
    };

    


    // Redirigir a la URL correspondiente al segmento
    //window.location.href = urls[segment_index];
    if(segment_index == 0 || segment_index == 3 || segment_index == 6 ||segment_index == 9 ){
        Swal.fire({
            icon: "error",
            title: "Segui participando",
            background:"black",
            confirmButtonAriaLabel:"#32cf78",
          });}
          
    if(segment_index == 1 || segment_index == 5 || segment_index == 7 ||segment_index == 11 ){
            Swal.fire({
                icon: "question",
                title: "Probá de vuelta",
            background:"black",
            confirmButtonAriaLabel:"#32cf78",
              });}
              
    if(segment_index == 2 || segment_index == 4 || segment_index == 8 ||segment_index == 10 ){
                Swal.fire({
                    icon: "success",
                    title: "Ganaste",
            background:"black",
            confirmButtonAriaLabel:"#32cf78",
                  });}
                  
  }, 4000); // Esperar 4 segundos, que es la duración de la animación
 

}
);


let volver = document.getElementById("volver")
volver.addEventListener("click",function(){
  seccionRegistro.style.display ="block"
  seccionRuleta.style.display ="none"
  document.getElementById('inputName').value = "";
  document.getElementById('inputDNI').value= "";
  document.getElementById('inputTel').value= "";
  document.getElementById("inputEmail").value= "";

})



document.getElementById('submitBtn').addEventListener('click', function () {
  if (document.getElementById('inputName').value == "" || document.getElementById('inputDNI').value == "" || document.getElementById('inputTel').value == "") {
      Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Los datos son obligatorios",

      });

  } else {
      // Obtener los valores del formulario
      let nombre = document.getElementById('inputName').value;
      let dni = document.getElementById('inputDNI').value;
      let celular = document.getElementById('inputTel').value;
      let mail = document.getElementById("inputEmail").value;

      // Crear un objeto con los datos
      let formData = { nombre: nombre, dni: dni, celular: celular, mail: mail };

      // Obtener el array actual de datos del LocalStorage o inicializar uno nuevo si no existe
      let formArray = JSON.parse(localStorage.getItem('formDataArray')) || [];

      // Añadir los nuevos datos al array
      formArray.push(formData);
      

      // Guardar el array actualizado en LocalStorage
      localStorage.setItem('formDataArray', JSON.stringify(formArray));


      seccionRegistro.style.display ="none"
      seccionRuleta.style.display ="block"
  
  }
});