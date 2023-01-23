import projects from "$lib/mocks/projects";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const index = projects.findIndex(p => p.slug === params.slug);
  const project = projects[index];
  const next = projects[index >= projects.length-1 ? 0 : index + 1];
  
  return {
    project,
    next,
  };
}
