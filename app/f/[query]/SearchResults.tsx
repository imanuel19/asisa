"use client"

import { useViewMode } from "../contexts/ViewModeContext"; // Corrected import path
import ViewToggle from "../components/ViewToggle"; // Corrected import path
import SongGrid from "../components/SongGrid"; // Corrected import path
import SongList from "../components/SongList"; // Corrected import path
import config from "../config/default/config"; // Corrected import path

interface SearchResultsProps {
  songs: any[]
}

export default function SearchResults({ songs }: SearchResultsProps) {
  const { viewMode, setViewMode } = useViewMode()

  return (
    <>
      <div className="section-header mb-4">
        <div className="flex-1"></div>
        <ViewToggle onViewChange={setViewMode} initialView={viewMode} />
      </div>

      {viewMode === "grid" ? (
        <SongGrid songs={songs} downloadPermalink={config.download_permalink} />
      ) : (
        <SongList songs={songs} downloadPermalink={config.download_permalink} />
      )}
    </>
  )
}
