import seriesData from '../SeriesData.json'
import {Data} from './SeriesData'
// NetflixCard component to display information about a web series
const NetflixCard = (props) => {

    return (
        <div className='sm:px-10 lg:px-40 w-full h-full grid place-content-center place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 '>
            {seriesData.map((values) => {
                return ( 
                   <Data key={values.id} values={values} />
                )
            })}
        </div>
    );
};

export default NetflixCard;

