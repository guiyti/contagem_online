let idades = []; // Array para armazenar as idades

function adicionarIdade() {
  const idadeInput = document.getElementById('idade');
  const idade = parseInt(idadeInput.value);

  if (isNaN(idade) || idade < 0) {
    alert('Por favor, insira uma idade válida.');
    return;
  }

  // Adicionar a idade no array
  idades.push(idade);

  // Atualizar os resultados
  atualizarResultados();

  // Limpar o campo de input
  idadeInput.value = '';
  idadeInput.focus();
}

function atualizarResultados() {
  const somaIdades = idades.reduce((acc, idade) => acc + idade, 0);
  const qtd30 = idades.filter(idade => idade >= 30).length;
  const idades40a50 = idades.filter(idade => idade >= 40 && idade <= 50);
  const media40a50 = idades40a50.length > 0 
    ? idades40a50.reduce((acc, idade) => acc + idade, 0) / idades40a50.length 
    : 0;

  // Atualizar os valores na interface
  document.getElementById('soma-idades').textContent = somaIdades;
  document.getElementById('qtd-30').textContent = qtd30;
  document.getElementById('media-40-50').textContent = media40a50.toFixed(2);
}
