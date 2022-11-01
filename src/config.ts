import * as dotenv from 'dotenv'

dotenv.config()

const { BEARER_TOKEN, TWEET_ID, RETWEET_LIMIT } = process.env

const ENDPOINT = `https://api.twitter.com/2/tweets/${TWEET_ID}/retweeted_by`

export default {
  BEARER_TOKEN,
  TWEET_ID,
  ENDPOINT,
  RETWEET_LIMIT,
}
