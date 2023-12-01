$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00.000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true
            },
            cpf: {
                required: true
            },
            rua: {
                required: true
            },
            numero: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome completo',
            telefone: 'Por favor, insira seu telefone',
            email: 'Por favor, insira seu e-mail',
            cpf: 'Por favor, insira seu CPF',
            rua: 'Por favor, insira seu endereço',
            numero: 'Por favor, insira seu endereço',
            cep: 'Por favor, insira seu nome CEP'
        }
    })
})