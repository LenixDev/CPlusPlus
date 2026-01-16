package diver;

public class LivrePhyisque extends Produit {
  private double poids;
  private double fraisLivraison;
  private LivrePhyisque(int id, String designation, double prixHT, double poids) {
    super(id, designation, prixHT);
    this.poids = poids;
    this.fraisLivraison = poids * 0.01;
  }
  void afficherDetails() {
    System.out.println("Poids : " + poids + " kg");
    System.out.println("Frais de livraison : " + fraisLivraison + " €");
  }
  @Override
  double calculerPrixTTC() {
    return prixHT * 1.2 + fraisLivraison;
  }
}