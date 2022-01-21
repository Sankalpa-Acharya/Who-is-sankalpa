var typed = new Typed('.for-typedjs', {
    strings: ['STUDENT','DEVELOPER'],
    'typeSpeed':65,
    'backSpeed':65,
    'loop':true,
    fadeOutClass: 'typed-fade-out',
  });


      window.addEventListener('scroll',(e)=>{
        const nav = document.querySelector('.head-section');
        if(window.pageYOffset>0){
          nav.classList.add("add-shadow");
        }else{
          nav.classList.remove("add-shadow");
        }
      });


 


    document.getElementById('blog-btn').addEventListener('click',()=>{
      window.location.href='https://sankalpa02.medium.com/testing-cookies-worth-500-8fc2310e6d7e?source=user_profile---------1----------------------------'
    })


  localStorage.setItem('maybethis','flag{Told_you_this_was_easy}')
