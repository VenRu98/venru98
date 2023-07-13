import WebScrappingMarketplace from "./content/WebScrappingMarketplace";
import GKIPasteurBandung from "./content/GKIPasteurBandung";
import ParkD from "./content/ParkD";
import ScreeningStockCrypto from "./content/ScreeningStockCrypto";
import ReceivingShippingStockLaravelReact from "./content/ReceivingShippingStockLaravelReact";

function Content() {
    return (
        <div className="flex flex-col w-full">
            <div className="grid h-full card bg-base-300 rounded-box place-items-center">
                <WebScrappingMarketplace></WebScrappingMarketplace>
            </div>
            <div className="divider"></div>
            <div className="grid h-full card bg-base-300 rounded-box place-items-center">
                <GKIPasteurBandung></GKIPasteurBandung>
            </div>
            <div className="divider"></div>
            <div className="grid h-full card bg-base-300 rounded-box place-items-center">
                <ParkD></ParkD>
            </div>
            <div className="divider"></div>
            <div className="grid h-full card bg-base-300 rounded-box place-items-center">
                <ScreeningStockCrypto></ScreeningStockCrypto>
            </div>
            <div className="divider"></div>
            <div className="grid h-full card bg-base-300 rounded-box place-items-center">
                <ReceivingShippingStockLaravelReact></ReceivingShippingStockLaravelReact>
            </div>
        </div>
    )
}

export default Content;