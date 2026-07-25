export interface GalleryImage {
    image: string;
    title: string;
    description: string;
    sortOrder: number;
    featured: boolean;
}

export interface GalleryCollection {
    title: string;
    description: string;
    slug: string;
    path: string;
    images: GalleryImage[];
}

const placeholder = "/profile/images/placeholder.webp";

export const galleryCollections: GalleryCollection[] = [
  {
    slug: "projects",
    title: "Projects",
    description: "",
    path: "projects",
    images: [
      {
        image: "20150424_030149.webp",
        title: "20150424_030149",
        description: "",
		sortOrder: -1,
		featured: true
      }
,
      {
        image: "20220617_164346.webp",
        title: "20220617_164346",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "20220617_164444.webp",
        title: "20220617_164444",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "20250718_002926.webp",
        title: "20250718_002926",
        description: "",
		sortOrder: -1,
		featured: true
      }
,
      {
        image: "20250803_234518.webp",
        title: "20250803_234518",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "20250929_210644.webp",
        title: "20250929_210644",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "IMG-20251221-WA0016.webp",
        title: "IMG-20251221-WA0016",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "Photo0377.webp",
        title: "Photo0377",
        description: "",
		sortOrder: -1,
		featured: true
      }
    ]
  }
,
  {
    slug: "photos",
    title: "Photos",
    description: "",
    path: "photos",
    images: [
      {
        image: "001_bridge_night.webp",
        title: "001_bridge_night",
        description: "",
		sortOrder: -1,
		featured: true
      }
,
      {
        image: "002_bruce_2.webp",
        title: "002_bruce_2",
        description: "",
		sortOrder: -1,
		featured: true
      }
,
      {
        image: "003_copper_mine_1.webp",
        title: "003_copper_mine_1",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "004_bluebird.webp",
        title: "004_bluebird",
        description: "",
		sortOrder: -1,
		featured: true
      }
,
      {
        image: "005_squamish.webp",
        title: "005_squamish",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "005b_lizard.webp",
        title: "005b_lizard",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "006_rainbow.webp",
        title: "006_rainbow",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "007_salt.webp",
        title: "007_salt",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "008_bruce_1.webp",
        title: "008_bruce_1",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "009_mushroom_red1.webp",
        title: "009_mushroom_red1",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "010_bc_trail_1.webp",
        title: "010_bc_trail_1",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "011_darlington_doll.webp",
        title: "011_darlington_doll",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "012_fire_colors.webp",
        title: "012_fire_colors",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "013_sap_sun.webp",
        title: "013_sap_sun",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "014_turks_caicos.webp",
        title: "014_turks_caicos",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "015_ducks.webp",
        title: "015_ducks",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "016_light_grid.webp",
        title: "016_light_grid",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "017_bromeliad.webp",
        title: "017_bromeliad",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "018_horses.webp",
        title: "018_horses",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "019_butterfly.webp",
        title: "019_butterfly",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "020_tree.webp",
        title: "020_tree",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "021_boat.webp",
        title: "021_boat",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "021_flowers.webp",
        title: "021_flowers",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "022_boat.webp",
        title: "022_boat",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "023_canoe.webp",
        title: "023_canoe",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "024_canoe.webp",
        title: "024_canoe",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "025_canoe.webp",
        title: "025_canoe",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "026_canoe.webp",
        title: "026_canoe",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "027_loons.webp",
        title: "027_loons",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "028_slime.webp",
        title: "028_slime",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "028b_urchin.webp",
        title: "028b_urchin",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "029_aurora.webp",
        title: "029_aurora",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "030_aurora.webp",
        title: "030_aurora",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "031_aurora.webp",
        title: "031_aurora",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "032_aurora.webp",
        title: "032_aurora",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "033_bikes.webp",
        title: "033_bikes",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "034_owl.webp",
        title: "034_owl",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "035_waxwing.webp",
        title: "035_waxwing",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "037_quail.webp",
        title: "037_quail",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "038_killdeer.webp",
        title: "038_killdeer",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "039_slug.webp",
        title: "039_slug",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "040_bc_tree.webp",
        title: "040_bc_tree",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "041_mine.webp",
        title: "041_mine",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "042_mine.webp",
        title: "042_mine",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "043_mine.webp",
        title: "043_mine",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "044_desert.webp",
        title: "044_desert",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "045_skeet.webp",
        title: "045_skeet",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "046_canyon.webp",
        title: "046_canyon",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "047_rockies.webp",
        title: "047_rockies",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "048_bunting.webp",
        title: "048_bunting",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "049_kingfisher.webp",
        title: "049_kingfisher",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "050_eclips.webp",
        title: "050_eclips",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "051_elcipse.webp",
        title: "051_elcipse",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "052_niagara.webp",
        title: "052_niagara",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "053_tree.webp",
        title: "053_tree",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "054_mallstar.webp",
        title: "054_mallstar",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "055_mushroom_red.webp",
        title: "055_mushroom_red",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "055b_mushroom_white.webp",
        title: "055b_mushroom_white",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "056_mushroom_yellow.webp",
        title: "056_mushroom_yellow",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "057_mushroom_red.webp",
        title: "057_mushroom_red",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "058_mushroom_pink.webp",
        title: "058_mushroom_pink",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "059_flower_parasite.webp",
        title: "059_flower_parasite",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "060_flower_parasite.webp",
        title: "060_flower_parasite",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "061_bruce.webp",
        title: "061_bruce",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "062_bruce.webp",
        title: "062_bruce",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "063_humber.webp",
        title: "063_humber",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "064_bc_tower.webp",
        title: "064_bc_tower",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "065_isopod.webp",
        title: "065_isopod",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "066_bc_trail.webp",
        title: "066_bc_trail",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "067_niagara_tunnel.webp",
        title: "067_niagara_tunnel",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "068_humber_fall.webp",
        title: "068_humber_fall",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "069_bloor_street.webp",
        title: "069_bloor_street",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "070_lost_tbm.webp",
        title: "070_lost_tbm",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "071_top_hat.webp",
        title: "071_top_hat",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "072_skyline.webp",
        title: "072_skyline",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "073_snow_portrait.webp",
        title: "073_snow_portrait",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "074_harold_point.webp",
        title: "074_harold_point",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "075_cansec.webp",
        title: "075_cansec",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "076_cansec.webp",
        title: "076_cansec",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "077_greenhouse_tree.webp",
        title: "077_greenhouse_tree",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "078_snake_plant_flower.webp",
        title: "078_snake_plant_flower",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "079_yucca_long_point.webp",
        title: "079_yucca_long_point",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "080_killarney_panorama.webp",
        title: "080_killarney_panorama",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "081_parliament.webp",
        title: "081_parliament",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "082_plant_move.webp",
        title: "082_plant_move",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "083_colorful_moth.webp",
        title: "083_colorful_moth",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "084_boats.webp",
        title: "084_boats",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "085_cemetary.webp",
        title: "085_cemetary",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "086_boating_humber.webp",
        title: "086_boating_humber",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "087_trestle.webp",
        title: "087_trestle",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "088_copper_mine.webp",
        title: "088_copper_mine",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "089_hells_gate.webp",
        title: "089_hells_gate",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "090_smokey_christmas.webp",
        title: "090_smokey_christmas",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "091_ride_for_heart.webp",
        title: "091_ride_for_heart",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "092_berries.webp",
        title: "092_berries",
        description: "",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "093_chickadees.webp",
        title: "093_chickadees",
        description: "",
		sortOrder: -1,
		featured: false
      }
    ]
  }
]
;