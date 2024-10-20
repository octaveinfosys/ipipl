import React from 'react'
import { useState } from "react";
import $ from "jquery";
import loader from'.././loader.gif'

function Connection() {
  const [result, setResult] = useState("");
  $('#loader').hide();
  
  
  const handleSumbit = (e) => {
    $('#loader').show();
    e.preventDefault();
    // document.getElementById("#form").reset();
    const form = $(e.target);
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form.serialize(),
      success(data) {
        $('#loader').hide();
        document.getElementById("form1").reset();
        setResult(data);
      },
    });
  };
  return (
    <div>
      <form
        action="http://localhost/php-react/octave-infosys/php/server.php"
        method="post"
        id='form1'
        onSubmit={(event) => handleSumbit(event)}
      >
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
         
        />
        <br />
        <button type="submit">Submit</button>
        <img src={loader} alt="loader" style={{width:55,height: 55,verticalAlign: 'bottom',display:'none'}} id="loader"></img>
      </form>
      <h1>{result}</h1>
    </div>
  )
}

export default Connection
