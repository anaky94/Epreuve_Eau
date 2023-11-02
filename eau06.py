"""Créez un programme qui détermine si une chaîne de caractère se trouve dans une autre.


Exemples d’utilisation :
$> python exo.py bonjour jour
true


$> python exo.py bonjour joure
false


$> python exo.py 42
error

Afficher error et quitter le programme en cas de problèmes d’arguments.
"""
# En entré invité l'utilisateur a rentré des chaine de caractère 
# ensuite demander une deuxieme fois si l'utilisateur peut rentré un dexieme chaine de caractère
# verifier si la chaine de caractère 1 et different de la chaine de caractère 2 #


caract1=input("entreé quelque chose ")
caract2=input("entreé quelque chose ")
while type(caract1)!= str or type(caract2) != str:
    caract1=input("entreé quelque chose ")
    caract2=input("entreé quelque chose ")
  
    if not caract1.isdigit() or not  caract2.isdigit():
        print("erreur")
        break 
if len(caract1) == len(caract2):
    print(True)
else:
    print(False)













