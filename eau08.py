"""
Créez un programme qui met en majuscule la première lettre de chaque mot d’une chaîne de caractères. Les autres lettres devront être en minuscules. Les mots ne sont délimités que par un espace, une tabulation ou un retour à la ligne.


Exemples d’utilisation :
$> python exo.py “bonjour mathilde, comment vas-tu ?!”
Bonjour Mathilde, Comment Vas-tu ?!


$> python exo.py 42
error

Afficher error et quitter le programme en cas de problèmes d’arguments.
"""
"""
première_lettres=list(input("entrez une phrase :"))
phrase="".join(list)
phrase=phrase.split()

for i in phrase.split():
    première_lettres.append(i[0])
    if list[i] == "":
        list[i]=list[i].upper()
        print(list[i])
    #if phrase != str(list):
        #print("error")
        #break
phrase="".join(list)

print(phrase)

"""
"""
phrase=list(input("entrez une phrase :"))

mot = phrase.split()



for mot in mot:   
    
    mot[0]=mot[0].upper()

    if phrase.isnumeric():
        print("error")
        break

phrase="".join(mot)

"""
phrase = input ("entre un ephrase: ")
phrase= phrase.title()
if phrase.isnumeric():
        print("error")
        exit(1)
print(phrase)
































