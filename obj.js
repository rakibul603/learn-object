const student = {
    name: "Rakib",
    id: 121,
    address : "Dhaka",
    isSingle : true,
    friends : ["apu", "razz", "sakib", "amir"],
    act : function() {
        console.log("acting like sakib Khan")
    },
    car: {
        brand : "tesla",
        price: 500000,
        mode: 2026,
        manufacturer : {
            name: 'tesla',
            ceo : "Elon MasK",
        }
    }
}


console.log(student.act())