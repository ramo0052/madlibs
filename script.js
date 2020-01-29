//Litle Red Ridding Hood - Part 1
const litleRed = {
    color: 'Red',
    noun: ['apples', 'eyes', 'ears', 'teeth'],
    adjective: 'bad',
    exclamation: 'Stop',
    silly: 'red riding hood',
    verbs: ['went', 'see', 'hear']
} 


console.log (
    `Part 1.
    One day, Little ${litleRed.color} Riding Hood was going through the forest carrying a 
    basket of ${litleRed.noun} for her grandmother. Suddenly, she met a big 
    ${litleRed.adjective} wolf.
    
    "${litleRed.exclamation}" said the wolf. "Where are you going little ${litleRed.silly}?"
    
    "I'm going to my grandmother's house," she said. Then the wolf 
    ${litleRed.verbs[0]} away.
    
    When Miss Riding Hood got to her grandmother's house, the wolf was in bed 
    dressed like her grandmother.
    
    "My, Grandmother," she said. "What big ${litleRed.noun[1]} you have."
    
    "The better to ${litleRed.verbs[1]} you with," said the wolf.
    
    "And, Grandmother," she said, "what big ${litleRed.noun[2]}" you have."
    
    The wolf said, "The better to ${litleRed.verbs[2]} you with."
    
    And then she said, "What big ${litleRed.noun[3]}" you have, Grandmother." But 
    the wolf said nothing. He had just died of indigestion from eating Grandmother`
)
//Litle Red Riding Hood - Part 2

litleRed.color = 'Blue'
litleRed.noun = ['bananas', 'feet', 'arms', 'hands']
litleRed.exclamation = 'Wait!'
litleRed.verbs = ['run','kick', 'hug']

console.log (
    `Part 2.
    One day, Little ${litleRed.color} Riding Hood was going through the forest carrying a 
    basket of ${litleRed.noun} for her grandmother. Suddenly, she met a big 
    ${litleRed.adjective} wolf.
    
    "${litleRed.exclamation}" said the wolf. "Where are you going little ${litleRed.silly}?"
    
    "I'm going to my grandmother's house," she said. Then the wolf 
    ${litleRed.verbs[0]} away.
    
    When Miss Riding Hood got to her grandmother's house, the wolf was in bed 
    dressed like her grandmother.
    
    "My, Grandmother," she said. "What big ${litleRed.noun[1]} you have."
    
    "The better to ${litleRed.verbs[1]} you with," said the wolf.
    
    "And, Grandmother," she said, "what big ${litleRed.noun[2]}" you have."
    
    The wolf said, "The better to ${litleRed.verbs[2]} you with."
    
    And then she said, "What big ${litleRed.noun[3]}" you have, Grandmother." But 
    the wolf said nothing. He had just died of indigestion from eating Grandmother`
)


//Snow White Part 1
const snowWhite = {
pluralNoun: ['tale','dwarfs'],
number: 7,
adjective:['impressive','funny','small'],
noun:['kingdown','village','world','kiss','apple'],
color:'White',
bodyPart: 'mouth',
adverb: 'happyly'
}

console.log (

`Snow White!
One of the most popular fairy ${snowWhite.pluralNoun[0]} of all time is Snow White and the 
${snowWhite.number} ${snowWhite.pluralNoun[1]}.

Snow White is a princess whose ${snowWhite.adjective[0]} beauty threatens her stepmother, 
the queen. Snow White is forced to flee from the ${snowWhite.noun[0]} in which she lives 
and hide in a nearby ${snowWhite.noun[1]}.

Once there, she is discovered by ${snowWhite.adjective[1]} animals who guide her to the 
${snowWhite.adjective[2]} cottage of the seven dwarfs. The dwarfs take care of her until 
the prince, who has traveled the four corners of the ${snowWhite.noun[2]} in search of 
Snow ${snowWhite.color}, arrives and gives her a magical ${snowWhite.noun[3]} on her 
${snowWhite.bodyPart}, which miraculously bring her back to life after she eats 
a poisonous ${snowWhite.noun[4]}. Snow White and the prince live ${snowWhite.adverb} ever after.`
)

//Snow White Part 2
snowWhite.color = 'Blue'
snowWhite.number = 5
snowWhite.adjective[0] = 'unbelivable'
snowWhite.noun[1] = 'neighboor'
snowWhite.noun[3] = 'pinch'


console.log (

    `Snow White. Part 2.
    One of the most popular fairy ${snowWhite.pluralNoun[0]} of all time is Snow White and the 
    ${snowWhite.number} ${snowWhite.pluralNoun[1]}.
    
    Snow White is a princess whose ${snowWhite.adjective[0]} beauty threatens her stepmother, 
    the queen. Snow White is forced to flee from the ${snowWhite.noun[0]} in which she lives 
    and hide in a nearby ${snowWhite.noun[1]}.
    
    Once there, she is discovered by ${snowWhite.adjective[1]} animals who guide her to the 
    ${snowWhite.adjective[2]} cottage of the seven dwarfs. The dwarfs take care of her until 
    the prince, who has traveled the four corners of the ${snowWhite.noun[2]} in search of 
    Snow ${snowWhite.color}, arrives and gives her a magical ${snowWhite.noun[3]} on her 
    ${snowWhite.bodyPart}, which miraculously bring her back to life after she eats 
    a poisonous ${snowWhite.noun[4]}. Snow White and the prince live ${snowWhite.adverb} ever after.`
    )