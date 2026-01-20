/**
 * Converts officer name to a valid image filename
 * Removes rank prefixes, converts to lowercase, replaces spaces with hyphens
 */
export const getOfficerImageName = (name: string): string => {
  // Remove rank prefixes (FSUPT, FCINSP, FSINSP, FINSP, SFO1-4, etc.)
  const nameWithoutRank = name
    .replace(/^(FSUPT|FCINSP|FSINSP|FINSP|SFO[1-4]|FO[1-4])\s+/i, '')
    .trim();
  
  // Convert to lowercase and replace spaces/special chars with hyphens
  return nameWithoutRank
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-');
};

// Pre-load all officer images using Vite's import.meta.glob
const officerImages = import.meta.glob<{ default: string }>('../assets/officers/*.{jpg,jpeg,png,webp}', {
  eager: true,
});

/**
 * Normalizes a string for flexible matching
 */
const normalizeForMatch = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .trim();
};

/**
 * Gets the image URL for an officer
 * Returns the imported image URL if found, otherwise undefined
 * Uses flexible matching to handle various naming conventions
 */
export const getOfficerImage = (name: string): string | undefined => {
  const imageName = getOfficerImageName(name);
  const normalizedImageName = normalizeForMatch(imageName);
  
  // Try to find matching image (case-insensitive, with various extensions)
  const imageEntries = Object.entries(officerImages);
  
  // First, try exact match
  for (const [path, module] of imageEntries) {
    const fileName = path
      .split('/')
      .pop()
      ?.replace(/\.(jpg|jpeg|png|webp)$/i, '')
      .toLowerCase();
    
    if (fileName === imageName) {
      return module.default;
    }
  }
  
  // Then try normalized match (removes hyphens and special chars)
  for (const [path, module] of imageEntries) {
    const fileName = path
      .split('/')
      .pop()
      ?.replace(/\.(jpg|jpeg|png|webp)$/i, '')
      .toLowerCase();
    
    if (fileName && normalizeForMatch(fileName) === normalizedImageName) {
      return module.default;
    }
  }
  
  // Finally, try partial match (check if image name contains key parts of officer name)
  const nameParts = imageName.split('-').filter(part => part.length > 2);
  for (const [path, module] of imageEntries) {
    const fileName = path
      .split('/')
      .pop()
      ?.replace(/\.(jpg|jpeg|png|webp)$/i, '')
      .toLowerCase();
    
    if (fileName && nameParts.every(part => fileName.includes(part))) {
      return module.default;
    }
  }
  
  return undefined;
};
