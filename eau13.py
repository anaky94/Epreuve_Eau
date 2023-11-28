""" Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri à bulle.

Vous utiliserez une fonction de cette forme (selon votre langage) :
my_bubble_sort(array) {
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
# commencer à parcourir la liste en comparant les 2 premier éléments
# si le premier élément est plus grand que le second, on les échange
# on recommence jusqu'à la fin de la liste
# si aucun échange n'a eu lieu, la liste est triée
liste=[6, 5, 4, 3, 2, 1,10,23,34,432,222222222222,343,322,344,0]
def trie_a_bulles(liste):
    globalVariable=liste
    for i in range(len(liste)-1):
        for j in range (i +1, len(liste)):
            if liste[i] > liste[j]:
                liste[i], liste[j] = liste[j], liste[i]
    return liste

print(trie_a_bulles(liste))

















































