import Link from "next/link";
import { getAllProjects } from "@lib/api";
import { styled } from "@styles/stitches.config";

import { Box } from "@components/Box";
import { Text } from "@components/Text";
import { Image } from "@components/Image";

import type { ProjectType } from "@typings/project";

type Props = {
  projects: ProjectType[];
};

export default function Index({ projects }: Props) {
  return (
    <WorkGrid
      mode="grid"
      layout={{ "@initial": "mobile", "@m": "desktop" }}
      padding={{ "@initial": "compact", "@m": "comfortable" }}
    >
      {projects.map((project) => (
        <Link
          key={project.slug}
          as={`/work/${project.slug}`}
          href={`/work/[slug]`}
        >
          <a>
            <Card>
              <Title mode="flex">
                <Text as="h2" size="5">
                  {project.title}
                </Text>
              </Title>
              <Image
                aspect="square"
                cover
                src={project.cover}
                alt={project.title}
              />
            </Card>
          </a>
        </Link>
      ))}
    </WorkGrid>
  );
}
const WorkGrid = styled(Box, {
  margin: "0 auto",
  maxWidth: 1440,
  gridGap: "$1",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridAutoRows: "1fr",

  variants: {
    layout: {
      desktop: { gridTemplateColumns: "repeat(2, 1fr)" },
      mobile: { gridTemplateColumns: " 1fr" },
    },
    padding: {
      comfortable: { gridGap: "$1", padding: "$4" },
      compact: { gridGap: "$2", padding: "$2" },
    },
  },
});
const Card = styled(Box, {
  position: "relative",
});
const Title = styled(Box, {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(255,149,92,0.3)",
  opacity: 0,
  transition: "opacity 0.2s ease",

  "&:hover": { opacity: 1 },
  "& h2": {
    fontFamily: "$secondary",
    fontWeight: 400,
    fontStyle: "italic",
    color: "white",
  },
});

export function getStaticProps() {
  const projects = getAllProjects(["slug", "title", "cover"]);
  return { props: { projects } };
}
