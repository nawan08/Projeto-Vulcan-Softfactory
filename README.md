# Projeto-Vulcan-Softfactory

# Projeto Vulcan - SoftFactory

## Integrante

- Nawan Oliveira Santos

---

# Descrição dos Arquivos do Projeto Vulcan

## motor.js

O arquivo motor.js é responsável pelo controle da velocidade do braço robótico. Nele foi criada a função verificarMotor, que recebe a velocidade atual do equipamento e a aceleração aplicada.

A função soma esses dois valores para obter a velocidade final do robô. Em seguida, é utilizada uma estrutura condicional (if/else) para verificar se essa velocidade está dentro do limite de segurança definido pelo sistema.

Se a velocidade final for menor ou igual a 100, a função retorna a mensagem "Sistema Seguro".

Caso o valor ultrapasse esse limite, retorna "ALERTA DE SOBRECARGA".

Ao final do arquivo, a função é exportada utilizando module.exports, permitindo sua utilização em outros módulos do projeto.

---

## sensores.js

O arquivo sensores.js realiza o monitoramento da temperatura do robô industrial.

A função verificarTemperatura recebe um vetor contendo cinco leituras dos sensores térmicos. Utilizando um laço de repetição for, todos os valores são percorridos e somados para que seja possível calcular a média das temperaturas registradas.

Após o cálculo da média, o sistema verifica sua condição:

- Se a média for superior a 70°C, retorna "LIGAR RESFRIAMENTO".
- Caso contrário, retorna "Sistema Normal".

Assim como os demais módulos, a função também é exportada para ser utilizada pelo sistema principal.

---

## app.js

O arquivo app.js é o módulo principal do projeto e funciona como um painel de monitoramento do robô.

Inicialmente, são importadas as funções desenvolvidas nos outros arquivos utilizando o comando require. Em seguida, são definidos valores de teste para simular o funcionamento do equipamento.

O sistema executa:

1. A verificação da velocidade do motor;
2. A análise da temperatura dos sensores;
3. A exibição dos resultados no terminal.

As informações são apresentadas por meio de comandos console.log, formando um relatório simples com os dados operacionais do robô, incluindo velocidade, status de funcionamento, temperatura média e necessidade de resfriamento.

Dessa forma, o arquivo integra todos os módulos desenvolvidos pela equipe em um único sistema.

---

## README.md

O arquivo README.md contém a documentação do Projeto Vulcan.

Nele estão reunidas as principais informações do projeto, como:

- Nome do projeto;
- Integrantes da equipe;
- Objetivo da atividade;
- Tecnologias utilizadas;
- Instruções de execução.

Além de servir como documentação, esse arquivo também é utilizado para a prática de controle de versão. Durante a atividade, todos os integrantes realizam alterações no README simultaneamente, permitindo a simulação de conflitos de merge e o treinamento da resolução desses conflitos, uma situação comum em projetos colaborativos.

---

## Tecnologias Utilizadas

- JavaScript
- Node.js
- Git
- GitHub

---

## Como Executar

1. Clonar o repositório:

bash
git clone LINK_DO_REPOSITORIO


2. Entrar na pasta do projeto:

bash
cd projeto-vulcan-softfactory


3. Executar o sistema:

bash
node app.js


---

## Autor

Nawan Oliveira Santos
