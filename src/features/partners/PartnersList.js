import { useSelector } from "react-redux";
import { Col } from "reactstrap";
import Partner from "./Partner";
import { selectAllPartners } from "./partnersSlice";

const PartnersList = (state) => {
    const partners = useSelector(selectAllPartners);
    console.log("partners: ", partners);

    return (
        <Col className="mt-4">
            {partners.map((partner) => {
                return(
                    <div className='d-flex mb-5' key={partner.id}>
                        <Partner partner={partner} />
                    </div>
                )
            })}
        </Col>
    )
}

export default PartnersList