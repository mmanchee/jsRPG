import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';

$(document).ready(function() {
  $("#family-choice").submit(function(event) {
    event.preventDefault();
    let name = $("input#name").val();

  })
})