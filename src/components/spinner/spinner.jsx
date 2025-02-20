import "./spinner.css"

function Spinner() {


    return (
        <div className="loadingPage">
            <div class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    )
}

export default Spinner