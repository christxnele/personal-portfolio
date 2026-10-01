// SVG path generators for the hand-drawn look. A seed makes each line irregular
// but stable, so the page doesn't change shape between renders.

function seededRandom(seed: number): () => number {
  let state = seed >>> 0 || 1
  return () => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0
    return state / 2 ** 32
  }
}

export const WOBBLE_WIDTH = 1200
export const WOBBLE_HEIGHT = 12

// A gently wobbling horizontal line across a WOBBLE_WIDTH x WOBBLE_HEIGHT box.
export function wobbleLinePath(seed: number, segments = 28, amplitude = 2): string {
  const random = seededRandom(seed)
  const mid = WOBBLE_HEIGHT / 2
  const points = Array.from({ length: segments + 1 }, (_, i) => [
    (i * WOBBLE_WIDTH) / segments,
    mid + (random() - 0.5) * 2 * amplitude,
  ])
  let d = `M${points[0][0]} ${points[0][1].toFixed(2)}`
  for (let i = 1; i < points.length - 1; i++) {
    const [x, y] = points[i]
    const [nx, ny] = points[i + 1]
    d += ` Q${x} ${y.toFixed(2)} ${((x + nx) / 2).toFixed(1)} ${((y + ny) / 2).toFixed(2)}`
  }
  const [lx, ly] = points[points.length - 1]
  return `${d} L${lx} ${ly.toFixed(2)}`
}

// A rectangle in a 100 x 100 box drawn as four slightly bowed strokes that overshoot
// at the corners, like a quick pen sketch.
export function sketchRectPath(seed: number, jitter = 0.5, overshoot = 0.6): string {
  const random = seededRandom(seed)
  const j = () => (random() - 0.5) * 2 * jitter
  const corners: Array<[number, number]> = [
    [j(), j()],
    [100 + j(), j()],
    [100 + j(), 100 + j()],
    [j(), 100 + j()],
  ]
  return corners
    .map(([ax, ay], i) => {
      const [bx, by] = corners[(i + 1) % 4]
      const length = Math.hypot(bx - ax, by - ay)
      const ux = (bx - ax) / length
      const uy = (by - ay) / length
      const bow = (random() - 0.5) * 2 * jitter * 1.6
      const start = [ax - ux * overshoot, ay - uy * overshoot]
      const end = [bx + ux * overshoot, by + uy * overshoot]
      const control = [(ax + bx) / 2 - uy * bow, (ay + by) / 2 + ux * bow]
      const f = (n: number) => n.toFixed(2)
      return `M${f(start[0])} ${f(start[1])} Q${f(control[0])} ${f(control[1])} ${f(end[0])} ${f(end[1])}`
    })
    .join(' ')
}
