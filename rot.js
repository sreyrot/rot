const url = "http://dummy.restapiexample.com/api/v1/employees";

fetch(url)
.then(resp => resp.json())
.then(data =>{
   const result= document.querySelector("#card");
   data.forEach(el =>{
    result.innerHTML +=`
        <div class="card" >
            <div class="card-header" >${el.id}</div>
            <div class="card-header" >${el.employee_name}</div>
            <div class="card-header" >${el.employee_salary}</div>
            <div class="card-header" >${el.employee_age}</div>
            <div class="card-header" >${el.profile_image}</div>
        </div>
   `;
   })
   
})

.catch(error =>{
    console.log("You can't get data");
})