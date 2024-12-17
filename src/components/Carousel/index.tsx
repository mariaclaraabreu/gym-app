import { Carousel as CarouselAntd } from 'antd';

import firstImg from '@/assets/img-carousel-01.jpg';
import secondImg from '@/assets/img-carousel-02.jpg';
import thirdImg from '@/assets/img-carousel-03.jpg';
import fourthImg from '@/assets/img-carousel-04.jpg';

import './styles.scss';

const Carousel = () => {
    const images = [
        {
            id: 1,
            src: firstImg,
            alt: 'Couple dressed in gym clothes',
        },
        {
            id: 2,
            src: secondImg,
            alt: 'White woman with blonde hair holding a gym weight',
        },
        {
            id: 3,
            src: thirdImg,
            alt: 'White woman with black hair putting on gym gloves',
        },
        {
            id: 4,
            src: fourthImg,
            alt: 'Black skinned woman with hand on chin dressed in gym clothes',
        },
    ];

    return (
        <CarouselAntd
            dots={false}
            autoplay={true}
        >
            {
                images.map(({ id, src, alt }) => {
                    return (
                        <div key={id} className='ga-carousel-item'>
                            <img src={src} alt={alt} />
                        </div>
                    );
                })
            }
        </CarouselAntd>
    );
};

export default Carousel;
