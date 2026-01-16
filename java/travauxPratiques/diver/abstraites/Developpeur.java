package diver.abstraites;

public class Developpeur extends Employe {
  private double baseFixe;
  private double projectBonus;
  private int nombreProjets;
  private Developpeur(String nom, String matricule, double baseFixe, double projectBonus, int nombreProjets) {
    super(nom, matricule);
    this.baseFixe = baseFixe;
    this.projectBonus = projectBonus;
    this.nombreProjets = nombreProjets;
  }
  @Override
  double calculerSalaire() {
    return baseFixe + projectBonus * nombreProjets;
  }
}