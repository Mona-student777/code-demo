 

// const profile =  { 
//      fullName:"mona",
//      age:20,
//     isfollow:true,
//      post:200.5+"post",
//      followers:150+"followers",
//      following:20058,
//  }
//    profile["age"] = profile["age"]+2;
 
//   console.log(profile);//

//                                                           //  Arithametic oparater //
//   let A=10;
//   let B=5;

//   console.log("A=",A,"& B=",B );
//   console.log("A+B =", A+B);
//   console.log("A/B =",A/B);
//   console.log("A*B =", A*B );
//                                                           // UNARY OPARATERS
// let a=5;
//  b=2;
 
//  console.log("a=",a,"b=",b);
//  console.log("a++ =",a++);//a++is a post 
//  console.log("a =", a);
//  console.log("a--",a--);//is a post
//  console.log("a=",a);
//  console.log("++a=",++a);//is a pre
//  console.log("a=", a);
//  console.log("--a=",--a);//is a pre
//  console.log("a=",a);

//                                                           // assignment oparater//

//   let a$=8;
//         b=10;
//          b**=5;
    
//      console.log("b=", b);  //
//               //  comparistion oparater//  

//   let a_=10;
//       b=5;
//        console.log("a_==b =" , a_==b );
//        console.log("a_<=b =",a_<=b);

//    let a$=20;
//        b$=30;
//        console.log("a$!==b", a$!==b);
//        console.log("b$<=a", b$<=b);


//                                                           //  logical oparater
// let b=5;
//   e=8;

//   let cond1=b>e;
//   let cond2=b!=e; 

//   console.log("cond1 &&cond2=", cond1 &&cond2);
//   console.log("cond1||cond2=", cond1||cond2);


//                                                               // //conditionla statement
//                       // if statement 
// let mode="light";
//   color=""

//  if("mode==light"){
//      color="white";
//  }
//  console.log(color);
//    let mode="dark";
//      color=""
//      if(mode==="dark"){
//          color="gren"
//      }
//      console.log(color);

//  if else statement
 
 
//                             // else if statement
     
//  let _mode  ="silver"
//     let color=""
      
//    if(_mode === "dark"){
//     color="red"; 
//    } else if(_mode === "white"){
//     color="pink";
//    } else if (_mode ==="gren"){
//       color="orange;"
//    } else if (_mode === "silver"){
//     color="bluegren"
//    }else{
//     color="white";
//    }
//    console.log(color);

//        let code_bord="vertical";
//             color="";
//          if(code_bord=== "horizetal"){
//           color="skiyblue"
//          }else if(code_bord==="vertical"){
//            color="whileate"
//          }else if (code_bord==="sides"){
//           color="blue";
//          }else{
//           color="pink";
//          }
//          console.log(color);
 
//    let $cond="25"
//    let result =$cond>85 ? "YES" : " NO";
//    console.log(result);

   

// //                                                          // ALERT OR PROMPT
//    alert("hi");
//    prompt("hello");
//   practice a num 

//  let num=prompt("Enter a number");
//    if(num % 5 === 0){
//     console.log(num,"is a multipale of 5");
//    }else {
//     console.log(num, "is not a multipale of 5 ");
//    }
//   console.log(num);
// //                                          
//      let score=prompt("enter the score ( 0-100)");
//     grades="";

//     if( score>=" 90" && score<="100"  ){
//         grade="A";
//     }else if (score>="70" && score<="89"){
//       grade ="B";
//     }else if (score>="60" && score<="69"){
//       grade="C";
//     }else if (score>="50" && score<="59"){
//       grade ="D";
//     }else if (score>="0" && score<= "49"){
//       grade="F"
//     }

//          console.log("according to score and grades is ", grade);
    
//                                                              //  loops 


// //                           // for loops   
// for(let count=1; count<=500; count++ ){                               
//      console.log("hi hello this is mounika learnig from appna cologe.", count);
// } 
   
// for(let set=1;  set<=50; ++set){
//      console.log("the number wil be set to 50times in the js", set);
// }
//  for(let set=1; set<=10; ++set){
//   console.log("  my family  ", set);
//      for(let count=1 ; count<=5 ; count++){
//       console.log("  my family is my life i love lots   " , count);
//       for(let num=1; num<=5; num++){
//         console.log("i want to do some achievment for my family ", num);
//       }
//      }
//      }
// let sum=0;
// let num$=10
//  for(let count=1; count<=num$; count++){
//      sum = sum + count;  
//  }
    
//  console.log("sum =", sum); 

//                                 //  //   while loops
//  let _num=1;
//  let $=10;

//  while( _num<=$){
//       if(_num == 8){
//           continue;
//       }
//       console.log("student of the year " ,_num);
//       _num++;
      
//  }
//                               do while loops
//  let output$=1;
//  do{
//      console.log("my class");
//      output++;
//  }while(output<=100);
   
       
//                                 //  for-of loops

// let str="i am learining a javascript";
// let size="0";
// for(let val of str ){
//       console.log("val =", val);
//       size++;
// // }
// // console.log("size = ",  size);

// for-in
// let student = {
//     name:"Riddi",
//     age: 16,
//     score:490,
//     cgpa:8.2,
//     ispass:true,
// } ;

// for( let key in student){
//     console.log("key =", key ,  "value =",student[key] );
// }
 
//    practice loops       1.print all even num from 0-100;   (or)  2.
                     
    
// // for(let i=0;  i<=100; i++){
 
// //     if(i %2  !== 0){
// //         console.log("i=", i  );
// //     }
// // }
 
// // let gamenum="30";
// // let username=prompt("guess the game number ;");
  
// // while( username !== gamenum){
// //      username =prompt("you entred wrond number guess it again ;");

// // }
// // console.log("congroutulation you won the game num ")
// //  let i=1;
// //  do{
// //    console.log("hello");
// //    i++;

// //  }while(i<=20) ;          
// //  let output=1;
// //  do{
// //      console.log("my class");
// //      output++;
// //  }while(output<=100);
// // for(let i=1; i<=10; i++)
// //   console.log("mona");


// //                                                                  //  strings

//     // let $="mona";
//     // let _='sneha';
//     //   //  tempalte letiral
//     // let iname=`start 
//     // ssdfhk
//     // kdhdfsjhf
//     // ndfihgu9d
//     // hell9 ima rea9i rhh js jd
//     // zdgfusgdfb
//     // nnjxdhgfyusb
//     // mahsuif
//     // shavaya shanker swami 
//     // parmeshvara
//     // parvathi `;
//     //  console.log(iname);

// //                   // concatenation 
// //      let str1= 'book';
// //      let str2=' pen' ;
// //      let str3=' in tabale'
// //         let ans = str1 + str2  +  "and" + str3 +  "!" ;
// //         console.log(ans);

// //      let note ='book';
// //      let pen ='ink';
// //      let sen=`${note} ${pen}`;
// //      console.log(sen);

// //     let message="hello coder";
    
// // //     console.log(message.length);
// // //                             // uppercase $ lowercase methad 
   
//       let ucm="my name is mona i am learning code";
//       let uppercasemessage =message.toUpperCase();
//       console.log(uppercasemessage);


//       let lcm="my name is mona i am learning code";
//       let Lowercasemeassage =message.toLowerCase();
//       console.log(Lowercasemeassage);

// // //                                 // substring

// let submeassge="hi this a new vartion of a AI "
// let substr1=message.substring(1,8);
// console.log(substr1);
 
// let substr2=message.substring(2);
// console.log(substr2);


//                                      // split
   
// let sentance=["hog", "monstar", "jskhdf", "hsdihfys",]

// console.log(sentance);

//                                      // //   practice the loop 
// // let fullname=prompt("enter your full name "); 
// // let username="@"+ fullname + fullname.length;
// //    console.log(username);

// // let game=' its a number';
// // let num ='52285225';
// // let ans$=game+1 + num + num.length;
// //   console.log(ans$);
// //   console.log(uppercasemessage.game);
// //  document.body.innerHTML='hello';
                                         

//                                                //  functions
//      function calculatefinalprice(price, itamsname){
//          let taxrate=2;
//          let discount=2;
//          let deliveryfe=5;
//           let total = (price * (1+discount))* (1+taxrate) + deliveryfe;
//           console.log(`final price for ${itamsname} is $${total}`);
//      }
//      calculatefinalprice(10, "shoes");
//      calculatefinalprice(50, "tshirt");
//      calculatefinalprice(20, "headset");
//      calculatefinalprice(30, "machine");
     
      

            
// //                                  //          // with paramenter
// let myname=(inputame)=>{
//     console.log("my name is this")
//   }         
//   myname(inputame);
// //                                               //   without perametar
// function printnum(){
//    for (let i=1; i<=50; i++) {
//       console.log(i);
//    }
// }
// printnum();
 
// let getnum=(x,y) =>{
//   let ans=x+y;
//   return ans ;
// };
// console.log(getnum(2,10));

// console.log("app collge");

// setTimeout(() => {
//   console.log("Delayed function");
// }, 1000);
//                                                    // return function
// // // function getmyname(fristname,lastname){
// // //   let fullname=fristname+""+lastname;
// // //   return fullname;
// // // }
// // //    let=getmyname("mudavath","mona");
// // //    console.log("getmyname", getmyname); 

//   function countvowels(str){
//        let count=0;
//   for (const char of str){
//     if (char === "a"
//     || char ==="e" 
//     || char ==="i"
//     || char === "o"
//     || char === "u"
//     ) { 
//       count++;
//        }
//   return count;
//   }
// }

// //                                     // arrow  function
//  let countvow = (str) =>{
//   let count =0;
//   for (const char of str ){
//     if (
//     char === "a" || char ==="e" || char ==="i" || char === "o" || char === "u"

//     ){
//       count++;
//     }
//   }
//  return count;
     
//  };

//      let getsum =(x,y)=>{
//       let ans=x+y ;
//       return ans;
//      }
//      console.log(getsum(3,8));

// //                                                       //  arrays
//   let student=["suraj", "nikhil", "anirudh", "snagitha", "divya"];
//   let marks=[20,50,80,92,87];
//    console.log(student);
//    console.log(marks);                  
// //             // practice sum

//   let student=[85, 97, 44, 37, 76, 60]  ;
//     let sum=0;
//     for(let val of student){
//         sum += val;
//     }
//     console.log(`sum = ${sum}`);
//     let avg= sum/student.length;
//     console.log(`avg marks of the student = ${avg}`);  
     
//     let items=[250,654,300,900,80];
//     let i=0;
//     for(let val of items){
//         console.log(`value of  index ${i} =${val}`);
//         let offer=val/10;
//         total = items[i] - offer;
//         console.log(` value after offer =${total}}  `);
//         i++;
       
//     }

// //                                               // arrys metheds
//   let inputame=["mouna", "chinni" ,"soonu ", "switty", "ladhuu" ];
//   let sname=["menu", "srinu"];
//   let tname=inputame.concat(sname);
//   console.log(tname);


//    inputame.shift("jony","vani", "babuu");
//     let deletditems=inputame.shift();
//      console.log("deleted", deletditems);
//         console.log(inputame);
//         console.log(inputame.toString());

// let arr=[1,2,3,4,5,6,7,8];
//  arr.splice(2,2,101,108);
//  console.log("arr", arr);

//  let campany=["Bloonberg", "microsft", "uber", "google", "ibm", "netflix"]
//      campany.shift();
//      campany.splice( 2,1,"ola");
//      campany.push("amazon");
//     console.log(campany); 
// function
//       foreach loop in array
  
//    let product =[10,50,8,5,,7,6,0,52,55];
//    let cost = (quntity,)=>{
//     console.log(quntity +quntity);

//    };
//    product.forEach(cost);

//   //                                                 // map
  
//   let new_map= [5,8,2,4,5,100,50];
//    let new_arry =new_arry.map((val)=>{
//        return  val + 2;
//    });
//    console.log(new_arry); 

//                                                      //  filter

// let sum=[1,2,3,4,5,6,7,8];
   
// let evenarry=sum.filter((val)=>{
//   return val * val;

// });
// console.log(evenarry);

//                                                             //  reduse

// let arry=[1,2,3,8,9];
// let output= arry.reduce((acc,curent)=> {
//   return  acc < curent ? acc: curent;

// });
// console.log(output);

//                                                                   // practice qutation
// let students=[20,50,85,98,25,89,95,94,85,];
// let score=students.filter((val)=>{
//   return  val>90;
// });
//  console.log(score);
   
//    let n=prompt("enter the n number :");
//     let arr =[];
//       for(i=1;  i>=n; i++){
//         arr[i-1] =i;
    
//       }
//     console.log(arr);
    
//     let sum_=arr.reduce((acc,val)=>{
//       return acc * val ;
//     });
//     console.log("sum_", sum_);
 
//                                                dom manipulation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

//    let head= document.getElementById("head");
//     console.dir(head)


//       let Btn=document.getElementsByName("language");
//       console.log(Btn); 

//       let p =document.getElementsByTagName("p" );
//       console.dir(p);
//     let cont=document.getElementById("container");
//     let mes =cont.getElementsByClassName("message");
//       console.log(mes);
//    let cont=document.getElementById("container");
//     let msg =document.querySelectorAll(" div,message");
//    console.log(msg);
    

//    let items=document.querySelectorAll(".items");
//    console.log(items);
//    let second=document.querySelector(".second");
//     console.log(second.previousElementSibling);
   
 
//    let plat = document.getElementById("plat");
//    console.dir(plat);

//     let pera = document.getElementById("pera");
//     console.dir(pera);
  
//      let h1=document.querySelector("h1");
//      h1.innerText=h1.innerText + "i am learning js ....... 123456789 lorem lorem llore rner jb";
//      console.dir(h1);

//      let divs = document.querySelectorAll(".box");
//      let i=1;
//      for(divs of divs){
//       divs.innerText = `uniqe value of div ${i} `;  
//       i++;
//      }; 

  
//    let js =document.querySelector("h2");
//       console.log(js.setAttribute ("name", "newname"));
    
  

//        div.style.backgroundColor="yellow";
//        div.innerText="hello this new vartion of java script";
//        pera.style.BackgroundColor="darkblue";
//        attr.style.backgroundColor=Color="pink";
//       att.Color="red";
       
//   let newBtn=document.createElement("button");
//     newBtn.innerText="clik me";
//     console.dir("newBtn");
//     button.style.Color="red";


// let div= document.querySelector("div");
//   div.prepend(newBtn);

//   let newHeading=document.createElement("h1");
//    newHeading.innerText="My world is myself only ";
//    console.dir("newHeadin");
    
//    let h1=document.querySelector("h1");
//    h1.appendChild(newHeading);
//    newHeading.remove(h1);

// let pera=document.createElement("p");
//  pera.innerhtml="<i> hi,i am new! </i>" ;
//  console.dir("pera");

//  let pera=document.querySelector("body")
//  p.prepend(pera

// let inputbox=document.getElementById("password")   ;
// inputbox.classList.toggle("browesr");
// console.log(inputbox); 

// newBTN =document.createElement("button");
//  newBTN.innerText="clike me";

//  newBTN.style.color="white";
//  newBTN.style.backgroundColor="red";
//  newBTN.style.cssText += "height:10rem", "height:10rem ";
//  document.querySelector("body").prepend(newBTN);
//  console.dir(newBTN);

//  let emoji=document.querySelector("button");
//    emoji.addEventListener("click",()=>{
//           console.log("cliked the button");
  
//    });
//    emoji.addEventListener("click",(evt)=>{
//     console.log("cliked the button...handaler2");
//     console.log(evt.type);
//     console.log(evt.target);

// });
// emoji.remove()

//  let pass =document.querySelector("PW");
//     pass.onmouseover=()=>{
//       console.log("moving");
//     }
// modemoji=document.getElementById("modemoji");
// let currmode="light";
// let body =document.querySelector("body") ;
  
//  modemoji.addEventListener("click",()=>{
//   if(currmode=== "light"){
//    currmode = "dark";
//   body.classList.add("dark");
//   body.classList.remove("light");
//   }else{
//     currmode = "light";
//     body.classList.add("light");
//     body.classList.remove("dark");
//   }               
//   console.log(currmode);
//  });



              // All Events 


// const newhead=document.querySelector("#newhead");
//       newhead.addEventListener("click", (e)=>{
//         console.log("clickd the new head the code atmospher is very tuf way ");
//         e.target.style.fontSize="5.8rem";
        
//       })
 
// console.log(newhead);

// //  head=document.getElementById("head");
// //  pera=document.getElementById("pera");


//  head.addEventListener("click", (e)=>{
//  e.target.style.fontSize="10rem"; 
//   console.log("cliked the head");

//  });
 
//  pera.addEventListener("", (e)=>{
//   e.target.style.color="gren";
//   e.target.style.fontSize="3rem";
//   console.log(pera); 
//  });

//  pera.addEventListener("dblclick", (e)=>{
//   e.target.style.color="gren";
//   e.target.style.fontSize="3rem";
//   console.log(pera); 
//  });

   
//  pera2=document.querySelector("#pera2");

//  pera2.addEventListener("mousedown", (e)=>{
//   e.target.style.color="tomato";
//   console.log(pera2);
  
//  });

//  pera2.addEventListener("mouseup", (e)=>{
//   e.target.style.color="blue";
//   console.log(pera2)
//  })


//    btn=document.querySelector(".btn");

//  btn.addEventListener("mousemove", (e)=>{
//      e.target.style.backgroundColor="blue";
//      e.target.textContent = "mousedown   ";

//      console.log(btn);
   
//  });

//  btn.addEventListener("mouseout", (e)=>{
//   e.target.style.backgroundColor="yellow"
//   e.target.textContent = "over the button   ";
//   console.log(btn);

// });


// emoji=document.querySelector("#emoji");
//   console.log(e.key);
//   const sped=20;
//   let x=100;
//   let y=100;

// emoji.addEventListener("keydown",(e)=>{

// 
//       if(e.key.startsWith("Arrow")){
//       e.preventDefault();
//       switch(e.key){
//            case "ArrowUp":
//             y -=sped;
//             break;
//            case "ArrowDown":
//             y +=sped;
//             break;
//            case "ArrowRight":
//             x +=sped;
//             break;
//           case "ArrowLeft":
//             x -=sped;
//             break;
//       } 
//       }

//       });

// document.addEventListener("keyup",(e)=>{
//   console.log(`key up ==${e.key}`);
// })


// emoji

//    
document.addEventListener("DOMContentLoaded", () => {
  const emoji = document.querySelector(".emoji");

  const sped = 20;
  let x = 100;
  let y = 100;

  document.addEventListener("keydown", (e) => {
    if (e.key.startsWith("Arrow")) {
      e.preventDefault();

      switch (e.key) {
        case "ArrowUp":
          y -= sped;
          break;
        case "ArrowDown":
          y += sped;
          break;
        case "ArrowRight":
          x += sped;
          break;
        case "ArrowLeft":
          x -= sped;
          break;
      }

      emoji.style.top = `${y}px`;
      emoji.style.left = `${x}px`;
    }
  });
});
const input=document.querySelector("#focus");
   input.addEventListener("focus",(e)=>{
         e.target.style.backgroundColor="blue";
       
         console.log("the input are focused..");
   })

   input.addEventListener("invalid",(e)=>{
  alert('You must fill out the form!');
  console.log(input);
   })

   input.addEventListener("blur", (e)=>{
       e.target.style.backgroundColor="";
       console.log("focused is bluer");
   })

   const sub=document.querySelector("#sub");
     sub.addEventListener("submit", (e)=>{
      e.preventDefault();
     alert("form was submited");
  
      console.log(e.target);
     })



     const reset=document.querySelector("#reset");

     reset.addEventListener("reset", (e)=>{
      prompt("reset the button");
     });


    //  const img=document.querySelector("#img");
    //  const output=document.querySelector("#output");

    //  window.addEventListener("DOMContentLoaded", (e)=>{
    //   console.log("DOM id lodedd....");
    //  });

    //  img.addEventListener("load", (e)=>{
    //   console.log("external resorses also fully loaded..");
    //  });

    //  window.addEventListener("whel", (e)=>{
    //    if (window.pageYOffset >20){
    //     document.body.style.backgroundColor="red ";
    //      console.log("scrolling up..");
    //    }if(window.pageYOffset <5 ){
    //    document.body.style.backgroundColor="blue";
    //     console.log("scrolling down...")  ;              
    //    }
      
    //  });
    //  img.addEventListener("touchstart",(event)=>{
    //   // event.preventDefault();
    //  console.log("touch start");
    //  });

   
    window.addEventListener("DOMContentLoaded",()=>{
     const mainvd=document.querySelector("#mainvd");
       mainvd.addEventListener("play", (e)=>{
      console.log("this video is playedd...");
      demo.innerHTML   += "the video is started";

       });
      

       mainvd.addEventListener("ended", (e)=>{
     
      demo.innerHTML   += "video is endeded..";
      console.log("video is end .....")

       });

       mainvd.addEventListener("VolumeChange", (e)=>{
        
        demo.innerHTML   += "volume ..";
        console.log("video  volume chnaged ,,")
  
         });

         
      });

      // drag and drop

 const conta=document.querySelectorAll(".container");
 const left=document.querySelector(".left");
 const right=document.querySelector(".right");
  

      document.querySelectorAll(".dragtext").forEach(item =>{
       item.addEventListener("dragstart",(e)=>{
      e.dataTransfer.setData("text", e.target.id);
   
    console.log("dragestartedd..");
     })
    });
  
  right.addEventListener("dragover",(e)=>{
    e.preventDefault();


  });

  right.addEventListener("drop",(e)=>{
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    const dragdata=document.getElementById(data);
     e.currentTarget.appendChild(dragdata);
     console.log("drag was complited...");

   
  });


  //     turn left side 

  left.addEventListener("dragover",(e)=>{
    e.preventDefault();


  });

  left.addEventListener("drop",(e)=>{
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    const dragdata=document.getElementById(data);
     e.currentTarget.appendChild(dragdata);
     console.log("drag was complited...");

   
  });

  const img=document.querySelector("#img");

 img.animate(
    [
      {
  transform:"translateX(0)",
  opacity:0.25,

      },
       {
      transform:"translateX(100px)",
      opacity:1,
     
    }
  ],
  { 
    duration:1000,
    
    fill:"forwards",
    easing:"ease-in-out",
    delay:200,

  }
  );

const offon=document.querySelector("#off-on");
const demo=document.querySelector(".demo");
 window.addEventListener("online",(e)=>{
  console.log("they online");
  demo.innerHTML="was online";
 });

 window.addEventListener("offline",(e)=>{
  console.log("they offline");
  demo.innerHTML="was offline";
 });



 const new1 =document.querySelector(".new1");
 
 new1.addEventListener("mousedown",(e)=>{
  let x = e.getModifierState("Control");
demo.innerHTML = "Caps Lock activated: " + x;
  console.log("control was clicked.");
 })

// //   class 
//    class ToyotaCar{
//           constructor(brand,milage){
//             console.log("creating the contracter");
//             this.brand= brand;
//             this.milage=  milage;
//           }
//             strat(){
//               console.log("continue");
//             }
//             stop(){
//                console.log("final");

//             }
//    }
//    let fortuner1  = new ToyotaCar( "fortunuer",10);
//    let lexus2= new ToyotaCar("lenux", 12);

//    let fortuner  = new ToyotaCar( "fortunuer",10);
//    let lexus = new ToyotaCar("lenux", 12);
  

//    let data ="the plan of study in college";

//    class user {

//      constructor(name, email){
//          this.name=name;
//          this.email = email;

//      }
//         name(){
//           console.log("!!");

//         }
//         email(){
//           console.log("@@");

//         }
//    }
//    let univers = new user("monachouhan", "v125@email.com");
//    let univers1= new user("mouncollge.@email.com");

  // setTimeout(()=>{
  //      console.log("hello java script this work go ionn fast ");
  // },4000)

//   function mona1(){
//      return new Promise((resolve, reject)=>{
//          setTimeout(()=>{
//         console.log("some data ");
//         resolve("success");
      
//          },5000)
//      })
//   }
//   let service1 = new mona1();

//   function mona2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//        console.log("some data ");
//        resolve("success");
     
//         },5000)
//     })
//  }
//  let service2= new mona2();



// //        .then in promise
//   console.log("fatching data1...");
//   mona1().then((res)=>{
//      console.log(res);
//      console.log("fatching data2...");
//      mona2().then((res)=>{
//       console.log(res);
//      })
//   })


//   function hondacar( dataID){
//     return new Promise((resolve,reject)=>{
//           setTimeout(()=>{
//             console.log("honda car is fatching...");
//               resolve("success..");
//           },2000)
//     });
//   }

//   let honda=hondacar();
 
// (async function  () {
//   console.log("geting data1 ....")
//       await hondacar(1);
//  console.log("geting data2 ....")
//       await hondacar(2);
//   console.log("geting data3 ....")
//       await hondacar(3);     
//  })();


//  fetch API
    

const URL = "https://jsonplaceholder.typicode.com/users";  //fetch (url)
  const btn=document.querySelector("#btn");
 const pera= document.querySelector("#peraf");   

let getfetch= async ()=>{
  console.log("geting the fetch...");
  let response = await fetch(URL);
  console.log(response);  //json 
  let data = await response.json();
  console.log(data);
  pera.textContent = data[9].name;

} ;
btn.addEventListener("click", getfetch);