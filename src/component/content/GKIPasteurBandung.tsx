import Carousel from "../Carousel";
function GKIPasteurBandung() {
    const data = [
        {
            src: "/assets/gki_pasteur/dashboard.png",
            id: "gki_pasteur_dashboard",
            id_before: "gki_pasteur_mobile_app",
            id_after: "gki_pasteur_login",
        },
        {
            src: "/assets/gki_pasteur/login.png",
            id: "gki_pasteur_login",
            id_before: "gki_pasteur_dashboard",
            id_after: "gki_pasteur_mobile_app",
        },
        {
            src: "/assets/gki_pasteur/mobile_app.png",
            id: "gki_pasteur_mobile_app",
            id_before: "gki_pasteur_login",
            id_after: "gki_pasteur_dashboard",
        },
    ]
    return (
        <div className="flex flex-row w-full ">
            <div className="grid flex-1 w-50 card bg-base-300 rounded-box place-items-center">
                <Carousel data={data}></Carousel>
            </div>
            <div className="grid flex-1 w-50 card bg-base-300 rounded-box place-items-center">
                <article className="prose">
                    <h1>Mobile & Web for GKI Pasteur Bandung</h1>
                    <ul>
                        <li>Using Framework ExpressJS for Web App</li>
                        <li>Using Framework Flutter for Mobile App</li>
                        <li>Using Firebase Firestore NoSQL for Database</li>
                        <li>Organizing events and worship at GKI Pasteur church</li>
                    </ul>
                </article>
            </div>
        </div>
    )
}
export default GKIPasteurBandung;