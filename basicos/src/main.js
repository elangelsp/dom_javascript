//seleccion de elementos del DOM
const appDiv = document.getElementById("app");

//appDiv.innerText = "Hola mundo"; //texto plano
//appDiv.innerHTML = "<h1>Hola mundo</h1>" //interpreta codigo HTML

//añadir clases a un elemento del DOM
appDiv.classList.add("clase1", "clase2");


//seleccion de ClassName
const items = document.getElementsByClassName("items");
items.length; // 5

let count = 0;
for(const item of items){
    //item.textContent = `Hola amigo ${++count}`;
    item.innerText = `Hola amigo ${++count}`;
}


//seleccion por clase
const saludoP = document.querySelector(".saludo");
//traer todos por clase
const saludos = document.querySelectorAll(".saludo");

saludos.forEach((saludo) => {
    saludo.textContent = `saludo ${++count}`;
});

const miGit = document.getElementById("github");
//miGit.removeAttibute("target"); && miGit.addAttibute("target");
miGit.textContent = "Ir a mi github";