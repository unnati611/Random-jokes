let arr =[
    "I ordered a chicken and an egg from Amazon.I'll let you know. ",
    
"What month is the shortest of the year? May, it only has three letters.",

"What did the snail who was riding on the turtle's back say? Wheeeee!",

"I was going to tell a time traveling joke, but you guys didn't like it.",

"What do you call a lazy kangaroo? A pouch potato.",

"I used to run a dating service for chickens, but I was struggling to make hens meet.",


"Why do we tell actors to break a leg? Because every play has a cast.",

"What does a pig put on dry skin? Oinkment.",


"What do you call it when a snowman throws a tantrum? A meltdown.",

"My uncle named his dogs Timex and Rolex. They're his watch dogs.",

"Did you hear about the guy whose left side was cut off? He's all right now.",

"How do you open a banana? With a mon-key.",

"senior woman and adult daughter laughing on porchpinterest icon MoMo Productions",

"Which is faster, hot or cold? Hot, because you can catch cold.",

"What did one plate say to the other plate? Dinner's on me.",

"Why do oranges wear sunscreen? So they don't peel.",

"My wife told me to stop acting like a flamingo, so I had to put my foot down.",

"What do you call a pig that does karate? A pork chop.",

"Where does Batman go to the bathroom? The batroom.",

"What do you call a pony with a sore throat? A little horse.",

"What did the left eye say to the right eye? Between you and me, something smells.",

"What did the mama tomato say to the baby tomato? Catch up!",

"Why didn't the melons get married? Because they cantaloupe.",

"What do you call a fake noodle? An impasta.",

"How did the pig get to the hogspital? In a hambulance.",

"I'm so good at sleeping I can do it with my eyes closed!",

"Why does Humpty Dumpty love autumn? Because he had a great fall.",

"What happens when a strawberry gets run over crossing the street? Traffic jam.",

"Why did the cow jump over the moon? The farmer had cold hands.",

"A termite walks into a bar and says, So, is the bar tender here? ",

"How does an octopus go into battle? Well-armed.",

"What do you call a pudgy psychic? A four-chin teller.",
"What do you call a pony with a sore throat? A little horse.",

"What did the left eye say to the right eye? Between you and me, something smells.",

"What did the mama tomato say to the baby tomato? Catch up!",

"Why didn't the melons get married? Because they cantaloupe.",

"What do you call a fake noodle? An impasta.",

"How did the pig get to the hogspital? In a hambulance.",

"I'm so good at sleeping I can do it with my eyes closed!",
    
"What month is the shortest of the year? May, it only has three letters.",

"What did the snail who was riding on the turtle's back say? Wheeeee!",

"I was going to tell a time traveling joke, but you guys didn't like it.",

"What do you call a lazy kangaroo? A pouch potato.",

"I used to run a dating service for chickens, but I was struggling to make hens meet.",


"Why do we tell actors to break a leg? Because every play has a cast.",

"What does a pig put on dry skin? Oinkment.",

"Why did the cow jump over the moon? The farmer had cold hands.",

"A termite walks into a bar and says, So, is the bar tender here? ",

"How does an octopus go into battle? Well-armed.",

"What do you call a pudgy psychic? A four-chin teller.",


]
/*let a =prompt("enter the number between 1 to 50");
a = parseInt(a);

if (a >= 1 && a <= arr.length) {
    let selectedJoke = arr[a - 1];
    console.log(selectedJoke);
} else {
    console.log("Invalid input. Please enter a number within the range.");
}

//console.log(arr.length)*/
function getRandomJoke() {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // Display a random joke on page load
  window.onload = function() {
    let jokeContainer = document.getElementById('joke-container');
    jokeContainer.innerHTML = getRandomJoke();
  }