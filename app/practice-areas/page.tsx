import type { Metadata } from "next";
import { PracticeCard } from "@/components/practice-card";
import { SectionHeading } from "@/components/section-heading";
import { practiceAreas } from "@/lib/site";
export const metadata:Metadata={title:"Practice Areas",description:"Practice areas handled by Legaris Chambers.",alternates:{canonical:"/practice-areas"}};
export default function PracticeAreas(){return <><section className="pt-40 pb-20 bg-midnight patterned"><div className="section-shell"><SectionHeading eyebrow="Practice Areas" title="Legal services for individuals, businesses, and institutions." text="Explore the chamber's core areas of legal assistance."/></div></section><section className="bg-obsidian py-20"><div className="section-shell grid gap-5 md:grid-cols-2 lg:grid-cols-4">{practiceAreas.map((area)=><PracticeCard key={area.slug} area={area}/>)}</div></section></>;}
