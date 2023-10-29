"""
Créez un programme qui affiche le N-ème élément de la célèbre suite de Fibonacci. (0, 1, 1, 2) étant le début de la suite et le premier élément étant à l’index 0.


Exemples d’utilisation :
$> python exo.py 3
2
$>

Afficher -1 si le paramètre est négatif ou mauvais.

"""

"""

def suite_fibo(user):
    a, b, c, = 0, 1 ,1
    while c != user :
        print(b, end=" ")
        a,b,c= b, a+b, c+1
    try: 
        valeur_str = int(valeur_str)
    except:
        print("ereur")
        exit(1)
        

user= int(input("entrer un argument"))


"""

#n=input("Entré un chifre pour calculer Le N'eme élément de la suite de fibonancy ")

def fib(n):
    if n <=2:
        result=1
    elif n <=0 :
        print("ereur -1")
        exit(1)
    elif n =="":
        print("Erreur -1")
        exit
    else:
        result= fib(n-1) + fib(n-2)
    return result

n=int(input("rentré un chiffre pour calculer la n'emme élément de la suite de fibonancy "))

present=print(fib(n))









