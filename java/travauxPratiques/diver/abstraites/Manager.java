package diver.abstraites;

public class Manager extends Employe {
  private double baseFixe;
  private double bonusFixe;
  private Manager(String nom, String matricule, double baseFixe, double bonusFixe) {
    super(nom, matricule);
    this.baseFixe = baseFixe;
    this.bonusFixe = bonusFixe;
  }
  @Override
  double calculerSalaire() {
    return baseFixe + bonusFixe * 0.20;
  }
}