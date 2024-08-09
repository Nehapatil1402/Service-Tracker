for (var i = 0; i < localStorage.length; i++){
    var tr=""
    var tr2=""
    var tr3=""
    var tr4=""
    var tr5=""
    var fullname=JSON.parse(localStorage.getItem(localStorage.key(i))).username
    if (fullname=="Admin"){ 
        continue
    }

    var latetimes=JSON.parse(localStorage.getItem(localStorage.key(i))).Late_times
    var absenttime=JSON.parse(localStorage.getItem(localStorage.key(i))).Absent_times
    var attendanceTime=JSON.parse(localStorage.getItem(localStorage.key(i))).Att_times
    var time_attendance=JSON.parse(localStorage.getItem(localStorage.key(i))).Att_at
    var age=JSON.parse(localStorage.getItem(localStorage.key(i))).Age
    var email= JSON.parse(localStorage.getItem(localStorage.key(i))).Email
    var gender= JSON.parse(localStorage.getItem(localStorage.key(i))).gender
    var job = JSON.parse(localStorage.getItem(localStorage.key(i))).Job
    var address = JSON.parse(localStorage.getItem(localStorage.key(i))).Address
    //all empolyees
    tr += "<t>";
    tr += `<td> <p class="h5 text-secondary"> ${fullname}</p></td>`;
    tr += `<td> <p class="h5 text-primary" > ${attendanceTime}</p></td>`;
    tr += `<td> <p class="h5 text-info"> ${latetimes}</p></td>`;
    tr += `<td> <p class="h5 text-primary"> ${absenttime}</p></td></tr>`;
    document.getElementById('tbody').innerHTML += tr;
    //full report 
    tr2 += `<td> <p class="h5 text-secondary"> ${fullname}</p></td>`;
    tr2 += `<td> <p class="h5 text-primary" > ${attendanceTime}</p></td>`;
    tr2 += `<td> <p class="h5 text-info"> ${latetimes}</p></td>`;
    tr2 += `<td> <p class="h5 text-primary"> ${absenttime}</p></td>`;
    tr2 += `<td> <p class="h5 text-danger"> ${absenttime}</p></td>`;
    tr2 += `<td> <p class="h5 text-secondary"> ${time_attendance}</p></td></tr>`;
    document.getElementById('tbody2').innerHTML += tr2;
    //late report 
    tr3 += `<td> <p class="h5 text-secondary"> ${fullname}</p></td>`;
    tr3 += `<td> <p class="h5 text-primary"> ${latetimes}</p></td></tr>`;
    document.getElementById('tbody3').innerHTML += tr3;
    //excusetime
    tr4 += `<td> <p class="h5 text-secondary"> ${fullname}</p></td>`;
    tr4 += `<td> <p class="h5 text-primary"> ${absenttime}</p></td></tr>`;
    document.getElementById('tbody4').innerHTML += tr4;

     //Employees Brief
     tr5 += `<td> <p class="h5 text-secondary"> ${fullname}</p></td>`;
     tr5 += `<td> <p class="h5 text-info"> ${address}</p></td>`;
     tr5 += `<td> <p class="h5 text-info"> ${age}</p></td>`;
     tr5 += `<td> <p class="h5 text-info"> ${email}</p></td>`;
     tr5 += `<td> <p class="h5 text-secondary"> ${job}</p></td></tr>`;
     document.getElementById('tbody5').innerHTML += tr5;

   
   
}
