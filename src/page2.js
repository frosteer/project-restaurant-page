function page2() {
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
const menuTitle = document.createElement("div");
const menu1 = document.createElement("p");
menuTitle.style.width = "300px"

menu1.innerText = "Menu";

menuTitle.appendChild(menu1);
contentContainer.appendChild(menuTitle);

//create the food content
const foodSection = document.createElement("div");
const foodTitle = document.createElement("p");
const food = document.createElement("img");

foodTitle.innerText = "Banana Leaf";

food.src = "https://m.buro247.my/images/achas_cover_article.jpg";
food.style.width = "100%";
food.style.height = "320px";

foodSection.appendChild(foodTitle);
foodSection.appendChild(food);
contentContainer.appendChild(foodSection);

console.log("ok");

}

export {page2};


    