var par=document.querySelector('.coffee-par');

      function slidepar()
      {
        setTimeout(() => {
          par.style.transform='translateX(-125%)';
          par.style.transition='.5s';
        },1000);

        setTimeout(() => {
            par.style.transform='translateX(0)';
          par.classList.add('active-par');
        },3000);
      }

  setInterval(slidepar,1000);


      var img= document.querySelector('.coffee');

      function slide()
      {
        setTimeout(() => {
          img.style.transform='translateX(150%)';
        },1000);

        setTimeout(() => {
          img.style.transform='translateX(0)';
          img.classList.add('active');
        },3000);
      }

  setInterval(slide,1000);


       // Get all menu items
const menuItems = document.querySelectorAll('ul li');

// Loop through each menu item
menuItems.forEach(item => {
  // Add click event listener to each menu item
  item.addEventListener('click', () => {
    // Remove active class from all menu items
    menuItems.forEach(menuItem => {
      menuItem.classList.remove('active');
      menuItem.style.transition='.8s';
    });
    // Add active class to the clicked menu item
    item.classList.add('active');
  });
});

console.log('hi');