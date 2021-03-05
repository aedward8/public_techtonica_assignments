const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000

// Add JSON body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const { Eventonica, User, Event } = require('../src/models.js');
const eventonica = new Eventonica(); 

//MiddleWare
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// EVENT-RELATED ROUTES
app.get('/events', (req, res) => {
    res.status(200).send(Event.all);
  }).post((req, res) => {
    //psuedo-ish code
    let newEvent =  req.body;
    //will automatically push to event_all array
    let addEventObj=eventonica.addEvent(newEvent);
    res.status(200).send(addEventObj);

  })


app.route('/events/:id').get((req, res) => {
    let event_id = req.params.id;
    let status = 404;
    let response = 'Uh-oh! We were unable to find your event!';
    Event.all.forEach((event) => {
      if (event['id'] == event_id) {
        res.status(200).send(event);
      }
    });
    res.status(status).send(response);
}).put((req, res) => {
     //psuedo code ish
    let event_id = req.params.id;
    let status = 404;
    let response = 'Uh-oh! We were unable to find your event!';
    let propertiesToChange = req.body;
    let updatedEvent= {};
    Event.all.forEach((event) => {
              updatedEvent = {
          ...event,
          ...propertiesToChange
        }
      })
    status = 200;
    response = updatedEvent;
    res.status(status).send(response);
}).delete((req, res) => {
    //psuedo code ish
    let event_id = req.params.id;
    let status = 404;
    let response = 'Uh-oh! We were unable to find your event!';
    let remainingEvents = Event.all.filter((event) => {
              return event;
    })
    status = 200;
    response = remainingEvents;
    res.status(status).send(response);
});


// USER-RELATED ROUTES
app.get('/users', (req, res) => {
    res.status(200).send(User.all);
}).post((req, res) => {
    //psuedo-ish code
    let newUser = req.body;
    //will automatically push to event_all array
    let addUserObj=eventonica.addUser(newUser);
    res.status(200).send(addUserObj);

  })

app.route('/users/:id').get((req, res) => {
    let user_id = req.params.id;
    let status = 404;
    let response = 'Uh-oh! We were unable to find your user!';
    User.all.forEach((user) => {
      if (user['id'] == user_id) {
        res.status(200).send(user);
      }
    });
    res.status(status).send(response);
}).put((req, res) => {
    //psuedo-code ish
    let user_id = req.params.id;
    let status = 400;
    let response = "Uh-oh! We were unable to find your user!";
    let newUser = {}
    Users.all.forEach((user) => {
        user = req.body;
    })
    status = 200;
    response = newUser;
    res.status(status).send(response);
}).delete((req, res) => {
    //psuedo code ish
    let user_id = req.params.id;
    let status = 404;
    let response = 'Uh-oh! We were unable to find your user!';
    let remainingUsers = User.all.filter((user) => {
              return user;
    })
    status = 200;
    response = remainingUsers;
    res.status(status).send(response);
});




// PORT Listener
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


//sample data

let event_1 = new Event('Study-A-Thon','2021-03-05','Virtual','Study');
let event_2 = new Event('Puppy Adoption Fair','2021-02-01','Golden Gate Park','Fun');
let user_1 = new User('Alex','Alex123@gmail.com','Young Adult');
let user_2 = new User('Annie','Annie123@gmail.com','Parent');
let user_3 = new User('Lisa','Lisa123@gmail.com','teen');