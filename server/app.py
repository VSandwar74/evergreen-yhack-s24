from flask import Flask
from flask import request
from flask import jsonify
import numpy as np
# from flask_cors import CORS
from util.noaa import get_forecasts
from util.evap import sprinkle
from util.mapping import geo_to_cartesian, cartesian_to_geo;
from util.rpc import get_poly;

import requests

app = Flask(__name__)



'''
TO-DO: 
Get target & R_n
'''

@app.route('/zip/<zip_code>', methods=['GET'])
def control_sys(zip_code):
    res = get_forecasts(zip_code)
    temp = res['temperature']
    wind = res['windSpeed']
    dew = res['dewpoint']
    prec = res['precipitation']
    target = 4 # mm/day
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
    
@app.route('/process', methods=['POST'])
def process():
    # Check if request contains JSON data
    if request.is_json:
        try:
            # Get JSON data from request
            geo_polygon = request.get_json()

            # Pass JSON data through processing function
            cart_polygon = geo_to_cartesian(geo_polygon)

            # Pass through packing function

            # Pass through reverse processing function
            geo_polygon = cartesian_to_geo(cart_polygon)

            # Return processed data as JSON response
            return jsonify(geo_polygon), 200
        except Exception as e:
            return jsonify({'error': str(e)}), 400
    else:
        return jsonify({'error': 'Request must contain JSON data'}), 400

@app.route('/<address>', methods=['GET'])
def main(address):
    try:
        # Get location data from address
        location = get_location(address)

        print('location')

        # Get polygon data from location
        geo_polygon = get_poly(location['lat'], location['long'])

        vec = control_sys(location['zip_code'])
        return vec

        # print("")
        return geo_polygon
        
        # Pass through processing function to cart
        long, lat, cart_polygon = geo_to_cartesian(geo_polygon)
        print("got cart")
        # packed_poly = pack_polygon(cart_polygon)
        final_poly = cartesian_to_geo(long, lat, cart_polygon)
        print("fin")

        return jsonify(final_poly), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400