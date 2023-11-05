export function hexToHueRotate(targetHexColor: string) {
  const startHexColor = '#494133' // Fixed starting hex color
  // Convert the starting and target hex colors to RGB values
  const startColor = hexToRgb(startHexColor)
  const targetColor = hexToRgb(targetHexColor)

  // Calculate the hue value for both colors
  const startHue = calculateHue(startColor.r, startColor.g, startColor.b)
  const targetHue = calculateHue(targetColor.r, targetColor.g, targetColor.b)

  // Calculate the hue-rotate value to transition from startHue to targetHue
  const hueRotateValue = (targetHue - startHue + 360) % 360

  return hueRotateValue.toFixed(2)
}

function hexToRgb(hexColor: string) {
  const r = parseInt(hexColor.slice(1, 3), 16) / 255
  const g = parseInt(hexColor.slice(3, 5), 16) / 255
  const b = parseInt(hexColor.slice(5, 7), 16) / 255
  return { r, g, b }
}

function calculateHue(r: number, g: number, b: number) {
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let hue = 0

  if (max === r) {
    hue = (60 * ((g - b) / (max - min)) + 360) % 360
  } else if (max === g) {
    hue = (60 * ((b - r) / (max - min)) + 120) % 360
  } else {
    hue = (60 * ((r - g) / (max - min)) + 240) % 360
  }

  return hue
}
