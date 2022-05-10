import './Aboutpage.css'
import * as Iconscg from 'react-icons/cg';
import * as Iconsbi from 'react-icons/bi';
import * as Iconsgi from 'react-icons/gi';
import React, { useEffect, useRef } from "react";
import { Wearedifferent, Keynumbers, Commercialplatform, Howwefunction, data } from "../Common"

function Aboutpage() {

  const topContainer = useRef();

  useEffect(() => {
    // To make sure page starts from the top
    topContainer.current.scrollIntoView({ block: "end", behavior: 'smooth' });
  }, []);

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
    <div style={{ marginTop: '70px' }} >
      <div ref={topContainer} />
      <div className='Aboutheader'>
        <h5 >
          NOTRE ENTREPRISE
        </h5>
      </div>


      <Wearedifferent />

      <Howwefunction />
      <Commercialplatform />
      <Keynumbers />

    </div >





  );
}
export default Aboutpage;