//*************************Início da Questão 1************************
function getInput() {
    var input = document.getElementById("userInput").value;
    //console.log("Você digitou: " + input);
    input = input.toLowerCase();
    input = input.replace(/ /g, "_");
    //console.log("Snake case: " + input);
    document.getElementById("snakeCase").innerText = "Snake case: " + input;
}
//*************************Final da Questão 1*************************

//*************************Início da Questão 2************************
function fetchJSON() {
    fetch("/objects.json")
        .then(res => res.json())
        .then(json => {
            const obj1 = json.obj1;
            const obj2 = json.obj2;

            if (compareObjects(obj1, obj2)) {
                console.log("Iguais");
                document.getElementById("compareJSON").innerText = "Os objetos dentro do JSON são iguais."
            }
            else {
                console.log("Diferentes");
                document.getElementById("compareJSON").innerText = "Os objetos dentro do JSON são diferentes."
                compareKeys(obj1, obj2);
            }
        });
}

function compareObjects(obj1, obj2) {
    const str1 = JSON.stringify(obj1);
    const str2 = JSON.stringify(obj2);

    return str1 === str2;
}

function compareKeys(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    const allKeys = new Set([...keys1, ...keys2]);

    const differentKeys = [...allKeys].filter(key => obj1[key] !== obj2[key]);

    console.log("Chaves diferentes: ", differentKeys);

    document.getElementById("printKeys").innerHTML = "As chaves do arquivo JSON que diferem são: <i>" + differentKeys.join(', ') + "</i>";

}
//*************************Final da Questão 2*************************

//*************************Início da Questão 3************************
function calculateAge() {
    const dataAtual = new Date();

    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth();
    const ano = dataAtual.getFullYear();

    var input = document.getElementById("userDate").value;
    var userDate = new Date(input);
    console.log("data: " + userDate);

    var difference = dataAtual - userDate;      // millisegundos
    difference /= (1000 * 60 * 60 * 24 * 365); // segundos * minutos * horas * dias * anos
    difference = Math.floor(difference);
    console.log("Diferença: " + difference); 
    document.getElementById("calculateAgeText").innerText = "A idade é " + difference + " anos."
}
//*************************Final da Questão 3*************************