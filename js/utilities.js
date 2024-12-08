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