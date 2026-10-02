// True when a data field has real content, not empty and not a "TODO" placeholder.
// Lets unfinished fields stay in src/data without showing broken links or images on the site.
export function isFilled(value: string | undefined): value is string {
  return Boolean(value && value.trim() && !value.trim().startsWith('TODO'))
}
