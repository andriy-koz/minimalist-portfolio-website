import { useState } from "react"

const useForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [nameTouched, setNameTouched] = useState(false)
  const [emailTouched, setEmailTouched] = useState(false)
  const [messageTouched, setMessageTouched] = useState(false)
  const [nameValid, setNameValid] = useState(true)
  const [emailValid, setEmailValid] = useState(true)
  const [messageValid, setMessageValid] = useState(true)
  const [formValid, setFormValid] = useState(false)

  const onNameChange = (value) => {
    setName(value)
    if (value.length >= 0 && nameTouched) {
      setNameValid(true)
    }
  }
  const onEmailChange = (value) => {
    if (value.length >= 0 && emailTouched) {
      setEmailValid(true)
    }
    setEmail(value)
  }
  const onMessageChange = (value) => {
    if (value.length >= 0 && messageTouched) {
      setMessageValid(true)
    }
    setMessage(value)
  }
  const onNameBlur = () => {
    setNameTouched(true)
    if (name.length === 0) setNameValid(false)
  }
  const onEmailBlur = () => {
    setEmailTouched(true)
    if (email.length === 0) setEmailValid(false)
  }
  const onMessageBlur = () => {
    setMessageTouched(true)
    if (message.length === 0) setMessageValid(false)
  }
  const onFormSubmit = () => {
    if (nameValid && emailValid && messageValid) setFormValid(true)
    else setFormValid(false)
  }

  return {
    onNameChange,
    name,
    onEmailChange,
    email,
    onMessageChange,
    message,
    onNameBlur,
    onEmailBlur,
    onMessageBlur,
    nameValid,
    emailValid,
    messageValid,
    formValid,
  }
}
export default useForm
