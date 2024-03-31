import json

# Open the JSON file and load its contents
# with open('../dummy/dummy_geo.json', 'r') as file:
#     data = json.load(file)

def find_min_long_lat(point_pairs):
    min_long = float('inf')
    min_lat = float('inf')
    
    for pair in point_pairs:
        long, lat = pair
        if long < min_long:
            min_long = long
        if lat < min_lat:
            min_lat = lat
    
    return min_long, min_lat

def geo_to_cartesian(point_pairs):
    min_long, min_lat = find_min_long_lat(point_pairs)
    cartesian_points = []
    
    for pair in point_pairs:
        long, lat = pair
        cartesian_points.append([long - min_long, lat - min_lat])
    
    return min_long, min_lat, cartesian_points
    # json_data = json.dumps({"point_pairs": cartesian_points})

def cartesian_to_geo(min_long, min_lat, cartesian_points):
    point_pairs = []
    
    for pair in cartesian_points:
        long, lat = pair
        point_pairs.append([long + min_long, lat + min_lat])
    
    return point_pairs
    # json_data = json.dumps({"point_pairs": point_pairs})

# with open('/Users/VishakhS/evergreen-yhack-s24/server/util/doub.json', 'w') as file:
#     json.dump({"point_pairs": cartesian_points}, file)  # Returns the JSON representation of the point pairs
