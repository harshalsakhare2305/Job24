import { React} from 'react';
import { Link } from 'react-router-dom';
import GSlogo from '../Assets/meta.png'
const data = [
    {
        state: "Largest Divisible Subset",
        link: "https://leetcode.com/problems/largest-divisible-subset/"
    },
    {
        state: "Find Subsequence of Length K With the Largest Sum",
        link: "https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/description/"
    },
    {
        state: " Amount of Time for Binary Tree to Be Infected",
        link: "https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/description/?envType=daily-question&envId=2024-01-10"
    },
    {
        state: " K-diff Pairs in an Array",
        link: "https://leetcode.com/problems/k-diff-pairs-in-an-array/description/"
    },
    {
        state: "Count the Number of Square-Free Subsets",
        link: "https://leetcode.com/problems/count-the-number-of-square-free-subsets/description/"
    },
    {
        state: " Rotate Function",
        link: "https://leetcode.com/problems/rotate-function/description/"
    },
    {
        state:  " Get Equal Substrings Within Budget",
        link: "https://leetcode.com/problems/get-equal-substrings-within-budget/description/"
    },
    {
        state: "Friends Of Appropriate Ages",
        link: "https://leetcode.com/problems/friends-of-appropriate-ages/description/"
    },
    {
        state: "Maximum Length of Repeated Subarray",
        link: "https://leetcode.com/problems/maximum-length-of-repeated-subarray/description/"
    },
    {
        state: "Verify Preorder Serialization of a Binary Tree",
        link: "https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/description/"
    },
    {
        state:  "Battleships in a Board",
        link: "https://leetcode.com/problems/battleships-in-a-board/description/"
    },
    {
        state: "Word Break",
        link: "https://leetcode.com/problems/word-break/"
    },
    {
        state: "Extra Characters in a String",
        link: "https://leetcode.com/problems/extra-characters-in-a-string/description/"
    }
];


const Walmart= () => {
  

    return (
        <div className="p-4">
            <div className="bg-yellow-300 rounded-md shadow-md">
                <div className="flex justify-between p-4 border-b">
                    <h2 className="text-lg font-bold hover:text-blue-400"><a href="https://www.metacareers.com/"target='balnk'>Meta</a></h2>
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
                                    <option value="rgb(254 249 195)" defaultValue="Pending">Pending</option>
                                    <option value="rgb(120 217 120)">Done</option>
                                    <option value="#ffa8a8">Revisit</option>
                                </select>


                                <span className={`font-medium text-black hover:text-red-400`}><a href={item.link} target='blank'>{item.state}</a></span>
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

export default Walmart;
