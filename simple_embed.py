import base64
import json

# Read the main hero image (IMG-20251012-WA0076.jpg)
try:
    with open("/workspace/user_input_files/IMG-20251012-WA0076.jpg", "rb") as f:
        hero_base64 = base64.b64encode(f.read()).decode('utf-8')
    print(f"Hero image length: {len(hero_base64)}")
    print("Hero image base64:", hero_base64[:100] + "...")
except Exception as e:
    print(f"Error reading hero image: {e}")

# Read the about image (IMG-20251012-WA0067.jpg)  
try:
    with open("/workspace/user_input_files/IMG-20251012-WA0067.jpg", "rb") as f:
        about_base64 = base64.b64encode(f.read()).decode('utf-8')
    print(f"About image length: {len(about_base64)}")
    print("About image base64:", about_base64[:100] + "...")
except Exception as e:
    print(f"Error reading about image: {e}")

# Create image data for HTML embedding
image_data = {
    "hero": f"data:image/jpeg;base64,{hero_base64}",
    "about": f"data:image/jpeg;base64,{about_base64}"
}

# Save to file
with open("/workspace/embedded_images.json", "w") as f:
    json.dump(image_data, f)

print("Images processed and saved to embedded_images.json")