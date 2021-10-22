import    React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGif } from '../Helpers/getGif';
 import { GifGritItem } from './GifGritItem';

export const GifGrid = ({category}) => {
    const {data:images,loading} = useFetchGifs(category);
// const [images, setimages] = useState([]);

// useEffect(()=>{
//    getGif(category).then(img =>
//        setimages(img))},[category])

    return (
        <>   
       
               <h1 className='text-center' >{category}</h1>
               {/* {loading ? 'Cargando':"Data Cargada"} */}
               {loading && <p>Loading..</p>}
        <div className='card-grip'>
            {
                images.map((r) =>(
                    <GifGritItem 
                    key={r.id}
                    {...r}
                    />
                ))
            }      
        </div> 
        </>
    )
}
