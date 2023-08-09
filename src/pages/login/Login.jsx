import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../utils/authContext";
import axios from "axios";
import oldPhoto from "../../assets/jpeg/oldPhoto.jpg";
import newPhoto from "../../assets/jpeg/newPhoto.jpg";
import "./login.scss";
import { BASE_URL_API } from "../../utils/const";

const Login = () => {
    const { currentUser, setCurrentUser } = useContext(AuthContext);
    let navigate = useNavigate();

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setLoginForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${BASE_URL_API}/signin`, loginForm);
            if (res) {
                localStorage.setItem("jwt", res.data.token);
                setCurrentUser({
                    name: res.data.name,
                    email: res.data.email,
                });
                navigate("/");
            }
        } catch (err) {
            if (err?.response.data.message.message)
                setError(err.response.data.message.message);
            if (err?.response.data.validation.body.message)
                setError(err.response.data.validation.body.message);
            console.log(err);
        }
    };

    return (
        <div className='login'>
            <div className='card'>
                <div className='left'>
                    <div className='story'>
                        <img
                            className='oldPhoto'
                            src={oldPhoto}
                            alt='Фото из 2011'></img>
                        <img
                            className='newPhoto'
                            src={newPhoto}
                            alt='Крайнее селфи'></img>
                        <h1>Привет! Меня зовут Миша</h1>
                        <p>
                            Еще в подростковом возрасте вопрос выбора
                            направления, профориентации стоял как никогда остро.
                            К сожалению в то время было крайне мало полезной
                            информации, а компьютеры были далеко не в каждой
                            семье. Я точно понимал, что хочу создавать нечто
                            большое. Принимать участие, конструировать что-то,
                            что дарило бы пользу людям, что могло бы улучшить
                            качество жизни. Тогда я выбрал инженерное
                            направление, оно было далеко от программирования, в
                            то время оно и вовсе казалось какой-то магией.
                        </p>
                    </div>
                    <span>Зарегистрируйся чтобы узнать больше</span>
                    <Link className='button' to='/register'>
                        Регистрация
                    </Link>
                </div>
                <div className='right'>
                    <form>
                        <input
                            type='text'
                            value={loginForm.email}
                            onChange={handleChange}
                            name='email'
                            placeholder='Email'
                        />
                        <input
                            type='password'
                            value={loginForm.password}
                            onChange={handleChange}
                            name='password'
                            placeholder='Password'
                        />
                        {error && <span>{error}</span>}
                        <button className='button' onClick={handleLogin}>
                            Войти
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
