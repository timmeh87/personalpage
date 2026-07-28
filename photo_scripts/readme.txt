# IMAGE PROCESSING WORKFLOW

This folder contains the scripts used to prepare image assets for the website gallery.

The scripts use ImageMagick to process source image folders (for example, /photos and /projects) and generate:

* Web-optimized .webp images for the full-size gallery viewer
* Smaller thumbnail versions for gallery grids
* A TypeScript image metadata array used by the website

The workflow is designed so that new images can be added in batches:

1. Drop source image folders into this directory
2. Run the processing scripts
3. Copy the generated images into the website image folders
4. Replace/update the generated TypeScript image array
5. Rebuild the website

The scripts can be run using Git Bash on Windows or directly from a Linux terminal, provided ImageMagick and FFmpeg are installed.

# IMPORTANT: IMAGE FILES NOT INCLUDED

The processed image files are intentionally not committed to this repository.

The gallery contains a large number of high-resolution images, and committing them would unnecessarily inflate the repository size. The scripts and metadata generation workflow are included instead, allowing the image assets to be regenerated locally.

If you want to reproduce the gallery contents, provide the source images and run the processing scripts.

# CURRENT GALLERY STRUCTURE

The website currently expects two galleries:

```
/photos
/projects
```

The gallery system is mostly parameterized and can support additional galleries, but adding a new gallery currently requires some additional wiring:

* Adding the gallery data
* Creating links/cards on the main page
* Adding any required navigation or presentation elements

The underlying gallery components are designed to support expansion.

# IMAGE METADATA

The generated TypeScript image array currently includes:

* Image filenames
* Gallery paths
* Titles
* Descriptions
* Sorting metadata
* Featured image information

The generation script currently creates the image entries without titles or descriptions. If the script is rerun, manually edited metadata will be overwritten.

A future improvement would be a metadata migration script that imports existing titles, descriptions, and other fields from the previous generated file into the updated array. This would allow images to be regenerated without losing manual edits.

For the current workflow, manual metadata updates have been sufficient.
