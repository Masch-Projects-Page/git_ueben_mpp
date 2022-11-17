/* ----------------------------------------------- */
/*
/*    [css-file]: animated.js
/*    
/*    [info]: defines all animates functions 
/*    and eventlistener which are cool to have 
/*
/* ----------------------------------------------- */




/* ------------------------------------------------------- */
/* JS - Date Function
/* ------------------------------------------------------- */

var jsDateToday = document.getElementById("js-date-today");

function setDateToday() {

    var today = new Date();
    var date = today.getDate() + "." + (today.getMonth()+1) + "." + today.getFullYear();

    return date;

}

jsDateToday.innerText = setDateToday();






/* ------------------------------------------------------- */
/* Label Click Listener to play/pause mp3
/* ------------------------------------------------------- */

/* Function to play audio html 5 or pause it */
/* e.g mp3Doc.play(); is default of html */

var mp3Doc = document.getElementById("mp3Doc"); 
var mp3Projects = document.getElementById("mp3Projects"); 
var mp3About = document.getElementById("mp3About"); 


/* ---------------------------------- */
/* MP3 Docs
/* ---------------------------------- */

/* checkBox in js */
var chkMp3Docs = document.getElementById("chk-mp3-docs");

/* label listener */
var lblMp3Docs = document.getElementById("lbl-mp3-docs").addEventListener( "click" , 

    // Callback Funktion to work if this click happend 
    function() {

         /* if by click is first empty , go to else */
         if( chkMp3Docs.checked ) {

            console.log("Audio > Pause")
            mp3Doc.pause();
           
        }
        else {


            console.log("Audio > Play")
            mp3Doc.play();

           

        }

    }

); 

/* ---------------------------------- */
/* MP3 Projects
/* ---------------------------------- */


/* ---------------------------------- */
/* MP3 About
/* ---------------------------------- */