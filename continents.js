// define continents as an array of objects
export const continents = [
    {
        name: 'Victoria Island',
        center: [325, 80],
        radius: 65,
        mapImage: 'maps/victoria-island.webp',
        mapBounds: [[0, 0], [470, 640]],
        nodes: [
            // { id: '', center: [], radius: 15, type: 'regular' },
            // flip numbers, roughly -460, +10 using https://pixspy.com/
            { id: 'Lith Harbor', center: [85, 110], radius: 15, type: 'town' },

            { id: 'Right Around Lith Harbor', center: [126, 114], radius: 15, type: 'regular' },
            { id: 'Thicket Around the Beach I', center: [138, 135], radius: 15, type: 'regular' },
            { id: 'Thicket Around the Beach II', center: [140, 158], radius: 15, type: 'regular' },
            { id: 'Thicket Around the Beach III', center: [148, 186], radius: 15, type: 'regular' },
            { id: '3-Way Road-Split', center: [168, 193], radius: 15, type: 'regular' },
            { id: 'Kerning City Middle Forest I', center: [180, 173], radius: 15, type: 'regular' },
            { id: 'L Forest III', center: [173, 141], radius: 15, type: 'regular' },
            { id: 'L Forest II', center: [190, 123], radius: 15, type: 'regular' },
            { id: 'L Forest I', center: [215, 126], radius: 15, type: 'regular' },
            { id: 'Kerning City Construction Site', center: [243, 128], radius: 15, type: 'regular' },

            { id: 'Kerning City', center: [274, 105], radius: 15, type: 'town' },
            
            { id: 'The Swamp of Despair I', center: [274, 152], radius: 15, type: 'regular' },
            { id: 'The Swamp of Despair II', center: [267, 182], radius: 15, type: 'regular' },
            { id: 'The Swamp of Despair III', center: [241, 197], radius: 15, type: 'regular' },
            { id: 'Dangerous Croko I', center: [219, 206], radius: 15, type: 'regular' },
            { id: 'Dangerous Croko II', center: [203, 223], radius: 15, type: 'regular' },
            { id: 'Sunset Sky', center: [306, 142], radius: 15, type: 'regular' },
            { id: 'Construct Site North of Kerning City', center: [306, 170], radius: 15, type: 'regular' },
            { id: 'West Domain of Perion', center: [307, 198], radius: 15, type: 'regular' },
            { id: 'West Rocky Mountain I', center: [322, 210], radius: 15, type: 'regular' },
            { id: 'West Street Corner of Perion', center: [348, 214], radius: 15, type: 'regular' },

            { id: 'Perion', center: [370, 252], radius: 15, type: 'town' },

            { id: 'Deep Valley I', center: [330, 252], radius: 15, type: 'regular'},
            { id: 'Deep Valley II', center: [305, 237], radius: 15, type: 'regular'},
            { id: 'Deep Valley III', center: [275, 227], radius: 15, type: 'regular'},
            { id: 'Perion Dungeon Entrance', center: [252, 250], radius: 15, type: 'regular'},
            { id: 'Perion Street Corner', center: [353, 290], radius: 15, type: 'regular'},        
            { id: 'East Rocky Mountain I', center: [341, 313], radius: 15, type: 'regular'},
            { id: 'Rocky Road I', center: [335, 335], radius: 15, type: 'regular'},
            { id: 'Rocky Road II', center: [315, 350], radius: 15, type: 'regular'},
            { id: 'Rocky Road III', center: [292, 369], radius: 15, type: 'regular'},
            { id: 'East Domain of Perion', center: [259, 372], radius: 15, type: 'regular'},
            { id: 'The Forest North of Ellinia', center: [230, 372], radius: 15, type: 'regular'},
            { id: 'The Tree That Grew I', center: [208, 383], radius: 15, type: 'regular'},
            { id: 'The Field Up North of Ellinia', center: [201, 404], radius: 15, type: 'regular'},

            { id: 'Ellinia', center: [208, 453], radius: 15, type: 'town' },

            { id: 'The Field South of Ellinia', center: [172, 425], radius: 15, type: 'regular' },
            { id: 'The Forest of Wisdom', center: [160, 403], radius: 15, type: 'regular' },
            { id: 'The Forest South of Ellinia', center: [151, 385], radius: 15, type: 'regular' },
            { id: 'The Forest East of Henesys', center: [135, 371], radius: 15, type: 'regular' },
            { id: 'The Rain-Forest East of Henesys', center: [107, 364], radius: 15, type: 'regular' },
            { id: 'The Hill East of Henesys', center: [90, 350], radius: 15, type: 'regular' },
            { id: 'The Road to the Dungeon', center: [126, 292], radius: 15, type: 'regular' },
            { id: 'Henesys Dungeon Entrance', center: [148, 285], radius: 15, type: 'regular' },

            { id: 'Henesys', center: [82, 300], radius: 15, type: 'town' },

            { id: 'Henesys Hunting Ground I', center: [88, 249], radius: 15, type: 'regular' },
            { id: 'A Hill West of Henesys', center: [105, 220], radius: 15, type: 'regular' },
            { id: 'Forest West of Henesys', center: [139, 205], radius: 15, type: 'regular' },
            
            { id: 'Florina Beach', center: [88, 536], radius: 15, type: 'town' },
            
            { id: 'A Look-Out Shed Around the Beach', center: [95, 560], radius: 15, type: 'regular' },
            { id: 'Lorang, Lorang', center: [108, 577], radius: 15, type: 'regular' },
            { id: 'Lorang and Clang', center: [137, 575], radius: 15, type: 'regular' },
            { id: 'Hot Sand', center: [139, 550], radius: 15, type: 'regular' }
        ]
    },
    {
        name: 'Maple Island',
        center:[402, 140],
        radius: 24,
        mapImage: 'maps/msmi.webp',
        mapBounds: [[0, 0], [470, 640]],
        nodes: [
            { id: 'Mushroom Town - West Entrance', center: [309, 150], radius: 15, type: 'regular' },
            { id: 'Mushroom Town', center: [318, 203], radius: 15, type: 'regular' },
            { id: 'East Entrance to Mushroom Town', center: [282, 212], radius: 15, type: 'regular' },
            { id: 'Snail Hunting Ground I', center: [240, 236], radius: 15, type: 'regular' },
            { id: 'Snail Hunting Ground II', center: [230, 281], radius: 15, type: 'regular' },
            { id: 'Snail Hunting Ground III', center: [223, 319], radius: 15, type: 'regular' },
            { id: 'A Split Road', center: [205, 360], radius: 15, type: 'regular' },
            { id: 'The Field West of Amherst', center: [220, 397], radius: 15, type: 'regular' },
            { id: 'The Field East of Amherst', center: [190, 488], radius: 15, type: 'regular' },

            { id: 'Amherst', center: [232, 464], radius: 15, type: 'town' },
            { id: 'Southperry', center: [160, 391], radius: 15, type: 'town' }
        ]
    },
    {
        name: 'Aqua Road',
        center:[284, 204],
        radius: 45,
        mapImage: 'maps/aqua-road.webp',
        mapBounds: [[0, 0], [470, 640]],
        nodes: [
            { id: 'Ocean I.C', center: [120, 91], radius: 15, type: 'regular' },
            { id: 'Crystal Gorge', center: [170, 101], radius: 15, type: 'regular' },
            { id: 'Red Coral Forest', center: [215, 102], radius: 15, type: 'regular' },
            { id: 'Snowy Whale\'s Island', center: [372, 150], radius: 15, type: 'regular' },
            { id: 'Forked Road: West Sea', center: [256, 182], radius: 15, type: 'regular' },
            { id: 'Deep Sea Gorge I', center: [178, 205], radius: 15, type: 'regular' },
            { id: 'Deep Sea Gorge II', center: [122, 245], radius: 15, type: 'regular' },

            { id: 'The Grave of a Wrecked Ship', center: [94, 326], radius: 15, type: 'regular' },

            { id: 'The Dangerous Cave', center: [48, 255], radius: 15, type: 'regular' },
            { id: 'The Cave of Pianus', center: [47, 180], radius: 15, type: 'regular' },

            { id: 'Aquarium', center: [268, 328], radius: 15, type: 'town' },

            { id: 'Forked Road: East Sea', center: [283, 486], radius: 15, type: 'regular' },
            { id: 'Dangerous Sea Gorge I', center: [209, 448], radius: 15, type: 'regular' },
            { id: 'Dangerous Sea Gorge II', center: [138, 442], radius: 15, type: 'regular' },
            { id: 'The Seaweed Tower', center: [279, 524], radius: 15, type: 'regular' },
            { id: 'Sand Castle Playground', center: [246, 533], radius: 15, type: 'regular' },
            { id: 'Two Palm Trees', center: [372, 506], radius: 15, type: 'regular' },
            { id: 'Big Fish Valley', center: [207, 527], radius: 15, type: 'regular' },
            { id: 'Blue Seaweed Road', center: [185, 564], radius: 15, type: 'regular' },
            { id: 'Mushroom Coral Hill', center: [150, 580], radius: 15, type: 'regular' },
            { id: 'The Sharp Unknown', center: [114, 597], radius: 15, type: 'regular' }
        ]
    },
    {
        name: 'Ludus Lake',
        center:[200, 265],
        radius: 58,
        mapImage: 'maps/ludus-lake.webp',
        mapBounds: [[0, 0], [470, 640]],
        nodes: [
            { id: 'temp', center: [83, 117], radius: 25, type: 'town' }
        ]
    },
    {
        name: 'El Nath Mts',
        center:[270, 380],
        radius: 80,
        mapImage: 'maps/el-nath-mts.webp',
        mapBounds: [[0, 0], [470, 640]],
        nodes: [
            { id: 'Orbis', center: [364, 130], radius: 15, type: 'town' },
            { id: 'Cloud Park I', center: [363, 243], radius: 15, type: 'regular' },
            { id: 'Cloud Park II', center: [310, 267], radius: 15, type: 'regular' },
            { id: 'Strolling Path', center: [264, 278], radius: 15, type: 'regular' },
            { id: 'Cloud Park III', center: [238, 330], radius: 15, type: 'regular' },
            { id: 'Cloud Park IV', center: [234, 388], radius: 15, type: 'regular' },
            { id: 'Strolling Path II', center: [230, 444], radius: 15, type: 'regular' },
            { id: 'Cloud Park V', center: [242, 492], radius: 15, type: 'regular' },
            { id: 'Cloud Park VI', center: [260, 539], radius: 15, type: 'regular' },
            { id: 'The Road to Garden of 3 Colors', center: [352, 331], radius: 15, type: 'regular' },
            { id: 'Garden of Red I', center: [393, 382], radius: 15, type: 'regular' },
            { id: 'Garden of Red II', center: [396, 445], radius: 15, type: 'regular' },
            { id: 'Garden of Yellow I', center: [351, 393], radius: 15, type: 'regular' },
            { id: 'Garden of Yellow II', center: [351, 434], radius: 15, type: 'regular' },
            { id: 'Garden of Green I', center: [311, 379], radius: 15, type: 'regular' },
            { id: 'Garden of Green II', center: [309, 450], radius: 15, type: 'regular' },
            { id: 'Stairway to the Sky I', center: [355, 493], radius: 15, type: 'regular' },
            { id: 'Stairway to the Sky II', center: [354, 562], radius: 15, type: 'regular' },
            { id: 'Garden of Darkness I', center: [397, 585], radius: 15, type: 'regular' },
            { id: 'Garden of Darkness II', center: [306, 582], radius: 15, type: 'regular' },

            { id: 'Entrance to Orbis Tower', center: [300, 143], radius: 15, type: 'regular' },
            { id: 'Orbis Tower 20th Floor', center: [237, 142], radius: 15, type: 'regular' },
            { id: 'Orbis Tower 8th Floor', center: [173, 144], radius: 15, type: 'regular' },
            { id: 'Orbis Tower B1', center: [105, 141], radius: 15, type: 'regular' },
            { id: 'Orbis Tower B2', center: [65, 141], radius: 15, type: 'regular' },

            { id: 'Snowy Hill', center: [126, 168], radius: 15, type: 'regular' },

            { id: 'El Nath', center: [106, 242], radius: 15, type: 'town' },
            { id: 'El Nath Market', center: [117, 260], radius: 15, type: 'town' },
            { id: 'Watch Out for Icy Path I', center: [73, 295], radius: 15, type: 'regular' },
            { id: 'Watch Out for Icy Path II', center: [45, 323], radius: 15, type: 'regular' },
            { id: 'Cold Field I', center: [48, 384], radius: 15, type: 'regular' },
            { id: 'Cold Field II', center: [106, 387], radius: 15, type: 'regular' },
            { id: 'Icy Cold Field', center: [110, 365], radius: 15, type: 'regular' },
            { id: 'Ice Valley I', center: [117, 454], radius: 15, type: 'regular' },
            { id: 'Ice Valley II', center: [115, 517], radius: 15, type: 'regular' },
            { id: 'Dead Mines', center: [129, 574], radius: 15, type: 'town' }
        ]
    },
    {
        name: 'Mu Lung Garden',
        center:[150, 550],
        radius: 75,
        mapImage: 'maps/mu-lung-garden.webp',
        mapBounds: [[0, 0], [470, 640]],
        nodes: [
            { id: 'Mu Lung', center: [325, 466], radius: 15, type: 'town' },
            { id: 'Mu Lung Temple', center: [324, 490], radius: 15, type: 'town' },
            { id: 'Practice Field: Beginner', center: [314, 541], radius: 15, type: 'regular' },
            { id: 'Practice Field: Easy Level', center: [285, 541], radius: 15, type: 'regular' },
            { id: 'Practice Field: Normal Level', center: [250, 536], radius: 15, type: 'regular' },
            { id: 'Practice Field: Advanced Level', center: [222, 560], radius: 15, type: 'regular' },
            { id: 'Entrance to Sky Forest', center: [298, 389], radius: 15, type: 'regular' },
            { id: 'Sky Forest: The Trail', center: [279, 355], radius: 15, type: 'regular' },
            { id: 'Deep in the Sky Forest', center: [282, 310], radius: 15, type: 'regular' },
            { id: 'Snake Area', center: [292, 272], radius: 15, type: 'regular' },
            { id: 'Wild Bear Area 1', center: [310, 273], radius: 15, type: 'regular' },
            { id: 'Wild Bear Area 2', center: [321, 257], radius: 15, type: 'regular' },
            { id: 'Wild Bear Area 3', center: [326, 243], radius: 15, type: 'regular' },
            { id: 'Territory of the Wandering Bear', center: [343, 228], radius: 15, type: 'regular' },

            { id: 'Where the Sky Forest Ends', center: [262, 225], radius: 15, type: 'regular' },
            { id: 'Peach Farm 1', center: [251, 180], radius: 15, type: 'regular' },
            { id: 'Foggy Forest', center: [235, 202], radius: 15, type: 'regular' },
            { id: 'Virtuous Forest', center: [215, 232], radius: 15, type: 'regular' },
            { id: 'Goblin Forest 1', center: [185, 224], radius: 15, type: 'regular' },

            { id: 'Peach Farm 2', center: [221, 135], radius: 15, type: 'regular' },
            { id: 'Peach Farm 3', center: [172, 133], radius: 15, type: 'regular' },
            { id: 'Isolated Swamp', center: [117, 195], radius: 15, type: 'regular' },
            { id: 'Red-Nose Pirate Den 3', center: [73, 126], radius: 15, type: 'regular' },
            { id: 'Red-Nose Pirate Den 2', center: [54, 152], radius: 15, type: 'regular' },
            { id: 'Red-Nose Pirate Den 1', center: [48, 181], radius: 15, type: 'regular' },

            { id: 'Old Swamp', center: [110, 247], radius: 15, type: 'regular' },
            { id: 'Bellflower Valley', center: [78, 284], radius: 15, type: 'regular' },
            { id: '100-Year Old Herb Garden', center: [90, 346], radius: 15, type: 'regular' },
            { id: '50-Year Old Herb Garden', center: [114, 433], radius: 15, type: 'regular' },
            { id: '10-Year Old Herb Garden', center: [93, 468], radius: 15, type: 'regular' },
            { id: 'Herb Town', center: [100, 508], radius: 15, type: 'town' },
            { id: 'Pier on the Beach', center: [138, 541], radius: 15, type: 'town' }
        ]
    },
    {
        name: 'Nihal Desert',
        center:[75, 390],
        radius: 70,
        mapImage: 'maps/nihal-desert.webp',
        mapBounds: [[0, 0], [470, 640]],
        nodes: [
            { id: 'Magatia', center: [365, 521], radius: 15, type: 'town' },
            { id: 'Lab - Area A-1', center: [256, 491], radius: 15, type: 'regular' },
            { id: 'Lab - Area A-3', center: [256, 587], radius: 15, type: 'regular' },
            { id: 'Lab - Central Hub', center: [220, 539], radius: 15, type: 'regular' },
            { id: 'Lab - Area B-1', center: [220, 491], radius: 15, type: 'regular' },
            { id: 'Lab - Area B-3', center: [220, 587], radius: 15, type: 'regular' },
            { id: 'Lab - Area C-1', center: [180, 491], radius: 15, type: 'regular' },
            { id: 'Lab - Area C-2', center: [180, 539], radius: 15, type: 'regular' },
            { id: 'Lab - Area C-3', center: [180, 589], radius: 15, type: 'regular' },
            { id: 'Lab - Unit 101', center: [151, 401], radius: 15, type: 'regular' },
            { id: 'Lab - Unit 102', center: [115, 400], radius: 15, type: 'regular' },
            { id: 'Lab - 1st Floor Hallway', center: [115, 448], radius: 15, type: 'regular' },
            { id: 'Lab - Unit 103', center: [115, 495], radius: 15, type: 'regular' },
            { id: 'Lab - Unit 201', center: [77, 399], radius: 15, type: 'regular' },
            { id: 'Lab - 2nd Floor Hallway', center: [77, 448], radius: 15, type: 'regular' },
            { id: 'Lab - Unit 202', center: [77, 495], radius: 15, type: 'regular' },
            { id: 'Lab - Unit 203', center: [35, 448], radius: 15, type: 'regular' },

            { id: 'Sahel 1', center: [368, 434], radius: 15, type: 'regular' },
            { id: 'Sahel 2', center: [363, 377], radius: 15, type: 'regular' },
            { id: 'The Desert of Serenity', center: [401, 347], radius: 15, type: 'regular' },
            { id: 'The Desert of Dreams', center: [320, 394], radius: 15, type: 'regular' },
            { id: 'Sahel 3', center: [356, 330], radius: 15, type: 'regular' },
            { id: 'The Ruins of Desert Nomads', center: [333, 300], radius: 15, type: 'regular' },
            { id: 'The Desert of Red Sand', center: [298, 265], radius: 15, type: 'regular' },
            { id: 'North Desert Road 2', center: [296, 209], radius: 15, type: 'regular' },
            { id: 'North Desert Road 1', center: [301, 145], radius: 15, type: 'regular' },
            { id: 'Outside North Entrance of Ariant', center: [266, 108], radius: 15, type: 'regular' },
            { id: 'Ariant', center: [182, 173], radius: 15, type: 'town' },
            { id: 'Ariant Castle', center: [208, 172], radius: 15, type: 'town' },
            { id: 'The Town of Ariant', center: [157, 171], radius: 15, type: 'town' },
            { id: 'Outside East Entrance of Ariant', center: [192, 242], radius: 15, type: 'regular' },
            { id: 'Tent of the Entertainers', center: [169, 292], radius: 15, type: 'regular' },
            { id: 'Dry Desert', center: [123, 274], radius: 15, type: 'regular' },
            { id: 'The Scorching Desert', center: [97, 204], radius: 15, type: 'regular' },
            { id: 'White Rock Desert', center: [82, 143], radius: 15, type: 'regular' },
            { id: 'Cactus Desert 2', center: [91, 89], radius: 15, type: 'regular' },
            { id: 'Cactus Desert 1', center: [151, 53], radius: 15, type: 'regular' },
            { id: 'Outside the West Entrance of Ariant', center: [188, 102], radius: 15, type: 'regular' }
        ]
    },
    {
        name: 'Minar Forest',
        center:[75, 200],
        radius: 70,
        mapImage: 'maps/minar-forest.webp',
        mapBounds: [[0, 0], [470, 640]],
        nodes: [
            { id: 'temp', center: [83, 117], radius: 25, type: 'town' }
        ]
    }
  // ...one polygon per continent
];