import shutil
import os

# Source directory
source_dir = "/workspace/user_input_files"
# Destination directory for enhanced portfolio
dest_dir = "/workspace/portfolio-enhanced/images"

# Create destination directory if it doesn't exist
os.makedirs(dest_dir, exist_ok=True)

# Define image mappings for better organization
image_mappings = {
    "IMG-20251012-WA0076.jpg": "hero-profile.jpg",
    "IMG-20251012-WA0067.jpg": "about-cert.jpg",
    "IMG-20251012-WA0078.jpg": "experience-timeline.jpg",
    "IMG-20251012-WA0079.jpg": "publication-featured.jpg",
    "IMG-20251012-WA0080.jpg": "impact-leadership.jpg",
    "IMG-20251012-WA0065.jpg": "contact-social.jpg",
    "IMG-20251012-WA0066.jpg": "additional-1.jpg",
    "IMG-20251012-WA0068.jpg": "additional-2.jpg",
    "IMG-20251012-WA0069.jpg": "additional-3.jpg"
}

# Copy images with organized names
copied_count = 0
for source_filename, dest_filename in image_mappings.items():
    source_file = os.path.join(source_dir, source_filename)
    dest_file = os.path.join(dest_dir, dest_filename)
    
    if os.path.exists(source_file):
        shutil.copy2(source_file, dest_file)
        print(f"✓ Copied {source_filename} -> {dest_filename}")
        copied_count += 1
    else:
        print(f"✗ Source file not found: {source_file}")

print(f"\nCompleted! {copied_count} images copied to {dest_dir}")

# Verify the files exist
if os.path.exists(dest_dir):
    files = os.listdir(dest_dir)
    print(f"Images directory now contains {len(files)} files:")
    for file in sorted(files):
        print(f"  - {file}")
else:
    print("Error: Images directory was not created!")