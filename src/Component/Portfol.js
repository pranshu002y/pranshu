import React from 'react'
import { useNavigate } from "react-router-dom";
const Portfol = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="title">
        <div className="title-behind">PORTFOLIO</div>
        <div className="title-front">PROJECTS</div>
      </div>

     
      <div className="bigcontainer">
        <div className="insideof">
       <a href="https://lms-1.netlify.app/accounts/login"><img src="https://raw.githubusercontent.com/Akg-0007/lMS/main/images/Dashboard.png" alt="lms"/></a>
       <a href="https://scout-verse.vercel.app/"><img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1699117685/Screenshot_1323_ume1ow.png" alt="" /></a>
       <a href="https://listed-hazel.vercel.app/"><img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1699117996/Screenshot_1327_agwdlt.png" alt="" /></a>
        </div>
        <div className="insideof">
        <a href="https://lms-1.netlify.app/accounts/login"> <img src="https://res-conhttps://codeverse-seven.vercel.app/sole.cloudinary.com/dpiatasuq/thumbnails/v1/image/upload/v1699117685/U2NyZWVuc2hvdF8xMzI0X2ZmMGhxcw==/grid_landscape" alt="" /></a>
        <a href="https://porsche911.vercel.app/"> <img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1699117826/Screenshot_1325_vo2pak.png" alt="" /></a>
        <a href="https://nemesis-flame.vercel.app/"> <img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1717567912/Screenshot_Capture_-_2024-06-05_-_11-41-43_ly2rw3.png
        " alt="" /></a>
        </div>
        <div className="insideof">
        <a href="https://thence-virid.vercel.app/"> <img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1717567796/Screenshot_Capture_-_2024-06-05_-_11-39-31_ye4m3r.png" alt="" /></a>
        <a href="https://introcom.vercel.app/intro"> <img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1699117933/Screenshot_1326_i76afs.png" alt="" /></a>
        <a href="https://pranshu002.vercel.app/"> <img src="https://res.cloudinary.com/dpiatasuq/image/upload/v1699118000/Screenshot_1328_gakybz.png" alt="" /></a>
        </div>
      </div>
    </div>
  );
}

export default Portfol