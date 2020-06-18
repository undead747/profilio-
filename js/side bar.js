const burger = document.querySelector('.burger');
const sideBar = document.querySelector('.side-bar');
const headerTop = document.querySelector(".header-top");

const sideBarToggle = () => {
     burger.addEventListener('click', () => {
         sideBar.classList.add('side-bar-animation');
         sideBar.classList.toggle('side-bar-active');
})
}

const changeSize = () => {
   window.addEventListener('resize', () => {
         const windowSize = window.innerWidth;
         if(windowSize > 768) sideBar.classList.remove('side-bar-animation')
   })
}

const scrollAnimation = () => {
   window.addEventListener("scroll", () => {
      let y = this.scrollY;
      console.log(y)
      if(y > 0){
         headerTop.classList.add('header-top-scroll');
         headerTop.classList.remove("header-top-default");
      }else{
         headerTop.classList.add('header-top-default');
         headerTop.classList.remove("header-top-scroll");
      }
   });
}

scrollAnimation();
sideBarToggle();
changeSize();
