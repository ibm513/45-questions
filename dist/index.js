// Question 1)Install Node.js, TypeScript and VS Code on your computer.
// node -v
// tsc -v
// code -v
// Question 2)Personal Message: Store a person’s name in a variable, and print
// a message to that person. Your message should be simple, such as,
// “Hello Eric, would you like to learn some Python today?”
console.log(" ");
console.log("Question No 2");
console.log(" ");
let name_1 = "Ahmad";
console.log(`Hello ${name_1}, would you like to learn some Python today?`);
// Question 3)Name Cases: Store a person’s name in a variable, and then
// print that person’s name in lowercase, uppercase, and titlecase.
// console.log(" ")
// console.log("Question No 3")
// console.log(" ")
console.log(" ");
console.log("Question No 3");
console.log(" ");
let name_2 = "Abdullah";
console.log(name_2.toUpperCase());
console.log(name_2.toLowerCase());
console.log(name_2.charAt(0).toUpperCase() + name_2.slice(1));
// Question No 4)Famous Quote: Find a quote from a famous person you admire.
// Print the quote and the name of its author. Your output should look
// something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake
// never tried anything new.”
console.log(" ");
console.log("Question No 4");
console.log(" ");
console.log(`Oscar Wilde once said, “Be yourself; everyone else is already taken.”`);
// Question No 5)Famous Quote 2: Repeat Exercise 4, but this time store the famous
// person’s name in a variable called famous_person. Then compose your
// message and store it in a new variable called message. Print your message.
console.log(" ");
console.log("Question No 5");
console.log(" ");
let famous_person = "Oscar Wilde";
let message = "Be yourself; everyone else is already taken.";
console.log(`${famous_person} once said, "${message}"`);
// Question No 6) Stripping Names: Store a person’s name, and include some whitespace
// characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once,
// so the whitespace around the name is displayed. Then print the name after
// striping the white spaces.
console.log(" ");
console.log("Question No 6");
console.log(" ");
let name_3 = "   I\tbrahim\n. ";
console.log(name_3);
console.log(name_3.replace(/\s/g, ""));
// /*Qution No 7)Number Eight: Write addition, subtraction, multiplication,
// and division operations
// that each result in the number 8. Be sure to enclose your operations in print statements
//  to see the results.
console.log(" ");
console.log("Question No 7");
console.log(" ");
let addition = 6 + 2;
let subtraction = 9 - 1;
let multiplication = 4 * 2;
let division = 16 / 2;
console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);
// Question No 8)You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log(" ");
console.log("Question No 8");
console.log(" ");
console.log(6 + 2);
console.log(9 - 1);
console.log(4 * 2);
console.log(16 / 2);
// Question No 9)Favorite Number: Store your favorite number in a variable.
// Then, using that variable,
// create a message that reveals your favorite number. Print that message.
console.log(" ");
console.log("Question No 9");
console.log(" ");
let num_1 = 26;
console.log(`My favorite number is ${num_1}`);
// Question No 10)Adding Comments: Choose two of the programs you’ve written,
//  and add at least one comment to each. If you don’t have anything specific to write
//  because your programs are too simple at this point, just add your name and
//   the current date at the top of each program file. Then write one sentence describing
//   what the program does.
console.log(" ");
console.log("Question No 10");
console.log(" ");
// This is my favourite quote
let famous_person_1 = "Oscar Wilde";
let message_1 = "Be yourself; everyone else is already taken.";
console.log(`${famous_person} once said, "${message}"`);
// The mathematical operations are as below
console.log(6 + 2);
console.log(9 - 1);
console.log(4 * 2);
console.log(16 / 2);
// Question No 11)Names: Store the names of a few of your friends in a array called names.
// Print each person’s name by accessing each element in the list, one at a time.
console.log(" ");
console.log("Question No 11");
console.log(" ");
let names = ["Ahmad", "Abdullah", "Awais", "Zakir"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
// Question No 12)Greetings: Start with the array you used in Exercise 11, but instead of
// just
// printing each person’s name, print a message to them. The text of each message
//  should be the same, but each message should be personalized with the person’s name.
console.log(" ");
console.log("Question No 12");
console.log(" ");
let names_1 = ["Ahmad", "Abdullah", "Awais", "Zakir"];
console.log(`Hello, ${names_1[0]} How are you?`);
console.log(`Hello, ${names_1[1]} How are you?`);
console.log(`Hello, ${names_1[2]} How are you?`);
console.log(`Hello, ${names_1[3]} How are you?`);
// Question No 13)Your Own Array: Think of your favorite mode of transportation, such as a
//  motorcycle or a car, and make a list that stores several examples. Use your list
//  to print a series of statements about these items, such as “I would like to own a
//  Honda motorcycle.”
console.log(" ");
console.log("Question No 13");
console.log(" ");
let trans_list = [
    "Honda",
    "Suzuki",
    "Yamaha",
    "Harley Davidson",
    "Kawasaki",
    "BMW",
];
console.log(`The most famous bike in Pakistan is ${trans_list[0]}`);
console.log(`${trans_list[1]} is a durable bike`);
console.log(`${trans_list[2]} is not suitable for bumpy roads`);
console.log(`${trans_list[3]} is very stylish bike`);
console.log(`Speed of ${trans_list[4]} is more than ${trans_list[0]}`);
console.log(`${trans_list[5]} is very expensive bike`);
// Queston No 14)Guest List: If you could invite anyone, living or deceased, to dinner,
// who would you invite? Make a list that includes at least three people you’d like to
//  invite to dinner. Then use your list to print a message to each person, inviting them
//  to dinner.
console.log(" ");
console.log("Question No 14");
console.log(" ");
let guest_list = ["Zaman", "Talha", "Osama"];
let x = `Hi, ${guest_list[0]}, I would like you to join us for dinner on 20th May at 8 PM in Spice Bazar`;
let y = `Hi, ${guest_list[1]}, I would like you to join us for dinner on 20th May at 8 PM in Spice Bazar`;
let z = `Hi, ${guest_list[2]}, I would like you to join us for dinner on 20th May at 8 PM in Spice Bazar`;
console.log(x);
console.log(y);
console.log(z);
//  15) Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. You’ll have to think of someone
// else to
// invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your
// program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of
// the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in
// your list.
console.log(" ");
console.log("Question No 15");
console.log(" ");
let x_1 = guest_list.slice(1);
let x_2 = x_1.pop();
console.log(`${x_1.toString()} and ${x_2} are not coming due to some personal reason`);
let x_3 = guest_list.splice(1, 2, "Zakir", "Umair", "Fawad");
console.log(`New list of guests is as follows:`);
console.log(guest_list);
let x_4 = `Hi, ${guest_list[0]}, I would like you to join us for dinner on 20th May at 8 PM in Spice Bazar`;
let y_1 = `Hi, ${guest_list[1]}, I would like you to join us for dinner on 20th May at 8 PM in Spice Bazar`;
let z_1 = `Hi, ${guest_list[2]}, I would like you to join us for dinner on 20th May at 8 PM in Spice Bazar`;
let a_1 = `Hi, ${guest_list[3]}, I would like you to join us for dinner on 20th May at 8 PM in Spice Bazar`;
console.log(x_4);
console.log(y_1);
console.log(z_1);
console.log(a_1);
// Question No 16)More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your
// program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new
// guest to the end of your list. • Print a new set of invitation messages, one for
//  each person in your list.
console.log(" ");
console.log("Question No 16");
console.log(" ");
console.log(`Hello, ${guest_list[0]},${guest_list[1]},${guest_list[2]} and ${guest_list[3]}. I have foutunately got
a bigger dining table so I am adding three more guests`);
guest_list.unshift("Hussain");
guest_list.splice(3, 0, "Awais");
guest_list.push("Alamgir");
let x_5 = `Hi, ${guest_list[0]}, I would like you to join us for dinner on 20th May at 8 PM in Spice Bazar`;
let y_3 = `Hi, ${guest_list[1]}, I would like you to join us for dinner on 20th May at 8 PM in Spice Bazar`;
let z_2 = `Hi, ${guest_list[2]}, I would like you to join us for dinner on 20th May at 8 PM in Spice Bazar`;
let a_2 = `Hi, ${guest_list[3]}, I would like you to join us for dinner on 20th May at 8 PM in Spice Bazar`;
let b_1 = `Hi, ${guest_list[4]}, I would like you to join us for dinner on 20th May at 8 PM in Spice Bazar`;
let c_1 = `Hi, ${guest_list[5]}, I would like you to join us for dinner on 20th May at 8 PM in Spice Bazar`;
let d_1 = `Hi, ${guest_list[6]}, I would like you to join us for dinner on 20th May at 8 PM in Spice Bazar`;
console.log(x_5);
console.log(y_3);
console.log(z_2);
console.log(a_2);
console.log(b_1);
console.log(c_1);
console.log(d_1);
// /* Question No 17)Shrinking Guest List: You just found out that your new dinner table
// won’t arrive
// in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message
// saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list, print a message to that person letting them
//  know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know
// they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your
// list to make sure you actually have an empty list at the end of your program.
console.log(" ");
console.log("Question No 17");
console.log(" ");
let x_6 = guest_list.slice(0, 8);
console.log(`Hi, ${guest_list.slice(0, 6).toString()} and ${guest_list
    .slice(6)
    .toString()}. Unforfunately due to resturant staff
mismanagment the table I booked was not ready on time and now they are offering me a small
table. So I can only invite two persons`);
console.log(`Hi, ${guest_list.pop()}, I am so sorry due to less table space I am unable to invite you`);
console.log(`Hi, ${guest_list.pop()}, I am so sorry due to less table space I am unable to invite you`);
console.log(`Hi, ${guest_list.pop()}, I am so sorry due to less table space I am unable to invite you`);
console.log(`Hi, ${guest_list.pop()}, I am so sorry due to less table space I am unable to invite you`);
console.log(`Hi, ${guest_list.pop()}, I am so sorry due to less table space I am unable to invite you`);
console.log(" ");
console.log(`Hi, ${guest_list[0]}, I would like you to join us for dinner on 20th May at 8 PM in Spice Bazar`);
console.log(`Hi, ${guest_list[1]}, I would like you to join us for dinner on 20th May at 8 PM in Spice Bazar`);
guest_list.pop();
guest_list.pop();
console.log(guest_list);
// Question No 18)Seeing the World: Think of at least five places in the world you’d like
//  to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the
//    original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its
// original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that
//   its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order.
//   Print the list to show that its order has changed.
console.log(" ");
console.log("Question No 18");
console.log(" ");
let places_to_visit = [
    "Makkah",
    "Dubai",
    "London",
    "Islamabad",
    "Khunjrab Pass",
];
console.log(`Orignal Aray: ${places_to_visit}`);
let modified_places = places_to_visit.slice(0, 5).sort();
console.log(`Array in alphabatical order: ${modified_places}`);
console.log(`Orignal Aray: ${places_to_visit}`);
console.log(`Array in reverse alphabatical order: ${modified_places.reverse()}`);
console.log(`Orignal Aray: ${places_to_visit}`);
places_to_visit.reverse();
console.log(`Origal Array Reversed: ${places_to_visit}`);
places_to_visit.reverse();
console.log(`Origal Array Reversed Again: ${places_to_visit}`);
places_to_visit.sort();
console.log(`Origal Array Sorted: ${places_to_visit}`);
places_to_visit.reverse();
console.log(`Origal Array Reversed Sorted: ${places_to_visit}`);
// Question No 19)Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.
console.log(" ");
console.log("Question No 19");
console.log(" ");
console.log(`I am inviting ${x_6.length} people on dinner`);
// Question No 20)Think of something you could store in a array. For example, you could
// make a list
// of mountains, rivers, countries, cities, languages, or anything else you’d like.
// Write a program that creates a list containing these items.
console.log(" ");
console.log("Question No 20");
console.log(" ");
let fav_count = ["Pakistan", "UAE", "Saudia Arabia", "UK", "Indonesia"];
for (let i = 0; i < fav_count.length; i++) {
    let text = "";
    text = fav_count[i];
    console.log(text);
}
// Question No 21)They think of something you could store in a TypeScript Object.
//  Write a program that
// creates Objects containing these items.
console.log(" ");
console.log("Question No 21");
console.log(" ");
let new_obj_1 = {};
new_obj_1.name_of_fruit = "Orange";
new_obj_1.quantity = 13;
console.log(new_obj_1);
// Question No 22)Intentional Error: If you haven’t received an array index error in one
// of your programs yet, try to make one happen. Change an index in one of your programs to
// produce an index error. Make sure you correct the error before closing the program.
// Question No 23)Conditional Tests: Write a series of conditional tests.
// Print a statement describing each test and your prediction for the results of each test.
// Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to
// True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests
// evaluate to False.
console.log(" ");
console.log("Question No 23");
console.log(" ");
let food_1 = "cake";
console.log("Is food_1 !== 'cake'? I predict False. ");
console.log(food_1 == "biscuit");
console.log(" ");
let food_2 = "biscuit";
console.log("Is food_2 !== 'biscuit'? I predict False. ");
console.log(food_2 == "ice cream");
console.log(" ");
let food_3 = "icecream";
console.log("Is food_3 == 'icecream'? I predict True. ");
console.log(food_3 == "icecream");
console.log(" ");
let food_4 = "chocolate";
console.log("Is food_4 !== 'chocolate'? I predict False. ");
console.log(food_4 == "cake");
console.log(" ");
let food_5 = "juice";
console.log("Is food_5 == 'juice'? I predict True. ");
console.log(food_5 == "juice");
console.log(" ");
let food_6 = "chips";
console.log("Is food_6 == 'chips'? I predict True. ");
console.log(food_6 == "chips");
console.log(" ");
let food_7 = "pizza";
console.log("Is food_7 == 'pizza'? I predict True. ");
console.log(food_7 == "pizza");
console.log(" ");
let food_8 = "milkshake";
console.log("Is food_8 !== 'milkshake'? I predict False. ");
console.log(food_8 == "pizza");
console.log(" ");
let food_9 = "tea";
console.log("Is food_9 == 'tea'? I predict True. ");
console.log(food_9 == "tea");
console.log(" ");
let food_10 = "coffee";
console.log("Is food_10 !== 'coffee'? I predict False. ");
console.log(food_9 == "milkshake");
console.log(" ");
// Question No 24)More Conditional Tests: You don’t have to limit the number of tests you
// create to 10. If you want to try more comparisons, write more tests. Have at least one
// True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater
// than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
console.log(" ");
console.log("Question No 24");
console.log(" ");
// Equality with strings
let str_1 = "motorbike";
console.log("Is str_1 == 'motorbike'? I predict True. ");
console.log(str_1 == "motorbike");
console.log(" ");
console.log("Is str_1 == 'ship'? I predict False. ");
console.log(str_1 == "ship");
console.log(" ");
// Inequality with strings
let str_2 = "ship";
console.log("Is str_2 !== 'motorbike'? I predict True. ");
console.log(str_2 !== "motorbike");
console.log(" ");
console.log("Is str_2 !== 'ship'? I predict False. ");
console.log(str_2 !== "ship");
console.log(" ");
// Using lowercase function
let str_3 = "Space Ship";
console.log("Is str_3 !== 'Space Ship'? I predict False. ");
console.log(str_3 == "Space Ship".toLowerCase());
console.log(" ");
console.log("Is str_3 == 'Space Ship'? I predict True. ");
console.log(str_3 == "Space Ship");
console.log(" ");
// Numeric Equality
let num_2 = 10;
console.log("Is num_2 == 10? I predict True. ");
console.log(num_2 == 10);
console.log(" ");
console.log("Is num_2 == 15? I predict False. ");
console.log(num_2 == 15);
console.log(" ");
// Numeric Inequality
let num_3 = 16;
console.log("Is num_3 !== 10? I predict True. ");
console.log(num_3 !== 10);
console.log(" ");
console.log("Is num_3 !== 16? I predict False. ");
console.log(num_3 !== 16);
console.log(" ");
// Numeric Greater Than
let num_4 = 21;
console.log("Is num_4 > 10? I predict True. ");
console.log(num_4 > 10);
console.log(" ");
console.log("Is num_4 > 24 I predict False. ");
console.log(num_4 < 10);
console.log(" ");
// Numeric Less Than
let num_5 = 30;
console.log("Is num_5 < 32? I predict True. ");
console.log(num_5 > 23);
console.log(" ");
console.log("Is num_5 < 17 I predict False. ");
console.log(num_5 < 23);
console.log(" ");
// Numeric Greater Than Equal To
let num_6 = 55;
console.log("Is num_6 >= 55? I predict True. ");
console.log(num_6 >= 55);
console.log(" ");
console.log("Is num_6 >= 67 I predict False. ");
console.log(num_6 >= 67);
console.log(" ");
// Numeric Less Than Equal To
let num_7 = 63;
console.log("Is num_7 <= 72? I predict True. ");
console.log(num_7 <= 23);
console.log(" ");
console.log("Is num_7 <= 19 I predict False. ");
console.log(num_7 <= 23);
console.log(" ");
// Using "AND" operator
let num_8 = 57;
console.log("Is num_8 <= 69 && num_8 >= 25? I predict True. ");
console.log(num_8 <= 69 && num_8 >= 25);
console.log(" ");
console.log("Is num_8 <= 49 && num_8 == 64 I predict False. ");
console.log(num_8 <= 49 && num_8 == 64);
console.log(" ");
// Using "OR" operator
let num_9 = 76;
console.log("Is num_9 <= 33 || num_9 >= 62? I predict True. ");
console.log(num_9 <= 33 || num_9 >= 62);
console.log(" ");
console.log("Is num_9 <= 41 || num_9 >= 87? I predict False. ");
console.log(num_9 <= 41 || num_9 >= 87);
console.log(" ");
// Item is in an array
let arr_1 = ["tennis ball", "football", "basketball", "cricket ball"];
console.log("Is basketball present in arr_1? I predict True. ");
console.log(arr_1.includes("basketball"));
console.log(" ");
console.log("Is swimming present in arr_1? I predict False. ");
console.log(arr_1.includes("swimming"));
console.log(" ");
// Item is not in an array
let arr_2 = ["jam", "egg", "butter", "bread", "mayo"];
console.log("Is chicken not present in arr_2? I predict True. ");
console.log(!arr_2.includes("chicken"));
console.log(" ");
console.log("Is egg not present in arr_2? I predict False. ");
console.log(!arr_2.includes("egg"));
console.log(" ");
//  Question N0 25)Alien Colors #1: Imagine an alien was just shot down in a game.
// Create a variable
// called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print
// a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails.
// (The version that fails will have no output.)
console.log(" ");
console.log("Question No 25");
console.log(" ");
let alien_color = "green";
if (alien_color == "green") {
    console.log(`Congratulations you have earned 5 points`);
}
else {
}
alien_color = "yellow";
if (alien_color == "green") {
    console.log(`Congratulations you have earned 5 points`);
}
else {
}
// Question No 26)Alien Colors #2: Choose a color for an alien as you did in Exercise 25,
// and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points
// for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10
//  points.
// • Write one version of this program that runs the if block and another that runs the else
//  block.
console.log(" ");
console.log("Question No 26");
console.log(" ");
alien_color = "green";
if (alien_color == "green") {
    console.log(`You have eraned 5 points`);
}
else {
    console.log(`You have eraned 10 points`);
}
alien_color = "yellow";
if (alien_color == "green") {
    console.log(`You have eraned 5 points`);
}
else {
    console.log(`You have eraned 10 points`);
}
// Question No 27)Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an
// if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the
// appropriate color alien.
console.log(" ");
console.log("Question No 27");
console.log(" ");
alien_color = "green";
if (alien_color == "green") {
    console.log(`You have eraned 5 points`);
}
else if (alien_color == "yellow") {
    console.log(`You have eraned 10 points`);
}
else {
    console.log(`You have eraned 15 points`);
}
alien_color = "yellow";
if (alien_color == "green") {
    console.log(`You have eraned 5 points`);
}
else if (alien_color == "yellow") {
    console.log(`You have eraned 10 points`);
}
else {
    console.log(`You have eraned 15 points`);
}
alien_color = "red";
if (alien_color == "green") {
    console.log(`You have eraned 5 points`);
}
else if (alien_color == "yellow") {
    console.log(`You have eraned 10 points`);
}
else {
    console.log(`You have eraned 15 points`);
}
// Question NO 28)Stages of Life: Write an if-else chain that determines a person’s stage
// of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person
// is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person
// is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person
//  is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person
// is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
console.log(" ");
console.log("Question No 28");
console.log(" ");
let age = 1;
if (age < 2) {
    console.log(`You are a baby`);
}
else if (age >= 2 && age < 4) {
    console.log(`You are a toddler`);
}
else if (age >= 4 && age < 13) {
    console.log(`You are a kid`);
}
else if (age >= 13 && age < 20) {
    console.log(`You are a teenager`);
}
else if (age >= 20 && age < 65) {
    console.log(`You are an adult`);
}
else {
    console.log(`You are an elder`);
}
age = 3;
if (age < 2) {
    console.log(`You are a baby`);
}
else if (age >= 2 && age < 4) {
    console.log(`You are a toddler`);
}
else if (age >= 4 && age < 13) {
    console.log(`You are a kid`);
}
else if (age >= 13 && age < 20) {
    console.log(`You are a teenager`);
}
else if (age >= 20 && age < 65) {
    console.log(`You are an adult`);
}
else {
    console.log(`You are an elder`);
}
age = 4;
if (age < 2) {
    console.log(`You are a baby`);
}
else if (age >= 2 && age < 4) {
    console.log(`You are a toddler`);
}
else if (age >= 4 && age < 13) {
    console.log(`You are a kid`);
}
else if (age >= 13 && age < 20) {
    console.log(`You are a teenager`);
}
else if (age >= 20 && age < 65) {
    console.log(`You are an adult`);
}
else {
    console.log(`You are an elder`);
}
age = 16;
if (age < 2) {
    console.log(`You are a baby`);
}
else if (age >= 2 && age < 4) {
    console.log(`You are a toddler`);
}
else if (age >= 4 && age < 13) {
    console.log(`You are a kid`);
}
else if (age >= 13 && age < 20) {
    console.log(`You are a teenager`);
}
else if (age >= 20 && age < 65) {
    console.log(`You are an adult`);
}
else {
    console.log(`You are an elder`);
}
age = 43;
if (age < 2) {
    console.log(`You are a baby`);
}
else if (age >= 2 && age < 4) {
    console.log(`You are a toddler`);
}
else if (age >= 4 && age < 13) {
    console.log(`You are a kid`);
}
else if (age >= 13 && age < 20) {
    console.log(`You are a teenager`);
}
else if (age >= 20 && age < 65) {
    console.log(`You are an adult`);
}
else {
    console.log(`You are an elder`);
}
age = 68;
if (age < 2) {
    console.log(`You are a baby`);
}
else if (age >= 2 && age < 4) {
    console.log(`You are a toddler`);
}
else if (age >= 4 && age < 13) {
    console.log(`You are a kid`);
}
else if (age >= 13 && age < 20) {
    console.log(`You are a teenager`);
}
else if (age >= 20 && age < 65) {
    console.log(`You are an adult`);
}
else {
    console.log(`You are an elder`);
}
// Question No 29)Favorite Fruit: Make a array of your favorite fruits, and then write a
// series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in
// your array. If the fruit is in your array, the if block should print a statement,
// such as You
// really like bananas!
console.log(" ");
console.log("Question No 29");
console.log(" ");
let favourite_fruits = ["guava", "peach", "grapes"];
if (favourite_fruits.includes("guava")) {
    console.log("You really like guava!");
}
if (favourite_fruits.includes("peach")) {
    console.log("You really like peaches!");
}
if (favourite_fruits.includes("grapes")) {
    console.log("You really like grapes!");
}
if (favourite_fruits.includes("mango")) {
    console.log("You really like mangoes!");
}
else {
    console.log("There are no mangoes in the list");
}
if (favourite_fruits.includes("lychee")) {
    console.log("You really like lychees!");
}
else {
    console.log("There are no lychees in the list");
}
// Question 30)Hello Admin: Make a array of five or more usernames, including the name
// 'admin'.
// Imagine you are writing code that will print a greeting to each user after they log
// in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you
// like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in
// again.
console.log(" ");
console.log("Question No 30");
console.log(" ");
let user_names = ["john554", "adam998", "chirs46", "admin", "steve87"];
// if(user_names.includes('admin')){
//   console.log('Hello admin, would you like to see a status report')
// }
for (let i = 0; i < user_names.length; i++) {
    if (user_names[i] == "admin") {
        console.log("Hello admin, would you like to see a status report");
    }
    else {
        console.log(`Hello ${user_names[i]}, thankyou for logging in again`);
    }
}
// Question No 31) No Users: Add an if test to Exercise 28 to make sure the list of users
// is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is
// printed.
console.log(" ");
console.log("Question No 31");
console.log(" ");
user_names = [];
if (user_names.length == 0) {
    console.log("We need to find some users!");
}
// Question No 32)Checking Usernames: Do the following to create a program that simulates
// how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new
// usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used.
// If it has, print a message that the person will need to enter a new username.
// If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should
// not be accepted.
console.log(" ");
console.log("Question No 32");
console.log(" ");
let current_users = ["hassan91", "hammad98", "zubaIR44", "uMair74", "Qammar65"];
let new_users = ["qasim23", "kamran41", "qaMmar65", "talha54", "zUBair44"];
let x_7 = current_users.slice(0, current_users.length).map((val) => {
    return val.toLowerCase();
});
let x_8 = new_users.slice(0, current_users.length).map((val) => {
    return val.toLowerCase();
});
for (let i = 0; i < new_users.length; i++) {
    if (x_7.includes(x_8[i])) {
        console.log(`Enter a new username`);
    }
    else {
        console.log(`This username is available`);
    }
}
// Question No 33)Ordinal Numbers: Ordinal numbers indicate their position in a array,
// such as 1st or
// 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for
// each number.
// Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result
// should be
// on a separate line.
console.log(" ");
console.log("Question No 33");
console.log(" ");
let num_10 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function ordinal_suffix_of(i) {
    let j = i % 10, k = i % 100;
    if (j === 1 && k !== 11) {
        return i + "st";
    }
    if (j === 2 && k !== 12) {
        return i + "nd";
    }
    if (j === 3 && k !== 13) {
        return i + "rd";
    }
    return i + "th";
}
for (let n = 0; n < num_10.length; n++) {
    console.log(ordinal_suffix_of(num_10[n]));
}
// Question No 34)Pizzas: Think of at least three kinds of your favorite pizza.
// Store these pizza names in a array, and then use a for loop to print the name of
// each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of
// printing just the name of the pizza. For each pizza you should have one line of
// output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states
// how much you like pizza. The output should consist of three or more lines about the
// kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log(" ");
console.log("Question No 34");
console.log(" ");
let pizza_names = ['Malai Boti', 'Fajita', 'Chicken Supreme'];
for (let i = 0; i < pizza_names.length; i++) {
    console.log(`${pizza_names[i]} pizza`);
}
console.log(" ");
for (let i = 0;;) {
    console.log(`I like ${pizza_names[i]} pizza because it is creamy`);
    console.log(`I like ${pizza_names[i + 1]} pizza because it is spicy`);
    console.log(`I like ${pizza_names[i + 2]} pizza because it is meaty`);
    break;
}
console.log(' ');
console.log(`I like mala boti pizza the most. It is very spicy and cheesy. 
Secondly i like crown crust pizza. It has unique flavour. And lastly i like 
chicken supreme pizza because it is full of chicken. I really love pizza!`);
//Question No 35)Animals: Think of at least three different animals that have a 
// common characteristic. Store the names of these animals in a list, and then use 
// a for loop to print out the name of each animal. • Modify your program to print 
// a statement about each animal, such as A dog would make a great pet. 
// • Add a line at the end of your program stating what these animals have in common. 
// You could print a sentence such as Any of these animals would make a great pet!
console.log(" ");
console.log("Question No 35");
console.log(" ");
let animal_list = ['dog', 'cat', 'parrot'];
for (let i = 0; i < animal_list.length; i++) {
    console.log(`${animal_list[i]}`);
}
console.log(" ");
for (let i = 0;;) {
    console.log(`${animal_list[i]} is a faithful pet`);
    console.log(`${animal_list[i + 1]} is a pet with attitude`);
    console.log(`${animal_list[i + 2]} is a colourful pet`);
    break;
}
console.log(" ");
console.log(`${animal_list[0]}, ${animal_list[1]} and ${animal_list[2]} are easy to handle pets`);
//Question No 36) T-Shirt: Write a function called make_shirt() that accepts a 
// size and the text of a message that should be printed on the shirt. The function 
// should print a sentence summarizing the size of the shirt and the message printed 
// on it. Call the function.
console.log(" ");
console.log("Question No 36");
console.log(" ");
function make_shirt(size, text) {
    return `The size of the shirt is ${size} and the message to be printed on the shirt
is "${text}"`;
}
console.log(make_shirt("Medium", "This is a cool T-shirt"));
// Question No 37)Large Shirts: Modify the make_shirt() function so that shirts are 
// large by default with a message that reads I love TypeScript. Make a large shirt 
// and a medium shirt with the default message, and a shirt of any size with a 
// different message.
console.log(" ");
console.log("Question No 37");
console.log(" ");
function make_shirt_1(size = "Large", text = "I Love Typescript") {
    return `The size of the shirt is ${size} and the message to be printed on the shirt
is "${text}"`;
}
console.log(make_shirt_1());
console.log(make_shirt_1("Large"));
console.log(make_shirt_1("Medium"));
console.log(make_shirt_1("Small", "My code is so cool"));
//38)Cities: Write a function called describe_city() that accepts the name of a 
// city and its country. The function should print a simple sentence, such as Karachi 
// is in Pakistan. Give the parameter for the country a default value. Call your 
// function for three different cities, at least one of which is not in the default 
// country.
console.log(" ");
console.log("Question No 38");
console.log(" ");
function describe_city(city, country = "Pakistan") {
    return `${city} is in ${country}`;
}
console.log(describe_city("Lahore"));
console.log(describe_city("Islamabad"));
console.log(describe_city("Dehli"));
// 39)City Names: Write a function called city_country() that takes in the name of 
// a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value 
// that’s returned.
console.log(" ");
console.log("Question No 39");
console.log(" ");
function city_country(city, country) {
    return `${city},${country}`;
}
console.log(city_country("Paris", "France"));
console.log(city_country("Mosccow", "Russia"));
console.log(city_country("Karachi", "Pakistan"));
// 40)Album: Write a function called make_album() that builds a Object describing 
// a music album. The function should take in an artist name and an album title, 
// and it should return a Object containing these two pieces of information. 
// Use the function to make three dictionaries representing different albums. 
// Print each return value to show that Objects are storing the album information 
// correctly. Add an optional parameter to make_album() that allows you to store the 
// number of tracks on an album. If the calling line includes a value for the number 
// of tracks, add that value to the album’s Object. Make at least one new function 
// call that includes the number of tracks on an album.
console.log(" ");
console.log("Question No 40");
console.log(" ");
function make_album(art_name, alb_title, no_tracks = "not available") {
    let new_obj = { artistName: art_name,
        albumTitle: alb_title,
        No_of_Tracks: no_tracks
    };
    return new_obj;
}
console.log(make_album("Bob Dylan", "The Freewheelin", 12));
console.log(make_album("Richie Havens", "Mixed Bag"));
console.log(make_album("Laura Nyro", "More Than A New Discovery"));
// 41)Magicians: Make a array of magician’s names. Pass the array to a function 
// called show_magicians(), which prints the name of each magician in the array.
console.log(" ");
console.log("Question No 41");
console.log(" ");
let magician_name = ["David Blaine", "David Copperfield", "Doug Henning", "Harry Houdini", "Criss Angel", "Derren Brown"];
function show_magicians() {
    for (let i = 0; i < magician_name.length; i++) {
        console.log(magician_name[i]);
    }
}
show_magicians();
//Question NO 42)Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
console.log(" ");
console.log("Question No 42");
console.log(" ");
function make_great() {
    let x_9 = magician_name.map(function (item) {
        return (`The Great ${item}`);
    });
    magician_name.splice(0, magician_name.length);
    for (let i = x_9.length - 1; i > -1; i--) {
        magician_name.push(x_9[i]);
    }
}
make_great();
show_magicians();
// Question No 43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
console.log(" ");
console.log("Question No 43");
console.log(" ");
export {};
/*44)Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

45)Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs,
such as a color or an optional feature. Print the Object that’s returned to make sure all the
information was stored correctly.*/
