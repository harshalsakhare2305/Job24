import { React} from 'react';
import { Link } from 'react-router-dom';
import GSlogo from '../Assets/Adobelogo.png'
const data = [
    {
        state: "Trim a Binary Search Tree",
        link: "https://leetcode.com/problems/trim-a-binary-search-tree/description/"
    },
    {
        state: "Construct the Longest New String",
        link: "https://leetcode.com/problems/construct-the-longest-new-string/"
    },
    {
        state: "Short Encoding of Words",
        link: "https://leetcode.com/problems/short-encoding-of-words/"
    },
    {
        state: "Constrained Subsequence Sum",
        link: "https://leetcode.com/problems/constrained-subsequence-sum/"
    },
    {
        state: "Special Permutations",
        link: "https://leetcode.com/problems/special-permutations/description/"
    },
    {
        state: "Matrix Cells in Distance Order",
        link: "https://leetcode.com/problems/matrix-cells-in-distance-order/description/"
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
        state: " Erect the Fence",
        link: "https://leetcode.com/problems/erect-the-fence/"
    },
    {
        state: "Verify Preorder Serialization of a Binary Tree",
        link: "https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/description/"
    },
    {
        state:  "Last Moment Before All Ants Fall Out of a Plank",
        link: "https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/description/"
    },
    {
        state: "Airplane Seat Assignment Probability",
        link: "https://leetcode.com/problems/airplane-seat-assignment-probability/description/"
    },
    {
        state: " Cinema Seat Allocation",
        link: "https://leetcode.com/problems/cinema-seat-allocation/description/"
    }
];


const Adobe= () => {
  

    return (
        <div className="p-4">
            <div className="bg-yellow-300 rounded-md shadow-md">
                <div className="p-4 border-b">
                    <h2 className="text-lg font-bold hover:text-blue-400"><a href="https://www.adobe.com/careers.html" target='blank'>Adobe</a></h2>
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

export default Adobe;
