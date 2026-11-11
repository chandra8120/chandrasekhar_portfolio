import React, { useRef, useState } from "react";
import Layout from "../../hoc/LandingPage_Layout";
import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { Close, Send } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "./ContactPage.css";

const TextInput = ({ label, name, value, handler }) => {
  return (
    <Box sx={{ width: { xs: "100%", sm: "38.5%" }, minWidth: 0 }}>
      <TextField
        label={label}
        name={name}
        type={name === "email" ? "email" : name === "mobNo" ? "tel" : "text"}
        value={value}
        fullWidth
        onChange={handler}
      />
    </Box>
  );
};

const Contact = () => {
  const navigate = useNavigate();
  const [contactInfo, setContactInfo] = useState({
    name: "",
    company: "",
    email: "",
    mobNo: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [greetModal, setGreetModal] = useState(false);
  const [sendError, setSendError] = useState("");
  const sending = useRef(false);
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactInfo.email.trim());
  const disable = contactInfo.name.trim().length < 2 || !isEmailValid || contactInfo.message.trim().length <= 10;


  const Header = ({ title, subtitle }) => {
    return (
      <div style={{ minWidth: 250 }}>
        <Typography variant="h6" color="primary">
          {title}
        </Typography>
        {subtitle && <Typography component="p">{subtitle}</Typography>}
      </div>
    );
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setContactInfo({
      ...contactInfo,
      [name]: value,
    });
  };
  const closeHandler = () => {
    setGreetModal(false);
  };
  
  const GreetingsModal = () => {
    return (
      <Box className="greet-modal-main">
        <Box className="greet-modal-sub">
          <Button aria-label="Close success message" sx={{ marginLeft: "86%" }} onClick={closeHandler}>
            <Close />
          </Button>
            <Typography component="p">Thanks for reaching out!</Typography>
            <Typography component="p">
            Your message has been submitted. Thank you for getting in touch!
          </Typography>
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            Back to Home
          </Button>
        </Box>
      </Box>
    );
  };

  const sendMail = async () => {
    if (disable || sending.current) return;
    sending.current = true;
    setLoading(true);
    setSendError("");
    try {
      const response = await fetch("https://formsubmit.co/ajax/chandrasekhar8120@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: contactInfo.name.trim(),
          email: contactInfo.email.trim(),
          company: contactInfo.company.trim(),
          phone: contactInfo.mobNo.trim(),
          message: contactInfo.message.trim(),
          _subject: "New portfolio contact inquiry",
          _template: "table",
        }),
      });
      if (!response.ok) throw new Error("Submission request failed");
      const result = await response.json();
      if (result.success !== true && result.success !== "true") {
        throw new Error("Submission was not accepted");
      }
      setContactInfo({ name: "", company: "", email: "", mobNo: "", message: "" });
      setGreetModal(true);
    } catch {
      setSendError("Unable to send your message. Please try again or email me directly.");
    } finally {
      sending.current = false;
      setLoading(false);
    }
  };

  return (
    <Layout>
      {greetModal && <GreetingsModal />}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          flex: 10,
          overflowY: "auto",
        }}
      >
        <Box className="child1-large">
          <Box
            sx={{
              width: "100%",
              minWidth: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h3" sx={{ width: "70%" ,marginTop:"10%"}}>
              Hi there! I'm thrilled that you've stopped by. <br/>
              Let's work together
              to create something truly great.
            </Typography>

          
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <Header
              title="NEW BUSINESS"
              subtitle="chandrasekhar8120@gmail.com"
            />
            <Header
              title="GENERAL INQUIRIES"
              subtitle="chandrasekhar.info@gmail.com"
            />
            {/* <Header 
            title="My Mobile Number"
            subtitle="8332001832"
            /> */}
          </Box>
        </Box>
        <Box className="child2-large">
          <Box component="form" className="contact-form" onSubmit={(event) => { event.preventDefault(); sendMail(); }}>
            <Typography
              variant="h3"
              sx={{ width: "80%", textAlign: "center", color: "#3498db",marginTop: 3 }}
            >
              Contact Us
            </Typography>
            <TextInput
              label="Name"
              name="name"
              value={contactInfo.name}
              handler={changeHandler}
             
            />
            <TextInput
              label="Company ( optional )"
              name="company"
              value={contactInfo.company}
          
              handler={changeHandler}
            />
            <TextInput
              label="Email"
              name="email"
              value={contactInfo.email}
              handler={changeHandler}
            
            />
            <TextInput
              label="MobileNo ( optional )"
              name="mobNo"
              value={contactInfo.mobNo}
              handler={changeHandler}
            />
            <TextField
              id="my-textarea"
              label="Message"
              name="message"
              multiline
              rows={4}
              
              value={contactInfo.message}
              sx={{ width: { xs: "100%", sm: "80%" }, minWidth: 0 }}
              onChange={(e) => {
                setContactInfo({ ...contactInfo, message: e.target.value });
              }}
            />
            <Button
              variant="contained"
              className={disable ? "disable-button" : "loading-button"}
              startIcon={<Send />}
              disabled={disable || loading}
              aria-busy={loading}
              type="submit"
            >
              {loading ? "Sending..." : "Send Away"}
            </Button><br/>
            {sendError && <Typography role="alert" color="error">{sendError} <a href="mailto:chandrasekhar8120@gmail.com">Email Chandra Sekhar</a></Typography>}
            {/* <LoadingButton variant="contained" sx={{width:"80%"}} onClick={sendMail} >Send Away</LoadingButton> */}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;
