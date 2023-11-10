"""
Créez un programme qui détermine si une chaîne de caractères ne contient que des chiffres.


Exemples d’utilisation :
$> python exo.py “4445353”
true


$> python exo.py 42
true

$> python exo.py “Bonjour 36”
false

Afficher error et quitter le programme en cas de problèmes d’arguments.
"""

chaine= input("entré une chaine de caractère :")
if chaine.isnumeric(): # isnumeric() permet de savoir si la chaine est composé que de chiffre
    print("true")
else:
    print("false")
if chaine == "":
    print("error")
    exit



















