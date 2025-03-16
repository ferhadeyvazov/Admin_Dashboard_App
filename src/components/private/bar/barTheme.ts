const barTheme = (colors:any) => {
    return {
    "axis": {
        "domain": {
            "line": {
                "stroke": colors.grey[900],
                "strokeWidth": 1
            }
        },
        "legend": {
            "text": {
                "fontSize": 12,
                "fill": colors.grey[900],
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        },
        "ticks": {
            "line": {
                "stroke": colors.grey[900],
                "strokeWidth": 1
            },
            "text": {
                "fontSize": 11,
                "fill": colors.grey[900],
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        }
    },
    "legends": {
        "title": {
            "text": {
                "fontSize": 11,
                "fill": colors.grey[900],
                "outlineWidth": 0,
                "outlineColor": "transparent"
            }
        },
        "text": {
            "fontSize": 11,
            "fill": colors.grey[900],
            "outlineWidth": 0,
            "outlineColor": "transparent"
        }
    },
}
}

export default barTheme