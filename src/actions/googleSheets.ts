import { Player } from '../../types/player'

const sheetUrl = `https://script.google.com/macros/s/${process.env.GOOGLE_MACRO_KEY}/exec?path=`

const cacheLife = 3600 // 1 hour

export async function getWins(game: 'mw2' | 'mw3'): Promise<{
  [seasonNumber: number | string]: {
    players: { name: string; wins: number }[]
  }
}> {
  const googleSheetUrl = `${sheetUrl}wins${game}`
  const res = await fetch(googleSheetUrl, {
    next: { revalidate: cacheLife }
  })
  const data = await res.json()
  const formatted: {
    [seasonNumber: number | string]: {
      players: { name: string; wins: number }[]
    }
  } = {}

  data.forEach((s: { season: number; [playerName: string]: number }) => {
    const { season, ...players } = s
    formatted[season] = {
      players: Object.keys(players).map((player) => ({
        name: player,
        wins: players[player]
      }))
    }
  })
  return formatted
}

export async function getSeasonData(game: 'mw2' | 'mw3'): Promise<
  {
    endDate: string
    season: number | string
    seasonLength: number
    startDate: string
    artUrl: string
    blogUrl: string
    accentColour: string
    description: string
  }[]
> {
  const googleSheetUrl = `${sheetUrl}seasonData${game}`
  const res = await fetch(googleSheetUrl, {
    next: { revalidate: cacheLife }
  })
  const data = await res.json()
  return data
}

export async function getPlayerData(): Promise<{
  [playerName: string]: Player
}> {
  const googleSheetUrl = `${sheetUrl}players`
  const res = await fetch(googleSheetUrl, {
    next: { revalidate: cacheLife }
  })
  const data = await res.json()
  const formatted: {
    [playerName: string]: Player
  } = {}

  data.forEach((player: Player & { name: string }) => {
    formatted[player.name] = { ...player }
  })
  return formatted
}

export async function getPlayerArt(game: 'mw2' | 'mw3'): Promise<{
  [playerName: string]: {
    [seasonNumber: string]: string
  }
}> {
  const googleSheetUrl = `${sheetUrl}playerArt${game}`
  const res = await fetch(googleSheetUrl, {
    next: { revalidate: cacheLife }
  })
  const data = await res.json()
  const formatted: {
    [playerName: string]: { ['season']: string }
  } = {}

  data.forEach((player: { ['season']: string; name: string }) => {
    const { name, ...newPlayer } = player
    formatted[name] = newPlayer
  })
  return formatted
}
