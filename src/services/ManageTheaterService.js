import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";


export class ManageTheaterService extends baseService {
    constructor() {
        super();

    }
    layThongTinLichChieu = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    }
    layLichChieuPhim = (maPhim) => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    }
}

export const ManageTheaterServiceExport = new ManageTheaterService()