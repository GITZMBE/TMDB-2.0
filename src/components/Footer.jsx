import React from "react";
import Providers from "./Providers";

function Footer() {
  return (
    <footer
      id='footer'
      className="space-y-8 bg-tertiary"
    >
      <div className='grid justify-start sm:justify-between sm:grid-cols-2 md:grid-cols-4 gap-4 py-4 px-12 text-gray-400'>
        <div id='basics'>
          <ul>
            <li>
              <h3 className="uppercase text-lg font-bold">The Basics</h3>
            </li>
            <li>
              <a href='./#' className='hover:text-white'>
                About TMDB
              </a>
            </li>
            <li>
              <a href='./#' className='hover:text-white'>
                Contact Us
              </a>
            </li>
            <li>
              <a href='./#' className='hover:text-white'>
                Support Forums
              </a>
            </li>
            <li>
              <a href='./#' className='hover:text-white'>
                API
              </a>
            </li>
            <li>
              <a href='./#' className='hover:text-white'>
                System Status
              </a>
            </li>
          </ul>
        </div>
        <div id='involved'>
          <ul>
            <li>
              <h3 className="uppercase text-lg font-bold">Get Involved</h3>
            </li>
            <li>
              <a href='./#' className='hover:text-white'>
                Contribution Bible
              </a>
            </li>
            <li>
              <a href='./#' className='hover:text-white'>
                Add New Movie
              </a>
            </li>
            <li>
              <a href='./#' className='hover:text-white'>
                Add New TV Show
              </a>
            </li>
          </ul>
        </div>
        <div id='community'>
          <ul>
            <li><h3 className="uppercase text-lg font-bold">Community</h3></li>
            <li>
              <a href='./#' className='hover:text-white'>
                Guidelines
              </a>
            </li>
            <li>
              <a href='./#' className='hover:text-white'>
                Discussions
              </a>
            </li>
            <li>
              <a href='./#' className='hover:text-white'>
                Leaderboard
              </a>
            </li>
            <li>
              <a href='./#' className='hover:text-white'>
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div id='legal'>
          <ul>
            <li><h3 className="uppercase text-lg font-bold">Legal</h3></li>
            <li>
              <a href='./#' className='hover:text-white'>
                Terms of Use
              </a>
            </li>
            <li>
              <a href='./#' className='hover:text-white'>
                API Terms of Use
              </a>
            </li>
            <li>
              <a href='./#' className='hover:text-white'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='./#' className='hover:text-white'>
                DMCA Takedown Request
              </a>
            </li>
          </ul>
        </div>        
      </div>
      <Providers />
    </footer>
  );
}

export default Footer;
