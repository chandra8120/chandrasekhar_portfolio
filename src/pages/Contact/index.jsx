import React, { useEffect, useState } from "react";
import Layout from "../../hoc/LandingPage_Layout";
import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { Close, Send } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./ContactPage.css";

const TextInput = ({ label, name, value, handler }) => {
  return (
    <Box sx={{ width: "38.5%", minWidth: 250 }}>
      <TextField
        label={label}
        name={name}
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
  const [disable, setDisable] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(false);


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

    if (name === "email") {
      setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
    }
  };
  const closeHandler = () => {
    setGreetModal(false);
  };
  
  const GreetingsModal = () => {
    return (
      <Box className="greet-modal-main">
        <Box className="greet-modal-sub">
          <Button sx={{ marginLeft: "86%" }} onClick={closeHandler}>
            <Close />
          </Button>
            <Typography component="p">Thanks for reaching out!</Typography>
            <Typography component="p">
            Your Message just showed up in my inbox. Talk to you soon!
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

  const handleMail = () => {
    if (
      contactInfo.name.length >= 2 &&
      isEmailValid &&
      contactInfo.message.length > 10
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  useEffect(() => {
    handleMail();
  }, [contactInfo, isEmailValid]);

  const sendMail = async () => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSendError("Contact form is not configured yet. Please email me directly.");
      return;
    }

    setLoading(true);
    setSendError("");
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          user_name: contactInfo.name,
          user_email: contactInfo.email,
          company: contactInfo.company,
          mobNo: contactInfo.mobNo,
          message: contactInfo.message,
        },
        { publicKey }
      );
      setContactInfo({ name: "", company: "", email: "", mobNo: "", message: "" });
      setGreetModal(true);
    } catch {
      setSendError("Unable to send your message. Please try again or email me directly.");
    } finally {
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
              minWidth: 450,
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
          <Box className="contact-form">
            <Typography
              variant="h3"
              sx={{ width: "80%", textAlign: "center", color: "#3498db",marginTop:"66%" }}
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
              sx={{ width: "80%", minWidth: 250 }}
              onChange={(e) => {
                setContactInfo({ ...contactInfo, message: e.target.value });
              }}
            />
            <Button
              variant="contained"
              className={disable ? "disable-button" : "loading-button"}
              startIcon={<Send />}
              disabled={disable}
              loading={loading}
              onClick={sendMail}
            >
              Send Away
            </Button><br/>
            {sendError && <Typography color="error">{sendError}</Typography>}
            {/* <LoadingButton variant="contained" sx={{width:"80%"}} onClick={sendMail} >Send Away</LoadingButton> */}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;
