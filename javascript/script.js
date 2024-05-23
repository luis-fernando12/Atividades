// var r = 40;
// var x= r>30;
// var y= r < 60;

// var k = x && y;
// var str = "4" + "4" ;
// var a = "7";
// var b = "9";
// var g = 8.5;
// var c = parseInt(a)+ parseInt(b);
// var d = parseFloat(g)+ parseInt(b);

// console.log("idade" ,r );
// console.log( "maior que" ,x);
// console.log( "menor que" ,y);
// console.log( "entre", k);
// console.log(str);
// console.log(c);
// console.log(d);
// var numero = prompt("Escolha um numero");
// var quadrado = numero * numero;
// alert(numero + " ao quadro é igual a " + quadrado)
//     var idade = 20;
//     var altura = 1.7;
//     if 
//         (idade > 18 || altura>1.8 )
//        { console.log("pode")
//     console.log("se divirta")}
// else if (idade>=14)
//     {
//         console.log("pode")
//         console.log("somente com proteção")
        
//     }


//     else
//     {console.log("não pode");
// console.log("somente com o responsavel")    
// }

// var altura = 1.5
// var x = altura > 1.7 ? "pode" : "não pode"
// console.log(x)
// var nota1 = 4.5;
// var nota2 = 3;
// var media = (nota1 + nota2)/ 2;
// var conceito = " "

// if (media>=8) {
//     conceito= "otimo";
// }


// else if ( media>= 6) {
//     conceito= "bom"
// }



// else 
// {
// conceito="precisa melhorar";
// }
 
// console.log(media)
// console.log(conceito)

// switch (conceito)


// {case "otimo":
//  console.log("Meus parabens");


//  break;

// case "bom":
// console.log("vc esta melhorando");

// break;

// case "precisa melhorar":
// console.log("estude mais na proxima")
// break;
// default:
//     console.log("erro")
// break;

// }


// var x= 5


// for(var y = 3; y <= x; y++ ) {
//     console.log("Executando "+ y)
    
// }

    

// console.log("acabou")


// var x = 5

// while( x < 10) {
//     console.log("Excutando " + x)
//     x++
// }

// var x = Math.random()+5
// while(x<5.8) {

// console.log(x)
// x=Math.random()+5
// }
// console.log(x)
// console.log("acabou")

// var alunos= ["marcelo", "gustavo", "maria" , "vitor", "manoela", "leticia"];

// for(var x= 0; x < alunos.length; x++){
//     console.log(alunos[x])
// }

// var alunos= new Array("marcelo", "gustavo", "maria" , "vitor", "manoela", "leticia");

// for(x of alunos) {
//     console.log(x)
// }
// var alunos= new Array("marcelo", "gustavo", "maria" , "vitor", "manoela", "leticia");

// for(x in alunos) {
//     console.log(alunos[x])
// }

// function media(n1,n2) 
// {var nota1 = n1; 
// var nota2 = n2;
// var media = (nota1 + nota2)/2;
// return media

// console.log(media);
// }

// var resultado1 = media(5,5)
// var resultado2=media(7,8)
// // // media(9,6)
// // // media(8,8)
// // // media(7,6)
// console.log(resultado1 + " e " + resultado2)

// var media = function(n1, n2) {
//     return((n1+n2)/2);

// }

// var m = media(4,9)
// console.log(m)



var alunos = ["Isabela ", "Guilherme " , "Enzo"];
var notas1 =[5,6,7];
var notas2 =[10,6,2];
function media(n1,n2){
    
    return (n1+n2)/2

};

function passou(media) {
    if( media >= 6) {
   return "aprovado"}
else {
return "reprovado"
}
};

for (var x in alunos)  
    {

{var notaA = notas1[x];
var notaB = notas2[x];
var m = media (notaA, notaB);}
    
console.log(alunos[x] + 
            " - " +
            notaA + 
            " - " +
            notaB + 
            " - " +
            m + 
            " - " +
            passou (m))
        
        }