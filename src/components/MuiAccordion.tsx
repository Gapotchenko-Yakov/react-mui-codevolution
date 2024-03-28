import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const MuiAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (isExpanded: boolean, name: string) => {
    if (isExpanded) setExpanded(name);
    else setExpanded(false);
  };

  return (
    <Box>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1"
          aria-controls="panel1-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails id="panel1-conent">
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            quo officiis magnam veritatis libero quia dolorum nulla tempore,
            unde laboriosam aspernatur soluta itaque iure minus ex. Odio
            consequatur excepturi unde!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2"
          aria-controls="panel2-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails id="panel2-conent">
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            quo officiis magnam veritatis libero quia dolorum nulla tempore,
            unde laboriosam aspernatur soluta itaque iure minus ex. Odio
            consequatur excepturi unde!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3"
          aria-controls="panel3-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails id="panel3-conent">
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
            quo officiis magnam veritatis libero quia dolorum nulla tempore,
            unde laboriosam aspernatur soluta itaque iure minus ex. Odio
            consequatur excepturi unde!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default MuiAccordion;
