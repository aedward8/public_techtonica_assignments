/**
 * Paste your code from Part 1 into this file but keep the module check at the very end.
 * (The following is a just a small subset for the Add Event form on the example page to work)
 */
// class Event {
//   static all = [];
//   static _nextId = 100;

//   constructor(name) {
//     this.name = name;
//     this.id = Event._nextId++;
//     Event.all.push(this); // keep track of all created instances
//   }
// }

// class User {}

// class Eventonica {
//   addEvent(name) {
//     return new Event(name);
//   }
// }

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

  constructor(name,email,age) {
    this.id = User._nextId++;
    this.name=name;
    this.email=email;
    this.age=age;
    // decide what properties are required on an instance
    User.all.push(this); // keep track of all created instances
  }
}


class Eventonica {
  addEvent(name,date,location,category) {
      return new Event(name,date,location,category);
  }

  updateEvent(name,property,change) {
    // Update existing Event
      let indexE=Event.all.map(x => x.name).indexOf(name);
      Event.all[indexE][property]=change;
  }
  
  returnAllEvents(){
      return Event.all;
  }
  
  deleteEvent(id) {
  //console.log(Event.all.map(x => x.name)) --> returns arry of just names
  let indexRem = Event.all.map(x => x.id).indexOf(id)
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

  addUser(name,email,age) {
      return new User(name,email,age);
  }

  returnAllUsers(){
      return User.all;
  }

  updateUser(name,property,change) {
    // Update existing User
    let indexU=User.all.map(x => x.name).indexOf(name);
    User.all[indexU][property]=change;

  }

  deleteUser(id) {
    // Deletes User
    let indexRem = User.all.map(x => x.id).indexOf(id)
    if(indexRem <0){
        console.log("This User is currently not in Eventonica.");
    } else {
    //  use splice method to delete elements in array
    // first parameter defines position
    //second parameter defines how many elements to be removed
      User.all.splice(indexRem,1);
      console.log("Your User has been removed from Eventonica.");
     }
  }
}



if (typeof module !== "undefined") {
  module.exports = { Eventonica, User, Event };
}

