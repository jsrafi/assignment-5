function addClass (id)
{
    document.getElementById(id).classList.add('hidden');
}

function removeClass (id)
{
    document.getElementById(id).classList.remove('hidden');
}

// showing popup modal
function showingPop ()
{
    document.getElementById('pop-up-section').classList.remove('hidden');
}
// hiding popup
function hidingPop ()
{
    document.getElementById('pop-up-section').classList.add('hidden');
}

// adding and deviding money
function mainFunc (id1,id2,id3)
{
 const inputValue = parseFloat(document.getElementById(id1).value);

 if(isNaN(inputValue))
 {
    document.getElementById('pop-up-section').classList.add('hidden');
    alert('Failed to donate money! please try again');
    return;
 }
 if(inputValue<1)
 {
    document.getElementById('pop-up-section').classList.add('hidden');
    alert('Failed to donate money! please try again');
    return;
 }
 

 const donateMoney = parseFloat(document.getElementById(id2).innerText);
 const mainMoney = parseFloat(document.getElementById(id3).innerText);

 if(inputValue > mainMoney)
    {
       document.getElementById('pop-up-section').classList.add('hidden');
       alert('you dont have sufficient balance');
       return;
    }

 const donateAccount = donateMoney + inputValue;
 document.getElementById(id2).innerText = donateAccount;

 const mainAccount = mainMoney - inputValue;
 document.getElementById(id3).innerText = mainAccount;
}