import React, { useState } from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Grid,
  Sheet,
  Checkbox,
  Modal,
  ModalDialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Textarea,
  Stack,
} from "@mui/joy";
import { CheckCircle, AccessTime, Person, Phone } from "@mui/icons-material";
import { Pagination } from "@mui/material";
import logo from "../../assests/cheer-up.png";
import e from "cors";

const TaskDashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [comment, setComment] = useState("");
  const [currentPagePast, setCurrentPagePast] = useState(1);
  const [currentPageToday, setCurrentPageToday] = useState(1);
  const [currentPageTomorrow, setCurrentPageTomorrow] = useState(1);
  const [currentPageFuture, setCurrentPageFuture] = useState(1);
  const [open, setOpen] = useState(false);
  const tasksperpage = 3;

  const tasks = {
    past: [
      {
        name: "Ramesh",
        company: "Charlie Pvt. Ltd.",
        location: "Jaipur, Rajasthan",
        type: "Meeting",
        icon: <Person />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },
      {
        name: "Ramesh",
        company: "Charlie Pvt. Ltd.",
        location: "Jaipur, Rajasthan",
        type: "Meeting",
        icon: <Person />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },
      {
        name: "Ramesh",
        company: "Charlie Pvt. Ltd.",
        location: "Jaipur, Rajasthan",
        type: "Meeting",
        icon: <Person />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },

      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },
      {
        name: "Ramesh",
        company: "Charlie Pvt. Ltd.",
        location: "Jaipur, Rajasthan",
        type: "Meeting",
        icon: <Person />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },
      {
        name: "Ramesh",
        company: "Charlie Pvt. Ltd.",
        location: "Jaipur, Rajasthan",
        type: "Meeting",
        icon: <Person />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },
      {
        name: "Ramesh",
        company: "Charlie Pvt. Ltd.",
        location: "Jaipur, Rajasthan",
        type: "Meeting",
        icon: <Person />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },

      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },
    ],
    today: [
      {
        name: "Ramesh",
        company: "Charlie Pvt. Ltd.",
        location: "Jaipur, Rajasthan",
        type: "Call",
        icon: <Phone />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Meeting",
        icon: <Person />,
      },
      {
        name: "Ramesh",
        company: "Charlie Pvt. Ltd.",
        location: "Jaipur, Rajasthan",
        type: "Meeting",
        icon: <Person />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },
    ],
    tomorrow: [
      {
        name: "Ramesh",
        company: "Charlie Pvt. Ltd.",
        location: "Jaipur, Rajasthan",
        type: "Call",
        icon: <Phone />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Meeting",
        icon: <Person />,
      },
      {
        name: "Ramesh",
        company: "Charlie Pvt. Ltd.",
        location: "Jaipur, Rajasthan",
        type: "Meeting",
        icon: <Person />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },
    ],
    future: [
      {
        name: "Ramesh",
        company: "Charlie Pvt. Ltd.",
        location: "Jaipur, Rajasthan",
        type: "Call",
        icon: <Phone />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Meeting",
        icon: <Person />,
      },
      {
        name: "Ramesh",
        company: "Charlie Pvt. Ltd.",
        location: "Jaipur, Rajasthan",
        type: "Meeting",
        icon: <Person />,
      },
      {
        name: "Ritesh",
        company: "Charlie Pvt. Ltd.",
        location: "Ranchi, Jharkhand",
        type: "Call",
        icon: <Phone />,
      },
    ],
  };

  // Pagination Variables for Past
  const IndexoflastTaskPast = currentPagePast * tasksperpage;
  const IndexoffirstTaskPast = IndexoflastTaskPast - tasksperpage;
  const currentTasksPast = tasks.past.slice(
    IndexoffirstTaskPast,
    IndexoflastTaskPast
  );
  const totalPagesPast = Math.ceil(tasks.past.length / tasksperpage);

  // Pagination Variables for Past
  const IndexoflastTaskToday = currentPageToday * tasksperpage;
  const IndexoffirstTaskToday = IndexoflastTaskToday - tasksperpage;
  const currentTasksToday = tasks.today.slice(
    IndexoffirstTaskToday,
    IndexoflastTaskToday
  );
  const totalPagesToday = Math.ceil(tasks.today.length / tasksperpage);

  // Pagination Variables for Tomorrow
  const IndexoflastTaskTomorrow = currentPageTomorrow * tasksperpage;
  const IndexoffirstTaskTomorrow = IndexoflastTaskTomorrow - tasksperpage;
  const currentTasksTomorrow = tasks.tomorrow.slice(
    IndexoffirstTaskTomorrow,
    IndexoflastTaskTomorrow
  );
  const totalPagesTomorrow = Math.ceil(tasks.tomorrow.length / tasksperpage);

  // Pagination Variables for Future
  const IndexoflastTaskFuture = currentPageFuture * tasksperpage;
  const IndexoffirstTaskFuture = IndexoflastTaskFuture - tasksperpage;
  const currentTasksFuture = tasks.today.slice(
    IndexoffirstTaskFuture,
    IndexoflastTaskFuture
  );
  const totalPagesFuture = Math.ceil(tasks.today.length / tasksperpage);

  const handleCheckboxChange = (task, event) => {
    if (event.target.checked) {
      setSelectedTask(task);
      setOpenDialog(true);
    } else {
      setSelectedTask(null); // Optionally clear selected task on uncheck
    }
  };

  const handleSubmit = () => {
    console.log("Comment Submitted: ", comment);
    setOpenDialog(false);
    setComment("");
  };

  const getCurrentDate = () => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date().toLocaleDateString("en-US", options);
  };

  const getTomorrowDate = () => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    const date = new Date();
    date.setDate(date.getDate() + 1);

    return date.toLocaleDateString("en-US", options);
  };

  const getDayAfterTomorrowDate = () => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    const date = new Date();
    date.setDate(date.getDate() + 2);

    return date.toLocaleDateString("en-US", options);
  };

  // Handle Function for Past Pagination
  const handlePageChangePast = (e, value) => {
    setCurrentPagePast(value);
  };

  // Handle Function for Today Pagination
  const handlePageChangeToday = (e, value) => {
    setCurrentPageToday(value);
  };

  // Handle Function for Tomorrow Pagination
  const handlePageChangeTomorrow = (e, value) => {
    setCurrentPageTomorrow(value);
  };

  // Handle Function for Future Pagination
  const handlePageChangeFuture = (e, value) => {
    setCurrentPageFuture(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Sheet
        sx={{
          width: "100%",
          maxWidth: 800,
          mx: "auto",
          p: 4,
          textAlign: "center",
          borderRadius: 6,
          boxShadow: "xl",
          border: "2px solid #ccc",
          bgcolor: "background.surface",
        }}
      >
        <Typography level="h2" color="primary">
          Task
        </Typography>
        <Tabs
          value={selectedTab}
          onChange={(e, newValue) => setSelectedTab(newValue)}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TabList
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Tab sx={{ flex: 1, textAlign: "left", fontSize: "1.1rem" }}>
              Past
            </Tab>
            <Tab sx={{ flex: 1, textAlign: "center", fontSize: "1.1rem" }}>
              Today's Task
            </Tab>
            <Tab sx={{ flex: 1, textAlign: "right", fontSize: "1.1rem" }}>
              Tomorrow
            </Tab>
            <Tab sx={{ flex: 1, textAlign: "right", fontSize: "1.1rem" }}>
              Future
            </Tab>
          </TabList>

          {/* Past Tab */}
          <TabPanel
            value={0}
            sx={{
              width: { xs: "90%", sm: "70%", md: "60%", lg: "50%" },
              borderRadius: "20px",
            }}
          >
            <Box>
              <Box display="flex" justifyContent="center" gap={2} mb={3}>
                <Chip
                  startDecorator={<CheckCircle color="success" />}
                  variant="soft"
                  size="lg"
                >
                  20
                </Chip>
                <Chip
                  startDecorator={<AccessTime color="warning" />}
                  variant="soft"
                  size="lg"
                >
                  10
                </Chip>
              </Box>
              {tasks.past.length > 0 ? (
                currentTasksPast.map((task, index) => (
                  <Card
                    key={index}
                    sx={{
                      mb: 3,
                      borderLeft: "6px solid blue",
                      borderRadius: 6,
                      boxShadow: "xl",
                      border: "1px solid #bbb",
                      p: 2,
                      width: "90%",
                      mx: "auto",
                    }}
                  >
                    <CardContent>
                      <Grid container spacing={2} alignItems="center">
                        <Grid xs={7}>
                          <Typography level="h4" color="primary">
                            {task.name}
                          </Typography>
                          <Typography level="body-lg">
                            {task.company}
                          </Typography>
                          <Typography level="body-md" color="neutral">
                            {task.location}
                          </Typography>
                        </Grid>
                        <Grid
                          xs={5}
                          display="flex"
                          flexDirection={"column"}
                          alignItems="center"
                          justifyContent="flex-end"
                          gap={2}
                        >
                          <Checkbox
                            onChange={(e) => handleCheckboxChange(task, e)}
                          />
                          <Chip
                            startDecorator={task.icon}
                            variant="outlined"
                            size="lg"
                          >
                            {task.type}
                          </Chip>
                          <Button variant="plain" onClick={() => setOpen(true)}>
                            <Typography>...</Typography>
                          </Button>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography level="body-lg">No Pending Tasks</Typography>
                  <img width={"40px"} height={"30px"} alt="logo" src={logo} />
                </Box>
              )}
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Pagination
                  count={totalPagesPast}
                  page={currentPagePast}
                  onChange={handlePageChangePast}
                  siblingCount={1}
                />
              </Box>
            </Box>
          </TabPanel>

          {/* Today Tab */}
          <TabPanel
            value={1}
            sx={{ width: { xs: "90%", sm: "70%", md: "60%", lg: "50%" } }}
          >
            <Typography level="h4">Today's Task</Typography>
            <Typography level="body-md" color="neutral">
              {getCurrentDate()}
            </Typography>
            {tasks.today.length > 0 ? (
              currentTasksToday.map((task, index) => (
                <Card
                  key={index}
                  sx={{
                    mb: 3,
                    borderRadius: 6,
                    boxShadow: "xl",
                    border: "1px solid #bbb",
                    p: 2,
                    width: "90%",
                    mx: "auto",
                  }}
                >
                  <CardContent>
                    <Grid container spacing={2} alignItems="center">
                      <Grid xs={7}>
                        <Typography level="h4" color="primary">
                          {task.name}
                        </Typography>
                        <Typography level="body-lg">{task.company}</Typography>
                        <Typography level="body-md" color="neutral">
                          {task.location}
                        </Typography>
                      </Grid>
                      <Grid
                        xs={5}
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-end"
                        flexDirection={"column"}
                        gap={1}
                      >
                        <Checkbox
                          onChange={(e) => handleCheckboxChange(task, e)}
                        />
                        <Chip
                          startDecorator={task.icon}
                          variant="outlined"
                          size="lg"
                        >
                          By {task.type}
                        </Chip>
                        <Button variant="plain" onClick={() => setOpen(true)}>
                          <Typography>...</Typography>
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Typography level="body-lg">No tasks for today.</Typography>
            )}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Pagination
                count={totalPagesToday}
                page={currentPageToday}
                onChange={handlePageChangeToday}
                siblingCount={1}
              />
            </Box>
          </TabPanel>

          {/* Tomorrow Tab */}
          <TabPanel
            value={2}
            sx={{ width: { xs: "90%", sm: "70%", md: "60%", lg: "50%" } }}
          >
            <Typography level="h4">Tomorrow's Task</Typography>
            <Typography level="body-md" color="neutral">
              {getTomorrowDate()}
            </Typography>
            {tasks.today.length > 0 ? (
              currentTasksTomorrow.map((task, index) => (
                <Card
                  key={index}
                  sx={{
                    mb: 3,
                    borderRadius: 6,
                    boxShadow: "xl",
                    border: "1px solid #bbb",
                    p: 2,
                    width: "90%",
                    mx: "auto",
                  }}
                >
                  <CardContent>
                    <Grid container spacing={2} alignItems="center">
                      <Grid xs={7}>
                        <Typography level="h4" color="primary">
                          {task.name}
                        </Typography>
                        <Typography level="body-lg">{task.company}</Typography>
                        <Typography level="body-md" color="neutral">
                          {task.location}
                        </Typography>
                      </Grid>
                      <Grid
                        xs={5}
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-end"
                        flexDirection={"column"}
                        gap={1}
                      >
                        <Typography level="body-md" textColor="green">
                          {getTomorrowDate()}
                        </Typography>
                        <Chip
                          startDecorator={task.icon}
                          variant="outlined"
                          size="lg"
                        >
                          By {task.type}
                        </Chip>
                        <Button variant="plain" onClick={() => setOpen(true)}>
                          <Typography>...</Typography>
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Typography level="body-lg">No tasks for tomorrow.</Typography>
            )}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Pagination
                count={totalPagesTomorrow}
                page={currentPageTomorrow}
                onChange={handlePageChangeTomorrow}
                siblingCount={1}
                boundaryCount={1}
              />
            </Box>
          </TabPanel>
          {/* Future Tab */}
          <TabPanel
            value={3}
            sx={{
              width: { xs: "90%", sm: "70%", md: "60%", lg: "50%" },
              borderRadius: "20px",
            }}
          >
            <Box>
              <Box
                sx={{
                  margin: "10px",
                }}
              >
                <Typography level="h4">Upcoming Task</Typography>
              </Box>
              {tasks.future.length > 0 ? (
                currentTasksFuture.map((task, index) => (
                  <Card
                    key={index}
                    sx={{
                      mb: 3,
                      borderLeft: "6px solid blue",
                      borderRadius: 6,
                      boxShadow: "xl",
                      border: "1px solid #bbb",
                      p: 2,
                      width: "90%",
                      mx: "auto",
                    }}
                  >
                    <CardContent>
                      <Grid container spacing={2} alignItems="center">
                        <Grid xs={7}>
                          <Typography level="h4" color="primary">
                            {task.name}
                          </Typography>
                          <Typography level="body-lg">
                            {task.company}
                          </Typography>
                          <Typography level="body-md" color="neutral">
                            {task.location}
                          </Typography>
                        </Grid>
                        <Grid
                          xs={5}
                          display="flex"
                          flexDirection="column"
                          alignItems="center"
                          justifyContent="flex-end"
                          gap={1}
                        >
                          <Typography level="body-md" textColor="green">
                            {getDayAfterTomorrowDate()}
                          </Typography>
                          <Chip
                            startDecorator={task.icon}
                            variant="outlined"
                            size="lg"
                          >
                            {task.type}
                          </Chip>
                          <Button variant="plain" onClick={() => setOpen(true)}>
                            <Typography>...</Typography>
                          </Button>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography level="body-lg">
                    No Future Tasks Available
                  </Typography>
                  <img width={"40px"} height={"30px"} alt="logo" src={logo} />
                </Box>
              )}
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Pagination
                  count={totalPagesFuture}
                  page={currentPageFuture}
                  onChange={handlePageChangeFuture}
                  siblingCount={1}
                />
              </Box>
            </Box>
          </TabPanel>
        </Tabs>
      </Sheet>

      {/* Modal for Check Box for comments */}
      <Modal open={openDialog} onClose={() => setOpenDialog(false)}>
        <ModalDialog>
          <DialogTitle>Enter Comments</DialogTitle>
          <DialogContent>
            <Textarea
              minRows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Enter your comments..."
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
            <Button onClick={handleSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </ModalDialog>
      </Modal>

      {/* Modal for View Options */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <Stack spacing={2} mt={1}>
            <Button
              variant="soft"
              onClick={() => console.log("View Customer Details")}
            >
              View Customer Details
            </Button>
            <Button
              variant="soft"
              onClick={() => console.log("View Follow-ups History")}
            >
              View Follow-ups History
            </Button>
          </Stack>
          <Button
            variant="outlined"
            color="neutral"
            onClick={() => setOpen(false)}
            sx={{ mt: 2 }}
          >
            Close
          </Button>
        </ModalDialog>
      </Modal>
    </Box>
  );
};

export default TaskDashboard;
