//Assignment 2:Manipulating an Array: Rearranging work


// Step 1: Start with a scrambled array
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];

// Step 2: Convert non-strings (booleans, numbers) to strings if needed
for (let i = 0; i < scrambledArray.length; i++) {
    if (typeof scrambledArray[i] !== 'string') {
        scrambledArray[i] = String(scrambledArray[i]);
    }
}

// Step 3: Rearrange the elements in the desired order
const rearrangedArray = [];

// Using the provided scrambledArray order
rearrangedArray.push(scrambledArray[7]); // "I"
rearrangedArray.push(scrambledArray[4]); // "am"
rearrangedArray.push(scrambledArray[5]); // "a"
rearrangedArray.push(scrambledArray[0]); // "student"
rearrangedArray.push(scrambledArray[1]); // "of"
rearrangedArray.push(scrambledArray[6]); // "GIAIC"

// Step 4: Combine the elements back into a single string
const result = rearrangedArray.join(' ');

// Output the result
console.log(result); // "I am a student of GIAIC"
