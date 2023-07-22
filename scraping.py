def writeClasses(spellName):
    #print(spellName)
    time.sleep(5)
    htmlFile = urllib.request.urlopen("http://dnd5e.wikidot.com/spell:" + spellName).read().decode("utf8")
    searchTerm = "spells:"
    res = [i for i in range(len(htmlFile)) if htmlFile.startswith(searchTerm, i)]
    for x in res:
        i = x + 7
        classString = ""
        while htmlFile[i] != '\"':
            classString += htmlFile[i]
            i += 1
        print(classString)



import urllib.request
import time
htmlFile = urllib.request.urlopen("http://dnd5e.wikidot.com/spells").read().decode("utf8")
classString = ""

breakVar = 0
searchTerm = "spell:"
res = [i for i in range(len(htmlFile)) if htmlFile.startswith(searchTerm, i)]

for spellIndex in res:
    timesLooped = spellIndex + 6
    spellName = ""
    while htmlFile[timesLooped] != "\"":
        spellName += htmlFile[timesLooped]
        timesLooped += 1

    writeClasses(spellName)
    breakVar += 1
    if breakVar == 5:
        quit()




