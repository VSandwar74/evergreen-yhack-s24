from flask import Flask
import numpy as np
# from flask_cors import CORS
from util.noaa import get_forecasts
from util.evap import sprinkle
import requests

app = Flask(__name__)

'''
TO-DO: 
Get target & R_n
'''

@app.route('/zip/<zip_code>', methods=['GET'])
def sprinkle(zip_code):
    res = get_forecasts(zip_code)
    temp = res['temperature']
    wind = res['windSpeed']
    dew = res['dewpoint']
    prec = res['precipitation']
    target = np.random.randint(0, 10) # TODO
    output = sprinkle(target, prec, temp, wind, dew, y=0.066, Rn=20, G=0)
    return output

@app.route('/address/<address>', methods=['GET'])
def get_location(address):
    keys = address.split(',')
    print(keys)
    # Define the API endpoint URL
    url = 'https://nominatim.openstreetmap.org/search?q=' + '+'.join(keys) + '&format=json&polygon_kml=1&addressdetails=1'
    # Make a GET request to the API endpoint
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
    }
    response = requests.get(url, headers=headers)

    d = dict()
    # Check if the request was successful (status code 200)
    if response.status_code == 200:
        d['lat'] = response.json()[0]['lat']
        d['long'] = response.json()[0]['lon']
        d['zip_code'] = response.json()[0]['address']['postcode']
        return d

    else:
        # Print an error message if the request was unsuccessful
        print('Error:', response.status_code)
        return 'Error:', response.status_code