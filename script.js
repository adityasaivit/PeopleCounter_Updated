count=0
function increment(){
    count=count+1
    document.querySelector(".count").innerText=count
}


function reset(){
    count=0
    document.querySelector(".count").innerText=count
    document.querySelector(".history p").innerText='Previous-entries:';
}

function save()
{
    console.log(count)
    values=document.querySelector(".history p").innerText
    document.querySelector(".history p").innerText=values+count+'-';


}
