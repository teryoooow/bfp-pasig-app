export interface Service {
    slug: string;
    title: string;
    description: string;
    contactNumber: string | null;
    images: string[];
}

import ems1 from "@/assets/services/ems/ems-1.jpg";
import ems2 from "@/assets/services/ems/ems-2.jpg";
import ems3 from "@/assets/services/ems/ems-3.jpg";
import ems4 from "@/assets/services/ems/ems-4.jpg";

import rescue1 from "@/assets/services/rescue/rescue-1.jpg";
import rescue2 from "@/assets/services/rescue/rescue-2.jpg";
import rescue3 from "@/assets/services/rescue/rescue-3.jpg";
import rescue4 from "@/assets/services/rescue/rescue-4.jpg";
import rescue5 from "@/assets/services/rescue/rescue-5.jpg";
import rescue6 from "@/assets/services/rescue/rescue-6.jpg";
import rescue7 from "@/assets/services/rescue/rescue-7.jpg";
import rescue8 from "@/assets/services/rescue/rescue-8.jpg";
import rescue9 from "@/assets/services/rescue/rescue-9.jpg";
import rescue10 from "@/assets/services/rescue/rescue-10.jpg";

import training1 from "@/assets/services/training/training-1.jpg";
import training2 from "@/assets/services/training/training-2.jpg";
import training3 from "@/assets/services/training/training-3.jpg";
import training4 from "@/assets/services/training/training-4.jpg";
import training5 from "@/assets/services/training/training-5.jpg";

import drill1 from "@/assets/services/drills/drill-1.jpg";
import drill2 from "@/assets/services/drills/drill-2.jpg";
import drill3 from "@/assets/services/drills/drill-3.jpg";
import drill4 from "@/assets/services/drills/drill-4.jpg";

export const services: Service[] = [
    {
        slug: "fire-incident-investigation",
        title: "Fire Incident Investigation",
        description: "Investigation and documentation of fire incidents for insurance and legal purposes.",
        contactNumber: null,
        images: [
            "https://placehold.co/600x400?text=Investigation+1",
            "https://placehold.co/600x400?text=Investigation+2",
            "https://placehold.co/600x400?text=Investigation+3",
            "https://placehold.co/600x400?text=Investigation+4",
        ],
    },
    {
        slug: "fire-safety-training",
        title: "Fire Safety Training & Seminars",
        description: "Fire prevention awareness, basic firefighting, and emergency response training.",
        contactNumber: "(0916) 341 7451",
        images: [
            training1,
            training2,
            training3,
            training4,
        ],
    },
    {
        slug: "fire-drill-assistance",
        title: "Fire Drill Assistance",
        description: "Supervision and assistance in conducting fire drills for establishments.",
        contactNumber: "(0916) 341 7451",
        images: [
            drill1,
            drill2,
            drill3,
            drill4,
        ],
    },
    {
        slug: "emergency-medical-services",
        title: "Emergency Medical Services",
        description: "First response medical assistance and transport to nearest hospital.",
        contactNumber: "09062110919",
        images: [
            ems1,
            ems2,
            ems3,
            ems4,
        ],
    },
    {
        slug: "search-and-rescue",
        title: "Search and Rescue Operations",
        description: "Emergency rescue services for various incidents and disasters.",
        contactNumber: "09062110919",
        images: [
            rescue1,
            rescue2,
            rescue3,
            rescue4,
            rescue5,
            rescue6,
            rescue7,
            rescue8,
            rescue9,
            rescue10,
        ],
    },
];
