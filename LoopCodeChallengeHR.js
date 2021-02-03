
//Task

    // Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, , consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:

    // First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
    // Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .

// parameter is string "s"
function vowelsAndConsonants(s) {
    let vowels=[];
    let consonant=[];

    for(let i=0;i<s.length;i++) {
        if(s[i]==='a'|| s[i]==='e' || s[i]==='i'||s[i]==='o'||s[i]==='u'){
            vowels.push(s[i]);
        } else{
            consonant.push(s[i]);
        }
    }

    //print vowels then consonant
    for(let i=0;i<vowels.length;i++){
        console.log(vowels[i]);
    }

    for(let i=0;i<consonant.length;i++){
        console.log(consonant[i]);
    }
}


vowelsAndConsonants('javascriptloops');