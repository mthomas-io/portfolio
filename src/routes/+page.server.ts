import projects from "$lib/mocks/projects";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return {
    projects: projects,
  };
}
