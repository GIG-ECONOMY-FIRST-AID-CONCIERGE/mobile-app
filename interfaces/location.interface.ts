export interface ICoord {
    accuracy: string;
    altitude: number;
    altitudeAccuracy: number;
    heading: number;
    latitude: number;
    longitude: number;
    speed: number;
};

export interface ILocation {
    coords: ICoord;
    mocked: boolean;
    timestamp: number;
};
