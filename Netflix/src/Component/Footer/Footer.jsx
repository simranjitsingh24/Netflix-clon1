import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer-background">
      <div className="container-foot">
        <div className="display-icon">
          <FaFacebookF className="icon-foot" />
          <BsInstagram className="icon-foot" />
          <BsTwitter className="icon-foot" />
          <AiFillYoutube className="icon-foot" />
        </div>
        <div className="main-div">
          <div className="first-row ">
            <p>Audio Description</p>
            <p>Invester Relations</p>
            <p>Legel Notices</p>
            <p>Service code</p>
            <p>@1997-2023 Netflix,Isnc</p>
          </div>
          <div className="first-row">
            <p>Help center</p>
            <p>Jobs</p>
            <p>Cookie Preferences</p>
          </div>
          <div className="first-row ">
            <p>Gift Cards</p>
            <p>Terms Of Use</p>
            <p>Corporate Information</p>
          </div>
          <div className="first-row ">
            <p>Media Center</p>
            <p>Privacy</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </div>
  );
}
