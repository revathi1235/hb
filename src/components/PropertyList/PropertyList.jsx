import React from 'react'
import './propertylist.css'
const PropertyList = () => {
  return (
    <div    className='pList'>
        <div className="pListItem">
            <img src="https://momblogsociety.com/wp-content/uploads/2019/09/dfrnt-types-oof-hotels.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>122   hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>12298  hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://tse1.mm.bing.net/th?id=OIP.RkswnRbdhhTzSF6yqCW0DwHaE8&pid=Api&rs=1&c=1&qlt=95&w=154&h=102" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>1567   hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://tse1.mm.bing.net/th?id=OIP.O9nIGE4tMlRXgNs7GmFFLgHaE8&pid=Api&rs=1&c=1&qlt=95&w=155&h=103" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>14231   hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://tse1.mm.bing.net/th?id=OIP.xVtWemzAkOvvaF2i2vN-hgHaE8&pid=Api&rs=1&c=1&qlt=95&w=182&h=121" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>1223   hotels</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList