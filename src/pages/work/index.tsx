import Link from "next/link";
import Head from "next/head";

import { getAllProjects } from "@lib/api";
import { styled } from "@styles/stitches.config";

import { Box } from "@components/Box";
import { Text } from "@components/Text";
import { Picture } from "@components/Picture";

import type { ProjectType } from "@styles/typings/project";

type Props = {
  projects: ProjectType[];
};

export default function Index({ projects }: Props) {
  return (
    <>
      <Head>
        <title>Select Projects ✷ On End Studio</title>
      </Head>
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
                <Picture
                  aspect="square"
                  cover
                  src={project.cover}
                  alt={project.title}
                  css={{ width: "100%", height: "100%" }}
                />
              </Card>
            </a>
          </Link>
        ))}
      </WorkGrid>
    </>
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
      comfortable: { padding: "$4" },
      compact: { padding: "$1" },
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
  const projects = getAllProjects(["slug", "title", "cover", "date"]);
  return { props: { projects } };
}
