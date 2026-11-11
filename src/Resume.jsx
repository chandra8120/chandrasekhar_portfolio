
import { Avatar, Box, Button, Card, CardContent, CardHeader, Typography } from '@mui/material'
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import DownloadIcon from "@mui/icons-material/Download";
import Layout from './hoc/LandingPage_Layout';

const Resume = () => {
  return (
    <Layout>
      <Box sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", overflowY: "auto", padding: 2, boxSizing: "border-box", minWidth: 0 }}>
        <Card className="card-border" sx={{ width: { xs: "100%", md: "80%" }, minWidth: 0 }}>
          <CardHeader
            sx={{
              height: "auto",
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
                Chandra Sekhar Resume
              </Typography>
            }
            action={
              <Button
                href="/Resume.pdf"
                download="Chandra_Sekhar_Mern_Stack_Resume.pdf"
                startIcon={<DownloadIcon />}
                variant="contained"
                sx={{ marginTop: 1, background: "linear-gradient(to right, #2c3e50, #3498db)" }}
              >
                Download
              </Button>
            }
          />

          <CardContent>
            <Box
              component="iframe"
              src="/Resume.pdf"
              title="Chandra Sekhar Resume"
              sx={{ width: "100%", height: "80vh", border: "none" }}
            />
          </CardContent>
        </Card>
      </Box>
    </Layout>
  )
}

export default Resume
