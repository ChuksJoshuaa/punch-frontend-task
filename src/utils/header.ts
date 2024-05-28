import { HeroProps, QuestionsProps } from "../interface";

export const uniqueID = () => Math.floor(Math.random() * 100000000);

export const headerData = [
  "Find Work",
  "Find Talent",
  "Articles",
  "About Us",
  "Contact Us",
];

export const heroHeader = [
  {
    id: "it",
    name: "IT & Development",
  },
  {
    id: "design",
    name: "Design and Creative",
  },
];

export const heroData: HeroProps[] = [
  {
    type: "it",
    name: "Python Developer",
    isSelected: false,
    id: uniqueID(),
  },
  {
    type: "it",
    name: "Data Scientist",
    isSelected: false,
    id: uniqueID(),
  },
  {
    type: "it",
    name: "Shopify Developer",
    isSelected: false,
    id: uniqueID(),
  },
  {
    type: "it",
    name: "Shopify Developer",
    isSelected: false,
    id: uniqueID(),
  },
  {
    type: "it",
    name: "Front End Developer",
    isSelected: false,
    id: uniqueID(),
  },
  {
    type: "it",
    name: "Python Developer",
    isSelected: false,
    id: uniqueID(),
  },
  {
    type: "it",
    name: "MERN Stack Developer",
    isSelected: true,
    id: uniqueID(),
  },
  {
    type: "it",
    name: "Shopify Developer",
    isSelected: false,
    id: uniqueID(),
  },
  {
    type: "it",
    name: "Full Stack Developer",
    isSelected: false,
    id: uniqueID(),
  },
  {
    type: "it",
    name: "Full Stack Developer",
    isSelected: false,
    id: uniqueID(),
  },
  {
    type: "it",
    name: "Python Developer",
    isSelected: false,
    id: uniqueID(),
  },
  {
    type: "it",
    name: "Explore More",
    isSelected: true,
    id: uniqueID(),
  },
  {
    type: "design",
    name: "Graphic Designer",
    isSelected: false,
    id: uniqueID(),
  },
  {
    type: "design",
    name: "UI/UX Designer",
    isSelected: false,
    id: uniqueID(),
  },
  {
    type: "design",
    name: "Illustrator",
    isSelected: false,
    id: uniqueID(),
  },
  {
    type: "design",
    name: "3D Artist",
    isSelected: false,
    id: uniqueID(),
  },
  {
    type: "design",
    name: "Animator",
    isSelected: false,
    id: uniqueID(),
  },
  {
    type: "design",
    name: "Video Editor",
    isSelected: false,
    id: uniqueID(),
  },
  {
    type: "design",
    name: "Photographer",
    isSelected: false,
    id: uniqueID(),
  },
  {
    type: "design",
    name: "Art Director",
    isSelected: false,
    id: uniqueID(),
  },
  {
    type: "design",
    name: "",
    isSelected: false,
    id: uniqueID(),
  },
];

export const technicalRecruitmenData = [
  {
    id: uniqueID(),
    name: "Resume Screening",
  },
  {
    id: uniqueID(),
    name: "Technical Interview",
  },
  {
    id: uniqueID(),
    name: "HR Interview",
  },
  {
    id: uniqueID(),
    name: "Final Approval",
  },
  {
    id: uniqueID(),
    name: "Onboarding",
  },
];


export const questionsData: QuestionsProps[] = [
  {
    id: uniqueID(),
    name: "I want to work part-time, is that possible",
    isGeneral: true,
    isProcess: false,
  },
  {
    id: uniqueID(),
    name: "How long are the average projects?",
    isGeneral: false,
    isProcess: false,
  },
  {
    id: uniqueID(),
    name: "How does the payment works?",
    isGeneral: false,
    isProcess: false,
  },
  {
    id: uniqueID(),
    name: "How much can I earn?",
    isGeneral: false,
    isProcess: false,
  },
  {
    id: uniqueID(),
    name: "I want to work part-time, is that possible",
    isGeneral: true,
    isProcess: true,
  },
  {
    id: uniqueID(),
    name: "How long are the average projects?",
    isGeneral: false,
    isProcess: false,
  },
  {
    id: uniqueID(),
    name: "How long are the average projects?",
    isGeneral: false,
    isProcess: false,
  },
  {
    id: uniqueID(),
    name: "How does the payment works?",
    isGeneral: false,
    isProcess: false,
  },
];