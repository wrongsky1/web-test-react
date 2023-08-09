import { FormEvent, useContext, useState } from "react";
import "./contactForm.scss";
import { AuthContext } from "../../utils/authContext";
import axios from "axios";
import { BASE_URL_API } from "../../utils/const";

const ContactForm = () => {
    const { currentUser, setCurrentUser } = useContext(AuthContext);

    const [buttonStatus, setButtonStatus] = useState("Отправить");
    const [inputs, setInputs] = useState({
        email: currentUser.email,
        name: currentUser.name,
        feedback: "",
    });

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios
            .post(`${BASE_URL_API}/feedback`, inputs)
            .then((res) => {
                setButtonStatus("Загрузка...");
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setButtonStatus("Отправить");
                setInputs((prev) => ({ ...prev, feedback: "" }));
            });
    };

    return (
        <form className='contactForm' onSubmit={handleSubmit}>
            <h3>Форма обратной связи</h3>
            <div className='inputBlock'>
                <label htmlFor='message'>Сообщение:</label>
                <textarea
                    id='message'
                    name='feedback'
                    onChange={handleChange}
                    value={inputs.feedback}
                    required
                />
            </div>
            <button type='submit'>{buttonStatus}</button>
        </form>
    );
};

export default ContactForm;
