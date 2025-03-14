import React, { useState } from 'react'
import MainLayout from '../../../layouts/MainLayout'
import Title from '../../../layouts/Title'
import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from "@fullcalendar/interaction"
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { Box, useTheme, Typography, List, ListItem, ListItemText } from '@mui/material'
import { tokens } from '../../../redux/reducer/theme/Theme'
const Calendar: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvent, setCurrentEvent] = useState<any>([]);

  const handleDateClick = (selected: any) => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selected.view.calendar;
    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay
      });
    }
  }
  const handleEventClick = (selected: any) => {
    const comfirmDelete = window.confirm(`Are you sure you want to delete the event: ${selected.event.title}`);
    if (comfirmDelete) {
      selected.event.remove();
    }
  }

  return (
    <MainLayout>
      <Box my='1.25rem'>
        <Title
          title='Calendar'
          subtitle='Full Calendar interatitive Page' />
      </Box>
      <Box mt="40px" height="75vh" width="100%"
        display="flex" justifyContent="space-between"
      >
        {/* CALENDAR SIDEBAR */}
        <Box flex="1 1 20%"
          bgcolor={colors.primary[600]}
          p="1rem"
          borderRadius="5px"
        >
          <Typography variant="h5" color="#FFFFFF">Events</Typography>
          <List>
            {currentEvent.map((e: any) => (
              <ListItem
                key={e.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  borderRadius: "2px",
                  margin: "10px 0"
                }}
              >
                <ListItemText
                  primary={e.title}
                  secondary={<Typography>{formatDate(e.start, {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                  })}</Typography>}
                />
              </ListItem>
            ))}
          </List>
        </Box>
        {/* CALENDAR */}
        <Box flex="1 1 80%" ml="15px">
          <FullCalendar
            height='75vh'
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
            droppable={true}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            eventInteractive={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(event: any) => setCurrentEvent(event)}
            initialEvents={[
              { id: '1', title: 'event 1', date: '2025-03-25' },
              { id: '2', title: 'event 2', date: '2025-03-16' },
              { id: '3', title: 'event 3', date: '2025-04-11' }
            ]}
          />
        </Box>

      </Box>

    </MainLayout>
  )
}

export default Calendar