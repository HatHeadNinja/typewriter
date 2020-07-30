/*
REQUIREMENTS
Animate the sentence, revealing one character at a time. 
This would make it look as though it is being typed in by someone
*/

const sentence = "hello there from lighthouse labs";

let timeOutInterval = 50;

for (let i = 0; i < sentence.length; i++) {
  const char = sentence[i];
  
  setTimeout(() => {
    process.stdout.write(char);
  }, timeOutInterval) // <= 1s delay to make it noticeable. Can dial it down later.

  timeOutInterval = timeOutInterval + 50;
}

setTimeout(() => {
  process.stdout.write('\n');
  }, timeOutInterval) // <= 1s delay to make it noticeable. Can dial it down later.
