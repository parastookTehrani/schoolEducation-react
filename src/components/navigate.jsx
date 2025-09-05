import style from "./style.module.css";
import container from "../assets/Container.png";

export const Navigate = () => {
  return (
    <section className={style.navigate}>
      <div className={style.mainInfo}>
        <div className={style.mainInfoDiv}>Explore More</div>
        <h2 className={style.mainInfoHeader}>Navigate through our Pages</h2>
        <p className={style.mainInfoText}>
          Your gateway to discovering a wealth of valuable information about our
          kindergarten school, Feel free to explore and learn more about the
          enriching experiences that await your child at our kindergarten school
        </p>
      </div>
      <div className={style.navigateCards}>
        <div className={style.navigateCard}>
          <h2 className={style.navigateHeader}>About Us</h2>
          <img src={container} alt="" className={style.navigateImage} />
          <p>
            Discover our Mission, Values, and our unwavering commitment to
            providing the best learning experience for your child. Learn about
            our passionate educators and our engaging approach to early
            education.
          </p>
          <button className={style.navigateBtn}>
            <span>Learn More</span>
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.5 9C0.5 8.37868 1.00368 7.875 1.625 7.875L17.5819 7.875L11.3453 1.93593C10.8974 1.50529 10.8834 0.793119 11.3141 0.345249C11.7447 -0.102618 12.4569 -0.116583 12.9047 0.31406L21.1547 8.18906C21.3753 8.40116 21.5 8.69398 21.5 9C21.5 9.30602 21.3753 9.59883 21.1547 9.81093L12.9047 17.6859C12.4569 18.1166 11.7447 18.1026 11.3141 17.6547C10.8834 17.2069 10.8974 16.4947 11.3453 16.0641L17.5819 10.125L1.625 10.125C1.00368 10.125 0.5 9.62132 0.5 9Z"
                fill="#262626"
              />
            </svg>
          </button>
        </div>
        <div className={style.navigateCard}>
          <h2 className={style.navigateHeader} >Academics</h2>
          <img src={container} alt="" className={style.navigateImage} />
          <p>
            Delve into our comprehensive academic programs designed to stimulate
            young minds, foster creativity, and encourage a love for learning.
            Explore our well-rounded curriculum that nurtures both intellectual
            and social development.
          </p>
          <button className={style.navigateBtn}>
            <span>Learn More</span>
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.5 9C0.5 8.37868 1.00368 7.875 1.625 7.875L17.5819 7.875L11.3453 1.93593C10.8974 1.50529 10.8834 0.793119 11.3141 0.345249C11.7447 -0.102618 12.4569 -0.116583 12.9047 0.31406L21.1547 8.18906C21.3753 8.40116 21.5 8.69398 21.5 9C21.5 9.30602 21.3753 9.59883 21.1547 9.81093L12.9047 17.6859C12.4569 18.1166 11.7447 18.1026 11.3141 17.6547C10.8834 17.2069 10.8974 16.4947 11.3453 16.0641L17.5819 10.125L1.625 10.125C1.00368 10.125 0.5 9.62132 0.5 9Z"
                fill="#262626"
              />
            </svg>
          </button>
        </div>
        <div className={style.navigateCard}>
          <h2 className={style.navigateHeader} >Student Life</h2>
          <img src={container} alt="" className={style.navigateImage} />
          <p>
            Peek into the vibrant and enriching world of Student Life at Little
            Learners Academy. Discover the array of extracurricular activities,
            arts and crafts, sports, and social events that make our school
            experience truly memorable.
          </p>
          <button className={style.navigateBtn}>
            <span>Learn More</span>
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.5 9C0.5 8.37868 1.00368 7.875 1.625 7.875L17.5819 7.875L11.3453 1.93593C10.8974 1.50529 10.8834 0.793119 11.3141 0.345249C11.7447 -0.102618 12.4569 -0.116583 12.9047 0.31406L21.1547 8.18906C21.3753 8.40116 21.5 8.69398 21.5 9C21.5 9.30602 21.3753 9.59883 21.1547 9.81093L12.9047 17.6859C12.4569 18.1166 11.7447 18.1026 11.3141 17.6547C10.8834 17.2069 10.8974 16.4947 11.3453 16.0641L17.5819 10.125L1.625 10.125C1.00368 10.125 0.5 9.62132 0.5 9Z"
                fill="#262626"
              />
            </svg>
          </button>
        </div>
        <div className={style.navigateCard}>
          <h2 className={style.navigateHeader} >Admissions</h2>
          <img src={container} alt="" className={style.navigateImage} />
          <p>
            Learn about our Enrollment Process and how to secure your child's
            place at Little Learners Academy. Find information about our
            admission requirements, application deadlines, and available spaces.
          </p>
          <button className={style.navigateBtn}>
            <span>Learn More</span>
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.5 9C0.5 8.37868 1.00368 7.875 1.625 7.875L17.5819 7.875L11.3453 1.93593C10.8974 1.50529 10.8834 0.793119 11.3141 0.345249C11.7447 -0.102618 12.4569 -0.116583 12.9047 0.31406L21.1547 8.18906C21.3753 8.40116 21.5 8.69398 21.5 9C21.5 9.30602 21.3753 9.59883 21.1547 9.81093L12.9047 17.6859C12.4569 18.1166 11.7447 18.1026 11.3141 17.6547C10.8834 17.2069 10.8974 16.4947 11.3453 16.0641L17.5819 10.125L1.625 10.125C1.00368 10.125 0.5 9.62132 0.5 9Z"
                fill="#262626"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
