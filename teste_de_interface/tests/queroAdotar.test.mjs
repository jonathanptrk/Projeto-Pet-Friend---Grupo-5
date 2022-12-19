import { assert } from "chai"

describe(`Quero adotar teste`, function () {

    it(`Validar o cadastro do quero adotar`, async function () {
        // Comando para abrir o navegador na tela desejada
        // Informar o ip local da maquina para rodar o teste
        await browser.url(`http://127.0.0.1:5500/pages/queroAdotar.html`)

        // Mapeando os elementos da tela
        let lista_todas_as_especies = await $(`#especie`)
        let lista_genero = await $(`#genero`)
        let lista_porte = await $(`#porte`)
        let lista_estado = await $(`#estado`)
        let lista_cidade = await $(`#cidade`)
        let botao_filtrar = await $(`#button1`)
        let nome_pet = await $(`#pet-1 .pet-info .pet-info-nome`)
        let local_pet = await $(`#pet-1 .pet-info .pet-info-local`)
        let porte_pet = await $(`#pet-1 .pet-info .pet-info-porte`)
        let especie_pet = await $(`#pet-1 .pet-info .pet-info-especie`)
        let genero_pet = await $(`#pet-1 .pet-info .pet-info-genero`)
        // Preenchendo o formulario da tela de quero adotar
        await lista_todas_as_especies.selectByIndex(1)
        await lista_genero.selectByIndex(1)
        await lista_porte.selectByIndex(1)
        await lista_estado.selectByIndex(1)
        await lista_cidade.selectByIndex(1)
        await botao_filtrar.click()
        await botao_filtrar.scrollIntoView()

        // Validando os dados do primeiro pet filtrado para verificar 
        //se está retornando corretamente o que foi feito no filtro
        await assert(await nome_pet.getText(), 'Alice')
        await assert(await local_pet.getText(), 'DF - Brasília')
        await assert(await porte_pet.getText(), 'Grande')
        await assert(await especie_pet.getText(), 'Cachorro')
        await assert(await genero_pet.getText(), 'Macho')
    })
})

//O resultado no navegador Firefox gera um erro de sobreposição do botãoremover filtro sobrefiltrar:
// Descrição do erro: [firefox 107.0.1 MAC #0-0] Element <button id="button1" class="kd-filter-button" type="button"> is not clickable at point (1075,576) because another element <button id="button2" class="kd-filter-button" type="button"> obscures it.