const affirmationsPart1 = [
  "Today is your day to shine.",
  "You are becoming more confident every moment.",
  "Every challenge you face is shaping your strength.",
  "You are surrounded by endless opportunities.",
  "Your efforts are planting seeds for success.",
  "You are exactly where you need to be right now.",
  "The energy you bring to the world matters.",
  "You are capable, resilient, and full of purpose."
];

const affirmationsPart2 = [
  "Keep believing in your path and trusting your process.",
  "Continue to show up for yourself, even in small ways.",
  "Remember that growth often feels uncomfortable before it blossoms.",
  "Stay open to change — it’s guiding you toward something better.",
  "Know that every step forward, no matter how small, is meaningful.",
  "Embrace the present moment and the lessons it brings.",
  "Let go of doubt — clarity comes with consistent action.",
  "Focus on progress, not perfection; your journey is unfolding beautifully."
];

const affirmationsPart3 = [
  "Because your light is meant to inspire others.",
  "Because success follows those who stay persistent.",
  "And soon you’ll see how far you’ve come.",
  "And you’ll realize that everything was preparing you for this moment.",
  "And remember — your patience will be rewarded in time.",
  "Because peace comes from knowing you’re doing your best.",
  "And those who stay true to themselves always find their way.",
  "Because the world is better when you believe in yourself."
];



/*const randomMessage = (arr1, arr2, arr3) =>{
    let Part1 = Math.floor(Math.random() * arr1.length)
    let Part2 = Math.floor(Math.random() * arr2.length)
    let Part3 =Math.floor(Math.random() * arr3.length)
     console.log(arr1[Part1] + ' ' + arr2[Part2] + ' ' + arr3[Part3])
}
randomMessage(affirmationsPart1,affirmationsPart2,affirmationsPart3) */

const randomGenerator = arr =>{
  return arr[Math.floor(Math.random() * arr.length)]
}
const messageGenerator = () =>{
  let part1 = randomGenerator(affirmationsPart1)
  let part2 = randomGenerator(affirmationsPart2)
  let part3 = randomGenerator(affirmationsPart3)
  return console.log(`${part1} ${part2} ${part3}`)
}
messageGenerator()
