import React from 'react'
import { Carousel } from 'antd';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCarouselAction } from '../../../../redux/actions/CarouselAction';
import homeCarousel from './HomeCarousel.css'
const contentStyle = {
    height: '700px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

export default function HomeCarousel(props) {

    const { carouselImg } = useSelector(state => state.CarouselReducer)

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getCarouselAction())

    }, [])

    const renderImg = () => {
        return carouselImg.map((item, index) => {
            return <div key={index}>
                <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }} >
                    <img className="w-full opacity-0" src={item.hinhAnh} alt={item.hinhAnh} />
                </div>
            </div>
        })
    }

    return (
        <Carousel effect='fade' autoplay>
            {renderImg()}
        </Carousel>
    )
}
