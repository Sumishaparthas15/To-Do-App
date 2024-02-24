// import React, { useState ,useEffect,useRef} from 'react'

// const names =[
//     {name:"sumisha",age:20,place:"palakkad"},
//     {name:"smiisha",age:20,place:"thrissur"},
//     {name:"saisha",age:21,place:"malappuram"}

// ]

// const Child = () => {

//     const [items,setItems] = useState(names)
//     useEffect(()=>{
//          console.log (`you have ${names.length} `)
//      })
//     const inputRef = useRef(null);

//     const handle = ()=>{
//         inputRef.current.focus()

//     }

//   return (
//     <div>
//         {items.map((name) =>(
//             <div>
//                 <p>{name.name}</p>
//                 <p>{name.age}</p>
//                 <p>{name.place}</p>
//                 <input ref={inputRef} type="text" />
//                 <button onClick={handle}>click me</button>
//             </div>
//         )

//         )}
//     </div>
//   )
// }

// export default Child
import React, { useRef } from 'react';

const Child = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    // Focus on the input element when the button is clicked
    inputRef.current.focus();
  };

  return (
    <div>
      {/* Attach the ref to the input element */}
      <input ref={inputRef} type="text" />
      {/* Button to focus on the input */}
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export default Child;
