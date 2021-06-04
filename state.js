<<<<<<< HEAD
const state_code={
    Andaman_and_islands:"AN",
    Andhra_pradesh : "AP",
    Arunachal_pradesh: "AR",
    Assam : "AS",	
    Bihar: "BR"	,
    Chandigarh:"CH",
    Chhattisgarh: "CT"	,
    Dadra_and_nagar_haveli:"DN",
    Daman_and_diu: "DD",
    Delhi :	"DL", 
    Goa: "GA"	,	
    Gujarat: "GJ"	,
    Haryana: "HR"	, 
    Himachal_Pradesh: "HP",
    Jammu_and_kashmir:"JK",
    Jharkhand: "JH"	,
    Karnataka: "KA"	,
    Kerala: "KL"	,
    Lakshdweep:"LD",
    Madhya_pradesh: "MP",	
    Maharashtra: "MH",	
    Manipur: "MN"	,
    Meghalaya: "ML"	,
    Mizoram: "MZ",
    Nagaland: "NL",
    Odisha: "OR",
    Punducherry:"PY",	
    Punjab: "PB",	 
    Rajasthan: "RJ"	,
    Sikkim: "SK"	,
    Tamil_nadu: "TN" ,	
    Telangana: "TG"	,
    Tripura: "TR",
    Uttar_pradesh: "UP",
    Uttarakhand: "UT",
    West_bengal: "WB"                    

};

const state_name = document.querySelector(".state-name");
const last_updated = document.querySelector('.last-updated');
const confirmedCnt = document.getElementById('confirmedCnt');
const activeCnt = document.getElementById('activeCnt');
const recoveredCnt = document.getElementById('recoveredCnt');
const deathsCnt = document.getElementById('deathsCnt');
const vaccinatedCnt = document.querySelector('.vaccinatedCnt');
const testedCnt = document.querySelector('.testedCnt');

fetch('https://api.covid19india.org/v4/min/data.min.json')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    var state = localStorage.getItem('state_name');
    state_name.append(state);
    
    var state_name_with_highphine = addhighphine(state)
    function addhighphine(name){
        var newName="";
        console.log(name);
        var cnt=0;
        for(var i=0;i<name.length;i++){
            cnt++;
            if(name[i] == " "){
                newName += "_";
                continue;
            }
            newName += name[i];
        }
        return newName;
    }
    let choose_state_code = state_code[state_name_with_highphine];
    console.log(state_code[state_name_with_highphine]);
    last_updated.append((data[choose_state_code].meta.last_updated).substring(0,10));
    confirmedCnt.querySelector('span').append((data[choose_state_code].total.confirmed).toLocaleString());
    recoveredCnt.querySelector('span').append((data[choose_state_code].total.recovered).toLocaleString());
    deathsCnt.querySelector('span').append((data[choose_state_code].total.deceased).toLocaleString());
    let active_cnt = data[choose_state_code].total.confirmed - (data[choose_state_code].total.recovered + data[choose_state_code].total.deceased);
    activeCnt.querySelector('span').append((active_cnt).toLocaleString());
    vaccinatedCnt.querySelector('label').append((data[choose_state_code].total.vaccinated).toLocaleString());
    testedCnt.querySelector('span').append((data[choose_state_code].total.tested).toLocaleString());
  
})

=======
const state_code={
    Andaman_and_islands:"AN",
    Andhra_pradesh : "AP",
    Arunachal_pradesh: "AR",
    Assam : "AS",	
    Bihar: "BR"	,
    Chandigarh:"CH",
    Chhattisgarh: "CT"	,
    Dadra_and_nagar_haveli:"DN",
    Daman_and_diu: "DD",
    Delhi :	"DL", 
    Goa: "GA"	,	
    Gujarat: "GJ"	,
    Haryana: "HR"	, 
    Himachal_Pradesh: "HP",
    Jammu_and_kashmir:"JK",
    Jharkhand: "JH"	,
    Karnataka: "KA"	,
    Kerala: "KL"	,
    Lakshdweep:"LD",
    Madhya_pradesh: "MP",	
    Maharashtra: "MH",	
    Manipur: "MN"	,
    Meghalaya: "ML"	,
    Mizoram: "MZ",
    Nagaland: "NL",
    Odisha: "OR",
    Punducherry:"PY",	
    Punjab: "PB",	 
    Rajasthan: "RJ"	,
    Sikkim: "SK"	,
    Tamil_nadu: "TN" ,	
    Telangana: "TG"	,
    Tripura: "TR",
    Uttar_pradesh: "UP",
    Uttarakhand: "UT",
    West_bengal: "WB"                    

};

const state_name = document.querySelector(".state-name");
const last_updated = document.querySelector('.last-updated');
const confirmedCnt = document.getElementById('confirmedCnt');
const activeCnt = document.getElementById('activeCnt');
const recoveredCnt = document.getElementById('recoveredCnt');
const deathsCnt = document.getElementById('deathsCnt');
const vaccinatedCnt = document.querySelector('.vaccinatedCnt');
const testedCnt = document.querySelector('.testedCnt');

fetch('https://api.covid19india.org/v4/min/data.min.json')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    var state = localStorage.getItem('state_name');
    state_name.append(state);
    
    var state_name_with_highphine = addhighphine(state)
    function addhighphine(name){
        var newName="";
        console.log(name);
        var cnt=0;
        for(var i=0;i<name.length;i++){
            cnt++;
            if(name[i] == " "){
                newName += "_";
                continue;
            }
            newName += name[i];
        }
        return newName;
    }
    let choose_state_code = state_code[state_name_with_highphine];
    console.log(state_code[state_name_with_highphine]);
    last_updated.append((data[choose_state_code].meta.last_updated).substring(0,10));
    confirmedCnt.querySelector('span').append((data[choose_state_code].total.confirmed).toLocaleString());
    recoveredCnt.querySelector('span').append((data[choose_state_code].total.recovered).toLocaleString());
    deathsCnt.querySelector('span').append((data[choose_state_code].total.deceased).toLocaleString());
    let active_cnt = data[choose_state_code].total.confirmed - (data[choose_state_code].total.recovered + data[choose_state_code].total.deceased);
    activeCnt.querySelector('span').append((active_cnt).toLocaleString());
    vaccinatedCnt.querySelector('label').append((data[choose_state_code].total.vaccinated).toLocaleString());
    testedCnt.querySelector('span').append((data[choose_state_code].total.tested).toLocaleString());
  
})

>>>>>>> e76d596c3f994d304c42b7e9fd725515a23683a7
