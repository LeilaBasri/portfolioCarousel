let slideindex = 1;
showSlides(slideindex);

function plusSlides(n){
    showSlides(slideindex+=n);
}
function currentSlide(n){
    showSlides(n);
}
function showSlides(n){
    
    let portfolioItems = document.getElementsByClassName("portfolioItem");
    let portfolios = portfolioItems;
    if(n>portfolios.length){slideindex=1;}
    if(n<1){slideindex = portfolios.length}

    for(i=0 ; i<portfolioItems.length ; i++){
        if(i+1<portfolioItems.length){
            portfolios[i].innerHTML=portfolioItems[i+1].innerHTML;
        }
        else{
            portfolios[i].innerHTML=portfolioItems[i+1-(portfolioItems.length)].innerHTML;
        }
    }

    for(k=0 ; k<portfolios.length ; k++){
        portfolios[k].style.opacity = "0";
        portfolios[k].style.display = "none";
    }
    for(j=0 ; j<9 ; j++){
        portfolios[j].style.opacity = ".8";
        portfolios[j].style.display = "block";
        portfolios[j].style.width = "10%";
    }

    portfolios[1].style.opacity="1";
    portfolios[1].style.width = "30%";
    portfolios[1].classList.add("active");
    portfolios[0].classList.remove("active");
    
    slideindex++;
    if(slideindex>(portfolios.length)){slideindex=1;}
    setTimeout(showSlides, 2000, slideindex); 
}
