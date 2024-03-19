async function fetchData() {
  try {
    const response = await fetch("https://api.sampleapis.com/coffee/hot");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error", error);
  }
}

async function renderData() {
  const container = document.querySelector(".coffees");
  const data = await fetchData();

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
    ingredients.textContent = item.ingredients;

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(ingredients);
    container.appendChild(card);
  });
}

// Call the renderData function to display data
renderData();
