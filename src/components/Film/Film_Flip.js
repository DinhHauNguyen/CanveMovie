import React from 'react'
import { NavLink } from 'react-router-dom';
import './Film_Flip.css'
import { history } from '../../App'

export default function Film_Flip(props) {
    const { film } = props
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={film.hinhAnh} alt={film.tenPhim} style={{ width: 300, height: '100%' }} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/300/450" }} />
                </div>
                <div className="flip-card-back" style={{ position: 'relative', backgroundColor: 'rgba(0,0,0,.9' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0 }}>
                        <img src={film.hinhAnh} alt={film.tenPhim} style={{ width: 300, height: 370 }} />
                    </div>
                    <div className='w-full h-full' style={{ position: 'absolute', backgroundColor: 'rgba(0,0,0,.9)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <i className="go fa fa-play js-video-btn" data-video-id="686mNAJVXzA"></i>
                    </div>
                </div>
            </div>
            <div onClick={() => { history.push(`/detail/${film.maPhim}`) }} className='btnTicket'>ĐẶT VÉ</div>
        </div>
    )
}
