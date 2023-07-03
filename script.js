var hobbies = [
  "reading",
  "snowboarding",
  "hiking",
  "jamming",
  "relaxing",
  "gaming"
];
hobbies.push("sleep");
hobbies.pop();
hobbies.splice(3, 0, "exercise", "eat");
hobbies.shift();
hobbies.unshift("anime");
//console.log(hobbies);

var goals = ["move to Arizona", "be comfortable", "be happy"];

var allTheThings = hobbies.concat(goals);
allTheThings.splice(5, 1);
console.log(allTheThings);

//var jamming = allTheThings.indexOf("jamming");
//console.log(jamming);

var plans = allTheThings.map(function (item) {
  return `I can't wait to start ${item}.`;
});
console.log(plans);
