/**
 * Catálogo e Sistema de Rotação Automática de Produtos Afiliados da Amazon
 * Brasil Calculadoras (brasilcalculadoras.com.br)
 * 
 * Regra: Rotação a cada 3 dias sem necessidade de backend, baseada em dias desde o Epoch.
 * Tag oficial de associado: configurável via VITE_AMAZON_ASSOCIATE_TAG (fallback: chacerto-20)
 */

export const AMAZON_ASSOCIATE_TAG = 
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_AMAZON_ASSOCIATE_TAG)
    ? import.meta.env.VITE_AMAZON_ASSOCIATE_TAG
    : (typeof process !== 'undefined' && process.env && process.env.VITE_AMAZON_ASSOCIATE_TAG)
      ? process.env.VITE_AMAZON_ASSOCIATE_TAG
      : 'chacerto-20';

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
    },
    {
      id: 'calculadora-hp-12c-gold',
      title: 'Calculadora Financeira HP 12C Gold',
      benefit: 'O padrão ouro do mercado financeiro para simulação de juros compostos, amortizações, VPL, TIR e operações bancárias complexas.',
      query: 'Calculadora Financeira HP 12C Gold',
      category: 'financas',
      badge: 'Ferramenta Profissional'
    }
  ],

  trabalhista: [
    {
      id: 'livro-clt-organizada',
      title: 'Livro: CLT Organizada / Legislação Trabalhista',
      benefit: 'Consulte de forma rápida direitos, regras de rescisão, férias, 13º e as principais súmulas atualizadas das relações de trabalho.',
      query: 'Livro CLT Organizada Legislação Trabalhista',
      category: 'trabalhista',
      badge: 'Guia de Direitos CLT'
    },
    {
      id: 'pasta-executiva-documentos',
      title: 'Pasta Executiva Organizadora de Documentos',
      benefit: 'Mantenha carteira de trabalho, contratos, holerites, comprovantes e termos rescisórios perfeitamente protegidos e arquivados.',
      query: 'Pasta Executiva Organizadora de Documentos',
      category: 'trabalhista',
      badge: 'Organização Profissional'
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
    },
    {
      id: 'calibrador-digital-pneus-portatil',
      title: 'Calibrador Digital de Pneus Portátil Recarregável',
      benefit: 'Calibre pneus de carro, moto e bicicleta onde estiver com desligamento automático, garantindo segurança e economia de combustível.',
      query: 'Calibrador Digital de Pneus Portátil Recarregável',
      category: 'veiculos',
      badge: 'Economia & Segurança'
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
      id: 'kit-regoas-geometricas-tecnicas',
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
      id: 'balanca-digital-racao-pet',
      title: 'Balança Digital Colher Dosadora de Ração para Pets',
      benefit: 'Pese com exatidão porções de ração e medicamentos para manter a dieta saudável do seu cão ou gato.',
      query: 'Colher Balança Digital Dosadora Racao Pet',
      category: 'pets',
      badge: 'Nutrição Animal'
    },
    {
      id: 'fonte-agua-bebedouro-pet',
      title: 'Fonte Bebedouro Automática para Cães e Gatos',
      benefit: 'Estimule a hidratação contínua do seu animal com água corrente e filtrada, prevenindo problemas renais.',
      query: 'Fonte Bebedouro Automatica para Gatos e Caes',
      category: 'pets',
      badge: 'Saúde & Hidratação'
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
 * Normaliza qualquer uma das 21 categorias do site para os grupos de produtos afiliados da Amazon.
 */
export function normalizeAffiliateCategory(category?: string): AffiliateCategory {
  if (!category) return 'financas';
  
  const clean = category.toLowerCase().trim();

  switch (clean) {
    case 'saude':
    case 'saúde':
    case 'dietas':
    case 'maternidade':
      return 'saude';

    case 'pets':
      return 'pets';

    case 'profissoes':
    case 'profissões':
    case 'trabalhista':
    case 'juridico':
    case 'jurídico':
    case 'datas':
      return 'trabalhista';

    case 'financas':
    case 'finanças':
    case 'aposentadoria':
    case 'negocios':
    case 'negócios':
      return 'financas';

    case 'veiculos':
    case 'veículos':
    case 'combustivel':
    case 'logistica':
    case 'logística':
      return 'veiculos';

    case 'imobiliario':
    case 'imobiliário':
    case 'construcao':
    case 'construção':
      return 'imobiliario';

    case 'utilitarios':
    case 'utilidades':
    case 'eventos':
    case 'energia':
      return 'utilitarios';

    case 'agronegocio':
    case 'agronegócio':
      return 'agronegocio';

    case 'tecnologia':
      return 'tecnologia';

    case 'matematica':
    case 'matemática':
    case 'estatistica':
    case 'estatística':
    case 'educacao':
    case 'educação':
    case 'quimica_fisica':
      return 'matematica';

    default:
      return 'financas';
  }
}

/**
 * Gera o link oficial de busca de afiliado na Amazon com a tag especificada.
 */
export function getAmazonAffiliateUrl(query: string, tag: string = AMAZON_ASSOCIATE_TAG): string {
  return `https://www.amazon.com.br/s?k=${encodeURIComponent(query)}&tag=${tag}`;
}

/**
 * Seleciona o produto do catálogo com base na rotação matemática a cada 3 dias.
 * Fórmula:
 *   daysSinceEpoch = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
 *   productIndex = Math.floor(daysSinceEpoch / ROTATION_DAYS) % products.length;
 */
export function getRotatedProduct(category?: string, nowMs: number = Date.now()): {
  product: AffiliateProduct;
  affiliateUrl: string;
  productIndex: number;
} {
  const normalizedCategory = normalizeAffiliateCategory(category);
  const products = AFFILIATE_PRODUCTS[normalizedCategory] || AFFILIATE_PRODUCTS.financas;
  
  const daysSinceEpoch = Math.floor(nowMs / (1000 * 60 * 60 * 24));
  const productIndex = Math.floor(daysSinceEpoch / ROTATION_DAYS) % products.length;
  const product = products[productIndex];
  const affiliateUrl = getAmazonAffiliateUrl(product.query, AMAZON_ASSOCIATE_TAG);

  return {
    product,
    affiliateUrl,
    productIndex
  };
}
