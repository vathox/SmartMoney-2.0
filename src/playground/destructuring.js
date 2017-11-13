/* const book ={
    title: "Ego is the enemy",
    author: 'Ryan Holiday',
    publisher:{
        name: "Penguin"
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);

*/
const item = ['Black Coffee', '2.00', '2.50', '4.00'];

const [coffeeType, smallPrice, mediumPrice, largePrice] = item

console.log(`A medium ${coffeeType} costs ${mediumPrice}`);

