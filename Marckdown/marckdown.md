# Comandos basicos do cmb

- dir
- cd
- mkdir
- cls

# Aula Marckdown

Use # para criar titulos (use ate 6 #)

# Titulo 1
## Titulo 2
### Titulo 3
#### Titulo 4
##### Titulo 5
###### Titulo 6

---

Use o sinal ( - ) ou ( * ) para criar topicos

* Topico ( * )
-  Topico ( - )

---

Use um * para deixar em italico e dois ** para deixar em negrito, e use ~~ para taxado.

*Italico*

**Negrito**

~~Taxado~~

Para criar listas numeradas use o numero seguido de um .

- item
    - item 
    - item
- item
- item
-

---
# Tabelas

| nome | email |
| -- | --: |
| Luciano | luciano@lindo.com |
| Monica | monica@sobrevivente.com |


Criando links

[Clique aqui](https://icons8.com.br/icons/set/html)


![html](foto-HTML.png)


##Javascript

Dom --> Document object Model

Window --> ETC --> Document --> history
Document --> Head --> Body
Head --> Title --> Meta --> Link
Body --> P --> H1

acessa (div > div)
pode capturar id pelo nome id , classe e teg
query = consultar
A # significa = id 
O ponto siginifica 'class'
Queryselector pega o primeiro item da lista
QueryselectorAll pega todos os itens da lista

html
  /* /* .quadrado {
            height: 100px;
            width: 100px;
            background-color: brown;
            color: white */

             <!-- <h1>Eventos</h1>
    <br>
    <div id="quadrado" class="quadrado">
    </div> -->
 javascript
    //onmouseenter="azul()"
//onmouseout="vermelho()"
//onmousedown="clicou()"
//onmouseup="soltou()"



// const div = document.getElementById('quadrado')
// div.addEventListener('mouseenter', azul )
// div.addEventListener('mouseout', vermelho )
// div.addEventListener('mousedown', clicou )
// div.addEventListener('mouseup', soltou )

// function azul(){
//     div.style.backgroundColor = 'blue'
// }
// function vermelho(){
//     div.style.backgroundColor = 'red'
// }
// function clicou(){
   
//     div.innerHTML = `
//     <ul>
//         <li> item 1 </li>
//         <li> item 2 </li>
//         <li> item 3 </li>

//     `
// }

// function soltou(){
//     div.innerText = ''
// }