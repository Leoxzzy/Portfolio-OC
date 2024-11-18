// Modules
import { useState } from "react";

// Components
import Header from "../../components/header/header";

function Contact() {
    const [inCooldown, setCooldown] = useState(false)

    function handleForm(event) {
        event.preventDefault()

        if (!inCooldown) {
            setCooldown(true)

            setTimeout(() => {
                setCooldown(false)
            }, 10000);
        
            fetch('https://discord.com/api/webhooks/1307268314183106611/ZAU4DJ5qQAuuBrSee0nALTv2ZIAW6MWzmVzzPEqpsK5S3nTdvOZN-thpv7vTiIGDmzl4', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    embeds: [
                        {
                            title: 'Données de formulaire',
                            type: 'rich',
                            fields: [
        
                                {
                                    name: 'Nom:',
                                    value: event.target.name.value,
                                    inline: false
                                },
                                {
                                    name: 'E-Mail:',
                                    value: event.target.mail.value,
                                    inline: false
                                },
                                {
                                    name: 'Message:',
                                    value: event.target.message.value,
                                    inline: false
                                }
                            ]
                        },
                    ]
                })
            })
            .then((response) => {
                if (response.status === 204) {
                    event.target.name.value = null;
                    event.target.mail.value = null;
                    event.target.message.value = null;
                    alert('Votre message a bien été envoyé!')
        
                } else {
                    alert("Une erreur est survenue lors de l'envoie de votre message!")
                }
            })
        } else {
            alert("Patientez avant de renvoyer à nouveau un message!")
        }
    }

    return (
        <main id="contact">
            <Header />

            <form onSubmit={handleForm}>
                <div className="contact-input">
                    <label htmlFor="name">Nom:</label>
                    <input type="text" name="name" id="name" required={true}/>
                </div>

                <div className="contact-input">
                    <label htmlFor="mail">E-Mail:</label>
                    <input type="email" name="mail" id="mail" required={true}/>
                </div>

                <div className="contact-input">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" required={true}></textarea>
                </div>

                <button type="submit">Valider</button>
            </form>
        </main>
    )
}

export default Contact;