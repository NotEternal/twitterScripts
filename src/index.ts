import config from './config'

// These are the parameters for the API request
// by default, only the Tweet ID and text are returned
const params = {
  'tweet.fields': 'lang,author_id', // Edit optional query parameters here
  'user.fields': 'created_at', // Edit optional query parameters here
}

async function getRequest() {
  const res: Promise<{ body?: unknown }> = await fetch(config.ENDPOINT, {
    method: 'get',
    headers: {
      'User-Agent': 'v2RetweetedByUsersJS',
      authorization: `Bearer ${config.BEARER_TOKEN}`,
    },
    body: JSON.stringify(params),
  })
    .then((res: { json: () => any }) => res.json())
    .catch((error) => console.error('Failed request', error))

  // @ts-ignore
  return res?.body
}

// ;(async () => {
//   try {
//     const result = await getRequest()

//     console.dir(result, {
//       depth: null,
//     })
//   } catch (e) {
//     console.log(e)
//     process.exit(-1)
//   }

//   process.exit()
// })()
