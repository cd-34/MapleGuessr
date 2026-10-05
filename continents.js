// define continents as an array of objects
export const continents = [
    {
        name: 'Victoria Island',
        center: [325, 80],
        radius: 65,
        mapImage: 'maps/victoria-island.webp',
        mapBounds: [[0, 0], [470, 640]],
        nodes: [
            // center [vertical bottom up, horizontal left to right]
            // the node starts in the top left and has a radius
            // https://pixspy.com/ gives 101, 374 
            // flip the numbers, so 374, 101
            // first number subtract from 459, second number add 8
            // 83, 113
                // once I finalize the map size and make sure it scales properly 
                // I'll create a function to convert this automatically
            // radius affects the hitbox size 
            { id: 'LH', center: [85, 110], radius: 15, type: 'town' },
            { id: 'H', center: [82, 300], radius: 15, type: 'town' },
            { id: 'E', center: [208, 453], radius: 15, type: 'regular' }
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
        center:[283, 195],
        radius: 45,
        mapImage: 'maps/aqua-road.webp',
        mapBounds: [[0, 0], [470, 640]],
        nodes: [
            { id: 'temp', center: [83, 117], radius: 25, type: 'town' }
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