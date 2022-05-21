import { ManageFilmServiceExport } from "../../services/ManageFilmService"
import { GET_CAROUSEL } from "./types/CarouselType"

export const getCarouselAction = () => {
    return async (dispatch) => {
        try {
            const result = await ManageFilmServiceExport.layDanhSachBanner()
            dispatch({
                type: GET_CAROUSEL,
                carouselImg: result.data.content
            })

        } catch (errors) {
            console.log('errors', errors)
        }
    }
}