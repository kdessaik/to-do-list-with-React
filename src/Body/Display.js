var Display=({list})=>{ 
    
    const close=document.getElementById('span1')

    close.addEventListener('click',)
    return (
    <>
    <ol>
{list.map(function(itemObj) {
          return( <li id="list">
        {itemObj}
        <span id="span1" onClick={}>x</span>
          </li>)
 })}
        </ol>
</>

)}
export  default Display