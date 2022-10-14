

// add class active while click
let icon= document.querySelector(".lists")
let list2= document.querySelector(".list2")

icon.addEventListener("click", function(){

icon.classList.remove("fa-xmark")
icon.classList.add("fa-bars")
if(list2.classList.contains("active")){
        list2.classList.remove("active")
        list2.style.display="none";

}else{
        
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-xmark")
        list2.classList.add("active")
        list2.style.display="block";
}   
});





//                                      successful code  to create image in new tap
let newEmage=document.createElement("img")
newEmage.src=window.localStorage.getItem("src")
        let box1=document.querySelector(".section .parent .container .box .box1")
        box1.appendChild(newEmage)


let newTitle=document.createElement("h3")
newTitle.innerHTML=window.localStorage.getItem("h1")
        let box2=document.querySelector(".section .parent .container .box .box2 .table .head")
        box2.appendChild(newTitle)


let like=document.querySelector(".rate .like")
let disLike=document.querySelector(".rate .disLike")

let likeNum=document.querySelector(".rate .like .num")
let disLikeNum=document.querySelector(".rate .disLike .num")

likeNum.innerHTML=like.dataset.num;
disLikeNum.innerHTML=disLike.dataset.num;



like.addEventListener("click" , function(){
                if(disLike.classList.contains("active")){
                        disLike.classList.remove("active")
                        disLikeNum.innerHTML--
                }
        this.classList.toggle("active")
        if(        this.classList.contains("active")){
                likeNum.innerHTML++
        }else{
                
                likeNum.innerHTML--
        }
})




disLike.addEventListener("click" , function(){


        if(like.classList.contains("active")){
                like.classList.remove("active")
                likeNum.innerHTML--
        }
        this.classList.toggle("active")
        if(        this.classList.contains("active")){
                disLikeNum.innerHTML++
        }else{
                
                disLikeNum.innerHTML--
        }

})


