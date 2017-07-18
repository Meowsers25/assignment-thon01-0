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
    
function availability() {
    for (var i = 0; i < rentals.length; i++ ) {
        if (rentals[i].total > 0) {
            console.log("The " + rentals[i].model + " is available.");
        } else {
            console.log("The " + rentals[i].model + " is unavailable");
        }
    }
}

function displayPrice() {
    for (var i = 0; i < rentals.length; i++) {
        if(rentals[i].total > 0) {
            console.log("The price of " + rentals[i].model + " is " + rentals[i].price + " dollars.");
        } 
    }
}

availability();
displayPrice();


 
 
    

