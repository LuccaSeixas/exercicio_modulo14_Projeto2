$(document).ready(function(){

    $('#celular').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00', { placeholder: '___.___.___-__'});

    $('#autenticacaoCadastro').validate({
        rules: {
            nomecadastro: {
                required: true
            },
            emailcadastro: {
                required: true
            },
            celular: {
                required: true
            },
            cpf: {
                required: true
            },
            senha: {
                required: true
            },
        },
        messages: {
            nomecadastro: "Por favor, preencha seu nome completo.",
            email: "Por favor, preencha seu e-mail.",
            celular: "Por favor, preencha seu telefone.",
            cpf: "Por favor, preencha seu CPF.",
            senha: "Por favor, preencha sua senha.",
        },
        submitHandler: function(form){
            alert('Cadastro realizado com sucesso')
        }
    })
})