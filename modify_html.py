#!/usr/bin/env python3
"""
Script to embed actual images into the HTML portfolio file
"""

def replace_hero_image(html_content):
    """Replace the hero section placeholder with actual image"""
    # Define the placeholder section to replace
    placeholder_start = """<div class="w-full h-full flex items-center justify-center text-text-secondary">
                                <div class="text-center">
                                    <div class="w-24 h-24 mx-auto mb-2 rounded-full bg-accent-primary/20 flex items-center justify-center">
                                        <svg class="w-12 h-12 text-accent-primary" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                                        </svg>
                                    </div>
                                    <p class="text-xs">Professional Photo</p>
                                </div>
                            </div>"""
    
    # Define the replacement with actual image
    replacement = """<img src="/workspace/user_input_files/IMG-20251012-WA0076.jpg" alt="Lt Col (Dr) Santosh Khadsare - Professional Photo" class="w-full h-full object-cover">"""
    
    # Replace in the content
    html_content = html_content.replace(placeholder_start, replacement)
    return html_content

def replace_about_image(html_content):
    """Replace the about section placeholder with actual image"""
    # Define the placeholder section to replace
    placeholder_start = """<div class="w-full h-full flex items-center justify-center text-text-secondary">
                                <div class="text-center">
                                    <div class="w-20 h-20 mx-auto mb-4 rounded-lg bg-accent-primary/20 flex items-center justify-center">
                                        <svg class="w-10 h-10 text-accent-primary" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                                        </svg>
                                    </div>
                                    <p class="text-lg font-semibold">CERT-In Office</p>
                                    <p class="text-sm">Professional Work Environment</p>
                                </div>
                            </div>"""
    
    # Define the replacement with actual image
    replacement = """<img src="/workspace/user_input_files/IMG-20251012-WA0067.jpg" alt="CERT-In Office Environment" class="w-full h-full object-cover">"""
    
    # Replace in the content
    html_content = html_content.replace(placeholder_start, replacement)
    return html_content

def main():
    # Read the existing HTML file
    with open("/workspace/portfolio-enhanced/index.html", "r", encoding='utf-8') as f:
        html_content = f.read()
    
    print("Original HTML file loaded")
    print(f"File size: {len(html_content)} characters")
    
    # Replace the placeholder images with actual images
    html_content = replace_hero_image(html_content)
    print("✓ Hero image replaced")
    
    html_content = replace_about_image(html_content)
    print("✓ About image replaced")
    
    # Write the modified HTML file
    with open("/workspace/portfolio-enhanced/index.html", "w", encoding='utf-8') as f:
        f.write(html_content)
    
    print("✓ Modified HTML file saved")
    print("Images have been integrated into the portfolio website")

if __name__ == "__main__":
    main()