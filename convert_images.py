import base64
import os

def image_to_base64(image_path):
    """Convert image file to base64 data URL"""
    with open(image_path, 'rb') as img_file:
        img_data = img_file.read()
        base64_data = base64.b64encode(img_data).decode('utf-8')
        
        # Determine MIME type based on file extension
        if image_path.lower().endswith('.jpg') or image_path.lower().endswith('.jpeg'):
            mime_type = 'image/jpeg'
        elif image_path.lower().endswith('.png'):
            mime_type = 'image/png'
        else:
            mime_type = 'image/jpeg'  # default
        
        return f"data:{mime_type};base64,{base64_data}"

# Process all images
images_dir = "/workspace/user_input_files"
output_dir = "/workspace/images-base64"
os.makedirs(output_dir, exist_ok=True)

image_data = {}
for filename in os.listdir(images_dir):
    if filename.endswith(('.jpg', '.jpeg', '.png')):
        source_path = os.path.join(images_dir, filename)
        try:
            base64_data = image_to_base64(source_path)
            image_data[filename] = base64_data
            print(f"Converted: {filename} ({len(base64_data)} chars)")
        except Exception as e:
            print(f"Error converting {filename}: {e}")

# Save to a JSON file for use in HTML
import json
with open(os.path.join(output_dir, "images.json"), 'w') as f:
    json.dump(image_data, f, indent=2)

print(f"Converted {len(image_data)} images to base64")