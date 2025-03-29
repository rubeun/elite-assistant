
export const COLONY_NAV = {
  "outpost-civilian": { 
    "displayName": "Civilian Outpost",
    "category": "outpost", 
  },
  "outpost-commercial": { 
    "displayName": "Commercial Outpost",
    "category": "outpost", 
  },
  "outpost-scientific": { 
    "displayName": "Scientific Outpost",
    "category": "outpost", 
  },
  // "outpost-mining": { 
  //   "displayName": "Mining Outpost",
  //   "category": "outpost", 
  // },
  // "outpost-industrial": { 
  //   "displayName": "Industrial Outpost",
  //   "category": "outpost", 
  // },
  "outpost-military": { 
    "displayName": "Military Outpost",
    "category": "outpost", 
  },
  // "outpost-unsanctioned": { 
  //   "displayName": "Unsanctioned Outpost",
  //   "category": "outpost", 
  // },

  "settlement-industrial-large": {
    "displayName": "Large Industrial Settlement",
    "category": "settlement", 
  },
}


export const COLONY_INFO = {
  "name": "colony",
  "category": {
    "outpost": {
      "outpost-civilian": {
        "name": "outpost-civilian",
        "displayName": "Civilian Outpost",
        "category": "outpost",
        "materials": {
          "ceramic-composites": 497,
          "cmm-composites": 3912,
          "computer-components": 50,
          "copper": 218,
          "food-cartridges": 94,
          "fruit-and-vegetables": 50,
          "insulating-membranes": 311,
          "liquid-oxygen": 1553,
          "medical-diagnostic-equipment": 13,
          "non-lethal-weapons": 13,
          "polymers": 497,
          "power-generators": 19,
          "semiconductors": 56,
          "steel": 5588,
          "superconductors": 100,
          "titanium": 4843,
          "water": 621,
          "water-purifiers": 38, 
        }      
      },
      "outpost-commercial": {
        "name": "outpost-commercial",
        "displayName": "Commercial Outpost",
        "category": "outpost",
        "materials": {
          "aluminium": 513,
          "ceramic-composites": 504,
          "cmm-composites": 4539,
          "computer-components": 50,
          "copper": 234,
          "food-cartridges": 94,
          "fruit-and-vegetables": 50,
          "insulating-membranes": 357,
          "liquid-oxygen": 1721,
          "medical-diagnostic-equipment": 13,
          "non-lethal-weapons": 13,
          "polymers": 545,
          "power-generators": 20,
          "semiconductors": 65,
          "steel": 6936,
          "superconductors": 107,
          "titanium": 5579,
          "water": 706,
          "water-purifiers": 39, 
        }      
      }, 
      "outpost-scientific": {
        "name": "outpost-scientific",
        "displayName": "Scientific Outpost",
        "category": "outpost",
        "materials": {
          "aluminium": 477,
          "ceramic-composites": 500,
          "cmm-composites": 4584,
          "computer-components": 65,
          "copper": 240,
          "food-cartridges": 92,
          "fruit-and-vegetables": 51,
          "insulating-membranes": 345,
          "liquid-oxygen": 1759,
          "medical-diagnostic-equipment": 13,
          "non-lethal-weapons": 12,
          "polymers": 498,
          "power-generators": 18,
          "semiconductors": 70,
          "steel": 6473,
          "superconductors": 109,
          "titanium": 5603,
          "water": 769,
          "water-purifiers": 37, 
        }      
      },      
      "outpost-military": {
        "name": "outpost-military",
        "displayName": "Military Outpost",
        "category": "outpost",
        "materials": {
          "aluminium": 522,
          "ceramic-composites": 539,
          "cmm-composites": 5393,
          "computer-components": 65,
          "copper": 242,
          "food-cartridges": 91,
          "fruit-and-vegetables": 52,
          "insulating-membranes": 545,
          "liquid-oxygen": 1553,
          "medical-diagnostic-equipment": 13,
          "non-lethal-weapons": 13,
          "polymers": 497,
          "power-generators": 18,
          "semiconductors": 70,
          "steel": 6701,
          "superconductors": 108,
          "titanium": 4843,
          "water": 729,
          "water-purifiers": 36, 
        }      
      },      
    },
    "settlement": {
      "settlement-industrial-large": {
        "name": "settlement-industrial-large",
        "displayName": "Large Industrial Settlement",
        "category": "setlement",
        "materials": {
          "advanced-catalysers": 123,
          "aluminium": 1755,
          "building-fabricators": 165,
          "ceramic-composites": 165,
          "computer-components": 84,
          "copper": 84,
          "emergency-power-cells": 84,
          "evacuation-shelter": 63,
          "food-cartridges": 123,
          "fruit-and-vegetables": 84,
          "he-suits": 42,
          "liquid-oxygen": 816,
          "micro-controllers": 42,
          "microbial-furnaces": 246,
          "mineral-extractors": 492,
          "polymers": 327,
          "resonating-separators": 42,
          "robotics": 165,
          "semiconductors": 42,
          "steel": 3057,
          "structural-regulators": 204,
          "superconductors": 42,
          "surface-stabilisers": 204,
          "survival-equipment": 42,
          "thermal-cooling-units": 42,
        }      
      }
    },
    "starport": {},
  },
}

export const RESOURCE_NAMES: Record<string, string> = {
  "advanced-catalysers": "Advanced Catalysers",
  "aluminium": "Aluminium",
  "building-fabricators": "Building Fabricators",
  "ceramic-composites": "Ceramic Composites",
  "cmm-composites": "CMM Composites",
  "computer-components": "Computer Components",
  "copper": "Copper",
  "emergency-power-cells": "Emergency Power Cells",
  "evacuation-shelter": "Evacuatin Shelter",
  "food-cartridges": "Food Cartridges",
  "fruit-and-vegetables": "Fruit and Vegetables",
  "he-suits": "H.E. Suits",
  "insulating-membranes": "Insulating Membranes",
  "liquid-oxygen": "Liquid Oxygen",
  "medical-diagnostic-equipment": "Medical Diagnostic Equipment",
  "micro-controllers": "Micro Controllers",
  "microbial-furnaces": "Microbial Furnaces",
  "mineral-extractors": "Mineral Extractors",
  "non-lethal-weapons": "Non-Lethal Weapons",
  "polymers": "Polymers",
  "power-generators": "Power Generators",
  "resonating-separators": "Resonating Separators",
  "robotics": "Robotics",
  "semiconductors": "Semiconductors",
  "steel": "Steel",
  "structural-regulators": "Structural Regulators",
  "superconductors": "Superconductors",
  "surface-stabilisers": "Surface Stabilisers",
  "survival-equipment": "Survival Equipment",
  "thermal-cooling-units": "Thermal Cooling Units",
  "titanium": "Titanium",
  "water": "Water",
  "water-purifiers": "Water Purifiers",   
};