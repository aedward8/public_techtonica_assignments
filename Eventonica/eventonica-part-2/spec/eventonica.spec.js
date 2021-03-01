
const { Eventonica, User, Event } = require('../src/models.js');

const app = new Eventonica(); 
const event = app.addEvent('study-date','2021-02-02','sf','fun');
const user = app.addUser('Abby','Abby123@gmail.com','27');


// Test addEvent

describe("addEvent", function(){
    
    it("should add 1 event to Event.all array", function(){
       // const event = app.addEvent('study-date','2021-02-02','sf','fun');
    expect(Event.all.length).toBe(1);
    });

});

//test deleteEvent
describe("deleteEvent", function(){

    it("should delete 1 event from Event.all array", function(){
    //const event = app.addEvent('study-date','2021-02-02','sf','fun');
    app.deleteEvent(100)
    expect(Event.all.length).toBe(0);
    });

});

//////////////USER 

// test addUser
describe("addUser", function(){
    it("should add 1 User to User.all array", function(){
    //const user = app.addUser('Abby','Abby123@gmail.com','27');
    expect(User.all.length).toBe(1);
    });

});

//test deleteUser
describe("deleteUser", function(){
    it("should delete 1 event from User.all array", function(){
    app.deleteEvent(200)
    expect(User.all.length).toBe(0);
    });

});

// Ask Mentor why sometimes it runs 0 and run false