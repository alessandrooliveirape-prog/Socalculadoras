import { CALCULATORS_CATALOG } from '../src/data/calculatorsCatalog';

console.log('--- CALCULATORS CATALOG AUDIT ---');
console.log('Total calculators in catalog:', CALCULATORS_CATALOG.length);

const dynamicCalcs = CALCULATORS_CATALOG.filter(c => c.isDynamic);
console.log('Total dynamic calculators:', dynamicCalcs.length);

const coreCalcs = CALCULATORS_CATALOG.filter(c => !c.isDynamic);
console.log('Total core (custom view) calculators:', coreCalcs.length);

// Let's identify the calculators that are generated using the category-based fallbacks (the sparse ones)
console.log('\n--- SPARSE CALCULATORS WITH FALLBACK FORMULAS ---');
const categories = ['matematica', 'imobiliario', 'veiculos', 'estatistica', 'juridico', 'utilitarios', 'aposentadoria'];

const sparseCalcs = CALCULATORS_CATALOG.filter(c => {
  if (!c.isDynamic) return false;
  // Let's inspect the calculate function behavior, or just check their ID against the list of sparse records
  // We can look at the inputs: sparse calculators have very generic inputs
  const firstInput = c.inputs?.[0];
  if (!firstInput) return false;
  return ['valor_a', 'valor_imovel', 'preco_combustivel', 'valor_populacao', 'valor_principal', 'volume', 'aporte_mensal'].includes(firstInput.id);
});

console.log('Number of sparse calculators identified:', sparseCalcs.length);
sparseCalcs.forEach(c => {
  console.log(`- [${c.category.toUpperCase()}] ID: ${c.id} | Name: ${c.name}`);
});
