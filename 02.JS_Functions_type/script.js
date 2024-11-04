// 1. Göndərilmiş 2 ədəddən 1-cisini 2-cisinin qüvvətinə yüksəldən function. 
// Misalçün function-a gələn ilk arqumenti 2-ci arqument qədər qüvvətə yüksəldən function - 
// dəyərləri prompt vasitəsi ilə qəbul edib function-a göndərin)
// function quvvet (num1 ,num2){
//     num1 = num1 ** num2
//     return num1;
// }
// const num1 = +prompt("1-ci ededi daxil edin:")
// const num2 = +prompt("2-ci ededi daxil edin:");
// console.log(quvvet(num1, num2));

// 2.Bir funksiya yazın , 3 parametr qəbul etsin.Birincisi array olsun ikinci və rəqəm arraydəki elementin hal-hazırda olduğu mövqeni, 
// 3cü isə hansı mövqeyə hərəkət etdirməli olduğunuzu göstərsin.Beləliklə arrayın elementlərini bir yerdən başqa yerə hərəkət etdirin.
// Məsələn:
// console.log(move([10, 20, 30, 40, 50], 0, 2));
// Expected Output:
// [20, 30, 10, 40, 50]
// function position(array, index,move){
    // let price = array[index]
    // array.splice(index,1)
    // array.splice(move, 0 , price)
    // return array;
// 
// }
// console.log(position(["a", "b", "c", "d"], 0, 2));

// 3.Daxil edilən arraydə təkrarlanan elementi silən və yeni array qaytaran funksiya yazın.
// Məsələn:
// console.log(deleteRepeate([1, 2, 2, 3, 4, 4, 5]))
// console.log(deleteRepeate([1, 2, 3, 4, 5]))
// console.log(deleteRepeate([1, -2, -2, 3, 4, -5, -6, -5]))

// Expected Output:
// [1,2,3,4,5]
// [1,2,3,4,5]
// [1,-2,3,4,-5,-6]

// function deleteRepeate(array){
//     let price = []
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i+1 ; j < array.length; j++) {
//             if (array[i] == array[j]){
//                 array.splice(j,1)
                
                
//             }

            
            
//         }
        
        
//     }
//     return array

// }

// console.log(deleteRepeate([1, 2, 2, 3, 4, 4, 5]));


// 4.Daxil edilən cümlənin bütün sözlərinin ilk hərfini böyük edərək qaytaran funksiya yazın.

// sentenceCapitalization("a short sentence")
// Expected Output:
// "A Short Sentence"
// function word (sentence){
    // const words = sentence.split(" ") 
    // for (let i = 0; i < words.length; i++) {
        // words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    // }
    // return words.join(" "); 
// }
// const sentence = prompt("cumleni daxil edin")
// console.log(word(sentence));


//5. Daxil edilən iki arrayi birləşdirən funksiya yazın.
// console.log(concatArray([1,2,3,4,5],[6,7,8,9]))
// Expected Output:
// [1,2,3,4,5,6,7,8,9]

// function arrays(array1,array2){
//     let total_array =[]
//     for (let i = 0; i < array1.length; i++) {
//         total_array.push(array1[i]);
        
//     }
//     for (let j = 0; j < array2.length; j++) {
//       total_array.push(array2[j]);
//     }
//     return total_array;
// }
// console.log(arrays([1, 2, 3, 4, 5], [6, 7, 8, 9]));


// 6. Daxil edilən cümlədə necə söz olduğun tapan funksiya yazın.
// function select(sentence){
//     let words = sentence.split(" ")
//     for (let i = 0; i < words.length; i++) {
//         return words.length
//     }

// }
// sentence = prompt("cumleni daxil edin")
// console.log(select(sentence));


// 7. Function yazın. Parametr qəbul etsin və bu parametr bir array (ədədlərdən ibraət array) olsun. 
// Funksiya həmin arrayin medianını tapsın.Median ən ortada dayanan ədədi bildirir. 
// Əgər array uzunluğu cütdürsə onda ortadakı 2 ədədin cəminin yarısı median olacaqdır.

// function parametr(array){
//     let median = [];
//     for (let i = 0; i < array.length; i++) {

//         if(array.length % 2 == 1){
//             median = array[Math.floor(array.length / 2)];
            
//         }
//         else{
//             median = (array[array.length / 2] + array[(array.length / 2)-1]) / 2
//         }
        
//     }
//     return median;
// }
// console.log(parametr([1,2,3,4,5,6]));


// 8. 

// Write a method that returns a duplicate-free array.
// console.log(clearDuplicate([1, 2, 1, 2, 3])); -> [1, 2, 3]
// console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false])); -> ['a', 2, 'd', 14, 's', false]
    // function clearDuplicate(array){
        // let clearreturn = [];
        // for (let i = 0; i < array.length; i++) {
            // for (let j = i+1; j < array.length; j++) {
                // if(array[i] == array[j]){
                    // clearreturn = array.splice(j,1);
// 
                // }
                // 
            // }        
        // }
        // return array;
    // }
    // console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false]));


    // 9; 

    // Bir string ve bir char qebul eden bir function yazın.
    // Əgər daxil olunmuş char string-də varsa char-ın yerləşdiyi indekslərin cəmini yoxdursa -1 return etsin. 
    // Məsələn salam və 'a' daxil olunarsa output 1+3=4 olmalıdır.

    // function entrance(strings , chars){
    //     let sum = 0;
    //     for (let i = 0; i < strings.length; i++) {
    //         if(chars == strings[i]){
    //             sum += i;
    //         }
    //         else{
    //             sum = -1;
    //         }
    //     }
    //     return sum
    // }
    // console.log(entrance("salama","r"));
    

    // 10. 

// const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

// countries arrayindəki ölkələrin ilk 3 hərfini (hər bir hərf böyük olmalıdır) yeni arrayda yığın

// output: ["FIN", "DEN", "SWE", "NOR", "ICE"];

// function countries(array){
//     let new_array = [];
//     for (let i = 0; i < array.length; i++) {
//         let strings;
//         strings = array[i].slice(0, 3).toUpperCase();      
//         new_array.push(strings);  
//     }
//     return new_array;
// }
// console.log(countries(["Finland", "Denmark", "Sweden", "Norway", "Iceland"]));


// 11. Write a JavaScript program(function) that accepts a string as input and swaps the case of each character. 
// For example, if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'Example: 
// console.log(convert('saLamNecesen)) -> SAlAMnECESEN
// function sentence(strings){
//     let result = [];
//     for (let i = 0; i < strings.length; i++) {
//       if (strings[i] == strings[i].toUpperCase) {
//         result += strings[i].toLowerCase;
//       } else if (string[i] == strings[i].toLowerCase) {
//         result += strings[i].toUpperCase;
//       }
//     }
//     return result
// }
// strings = prompt("cumleni daxil ednin")
// console.log(sentence(strings));


// 12
// Write a function that compares two arrays and returns true if they are identical.
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4])) -> true
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])) -> false
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false])) -> false
// console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false])) -> true

// function  compares(array1,array2){
//     let price = true;
//     for (let i = 0; i < array1.length; i++) {
//        for (let j = 0; j < array2.length; j++) {
//         if(array1[i]==array2[j]){
//             price = true;
//         }
//         else {
//             price = false;
//         }
//        }
       
//     }
    
//     return price; 
// }
// console.log(compares([1, 2, 3, 4], [1, 2, 3, 4, 5]));
