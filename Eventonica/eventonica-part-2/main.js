/**
 * Add all your DOM event handlers and other UI code in this file.
 */
new Event('Study-A-Thon','2/21/2021','Virtual','Learning');
new Event('Puppy Adoption Fair','2/01/2021','Golden Gate Park','Fun');
new User('Alex','Alex123@gmail.com','Young Adult');
new User('Annie','Annie123@gmail.com','Parent');
new User('Lisa','Lisa123@gmail.com','teen');


document.addEventListener("DOMContentLoaded", () => {
  // Use this to call all the logic we already created
  const app = new Eventonica();
  
  // Builds HTML list for all event. You must call this function after you
  // change, add, or remove any events.
  const refreshEventsList = () => {
    document.querySelector("#events-list").innerHTML = Event.all
      .map((event) => `<li>${event.name} ${event.date} ${event.location} ${event.category} Event_Id: ${event.id} </li>`)
      .join("\n");
  };
  // show initial Events list 
  refreshEventsList();

  const refreshFaveEventsList = (user_id) => {
    let user = app.getUser(user_id);
    document.querySelector("#fave-user").innerHTML = `<h3>${user.name}</h3>`
    document.querySelector("#fav-event-list").innerHTML = user.faveEvents
      .map((event) => `<li> ${event.name} ${event.date} ${event.location} ${event.category} Event_Id: ${event.id} </li>`)
      .join("\n");
  };

  // Build HTML list for all Users.
  const refreshUsersList = () => {
    document.querySelector("#users-list").innerHTML = User.all
    .map((user) => `<li>${user.name} ${user.email}  ${user.age} User_Id: ${user.id} </li>`)
      .join("\n");
  };
    // show initial User list 
    refreshUsersList();

  // default action for a form is to refresh or redirected
  const addEventForm = document.querySelector("#add-event");
  // Handle add event form submit by calling our instance of Eventonica, `app`
  addEventForm.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();
    const name = document.querySelector("#add-event-name").value;
    const date = document.querySelector("#add-event-date").value;
    const location = document.querySelector("#add-event-location").value;
    const category = document.querySelector("#cat-select").value;
 

    const event = app.addEvent(name,date,location,category);
    console.log("Added event", event);
    refreshEventsList();
    addEventForm.reset();
  });

  const addUserForm = document.querySelector("#add-user");
  // Handle add user form submit by calling our instance of Eventonica, `app`
  addUserForm.addEventListener("submit", (submitUser) => {
    submitUser.preventDefault();
    const name = document.querySelector("#add-user-name").value;
    const email = document.querySelector("#add-user-email").value;
    const age = document.querySelector("#add-user-age").value;
    const user= app.addUser(name,email,age);
    console.log("Added user", user);
    refreshUsersList();
    addUserForm.reset();
  });

  const deleteUserForm = document.querySelector("#delete-user");
  // Handle add user form submit by calling our instance of Eventonica, `app`
  deleteUserForm.addEventListener("submit", (submitUser) => {
    submitUser.preventDefault();
    const user_id = parseInt(document.querySelector("#delete-user-id").value);
    app.deleteUser(user_id);
    refreshUsersList();
    deleteUserForm.reset();
  });

  const deleteEventForm = document.querySelector("#delete-event");
  // Handle add Event form submit by calling our instance of Eventonica, `app`
  deleteEventForm.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();
    const event_id = parseInt(document.querySelector("#delete-event-id").value);
    // method in model.js code
    app.deleteEvent(event_id);
    refreshEventsList();
    deleteEventForm.reset();
  });



const addFaveEventForm = document.querySelector("#fav-event");
addFaveEventForm.addEventListener("submit", (submitEvent) => {
  submitEvent.preventDefault();

  const user_id = parseInt(document.querySelector("#fave-user-id").value);
  const event_id = parseInt(document.querySelector("#fave-event-id").value);
  // method in model.js code
  app.faveEvent(user_id,event_id);
  refreshFaveEventsList(user_id); 
  addFaveEventForm.reset();
});

});


