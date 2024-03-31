from flask import Flask
import numpy as np
# from flask_cors import CORS
from util.noaa import get_forecasts
from util.evap import sprinkle

app = Flask(__name__)

'''
TO-DO: 
Get target & R_n
'''

@app.route('/')
def hello():
    res = get_forecasts('06511', 'US')
    # print(res)
    temp = res['temperature']
    wind = res['windSpeed']
    dew = res['dewpoint']
    target = np.random.rand(0, 10)
    output = sprinkle(target, 0, temp, wind, dew, y=0.066, Rn=20, G=0)
    return output
    # return 'yolo'
    # return 'Hello, World!'