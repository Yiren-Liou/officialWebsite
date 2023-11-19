const getImageUrl = (name) => { 
  return new URL(`/src/assets/images/${name}.png`, import.meta.url).href 
} 

export default getImageUrl;