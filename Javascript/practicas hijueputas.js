const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];
function lookUpProfile_beta(name, prop) {
  for (let content of contacts) {
    console.log(content);
    for (let name_ingresed in content) {
      if (content[name_ingresed] == name) {
        if (content[prop] != undefined) {
          console.log(content[prop]);
        } else {
          console.log("no such a property");
        }
      } else {
        return console.log("No such a contact");
      }
    }
  }
}

//MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL

function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
}
return "No such contact";
}
// CORRECT^^ GOD
lookUpProfile("hola", "xd");
lookUpProfile("Akira", "likes");

function checkSign(num) {
    (num>0) ? "positive":(num<0)?"negative":"zero";}
    l
checkSign(10);