$("#btn").click(function(){
    location.href="index.html";
})

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var data = JSON.parse(xmlhttp.responseText);
      populateBreedsSelect(data);
   
  }
};

xmlhttp.open("GET", "https://api.thedogapi.com/v1/breeds", true);
xmlhttp.send();
function populateBreedsSelect(breeds) {
    $('select.breed_select').empty().append(function() {
      var output = '';
      console.log(this);
      $.each(breeds, function(key, value) {
        output += '<option id="' + value.id + '">' + value.name + '</option>';
      });
      return output;
    });
    $(".breed_select").change(function() {
        console.log(this);
        var id = $("option:selected",this).attr("id");
        getDogByBreed(id)
        console.log(id);
      });
  }
  function getDogByBreed(breed_id){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var datax = JSON.parse(xmlhttp.responseText);
          if (datax.length == 0) {
            // if there are no images returned
            clearBreed();
            $("#breed_data_table").append("<tr><td>Sorry, no Image for that breed yet</td></tr>");
          } else {
            //else display the breed image and data
            displayBreed(datax[0])
          }
       
      }
    };
    xmlhttp.open("GET", "https://api.thedogapi.com/v1/images/search?include_breed=1&breed_id=" + breed_id, true);
    xmlhttp.send();
    
  }
  function clearBreed() {
    $('#breed_image').attr('src', "");
    $("#breed_data_table tr").remove();
  }
  // display the breed image and data
  
  function displayBreed(image) {
    $('#breed_image').attr('src', image.url);
    $("#breed_data_table tr").remove();
  
    var breed_data = image.breeds[0]
    $.each(breed_data, function(key, value) {
      // as 'weight' and 'height' are objects that contain 'metric' and 'imperial' properties, just use the metric string
      if (key == 'weight' || key == 'height') value = value.metric
      // add a row to the table
      $("#breed_data_table").append("<tr><td>" + key + "</td><td>" + value + "</td></tr>");
    });
  }
