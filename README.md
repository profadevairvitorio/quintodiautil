# Calculadora do 5º Dia Útil

Uma simples e eficiente calculadora para determinar a data do quinto dia útil de qualquer mês e ano. Ideal para quem precisa saber a data exata de pagamentos e outros compromissos que seguem o calendário comercial.

**[Acesse a versão online aqui](https://profadevairvitorio.github.io/quintodiautil/)**

## Funcionalidades

*   **Cálculo Preciso:** Determina o 5º dia útil, desconsiderando fins de semana (sábados e domingos).
*   **Feriados Nacionais:** Integra-se com a [BrasilAPI](https://brasilapi.com.br/) para obter a lista de feriados nacionais do ano selecionado, garantindo que eles não sejam contados como dias úteis.
*   **Feriados Estaduais:** Detecta automaticamente o estado do usuário (via IP) e considera os feriados estaduais para os estados de São Paulo (SP), Rio de Janeiro (RJ) e Espírito Santo (ES).
*   **Interface Intuitiva:** Permite ao usuário selecionar facilmente o mês e o ano desejado.
*   **Responsivo:** Funciona bem em diferentes tamanhos de tela.

## Como Usar

Como este é um projeto puramente front-end, não há necessidade de instalação de dependências ou de um servidor.

1.  Clone este repositório:
    ```bash
    git clone https://github.com/profadevairvitorio/quintodiautil.git
    ```
2.  Abra o arquivo `index.html` em seu navegador de preferência.

A calculadora carregará o mês e o ano atuais e exibirá o quinto dia útil. Você pode alterar os valores para fazer novos cálculos.

## Tecnologias Utilizadas

*   **HTML5**
*   **CSS3**
*   **JavaScript**
*   **APIs:**
    *   [BrasilAPI](https://brasilapi.com.br/) para feriados nacionais.
    *   [IP-API](http://ip-api.com/) para geolocalização e detecção do estado.

## Screenshot

![Screenshot da Calculadora](img.png)

## Licença

Este projeto é distribuído sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
