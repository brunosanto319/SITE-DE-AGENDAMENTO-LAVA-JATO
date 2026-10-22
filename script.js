function escolherServico(servico) {
    if (servico === 1) {
        return "Lavagem Simples";
    } else if (servico === 2) {
        return "Lavagem Completa";
    } else if (servico === 3) {
        return "Lavagem com Cera";
    } else {
        return "Serviço inválido";
    }
}

function consultarValor(servico) {
    if (servico === 1) {
        return "Lavagem Simples\nValor: R$30,00";
    } else if (servico === 2) {
        return "Lavagem Completa\nValor: R$50,00";
    } else if (servico === 3) {
        return "Lavagem com Cera\nValor: R$70,00";
    } else {
        return "Serviço inválido";
    }
}

function verificarHorario(horario) {
    if (!(horario < 8 || horario > 17)) {
        return true;
    } else {
        return false;
    }
}

function fazerAgendamento() {
    // Pergunte o nome do cliente
    let cliente = prompt("Digite o nome do cliente:");
    let placaDoVeiculo = prompt("")
    let modeloDoVeiculo
    let corDoVeiculo
    let diaDesejado
    let horario
    // Pergunte a placa, o modelo e a cor do veículo

    // Pergunte o código do serviço e converta com Number

    // Pergunte o dia desejado

    // Pergunte o horário e converta com Number

    // Chame escolherServico e guarde o retorno

    // Chame consultarValor e guarde o retorno

    // Chame verificarHorario e guarde o retorno

    let situacao;

    if (/* horário permitido e serviço válido */) {
        situacao = "Agendamento confirmado";
    } else {
        situacao = "Não foi possível realizar o agendamento";
    }

    // Monte o comprovante usando concatenação e \n

    // Mostre o comprovante no console

    // Mostre o comprovante com alert
}

