lesson 3, osa 1
const userName = 'Harry';
let age = 11;
let isWizard = true;

let newStudent = {
    firstName = 'Harry',
    age: 11,
    isWizard: true
}

let newStudent = {
    firstName: 'Harry',
    age: 11,
    isWizard: true,
};

newStudent.firstName = 'Mary';
newStudent.age = 15;

// console.log(newStudent.firstName);
// console.log(newStudent.age)

console.log(newStudent)

lesson 3, osa 2
let newStudent = {
    firstName: 'Mary',
    age: 11,
    isWizard: true,
    friends: ['Ron', 'Hermione', 'Hedwig'],
    introduce: function () {
        console.log(`Greetings, my name is ${this.firstName}`)
    },
};

newStudent.introduce()
//console.log(newStudent.friends)
/*
newStudent.friends.forEach((student) => {
    console.log(student)
})
*/

//console.log(`${newStudent.firstName} has got ${newStudent.friends.length} friends` )

lesson 3, osa 3
let friends = [
    {
        firstName: 'Harry',
        age: 11,
        isWizard: true,
        friends: ['Ron', 'Hermione', 'Hedwig'],
        introduce: function () {
            console.log(`Greetings, my name is ${this.firstName}`)
        }    
    },
    {
        firstName: 'Ron',
        age: 11,
        isWizard: true,
        friends: ['Harry', 'Hermione', 'Hedwig'],
        introduce: function () {
            console.log(`Greetings, my name is ${this.firstName}`)
        }    
    },
    {
        firstName: 'Hermione',
        age: 11,
        isWizard: true,
        friends: ['Harry', 'Ron', 'Hedwig'],
        introduce: function () {
            console.log(`Greetings, my name is ${this.firstName}`)
        }    
    },
    {
        firstName: 'Hedwig',
        age: 'unknown',
        isWizard: false,
        friends: ['Harry', 'Ron', 'Hermione'],
        introduce: function () {
            console.log(`${this.firstName} says hoot-hoot.`)
        }    
    }    
]

console.log(friends[3])
console.log(friends.length)

friends[friends.length-1].introduce()

console.log(friends[2].friends)
//console.log(newStudent.friends)
/*
newStudent.friends.forEach((student) => {
    console.log(student)
})
*/

//console.log(`${newStudent.firstName} has got ${newStudent.friends.length} friends` )


lesson 3, osa 4
let friends = [
    {
        firstName: 'Harry',
        age: 11,
        isWizard: true,
        friends: ['Ron', 'Hermione', 'Hedwig'],
        introduce: function () {
            console.log(`Greetings, my name is ${this.firstName}`)
        }    
    },
    {
        firstName: 'Ron',
        age: 11,
        isWizard: true,
        friends: ['Harry', 'Hermione', 'Hedwig'],
        introduce: function () {
            console.log(`Greetings, my name is ${this.firstName}`)
        }    
    },
    {
        firstName: 'Hermione',
        age: 11,
        isWizard: true,
        friends: ['Harry', 'Ron', 'Hedwig'],
        introduce: function () {
            console.log(`Greetings, my name is ${this.firstName}`)
        }    
    },
    {
        firstName: 'Hedwig',
        age: 'unknown',
        isWizard: false,
        friends: ['Harry', 'Ron', 'Hermione'],
        introduce: function () {
            console.log(`${this.firstName} says hoot-hoot.`)
        }    
    }    
]

//filter()
let students = friends.filter(friend => {
    if(friend.isWizard) {
        return friend;
    }
})

//map()
let studentslist = students.map(student => {
    return student.firstName
})


//sort()
studentslist.sort((a,b) => {return b.localeCompare(a)})

console.log(studentslist)
//console.log(students)