/** Takes a string and returns a new string with vowels removed.
 * @param {string} givenString
 * @returns {string} new string, with vowels removed.
 */
function removeVowels(givenString){
let newString = "";
for(let letter of givenString){
    if(checkVowel(letter) === false){
        newString += letter;
    }
}
return newString;
}

function checkVowel(character){
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
return vowels.includes(character);
}

export { removeVowels };
