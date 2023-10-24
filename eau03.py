""" parametre à l"nvers """

# créer un programme qui affiche ses arguments reçus à l'envers 

"""

Exemples d’utilisation :
$> python exo.py “Suis” “Je” “Drôle”
Drôle
Je
Suis


$> python exo.py ha ho
ho
ha

$> python exo.py “Bonjour 36”
Bonjour 36

Afficher error et quitter le programme en cas de problèmes d’arguments.

"""

a="je suis", "suis" ,"drole"
"""try:
    valeur_a=str
except ValueError:
    print("Erreur taper un une phrase")

print(a)"""



x=input("entré quelquechose: ")
a=input("entré quelquechose: ")
b=input("entré quelquechose: ")
arguments = x,a,b
try:
    arguments = str(arguments_str)
except ValueError:
    print("Erreur")
    
if arguments not == str :
    quit
    
for i in reversed(arguments):
    print(i)






















































