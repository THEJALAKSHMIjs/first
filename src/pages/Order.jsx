import React from 'react'
import photos from '../assets/page.jpg'

function Order() {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-md-6  p-5" ><img src={photos} alt="no image" style={{height:'400px' , width:'350px',border: '1px solid rgba(153, 148, 143, 0.42)'}} />
            <div className=' d-flex align-items-center mt-4 '>
                <img src={photos} alt="no image" style={{height:'90px' , width:'85px' ,border: '1px solid rgba(226, 220, 214, 0.42)'}}  />
                <img src={photos} alt="no image" style={{height:'90px' , width:'85px' ,border: '1px solid rgba(226, 220, 214, 0.42)',marginLeft:'48px'}} />
                <img src={photos} alt="no image" style={{height:'90px' , width:'85px',border: '1px solid rgba(226, 220, 214, 0.42)' ,marginLeft:'48px'}} />
            </div>
            </div>
            <div className="col-md-6"></div>
        </div>
    </div>
    </div>
  )
}

export default Order
