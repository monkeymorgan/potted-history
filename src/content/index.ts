/**
 * Personal writing path (not a product):
 *
 * 1. Duplicate this folder's story file, e.g. `src/content/another-history.ts`
 * 2. Fill a `History` object (cast, traits, arcs, quotes).
 * 3. Change the export below to point at the new file.
 *
 * The homepage renders whatever `currentHistory` is. No accounts, no CMS.
 */
export { motleyCourt as currentHistory } from './motley-court'
export { TIMELINE_TAGS, TAGS_BY_ID } from './timeline-tags'
export type { History } from '../types'
