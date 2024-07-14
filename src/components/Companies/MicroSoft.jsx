import { React} from 'react';
import { Link } from 'react-router-dom';
import GSlogo from '../Assets/Microsoftlogo.png'
import { PiBackspaceLight } from "react-icons/pi";
const data = [
    {
        state: "Circle and Rectangle Overlapping",
        link: "https://leetcode.com/problems/circle-and-rectangle-overlapping/"
    },
    {
        state: "Find the Winner of the Circular Game",
        link: "https://leetcode.com/problems/find-the-winner-of-the-circular-game/description/"
    },
    {
        state: "Image Smoother",
        link: "https://leetcode.com/problems/image-smoother/description/"
    },
    {
        state: "Minimum Moves to Equal Array Elements II",
        link: "https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/description/"
    },
    {
        state: "Random Point in Non-overlapping Rectangles",
        link: "https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/description/"
    },
    {
        state: "Bulls and Cows",
        link: "https://leetcode.com/problems/bulls-and-cows/description/"
    },
    {
        state:  "Maximum Product After K Increments",
        link: "https://leetcode.com/problems/maximum-product-after-k-increments/description/"
    },
    {
        state: "Russian doll envelopes",
        link: "https://leetcode.com/problems/russian-doll-envelopes/"
    },
    {
        state: "Count Number of Nice Subarrays",
        link: "https://leetcode.com/problems/count-number-of-nice-subarrays/description/"
    },
    {
        state: " Repeated DNA Sequences",
        link: "https://leetcode.com/problems/repeated-dna-sequences/description/"
    },
    {
        state:  "Find the City With the Smallest Number of Neighbors at a Threshold Distance",
        link: "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/"
    },
    {
        state: "Wiggle Sort II",
        link: "https://leetcode.com/problems/wiggle-sort-ii/description/"
    },
    {
        state: " Shopping Offers",
        link: "https://leetcode.com/problems/shopping-offers/"
    }
];


const MicroSoft= () => {
  

    return (
        <div className="p-4">
            <div className="bg-yellow-300 rounded-md shadow-md">
                <div className="flex justify-between p-4 border-b">
                    <h2 className="text-lg font-bold hover:text-blue-400"><a href="https://careers.microsoft.com/v2/global/en/home.html" target='blank'>Microsoft</a></h2>
                   <h4 className='text-lg font-bold hover:text-blue-400'><Link to='/company'>Back</Link></h4>
                </div>
                <div>
                    {data.map((item, index) => (

                        <div key={index} id={`main${index}`} className={`bg-yellow-100 flex items-center justify-between p-4 border-b last:border-none`}>
                            <div className="flex items-center space-x-4">
                                {/* <span className="bg-yellow-100 text-yellow-600 py-1 px-3 rounded-full">Pending</span> */}
                                <select name="pending" id={`sel${index}`} onChange={(e) => {

                                    let main = document.getElementById(`main${index}`);
                                    let sel = document.getElementById(`sel${index}`);
                                    main.style.background = e.target.value;
                                    sel.style.background=e.target.value;
                                    sel.style.color=black;
                                }} className=" text-black py-1 px-3 rounded-full">
                                     
                                    <option value="rgb(254 249 195)" defaultValue="Pending"   >Pending</option>
                                    <option value="rgb(120 217 120)">Done</option>
                                    <option value="#ffa8a8">Revisit</option>
                                </select>


                                <span className={`font-medium text-black hover:text-red-400`}><a href={item.link} target='blank' >{item.state}</a></span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="bg-yellow-100 text-yellow-600 py-1 px-3 rounded-full">Medium</span>
                                <button className="text-black">+ Note</button>
                                <div className="flex space-x-2">
                                    <img src={GSlogo} alt="Goldman Sachs" className="h-6 w-8" />
                                    
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );


}

export default MicroSoft;
