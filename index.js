var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=zNmzHSA6fNsy7ikmCfTXOR1yGh3rLxnhxBdpnuFI";
var curiosity = document.getElementById("curiosity");
var selectedPhoto = document.getElementById("selectedPhoto");

req.open("GET", url);
req.send();

function callCuriosity(){
    req.addEventListener("load", function(){
        if(req.status == 200 && req.readyState ==4){
            var response = JSON.parse(req.responseText);
            document.getElementById("pic").src = response.img_src;
        }
    })
}

curiosity.addEventListener("click", callCuriosity);