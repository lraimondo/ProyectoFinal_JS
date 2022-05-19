window.addEventListener("load",inicio);

function inicio(){
    //Eventos Todo tipo de usuario
    document.querySelector("#btnVolver").addEventListener("click",volver); 
    document.querySelector("#menuSalir").addEventListener("click",salir);

    //Eventos Docente
    document.querySelector("#btnDocente").addEventListener("click",mostrarDocente);
    document.querySelector("#btnLoginDocente").addEventListener("click",loginDocente);
    document.querySelector("#btnRegistrarDocente").addEventListener("click",registrarDocente);
    document.querySelector("#menuSubirEjercicio").addEventListener("click",mostrarSubirEjercicioDocente);
    document.querySelector("#btnSubirEjercicio").addEventListener("click",subirEjercicioDocente);
    document.querySelector("#menuAlumnos").addEventListener("click",cambiarNivel); 
    document.querySelector("#btnSelect").addEventListener("click",cambiarNivel);  
    document.querySelector("#menuCorregir").addEventListener("click",mostrarDevolucion);
    document.querySelector("#btnEscuchar").addEventListener("click",escucharAudio);
    document.querySelector("#btnDevolucion").addEventListener("click",subirDevolucion);
    document.querySelector("#menuVerEstadisticasDocente").addEventListener("click",cargarEstadisticasDocente);
    document.querySelector("#btnDesplegable").addEventListener("click",mostrarEstadisticasPersonalizadas); 
    

    //Eventos Alumno
    document.querySelector("#btnAlumno").addEventListener("click",mostrarAlumno);
    document.querySelector("#btnLoginAlumno").addEventListener("click",loginAlumno);
    document.querySelector("#btnRegistrarAlumno").addEventListener("click",registrarAlumno);
    document.querySelector("#menuVerEjercicios").addEventListener("click",mostrarListaEjercicios);  
    document.querySelector("#menuSubirEjAlumno").addEventListener("click",mostrarSubirEjercicioResuelto);
    document.querySelector("#subirEjTerminado").addEventListener("click",subirEjResuelto);
    document.querySelector("#btnBuscarEj").addEventListener("click",filtrarEjercicios); 
    document.querySelector("#menuVerEjerciciosResueltosAlumno").addEventListener("click",alumnoVerEjerciciosResueltos);
    document.querySelector("#menuVerDevolucionesAlumno").addEventListener("click",mostrarDevolucionAlumnos);
    document.querySelector("#menuVerEstadisticasAlumno").addEventListener("click",cargarEstadisticasAlumno);


    ocultarTodo();
    precargarDatosDocente();
    precargarDatosAlumno();
    precargarEjerciciosDocente();
    precargarEjerciciosResueltos();
    crearSelectDocentes();
}

function ocultarTodo(){
    document.querySelector("#navPrincipal").style.display= "none";
    document.querySelector("#nombreUsuarioLogueado").style.display= "none";
    document.querySelector("#loginDocente").style.display= "none";
    document.querySelector("#registrarDocente").style.display= "none";
    document.querySelector("#subirEjercicio").style.display= "none";
    document.querySelector("#loginAlumno").style.display= "none";
    document.querySelector("#registrarAlumno").style.display= "none";
    document.querySelector("#volver").style.display= "none";
    document.querySelector("#verEjercicios").style.display="none";
    document.querySelector("#subirEjercicioResuelto").style.display="none";
    document.querySelector("#verAlumnos").style.display ="none";
    document.querySelector("#verEjerciciosResueltosAlumno").style.display="none";
    document.querySelector("#Correciones").style.display="none";
    document.querySelector("#selectEstadisticasDocente").style.display="none";
    document.querySelector("#tablaDevolucionesAlumno").style.display="none";
    document.querySelector("#estadisticasDocente").style.display="none";
    document.querySelector("#estadisticasAlumno").style.display="none";
}

function mostrarAlumno(){
    ocultarTodo();
    document.querySelector("#alumno_Docente").style.display= "none"; //se ocultan los botones de alumno y docente del principio
    document.querySelector("#loginAlumno").style.display= "block";
    document.querySelector("#registrarAlumno").style.display= "block";
    document.querySelector("#volver").style.display= "block"; //volver al menu principal para loguearse con otro tipo de usuario

}

function mostrarDocente(){
    ocultarTodo();
    document.querySelector("#alumno_Docente").style.display= "none"; //se ocultan los botones de alumno y docente del principio
    document.querySelector("#loginDocente").style.display= "block";
    document.querySelector("#registrarDocente").style.display= "block";
    document.querySelector("#volver").style.display= "block";  //volver al menu principal para loguearse con otro tipo de usuario

}

function mostrarMenuOcultandoLoginYRegistroDocente(){ //Muestra el menu principal, pero oculta todo el resto que no pertenece a su tipo de usuario
    ocultarTodo();
    document.querySelector("#navPrincipal").style.display="block"; //muestra siempre el navegador principal con los elementos del menu
    document.querySelector("#nombreUsuarioLogueado").style.display="block"; //dejo siempre en pantalla el nombre del usuario logueado
    document.querySelector("#menuSubirEjercicio").style.display="block";  
    document.querySelector("#menuVerEjercicios").style.display="none";
    document.querySelector("#menuSubirEjAlumno").style.display="none";
    document.querySelector("#nombreUsuarioLogueado").innerHTML = usuarioLogueado.nombreCompleto; //se deja fijo el nombre con el que se entra al sitio
    document.querySelector("#menuCorregir").style.display="block";
    document.querySelector("#menuAlumnos").style.display ="block";
    document.querySelector("#menuVerEjerciciosResueltosAlumno").style.display="none";
    document.querySelector("#Correciones").style.display="none";
    document.querySelector("#menuVerEstadisticasDocente").style.display="block";
    document.querySelector("#selectEstadisticasDocente").style.display="none";
    document.querySelector("#menuVerDevolucionesAlumno").style.display="none";
    document.querySelector("#tablaDevolucionesAlumno").style.display="none";
    document.querySelector("#estadisticasDocente").style.display="none";
    document.querySelector("#menuVerEstadisticasAlumno").style.display="none";
    
}

function mostrarMenuOcultandoLoginYRegistroAlumno(){ //Muestra el menu principal, pero oculta todo el resto
    ocultarTodo();
    document.querySelector("#navPrincipal").style.display="block";  //muestra siempre el navegador principal con los elementos del menu
    document.querySelector("#nombreUsuarioLogueado").style.display="block";
    document.querySelector("#nombreUsuarioLogueado").innerHTML = usuarioLogueado.nombreCompleto + ": " + usuarioLogueado.nivel; //se deja fijo el nombre con el que se entra al sitio y su nivel
    document.querySelector("#menuSubirEjercicio").style.display="none";
    document.querySelector("#menuSubirEjAlumno").style.display="block";
    document.querySelector("#menuAlumnos").style.display ="none";
    document.querySelector("#menuVerEjercicios").style.display="block";
    document.querySelector("#menuCorregir").style.display="none";  //ocultamos las pestañas que son exclusivamente para docentes
    document.querySelector("#verEjercicios").style.display="none";
    document.querySelector("#verEjerciciosResueltosAlumno").style.display="none";
    document.querySelector("#menuVerEjerciciosResueltosAlumno").style.display="block";
    document.querySelector("#menuVerEstadisticasDocente").style.display="none";
    document.querySelector("#menuVerDevolucionesAlumno").style.display="block";
    document.querySelector("#tablaDevolucionesAlumno").style.display="none";
    document.querySelector("#menuVerEstadisticasAlumno").style.display="block";

}

function mostrarSubirEjercicioDocente(){
    mostrarMenuOcultandoLoginYRegistroDocente();
    document.querySelector("#mensajesSubirEjercicio").innerHTML= "";
    document.querySelector("#subirEjercicio").style.display= "block";
}

function mostrarSubirEjercicioResuelto(){
    mostrarMenuOcultandoLoginYRegistroAlumno();
    document.querySelector("#verEjerciciosResueltosAlumno").style.display="none";
    document.querySelector("#ejResuelto").innerHTML ="";
    document.querySelector("#subirEjercicioResuelto").style.display="block";
    crearSelectEjercicios();
}

function mostrarDevolucion(){
    mostrarMenuOcultandoLoginYRegistroDocente();
    document.querySelector("#Correciones").style.display="block";
    crearSelectDevolucionesDocente();
    document.querySelector("#confirmacionDevolucion").innerHTML = "";
}

function mostrarDevolucionAlumnos(){
    mostrarMenuOcultandoLoginYRegistroAlumno();
    document.querySelector("#tablaDevolucionesAlumno").style.display="block";
    devolucionesAlumno();

}

function volver(){
    ocultarTodo();
    document.querySelector("#alumno_Docente").style.display= "block";  //al volver se muestra nuestra ventana principal de botones 
}


function salir(){    //al salir del sitio, se oculta todo menos los botones de alumno y docente para iniciar
    ocultarTodo();
    document.querySelector("#loginAlumno").style.display="none";
    document.querySelector("#loginDocente").style.display="none";
    document.querySelector("#registrarAlumno").style.display="none";
    document.querySelector("#registrarDocente").style.display="none";
    document.querySelector("#registroAlumno").innerHTML = "";
    document.querySelector("#registroDocente").innerHTML = "";
    document.querySelector("#navPrincipal").style.display="none";
    document.querySelector("#alumno_Docente").style.display="block";
    usuarioLogueado = null; //null indica que la variable va a guardar algo pero aun no fue cargada
}

//////ARRAYS Y GLOBALES//////

let listaAlumnos = [];  //guarda los objetos de alumnos
let listaDocente = [];  // guarda los objetos de docentes
let listaEjDocente = [];  //guarda los ejercicios que sube el docente 
let listaEjAlumno = [];   //guarda los ejercicios resueltos subidos por los alumnos
let usuarioLogueado=null;



//////////////////////PRECARGAR DATOS///////

function precargarDatosDocente(){
    agregarDocente("doc1","Docente1","Pedro Gonzalez");
    agregarDocente("doc2","Docente2","Marisa Gomez");
    agregarDocente("doc3","Docente3","Analia Jerez");
} 

function precargarDatosAlumno(){
    agregarAlumno("usu1","Alumno1","Gonzalo Barces","Avanzado",listaDocente[2].nombreCompleto); 
    agregarAlumno("usu2","Alumno2","Santiago Barreira","Intermedio",listaDocente[1].nombreCompleto);
    agregarAlumno("usu3","Alumno3","Lucia Raimondo","Inicial",listaDocente[0].nombreCompleto);
}


//////////////////////PRECARGAR EJERCICIOS////////
 function precargarEjerciciosDocente(){
   usuarioLogueado = listaDocente[0]; //pedro gonzalez - lucia raimondo
   agregarEjercicio("Ejercicio 1", "Subir el ejercicio tocando la guitarra","ej4.png","Inicial",usuarioLogueado.nombreCompleto);

   usuarioLogueado = listaDocente[0]; //pedro gonzalez - lucia raimondo
   agregarEjercicio("Ejercicio 4", "Subir el ejercicio tocando el violin","ej2.png","Inicial",usuarioLogueado.nombreCompleto);
                                                                        
   usuarioLogueado =  listaDocente[2]; //analia jerez- gonzalo barces
   agregarEjercicio("Ejercicio 5", "Armar acordes", "ej3.png","Avanzado",usuarioLogueado.nombreCompleto);

   usuarioLogueado =  listaDocente[2]; //analia jerez- gonzalo barces
   agregarEjercicio("Ejercicio 3", "Tocar el piano", "ej1.png","Avanzado",usuarioLogueado.nombreCompleto);
}

function precargarEjerciciosResueltos(){
                                                                        
   usuarioLogueado =  listaAlumnos[0]; //gonzalo barces
   agregarEjercicioResuelto("Ejercicio 4", "ej5.m4a",usuarioLogueado);

   usuarioLogueado =  listaAlumnos[0]; //gonzalo barces
   agregarEjercicioResuelto("Ejercicio 3","ej2.m4a",usuarioLogueado);
                                                                        
   usuarioLogueado =  listaAlumnos[2]; //lucia raimondo
   agregarEjercicioResuelto("Ejercicio 2", "ej3.m4a",usuarioLogueado);

}

/////FUNCIONES REGISTRAR///////
function registrarAlumno(){
    let docente = document.querySelector("#seleccionarDocente").value;
    let nombre = document.querySelector("#txtAlumnoRegistro").value;
    let clave = document.querySelector("#txtClaveRegistroAlumno").value;
    let nombreCompleto = document.querySelector("#txtNombreCompletoRegistroAlumno").value;
    let mensaje = "";
    let nivel = "Inicial"; //le asigno nivel "Inicial" como default al registrarse
    // Verificar que no haya ya un usuario registrado con ese nombre
    // Verificar contraseña valida (que no esté vacía y que tenga al menos 4 caracteres)
    // Verificar que el nombre de usuario y nombre completo no sean vacios

    if (validarCamposVaciosRegistro(nombre,clave,nombreCompleto)){
        if (formatoContraseñaOK(clave)){
            if (usuarioNoExisteAlumno(nombre)){
                // Puedo registrar
                agregarAlumno(nombre,clave,nombreCompleto,nivel,docente);
                mensaje = "Registro exitoso !"
                document.querySelector("#txtAlumnoRegistro").value=""; //limpio parrafos 
                document.querySelector("#txtClaveRegistroAlumno").value="";
                document.querySelector("#txtNombreCompletoRegistroAlumno").value="";               
            }
            else {
                mensaje = "Ya existe un usuario con ese nombre"
            }
        }
        else {
            mensaje = "Formato de contraseña incorrecto. Debe tener al menos 4 caracteres, una minuscula, una mayuscula y un numero. Ej: Abc1";
        }
    }
    else {
        mensaje = "Los campos no pueden ser vacíos";
    }
    document.querySelector("#registroAlumno").innerHTML = mensaje;    
}

function crearSelectDocentes(){
    let miSelect = document.querySelector("#seleccionarDocente"); // Obtengo el select del HTML
    miSelect.innerHTML = "";
        for(let i=0;i<listaDocente.length;i++){  //recorro la lista de ejercicios del docente y muestro en el select aquellos que coincidan con el nivel del alumno logueado
            let unOption = "<option value='"+listaDocente[i].nombreCompleto+"'>" +listaDocente[i].nombreCompleto +"</option>"; //creo option. Solo le paso la posicion de la lista 
            miSelect.innerHTML += unOption; //lo agrego al select
        }
}

function registrarDocente(){
    let nombre = document.querySelector("#txtRegistroDocente").value;
    let clave = document.querySelector("#txtClaveRegistroDocente").value;
    let nombreCompleto = document.querySelector("#txtNombreCompletoRegistroDocente").value;
    let mensaje = "";

    if (validarCamposVaciosRegistro(nombre,clave,nombreCompleto)){
        if (formatoContraseñaOK(clave)){
            if (usuarioNoExisteDocente(nombre)){
                // Puedo registrar
                agregarDocente(nombre,clave,nombreCompleto);
                mensaje = "Registro exitoso !"
                document.querySelector("#txtRegistroDocente").value="";
                document.querySelector("#txtClaveRegistroDocente").value="";
                document.querySelector("#txtNombreCompletoRegistroDocente").value="";               
            }
            else {
                mensaje = "Ya existe un usuario con ese nombre"
            }
        }
        else {
            mensaje = "Formato de contraseña incorrecto. Debe tener al menos 4 caracteres, una minúscula, una mayúscula y un número. Ej: Abc1";
        }
    }
    else {
        mensaje = "Los campos no pueden ser vacíos";
    }
    document.querySelector("#registroDocente").innerHTML = mensaje;
}    


/////FUNCIONES VALIDACION REGISTRO/////
function validarCamposVaciosRegistro(pNombre,pClave,pNombreCompleto){
    // Retorna true si los tres parametros contienen algo distindo de vacío
   return (pNombre!="" && pClave!="" && pNombreCompleto!="");
}

function formatoContraseñaOK(pClave) {
    //Necesito validar que la password tenga mas de 4 caracteres
    //al menos una minuscula, una mayuscula y un numero
    //recorro la clave ingresada y verifico si algun caracter coincide con las validaciones (mayus,minus,num)
    //si coincide todo a la misma vez, retorno true
    let resultado= false;
    if(pClave.length >= 4){	
		let mayus = false;
		let minus = false;
		let num = false;
            for(let i=0;i<pClave.length;i++){
                if(pClave.charCodeAt(i) >= 65 && pClave.charCodeAt(i) <= 90){
                    mayus = true;
                }
                else if(pClave.charCodeAt(i) >= 97 && pClave.charCodeAt(i) <= 122){
                    minus = true;
                }
                else{
                    pClave.charCodeAt(i) >= 48 && pClave.charCodeAt(i) <= 57
                    num=true;
                }
            if(mayus == true && minus == true && num == true){
                resultado= true;
            }
        }
    }
    return resultado;
}

function usuarioNoExisteAlumno(pNombre){
  // Retorna true cuando no hay un usuario con el nombre pNombre
   let  resultado = true;
   for (let pos=0;pos<listaAlumnos.length;pos++){
       let unUsuario = listaAlumnos[pos]; // Tengo el objeto usuario
       if (unUsuario.nombre == pNombre){  //comparo el nombre del objeto con el nombre ingresado en el momento
           resultado = false;
        }
   }
   return resultado;
}

function usuarioNoExisteDocente(pNombre){
    // Retorna true cuando no hay un usuario con el nombre pNombre
     let  resultado = true;
     for (let pos=0;pos<listaDocente.length;pos++){
         let unUsuario = listaDocente[pos]; // Tengo el objeto usuario
         if (unUsuario.nombre == pNombre){
            resultado = false;
        }
    }
     return resultado;
}


//////////FUNCIONES LOGIN////////

function loginAlumno(){
    let nombre = document.querySelector("#txtAlumno").value;
    let clave = document.querySelector("#txtClaveAlumno").value;
    let login = verificarLoginAlumno(nombre,clave);
    let mensaje="";
    if (login){
        document.querySelector("#txtAlumno").value = "";
        document.querySelector("#txtClaveAlumno").value = "";
        mostrarMenuOcultandoLoginYRegistroAlumno();
    }
    else if (nombre=="" ||clave==""){
        mensaje = "Los campos no pueden estar vacíos";
    }
    else{
        mensaje = "Usuario y/o contraseña incorrectos";
    }
    
    document.querySelector("#loginA").innerHTML = mensaje;
}

function loginDocente(){
    let nombre = document.querySelector("#txtDocente").value;
    let clave = document.querySelector("#txtClaveDocente").value;

    let login = verificarLoginDocente(nombre,clave);

    let mensaje=""
    if (login){
        document.querySelector("#txtDocente").value = "";
        document.querySelector("#txtClaveDocente").value = "";
        mostrarMenuOcultandoLoginYRegistroDocente();
    }
    else if (nombre=="" ||clave==""){
        mensaje = "Los campos no pueden estar vacíos";
    }
    else{
        mensaje = "Usuario y/o contraseña incorrectos";
    }

    document.querySelector("#loginD").innerHTML = mensaje;
}

//////FUNCIONES VERIFICAR LOGIN////////
function verificarLoginAlumno(nomUsuario,clave){
    // Recibe usuario y clave y devuelve true cuando verifica el login (usuario y clave correctas)
    // Devuelve false en cualqueir otro caso
    //Recorrer listaAlumnos para ver si hay un usuario que coincida con nomUsuario
    //Verificar que su usuario y clave registradas coincidan con lo igresado en el momento
    let resultado = false;
    for (let pos=0;pos<listaAlumnos.length;pos++){
        let unAlumno = listaAlumnos[pos]; // Obtuve elemento que ahora es un OBJETO usuario
        if (unAlumno.nombre.toLowerCase == nomUsuario.toLowerCase){
            // Encontré al usuario
            // Verifico que la clave coincida
            if (unAlumno.contraseña==clave){
                // Coincide, el usuario puede loguearse
                usuarioLogueado = unAlumno; //null se cambia por el alumno logueado en ese momento
                resultado = true;
            }             
        }
    }
    return resultado;
}

function verificarLoginDocente(nomUsuario,clave){   //igual al verificar login alumno pero recorriendo listaDocente
    let resultado = false;
    for (let pos=0;pos<listaDocente.length;pos++){
        let unDocente = listaDocente[pos]; 
        if (unDocente.nombre.toLowerCase === nomUsuario.toLowerCase){
            if (unDocente.contraseña ==clave){
                usuarioLogueado = unDocente;
                resultado = true;
            }             
        }
    }
    return resultado;
}


//////FUNCIONES AGREGAR A LAS LISTAS/////
function agregarAlumno(pNombreAlumno,pClave,pNombreCompleto,pNivel,pDocente){

    let unAlumno = new Alumno(pNombreAlumno,pClave,pNombreCompleto,pNivel,pDocente);
   listaAlumnos.push(unAlumno);
}

function agregarDocente(pNombreDocente,pClave,pNombreCompleto){

   let unDocente = new Docente(pNombreDocente,pClave,pNombreCompleto);
  listaDocente.push(unDocente);
}

////FUNCIONES PARA AGREGAR LOS EJERCICIOS A SUS RESPECTIVAS LISTAS

function agregarEjercicio(pTitulo,pDescripcion,pImagen,pNivel,pDocente){
    //Agrego ejercicios a la listaEjDocente
    // Creo el objeto Ejercicio
    let unEjercicio = new Ejercicio(pTitulo,pDescripcion,pImagen,pNivel,pDocente);
    // Agregar a la lista un objeto Ejercicio
    listaEjDocente.push(unEjercicio); 
}

function agregarEjercicioResuelto(pTitulo,pAudio,pAlumno){
    //Agrego ejercicios resueltos a la listaEjAlumno
    let unEjResuelto = new EjercicioResuelto (pTitulo,pAudio,pAlumno);
    listaEjAlumno.push(unEjResuelto);
}


///////FUNCIONES SUBIR EJERCICIOS DEL DOCENTE ////////
function subirEjercicioDocente() {
    let unTitulo = document.querySelector("#txtTitulo").value;
    let unaDescripcion = document.querySelector("#txtDescripcion").value;
    let unaImagen = document.querySelector("#imagen").value;
    let nivel = document.querySelector("#txtNivel").value;
    let nombreArchivo = obtenerNombreArchivo(unaImagen);

    let mensaje = validarEjercicio(unTitulo,unaDescripcion,nombreArchivo);
    // validarEjercicio retorna "" si no hay error y el mensaje que corresponda en otro caso;
    let nombre=usuarioLogueado.nombreCompleto
    if (mensaje=="") { // Ejercicio valida;
        agregarEjercicio(unTitulo,unaDescripcion,nombreArchivo,nivel,nombre);
        document.querySelector("#txtTitulo").value = ""; //limpio todo los campos y muestro el mensaje
        document.querySelector("#txtDescripcion").value = "";
        document.querySelector("#imagen").value = ""; 
        document.querySelector("#mensajesSubirEjercicio").innerHTML= "Alta existosa!";
    }
    else {
        document.querySelector("#mensajesSubirEjercicio").innerHTML= mensaje;
    }
}

function obtenerNombreArchivo(pathCompleto){
    // del pathCompleto tiene que retornar el texto que está despues de la ùltima "\"  Ej; C:\fakepath\afiche1.jpg
   let nombreArchivo;
   let posicionUltimaBarra = pathCompleto.lastIndexOf("\\");
   nombreArchivo = pathCompleto.substring(posicionUltimaBarra+1);
   return nombreArchivo;
}

function validarEjercicio(pTitulo,pDescripcion,pNombreArchivoImagen) {
    let mensaje = "";
    if (pTitulo==""){
        mensaje = "El título no puede ser vacío."+"<br>";
    }
    if (pTitulo.length>20){
        mensaje += "El título no puede tener mas de 20 caracteres";
    }
    if (pDescripcion.length<20 || pDescripcion.length>180){
        mensaje += "La descripción debe tener entre 20 y 180 caracteres"+"<br>";
    }
    if (pNombreArchivoImagen==""){
        mensaje += "Debe elegir una imagen";
    }
    return mensaje;
}


/////////FUNCION CREAR LISTA DE EJERCICIOS DEL DOCENTE
function mostrarListaEjercicios(){
    ocultarTodo();
    document.querySelector("#navPrincipal").style.display="block";
    document.querySelector("#nombreUsuarioLogueado").style.display="block";
    crearLista(""); //arranca vacio para que despliegue todos los ejericios sin discriminar 
    document.querySelector("#verEjercicios").style.display="block";
}

function filtrarEjercicios(){
    let texto = document.querySelector("#BuscarEj").value;
    crearLista(texto);
    document.querySelector("#BuscarEj").value = "";
}

function crearLista(filtro) {
    document.querySelector("#verEjerciciosResueltosAlumno").style.display="none";
    //Creamos una lista con todos los ejercicios con la posibildad de filtrar por titulo o parte del mismo
    document.querySelector("#listaEjercicios").innerHTML = "";
    let ejercicioHTML =""; 
    //Recorro los ejercicios de la listaEjDocente para luego comparar y discriminar cual mostrarle al alumno logueado
        for (let unEjercicio of listaEjDocente){
            if(unEjercicio.nivel==usuarioLogueado.nivel && unEjercicio.docente==usuarioLogueado.docente){ //muestro el Ej si coincide con nivel y docente
                //Filtro primero por titulo, sino encuentro por titulo, filtro por descripcion y sino mostrar que no hay resultados con esa busqueda
                if(unEjercicio.titulo.includes(filtro)){ 
                    ejercicioHTML="<div>";
                    ejercicioHTML+="<h3>"+unEjercicio.titulo+"</h3>";
                    ejercicioHTML+="<p>"+unEjercicio.descripcion+"</p>";
                    ejercicioHTML+="<img src='img/"+unEjercicio.imagen+"'>";   
                    ejercicioHTML+= "<p>"+unEjercicio.nivel+"</p>";
                    ejercicioHTML+= "<p> Docente: "+unEjercicio.docente+"</p>";
                    ejercicioHTML+= "</div>";
                    document.querySelector("#listaEjercicios").innerHTML += ejercicioHTML;
                }
                else if(unEjercicio.descripcion.includes(filtro)){
                    ejercicioHTML="<div>";
                    ejercicioHTML+="<h3>"+unEjercicio.titulo+"</h3>";
                    ejercicioHTML+="<p>"+unEjercicio.descripcion+"</p>";
                    ejercicioHTML+="<img src='img/"+unEjercicio.imagen+"'>";   
                    ejercicioHTML+= "<p>"+unEjercicio.nivel+"</p>";
                    ejercicioHTML+= "<p> Docente: "+unEjercicio.docente+"</p>";
                    ejercicioHTML+= "</div>";
                    document.querySelector("#listaEjercicios").innerHTML += ejercicioHTML;
                }
            }
        }
        if(ejercicioHTML==""){
            document.querySelector("#listaEjercicios").innerHTML = "No hay resultados que coincidan con su búsqueda";
        }
}

/////////FUNCION SUBIR EJERCICIOS POR PARTE DEL ALUMNO
function crearSelectEjercicios(){
    let miSelect = document.querySelector("#selectEjercicios"); // Obtengo el select del HTML
    miSelect.innerHTML = ""; 
    //Recorro la lista de ejercicios del docente y muestro en el select aquellos que coincidan con el nivel del alumno logueado
    for(unEjercicio of listaEjDocente){  
        if(usuarioLogueado.nivel==unEjercicio.nivel && validarEjResuelto(unEjercicio.titulo)){  
        let unOption = "<option value='"+unEjercicio.titulo+"'>"+unEjercicio.titulo+"</option>"; //creo option
        miSelect.innerHTML += unOption; //lo agrego al select
        }
    }
}

function subirEjResuelto(){
    let titulo = document.querySelector("#selectEjercicios").value;
    let unAudio = document.querySelector("#subirAudio").value; //traigo al audio
    let Audio = obtenerNombreArchivo(unAudio); 

    let mensaje = validarAudio(Audio);
       
    if(mensaje==""){
            
          agregarEjercicioResuelto(titulo,Audio,usuarioLogueado);
                document.querySelector("#ejResuelto").innerHTML ="Ejercicio enviado con éxito";
                document.querySelector("#subirAudio").value="";
                crearSelectEjercicios();
        }
        else {
            document.querySelector("#ejResuelto").innerHTML = mensaje;
        } 
}

function validarEjResuelto(titulo) {
    let bool=true;
    //Recorro los ejercicios de la listaEjAlumno y si ya hay uno precargado con ese titulo mostrar bool correspondiente
    for(let elemento of listaEjAlumno){
        if(elemento.titulo==titulo && elemento.alumno.nombreCompleto==usuarioLogueado.nombreCompleto){
            bool=false;
        }
    }
    return bool;
}

function validarAudio(audio){
    //mostrar mensaje si no se sube ningun archivo de audio
    let mensaje="";
    if(audio==""){
        mensaje = "El audio no puede estar vacío. Agregar audio para continuar";
    }
    return mensaje;
}

//////////FUNCION CAMBIAR EL NIVEL DEL ALUMNO 
function cambiarNivel(){
    mostrarMenuOcultandoLoginYRegistroDocente();
    document.querySelector("#verAlumnos").style.display ="block";
    let alumnoSelect = document.querySelector("#seleccionarAlumnos").value; 
    let select = document.querySelector("#seleccionarNivel").value;
    let mensaje= "";
    let miSelect = document.querySelector("#seleccionarAlumnos"); // Obtengo el select del HTML
    miSelect.innerHTML = "";
    for(unAlumno of listaAlumnos){
        if(unAlumno.docente == usuarioLogueado.nombreCompleto){
        let unOption = "<option value='"+unAlumno.nombreCompleto+"'>"+unAlumno.nombreCompleto+"</option>"; //creo option
        miSelect.innerHTML += unOption; //lo agrego al select
        }
        
    }

    //cambiar el nivel del alumno sin permitir volver a bajar de nivel
    //devuelve true si solo si se puede cambiar de nivel al alumno, sino se muestra el mensaje correspondiente
    let bool=true;
    let i =0;
    //recorro la listaAlumnos
    while(i<listaAlumnos.length && alumnoSelect != listaAlumnos[i].nombreCompleto){
        i++; 
    }

    //comparo la posicion del alumno en el momento y su nivel
    if(i< listaAlumnos.length){
       if(listaAlumnos[i].nivel =="Avanzado" && select == "Intermedio"){ 
       bool= false;
       mensaje = "No puedes elegir un nivel inferior al actual";
    }

    else if(listaAlumnos[i].nivel == select){
        mensaje= "El alumno ya pertenece a ese nivel";
        bool= false;
    }

    if(bool){
        //si retorna true, se cambia el nivel del alumno por el seleccionado en el select
        listaAlumnos[i].nivel = select;
        mensaje = "Se cambió el nivel del alumno correctamente "+ listaAlumnos[i].nombreCompleto;
    }
    document.querySelector("#mensajeSelect").innerHTML = mensaje;
    }
}

////////FUNCION VER EJERCICIOS RESUELTOS POR PARTE DEL ALUMNO (LOS VE EL DOCENTE)
function alumnoVerEjerciciosResueltos (){
    mostrarMenuOcultandoLoginYRegistroAlumno();
    document.querySelector("#verEjerciciosResueltosAlumno").style.display="block";
    document.querySelector("#verEjs").innerHTML = "";
    let ejercicioHTML = "";
    for(unEjercicio of listaEjAlumno){
        if(unEjercicio.alumno.nombreCompleto==usuarioLogueado.nombreCompleto){
        ejercicioHTML="<div>";
        ejercicioHTML+="<h3>"+unEjercicio.titulo+"</h3>";

        ejercicioHTML+= "<audio controls>";  // Agrego la etiqueta para el reproductor de audio
        ejercicioHTML+= "<source src='audio/"+unEjercicio.audio+"' type='audio/mp4'>";
        ejercicioHTML+= "Su navegador no permite utilizar el control de audio.";        
        ejercicioHTML+="</audio>";
        ejercicioHTML+= "</div>";
        document.querySelector("#verEjs").innerHTML += ejercicioHTML;
        }
    }
}

///////FUNCIONES PARA HACER DEVOLUCIONES
function crearSelectDevolucionesDocente(){
    let miSelect = document.querySelector("#selectDevolucionesDocente"); // Obtengo el select del HTML
    miSelect.innerHTML = "";
        for(let i=0;i<listaEjAlumno.length;i++){  //recorro la lista de ejercicios del docente y muestro en el select aquellos que coincidan con el nivel del alumno logueado
            if(usuarioLogueado.nombreCompleto==listaEjAlumno[i].alumno.docente && listaEjAlumno[i].devolucion ==""){  
            let unOption = "<option value='"+i+"'>" + listaEjAlumno[i].alumno.nombreCompleto +" - "+listaEjAlumno[i].titulo+"</option>"; //creo option. Solo le paso la posicion de la lista 
            miSelect.innerHTML += unOption; //lo agrego al select
        }
    }
}


function escucharAudio(){  
    document.querySelector("#devolucion").innerHTML = "";
    let ejercicioHTML = "";
    let i = parseInt(document.querySelector("#selectDevolucionesDocente").value); //le paso la posicion del ejercicio que saque del select
    let unEjResuelto = listaEjAlumno[i]; 
    for(let unEjercicio of listaEjAlumno){  //recorro la lista de ejercicios resueltos
        if(unEjResuelto.alumno.nombreCompleto==unEjercicio.alumno.nombreCompleto){  //filtro por alumno
            if(unEjResuelto.titulo==unEjercicio.titulo){  //filtro por titulo del ejercicio
            ejercicioHTML="<div>";   
            ejercicioHTML+="<h3>"+unEjercicio.titulo+"</h3>";
            ejercicioHTML+= "<audio controls>";  // Agrego la etiqueta para el reproductor de audio
            ejercicioHTML+= "<source src='audio/"+unEjercicio.audio+"' type='audio/mp4'>";
            ejercicioHTML+= "Su navegador no permite utilizar el control de audio.";         
            ejercicioHTML+="</audio>"+"<br>";
            ejercicioHTML+= "Autor: "+ unEjercicio.alumno.nombreCompleto;
            ejercicioHTML+= "</div>";
            document.querySelector("#devolucion").innerHTML += ejercicioHTML;
            }
        }
    }
}

function subirDevolucion(){
   let devolucion = document.querySelector("#redactarDevolucion").value;
   document.querySelector("#redactarDevolucion").value = "";
   document.querySelector("#confirmacionDevolucion").innerHTML = "";

   let mensaje="";
   let value = document.querySelector("#selectDevolucionesDocente").value;
   
   if(devolucion==""){
       mensaje="La devolución no puede estar vacía";
   } 
   else{
    listaEjAlumno[value].devolucion  = devolucion; 
    mensaje = "Devolución enviada con éxito";   
   } 

   document.querySelector("#confirmacionDevolucion").innerHTML = mensaje;
   crearSelectDevolucionesDocente();
}


////////FUNCIONES PARA QUE EL ALUMNO VEA LAS DEVOLUCIONES DEL DOCENTE

function devolucionesAlumno(){
    mostrarMenuOcultandoLoginYRegistroAlumno();
    document.querySelector("#tablaDevolucionesAlumno").style.display="block";
    document.querySelector("#verEjerciciosResueltosAlumno").style.display="none";
    document.querySelector("#tablaDevolucionesAlumno").innerHTML="";
    let tablaHTML = "<table border '1'>";
    tablaHTML += "<tr><td> Nombre Ejercicio </td><td>Devolución</td></tr>";
    for(let unEjercicio of listaEjAlumno){
        if(unEjercicio.alumno.docente == usuarioLogueado.docente){
            if(verificarDevolucion()){
                tablaHTML+= "<tr><td>" + unEjercicio.titulo + "</td><td>" + unEjercicio.devolucion + "</td></tr>";
            }
        }
    }
    tablaHTML += "</table>"
    document.querySelector("#tablaDevolucionesAlumno").innerHTML= tablaHTML;
}

function verificarDevolucion(){
    let bool=false;
    for (devolucion of listaEjAlumno){
        if(listaEjAlumno.devolucion !=""){
            bool=true;
        }
    }
    return bool;
}
    
///////////////////ESTADISTICAS DOCENTE////////////////////////////////////////////

function cargarEstadisticasDocente(){
    mostrarMenuOcultandoLoginYRegistroDocente();
    crearDesplegable();
    document.querySelector("#selectEstadisticasDocente").style.display="block";
    document.querySelector("#estadisticasDocente").style.display="block";
    let alumnosConMasEjerciciosResueltos = obtenerAlumnosConMasEjerciciosResueltos();
    let totalEjEntregados = obtenerTotalEjEntregados();
    document.querySelector("#estadisticasDo").innerHTML = "Alumnos con mas ejercicios resueltos: "+ alumnosConMasEjerciciosResueltos;
    document.querySelector("#estadisticasDo").innerHTML += "Cantidad total de ejercicios entregados por todos los alumnos: "+ totalEjEntregados;
}

function obtenerAlumnosConMasEjerciciosResueltos(){
    // muestro el nombre de el o los alumnos que mas ejercicios resolvieron
    let resultado = "";
    let maximo = -1;
    for (elAlumno of listaAlumnos){
        if(elAlumno.docente==usuarioLogueado.nombreCompleto){
            let cantidad = contarEjerciciosResueltos(elAlumno.nombreCompleto);
            if (cantidad > maximo){
                maximo = cantidad;
                resultado = "<br>"+elAlumno.nombreCompleto+"<br>";  
            }
            else{
                if (cantidad == maximo){
                    resultado += " " + elAlumno.nombreCompleto+" "+"<br>"; 
                }
            }
        }
    }
    return resultado;
}

function contarEjerciciosResueltos(pNombreAlumno){
    //cuento la cantidad de ejercicios resueltos por cada alumno
    let cantidad = 0;
    for (unAlumno of listaEjAlumno){
        if (unAlumno.alumno.nombreCompleto == pNombreAlumno){
            cantidad++;
        }
    }
    return cantidad;
}

function obtenerTotalEjEntregados(){
    //cuento la cantidad total de ejercicios que se le entregaron al docente logueado
    let contador = 0;
    for(ejercicio of listaEjAlumno){
        if(ejercicio.alumno.docente==usuarioLogueado.nombreCompleto){
            contador++;
        }
    }
return contador;
}

//////////////DESPLEGABLE CON ESTADISTICAS PERSONALIZADAS
//el docente puede ver el desplegable con todos sus alumnos
//seleccionar un alumno y ver sus estadisticas

function crearDesplegable(){
    let miDesplegable = document.querySelector("#selectEstadisticasDocente");
    miDesplegable.innerHTML = "";
    for(unAlumno of listaAlumnos){
        if(unAlumno.docente==usuarioLogueado.nombreCompleto){
            let unOption = "<option value='"+unAlumno.nombreCompleto+"'>"+unAlumno.nombreCompleto+"</option>"; //creo option
            miDesplegable.innerHTML += unOption; //lo agrego al select
        }
    }
}

function mostrarEstadisticasPersonalizadas(){
    let totalPlanteados = obtenerTotalEjPlanteadosDocente();
    let totalResueltos = totalResueltosAlumnos();
    document.querySelector("#mostrarEstadisticasPersonalizadasDocente").innerHTML = "Total de ejercicios planteados para el alumno: " + totalPlanteados+ "<br>";
    document.querySelector("#mostrarEstadisticasPersonalizadasDocente").innerHTML += "Total de ejercicios resueltos por el alumno: " + totalResueltos;
}


function obtenerTotalEjPlanteadosDocente(){
    //cuento la cantidad de ejercicios planteados por el docente logueado
    let contador = 0;
    let nivel = obtenerNivelAlumno();
    for(ejercicio of listaEjDocente){
        if(ejercicio.nivel == nivel && ejercicio.docente == usuarioLogueado.nombreCompleto){
            contador++;
        }
    }    
return contador;
}

function obtenerNivelAlumno(){
    //obtengo el nivel del alumno para poder filtrar despues
    let nombre = document.querySelector("#selectEstadisticasDocente").value;
    let nivel="";
    for (alumno of listaAlumnos){
        if(alumno.nombreCompleto == nombre){
            nivel = alumno.nivel;
        }
    }
    return nivel;
}

function totalResueltosAlumnos(){
    //cuento la cantidad total de ejercicios que resolvio el alumno
    let contador = 0;
    let nombre = document.querySelector("#selectEstadisticasDocente").value;
    for (ejercicio of listaEjAlumno){
        if(ejercicio.alumno.nombreCompleto == nombre){
            contador ++;
        }
    }
    return contador;
}


////////////////////ESTADISTICAS ALUMNO/////////////////////

function cargarEstadisticasAlumno(){
    mostrarMenuOcultandoLoginYRegistroAlumno();
    document.querySelector("#estadisticasAlumno").style.display="block";
    let porcentaje = porcentajeEjercicios();
    let sindev = obtenerTotalEjerciciosConDevolucion();
    let devueltos = obtenerEjerciciosConDevolucion();
    document.querySelector("#estadisticasAl").innerHTML = "Porcentaje ejercicios resueltos: %"+ porcentaje + "<br>";
    document.querySelector("#estadisticasAl").innerHTML += "Cantidad de ejercicios sin devolución: "+ sindev + "<br>";
    document.querySelector("#estadisticasAl").innerHTML += "Cantidad de ejercicios que han recibido devolución: "+ devueltos;
    
}

///PARTE A 
function porcentajeEjercicios(){
    //calculo la cantidad de ejercicios resueltos sobre los planteados
    let totalPlanteados = obtenerTotalEjPlanteados();
    let totalResueltos = obtenerTotalEjResueltos();
    let porcentaje= (totalResueltos*100)/totalPlanteados;
    return porcentaje;
}

function obtenerTotalEjResueltos(){
    //obtengo la cantidad de ejercicios que el alumno logueado resolvio
    let contador = 0;
    for (ejercicio of listaEjAlumno){
        if(ejercicio.alumno.nombreCompleto == usuarioLogueado.nombreCompleto){
            contador++;
        }
    }
    return contador;
}

function obtenerTotalEjPlanteados(){
    //calculo la cantidad de ejercicios que hay planteados para el alumno logueado discriminando por docente y nivel
    let contador = 0;
    for(ejercicio of listaEjDocente){
        if(ejercicio.nivel==usuarioLogueado.nivel && ejercicio.docente==usuarioLogueado.docente){
            contador++;
        }
    }
return contador;
}

////PARTE B

function obtenerTotalEjerciciosConDevolucion(){
    let resueltos = obtenerTotalEjResueltos();
    let devueltos = obtenerEjerciciosConDevolucion();
    let total = resueltos-devueltos;
    return total;
}

function obtenerEjerciciosConDevolucion(){
    let contador=0;
    for (let i=0;i<listaEjAlumno.length;i++){
        if(listaEjAlumno[i].devolucion != ""){
            contador ++;
        }
    }
    return contador;
}