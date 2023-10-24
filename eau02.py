
""" Créez un programme qui affiche toutes les différentes combinaisons de deux nombre entre 00 et 99 dans l’ordre croissant.


Exemples d’utilisation :
$> python exo.py
00 01, 00 02, 00 03, 00 04, ... , 00 99, 01 02, ... , 97 99, 98 99
$>
"""
# 1: commencer par afficher 2 nombre tel que : 00 01, 00 02 par des condition si 
# 2: afficher 
# 2: ensuite afficher : 00 02  
# 3: 
# 4: 
# 5: 
a=0
b=0
c=0
d=0
for  a in range (0, 10):

    for b in range(0, 10):

        for c in range(0, 10):
                 for d in range(0,10):
            
                    print(a, end="")
                    print(b, end=" ")
                    print(c, end="")
                    print(d, end=", ")


        