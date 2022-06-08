import dotenv from 'dotenv';

dotenv.config();

const twitterConsumerKey = process.env.TWITTER_CONSUMER_KEY
const twitterConsumerSecret = process.env.TWITTER_CONSUMER_SECRET
const accessToken = process.env.ACCESS_TOKEN
const accessSecret = process.env.ACCESS_SECRET

export { twitterConsumerKey, twitterConsumerSecret, accessToken, accessSecret}
