function page1() {
//Create the tab, with 3 buttons: home, menu, contact;
const tabDiv = document.createElement("div");
const home = document.createElement("p");
const menu = document.createElement("p");
const contact = document.createElement("p");

tabDiv.classList.add("tabDiv");

home.innerText = "Home";
menu.innerText = "Menu";
contact.innerText = "Contact";

document.body.appendChild(tabDiv)
tabDiv.appendChild(home);
tabDiv.appendChild(menu);
tabDiv.appendChild(contact);

//create the container to include the contentContainer and sections within it
const container = document.createElement("div")
container.classList.add("container")
document.body.appendChild(container)

//create the contentContainer to 
const contentContainer = document.createElement("div")
contentContainer.classList.add("contentContainer")
container.appendChild(contentContainer)

//create the headline
const restaurantTitle = document.createElement("div");
const restaurant = document.createElement("p");

restaurant.innerText = "Restaurant Life Curry House";

restaurantTitle.appendChild(restaurant);
contentContainer.appendChild(restaurantTitle);

//create the description content;
const descriptionSection = document.createElement("div");
const descriptionTitle = document.createElement("p");
const description = document.createElement("p");

descriptionTitle.innerText = "Welcome"

description.innerText = "Spice up your foodie life with a myriad of curries ranging from lamb to mutton to seafood at Life Curry House in Puchong! Better yet, enjoy them with the generous banana leaf rice with veggies and meats of your choice for a flavour nuke in your mouth!"


descriptionSection.appendChild(descriptionTitle);
descriptionSection.appendChild(description);
contentContainer.appendChild(descriptionSection);

//create the operation centent;
const operationSection = document.createElement("div");
const operationTitle = document.createElement("p");
operationTitle.innerText = "Hours"
const operation = document.createElement("p");
operation.innerText = "We open every from 9am to 9pm."

operationSection.appendChild(operationTitle);
operationSection.appendChild(operation);
contentContainer.appendChild(operationSection);

//create the location content;
const locationSection = document.createElement("div");
const locationTitle = document.createElement("p");
locationTitle.innerText = "Location"
const location1 = document.createElement("p");
location1.innerText = "19,Jalan Puchong Jaya, 47100 Selangor"


locationSection.appendChild(locationTitle);
locationSection.appendChild(location1);
contentContainer.appendChild(locationSection);


console.log("page1 done")    
}

export { page1 };