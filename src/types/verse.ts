export type Verse = {
  id: string;
  /** Display name of the metaverse interview space */
  reference: string;
  /** Scenario / track label, e.g. "FAANG Panel Room" or "VR Whiteboard" */
  version?: string;
  /** Description of the interview environment and use case */
  text: string;
  /** Tags for role, difficulty, format (system design, coding, behavioral), etc. */
  tags?: string[];
};

