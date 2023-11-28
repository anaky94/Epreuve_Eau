"""
Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri par sélection.

Vous utiliserez une fonction de cette forme (selon votre langage) :
my_select_sort(array) {
	# votre algorithme
	return (new_array)
}

Exemples d’utilisation :
$> python exo.py 6 5 4 3 2 1
1 2 3 4 5 6
$> python exo.py test test test
error
Afficher error et quitter le programme en cas de problèmes d’arguments.
Wikipedia vous présentera une belle description de cet algorithme de tri.

"""





liste_tiree=[6, 5, 4, 3, 2, 1,345,233,21]
try:
    for i in range (len(liste_tiree)-1):
            for j in range (i + 1, len(liste_tiree)):
                if liste_tiree [i]> liste_tiree[j]:
                    liste_tiree[i], liste_tiree[j]=liste_tiree[j], liste_tiree[i]
    print(liste_tiree) 
except TypeError:
    print("error")
    exit()



















