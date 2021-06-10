var readlineSync = require('readline-sync');
var userName=readlineSync.question('Let me your Name: ');
console.log('welcome to '+userName);

var question;
var score=0;
var answer;
console.log("\n");
console.log("--------------");
console.log("Cautions :");
console.log("--------------");
console.log("Please Answer the Questions Carefully Because every right Answer 2 marks will be awarded and every wrong answer 1 mark is deducted. Best Of Luck.......");
console.log("\n");
function play(question,answer){
  var answerOne=readlineSync.question(question);
if(answerOne===answer){
  console.log("\nYou are Right !");
  score++;
  
}
else{
  console.log('\nYou are Wrong!');
  score--;
}
console.log("\nTotal Score :" +score);

}
function qualified(score){

 scoreMatch=3;
if(score===scoreMatch){
console.log("\nWelldone  Mr."+userName +"  You are Qualified");}
else{
  console.log("\nYou are not Qualified!")
}
}
play("\nWho am I? ","programmer");
play("\nwhat is my hobby? ","coding");
play("\nwhere do i live? ", "mirzapur");

qualified(score);

console.log('\nThank You! For Playing  Mr.'+userName);