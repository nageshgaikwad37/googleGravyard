let cl = console.log;

const googleBody = document.getElementById('google');

const searchInput = document.getElementById('search');
const dropDown = document.getElementById('dropdown');



function googlecardBody(arr){
    result = '';
    arr.forEach(ele =>{
        result += 
        `<div class="col-md-3">
                    <div class="card">
                        <div class="card-body">
                            <span class="type ${typeColor(ele.type)}">${ele.type}</span>
                            <h3 class="card-heading mb-4">${ele.name}</h3>
                            <span class="date">${ele.dateOpen} to ${ele.dateClose}</span>
                            <p>${ele.description}</p>
                            <button class="btn btn-info mt-4">Details</button>
                            
                        </div>
                    </div>
                </div> `
    })
    googleBody.innerHTML = result;
}

googlecardBody(db);


searchInput.addEventListener("keyup",onkeyUp)
dropDown.addEventListener("change",onChange)

function onkeyUp(event){
  let name = event.target.value.toLowerCase().trim();
  let tempResult = db.filter(title => title.name.toLowerCase().trim().includes(name));
  googlecardBody(tempResult);
}

function onChange(eve){
   let p = eve.target.value;
   if( p.toLowerCase() === "all" ){
    googlecardBody(db)
   }else{
    let typesVal = db.filter((ele) => {
        return ele.type === p.toLowerCase() ;
    })
    googlecardBody(typesVal)
   }
   
     }


function typeColor(type){
      if(type === "app"){
        return "yellow";
      }else if(type === "hardware"){
        return "aqua";
      }else{
        return "pink";
      }
}





