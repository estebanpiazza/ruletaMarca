let botonmusica = document.getElementById("musica")
console.log(botonmusica)
botonmusica.addEventListener("play", function(){
    console.log("HOLA")
    botonmusica.style.display="none"
})

