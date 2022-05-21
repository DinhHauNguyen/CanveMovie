import React from 'react'
import { Fragment } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { datVeAction, layChiTietPhongVeAction } from '../../redux/actions/ManageTicketAction'
import { CloseOutlined, SmileOutlined } from '@ant-design/icons'
import _ from 'lodash'
import style from './Checkout.module.css'
import './Checkout.css'
import { DAT_VE } from '../../redux/actions/types/ManageTicketType'
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe'
import { history } from '../../App'
import { HomeOutlined } from '@ant-design/icons'

import { Tabs } from 'antd';
import { layThongTinNguoiDungAction } from '../../redux/actions/ManageUserAction'
import { TOKEN, USER_LOGIN } from '../../util/settings/config'




function Checkout(props) {

    const dispatch = useDispatch()
    const { userLogin } = useSelector(state => state.ManageUserReducer)
    const { chiTietPhongVe, danhSachGheDangDat, danhSachGheKhachDat } = useSelector(state => state.ManageTicketReducer)

    useEffect(() => {
        const action = layChiTietPhongVeAction(props.match.params.id)
        dispatch(action)
    }, [])

    const { thongTinPhim, danhSachGhe } = chiTietPhongVe

    const renderSeats = () => {
        return danhSachGhe.map((ghe, index) => {
            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : ''
            let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : ''
            let classGheDangDat = ''
            let indexGheDangDat = danhSachGheDangDat?.findIndex(gheDD => gheDD.maGhe === ghe.maGhe)

            let classGheDaDuocDat = ''
            if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
                classGheDaDuocDat = 'gheDaDuocDat'
            }
            if (indexGheDangDat != -1) {
                classGheDaDat = 'gheDangDat';
            }
            return <Fragment key={index}>
                <button onClick={() => {
                    dispatch({
                        type: DAT_VE,
                        gheDuocChon: ghe
                    })
                }} disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat} `} >{ghe.daDat ? <CloseOutlined /> : ghe.stt}</button>
                {(index + 1) % 16 === 0 ? <br /> : ''}
            </Fragment>
        })
    }

    return (
        <div>
            <div className='grid grid-cols-12 min-h-screen'>
                <div className='col-span-9'>
                    <div className='flex flex-col items-center mt-5'>
                        <div className='bg-black' style={{ width: '80%', height: 10 }}></div>
                        <div className={`${style['trapezoid']}`}>
                            <h3 className='text-center opacity-40'>Screen</h3>
                        </div>
                        <div className='mt-10'>
                            {renderSeats()}
                        </div>
                    </div>
                    <div className='mt-5 flex justify-center'>
                        <table className='divide-y divide-gray-200 w-2/3'>
                            <thead className='bg-gray-50 p-5'>
                                <tr >
                                    <th className='font-light'>Ghế chưa đặt</th>
                                    <th className='font-light'>Ghế đang đặt</th>
                                    <th className='font-light'>Ghế đã đặt</th>
                                    <th className='font-light'>Ghế vip</th>
                                    <th className='font-light'>Ghế đã được đặt</th>
                                </tr>
                            </thead>
                            <tbody className='bg-white divide-y divide-gray-200'>
                                <tr>
                                    <td className='text-center'><button className='ghe '><SmileOutlined className='mb-2' /></button></td>
                                    <td className='text-center'><button className='ghe gheDangDat'><SmileOutlined className='mb-2' /></button></td>
                                    <td className='text-center'><button className='ghe gheDaDat'><SmileOutlined className='mb-2' /></button></td>
                                    <td className='text-center'><button className='ghe gheVip'><SmileOutlined className='mb-2' /></button></td>
                                    <td className='text-center'><button className='ghe gheDaDuocDat'><SmileOutlined className='mb-2' /></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className='col-span-3 flex flex-col justify-between border-l shadow-2xl'>
                    <div className='pl-5 pr-6'>
                        <h3 className='text-green-600 font-semibold text-center text-2xl my-8'>{danhSachGheDangDat.reduce((total, ghe) => {
                            return total += ghe.giaVe
                        }, 0).toLocaleString()} đ</h3>
                        <hr />
                        <h3 className='text-xl mt-6'>{thongTinPhim.tenPhim}</h3>
                        <span className='font-extralight italic'>Địa điểm: </span><span className='italic'>{thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}</span><br />
                        <span className='font-extralight italic'>Ngày chiếu: </span><span className='italic'>{thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}</span>
                        <div className='mb-4'></div>
                        <hr />
                        <div className='grid grid-cols-2 my-5'>
                            <div>
                                <span className='text-blue-600'>Ghế : </span>
                                {_.sortBy(danhSachGheDangDat, ['stt']).map((item, index) => {
                                    return <span key={index} className='text-yellow-600'>{`${item.stt}, `}</span>
                                })}
                            </div>
                            <div className='text-right text-green-600'>
                                <span>{danhSachGheDangDat.reduce((total, ghe) => {
                                    return total += ghe.giaVe
                                }, 0).toLocaleString()} đ</span>
                            </div>
                        </div>
                        <hr />
                        <div className='my-3'>
                            <i className='text-blue-600'>Email: </i> <br />
                            <div>{userLogin.email}</div>
                        </div>
                        <hr />
                        <div className='my-3'>
                            <i className='text-blue-600'>Phone: </i> <br />
                            <div>{userLogin.soDT}</div>
                        </div>
                    </div>
                    <div><button onClick={() => {
                        const thongTinDatVe = new ThongTinDatVe();
                        thongTinDatVe.maLichChieu = props.match.params.id;
                        thongTinDatVe.danhSachVe = danhSachGheDangDat
                       
                        dispatch(datVeAction(thongTinDatVe))
                    }} className='border border-solid border-2 bg-green-700 w-full p-3 text-white font-semibold'>ĐẶT VÉ</button></div>
                </div>
            </div>
        </div>
    )
}
const { TabPane } = Tabs;
function callback(key) {
    
}


export default function (props) {
    const { userLogin } = useSelector(state => state.ManageUserReducer)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const operations = <Fragment>
        {_.isEmpty() ? <div className="flex"> <button className='flex items-center' onClick={() => {
            history.push('/profile')
        }}><div className='rounded-full w-10 h-10 bg-pink-200 flex justify-center items-center mr-2'>{userLogin.taiKhoan.slice(0, 1)}</div>{userLogin.taiKhoan}</button> <button onClick={() => {
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN);
            history.push('/login')
            window.location.reload()

        }} className='text-red-500 ml-3'>Đăng xuất</button></div> : ''
        }
    </Fragment>
    return <div className='p-8'>
        <Tabs tabBarExtraContent={operations} defaultActiveKey="2" onChange={callback}>
            <TabPane tab={<button onClick={() => { history.push('/home') }} className='bg-green-700 p-1 px-2 rounded-lg text-white border-2 border-yellow-500'>HOME</button>} key="1">
            </TabPane>
            <TabPane tab="01 CHỌN GHẾ & THANH TOÁN" key="2">
                <Checkout {...props} />
            </TabPane>
            <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="3">
                <KetQuaDatVe {...props} />
            </TabPane>

        </Tabs>
    </div>
}

function KetQuaDatVe(props) {

    const dispatch = useDispatch()
    const { thongTinNguoiDung } = useSelector(state => state.ManageUserReducer)
    const { userLogin } = useSelector(state => state.ManageUserReducer)
    useEffect(() => {
        const action = layThongTinNguoiDungAction()
        dispatch(action)
    }, [])

    return <div className='p-5'>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-18 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-green-600">LỊCH SỬ ĐẶT VÉ</h1>
                    <p className="lg:w-2/3 mx-auto font-extralight leading-relaxed text-base">Hãy xem lịch sử đặt vé để biết thêm thông tin bạn nhé !</p>
                </div>
                {/* <div className="flex flex-wrap -m-2">
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Holden Caulfield</h2>
                                <p className="text-gray-500">UI Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Henry Letham</h2>
                                <p className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Oskar Blinde</h2>
                                <p className="text-gray-500">Founder</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">John Doe</h2>
                                <p className="text-gray-500">DevOps</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Martin Eden</h2>
                                <p className="text-gray-500">Software Engineer</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Boris Kitua</h2>
                                <p className="text-gray-500">UX Researcher</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/100x90" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Atticus Finch</h2>
                                <p className="text-gray-500">QA Engineer</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Alper Kamu</h2>
                                <p className="text-gray-500">System</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98" />
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Rodrigo Monchi</h2>
                                <p className="text-gray-500">Product Manager</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>

    </div>
}

