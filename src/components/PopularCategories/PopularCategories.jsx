import './popularcategories.scss';
import {popularCategoriesData} from '../../assets/data'
const PopularCategories = () => {
    return(
        <>
            <section className='popularCategories_container'>
                <div className='header_categories'>
                    <h2 className='title_categories'>Популярные категории</h2>
                    <button className='all_categories_button'>Все категории</button>
                </div>
                <div className='cart_categories_container'>
                {
                    popularCategoriesData.map((el) => (
                        <div className='cart_categories' key={el.id}>
                            <div className='cart_categories_name'>{el.name}</div>
                            <div className='cart_categories_iamge'>
                                <img src={el.image} alt={el.name} />
                            </div>
                        </div>
                    ))
                }
                
                </div>
            </section>
        </>
    )
}

export default PopularCategories;