function Phone(brand, price, color, phoneName) {
    //Here we put interior of the constructing function.
     this.brand = brand;
	//by using this, the "brand" property of the object we create will assume the value of the brand argument
  	 this.price = price;
  	 this.color = color;
     this.phoneName = phoneName;
}
Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}
Phone.prototype.showPhoneName = function() {
  var paragraph =  document.createElement('p');
  paragraph.innerHTML = "Phone's name is: " + this.phoneName;
  var body = document.querySelector('body');
  body.appendChild(paragraph);
}
var iPhone6S = new Phone("Apple", 2250, "silver", "iPhone6S");
var SamsungGalaxyS6 = new Phone("Samsung",3000, "black", "Samsung Galaxy S6");
var OnePlusOne = new Phone("One Plus", 2288, "red", "OnePLus One");

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();

iPhone6S.showPhoneName();
SamsungGalaxyS6.showPhoneName();
OnePlusOne.showPhoneName();
