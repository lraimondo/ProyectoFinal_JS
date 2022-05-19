class  Alumno {
    constructor(pNombreAlumno,pClave,pNombreCompleto,pNivel,pDocente){
        this.nombre = pNombreAlumno; 
        this.contraseña = pClave;
        this.nombreCompleto = pNombreCompleto;
        this.nivel = pNivel;
        this.docente = pDocente;   
    }
}

class  Docente {
    constructor(pNombreDocente,pClave,pNombreCompleto){
        this.nombre = pNombreDocente; 
        this.contraseña = pClave;
        this.nombreCompleto = pNombreCompleto;
    }
}

class Ejercicio {
    constructor(pTitulo,pDescripcion,pImagen,pNivel,pDocente){
        this.titulo = pTitulo;
        this.descripcion = pDescripcion
        this.imagen = pImagen;
        this.nivel = pNivel;
        this.docente = pDocente;
    }
}
class EjercicioResuelto {
    constructor(pTitulo,pAudio,pAlumno){
        this.titulo = pTitulo;
        this.audio = pAudio;
        this.alumno = pAlumno; //guardo el objeto Alumno entero
        this.devolucion = "";
    }
}
