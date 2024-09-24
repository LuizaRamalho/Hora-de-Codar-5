let saldo = 1000; // saldo inicial
let extrato = [
  "Depósito de R$ 500",
  "Saque de R$ 200",
  "Transferência de R$ 300"
];

function erro() {
  console.log("Opção inválida. Tente novamente.");
  inicio();
}

function autenticarSenha() {
  const senha = prompt("Por favor, informe sua senha:");
  if (senha !== "3589") {
    console.log("Senha incorreta. Tente novamente.");
    autenticarSenha();
  }
}

function verSaldo() {
  autenticarSenha();
  console.log(`Seu saldo é: R$ ${saldo}`);
  inicio();
}

function verExtrato() {
  autenticarSenha();
  console.log("Extrato:");
  extrato.forEach(item => console.log(item));
  inicio();
}

function sacar() {
  autenticarSenha();
  const valor = parseFloat(prompt("Informe o valor a ser sacado:"));
  if (valor <= 0 || valor > saldo) {
    console.log("Operação não autorizada.");
  } else {
    saldo -= valor;
    extrato.push(`Saque de R$ ${valor}`);
    console.log(`Saque de R$ ${valor} realizado com sucesso.`);
  }
  inicio();
}

function depositar() {
  autenticarSenha();
  const valor = parseFloat(prompt("Informe o valor a ser depositado:"));
  if (valor <= 0) {
    console.log("Operação não autorizada.");
  } else {
    saldo += valor;
    extrato.push(`Depósito de R$ ${valor}`);
    console.log(`Depósito de R$ ${valor} realizado com sucesso.`);
  }
  inicio();
}

function transferir() {
  autenticarSenha();
  const numeroConta = prompt("Informe o número da conta para a transferência (apenas números):");
  if (isNaN(numeroConta)) {
    console.log("Número da conta inválido. Tente novamente.");
    return transferir();
  }
  
  const valor = parseFloat(prompt("Informe o valor a ser transferido:"));
  if (valor <= 0 || valor > saldo) {
    console.log("Operação não autorizada.");
  } else {
    saldo -= valor;
    extrato.push(`Transferência de R$ ${valor} para a conta ${numeroConta}`);
    console.log(`Transferência de R$ ${valor} para a conta ${numeroConta} realizada com sucesso.`);
  }
  inicio();
}

function inicio() {
  console.log("\nMenu:");
  console.log("1. Saldo");
  console.log("2. Extrato");
  console.log("3. Saque");
  console.log("4. Depósito");
  console.log("5. Transferência");
  console.log("6. Sair");

  const opcao = parseInt(prompt("Escolha uma opção:"));

  switch (opcao) {
    case 1:
      verSaldo();
      break;
    case 2:
      verExtrato();
      break;
    case 3:
      sacar();
      break;
    case 4:
      depositar();
      break;
    case 5:
      transferir();
      break;
    case 6:
      const nome = prompt("Qual é o seu nome?");
      console.log(`${nome}, foi um prazer ter você por aqui!`);
      break;
    default:
      erro();
  }
}

// Início do programa
const nome = prompt("Qual é o seu nome?");
console.log(`Olá ${nome}, é um prazer ter você por aqui!`);
inicio();
