// 3 car models: sedan suv sportscars
// rental price for each
//available or not
//total available for each category
//ability to submit a rental request



var rentals = [
   {
        model: "sedan",
        price: 75,
        total: 10
    },
    {
        model: "SUV",
        price: 175,
        total: 5  
    },
    {
        model: "sports car",
        price: 125,
        total: 0
    }
];

function rentMe(model) {
    for(var i = 0; i < rentals.length; i++) {
        if(model == rentals[i].model && rentals[i].total > 0) {
          var x = rentals[i].total = rentals[i].total - 1;
            console.log("Congratulations! You've rented the " + rentals[i].model +"." + " There are " + x + " available.");
        } else if(model == rentals[i].model && rentals[i].total === 0) {
            console.log("Sorry, the " + rentals[i].model + " is unavailable.");
        } 
    }
}

rentMe("sedan");

// function availability() {
//     for (var i = 0; i < rentals.length; i++ ) {
//         if (rentals[i].total > 0) {
//             console.log("There are " + rentals[i].total + " " + rentals[i].model + "s available.");
//         } else {
//             console.log("The " + rentals[i].model + " is unavailable");
//         }
//     }
// }

//availability();

// function displayPrice() {
//     for (var i = 0; i < rentals.length; i++) {
//         if(rentals[i].total > 0) {
//             console.log("The price of a " + rentals[i].model + " is " + rentals[i].price + " dollars.");
//         } 
//     }
// }

//displayPrice();


 
 
    

