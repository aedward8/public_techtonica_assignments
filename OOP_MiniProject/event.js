class Event {
    constructor(name, description) {
      this.name = name;
      this.description = description;
      this.availableTickets = [];
    }

    //create a ticket type for the event
    addAvailableTickets(ticketType,price){
        let tix = new TicketType(ticketType,price);
        this.availableTickets.push(tix);
    }
    //All tickets: 1. Orchestra ($300) 2. Mezzanine ($200) 3. Balcony ($100)

    //returns a string representing all ticket types and prices,
    allTickets(){
        let sent = "All tickets: "
        for(let i=0;i<this.availableTickets.length;i++){
            sent=sent +" "+(i+1)+'. '+this.availableTickets[i].ticketType +' ($'+ this.availableTickets[i].price +') ';
        }
        return sent;
    }

    // return lisk of avaialble tickets
    //The method should look like this when it is called: eventObj3.searchTickets(0, 250) and will return the string: Eligible tickets: 1. Balcony ($100) 2. Mezzanine ($200) for that particular call. If no tickets are available in that range, it will instead return: No tickets available.
    searchTickets(lower,upper){
    let sent = "Eligible tickets: ";
    let value = 1;

    for(let i=0;i<this.availableTickets.length;i++){
            if(this.availableTickets[i].price >= lower && this.availableTickets[i].price <= upper) {
                sent=sent +" "+value+'. '+this.availableTickets[i].ticketType +' ($'+ this.availableTickets[i].price +') ';
                value++;
            }
        }    

        if(value === 1){
            return 'No tickets available.'
        } else{
            return sent;
        }
    }
}
// store the name and price of a ticket type (for example, maybe "Balcony" tickets are $35).
class TicketType {
    constructor(ticketType, price) {
        this.ticketType = ticketType;
        this.price = price;
    }
}

// The below statement creates an object.
const eventObj1 = new Event(
    'KLOS Golden Gala',
    'An evening with hollywood vampires'
  );
const eventObj2 = new Event('Skillet & Sevendust', 'Victorious war tour');
const eventObj3 = new Event('Jenny Lewis', 'On the line tour 2019');

// add different types of tickets to every single one of your events
eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);
eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)

eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)

// check searchTickets method
console.log(eventObj3.searchTickets(0, 250)) // Eligible tickets: 1. Balcony ($100) 2. Mezzanine ($200)
console.log(eventObj1.searchTickets(0, 50)) // No tickets available.

//Create an empty Event array.
const eventArray = new Array();

// push the objects created into the array.
eventArray.push(eventObj1, eventObj2, eventObj3);
console.log(eventArray);

//jQuery code to iterate through array in the same js file
// .each() is used to iterate through the array of objects.
//.html() is used to return the HTML code from jQuery to the target element of the HTML page.
// event is the target element in the below code

//modify jquery code to call the allTickets function & display ticket prices
$(document).ready(function () {
    let html = '';
    $.each(eventArray, function (index, item) {
      html += `<li>${item.name} - ${item.description}- ${item.searchTickets(0,100)}</li>`;
    });
    // insert final html into #event...
    $('#event').html(html);
  });

  // Note that all jQuery methods in our examples are inside a document ready event. This is to prevent any jQuery code from running before the document is finished loading (is ready).

