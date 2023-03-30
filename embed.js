;(function () {
        let backgroundColor = document.getElementsByTagName("background-color").length>0?document.getElementsByTagName("background-color")[0].outerText: "#E3CCAE";
        let headerColor =document.getElementsByTagName("header-color").length>0?document.getElementsByTagName("header-color")[0].outerText:"#000000";
        let zipCode = document.getElementsByTagName("zipcode").length>0?document.getElementsByTagName("zipcode")[0].outerText:"20871";
            let config = {
                backgroundColor:backgroundColor,
                headerColor:headerColor,
                zipCode:zipCode
            };
            fetchData(config);
   function fetchData (config) {
        fetch('https://raw.githubusercontent.com/jonkiky/DogAds/dev3/data.json')
  .then(response => response.json())
  .then(data =>{
        let container = document.getElementById("missing-pet-ads");
        container.style.backgroundColor =config.backgroundColor;
        html_content= `<a id="missing-pet-link" href="`+data.link+`" target="_blank" style="text-decoration: none;">
      <div style="font-family: Space Grotesk,-apple-system,BlinkMacSystemFont,Athletics,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif; text-align: left;vertical-align: middle; font-weight: 800; margin-bottom: 10px ">
        <svg viewBox="0 0 72 16">
          <text x="0" y="15" fill="`+config.headerColor+`">MISSING</text>
        </svg>
    </div>
      <div style="margin: 5px; border: 5px solid #fff; position: relative; max-height: 300px; overflow: scroll;" >
        <img id="missing-pet-img" src="`+data.img+`" width="100%">
      </div>
      <div style="font-family: Space Grotesk,-apple-system,BlinkMacSystemFont,Athletics,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;text-align: left;vertical-align: middle; font-weight: 800; padding: 5px">
        <svg viewBox="0 0 72 6">
          <text x="0" y="5" fill="`+config.headerColor+`" font-size="0.3em">HAVE YOU SEEN THIS PET</text>
        </svg>
      </div>
      <div id="missing-pet-desc" style="font-family: Space Grotesk,-apple-system,BlinkMacSystemFont,Athletics,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif; color: #fafafa ; text-align: left;vertical-align: middle; font-weight: 600; font-size: 14;padding: 5px">
        `+data.desc+`
      </div>
    </a>`
    let htmlDiv = document.getElementById("missing-pet-ads");
    htmlDiv.innerHTML = "";
    htmlDiv.innerHTML = html_content;
  })
  .catch(error => {
    // if any issues happen, then hide the ads
   let container = document.getElementById("missing-pet-ads");
        container.style.display = "none";
        console.error(error)
    })
   }

   })()

