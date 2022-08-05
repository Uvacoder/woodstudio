import { Carousel } from "@components/Carousel";

import { getProjectBySlug, getAllProjects } from "@lib/api";
import { markdownToHtml } from "@lib/markdown";

import type { ProjectType } from "@typings/project";

type Props = {
  project: ProjectType;
};

type Params = {
  params: {
    slug: string;
  };
};

export default function Project({ project }: Props) {
  return (
    <>
      <Carousel photos={project.photos} />
      <h1>{project.title}</h1>
      <section dangerouslySetInnerHTML={{ __html: project.content }}></section>
    </>
  );
}

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
