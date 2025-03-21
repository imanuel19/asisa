import ClientPage from "./ClientPage";
import * as config from "./api/config/default/config"; // Updated to use named imports

// Server component for metadata
export const metadata = {
  title: config.config.search_title,
  description: config.config.search_description,
  robots: config.config.search_robots,
}

export const viewport = {
  themeColor: "#000000", // Moved theme color to viewport export
}
// Set cache control headers using the revalidate property
export const revalidate = 86400 // 24 hours in seconds

export default function Home() {
  return <ClientPage />
}
