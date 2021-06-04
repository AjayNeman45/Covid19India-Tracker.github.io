
const input = document.querySelector('input');
const btn = document.querySelector('.icon');

input.addEventListener('keypress', function(){
    if(input.value.length > 0 && event.which === 13){
        showData();
    }
});
btn.addEventListener('click', function(){
    console.log("hello");
    if(input.value.length > 0){
        showData();
    }
});



function getDate() {
    var today = new Date();
    var dd = String(today.getDate() + 1).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    return today = dd + '-' + mm + '-' + yyyy;
}


function showData() {
    console.log("inside showData")
    if(input.value.length != 6){
        alert("Enter Correct pin code");
        return;
    }
    fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${input.value}&date=${getDate()}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            var i=0;
            if(data.sessions == ""){
                alert("Data Not available Right Now. Try after sometime")
            }
            data.sessions.forEach((item) => {
                console.log(item);
                const section = document.querySelector('.section-center');
                var one_hospital =
                `   <!-- single hospital details -->
                    <article class="hospital">
                    <div class="hospital-name">
                    <p>${item.name} ( ${item.vaccine} , ${item.min_age_limit}+ )</p>
                    <div type="button" class="arrBtn">
                         <span class="down-arr">
                            <i class="fas fa-arrow-circle-down arr"></i>
                         </span>
                         <span class="up-arr">
                            <i class="fas fa-arrow-circle-up arr"></i>
                         </span>
                    </div>
                    </div> 
                    <!--hospital details-->
                    <div class="details">
                    <p> Center Id : ${item.center_id}</p>
                    <p> Minimum Age Limit : ${item.min_age_limit} </p>
                    <p> vaccine : ${item.vaccine} </p>
                    <p> fees : ${item.fee} INR </p>
                    <p> For Date : ${getDate()} </p>
                    <p> Availabel capacity : ${item.available_capacity}</p>
                    <p> Availabel capacity dose1 : ${item.available_capacity_dose1}</p>
                    <p> Availabel capacity dose2 : ${item.available_capacity_dose2}</p>
                    <p> Address : ${item.address}</p>
                    <p> Link to register : <a href="https://www.cowin.gov.in" target=_blank> https://www.cowin.gov.in </a></p> 
                    </div> 
                    </article>   
                    <!-- single hospital details ended-->
                    `;
                if(i == 0){
                    section.innerHTML =  one_hospital;
                } else{
                    const hospital = document.querySelector('.hospital');
                    hospital.insertAdjacentHTML("afterend",one_hospital);
                }
                i++;
            })


            const btns = document.querySelectorAll(".arrBtn");
            btns.forEach((btn)=>{
                btn.addEventListener('click',function(e){
                    const hospital_name = e.currentTarget.parentElement.parentElement;
                    hospital_name.querySelector('.details').classList.toggle('show-details');
                    e.currentTarget.classList.toggle('show-arr');
                })
            })

        })
        input.value = "";
}


