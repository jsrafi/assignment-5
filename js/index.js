document.getElementById('history-btn').addEventListener('click', function()
{
    addClass('donation-section');
    removeClass('history-section');
    
})
document.getElementById('donation-btn').addEventListener('click', function()
{
    removeClass('donation-section');
    addClass('history-section');
    
})