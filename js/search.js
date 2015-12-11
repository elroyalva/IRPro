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

function placeRequest(){
  var placeRequestURL = "http://192.168.0.6:8080/SolrSearch/solr/search";
  var xhr = new XMLHttpRequest();
  xhr.open("POST", placeRequestURL);
  xhr.setRequestHeader('Content-Type', 'application/json');
  var send_data_pre = JSON.stringify('{"query_sent":"syria refugee crysis","advanced":true,"advanced_attributes":{"tags":["syria","war","leader"],"location":"","date":{"from":"2012-04-23T18:25:43.511Z","to":"2015-04-23T18:25:43.511Z"},"lang":["en","fr","ar","es"],"hasImages":true,"sortbyViews":false,"data_source":["twitter","tumblr"],"urls":["t.co","fb.com"]}}');
  var send_data = send_data_pre.substring(1,(send_data_pre.length)-1);
   xhr.send(send_data);
}