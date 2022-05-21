import { GET_CAROUSEL } from "../actions/types/CarouselType"

const stateDefault = {
    carouselImg: [
        {
            "maBanner": 1,
            "maPhim": 1282,
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png"
        },
    ]
}

export const CarouselReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_CAROUSEL: {
            state.carouselImg = action.carouselImg
            return { ...state }
        }

        default: return { ...state }
    }

}