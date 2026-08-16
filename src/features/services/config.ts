// src/features/services/config.ts
import {
    Hammer,
    Wrench,
    Sparkles,
    ClipboardList,
    Palette,
    ShieldCheck,
    type LucideIcon,
} from 'lucide-react';

export type ServiceCategory =
    | 'installation'
    | 'repairRestoration'
    | 'maintenance'
    | 'consulting'
    | 'customServices'
    | 'warrantyPostSale';

export const CATEGORY_ORDER: ServiceCategory[] = [
    'installation',
    'repairRestoration',
    'maintenance',
    'consulting',
    'customServices',
    'warrantyPostSale',
];

export const CATEGORY_ITEMS: Record<ServiceCategory, string[]> = {
    installation: [
        'hardwoodFlooring',
        'tileFlooring',
        'vinylLinoleum',
        'floatingFloors',
        'carpetInstallation',
        'industrialFlooring',
    ],
    repairRestoration: [
        'hardwoodRepair',
        'tileRepair',
        'vinylLinoleumRepair',
        'antiqueFloorRestoration',
        'carpetRepair',
    ],
    maintenance: [
        'woodCleaningPolishing',
        'tileMaintenance',
        'vinylLinoleumMaintenance',
        'carpetCleaning',
    ],
    consulting: ['materialSelection', 'floorDesign', 'floorAssessment'],
    customServices: ['customInstallations', 'customPatterns', 'commercialResidential'],
    warrantyPostSale: ['qualityWarranty', 'postInstallationMaintenance', 'customerService'],
};

// El color/ícono identifica la familia del servicio — se repite igual
// en el badge de cada tarjeta y en el encabezado de cada sección.
export const CATEGORY_META: Record<ServiceCategory,
    { icon: LucideIcon; accent: string; accentSoft: string }
> = {
    installation: { icon: Hammer, accent: '#B45309', accentSoft: '#FEF3C7' },
    repairRestoration: { icon: Wrench, accent: '#B91C1C', accentSoft: '#FEE2E2' },
    maintenance: { icon: Sparkles, accent: '#0F766E', accentSoft: '#CCFBF1' },
    consulting: { icon: ClipboardList, accent: '#1E3A5F', accentSoft: '#DBEAFE' },
    customServices: { icon: Palette, accent: '#6D28D9', accentSoft: '#EDE9FE' },
    warrantyPostSale: { icon: ShieldCheck, accent: '#047857', accentSoft: '#D1FAE5' },
};

// Coloca las fotos en /public/images/services/<archivo>.jpg
// Si un item no tiene imagen todavía, la tarjeta usa un fondo con
// degradado + ícono como respaldo (ver getServiceImage más abajo).
export const SERVICE_IMAGES: Partial<Record<string, string>> = {
    hardwoodFlooring: '/images/services/hardwood-flooring.webp',
    tileFlooring: '/images/services/tile-flooring.webp',
    vinylLinoleum: '/images/services/vinyl-linoleum.webp',
    floatingFloors: '/images/services/floating-floors.webp',
    carpetInstallation: '/images/services/carpet-installation.webp',
    industrialFlooring: '/images/services/industrial-flooring.webp',
    hardwoodRepair: '/images/services/hardwood-repair.webp',
    tileRepair: '/images/services/tile-repair.webp',
    vinylLinoleumRepair: '/images/services/vinyl-linoleum-repair.webp',
    antiqueFloorRestoration: '/images/services/antique-floor-restoration.webp',
    carpetRepair: '/images/services/carpet-repair.webp',
    woodCleaningPolishing: '/images/services/wood-cleaning-polishing.webp',
    tileMaintenance: '/images/services/tile-maintenance.webp',
    vinylLinoleumMaintenance: '/images/services/vinyl-linoleum-maintenance.webp',
    carpetCleaning: '/images/services/carpet-cleaning.webp',
    materialSelection: '/images/services/material-selection.webp',
    floorDesign: '/images/services/floor-design.webp',
    floorAssessment: '/images/services/floor-assessment.webp',
    customInstallations: '/images/services/custom-installations.webp',
    customPatterns: '/images/services/custom-patterns.webp',
    commercialResidential: '/images/services/commercial-residential.webp',
    qualityWarranty: '/images/services/quality-warranty.webp',
    postInstallationMaintenance: '/images/services/post-installation-maintenance.webp',
    customerService: '/images/services/customer-service.webp',
};

export function getServiceImage(item: string): string | null {
    return SERVICE_IMAGES[item] ?? null;
}

export const FEATURED_SERVICE_KEYS: { category: ServiceCategory; item: string }[] = [
    { category: 'installation', item: 'hardwoodFlooring' },
    { category: 'installation', item: 'vinylLinoleum' },
    { category: 'installation', item: 'carpetInstallation' },
    { category: 'installation', item: 'tileFlooring' },
    { category: 'repairRestoration', item: 'hardwoodRepair' },
    { category: 'maintenance', item: 'carpetCleaning' },
];