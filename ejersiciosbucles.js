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

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

do{
    let nota=parseInt(prompt("Ingrese nota del 1 al 10 Por favor"))
    if(Number(nota)<=2&&Number(nota)>=0){

        alert("Mut Defisiente")
    }else if(Number(nota)<=4&&Number(nota)>=3){
        alert("Insuficiente")
    }else if(Number(nota)<=6&&Number(nota)>=5){
        alert("Suficiente")
    }else if(Number(nota===7)){
        alert("Bien")
    }else if(Number(nota)<=9&&Number(nota)>=8){
        alert("Notable")
    }else if(Number(nota)===10){
        alert("Sobresaliente")
    }else{
        alert("Numero invalido")
    }

}while(Number(nota)>0&&Number(nota)<10);

