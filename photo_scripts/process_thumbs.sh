#!/usr/bin/env bash

ROOT="."

for CATEGORY in projects photos
do
    find "$ROOT/$CATEGORY" -type f \
        \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.tif" -o -iname "*.tiff" \) |
    while read -r FILE
    do
        REL="${FILE#$ROOT/$CATEGORY/}"

        THUMB="$ROOT/output/thumbs/$CATEGORY/${REL%.*}.webp"
        IMAGE="$ROOT/output/images/$CATEGORY/${REL%.*}.webp"

        mkdir -p "$(dirname "$THUMB")"
        mkdir -p "$(dirname "$IMAGE")"

        echo "Processing $REL"

        magick "$FILE" \
			-auto-orient \
            -strip \
            -resize "400x400>" \
            -quality 20 \
            -define webp:method=6 \
            "$THUMB"

        magick "$FILE" \
			-auto-orient \
            -strip \
            -resize "2000x2000>" \
            -quality 30 \
            -define webp:method=6 \
            "$IMAGE"
    done
done

echo "Done!"