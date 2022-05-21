import { ManageTicketServiceExport } from "../../services/ManageTicketService"
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe"
import { SET_CHI_TIET_PHONG_VE } from "./types/ManageTicketType"


export const layChiTietPhongVeAction = (maLichChieu) => {

    return async (dispatch) => {
        try {
            const result = await ManageTicketServiceExport.layChiTietPhongVe(maLichChieu)
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_CHI_TIET_PHONG_VE,
                    chiTietPhongVe: result.data.content
                })
            }
        } catch (errors) {
            console.log('errors', errors)
        }
    }
}
export const datVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
    return async (dispatch) => {
        try {
            const result = await ManageTicketServiceExport.datVe(thongTinDatVe)
            
        } catch (errors) {
            console.log('errors', errors)
        }
    }
}