function update(){
    jasonitemStr=localStorage.getItem("Jasonitem");
    jasonitemArr=JSON.parse(jasonitemStr);
    let str="";
jasonitemArr.forEach((element, index) => {
str=str+`<tr>
<th scope="row">${index+1}</th>
<td>${element[0]} </td>
<td>${element[1]}</td>
<td><button class="btn" id="del"onclick=deleted(${index})>Delete</button></td>
</tr>`
})
document.getElementById("tablem").innerHTML=str;
console.log("UPdate ran");
}
function deleted(index){
jasonitemStr=localStorage.getItem("Jasonitem");
jasonitemArr=JSON.parse(jasonitemStr);
jasonitemArr.splice(index,1);
localStorage.setItem("Jasonitem",JSON.stringify(jasonitemArr));
update();
console.log("Deleted ran");    
}    
addEventListener("DOMContentLoaded",()=>
 {
     d=document.getElementById("delall");
     d.addEventListener("click",()=>{
     localStorage.clear();
     let str=` <tr>
     <th scope="row">1</th>
     <td>Task</td>
     <td>Task detail</td>
     <td><button class="btn" id="del" onclick=deleted()>Delete</button></td>
   </tr>`
   document.getElementById("tablem").innerHTML=str;
 }
     )
 })
addEventListener("DOMContentLoaded",()=>
{ 
    q=document.getElementById("sub");
    q.addEventListener("click",()=>
    {
        //alert("Task Added Successfully! ");      
        titl=document.getElementById("title").value;
        desc=document.getElementById("describe").value;
        
        if(localStorage.getItem("Jasonitem")==null)
        {
            jasonitemArr=[];
            jasonitemArr.push([titl,desc]);
            localStorage.setItem("Jasonitem",JSON.stringify(jasonitemArr));
        }
        else{
            jasonitemStr=localStorage.getItem("Jasonitem");
            jasonitemArr=JSON.parse(jasonitemStr);
            jasonitemArr.push([titl,desc]);
            localStorage.setItem("Jasonitem",JSON.stringify(jasonitemArr));
        }
        let str="";
        jasonitemArr.forEach((element, index) => {
            str=str+`<tr>
            <th scope="row">${index+1}</th>
            <td>${element[0]} </td>
            <td>${element[1]}</td>
            <td><button class="btn" id="del" onclick=deleted(${index})>Delete</button></td>
            </tr>`
        });
        document.getElementById("tablem").innerHTML=str;
})
})