const { getFestivals, searchFestivals, filterByRegion } = require('../festivals.js');

// Exemple d'utilisation des fonctions
async function testFunctions() {
  const allFestivals = await getFestivals();
  console.log('All festivals:', allFestivals);

  const festivalsByKeyword = await searchFestivals('music');
  console.log('Festivals by keyword:', festivalsByKeyword);

  const festivalsByRegion = await filterByRegion('Île-de-France');
  console.log('Festivals by region:', festivalsByRegion);
}

testFunctions();
