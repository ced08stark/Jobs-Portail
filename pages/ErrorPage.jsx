import React from 'react'
import "../assets/vendor/css/core.css";
import "../assets/vendor/css/theme-default.css";
import "../assets/css/demo.css";
import "../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "../assets/vendor/libs/apex-charts/apex-charts.css";
import "../assets/vendor/fonts/boxicons.css";
import "../assets/vendor/css/pages/page-misc.css";

function ErrorPage() {
  return (
    <div>
      <div className="container-xxl container-p-y">
        <div className="misc-wrapper">
          <h2 className="mb-2 mx-2">Page Not Found :</h2>
          <p className="mb-4 mx-2">
            Oops! 😖 The requested URL was not found on this server.
          </p>
          <a href="index.html" class="btn btn-primary">
            Back to home
          </a>
          <div className="mt-3"></div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage
