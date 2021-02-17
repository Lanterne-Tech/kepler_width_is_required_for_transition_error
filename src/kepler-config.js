export default {
  version: "v1",
  config: {
    visState: {
      filters: [],
      layers: [
        {
          id: "vec4v5",
          type: "point",
          config: {
            dataId: "dataset",
            label: "pickup",
            color: [255, 203, 153],
            columns: {
              lat: "pickup_latitude",
              lng: "pickup_longitude",
              altitude: null,
            },
            isVisible: true,
            visConfig: {
              radius: 10,
              fixedRadius: false,
              opacity: 0.8,
              outline: false,
              thickness: 2,
              strokeColor: null,
              colorRange: {
                name: "Global Warming",
                type: "sequential",
                category: "Uber",
                colors: [
                  "#5A1846",
                  "#900C3F",
                  "#C70039",
                  "#E3611C",
                  "#F1920E",
                  "#FFC300",
                ],
              },
              strokeColorRange: {
                name: "Global Warming",
                type: "sequential",
                category: "Uber",
                colors: [
                  "#5A1846",
                  "#900C3F",
                  "#C70039",
                  "#E3611C",
                  "#F1920E",
                  "#FFC300",
                ],
              },
              radiusRange: [0, 50],
              filled: true,
            },
            hidden: false,
            textLabel: [
              {
                field: null,
                color: [255, 255, 255],
                size: 18,
                offset: [0, 0],
                anchor: "start",
                alignment: "center",
              },
            ],
          },
          visualChannels: {
            colorField: {
              name: "trip_distance",
              type: "real",
            },
            colorScale: "quantile",
            strokeColorField: null,
            strokeColorScale: "quantile",
            sizeField: null,
            sizeScale: "linear",
          },
        },
        {
          id: "vrwyqj",
          type: "point",
          config: {
            dataId: "dataset",
            label: "dropoff",
            color: [248, 149, 112],
            columns: {
              lat: "dropoff_latitude",
              lng: "dropoff_longitude",
              altitude: null,
            },
            isVisible: false,
            visConfig: {
              radius: 10,
              fixedRadius: false,
              opacity: 0.8,
              outline: false,
              thickness: 2,
              strokeColor: null,
              colorRange: {
                name: "Global Warming",
                type: "sequential",
                category: "Uber",
                colors: [
                  "#5A1846",
                  "#900C3F",
                  "#C70039",
                  "#E3611C",
                  "#F1920E",
                  "#FFC300",
                ],
              },
              strokeColorRange: {
                name: "Global Warming",
                type: "sequential",
                category: "Uber",
                colors: [
                  "#5A1846",
                  "#900C3F",
                  "#C70039",
                  "#E3611C",
                  "#F1920E",
                  "#FFC300",
                ],
              },
              radiusRange: [0, 50],
              filled: true,
            },
            hidden: false,
            textLabel: [
              {
                field: null,
                color: [255, 255, 255],
                size: 18,
                offset: [0, 0],
                anchor: "start",
                alignment: "center",
              },
            ],
          },
          visualChannels: {
            colorField: {
              name: "trip_distance",
              type: "real",
            },
            colorScale: "quantile",
            strokeColorField: null,
            strokeColorScale: "quantile",
            sizeField: null,
            sizeScale: "linear",
          },
        },
        {
          id: "4311ggq",
          type: "arc",
          config: {
            dataId: "dataset",
            label: "pickup -> dropoff arc",
            color: [146, 38, 198],
            columns: {
              lat0: "pickup_latitude",
              lng0: "pickup_longitude",
              lat1: "dropoff_latitude",
              lng1: "dropoff_longitude",
            },
            isVisible: false,
            visConfig: {
              opacity: 0.8,
              thickness: 2,
              colorRange: {
                name: "Global Warming",
                type: "sequential",
                category: "Uber",
                colors: [
                  "#5A1846",
                  "#900C3F",
                  "#C70039",
                  "#E3611C",
                  "#F1920E",
                  "#FFC300",
                ],
              },
              sizeRange: [0, 10],
              targetColor: null,
            },
            hidden: false,
            textLabel: [
              {
                field: null,
                color: [255, 255, 255],
                size: 18,
                offset: [0, 0],
                anchor: "start",
                alignment: "center",
              },
            ],
          },
          visualChannels: {
            colorField: null,
            colorScale: "quantile",
            sizeField: null,
            sizeScale: "linear",
          },
        },
        {
          id: "crmwzd4",
          type: "line",
          config: {
            dataId: "dataset",
            label: "pickup -> dropoff line",
            color: [130, 154, 227],
            columns: {
              lat0: "pickup_latitude",
              lng0: "pickup_longitude",
              lat1: "dropoff_latitude",
              lng1: "dropoff_longitude",
            },
            isVisible: false,
            visConfig: {
              opacity: 0.8,
              thickness: 2,
              colorRange: {
                name: "Global Warming",
                type: "sequential",
                category: "Uber",
                colors: [
                  "#5A1846",
                  "#900C3F",
                  "#C70039",
                  "#E3611C",
                  "#F1920E",
                  "#FFC300",
                ],
              },
              sizeRange: [0, 10],
              targetColor: null,
            },
            hidden: false,
            textLabel: [
              {
                field: null,
                color: [255, 255, 255],
                size: 18,
                offset: [0, 0],
                anchor: "start",
                alignment: "center",
              },
            ],
          },
          visualChannels: {
            colorField: null,
            colorScale: "quantile",
            sizeField: null,
            sizeScale: "linear",
          },
        },
      ],
      interactionConfig: {
        tooltip: {
          fieldsToShow: {
            dataset: [
              {
                name: "VendorID",
                format: null,
              },
              {
                name: "tpep_pickup_datetime",
                format: null,
              },
              {
                name: "tpep_dropoff_datetime",
                format: null,
              },
              {
                name: "passenger_count",
                format: null,
              },
              {
                name: "trip_distance",
                format: null,
              },
            ],
          },
          compareMode: false,
          compareType: "absolute",
          enabled: true,
        },
        brush: {
          size: 0.5,
          enabled: false,
        },
        geocoder: {
          enabled: true,
        },
        coordinate: {
          enabled: false,
        },
      },
      layerBlending: "normal",
      splitMaps: [],
      animationConfig: {
        currentTime: null,
        speed: 1,
      },
    },
    mapState: {
      bearing: 0,
      dragRotate: false,
      latitude: 40.75803276093452,
      longitude: -73.95957205870303,
      pitch: 0,
      zoom: 12.548058916916952,
      isSplit: false,
    },
    mapStyle: {
      styleType: "dark",
      topLayerGroups: {},
      visibleLayerGroups: {
        label: true,
        road: true,
        border: false,
        building: true,
        water: true,
        land: true,
        "3d building": false,
      },
      threeDBuildingColor: [
        9.665468314072013,
        17.18305478057247,
        31.1442867897876,
      ],
      mapStyles: {},
    },
  },
};
