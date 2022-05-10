import * as Iconsmd from 'react-icons/md';
import * as Iconsbs from 'react-icons/bs'
import * as Iconsri from 'react-icons/ri';
import * as Iconsai from 'react-icons/ai';
import * as Iconsfi from 'react-icons/fi';
import * as Iconsfa from 'react-icons/fa';
import { Solutionscard, data } from '../Common';
import React from 'react';
import './Services.css';

function Services() {
    let arr = [];
    let iconarr = []
    for (let j = 0; j < data.services.length; j++) {
        arr.push(data.services[j].icon);
        if (data.services[j].icon.slice(0, 2) === "Md") {
            iconarr.push(Iconsmd[arr[j]]);
        }
        else if (data.services[j].icon.slice(0, 2) === "Bs") {
            iconarr.push(Iconsbs[arr[j]]);
        }
        else if (data.services[j].icon.slice(0, 2) === "Ri") {
            iconarr.push(Iconsri[arr[j]]);
        }
        else if (data.services[j].icon.slice(0, 2) === "Ai") {
            iconarr.push(Iconsai[arr[j]]);
        }
        else if (data.services[j].icon.slice(0, 2) === "Fi") {
            iconarr.push(Iconsfi[arr[j]]);
        }
        else if (data.services[j].icon.slice(0, 2) === "Fa") {
            iconarr.push(Iconsfa[arr[j]]);
        }
        else return

    }


    return (
        <div id='Services'>

            <div class="blog-head text-center">
            <h2>Nos services</h2>
            <h6>Développez des relations plus solides avec vos clients</h6>
          </div>
            <div className='servicescards'>
                {data ? data.services.map((d, i) => (

                    <div key={`${d}-${i}`} >
                        <Solutionscard icon={React.createElement(iconarr[i], { size: '4em' })} title={d.title} text={d.text} />
                    </div>
                )) : 'loading..'}

            </div>
        </div>
    );
}
export default Services;