// define continents as an array of objects
export const continents = [
    {
        name: 'VI',
        center: [315, 80],
        radius: 65,
        mapImage: 'msvi.webp',
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
        name: 'MI',
        center:[393, 139],
        radius: 24,
        mapImage: 'msmi.webp',
        mapBounds: [[0, 0], [455, 640]],
        nodes: [
            { id: 'temp', center: [83, 117], radius: 25, type: 'town' }
        ]
    },
    {
        name: 'AR',
        center:[283, 195],
        radius: 45,
        // mapImage: 'link',
        // mapBounds: [[0, 0], [455, 640]],
        nodes: [
            { id: 'temp', center: [83, 117], radius: 25, type: 'town' }
        ]
    },
    {
        name: 'LL',
        center:[200, 265],
        radius: 58,
        // mapImage: 'link',
        // mapBounds: [[0, 0], [455, 640]],
        nodes: [
            { id: 'temp', center: [83, 117], radius: 25, type: 'town' }
        ]
    },
    {
        name: 'EM',
        center:[270, 380],
        radius: 80,
        // mapImage: 'link',
        // mapBounds: [[0, 0], [455, 640]],
        nodes: [
            { id: 'temp', center: [83, 117], radius: 25, type: 'town' }
        ]
    }
  // ...one polygon per continent
];