import * as Iconscg from 'react-icons/cg';
import * as Iconsbi from 'react-icons/bi';
import * as Iconsgi from 'react-icons/gi';
import { Solutionscard, data } from "../Common";
import React from 'react';
function Wearedifferent() {
    let arr = [];
    let iconarr = []
    for (let j = 0; j < data.Aboutpage.card.length; j++) {
        arr.push(data.Aboutpage.card[j].icon);
        if (data.Aboutpage.card[j].icon.slice(0, 2) === "Cg") {
            iconarr.push(Iconscg[arr[j]]);
        }
        else if (data.Aboutpage.card[j].icon.slice(0, 2) === "Bi") {
            iconarr.push(Iconsbi[arr[j]]);
        }
        else if (data.Aboutpage.card[j].icon.slice(0, 2) === "Gi") {
            iconarr.push(Iconsgi[arr[j]]);
        }
        else return

    }

    return (
        <div className='wearedifferent'>
            <div className="blog-head text-center">
                <h2>CE QUI NOUS DIFFERENCIE</h2>
                <h6></h6>
            </div>
            <div className='difference'>

                {data ? data.Aboutpage.card.map((d, i) => (
                    <Solutionscard className='differencei' key={i} icon={React.createElement(iconarr[i], { size: '4em' })} title={d.title} text={d.text} />
                )) : "loading..."}

            </div>
        </div>
    )
}
export default Wearedifferent