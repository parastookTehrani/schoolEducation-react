import style from "./style.module.css";
import headerImage from "../assets/Image Container.png";


export const Header = () => {
  return (
    <div className={style.container}>
    <header> 
      <div  className={style.headerImage}>
        <img src={headerImage} alt="header image" className={style.image}/>
      </div>
      <div className={style.headerContent}>
        <p className={style.welcome}>Welcome to Little Learners Academy</p>
        <h1>
          Where Young Minds Blossom and <span className={style.headerSpan}>Dreams Take Flight.</span>
        </h1>
        <p>
          Our kinder garden school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a lifetime. Join
          us as we embark on an exciting educational journey together!
        </p>
        <div className={style.infoBox}>
          <div className={style.infoDiv}>
            <h2 className={style.infoHeader}>+7000</h2>
            <p>Students Passed Out</p>
          </div>

          <div className={style.infoDiv}>
            <h2 className={style.infoHeader}>+37</h2>
            <p>Awards & Recognitions</p>
          </div>
          <div className={style.infoDiv}>
            <h2 className={style.infoHeader}>+15</h2>
            <p>Experience Educators</p>
          </div>
        </div>
      </div>
    </header>
    </div>
  );
};
