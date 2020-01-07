import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>Designed and Developed by Alexander Engström, 2024</p>
      <p>
        Contribute to this project on{" "}
        <a
          href="https://github.com/alexandengstrom/python-quizzer"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contribute to Python Quizzer on GitHub"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
