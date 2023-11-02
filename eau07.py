"""Créez un programme qui met en majuscule une lettre sur deux d’une chaîne de caractères. Seule les lettres (A-Z, a-z) sont prises en compte.


Exemples d’utilisation :
$> python exo.py “Hello world !”
HeLlO wOrLd !


$> python exo.py 42
error

Afficher error et quitter le programme en cas de problèmes d’arguments"""

# créer un programme sui met en majuscule une lettre / 2 
# demander a l'utilisateru de rentré une phrase de type "hellow world"
# afficher en sortie une lettre sur / 2 en majuscule

chaine = "bonjour"


lettre_suivante= True
caracteres=chaine.split()

def majuscule(chaine):
    for lettre in caracteres:
        if lettre_suivante:
            lettre=lettre.upper()
        lettre_suivante = not lettre_suivante
    chaine_modifiee= " ".join(caracteres)
    return  chaine_modifiee


chaine_modifiee = majuscule(chaine)

print(majuscule("bonjour"))





