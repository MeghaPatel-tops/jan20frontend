export function printCategory(){
    let catArray = ['Fashion','Electronics','Mobiles','Accessories','vegs'];

    let str=""
    catArray.map((index,i)=>{
        str+=`
             <div class="col-md-3">
            <div class="category-box">
                <h5>${index}</h5>
            </div>
            </div>
        `
    })
    document.getElementById('catrow').innerHTML=str;
}