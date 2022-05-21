import React from 'react'
import './Detail.css'
import '../../assets/styles/circle.css'
import { Tabs, Radio, Space } from 'antd';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDetailInforFilm } from '../../redux/actions/ManageTheaterAction';
import moment from 'moment';
import { Rate } from 'antd';
import { NavLink } from 'react-router-dom';
const { TabPane } = Tabs;

export default function Detail(props) {
    const { filmDetail } = useSelector(state => state.ManageFilmReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        let { id } = props.match.params
        dispatch(getDetailInforFilm(id))
    })
    return (
        <div style={{ backgroundImage: `url(${filmDetail.hinhAnh})`, backgroundPosition: 'center', backgroundSize: '100%', backgroundRepeat: 'no-repeat', minHeight: '100vh', height: '1000px' }}>
            <div className='box1'>
                <div className='grid grid-cols-12' style={{ paddingTop: 150, marginTop: 50 }}>
                    <div className='col-span-5 col-start-4'>
                        <div className='grid grid-cols-3 flex flex-col items-center'>
                            <img className='col-span-1' src={filmDetail.hinhAnh} />
                            <div className='col-span-2 ml-5'>
                                <p className='text-2xl font-extralight text-white'>{filmDetail.tenPhim}</p>
                                <p className='text-sm text-green-500'>Ngày chiếu: {moment(filmDetail.ngayKhoiChieu).format('DD.MM.YYYY')} </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`c100 p${filmDetail.danhGia * 10} dark green`}>
                            <span>{filmDetail.danhGia}</span>
                            <div className="slice">
                                <div className="bar" />
                                <div className="fill" />
                            </div>
                        </div>
                        <h1 style={{ marginLeft: '50%', color: 'red', display: 'inline' }}><Rate allowHalf value={filmDetail.danhGia / 2}></Rate></h1>
                    </div>
                </div>
                <div className='ml-72 w-2/3 mt-20 container p-5 box2'>
                    <Tabs type="card">
                        <TabPane tab="Lịch chiếu" key="1">
                            <div style={{ minHeight: 300 }}>
                                <Tabs tabPosition={'left'} >
                                    {filmDetail.heThongRapChieu?.map((item, index) => {
                                        return <TabPane tab={<div className='text-green-500 flex flex-row justify-center items-center'><img src={item.logo} style={{ marginRight: '5px' }} width={50} />{item.tenHeThongRap}</div>} key={index}>
                                            {item.cumRapChieu?.map((cumRap, index) => {
                                                return <div key={index}>
                                                    <div className='flex flex-row items-start'>
                                                        <img src={item.logo} alt={item.tenPhim} width={50} />
                                                        <div className='ml-3 text-xl font-light text-white'>
                                                            {cumRap.tenCumRap}
                                                            {/* <p className='text-xs'>{cumRap.diaChi}</p> */}
                                                            <hr className='w-12 mt-1' />
                                                        </div>
                                                    </div>
                                                    <div className='grid grid-cols-4 ml-14'>
                                                        <div className='col-span-1'>
                                                            {cumRap.lichChieuPhim?.splice(0, 10).map((lichChieu, index) => {
                                                                return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className='btnLichChieu col-span-1'>
                                                                    {moment(lichChieu.ngayChieuGioChieu).format('HH:MM A')}
                                                                </NavLink>
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            })}
                                        </TabPane>
                                    })}
                                </Tabs>
                            </div>
                        </TabPane>
                        <TabPane tab="Thông tin" key="2" style={{ minHeight: 300 }}>
                            Thông tin
                        </TabPane>
                        <TabPane tab="Đánh giá" key="3" style={{ minHeight: 300 }}>
                            Đánh giá
                        </TabPane>
                    </Tabs>
                </div>


            </div>
        </div>
    )
}
