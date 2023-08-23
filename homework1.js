var icon = " ";
icon =  `<img src="1.png" alt=""></img>`
document.getElementById("icon").innerHTML=icon;

var banner = " ";
banner =  `<img src="1.jpg" alt=""></img>`
document.getElementById("banner").innerHTML=banner;

const nav = [
    {
        name : `<i class="fa-solid fa-house"></i>`
        , url : "https://www.youtube.com/"
    },
    {
        name : `កម្សាន្ដ`
        , url : "https://www.youtube.com/"
    },
    {
        name : `បច្ចេកវិទ្យា`
        , url : "https://www.youtube.com/"
    },
    {
        name : `ជីវិតនិងសង្គម`
        , url : "https://www.youtube.com/"
    },
    {
        name : `កីឡា`
        , url : "https://www.youtube.com/"
    },
    {
        name : `AUTO TALK`
        , url : "https://www.youtube.com/"
    },
    {
        name : `SMART HUB`
        , url : "https://www.youtube.com/"
    },
    {
        name : `STARTING UP`
        , url : "https://www.youtube.com/"
    },
]
var text = " ";
for(let i in nav){
    text +=`
    <li><a href="${nav[i]["url"]}"}>${nav[i]["name"]}</a></li>
    `;
}
document.getElementById("nav").innerHTML=text;