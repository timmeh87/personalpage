#!/usr/bin/env bash

ROOT="./output/images"
OUT="gallery.json"

echo "[" > "$OUT"

FIRST_CATEGORY=true

for CATEGORY in projects photos
do
    if [ "$FIRST_CATEGORY" = false ]; then
        echo "," >> "$OUT"
    fi

    FIRST_CATEGORY=false

    TITLE=$(echo "$CATEGORY" | sed 's/.*/\u&/')

    cat >> "$OUT" <<EOF
  {
    slug: "$CATEGORY",
    title: "$TITLE",
    description: "",
    path: "/profile/images/$CATEGORY",
    images: [
EOF

    FIRST_IMAGE=true

    find "$ROOT/$CATEGORY" -type f -iname "*.webp" | sort |
    while read -r FILE
    do
        NAME=$(basename "$FILE")
        TITLE="${NAME%.*}"

        if [ "$FIRST_IMAGE" = false ]; then
            echo "," >> "$OUT"
        fi

        FIRST_IMAGE=false

        cat >> "$OUT" <<EOF
      {
        image: "$NAME",
        title: "$TITLE",
        description: ""
      }
EOF

    done

    cat >> "$OUT" <<EOF
    ]
  }
EOF

done

echo "]" >> "$OUT"

echo "Generated $OUT"