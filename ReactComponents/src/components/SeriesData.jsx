import style from './NetflixCard.module.css'
import styled from 'styled-components'
export const Data = ({ values }) => {
    {
        const { name, img_url, rating, description, cast, genre, watch_url } = values
        const ratingText = rating <= 8.5 ? style['top-rating-series'] : style['avg-rating-series']
        const ratingBtn = rating <= 8.5 ? style["top-rating-series-btn"] : style["avg-rating-series-btn"]
        // const WatchButton = styled.button({
        //     outline: 'none',
        //     padding: "8px 16px",
        //     fontSize: '12px',
        //     'transition:hover': 'colors',
        //     transitionDuration: '1s'
        // })

        const WatchButton = styled.button`
            outline: none;
            padding: 8px 16px;
            font-size: 12px;
            transition : all 0.5s linear; 
        `;

        return (
            <>
                <div className={`${style.box} xl:w-full w-[fit-content] sm:mx-0 mx-4 h-auto xl:h-[fit-content]`}>
                    <a href={watch_url} target="_blank">
                        <img src={img_url} alt={name} className='text-white rounded-[4px] hover:cursor-pointer transition-all duration-1000  hover:opacity-50' /> </a>
                    <div className='flex flex-col py-4 gap-2 px-2 text-white '>
                        <h1 className=' font-bold text-[20px]  '>Name : {name} </h1>
                        <h2 className=' text-sm'>rating : <span className={`${style.rating} ${ratingText}`}>{rating}</span>  </h2>
                        <p className=' text-[#ccc] text-xs'>summary : {description}</p>
                        <p className=' text-sm text-[#ccc]'>Cast : {cast.join(' , ')}</p>
                        <p className=" text-xs text-[#ccc]">Genre : {genre}</p>
                        {/* <a href={watch_url} target='_blank'> <button className={`outline-none py-2 px-4  hover:transition-colors hover:duration-1000  text-xs ${ratingBtn} `}>Watch NOW</button>
                        </a> */}
                        <a href={watch_url} target='_blank'>
                            <WatchButton className={`${ratingBtn} `}>Watch NOW</WatchButton>
                        </a>
                    </div>
                </div>
            </>
        )
    }
}