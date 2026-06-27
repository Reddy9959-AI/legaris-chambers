import type { MetadataRoute } from "next";
import { practiceAreas, siteUrl } from "@/lib/site";
export default function sitemap():MetadataRoute.Sitemap{const staticRoutes=["","/about","/practice-areas","/our-people","/team","/contact","/disclaimer","/privacy-policy","/terms"];const routes=[...staticRoutes,...practiceAreas.map((area)=>"/practice-areas/"+area.slug)];return routes.map((route)=>({url:siteUrl+route,lastModified:new Date(),changeFrequency:route===""?"weekly":"monthly",priority:route===""?1:.7}));}
