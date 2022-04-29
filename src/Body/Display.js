var Display=({list})=>{ return (
    <>
    <ol>
{list.map(function(itemObj) {
          return <li>
        
          <span>{itemObj}</span>
          
                 </li>
 })}
        </ol>
</>

)}
export  default Display