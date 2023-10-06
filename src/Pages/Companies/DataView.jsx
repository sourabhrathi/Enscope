import React, { useEffect, useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import rigntIcon from "../../Assets/image/icons/chevron_right.png";
import InnerHeader from '../../Components/Common/InnerHeader';
import AssesmentCardTwo from '../../Components/commoncomonent/AssesmentCardTwo';
import AssesmentDetails from '../../Components/commoncomonent/AssesmentDetails';
import Backbtn from '../../Components/commoncomonent/BackBtn';
import "../../Pagescss/Comapnies.css";
import { AssessmentView, ReportingYearAdmin } from '../../Utils/services';

const DataView = () => {
    const { id } = useParams();
    const [selectedOption, setSelectedOption] = useState(null);
    const [data, setdata] = useState("Scope Data");
    const [scope1, setScope1] = useState([]);
    const [scope2, setScope2] = useState([]);
    const [scope3, setScope3] = useState([]);
    const [exc,setexc]=useState([])
    const [year,setyear]=useState([])
    const nevigation = useNavigate();

    console.log(id,"dataviewid");
    localStorage.setItem("setid",id)
    const handleRedirectScopeOne = () => {
        nevigation("/new-assessment/scope-one");
        setdata("Scope 1");
    };

    const handleRedirectScopetwo = () => {
        nevigation("/new-assessment/scope-two");
        setdata("Scope 2");
    };

    const handleRedirectScopethree = () => {
        nevigation("/new-assessment/scope-three");
        setdata("Scope 3");
    };

    const handleRedirectCema = () => {
        nevigation("/new-assessment/cema");
        setdata("Scope 4");
    };
    
    const Reportingyear = async () => {
        const result = await ReportingYearAdmin(id);
        setyear(result?.res?.data)
    };

    const request = async () => {
        const result = await AssessmentView(id);
        console.log(result,'resulter');
        setexc(result?.res?.data)
        setScope1(result?.res?.data.Scope1);
        setScope2(result?.res?.data.Scope2);
        setScope3(result?.res?.data.Scope3);
    };

    useEffect(() => {
        request();
        Reportingyear()
    }, [id]);
    
    const assessmentCards = [
        {
            title: "Scope 1",
            description: scope1,
            handleRedirect: handleRedirectScopeOne,
        },
        {
            title: "Scope 2",
            description: scope2,
            handleRedirect: handleRedirectScopetwo,
        },
        {
            title: "Scope 3",
            description: scope3,
            handleRedirect: handleRedirectScopethree,
        },
        {
            title: "Cema",
            handleRedirect: handleRedirectCema,
        },
    ];

    return (
        <>
            <div>
                <InnerHeader data={data} />
            </div>
            <div className='mainWrapper'>
                <div className=''>
                    <Backbtn title="Scope Data" />
                </div>
                <div className='padtopp'>
                    <p className='profile-texts'>{exc.comapny_name}</p>
                    <AssesmentDetails selectedOption={selectedOption} setSelectedOption={setSelectedOption} exc={exc} year={year}/>
                    <div className='mt-5 pt-1'>
                        {assessmentCards.map((card, index) => (
                            <AssesmentCardTwo
                                key={index}
                                title={card.title}
                                description={card.description}
                                handleRedirect={card.handleRedirect}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default DataView;