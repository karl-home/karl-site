import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'

export default function Profile({
  name,
  positions,
  imgSrc,
  email,
  linkedin,
  github,
  personalSite
}) {
  return (
    <div className="w-full lg:w-1/2 2xl:w-1/3 py-2 px-2">
      <div className="h-full flex items-center rounded-xl shadow-material-2 bg-white px-4 sm:px-6 py-5">
        <div className="space-x-4 relative flex items-center ">
          <div className="flex-shrink-0">
            <img
              className="h-28 w-28 sm:h-32 sm:w-32 rounded-full bg-black object-cover"
              src={imgSrc}
              alt={name}
            />
          </div>
          <div className="flex-1 min-w-0 space-y-2">
            <span className="" aria-hidden="true" />
            <p className="text-xl font-medium text-black break-words">
              {name}
            </p>
            <div className="-mx-0.5">
              {positions.map((pos) => (
                <span
                  key={pos}
                  className={"text-xs text-white whitespace-nowrap mx-0.5 my-0.5 inline-flex items-center px-2.5 py-0.5 rounded-full bg-cardinal"}
                >
                  {pos}
                </span>
              ))}
            </div>
            <div>
              <ul className="flex">
                {[
                  { href: linkedin, icon: faLinkedin, sr: 'linkedin' },
                  { href: email, icon: faEnvelope, sr: 'email' },
                  { href: github, icon: faGithub, sr: 'github' },
                  { href: personalSite, icon: faLink, sr: 'personalSite' },
                ].map(({ href, sr, icon }) => (
                  <div key={sr + href}>
                    {href && (
                      <li className="mr-2">
                        <a
                          target="_blank"
                          href={href}
                          className="px-2 py-1 rounded-full inline-block bg-gray-200 hover:bg-gray-300 text-black" rel="noreferrer"
                        >
                          <FontAwesomeIcon icon={icon} className="w-5 h-5" />
                        </a>
                      </li>
                    )}
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}