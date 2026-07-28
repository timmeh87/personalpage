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
    description: "More to come soon",
    path: "projects",
    images: [
      {
        image: "20150424_030149.webp",
        title: "POV light toy",
        description: "PCB of a prototype POV light toy I designed and built in 2015",
		sortOrder: -1,
		featured: true
      }
,
      {
        image: "20220617_164346.webp",
        title: "Mouse PCB",
        description: "Basic computer mouse PCB I designed and assembled for a project at Dexlabs",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "20220617_164444.webp",
        title: "Mouse Jig",
        description: "3D Printed Assembly Jig for the mouse PCB, to hold on the components while soldering",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "20250718_002926.webp",
        title: "USB PCB",
        description: "PCB for a USB HID device I designed at Dexlabs",
		sortOrder: -1,
		featured: true
      }
,
      {
        image: "20250803_234518.webp",
        title: "Server",
        description: "My Lenovo ThinkServer RD650 with 3D printed drive caddies. This is the machine that hosts this website",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "20250929_210644.webp",
        title: "Homelab",
        description: "My Server rack. Made out of wood and metal L brackets - much cheaper than buying a real rack and rails for everything",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "IMG-20251221-WA0016.webp",
        title: "Shelf project",
        description: "3d model of some shelves I built out of dimensional lumber",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "Photo0377.webp",
        title: "Tube Distortion",
        description: "A vaccum tube distortion pedal I designed and built as a fun project. Featuring my salvaged Phillips CRT scope",
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
        title: "Bridge At Night",
        description: "The Old Mill bridge at night, Humber river, Toronto",
		sortOrder: -1,
		featured: true
      }
,
      {
        image: "002_bruce_2.webp",
        title: "002_bruce_2",
        description: "Bruce Peninsula National Park, Ontario - Hike to Halfway Log Dump",
		sortOrder: -1,
		featured: true
      }
,
      {
        image: "003_copper_mine_1.webp",
        title: "003_copper_mine_1",
        description: "Inside the Concentrator Building at Britannia Copper Mine, BC",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "004_bluebird.webp",
        title: "004_bluebird",
        description: "Eastern Bluebird perched on a branch, Ontario",
		sortOrder: -1,
		featured: true
      }
,
      {
        image: "005_squamish.webp",
        title: "005_squamish",
        description: "View from Sea to Sky Gondola (the one someone keeps cutting) - Squamish, BC",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "005b_lizard.webp",
        title: "005b_lizard",
        description: "Green Anole Lizard. Myrtle Beach, SC",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "006_rainbow.webp",
        title: "006_rainbow",
        description: "Rainbow over a music festival. Toronto",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "007_salt.webp",
        title: "007_salt",
        description: "Accidentally grew some salt crystals in a beaker",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "008_bruce_1.webp",
        title: "008_bruce_1",
        description: "Blue waters and surprisingly square rock. Bruce Peninsula National Park, trail to halfway log dump",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "009_mushroom_red1.webp",
        title: "009_mushroom_red1",
        description: "On one camping trip in Algonquin there was a huge abundance of strange mushrooms",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "010_bc_trail_1.webp",
        title: "010_bc_trail_1",
        description: "Old growth forest. Vancouver Island, BC",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "011_darlington_doll.webp",
        title: "011_darlington_doll",
        description: "Darlington Provincial Park. Darlington, Ontario",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "012_fire_colors.webp",
        title: "012_fire_colors",
        description: "Colorful campfire. They sell chemicals to add to your fire",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "013_sap_sun.webp",
        title: "013_sap_sun",
        description: "Tree sap glowing in the sun",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "014_turks_caicos.webp",
        title: "014_turks_caicos",
        description: "Turks and Caicos at sunset. Did not go, happened to fly over it once",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "015_ducks.webp",
        title: "015_ducks",
        description: "A family of wood ducks. Rennie park, Toronto",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "016_light_grid.webp",
        title: "016_light_grid",
        description: "The financial buildings in downtown Toronto have the best decorations",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "017_bromeliad.webp",
        title: "017_bromeliad",
        description: "Did you know that air plants will flower if you take care of them. They need water",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "018_horses.webp",
        title: "018_horses",
        description: "Riding horses in Lake Erie",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "019_butterfly.webp",
        title: "019_butterfly",
        description: "Swallowtail butterfly in my backyard",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "020_tree.webp",
        title: "020_tree",
        description: "A tree growing on another tree. Vancouver Island, BC",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "021_boat.webp",
        title: "021_boat",
        description: "La Grand Hermine. The 'QEW pirate ship' has since been removed. Jordan Harbour, Ontario",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "021_flowers.webp",
        title: "021_flowers",
        description: "Intersting flowers at a restaurant",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "022_boat.webp",
        title: "022_boat",
        description: "La Grand Hermine. The 'QEW pirate ship' has since been removed. Jordan Harbour, Ontario",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "023_canoe.webp",
        title: "023_canoe",
        description: "Preparing to start a canoe camping trip. Killarney, Ontario",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "024_canoe.webp",
        title: "024_canoe",
        description: "Portaging on a camping trip. Killarney, Ontario",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "025_canoe.webp",
        title: "025_canoe",
        description: "Pulling over a beaver dam on a camping trip. Killarney, Ontario",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "026_canoe.webp",
        title: "026_canoe",
        description: "Portaging on a camping trip. Killarney, Ontario",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "027_loons.webp",
        title: "027_loons",
        description: "These loons had no problem with us canoeing past. They barely moved out of the way. Killarney, Ontario",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "028_slime.webp",
        title: "028_slime",
        description: "Dog vomit slime mold. Humber River marshes, Toronto",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "028b_urchin.webp",
        title: "028b_urchin",
        description: "Sea urchin. Botanical Beach, Vancouver Island",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "029_aurora.webp",
        title: "029_aurora",
        description: "The fist time I saw the aurora was in my backyard in St. Catharines",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "030_aurora.webp",
        title: "030_aurora",
        description: "The fist time I saw the aurora was in my backyard in St. Catharines",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "031_aurora.webp",
        title: "031_aurora",
        description: "The fist time I saw the aurora was in my backyard in St. Catharines",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "032_aurora.webp",
        title: "032_aurora",
        description: "The fist time I saw the aurora was in my backyard in St. Catharines",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "033_bikes.webp",
        title: "033_bikes",
        description: "Niagara glow riders at Sunset Beach, St. Catharines",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "034_owl.webp",
        title: "034_owl",
        description: "We had a raptor show at our wedding. This tiny owl is the cutest",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "035_waxwing.webp",
        title: "035_waxwing",
        description: "Cedar waxwing",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "037_quail.webp",
        title: "037_quail",
        description: "Quails in Kelowna BC",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "038_killdeer.webp",
        title: "038_killdeer",
        description: "Killdeer",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "039_slug.webp",
        title: "039_slug",
        description: "Banana slug, Botanical Beach, Vancouver Island",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "040_bc_tree.webp",
        title: "040_bc_tree",
        description: "A tree growing on another tree, Vancouver Island",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "041_mine.webp",
        title: "041_mine",
        description: "Entrance to abandoned Blue Hawk mine. Near Kelowna BC",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "042_mine.webp",
        title: "042_mine",
        description: "Exploring abandoned mine. Near Kelowna BC",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "043_mine.webp",
        title: "043_mine",
        description: "Exploring abandoned mine. Near Kelowna BC",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "044_desert.webp",
        title: "044_desert",
        description: "Osoyoos Desert. Okanagan Valley, BC",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "045_skeet.webp",
        title: "045_skeet",
        description: "We drove to the top of a mountain and there was a group of people just casually shooting skeet with real guns. British Columbia",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "046_canyon.webp",
        title: "046_canyon",
        description: "Biking myra canyon on an old rail line. Near Kelowna, British Columbia",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "047_rockies.webp",
        title: "047_rockies",
        description: "Rockies as seen from an airplane",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "048_bunting.webp",
        title: "048_bunting",
        description: "Indigo bunting. An elusive bird in Ontario",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "049_kingfisher.webp",
        title: "049_kingfisher",
        description: "Kingfisher on a pier. British Columbia",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "050_eclips.webp",
        title: "050_eclips",
        description: "2024 solar elcipse during totality. Jordan Harbor, Ontario",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "051_elcipse.webp",
        title: "051_elcipse",
        description: "2024 solar elcipse, diamond ring effect. Jordan Harbor, Ontario",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "052_niagara.webp",
        title: "052_niagara",
        description: "Niagara falls from a helicopter",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "053_tree.webp",
        title: "053_tree",
        description: "Lone pine tree. Named 'Big Lonely Doug'. Left behind by a logger, surrounded by clearcut. Vancouver Island, BC",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "054_mallstar.webp",
        title: "054_mallstar",
        description: "Toronto malls have cool christmas decorations",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "055_mushroom_red.webp",
        title: "055_mushroom_red",
        description: "On one camping trip in Algonquin there was a huge abundance of strange mushrooms",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "055b_mushroom_white.webp",
        title: "055b_mushroom_white",
        description: "On one camping trip in Algonquin there was a huge abundance of strange mushrooms",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "056_mushroom_yellow.webp",
        title: "056_mushroom_yellow",
        description: "On one camping trip in Algonquin there was a huge abundance of strange mushrooms",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "057_mushroom_red.webp",
        title: "057_mushroom_red",
        description: "On one camping trip in Algonquin there was a huge abundance of strange mushrooms",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "058_mushroom_pink.webp",
        title: "058_mushroom_pink",
        description: "On one camping trip in Algonquin there was a huge abundance of strange mushrooms",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "059_flower_parasite.webp",
        title: "059_flower_parasite",
        description: "Indian pipe. A parasitic flower, no leaves or chlorophyll",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "060_flower_parasite.webp",
        title: "060_flower_parasite",
        description: "Coralroot. A parasitic flower, no leaves or chlorophyll",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "061_bruce.webp",
        title: "061_bruce",
        description: "Bruce Peninsula National Park",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "062_bruce.webp",
        title: "062_bruce",
        description: "Bruce Peninsula National Park",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "063_humber.webp",
        title: "063_humber",
        description: "The QEW bridge across the Humber River. But underneath. Toronto",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "064_bc_tower.webp",
        title: "064_bc_tower",
        description: "Malahat Skywalk, British Columbia",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "065_isopod.webp",
        title: "065_isopod",
        description: "Green isopod. Botanical Beach, Vancouver Island",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "066_bc_trail.webp",
        title: "066_bc_trail",
        description: "Eden Grove - a small leftover patch of old grown forest. Vancouver Island",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "067_niagara_tunnel.webp",
        title: "067_niagara_tunnel",
        description: "The old power tunnel under Niagara Falls",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "068_humber_fall.webp",
        title: "068_humber_fall",
        description: "Humber river tributary in the fall. Toronto",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "069_bloor_street.webp",
        title: "069_bloor_street",
        description: "Bloor West Village. Near where I used to live. Toronto",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "070_lost_tbm.webp",
        title: "070_lost_tbm",
        description: "OK so one time they were doing a sewer project in Bloor West in Toronto, and they had a tunnel boring machine get stuck when it hit some undocumented rebar in the ground from this condo. They spent over a year trying to get the machine out of the ground. This is my investigation of that construction site. Not much to see really.",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "071_top_hat.webp",
        title: "071_top_hat",
        description: "This restaurant had all their ice cubes come out looking like little top hats",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "072_skyline.webp",
        title: "072_skyline",
        description: "If you live in Toronto long enough you will eventually take this photo of the skyline from the island. Its a mathematical certainty",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "073_snow_portrait.webp",
        title: "073_snow_portrait",
        description: "It snowed a lot and we had to check it out. Humber Marshes, Toronto",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "074_harold_point.webp",
        title: "074_harold_point",
        description: "Harold Point, there is a cool cliff jumping scene here. Killbear PP",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "075_cansec.webp",
        title: "075_cansec",
        description: "I got to got to CANSEC one year",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "076_cansec.webp",
        title: "076_cansec",
        description: "I got to got to CANSEC one year",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "077_greenhouse_tree.webp",
        title: "077_greenhouse_tree",
        description: "Strange treen in a greenhouse. Centennial Park Greenhouse, Toronto.",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "078_snake_plant_flower.webp",
        title: "078_snake_plant_flower",
        description: "Snake plants can flower and the flowers smell very nice. My old apartment, Toronto",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "079_yucca_long_point.webp",
        title: "079_yucca_long_point",
        description: "Yucca native to Ontario. I think thats crazy it seems like a desert plant. Long Point, Ontario ",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "080_killarney_panorama.webp",
        title: "080_killarney_panorama",
        description: "Campsite at Killarney. OSA lake, Ontario",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "081_parliament.webp",
        title: "081_parliament",
        description: "Parliament. Under construction. As seen from an amphibious bus. Ottawa, Ontario",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "082_plant_move.webp",
        title: "082_plant_move",
        description: "When we moved to St. Catharines one load was just plants",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "083_colorful_moth.webp",
        title: "083_colorful_moth",
        description: "What a cool looking moth",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "084_boats.webp",
        title: "084_boats",
        description: "Ships on the Ocean in BC",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "085_cemetary.webp",
        title: "085_cemetary",
        description: "Cemetary in Toronto. Its normal to go on cemetary tours right?",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "086_boating_humber.webp",
        title: "086_boating_humber",
        description: "We got an inflatable boat and slapped a trolling motor on it. There is a pretty big boating scene on the Humber. Toronto",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "087_trestle.webp",
        title: "087_trestle",
        description: "Railroad Trestle, BC",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "088_copper_mine.webp",
        title: "088_copper_mine",
        description: "Inside Britania Copper Mine, BC",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "089_hells_gate.webp",
        title: "089_hells_gate",
        description: "The Fraiser River at Hells Gate. BC",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "090_smokey_christmas.webp",
        title: "090_smokey_christmas",
        description: "Our cat enjoying christmas",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "091_ride_for_heart.webp",
        title: "091_ride_for_heart",
        description: "Biking on the Gardiner during the Ride for Heart",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "092_berries.webp",
        title: "092_berries",
        description: "Before ticks were rampant I used to go into the forest and pick berries and make jam",
		sortOrder: -1,
		featured: false
      }
,
      {
        image: "093_chickadees.webp",
        title: "093_chickadees",
        description: "Im a Disney Princess",
		sortOrder: -1,
		featured: false
      }
    ]
  }
]
;