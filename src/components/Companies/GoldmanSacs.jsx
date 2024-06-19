import { React} from 'react';
import { Link } from 'react-router-dom';
import GSlogo from '../Assets/Goldman_Sachs.png'
const data = [
    {
        state: "Minimize the Maximum of Two Arrays",
        link: "https://leetcode.com/problems/minimize-the-maximum-of-two-arrays/description/"
    },
    {
        state: "Employee Priority Systems",
        link: "https://leetcode.com/problems/high-access-employees/description/"
    },
    {
        state: "Kth Smallest Element Query",
        link: "https://leetcode.com/problems/query-kth-smallest-trimmed-number/description/"
    },
    {
        state: "Combination Sum",
        link: "https://leetcode.com/problems/combination-sum-iii/description/"
    },
    {
        state: "Flip Matrix",
        link: "https://leetcode.com/problems/random-flip-matrix/description/"
    },
    {
        state: "Combinations in a Phone Number",
        link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/"
    },
    {
        state:  "Find Missing and Repeating",
        link: "https://practice.geeksforgeeks.org/problems/find-missing-and-repeating2512/1"
    },
    {
        state: "Finding consecutive integers from a Data Stream",
        link: "https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/"
    },
    {
        state: " K - divisible Elements Subarrays",
        link: "https://leetcode.com/problems/k-divisible-elements-subarrays/description/"
    },
    {
        state: "Map of Highest Peak",
        link: "https://leetcode.com/problems/map-of-highest-peak/description/"
    },
    {
        state:  "Maximum Sum BST",
        link: "https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/description/"
    },
    {
        state: "Run Length Encoding",
        link: "https://practice.geeksforgeeks.org/problems/run-length-encoding/1"
    },
    {
        state: "Ways to reach a position after K steps",
        link: "https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/"
    }
];


const GoldmanSacs = () => {
  

    return (
        <div className="p-4">
            <div className="bg-yellow-300 rounded-md shadow-md">
                <div className="p-4 border-b">
                    <h2 className="text-lg font-bold hover:text-blue-300"><a href="https://www.goldmansachs.com/careers/" target='blank'></a> Goldman Sachs</h2>
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
                                    <option value="rgb(254 249 195)" selected>Pending</option>
                                    <option value="rgb(120 217 120)">Done</option>
                                    <option value="#ffa8a8">Revisit</option>
                                </select>


                                <span className={`font-medium text-black hover:text-red-300`}><a href={item.link} target='blank'>{item.state}</a></span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="bg-yellow-100 text-yellow-600 py-1 px-3 rounded-full">Medium</span>
                                <button className="text-black">+ Note</button>
                                <div className="flex space-x-2">
                                    <img src={GSlogo} alt="Goldman Sachs" className="h-6 w-6" />
                                    
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );


}

export default GoldmanSacs;
