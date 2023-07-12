import Carousel from "../Carousel";
function ScreeningStockCrypto() {
    const data = [
        {
            src: "/assets/screening_crypto_stock/crypto.png",
            id: "screening_crypto",
            id_before: "screening_stock",
            id_after: "screening_stock",
        },
        {
            src: "/assets/screening_crypto_stock/stock.png",
            id: "screening_stock",
            id_before: "screening_crypto",
            id_after: "screening_crypto",
        },
    ]
    return (
        <div className="flex flex-row w-full ">
            <div className="grid flex-1 w-50 card bg-base-300 rounded-box place-items-center">
                <Carousel data={data}></Carousel>
            </div>
            <div className="grid flex-1 w-50 card bg-base-300 rounded-box place-items-center">
                <article className="prose">
                    <h1>Screening Stock And Crypto</h1>
                    <ul>
                        <li>Using Framework Flask Python</li>
                        <li>Notification to Telegram using Bot Telegram</li>
                        <li>Help Trader for Day Trading</li>
                    </ul>
                </article>
            </div>
        </div>
    )
}
export default ScreeningStockCrypto;