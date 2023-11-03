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




"""
def majuscule(chaine):
    caracteres=chaine.split()
    for lettre in caracteres:
        if lettre_suivante=="":
            print(chaine.upper)
            lettre=lettre.upper()
        lettre_suivante = not lettre_suivante
    chaine_modifiee= " ".join(caracteres)
    return  chaine_modifiee


print(majuscule("bonjour "))

"""
phrase=list(input("entrez une phrase :"))

list=list(phrase)

phrase="".join(list)


for i in range (len((list))):   
    if list[i] != " " and i % 2 ==0:
            list[i]=list[i].upper()
    if phrase.isnumeric():
        print("error")
        break

phrase="".join(list)
print(phrase)








































