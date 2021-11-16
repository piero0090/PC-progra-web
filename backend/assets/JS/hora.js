var fecha=new Date();
var hora=new Date();


var dia_sem=[
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado"
]

var mes=[
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Setiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
]

const showfecha=()=>{
    const give_fecha="Hoy es "+dia_sem[fecha.getDay()]+", "+fecha.getDate()+
    " de "+mes[fecha.getMonth()]+" del "+fecha.getFullYear();
    const fechaa=document.querySelector('#fecha');
    fechaa.innerHTML=give_fecha;

}

const showhora=()=>{
    var give_hora=hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds();
    const horaa=document.querySelector('#hora');
    horaa.innerHTML=give_hora;
}

// const showdiv=()=>{
//     modalelimnar.toggle();
// }

const  main=()=>{
    
    
    // const diveliminacion=document.querySelector('#modal_eliminar');
    // modalelimnar=new bootstrap.Modal(diveliminacion);
    // const botn=document.getElementById('eliminarbutton');

    showfecha();
    showhora();
    
    // botn.addEventListener('click',showdiv);

}
window.addEventListener('load',main);
