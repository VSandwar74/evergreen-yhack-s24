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

@app.route('/<zip_code>', methods=['GET'])
def hello(zip_code):
    res = get_forecasts(zip_code)
    temp = res['temperature']
    wind = res['windSpeed']
    dew = res['dewpoint']
    prec = res['precipitation']
    target = np.random.randint(0, 10) # TODO
    output = sprinkle(target, prec, temp, wind, dew, y=0.066, Rn=20, G=0)
    return output


if __name__ == '__main__':
    app.run(host='localhost', port=8000)