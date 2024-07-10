//Assignment 1 building your friend list
var people = {
    friends: []
};
// Step 2: Create three separate objects, each representing a friend
var friend1 = {
    id: 1,
    firstName: 'aisha',
    lastName: 'kadir'
};
var friend2 = {
    id: 2,
    firstName: 'mirha',
    lastName: 'Salar'
};
var friend3 = {
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
