
/* DECLARACIÓN DE VARIABLES */
let palabras = ['HTML','EJERCICIO','JAVASCRIPT','AHORCADO'];

var palabraElejida = palabras[Math.floor(Math.random()*palabras.length)];

var palabraConGuiones = palabraElejida.replace(/./g, "_ ");
document.getElementById("output").innerHTML = palabraConGuiones;
var letrasFallidas = [];


/* DEFINIENDO FUNCIÓN PARA AÑADIR UNA PALABRA */
function addPalabra() {

    var nueva = document.getElementById("textoNuevo").value.toUpperCase();
    palabraElejida = nueva;
    var nuevaConGuiones = nueva.replace(/./g, "_ ");
    palabraConGuiones=nuevaConGuiones;

    document.getElementById("new").style.display = "none";
    start();
}
/* 
AGREGANDO LA FUNCIÓN AÑADIR PALABRA AL EVENTO DEL BOTON */
let btnAddPalabra = document.getElementById("btnNuevaPalabra");
btnAddPalabra.addEventListener("click", addPalabra)

/* DEFINIENDO FUNCIÓN PARA INICIAR EL JUEGO */
function start(){
    
    document.getElementById("btnPlay").style.display = "none";
    document.getElementById("btnAdd").style.display = "none";
    document.getElementById("canvas").style.display = "block";
    document.getElementById("texto").style.display = "block";
    
    document.getElementById("read").style.display = "block";
    document.getElementById("btnJuego").style.display = "block";
    document.getElementById("texto").reset();
    document.getElementById("letra").focus();
}

/* 
AGREGANDO LA FUNCIÓN START AL EVENTO DEL BOTON */
var btnIniciar = document.getElementById("btnPlay");
btnIniciar.addEventListener("click",start);

/* DEFINIENDO FUNCIÓN PARA REEMPLAZAR LAS LETRAS POR GUIONES */
String.prototype.replaceAt = function(index, character) { 
    return this.substring(0, index) + 
    character + this.substring(index+character.length); 
    }

/* DEFINIENDO FUNCIÓN PARA CAPTURAR LA TECLA OPRIMIDA */
function capturarLetra(){
    var letra = document.getElementById("letra").value.toUpperCase();

    for(const i in palabraElejida){
        if(letra == palabraElejida[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);
            document.getElementById("texto").reset();
           
        }

        if (palabraElejida.indexOf(letra)<0) {
            letrasFallidas.push(letra);
            document.getElementById("texto").reset();
        } 
        
    }
    
    document.getElementById("output").innerHTML = palabraConGuiones;
    var sinDuplicados = [...new Set(letrasFallidas)].join(" "); 
    document.getElementById("fallos").innerHTML = sinDuplicados;


    if (palabraConGuiones.indexOf("_")<0) {
        
        document.getElementById("win").style.display = "block";
        document.getElementById("texto").style.display = "none";;

    }
    switch (sinDuplicados.length) {
        case 1:
        document.getElementById("img1").style.display = "block";
        break;
        case 3:
        document.getElementById("img2").style.display = "block";
        break;
        case 5:
        document.getElementById("img3").style.display = "block";
        break;
        case 7:
        document.getElementById("cabeza").style.display = "block";
        break;
        case 9:
        document.getElementById("tronco").style.display = "block";
        break;
        case 11:
        document.getElementById("pDer").style.display = "block";
        break;
        case 13:
        document.getElementById("pIzq").style.display = "block";
        break;
        case 15:
        document.getElementById("bDer").style.display = "block";
        alert("Te queda un ultimo intento!!")
        break;
        case 17:
        document.getElementById("bIzq").style.display = "block";
        document.getElementById("lose").style.display = "block";
        document.getElementById("texto").style.display = "none";

        break;
        default:
            break;
    } 
 
}

/* AGREGANDO LA FUNCIÓN CAPTURAR LETRA AL EVENTO OPRIMIR LETRA */
document.addEventListener("keyup",capturarLetra);

/* DEFINIENDO FUNCIÓN NUEVA PALABRA PARA HACER VISIBLE ESTA OPCIÓN */
function nuevaPalabra() {
    document.getElementById("new").style.display = "block";
    document.getElementById("botones1").style.display = "none";
    document.getElementById("textoNuevo").focus();
    document.getElementById("textoNuevo").value = "";
}

/* AGREGANDO LA FUNCIÓN NUEVA PALABRAAL EVENTO DEL BOTON */
let btnPalabraNueva = document.getElementById("btnAdd");
btnPalabraNueva.addEventListener("click", nuevaPalabra);


/* 
AÑADIENDO FUNCIÓN PARA RENDIRSE Y VOLVER AL PANEL PRINCIPAL AL EVENTO DEL BOTON */
var btnReiniciar = document.getElementById("btnRendir");
btnReiniciar.addEventListener("click", () =>{
    document.getElementById("btnPlay").style.display = "block";
    document.getElementById("btnAdd").style.display = "block";
    document.getElementById("botones1").style.display = "block";

    document.getElementById("canvas").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("read").style.display = "none";
    document.getElementById("btnJuego").style.display = "none";
    document.getElementById("win").style.display = "none";
    document.getElementById("lose").style.display = "none";
});

/* 
AÑADIENDO FUNCIÓN PARA CAMBIAR LA PALABRA A ADIVINAR AL EVENTO DEL BOTON */
let btnCambiarPalabra = document.getElementById("btnCambiar");
btnCambiarPalabra.addEventListener("click", () =>{
    var nuevaPalabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraElejida = nuevaPalabra;
    var nuevaPalabraGuiones =  palabraElejida.replace(/./g, "_ ");
    palabraConGuiones = nuevaPalabraGuiones;
    document.getElementById("win").style.display = "none";
    document.getElementById("lose").style.display = "none";
    document.getElementById("texto").style.display = "block";
    document.getElementById("output").innerHTML = palabraConGuiones;
    var nuevasLetrasFallidas = [];
    document.getElementById("fallos").innerHTML = nuevasLetrasFallidas;
    letrasFallidas=nuevasLetrasFallidas;
    alert("Tu palabra fue cambiada, intenta adividar la palabra")

    

    document.getElementById("img1").style.display =   "none";
    document.getElementById("img2").style.display =   "none";
    document.getElementById("img3").style.display =   "none";
    document.getElementById("cabeza").style.display = "none";
    document.getElementById("tronco").style.display = "none";
    document.getElementById("pDer").style.display =   "none";
    document.getElementById("pIzq").style.display =   "none";
    document.getElementById("bDer").style.display =   "none";
    document.getElementById("bIzq").style.display =   "none";
    document.getElementById("letra").focus();
});
