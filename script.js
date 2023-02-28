
url='https://www.fishwatch.gov/api/species'
async function call(){

    var a = fetch(url)
    var out=await a
    var prom=out.json()
    var res=await prom
    console.log(res[0]);
             var parent=document.querySelector('body')
            var container1=document.createElement('div')
            container1.classList.add('man')

                      parent.append(container1)
                      container1 .innerText= 'Fish World'
    try{
        for(let i of res){

             var parent=document.querySelector('body')
            //    body.innerText= 'Fish World'

             var container=document.createElement('div')
                      parent.append(container)
             var table=document.createElement('table')
                      container.append(table)
             var  row1=document.createElement('tr')
             row1.classList.add('super')
                      table.append(row1)
                  // console.log(i.Biology);
                  var  row2=document.createElement('tr')
                      table.append(row2)
                    row1.innerText= i.Path
                    row2.innerText= i.Biology
                    
        }
       
       
    }
   catch{
//
   }
    

}
call()