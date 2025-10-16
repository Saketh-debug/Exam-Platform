import { Paper, Typography, Box, Button,Stack } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";


const SmallButton = styled('button')(({ theme }) => ({
  backgroundColor: '#1976d2',
  color: 'white',
  border: 'none',
  padding: '8px 16px', // smaller padding to match text width
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '18px',
  fontWeight: '500',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: '#115293',
  },
}));

const CustomTextField = styled(TextField)({
  "& .MuiFilledInput-root": {
    backgroundColor: "#f5f5f5",
  },
  "& .MuiFilledInput-root:hover": {
    backgroundColor: "#e0e0e0",
  },
  "& .MuiFilledInput-root.Mui-focused": {
    backgroundColor: "#ffffff",
  },
});


function Qupload()
{
    const [qno,setqno] = useState(0);
    const [options,setoptions] = useState(["","","",""]);
    const [question, setquestion] = useState("HILL");
    const coropt = 4;
    const handlesubmit = async () => {
        try
        {
            const res = await axios.post("http://localhost:5173/question",{
                qno,
                question,
                options,
                coropt
            });
            console.log("Saved",res.data);
            setqno(0);
            setQuestion("");
            setOptions(["", "", "", ""]);
        }
        catch (err)
        {
            console.error("Error saving question", err);
        }
    }


    return (
    <div style={{ margin: "20px" }}>
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        //bgcolor: "#f0f0f0"
      }}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: 1200,
          width: "40vw",
          maxHeight: "90vh",
          height: "80vh",
          p: 3,
          display: "block",
          textAlign: "left",
          //justifyContent: "center",
          alignItems: "center",
           position: 'relative',
           bgcolor: "#cac7a8ff"

        }}
      >
    <h2>Type the question below: </h2>
    <Box
      sx={{
        display: "flex",
        gap: 2, // space between text boxes
      }}
    >
    <CustomTextField label="Question Number" variant="filled" onChange={(e) => setqno(e.target.value)} sx={{ width: 40 }}/>
    <CustomTextField label="Question Description" variant="filled" onChange={(e) => setquestion(e.target.value)} sx={{ width: "80%"}} />
    </Box>
      <br /><br />
    <h2>Type Options Below: </h2>
    <Stack spacing={2}>
    <CustomTextField label="Option 1" variant="filled" onChange={(e) => {
  const newOptions = [...options];
  newOptions[0] = e.target.value;
  setoptions(newOptions);
}}
/>
    <CustomTextField label="Option 2" variant="filled" onChange={(e) => {
  const newOptions = [...options];
  newOptions[1] = e.target.value;
  setOptions(newOptions);
}}
/>
    <CustomTextField label="Option 3" variant="filled" onChange={(e) => {
  const newOptions = [...options];
  newOptions[2] = e.target.value;
  setOptions(newOptions);
}}
/>
    <CustomTextField label="Option 4" variant="filled" onChange={(e) => {
  const newOptions = [...options];
  newOptions[3] = e.target.value;
  setOptions(newOptions);
}}
/>
    </Stack>
    

    <Box
            sx={{
              position: 'absolute',
              bottom: '16px',
              left: '50%',
              transform: "translateX(-50%)",
              display: 'flex',
              gap: 2, // space between buttons
            }}
          >
    <SmallButton onClick={handlesubmit}>Submit</SmallButton>
    </Box>
    </Paper>
    </Box>
    </div>
    )
}

export default Qupload;