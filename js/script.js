let count= 1;
document.getElementById("radio1").checked = true;
setInterval(function() {
   nexImage(); 
}, 2500);

function nexImage(){
    count++;
    if(count>3){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}