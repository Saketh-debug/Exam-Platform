import { Paper, Typography, Box, Button,Stack } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useState } from "react";
import './Exambar.css';
import {getQuestionByNumber} from '../api.js';
import { useEffect } from "react";
import axios from "axios";
const OptionButton = styled('button')(({ theme }) => ({
  width: '100%',
  backgroundColor: '#a1b4c8ff', // primary blue
  color: 'white',
  border: 'none',
  padding: '12px 24px',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
  display: 'flex',
  fontWeight: '500',
  '&:hover': {
    backgroundColor: '#757a80ff', // darker blue on hover
    textAlign: 'left',
},
}));

const SmallButton = styled('button')(({ theme }) => ({
  backgroundColor: '#1976d2',
  color: 'white',
  border: 'none',
  padding: '8px 16px', // smaller padding to match text width
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '500',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: '#115293',
  },
}));

function Exambar()
{
  
    const [qno,setqno] = useState(1);
    const [qdata, setqdata] = useState();
    useEffect(()=>{
      const fetchData = async() =>{
        try{
          const response = await axios.get(`http://localhost:8080/api/question/${qno}`);
          setqdata(response.data);
        }
        catch (err)
        {
          console.log("Error while fetching the data",err);
        } 
      };
      fetchData();
    },[qno])

    const options = qdata?.options?.map((opt,index) => ( 
        <OptionButton>{opt}</OptionButton>
    ))
    return (
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
          width: "90vw",
          maxHeight: "90vh",
          height: "70vh",
          p: 3,
          display: "block",
          textAlign: "left",
          //justifyContent: "center",
          alignItems: "center",
           position: 'relative',
           bgcolor: "#cac7a8ff"

        }}
      >
        <Typography variant="h5" gutterBottom>
          {qno}Q.
        </Typography>
        <Typography variant="body1"  mb = {3}>
          {qdata?.qcontent || "Loading..."}
        </Typography>
        <Stack spacing={3}>
            {/* <OptionButton>Option A</OptionButton>
            <OptionButton>Option B</OptionButton>
            <OptionButton>Option C</OptionButton>
            <OptionButton>Option D</OptionButton> */}
            {options}
            </Stack>
        <Box
            sx={{
              position: 'absolute',
              bottom: '16px',
              right: '16px',
              display: 'flex',
              gap: 2, // space between buttons
            }}
          >
           <SmallButton onClick={() => setqno((prev) => Math.max(prev-1,1))}>Previous Question</SmallButton>
            <SmallButton onClick={() => setqno((prev) => prev + 1)}>Next Question</SmallButton>
          </Box>
              </Paper>
            </Box>
            )
}

export default Exambar;