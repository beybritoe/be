# Prompt usado para gerar o site da Becla Cookies

Este é o prompt que orientou a construção deste site. Guarde-o aqui caso queira
pedir para o Claude Code recriar, ajustar o estilo, ou usar como base para
outro projeto.

---

Crie um site institucional (site vitrine, sem carrinho/pagamento) para a
**Becla Cookies**, uma marca de cookies artesanais divulgada no Instagram
(@beclacookies). O objetivo do site é apresentar a marca e os sabores, e
levar o visitante a fazer o pedido pelo WhatsApp.

**Stack:** HTML, CSS e JavaScript puros (sem framework/build step), para ser
fácil de hospedar em qualquer lugar (GitHub Pages, Netlify, Vercel estático).

**Estrutura de páginas/seções (single page com âncoras):**
1. Header fixo com logo/nome da marca, menu (Início, Sobre, Cardápio,
   Instagram, Contato) e botão de destaque "Peça no WhatsApp". Menu
   responsivo (hambúrguer no mobile).
2. Hero: headline chamativa, subtítulo curto, dois CTAs (WhatsApp e "Ver
   Cardápio"), ilustração/imagem de cookies.
3. Sobre: história curta da marca, 3-4 diferenciais (ex: artesanal,
   ingredientes selecionados, feito na hora, embalagem cuidadosa).
4. Cardápio: grade de cards por sabor, com nome, descrição curta, preço e
   botão "Pedir" que abre o WhatsApp com mensagem pré-preenchida com o nome
   do item.
5. Bloco "Siga no Instagram": grade de miniaturas + link para
   instagram.com/beclacookies, convidando a seguir o perfil.
6. Contato/rodapé: WhatsApp, Instagram, cidade/região de entrega, horário de
   funcionamento, e-mail (se houver).

**Estilo visual:** paleta quente e aconchegante (tons de creme, marrom
chocolate, caramelo/terracota, com um toque rosa suave), tipografia amigável
e arredondada para títulos, boa legibilidade no corpo do texto. Layout
mobile-first, responsivo, com bastante espaço em branco e cantos
arredondados nos cards.

**Configuração centralizada:** número de WhatsApp, cardápio (itens/preços),
cidade e horário devem ficar fáceis de editar em um único lugar (não
espalhados pelo código).

**Sem dados inventados como se fossem reais:** não incluir depoimentos de
clientes fictícios apresentados como genuínos. Usar placeholders claramente
identificados para fotos/preços reais que o dono da marca ainda precisa
enviar.
