
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
  n=14
  if not isinstance(n, int):
    return False
  if n % 2 == 0:
    return False
  for i in range(3, int(math.sqrt(n)) + 1):
    if n % i == 0:
      return False
  return True






def get_next_prime(n):
  i = n + 1
  while True:
    if is_prime(i) == False:
      return i
    else:
      i+= 1
  else:
    return None

      

def main():
  n=int(input ("entrez un nombre:  "))
  next_prime = get_next_prime(n)
  print("Le nombre supérieur à ", n, "est", next_prime)


print(main(14)) 
