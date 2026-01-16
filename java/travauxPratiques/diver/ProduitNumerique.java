package diver;

public class ProduitNumerique extends Produit {
  private String lienTelechargement;
  private double tailleFichier;
  private ProduitNumerique(int id, String designation, double prixHT, String lienTelechargement, double tailleFichier) {
    super(id, designation, prixHT);
    this.lienTelechargement = lienTelechargement;
    this.tailleFichier = tailleFichier;
  }
  void afficherDetails() {
    System.out.println("Taille du fichier : " + tailleFichier + " Mo");
    System.out.println("Frais de telechargement : " + tailleFichier * 0.1 + " €");
  }
}
