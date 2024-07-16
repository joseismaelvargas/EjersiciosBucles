// ?1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.




// do{
//  let edad=prompt("Escribe tu edad")
  
//     if(Number(edad)>=18){
//         alert("Puedes conducir")
//     }else if(Number(edad)<18){
//         alert("No puedes conducir")
//     }else{
//         alert("Numero invalido")
//     }
  
// } while ( Number(edad)>0);




// ?2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:


// do{
//     let nota=parseInt(prompt("Ingrese nota del 1 al 10 Por favor"))
//     if(Number(nota)<=2&&Number(nota)>=0){

//         alert("Mut Defisiente")
//     }else if(Number(nota)<=4&&Number(nota)>=3){
//         alert("Insuficiente")
//     }else if(Number(nota)<=6&&Number(nota)>=5){
//         alert("Suficiente")
//     }else if(Number(nota===7)){
//         alert("Bien")
//     }else if(Number(nota)<=9&&Number(nota)>=8){
//         alert("Notable")
//     }else if(Number(nota)===10){
//         alert("Sobresaliente")
//     }else if(Number(nota)>10){
//         alert("Numero Erroneo")
//     }else if(!Number(nota)){
//         alert("Introduce un numero valido")
//     }

// }while(Number(nota)>0&&Number(nota)<10);


//? 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// ?Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
// let guardar=[""];
// do{
//     let text=prompt("Escribe cualquier cosa")
//     guardar.push(text)
    
     
//    var confirmar=confirm("Desea seguir")//var?
// }while(confirmar)
//  document.write(`<p>las Fraces son :${guardar.join(",")}</p>`)

// ?4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos
// let suma=0 
// do{
// var num=parseInt(prompt("Escriba un numero")) 
// if(Number(num)){
//     suma+=num
//   alert("Suma el proceso....")
// }else{
//   alert("Numero ivalido")  
// }
  

// }while(num)

//     document.write(`<p>La suma es: ${suma}</p>`)


// ?5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

// El algoritmo para calcular la letra del dni es el siguiente :
    
    // El número debe ser entre 0 y 99999999
    // Debemos calcular el resto de la división entera entre el número y el número 23.
    // Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
    // Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
    // Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
    
    // Ejemplo: 
 
// do{
//  let dni=parseInt(prompt("ingrese Dni"))
//  let resto=dni%23
//  console.log(resto)
//  if(Number(dni)){
//     if(resto===0){
//         alert(dni+"T")
//     }else if(resto===1){
//         alert(dni+"R")
//     }else if(resto===2){
//         alert(dni+"W")
//     }else if(resto===3){
//         alert(dni+"A")
//     }else if(resto===4){
//         alert(dni+"G")
//     }else if(resto===5){
//         alert(dni+"M")
//     }else if(resto===6){
//         alert(dni+"Y")
//     }else if(resto===7){
//         alert(dni+"F")
//     }else if(resto===8){
//         alert(dni+"P")
//     }else if(resto===9){
//         alert(dni+"D")
//     }else if(resto===10){
//         alert(dni+"X")
//     }else if(resto===11){
//         alert(dni+"B")
//     }else if(resto===12){
//         alert(dni+"N")
//     }else if(resto===13){
//         alert(dni+"J")
//     }else if(resto===14){
//         alert(dni+"Z")
//     }else if(resto===15){
//         alert(dni+"S")
//     }else if(resto===16){
//         alert(dni+"Q")
//     }else if(resto===17){
//         alert(dni+"V")
//     }else if(resto===18){
//         alert(dni+"H")
//     }else if(resto===19){
//         alert(dni+"L")
//     }else if(resto===20){
//         alert(dni+"C")
//     }else if(resto===21){
//         alert(dni+"K")
//     }else if(resto===22){
//         alert(dni+"E")
//     }
//     (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
//  }else{
//     var invalido=confirm("Escriva un numero valido");
//  }

 
// }while(invalido)




// ?6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

    // 1
    // 22
    // 333
    // 4444
    // 55555
    // 666666
    // …….
// let num=30
// for(i=1;i<=num;i++){
//     document.write(`<h4>${String(i).repeat(i)}</h4><br>`)
// }
//? 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// let  number=parseInt(prompt("Escriba un numero no mayor de 50"))
// let limite=50


// for(i=number;i<=limite;i--){
//     if(number>50){
//         alert("Numero invalido ES mayor de 50")
//     }else{
//         document.write(`<h4>${String(i).repeat(i)}</h4><br>`)   
    
//     }
    
// }
//? 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……
// let  number=parseInt(prompt("Escriba un numero no mayor de 50"))


// for(i=1;i<=number;i++){
//     if(number>50){
//         alert("Numero invalido ES mayor de 50")
//     }else{
//         document.write(`<h4>${String(i).repeat(i)}</h4><br>`)   
    
//     }
    
// }
//? 9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

// let num=500
// for(i=1;i<=num;i++){
//     let string=String(i)
//     if(i%5===0){
  
//         document.write(`<h4>${i}<h4><br>-------------------------------------------`)
//     }else{
//             if(i%4===0){
//          document.write(`<h4>${string} (Es multiplo de 4)</h4>`)  
//     }else if(i%9===0){
//         document.write(`<h4>${string} (Es multiplo de 9)</h4>`) 
//     }else{
//         document.write(`<h4>${string}</h4>`) 
//     }  
//     }
    
     
 

// }
// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
// const filas=parseInt(prompt("ingrese filas"))
// const column=parseInt(prompt("ingrese columnas"))
// let total=filas*column;


// document.write(`<table><tbody>`)

  
// for(let ifilas=1;ifilas<=filas;ifilas++){
//   document.write(`<tr>`)
// for (let icolumnas=1;icolumnas<=column;icolumnas++){
//     document.write(`<td>${total}</td>`)
//     total--;

// }
// document.write(`</tr>`)
// }
  





// document.write(`</tbody></table>`)
// !Ejercicios con Math
//? 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

//? Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
// let nombre1=prompt("Escriba su nombre")
// let edad1=parseInt(prompt("Escriba su edad"))
// let nombre2=prompt("Escriba su nombre")
// let edad2=parseInt(prompt("Escriba su edad"))
// let nombre3=prompt("Escriba su nombre")
// let edad3=parseInt(prompt("Escriba su edad"))
// const persona1 =edad1+nombre1
// const persona2=edad2+nombre2
// const persona3=edad3+nombre3
// let mayor=Math.max(edad3,edad2,edad1)
// if(mayor===edad1){
//     document.write(`<p>${nombre1}</p>`)
// }else if(mayor===edad2){
//     document.write(`<p>${nombre2}</p>`)
// }else if(mayor===edad3){
//     document.write(`<p>${nombre3}</p>`)
// }
//? 12- Realiza un script que genere un número aleatorio entre 1 y 99

// let random=Math.random()*100
// document.write(`<p>${Math.round(random)}</p>`)



// !Ejercicios con String
// ?13- Realiza un script que pida un texto y lo muestre en mayúsculas.

// let text=prompt("Escribe una frace")
// document.write(`${text.toUpperCase()}`)

//? 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

// let text=prompt("Escribe una frace")
// let dividir=text.split("")

// document.write(`${dividir.join("-")}`)

//? 15- Realiza un script que cuente el número de vocales que tiene un texto.
// const Frace=prompt("Escriba una Frace")
// const vocales="aeiouAEIOU";
// let VocalesEncontradas=0;

// for(let i=1;i<Frace.length;i++){
//     if(vocales.includes(Frace.charAt(i))){

    
//      VocalesEncontradas++

//     }
     
    
          
    
// }
// document.write(`<p>las vocales encontradas son ${VocalesEncontradas} de ${Frace}`)
//? 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
// let text=prompt("Escriba una frace")
// let dividir=text.split("")
// let unir=dividir.join("")
// document.write(`<p>${dividir.reverse()}</p>`)

//? 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
// const Frace=prompt("Escriba una Frace")

// let a=0
// let e=0
// let i=0
// let o=0
// let u=0



// for(let p=0;p<Frace.length;p++){
//     if(p="a"){
//         console.log(Frace.indexOf("a"))
//         a+=Frace.indexOf("a")
//     }
//     if(p="e"){
//         console.log(Frace.indexOf("e"))
//         e+=Frace.indexOf("e")
//     }
    
//     if(p="i"){
//         console.log(Frace.indexOf("i"))
//         i+=Frace.indexOf("i")
//     }
//     if(p="o"){
//         console.log(Frace.indexOf("o"))
//         o+=Frace.indexOf("o")
//     }
//     if(p="u"){
//         console.log(Frace.indexOf("u"))
//         u+=Frace.indexOf("u")
//     }
    
          
    
// }
// let ultimavocal=Math.max(a,e,i,o,u)
// document.write("la ultima vocal de la letra ..."+Frace+"....esta en la posicion "+ultimavocal)

