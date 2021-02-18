//You need to build a program that lets users browse a list of events and save the ones they are interested in. 
class Event {
    static all = [];
    static _nextId = 100;
  
    constructor(name,date,location,category) {
      this.id = Event._nextId++;
      // decide what properties are required
      this.name = name;
      this.date = date;
      this.location = location;
      this.category = category;

      Event.all.push(this); // keep track of all created instances
    }
    // finds all events on specified date
    static findByDate(date) {
    let dateArry=[];
    for(let i=0;i<this.all.length;i++){
        if(this.all[i].date===date){
            dateArry.push(this.all[i])
        }
    }    
    return dateArry;
    }
  
    static findByCategory(category) {
    let catArry=[];
    for(let i=0;i<this.all.length;i++){
        if(this.all[i].category===category){
            catArry.push(this.all[i])
        }
    }    
      return catArry;
    }
  }
  
class User {
    static all = [];
    static _nextId = 200;
  
    constructor(name,email,age_group) {
      this.id = User._nextId++;
      this.name=name;
      this.email=email;
      this.age_group=age_group;
      // decide what properties are required on an instance
      User.all.push(this); // keep track of all created instances
    }
}


class Eventonica {
    addEvent(name,date,location,category) {
        new Event(name,date,location,category);
    }
  
    updateEvent(name,property,change) {
      // Update existing Event
        let indexE=Event.all.map(x => x.name).indexOf(name);
        Event.all[indexE][property]=change;
    }
    
    returnAllEvents(){
        return Event.all;
    }
    
    deleteEvent(name) {
    //console.log(Event.all.map(x => x.name)) --> returns arry of just names
    let indexRem = Event.all.map(x => x.name).indexOf(name)
    //console.log('Your event was in index',indexRem)
    if(indexRem <0){
        console.log("This event is currently not in Eventonica.");
    } else {
    //  use splice method to delete elements in array
    // first parameter defines position
    //second parameter defines how many elements to be removed
      Event.all.splice(indexRem,1);
      console.log("Your event has been removed from Eventonica.");
     }
    }
  
    findEventsByDate(date) {
      // Return items in Event.all with a specified date
      return Event.findByDate(date)
    }
  
    findEventsbyCategory(category) {
      // Return items in Event.all with a specified category
      return Event.findByCategory(category);
    }
  
    addUser(name,email,age_group) {
        new User(name,email,age_group);
    }

    returnAllUsers(){
        return User.all;
    }
  
    updateUser(name,property,change) {
      // Update existing User
      let indexU=User.all.map(x => x.name).indexOf(name);
      User.all[indexU][property]=change;

    }
  
    deleteUser(name) {
      // Deletes User
      let indexRem = User.all.map(x => x.name).indexOf(name)
      if(indexRem <0){
          console.log("This User is currently not in Eventonica.");
      } else {
      //  use splice method to delete elements in array
      // first parameter defines position
      //second parameter defines how many elements to be removed
        Event.all.splice(indexRem,1);
        console.log("Your User has been removed from Eventonica.");
       }
    }
  }
  

  //create Event Object
// date 6 numbers specify year, month, day, hour, minute, second:
let eventonica = new Eventonica();

// Events
eventonica.addEvent('Not New Years','01-01-2021','New York','Celebration');
eventonica.addEvent('New Years','01-01-2021','New York','Celebration');

//console.log(eventonica.returnAllEvents());
console.log(eventonica.findEventsbyCategory('Celebration'));
//console.log(eventonica.findEventsByDate('01-01-2021'));

//eventonica.deleteEvent('New Years');
eventonica.updateEvent('New Years','category','Huge Celebration');
console.log(eventonica.returnAllEvents());

//Users
eventonica.addUser('Abby','Abby123@gmail.com','Young adult');
//console.log(eventonica.returnAllUsers());
//eventonica.deleteUser('Abby');
eventonica.updateUser('Abby','age_group','teenager');
console.log(eventonica.returnAllUsers());

let x = 1;
console.log(++x)
//console.log(x++)
console.log(x)