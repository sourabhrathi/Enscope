import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import arrow from "../../../Assets/images/icons/arrow_right.png"
import Checkbox from '@mui/material/Checkbox';


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,

    '&:before': {
        display: 'none',
    },
    margin: 10,
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<img src={arrow} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),

}));

const Scope = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };



    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <div className='flex justify-between scope '>
                        <p>Scope 1 </p>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div className='checkbox_combution flex items-center'>
                        <Checkbox
                            defaultChecked
                            sx={{
                                color: "#158D47",
                                '&.Mui-checked': {
                                    color: "#158D47",
                                },
                            }}
                        />
                        <label for="vehicle1"> Stationary Combustion</label><br />
                    </div>
                    <div className='checkbox_combution flex items-center'>
                        <Checkbox
                            defaultChecked
                            sx={{
                                color: "#158D47",
                                '&.Mui-checked': {
                                    color: "#158D47",
                                },
                            }}
                        />
                        <label for="vehicle1"> Stationary Combustion</label><br />
                    </div>
                    <div className='checkbox_combution flex items-center'>
                        <Checkbox
                            defaultChecked
                            sx={{
                                color: "#158D47",
                                '&.Mui-checked': {
                                    color: "#158D47",
                                },
                            }}
                        />
                        <label for="vehicle1"> Stationary Combustion</label><br />
                    </div>
                    <div className='checkbox_combution flex items-center'>
                        <Checkbox
                            defaultChecked
                            sx={{
                                color: "#158D47",
                                '&.Mui-checked': {
                                    color: "#158D47",
                                },
                            }}
                        />
                        <label for="vehicle1"> Stationary Combustion</label><br />
                    </div>
                    <div className='checkbox_combution flex items-center'>
                        <Checkbox
                            defaultChecked
                            sx={{
                                color: "#158D47",
                                '&.Mui-checked': {
                                    color: "#158D47",
                                },
                            }}
                        />
                        <label for="vehicle1"> Stationary Combustion</label><br />
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <div className='flex justify-between accordianhead'>
                        <p>Scope 1 </p>

                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className='checkbox_combution flex items-center'>
                            <Checkbox
                                defaultChecked
                                sx={{
                                    color: "#158D47",
                                    '&.Mui-checked': {
                                        color: "#158D47",
                                    },
                                }}
                            />
                            <label for="vehicle1"> Stationary Combustion</label><br />
                        </div>
                        <div className='checkbox_combution flex items-center'>
                            <Checkbox
                                defaultChecked
                                sx={{
                                    color: "#158D47",
                                    '&.Mui-checked': {
                                        color: "#158D47",
                                    },
                                }}
                            />
                            <label for="vehicle1"> Stationary Combustion</label><br />
                        </div>
                        <div className='checkbox_combution flex items-center'>
                            <Checkbox
                                defaultChecked
                                sx={{
                                    color: "#158D47",
                                    '&.Mui-checked': {
                                        color: "#158D47",
                                    },
                                }}
                            />
                            <label for="vehicle1"> Stationary Combustion</label><br />
                        </div>
                        <div className='checkbox_combution flex items-center'>
                            <Checkbox
                                defaultChecked
                                sx={{
                                    color: "#158D47",
                                    '&.Mui-checked': {
                                        color: "#158D47",
                                    },
                                }}
                            />
                            <label for="vehicle1"> Stationary Combustion</label><br />
                        </div>
                        <div className='checkbox_combution flex items-center'>
                            <Checkbox
                                defaultChecked
                                sx={{
                                    color: "#158D47",
                                    '&.Mui-checked': {
                                        color: "#158D47",
                                    },
                                }}
                            />
                            <label for="vehicle1"> Stationary Combustion</label><br />
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <div className='flex justify-between accordianhead'>
                        <p>Scope 1 </p>

                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className='checkbox_combution flex items-center'>
                            <Checkbox
                                defaultChecked
                                sx={{
                                    color: "#158D47",
                                    '&.Mui-checked': {
                                        color: "#158D47",
                                    },
                                }}
                            />
                            <label for="vehicle1"> Stationary Combustion</label><br />
                        </div>
                        <div className='checkbox_combution flex items-center'>
                            <Checkbox
                                defaultChecked
                                sx={{
                                    color: "#158D47",
                                    '&.Mui-checked': {
                                        color: "#158D47",
                                    },
                                }}
                            />
                            <label for="vehicle1"> Stationary Combustion</label><br />
                        </div>
                        <div className='checkbox_combution flex items-center'>
                            <Checkbox
                                defaultChecked
                                sx={{
                                    color: "#158D47",
                                    '&.Mui-checked': {
                                        color: "#158D47",
                                    },
                                }}
                            />
                            <label for="vehicle1"> Stationary Combustion</label><br />
                        </div>
                        <div className='checkbox_combution flex items-center'>
                            <Checkbox
                                defaultChecked
                                sx={{
                                    color: "#158D47",
                                    '&.Mui-checked': {
                                        color: "#158D47",
                                    },
                                }}
                            />
                            <label for="vehicle1"> Stationary Combustion</label><br />
                        </div>
                        <div className='checkbox_combution flex items-center'>
                            <Checkbox
                                defaultChecked
                                sx={{
                                    color: "#158D47",
                                    '&.Mui-checked': {
                                        color: "#158D47",
                                    },
                                }}
                            />
                            <label for="vehicle1"> Stationary Combustion</label><br />
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    )
}

export default Scope