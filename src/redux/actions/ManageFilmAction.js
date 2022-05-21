import { ManageFilmServiceExport } from "../../services/ManageFilmService"
import { SET_FILM_LIST } from "./types/ManageFilmType"


export const getManageFilmAction = () => {
    return async (dispatch) => {
        try {
            const result = await ManageFilmServiceExport.layDanhSachPhim()
            dispatch({
                type: SET_FILM_LIST,
                arrFilm: result.data.content
            })

        } catch (errors) {
            console.log('errors', errors.response?.data)
        }
    }
}