'use strict'

function bookmarkedActive (image,phare){
    var img = document.getElementById(image);
    img.style.marginLeft = -10 + "px";
    img.style.filter = "invert(38%) sepia(40%) saturate(824%) hue-rotate(127deg) brightness(91%) contrast(89%)";

    var PharE = document.getElementById(phare);
    PharE.innerHTML ="Bookmarked"
    PharE.style.marginLeft = 15 + "px";
    PharE.style.color = "#157a74";
}


function bookmarkedDefaoult (image,phare){
    var img = document.getElementById(image);
    img.style.marginLeft = "0";
    img.style.filter = "none";

    var PharE = document.getElementById(phare);
    PharE.innerHTML ="Bookmark"
    PharE.style.marginLeft = 10 + "px";
    PharE.style.color = "gray";
}

function changeIconHamburger(hamburger,barNavegation){
    var IconHamburger = document.getElementById(hamburger);
    var Bar_Navegation = document.getElementById(barNavegation);

    /*change Icon Hamburger*/
    if(IconHamburger.src == "file:///D:/XeroAMV/Practicas/crowdfunding-product-page-main/images/icon-close-menu.svg"){
        IconHamburger.src = "images/icon-hamburger.svg";       
    }
    else {       
        IconHamburger.src = "images/icon-close-menu.svg";
    }

    /*change display of barNavegation*/
    if (Bar_Navegation.style.display == "flex"){
        Bar_Navegation.style.display = "none";
    }
    else{
        Bar_Navegation.style.display = "flex";
    }

}


function ChangeSelection (id,ChangeDisplayCircle,ChangeDisplaypampedour){
    var value = document.getElementById(id);
    var circle = document.getElementById(ChangeDisplayCircle);
    var pampedour = document.getElementById(ChangeDisplaypampedour);


    if (DisplayVerificationofAllCircle() == true){
        if(ChangeDisplayCircle == "circle"){
            pampedour.style.marginTop = "-18px";
        }
        else{
            document.getElementById("pampedour-1").style.marginTop = "0";
        }

        if(ChangeDisplayCircle == "circle-3"){
            pampedour.style.marginTop = "-12px";
        }
        else{
            document.getElementById("pampedour-3").style.marginTop = "-10px";
        }

        if(ChangeDisplayCircle == "circle-4"){
            pampedour.style.marginTop = "-13px";
        }
        else{
            document.getElementById("pampedour-4").style.marginTop = "-10px";
            document.getElementById("Mahogany-Special").style.marginTop = "-1px";
        }

        if(ChangeDisplayCircle == "circle-2"){
            document.getElementById("second-box").style.border = "2px solid #3db3ae";
            document.getElementById("second-box").style.marginTop = "30px";
            document.getElementById("enter-pledge").style.display = "flex";
            document.getElementById("third-box").style.marginTop = "40px";

        }
        else{
            document.getElementById("second-box").style.border = "none";
            document.getElementById("second-box").style.marginTop = "50px";
            document.getElementById("enter-pledge").style.display = "none";
            document.getElementById("third-box").style.marginTop = "-100px";

        }
        circle.style.display = "block";
    }
    

}


function DisplayVerificationofAllCircle(){
    var circle = document.getElementById('circle');
    var circle2 = document.getElementById('circle-2');
    var circle3 = document.getElementById('circle-3');
    var circle4 = document.getElementById('circle-4');

    if(circle.style.display != "block" && circle2.style.display != "block" &&
    circle3.style.display != "block" && circle4.style.display != "block"){
        return true;
    }

    if(circle.style.display == "block" || circle2.style.display == "block" ||
    circle3.style.display == "block" || circle4.style.display == "block"){
        circle.style.display = "none";
        circle2.style.display = "none";
        circle3.style.display = "none";
        circle4.style.display = "none";
        return true;
    }
    else{
        return false;
    }
}


function modalDefaut (id){
    var value = document.getElementById("selection-modal-start");
    value.style.display = "block";
}

function CloseSelection(){
    var Selection = document.getElementById("selection-modal-start");
    Selection.style.display = "none";
}

function ModalComplete() {
    var Complete = document.getElementById("modal-complete");
    var Selection = document.getElementById("selection-modal-start");
    
    Complete.style.display = "block";
    Selection.style.display = "none";
}