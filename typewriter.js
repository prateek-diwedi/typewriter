const sentence = "hello there from lighthouse labs \n";
for (const [i, char] of sentence.split("").entries()) {
  //process.stdout.write(char);
  setTimeout(() => {
    process.stdout.write(char); // print the char here
  },i *  500) // <= 1s delay to make it noticeable. Can dial it down later.
  }


/*const sentence = "hello porson how are you friend, :) lighthouse labs \n";
const typewriter = (s) => {
for (const char of sentence let i = 0; i < s.length; i++) {
  //process.stdout.write(char);
  setTimeout(() => {
    process.stdout.write(s[i]); // print the char here
  },i * 100) // <= 1s delay to make it noticeable. Can dial it down later.
  }
}
typewriter(sentence);*/
