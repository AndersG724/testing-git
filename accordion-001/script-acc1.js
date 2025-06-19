const accordions = Array.from(document.getElementsByClassName("accordion"));
accordions.forEach(accordion1 =>
  accordion1.addEventListener("click", () =>
    accordions.forEach(accordion2 =>
      accordion2.nextElementSibling.classList.toggle(
        "hidden",
        accordion1 !== accordion2 ||
        !accordion1.nextElementSibling.classList.contains("hidden")
      )
    )
  )
);