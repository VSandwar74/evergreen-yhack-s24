# from dotenv import load_dotenv
import os
from supabase import create_client, Client 
# from environ_config import Env

# env = Env()
# url = env.NEXT_PUBLIC_SUPABASE_URL
# key = env.NEXT_PUBLIC_SUPABASE_ANON_KEY

url="https://fggttoknlqspnlzgtkeo.supabase.co"
key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnZ3R0b2tubHFzcG5semd0a2VvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4MjgzMDIsImV4cCI6MjAyNzQwNDMwMn0.Yp64rX5uIISnHqNV7GGCsD8XJfiwwhhkQOTUWdXYeNY"

# url: str = os.environ.get("NEXT_PUBLIC_SUPABASE_URL")
# key: str = os.environ.get("NEXT_PUBLIC_SUPABASE_ANON_KEY")
supabase: Client = create_client(url, key)

def get_poly(lat, long):
    data, count = supabase.rpc('get_closest_parcel_point_pairs', {'latitude': lat, 'longitude': long}).execute()
    return data[1][0]['point_pairs']