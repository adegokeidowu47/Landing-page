const accordion = document.querySelectorAll(".questans");
const btn = document.querySelector('#need-help img');



for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function (e) {
    this.classList.toggle("active");

    if (e.target) {
      this.classList.add('active');
    }
    else {
      this.classList.remove('active');
    }
  });
}

const toggleBtn = () => {
  btn.addEventListener("click", function () {
    document.querySelector('#showLi').classList.toggle('show');
  })
}

toggleBtn();
