import { twitterConsumerKey, twitterConsumerSecret, accessToken, accessSecret } from './dotenv/dotenvconfig.js'
import { TwitterApi } from 'twitter-api-v2';
import { goalkeeper, leftback, firstDefender, secondDefender, 
        rightback, defensiveMidfielder, firstOfensiveMidfielder,
        secondOfensiveMidfielder, firstWinger,
        secondWinger, 
        foward } from './players/players.js';

const consumerClient = new TwitterApi({ appKey: twitterConsumerKey, appSecret: twitterConsumerSecret, 
accessToken: accessToken, accessSecret: accessSecret });

await consumerClient.v1.tweet('A escalação de hoje é'+'\n\n'+goalkeeper+'\n'+rightback+'\n'+firstDefender+'\n'+secondDefender+'\n'+leftback+
'\n'+defensiveMidfielder+'\n'+firstOfensiveMidfielder+'\n'+secondOfensiveMidfielder
+'\n'+firstWinger+'\n'+foward+'\n'+secondWinger)

