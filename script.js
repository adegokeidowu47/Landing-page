const headers = document.querySelectorAll(".accordion-header");
const btn = document.querySelector('#need-help img');


headers.forEach((header => {
  header.addEventListener("click", () => {
    const parent = header.parentElement;


    document.querySelectorAll('.accordion-item').forEach(item => {

      if (item !== parent) {
        item.classList.remove("active");

      }
    });

    parent.classList.toggle("active");
  });
}))

const toggleBtn = () => {
  btn.addEventListener("click", function () {
    document.querySelector('#showLi').classList.toggle('show');
  })
}

toggleBtn();
