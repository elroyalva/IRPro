$(document).ready(function() {
  $("#fromDate").datepicker();
  $("#toDate").datepicker();
});

function yesnoCheck() {
    if (document.getElementById('countryCheck').checked) {
        document.getElementById('isCountry').style.display = 'block';
         document.getElementById('isCoord').style.display = 'none';
    }
    else {
      document.getElementById('isCountry').style.display = 'none';
      document.getElementById('isCoord').style.display = 'block';
   }
}

function doAdvancedSearch(){
	alert(document.getElementById('advanced').value);
	document.getElementById('advanced').value = true;
	this.form.elements["advanced"].value = true;
}