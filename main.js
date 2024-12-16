$(document).ready(function () {
    // Inicializa o carrossel de imagens
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });

    // Máscara para o campo de telefone
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    });

    // Máscara para o campo de CPF
    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });

    // Máscara para o campo de CEP
    $('#cep').mask('00000-000', {
        placeholder: '12345-678'
    });

    // Validação do formulário
    $('#form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        },
        messages: {
            nome: "Por favor, preencha o nome.",
            email: {
                required: "Por favor, preencha o e-mail.",
                email: "Digite um e-mail válido."
            },
            telefone: "Por favor, preencha o telefone.",
            endereco: "Por favor, preencha o endereço.",
            cep: "Por favor, preencha o CEP.",
            cpf: "Por favor, preencha o CPF."
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (event, validator) {
            alert("Por favor, preencha todos os campos obrigatórios para prosseguir com a compra!");
        }
    });
});

