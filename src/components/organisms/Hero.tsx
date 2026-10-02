import type { Profile } from '../../data/profile'
import { ButtonLink } from '../atoms/ButtonLink'
import { Doodle } from '../atoms/Doodle'
import { MonoLabel } from '../atoms/MonoLabel'
import { SketchBorder } from '../atoms/SketchBorder'
import { Tag } from '../atoms/Tag'
import { SocialLinks } from '../molecules/SocialLinks'

type HeroProps = {
  profile: Profile
  resumeLabel: string
  contactLabel: string
  contactHref: string
}

export function Hero({ profile, resumeLabel, contactLabel, contactHref }: HeroProps) {
  const details = [profile.location, profile.pronouns].filter(Boolean)

  return (
    <section id="top" aria-labelledby="hero-title" className="mx-auto max-w-5xl px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-24">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_auto]">
        <div>
          {details.length > 0 && <MonoLabel>{details.join(' · ')}</MonoLabel>}

          <h1 id="hero-title" className="mt-4 font-display text-6xl font-bold leading-[0.9] sm:text-8xl">
            {profile.name}
          </h1>

          <p className="mt-4 font-display text-3xl text-muted sm:text-4xl">{profile.tagline}</p>

          {profile.openTo && (
            <p className="mt-6">
              <Tag>
                <Doodle name="leaf" className="size-4 text-accent" />
                {profile.openTo}
              </Tag>
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={profile.resumeUrl}>{resumeLabel}</ButtonLink>
            <ButtonLink href={contactHref} variant="outline">
              {contactLabel}
            </ButtonLink>
          </div>

          <SocialLinks links={profile.socials} className="mt-8" />
        </div>

        <div className="relative hidden p-3 md:block">
          <SketchBorder seed={5} />
          <div className="relative flex size-64 items-center justify-center bg-leaf-50/40">
            <SketchBorder seed={11} />
            <Doodle name="sprout" className="size-40 text-accent" />
          </div>
        </div>
      </div>

      <Doodle name="vine" className="mt-16 h-8 w-40 text-leaf-400 sm:mt-24" />
    </section>
  )
}
