import { AdvertisementBox, Advertisement1, Advertisement2 } from "../../../pages/ArticlePage/APAdvertisement/APAdvertisement.js";
import advertisement1 from "../../../images/Article/ArticlePage-Advertisement1.jpg"
import advertisement2 from "../../../images/Article/ArticlePage-Advertisement2.jpg"

export const APAdvertisement = () => {
    return (
        <>
        <AdvertisementBox>
            <Advertisement1 src={advertisement1} alt="advertisement1" />
            <Advertisement2 src={advertisement2} alt="advertisement2" />
        </AdvertisementBox>
        </>
    )
}