// Props that make http(s) links open in a new tab safely. mailto and in-page links stay as is.
export function externalLinkProps(href: string): { target?: string; rel?: string } {
  return /^https?:\/\//.test(href) || href.endsWith('.pdf')
    ? { target: '_blank', rel: 'noreferrer' }
    : {}
}
