import Carousel from "../Carousel";
function WebScrappingMarketplace() {
    const data = [
        {
            src: "/assets/web_scrapping_marketplace/home.png",
            id: "scrapping_dashboard",
            id_before: "scrapping_tokopedia",
            id_after: "scrapping_bukalapak",
        },
        {
            src: "/assets/web_scrapping_marketplace/bukalapak.png",
            id: "scrapping_bukalapak",
            id_before: "scrapping_dashboard",
            id_after: "scrapping_lazada",
        },
        {
            src: "/assets/web_scrapping_marketplace/lazada.png",
            id: "scrapping_lazada",
            id_before: "scrapping_bukalapak",
            id_after: "scrapping_tokopedia",
        },
        {
            src: "/assets/web_scrapping_marketplace/tokopedia.png",
            id: "scrapping_tokopedia",
            id_before: "scrapping_lazada",
            id_after: "scrapping_dashboard",
        },
    ]
    return (
        <div className="flex flex-row w-full ">
            <div className="grid flex-1 w-50 card bg-base-300 rounded-box place-items-center">
                <article className="prose">
                    <h1>Web Scrapping</h1>
                    <ul>
                        <li>Using Framework Flask Python</li>
                        <li>With Library Selenium and Beautiful Soup</li>
                        <li>Scrapping Data From Marketplace Lazada, Shopee, And Tokopedia</li>
                        <a href="https://github.com/VenRu98/web_scrapping">Check Here</a>
                    </ul>
                </article>
            </div>
            <div className="grid flex-1 w-50 card bg-base-300 rounded-box place-items-center">
                <Carousel data={data}></Carousel>
            </div>
        </div>
    )
}
export default WebScrappingMarketplace;