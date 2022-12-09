import { Col, Row } from "reactstrap";
import DisplayCard from "./DisplayCard";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";

const DisplayList = () => {
    const items = [selectFeaturedCampsite(), selectFeaturedPromotion()];

    return(
        <Row>
            {items.map((item, idx) => {
                return(
                    <Col md className="m-1" key={idx}>
                        <DisplayCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
}

export default DisplayList;