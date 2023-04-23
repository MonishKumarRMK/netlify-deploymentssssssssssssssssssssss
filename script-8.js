// // function labelcreate(tagname,attrname,attrvalue,content){
// //     var ele=document.createElement(tagname);
// //     ele.setAttribute(attrname,attrvalue);
// //     ele.innerHTML=content;
// //     return ele;
// // }

// // function linebreakers(tagname){
// //     var ele=document.createElement(tagname);
// //     return ele;
// // }
// // function inputele(tagname,attrname,attrvalue,attrname1,attrvalue1){
// //     var ele=document.createElement(tagname);
// //     ele.setAttribute(attrname,attrvalue);
// //     ele.setAttribute(attrname1,attrvalue1);
// //     return ele;
// // }

// // var firstname=labelcreate("label","for","firstname","First Name");
// // var br1=linebreakers("br");
// // var firstnameinput=inputele("input","type","firstname","id","firstname");
// // var br2=linebreakers("br"); 
// // document.body.append(firstname,br1,firstnameinput,br2);

// // var middlename=labelcreate("label","for","middlename","Middle Name");
// // var br1=linebreakers("br");
// // var middlenameinput=inputele("input","type","middlename","id","middlename");
// // var br2=linebreakers("br"); 
// // document.body.append(middlename,br1,middlenameinput,br2);

// // var lastname=labelcreate("label","for","middlename","Last Name");
// // var br1=linebreakers("br");
// // var lastnameinput=inputele("input","type","middlename","id","last name");
// // var br2=linebreakers("br"); 
// // document.body.append(lastname,br1,lastnameinput,br2);

// // var email=labelcreate("label","for","middlename","Email");
// // var br1=linebreakers("br");
// // var emailinput=inputele("input","type","email","id","email");
// // var br2=linebreakers("br"); 
// // document.body.append(email,br1,emailinput,br2);

// // var password=labelcreate("label","for","password","Password");
// // var br1=linebreakers("br");
// // var passwordinput=inputele("input","type","email","id","password");
// // var br2=linebreakers("br"); 
// // document.body.append(password,br1,passwordinput,br2);



// var table=document.createElement("table");
// table.setAttribute("class","table");

// var thead=document.createElement("thead");
// var trhead=document.createElement("tr");

// var th1=document.createElement("th");
// th1.setAttribute("scope","col");
// th1.innerHTML="No";

// var th2=document.createElement("th");
// th2.setAttribute("scope","col");
// th2.innerHTML="First";

// var th3=document.createElement("th");
// th3.setAttribute("scope","col");
// th3.innerHTML="Last";

// var th3=document.createElement("th");
// th3.setAttribute("scope","col");
// th3.innerHTML="Last";

// var th4=document.createElement("th");
// th4.setAttribute("scope","col");
// th4.innerHTML="Handle";

// trhead.append(th1,th2,th3,th3,th4);
// thead.append(trhead);

// trhead.append(th1,th2,th3,th3,th4);
// thead.append(trhead);

// var tbody=document.createElement("tbody");
// var trbody=document.createElement("tr");
// var td1=createtrtd("td","1");
// var td2=createtrtd("td","Mark");
// var td3=createtrtd("td","Otto");
// var td4=createtrtd("td","@mdo");
// trbody.append(td1,td2,td3,td4);
// tbody.append(trbody);

// table.append(thead,tbody);
// document.body.append(table);

// var tbody=document.createElement("tbody");
// var trbody=document.createElement("tr");
// var td1=createtrtd("td","2");
// var td2=createtrtd("td","jacob");
// var td3=createtrtd("td","Thornton");
// var td4=createtrtd("td","@fat");
// trbody.append(td1,td2,td3,td4);
// tbody.append(trbody);

// table.append(thead,tbody);
// document.body.append(table);

// var tbody=document.createElement("tbody");
// var trbody=document.createElement("tr");
// var td1=createtrtd("td","3");
// var td2=createtrtd("td","Larry");
// var td3=createtrtd("td","the Bird");
// var td4=createtrtd("td","@twitter");
// trbody.append(td1,td2,td3,td4);
// tbody.append(trbody);

// table.append(thead,tbody);
// document.body.append(table);

// function createtrtd(tagname,content){
// let ele=document.createElement(tagname);
// ele.innerHTML=content;
// return ele;
// }


// {/* <table class="table">
// <thead>
//   <tr>
//     <th scope="col">First</th>
//     <th scope="col">Last</th>
//     <th scope="col">Handle</th>
//   </tr>
// </thead>
// <tbody>
//   <tr>
//     <td>Mark</td>
//     <td>Otto</td>
//     <td>@mdo</td>
//   </tr>
// </tbody>
// </table> */}





// // // var middlename=labelcreate("label","for","middle name","middle name");
// // // var br=linebreakers("br");
// // // var inputmiddlename=inputcreate("input","type","middle name","id","middle name");
// // // var br1=linebreakers("br1"); 
// // // document.body.append(middlename,br,inputmiddlename,br1);

// // // var lastname=labelcreate("label","for","last name","last name");
// // // var br=linebreakers("br");
// // // var inputlastname=inputcreate("input","type","last name","id","last name");
// // // var br1=linebreakers("br1"); 
// // // document.body.append(lastname,br,inputlastname,br1);

// // // var email=labelcreate("label","for","email","email");
// // // var br=linebreakers("br");
// // // var inputemail=inputcreate("input","type","mail","id","email");
// // // var br1=linebreakers("br1"); 
// // // document.body.append(email,br,inputemail,br1);

// // // var password=labelcreate("label","for","password","password");
// // // var br=linebreakers("br");
// // // var inputpassword=inputcreate("input","type","password","id","password");
// // // var br1=linebreakers("br1"); 
// // // document.body.append(password,br,inputpassword,br1);


var div=document.createElement("div");
div.style.textAlign="center";
div.style.marginTop="150px";

var inputdate=document.createElement("input");
inputdate.setAttribute("type","date");
inputdate.id="dob";
inputdate.style.width="30%"

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Display Data";
button.style.margin="10px"
button.addEventListener("click",displaydata);

var outputdiv=document.createElement("div");
outputdiv.style.fontSize="20px";



div.append(inputdate,button,outputdiv);
document.body.append(div);

function displaydata(){
  var input=document.getElementById("dob").value;
  console.log(typeof(input));

  var birthdate=new Date(input);
  console.log(birthdate);

  var currentdate=new Date();
  console.log(currentdate);

  var milliseconddiff=parseInt(currentdate.getTime())-parseInt(birthdate.getTime());
  console.log(`Milliseconnds: ${milliseconddiff}`);

  var secondsdiff=Math.floor(milliseconddiff/1000);
  console.log(`Seconds Diff:${secondsdiff}`);

  var minutediff=Math.floor(secondsdiff/60);
  console.log(`Minutes Diff:${minutediff}`);

  var hoursdiff=Math.floor(minutediff/60);
  console.log(`Hours Diff:${hoursdiff}`);

  var daydiff=Math.floor(hoursdiff/24);
  console.log(`Day Diff:${daydiff}`);

  var yeardiff=currentdate.getFullYear()-birthdate.getFullYear();
  console.log(`Year diff:${yeardiff}`);

  var monthdiff=yeardiff*12+((currentdate.getMonth()+1)-(birthdate.getMonth()+1));
  console.log(`Month Diff:${monthdiff}`);

  outputdiv.innerHTML=` 
  Given date is ${birthdate} <br>
  year is ${yeardiff}<br>
  Month is  ${monthdiff}<br>
  day is ${daydiff}<br>
  hour ${hoursdiff}<br>
  minute ${minutediff}<br>
  seconds ${secondsdiff}<br>
  milliseconds ${milliseconddiff}<br>
  `;


}