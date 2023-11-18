



"""
Créez un programme qui affiche toutes les valeurs comprises entre deux nombres dans l’ordre croissant. Min inclus, max exclus.


Exemples d’utilisation :
$> python exo.py 20 25
20 21 22 23 24


$> python exo.py 25 20
20 21 22 23 24

$> python exo.py hello
error

Afficher error et quitter le programme en cas de problèmes d’arguments.

"""
# demander a l'utilisateur de rentré un chiffre 
# l'utilisateur doit voir affichée toutes les valeurs comprise entre deux nombres dans l'ordre croissant min in clus et max inclus 
# faire  une boucle qui aaffiche toute les valeurs entre deux nombre dans l'ordre croissant ou une condition ou les deux 



def demander_nombre (nb_min, nb_max):
    nombre_int=0
    
    for i in range(nb_min, nb_max):
        print(i)

NOMBRE_MAX=input("entrez un nombre min: ")
NOMBRE_MIN=input("entrez un nombre max: ")

print(demander_nombre(int(NOMBRE_MIN), int(NOMBRE_MAX)))



































































