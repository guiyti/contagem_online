# Serviço de Contagem de Idades - Melhorado

Este serviço online permite a inserção de idades de pessoas e realiza operações com esses dados, como calcular a soma total, a quantidade de pessoas com 30 anos ou mais, a média das idades entre 40 e 50 anos e exibir uma distribuição gráfica das idades.

Além disso, o sistema armazena os dados no **localStorage** para persistência, permitindo que as idades adicionadas não sejam perdidas ao recarregar a página. Também é possível remover idades, atualizar os resultados e visualizar um histórico de entradas.

## Funcionalidades

- **Entrada de Idades**: O usuário pode digitar a idade de uma pessoa e adicionar.
- **Exibição de Resultados**: Exibe a soma das idades, a quantidade de pessoas com 30 anos ou mais e a média das idades entre 40 e 50 anos.
- **Histórico de Idades**: Mostra uma lista de todas as idades inseridas e permite removê-las.
- **Persistência com LocalStorage**: As idades são salvas no **localStorage** para não se perderem após o recarregamento da página.
- **Gráfico de Distribuição de Idades**: Um gráfico de barras exibe a distribuição das idades por faixas etárias (0-18, 19-29, 30-39, 40-50, 51+).
- **Remoção de Idades**: O usuário pode remover qualquer idade do histórico, o que atualiza automaticamente todos os cálculos e o gráfico.

## Estrutura de Arquivos

- **`index.html`**: Estrutura HTML da página, com campo de input para as idades, áreas de resultados, gráfico e histórico.
- **`styles.css`**: Estilos para a página, incluindo layout responsivo e design.
- **`script.js`**: Lógica JavaScript para adicionar idades, calcular resultados, gerenciar o histórico e renderizar o gráfico.

## Como Usar

1. **Clone ou baixe o repositório**:
   - Use `git clone https://github.com/seu-usuario/contagem-idades-melhorado.git` para clonar o repositório.

2. **Abra o arquivo `index.html` em seu navegador**:
   - Ao abrir o arquivo, você verá a interface de inserção de idades, onde pode começar a adicionar idades.

3. **Adicionar idades**:
   - Insira uma idade no campo de input e clique em **Adicionar**.
   - O sistema atualizará automaticamente os resultados e o gráfico.

4. **Remover idades**:
   - No histórico de idades, clique em **Remover** para excluir uma idade. Os resultados e o gráfico serão atualizados instantaneamente.

5. **Visualizar Gráfico**:
   - O gráfico mostra a distribuição das idades em cinco faixas etárias diferentes: 0-18, 19-29, 30-39, 40-50, 51+.
   - O gráfico é atualizado automaticamente sempre que uma nova idade é adicionada ou removida.

## Exemplos de Funcionamento

Ao adicionar as idades **25, 40, 30, 55, 45**, os resultados serão:

- **Soma de todas as idades**: 195
- **Quantidade de pessoas com 30 anos ou mais**: 3
- **Média das idades entre 40 e 50 anos**: 45.00

E o gráfico de distribuição de idades pode se parecer com isso:

- 0-18: 1 pessoa
- 19-29: 1 pessoa
- 30-39: 1 pessoa
- 40-50: 2 pessoas
- 51+: 1 pessoa

## Etapas Futuras

Esse projeto é um protótipo funcional com várias melhorias, mas há sempre espaço para mais aprimoramentos:

### 1. **Melhorar a Persistência**:
   - Implementar um backend para armazenar as idades de forma mais permanente (ex: utilizando Firebase ou um banco de dados SQL/NoSQL).

### 2. **Adicionar Mais Faixas Etárias Personalizadas**:
   - Permitir ao usuário customizar as faixas etárias para o gráfico.

### 3. **Melhorar o Layout Responsivo**:
   - Tornar a interface mais responsiva para dispositivos móveis e melhorar a experiência em telas pequenas.

### 4. **Funcionalidade de Editar Idades**:
   - Adicionar a possibilidade de editar uma idade já registrada, sem precisar remover e adicionar novamente.

### 5. **Análises e Visualizações Avançadas**:
   - Implementar outros tipos de gráficos e relatórios, como gráficos de pizza, histogramas, ou até mesmo tabelas detalhadas.

### 6. **Aprimorar a Acessibilidade**:
   - Melhorar a acessibilidade da página para usuários com deficiência, garantindo que a navegação seja fácil com leitores de tela e teclado.

## Contribuindo

Contribuições são bem-vindas! Se você tiver sugestões de melhorias, encontrar bugs ou quiser adicionar novas funcionalidades, sinta-se à vontade para abrir uma **issue** ou enviar um **pull request**.

1. Faça um fork do repositório.
2. Crie uma branch (`git checkout -b minha-nova-funcionalidade`).
3. Faça as modificações e comite (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie para o repositório remoto (`git push origin minha-nova-funcionalidade`).
5. Abra um pull request para a branch principal.

## Licença

Este projeto é licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
