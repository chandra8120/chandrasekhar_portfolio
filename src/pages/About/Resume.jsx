import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material'
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import React from 'react'
import Resum from '../../assets/Resum.jpg'

const Resume = () => {
  return (
    <div>
       <Card className="card-border">
            <CardHeader
              sx={{
                height: 40,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
              avatar={
                <Avatar sx={{ bgcolor: "white" }}>
                  <PhonelinkIcon color="success" fontSize="medium" />
                </Avatar>
              }
              title={
                <Typography className="titleC" variant="h6" color="primary">
                  {/* Responsive web design */}
                  Chandra Sekhar Resume
                </Typography>
              }
            />

            <CardContent>
              <Typography variant="body2" color="text.secondary">
               
                <img style={{cursor:"pointer"}} src={Resum} alt="resume" width="320px" height='400px' />
                
              </Typography>
            </CardContent>
          </Card>
    </div>
  )
}

export default Resume
