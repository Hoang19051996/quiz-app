import { configureStore } from "@reduxjs/toolkit";
import QuizReducer from '../store/quiz'



export default configureStore({
    reducer: {
        quiz : QuizReducer,
       
    }
  })