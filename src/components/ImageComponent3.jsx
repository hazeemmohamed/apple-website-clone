import LearnMoreButton from "./LearnMoreButton"
import BuyButton from "./BuyButton"
import image1 from "../assets/images/image12.png"
import ipadPro from "../assets/images/ipadPro.png"
// import { FaApple } from "react-icons/fa"
import watch from "../assets/images/watchSeries11.png"
import airpod from "../assets/images/pngwing.com.png"
import macbookAir from "../assets/images/MacAir.png"
import tradIn from "../assets/images/TradeIn.png"

function ImageComponent3(){

    const productSets = [
        {
            title:"Using them together <br> sets them apart.",
            desc: "Apple devices work together so <br> seamlessly, it almost feels like magic",
            button: <LearnMoreButton></LearnMoreButton>,
            image: image1,
            backgroundColor: "bg-gray-200",
            width: "w-[80%]",
            textColor:"text-black"
        },
        {
            title:"iPad Pro",
            desc: "Advanced AI performance <br>and game-changing capabilities. ",
            button: [<LearnMoreButton></LearnMoreButton>, <BuyButton></BuyButton> ],
            image: ipadPro,
            backgroundColor: "bg-black",
            width: "w-[60%]",
            textColor:"text-white"
        },
        {
            //icon: <FaApple className="text-4xl" />,
            title:"WATCH SERIES 11",
            desc: "The ultimate watch for a healthy life.",
            button: [<LearnMoreButton></LearnMoreButton>, <BuyButton></BuyButton> ],
            image: watch,
            backgroundColor: "bg-gray-200",
            width: "w-[90%]",
            textColor:"text-black"

        },
        {
            title:"AirPods Pro 3",
            desc: "The world's best in-ear <br> Active Noice Cancellation.",
            button: [<LearnMoreButton></LearnMoreButton>, <BuyButton></BuyButton> ],
            image: airpod,
            backgroundColor: "bg-gray-200",
            width: "w-[40%]",
            textColor:"text-black"
        },
        {
            title:"MacBook Air",
            desc: "sky blue color.<br> Sky high perfomance with M4.",
            button: [<LearnMoreButton></LearnMoreButton>, <BuyButton></BuyButton> ],
            image: macbookAir,
            backgroundColor: "bg-[#D7EBF6]",
            width: "w-[80%]",
            textColor:"text-black"
        },
        {
            title:"Trade In",
            desc: "Upgrade and save. <br> It's that easy.",
            button: <LearnMoreButton></LearnMoreButton>,
            image: tradIn,
            backgroundColor: "bg-gray-200",
            width: "w-[80%]",
            textColor:"text-black"
        }
    ]
    return(
        <div className="container md:grid md:grid-cols-2 md:grid-rows-3 md:gap-3 md:p-3 ">
            {
                productSets.map((products,index)=>(
                    <><div className={`${products.backgroundColor} h-[60vh] p-3 overflow-hidden`}>
                        <h1  className={`${products.textColor} text-xl md:text-3xl font-bold mb-3 text-center`} dangerouslySetInnerHTML={{ __html: products.title }}></h1>
                        <h3 className={`${products.textColor} md:text-lg text-center`} dangerouslySetInnerHTML={{ __html: products.desc }}></h3>
                        <div className="space-x-4 mt-3 text-center">{products.button}</div>
                         <div>
                        <img src={products.image} alt="" className= {`${products.width} mx-auto mt-2 `} />
                    </div>
                    </div>
                   
                    </>
                ))
            }
            
        </div>
    )
}

export default ImageComponent3