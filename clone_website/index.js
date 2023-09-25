var par=document.querySelector('.coffee-par');
var img= document.querySelector('.coffee');
 //image
function slide()
{
    setTimeout(() => {
        console.log('sidecoffee-1 apperaring');
        img.style.transform='translateX(150%)';
        par.style.transition='.5s';
        },3000);
setTimeout(() => {
console.log('sidecoffee disappearing');
img.style.transform='translateX(0)';
img.classList.add('active');

},1000);
}

setInterval(slide,2000);
//paragraph
function slidepar()
{

setTimeout(() => {
console.log('sidePar-2 disappearing');
par.style.transform='translateX(0)';
par.classList.add('active-par');
},2000);

setTimeout(() => {
console.log('sidePar appearing');
par.style.transform='translateX(-135%)';
par.style.transition='.5s';
},5000);

}
setInterval(slidepar,2000);



//service shifting for images
const image1=document.querySelector('.ser-one');
const image2=document.querySelector('.ser-two');
const image3=document.querySelector('.ser-three');

//service shifting for paragraphs
const hone2=document.querySelector('.ser-two-h1');
const parag2=document.querySelector('.ser-two-p');
const parag22=document.querySelector('.ser-two-p2');

const hone1=document.querySelector('.ser-one-h1');
const parag1=document.querySelector('.ser-one-p');
const parag11=document.querySelector('.ser-one-p2');

const hone3=document.querySelector('.ser-three-h1');
const parag3=document.querySelector('.ser-three-p');
const parag33=document.querySelector('.ser-three-p2');

//next
let position=0;
const next=document.querySelector('.next-btn');
let imgWidth=document.querySelector('.slider-item').clientWidth;
const sliderItem=document.querySelector('.slider-item');
const slider=document.querySelector('.slider');
//prev
const prev=document.querySelector('.prev-btn');

prev.addEventListener('click',() =>
    {
        // console.log
        position -= imgWidth;

        slider.style.transform=`translateX(${position}px)`;

        if(position <= -(slider.clientWidth-imgWidth))
        {
            position=0;
            slider.style.transform=`translateX(${position}px)`;
            
        }
    })

//function of service
// function change_image_right()
// {
    // alert(imgWidth);
// alert('clicked right');

    next.addEventListener('click',() =>
    {
        // console.log
        position += imgWidth;

        slider.style.transform=`translateX(${position}px)`;

        if(position >= 0)
        {
            position= -(slider.clientWidth-2(imgWidth));
            slider.style.transform=`translateX(${position}px)`;
        }
    })
//for image1
// image1.classList.add('ser-active1');
// parag1.classList.add('ser-active-par1');
// hone1.classList.add('ser-active-par1');
// parag11.classList.add('ser-active-par1');

//for image2
// image2.classList.add('ser-active2');
// parag2.classList.add('ser-active-par2');
// hone2.classList.add('ser-active-par2');
// parag22.classList.add('ser-active-par2');

//for image3
// image3.classList.add('ser-active3');
// parag3.classList.add('ser-active-par3');
// hone3.classList.add('ser-active-par3');
// parag33.classList.add('ser-active-par3');
// }

function change_image_left()
{
// alert('clicked left');

}

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

var testimonial_slide=document.querySelector('.testimonial-par');

function slide_testimonial()
{
    testimonial_slide.classList.add('testimonial-par-active');
    setTimeout(() => {
        testimonial_slide.classList.add('testimonial-par-active2');
    },2000);

    // setTimeout(() => {
    //     testimonial_slide.classList.add('testimonial-par-active3');
    //     testimonial_slide.classList.add('testimonial-par-active4');
    // }, 300);
}




// function slide_testimonial()
// {
//     setInterval(() => {
//         testimonial_slide.classList.add('testimonial-par-active');
//     });

//     testimonial_slide.classList.add('testimonial-par-active2');

// }