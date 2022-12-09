import { Col, Row } from "reactstrap";
import CampsiteCard from './CampsiteCard';
import {selectAllCampsites} from "./campsitesSlice";

const CampsitesList = ({setCampsiteId}) => {
    const campsites = selectAllCampsites();

    return (
        <Row className="ms-auto">
            {campsites.map((campsite) => {
                return (
                    <Col
                        md="5"
                        className="m-4"
                        key={campsite.id}
                        onClick={() => setCampsiteId(campsite.id)}
                    >
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
    );
}

export default CampsitesList;