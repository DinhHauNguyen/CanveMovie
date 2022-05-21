import React, { Component } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU } from "../../redux/actions/types/ManageFilmType";
import Film_Flip from "../Film/Film_Flip";
import styleSlick from './MultipleRowSlick.module.css'

function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
        <div className={`${className} ${styleSlick['slick-next']}`} style={{ ...style, display: "block" }} onClick={onClick}>

        </div>
    )
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
        <div className={`${className} ${styleSlick['slick-prev']}`} style={{ ...style, display: "block", left: '-50px' }} onClick={onClick}>

        </div>
    )
}

const MultipleRowSlick = (props) => {
    const dispatch = useDispatch()
    const { dangChieu, sapChieu } = useSelector(state => state.ManageFilmReducer)
    const renderFilm = () => {
        return props.arrFilm.slice(0, 12).map((item, index) => {
            return <div className="mt-2 ml-0.5" key={index}>
                <Film_Flip film={item} />
            </div>
        })
    }
    let activeClassDangChieu = dangChieu === true ? 'activeFilm' : 'none_activeFilm'
    let activeClassSapChieu = sapChieu === true ? 'activeFilm' : 'none_activeFilm'
    const settings = {
        className: "center variable-width",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        rows: 1,
        slidesPerRow: 2,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div>
            <button className={`${styleSlick[activeClassDangChieu]} px-6 py-3 ml-16 mb-5 border-gray-700 border-2 border-solid border-double rounded-md `} onClick={() => {
                const action = { type: SET_FILM_DANG_CHIEU }
                dispatch(action)
            }}>PHIM ĐANG CHIẾU</button>
            <button className={`${styleSlick[activeClassSapChieu]} px-6 py-3 ml-4 mb-5 border-gray-700 border-2 border-solid border-double rounded-md `} onClick={() => {
                const action = { type: SET_FILM_SAP_CHIEU }
                dispatch(action)
            }}>PHIM SẮP CHIẾU</button>
            <Slider {...settings}>
                {renderFilm()}
            </Slider>
        </div>
    );
}

export default MultipleRowSlick