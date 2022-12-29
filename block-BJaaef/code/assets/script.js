let allPeople = got.houses.reduce((acc, cv) => {
    acc = acc.concat(cv.people);
    return acc;
  }, []);

let rootElement = document.querySelector("ul");

allPeople.forEach(people => {
    let li = document.createElement("li");
    li.classList.add("box");

    let div = document.createElement("div");
    div.classList.add("name-pic");
    let charImg = document.createElement("img");
    charImg.src = people.image;
    charImg.alt = people.name;
    let charName = document.createElement("h4");
    charName.innerText = people.name;
    div.append(charImg, charName);


    let charDescription = document.createElement("p");
    charDescription.innerText = people.description;

    let learnMore = document.createElement("a");
    learnMore.innerText = "Learn More";
    learnMore.href = people.wikiLink;
    learnMore.target = "_blank";
    learnMore.classList.add("learn"); 

    li.append(div, charDescription, learnMore);
    rootElement.append(li);
});

