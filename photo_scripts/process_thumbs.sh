process_file() {
    FILE="$1"
    CATEGORY="$2"
    REL="${FILE#./$CATEGORY/}"
    THUMB="./output/thumbs/$CATEGORY/${REL%.*}.webp"
    IMAGE="./output/images/$CATEGORY/${REL%.*}.webp"
    mkdir -p "$(dirname "$THUMB")" "$(dirname "$IMAGE")"
    echo "Processing $REL"

    if [[ "$FILE" =~ \.mp4$ ]]; then
        ffmpeg -nostdin -y -i "$FILE" -map 0:v:0 \
            -vf "fps=10,scale=w='min(400,iw)':h='min(400,ih)':force_original_aspect_ratio=decrease" \
            -loop 0 -quality 20 -compression_level 6 -an "$THUMB"
        ffmpeg -nostdin -y -i "$FILE" -map 0:v:0 \
            -vf "fps=15,scale=w='min(2000,iw)':h='min(2000,ih)':force_original_aspect_ratio=decrease" \
            -loop 0 -quality 30 -compression_level 6 -an "$IMAGE"
    else
        magick "$FILE" -auto-orient -strip -resize "400x400>" -quality 20 -define webp:method=6 "$THUMB"
        magick "$FILE" -auto-orient -strip -resize "2000x2000>" -quality 30 -define webp:method=6 "$IMAGE"
    fi
}
export -f process_file

for CATEGORY in projects photos; do
    find "./$CATEGORY" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.tif" -o -iname "*.tiff" -o -iname "*.mp4" \) \
        | xargs -I{} -P "$(nproc)" bash -c 'process_file "$@"' _ {} "$CATEGORY"
done