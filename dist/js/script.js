jQuery(document).ready(function () {
    // Get the checkbox
    var checkbox = jQuery('#choose-me'); // replace 'checkboxId' with the actual id of your checkbox

    // Call the function initially to populate the cards
    getAndCreateCards();

    // Add an event listener to the checkbox
    checkbox.change(function () {
        // Empty the container before populating new cards
        jQuery('.contenedor').empty();
        // Call the function again when the checkbox state changes
        getAndCreateCards();
    });
});



function getAndCreateCards() {
    jQuery.getJSON("http://192.168.16.90:8000/api/solicitudes")
    .done(function(data) {
        console.log("AJAX request succeeded");
        console.log(data.data);

        // Check if checkbox is checked
      
        console.log(jQuery('#choose-me').is(':checked')); // This should log true or false
       
    // This should log the array itself
        
    
    
    
    
    
    
    
    
    
        
        
        if (jQuery('#choose-me').is(':checked')) {
   
            let filteredData = data.data.filter(function (item) {
                console.log(item['creado_por']); // This will log the creador_por value of each item
                return item['creado_por'] === 50;
            });
        
            console.log(filteredData); // This will log the entire filtered array
        
            // Now loop through the filtered array
            for (let i = 0; i < filteredData.length; i++) {
                console.log(filteredData[i]);
                createCard(filteredData[i]);
            }
        } else {
            // If checkbox is not checked, create cards for all data
            for (let i = 0; i < data.data.length; i++) {
                createCard(data.data[i]);
            }
        }
        
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log("AJAX request failed: " + textStatus + ", " + errorThrown);
    });
}


function createCard(record) {
    // creating a card template
    let card = `
        <div class="w-[300px] h-[400px] bg-white flex flex-col justify-between rounded-lg p-4">
            <div class="flex justify-between">
                <div class="flex-1 font-bold" id="bold-title">${record.nombre_apellido_donatario}</div>
                <div id="basura">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></div>
                <div id="whatsapp">
                <a href="https://wa.me/595986501547?text=esto es un test a">
                <ion-icon name="logo-whatsapp" class=" text-2xl"></ion-icon>
              </a>
                </div>
            </div>
            <div class="flex justify-between">
                <div class="flex-1" id="telefono">Telefono:</div>
                <div id="nro-telefono">${record.creado_por}</div>
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