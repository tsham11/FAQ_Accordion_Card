document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq");

  faqItems.forEach((item) => {
    const question = item.querySelector(".question");
    const arrow = question.querySelector(".arrow");
    const answer = item.querySelector(".answer");
    const h3 = question.querySelector(".bold");
    let originalH = item.clientHeight;
    h3.classList.remove("bold");

    question.addEventListener("click", function () {
      if (answer.style.display === "block") {
        answer.style.display = "none";
        item.style.height = originalH + "px";
        h3.classList.remove("bold");
        arrow.classList.remove("rotate");
      } else {
        answer.style.display = "block";
        const answerHeight = answer.clientHeight;
        item.style.height = originalH + answerHeight + "px";
        h3.classList.add("bold");
        arrow.classList.add("rotate");
      }
    });
  });
});
