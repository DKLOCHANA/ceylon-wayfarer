/**
 * Places on the itinerary map. x/y are in the map's 400 × 560 drawing (src/components/ui/IslandMap.astro).
 * `side` puts the label to the left or right of the dot so labels don't overlap.
 * Itinerary days list these ids in their `path`.
 */
export interface MapStop {
  x: number;
  y: number;
  name: string;
  side: "left" | "right";
}

export const mapStops = {
  bia: { x: 84, y: 352, name: "Airport", side: "left" },
  dambulla: { x: 194, y: 284, name: "Dambulla", side: "left" },
  sigiriya: { x: 206, y: 262, name: "Sigiriya", side: "right" },
  polonnaruwa: { x: 245, y: 252, name: "Polonnaruwa", side: "right" },
  anuradhapura: { x: 150, y: 196, name: "Anuradhapura", side: "left" },
  kandy: { x: 198, y: 352, name: "Kandy", side: "right" },
  nuwara: { x: 222, y: 402, name: "Nuwara Eliya", side: "right" },
  horton: { x: 208, y: 428, name: "Horton Plains", side: "left" },
  ella: { x: 258, y: 432, name: "Ella", side: "right" },
  tissa: { x: 276, y: 498, name: "Yala", side: "right" },
  mirissa: { x: 186, y: 530, name: "Mirissa", side: "right" },
  galle: { x: 138, y: 516, name: "Galle", side: "left" },
  trinco: { x: 242, y: 172, name: "Trincomalee", side: "right" },
  pasikudah: { x: 290, y: 250, name: "Pasikudah", side: "right" },
} as const satisfies Record<string, MapStop>;

export type MapStopId = keyof typeof mapStops;

export const mapStopIds = Object.keys(mapStops) as [MapStopId, ...MapStopId[]];

/** The driver's home base, marked with a ring on the map. */
export const mapBase = { x: 150, y: 372 };
