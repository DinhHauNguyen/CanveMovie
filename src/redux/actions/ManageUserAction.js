import { ManageUserServiceExport } from "../../services/ManageUserService"
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "./types/ManageUserType"
import { history } from '../../App'

export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch) => {
        try {
            const result = await ManageUserServiceExport.chuyenThongTinDangNhap(thongTinDangNhap)
            if (result.data.statusCode === 200) {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data.content
                })
                history.goBack()
            }

        } catch (errors) {
            console.log('errors', errors)
        }
    }
}

export const layThongTinNguoiDungAction = () => {
    return async (dispatch) => {
        try {
            const result = await ManageUserServiceExport.layThongTinNguoiDung()
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content
                })

            }

        } catch (errors) {
            console.log('errors', errors)
        }
    }
}