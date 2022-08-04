import { getProjectBySlug, getAllProjects } from "@lib/api";
import { markdownToHtml } from "@lib/markdown";

export default function Project({ project }) {
  return (
    <>
      <h1>{project.title}</h1>
      <section dangerouslySetInnerHTML={{ __html: project.content }}></section>
    </>
  );
}

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
