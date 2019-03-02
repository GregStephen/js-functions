console.log('hi');


const firstName = 'Greg';
const lastName = 'Stephen';



const namePrinter = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`);
};

namePrinter('Greg', 'Stephen');


const nuggetizer = (animal) => {
    return `processed ${animal}`;
};

console.log(nuggetizer('pig'));


const dogBreed = (breed) => {
    return `my favorite dog breed is ${breed}`;
};

console.log(dogBreed('Border Collie'));
console.log(dogBreed('Basset Hound'));