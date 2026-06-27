export type PeopleSection = "Leadership" | "Panel Advocates" | "Associates" | "Legal Interns";
export type Person = { name: string; role: string; responsibilities: string[]; section: PeopleSection; };
export const leadership: Person[] = [
{ name:"Madala Naresh", role:"Managing & Operations Partner", section:"Leadership", responsibilities:["Practice Management","Operations","Administration","Client Coordination","Office Systems"] },
{ name:"Iragam Reddy Uday Bhanu Reddy", role:"Strategy & Litigation Partner", section:"Leadership", responsibilities:["Litigation Strategy","Court Representation","Case Management","Practice Development","Client Relations"] },
{ name:"Mylapalli Mahesh", role:"Litigation Partner", section:"Leadership", responsibilities:["Civil Litigation","Criminal Litigation","Court Representation","Pleadings & Drafting","Legal Research","Dispute Resolution"] }
];
export const partners: Person[] = [];
export const panelAdvocates: Person[] = [];
export const associates: Person[] = [];
export const legalInterns: Person[] = [];
