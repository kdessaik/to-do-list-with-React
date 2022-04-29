var Display=({list})=>{ 
    
    var close=document.getElementById('span1')
    var delet=document.getElementById('list')

    function Close(){ 
       
         
         delet.style.Display='none'
        
        }
        
    return (
    <>
    <ol>
{list.map(function(itemObj) {
          return( <li id="list">
        {itemObj}
        <span id="span1" >x</span>
          </li>)
 })}
        </ol>
</>

)}
export  default Display