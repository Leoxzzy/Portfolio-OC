// Modules
import { useEffect, useState } from "react";

// Components
import Header from "../../components/header/header.jsx";
import AboutMe from "../../components/about-me/aboutMe";
import ProjectsList from "../../components/projects-list/projectsList";


function Home() {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('./data.json')
        .then((response) => {
            if (!response.ok) { throw new Error('Une erreur est survenue lors du chargement des données: ' + response.status); }
            return response.json()
        })
        .then((data) => {
            setData(data)
            setLoading(false);
        })
        .catch((error) => {
            console.error(error)
        })
    }, [])

    if (loading) { return null }

    return (
        <main id="home">
            <Header />
            <AboutMe aboutMe={data.aboutMe}/>
            <ProjectsList projects={data.projects} categories={data.categories}/>
        </main>
    );
}

export default Home;