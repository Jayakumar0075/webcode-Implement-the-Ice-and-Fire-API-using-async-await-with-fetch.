var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.setAttribute("class","row");
row.classList.add("row","m-3");
container.append(row);

var res=fetch("https://www.anapioficeandfire.com/api/books");
res.then((data)=>data.json()).then((data1)=>foo(data1));

function foo(data1){
for(var i=0;i<data1.length;i++){
   row.innerHTML+=`<div class="col-md-4">
 <div class="card text-green bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-body">
  <h5>BOOK NAME-${data1[i]. name }</h5>
  <h5> isbn-${data1[i]. isbn }</h5>
  <h5>Numberof pages-${data1[i]. numberOfPages} </h5>
  <h5>Authors-${data1[i]. authors} </h5>
  <h5>Publisher-${data1[i]. publisher} </h5>
  <h5>Released-${data1[i]. released} </h5>

  </div>
</div>
  
   </div>`;
document.body.append(container); 
}

}

    async function bar(){
    let res= await fetch("https://www.anapioficeandfire.com/api/books");
    let result=await res.json();
    console.log(result);
    }
    bar();