document.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector("#welcomeTitle");
    if (!text) return;
  
    // Harflarni spanlarga bo‘lamiz
    text.innerHTML = text.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  
    // Animatsiya effekti
    anime.timeline({ loop: true })
      .add({
        targets: "#welcomeTitle .letter",
        opacity: [0, 1],
        translateY: ["1.5em", 0],
        duration: 800,
        delay: (el, i) => 60 * i,
        easing: "easeOutExpo"
      })
      .add({
        targets: "#welcomeTitle",
        opacity: 0,
        duration: 1500,
        easing: "easeOutExpo",
        delay: 2000
      });
  });

  