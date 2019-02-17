function enter_array(array1){ // enter an array of strings and return an object with keys (length and sentence)
    object1 = {};
    let a = 0;
    let b = '';
    let word;
    for (word of array1) {  // can also do array.length
        a++;
        b = b + ' ' + word;
    }
    object1.length = a;
    object1.sentence = b;
    return object1
}

console.log(enter_array(["hi","how","are","you"]));







