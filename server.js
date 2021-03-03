const express = require('express');
const app = express();
const bodyParser = require('body-parser');


//set up port 3000
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/lists', (req, res) => {
    // create ONE array of just the keys
    const listsArray = Array.from(lists.keys()); // Why is this like this? Try it out in your console.
    console.log(listsArray)
    res.send(listsArray);
});


app.route('/lists').get((req, res) => {
    // if(listsArray.length ==0){
    //     res.status(200).send({});
    // } else {
        res.status(200).send(listsArray);
    //} do not need if ese because array from will make an empty array
})


app.route('/lists/:name').get((req, res) => {
    let name = req.params.name;
    let status = 404;
    let response = 'This name group does not exist';
      if (lists.has(name)) {
        // return the value of the key // specific to map object
        res.status(200).send(lists.get(name));
      } else {
        res.status(status).send(response);
      }

  }).delete((req, res) => {
    let name = req.params.name;
    let status = 404;
    let response = 'This name group does not exist';
    if (lists.has(name)) {
        // return the value of the key // specific to map object
        lists.delete(name)
        res.status(200).send();
      } else {
        res.status(status).send(response);
      }
}).put((req, res) => {
    let name = req.params.name;
    let status = 201;
    let response = 'You have created a new mailing list!';
    if (lists.has(name)) {
        // return the value of the key // specific to map object
       //
        res.status(200).send();
      } else {
        lists.set()
      }

        res.status(status).send(response);
      }
  })





  

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});


//Set up fake data with Map
const lists = new Map();
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
lists.set("staff",{name:"staff", members: ["talea@techtonica.org", "michelle@techtonica.org"]})
lists.set("cohort-h1-2020",{name:"cohort-h1-2020", members: ["avery123@gmail.com","abby123@gmail.com"]})

// let myList = {
//     'staff': {
//         name: 'staff',
//         members: ["talea@techtonica.org", "michelle@techtonica.org"]
//     }
// }




