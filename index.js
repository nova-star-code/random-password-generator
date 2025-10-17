const generateEl = document.getElementById("password-btn");
const firstPasswordEl = document.getElementById("firstPassword");
const secondPasswordEl = document.getElementById("secondPassword");
const inputRangeEl = document.getElementById("input-range")
const inputValueEl = document.getElementById("input-value")

//check box selector
const lowercaseEl = document.getElementById("lowercase-box")
const uppercaseEl = document.getElementById("uppercase-box")
const numberEl = document.getElementById("number-box")
const specialEl = document.getElementById("special-box")

const lowercase = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z"
];

const uppercase = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];

const numbers = [0,1,2,3,4,5,6,7,8,9];

const specialChars = [
  "!", "@", "#", "$", "%", "^", "&", "*",
  "(", ")", "_", "+", "-", "=", "{", "}",
  "[", "]", ":", ";", "'", '"', "<", ">",
  ",", ".", "?", "/", "\\", "|", "~", "`"
];

console.log(specialChars);


/*
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
*/


//change the label display content by matching with input value
inputRangeEl.addEventListener("input",()=>{
    inputValueEl.textContent = inputRangeEl.value;
})

generateEl.addEventListener("click", generatePassword)

//async function is able to let you use await keyword and return promise.

//promise represent something that will finish later
firstPasswordEl.addEventListener("click", async()=>{
    try{
        const text = (firstPasswordEl.textContent).trim()
        await navigator.clipboard.writeText(text)
        alert(`copy: ${text}  successfully`)
    }catch(err){
        console.err("Copy fail")
    }
});

secondPasswordEl.addEventListener("click", async()=>{
    const text =(secondPasswordEl.textContent).trim()
    try{
        await navigator.clipboard.writeText(text)
        alert(`copy: ${text}  successfully`)
    }catch (err){
        console.err("Copy fail")
    }
})



function generatePassword() {
    // generate a random index, then use that index to select a value from array, store into a password varible.
    const length = inputRangeEl.value

    let possibleCharactor=[]
    let randomIndex = 0
    let randomSelect = ""
    // store the passwork from loop
    let firstPassword = ""
    let secondPassword = ""

    if(lowercaseEl.checked){
        possibleCharactor.push(...lowercase)
    }

    if(uppercaseEl.checked){
        possibleCharactor.push(...uppercase)
    }

    if(numberEl.checked){
        possibleCharactor.push(...numbers)
    }

    if(specialEl.checked){
        possibleCharactor.push(...specialChars)
    }

    //looping for 15 times for the range of password
    //length >0 to determine a user at lease check one check box, otherwise, it won't generate password  
    if(possibleCharactor.length>0){
        for (let i = 0;i<length;i++){
            randomIndex = Math.floor(Math.random()*possibleCharactor.length)
            randomSelect = possibleCharactor[randomIndex]
            firstPassword+=randomSelect
        }

        for (let i = 0;i<length;i++){
            randomIndex = Math.floor(Math.random()*possibleCharactor.length)
            randomSelect = possibleCharactor[randomIndex]
            secondPassword+=randomSelect
        }
    //display the result on html
        firstPasswordEl.textContent=firstPassword
        secondPasswordEl.textContent=secondPassword
    }
}



