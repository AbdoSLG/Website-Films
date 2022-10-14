
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
// **********************************

let boxs=Array.from(document.querySelectorAll(".landing .parent1 .box"))
        let right = document.querySelector(".right")
        let left = document.querySelector(".left")
        let index=1;
        
        
            right.addEventListener("click" , function(){
            boxs.forEach((el)=>{el.classList.remove("active")});
        
            index++;
        
            boxs[index - 1].classList.add("active");
        
            if(index==boxs.length){
                index-=boxs.length;
            }

            
        
        
        
            })
        left.addEventListener("click" , function(){
            boxs.forEach((el)=>{el.classList.remove("active")})
        
            index--;
        
            boxs[index].classList.add("active");
        
            if(index==0){
                index+=boxs.length;
            }
        
        })
        


// **********************************




// let images=[`"image/Ironman-108960873-large.jpg"`,`"image/unnamed.png"`,`"image/wonder.jpg"`]


// // console.log(images[randomImage])

// right.onclick=function(){
    //     // image.src= "image/unnamed.png"
//     image.src=images[randomImage];
// }

// console.log( image.src= images[randomImage])


// right.onclick=function(){
    //     // image.src= "image/unnamed.png"
    //     image.src=images[randomImage];
    // }
    
    
    // let right = document.querySelector(".right")
    // let left = document.querySelector(".left")
    // let image1 = document.querySelector(".parent1 .parent2 .one")
    // let image2 = document.querySelector(".parent1 .parent2 .two")
    // let image3 = document.querySelector(".parent1 .parent2 .three")


    // let h1 = document.querySelector(".parent .parent1  h1")


    
    // if(  image1.classList.contains("active") ){
    //     console.log("active")
    // }else{
    //     image1.style.display="none"
    // }
    // if(  image2.classList.contains("active") ){
    //     console.log("")
    // }else{
    //     image2.style.display="none"
    // }
    // if(  image3.classList.contains("active") ){
    //     console.log("active")
    // }else{
    //     image3.style.display="none"
    // }

    // right.classList.add("add")
    // right.onclick = function(){
    //     if(right.classList.contains("add")){
    //         image2.classList.remove("active")
    //         image2.style.display="none"
    //         image3.classList.remove("active")
    //         image3.style.display="none"
    //         image1.classList.add("active")
    //         image1.style.display="block"
    //         right.classList.remove("add")

    //     }else{
    //         right.classList.add("add")
    //         image2.classList.add("active")
    //         image2.style.display="block"
    //         image3.classList.remove("active")
    //         image3.style.display="none"
    //         image1.classList.remove("active")
    //         image1.style.display="none"
    //     }
    // }
    // left.classList.add("add")
    // left.onclick = function(){
    //     if(left.classList.contains("add")){
    //         image2.classList.remove("active")
    //         image2.style.display="none"
    //         image1.classList.remove("active")
    //         image1.style.display="none"
    //         image3.classList.add("active")
    //         image3.style.display="block"
    //         left.classList.remove("add")
    //     }else{
    //         left.classList.add("add")
    //         image2.classList.remove("active")
    //         image2.style.display="none"
    //         image1.classList.add("active")
    //         image1.style.display="block"
    //         image3.classList.remove("active")
    //         image3.style.display="none"
    //     }
    // }

    // if(  image1.classList.contains("one")&&image1.classList.contains("active")){
    //     h1.innerHTML="Wonder"
    //     console.log("wonder")
    // }
    // else if (image2.classList.contains("two")&&image2.classList.contains("active")){
    //     h1.innerHTML="Ironman"
    //     console.log("iron")
    // }
    // else if ( image3.classList.contains("three")&&image3.classList.contains("active")){
    //     h1.innerHTML="Harry potter"
    //     console.log("harry")
    // }



    // *************************************************************************************************************************************
    // Round Three  "sucsessful" =>    "// Random على ما تُفرََََج "


    // let right = document.querySelector(".right")
    // let left = document.querySelector(".left")
    // let boxs1=document.querySelectorAll(".landing .parent1 .box")
    
    // let boxs2=[ "box2" , "box3", "box1"]
    // let boxs3=[  "box3" , "box1","box2"]

    // // let randomBox1 =Math.floor( Math.random() * boxs2.length )
    // // let randomBox2 =Math.floor( Math.random() * boxs3.length )
    
    // right.addEventListener("click" , function(){
    //     boxs1.forEach((el)=>{el.classList.add("none")})

    //     let box=document.querySelector(`.${boxs2[Math.floor((Math.random() * 3) + 0)]}`)  ;
    //     if(box.classList.contains("none")){
            
    //         box.classList.remove("none")
    //         box.classList.add("active")
    //     }

    // })
    // left.addEventListener("click" , function(){
    //     boxs1.forEach((el)=>{el.classList.add("none")})

    //     let box=document.querySelector(`.${boxs2[Math.floor((Math.random() * 3) + 0)]}`)  ;
    //     if(box.classList.contains("none")){
    //         box.classList.remove("none")
    //         box.classList.add("active")
    //     }

    // })


    // ****************************************************************************************************
//                                          Round Three  "sucsessful" =>    "Congratulation For Me"

























    // let boxs=Array.from(document.querySelectorAll(".landing .parent1 .box"))
    // let right = document.querySelector(".right")
    // let left = document.querySelector(".left")
    // let index=1;


    //     right.addEventListener("click" , function(){
    //     boxs.forEach((el)=>{el.classList.remove("active")});

    //     index++;

    //     boxs[index - 1].classList.add("active");

    //     if(index==boxs.length){
    //         index-=boxs.length;
    //     }



    //     })
    // left.addEventListener("click" , function(){
    //     boxs.forEach((el)=>{el.classList.remove("active")})

    //     index--;

    //     boxs[index].classList.add("active");

    //     if(index==0){
    //         index+=boxs.length;
    //     }

    // })





























//************************************************************************************************************************************************************************************
    
    
    // let image= Array.from(document.querySelectorAll(".section .container .box img"))
    // let box= Array.from(document.querySelectorAll(".section .container .box"))
    
    // image.forEach((el)=>{
        //     el.style.width=`100%`
        // })
        
        // let i;
        // for(let i=0 ; i<box.length ; i++ ){
            //     image[i].style.height =`320px`
            // }
            
            
            // for(let j=0 ; j<box.length ; j++ ){
                //     box[j].style.height = image[i].style.height;
                // }
                
// ************************************************************************************************************************************************************************************
                // create 
                
                let section= document.querySelector(".section2")
                let ul = document.createElement("ul")
                let li;
                for(let i= 0 ; i<20 ; i++){
                    li=document.createElement("li")
                    li.classList.add("li0")
                    let txt=document.createTextNode(i + 1)
                    li.appendChild(txt)
                    ul.appendChild(li)
                }
                ul.classList.add("ul0")

                section.appendChild(ul);


// ***************************************************************************************************************************************************************************

// let btn = document.querySelector("button")

// console.log(oldImge[2])



// boxss.forEach((el)=>{




    
//     el.addEventListener("click" , function(){
//         // let inn=-1
        
        
//     let oldImge=Array.from( document.querySelectorAll(".section2 .container .box .image img"))

//     // console.log(oldImge[3].currentSrc)
    
//     oldImge.forEach((el)=>{


//         // console.log(el.getAttribute("src"))


//         src=oldImge[4].getAttribute("src");
        
//         console.log(oldImge[4].getAttribute("src"))
//         // console.log(oldImge[3].currentSrc)
//     })
        
        
//         // let box=document.querySelector(".section .container .box img")


//         let ele=document.createElement("span")
//         ele.id="active"
//         ele.innerHTML=src;
//         ele.style.display="none"
//         document.body.appendChild(ele)


//         let i =1;
//         i=i+1;
        
//         ele.innerHTML=oldImge[i].getAttribute("src")




        
        
//         // window.open("index2.html")
//     })
// })


        

        // console.log(ele.innerHTML)

        
        // console.log( oldImge.getAttribute("src"))
        // let img=document.createElement("img")
        // img.setAttribute( "src","image/one.jpg")

        // box.appendChild(img)





        // let new1=document.querySelector(".section2 .container .box .box1 img")



        // oldImge.forEach((el)=>{

        //     console.log(oldImge[++inn].getAttribute("src"))
        // })















        

        // img.setAttribute("src" , "")"image/two_ما وراء الطبيعه.jpg"

    // oldImge.forEach((el)=>{

    //             console.log(oldImge[++inn].getAttribute("src"))
    //             console.log(Array.from( oldImge[++inn].getAttribute("src").join("")))
    //         })

    //     // console.log(old.getAttribute("src"))
    //     if(old.getAttribute("src")){

    //     }


        // new1.appendChild(old)

        // new1.setAttribute("src",`"${old.getAttribute("src")}"`)

        // console.log(new1.getAttribute("src"))

        // console.log(imge.getAttribute("src"))

        // imge.setAttribute("src",)
        // console.log(imge.getAttribute("src"))

        

        // console.log(imge.getAttribute("src"))

        // console.log(`"${imge.src}"`)

        // image/one_arken.jpg

// btn.addEventListener("click" , function(){
    //     console.log("wwww")
//     btn.setAttribute("src","image/one_arken.jpg")
//     console.log(btn.getAttribute("src"))
// })          

// let boxss= Array.from(document.querySelectorAll(".section .container .box"))
// let oldImge=Array.from( document.querySelectorAll(".section2 .container .box .image img"))
// let oldImge2= document.querySelector(".section2 .container .box .image img")

document.addEventListener("click" , function(ele){
    if(ele.target.classList.contains("box")){
        let image=document.querySelectorAll(".section .box .image img")
        let h1=document.querySelectorAll(".section .box .image .title")


        let src=image[ele.target.dataset.num].getAttribute("src")
        let h1_inner=h1[ele.target.dataset.num].innerHTML




        window.localStorage.setItem("src" , src)
        window.localStorage.setItem("h1" , h1_inner)


                window.open("index2.html")
    }
})

