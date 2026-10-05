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
            { id: 'Forest West of Henesys', center: [139, 205], radius: 15, type: 'regular' }
            

        ]
    },
    {
        name: 'Maple Island',
        center:[402, 140],
        radius: 24,
        mapImage: 'maps/msmi.webp',
        mapBounds: [[0, 0], [470, 640]],
        nodes: [
            { id: 'temp', center: [83, 117], radius: 25, type: 'town' }
        ]
    },
    {
        name: 'Aqua Road',
        center:[284, 204],
        radius: 45,
        mapImage: 'maps/aqua-road.webp',
        mapBounds: [[0, 0], [470, 640]],
        nodes: [
            { id: 'temp', center: [85, 117], radius: 25, type: 'town' }
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
            { id: 'temp', center: [83, 117], radius: 25, type: 'town' }
        ]
    },
    {
        name: 'Mu Lung Garden',
        center:[150, 550],
        radius: 75,
        mapImage: 'maps/mu-lung-garden.webp',
        mapBounds: [[0, 0], [470, 640]],
        nodes: [
            { id: 'temp', center: [83, 117], radius: 25, type: 'town' }
        ]
    },
    {
        name: 'Nihal Desert',
        center:[75, 390],
        radius: 70,
        mapImage: 'maps/nihal-desert.webp',
        mapBounds: [[0, 0], [470, 640]],
        nodes: [
            { id: 'temp', center: [83, 117], radius: 25, type: 'town' }
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