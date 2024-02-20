// opportunityForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//
//   const title = document.getElementById("title").value;
//   const description = document.getElementById("description").value;
//   const date = document.getElementById("date").value;
//   const time = document.getElementById("time").value;
//   const location = document.getElementById("location").value;
//
//   localStorage.setItem("titleV", title);
//   localStorage.setItem("descriptionV", description);
//   localStorage.setItem("dateV", date);
//   localStorage.setItem("timeV", time);
//   localStorage.setItem("locationV", location);
//
//   const existingOpportunities =
//     JSON.parse(localStorage.getItem("opportunities")) || [];
//
//   const newOpportunity = {
//     title,
//     description,
//     date,
//     time,
//     location,
//   };
//
//   existingOpportunities.push(newOpportunity);
//
//   localStorage.setItem("opportunities", JSON.stringify(existingOpportunities));
//
//   window.location.href = "index2.html";
//
//   opportunityForm.reset();
// });
//
// // localStorage.clear();
