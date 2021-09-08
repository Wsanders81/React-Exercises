import { remove, choice } from "./helpers";
import fruits from './fruits';

let fruit = choice(fruits)
console.log(`I'd like one ${fruit}, please`)
console.log(`Here you go: ${fruit}`)
console.log(`Delicious! May I have another?`)

let leftOver = remove(fruits, fruit)

console.log(`I'm sorry, we're all out. We have ${leftOver.length} left.`)



