import {Accordion, AccordionDetails, AccordionSummary, Typography, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../../../redux/reducer/theme/Theme';
import { ExpandMore } from '@mui/icons-material';

type IProps={
    question: string;
    children: React.ReactNode;
}
const Accordions:React.FC<IProps> = ({question, children}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
      <Accordion defaultExpanded>
          <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls='panel1-content'
              id='panel1-header'
          >
              <Typography color={colors.greenAccent[500]} variant="h5">
                  {question}
              </Typography>
          </AccordionSummary>
          <AccordionDetails>
              <Typography>
                  {children}
              </Typography>
          </AccordionDetails>
      </Accordion>

  )
}

export default Accordions