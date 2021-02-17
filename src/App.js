import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import Processors from "kepler.gl/processors";
import KeplerGl from "kepler.gl";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addDataToMap } from "kepler.gl/actions";

import datasetContent from "./nyc-subset-csv";
import keplerConfig from "./kepler-config";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const data = Processors.processCsvData(datasetContent);
    const dataset = { data, info: { id: "dataset" } };

    dispatch(
      addDataToMap({
        datasets: dataset,
        config: keplerConfig,
        options: { readOnly: true },
      })
    );
  }, [dispatch]);

  return (
    <div style={{ width: "100%", height: "100vh", margin: 0, padding: 0 }}>
      <div style={{ width: "100%", height: "100%" }}>
        <AutoSizer>
          {({ height, width }) => (
            <KeplerGl
              mapboxApiAccessToken={
                process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN
              }
              id="map"
              width={width}
              height={height}
              initialUiState={{ readOnly: true, currentModal: null }}
            />
          )}
        </AutoSizer>
      </div>
    </div>
  );
}

export default App;
