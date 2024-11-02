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
//     let price = array[index]
//     array.splice(index,1)
//     array.splice(move, 0 , price)
//     return array;
    
// }
// console.log(position([10, 20, 30, 40, 50], 0, 2));

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
//     const words = sentence.split(" ") 
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
//     }
//     return words.join(" "); 
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
