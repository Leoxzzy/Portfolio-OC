// Modules
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
import Header from "../../components/header/header";
import ProjectSheet from "../../components/project-sheet/projectSheet";

// Pages
import NotFound from "../notfound/notfound";


function SheetPage() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('/data.json')
        .then((response) => {
            if (!response.ok) { throw new Error('Une erreur est survenue lors du chargement des données: ' + response.status); }
            return response.json()
        })
        .then((data) => {
            data.projects.map(element => {
                if (element.id === parseInt(id)) { return setData(element) }
                return element
            })
            setLoading(false);
        })
        .catch((error) => {
            console.error(error)
        })
    }, [id])

    if (loading) { return null }
    if (!data) { return (<NotFound />) }

    return (
        <main id="sheetPage">
            <Header />
            <ProjectSheet data={data} />
        </main>
    )
}

export default SheetPage;