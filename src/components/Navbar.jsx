import { FaApple,
    FaSearch,
    FaShoppingBag,
    FaBars 

} from "react-icons/fa";

function Navbar(){

    const navLinks = [
        {
            name:"Store"
        },
        {
            name:"Mac"
        },
        {
            name:"iPad"
        },
        {
            name:"iPhone"
        },
        {
            name:"Watch"
        },
        {
            name:"AirPods"
        },
        {
            name:"TV & Home"
        },
        {
            name:"Entertainement"
        },
        {
            name:"Accessories"
        },
        {
            name:"Support"
        },
        
        
    ];
    return(
        <nav className="sm:p-4 fixed top-0 left-0 w-full z-10 flex items-center justify-center sm:justify-between
         text-gray-400 text-sm   bg-black/90 ">
           <div className="md:pl-60"> <ul className=" sm:justify-between  sm:left-0 flex items-center  md:justify-center gap-10">
                <li><FaApple></FaApple></li>
                {navLinks.map((link, index)=>(
                    <li key={index}><a href="" className=" hidden md:flex cursor-pointer  hover:text-white ">{link.name}</a>
</li>  
                ))}
              
                </ul></div>
                <div className="flex gap-5 md:pr-60  ">
                <FaSearch className="cursor-pointer  hover:text-white"></FaSearch>
                <FaShoppingBag className="cursor-pointer  hover:text-white"></FaShoppingBag>
                <FaBars className="md:hidden cursor-pointer  hover:text-white"></FaBars>
                </div>
                
            {/* <ul className="li"><a href="">Store</a></ul>
            <ul className="li"><a href="">Mac</a></ul>
            <ul className="li"><a href="">iPad</a></ul>
            <ul className="li"><a href="">iPhone</a></ul>
            <ul className="li"><a href="">Watch</a></ul>
            <ul className="li"><a href="">AirPods</a></ul>
            <ul className="li"><a href="">TV & Home</a></ul>
            <ul className="li"><a href="">Entertainement</a></ul>
            <ul className="li"><a href="">Accessories</a></ul>
            <ul className="li"><a href="">Support</a></ul>
            <ul className="li"><a href="">Search</a></ul>
            <ul className="li"><a href="">cart</a></ul> */}
        </nav>
    )
}
export default Navbar