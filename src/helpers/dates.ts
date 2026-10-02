const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// "2026-04" -> "Apr 2026", "2026" -> "2026", "present" -> "Present"
export function formatMonth(value: string): string {
  if (value === 'present') return 'Present'
  const [year, month] = value.split('-')
  const index = Number(month) - 1
  return month && MONTHS[index] ? `${MONTHS[index]} ${year}` : year
}
