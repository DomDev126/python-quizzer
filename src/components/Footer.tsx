import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        marginTop: "20px",
        padding: "10px",
        fontSize: "0.8rem",
      }}
    >
      <div className="footer">
        <p>Created and designed by Alexander Engström 2023</p>
        <p>
          Contribute to this project on{" "}
          <a
            href="https://github.com/alexandengstrom/python-quizzer"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
