const apiBase = process.env.API_BASE

export const getApi = async (apiEndpoint: string, init?: RequestInit) => {
  const response = await fetch(apiBase + apiEndpoint, init)

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`
    throw new Error(message)
  }

  const res = await response.json()

  return res
}
