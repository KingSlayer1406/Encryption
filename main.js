// alert("hello");
    
encryptor = message =>{
    let encryptedmessage;
    const messageArr = message.split("");
    console.log("message array",messageArr);

    let encryptedmessageArr = [];
    for(i=0; i<messageArr.length; i++){
        let letter;
        switch(messageArr[i]){
            case "a":
            letter = "=";
            break;
            case "b":
             letter = "!";
             break;
             case "c":
             letter = "#"   
             break; 
             case "d":
             letter = "$"   
             break; 
             case "e":
             letter = "%"   
             break; 
             case "f":
             letter = "^"   
             break; 
             case "g":
             letter = "&"   
             break; 
             case "h":
             letter = "*"   
             break; 
             case "i":
             letter = "("   
             break; 
             case "j":
             letter = ")"   
             break; 
             case "k":
             letter = "-"   
             break; 
             case "l":
             letter = "+"   
             break; 
             case "m":
             letter = "~"   
             break; 
             case "n":
             letter = ":"   
             break; 
             case "o":
             letter = ";"   
             break; 
             case "p":
             letter = "'"   
             break; 
             case "q":
             letter = "["   
             break; 
             case "r":
             letter = "{"   
             break; 
             case "s":
             letter = "]"   
             break; 
             case "t":
             letter = "}"   
             break; 
             case "u":
             letter = "|"   
             break; 
             case "v":
             letter = "."   
             break; 
             case "w":
             letter = ","   
             break; 
             case "x":
             letter = "<"   
             break; 
             case "y":
             letter = ">"   
             break; 
             case "z":
             letter = "?"   
             break; 

             case "A":
                letter = "=";
                break;
                case "B":
                 letter = "!";
                 break;
                 case "C":
                 letter = "#"   
                 break; 
                 case "D":
                 letter = "$"   
                 break; 
                 case "E":
                 letter = "%"   
                 break; 
                 case "F":
                 letter = "^"   
                 break; 
                 case "G":
                 letter = "&"   
                 break; 
                 case "H":
                 letter = "*"   
                 break; 
                 case "I":
                 letter = "("   
                 break; 
                 case "J":
                 letter = ")"   
                 break; 
                 case "K":
                 letter = "-"   
                 break; 
                 case "L":
                 letter = "+"   
                 break; 
                 case "M":
                 letter = "~"   
                 break; 
                 case "N":
                 letter = ":"   
                 break; 
                 case "O":
                 letter = ";"   
                 break; 
                 case "P":
                 letter = "'"   
                 break; 
                 case "Q":
                 letter = "["   
                 break; 
                 case "R":
                 letter = "{"   
                 break; 
                 case "S":
                 letter = "]"   
                 break; 
                 case "T":
                 letter = "}"   
                 break; 
                 case "U":
                 letter = "|"   
                 break; 
                 case "V":
                 letter = "."   
                 break; 
                 case "W":
                 letter = ","   
                 break; 
                 case "X":
                 letter = "<"   
                 break; 
                 case "Y":
                 letter = ">"   
                 break; 
                 case "Z":
                 letter = "?"   
                 break; 
                 default:
                letter = messageArr[i];
                break;
          }
          encryptedmessageArr.push(letter);
          console.log("encrypted message arry");
    }
    encryptedmessage = encryptedmessageArr.join("")
    return encryptedmessage;
};
console.log(("encrypted message array", encryptor("Hello How are You")));

function decryptor  (message) {
    let decryptedmessage;

    const messageArr = message.split("");
    console.log("message array",messageArr);
    let decryptedmessageArr = [];
    for(i=0; i<messageArr.length; i++){
        let letter;
        switch(messageArr[i]){
            case "=":
                letter = "a";
                break;
                case "!":
                 letter = "b";
                 break;
                 case "#":
                 letter = "c"   
                 break; 
                 case "$":
                 letter = "d"   
                 break; 
                 case "%":
                 letter = "e"   
                 break; 
                 case "^":
                 letter = "f"   
                 break; 
                 case "&":
                 letter = "g"   
                 break; 
                 case "*":
                 letter = "h"   
                 break; 
                 case "(":
                 letter = "i"   
                 break; 
                 case ")":
                 letter = "j"   
                 break; 
                 case "-":
                 letter = "k"   
                 break; 
                 case "+":
                 letter = "l"   
                 break; 
                 case "~":
                 letter = "m"   
                 break; 
                 case ":":
                 letter = "n"   
                 break; 
                 case ";":
                 letter = "o"   
                 break; 
                 case "'":
                 letter = "p"   
                 break; 
                 case "[":
                 letter = "q"   
                 break; 
                 case "{":
                 letter = "r"   
                 break; 
                 case "]":
                 letter = "s"   
                 break; 
                 case "}":
                 letter = "t"   
                 break; 
                 case "|":
                 letter = "u"   
                 break; 
                 case ".":
                 letter = "v"   
                 break; 
                 case ",":
                 letter = "w"   
                 break; 
                 case "<":
                 letter = "x"   
                 break; 
                 case ">":
                 letter = "y"   
                 break; 
                 case "?":
                 letter = "z"   
                 break; 
    
                 case "=":
                    letter = "A";
                    break;
                    case "!":
                     letter = "B";
                     break;
                     case "#":
                     letter = "C"   
                     break; 
                     case "$":
                     letter = "D"   
                     break; 
                     case "%":
                     letter = "E"   
                     break; 
                     case "^":
                     letter = "F"   
                     break; 
                     case "&":
                     letter = "G"   
                     break; 
                     case "*":
                     letter = "H"   
                     break; 
                     case "(":
                     letter = "I"   
                     break; 
                     case ")":
                     letter = "J"   
                     break; 
                     case "-":
                     letter = "K"   
                     break; 
                     case "+":
                     letter = "L"   
                     break; 
                     case "~":
                     letter = "M"   
                     break; 
                     case ":":
                     letter = "N"   
                     break; 
                     case ":":
                     letter = "O"   
                     break; 
                     case "'":
                     letter = "P"   
                     break; 
                     case "[":
                     letter = "Q"   
                     break; 
                     case "{":
                     letter = "R"   
                     break; 
                     case "]":
                     letter = "S"   
                     break; 
                     case "}":
                     letter = "T"   
                     break; 
                     case "|":
                     letter = "U"   
                     break; 
                     case ".":
                     letter = "V"   
                     break; 
                     case ",":
                     letter = "W"   
                     break; 
                     case "<":
                     letter = "X"   
                     break; 
                     case ">":
                     letter = "Y"   
                     break; 
                     case "?":
                     letter = "Z"   
                     break;
                     default :
                     letter = messageArr[i];
                     break;
                 
    
          }
          decryptedmessageArr.push(letter);
          console.log("decrypted message arry");
    }
    decryptedmessage = decryptedmessageArr.join("")
    return decryptedmessage;
};

document.getElementById(Input);
console.log("decrypted message:",  decryptor(" *%++; *;, ={% >;| "));