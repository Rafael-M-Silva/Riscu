# Riscu

Site de portfólio da Riscu, estúdio de design gráfico criado por Erik Silva. A implementação web é de Rafael Mauricio e apresenta projetos, informações sobre o estúdio e uma página de contato.

**Demonstração informada no repositório:** [riscu.vercel.app](https://riscu.vercel.app)

## Sobre o projeto

A página inicial mostra trabalhos de identidade visual, incluindo Galopão, Top Credit e Esmagados. Cada trabalho tem uma página própria com imagens. Há também páginas “Sobre” e “Contato”.

## Funcionalidades

- Navegação entre páginas e galeria de projetos.
- Menu adaptado para telas menores.
- Formulário de contato com habilitação do botão conforme o preenchimento dos campos.

O JavaScript do formulário valida o preenchimento no navegador; não há backend nem rotina de envio de mensagens no repositório.

## Tecnologias e estrutura

HTML, CSS e JavaScript sem etapa de build. O projeto inclui fontes e imagens locais.

~~~text
index.html         página inicial e seleção de projetos
pages/             projetos, sobre e contato
css/               estilos de cada seção
js/script.js       menu para telas menores
js/contato.js      validação do formulário
img/               imagens dos projetos
assets/ e fonts/   identidade visual e tipografia
~~~

## Como executar

~~~bash
git clone https://github.com/Rafael-M-Silva/Riscu.git
cd Riscu
~~~

Abra <code>index.html</code> no navegador ou sirva a pasta como site estático. Para verificar a navegação, mantenha a estrutura de pastas do repositório.

## Créditos

- **Erik Silva:** criação da Riscu e trabalhos de design apresentados no portfólio, conforme a página “Sobre”.
- **Rafael Mauricio:** desenvolvimento do site, conforme os créditos no rodapé.

[GitHub de Rafael](https://github.com/Rafael-M-Silva) · [LinkedIn](https://linkedin.com/in/rafael-mauricio-dev/) · [Bigode Ensina](https://bigodeensina.com.br/)
