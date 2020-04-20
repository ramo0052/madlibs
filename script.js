// ### Little Red Riding Hood

// #### Part 1

// Create a new object, with variable name `littleRed`, for the story "Little Red Riding Hood". The object should contain the following properties:

// 1.  A **color** as a `string`
// 2.  An `array of strings` with each string being a **plural noun**. There should be a total of 4 strings
// 3.  An **adjective** as a `string`
// 4.  An **exclamation** as a `string`
// 5.  A **silly word** as a `string`
// 6.  An `array of strings` with each string being a **verb**. The first verb in the array should be past tense. There should be a total of 3 strings.

// Use a template literal and the object described above to complete the following story and output it to the console.

var littleRed = {
    color: 'Red',
    pluralNoun: ['apples', 'ears', 'eyes', 'teeths'],
    adjective: 'fat',
    exclamation: 'What are you doing here?',
    sillyWord: 'Red Riding Hood',
    verbs: ['went', 'listen', 'see','eat' ]
}

console.log (`One day, Little ${littleRed.color} Riding Hood was going through the forest carrying a 
basket of ${littleRed.pluralNoun[0]} for her grandmother. Suddenly, she met a big 
${littleRed.adjective} wolf.

"${littleRed.exclamation}" said the wolf. "Where are you going little ${littleRed.sillyWord}?"

"I'm going to my grandmother's house," she said. Then the wolf 
${littleRed.verbs[0]} away.

When Miss Riding Hood got to her grandmother's house, the wolf was in bed 
dressed like her grandmother.

"My, Grandmother," she said. "What big ${littleRed.pluralNoun[1]} you have."

"The better to ${littleRed.verbs[1]} you with," said the wolf.

"And, Grandmother," she said, "what big ${littleRed.pluralNoun[2]}" you have."

The wolf said, "The better to ${littleRed.verbs[2]} you with."

And then she said, "What big ${littleRed.pluralNoun[3]}" you have, Grandmother." But 
the wolf said nothing. He had just died of indigestion from eating Grandmother
`)

// #### Part 2

// Using the `littleRed` object created above, replace the values of the following properties:

// 1.  Change the **color** property to a different **color**
// 2.  Change the third string in the **plural noun** array to a different **plural noun**
// 3.  Change the **exclamation** to a different **exclamation**
// 4.  Change the second string in the **verb** array to a different **verb**

// Complete the story above using the update object and output it to the console.

littleRed.color = 'Blue',
littleRed.pluralNoun[2] = 'talk',
littleRed.exclamation = 'Where are you going?',
littleRed.verbs[1] = 'earing'


console.log (`One day, Little ${littleRed.color} Riding Hood was going through the forest carrying a 
basket of ${littleRed.pluralNoun[0]} for her grandmother. Suddenly, she met a big 
${littleRed.adjective} wolf.

"${littleRed.exclamation}" said the wolf. "Where are you going little ${littleRed.sillyWord}?"

"I'm going to my grandmother's house," she said. Then the wolf 
${littleRed.verbs[0]} away.

When Miss Riding Hood got to her grandmother's house, the wolf was in bed 
dressed like her grandmother.

"My, Grandmother," she said. "What big ${littleRed.pluralNoun[1]} you have."

"The better to ${littleRed.verbs[1]} you with," said the wolf.

"And, Grandmother," she said, "what big ${littleRed.pluralNoun[2]}" you have."

The wolf said, "The better to ${littleRed.verbs[2]} you with."

And then she said, "What big ${littleRed.pluralNoun[3]}" you have, Grandmother." But 
the wolf said nothing. He had just died of indigestion from eating Grandmother
`)

// #### Part 1

// Create a new object, with the name `snowWhite` for the story "Snow White". The object should contain the following properties:

// 1.  A `array of strings` with each string being a **plural noun**. There should be a total of 2 strings.
// 2.  A **number** as a `number`
// 3.  An `array of strings` with each string being an **adjective**. There should be a total of 3 strings.
// 4.  An `array of strings` with each string being a **noun**. There should be a total of 5 strings.
// 5.  A **color** as a `string`
// 6.  A **part of the body** as a `string`
// 7.  An **adverb** as a `string`

var snowWhite = {
    pluralNoun: ['tales', 'dwarves'],
    number: 7,
    adjectives: ['wonderful','friendly','small'],
    noum: ['Castle','village','reign','kiss', 'apple'],
    color: 'White',
    body: 'head',
    adverb: 'friendly',
}

console.log(`One of the most popular fairy ${snowWhite.pluralNoun[0]} of all time is Snow White and the 
${snowWhite.number} ${snowWhite.pluralNoun[1]}.
Snow White is a princess whose ${snowWhite.adjectives[0]} beauty threatens her stepmother, 
the queen. Snow White is forced to flee from the ${snowWhite.noum[0]} in which she lives 
and hide in a nearby ${snowWhite.noum[1]}.

Once there, she is discovered by ${snowWhite.adjectives[1]} animals who guide her to the 
${snowWhite.adjectives[2]} cottage of the seven dwarfs. The dwarfs take care of her until 
the prince, who has traveled the four corners of the ${snowWhite.noum[2]} in search of 
Snow ${snowWhite.color}, arrives and gives her a magical ${snowWhite.noum[3]} on her 
${snowWhite.body}, which miraculously bring her back to life after she eats 
a poisonous ${snowWhite.noum[4]}. Snow White and the prince live ${snowWhite.adverb} ever after.`)

// #### Part 2

// Using the `snowWhite` object created above, replace the values of the following properties:

// 1.  Change the **number** to a different **number**
// 2.  Change the first item in the **adjective** array to a different **adjective**
// 3.  Change the second and fourth items in the **noun** array to a different **noun**
// 4.  Change the **color** to a different **color**

snowWhite.number = 5,
snowWhite.adjectives[0] = 'magic',
snowWhite.noum[1,3] = ['slap','leg']
snowWhite.color = 'Red'


console.log(`One of the most popular fairy ${snowWhite.pluralNoun[0]} of all time is Snow White and the 
${snowWhite.number} ${snowWhite.pluralNoun[1]}.
Snow White is a princess whose ${snowWhite.adjectives[0]} beauty threatens her stepmother, 
the queen. Snow White is forced to flee from the ${snowWhite.noum[0]} in which she lives 
and hide in a nearby ${snowWhite.noum[1]}.

Once there, she is discovered by ${snowWhite.adjectives[1]} animals who guide her to the 
${snowWhite.adjectives[2]} cottage of the seven dwarfs. The dwarfs take care of her until 
the prince, who has traveled the four corners of the ${snowWhite.noum[2]} in search of 
Snow ${snowWhite.color}, arrives and gives her a magical ${snowWhite.noum[3]} on her 
${snowWhite.body}, which miraculously bring her back to life after she eats 
a poisonous ${snowWhite.noum[4]}. Snow White and the prince live ${snowWhite.adverb} ever after.`)