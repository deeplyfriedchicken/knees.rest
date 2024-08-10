import { createReporter } from "https://deno.land/x/g_a/mod.ts";
import { serve } from "https://deno.land/std/http/server.ts";
import type { ConnInfo } from "https://deno.land/std/http/server.ts";

const ga = createReporter();

function handler(req: Request, conn: ConnInfo) {
  let err;
  let res: Response;
  const start = performance.now();
  try {
    // processing of the request...
    res = new Response(/* response details */);
  } catch (e) {
    err = e;
  } finally {
    ga(req, conn, res!, start, err);
  }
  return res!;
}

serve(handler);