/**
 * Add all your DOM event handlers and other UI code in this file.
 */
new Event('Example event_1');
new Event('Example event_2');
new User('Alex');
new User('Annie');
new User('Lisa');


document.addEventListener("DOMContentLoaded", () => {
  // Use this to call all the logic we already created
  const app = new Eventonica();
  

  // Builds HTML list for all event. You must call this function after you
  // change, add, or remove any events.
  const refreshEventsList = () => {
    document.querySelector("#events-list").innerHTML = Event.all
      .map((event) => `<li>${event.name}</li>`)
      .join("\n");
  };
  // show initial Events list 
  refreshEventsList();

  // Build HTML list for all Users.
  const refreshUsersList = () => {
    document.querySelector("#users-list").innerHTML = User.all
    .map((user) => `<li>${user.name} ${user.email} ${user.age} </li>`)
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
    const event = app.addEvent(name);
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
    console.log("User has been removed");
    refreshUsersList();
    deleteUserForm.reset();
  });

});



console.log(User.all)