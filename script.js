let idades = JSON.parse(localStorage.getItem('idades')) || []; // Carregar idades do localStorage
let chart;

function atualizarResultados() {
  // Soma de todas as idades
  const somaIdades = idades.reduce((acc, idade) => acc + idade, 0);

  // Quantidade de pessoas com 30 anos ou mais
  const qtd30 = idades.filter(idade => idade >= 30).length;

  // Média das idades entre 40 e 50 anos
  const idades40a50 = idades.filter(idade => idade >= 40 && idade <= 50);
  const media40a50 = idades40a50.length > 0 
    ? idades40a50.reduce((acc, idade) => acc + idade, 0) / idades40a50.length 
    : 0;

  // Atualizar na interface
  document.getElementById('soma-idades').textContent = somaIdades;
  document.getElementById('qtd-30').textContent = qtd30;
  document.getElementById('media-40-50').textContent = media40a50.toFixed(2);

  // Atualizar gráfico
  atualizarGrafico();
}

function atualizarGrafico() {
  const ctx = document.getElementById('grafico-idades').getContext('2d');
  const faixaEtarias = [
    { label: '0-18', count: 0 },
    { label: '19-29', count: 0 },
    { label: '30-39', count: 0 },
    { label: '40-50', count: 0 },
    { label: '51+', count: 0 },
  ];

  // Contar as idades por faixa etária
  idades.forEach(idade => {
    if (idade <= 18) faixaEtarias[0].count++;
    else if (idade <= 29) faixaEtarias[1].count++;
    else if (idade <= 39) faixaEtarias[2].count++;
    else if (idade <= 50) faixaEtarias[3].count++;
    else faixaEtarias[4].count++;
  });

  // Se o gráfico ainda não foi criado, cria ele
  if (!chart) {
    chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: faixaEtarias.map(faixa => faixa.label),
        datasets: [{
          label: 'Número de pessoas',
          data: faixaEtarias.map(faixa => faixa.count),
          backgroundColor: '#4CAF50',
          borderColor: '#388E3C',
          borderWidth: 1,
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  } else {
    // Atualiza os dados do gráfico
    chart.data.datasets[0].data = faixaEtarias.map(faixa => faixa.count);
    chart.update();
  }
}

function adicionarIdade() {
  const idadeInput = document.getElementById('idade');
  const idade = parseInt(idadeInput.value);

  if (isNaN(idade) || idade <= 0) {
    alert('Por favor, insira uma idade válida.');
    return;
  }

  // Adicionar idade
  idades.push(idade);
  localStorage.setItem('idades', JSON.stringify(idades)); // Salvar no localStorage

  // Atualizar os resultados e o histórico
  atualizarResultados();
  adicionarHistorico(idade);

  idadeInput.value = '';
  idadeInput.focus();
}

function adicionarHistorico(idade) {
  const listaHistorico = document.getElementById('historico-lista');
  const li = document.createElement('li');
  li.innerHTML = `${idade} <button onclick="removerIdade(${idade})">Remover</button>`;
  listaHistorico.appendChild(li);
}

function removerIdade(idade) {
  // Remover idade
  idades = idades.filter(i => i !== idade);
  localStorage.setItem('idades', JSON.stringify(idades)); // Atualizar no localStorage

  // Atualizar os resultados e o histórico
  atualizarResultados();
  atualizarHistorico();
}

function atualizarHistorico() {
  const listaHistorico = document.getElementById('historico-lista');
  listaHistorico.innerHTML = '';
  idades.forEach(idade => {
    adicionarHistorico(idade);
  });
}

// Carregar resultados e histórico ao carregar a página
atualizarResultados();
atualizarHistorico();
