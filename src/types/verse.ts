export type Verse = {
  id: string;
  /** Display name of the metaverse destination */
  reference: string;
  /** Short world / realm label, e.g. "Neo-Tokyo // Night Run" */
  version?: string;
  /** Description of the travel experience */
  text: string;
  /** Mood, genre, access level, etc. */
  tags?: string[];
};

