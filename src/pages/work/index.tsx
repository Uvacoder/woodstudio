import Link from "next/link";
import { getAllProjects } from "@lib/api";
import { styled } from "@styles/stitches.config";

import { Box } from "@components/Box";

import type { ProjectType } from "@typings/project";

type Props = {
  projects: ProjectType[];
};

export default function Index({ projects }: Props) {
  return (
    <WorkGrid mode="grid">
      {projects.map((project) => (
        <Link
          key={project.slug}
          as={`/work/${project.slug}`}
          href={`/work/[slug]`}
        >
          <a>
            <ProjectCard>
              <img src={project.cover} alt={project.title} />
            </ProjectCard>
          </a>
        </Link>
      ))}
    </WorkGrid>
  );
}
const WorkGrid = styled(Box, {
  margin: "0 auto",
  maxWidth: 1440,
  padding: "$4",
  gridGap: "$1",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridAutoRows: "1fr",
});
const ProjectCard = styled(Box, {});

export function getStaticProps() {
  const projects = getAllProjects(["slug", "title", "cover"]);
  return { props: { projects } };
}
