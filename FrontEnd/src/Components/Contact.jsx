import { useRef, useState } from "react"
import "../Styles/Contact.css"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"
export default function Contact() {


  const [contactInfo, setContactInfo] = useState(
    {
      name: "",
      email: "",
      message: ""
    })

  const handleInput = (e) => {
    const { name, value } = e.target
    setContactInfo({ ...contactInfo, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (contactInfo.email.length === 0 || contactInfo.name.length === 0 || contactInfo.message.length === 0) {
      return toast.error("Please write something")
    }
    try {
      await axios.post("https://myportfolio-nodemailer.onrender.com/contact", contactInfo)
      toast.success("Email Sent!!!")
      setContactInfo({
        name: "",
        email: "",
        message: ""
      })
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div className="contact-container">
      <Toaster
        position="top-center"

        gutter={8}
        toastOptions={{

          duration: 1000,
          style: {
            background: '#000000',
            color: '#fff',
          },
        }}
      />
      <div className="left-contact">
        <form>
          <h2 style={{ color: "white", margin: "0 auto" }}>Contact ME</h2>
          <div>

            <input placeholder="Email" onChange={(e) => { handleInput(e) }} value={contactInfo.email} type="email" id="email" name="email" />
          </div>
          <div>
            <input placeholder="Name" onChange={(e) => { handleInput(e) }} value={contactInfo.name} type="text" id="name" name="name" />
          </div>
          <div >

            <textarea onChange={(e) => { handleInput(e) }}
              value={contactInfo.message} type="text" name="message" />
          </div>

          <div>
            <button onClick={(e) => { handleSubmit(e) }} type="submit">SEND</button>
          </div>
        </form>
      </div>

      <div className="right-contact">
        <img width={"100%"} src="./contactpage.png" alt="" />

      </div>
    </div>
  )
}
