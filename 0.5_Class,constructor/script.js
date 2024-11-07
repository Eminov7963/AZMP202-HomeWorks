// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   calculateArea() {
//     return this.width * this.height;
//   }

//   calculatePerimeter() {
//     return 2 * (this.width + this.height);
//   }
// }

// const myRectangle = new Rectangle(5, 10);

// console.log("Düzbucaqlının sahəsi:", myRectangle.calculateArea()); 
// console.log("Düzbucaqlının perimetri:", myRectangle.calculatePerimeter()); 




// class BankAccount {
//   constructor(accountNumber, balance = 0) {
//     this.accountNumber = accountNumber;
//     this.balance = balance;
//   }


//   deposit(amount) {
//     if (amount > 0) {
//       this.balance += amount;
//       console.log(
//         `Hesaba ${amount} məbləğ əlavə edildi. Cari balans: ${this.balance}`
//       );
//     } else {
//       console.log("Əlavə ediləcək məbləğ müsbət olmalıdır.");
//     }
//   }


//   withdraw(amount) {
//     if (amount > 0) {
//       if (amount <= this.balance) {
//         this.balance -= amount;
//         console.log(
//           `Hesabdan ${amount} məbləğ çıxarıldı. Cari balans: ${this.balance}`
//         );
//       } else {
//         console.log("Balansda kifayət qədər vəsait yoxdur.");
//       }
//     } else {
//       console.log("Çıxarılacaq məbləğ müsbət olmalıdır.");
//     }
//   }
// }


// const account1 = new BankAccount("101", 1000); 
// const account2 = new BankAccount("102", 500); 


// account1.deposit(500); 
// account1.withdraw(200); 


// account2.withdraw(100); 
// account2.deposit(700); 

// console.log(`Alice-in hesab balansı: ${account1.balance}`);
// console.log(`Bob-un hesab balansı: ${account2.balance}`);


