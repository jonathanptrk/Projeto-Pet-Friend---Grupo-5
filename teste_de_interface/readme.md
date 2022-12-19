# Documentação dos testes

Os testes foram criados com o framework do webdriverIO para testes de interface web.

1. Acessamos o site do framework https://webdriver.io/docs/why-webdriverio para conseguir instalar e criar os testes.
2. Criamos uma pasta chamada 'teste_de_interface' para conter nossos testes
3. Criamos o teste do filtro da tela de quero adotar para validar se o filtro foi realizado e se o retorno é esperado.
   1. Mapeamos os botoes da tela para executar o teste e usamos uma biblioteca chamada 'chai' para fazer a validação dos testes
4. Executamos o comando do 'npm run wdio' coforme o framework pede para rodar os testes.
5. O retorno no terminal do projeto foi:
```
"spec" Reporter:
------------------------------------------------------------------
[chrome 108.0.5359.98 mac os x #0-0] Running: chrome (v108.0.5359.98) on mac os x
[chrome 108.0.5359.98 mac os x #0-0] Session ID: e3695c57583a3083d9253e412bb9d75f
[chrome 108.0.5359.98 mac os x #0-0]
[chrome 108.0.5359.98 mac os x #0-0] » /teste_de_interface/tests/queroAdotar.test.js
[chrome 108.0.5359.98 mac os x #0-0] Quero adotar teste
[chrome 108.0.5359.98 mac os x #0-0]    ✓ Validar o cadastro do quero adotar
[chrome 108.0.5359.98 mac os x #0-0]
[chrome 108.0.5359.98 mac os x #0-0] 1 passing (3.7s)


Spec Files:      1 passed, 1 total (100% completed) in 00:00:05 
```

IMPORTANTE.: Para baixar as dependencias do projeto é preciso rodar o comando 'npm install' e deve ter o node.js instalado na maquina.

## Passo a passo para executar o teste 

IMPORTANTE ! É NECESSÁRIO TER O FIREFOX INSTALADO PARA A EXECUÇÃO DO TESTE. 

1. Para iniciar o teste abra a pasta Pages e clique no arquivo homePage.html.
2. Após verifique se a opção GoLive está disponível, execute-a. 
3. Após o navegador ser aberto copie a URL com o IP e porta que você está utilizando ex: http://127.0.0.1:5500/
4. Verifique se o IP e porta é o correto que está no arquivo de teste no comando browser Ex:  await browser.url(`http://127.0.0.1:5500/pages/queroAdotar.html`).
5. É necessário que o Node.js esteja instalado na máquina. Estamos usando a versão v18.12.1 .
6. Dentro da pasta do projeto (PA.PET-FRIEND.FRONTEND) execute o comando: 'npm install' 
7. E agora se todos os passos acima tiverem sido realizados execute o comando 'npm run wdio' .

O retorno do teste no firefox foi: 

```
 "spec" Reporter:
------------------------------------------------------------------
[firefox 107.0.1 MAC #0-0] Running: firefox (v107.0.1) on MAC
[firefox 107.0.1 MAC #0-0] Session ID: 5439917a-804f-4a23-9c07-abf6ad326c87
[firefox 107.0.1 MAC #0-0]
[firefox 107.0.1 MAC #0-0] » /teste_de_interface/tests/queroAdotar.test.mjs
[firefox 107.0.1 MAC #0-0] Quero adotar teste
[firefox 107.0.1 MAC #0-0]    ✖ Validar o cadastro do quero adotar
[firefox 107.0.1 MAC #0-0]
[firefox 107.0.1 MAC #0-0] 1 failing (3.3s)
[firefox 107.0.1 MAC #0-0]
[firefox 107.0.1 MAC #0-0] 1) Quero adotar teste Validar o cadastro do quero adotar
[firefox 107.0.1 MAC #0-0] Element <button id="button1" class="kd-filter-button" type="button"> is not clickable at point (1075,576) because another element <button id="button2" class="kd-filter-button" type="button"> obscures it
[firefox 107.0.1 MAC #0-0] element click intercepted: Element <button id="button1" class="kd-filter-button" type="button"> is not clickable at point (1075,576) because another element <button id="button2" class="kd-filter-button" type="button"> obscures it
[firefox 107.0.1 MAC #0-0]     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)


Spec Files:      0 passed, 1 failed, 1 total (100% completed) in 00:00:25 
```
O erro é ocasionado no navegador firefox porque o botão filtrar é sobreposto pelo botão limpar filtro gerando um bug na tela. 

