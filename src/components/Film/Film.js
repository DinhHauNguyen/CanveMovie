import React from 'react'
import noPhoto from '../../assets/no-photo.jpeg'

export default function Film(props) {


    const { film } = props
    return (
        <div className="mr-2 h-full bg-gray-100 bg-opacity-75 rounded-lg overflow-hidden text-center relative">
            <div style={{ background: `url(${film.hinhAnh})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <img className="opacity-0 w-full" src={film.hinhAnh} alt={film.tenPhim} />
            </div>
            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 h-16">{film.tenPhim}</h1>
            <p className="leading-relaxed mb-3 h-16">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <a className="text-indigo-500 inline-flex items-center">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                </svg>
            </a>
        </div>
    )
}
