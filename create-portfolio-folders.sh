#!/bin/bash

# Script untuk membuat struktur folder images portfolio
# Run: bash create-portfolio-folders.sh

echo "==========================================="
echo " CREATING PORTFOLIO FOLDER STRUCTURE"
echo "==========================================="
echo ""

# Create main images directory
echo "Creating main directories..."
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
echo "    ├── wedding/        (6 foto)"
echo "    ├── product/        (6 foto)"
echo "    ├── portrait/       (6 foto)"
echo "    ├── event/          (6 foto)"
echo "    ├── uiux/           (6 screenshot)"
echo "    ├── mobile/         (6 screenshot)"
echo "    ├── social/         (6 content)"
echo "    └── instagram/      (6 content)"
echo ""
echo "📝 Next steps:"
echo "1. Upload your photos to the respective folders"
echo "2. Make sure filenames match EXACTLY with script.js"
echo "   Example: ceremony-moment.jpg (lowercase, with dash)"
echo "3. Total 48 photos needed"
echo "4. Open portfolio.html and click any subcategory to test!"
echo ""
echo "📖 Refer to README-PORTFOLIO.md for detailed instructions"
echo ""
