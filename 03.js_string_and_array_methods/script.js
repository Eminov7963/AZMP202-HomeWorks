// # Verilən bir cümlənin bütün hərflərini böyük hərflərə çevirən bir funksiya yazın.convertToUpper("Hello World");
// Nəticə: "HELLO WORLD"

// function convertToUpper(sentence){
    // let new_sentence = sentence.toUpperCase();
    // return new_sentence
// 
// }
// console.log(convertToUpper("Hello World"));

// # Daxil edilən cümlədə ən uzun sozu return edən funksiya yazın
// function sentence(sen) {
//   let words = sen.split(" ");
//   let uzun_soz = "";
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > uzun_soz.length) {
//       uzun_soz = words[i];
//     }
//   }
//   return uzun_soz;
// }

// console.log(sentence("Eminov Emini Emin"));

// # Verilən bir cümlədəki sözləri tərs sıraya düzmək üçün funksiya yazın.


// function convertToUpper(sentence){
    // let new_sentence = sentence.split(" ").reverse().join(" ")
    // return new_sentence
// 
// }
// console.log(convertToUpper("Hello World"));
// function arr (array){
    // let artan = array.sort();
    // return artan
// }
// console.log(arr([1,3,2,5,7]));

// # Cümlədəki bir hərfi başqası ilə əvəzləyən və lowerCase edilmiş şəkildə qaytaran bir funksiya yazın.

// function replac(word,char1,char2){
//     let result = word.replaceAll(char1, char2);
//     return result;
// }

// console.log(replac("Salam", "a", "o"));


// // Task 1.
// ARRAY METHODS
// 1) const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// #add 'Meat' in the beginning of your shopping cart if it has not been already added
// #add Sugar at the end of you shopping cart if it has not been already added
// #remove 'Honey' if you are allergic to honey
// #modify Tea to 'Green Tea'



// #add 'Meat' in the beginning of your shopping cart if it has not been already added
// function shop(array, word){
//     array.unshift(word);
//     return array;
// }
// console.log(shop(["Coffee", "Tea", "Honey"], "Milk"));

// #add Sugar at the end of you shopping cart if it has not been already added
// function shop(array, word){
//     array.push(word);
//     return array;
// }
// console.log(shop(["Coffee", "Tea", "Honey"], "Milk"));



// #remove 'Honey' if you are allergic to honey


// function shop(array, word) {
//   const index = array.indexOf(word); 
//   if (index !== -1) {
//     array.splice(index, 1); 
//   }
//   return array; 
// }

// console.log(shop(["Coffee", "Honey", "Tea", "Milk"], "Honey"));

// #modify Tea to 'Green Tea'



// function shop(array) {
    
//     array.splice(2,1)
//     array.splice(2, 0, "Green Tea");
//     return array
        
    
// }

// console.log(shop(["Coffee", "Honey", "Tea", "Milk"]));





// 2) const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]


// #Reverse countries array using reverse() method
// function Names (countries){
//     countries.reverse();
//     return countries;
// }
// console.log(
//   Names([
//     "Albania",
//     "Bolivia",
//     "Canada",
//     "Denmark",
//     "Ethiopia",
//     "Finland",
//     "Germany",
//     "Hungary",
//     "Ireland",
//     "Japan",
//     "Kenya",
//   ])
// );

// #remove "Canada" and "Denmark", and add "Azerbaijan 
// (splice)


// function Names (countries){
//     countries.splice(2,2);
//     countries.splice(2, 0, "Azerbaijan");
//     return countries;
// }
// console.log(
//   Names([
//     "Albania",
//     "Bolivia",
//     "Canada",
//     "Denmark",
//     "Ethiopia",
//     "Finland",
//     "Germany",
//     "Hungary",
//     "Ireland",
//     "Japan",
//     "Kenya",
//   ])
// );


// 3) #Concatenate the following two variables and store it in a fullStack variable.

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']

// console.log(fullStack)
// function developer(front_end,back_end){
//     let full_stack = front_end.concat(back_end)
//     return full_stack;
// }
// console.log(
//   developer(
//     ["HTML", "CSS", "JS", "React", "Redux"],
//     ["Node", "Express", "MongoDB"]
//   )
// );


// 4) const itCompanies = [Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon]

// #Slice out the first 3 companies from the array
// #Slice out the last 3 companies from the array
// #Slice out the middle IT company or companies from the array
// #Sort companies array using sort() method
// #Change each company name to uppercase one by one and print them out
// #Check if a "Google" company exists in the itCompanies array. If it exist return the company else return a company is not found
// #Filter out companies which have more than one 'o' without the filter method




// #Slice out the first 3 companies from the array
// function slices (itCompanies){
//    let new_itCompanies = itCompanies.slice(0,3);
//    return new_itCompanies
// }
// console.log(slices(["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]));


// #Slice out the last 3 companies from the array
// function slices(itCompanies) {
//   let new_itCompanies = itCompanies.slice(4);
//   return new_itCompanies;
// }
// console.log(
//   slices([
//     "Facebook",
//     "Google",
//     "Microsoft",
//     "Apple",
//     "IBM",
//     "Oracle",
//     "Amazon",
//   ])
// );


// #Slice out the middle IT company or companies from the array

// function slices(itCompanies) {
//   let new_itCompanies = itCompanies.slice(2,5);
//   return new_itCompanies;
// }
// console.log(
//   slices([
//     "Facebook",
//     "Google",
//     "Microsoft",
//     "Apple",
//     "IBM",
//     "Oracle",
//     "Amazon",
//   ])
// );

// #Sort companies array using sort() method

// function slices(itCompanies) {
//   let new_itCompanies = itCompanies.sort();
//   return new_itCompanies;
// }
// console.log(
//   slices([
//     "Facebook",
//     "Google",
//     "Microsoft",
//     "Apple",
//     "IBM",
//     "Oracle",
//     "Amazon",
//   ])
// );

// #Change each company name to uppercase one by one and print them out

// function slices(itCompanies) {
//     let new_m = [];
//   for (let i = 0; i < itCompanies.length; i++) {
//     new_m[i] = itCompanies[i].toUpperCase();
    
//   }
//   return new_m;
// }
// console.log(
//   slices([
//     "Facebook",
//     "Google",
//     "Microsoft",
//     "Apple",
//     "IBM",
//     "Oracle",
//     "Amazon",
//   ])
// );



// #Check if a "Google" company exists in the itCompanies array. If it exist return the company else return a company is not found

// function slices(itCompanies) {
    
//     for (let i = 0; i < itCompanies.length; i++) {
        
//     if(itCompanies[i] == "Google"){
//         return "bele bir sirket var"        
//     }
  
    
//     }
//     return "bele bir sirket yoxdur"

// }
// console.log(
//   slices([
//     "Facebook",
//     "Google",
//     "Microsoft",
//     "Apple",
//     "IBM",
//     "Oracle",
//     "Amazon",
//   ])
// );


// Bir function yazın, parametr olaraq 2 array qebul edir və bir char qebul edir.
// gonderilmish char-a esasen hemin iki array-i ve elementlerini birleshdirib bir string olaraq return etmelidir. 
// Meselen -> [1,2] [3,4] '*' gonderilerse output -> 1*2*3*4 string-i olmalidir.
// function price(array1,array2,char){
//     let new_array = array1.concat(array2);
//     let result = new_array.join(char);
//     return result
    
// }
// console.log(price([1, 2],[(3, 4)], "*"));




