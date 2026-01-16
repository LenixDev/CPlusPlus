package diver.abstraites;

abstract class Employe {
  private String nom;
  private String matricule;
  Employe(String nom, String matricule) {
    this.nom = nom;
    this.matricule = matricule;
  }
  abstract double calculerSalaire();
}