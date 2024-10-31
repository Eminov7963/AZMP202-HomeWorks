// Task1
// let eded = +prompt();
// let yuzluk = Math.floor(eded / 100);
// let onluq = Math.floor((eded % 100) / 10);
// let teklik = eded % 10;
// let sum = yuzluk + onluq +teklik;
// let hasil = yuzluk * onluq * teklik;
// let ededi_orta = sum / String(eded).length;
// console.log(ededi_orta);

// Task2
// let n = +prompt("daxil edin")
// for (let i = 1; i < n; i++){
//     if(n % i == 0){
        
//         console.log(i); 
//     }
    
// }

// Task3
// let n = +prompt("daxil edin")
// let say = 0;
// for (let i = 1; i < n; i++){
//     if(n % i == 0){
//         say++
           
        
//     }
    
// }
// console.log(say); 

// Task4
// let kvadrat;
// for (let i = 0; i <= 10; i++) {
//     kvadrat= i*i
//     console.log(`${i} x ${i} = ${kvadrat}`);
     
    
// }
// Task5
// let kub;
// for (let i = 0; i <= 10; i++) {
//   kub = i * i * i;
//   console.log(`${i} x ${i} x ${i} = ${kub}`);
// }

// Task6;
// let cütCəm = 0;
// let təkCəm = 0;
// let sum = 0;
// for (let i = 1; i < 100; i++) {
//     if (i % 2 === 0) {
      
//       cütCəm += i; 
//     } else {
      
//       təkCəm += i; 
//     } 
    
// }
// sum = cütCəm + təkCəm;
// console.log(sum);

// Task7
// let arr = [4, 2, 7, 9, 3, 12, 46, 32, 19];
// let big = arr[0];
// let small = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if(big < arr[i]){
//         big = arr[i];
//     }
//     else if(small > arr[i]){
//         small = arr[i];
//     }
// }
// console.log(big);
// console.log(small);

// Task8
// let arr = [4, 2, 7, 9, 3, 12, 46, 32, 19];
// let big = arr[0];
// let small = arr[0];
// let ededi_orta = 0
// for (let i = 0; i < arr.length; i++) {
//   if (big < arr[i]) {
//     big = arr[i];
//   } else if (small > arr[i]) {
//     small = arr[i];
//   }
// }
// ededi_orta = (big + small) / 2;
// console.log(ededi_orta);

// Task9
// let sampleNews = `As software developers, the natural tendency is to start developing applications based on your ownhands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.`;
// let bosluq = sampleNews.split(" ").length -1 ;
// console.log(bosluq);

// Exstra
// let eded;
// for (let i = 0; i < 100; i++) {
//     if(i > 3 && i % )
    
// }

// Exstra
// Task1
// for (let i = 2; i < 100; i++) {
//     let isPrime = true;
//     for (let j = 2; j < i; j++) {
//         if(i % j === 0){
//             isPrime = false;
//             break;
//         }
//         // else{
//         //     isPrime = true;
//         // }
        
        
//     }
//     if(isPrime){
//         console.log(i);
        
//     }
   
    
    
// }

// Task2
// const products = [
//   {
//     id: 1,
//     title: "Smartphone",
//     description: "A high-end smartphone with the latest features.",
//     price: 799.99,
//   },
//   {
//     id: 2,
//     title: "Laptop",
//     description: "Powerful laptop with a large screen and fast processor.",
//     price: 1299.99,
//   },
//   {
//     id: 3,
//     title: "Coffee Maker",
//     description: "An automatic coffee maker with a built-in grinder.",
//     price: 99.99,
//   },
//   {
//     id: 4,
//     title: "Headphones",
//     description: "Wireless over-ear headphones with noise-cancellation.",
//     price: 199.99,
//   },
//   {
//     id: 5,
//     title: "Smart TV",
//     description: "55-inch 4K Smart TV with streaming apps built-in.",
//     price: 699.99,
//   },
// ];
// let sum = 0;
// for (let i = 0; i < products.length; i++) {
//   sum += products[i].price;
  
// }
// console.log(sum);
// let ededi_orta = sum / products.length;
// console.log(`ededi-orta: ${ededi_orta}`);

// 9) Daxil olunan ədədin array-də olub olmadığını təyin edən proqram tərtib edin.
// let num = +prompt("ededi daxil edin");
// let array = [4, 2, 7, 9, 3, 12, 46, 32, 19];
// let prime = false;
// for (let i = 0; i < array.length; i++) {
//   if(num === array[i]){
//     prime = true;
//     console.log(`bele bir eded var: ${num}`);
//     break;
//   }

// }
// if (!prime){
//     console.log("bele bir eded yoxdur");
    
// }

// 10)tələbələr array-ində tələbələrin ortalaması ən yüksək olanı, ortalaması 90-dan yuxarı olanları tapan proqram yazın
//  const students = [
//    { name: "Ali", scores: [90, 85, 92] },
//    { name: "Mammal", scores: [75, 80, 85] },
//    { name: "Camil", scores: [90, 95, 85] },
//    { name: "Davud", scores: [100, 100, 100] },
//  ];
//  let ortalama= 0 ;
//  let sum = 0;

// for (let i = 0; i < students.length; i++) {
//     for (let j = 0; j < students[i].scores.length; j++) {
//       sum += students[i].scores[j];
//       console.log(sum);
      
      
//     }
    

    
// }