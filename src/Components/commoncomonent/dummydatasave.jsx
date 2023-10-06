<button className='d-flex align-items-center uploaddrop' style={{ background: '#FDFDFD', border: '1px solid #EAEBEF' }}>
<Dropdown className="d-flex align-items-center">
    <Dropdown.Toggle className="d-flex align-items-center justify-content-center orderbar px-3 hoverbtn droup" >
        <p className='uploaddropdownw me-2'>Download</p>
        <img src={arrowdown} alt="..."></img>
    </Dropdown.Toggle>
    <Dropdown.Menu className="sortheight p-2 " >
        <div className='d-flex'>
            <img src={error} alt="..." />
            <p className='ms-2' onClick={() => { setwebid(item.userId); setOpen(true) }} >Report</p>
        </div>
        <div className='d-flex pt-4'>
            <img src={check_circle} alt="..." />
            <p className='ms-2' onClick={() => { setwebid(item.userId); setturn(true) }} >Certificate</p>
        </div>
    </Dropdown.Menu>
</Dropdown>
</button>

const [turn, setturn] = useState(false);
    


<CertificateModel webid={webid} setOpen={setturn} open={turn} />