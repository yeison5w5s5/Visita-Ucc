let long1,lati1;
window.onload = function () {
    $('#onload').fadeOut();
    $('body').removeClass('hidden')
}
function edi_1(params) {
    swal("Edificio Facultad de Derecho")
}
function edi_2() {
    swal("Auditorio intermedio")
}
function edi_3() {
    swal("Espacios Bienestar Institucional")
}
function edi_4() {
    swal("EDificio CEIN y Oficina Posgrados")
}
function edi_5() {
    swal("Auditorio Mayor")
}
function edi_6() {
    swal("Sala de profesores Rymel Serrano")
}
function edi_7() {
    swal("Biblioteca")
}
function edi_8() {
    swal("Aceso principal")
}
function edi_9() {
    swal("Ambientes practicos de aprendizaje")
}
function edi_10() {
    swal("Aulas piso 2,AMI, Plazoleta de Estudiantes")
}
function edi_11() {
    swal("Facultades piso 6. Salas Aundiovisuales.")
}
function edi_12() {
    swal("Laboratorios piso 7,salas de informatica, Oficina E-Learning")
}
function edi_13() {
    swal("Auditorio meno piso ?")
}
$(document).ready(function () {
    //Click al boton para pedir permisos
    $("#pedirvan").click(function () {
        //Si el navegador soporta geolocalizacion
        if (!!navigator.geolocation) {
            //Pedimos los datos de geolocalizacion al navegador
            navigator.geolocation.getCurrentPosition(
                    //Si el navegador entrega los datos de geolocalizacion los imprimimos
                    function (position) {
                        $("#nlat").text(position.coords.latitude);
                        $("#nlon").text(position.coords.longitude);
                        long1=position.coords.longitude
                        lati1=position.coords.latitude
                        donde()
                    },
                    //Si no los entrega manda un alerta de error
                    function () {
                        window.alert("nav no permitido");
                    }
            );
        }
    });

});
function mapaB() {
    let mapa=`<<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.5660116247059!2d-73.11370951772471!3d7.129696410513895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e681567bb4fc451%3A0x5d4c798f40057a74!2sUniversidad%20Cooperativa%20De%20Colombia!5e1!3m2!1ses!2sco!4v1662999713239!5m2!1ses!2sco" 
    class="mapaG"
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"></iframe>`
    document.getElementById("map").innerHTML = mapa;
}
function mapaG() {
    let mapa=`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487.9282777652924!2d-73.06892135620032!3d6.991952070345988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e68479e91f3e525%3A0x64adf40c7cda3478!2sUCC%20sede%20Guatiguar%C3%A1!5e1!3m2!1ses!2sco!4v1662999890357!5m2!1ses!2sco" 
    class="mapaG"
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
    </iframe>`
    document.getElementById("map").innerHTML = mapa;
}
function mapaM() {
    let mapa=`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d820.7740001975999!2d-73.07777046035413!3d6.888877705126419!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x826d9741e677aa48!2sUniversidad%20Cooperativa%20de%20Colombia!5e1!3m2!1ses!2sco!4v1663000012194!5m2!1ses!2sco" 
    class="mapaG"
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
    </iframe>`
    document.getElementById("map").innerHTML = mapa;
}
function mapaR() {
    let mapa=`<iframe src="https://www.google.com/maps/embed?pb=!1m34!1m12!1m3!1d126720.36544797408!2d-73.15055788915713!3d7.007937538602057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m19!3e0!4m5!1s0x8e681567bb4fc451%3A0x5d4c798f40057a74!2sUniversidad%20Cooperativa%20De%20Colombia%2C%20Bucaramanga%2C%20Santander!3m2!1d7.1291131!2d-73.1132507!4m5!1s0x8e68479e91f3e525%3A0x64adf40c7cda3478!2sUCC%20sede%20Guatiguar%C3%A1%2C%20km%202%20Via%20Guatiguar%C3%A1%2C%20Piedecuesta%2C%20Santander!3m2!1d6.9918163!2d-73.0689294!4m5!1s0x8e6849572ea2d9d5%3A0x826d9741e677aa48!2sUniversidad%20Cooperativa%20de%20Colombia!3m2!1d6.889547299999999!2d-73.0772533!5e0!3m2!1ses!2sco!4v1662999379682!5m2!1ses!2sco" 
    class="mapaG"
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
    </iframe>`
    document.getElementById("map").innerHTML = mapa;
}

function donde() {
    long1=-73.1134027
    lati1=7.1289299
    if   (7.128389<lati1<7.131028 && -73.113300>long1>-73.114857 ){
        alert("Estas en la UCC campus Bucaramanga")
    }
    else if (6.992041>lati1>6.991317 && -73.069503<long1<-73.068210){
        alert("Estas en la UCC guatiguara")
    }
    else if( 6.890265>lati1>6.886356  &&  -73.075897 >long1>-73.080339){
        alert("Estas en la UCC mesa de los Santos")
        console.log("Estas en la UCC mesa de los Santos")
    }
}
function donde1() {
    long12=-73.1134027
    lati12=7.1289299
    if( 6.890265<lati12<6.886356  &&  -73.075897<long12<-73.080339){
        alert("Estas en la UCC mesa de los Santos")
    }
    else if (6.991317<lati12<6.992041 && -73.068210>long12>-73.069503){
        alert("Estas en la UCC guatiguara")
    }
    else if   (7.128389<lati12<7.131028 && -73.113300>long12>-73.114857 ){
        alert("Estas en la UCC campus Bucaramanga")
    }
}
//firebase deploy --only hosting

