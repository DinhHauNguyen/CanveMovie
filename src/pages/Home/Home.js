import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import MultipleRowSlick from '../../components/ReactSlick/MultipleRowSlick'
import { getManageFilmAction } from '../../redux/actions/ManageFilmAction'
import { getManageTheaterAction } from '../../redux/actions/ManageTheaterAction'
import HomeCarousel from '../../templates/HomeTemplate/Layouts/HomeCarousel/HomeCarousel'
import HomeMenu from './HomeMenu/HomeMenu'


export default function Home() {

    const dispatch = useDispatch();
    const { arrayTheaterSystem } = useSelector(state => state.ManageTheaterReducer)

    const { arrFilm } = useSelector(state => state.ManageFilmReducer)

    useEffect(() => {
        const action = getManageFilmAction();
        dispatch(action)
        dispatch(getManageTheaterAction())
    }, [])
    return (
        <div>
            {/* <MultipleRowSlick /> */}
            <HomeCarousel />

            <section className="text-gray-600 body-font ">
                <div className="container px-5 py-24 mx-auto">
                    <MultipleRowSlick arrFilm={arrFilm}></MultipleRowSlick>

                </div>
            </section>
            <div className='shadow-2xl' style={{ marginLeft: '100px' }}>
                <HomeMenu arrayTheaterSystem={arrayTheaterSystem} />
            </div>
        </div>

    )
}
