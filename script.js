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

  container.innerHTML='';

  const data = await fetchData(url);

  if (!data) {
    return;
  }

  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = item.title;

    const description = document.createElement("p");
    description.textContent = item.description;

    const ingredients = document.createElement("p");
    ingredients.textContent = "Ingredients: " + item.ingredients;

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.image;

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(ingredients);
    card.appendChild(image);
    container.appendChild(card);
  });
}

document.getElementById('hot').addEventListener('click', () => {
    renderData('https://api.sampleapis.com/coffee/hot');
});

document.getElementById('iced').addEventListener('click', () => {
    renderData('https://api.sampleapis.com/coffee/iced');
});
