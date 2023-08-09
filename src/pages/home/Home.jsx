import { useContext } from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import LogOutButton from "../../components/logOutButton/LogOutButton";
import { AuthContext } from "../../utils/authContext";
import "./home.scss";

function Home() {
    const { currentUser } = useContext(AuthContext);

    return (
        <div className="home">
            <main className="main">
                <h1 className="name">Спасибо за доверие {currentUser.name}</h1>
                <h3 className="title">
                    Ниже полезная информация о приложении и небольшой урок
                </h3>
                <p className="description">
                    Ссылка на репозиторий проекта &#8594; &nbsp;
                    <a href="https://github.com/wrongsky1/web-test-react">
                        REPO
                    </a>
                </p>
                <p className="description">
                    Эта новая возможность в CSS изменит твою жизнь к лучшему!
                </p>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/R1l2EHD5DCI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
                <ContactForm />
                <LogOutButton />
            </main>
        </div>
    );
}

export default Home;
