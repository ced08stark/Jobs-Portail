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
      <div class="container-xxl container-p-y">
        <div class="misc-wrapper">
          <h2 class="mb-2 mx-2">Page Not Found :</h2>
          <p class="mb-4 mx-2">
            Oops! 😖 The requested URL was not found on this server.
          </p>
          <a href="index.html" class="btn btn-primary">
            Back to home
          </a>
          <div class="mt-3">
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage
