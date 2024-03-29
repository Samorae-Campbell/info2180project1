//========================================Address Book===============================================

function add(firstName, lastName, phoneNumber, email){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
}

var sally = new add ("Sally", "Li", "(323) 868 4834", "sally.li.14@yahoo.com");

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

contacts[contacts.length] = sally;

add("Garrold", "Williams", "(654) 555-5555", "gar_will34@hotmail.com");

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

var list = function () {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

var search = function(lastName){
    var length = contacts.length;
    for (var i = 0; i< length; i++){
        if(contacts[i].lastName === lastName){
            printPerson(contacts[i]);
        }
    }
}

/*Create a search function
then call it passing "Jones"*/
list();
search("Jones");

//=============================================Cash Register==================================================

function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

// Create yourself again as 'me' with a staff discount of 20%
var me = new StaffMember("Sammie",20);


var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here
    
    applyStaffDiscount: function(employee){
        this.total -= (this.total*employee.discountPercent*0.01)
    }
    
    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object 
// to applyStaffDiscount
cashRegister.applyStaffDiscount(me);

// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));