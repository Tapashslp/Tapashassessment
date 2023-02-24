var counter = 1;
var displayResponseData = [];



const getInitialData = async () => {
  fetch("./data/data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var div = document.getElementById("data");
    div.innerHTML = "";
    for (i=1;i<data.length;i++){    
      let decider = 3 * counter;
      if( i > decider - 3 && i <= decider){
        var person = document.createElement('div');
        person.className = "person";

        var personName = document.createElement('div');
        personName.className = "person-number";
        personName.innerHTML = i;

        var personData = document.createElement('div');
        personData.className = "person-data";

          var name = document.createElement('div');
          name.className = "name";
          name.innerHTML = 'Person Name:' + data[i].name;

          var location = document.createElement('div');
          location.className = "location";
          location.innerHTML = 'Location:' + data[i].location;
          
        person.appendChild(personName);
        person.appendChild(personData);
        personData.appendChild(name);
        personData.appendChild(location);

        div.appendChild(person);
        
     }
   }
  })
  .catch(function(err){
    console.log(err);
  });
}


  function myOnclick() {
    counter++;
    getInitialData();
  }

// Server start
getInitialData();

  
    
    
    
    
