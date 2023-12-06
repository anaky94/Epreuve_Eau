"""
Créez un programme qui trie les éléments donnés en argument par ordre ASCII.
Exemples d’utilisation :
$> python exo.py Alfred Momo Gilbert
Alfred Gilbert Momo
$> python exo.py A Z E R T Y
A E R T Y Z

Afficher error et quitter le programme en cas de problèmes d’arguments.

"""
#il nous faut des lettre en arguments pour pouvoir les trier 
# On vas  donc 
# On vas donc utiliser sys.argv
"""
liste= ["baonjour"]
def list_ascii(liste):
    ascci_liste = [chr(i) for i in range(97,123)] 
    for ascii_liste in range(len(ascci_liste)-1):
        for j in range(len(ascci_liste)-i-1):
            if liste [j]> liste[j+1]:
                liste[j], liste [j+1] = liste[j +1], liste[j]
"""
"""
var = "p"
var1 = "c"

def ordre( p, b):
    ascii_liste = [chr(i) for i in range(97,123)]
    if chr(p) > chr(b):
        print(chr(p))
        print(chr(b))
    else:
        print(chr(b))
        print(chr(p))
    
ordre()
"""

def ordre (phrase):
    lettres= list(phrase)
    return sorted(lettres, key = lambda lettre : ord(lettre))

phrase = "AZERTY"

print(ordre(phrase))





















