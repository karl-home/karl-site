import React from 'react';
import HomeHero from '../components/home-hero';
import "../index.css"



export default function Home() {
  return (
    <div>
      <HomeHero />
      <div className="center text-container">
        <p>
          Karl is a privacy-preserving framework that IoT devices can use to execute as much functionality as possible on a home cloud that runs on user-owned hardware. Rather than relying on third-party cloud services and local device state, devices (sensors) in the home cloud express their functionality in terms of small, ephemeral units of computation (similar to serverless) called modules. When functionality must be offloaded to the cloud, users define pipeline policies that justify under which conditions data can be exfiltrated. For details, see our preprint&nbsp;
          <a className="link" target="_blank" rel="noopener noreferrer" href="http://www.ginayuan.com/preprints/preprint-karl.pdf">
            "The IoT Home Cloud for User-Defined Pipeline Policies".
          </a>
        </p><br />
        <p>
          Karl's&nbsp;
          <a className="link" target="_blank" rel="noopener noreferrer" href="https://github.com/karl-home/karl">
            GitHub repository 
          </a>
          &nbsp;contains more details about the project, explanations of the installation procedure, and instructions for building and configuring Karl using the web UI.
        </p>
      </div>
    </div>
  );
}
