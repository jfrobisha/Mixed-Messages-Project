const affirmationsPart1 = [
  "you are capable of handling whatever comes your way",
  "your hard work is creating real progress",
  "every step you take brings you closer to your goals",
  "you have the strength to overcome any challenge",
  "your energy inspires people around you",
  "today is full of new opportunities waiting for you",
  "you are becoming the best version of yourself",
  "you radiate confidence and calm wherever you go"
];

const affirmationsPart2 = [
  "trust yourself and stay consistent",
  "keep your head high and heart open",
  "remember that progress, not perfection, matters",
  "your mindset determines your reality — think positive",
  "great things take time, stay patient and persistent",
  "you are doing better than you think",
  "your potential is limitless when you believe in yourself",
  "the universe is aligning everything in your favor"
];
const affirmationsPart3 = [
  "Keep going — your best days are ahead.",
  "Trust the journey, it’s leading you somewhere beautiful.",
  "Success is built on persistence and patience.",
  "The universe is aligning everything in your favor.",
  "Celebrate your progress, not just the destination.",
  "Keep your heart open and your mind focused.",
  "You are unstoppable when you believe in yourself.",
  "Your light inspires others — never dim it."
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
  return console.log(`${part1}. ${part2}, ${part3}`)
}
messageGenerator()
