"use strict";

function DocReset() {
  document.getElementById("F-N").value = "";
  document.getElementById("L-N").value = "";
  document.getElementById("E-Mail").value = "";
  document.getElementById("P-N").value = "";
  document.getElementById("CBox-1").checked = false;
  document.getElementById("CBox-2").checked = false;
  document.getElementById("CBox-3").checked = false;
  document.getElementById("Country").value = "none";

  let validfeedbacks = document.getElementsByClassName("valid-feedback");
  let invalidfeedbacks = document.getElementsByClassName("invalid-feedback");

  for (let i = 0; i < validfeedbacks.length; i++) {
    validfeedbacks[i].style.display = "none";
  }
  for (let i = 0; i < invalidfeedbacks.length; i++) {
    invalidfeedbacks[i].style.display = "none";
  }
}

let clicked_submit = false;

function validate(isSubmit = false) {
  let fn = document.getElementById("F-N").value;
  let ln = document.getElementById("L-N").value;
  let eml = document.getElementById("E-Mail").value;
  let pn = document.getElementById("P-N").value;
  let cb1 = document.getElementById("CBox-1").checked;
  let cb2 = document.getElementById("CBox-2").checked;
  let cb3 = document.getElementById("CBox-3").checked;
  let cntry = document.getElementById("Country").value;

  if (isSubmit) {
    clicked_submit = true;
  }
  let error = false;

  function containsNumbers(str) {
    return Boolean(str.match(/\d/));
  }
  function containsLetters(str) {
    return /[a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(str);
  }

  function startwith(str) {
    return /[0-5]/.test(str[0]);
  }

  if (fn.length >= 3 && !containsNumbers(fn)) {
    document.getElementById("firstname-valid").style.display = "block";
    document.getElementById("firstname-invalid").style.display = "none";
  } else {
    document.getElementById("firstname-valid").style.display = "none";
    document.getElementById("firstname-invalid").style.display = "block";
    clicked_submit = false;
    error = true;
  }

  if (ln.length >= 3 && !containsNumbers(ln)) {
    document.getElementById("lastname-valid").style.display = "block";
    document.getElementById("lastname-invalid").style.display = "none";
  } else {
    document.getElementById("lastname-valid").style.display = "none";
    document.getElementById("lastname-invalid").style.display = "block";
    clicked_submit = false;
    error = true;
  }
  if (
    eml.includes("@") &&
    eml.includes(".") &&
    eml.indexOf("@") != 0 &&
    eml.length - eml.lastIndexOf(".") >= 4 //length starts from 1  and index starts from 0
  ) {
    document.getElementById("email-valid").style.display = "block";
    document.getElementById("email-invalid").style.display = "none";
  } else {
    document.getElementById("email-invalid").style.display = "block";
    document.getElementById("email-valid").style.display = "none";
    clicked_submit = false;
    error = true;
  }

  if (pn.length === 10 && !containsLetters(pn) && !startwith(pn)) {
    document.getElementById("number-valid").style.display = "block";
    document.getElementById("number-invalid").style.display = "none";
  } else {
    document.getElementById("number-invalid").style.display = "block";
    document.getElementById("number-valid").style.display = "none";
    clicked_submit = false;
    error = true;
  }
  /*console.log(containsLetters(pn));
  /*let check_for_tick = document.getElementsByClassName("form-check-input");
  let checked_atleast_one = false;
  for (let i = 0; i < check_for_tick.length; i++) {
    if (check_for_tick[i] === true) {
      checked_atleast_one = true;
    }
  }*/
  let count = 0;
  if (cb1) {
    count++;
  }
  if (cb2) {
    count++;
  }
  if (cb3) {
    count++;
  }

  if (count == 1) {
    document.getElementById("gender-valid").style.display = "block";
    document.getElementById("gender-invalid").style.display = "none";
  } else {
    document.getElementById("gender-valid").style.display = "none";
    document.getElementById("gender-invalid").style.display = "block";
    clicked_submit = false;
    error = true;
  }

  if (cntry !== "none") {
    document.getElementById("country-valid").style.display = "block";
    document.getElementById("country-invalid").style.display = "none";
  } else {
    document.getElementById("country-valid").style.display = "none";
    document.getElementById("country-invalid").style.display = "block";
    clicked_submit = false;
    error = true;
  }

  if (!error && clicked_submit && count == 1) {
    alert("Your details have been saved successfully!");
    DocReset();
    clicked_submit = false;
  }
}
