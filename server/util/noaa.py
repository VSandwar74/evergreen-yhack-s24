from noaa_sdk import NOAA

def f_to_k(temp):
    kel = (temp - 32)*(5/9) + (273.15)
    return(kel)

def mile_to_meter(mile):
    meter = mile/2.237
    return(meter)

def c_to_k(temp):
    return(temp + 273.15)

def get_forecasts(zip_code, country_code) -> dict:
    n = NOAA()
    res = n.get_forecasts(zip_code, country_code)
    data = dict()
    print(res[0])
    print(f"\n temperature: {res[0]['temperature']} \n wind; {res[0]['windSpeed']} \n dew: {res[0]['dewpoint']['value']}")
    data['temperature'] = f_to_k(res[0]['temperature'])
    data['windSpeed'] = mile_to_meter(res[0]['windSpeed'])
    data['dewpoint'] = c_to_k(res[0]['dewpoint']['value'])
    return data

# print(f"The current temperature is: {f_to_k(res[0]['temperature'])} K")
# print(f"The current wind speed is: {res[0]['windSpeed']} mph")
# print(f"The current dew point is: {c_to_k(res[0]['dewpoint']['value'])} K")
