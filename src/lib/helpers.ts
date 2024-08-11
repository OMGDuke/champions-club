import { Game } from '../../types/games'

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

export function getPlayersWith10PlusWins(seasonsData: {
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

export function getHallOfFame(seasonsData: {
  [seasonNumber: number | string]: {
    players: { name: string; wins: number | string }[]
  }
}): { name: string; wins: number }[] {
  const playerDataMap: { [playerName: string]: number } = {}
  for (const seasonKey in seasonsData) {
    const season = seasonsData[seasonKey]
    const players = season.players

    for (const player of players) {
      const playerName = player.name
      let playerWins: number
      if (typeof player.wins === 'number') {
        playerWins = player.wins
      } else if (typeof player.wins === 'string' && player.wins !== '') {
        playerWins = parseInt(player.wins)
      } else {
        playerWins = 0
      }
      if (playerDataMap[playerName] === undefined) {
        playerDataMap[playerName] = playerWins
      } else {
        playerDataMap[playerName] += playerWins
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

  return aggregatedPlayerData
}

export const isValidGame = (value: Game) => {
  return value === 'mw2' || value === 'mw3' || value === 'bo6'
}
