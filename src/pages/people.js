import React from 'react';
import peopleData from "../data/peopleData.json"
import Profile from "../components/profile"
import PeopleHero from '../components/people-hero';


const people = peopleData;

export default function People() {
  return (
    <div>
      <PeopleHero />
      <div className="center profile-container">
        <div id="people" className = "flex flex-wrap justify-center">
          {people.map((person) => (
            <Profile
              key={person.name}
              name={person.name}
              imgSrc={person.imgSrc}
              positions={person.positions}
              linkedin={person.linkedin}
              github={person.github}
              email={person.email}
              personalSite={person.personalSite}
            />
          ))}
          </div>
      </div>
    </div>
  );
}