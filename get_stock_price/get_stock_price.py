import pandas as pd
import yfinance as yf
import time
import numpy as np

def get_stock(company, interval = '5m', period = 0,  start_day = '2020-01-01 00:00:00.000000', end_day = pd.Timestamp.now().tz_localize('America/New_York')):
    company = str(company)
    interval = str(interval)
    if(period == 0):
        data = yf.download(tickers=company, period='60d', interval=interval)
    else:
        periodstr = str(period) + 'd'
        data = yf.download(tickers=company, period=periodstr, interval=interval)
    result = data[['Close', 'Adj Close']]
    newresult = result[result.index.to_series().between(start_day, end_day)]
    return newresult
    