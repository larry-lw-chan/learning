function processData(input) {
    //Enter your code here
    let instruction_set = input.split(';');

    // The operation will either be S (split) or C (combine)
    let operation = instruction_set[0];

    // M indicates method, C indicates class, and V indicates variable
    let type = instruction_set[1];

    // In the case of a split operation, the words will be a camel case method, 
    // class or variable name that you need to split into a space-delimited list 
    // of words starting with a lowercase letter.
    if (operation === 'S') {
        if (type == 'M') {
            instruction_set[2] = instruction_set[2].replace('()', '');
            let words = instruction_set[2].split(/(?=[A-Z])/);
            console.log(words.join(' ').toLowerCase());
        }
        if (type == 'V') {
            let words = instruction_set[2].split(/(?=[A-Z])/);
            console.log(words.join(' ').toLowerCase());
        }
        if (type == 'C') {
            let words = instruction_set[2].split(/(?=[A-Z])/);
            console.log(words.join(' ').toLowerCase());            
        }
    }

    // In the case of a combine operation, the words will be a space-delimited list 
    // of words starting with lowercase letters that you need to combine into the 
    // appropriate camel case String. Methods should end with an empty set of parentheses 
    // to differentiate them from variable names.
    if (operation === 'C') {
        if (type == 'M') {
            // Split the words into an array
            let words = instruction_set[2].split(" ");
            // Capitalize the first letter of each word
            for (let i = 0; i < words.length; i++) {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
            }
            console.log(words.join('') + '()');
        }
        if (type == 'V') {
            // Split the words into an array
            let words = instruction_set[2].split(" ");
            // Capitalize the first letter of each word
            for (let i = 1; i < words.length; i++) {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
            }
            console.log(words.join(''));            
        }
        if (type == 'C') {
            // Split the words into an array
            let words = instruction_set[2].split(" ");
            // Capitalize the first letter of each word
            for (let i = 0; i < words.length; i++) {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
            }
            console.log(words.join(''));
        }
    }
} 

processData("S;V;iPad");
processData("C;M;mouse pad");
processData("C;C;code swarm");
processData("S;C;OrangeHighlighter");

// S;V;iPad
// C;M;mouse pad
// C;C;code swarm
// S;C;OrangeHighlighter

// Sample Input
// S;M;plasticCup()             // plastic cup
// C;V;mobile phone             // mobilePhone
// C;C;coffee machine           // CoffeeMachine
// S;C;LargeSoftwareBook        // large software book
// C;M;white sheet of paper     // WhiteSheetOfPaper
// S;V;pictureFrame             // picture frame
