export interface GalleryImage {
    image: string;
    title: string;
    description: string;
}

export interface GalleryCollection {
    title: string;
    description: string;
    slug: string;
    images: GalleryImage[];
}

const placeholder = "/profile/images/placeholder.webp";

export const galleryCollections: GalleryCollection[] = [
    {
        slug: "pcb",

        title: "Hardware & PCB Design",

        description:
            "Custom PCB designs, embedded systems, hardware prototypes, and production electronics.",

        images: [
            {
                image: placeholder,
                title: "STM32 USB HID Controller",
                description: "Embedded firmware and PCB design",
            },
            {
                image: placeholder,
                title: "Motor Controller",
                description: "Brushless motor driver",
            },
            {
                image: placeholder,
                title: "Prototype Assembly",
                description: "Hardware validation",
            },
            {
                image: placeholder,
                title: "KiCad Render",
                description: "3D board visualization",
            },
            {
                image: placeholder,
                title: "PCB Revision B",
                description: "Production hardware",
            },
            {
                image: placeholder,
                title: "Bench Testing",
                description: "Firmware verification",
            },
            {
                image: placeholder,
                title: "KiCad Render",
                description: "3D board visualization",
            },
            {
                image: placeholder,
                title: "PCB Revision B",
                description: "Production hardware",
            },
            {
                image: placeholder,
                title: "Bench Testing",
                description: "Firmware verification",
            },
        ],
    },

    {
        slug: "photos",

        title: "Photography",

        description:
            "Landscape and wildlife photography from around Ontario.",

        images: [
            {
                image: placeholder,
                title: "Escarpment",
                description: "Ontario",
            },
            {
                image: placeholder,
                title: "Sunset",
                description: "Golden hour",
            },
            {
                image: placeholder,
                title: "Forest Trail",
                description: "Spring hike",
            },
            {
                image: placeholder,
                title: "Waterfall",
                description: "Long exposure",
            },
            {
                image: placeholder,
                title: "Wildlife",
                description: "Bird photography",
            },
            {
                image: placeholder,
                title: "Lake",
                description: "Morning reflections",
            },
        ],
    },
];