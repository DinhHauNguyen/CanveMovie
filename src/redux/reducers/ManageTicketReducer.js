import { ThongTinLichChieu } from "../../_core/models/ThongTinPhongVe"
import { DAT_VE, SET_CHI_TIET_PHONG_VE } from "../actions/types/ManageTicketType"


const stateDefault = {
    chiTietPhongVe: new ThongTinLichChieu(),
    danhSachGheDangDat: [],
    danhSachGheKhachDat: [{ maGhe: 48041 }, { maGhe: 48042 }]
}

export const ManageTicketReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_CHI_TIET_PHONG_VE: {
            state.chiTietPhongVe = action.chiTietPhongVe
            return { ...state }
        }
        case DAT_VE: {
            let updateDanhSachGhe = [...state.danhSachGheDangDat]
            let index = updateDanhSachGhe.findIndex(gheDangDat => gheDangDat.maGhe === action.gheDuocChon.maGhe)
            if (index != -1) {
                updateDanhSachGhe.splice(index, 1)
            } else {
                updateDanhSachGhe.push(action.gheDuocChon)
            }
            return { ...state, danhSachGheDangDat: updateDanhSachGhe }
        }
        default: return { ...state }
    }
}