const faqs = document.querySelectorAll('.faqs');
const paragraphs = document.querySelectorAll('p');
faqs.forEach(faq => {
  faq.addEventListener('click', (e) => {
    if(faq.children[1].style.display != 'block' && faq.children[0].children[1].src != 'assets/images/icon-minus.svg'){
      faq.children[1].style.display = 'block';
      faq.children[0].children[1].src = 'assets/images/icon-minus.svg'
    } else {
      faq.children[1].style.display = 'none'
      faq.children[0].children[1].src = 'assets/images/icon-plus.svg'
    }
  })
})