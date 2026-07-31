# Becla Cookies — site

Site vitrine (estático, sem back-end) para a Becla Cookies. Feito em HTML, CSS
e JavaScript puros — funciona abrindo o `index.html` direto ou hospedando em
qualquer serviço de site estático (GitHub Pages, Netlify, Vercel, etc).

## Como rodar localmente

Não precisa de instalação. Basta abrir `index.html` no navegador, ou (melhor,
pra funcionar 100% igual à produção) subir um servidor estático simples:

```bash
python3 -m http.server 8000
# depois acesse http://localhost:8000
```

## Onde editar o quê

Quase tudo que muda com frequência está centralizado em **`js/config.js`**:

- `whatsappNumber` / `whatsappDisplay` — número de WhatsApp para pedidos.
- `city` / `hours` — região de entrega e horário de funcionamento.
- `menu` — lista de sabores (nome, descrição, preço e, opcionalmente,
  `image` com o caminho de uma foto do produto).

O texto da seção "Sobre" e os textos fixos ficam direto no `index.html`.

## Pendências (placeholders a substituir)

- [ ] **Cardápio e preços**: os 3 primeiros sabores (Caramelo, Oreo,
  Doce de Leite com Chocolate Branco) foram baseados em fotos reais enviadas,
  mas os preços são estimativa — confirme os valores reais.
- [ ] **Fotos dos produtos**: salve os arquivos em `assets/img/products/` e
  preencha o campo `image` de cada item em `js/config.js` com o caminho
  (ex.: `"assets/img/products/caramelo.jpg"`).
- [ ] **Horário de funcionamento** (`hours` em `config.js`) — está com um
  valor de exemplo.
- [ ] **Texto "Sobre"** — o parágrafo em `index.html` (seção `#sobre`) é
  genérico, vale trocar pela história real da marca.
- [ ] **Grade "Siga no Instagram"** — os quadrados são só decorativos
  (gradiente); trocar por fotos reais do feed quando disponíveis.

## Estrutura

```
index.html
css/style.css
js/config.js     ← dados editáveis (WhatsApp, cardápio, cidade, horário)
js/main.js       ← lógica (renderiza cardápio, menu mobile, links de WhatsApp)
assets/img/       ← ícones e ilustrações
assets/img/products/  ← fotos dos cookies (adicionar aqui)
```
