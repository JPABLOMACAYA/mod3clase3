//Si bien aún no era requisito dar funcionalidad a la página, apliqué materia vista hasta la clase 03 módulo 03 a modo de ensayo.
//Se invocó en una función anónima la API chucknorris para generar chistes random, los que se mostrarán en el título h2 (id=chiste).
//Además se podrá ver nuevos chistes al presionar el botón ACTUALIZAR, ya que se invoca el método location.reload() desde el html.
$(document).ready( function () {    
    $.ajax ({
        type: "GET",
        url: "https://api.chucknorris.io/jokes/random",
        dataType: "json",
        success: function (dataIn) {
            $('#chiste').text(dataIn.value);
        }
    });
});