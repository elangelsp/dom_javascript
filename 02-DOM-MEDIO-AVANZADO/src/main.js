//import divForm from './componentes/divForm.js';
import dynamicTable from './componentes/dynamicTable.js';

const data = [
    {nombre: 'Angel', edad: 25, email: 'angel@gmail.com' },
    {nombre: 'Maria', edad: 30, email:'maria@gmail.com' },
    {nombre: 'Pedro', edad: 28, email: 'pedro@gmail.com' },
    {nombre: 'Juan', edad: 32, email: 'juan@gmail.com' },
];


document.addEventListener('DOMContentLoaded', () => {
    //--------------Ejercicio contenedor formularios test email
    
    //-------------------Crear una tabla dinamicamente-----------------------
    //Dado un array de objetos con datos de usuarios (nombre, edad y email) genera una tabla dinamicamente en la que cada fila es un usuario. Añade funcionalidad para ordenar las filas por nombre y edad haciendo click en los encabezados de la columna correspondiente. Utilizando la lista de usuarios añadir un input para queha medida que busquemos filtre los usuarios por su nombre en tiempo real.
     
    dynamicTable(data, ['Nombre', 'edad', 'email']);

    //Crear una lista de elementos (li) que al hacer el boton click sobr ellos debe aparecer un modal para confirmar si eliminar o no eliminar (si elimina desaparece el modal)
    



});