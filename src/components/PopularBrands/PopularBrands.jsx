import './popularbrands.scss'
import { popularBrandsData } from '../../assets/data';

const PopularBrands = () => {
    return(
        <>
            <section className='popularBrands_container'>
                <div className='header_brands'>
                    <h2 className='title_brands'>Популярные бренды</h2>
                    <button className='all_brands_button'>Все бренды</button>
                </div>
                <div className='cart_brands_container'>
                {
                    popularBrandsData.map((el) =>(
                        <div className='brand_cart' key={el.id}>
                            <img src={el.image} alt='bever' />
                        </div>
                    ))
                }
                </div>
            </section>
        </>
    )
}

export default PopularBrands;