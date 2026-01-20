export type EducationTopic = {
    id: string;
    title: string;
    category: "Fire" | "Nature" | "Medical" | "Other";
    icon: string;
    summary: string;
    content: string; // Markdown supported
    videoUrl?: string; // YouTube ID or URL
};

export const defaultEducationData: EducationTopic[] = [
    {
        id: "basic-fire-safety",
        title: "Basic Fire Safety Tips",
        category: "Fire",
        icon: "Flame",
        summary: "Essential preventions to keep your home safe from fire.",
        content: `
### PASS Method for Extinguishers
*   **P**ull the pin
*   **A**im at the base of the fire
*   **S**queeze the lever
*   **S**weep from side to side

### Kitchen Safety
*   Never leave cooking unattended.
*   Keep flammable items away from the stove.
*   If a pan catches fire, cover it with a lid. **Do not pour water.**
    `,
        videoUrl: "https://www.youtube.com/embed/BL2S0nZ2WFs",
    },
    {
        id: "earthquake-guide",
        title: "Earthquake: Duck, Cover, Hold",
        category: "Nature",
        icon: "Activity",
        summary: "What to do during and after an earthquake.",
        content: `
### During Shaking
1.  **Duck** or Drop down on your hands and knees.
2.  **Cover** your head and neck (and your entire body if possible) under a sturdy table or desk.
3.  **Hold On** to your shelter (or to your head and neck) until the shaking stops.

### After Shaking
*   Check yourself for injuries.
*   Check for gas leaks or fire hazards.
*   Evacuate if the building is damaged.
    `,
        videoUrl: "https://www.youtube.com/embed/G_tLjg1d2w8",
    },
    {
        id: "cpr-basics",
        title: "Hands-Only CPR",
        category: "Medical",
        icon: "Heart",
        summary: "Save a life using hands-only CPR methodology.",
        content: `
1.  Call 911 immediately.
2.  Push hard and fast in the center of the chest.
3.  Rate: 100-120 compressions per minute (song: "Stayin' Alive").
    `,
        videoUrl: "https://www.youtube.com/embed/-YqG09DabwQ",
    },
    {
        id: "flood-safety",
        title: "Flood Preparedness",
        category: "Nature",
        icon: "Waves",
        summary: "Safety protocols during rising water levels.",
        content: `
*   Move to higher ground immediately.
*   Turn off main power switch if water is rising inside.
*   Do not walk through moving water.
*   Avoid floodwaters as they may be contaminated or electrically charged.
    `
    }
];
