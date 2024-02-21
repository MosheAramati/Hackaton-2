opportunityForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const hebrewName = document.getElementById("hebrewName").value;
  const aboutMe = document.getElementById("aboutMe").value;
  const photo = document.getElementById("photo").value;
  

  localStorage.setItem("titleV", title);
  localStorage.setItem("descriptionV", description);
  localStorage.setItem("dateV", date);
  localStorage.setItem("timeV", time);
  localStorage.setItem("locationV", location);

  const existingOpportunities =
    JSON.parse(localStorage.getItem("opportunities")) || [];

  const newOpportunity = {
    title,
    description,
    date,
    time,
    location,
  };

  existingOpportunities.push(newOpportunity);

  localStorage.setItem("opportunities", JSON.stringify(existingOpportunities));

  window.location.href = "index2.html";

  opportunityForm.reset();
});

// localStorage.clear();
