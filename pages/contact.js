import Image from 'next/image'
import ButtonPrimary from '../components/UI/ButtonPrimary'
import useForm from '../hooks/use-form'
import styles from '../styles/pages/contact.module.scss'

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
      <div className={styles['get-in-touch']}>
        <h2>Get in Touch</h2>
        <section>
          <p>
          We'd love to hear what challenges you're facing and how we can help. We're always open to new projects and partnerships—especially if you're looking to boost efficiency, cut costs, and drive growth through smart automation. We're flexible and happy to collaborate with businesses of any size or industry, locally or remotely. Our team approaches every project with enthusiasm, precision, and a clear focus on results. Feel free to explore our portfolio and reach out to us below—we can't wait to chat!
          </p>
          
        </section>
      </div>
      <div className={styles['contact-me']}>
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => onNameChange(e.target.value)}
            value={name}
            type="text"
            placeholder="Jane Appleseed"
            id="name"
            onBlur={() => onNameBlur()}
            className={!nameValid ? styles['error-border'] : ''}
          />
          <p className={!nameValid ? styles['error-msg'] : ''}>
            This field is required
          </p>
          <label htmlFor="email">Email Address</label>
          <input
            className={!emailValid ? styles['error-border'] : ''}
            onChange={(e) => onEmailChange(e.target.value)}
            value={email}
            type="email"
            placeholder="email@example.com"
            id="email"
            onBlur={() => onEmailBlur()}
          />
          <p className={!emailValid ? styles['error-msg'] : ''}>
            This field is required
          </p>
          <label htmlFor="message">Message</label>
          <textarea
            className={!messageValid ? styles['error-border'] : ''}
            onBlur={() => onMessageBlur()}
            onChange={(e) => onMessageChange(e.target.value)}
            value={message}
            id="message"
            placeholder="How can i help?"
          />
          <p className={!messageValid ? styles['error-msg'] : ''}>
            This field is required
          </p>
          <ButtonPrimary contact>send message</ButtonPrimary>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
