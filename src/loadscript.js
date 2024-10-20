import React from 'react'

function loadscript(url, callback) {
    let script = document.createelement("script")
   script.type = "text/javascript";

   if (script.readystate){  //ie
       script.onreadystatechange = function(){
           if (script.readystate == "loaded" ||
                   script.readystate == "complete"){
               script.onreadystatechange = null;
               callback();
           }
       };
   } else {  //others
       script.onload = function(){
           callback();
       };
    }
  return (
    <div>
      
    </div>
  )
}

export default loadscript
