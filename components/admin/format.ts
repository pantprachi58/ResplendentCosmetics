// Fixed time zone so server and browser render the same text (no hydration mismatch)
const options = { timeZone: "Asia/Kolkata", day: "numeric", month: "short", year: "numeric" } as const;
const dateFormat = new Intl.DateTimeFormat("en-IN", options);
const dateTimeFormat = new Intl.DateTimeFormat("en-IN", { ...options, hour: "numeric", minute: "2-digit" });

export const formatDate = (iso: string) => dateFormat.format(new Date(iso));
export const formatDateTime = (iso: string) => dateTimeFormat.format(new Date(iso));
