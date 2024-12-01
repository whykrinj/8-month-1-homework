function switchToLight() {
  document.body.classList.remove("bg-black", "text-white");
  document.body.classList.add("bg-[#C4B5A5]", "text-black");

  document.getElementById("light-btn").classList.add("hidden");
  document.getElementById("dark-btn").classList.remove("hidden");
}

function switchToDark() {
  document.body.classList.remove("bg-[#C4B5A5]", "text-black");
  document.body.classList.add("bg-black", "text-white");

  document.getElementById("dark-btn").classList.add("hidden");
  document.getElementById("light-btn").classList.remove("hidden");
}
