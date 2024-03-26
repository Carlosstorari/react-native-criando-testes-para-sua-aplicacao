export function formataMaiorLanceDoLeilao(lances, valorInicial) {
  const maiorLance = lances.reduce(
    (maior, atual) => atual.valor > maior ? atual.valor : maior,
    valorInicial
  );
  console.log(`MAIOR LANCE: ${maiorLance} LANCES: ${lances} VALOR INICIAL: ${valorInicial}`)
  return maiorLance;
}