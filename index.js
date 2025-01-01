const api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const qrImg = document.getElementById("qrCode");
const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("searchButton");

searchBar.addEventListener("keypress", ()=>
{
    if(event.key=="Enter")
    {
        if(searchBar.value.trim() == "")
        {
            alert("Please enter a text or link, text can't be empty");
        }
        else
        {
            createQrCode();   
        }
    }
});

searchBtn.addEventListener("click", ()=>
{
    createQrCode();
});

function createQrCode()
{
    const urlLink = api + searchBar.value;
    
    qrImg.style.display = "block";
    qrImg.src = urlLink;
    console.log(urlLink);
}