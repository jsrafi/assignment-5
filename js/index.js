
// adding & removing classlist ('hidden)
document.getElementById('history-btn').addEventListener('click', function()
{
    document.getElementById('history-btn').classList.add('bg-[#B4F461]')
    document.getElementById('donation-btn').classList.remove('bg-[#B4F461]')
    addClass('donation-section');
    removeClass('history-section');
    
})
document.getElementById('donation-btn').addEventListener('click', function()
{
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]')
    document.getElementById('donation-btn').classList.add('bg-[#B4F461]')
    removeClass('donation-section');
    addClass('history-section');
    
})

// blog page to home page
document.getElementById('blog-btn').addEventListener('click',function()
{
    window.location.href = '/blog.html'
})

// showing popup modal for noakhali.
document.getElementById('donate-now1-btn').addEventListener('click', showingPop);
// hiding popup
document.getElementById('popup-btn1').addEventListener('click', hidingPop);
// showing popup modal for feni.
document.getElementById('donate-now2-btn').addEventListener('click', showingPop);
// showing popup modal for noakhali.
document.getElementById('donate-now3-btn').addEventListener('click', showingPop);


