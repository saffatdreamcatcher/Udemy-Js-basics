const link = document.querySelector("a");

link.textContent = "Mozilla Developer Network for beginner";

const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para);

// link.href = "https://developer.mozilla.org";