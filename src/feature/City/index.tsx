import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { city } from './citySlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import './styles/city.css'
import './styles/reset.css'


function City() {

    // sử dụng hook useDispatch() đã được export 
    const dispatch = useAppDispatch()

    // sử dụng hook useSelector() đã dược export
    const getState = useAppSelector((state) => state.city)

    useEffect(() => {
        const getCities = async () => {
            const action = city()
            const data = await dispatch(action)
            console.log(data)
        }
        
      getCities();
    }, [])
    

    return (
        <div className='City'>
            {
                getState.cities.map((city) =>{
                    return(
                        <ul key={city.code} className='City__list'>
                            <li className='City__item'>{city.code}</li>
                            <li className='City__item'>{city.name}</li>
                            <li className='City__item City__item--number'>{city.person}</li>
                            <li className='City__item City__item--number'>{city.square}</li>
                        </ul>
                    )
                })
            }
            
        </div>
    );
}

export default City;