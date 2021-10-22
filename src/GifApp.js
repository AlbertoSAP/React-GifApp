import React,{useState} from "react";
import { AddCategorie } from "./Components/AddCategorie";
import { GifGrid } from "./Components/GifGrid";

export const GifApp = () => {
//   const categories = ["One Punch", "Samurai X", "Dragon Ball"];

const [categories, setCategories] = useState(["One Punch"]);
// const AddCat = () =>{
//  setCategories(c => [...c, 'Naruto']);
// }
  return (
    <>
      <h1>GifApp</h1>
      <AddCategorie setCategories={setCategories} />
      <hr />
      {/* <button onClick={AddCat}>Agregar</button> */}
      <ol>
        {categories.map((c)=>(
          <GifGrid 
          category={c}
          key={c}/>
        ))}
      </ol>
    </>
  );
};
