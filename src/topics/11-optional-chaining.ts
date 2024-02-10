export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'David',
}

const passenger2: Passenger = {
    name: 'Jorge',
    children: ['Hijo1' , 'Hijo2'],
}

const returnChildrenNumber = ( passenger: Passenger ) => {
    
    const howManyChildren = passenger.children?.length || 0;
    // const howManyChildren = passenger.children!.length;

    console.log( passenger.name, howManyChildren);

    return howManyChildren;
}

returnChildrenNumber( passenger1 );
returnChildrenNumber( passenger2 );