const { getFestivals, searchFestivals, filterByRegion } = require('./festivals.js');

describe('Festivals Library', () => {
  test('should retrieve all festivals', async () => {
    const festivals = await getFestivals();
    expect(festivals).toBeDefined();
    expect(festivals.length).toBeGreaterThan(0);
  });

  test('should search festivals by keyword', async () => {
    const festivals = await searchFestivals('music');
    expect(festivals).toBeDefined();
    expect(festivals.length).toBeGreaterThan(0);
  });

  test('should filter festivals by region', async () => {
    const festivals = await filterByRegion('Île-de-France');
    expect(festivals).toBeDefined();
    expect(festivals.length).toBeGreaterThan(0);
    // Vous pouvez également vérifier si tous les festivals retournés sont bien dans la région spécifiée
    festivals.forEach((festival) => {
      expect(festival.fields.region).toBe('Île-de-France');
    });
  });
});
