const img = (img_url, img_name) => `<img src="${img_url}" alt="${img_name}">`;

const planet_data = (data) => `
  <div class="planet-data">
    <h2 class="planet-name">${data.name.toUpperCase()}</h2>
      <p class="description">${data.description}</p>
      <div class="estimations-values">
        <hr class="separator">
        <div class="wrapper">
          <span class="avg-distance-title">AVG. DISTANCE</span>
          <span class="avg-distance-value">${data.distance.toUpperCase()}</span>
        </div>
        <div class="wrapper">
          <span class="est-travel-title">EST. TRAVEL TIME</span>
          <span class="est-travel-value">${data.travel.toUpperCase()}</span>
        </div>
      </div>
  </div>
  `;

const crew_description = (data) => `
<div class="crew-description">
  <span class="crew-role">${data.role.toUpperCase()}</span>
  <h2 class="crew-name">${data.name.toUpperCase()}</h2>
  <p>${data.bio}</p>
</div>
`;

const technology_text = (data) => `
  <div class="slider-text">
    <div class="technology-title">
    <span>THE TERMINOLOGY...</span>
    <h2>${data.name.toUpperCase()}</h2>
        </div>
        <p class="description">${data.description}</p>
  </div>
  `;

export { img, planet_data, crew_description, technology_text };
