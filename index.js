//Navbar color changing function
changeColor=()=>{
 
    let navbar = document.getElementById('navbar');
       let scrollValue = window.scrollY;
    console.log(scrollValue)
    if(scrollValue <20){
        navbar.classList.remove('navbg');
    }else{
        navbar.classList.add('navbg')
    }

}
window.addEventListener('scroll', changeColor);