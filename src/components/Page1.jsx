import React from "react";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import { Button, List, ListItem, ListItemDecorator } from "@mui/joy";
import logo from "../assests/page1_logo.png";
import logo1 from "../assests/4. White Slnko Logo.png";
import logo2 from "../assests/Untitled-1-01.jpg";
import logo3 from "../assests/phone_icon (2).png";
import logo4 from "../assests/email_icon (2).png";
import logo5 from "../assests/email_icon (2).png";
import Divider from "@mui/joy/Divider";

const Page1 = () => {
  return (
    <>
      {/* Outer container Box with full width and height */}
      <Box
        sx={{
          "@media print": {
            width: "210mm",
            height: "297mm",
          },
          width: "100%",
          height: "125vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Inner container Box with border and centered layout */}
        <Box
          sx={{
            "@media print": {
              width: "210mm",
              height: "297mm",
            },
            width: "50%",
            height: "100%",
            border: "2px solid #0f4C7f",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Main content Box for logo, background image, and text */}
          <Box
            sx={{
              width: "70%",
              height: "100%",
              "@media print": {
                width: "210mm",
                height: "297mm",
              },
            }}
          >
            {/* Top section with the logo */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "15px",
                height: "10%",
              }}
            >
              <img
                width={"50%"}
                height={"100%"}
                alt="logo"
                src={logo}
                loading="lazy"
              />
            </Box>

            {/* Main section with background image, branding, and text */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                backgroundImage: `url(${logo2})`,
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: { md: "80%", lg: "100%", xl: "80%" },
                backgroundSize: "100%",
                "@media print": {
                  backgroundImage: `url(${logo2})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "78%",
                  width: "100%",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  marginTop:'15px'
                }}
              >
                {/* Secondary logo */}
                <img width={"25%"} alt="logo" src={logo1} loading="lazy" />
                {/* Branding Text */}
                <Typography
                  sx={{
                    "@media print": {
                      fontSize: "1.125rem",
                    },
                  }}
                  paddingTop={"50px"}
                  fontSize={{
                    sm: "0.85rem",
                    md: "0.95rem",
                    lg: "1.1rem",
                    xl: "1.25rem",
                  }}
                  fontWeight={"500"}
                  component={"span"}
                >
                  INDIA'S MOST TRUSTED BRAND FOR KUSUM
                </Typography>
                <Typography
                  fontSize={{
                    sm: "0.85rem",
                    md: "0.95rem",
                    lg: "1.1rem",
                    xl: "1.25rem",
                  }}
                  fontWeight={"500"}
                  component={"span"}
                  sx={{
                    "@media print": {
                      fontSize: "1.125rem",
                    },
                  }}
                >
                  PROJECTS
                </Typography>
                {/* Main commercial text */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    paddingTop={{
                      xs: "140px",
                      sm: "150px",
                      md: "200px",
                      lg: "250px",
                      xl: "320px",
                    }}
                    letterSpacing={"2px"}
                    fontSize={{ md: "2rem", lg: "2rem", xl: "2.8125rem" }}
                    fontWeight={"300"}
                    textColor={"white"}
                    sx={{
                      "@media print": {
                        fontSize: "2.5rem",
                        paddingTop: "320px",
                      },
                    }}
                  >
                    TECHNO
                  </Typography>

                  <Typography
                    letterSpacing={"2px"}
                    fontSize={{ md: "2rem", lg: "2rem", xl: "2.8125rem" }}
                    fontWeight={"300"}
                    textColor={"white"}
                    sx={{
                      "@media print": {
                        fontSize: "2.5rem",
                      },
                    }}
                  >
                    COMMERCIAL
                  </Typography>
                  {/* Offer text */}
                  <Typography
                    sx={{
                      filter: "drop-shadow(0 0 0.50rem white)",
                      fontWeight: "bolder",
                      letterSpacing: "18px",
                      marginTop: "-40px",
                      "@media print": {
                        fontSize: "100px",
                      },
                    }}
                    fontSize={{ md: "6rem", lg: "6rem", xl: "7.5rem" }}
                    fontWeight={"300"}
                    textColor={"#0f4C7f"}
                  >
                    OFFER
                  </Typography>
                  {/* "Prepared for" box */}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                      paddingTop: "90px",
                      "@media print": {
                        paddingTop: "90px",
                      },

                      "@media (min-width: 1536px) and (max-width: 1750px)": {
                        paddingTop: "40px",
                      },
                    }}
                  >
                    <List orientation="horizontal">
                      {[
                        "ENSURE QUALITY",
                        "ENSURE SUSTAINABILITY",
                        "ENSURE SUPPORT",
                      ].map((item, index) => (
                        <ListItem
                          key={index}
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <ListItemDecorator
                            sx={{ minWidth: "auto", mr: 0.5, color: "white" }} // Changed to white
                          >
                            •
                          </ListItemDecorator>
                          <Typography
                            sx={{
                              fontWeight: "600",
                              fontSize: { md: "0.9rem", xl: "1rem" },
                              "@media print": {
                                fontSize: "0.9rem",
                              },
                              color: "white", // Added this to ensure text is white
                            }}
                          >
                            {item}
                          </Typography>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Box>
                {/* Ensure sections */}
              </Box>
            </Box>

            {/* Contact section with phone and email */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                paddingTop: "20px",
                "@media print": {
                  paddingTop: "10px",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img width="10%" alt="phone" src={logo3} loading="lazy" />
                <Divider
                  sx={{ width: "50%", alignSelf: "center", marginY: 2 }}
                />
                <Typography>+91 8062358958</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img width={"10%"} alt="phone" src={logo4} loading="lazy" />
                <Divider
                  sx={{ width: "50%", alignSelf: "center", marginY: 2 }}
                />
                <Typography>info@slnkoenergy.com</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img width={"10%"} alt="phone" src={logo5} loading="lazy" />
                <Divider
                  sx={{ width: "50%", alignSelf: "center", marginY: 2 }}
                />
                <Typography sx={{ cursor: "pointer" }}>
                  <a
                    href="https://www.linkedin.com/company/slnkoenergy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    company/slnkoenergy
                  </a>
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Sidebar with rotating text */}
          <Box
            sx={{
              width: "30%",

              "@media (min-width: 1536px) and (max-width: 1750px)": {
                height: "1050px",
              },
              "@media (min-width: 1750px)": {
                height: "1190px",
              },
              "@media (min-width:1196px) and (max-width: 1350px)": {
                height: "1100px",
              },
              backgroundColor: "#0f4C7f",
              "@media print": {
                backgroundColor: "#0f4C7f",
                height: "1128px",
              },
            }}
          >
            <Typography
              sx={{
                transform: "rotate(-90deg)",
                transformOrigin: "center",
                fontSize: {
                  xs: "4rem",
                  sm: "5rem",
                  md: "5.5rem",
                  lg: "6.5rem",
                  xl: "7.5rem",
                },
                marginTop: "350px",
                letterSpacing: "8px",
                fontWeight: "bold",
                opacity: "0.3",

                "@media print": {
                  fontSize: "7.5rem",
                },
              }}
              textColor={"#56A4DA"}
              variant="h1"
            >
              YOJANA
            </Typography>
            <Typography
              sx={{
                transform: "rotate(-90deg)",
                transformOrigin: "center",
                fontSize: {
                  xs: "4rem",
                  sm: "5rem",
                  md: "5.5rem",
                  lg: "6.5rem",
                  xl: "7.5rem",
                },
                marginTop: "350px",
                letterSpacing: "8px",
                fontWeight: "bold",
                opacity: "0.3",

                "@media print": {
                  fontSize: "7.5rem",
                },
                "@media (min-width: 1536px) and (max-width: 1750px)": {
                  marginTop: "300px",
                },
              }}
              textColor={"#56A4DA"}
              variant="h1"
            >
              KUSUM
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Page1;
