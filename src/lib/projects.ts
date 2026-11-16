export type Project = {
  title: string;
  tags: string[];
  image: string;
  alt: string;
};

// The six projects shown on the home page.
export const homeProjects: Project[] = [
  {
    title: "Urban Noir Kitchen",
    tags: ["Residential", "Kitchen", "Modern"],
    image: "/images/projects-7-850x520.jpg",
    alt: "Dark matte kitchen with fluted glass cabinets and a sculptural pendant light",
  },
  {
    title: "Slate & Oak Galley",
    tags: ["Residential", "Compact", "Contemporary"],
    image: "/images/projects-8-850x520.jpg",
    alt: "Grey galley kitchen with a timber floor and white hexagon tiles",
  },
  {
    title: "Alpine Open Plan",
    tags: ["Residential", "Open Plan", "Warm Tones"],
    image: "/images/projects-9-850x520.jpg",
    alt: "Open-plan kitchen with a timber-topped island and large snowy windows",
  },
  {
    title: "Classic White Residence",
    tags: ["Residential", "Living", "Bright"],
    image: "/images/projects-10-850x520.jpg",
    alt: "White open-plan kitchen and living area with dark hardwood floors",
  },
  {
    title: "Nordic Light Kitchen",
    tags: ["Residential", "Minimal", "Scandinavian"],
    image: "/images/projects-11-850x520.jpg",
    alt: "White minimalist kitchen with an oak canopy and a view of the staircase",
  },
  {
    title: "Warm Oak Dining Kitchen",
    tags: ["Residential", "Dining", "Statement"],
    image: "/images/projects-12-850x520.jpg",
    alt: "Kitchen and dining area with oak cabinetry, a dark table and a vintage rug",
  },
];

// The full portfolio shown on the Projects page.
export const projects: Project[] = [
  ...homeProjects,
  {
    title: "Grand Dining Residence",
    tags: ["Residential", "Dining", "Elegant"],
    image: "/images/h1-slider02.jpg",
    alt: "Elegant dining room with a long table, grey chairs and a patterned rug",
  },
  {
    title: "Midnight Blue Kitchen",
    tags: ["Residential", "Kitchen", "Bold"],
    image: "/images/rev_home1_1.jpg",
    alt: "Navy blue kitchen with timber floors, pendant lights and a leafy plant",
  },
  {
    title: "Azure Beam Kitchen",
    tags: ["Residential", "Open Plan", "Classic"],
    image: "/images/rev_home1_2.jpg",
    alt: "Bright open-plan kitchen with a marble island and navy cabinetry",
  },
];
