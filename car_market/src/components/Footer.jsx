import React from "react";
import { TiSocialYoutube } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f7fafc" }}>
      <div
        style={{
          margin: "0 auto",
          maxWidth: "80rem",
          padding: "4rem 1rem",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <p
          style={{
            margin: "1.5rem auto 0",
            maxWidth: "28rem",
            textAlign: "center",
            lineHeight: "1.625",
            color: "#6b7280", // Equivalent to text-gray-500
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          consequuntur amet culpa cum itaque neque.
        </p>

        <ul
          style={{
            marginTop: "3rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          {["About", "Careers", "History", "Services", "Projects", "Blog"].map(
            (link) => (
              <li key={link}>
                <a
                  href="#"
                  style={{
                    color: "#4b5563",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#4b5563cc")} // Equivalent to hover:text-gray-700/75
                  onMouseLeave={(e) => (e.target.style.color = "#4b5563")}
                >
                  {link}
                </a>
              </li>
            )
          )}
        </ul>

        <ul
          style={{
            marginTop: "3rem",
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          {["Facebook", "Instagram", "Twitter", "GitHub", "Dribbble"].map(
            (platform) => (
              <li key={platform}>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#4b5563",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#4b5563cc")}
                  onMouseLeave={(e) => (e.target.style.color = "#4b5563")}
                >
                  <span style={{ display: "none" }}>{platform}</span>
                  <svg
                    style={{ width: "1.5rem", height: "1.5rem" }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {/* Add respective SVG path here */}
                  </svg>
                </a>
              </li>
            )
          )}
        </ul>
        <ul
          style={{
            marginTop: "3rem",
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#4b5563",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#4b5563cc")}
            onMouseLeave={(e) => (e.target.style.color = "#4b5563")}
          >
            <li>
              <TiSocialYoutube style={{fontSize:"1.5rem"}}/>
            </li>
          </a>
          <a href="#"
            target="_blank"
            rel="noreferrer"
            style={{
              color: '#4b5563',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#4b5563cc')}
            onMouseLeave={(e) => (e.target.style.color = '#4b5563')}>
            <li>
              <SlSocialInstagram style={{fontSize:"1.5rem"}}/>
            </li>
          </a>
          <a href="#"
            target="_blank"
            rel="noreferrer"
            style={{
              color: '#4b5563',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#4b5563cc')}
            onMouseLeave={(e) => (e.target.style.color = '#4b5563')}>
            <li>
              <SlSocialLinkedin style={{fontSize:"1.5rem"}}/>
            </li>
          </a>
          <a href="#"
            target="_blank"
            rel="noreferrer"
            style={{
              color: '#4b5563',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.target.style.color = '#4b5563cc')}
            onMouseLeave={(e) => (e.target.style.color = '#4b5563')}>
            <li>
              <TiSocialFacebook style={{fontSize:"2rem"}} />
            </li>
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
