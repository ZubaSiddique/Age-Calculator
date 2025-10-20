function calculateAge(){
const dobinput= document.getElementById('dob').value;
if(!dobinput){
           document.getElementById('result').textContent = 'Please enter your date of birth.';
        return;
}
const birthdate=new Date(dobinput);
const today=new Date();
let years=today.getFullYear()-birthdate.getFullYear();
let months=today.getMonth()-birthdate.getMonth();
let days= today.getDate()-birthdate.getDate();
if(days<0){
    months--;
    const prev=new Date(today.getFullYear(),today.getMonth(),0);
    days+=prev.getDate();
}
if(months<0){
    years--;
    months+=12;
}
document.getElementById('result').textContent=`You are ${years} years, ${months} months , ${days} days old `;
}