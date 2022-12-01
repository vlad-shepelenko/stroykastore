import './reviews.scss'
import { leftArrow, rightArrow } from '../../assets/images';

const Reviews = () => {
    return(
        <>
            <section className='reviews_container'>
                <div className='header_reviews'>
                    <h2 className='reviews_title'>Отзывы</h2>
                    <div className='reviews_buttons'>
                        <button className='button_review'>
                            <img src={leftArrow} alt='Назад' />
                        </button>
                        <button className='button_review'>
                            <img src={rightArrow} alt='Вперед' />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Reviews;