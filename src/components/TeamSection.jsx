import React from 'react';
import './TeamSection.css';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Balkrishna Poudel",
      role: "Research and Development Team",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThm_sNap5JDlWIBTFj4sfaTiP7c1SoAC41M5KRZ57yS6oFRHIc_kgugzTb-uRvF1o_5lw",
    },
    {
      id: 2,
      name: "Hari Prasad Gajurel",
      role: "AI Engineer",
      photo: "https://img.freepik.com/free-vector/young-prince-vector-illustration_1308-174367.jpg",
    },
    {
      id: 3,
      name: "Pawan Shah",
      role: "Climate Expert",
      photo: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg",
    },
    {
      id: 4,
      name: "Rabin Jung Kunwar",
      role: "AI Engineer",
      photo: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg",
    },
    {
      id: 5,
      name: "Rekha Wagle",
      role: "Business Expert",
      photo: "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg",
    }
  ];

  return (
    <section className="team" id="team">
      <h2 className="team-title">Meet the Team</h2>
      <div className="team-container">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <img src={member.photo} alt={member.name} className="team-photo" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-description">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
