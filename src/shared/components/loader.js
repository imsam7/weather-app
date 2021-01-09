export default function Loader() {
    return (
        < div className="load" >
            <div className="lds-css">
                <div class="lds-rolling" style={{ width: '100%', height: '100%' }}>
                    <div></div>
                </div>
            </div>
            <span>Please wait</span>
        </div >
    )
}