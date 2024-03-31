import math

def vapor_pressure(T): #calculates vapor pressure in kPa
    e = 6.11 * 10 ** ( (7.5 * (T - 273)) / (237.3 + (T - 273)))
    return e

def D(T): #Calculates Slope of temp vs. saturation vapor pressure curve in kPa/K
    D = math.log(10) * 6.11 * 7.5 * 237.3 * 10 ** ( (7.5 * (T - 273)) / (237.3 + (T - 273))) / (((T - 273) + 237.3) ** 2)
    return D

def sprinkle(target, P, T, u2, dew, y=0.066, Rn=20, G=0): #calculates evapotranspiration in mm/day
    #T = K <-- INPUT temperature in Kelvin
    #u2 = m/s <-- INPUT wind speed in m/s
    #dew = K <-- INPUT dewpoint 
    #P = mm/day <-- INPUT precipitation? missing

    #D = kPa/K
    #es = kPa
    #ea = kPa
    #y = kPa/K, assume 0.066
    #G = MJ/m2/day, assume 0???
    #R = MJ/m2/day, assume ???
    
    ET = (0.408 * D(T) * (Rn - G) + y * (900 / T) * u2 * (vapor_pressure(T) - vapor_pressure(dew))) / (D + y(1 + 0.34 * u2))
    output = target - P + ET
    return output

