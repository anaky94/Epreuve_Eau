"""
Créez un programme qui affiche le N-ème élément de la célèbre suite de Fibonacci. (0, 1, 1, 2) étant le début de la suite et le premier élément étant à l’index 0.


Exemples d’utilisation :
$> python exo.py 3
2
$>

Afficher -1 si le paramètre est négatif ou mauvais.

"""

"""
Errors
    le programme consiste a ce que l'untilisateur rentre un chiffreet on affiche L Neme élément de celui ci de la suite de fibo et prendre comment argument de départ (0,1,1,2)
    géré les cas d'ereur
"""
# 1 : enté : nombre utilisateur 
    #nombre utilisateur =x
# 2 : creer une liste vide 
# si l'enté 

a, b, c, = 0, 1 ,1



def suite_fibo(user):
    valeur_str=int(input("entrer un argument: "))
    try: 
        valeur_str = int(valeur_str)
        except:
            print("ereur")
            exit(1)
        print(b, end=" ")
        a,b,c= b, a+b, c+1

user= int(input("entrer un argument"))









