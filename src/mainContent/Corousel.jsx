import homeStyles from "./home.module.css";

function Corousel(){
    return(
      <section>
        <div
          id="carouselExampleIndicators"
          className={`carousel slide ${homeStyles.carouselContainer}`}
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img  src="/blog1.jpg" 
    className={`d-block ${homeStyles.responsiveImg} w-100`} 
 
              alt="First slide" />
                <div class="carousel-caption d-none d-md-block">
    <h3 className="text-dark">Want to Start writing a blog?</h3>
    <h5 className="text-dark">So you are in the right place to start writing blog</h5>
    </div>
            </div>
            <div className="carousel-item">
              <img  src="/blog2.png"
  className={`d-block ${homeStyles.responsiveImg} w-100`} 
alt="Second slide" />
  <div class="carousel-caption d-none d-md-block">
      <h3 className="text-dark">Curious to make a travel blog?</h3>
    <h5 className="text-dark">We will give you the most practical tips to start your journey</h5>
    </div>
            </div>
            <div className="carousel-item">
              <img src="/blog3.jpeg" 
  className={`d-block ${homeStyles.responsiveImg} w-100`} 

              alt="Third slide" />
             
              <div class="carousel-caption d-none d-md-block">
      <h3 >Want to Show the world the taste of your Dishes?</h3>
    <h5 >Perfect!You are just a blog away from showcasing it</h5>
    </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    )
}
export default Corousel;