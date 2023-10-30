
"""
Créez un programme qui affiche le premier nombre premier supérieur au nombre donné en argument.

Exemples d’utilisation :
$> python exo.py 14
17
$>

Afficher -1 si le paramètre est négatif ou mauvais.

"""
#n=int(input("entré un argument en nombre avoir le nombre premier "))

def is_prime(n):
    
    if n % 2 ==0:
        return False
    for i in range (3, int(n** 0.5) + 1,2):
        if n % i ==0:
            return False
    return True



get_next_prime(n)
"""Retourne le nombre premier supérieur ou égal à n.

  Args:
    n: Le nombre à partir duquel on commence la recherche.

  Returns:
    Le nombre premier supérieur ou égal à n.
  """
    i = n + 1
    while True:
        if is_prime(i):
            return i
        i += 1

def main():
    """Affiche le nombre premier supérieur à n.

  Args:
    n: Le nombre à partir duquel on commence la recherche.

  Returns:
    Rien.
  """

n = int(input("Entrez un nombre: "))
nex_prime=get_next_prime(n)
print("Le nombre premier supérieur à ",n, "est", next_prime)


main()
