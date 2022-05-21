import { ManageTheaterServiceExport } from "../../services/ManageTheaterService"
import { SET_CHI_TIET_PHIM, SET_HE_THONG_RAP_CHIEU } from "./types/ManageTheaterType"



export const getManageTheaterAction = () => {
    return async dispatch => {
        try {
            const result = await ManageTheaterServiceExport.layThongTinLichChieu()
            if (result.status === 200) {
                dispatch({
                    type: SET_HE_THONG_RAP_CHIEU,
                    arrayTheaterSystem : result.data.content
                })
            }

        } catch (errors) {
            console.log('errors', errors)
        }
    }
}
export const getDetailInforFilm = (id) => {
    return async dispatch => {
        try{    
            const result = await ManageTheaterServiceExport.layLichChieuPhim(id)
            dispatch({
                type: SET_CHI_TIET_PHIM,
                filmDetail : result.data.content
            })
        }catch(errors){
            console.log('errors', errors)
        }
    }
}