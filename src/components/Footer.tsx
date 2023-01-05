import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer">
        <p>Designed and Developed by Alexander Engström, 2024</p>
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
