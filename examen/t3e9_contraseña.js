function mostrarFechaHeader() {
    let hoy = new Date();
    let meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
    let cont = document.getElementById("calendarioHeader");
    cont.innerHTML = "<div>"+hoy.getDate()+"</div><div>"+meses[hoy.getMonth()]+"</div><div>"+hoy.getFullYear()+"</div>";
}

function abrirAvisoLegal() {
    let v = window.open("", "avisoLegal", "width=500,height=400,scrollbars=no,toolbar=no,location=no,menubar=no,status=no,resizable=no");
    v.document.writeln("<h2>Aviso legal</h2><p>Asociación Deportiva Castro Urdiales.</p><p>Información legal...</p><button onclick='window.close()'>Cerrar</button>");
}

function abrirPopupBienvenida() {
    let v = window.open("", "bienvenida", "width=350,height=200,scrollbars=no,toolbar=no,location=no,menubar=no,status=no,resizable=no");
    v.document.writeln("<p>Bienvenido/a a la web.</p><button onclick='window.close()'>Cerrar</button>");
}

function tieneLongitudValida(c){return c.length>=8 && c.length<=16;}
function tieneMayuscula(c){return /[A-Z]/.test(c);}
function tieneMinuscula(c){return /[a-z]/.test(c);}
function tieneNumero(c){return /[0-9]/.test(c);}
function tieneSimboloValido(c){return /[-_@#$%&]/.test(c);}

function t3e9_contraseña(e){
    e.preventDefault();
    let c = document.getElementById("contrasena").value;
    if(!c){alert("Introduce una contraseña.");return false;}

    if(tieneLongitudValida(c)&&tieneMayuscula(c)&&tieneMinuscula(c)&&tieneNumero(c)&&tieneSimboloValido(c)){
        alert("Contraseña segura.");
    } else {
        alert("Contraseña no segura.");
    }
    return false;
}

window.onload = function(){
    mostrarFechaHeader();
    setTimeout(abrirPopupBienvenida,10000);
};