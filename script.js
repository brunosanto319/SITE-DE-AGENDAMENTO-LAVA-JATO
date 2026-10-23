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
        return "Lavagem Simples\nValor: R$70,00";
    } else if (servico === 2) {
        return "Lavagem Completa\nValor: R$150,00";
    } else if (servico === 3) {
        return "Lavagem com Cera\nValor: R$250,00";
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

function situacao(horario, servico) {
    if (horario >= 8 && horario <= 17 && servico >= 1 && servico <= 3) {
        return "Agendamento confirmado";
    } else {
        return "Não foi possível realizar o agendamento";
    }
}

function fazerAgendamento() {
    alert("Agendamento iniciado!");
    
    // Coleta de dados
    let cliente = prompt("Digite o nome do cliente:");
    let modeloDoVeiculo = prompt("Digite o modelo do veiculo:");
    let placaDoVeiculo = prompt("Digite a placa do veiculo:");
    let corDoVeiculo = prompt("Digite a cor do veiculo:");
    let servico = Number(prompt("Digite o serviço desejado?\n1-Lavagem Simples\n2-Lavagem Completa\n3-Lavagem com Cera"));
    let diaDesejado = prompt("Digite o dia desejado:");
    let horario = Number(prompt("Digite o horario desejado:\nEntre as 07:00 as 18:00"));

    let servicoEscolhido = escolherServico(servico);
    let consultarValorServico = consultarValor(servico);
    let consultarHorario = verificarHorario(horario);
    let situacaoGeral = situacao(horario, servico);

    let comprovante = "=== COMPROVANTE DE AGENDAMENTO ===\n" +
                      "Cliente: " + cliente + "\n" +
                      "Veículo: " + modeloDoVeiculo + " (" + corDoVeiculo + "), Placa: " + placaDoVeiculo + "\n" +
                      "Dia: " + diaDesejado + " às " + horario + "h\n\n" +
                      consultarValorServico + "\n\n" +
                      "Situação: " + situacaoGeral;

    console.log(comprovante);

    alert(comprovante);
}