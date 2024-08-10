import { createReporter } from "https://deno.land/x/g_a/mod.ts";
import { FreshContext } from "$fresh/server.ts";

interface State {
    data: string;
}  

const ga = createReporter();

export async function handler(req: Request, ctx: FreshContext<State>,) {
  let err;
  let res: Response;

  const start = performance.now();
  try {
    const resp = await ctx.next();
    ga(req, ctx, res!, start, err);
    return resp;
  } catch (e) {
    err = e;
  }
}