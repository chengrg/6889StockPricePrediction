import snscrape.modules.twitter as sntwitter
import pandas as pd


def get_tweet_data(key_word, start_date, end_date, num):
	tweets_list = []

	for i,tweet in enumerate(sntwitter.TwitterSearchScraper(key_word+' since:'+start_date+' until:'+end_date).get_items()):
	    if i>num:
	        break
	    tweets_list.append([tweet.date, tweet.id, tweet.content, tweet.user.username])
    
	tweets_df = pd.DataFrame(tweets_list, columns=['Datetime', 'Tweet Id', 'Text', 'Username'])
	return tweets_df

