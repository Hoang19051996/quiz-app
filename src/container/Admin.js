import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { ListQuizAdmin } from "../component/ListQuizAdmin"
import React from "react";
import { useDispatch } from "react-redux";
import { addNewQuiz } from "../store/quiz";





export const QuizAdmin = () => {
    const [modal, setModal] = React.useState(false);
    const [listQuiz, setListQuiz] = React.useState({
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: "",
        type:"",
      });
    const dispatch = useDispatch();

      const handleToggle = () => {
      
        setModal(false);
      };

      const handleOnChange = (e) => {
        setListQuiz({ ...listQuiz, [e.target.name]: e.target.value });
      };

      const handleClickCreate = () => {
        setModal(true);
      }

      const handleAddQuiz = async () => {
        const newQuiz = {
          id: crypto.randomUUID(),
          question: listQuiz.question,
          choices: [listQuiz.answer1,listQuiz.answer2,listQuiz.answer3,listQuiz.answer4],
          correctAnswer: listQuiz.correctAnswer,
          type: listQuiz.type,
         
        };
        dispatch(addNewQuiz(newQuiz));
        setListQuiz({});
        setModal(false);

        console.log("newQuiz",newQuiz)
      }

    return(
        <>
        <Button color="primary" onClick={handleClickCreate} > 
         Add New Quiz
        </Button>
        <ListQuizAdmin />

        


        <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader>Add New Quiz</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="foodName">Question</Label>
              <Input
                value={listQuiz.question}
                onChange={handleOnChange}
                id="question"
                name="question"
                placeholder="Enter Question"
              />
            </FormGroup>

            <FormGroup>
              <Label for="Answer 1">Answer 1</Label>
              <Input
                value={listQuiz.answer1}
                onChange={handleOnChange}
                id="answer1"
                name="answer1"
                placeholder="Enter Answer 1"
       
              />
            </FormGroup>

            <FormGroup>
              <Label for="Answer 2">Answer 2</Label>
              <Input
                value={listQuiz.answer2}
                onChange={handleOnChange}
                id="answer2"
                name="answer2"
                placeholder="Enter Answer 2"
               
              />
            </FormGroup>

            <FormGroup>
              <Label for="Answer 3">Answer 3</Label>
              <Input
                value={listQuiz.answer3}
                onChange={handleOnChange}
                id="answer3"
                name="answer3"
                placeholder="Enter Answer 3"
     
              />
            </FormGroup>

            <FormGroup>
              <Label for="Answer 4">Answer 4</Label>
              <Input
                value={listQuiz.answer4}
                onChange={handleOnChange}
                id="answer4"
                name="answer4"
                placeholder="Enter Answer 4"
             
              />
            </FormGroup>
            <FormGroup>
              <Label for="correctAnswer">Correct Answer</Label>
              <Input
                value={listQuiz.correctAnswer}
                onChange={handleOnChange}
                id="correctAnswer"
                name="correctAnswer"
                placeholder="Enter Correct Answer"
             
              />
            </FormGroup>

            <FormGroup>
              <Label for="type">Type</Label>
              <Input
                value={listQuiz.type}
                onChange={handleOnChange}
                id="type"
                name="type"
                placeholder="Enter Type"
             
              />
            </FormGroup>
           
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAddQuiz} >
            Save
          </Button>
          <Button color="secondary" onClick={handleToggle}>
            Cancle
          </Button>
        </ModalFooter>
      </Modal>
        </>
    )
}