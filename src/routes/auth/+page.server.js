import { fail, redirect } from "@sveltejs/kit";

export const actions = {
  login: async ({ request, cookies }) => {
    const data = await request.formData();
    const username = data.get("username");
    const password = data.get("password");
    if (!username || !password) {
      return fail(400, { message: "Missing username or password" });
    }
    cookies.set("username", username, { path: "/" });
    // return { message: "Logged in successfully" };
    throw redirect(303, "/");
  },
  register: async ({ request, cookies }) => {
    const data = await request.formData();
    const username = data.get("username");
    const password = data.get("password");
    if (!username || !password) {
      return fail(400, {
        message: "Missing username or password",
      });
    }
    cookies.set("username", username, { path: "/" });
    // return { message: "Registered successfully" };
    throw redirect(303, "/");
  },
};
