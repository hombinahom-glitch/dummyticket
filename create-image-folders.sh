#!/bin/bash

# Script untuk membuat struktur folder images portfolio
# Run: bash create-image-folders.sh

echo "==================================="
echo "Creating Portfolio Image Folders"
echo "==================================="

# Create main images directory
mkdir -p images/portfolio

# Create Photography subdirectories
echo "Creating Photography folders..."
mkdir -p images/portfolio/wedding
mkdir -p images/portfolio/product
mkdir -p images/portfolio/portrait
mkdir -p images/portfolio/event

# Create UI/UX subdirectories
echo "Creating UI/UX folders..."
mkdir -p images/portfolio/uiux
mkdir -p images/portfolio/mobile

# Create Social Media subdirectories
echo "Creating Social Media folders..."
mkdir -p images/portfolio/social
mkdir -p images/portfolio/instagram

echo ""
echo "✓ Folder structure created successfully!"
echo ""
echo "Folder structure:"
echo "images/"
echo "└── portfolio/"
echo "    ├── wedding/"
echo "    ├── product/"
echo "    ├── portrait/"
echo "    ├── event/"
echo "    ├── uiux/"
echo "    ├── mobile/"
echo "    ├── social/"
echo "    └── instagram/"
echo ""
echo "Next steps:"
echo "1. Add your photos to the respective folders"
echo "2. Make sure filenames match the ones in script.js"
echo "3. Refer to README-IMAGES.md for detailed instructions"
echo ""
