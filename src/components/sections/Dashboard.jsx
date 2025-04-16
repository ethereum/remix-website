import React from "react";
import { FormattedMessage } from 'react-intl';
import { Section } from "../../scroll-section";
import remixEditor2x from '../../assets/images/remix-editor2x.png';

const Dashboard = (props) => {
    return (
        <Section>
            <div className="container mx-auto pb-20 pt-36 md:py-50">
                <h2 className="text-center text-4xl md:text-5xl font-latoBold pb-6 uppercase"><FormattedMessage id='dashboard.metrics.title' values={{ network: props.network }} /></h2>
                <br/>
                {props.data.metrics.map((data) => {
                    return (<div><h4 className="text-center text-4xl md:text-5xl font-latoBold pb-6"><FormattedMessage id={data.title} values={{ network: data.network }} /></h4>
                        <img className="m-auto" src={data.image} srcSet={`${remixEditor2x} 2x`} alt="remix-ide" /><br/><br/><br/></div>)
                })}
            </div>
        </Section>
    )

}

export default Dashboard;
