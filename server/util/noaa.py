from noaa_sdk import NOAA
import re
from datetime import datetime, timedelta

def f_to_k(temp):
    kel = (temp - 32)*(5/9) + (273.15)
    return(kel)

def mile_to_meter(mile):
    pattern = r'\d+'
    matches = re.findall(pattern, mile)
    number = int(matches[0])
    return(number/2.237)

def c_to_k(temp):
    return(temp + 273.15)

def get_forecasts(zip_code: str) -> dict:
    n = NOAA()
    d1 = str(datetime.today().date() - timedelta(days=1))
    d2 = str(datetime.today().date())

    res = n.get_forecasts(zip_code, 'US')
    observations = n.get_observations(zip_code, 'US', start=d1, end=d2)

    precipitation_data = []

    for i in observations:
        if i['precipitationLast6Hours']['value']:
            precipitation_data += i['precipitationLast6Hours']['value']

    if len(precipitation_data)==0:
        prec = 0
    else:
        prec = precipitation_data[-1]*0.001

    data = dict()
    data['temperature'] = f_to_k(res[0]['temperature'])
    data['windSpeed'] = mile_to_meter(res[0]['windSpeed'])
    data['dewpoint'] = c_to_k(res[0]['dewpoint']['value'])
    data['precipitation'] = prec
    return data

# print(f"The current temperature is: {f_to_k(res[0]['temperature'])} K")
# print(f"The current wind speed is: {res[0]['windSpeed']} mph")
# print(f"The current dew point is: {c_to_k(res[0]['dewpoint']['value'])} K")
