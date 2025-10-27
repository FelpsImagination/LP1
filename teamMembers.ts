export type TeamMember = {
  id: string;
  name: string;
  role?: string;
  frontImage?: string;
  backImage?: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: 'felipe',
    name: 'Felipe Neves',
    role: 'Fullstack',
    frontImage: 'assets/images/team/download.jpeg',
    backImage: '/assets/images/team/felipe.jpg',
  },
  {
    id: 'maria',
    name: 'Maria Silva',
    role: 'Frontend',
    frontImage: '/assets/images/team/placeholder-front.jpg',
    backImage: '/assets/images/team/maria.jpg',
  },
];

export default teamMembers;
