import React from "react";
import { navigate } from "gatsby-link";
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
        <h1 className="title is-size-3 has-text-weight-bold is-bold-light">Φόρμα επικοινωνίας</h1>

        <ul>
          <li><label className="has-text-weight-bold">Τηλέφωνα:</label> 6949.836.700</li>
          <li><label className="has-text-weight-bold">Email:</label> parents@enato.edu.gr</li>
        </ul>

        <p className="has-text-weight-bold">
          Επιπρόσθετα, μπορείτε να χρησιμοποιήστε την παρακάτω φόρμα για να:
        </p>
        <ul>
          <li>Εκφράσετε παράπονα ή προτάσεις</li>
          <li>Ενημερώσετε τον σύλλογο για δραστηριότητες που ενδέχεται να τον ενδιαφέρουν</li>
          <li>Παρέχετε υλική ή άλλη βοήθεια προς τον Σύλλογο</li>
        </ul>

        <form
          name="contact"
          method="post"
          action="/contact/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>
          <div className="field">
            <label className="label" htmlFor={"name"} >Όνομα</label>
            <div className="control">
              <input className="input" type={"text"} name={"name"} onChange={this.handleChange} id={"name"} required={true} />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={"email"}>Email</label>
              <div className="control">
                <input className="input" type={"email"} name={"email"} onChange={this.handleChange} id={"email"} required={true} />
              </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={"subject"}>Θέμα</label>
              <div className="control">
                <input className="input" type={"subject"} name={"subject"} onChange={this.handleChange} id={"subject"} required={true} />
              </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={"message"}>Μήνυμα</label>
            <div className="control">
              <textarea className="textarea" name={"message"} onChange={this.handleChange} id={"message"} required={true} />
            </div>
          </div>
          <div className="field">
            <button className="button is-link" type="submit">Αποστολή</button>
          </div>
        </form>
        </div>
        </div>
        </section>
      </Layout>
    );
  }
}
