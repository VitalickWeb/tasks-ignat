import React from 'react'
import {Slider, SliderProps} from '@mui/material'

export type props = {
    value: number
    onChange: (event: Event, value: number | number[]) => void
}

const SuperRange: React.FC<SliderProps> = (props) => {

    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                borderRadius: '10px',
                width: '147px',
                color: '#00CC22',
                '& .MuiSlider-rail': {
                    opacity: 10,
                    background: '#8B8B8B',
                },
                '& .MuiSlider-thumb': {
                    margin: '0',
                    '&:hover, &.Mui-focusVisible': {
                        boxShadow: '0px 0px 0px 8px rgba(0, 102, 204, 0.16)', // изменение внешней тени бегунка при наведении или фокусировке
                    },
                    width: '20px',
                    height: '20px',
                    backgroundColor: '#00CC22',
                    borderRadius: '50%',
                    marginTop: '-7px',
                    marginLeft: '-10px',
                    boxShadow: 'none',
                    transform: 'translate(0, -15%)',

                    '&:hover, &:active': {
                        boxShadow: 'none',
                    },

                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '0px',
                        left: '0px',
                        width: '18px',
                        height: '18px',
                        backgroundColor: '#FFFFFF',
                        borderRadius: '50%',
                        transform: 'translate(5%, 5%)',
                    },

                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: '0px',
                        left: '0px',
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#00CC22',
                        borderRadius: '50%',
                        transform: 'translate(115%, 115%)',
                    },
                },
                boxSizing: 'border-box',
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
