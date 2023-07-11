// pirveli

// const calculateValues = (n) => {
//   if (n <= 2 || n % 2 === 0) {
//     throw new Error("Invalid input! n must be an odd number greater than 2.");
//   }

//   const sum = n + (n - 1);

//   let restProduct = 1;
//   for (let i = 3; i <= n; i += 1) {
//     restProduct *= i;
//   }

//   return [sum, restProduct];
// };

// const n = 7;
// const result = calculateValues(n);
// console.log(result);

// meore

// const getCityFromUser = (user) => {
//   const { banks: [, , { address: { city } = {} } = {}] = [] } = user;
//   return city;
// };

// const user = {
//   banks: [
//     { address: { city: 'Tbilisi' } },
//     { address: { city: 'Batumi' } },
//     { address: { city: 'Sokhumi' } }
//   ]
// };

// const city = getCityFromUser(user);
// console.log(city);

// mesame

// const originalObject = {
//   name: 'John',
//   age: 30,
//   address: {
//     city: 'New York',
//     country: 'USA'
//   },
//   hobbies: ['reading', 'painting']
// };

// const copiedObject = { ...originalObject };
// console.log(copiedObject);