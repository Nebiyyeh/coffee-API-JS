async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error", error);
  }
}

async function renderData(url) {
  const container = document.querySelector(".coffees");

  container.innerHTML = "";

  const data = await fetchData(url);

  if (!data) {
    return;
  }

  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    container.appendChild(card);

    const text = document.createElement("div");
    text.classList.add("text");

    card.appendChild(text);

    const pic = document.createElement("div");
    pic.classList.add("pic");

    card.appendChild(pic);

    const title = document.createElement("h3");
    title.textContent = item.title;

    const description = document.createElement("p");
    description.textContent = item.description;

    const ingredients = document.createElement("p");
    ingredients.textContent = "Ingredients: " + item.ingredients;

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.image;

    text.appendChild(title);
    text.appendChild(description);
    text.appendChild(ingredients);

    pic.appendChild(image);
  });
}

document.getElementById("hot").addEventListener("click", () => {
  renderData("https://api.sampleapis.com/coffee/hot");
});

document.getElementById("iced").addEventListener("click", () => {
  renderData("https://api.sampleapis.com/coffee/iced");
});
