jQuery(document).ready(function()  {
   
    jQuery.getJSON("http://192.168.16.90:8000/api/solicitudes")
    .done(function(data) {
        console.log("AJAX request succeeded");
        console.log(data.data)
       

        console.log(data.data.length)
        for (let i = 0; i < data.data.length; i++) {
         
            createCard(data.data[i]);
        }
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("AJAX request failed: " + textStatus + ", " + errorThrown);
    });
    
    
});

function createCard(record) {
    // creating a card template
    let card = `
        <div class="w-[300px] h-[400px] bg-gray-200 flex flex-col justify-between rounded-lg p-8">
            <div class="flex justify-between">
                <div class="flex-1" id="bold-title">${record.nombre_apellido_donatario}</div>
                <div id="basura">basura</div>
                <div id="whatsapp">whats</div>
            </div>
            <div class="flex justify-between">
                <div class="flex-1" id="telefono">Telefono:</div>
                <div id="nro-telefono">${record.telefono_contacto}</div>
            </div>
            <div class="flex justify-between">
                <div id="ci">CI:</div>
                <div id="nro-ci">${record.cedula_donatario}</div>
            </div>
            <div class="flex justify-between">
                <div id="lugar">Lugar establecido: </div>
                <div id="lugarD">${record.establecimiento}</div>
            </div>
            <div class="flex justify-between">
                <div id="sangre">Tipo de sangre:</div>
                <div id="tipo">${record.tipo_sangre}</div>
            </div>
            <div class="flex justify-between">
                <div id="volumenes">Volumenes requeridos: </div>
                <div id="nro-vol">${record.volumenes_necesarios}</div>
            </div>
            <div class="flex justify-between">
                <div id="fecha">Fecha limitre</div>
                <div id="fecha-limite">${record.fecha_limite}</div>
            </div>
            <div class="flex justify-center">
                <div id="token">${record.solicitud}</div>
            </div>
        </div>`;
  
    // appending the card to the body
    jQuery(".contenedor").append(card);
}