

$(document).ready(function(){
    $("#btn").click(function(){

        var valor = $("#cep" /* ou this */ ).val(); 
        
        $.get("https://viacep.com.br/ws/" + valor + "/json/", function(dados, status){
            
            console.log(status);
            
            $("#rua").val(dados.logradouro);
            $("#bairro").val("BAIRRO - " + dados.bairro);
            $("#cidade").val("CIDADE - "+ dados.localidade);
            $("#ddd").val("DDD - "+ dados.ddd);
            $(".show").css("display","block");
        });
    });

});

var load = document.getElementById("btn1");

    load.addEventListener("click", function(){
        location.reload();
    })












// var btn = document.getElementById("btn");
// btn.addEventListener("click", function(){


       
        
//     $.get("lista.php", function(data) {
    
//         var resultado = JSON.parse(data);
       
        
//         for(var i =0; i < resultado.length; i++){
        
//            //$(".list").append("<li>"+resultado+"</li>");
//         }
//         console.log(usuarios);

// })



// var xhr = new XMLHttpRequest();
// $.ajax({
//     url: "https://jsonplaceholder.typicode.com/posts/1",
    
//   })
//     .done(function( html ) {
//         alert("carregou");
//       $( ".list" ).append( html );
//     });






