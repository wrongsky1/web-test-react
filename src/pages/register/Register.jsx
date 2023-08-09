import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./register.scss";
import { BASE_URL_API } from "../../utils/const";

const Register = () => {
    let navigate = useNavigate();

    const [regForm, setRegForm] = useState({
        email: "",
        password: "",
        name: "",
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setRegForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleReg = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${BASE_URL_API}/signup`, regForm);
            navigate("/login");
        } catch (err) {
            if (err?.response.data.message.message)
                setError(err.response.data.message.message);
            if (err?.response.data.validation.body.message)
                setError(err.response.data.validation.body.message);

            console.log(err);
        }
    };

    return (
        <div className='register'>
            <div className='card'>
                <div className='left'>
                    <h1>Знакомство с программированием</h1>
                    <p>
                        Так или иначе на протяжение долгого времени я
                        сталкивался с разработкой программного обеспечения, и
                        пытался разобраться в нем насколько это было в моих
                        силах. Информация была разрозненная, процесс обучения
                        занимал много времени, а продуктивность оставляла желать
                        лучшего. Чем больше времени я проводил, изучая
                        программирование и создавая свои собственные проекты,
                        тем больше я понимал, что это именно то, что мне
                        нравится. Я был поражен тем, как через написание кода я
                        мог создавать вещи, которые оживали на экране. Каждая
                        строка была как пазл в большой картине, и я наслаждался
                        тем, как все сходилось воедино. Когда появился
                        Яндекс.Практикум, я решил, что их подход к обучению и
                        структурирования информация, поможет мне добиться
                        больших результатов и не прогадал. Ценность наставников
                        и менторов сложно преувеличить. Все это помогло
                        координально изменить свою жизнь к лучшему.
                    </p>
                    <p>
                        Главное, что меня привлекает в программировании - это
                        возможность непрерывного обучения и развития. Мир
                        программирования постоянно меняется и развивается, и
                        всегда есть что-то новое для изучения. Я могу
                        погрузиться в новую технологию или язык программирования
                        и обрести новые навыки, которые могут помочь мне в
                        решении сложных задач.
                    </p>
                    <p>
                        Таким образом, со временем программирование стало не
                        только моим любимым занятием, но и настоящей страстью.
                        Каждый проект стал для меня путешествием в мир логики,
                        творчества и саморазвития. Программирование помогло мне
                        расширить свой кругозор, научиться мыслить системно и
                        решать сложные задачи, а главное - оно никогда не
                        перестает меня удивлять и вдохновлять своим потенциалом.
                    </p>
                    <span>Уже зарегистрирован?</span>
                    <Link className='button' to='/login'>
                        Войти
                    </Link>
                </div>
                <div className='right'>
                    <h1>Регистрация</h1>
                    <form>
                        <input
                            type='text'
                            name='name'
                            placeholder='Name'
                            value={regForm.name}
                            onChange={handleChange}
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={regForm.email}
                            onChange={handleChange}
                        />
                        <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={regForm.password}
                            onChange={handleChange}
                        />
                        {error && <span>{error}</span>}
                        <button className='button' onClick={handleReg}>
                            Зарегистрироваться
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
