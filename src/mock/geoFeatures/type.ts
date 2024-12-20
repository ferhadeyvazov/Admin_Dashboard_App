
type IGeometry =  {
    type: string;
    coordinates: any[][][];
}

type IFeatures = {
    type: string;
    properties: {
        name: string;
    };
    geometry: IGeometry;
    id: string;
};

export type IGeoFeatures = {
    type: string;
    features: IFeatures[];
}