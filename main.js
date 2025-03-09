// Tabs

const btns = document.querySelectorAll(".tab-section__btn");
const imgs = document.querySelectorAll(".tab-section__img");
const title = document.querySelector(".tab-section__img-title");

const titles = ['Some title here 1', 'Some title here 2', 'Some title here 3'];

btns.forEach((btn, btnIndex) => {
  btn.addEventListener('click', event => {
    btns.forEach(btn => {
      if (btn === event.target) {
        btn.classList.add('tab-section__btn_active')
      } else {
        btn.classList.remove('tab-section__btn_active')
      }
    });
   
    imgs.forEach((img, imgIndex) => {
      if (imgIndex === btnIndex) {
        img.removeAttribute("hidden")
      } else {
        img.setAttribute("hidden", true)
      }
    })

    title.textContent = titles[btnIndex];
  })
})


// Anchors

const anchors = document.querySelectorAll('.header__nav a');

anchors.forEach(anchor => {
  anchor.addEventListener('click', event => {
    const id = anchor.getAttribute('href');
    const elem = document.querySelector(id);

    event.preventDefault();
    window.scrollTo(0, elem.offsetTop - 60)
  })
})
