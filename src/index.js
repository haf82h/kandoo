 
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    if (url.pathname === "/api/health" && request.method === "GET") {
      return jsonResponse({
        success: true,
        service: "kandoo-backend",
        status: "healthy",
        database: "connected",
        version: "1.1.0",
      });
    }

    if (url.pathname === "/api/db-test" && request.method === "GET") {
      try {
        const result = await env.DB.prepare(
          "SELECT name FROM sqlite_master WHERE type = 'table' ORDER BY name"
        ).all();

        return jsonResponse({
          success: true,
          database: "connected",
          tables: result.results,
        });
      } catch (error) {
        return jsonResponse({
          success: false,
          error: "Database connection failed",
        }, 500);
      }
    }

    return jsonResponse({
      success: false,
      error: "Route not found",
    }, 404);
  },
};
