// get api
export const getGif = async (category)=>{

    //const url ="https://api.giphy.com/v1/gifs/search?q=naruto&limit=10&api_key=XZwTYvCD4rg7FVNOnjUGGReIYCYd6W34"; 
    const url =`https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=XZwTYvCD4rg7FVNOnjUGGReIYCYd6W34`; 
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img =>{
        return{
            id:img.id,
            title: img.title,
            url : img.images.downsized_medium.url
        }
    })
    return gifs;
    }