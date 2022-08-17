import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import type { ProjectType } from "@styles/typings/project";

const projectsDirectory = join(process.cwd(), "src/projects");

export const getSlugs = (): string[] => {
  return fs.readdirSync(projectsDirectory).map((d) => d.replace(/\.md$/, ""));
};

export const getProjectBySlug = (
  slug: string,
  fields: string[] = []
): ProjectType => {
  const file = join(projectsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(file, "utf8");
  const { data, content } = matter(fileContents);

  const items: ProjectType = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = slug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
};

export const getAllProjects = (fields: string[] = []): ProjectType[] => {
  const slugs = getSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug, fields))
    .sort((p1, p2) => (p1.date > p2.date ? -1 : 1));
  return projects;
};
