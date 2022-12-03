import "./reviews.scss";
import { commas } from "../../assets/images";
import { reviewsData } from "../../assets/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Reviews = () => {
  return (
    <>
      <section className="reviews_container">
        <div className="header_reviews">
          <h2 className="reviews_title">Отзывы</h2>
        </div>
        <div className="user_reviews">
          <Carousel
            swipeable
            draggable
            showDots={false}
            responsive={responsive}
            ssr={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={false}
            customTransition="all 0.5"
            transitionDuration={500}
            containerClass="carousel-wrapper"
            itemClass="carousel-item"
            centerMode
          >
            {reviewsData.map((el) => (
              <div className="slide" key={el.id}>
                <div className="reviews_general">
                  <div className="username_reviews_header">
                    <div className="username_reviews_name">
                      <img src={el.image} alt="avatar" />
                      <span className="username_reviews_text">{el.name}</span>
                    </div>
                    <div className="username_reviews_commas">
                      <img src={commas} alt="commas" />
                    </div>
                  </div>
                  <span className="username_reviews_comment">{el.comment}</span>
                </div>
                <div className="reviews_date">{el.date}</div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Reviews;
