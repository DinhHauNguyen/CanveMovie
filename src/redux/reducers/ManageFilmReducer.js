import { SET_FILM_DANG_CHIEU, SET_FILM_LIST, SET_FILM_SAP_CHIEU } from "../actions/types/ManageFilmType"
import { SET_CHI_TIET_PHIM } from "../actions/types/ManageTheaterType"


const stateDefault = {
    arrFilm: [
        {
            "maPhim": 10534,
            "tenPhim": "PHÙ THỦY TỐI THƯỢNG TRONG ĐA VŨ TRỤ HỖN LOẠN",
            "biDanh": "phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan",
            "trailer": "https://www.youtube.com/watch?v=aWzlQ2N6qqg",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan_gp01.jpg",
            "moTa": "Sau các sự kiện của Avengers: Endgame, Tiến sĩ Stephen Strange tiếp tục nghiên cứu về Viên đá Thời gian. Nhưng một người bạn cũ đã trở thành kẻ thù tìm cách tiêu diệt mọi phù thủy trên Trái đất, làm xáo trộn kế hoạch của Strange và cũng khiến anh ta mở ra một tội ác khôn lường.",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2022-05-04T00:00:00",
            "danhGia": 10,
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
        },
    ],
    arrFilmDefault: [],
    dangChieu: true,
    sapChieu: false,
    filmDetail: {}
}

export const ManageFilmReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_FILM_LIST: {
            state.arrFilm = action.arrFilm
            state.arrFilmDefault = state.arrFilm
            return { ...state }
        }
        case SET_FILM_DANG_CHIEU: {
            state.dangChieu = !state.dangChieu
            state.sapChieu = !state.sapChieu
            state.arrFilm = state.arrFilmDefault.filter(item => item.dangChieu == state.dangChieu)
            return { ...state }
        }
        case SET_FILM_SAP_CHIEU: {
            state.sapChieu = !state.sapChieu
            state.dangChieu = !state.dangChieu
            state.arrFilm = state.arrFilmDefault.filter(item => item.sapChieu == state.sapChieu)
            return { ...state }
        }
        case SET_CHI_TIET_PHIM: {
            state.filmDetail = action.filmDetail
            return {...state}
        }
        default: return { ...state }
    }
}