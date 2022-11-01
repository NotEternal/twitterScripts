import * as dotenv from 'dotenv'

dotenv.config()

console.log('🚀 ~ file: config.ts ~ line 4 ~ process.env', process.env)

const { BEARER_TOKEN, API_SECRET, API_KEY } = process.env

const TWEET_ID = '1585672210869809152'

const ENDPOINT = `https://api.twitter.com/2/tweets/${TWEET_ID}/retweeted_by`

export default {
  BEARER_TOKEN,
  TWEET_ID,
  ENDPOINT,
}
