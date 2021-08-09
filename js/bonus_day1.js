//BONUS 1

let paragrafo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum interdum diam quis rhoncus. Etiam nec sodales lectus. Quisque eu auctor lectus, sit amet egestas eros. Nulla scelerisque, tortor vel maximus dapibus, enim turpis porta nisi, in feugiat neque erat auctor mi. Nulla facilisi. Ut tempus aliquet tortor, in pharetra enim dignissim id. Vivamus elementum luctus consequat. Quisque vehicula tellus quis metus pellentesque lobortis. Pellentesque at sapien suscipit sapien ullamcorper porttitor sed sed magna.

Nunc vitae elit dolor. Duis pharetra lacus et finibus commodo. Sed mattis quam luctus, euismod tortor ut, luctus sem. Mauris sit amet enim in nisi laoreet sagittis. Mauris magna ipsum, tempor ut ipsum non, rhoncus facilisis tellus. Cras aliquet maximus vulputate. Vestibulum fermentum eu nulla ac interdum. Aliquam quis lacus massa. Aenean blandit diam lorem, eget pharetra orci consectetur sit amet. Quisque non vulputate nisl. Curabitur iaculis eros ut augue dictum, a pellentesque justo malesuada. Aenean in tellus cursus, suscipit felis sit amet, eleifend magna. Phasellus faucibus maximus commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pretium orci vel nulla blandit elementum. Nam id consequat ante.

Morbi vitae tempus augue. In blandit turpis vel turpis placerat tincidunt. Morbi nec orci vel leo vulputate placerat. Etiam luctus eget tortor a posuere. Sed sed accumsan tellus, quis molestie lectus. Aenean vulputate convallis neque ut pretium. Fusce nec quam fermentum, commodo urna elementum, ultrices ligula. Aliquam id quam eros. Nullam mauris nibh, tristique id condimentum vitae, commodo dictum arcu. Integer hendrerit elit augue, et tincidunt sapien vestibulum eget. Mauris at odio eget quam sodales pulvinar. Nullam lobortis enim ut elit maximus, ut gravida odio venenatis. Maecenas finibus sem ac tellus sodales, eget feugiat magna maximus. Nullam sit amet orci eu purus condimentum interdum.`;


function WordCount(str) { // count num of words
    return str.split(" ").length;
  }
  
console.log(WordCount(paragrafo));


function countOccurences(str, word) {
    return str.split(word).length - 1;
 }

console.log(countOccurences(paragrafo,"et"));




//BONUS 2


let phrase = "A man, a plan, a canal, Panama!"

str = phrase.replace(/\s+/g, '');

str = str.toLowerCase();

str = str.replace(/[^0-9a-z]/gi, '')

console.log(str);

function reverse(s){
    return s.split("").reverse().join("");
}

strRev = reverse(str);

if (str === strRev) {
    console.log("It's a PALINDROME!!!");
} else {
    console.log("Not a palindrome");
}



