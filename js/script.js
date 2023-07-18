$(document).ready(function(){
    $('#carrossel-imagens').slick({
        autoplay:true,
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })
    
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules:{
            nome:{
                required:true,
            },
            email:{
                required:true,
            },
            telefone:{
                required:true,
            },
            mensagem:{
                required:true,
            },
            veiculoDeInteresse:{
                required:false,
            },
        },
        messages:{
            nome: 'Nome é obrigatório.',
            telefone: 'Telefone é obrigatório.',
            email: 'E-mail é obrigatório.',
            mensagem: 'Mensagem é obrigatória.',
        },
        submitHandler:function(fomr){
            console.log(form)
        },
        invalidHandler: function(evento, validator){
            let camposIncorretos = validator.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos.`);
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();
        $('#veiculoDeInteresse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
});