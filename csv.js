document.getElementById('terminar').addEventListener('click', function() {
    // Obtener los datos del LocalStorage
    var data = localStorage.getItem('formDataArray');
    var jsonArray = JSON.parse(data);
  
    // Crear contenido CSV
    var csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Nombre,dni,Tel,Mail\n"; // Columnas del CSV
  
    // Añadir los datos del array al contenido CSV
    jsonArray.forEach(function(row) {
        var rowString = (row.nombre || '') + "," + (row.dni || '') + "," + (row.celular || '') + "," + (row.mail || '');
        csvContent += rowString + "\n";
    });
  
    // Crear un enlace para descargar el CSV
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "datos.csv");
    document.body.appendChild(link); // Necesario para Firefox
  
    // Descargar el archivo CSV
    link.click();
  });