/**
 * Catálogo Central de Monetização Multi-Rede (Afiliados + Patrocínio Direto)
 * Brasil Calculadoras (brasilcalculadoras.com.br)
 *
 * Redes integradas:
 *  - Amazon Associados (tag: chacerto-20)
 *  - Shopee Afiliados (ID: 18399541048, Sub_id 1: brasilcalculadoras, Sub_id 2: <categoria>)
 *  - Mercado Livre Afiliados (etiqueta: alessandrooliveira727, matt_tool: 32650250)
 *  - Patrocínio Direto / Mídia Kit (/anunciantes)
 *
 * Rotação determinística a cada 3 dias sem necessidade de backend.
 */

export const AMAZON_ASSOCIATE_TAG =
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_AMAZON_ASSOCIATE_TAG)
    ? import.meta.env.VITE_AMAZON_ASSOCIATE_TAG
    : (typeof process !== 'undefined' && process.env && process.env.VITE_AMAZON_ASSOCIATE_TAG)
      ? process.env.VITE_AMAZON_ASSOCIATE_TAG
      : 'chacerto-20';

export const SHOPEE_AFFILIATE_ID =
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_SHOPEE_AFFILIATE_ID)
    ? import.meta.env.VITE_SHOPEE_AFFILIATE_ID
    : (typeof process !== 'undefined' && process.env && process.env.VITE_SHOPEE_AFFILIATE_ID)
      ? process.env.VITE_SHOPEE_AFFILIATE_ID
      : '18399541048';

export const ML_AFFILIATE_TAG =
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_ML_AFFILIATE_TAG)
    ? import.meta.env.VITE_ML_AFFILIATE_TAG
    : (typeof process !== 'undefined' && process.env && process.env.VITE_ML_AFFILIATE_TAG)
      ? process.env.VITE_ML_AFFILIATE_TAG
      : 'alessandrooliveira727';

export const ML_MATT_TOOL = '32650250';
export const SHOPEE_UNIVERSAL_LINK = 'https://s.shopee.com.br/6q2dAlaxsG';
export const ROTATION_DAYS = 3;

export type AffiliateCategory =
  | 'saude'
  | 'financas'
  | 'trabalhista'
  | 'veiculos'
  | 'imobiliario'
  | 'matematica'
  | 'tecnologia'
  | 'pets'
  | 'agronegocio'
  | 'utilitarios';

export interface AffiliateProduct {
  id: string;
  title: string;
  benefit: string;
  query: string;
  category: AffiliateCategory;
  badge?: string;
}

export interface CategoryServiceOffer {
  badge: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
}

/**
 * Links oficiais encurtados da Shopee Afiliados gerados via Custom Link Tool
 * (Sub_id 1 = brasilcalculadoras, Sub_id 2 = <categoria>).
 */
export const SHOPEE_CATEGORY_LINKS: Record<AffiliateCategory, string> = {
  financas: 'https://s.shopee.com.br/9fMoYLhM1p',
  trabalhista: 'https://s.shopee.com.br/6q2dBBhzYS',
  saude: 'https://s.shopee.com.br/5AuPCAa3yn',
  veiculos: 'https://s.shopee.com.br/2Vte1JMWWY',
  imobiliario: 'https://s.shopee.com.br/2Vte1LQb2P',
  matematica: 'https://s.shopee.com.br/20xNQSep2y',
  tecnologia: 'https://s.shopee.com.br/20xNQUiPlD',
  pets: 'https://s.shopee.com.br/4VeiP7u5Ve',
  agronegocio: 'https://s.shopee.com.br/9KjyA2s49e',
  utilitarios: 'https://s.shopee.com.br/AKcVLusGO3'
};

/**
 * Links oficiais do Programa de Afiliados do Mercado Livre
 * (matt_word = alessandrooliveira727, matt_tool = 32650250).
 */
export const ML_CATEGORY_LINKS: Partial<Record<AffiliateCategory, string>> = {
  financas: 'https://meli.la/1r1W5fT',
  trabalhista: 'https://meli.la/23XX3rj',
  saude: 'https://meli.la/2tG8Mwm',
  veiculos: 'https://meli.la/2CeaPJ5',
  imobiliario: 'https://meli.la/28PztCA',
  matematica: 'https://meli.la/2KNjvMY',
  tecnologia: 'https://meli.la/149inZM',
  pets: 'https://meli.la/14DrJsE',
  agronegocio: 'https://meli.la/1ojmPHB',
  utilitarios: 'https://meli.la/2wTtvfW'
};

export const HIGH_INTENT_SERVICE_OFFERS: Record<AffiliateCategory, CategoryServiceOffer> = {
  financas: {
    badge: 'Parceiros & Negócios',
    title: 'Divulgue sua corretora, banco digital ou consultoria nesta categoria',
    description: 'Audiência qualificada buscando juros compostos, investimentos, financiamentos e comparativos CLT vs PJ.',
    ctaLabel: 'Ver Mídia Kit & Patrocínio',
    href: '/anunciantes'
  },
  trabalhista: {
    badge: 'Contabilidade & Carreira',
    title: 'Espaço patrocinado para contabilidades PJ e serviços trabalhistas',
    description: 'Conecte sua marca a profissionais calculando rescisão CLT, férias, 13º salário e abertura de CNPJ.',
    ctaLabel: 'Anunciar no Brasil Calculadoras',
    href: '/anunciantes'
  },
  saude: {
    badge: 'Saúde & Bem-Estar',
    title: 'Alcance leitores focados em nutrição, treino e qualidade de vida',
    description: 'Posicione suplementos, clínicas, apps fitness ou planos de saúde junto às calculadoras de IMC e TMB.',
    ctaLabel: 'Conhecer Formatos Comerciais',
    href: '/anunciantes'
  },
  veiculos: {
    badge: 'Automotivo & Seguros',
    title: 'Destaque sua seguradora, consórcio ou autopeças neste segmento',
    description: 'Visitantes simulando financiamento de veículos, IPVA, combustível e custos de viagem rodoviária.',
    ctaLabel: 'Ver Mídia Kit',
    href: '/anunciantes'
  },
  imobiliario: {
    badge: 'Crédito & Construção',
    title: 'Patrocine as calculadoras de SAC, Price, aluguel e reforma',
    description: 'Público com alta intenção de compra de imóveis, financiamento habitacional e materiais de obra.',
    ctaLabel: 'Falar com Comercial',
    href: '/anunciantes'
  },
  matematica: {
    badge: 'Educação & Concursos',
    title: 'Conecte seu cursinho, preparatório ENEM ou plataforma EdTech',
    description: 'Estudantes e professores utilizando calculadoras científicas, médias e simuladores de notas diariamente.',
    ctaLabel: 'Conhecer Parcerias',
    href: '/anunciantes'
  },
  tecnologia: {
    badge: 'Tech & SaaS B2B',
    title: 'Integre nossas calculadoras ou patrocine a vertical de Tecnologia',
    description: 'Consulte nossos endpoints abertos e widgets em /desenvolvedores ou patrocine ferramentas de produtividade.',
    ctaLabel: 'API & Parcerias',
    href: '/anunciantes'
  },
  pets: {
    badge: 'Mercado Pet',
    title: 'Divulgue sua loja pet, plano veterinário ou marca de ração',
    description: 'Tutores calculando porções ideais, hidratação e cuidados diários para cães e gatos.',
    ctaLabel: 'Anunciar Nesta Categoria',
    href: '/anunciantes'
  },
  agronegocio: {
    badge: 'Agro & Logística',
    title: 'Alcance produtores rurais e gestores de campo no Brasil',
    description: 'Simulações de plantio, produtividade agrícola, adubação e custos de frete rodoviário.',
    ctaLabel: 'Ver Oportunidades',
    href: '/anunciantes'
  },
  utilitarios: {
    badge: 'Casa & Consumo',
    title: 'Espaço comercial para marcas de energia solar, casa e utilidades',
    description: 'Usuários calculando consumo elétrico kWh, dimensionamento fotovoltaico e organização doméstica.',
    ctaLabel: 'Conhecer Mídia Kit',
    href: '/anunciantes'
  }
};

export const AFFILIATE_PRODUCTS: Record<AffiliateCategory, AffiliateProduct[]> = {
  saude: [
    {
      id: 'balanca-bioimpedancia-bluetooth',
      title: 'Balança Digital de Bioimpedância com Bluetooth',
      benefit: 'Acompanhe métricas corporais completas (% de gordura, taxa metabólica, água e massa magra) sincronizadas diretamente no smartphone.',
      query: 'Balança Digital de Bioimpedância com Bluetooth',
      category: 'saude',
      badge: 'Monitoramento Corporal'
    },
    {
      id: 'balanca-cozinha-alta-precisao',
      title: 'Balança Digital de Cozinha de Alta Precisão',
      benefit: 'Controle porções e macros com exatidão de 1g para seguir sua dieta, déficit calórico e receitas fitness com facilidade.',
      query: 'Balança Digital de Cozinha de Alta Precisão',
      category: 'saude',
      badge: 'Nutrição & Dieta'
    },
    {
      id: 'garrafa-termica-motivacional-2l',
      title: 'Garrafa Térmica Motivacional 2 Litros',
      benefit: 'Mantenha sua meta diária de hidratação e consumo ideal de água ao longo do dia com marcadores visuais de horários.',
      query: 'Garrafa Térmica Motivacional 2 Litros',
      category: 'saude',
      badge: 'Hidratação Essencial'
    }
  ],

  financas: [
    {
      id: 'calculadora-hp-12c-gold',
      title: 'Calculadora Financeira HP 12C Gold',
      benefit: 'O padrão ouro do mercado financeiro para simulação de juros compostos, amortizações, VPL, TIR e operações bancárias complexas.',
      query: 'Calculadora Financeira HP 12C Gold',
      category: 'financas',
      badge: 'Ferramenta Profissional'
    },
    {
      id: 'livro-psicologia-financeira',
      title: 'Livro: A Psicologia Financeira (Morgan Housel)',
      benefit: 'Entenda como o comportamento humano e as emoções influenciam decisões de investimento, poupança e enriquecimento a longo prazo.',
      query: 'Livro A Psicologia Financeira Morgan Housel',
      category: 'financas',
      badge: 'Best-Seller Financeiro'
    },
    {
      id: 'livro-pai-rico-pai-pobre',
      title: 'Livro: Pai Rico, Pai Pobre (Robert Kiyosaki)',
      benefit: 'O maior clássico sobre inteligência financeira, aquisição de ativos geradores de renda passiva e independência financeira.',
      query: 'Livro Pai Rico Pai Pobre Robert Kiyosaki',
      category: 'financas',
      badge: 'Educação Financeira'
    }
  ],

  trabalhista: [
    {
      id: 'pasta-executiva-documentos',
      title: 'Pasta Executiva Organizadora de Documentos',
      benefit: 'Mantenha carteira de trabalho, contratos, holerites, comprovantes e termos rescisórios perfeitamente protegidos e arquivados.',
      query: 'Pasta Executiva Organizadora de Documentos',
      category: 'trabalhista',
      badge: 'Organização Profissional'
    },
    {
      id: 'livro-clt-organizada',
      title: 'Livro: CLT Organizada / Legislação Trabalhista',
      benefit: 'Consulte de forma rápida direitos, regras de rescisão, férias, 13º e as principais súmulas atualizadas das relações de trabalho.',
      query: 'Livro CLT Organizada Legislação Trabalhista',
      category: 'trabalhista',
      badge: 'Guia de Direitos CLT'
    },
    {
      id: 'livro-segredos-mente-milionaria',
      title: 'Livro: Os Segredos da Mente Milionária',
      benefit: 'Aprenda a reprogramar seus modelos mentais sobre salário, trabalho e criação de riqueza para transformar sua vida financeira.',
      query: 'Livro Os Segredos da Mente Milionária',
      category: 'trabalhista',
      badge: 'Crescimento de Carreira'
    }
  ],

  veiculos: [
    {
      id: 'calibrador-digital-pneus-portatil',
      title: 'Calibrador Digital de Pneus Portátil Recarregável',
      benefit: 'Calibre pneus de carro, moto e bicicleta onde estiver com desligamento automático, garantindo segurança e economia de combustível.',
      query: 'Calibrador Digital de Pneus Portátil Recarregável',
      category: 'veiculos',
      badge: 'Economia & Segurança'
    },
    {
      id: 'scanner-obd2-bluetooth',
      title: 'Scanner Automotivo OBD2 Bluetooth',
      benefit: 'Monitore consumo de combustível em tempo real, saúde do motor e apague luzes de alerta da injeção direto na tela do celular.',
      query: 'Scanner Automotivo OBD2 Bluetooth',
      category: 'veiculos',
      badge: 'Diagnóstico Veicular'
    },
    {
      id: 'suporte-veicular-inducao',
      title: 'Suporte Veicular Magnético com Carregamento por Indução',
      benefit: 'Fixação segura e recarga rápida sem fios para navegar com Waze e GPS durante viagens e trânsito diário sem descarregar.',
      query: 'Suporte Veicular Magnético com Carregamento por Indução',
      category: 'veiculos',
      badge: 'Acessório para Carro'
    }
  ],

  imobiliario: [
    {
      id: 'trena-laser-portatil',
      title: 'Trena a Laser Digital Portátil',
      benefit: 'Meça metragens quadradas, pé-direito e volumes com precisão milimétrica instantânea para reformas, avaliação ou compra de imóveis.',
      query: 'Trena a Laser Digital Portátil',
      category: 'imobiliario',
      badge: 'Medição de Precisão'
    },
    {
      id: 'detector-digital-vigas-parede',
      title: 'Detector Digital de Vigas e Materiais em Parede',
      benefit: 'Localize com segurança canos de água, fiação elétrica e vigas estruturais antes de furar paredes em obras ou instalações.',
      query: 'Detector Digital de Vigas e Materiais em Parede',
      category: 'imobiliario',
      badge: 'Obras & Reformas'
    },
    {
      id: 'nivel-laser-autonivelante',
      title: 'Nível Laser Autonivelante de Linhas Cruzadas',
      benefit: 'Alinhe pisos, revestimentos, móveis planejados e instalações elétricas com precisão milimétrica profissional.',
      query: 'Nivel Laser Autonivelante Linhas Cruzadas',
      category: 'imobiliario',
      badge: 'Construção & Instalações'
    }
  ],

  matematica: [
    {
      id: 'calculadora-cientifica-casio',
      title: 'Calculadora Científica Casio',
      benefit: 'Ferramenta essencial com centenas de funções para estudantes e profissionais resolverem proporções, trigonometria e equações.',
      query: 'Calculadora Científica Casio',
      category: 'matematica',
      badge: 'Estudos & Exatidão'
    },
    {
      id: 'caderno-inteligente-universitario',
      title: 'Caderno Inteligente Universitário',
      benefit: 'Organize fórmulas, resoluções e anotações acadêmicas com folhas reposicionáveis e estrutura durável de alta gramatura.',
      query: 'Caderno Inteligente Universitário',
      category: 'matematica',
      badge: 'Produtividade nos Estudos'
    },
    {
      id: 'kit-reguas-geometricas-tecnicas',
      title: 'Kit de Réguas Técnicas, Esquadros e Transferidor',
      benefit: 'Instrumentos indispensáveis para desenhos técnicos, geometria, gráficos e estudos escolares e universitários.',
      query: 'Kit Regua Esquadro Transferidor Desenho Tecnico',
      category: 'matematica',
      badge: 'Geometria & Precisão'
    }
  ],

  tecnologia: [
    {
      id: 'suporte-ergonomico-notebook',
      title: 'Suporte Ergonômico Ajustável para Notebook',
      benefit: 'Melhore a postura de trabalho e evite dores no pescoço e coluna durante longas horas no computador.',
      query: 'Suporte Ergonomico Ajustavel para Notebook',
      category: 'tecnologia',
      badge: 'Ergonomia & Home Office'
    },
    {
      id: 'teclado-mouse-sem-fio-ergonomico',
      title: 'Combo Teclado e Mouse Sem Fio Silencioso',
      benefit: 'Ganhe produtividade, agilidade e livre-se de cabos na sua mesa de trabalho ou estudos diários.',
      query: 'Combo Teclado e Mouse Sem Fio Silencioso',
      category: 'tecnologia',
      badge: 'Produtividade Diária'
    },
    {
      id: 'hub-usb-c-adaptador',
      title: 'Adaptador Hub USB-C Multiportas com HDMI 4K',
      benefit: 'Conecte monitores externos, pendrives e carregamento rápido no notebook com um único cabo.',
      query: 'Adaptador Hub USB-C Multiportas HDMI',
      category: 'tecnologia',
      badge: 'Conectividade Total'
    }
  ],

  pets: [
    {
      id: 'fonte-agua-bebedouro-pet',
      title: 'Fonte Bebedouro Automática para Cães e Gatos',
      benefit: 'Estimule a hidratação contínua do seu animal com água corrente e filtrada, prevenindo problemas renais.',
      query: 'Fonte Bebedouro Automatica para Gatos e Caes',
      category: 'pets',
      badge: 'Saúde & Hidratação'
    },
    {
      id: 'balanca-digital-racao-pet',
      title: 'Balança Digital Colher Dosadora de Ração para Pets',
      benefit: 'Pese com exatidão porções de ração e medicamentos para manter a dieta saudável do seu cão ou gato.',
      query: 'Colher Balança Digital Dosadora Racao Pet',
      category: 'pets',
      badge: 'Nutrição Animal'
    },
    {
      id: 'comedouro-lento-antigulosice',
      title: 'Comedouro Lento Interativo para Pets',
      benefit: 'Reduz a velocidade de ingestão do alimento, evitando engasgos, refluxos e obesidade em cães e gatos.',
      query: 'Comedouro Lento Interativo para Caes',
      category: 'pets',
      badge: 'Digestão & Bem-Estar'
    }
  ],

  agronegocio: [
    {
      id: 'medidor-ph-umidade-solo',
      title: 'Medidor Digital de pH, Umidade e Luminosidade do Solo',
      benefit: 'Monitore as condições ideais da terra antes do plantio, calagem e adubação para maximizar colheitas.',
      query: 'Medidor Digital pH Umidade Solo 3 em 1',
      category: 'agronegocio',
      badge: 'Manejo de Solo & Safra'
    },
    {
      id: 'refratometro-brix-digital',
      title: 'Refratômetro Óptico Medidor de Açúcar Brix',
      benefit: 'Avalie o teor de doçura e maturação de frutas, cana-de-açúcar e mel com leitura instantânea no campo.',
      query: 'Refratometro Optico Brix para Frutas e Agricultura',
      category: 'agronegocio',
      badge: 'Controle de Qualidade'
    },
    {
      id: 'termohigrometro-digital-portatil',
      title: 'Termo-Higrômetro Digital com Sensor Externo',
      benefit: 'Controle temperatura e umidade em estufas, viveiros e galpões de armazenamento de grãos e sementes.',
      query: 'Termohigrometro Digital Estufa Graos',
      category: 'agronegocio',
      badge: 'Armazenamento & Clima'
    }
  ],

  utilitarios: [
    {
      id: 'wattimetro-medidor-consumo-energia',
      title: 'Wattímetro Digital Medidor de Consumo de Energia Elétrica',
      benefit: 'Descubra exatamente quanto cada eletrodoméstico consome em kWh e na conta de luz da sua residência.',
      query: 'Wattimetro Digital Medidor Consumo Energia Eletrica Tomada',
      category: 'utilitarios',
      badge: 'Economia na Conta de Luz'
    },
    {
      id: 'termometro-culinario-digital',
      title: 'Termômetro Culinário Digital Tipo Espeto',
      benefit: 'Acerte o ponto perfeito de carnes em churrascos, caldas, frituras e preparo profissional de alimentos.',
      query: 'Termometro Culinario Digital Espeto',
      category: 'utilitarios',
      badge: 'Precisão na Cozinha'
    },
    {
      id: 'balanca-digital-suspensa-bagagem',
      title: 'Balança Digital Portátil Suspensa de Precisão',
      benefit: 'Pese malas de viagem, encomendas e pacotes até 50kg evitando taxas extras de excesso de peso.',
      query: 'Balanca Digital Suspensa Gancho Malas Viagem',
      category: 'utilitarios',
      badge: 'Viagens & Encomendas'
    }
  ]
};

/**
 * Normaliza qualquer uma das 21 categorias do site para os 10 grupos de monetização contextual.
 */
export function normalizeAffiliateCategory(category?: string): AffiliateCategory {
  if (!category) return 'financas';

  const clean = category
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

  switch (clean) {
    case 'saude':
    case 'dietas':
    case 'maternidade':
      return 'saude';

    case 'pets':
      return 'pets';

    case 'profissoes':
    case 'trabalhista':
    case 'juridico':
    case 'datas':
      return 'trabalhista';

    case 'financas':
    case 'aposentadoria':
    case 'negocios':
      return 'financas';

    case 'veiculos':
    case 'combustivel':
    case 'logistica':
      return 'veiculos';

    case 'imobiliario':
    case 'construcao':
      return 'imobiliario';

    case 'utilitarios':
    case 'utilidades':
    case 'eventos':
    case 'energia':
      return 'utilitarios';

    case 'agronegocio':
      return 'agronegocio';

    case 'tecnologia':
      return 'tecnologia';

    case 'matematica':
    case 'estatistica':
    case 'educacao':
    case 'quimica_fisica':
      return 'matematica';

    default:
      return 'financas';
  }
}

/**
 * Gera o link oficial de busca de afiliado na Amazon Brasil com a tag configurada.
 */
export function getAmazonAffiliateUrl(query: string, tag: string = AMAZON_ASSOCIATE_TAG): string {
  return `https://www.amazon.com.br/s?k=${encodeURIComponent(query)}&tag=${encodeURIComponent(tag)}`;
}

/**
 * Retorna a recomendação rotacionada (a cada 3 dias) e os links das redes ativas para a categoria.
 */
export function getRotatedRecommendation(category?: string, nowMs: number = Date.now()): {
  category: AffiliateCategory;
  product: AffiliateProduct;
  amazonUrl: string;
  shopeeUrl: string;
  mercadoLivreUrl?: string;
  serviceOffer: CategoryServiceOffer;
  productIndex: number;
} {
  const normalizedCategory = normalizeAffiliateCategory(category);
  const products = AFFILIATE_PRODUCTS[normalizedCategory] || AFFILIATE_PRODUCTS.financas;

  const daysSinceEpoch = Math.floor(nowMs / (1000 * 60 * 60 * 24));
  const productIndex = Math.floor(daysSinceEpoch / ROTATION_DAYS) % products.length;
  const product = products[productIndex];

  return {
    category: normalizedCategory,
    product,
    amazonUrl: getAmazonAffiliateUrl(product.query, AMAZON_ASSOCIATE_TAG),
    shopeeUrl: SHOPEE_CATEGORY_LINKS[normalizedCategory] || SHOPEE_UNIVERSAL_LINK,
    mercadoLivreUrl: ML_CATEGORY_LINKS[normalizedCategory],
    serviceOffer: HIGH_INTENT_SERVICE_OFFERS[normalizedCategory],
    productIndex
  };
}

/**
 * Envia evento de clique em link de afiliado / patrocínio para o Google Analytics 4 (quando carregado).
 */
export function trackAffiliateClick(params: {
  network: 'amazon' | 'shopee' | 'mercadolivre' | 'sponsor';
  category: string;
  productId: string;
  placement: string;
}): void {
  try {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'affiliate_click', {
        affiliate_network: params.network,
        affiliate_category: params.category,
        product_id: params.productId,
        placement: params.placement
      });
    }
  } catch {
    // Ignore telemetry failures safely
  }
}
