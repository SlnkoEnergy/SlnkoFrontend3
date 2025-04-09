import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  Grid,
  Button,
  Chip,
  Tooltip,
  Select,
  Option,
  FormControl,
  FormLabel,
} from "@mui/joy";
import img1 from "../../../assests/milestones.png";
import img2 from "../../../assests/PV.png";
import img3 from "../../../assests/2.png";
const options = ["Done", "Ongoing"];
const shareOptions = ["Yes", "No"];

const labels = [
  "PV Array Layout",
  "Earthing",
  "Trench Layout",
  "Comm. CableLayout",
  "AC Cable Schedule",
  "BOQ",
];

const trackerData = [
  {
    title: "PV Array Layout",
    status: "Done",
    statusColor: "success",
    image: img2,
  },
  {
    title: "Earthing",
    status: "Done",
    statusColor: "success",
    image: img3,
  },
  {
    title: "Trench Layout",
    status: "Done",
    statusColor: "success",
    image: "https://source.unsplash.com/random/60x60?trench",
  },
  {
    title: "Comm. Cable Layout",
    status: "Ongoing",
    statusColor: "warning",
    image: "https://source.unsplash.com/random/60x60?cable",
  },
  {
    title: "AC Cable Schedule",
    status: "Ongoing",
    statusColor: "warning",
    image: "https://source.unsplash.com/random/60x60?electric",
  },
  {
    title: "BOQ",
    status: "Not Started",
    statusColor: "danger",
    image: "https://source.unsplash.com/random/60x60?doc",
  },
];

const FormComponent = () => (
  <Card
    variant="outlined"
    sx={{ p: 3, maxWidth: 600, mx: "auto", maxHeight: 400, overflowY: "auto" }}
  >
    <Grid container spacing={2}>
      {labels.map((label, index) => (
        <React.Fragment key={index}>
          <Grid xs={4}>
            <Typography level="body-md">{label}</Typography>
          </Grid>
          <Grid xs={4}>
            <FormControl size="sm" sx={{ width: "100%" }}>
              <FormLabel>Status</FormLabel>
              <Select defaultValue="">
                {options.map((opt, i) => (
                  <Option key={i} value={opt}>
                    {opt}
                  </Option>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={4}>
            <FormControl size="sm" sx={{ width: "100%" }}>
              <FormLabel>Shared</FormLabel>
              <Select defaultValue="">
                {shareOptions.map((opt, i) => (
                  <Option key={i} value={opt}>
                    {opt}
                  </Option>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </React.Fragment>
      ))}
    </Grid>
  </Card>
);

const TrackerTimeline = () => {
  const getStatusCount = (status) =>
    trackerData.filter((item) => item.status === status).length;

  const total = trackerData.length;
  const completed = getStatusCount("Done");
  const ongoing = getStatusCount("Ongoing");
  const notStarted = getStatusCount("Not Started");

  const lastDoneIndex = trackerData
    .map((item) => item.status)
    .lastIndexOf("Done");

  return (
    <Box>
      {/* Status summary */}
      <Grid container spacing={2} justifyContent="center" mb={20}>
        <Grid>
          <Card variant="outlined" sx={{ px: 3, py: 2, textAlign: "center" }}>
            <Typography level="h3" color="success">
              {Math.round((completed / total) * 100)}%
            </Typography>
            <Typography level="body1">Completed</Typography>
          </Card>
        </Grid>
        <Grid>
          <Card variant="outlined" sx={{ px: 3, py: 2, textAlign: "center" }}>
            <Typography level="h3" color="warning">
              {Math.round((ongoing / total) * 100)}%
            </Typography>
            <Typography level="body1">Ongoing</Typography>
          </Card>
        </Grid>
        <Grid>
          <Card variant="outlined" sx={{ px: 3, py: 2, textAlign: "center" }}>
            <Typography level="h3" color="danger">
              {Math.round((notStarted / total) * 100)}%
            </Typography>
            <Typography level="body1">Not Started</Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Timeline with progress bar */}
      <Box
        sx={{
          position: "relative",
          height: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 4,
          borderTop: "5px solid",
          borderColor: "neutral.300",
        }}
      >
        {/* Blue progress line */}
        <Box
          sx={{
            position: "absolute",
            top: -4,
            left: `${(1 / (total - 1)) * 50}%`,
            right: `${(1 / (total - 1)) * 50}%`,
            height: 5,
            zIndex: 1,
            background: `linear-gradient(to right, #1976d2 ${
              (lastDoneIndex / (total - 1)) * 100
            }%, #e0e0e0 ${(lastDoneIndex / (total - 1)) * 100}%)`,
          }}
        />

        {trackerData.map((item, idx) => (
          <Box key={idx} sx={{ textAlign: "center", position: "relative", zIndex: 2 }}>
            {/* Label & status */}
            <Box
              sx={{
                position: "absolute",
                top: -250,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <Typography  fontSize={'1rem'} maxWidth={'200px'}>{item.title}</Typography>
              <Typography level="body2" fontSize={'1.1rem'} color={item.statusColor}>
                {item.status}
              </Typography>
            </Box>

            {/* Dot */}
            <Box
              sx={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                position: "absolute",
                top: -108,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex:3
              }}
            />

            {/* Image */}
            <Box
              sx={{
                top:-136,
                transform: "translateX(-50%)",
                position: "absolute",
                left: "50%",
                width: 60,
                height: 60,
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid white",
                boxShadow: "sm",
                mx: "auto",
                zIndex: 2,
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};


const ProcessTracker = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [selectedOption, setSelectedOption] = useState("tracker");

  const showDropdown = [
    "Drawing Lot1",
    "Drawing Lot2",
    "Civil & Mechanical",
  ].includes(activeTab);

  return (
    <Box p={4} maxWidth={1200} mx="auto">
      <Box textAlign="center" mb={4}>
        <Box component="img" src={img1} alt="Milestones" />
        <Typography level="h2" color="primary" fontWeight={600}>
          Process Tracker
        </Typography>
      </Box>

      <Card variant="outlined" sx={{ p: 2, mb: 4 }}>
        <Grid container spacing={2}>
          {[
            { label: "Project Id", value: "RJK/CHARLIE/1234" },
            { label: "Name", value: "Ritesh" },
            { label: "Company", value: "Charlie Pvt. Ltd." },
            { label: "State", value: "Rajasthan" },
            { label: "Type", value: "Kusum A" },
            { label: "Capacity", value: "2.56 AC / 3.54 DC" },
            { label: "Orientation", value: "Landscape" },
          ].map((item, idx) => (
            <Grid key={idx} xs={12} sm={6} md={4}>
              <Typography level="body-lg">
                <b>{item.label}:</b> {item.value}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Card>

      <Box display="flex" gap={2} mb={4}>
        {["Dashboard", "Drawing Lot1", "Drawing Lot2", "Civil & Mechanical"].map((tab) => (
          <Button
            key={tab}
            variant={activeTab === tab ? "solid" : "outlined"}
            color={activeTab === tab ? "primary" : "neutral"}
            onClick={() => {
              setActiveTab(tab);
              setSelectedOption("tracker");
            }}
            sx={{ fontSize: "1.1rem" }}
          >
            {tab}
          </Button>
        ))}
      </Box>

      {showDropdown && (
        <Box mb={4}>
          <Typography level="h4" mb={1}>
            Choose View
          </Typography>
          <Select
            value={selectedOption}
            onChange={(e, val) => setSelectedOption(val)}
            sx={{ width: 200 }}
          >
            <Option value="form">Form</Option>
            <Option value="tracker">Tracker</Option>
          </Select>
        </Box>
      )}

      {activeTab === "Dashboard" && (
        <>
          <Grid container spacing={3} mb={4}>
            {[
              {
                label: "Project Completed",
                percent: 60,
                color: "success",
                tooltip: "8 out of 28 Completed",
              },
              {
                label: "Project Ongoing",
                percent: 30,
                color: "warning",
                tooltip: "10 out of 28 Ongoing",
              },
              {
                label: "Not Started",
                percent: 10,
                color: "danger",
                tooltip: "4 out of 28 Not started",
              },
            ].map((item, idx) => (
              <Grid key={idx} xs={12} sm={4}>
                <Tooltip
                  title={item.tooltip}
                  arrow
                  variant="solid"
                  color={item.color}
                  slotProps={{
                    root: {
                      sx: {
                        backgroundColor:
                          item.color === "success"
                            ? "#2e7d32"
                            : item.color === "warning"
                            ? "#ed6c02"
                            : item.color === "danger"
                            ? "#d32f2f"
                            : undefined,
                        color: "#fff",
                      },
                    },
                    arrow: {
                      sx: {
                        "--unstable_Tooltip-arrowBackground":
                          item.color === "success"
                            ? "#2e7d32"
                            : item.color === "warning"
                            ? "#ed6c02"
                            : item.color === "danger"
                            ? "#d32f2f"
                            : undefined,
                      },
                    },
                  }}
                >
                  <Card
                    variant="outlined"
                    sx={{ p: 2, textAlign: "center", cursor: "pointer" }}
                  >
                    <Typography level="h2" color={item.color}>
                      {item.percent}%
                    </Typography>
                    <Typography level="h4">{item.label}</Typography>
                  </Card>
                </Tooltip>
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={3}>
            {[
              { title: "Drawing Lot 1", done: 4, total: 6 },
              { title: "Drawing Lot 2", done: 4, total: 6 },
              { title: "Civil and Mechanical", done: 8, total: 16 },
            ].map((section, idx) => (
              <Grid key={idx} xs={12} sm={4}>
                <Card variant="outlined" sx={{ p: 2, textAlign: "center" }}>
                  <Typography level="h3">
                    <b>{section.done}</b> out of <b>{section.total}</b>
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "center", my: 1 }}>
                    <Chip color="success" variant="solid" size="md">
                      Completed
                    </Chip>
                  </Box>
                  <Typography level="h5">{section.title}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}

      {[
        "Drawing Lot1",
        "Drawing Lot2",
        "Civil & Mechanical",
      ].includes(activeTab) &&
        (selectedOption === "form" ? <FormComponent /> : <TrackerTimeline />)}
    </Box>
  );
};

export default ProcessTracker;