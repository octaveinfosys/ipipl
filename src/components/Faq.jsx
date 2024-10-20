import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./Faq.css";
import Team from "./Team";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
function Faq() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <section className="welcome-section clearfix pb-30">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <div className="section-title title-style-center_text">
                <div className="title-header">
                  <h2 className="title mb-0">EXPOLRE US</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-10">
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography style={{ color: "#f98100" }}>About US</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p>
                      Icon Projects Inspace Pvt Ltd (IPIPL), a Mumbai based best
                      luxury interior designers, creates bespoke, modern, and
                      chic design concepts. It is touted as one of the India’s
                      best luxury interior designers in residential and
                      commercial zone. The Principal Designer Amit Porwal has
                      carved a niche for his innovative and flamboyant design
                      creations.
                    </p>
                    <p>
                      Above all, his designs beautifully blend style and luxury
                      with comfort there by harmonizing interior spaces. We at
                      IPIPL believe that every project must be well planned;
                      well- built, and besides should also be functionally
                      beautiful. We have a team of best luxury interior
                      designers, who manages very need, from concept planning
                      and design to execution. We are backed with an experience
                      of more than a decade in executing challenging interior
                      design projects. Icon Projects Inspace Pvt Ltd is one of
                      the best luxury interior designers that set out to become
                      just awe-inspiring designs.
                    </p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <Typography style={{ color: "#f98100" }}>Process</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Typography style={{ color: "#f98100" }}>Team</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Team />
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
