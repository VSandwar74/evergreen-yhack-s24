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
    #G = MJ/m2/day, assume 0
    #R = MJ/m2/day, assume 20
    
    #num = []
    ET = [0] * 30
    print(f"len of T: {len(T)}")
    print(f"len of u2: {len(u2)}")
    print(f"len of dew: {len(dew)}")
    print(f"len of P: {len(P)}")

    for i in range(30):
        num = (0.408 * D(T[i]) * (Rn - G) + y * (900 / T[i]) * u2[i] * (vapor_pressure(T[i]) - vapor_pressure(dew[i])))
        den = (D(T[i]) + y * (1 + 0.34 * u2[i]))
        # print(num, den)
        ET[i] = (0.408 * D(T[i]) * (Rn - G) + y * (900 / T[i]) * u2[i] * (vapor_pressure(T[i]) - vapor_pressure(dew[i]))) / (D(T[i]) + y * (1 + 0.34 * u2[i]))
    
    X = [0] * 30
    Y = [0] * 30 
    for i in range(30):
        Y[i] = Y[i-1] + X[i-1] + P[i] - ET[i]
        if Y[i] > target:
            X[i] = 0
        else:
            X[i] = target - Y[i]
    return str(X[-1])
