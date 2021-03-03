//const app = new Eventonica(); 
//const event = app.addEvent('study-date','2021-02-02','sf','fun');
//const user = app.addUser('Abby','Abby123@gmail.com','27');
const { Eventonica,User,Event } = require('../src/models.js');
const app = new Eventonica(); 


// Test addEvent and deleteEvent
describe("Event", function(){
    //setup 
    //  beforeEach(function(){   
    //  const event = app.addEvent('study-date','2021-02-02','sf','fun');
    // })
    //tear down
    afterEach(function(){
        //Event.all=[]
        Event.reset()
    })

    it("addEvent() should add 1 event to Event.all array", function(){
        app.addEvent('study-date','2021-02-02','sf','fun');
        expect(Event.all.length).toBe(1);
    });
    it("deleteEvent() should delete 1 event from Event.all array", function(){
        app.addEvent('study-date','2021-02-02','sf','fun');
        // we cannot gaurantee id cannot be hard-coded.
        //id should always be 100 now.
        console.log(Event.all[0].id)
        app.deleteEvent(Event.all[0].id)
        expect(Event.all.length).toBe(0);
    });
        
    
})


// //////////////USER 

// Test addUser and deleteUser
describe("User", function(){
    //tear down
    afterEach(function(){
        User.reset()
    })

    it("addUser() should add 1 User to User.all array", function(){
        app.addUser('Abby','Abby123@gmail.com','27');
        expect(User.all.length).toBe(1);
    });
    it("deleteEvent() should delete 1 User from User.all array", function(){
        app.addUser('Abby','Abby123@gmail.com','27');
        app.deleteUser(User.all[0].id)
        expect(User.all.length).toBe(0);
    });
})

