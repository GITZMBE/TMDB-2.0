import React from "react";

function Footer() {
  return (
    <footer id="footer" className="grid place-items-center px-12 py-4">
      <div id="basics">
        <ul>
          <li><h3>The Basics</h3></li>
          <li><a href="./#">About TMDB</a></li>
          <li><a href="./#">Contact Us</a></li>
          <li><a href="./#">Support Forums</a></li>
          <li><a href="./#">API</a></li>
          <li><a href="./#">System Status</a></li>
        </ul>
      </div>
      <div id="involved">
        <ul>
          <li><a href="./#">Contribution Bible</a></li>
          <li><a href="./#">Add New Movie</a></li>
          <li><a href="./#">Add New TV Show</a></li>
        </ul>
      </div>
      <div id="community"></div>
      <div id="legal"></div>
    </footer>
  );
}

export default Footer;