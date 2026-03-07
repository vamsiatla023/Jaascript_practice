
// constructor_destructuring
const course ={
    courseinstructor:"hitesh",
    price:"999",
    coursechannel:"chaiaurcode"
}

// console.log(course.courseinstructor)

const {courseinstructor} =course
// console.log(courseinstructor);

const {courseinstructor:instructor}= course
console.log(instructor);

// learn the Json format.
// [
    // {},
    // {},
    // {}
// ]