(function () {
    //Creo el form con un slideDown
    let counter = 0;
    const createForm = () => {
        $('#btn_crear_form').click(()=>{
            $('.ventana_formulario_completa').slideToggle(1000);
    
            counter++;
            if(counter%2 !=0){
                $('#btn_crear_form').html('Ocultar');
                $('#borrar_datos_form').show();
            }else{
                $('#btn_crear_form').html('Crea tu formulario!');
                $('#borrar_datos_form').hide();
            }
        })
    }
    createForm();

    //Guardo los inputs de valores en variables
    let nombre = $('#nombre');
    let telefono = $("#telefono");
    let direccion = $("#direccion");
    let nroTarjeta = $('#nro_tarjeta');
    let nombreTitular = $('#nombre_titular');
    let expiracion = $('#expiracion');
    let codigoSeguridad = $('#codigo_seguridad');
    //Los guardo en un objeto y los guardo vacios
    let datosPersona = {
        name: "", 
        phone: "", 
        adress: "", 
        cardNumber: "", 
        ownerName: "", 
        expiration:"", 
        securityCode:""
    }
    
    //Guardo en un localStorage los valores del objeto datosPersona
    //.val() para sustraer los datos del form
    //datosPersona.algo --> ese algo es el value de cada property que vemos en el storage
    const guardoDatosCargados = () => {
        datosPersona.name = nombre.val(); 
        datosPersona.phone = telefono.val();
        datosPersona.adress = direccion.val(); 
        datosPersona.cardNumber = nroTarjeta.val();
        datosPersona.ownerName = nombreTitular.val();
        datosPersona.expiration = expiracion.val();
        datosPersona.securityCode = codigoSeguridad.val();
        //Valido antes de enviar y guardar
        if(datosPersona.name != "" && datosPersona.phone !="" && datosPersona.adress !="" && datosPersona.cardNumber !="" && datosPersona.ownerName !="" && datosPersona.expiration !="" && datosPersona.securityCode !=""){
            //Guardo en el localStorage este objeto cargado con valores. Me ahorro de hacer un set item para cada uno
            //El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
            localStorage.datosPersona = JSON.stringify(datosPersona);  
            domCompra(datosPersona.name, datosPersona.adress);
        }else{
            alert('Rellena todos los datos 😅')  
        } 
    }

    $('#btnConfirmarCompra').click(()=>{     
        guardoDatosCargados();
    })  
    
    $('#borrar_datos_form').click(()=>{
        localStorage.removeItem('datosPersona'); 
    }) 

    const domCompra = (name, adress) => {
        $('.ventana_formulario_completa').fadeOut(800);
        $('#btn_crear_form').hide();
        $('#borrar_datos_form').hide();
        $('#compra_exitosa').append(
                `
                <h1>Gracias por tu compra ${name}</h1>
                <h2>🛵 Un delivery esta yendo a ${adress} con tu pedido!🛵</h2>
                `
            )
    }
    
    

   /* Descomentar para activar metodo change. Borrar alert de la linea 57
  //Method.change --> guarda en el local storage los datos antes de darle a confirmar
  nombre.change(guardoDatosCargados),
  telefono.change(guardoDatosCargados),
  direccion.change(guardoDatosCargados),
  nroTarjeta.change(guardoDatosCargados),
  nombreTitular.change(guardoDatosCargados),
  expiracion.change(guardoDatosCargados),
  codigoSeguridad.change(guardoDatosCargados)
  */


  
  //Method.focus --> cambia el estilo con un click al input
  nombre.focus(function(){
    nombre.css('background', 'lightblue')
  }),
  telefono.focus(function(){
    telefono.css('background', 'lightblue')
  }),
  direccion.focus(function(){
    direccion.css('background', 'lightblue')
  });
  nroTarjeta.focus(function(){
    nroTarjeta.css('background', '#D3D3D3')
  }),
  nombreTitular.focus(function(){
    nombreTitular.css('background', '#D3D3D3')
  }),
  expiracion.focus(function(){
    expiracion.css('background', '#D3D3D3')
  }),
  codigoSeguridad.focus(function(){
    codigoSeguridad.css('background', '#D3D3D3')
  });
  
  
  
  //Method.blur() --> cambia el color ya una vez clickeado
  nroTarjeta.blur(function(){
    nroTarjeta.css('background', '#8A2BE2')
  }),
  nombreTitular.blur(function(){
    nombreTitular.css('background', '#8A2BE2')
  }),
  expiracion.blur(function(){
    expiracion.css('background', '#8A2BE2')
  }),
  codigoSeguridad.blur(function(){
    codigoSeguridad.css('background', '#8A2BE2')
  });
  
})();



   
