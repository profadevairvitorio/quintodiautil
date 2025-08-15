# Calculadora do 5º Dia Útil

Este é o repositório do projeto da Calculadora do 5º Dia Útil, uma ferramenta web simples e eficiente para ajudar usuários a descobrir a data exata do quinto dia útil de qualquer mês, considerando feriados nacionais e estaduais.

**[Acesse a versão online aqui](https://profadevairvitorio.github.io/quintodiautil/)**

![Screenshot do Projeto](assets/img/img_1.png)

## Funcionalidades

- **Cálculo Preciso:** Determina o 5º dia útil com base no calendário, descontando sábados, domingos e feriados.
- **Feriados Nacionais e Estaduais:** Utiliza a [BrasilAPI](https://brasilapi.com.br/) para obter a lista de feriados nacionais e considera feriados estaduais específicos para uma maior precisão.
- **Geolocalização (Opcional):** Detecta o estado (UF) do usuário através da API [ipwho.is](https://ipwho.is/) para aplicar automaticamente os feriados estaduais correspondentes.
- **Interface Moderna:** Design limpo, responsivo e intuitivo, construído com foco na experiência do usuário.
- **Páginas Essenciais:** Inclui todas as páginas necessárias para conformidade com o Google AdSense e para gerar confiança no usuário (Política de Privacidade, Termos de Uso, Sobre e Contato).

---

## Estrutura do Projeto

A estrutura de arquivos foi organizada para separar as responsabilidades, facilitando a manutenção e a escalabilidade do projeto.

```
/quintodiautil
│
├── index.html
│
├── assets/
│   ├── css/
│   │   └── style.css
│   └── img/
│       └── img_1.png
│
├── pages/
│   ├── contato.html
│   ├── footer.html
│   ├── politica-de-privacidade.html
│   ├── sobre.html
│   └── termos-de-uso.html
│
└── scripts/
    ├── link-manager.js
    └── script.js

```