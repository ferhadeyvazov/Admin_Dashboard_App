import React from 'react'
import { useTheme } from '@mui/material'
import { ResponsiveChoropleth } from '@nivo/geo'
import { geoFeatures } from '../../../mock/geoFeatures'
import { mockGeographyData } from '../../../mock/geography'
import { tokens } from '../../../redux/reducer/theme/Theme'
import ChartTheme from '../../../utils/ChartTheme'

type IProps = {
    isDashboard: boolean;
}
const GeoChart: React.FC<IProps> = ({ isDashboard }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const geoThem = ChartTheme(colors);

    return (
        <ResponsiveChoropleth
            projectionType='mercator'
            fillColor='nivoColor'
            enableGraticule={false}
            graticuleLineWidth={0}
            graticuleLineColor='noneColor'
            isInteractive={true}
            onMouseEnter={() => console.log("onMouseEnter")}
            onMouseLeave={() => null}
            onMouseMove={() => null}
            onClick={()=> null}
            role='undefined'
            theme={geoThem}
            data={mockGeographyData}
            features={geoFeatures.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors={isDashboard ? undefined : 'nivo'}
            domain={[0, 1000000]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={isDashboard ? 40 : 150}
            projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
            projectionRotation={[0, 0, 0]}
            borderWidth={1.5}
            borderColor="#FFFFFF"
            legends={
                !isDashboard ?
                    [
                        {
                            anchor: 'bottom-left',
                            direction: 'column',
                            justify: true,
                            translateX: 20,
                            translateY: -100,
                            itemsSpacing: 0,
                            itemWidth: 94,
                            itemHeight: 18,
                            itemDirection: 'left-to-right',
                            itemTextColor: colors.grey[800],
                            itemOpacity: 0.85,
                            symbolSize: 18,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: "#e9e9e9",
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ] : undefined
            }
        />
    )
}

export default GeoChart