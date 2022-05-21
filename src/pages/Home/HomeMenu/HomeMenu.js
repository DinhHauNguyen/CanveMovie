import React from 'react'
import { Tabs } from 'antd';
import './HomeMenu.css'
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment'
const { TabPane } = Tabs;

export default class HomeMenu extends React.PureComponent {
    state = {
        tabPosition: 'left'
    };

    renderTheaterSystem = () => {
        return this.props.arrayTheaterSystem?.map((item, index) => {
            let { tabPosition } = this.state
            return <TabPane key={index} tab={<img src={item.logo} width="50" className="rounded-full" />} >
                <Tabs tabPosition={tabPosition}>
                    {item.lstCumRap?.splice(0, 4).map((cumRap, index) => {
                        return <TabPane key={index} tab={
                            <div style={{ width: '400px', display: 'flex', alignItems: 'center' }}>
                                <img src={item.logo} width="50" />
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                                    <div className='ml-2'>{cumRap.tenCumRap}</div>
                                    <div className='ml-2 font-thin text-black' >{cumRap.diaChi}</div>
                                    <div className='ml-2 text-red-300'>[Chi tiết]</div>
                                </div>
                            </div>
                        } >
                            {/*Load Film */}
                            {cumRap.danhSachPhim?.splice(0, 4).map((film, index) => {
                                return <Fragment key={index}>
                                    <div className='my-5' style={{ display: 'flex' }}>
                                        <img style={{ width: 75, height: 75 }} src={film.hinhAnh} alt={film.tenPhim} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/75/75" }}></img>
                                        <div>
                                            <h4 className='ml-4 text-2xl text-green-700 ' >{film.tenPhim}</h4>
                                            <h1 className='ml-4 font-thin text-red-500'>Calendar:</h1>
                                            <div className='ml-4 grid grid-cols-6 gap-5' >
                                                {film.lstLichChieuTheoPhim?.splice(0, 10).map((lichChieu, index) => {
                                                    return <NavLink key={index} to={`/checkout/${lichChieu.maLichChieu}`} className='text-black border-gray-700 border-2 border-double rounded-md p-1'>
                                                        {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                    </NavLink>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <hr width={500}></hr>
                                </Fragment>
                            })}
                        </TabPane>
                    })}
                </Tabs>
            </TabPane>
        })
    }

    render() {
        const { tabPosition } = this.state
        return (
            <Tabs className='border shadow-2xl' style={{ marginBottom: '20px', marginRight: '50px' }} tabPosition={tabPosition}>
                {this.renderTheaterSystem()}
            </Tabs>
        )
    }
}
