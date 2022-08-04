import Link from "next/link";
import { getAllProjects } from "@lib/api";

export default function Index({ projects }) {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.slug}>
          <Link as={`/work/${project.slug}`} href={`/work/[slug]`}>
            <a>{project.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function getStaticProps() {
  const projects = getAllProjects(["slug", "title"]);
  return { props: { projects } };
}
