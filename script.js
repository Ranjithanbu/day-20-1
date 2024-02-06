//fetching from website
fetch("https://api.data.gov.in/resource/7b3ed3e9-841f-4444-ab3c-e760a08b53b3?api-key=579b464db66ec23bdd000001fc2f9807ad53447a6a1e3e066392ba5c&format=json&limit=200").then((val)=>val.json())
.then((ans)=>{
    let dam=ans.records;
    
    let details=[]
    //iterating the array of items inserting tags
for (let i= 0; i < dam.length;i++){

details+=`<div class="col-md-4 col-lg-3 bg-dark card m-2 rounded border-5 text-white">

<h3 class="text-white border rounded mt-2 bg-secondary text-center">${dam[i].name_of_dam}</h3>
<div class="border border-2 rounded px-2 bg-info bg-opacity-50"><h5>District : ${dam[i].district}</h5>
<h5>Taluk : ${dam[i].taluk}</h5>
<h5>Nearest-Town : ${dam[i].nearest_city_town}</h5>
<h5>Basin : ${dam[i].basin}</h5>
<h5>Block :  ${dam[i].block}</h5>
<h5>River : ${dam[i].river}</h5>
<h5>Area : ${dam[i].catchment_area_sq_km_} Sqr Km</h5>
<h5>Capacity : ${dam[i].gross_storage_capacity_10_3m3_} Tmc</h5>
<h5>Lattidue : ${dam[i].latitude}</h5>
<h5>Langitude :${dam[i].longitude}</h5>
<h5>Constructed-Year : ${dam[i].year_of_completion}</h5>
</div>
</div>

</div>`

}
//append to the document
document.getElementById("row1").innerHTML=details

})

