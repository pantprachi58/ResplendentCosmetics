import { loadEnvConfig } from "@next/env";

/** The environment as the shell passed it, before any .env file is applied. */
export const shellEnv: Readonly<Record<string, string | undefined>> = { ...process.env };

/** Loads .env / .env.local the same way `next dev` does (existing environment variables win). */
loadEnvConfig(process.cwd(), process.env.NODE_ENV !== "production");
