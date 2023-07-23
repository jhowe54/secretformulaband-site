import { useEffect, useState } from "react";

function Media() {
    const placeholderImage = "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
    const [images, setImages] = useState([placeholderImage])

    useEffect(() => {
        const abortController = new AbortController()
        async function loadImages() {
            try { 
                setImages([placeholderImage, placeholderImage, placeholderImage])
            } catch(err) {
                if(err.name!== "AbortError") {
                    throw err;
                }
                console.log("Aborted!")
            }
        }
        loadImages()
        return () => abortController.abort()
    }, [])
    
    return (
        <div className="m-20 text-white flex justify-between">
            {images && images.map((img, index) => {
                return (
                    <img className="bg-white" width={200} src={img} />
                )
            } )}
            
        </div>
    )
}


export default Media;