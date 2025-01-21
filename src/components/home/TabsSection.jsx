import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import CarCard from "./CarCard";
import { useSelector } from "react-redux";
import { createTheme, useMediaQuery } from "@mui/material";
import EmptyList from "./EmptyList";
import CarModel from "../../pages/CarModel";
import AddCar from "./AddCar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      className="w-full bg-BgGrey pl-5"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }} className="w-full bg-white rounded-lg">
          {children}
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const TabsSection = () => {
  const [value, setValue] = useState(0);
  // after sherching alot in docs, used chatgpt to know how to change tabs dynamically from vertical to horizontal
  const theme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  //
  const { carsModels } = useSelector((reducer) => reducer.cars);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        height: "auto",
      }}
    >
      <Tabs
        className="bg-BgGrey sm:pr-5 min-w-fit"
        orientation={isMobile ? "horizontal" : "vertical"}
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: isMobile ? 0 : 1,
          borderBottom: isMobile ? 1 : 0,
          borderColor: "divider",
        }}
      >
        <Tab label="Car List" {...a11yProps(0)} />
        <Tab label="Add Car" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        {carsModels && carsModels.length === 0 ? (
          <EmptyList />
        ) : (
          <div className="grid xs:grid-col-1 sm:grid-cols-3 gap-4">
            {carsModels.map((carModel, index) => (
              <CarCard carModel={carModel} key={index} />
            ))}
          </div>
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddCar />
      </TabPanel>
    </Box>
  );
};

export default TabsSection;
