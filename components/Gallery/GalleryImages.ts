export interface GalleryImage {
    image: string;
    title: string;
    description: string;
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
                description: ""
            }
            ,
            {
                image: "20220617_164346.webp",
                title: "20220617_164346",
                description: ""
            }
            ,
            {
                image: "20220617_164444.webp",
                title: "20220617_164444",
                description: ""
            }
            ,
            {
                image: "20221111_121337.webp",
                title: "20221111_121337",
                description: ""
            }
            ,
            {
                image: "20250718_002926.webp",
                title: "20250718_002926",
                description: ""
            }
            ,
            {
                image: "20250803_234518.webp",
                title: "20250803_234518",
                description: ""
            }
            ,
            {
                image: "20250929_210644.webp",
                title: "20250929_210644",
                description: ""
            }
            ,
            {
                image: "IMG-20251221-WA0016.webp",
                title: "IMG-20251221-WA0016",
                description: ""
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
                image: "0h.webp",
                title: "0h",
                description: ""
            }
            ,
            {
                image: "2014-06-29_20-45-08_444.webp",
                title: "2014-06-29_20-45-08_444",
                description: ""
            }
            ,
            {
                image: "20200218_202147.webp",
                title: "20200218_202147",
                description: ""
            }
            ,
            {
                image: "20200513_205320.webp",
                title: "20200513_205320",
                description: ""
            }
            ,
            {
                image: "20200805_152145.webp",
                title: "20200805_152145",
                description: ""
            }
            ,
            {
                image: "20200805_152310.webp",
                title: "20200805_152310",
                description: ""
            }
            ,
            {
                image: "20200805_152829.webp",
                title: "20200805_152829",
                description: ""
            }
            ,
            {
                image: "20200805_153929.webp",
                title: "20200805_153929",
                description: ""
            }
            ,
            {
                image: "20200805_154515.webp",
                title: "20200805_154515",
                description: ""
            }
            ,
            {
                image: "20200805_163428.webp",
                title: "20200805_163428",
                description: ""
            }
            ,
            {
                image: "20220319_131946.webp",
                title: "20220319_131946",
                description: ""
            }
            ,
            {
                image: "20220605_155902.webp",
                title: "20220605_155902",
                description: ""
            }
            ,
            {
                image: "20220605_162849.webp",
                title: "20220605_162849",
                description: ""
            }
            ,
            {
                image: "20220605_185311.webp",
                title: "20220605_185311",
                description: ""
            }
            ,
            {
                image: "20220606_180849.webp",
                title: "20220606_180849",
                description: ""
            }
            ,
            {
                image: "20220705_180220.webp",
                title: "20220705_180220",
                description: ""
            }
            ,
            {
                image: "20220707_160602.webp",
                title: "20220707_160602",
                description: ""
            }
            ,
            {
                image: "20220708_171831.webp",
                title: "20220708_171831",
                description: ""
            }
            ,
            {
                image: "20220708_172420.webp",
                title: "20220708_172420",
                description: ""
            }
            ,
            {
                image: "20220709_114052.webp",
                title: "20220709_114052",
                description: ""
            }
            ,
            {
                image: "20220711_151136.webp",
                title: "20220711_151136",
                description: ""
            }
            ,
            {
                image: "20220711_151256.webp",
                title: "20220711_151256",
                description: ""
            }
            ,
            {
                image: "20220716_131158.webp",
                title: "20220716_131158",
                description: ""
            }
            ,
            {
                image: "20220717_112858.webp",
                title: "20220717_112858",
                description: ""
            }
            ,
            {
                image: "20220717_152634.webp",
                title: "20220717_152634",
                description: ""
            }
            ,
            {
                image: "20220727_121607.webp",
                title: "20220727_121607",
                description: ""
            }
            ,
            {
                image: "20220727_145535.webp",
                title: "20220727_145535",
                description: ""
            }
            ,
            {
                image: "20220801_174229.webp",
                title: "20220801_174229",
                description: ""
            }
            ,
            {
                image: "20220905_163756.webp",
                title: "20220905_163756",
                description: ""
            }
            ,
            {
                image: "20221001_154937.webp",
                title: "20221001_154937",
                description: ""
            }
            ,
            {
                image: "20221104_144345.webp",
                title: "20221104_144345",
                description: ""
            }
            ,
            {
                image: "20230221_122712.webp",
                title: "20230221_122712",
                description: ""
            }
            ,
            {
                image: "20230531_172946.webp",
                title: "20230531_172946",
                description: ""
            }
            ,
            {
                image: "20230601_144739.webp",
                title: "20230601_144739",
                description: ""
            }
            ,
            {
                image: "20230604_175300.webp",
                title: "20230604_175300",
                description: ""
            }
            ,
            {
                image: "20230703_163018.webp",
                title: "20230703_163018",
                description: ""
            }
            ,
            {
                image: "20230805_155119.webp",
                title: "20230805_155119",
                description: ""
            }
            ,
            {
                image: "20230904_213819.webp",
                title: "20230904_213819",
                description: ""
            }
            ,
            {
                image: "20230930_161424.webp",
                title: "20230930_161424",
                description: ""
            }
            ,
            {
                image: "20231203_150707.webp",
                title: "20231203_150707",
                description: ""
            }
            ,
            {
                image: "20240107_150205.webp",
                title: "20240107_150205",
                description: ""
            }
            ,
            {
                image: "20240116_181058.webp",
                title: "20240116_181058",
                description: ""
            }
            ,
            {
                image: "20240116_181104.webp",
                title: "20240116_181104",
                description: ""
            }
            ,
            {
                image: "20240203_141521.webp",
                title: "20240203_141521",
                description: ""
            }
            ,
            {
                image: "20240328_195319.webp",
                title: "20240328_195319",
                description: ""
            }
            ,
            {
                image: "20240518_134254.webp",
                title: "20240518_134254",
                description: ""
            }
            ,
            {
                image: "20240519_211207.webp",
                title: "20240519_211207",
                description: ""
            }
            ,
            {
                image: "20240529_103627.webp",
                title: "20240529_103627",
                description: ""
            }
            ,
            {
                image: "20240601_144523.webp",
                title: "20240601_144523",
                description: ""
            }
            ,
            {
                image: "20240608_132956.webp",
                title: "20240608_132956",
                description: ""
            }
            ,
            {
                image: "20240809_211455.webp",
                title: "20240809_211455",
                description: ""
            }
            ,
            {
                image: "20240928_133241.webp",
                title: "20240928_133241",
                description: ""
            }
            ,
            {
                image: "20241010_223608.webp",
                title: "20241010_223608",
                description: ""
            }
            ,
            {
                image: "20241010_223708.webp",
                title: "20241010_223708",
                description: ""
            }
            ,
            {
                image: "20241011_001609.webp",
                title: "20241011_001609",
                description: ""
            }
            ,
            {
                image: "20241011_001707.webp",
                title: "20241011_001707",
                description: ""
            }
            ,
            {
                image: "20250804_163758.webp",
                title: "20250804_163758",
                description: ""
            }
            ,
            {
                image: "2a.webp",
                title: "2a",
                description: ""
            }
            ,
            {
                image: "2aa.webp",
                title: "2aa",
                description: ""
            }
            ,
            {
                image: "6.webp",
                title: "6",
                description: ""
            }
            ,
            {
                image: "7aa2.webp",
                title: "7aa2",
                description: ""
            }
            ,
            {
                image: "7b.webp",
                title: "7b",
                description: ""
            }
            ,
            {
                image: "DSCF4021.webp",
                title: "DSCF4021",
                description: ""
            }
            ,
            {
                image: "IMG-20220709-WA0005.webp",
                title: "IMG-20220709-WA0005",
                description: ""
            }
            ,
            {
                image: "IMG-20220712-WA0129.webp",
                title: "IMG-20220712-WA0129",
                description: ""
            }
            ,
            {
                image: "IMG-20220719-WA0029.webp",
                title: "IMG-20220719-WA0029",
                description: ""
            }
            ,
            {
                image: "IMG-20220719-WA0035.webp",
                title: "IMG-20220719-WA0035",
                description: ""
            }
            ,
            {
                image: "IMG-20220727-WA0126.webp",
                title: "IMG-20220727-WA0126",
                description: ""
            }
            ,
            {
                image: "IMG-20220729-WA0012.webp",
                title: "IMG-20220729-WA0012",
                description: ""
            }
            ,
            {
                image: "IMG-20251224-WA0000.webp",
                title: "IMG-20251224-WA0000",
                description: ""
            }
            ,
            {
                image: "IMG_20211005_120719_129.webp",
                title: "IMG_20211005_120719_129",
                description: ""
            }
            ,
            {
                image: "IMG_20211128_150417_418.webp",
                title: "IMG_20211128_150417_418",
                description: ""
            }
            ,
            {
                image: "IMG_20231029_172359_546.webp",
                title: "IMG_20231029_172359_546",
                description: ""
            }
            ,
            {
                image: "IMG_20240511_173837_172.webp",
                title: "IMG_20240511_173837_172",
                description: ""
            }
            ,
            {
                image: "IMG_20240602_005013_236.webp",
                title: "IMG_20240602_005013_236",
                description: ""
            }
            ,
            {
                image: "IMG_20240602_104127_929.webp",
                title: "IMG_20240602_104127_929",
                description: ""
            }
            ,
            {
                image: "IMG_20240602_104602_994.webp",
                title: "IMG_20240602_104602_994",
                description: ""
            }
            ,
            {
                image: "IMG_20240602_105201_299.webp",
                title: "IMG_20240602_105201_299",
                description: ""
            }
            ,
            {
                image: "IMG_20240602_110039_226.webp",
                title: "IMG_20240602_110039_226",
                description: ""
            }
            ,
            {
                image: "IMG_2260.webp",
                title: "IMG_2260",
                description: ""
            }
            ,
            {
                image: "IMG_3390.webp",
                title: "IMG_3390",
                description: ""
            }
            ,
            {
                image: "IMG_3508.webp",
                title: "IMG_3508",
                description: ""
            }
            ,
            {
                image: "IMG_3827.webp",
                title: "IMG_3827",
                description: ""
            }
            ,
            {
                image: "IMG_3910.webp",
                title: "IMG_3910",
                description: ""
            }
            ,
            {
                image: "IMG_4342.webp",
                title: "IMG_4342",
                description: ""
            }
            ,
            {
                image: "IMG_5632.webp",
                title: "IMG_5632",
                description: ""
            }
            ,
            {
                image: "IMG_6379.webp",
                title: "IMG_6379",
                description: ""
            }
            ,
            {
                image: "IMG_6390.webp",
                title: "IMG_6390",
                description: ""
            }
            ,
            {
                image: "IMG_6611.webp",
                title: "IMG_6611",
                description: ""
            }
            ,
            {
                image: "IMG_6672.webp",
                title: "IMG_6672",
                description: ""
            }
            ,
            {
                image: "IMG_6712.webp",
                title: "IMG_6712",
                description: ""
            }
            ,
            {
                image: "Photo0377.webp",
                title: "Photo0377",
                description: ""
            }
            ,
            {
                image: "Photo0544.webp",
                title: "Photo0544",
                description: ""
            }
            ,
            {
                image: "Photo0582.webp",
                title: "Photo0582",
                description: ""
            }
            ,
            {
                image: "VideoCapture_20240409-000305.webp",
                title: "VideoCapture_20240409-000305",
                description: ""
            }
            ,
            {
                image: "VideoCapture_20240409-000316.webp",
                title: "VideoCapture_20240409-000316",
                description: ""
            }
        ]
    }
]
;