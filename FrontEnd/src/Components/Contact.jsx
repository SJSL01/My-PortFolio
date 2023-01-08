import { useState } from "react"
import "../Styles/Contact.css"
import axios from "axios"
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
    try {
      const res = await axios.post("http://localhost:5000/contact", contactInfo)
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }



  }
  return (
    <div className="contact-container">
      <div className="left-contact">
        <form>
          <h2 style={{ margin: "0 auto" }}>Contact ME</h2>
          <div>
            <label htmlFor="email">Email</label>
            <input placeholder="Email" onChange={(e) => { handleInput(e) }} value={contactInfo.email} type="text" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input placeholder="Name" onChange={(e) => { handleInput(e) }} value={contactInfo.name} type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="name">Message</label>
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
