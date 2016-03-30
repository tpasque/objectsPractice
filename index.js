//White Rabbit Practice. Methods with objects --> object.method()  Working with objects and strings, as well as "this"

//we can declare the rabbit object variable.  Rabbit.speak is a function and we pass a string to it as a "line".
var rabbit = {}
rabbit.speak = function (line) {
  // console.log("the rabbit says'"+ line +"'");
}

rabbit.speak("I'm alive.");

//Using "this".  "This" will point to the object that the object.method() is called on

function speak(line){
  console.log("the "+this.type+" rabbit says "+line);
}

var whiteRabbit = {type: "white", speak: speak}
var fatRabbit = {type: "fat", speak: speak}

whiteRabbit.speak("Oh my ears and whiskers, "+"how late it is getting!");
fatRabbit.speak("I could sure use a carrot right now");
