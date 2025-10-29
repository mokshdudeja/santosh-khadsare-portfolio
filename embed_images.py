#!/usr/bin/env python3
import base64
import os
import json

def image_to_base64(image_path):
    """Convert image to base64 string"""
    try:
        with open(image_path, "rb") as img_file:
            return base64.b64encode(img_file.read()).decode('utf-8')
    except Exception as e:
        print(f"Error processing {image_path}: {e}")
        return None

def main():
    # Define image mappings according to content structure plan
    image_mappings = {
        "IMG-20251012-WA0076.jpg": "hero_profile",  # Hero section
        "IMG-20251012-WA0067.jpg": "about_cert",    # About section
        "IMG-20251012-WA0078.jpg": "experience_timeline",  # Experience section
        "IMG-20251012-WA0079.jpg": "publication_featured", # Publications section
        "IMG-20251012-WA0080.jpg": "impact_leadership",    # Impact section
        "IMG-20251012-WA0065.jpg": "contact_social",       # Contact/Social section
        "IMG-20251012-WA0066.jpg": "additional_1",         # Additional section
        "IMG-20251012-WA0068.jpg": "additional_2",         # Additional section  
        "IMG-20251012-WA0069.jpg": "additional_3",         # Additional section
    }
    
    # Convert images to base64
    image_data = {}
    for image_filename, purpose in image_mappings.items():
        image_path = f"/workspace/user_input_files/{image_filename}"
        if os.path.exists(image_path):
            base64_data = image_to_base64(image_path)
            if base64_data:
                image_data[purpose] = {
                    "filename": image_filename,
                    "base64": base64_data
                }
                print(f"✓ Processed {image_filename} for {purpose}")
            else:
                print(f"✗ Failed to process {image_filename}")
        else:
            print(f"✗ Image not found: {image_path}")
    
    # Save image data to JSON file
    with open("/workspace/image_data.json", "w") as f:
        json.dump(image_data, f, indent=2)
    
    print(f"\nProcessed {len(image_data)} images successfully!")
    print("Image data saved to /workspace/image_data.json")
    
    # Display the base64 strings for the main images we'll use
    print("\nMain images for HTML integration:")
    for purpose in ["hero_profile", "about_cert", "experience_timeline", "publication_featured", "impact_leadership"]:
        if purpose in image_data:
            print(f"{purpose}: data:image/jpeg;base64,{image_data[purpose]['base64'][:50]}...")

if __name__ == "__main__":
    main()