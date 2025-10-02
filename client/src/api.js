import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:7000/api" });

export const getQuestionByNumber = (qno) => API.get(`/question/${qno}`);
