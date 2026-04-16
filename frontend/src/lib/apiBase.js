const DEFAULT_PUBLIC_API_BASE = "https://api.trutown.market";

function stripTrailingSlashes(url) {
  return url.replace(/\/+$/, "");
}

/**
 * Base URL for public API calls (no trailing slash).
 * Uses REACT_APP_BACKEND_URL when set, otherwise same-origin in the browser,
 * otherwise the production API host.
 */
export function getPublicApiBaseUrl() {
  const fromEnv = process.env.REACT_APP_BACKEND_URL?.trim();
  if (fromEnv) return stripTrailingSlashes(fromEnv);
  if (typeof window !== "undefined" && window.location?.origin) {
    return stripTrailingSlashes(window.location.origin);
  }
  return DEFAULT_PUBLIC_API_BASE;
}
