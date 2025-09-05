import style from "./style.module.css";
import logo from "../assets/shape-14.png";

export const Footer = () => {
  return (
    <footer>
      <div className={style.footerInfo}>
        <div className={style.info}>
          <div className={style.us}>
            <h3 className={style.usHeadedr}>
              <img src={logo} alt="" />
              Little Learners
            </h3>
            <p className={style.usText}>
              We believe in the power of play to foster creativity,
              problem-solving skills, and imagination.
            </p>
          </div>
          <div className={style.contact}>
            <p className={style.contactText}>
              <i className={style.contactIcon}>
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.25 4.22425V11.375C0.25 12.7557 1.36929 13.875 2.75 13.875H15.25C16.6307 13.875 17.75 12.7557 17.75 11.375V4.22425L10.3102 8.80256C9.50673 9.29703 8.49327 9.29703 7.68976 8.80256L0.25 4.22425Z"
                    fill="#262626"
                  />
                  <path
                    d="M17.75 2.75652V2.625C17.75 1.24429 16.6307 0.125 15.25 0.125H2.75C1.36929 0.125 0.25 1.24429 0.25 2.625V2.75652L8.34488 7.73799C8.74664 7.98522 9.25336 7.98522 9.65512 7.73799L17.75 2.75652Z"
                    fill="#262626"
                  />
                </svg>
              </i>
              hello@littlelearners.com
            </p>
            <p>
              <i className={style.contactIcon}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.25 2.75C0.25 1.36929 1.36929 0.25 2.75 0.25H3.89302C4.61 0.25 5.23498 0.737964 5.40887 1.43354L6.33037 5.11952C6.48284 5.72942 6.25495 6.37129 5.75202 6.74849L4.674 7.557C4.56206 7.64096 4.53772 7.7639 4.56917 7.84974C5.51542 10.4329 7.5671 12.4846 10.1503 13.4308C10.2361 13.4623 10.359 13.4379 10.443 13.326L11.2515 12.248C11.6287 11.7451 12.2706 11.5172 12.8805 11.6696L16.5665 12.5911C17.262 12.765 17.75 13.39 17.75 14.107V15.25C17.75 16.6307 16.6307 17.75 15.25 17.75H13.375C6.12626 17.75 0.25 11.8737 0.25 4.625V2.75Z"
                    fill="#262626"
                  />
                </svg>
              </i>
              +91 91813 23 2309
            </p>
            <p>
              <i className={style.contactIcon}>
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.61646 17.6259C6.64163 17.6405 6.66141 17.6517 6.67542 17.6596L6.69869 17.6726C6.88441 17.7745 7.1148 17.7738 7.3007 17.6729L7.32458 17.6596C7.33859 17.6517 7.35837 17.6405 7.38354 17.6259C7.43388 17.5967 7.50581 17.5542 7.59625 17.4985C7.77705 17.3872 8.03229 17.223 8.33718 17.0076C8.94591 16.5776 9.75812 15.9395 10.5721 15.1061C12.1922 13.4474 13.875 10.9551 13.875 7.75C13.875 3.95304 10.797 0.875 7 0.875C3.20304 0.875 0.125 3.95304 0.125 7.75C0.125 10.9551 1.80777 13.4474 3.42788 15.1061C4.24188 15.9395 5.05409 16.5776 5.66282 17.0076C5.96771 17.223 6.22295 17.3872 6.40375 17.4985C6.49419 17.5542 6.56612 17.5967 6.61646 17.6259ZM7 10.25C8.38071 10.25 9.5 9.13071 9.5 7.75C9.5 6.36929 8.38071 5.25 7 5.25C5.61929 5.25 4.5 6.36929 4.5 7.75C4.5 9.13071 5.61929 10.25 7 10.25Z"
                    fill="#262626"
                  />
                </svg>
              </i>
              Somewhere in the World
            </p>
          </div>
        </div>
        <div className={style.footerLinks}>
          <div className={style.footerLink}>
            <div className={style.linkHolder}>
              <h4>Home</h4>
              <ul className={style.linkList}>
                <li>Features</li>
                <li>Our Testimonials</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className={style.linkHolder}>
              <h4>About Us</h4>
              <ul className={style.linkList}>
                <li>Our Mission</li>
                <li>Our Vission</li>
                <li>Awards and Recognitions</li>
                <li>History</li>
                <li>Teachers</li>
              </ul>
            </div>
          </div>
          <div className={style.footerLink}>
            <div className={style.linkHolder}>
              <h4>Academics</h4>
              <ul className={style.linkList}>
                <li>Special Features</li>
                <li>Gallery</li>
              </ul>
            </div>
            <div className={style.linkHolder}>
              <h4>Contact Us</h4>
              <ul className={style.linkHolder}>
                <li>Information</li>
                <li>Map & Direction</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={style.policy}>
        <ul className={style.policyList}>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
        <div className={style.policyIcons}>
          <button className={style.policyBtn}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_170_39259)">
                  <path
                    d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
                    fill="#262626"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_170_39259">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
          </button>
          <button className={style.policyBtn}>
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.2918 17.1251C13.8371 17.1251 17.9652 10.8724 17.9652 5.45167C17.9652 5.27589 17.9613 5.0962 17.9535 4.92042C18.7566 4.33967 19.4496 3.62033 20 2.7962C19.2521 3.12896 18.458 3.34627 17.6449 3.44074C18.5011 2.92755 19.1421 2.12135 19.4492 1.17159C18.6438 1.64892 17.763 1.98563 16.8445 2.1673C16.2257 1.50976 15.4075 1.07439 14.5164 0.928498C13.6253 0.78261 12.711 0.934331 11.9148 1.3602C11.1186 1.78607 10.4848 2.46238 10.1115 3.28455C9.73825 4.10672 9.64619 5.02897 9.84961 5.9087C8.21874 5.82686 6.62328 5.40321 5.16665 4.6652C3.71002 3.9272 2.42474 2.89132 1.39414 1.62472C0.870333 2.52782 0.710047 3.59649 0.945859 4.61353C1.18167 5.63057 1.79589 6.51966 2.66367 7.10011C2.01219 7.07943 1.37498 6.90402 0.804688 6.58839V6.63917C0.804104 7.58691 1.13175 8.50561 1.73192 9.2391C2.3321 9.97258 3.16777 10.4756 4.09687 10.6626C3.49338 10.8277 2.85999 10.8518 2.2457 10.7329C2.50788 11.548 3.01798 12.2609 3.70481 12.7721C4.39164 13.2833 5.22093 13.5673 6.07695 13.5845C4.62369 14.726 2.82848 15.3452 0.980469 15.3423C0.652739 15.3418 0.325333 15.3217 0 15.2821C1.87738 16.4866 4.06128 17.1263 6.2918 17.1251Z"
                  fill="#262626"
                />
              </svg>
          </button>
          <button className={style.policyBtn}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                  fill="#262626"
                />
              </svg>
          </button>
        </div>
      </div>
      <div className={style.copyRight }>
        Copyright © [2023] Little Learners Academy. All rights reserved.
      </div>
    </footer>
  );
};
