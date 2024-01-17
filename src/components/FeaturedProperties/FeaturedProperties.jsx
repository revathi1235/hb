// import React from 'react'

// const FeaturedProperties = () => {
//   return (
//     <>
//     <div className='fp'>
//         <div className="fpItem">
// <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Hotel_Room_(9638499309).jpg" alt="" className="fpImg" />
// <span className="fpName">a hotel</span>
// <span className="fpCity">cambridge</span>
// <span className="fpPrice">starting from $120</span>
// <div className="fpRting">
//     <button>8.9</button>
//     <span>Excellent</span>
// </div>
// </div>
   
//     <div className='fp'>
// <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Hotel_Room_(9638499309).jpg" alt="" className="fpImg" />
// <span className="fpName">a hotel</span>
// <span className="fpCity">cambridge</span>
// <span className="fpPrice">starting from $120</span>
// <div className="fpRting">
//     <button>8.9</button>
//     <span>Excellent</span>
// </div>
//     </div>
//     <div className='fp'>
// <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Hotel_Room_(9638499309).jpg" alt="" className="fpImg" />
// <span className="fpName">a hotel</span>
// <span className="fpCity">cambridge</span>
// <span className="fpPrice">starting from $120</span>
// <div className="fpRting">
//     <button>8.9</button>
//     <span>Excellent</span>
// </div>
//     </div>
//     <div className='fp'>
// <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Hotel_Room_(9638499309).jpg" alt="" className="fpImg" />
// <span className="fpName">a hotel</span>
// <span className="fpCity">cambridge</span>
// <span className="fpPrice">starting from $120</span>
// <div className="fpRting">
//     <button>8.9</button>
//     <span>Excellent</span>
// </div>
//     </div>
//     <div className='fp'>
// <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Hotel_Room_(9638499309).jpg" alt="" className="fpImg" />
// <span className="fpName">a hotel</span>
// <span className="fpCity">cambridge</span>
// <span className="fpPrice">starting from $120</span>
// <div className="fpRting">
//     <button>8.9</button>
//     <span>Excellent</span>
// </div>
//     </div>
//     </div>
//     </>
//   )
// }

// export default FeaturedProperties















import React from 'react';
import './featuredproperties.css'; // Assuming you save the CSS in a file named FeaturedProperties.css

const FeaturedProperties = () => {
  return (
    <div className='fp'>
      <div className='fpItem'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/5/52/Hotel_Room_(9638499309).jpg'
          alt=''
          className='fpImg'
        />
        <span className='fpName'>a hotel</span>
        <span className='fpCity'>cambridge</span>
        <span className='fpPrice'>starting from $120</span>
        <div className='fpRating'>
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='fpItem'>
        <img
          src='https://tse4.mm.bing.net/th?id=OIP.2hV-GiD0xTRkH3fWiirwlAHaFj&pid=Api&P=0&h=180'
          alt=''
          className='fpImg'
        />
        <span className='fpName'>a hotel</span>
        <span className='fpCity'>cambridge</span>
        <span className='fpPrice'>starting from $120</span>
        <div className='fpRating'>
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='fpItem'>
        <img
          src='https://tse4.mm.bing.net/th?id=OIP.VlpcxVKGQXAcO2fCfNXd7gHaFj&pid=Api&P=0&h=180'
          alt=''
          className='fpImg'
        />
        <span className='fpName'>a hotel</span>
        <span className='fpCity'>cambridge</span>
        <span className='fpPrice'>starting from $120</span>
        <div className='fpRating'>
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='fpItem'>
        <img
          src='https://tse2.mm.bing.net/th?id=OIP.4slnPJ8b_nN_Qyt1F2270AHaE7&pid=Api&P=0&h=180'
          alt=''
          className='fpImg'
        />
        <span className='fpName'>a hotel</span>
        <span className='fpCity'>cambridge</span>
        <span className='fpPrice'>starting from $120</span>
        <div className='fpRating'>
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='fpItem'>
        <img
          src='https://tse1.mm.bing.net/th?id=OIP.XoPWAKPsQU1ib1_fKgKeDgHaE8&pid=Api&P=0&h=180'
          alt=''
          className='fpImg'
        />
        <span className='fpName'>a hotel</span>
        <span className='fpCity'>cambridge</span>
        <span className='fpPrice'>starting from $120</span>
        <div className='fpRating'>
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      
      
    </div>
  );
};

export default FeaturedProperties;
