"""
Créez un programme qui affiche la différence minimum absolue entre deux éléments d’un tableau constitué uniquement de nombres. Nombres négatifs acceptés.
Exemples d’utilisation :
$> python exo.py 5 1 19 21
2

$> python exo.py 20 5 1 19 21
1

$> python exo.py -8 -6 4
2
"""
"""
# afficher le minimum entre 2 element d'un tableau constituer de nombre 
# dans un tableau de nombre afficher le nombre minimum, 
#  afficher en tableau de nombreen avec une variable table=["3", "4", "7", "9"]
# par la boucle for parcourir le tableau et afficher le le nombre mini dans ce tableau 
# afficher le minimum entre lindex 3 du tableau et l'index 2
     afficher le minimum
    # afficher  le minimum entre lindex 1 du tableau et l'index 0
        afficher le minimum
afficher le minimum entre le resulta de l'index 3 et 2 et le result de l'index de l'index 1 et 0 

"""
"""
def parcou_laboucle_for(): 
    i=["-13",  "2", "3", "19"]
    min_value=min(i)
    for i in range (len(i)):
        print( min_value)
    return min_value
print(parcou_laboucle_for())
"""

# indice:    0     1    2     3
def trie():
    i = ["-13", "3", "7", "19" ]

    for k in range(len(i) - i):
        for j in range (k +1, len(i)):
            if i[k] > i[j]:
                i[k], i[j] = i[j], i[k]
            

print(trie)
















