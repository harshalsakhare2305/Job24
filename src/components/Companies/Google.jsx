import { React} from 'react';
import { Link } from 'react-router-dom';
import GSlogo from '../Assets/logogoogle.png'
const data = [
    {
        state: "Destroying Asteroids",
        link: "https://leetcode.com/problems/destroying-asteroids/description/"
    },
    {
        state: "Find the City With the Smallest Number of Neighbors at a Threshold Distance",
        link: "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/description/"
    },
    {
        state: "Integer to English Words",
        link: "https://leetcode.com/problems/integer-to-english-words/"
    },
    {
        state: "Repeated DNA Sequences",
        link: "https://leetcode.com/problems/repeated-dna-sequences/description/"
    },
    {
        state: " Stone Game VI",
        link: "https://leetcode.com/problems/stone-game-vi/"
    },
    {
        state: "Merge k Sorted Lists",
        link: "https://leetcode.com/problems/merge-k-sorted-lists/description/"
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
        state: "Query Kth Smallest Trimmed Number",
        link: "https://leetcode.com/problems/query-kth-smallest-trimmed-number/description/"
    },
    {
        state: "Map of Highest Peak",
        link: "https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/description/"
    },
    {
        state:  "Count Subtrees With Max Distance Between Cities",
        link: "https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/description/"
    },
    {
        state: "Minimum Number of Days to Disconnect Island",
        link: "https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/description/"
    },
    {
        state: "Ways to reach a position after K steps",
        link: "https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/"
    }
];


const Google= () => {
  

    return (
        <div className="p-4">
            <div className="bg-yellow-300 rounded-md shadow-md">
                <div className="flex justify-between  p-4 border-b">
                    <h2 className="text-lg font-bold hover:text-blue-400"><a href="https://www.google.com/about/careers/applications/" target='blank'>Google</a></h2>
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

export default Google;
