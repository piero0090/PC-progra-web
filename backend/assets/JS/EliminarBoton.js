var modalelimnar;

const showdiv=()=>{
    modalelimnar.toggle();
}

const hidediv=()=>{
    modalelimnar.hide();
}

const main2=()=>{
    const diveliminacion=document.querySelector('#modal_eliminar');
    modalelimnar=new bootstrap.Modal(diveliminacion);
    const botn=document.getElementById('eliminarbutton');
    const b2=document.getElementById('cancelarb');

    botn.addEventListener('click',showdiv);
    b2.addEventListener('click',hidediv);
}
window.addEventListener('load',main2);