import React from 'react'
import { Formik, Field, Form} from 'formik';
import validationSchema from "./Validation";
import {useToDo} from "../../../Contexts/ToDoContext";


function NewToDoForm() {
  const {addToDo} = useToDo();
  return (
    <Formik
      initialValues={{
        text: "",
       
      }}
      onSubmit={async (values,bag) => {
       
        console.log(values);

        addToDo(values.text);

        bag.resetForm();
      }}
      validationSchema ={validationSchema}
    >
      <Form>
			<Field className="new-todo" 
      placeholder="What needs to be done?" 
      autoFocus 
      id="text"
      name="text"
      />
		</Form>
    </Formik>
    
  )
}

export default NewToDoForm
