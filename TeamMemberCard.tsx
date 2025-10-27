import React, { useState } from "react";
import type { TeamMember } from "../constants/teamMembers";

interface CardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<CardProps> = ({ member }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg overflow-hidden transition-colors duration-300 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      aria-label={`Card de ${member.name}`}
      style={{ minHeight: 300 }}
    >
      {/* Pokémon image */}
      <img
        src={member.pokemonImg}
        alt={`Pokémon do ${member.name}`}
        className={`w-full h-40 object-contain transition-all duration-500 ${
          hovered ? "opacity-0 scale-75" : "opacity-100 scale-100"
        } absolute top-0 left-0`}
        style={{ zIndex: 2 }}
        onError={e => (e.currentTarget.src = "/default-pokemon.png")}
      />

      {/* Real member image */}
      <img
        src={member.realImg}
        alt={`Foto real de ${member.name}`}
        className={`w-full h-40 object-cover rounded-t-xl transition-all duration-500 ${
          hovered ? "opacity-100 scale-100" : "opacity-0 scale-110"
        } absolute top-0 left-0`}
        style={{ zIndex: 3 }}
        onError={e => (e.currentTarget.src = "/default-user.png")}
      />

      {/* Feedback visual discreto no topo direito */}
      <div
        className={`absolute top-2 right-2 flex items-center bg-white/80 dark:bg-black/80 rounded-full px-2 py-1 shadow transition-all duration-500 ${hovered ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
        style={{ zIndex: 4 }}
      >
        {/* Ícone de olho SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 5-4.03 9-9 9S3 17 3 12 7.03 3 12 3s9 4.03 9 9z" />
        </svg>
        <span className="text-xs text-purple-700 dark:text-purple-300 font-medium">Perfil revelado!</span>
      </div>

      {/* Card Content */}
      <div className="relative pt-44 pb-4 px-4 flex flex-col items-center">
        <h3 className="text-lg font-bold text-purple-600 dark:text-purple-400">{member.name}</h3>
        <span className="text-sm text-gray-500 dark:text-gray-300 mb-2">{member.role}</span>
        {/* Animated content on hover */}
        <div
          className={`transition-opacity transition-transform duration-500 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          } text-center`}
        >
          <p className="text-gray-700 dark:text-gray-200 text-sm mb-2">{member.description}</p>
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-1 bg-purple-600 text-white rounded-full text-xs hover:bg-purple-800 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
      {/* Card border for focus accessibility */}
      <span className="absolute inset-0 rounded-xl ring-2 ring-transparent group-focus:ring-purple-500"></span>
    </div>
  );
};

export default TeamMemberCard;
