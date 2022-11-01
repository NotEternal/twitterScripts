import needle, { NeedleResponse } from 'needle'

import config from './config'

// These are the parameters for the API request
// by default, only the Tweet ID and text are returned
const params = {
  'tweet.fields': 'lang,author_id', // Edit optional query parameters here
  'user.fields': 'created_at', // Edit optional query parameters here
}

type Retweet = {
  username: string
  name: string
  created_at: string
  id: string
}

type Response = NeedleResponse & {
  body: {
    data: Retweet[]
    meta: {
      result_count: number
      next_token: string
    }
  }
}

async function fetchData() {
  const res: Response = await needle('get', config.ENDPOINT, params, {
    headers: {
      'User-Agent': 'v2RetweetedByUsersJS',
      authorization: `Bearer ${config.BEARER_TOKEN}`,
    },
  })

  return res?.body
}

;(async () => {
  try {
    const result = await fetchData()

    console.dir(result, {
      depth: null,
    })
  } catch (e) {
    console.log(e)
    process.exit(-1)
  }

  process.exit()
})()
