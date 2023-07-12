import Carousel from "../Carousel";
function GKIPasteurBandung() {
    const data = [
        {
            src: "/assets/mobile_application_parkd/home.png",
            id: "parkd_home",
            id_before: "parkd_qr",
            id_after: "parkd_login",
        },
        {
            src: "/assets/mobile_application_parkd/login.png",
            id: "parkd_login",
            id_before: "parkd_home",
            id_after: "parkd_park",
        },
        {
            src: "/assets/mobile_application_parkd/park.png",
            id: "parkd_park",
            id_before: "parkd_login",
            id_after: "parkd_qr",
        },
        {
            src: "/assets/mobile_application_parkd/qr.png",
            id: "parkd_qr",
            id_before: "parkd_park",
            id_after: "parkd_dashboard",
        },
    ]
    return (
        <div className="flex flex-row w-full ">
            <div className="grid flex-1 w-50 card bg-base-300 rounded-box place-items-center">
                <article className="prose">
                    <h1>Mobile Prototype ParkD</h1>
                    <ul>
                        <li>Using Framework Flutter for Mobile App</li>
                        <li>Using Firebase Firestore NoSQL for Database</li>
                        <li>Prototype for Parking Simulation</li>
                    </ul>
                </article>
            </div>
            <div className="grid flex-1 w-50 card bg-base-300 rounded-box place-items-center">
                <Carousel data={data}></Carousel>
            </div>
        </div>
    )
}
export default GKIPasteurBandung;