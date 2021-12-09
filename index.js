var readlineSync = require('readline-sync');
var userName=readlineSync.question('Let me your Name: ');
console.log('welcome to '+userName);


var score=0;

console.log("\n");
console.log("--------------");
console.log("Cautions :");
console.log("--------------");
console.log("Please Answer the Questions Carefully Because every right Answer 2 marks will be awarded and every wrong answer 1 mark is deducted. Best Of Luck.......");
console.log("\n"); 
var topScorer = [
  {
    name: "John",
    score: 3
  },
  {
    name: "marry",
    score: 2
  }
]
var questions=[{
  question:"Who am I ? ",
  answer:"programmer"
  },

  {
  question:"Where do I live ? ",
  answer:"mirzapur"
  },
{
  question:"What is my favorite color ? ",
  answer:"green"
  },
{
  question:"What is my favorite place ? ",
  answer:"mountain"
  },

  {
    question:"what is my hobby ? ",
  answer:"coding"
}];
function play(question,answer){
  var userAnswer=readlineSync.question(question);
if((userAnswer.toUpperCase())==(answer.toUpperCase())){
  console.log("\nYou are Right !");
  score++;
  
}
else{
  console.log('\nYou are Wrong!');
  score--;
  
}
console.log("\nTotal Score :" +score);

}

for(var i=0;i<questions.length;i++){
  
  play(questions[i].question,questions[i].answer);
}
console.log("Topper")
for (i=0;i<topScorer.length;i++)
{
  console.log((i+1)+" Name: "+topScorer[i].name)
  console.log("  Score: "+topScorer[i].score)
  console.log("---------------")
}
function qualified(score){

var scoreMatch=3;
if(score===scoreMatch){
console.log("\nWelldone  Mr."+userName +"  You are Qualified");}
else{
  console.log("\nYou are not Qualified!")
 }
}


qualified(score);


console.log('\nThank You! For Playing  Mr.'+userName);
