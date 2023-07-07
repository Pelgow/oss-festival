// Méthode pour récupérer tous les festivals
async function getFestivals() {
    try {
      const response = await fetch('https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals');
      const data = await response.json();
      return data.records;
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération des festivals :', error);
      return [];
    }
  }
  
  // Méthode pour rechercher des festivals par mot-clé
  async function searchFestivals(keyword) {
    try {
      const response = await fetch(`https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=${keyword}`);
      const data = await response.json();
      return data.records;
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la recherche des festivals :', error);
      return [];
    }
  }
  
  // Méthode pour filtrer les festivals par région
  async function filterByRegion(region) {
    try {
      const response = await fetch(`https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&facet=region&q=${region}`);
      const data = await response.json();
      return data.records;
    } catch (error) {
      console.error('Une erreur s\'est produite lors du filtrage des festivals par région :', error);
      return [];
    }
  }
  
  module.exports = { getFestivals, searchFestivals, filterByRegion };