//Data prueba 






/**
 * @description: Crea la tabla y le añade la informacion
 * @author: AngelCM
 * @param {} data 
 * @param {} headers 
 */
const dynamicTable = (data, headers) => {
    //Creamos la tabla
    const table = document.createElement('table');
    table.id = "table-data-users";
    table.style.border = "1px solid black";
    //Creamos las cabeceras (thead)
    const thead = document.createElement('thead');
    //Creamos el tr
    const headerRow = document.createElement('tr');
    // recorremos los headers
    headers.forEach(header => {
        //Creamos th como voy necesitando
        const th = document.createElement('th');
        th.textContent = header;
        // ---------------SI QUIERO QUE AL HACER CLICK EN EL HEADER ORDENE LA TABLA----------------
        //Añado aqui la logica de ordenacion

        //añadimos el th al tr
        headerRow.appendChild(th);
    });
    //Añadimos la fila de cabeceras a la cabecera principal que es thead
    thead.appendChild(headerRow);

    // --------Creamos el tbody-------------
    const tbody = document.createElement('tbody');
    //Limpiamos la tabla
    tbody.innerHTML = "";
    //recorremos los datos
    data.forEach(user => {
        //Creamos cada tr
        const trUser = document.createElement('tr');
        //Forma vaga de insertar los datos en cada fila (falla mucho)
        trUser.innerHTML = `
        <td>${user.nombre}</td>
        <td>${user.edad}</td>
        <td>${user.email}</td>`;
        //Forma mas viable de insertar datos (bucle)

        //añadimos la fila de cada usuario al tbody
        tbody.appendChild(trUser);
    });
    //Añadimos el thead y el tbody a la tabla
    table.append(thead, tbody);
    return table;
};

export default dynamicTable;