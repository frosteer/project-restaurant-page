function page3() {
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

//create the contentContainer
const contentContainer = document.createElement("div")
contentContainer.classList.add("contentContainer")
container.appendChild(contentContainer)

//create the menu
const contactTitle = document.createElement("div");
const contact1 = document.createElement("p");
contactTitle.style.width = "300px"

contact1.innerText = "Contact";

contactTitle.appendChild(contact1);
contentContainer.appendChild(contactTitle);

//create the food content
const foodSection = document.createElement("div");
const foodTitle = document.createElement("p");
const food = document.createElement("p");

foodTitle.innerText = "Frosteer";
foodTitle.style.width = "250px"

food.innerHTML = "CEO <br> 555-555-555 <br> frost@LifeCurryHouse.com";

foodSection.appendChild(foodTitle);
foodSection.appendChild(food);
contentContainer.appendChild(foodSection);

console.log("ok");

}

export {page3};
    