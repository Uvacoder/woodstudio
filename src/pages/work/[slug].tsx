import Head from "next/head";

import { Box } from "@components/Box";
import { Gallery } from "@components/Gallery";
import { Text } from "@components/Text";

import { getProjectBySlug, getAllProjects } from "@lib/api";
import { markdownToHtml } from "@lib/markdown";

import { styled } from "@styles/stitches.config";

import type { ProjectType } from "@typings/project";

type Props = {
  project: ProjectType;
};

export default function Project({ project }: Props) {
  const { title, photos, content, materials, date, clients } = project;

  const year = new Date(date).getFullYear();

  return (
    <>
      <Head>
        <title>{title} ✷ On End Studio</title>
      </Head>
      <Grid mode="grid" layout={{ "@initial": "mobile", "@m": "desktop" }}>
        <Gallery photos={photos} />
        <Box
          css={{
            width: 1,
            height: "100%",
            backgroundColor: "$border",
          }}
        />
        <Meta
          mode="flex"
          padding={{ "@initial": "compact", "@m": "comfortable" }}
        >
          <Header
            mode="flex"
            layout={{ "@initial": "stacked", "@m": "spread" }}
          >
            <Text
              as="h1"
              family="secondary"
              size="5"
              css={{ fontWeight: 300, fontStyle: "italic" }}
            >
              {title}
            </Text>
            <Text family="secondary" size="5" css={{ fontWeight: 300 }}>
              {year}
            </Text>
          </Header>
          <Description
            dangerouslySetInnerHTML={{ __html: content }}
          ></Description>
          {materials && (
            <MetaRow mode="flex">
              <Text
                family="secondary"
                size="3"
                css={{ textTransform: "uppercase", fontWeight: 500 }}
              >
                Materials
              </Text>
              <Text family="secondary">{materials.join(", ")}</Text>
            </MetaRow>
          )}

          {clients && (
            <MetaRow mode="flex">
              <Text
                family="secondary"
                size="3"
                css={{ textTransform: "uppercase", fontWeight: 500 }}
              >
                Clients
              </Text>
              <Text family="secondary">{clients}</Text>
            </MetaRow>
          )}
        </Meta>
      </Grid>
    </>
  );
}

const Grid = styled(Box, {
  gridTemplateRows: "1fr",
  variants: {
    layout: {
      desktop: { gridTemplateColumns: "1fr 1px 1fr" },
      mobile: { gridTempalteColumns: "1fr" },
    },
  },
});
const Meta = styled(Box, {
  flexDirection: "column",
  fontFamily: "$secondary",
  marginBottom: "$4",
  variants: {
    padding: {
      compact: { padding: "0 $2" },
      comfortable: { padding: "0 $4" },
    },
  },
});

const Header = styled(Box, {
  padding: "$3 0",
  borderBottom: "1px solid $border",
  variants: {
    layout: {
      spread: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
      },
      stacked: {
        justifyContent: "start",
        flexDirection: "column",
        alignItems: "start",
      },
    },
  },
});

const Description = styled(Box, {
  padding: "$3 0",
  marginBottom: "$1",
  borderBottom: "1px solid $border",
});

const MetaRow = styled(Box, {
  marginTop: "$2",
  justifyContent: "space-between",
  alignItems: "center",
});

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const project = getProjectBySlug(params.slug, [
    "title",
    "date",
    "clients",
    "materials",
    "price",
    "photos",
    "content",
  ]);

  const content = await markdownToHtml(project.content || "");

  return {
    props: {
      project: {
        ...project,
        content,
      },
    },
  };
};

export async function getStaticPaths() {
  const projects = getAllProjects(["slug"]);

  return {
    paths: projects.map((project) => {
      return {
        params: { ...project },
      };
    }),
    fallback: false,
  };
}
