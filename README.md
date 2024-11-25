# Serviço de Contagem de Idades

Este é um serviço online simples que permite a inserção de idades de pessoas e realiza algumas operações básicas com esses dados:

- **Soma de todas as idades inseridas**.
- **Quantidade de pessoas com 30 anos ou mais**.
- **Média das idades entre 40 e 50 anos**.

O serviço é composto por três arquivos principais: `index.html`, `styles.css`, e `script.js`. Ele permite que os usuários adicionem idades e visualizem os resultados em tempo real.

## Funcionalidades

1. **Entrada de Idades**: O usuário pode digitar a idade de uma pessoa no campo de input e adicionar.
2. **Exibição de Resultados**: Após cada entrada de idade, os seguintes resultados são atualizados:
   - A **soma total** das idades.
   - A **quantidade de pessoas com 30 anos ou mais**.
   - A **média das idades entre 40 e 50 anos**.
   
## Estrutura de Arquivos

- `index.html`: Contém a estrutura HTML da página, com o campo de input e as áreas para exibir os resultados.
- `styles.css`: Responsável pela estilização da página, incluindo layout e aparência.
- `script.js`: Contém a lógica de JavaScript para armazenar as idades e calcular os resultados.

## Como Usar

1. **Baixe ou clone o repositório**:
   - Use `git clone https://github.com/seu-usuario/contagem-idades.git` para clonar o repositório.
   
2. **Abra os arquivos no navegador**:
   - Abra o arquivo `index.html` diretamente no seu navegador de preferência para usar o serviço.
   
3. **Adicione idades**:
   - Digite a idade de uma pessoa no campo de input e clique em "Adicionar". Os resultados serão atualizados automaticamente abaixo.

## Exemplos de Funcionamento

- Ao adicionar as idades 25, 40, 30, 55 e 45, os resultados serão:
  - Soma de todas as idades: 195
  - Quantidade de pessoas com 30 anos ou mais: 3
  - Média das idades entre 40 e 50 anos: 45.00

## Etapas Futuras

Este é um protótipo básico e simples. Algumas melhorias e novos recursos podem ser implementados no futuro:

### 1. **Validação de Dados Mais Completa**
   - Adicionar validações mais rigorosas para entradas de idades, como garantir que os valores estejam dentro de um intervalo razoável (por exemplo, entre 0 e 120 anos).

### 2. **Persistência de Dados**
   - Armazenar as idades de forma persistente, utilizando **localStorage** ou uma base de dados (como Firebase ou MongoDB) para manter os dados mesmo após o fechamento do navegador.

### 3. **Interface de Usuário Melhorada**
   - Adicionar gráficos ou visualizações mais interativas para representar os dados, como gráficos de barras ou de linha para a soma das idades, ou um gráfico de distribuição das idades.
   - Melhorar a responsividade da página para funcionar bem em dispositivos móveis.

### 4. **Aprimorar o Cálculo da Média**
   - Adicionar a funcionalidade para calcular médias de idades em outros intervalos (por exemplo, 20-30 anos, 50-60 anos) ou até mesmo permitir que o usuário defina o intervalo de idade para o cálculo.

### 5. **Funcionalidade de Remoção de Idades**
   - Permitir que o usuário remova uma idade inserida previamente, recalculando os resultados automaticamente.

### 6. **Exportação dos Dados**
   - Implementar uma funcionalidade para exportar as idades e resultados em formatos como **CSV** ou **JSON**.

### 7. **Aprimoramento da Acessibilidade**
   - Melhorar a acessibilidade, garantindo que o site funcione bem para usuários com deficiência, como suporte a leitores de tela e navegação por teclado.

## Contribuindo

Contribuições são bem-vindas! Se você tiver sugestões de melhorias ou encontrar bugs, sinta-se à vontade para abrir uma **issue** ou submeter um **pull request**.

1. Faça um fork do repositório.
2. Crie uma branch (`git checkout -b minha-nova-funcionalidade`).
3. Commite suas alterações (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie para o repositório remoto (`git push origin minha-nova-funcionalidade`).
5. Abra um pull request.

## Licença

Este projeto é licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
