



import time


"""
phrase = input("entrez une phrase: ")

mot=phrase.split() #convertir la phrase en liste de mots

phrase = " ". join(mot)
for phrase in phrase: # met en majuscule la prémière lettre de chaque mot 
    mot[0]=phrase[0].upper()
print(phrase) 


"""
"""
phrase=input("entrez une phrase:")

phrase= phrase.upper()
phrase= "".join(phrase)
phrase=" ".join([mot[0] for mot in phrase.split()])

print(phrase)

"""
"""
phrase=input("entre une phrase :")

mots=phrase.split()

for mot in mots:
    new_mot = mot[0].upper() + mot[1:]
    mot = new_mot

phrase=" ".join(mots)

print(phrase)
"""
"""

print("ce Programme vous permet de voir quel temps met un oeuf à cuire selon sa taille et sa température ")
print("pour commencer, choisissez la taille de l'oeuf")
print ("1 - Oeufs à la coque : 3 minutes")
print("2 - Oeufs mollets : 6 minutes")
print("3 - Oeufs durs : 9 minutes")
choix= input("voustre choix (1 , 2 ou 3) : ")

if choix =="1":
    for i in range (10):
        time.sleep(1)
        print(".", end="", flush=True)


if choix == "2":
    for i in range (10):
        time.sleep(1)
        print(".", end="", flush=True)
    time.sleep(1)
    print("6 minute ",".", end="", flush=True)
    print("temps restant", "5 minute", ".", end="", flush=True)
    
    


if choix == "3":
    time.sleep(1)
    print(".", end="", flush=True)

"""
""" 
 tablau trié 1 5 8 10 
 trier le bableau 
 trouver l'ecart enntre 1 et 5 en suite 5 et 8 et 8 et 10
"""

ma_liste= [4, 1, 19, 3, 67]

def trier():
   
    ma_liste.sort()
    print(ma_liste)

trier() # resultat du tableau trier 


# trouver l'ecart entre 1 et 5 en suite 5 et 8 et 8 et 10 

def ecart():
    for i in range(len(ma_liste)-1):
        print(ma_liste[i+1]-ma_liste[i])
    
    


""""

"""
























































































