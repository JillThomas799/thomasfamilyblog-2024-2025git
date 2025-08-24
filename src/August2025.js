import React from "react";
import { Link } from "react-router-dom";
import "./August2025.css";
import blog2025 from "./imagesresized/blog2025.png";
// import London16082025Titled from "./imagesresized/London16082025Titled.jpg";

export default function August2025() {
  return (
    <div>
      <div className="backgroundColorAugust2025">
        {/*General div for August 2025 function export*/}
        <div className="august2025Header">
          {/*div for august2025header */}{" "}
          <button id="backbuttonAugust2025">
            <Link to="/" className="backbuttonLink">
              Back
            </Link>
          </button>
          <div id="august2025Title">August 2025</div>
        </div>{" "}
        {/*Closing div for August2025header */}
        <div className="announcementNewBlog">
          <span
            style={{
              textDecoration: "underline",
              fontWeight: "bold",
              paddingBottom: "5%",
            }}
          >
            FROM AUGUST 2025:{" "}
          </span>
          <br />
          <br />
          <div className="updateAnnouncement">
            THE THOMAS FAMILY BLOG HAS BEEN UPDATED AND WE HAVE A NEW, LIVE,
            SECURE SITE AND WEB ADDRESS.
            <br />
            <br /> WEB ADDRESS:
          </div>
          <Link
            to="https://thomfamblog-current.vercel.app/"
            target="_blank"
            className="linkAugust2025"
          >
            https://thomfamblog-current.vercel.app/
          </Link>
          <br />
          <br />
          <img className="pictureAugust2025" src={blog2025} alt="" />
        </div>
        <div className="announcementNewBlogDetail">
          <span style={{ textDecoration: "underline", fontWeight: "bold" }}>
            SOME TIPS FOR USING THE NEW SITE:
          </span>
          <br />
          <br />
          <div>
            <div style={{ marginBottom: "5%" }}>
              <span style={{ fontWeight: "bold" }}>1. TO REGISTER: </span>
              <br />
              Click the <span style={{ color: "#0000EE" }}> sign in</span>{" "}
              button located in the top right hand corner of the page once
              loaded.
              <br />
              <br />
              Click the <span style={{ color: "#0000EE" }}> sign up </span>{" "}
              button towards the bottom of the pop up window which appears.
              <br />
              <br />
              Fill in the requested details and{" "}
              <span style={{ color: "#0000EE" }}>
                {" "}
                create a secure password{" "}
              </span>{" "}
              for yourself. Keep this password safe. Alternatively, you can log
              in using your google account if you have one.
              <br />
              <br />
              <span style={{ color: "#0000EE" }}>Sign back in</span> using your
              newly created log in.
            </div>
            <div>
              <br />
              <span style={{ fontWeight: "bold" }}>2. POSTING PHOTOS: </span>
              <br />
              This is an interactive site and you are welcome and encouraged to
              add suitable photos of your own together with comments.
              <br />
              <br />
              <span style={{ color: "#0000EE" }}>Photo Size:</span> Please
              ensure your images are no larger than 2MB, as the system is not
              set to accept larger images than this.
              <br />
              <br />
              <span style={{ color: "#0000EE" }}>
                Maximum number of photos:
              </span>{" "}
              which can be added in one <br /> post = 2
            </div>
          </div>{" "}
          {/*Closure of all items of the list*/}
        </div>
        <br />
        <br />
        <div className="announcementNewBlogDetail">
          <span style={{ textDecoration: "underline", fontWeight: "bold" }}>
            SOME INFORMATION ABOUT THE NEW SITE:
          </span>
          <div className="newBlogInfo">
            The new blog uses a number of cloud-based software services:
            <br />
            <br />
          </div>
          <div>
            <div>
              {" "}
              <Link
                to="https://clerk.com/"
                target="_blank"
                className="linkAugust2025"
              >
                Clerk.js
              </Link>{" "}
              is an authentication and user management system. This enables us
              to confirm all our users are verified users whom we know and
              trust.
            </div>
            <br />
            <div>
              <Link
                to="https://neon.com/"
                target="_blank"
                className="linkAugust2025"
              >
                Neon Postgres
              </Link>{" "}
              :{""} a cloud-native, serverless, fully managed PostgreSQL
              database service jointly developed and managed by Microsoft and
              Neon. <br />
              <br /> It provides a fully managed PostgreSQL service with minimal
              operational overhead. This enables us to store your data safely in
              a Neon PostGres database.
              <br />
              <br />
              To find out more about the security of a Neon Postgres database
              click{" "}
              <Link
                to="https://neon.com/docs/security/security-overview"
                target="_blank"
                className="linkAugust2025"
              >
                here
              </Link>{" "}
              .
            </div>
            <br />
            <div>
              <Link
                to="https://vercel.com/"
                target="_blank"
                className="linkAugust2025"
              >
                Vercel
              </Link>{" "}
              to build and deploy our site. Vercel is a cloud platform and
              frontend framework designed to simplify building, deploying, and
              scaling modern web applications.
            </div>
          </div>
          {/*Closure of list div*/}
          <div className="newBlogInfo">
            The new site has been set up in just under 6 weeks using tools and
            services which are at the forefront of app and web development (see
            above). We have aimed to make it as responsive as possible for all
            users, whichever device they are using.
            <br />
            <br />
            The format is slightly different to previously in that we will be
            posting up to 3 months blog entries on one page, at the bottom of
            which you can enter your own suitable comments and entries should
            you wish to do so. You are also free to post replies to existing
            comments and add likes should you wish. Over time we will be
            archiving the older blog entries, and they will be able to be
            retrieved using a search bar facility.
            <br />
            <br />
            We hope you enjoy our new blog layout and design and welcome any
            feedback.
          </div>
        </div>
      </div>
    </div>
  );
}
