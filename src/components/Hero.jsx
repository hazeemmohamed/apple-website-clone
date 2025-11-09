import iPhone17 from "../assets/images/iPhone17.jpg"
import iPhoneAir from "../assets/images/appleAir.png"
import macBook from "../assets/images/macbook14.jpg"

import LearnMoreButton from "./LearnMoreButton";
import BuyButton from "./BuyButton";

function Hero(){
    const sectionsComp = [
        {
            title: "iPhone 17 Pro",
            desc: "All out Pro",
            image: iPhone17,
            backgroundColor:"bg-black",
            textColor: "text-white",
            imageWidth:"w-[80%]"
        },
         {
            title: "iPhone 17 Air",
            desc: "The thinnest iPhone ever.<br>With the power of pro inside",
            image: iPhoneAir,
            backgroundColor:"bg-gray-100",
            textColor: "text-black",
            imageWidth:"w-[70%]"


        },
          {
            title: 'MacBook Pro 14"',
            desc: "Supercharged by M5.",
            image: macBook,
            backgroundColor:"bg-black",
            textColor: "text-white",
            imageWidth:"w-[80%] md:w-[55%]"


        }
    ];


    return(
        <>       {sectionsComp.map((sections,index) =>(
             <section key={index} className={`${sections.backgroundColor} ${sections.textColor} mx-auto h-[90vh] overflow-hidden`}>
            <div className="content-section mt-20 ">
                <h1 className="text-6xl text-center  font-bold">{sections.title}</h1>
                <h2 className=" text-center mt-4 mb-5 text-4xl " dangerouslySetInnerHTML={{ __html: sections.desc }}></h2>
                <div className="buttons flex items-center justify-center gap-5">
                    <LearnMoreButton></LearnMoreButton>
                    <BuyButton></BuyButton>
                    {/* <button className="bg-blue-500 text-white text-lg rounded-3xl px-6 py-2">Learn more</button> */}
                    {/* <button className="rounded-3xl px-6 py-2 text-lg text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white transition">Buy</button> */}
                </div>


            </div>
            <div className="image-section">
                <img src={sections.image} alt="" className={`${sections.imageWidth} mx-auto mt-5 cursor-pointer`}/>
            </div>
        </section>
        ))}
      </>

    )
}

export default Hero