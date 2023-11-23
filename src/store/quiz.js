import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const URL_API_QUIZ = "https://64c7a27fa1fe0128fbd50f1c.mockapi.io/quiz";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    quiz: [],
    status: "idle",
  },
  reducers: {
    
  },

  extraReducers(builder) {
    builder
    .addCase(fetchQuestions.fulfilled, (state, action) => {
      state.status = "succeeded";
    
      state.quiz = action.payload;
    })

    .addCase(addNewQuiz.fulfilled, (state, action) => {
      state.quiz.push(action.payload);
    })
  }
});


//middleware

export const fetchQuestions = createAsyncThunk("quiz/fetchQuestions", async () => {
    const response = await axios.get(URL_API_QUIZ);
    return response.data;
  });

  export const addNewQuiz = createAsyncThunk(
    "quiz/addNewQuiz",
    async (newquiz) => {
      const response = await axios.post(URL_API_QUIZ, newquiz);
      return response.data;
    }
  );

  
export default quizSlice.reducer;
