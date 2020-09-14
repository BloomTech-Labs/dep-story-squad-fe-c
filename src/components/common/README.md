<!-- This is for 'common component documentation -->


## FormModalComp

- This comonent accepts multiple children through props, to render a form or a multi-step form sequence for example. In a multi-step from, data is stored in the formPayload state obj until the last form step is ready to send data to server. 

- Each component passed in as a child (form/input) has access to the Modal's state, including the setShowModal state to close the modal upon completion.

- Your form/input component that you add as props to the Modal will have access to the following state from the modal as props:

  - setFormSubmissionData 
      *allows you to pass form data back to the Modal until needed. ex structure:
       `{
        form1data: {
          username: 'tom',
          email: 'tom@email.com'
        }
        pin: '1234',
      }`
      You can build this data however you need to, above is just one useCase

  - formSubmisisonData
      * access the Modal's accumulative form data from all the child form/input components

  - showModal
      * Boolean modal state from the Modal component, dictating if the modal is visible or not. 

  - setShowModal
      * Probably only needed bt the last form/input element to close the modal when your'e finished with the forms

  - Child form/input components should store and display their own error messages.

  - Child form/iput components should store their own formData until finished, then pass it up to the Modal using the 'setFormSubmissionData' function from the Modal component

## PINForm Component
  - I used the react-pin-input NPM package for this PIN input field

  - [react-pin-input](https://www.npmjs.com/package/react-pin-input)

  - Usage: 
      `<PinInput 
        length={4} 
        initialValue=""
        secret 
        onChange={(value, index) => {}} 
        type="numeric" 
        inputMode="number"
        style={{padding: '10px'}}  
        inputStyle={{borderColor: 'red'}}
        inputFocusStyle={{borderColor: 'blue'}}
        onComplete={(value, index) => {}}
        autoSelect={true}
      />`

  - Stores and displays it's own validation
      