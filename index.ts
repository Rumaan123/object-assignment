//Assignment 1 :building your friend list

// Step 1: Define an object named people containing an empty array called friends
type Friend = {
    id: number;
    firstName: string;
    lastName: string;
};

const people: { friends: Friend[] } = {
    friends: []
};

// Step 2: Create three separate objects, each representing a friend
const friend1: Friend = {
    id: 1,
    firstName: 'aisha',
    lastName: 'kadir'
};
//Assignment
const friend2: Friend = {
    id: 2,
    firstName: 'mirha',
    lastName: 'Salar'
};

const friend3: Friend = {
    id: 3,
    firstName: 'amarha',
    lastName: 'shah'
};

// Step 3: Add these friend objects to the friends array within the people object
people.friends.push(friend1);
people.friends.push(friend2);
people.friends.push(friend3);

// Step 4: Output the entire people object to the console
console.log(people);
 

