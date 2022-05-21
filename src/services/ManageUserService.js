import { baseService } from "./baseService";


export class ManageUserService extends baseService {
    constructor() {
        super();

    }
    chuyenThongTinDangNhap = (thongTinDangNhap) => {
        return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap)
    }
    layThongTinNguoiDung = () => {
        return this.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan')
    }

}

export const ManageUserServiceExport = new ManageUserService()