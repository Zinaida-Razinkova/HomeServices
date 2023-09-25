window.addEventListener('scroll', function () {
    // console.log(scrollY )
    this.scrollY > 0 ? this.document.querySelector('.header').classList.add('scroll') : this.document.querySelector('.header').classList.remove('scroll')

})