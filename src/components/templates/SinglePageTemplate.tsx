import type { ReactNode } from 'react'

type SinglePageTemplateProps = {
  skipLabel: string
  header: ReactNode
  footer: ReactNode
  children: ReactNode
}

// Page shell: skip link, sticky header, main content, footer.
export function SinglePageTemplate({ skipLabel, header, footer, children }: SinglePageTemplateProps) {
  return (
    <div className="flex min-h-svh flex-col">
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {skipLabel}
      </a>
      {header}
      <main id="main" className="flex-1">
        {children}
      </main>
      {footer}
    </div>
  )
}
