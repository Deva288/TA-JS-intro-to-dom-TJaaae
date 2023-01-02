let allPeople = got.houses.reduce((acc, cv) => {
   acc = acc.concat(cv.people);
   return acc;
}, []);

let rootElemet = document.querySelector("ul");

allPeople.forEach(people => {
  let li = document.createElement("li");
  li.classList.add("box");

  let div = document.createElement("div");
  div.classList.add("pic-name");

  let charImg = document.createElement("img");
  charImg.src = people.image;
  charImg.alt = people.name;

  let charName = document.createElement("h2");
  charName.innerText = people.name;

  div.append(charImg, charName);

  let charDescription = document.createElement("p");
  charDescription.innerText = people.description;

  let learnmore = document.createElement("a");
  learnmore.innerText = "Learn More";
  learnmore.href = people.wikiLink;
  learnmore.target = "_blank";
  learnmore.classList.add("learn")


  li.append(div, charDescription, learnmore)
  rootElemet.append(li);
})