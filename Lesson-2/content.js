/*
MIT License

Copyright (c) 2017 Stefan Reimann 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/


/* GLOBALS */
var activeDiv = 1;
var activeElement = "";
var fontSizeHeader    = 3.6;    // vw (viewport width unit) is used as a starting point
var fontSizeParagraph = 2.2;    // vw

// Manipulate the font-size property with a range control
function outputUpdate(vol) 
{
	document.querySelector('#volume').value = vol;    
    activeElement.style.fontSize = vol + "vw"; // Unit vw is used to keep the font-size property "responsive"
}

function calculateRelativeFontSize(size) {    
    // Default header font-size:    font-size: 3.6vw;
    // Default paragraph font-size: font-size: 2.2vw;

    // The property "window width" is used to transform the px-units to the relative font-size unit vw
    var w = window.innerWidth;
    var h = window.innerHeight;
    
    var fntSize = size.substring(0, size.length-2);
    var helper = (w / 100);
    var relFontSize = (fntSize / helper); 
   
    return (relFontSize);
}

function getRelativeFontSize(size) {
    var strFntSize = calculateRelativeFontSize(size);

    return strFntSize;
}

/*  SELECT FONTS 
    -> will be improved during the ongoing tutorial series
*/
function setFontLora() {    
    if(activeDiv == 1) {        
        document.getElementById("flexFont").style.fontFamily = "Lora";
    }
    if(activeDiv == 2) {        
        document.getElementById("flexFont2").style.fontFamily = "Lora";
    }  
}

function setFontLato() {
    if(activeDiv == 1) {        
        document.getElementById("flexFont").style.fontFamily = "Lato";
    }
    if(activeDiv == 2) {        
        document.getElementById("flexFont2").style.fontFamily = "Lato";
    }  
} 

function setFontMontserrat() {    
    if(activeDiv == 1) {        
        document.getElementById("flexFont").style.fontFamily = "Montserrat";
    }
    if(activeDiv == 2) {        
        document.getElementById("flexFont2").style.fontFamily = "Montserrat";
    }  
}

/* TEXT DIRECTION
    -> The selection and realtime manipulation of objects will be improved during the ongoing tutorial series
*/
function Left() {    
    if(activeDiv == 1) {        
        document.getElementById("flexFont").style.textAlign = "left";
    }
    if(activeDiv == 2) {        
        document.getElementById("flexFont2").style.textAlign = "left";
    }    
}

function Center() {    
    if(activeDiv == 1) {        
        document.getElementById("flexFont").style.textAlign = "center";
    }
    if(activeDiv == 2) {        
        document.getElementById("flexFont2").style.textAlign = "center";
    }  
}

function Right() {         
    if(activeDiv == 1) {        
        document.getElementById("flexFont").style.textAlign = "right";
    }
    if(activeDiv == 2) {        
        document.getElementById("flexFont2").style.textAlign = "right";
    } 
}

/* GET THE ACTIVE OBJECT 
    -> will be removed / improved a lot in a later tutorial session.
*/
function setActive1() {
    activeDiv = 1;  // We'll end up in a more nested and complex situation soon. Than this choose of construction will become clearer.
         
    document.getElementById('back-h').style.backgroundColor = "#f3f3f3";    
    document.getElementById('back-p').style.backgroundColor = "#fff";
    activeElement = document.getElementById('flexFont');     
    fontSizeHeader = window.getComputedStyle(activeElement).getPropertyValue("font-size");

    var actualHeader = getRelativeFontSize(fontSizeHeader);    

    document.getElementById('size').value = actualHeader;
    document.querySelector('#volume').value = actualHeader.toPrecision(2);

} 
            
function setActive2() {
    activeDiv = 2;  
      
    document.getElementById('back-p').style.backgroundColor = "#f3f3f3";
    document.getElementById('back-h').style.backgroundColor = "#fff"; 
    activeElement = document.getElementById('flexFont2');
    fontSizeParagraph = window.getComputedStyle(activeElement).getPropertyValue("font-size");

    var actualHeader = getRelativeFontSize(fontSizeParagraph);
    
    document.getElementById('size').value = actualHeader; 
    document.querySelector('#volume').value = actualHeader.toPrecision(2); // Should not be used if you use more than one range control!
    
}    

function Background() {
    /*
    As we know all the static elements this far, we'll keep it simple here. A more flexible way to create, select
    and manipulate multiple DOM objects (and their childs) more dynamically will be shown in a later tutorial.
    */    
    document.getElementById("flexFont").style.backgroundColor = "#c7b3b3";                
    document.getElementById("flexFont2").style.backgroundColor = "#c7b3b3";  
                
    document.getElementById("back-h").style.backgroundColor = "#c7b3b3";  
    document.getElementById("back-p").style.backgroundColor = "#c7b3b3"; 
}
