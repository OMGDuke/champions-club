export function getPlayersWithAWinInEverySeason(seasonsData: {
  [seasonNumber: number | string]: {
    players: { name: string; wins: number }[]
  }
}): { name: string; wins: number }[] {
  const mergedObject: {
    [sesaonNumber: string | number]: { name: string; wins: number }[]
  } = {}

  for (const key in seasonsData) {
    const strippedKey = key.replace(/R$/, '') as string | number // Remove the 'R' suffix if it exists
    if (mergedObject[strippedKey]) {
      mergedObject[strippedKey] = mergedObject[strippedKey].concat(
        seasonsData[key].players
      )
    } else {
      mergedObject[strippedKey] = seasonsData[key].players
    }
  }
  const seasonArrays = Object.values(mergedObject)
  const onlyWinners = seasonArrays.map((season) =>
    season.filter((player) => player.wins > 0)
  )

  const playerWinsMap: { [name: string]: number } = {} // Object to store player names and their total wins

  // Iterate through each sub-array
  for (const subArray of onlyWinners) {
    // Iterate through each player object in the sub-array
    for (const player of subArray) {
      const { name, wins } = player

      // If the player already exists in the map, add their wins
      if (Object.prototype.hasOwnProperty.call(playerWinsMap, name)) {
        playerWinsMap[name] += wins
      } else {
        // If the player doesn't exist, initialize their wins
        playerWinsMap[name] = wins
      }
    }
  }

  // Filter players who exist in every sub-array
  const commonPlayers = Object.keys(playerWinsMap).filter((playerName) =>
    onlyWinners.every((subArray) =>
      subArray.some((player) => player.name === playerName)
    )
  )

  // Create an array of objects with player names and their total wins
  const playersWithTotalWins = commonPlayers.map((playerName) => ({
    name: playerName,
    wins: playerWinsMap[playerName]
  }))

  return playersWithTotalWins
}

export function formatDate(dateString: string) {
  // Create a Date object from the input string
  const date = new Date(dateString)

  // Get the day, month, and year components
  let day: number | string = date.getUTCDate()
  let month: number | string = date.getUTCMonth() + 1 // Months are zero-based, so add 1
  const year = date.getUTCFullYear()

  // Pad single-digit day and month with leading zeros if needed
  if (day < 10) {
    day = '0' + day
  }
  if (month < 10) {
    month = '0' + month
  }

  // Create the formatted date string in DD/MM/YYYY format
  const formattedDate = day + '/' + month + '/' + year
  return formattedDate
}

export function getChampionsOfChampions(seasonsData: {
  [seasonNumber: number | string]: {
    players: { name: string; wins: number }[]
  }
}): { name: string; wins: number }[] {
  const playerDataMap: { [playerName: string]: number } = {}

  for (const seasonKey in seasonsData) {
    const season = seasonsData[seasonKey]
    const players = season.players

    for (const player of players) {
      const playerName = player.name
      const wins = player.wins

      if (playerDataMap[playerName] === undefined) {
        playerDataMap[playerName] = wins
      } else {
        playerDataMap[playerName] += wins
      }
    }
  }

  const aggregatedPlayerData = []

  for (const playerName in playerDataMap) {
    aggregatedPlayerData.push({
      name: playerName,
      wins: playerDataMap[playerName]
    })
  }

  return aggregatedPlayerData.filter((player) => player.wins >= 10)
}

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
