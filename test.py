






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


phrase = int(input("entré un chiffre" ))
for phrase in phrase:
    print(phrase.isnumeric(phrase))


print(type(phrase))
































































































