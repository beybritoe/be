// Configuração central do site — edite aqui para atualizar o site inteiro.
const BECLA_CONFIG = {
  brandName: "Becla Cookies",

  // Número de WhatsApp em formato internacional, só dígitos (55 + DDD + número).
  whatsappNumber: "5521992076455",
  whatsappDisplay: "(21) 99207-6455",

  instagramUrl: "https://www.instagram.com/beclacookies/",
  instagramHandle: "@beclacookies",

  // PLACEHOLDER: ajuste cidade/bairros de entrega e horário reais.
  city: "Nova Friburgo, RJ — entrega e retirada",
  hours: "Terça a sábado, 10h às 19h",

  whatsappMessageDefault: "Olá! Vim pelo site da Becla Cookies e gostaria de fazer um pedido.",

  // Fotos reais para a seção "Siga no Instagram". Adicione mais aqui
  // conforme novas fotos forem enviadas.
  gallery: [
    { image: "assets/img/products/caramelo.png", alt: "Cookie recheado de caramelo" },
    { image: "assets/img/products/oreo.png", alt: "Cookie de cookies & cream com Oreo" },
    { image: "assets/img/products/doce-de-leite-branco.png", alt: "Cookie de doce de leite com chocolate branco" },
  ],

  // Sabores baseados nas fotos reais enviadas. Preços ainda são estimativa
  // (PLACEHOLDER) — ajuste para os valores reais. Quando as fotos forem
  // salvas em assets/img/products/, preencha o campo "image" de cada item
  // com o caminho do arquivo (ex.: "assets/img/products/caramelo.jpg").
  menu: [
    {
      name: "Recheado de Caramelo",
      description: "Cookie de chocolate estilo brookie, com caramelo derretendo por dentro.",
      price: "R$ 14,00",
      image: "assets/img/products/caramelo.png",
    },
    {
      name: "Cookies & Cream (Oreo)",
      description: "Massa de chocolate carregada de pedaços de Oreo, coroado com meio biscoito.",
      price: "R$ 13,00",
      image: "assets/img/products/oreo.png",
    },
    {
      name: "Doce de Leite com Chocolate Branco",
      description: "Massa amanteigada recheada com doce de leite e coberta de raspas de chocolate branco.",
      price: "R$ 13,00",
      image: "assets/img/products/doce-de-leite-branco.png",
    },
    {
      name: "Tradicional Chocolate",
      description: "Massa amanteigada com gotas generosas de chocolate meio amargo.",
      price: "R$ 9,00",
      image: "",
    },
    {
      name: "Red Velvet",
      description: "Massa aveludada de cacau com recheio cremoso de cream cheese.",
      price: "R$ 11,00",
      image: "",
    },
    {
      name: "Caixa Degustação",
      description: "Mini cookies sortidos com os sabores da casa — ótimo para presentear.",
      price: "R$ 28,00",
      image: "",
    },
  ],
};
