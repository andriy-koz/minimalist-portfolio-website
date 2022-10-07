import Image from "next/image"
import ButtonPrimary from "../components/UI/ButtonPrimary"
import useForm from "../hooks/use-form"
import styles from "../styles/contact.module.scss"

const ContactPage = () => {
  const {
    onNameChange,
    onNameBlur,
    nameValid,
    name,
    onEmailChange,
    onEmailBlur,
    emailValid,
    email,
    onMessageChange,
    onMessageBlur,
    messageValid,
    message,
  } = useForm()

  return (
    <div className={`${styles.main} container`}>
      <div className={styles["get-in-touch"]}>
        <h2>Get in Touch</h2>
        <section>
          <p>
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in London. But I’m also happy to hear about opportunites
            that don’t fit that description. I’m a hard-working and positive
            person who will always approach each task with a sense of purpose
            and attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </p>
          <ul>
            <li>
              <Image
                src={"/icons/github.svg"}
                alt="GitHub icon"
                width={24}
                height={24}
              />
            </li>
            <li>
              <Image
                src={"/icons/twitter.svg"}
                alt="Twitter icon"
                width={24}
                height={24}
              />
            </li>
            <li>
              <Image
                src={"/icons/linkedin.svg"}
                alt="LinkedIn icon"
                width={24}
                height={24}
              />
            </li>
          </ul>
        </section>
      </div>
      <div className={styles["contact-me"]}>
        <h2>Contact Me</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => onNameChange(e.target.value)}
            value={name}
            type="text"
            placeholder="Jane Appleseed"
            id="name"
            onBlur={() => onNameBlur()}
            className={!nameValid ? styles["error-border"] : ""}
          />
          <p className={!nameValid ? styles["error-msg"] : ""}>
            This field is required
          </p>
          <label htmlFor="email">Email Address</label>
          <input
            className={!emailValid ? styles["error-border"] : ""}
            onChange={(e) => onEmailChange(e.target.value)}
            value={email}
            type="email"
            placeholder="email@example.com"
            id="email"
            onBlur={() => onEmailBlur()}
          />
          <p className={!emailValid ? styles["error-msg"] : ""}>
            This field is required
          </p>
          <label htmlFor="message">Message</label>
          <textarea
            className={!messageValid ? styles["error-border"] : ""}
            onBlur={() => onMessageBlur()}
            onChange={(e) => onMessageChange(e.target.value)}
            value={message}
            id="message"
            placeholder="How can i help?"
          />
          <p className={!messageValid ? styles["error-msg"] : ""}>
            This field is required
          </p>
          <ButtonPrimary contact>send message</ButtonPrimary>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
