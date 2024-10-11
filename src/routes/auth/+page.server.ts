import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "@sveltejs/kit";
import type { RequestEvent } from "@sveltejs/kit";

export const actions: Actions = {
  login: async ({ request, cookies }: RequestEvent) => {
    const data = await request.formData();
    const username = data.get("username") as string | null;
    const password = data.get("password") as string | null;

    if (!username || !password) {
      return fail(400, { message: "Missing username or password" });
    }

    cookies.set("username", username, { path: "/" });
    throw redirect(303, "/");
  },

  register: async ({ request, cookies }: RequestEvent) => {
    const data = await request.formData();
    const username = data.get("username") as string | null;
    const password = data.get("password") as string | null;

    if (!username || !password) {
      return fail(400, { message: "Missing username or password" });
    }

    cookies.set("username", username, { path: "/" });
    throw redirect(303, "/");
  },
};
