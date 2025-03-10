import React, { useState } from "react";
import {
  Sheet,
  Typography,
  Input,
  Button,
  Stack,
  FormControl,
  FormLabel,
  Select,
  Option,
  Grid,
  Box,
  Divider,
} from "@mui/joy";
import plus from "../../assests/plus 1.png";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    col1: "",
    col2: "",
    col3: "",
    col4: "",
    col5: "",
  });

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <img alt="add" src={plus} />
        <Typography
          level="h4"
          sx={{
            mb: 2,
            textAlign: "center",
            textDecoration: "underline 2px rgb(243, 182, 39)",
            textUnderlineOffset: "8px",
          }}
        >
          Add Task
        </Typography>
      </Box>
      <Box>
        <Divider sx={{ width: "50%" }} />
      </Box>

      <Sheet
        variant="outlined"
        sx={{
          p: 3,
          borderRadius: "30px",
          maxWidth: { xs: "100%", sm: 400 },
          mx: "auto",
          width: "100%",
          boxShadow: "lg",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} sx={{ width: "100%" }}>
            <FormControl>
              <FormLabel>Customer Name</FormLabel>
              <Input
                fullWidth
                placeholder="Customer Name"
                value={formData.col1}
                onChange={(e) => handleChange("col1", e.target.value)}
                sx={{ borderRadius: "8px" }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Next FollowUp</FormLabel>
              <Input
                fullWidth
                type="date"
                placeholder="Next FollowUp"
                value={formData.col2}
                onChange={(e) => handleChange("col2", e.target.value)}
                sx={{ borderRadius: "8px" }}
                slotProps={{
                  input: {
                    min: new Date().toISOString().split("T")[0], // Restricts past dates
                  },
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Reference</FormLabel>
              <Select
                value={formData.col3}
                onChange={(e, newValue) => handleChange("col3", newValue)}
                sx={{ borderRadius: "8px" }}
              >
                <Option value="By call">By Call</Option>
                <Option value="By meeting">By Meeting</Option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>By Whom</FormLabel>
              <Input
                fullWidth
                placeholder="By Whom"
                value={formData.col4}
                onChange={(e) => handleChange("col4", e.target.value)}
                sx={{ borderRadius: "8px" }}
              />
            </FormControl>
            <Stack flexDirection="row" justifyContent="space-between">
              <Button
                sx={{
                  borderRadius: "8px",
                  background: "#f5f5f5",
                  color: "black",
                  border: "1px solid #ddd",
                  "&:hover": { background: "#d6d6d6" },
                }}
              >
                Back
              </Button>
              <Button
                type="submit"
                sx={{
                  borderRadius: "8px",
                  background: "#1976d2",
                  color: "white",
                  "&:hover": { background: "#1565c0" },
                }}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </form>
      </Sheet>
    </Grid>
  );
};

export default FormComponent;
