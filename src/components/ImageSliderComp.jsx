import appleTvImage1 from "../assets/images/appleTV1.png"
import appleTvImage2 from "../assets/images/appleTV2.webp"
import appleTvImage3 from "../assets/images/appleTV3.png"

function ImageSliderComp(){

    const Images=[
        {
            src:appleTvImage1
        },
         {
            src:appleTvImage2
        },
         {
            src:appleTvImage2
        }
    ];
    return(
        
        <div className="cursor-pointer p-3 flex overflow-hidden gap-16">
            {Images.map((img,index)=>(
                <div key={index} className={`flex-shrink-0 w-[90vw] h-[80vh] mx-auto  overflow-hidden rounded shadow-xl`}>
                     <img src={img.src} className="  w-full h-full mx-auto opacity-70 "/>
                </div>
            ))}
               
        </div>
      
  
    )
}
export default ImageSliderComp