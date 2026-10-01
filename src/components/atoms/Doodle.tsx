import { cn } from '../../helpers/cn'

export type DoodleName = 'sprout' | 'leaf' | 'vine'

type DoodleProps = {
  name: DoodleName
  className?: string
}

// Hand-drawn style line art. Purely decorative, so it is hidden from screen readers.
// Color comes from the text color, e.g. className="text-accent".
const doodles: Record<DoodleName, { viewBox: string; paths: string[] }> = {
  sprout: {
    viewBox: '0 0 64 64',
    paths: [
      'M18 58c5-2.5 23-2.5 28 0',
      'M32 57c-1.2-8 1-16-.4-25',
      'M31.8 40c-8.5.6-15.6-4.6-17.6-14.2 9.2-.8 15.8 4.8 17.6 14.2Z',
      'M31.4 39.4C26 35 21 31 16.4 27.6',
      'M31.8 32.4c1.6-9.4 9-15.6 19.2-15.4-.6 10-8.6 16.4-19.2 15.4Z',
      'M32.2 31.8c4.8-4.6 10-9 16.4-12.6',
    ],
  },
  leaf: {
    viewBox: '0 0 48 48',
    paths: [
      'M8 40C9.6 22.4 21.6 9.6 40 8c-1.6 18-13.6 30.4-32 32Z',
      'M8 40c10-10.4 20-20.4 32-32',
      'M17.2 30.6c-1.8-3-2.4-5.8-2-8.8',
      'M24.4 23.4c3.2-.2 5.8.6 8 2.4',
      'M30.6 17.2c-1.2-2.6-1.4-5-.8-7.4',
    ],
  },
  vine: {
    viewBox: '0 0 160 40',
    paths: [
      'M4 32c32-3 66-8 96-14s40-9 56-14',
      'M30 29.4c-2.6-8 2.4-14.4 10.6-15.6.6 8.4-3.8 14.2-10.6 15.6Z',
      'M62 25c1.6 8.2 8.8 11.8 16.6 10.6-1.6-7.8-8.4-11.8-16.6-10.6Z',
      'M96 18.8c-2.4-7.8 2.2-13.8 10-15.2.8 8-3.6 13.6-10 15.2Z',
      'M128 12.4c2.2 7.2 8.6 10 15.4 8.6-2-6.8-8-10-15.4-8.6Z',
    ],
  },
}

export function Doodle({ name, className }: DoodleProps) {
  const { viewBox, paths } = doodles[name]
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={cn('shrink-0', className)}
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  )
}
