let filtrar = document.getElementById("button1")
let removerfiltros = document.getElementById("button2");

let pet_info_especie = document.getElementsByClassName("pet-info-especie");
let pet_info = document.getElementsByClassName("pet-info")

let i_len = pet_info_especie.length;
let i;
let j;

filtrar.addEventListener("click", function () {
    // Define o filtro
    let estado = document.getElementById("estado").value;
    let cidade = document.getElementById("cidade").value;
    let porte = document.getElementById("porte").value;
    let especie = document.getElementById("especie").value;
    let genero = document.getElementById("genero").value;

    let filtro = [estado, cidade, porte, especie, genero];

    if (filtro[3] === "Cães"){
        filtro[3] = "Cachorro"
    }
    if (filtro[3] === "Gatos"){
        filtro[3] = "Gato"
    }
    if (filtro[3] === "Aves"){
        filtro[3] = "Ave"
    }

    filtro = filtro.filter(e => e !== "Selecione");
    console.log(filtro)

    // Testa o filtro em cada pet
    for (i = 0; i < i_len; i++){
        let info = pet_info[i].textContent

        let id = pet_info_especie[i].parentElement.parentElement.id
        let conteudo = document.getElementById(id)

        for (j = 0; j < filtro.length; j++){

            if (info.includes(filtro[j])){
                conteudo.style.display = "";
            }else{
                conteudo.style.display = 'none';
            }
        }
    }

})

removerfiltros.addEventListener("click", function (){
    for (i = 0; i < i_len; i++) {
        let id = pet_info_especie[i].parentElement.parentElement.id
        let conteudo = document.getElementById(id)
        conteudo.style.display = ""
    }
})