import "./index.css"

const ChoosePlan=()=>{
    return(
        <div className="choose-plan-section">
            <h1 className="choose-plan-section-heading">Choose Your Plan</h1>
            <div className="choose-plan-containers">
                <div className="choose-plan-container">
                    <div className="curved-container">
                        <h1 className="curved-container-heading">Bridal Mehendi Class</h1>
                        <p className="curved-container-paragraph">$45</p>
                    </div>
                    <ul className="normal-container">
                        <li className="normal-container-list-item">Full Hand Mehendi</li>
                        <li className="normal-container-list-item">Full Leg Mehendi</li>
                        <li className="normal-container-list-item">Designer Mehendi</li>
                        <li className="normal-container-list-item">Unique Designs</li>
                        <li className="normal-container-list-item">Bride Face Mehendi</li>
                    </ul>
                </div>

                <div className="choose-plan-container">
                    <div className="curved-container">
                        <h1 className="curved-container-heading">Basic Mehendi Class</h1>
                        <p className="curved-container-paragraph">$35</p>
                    </div>
                    <ul className="normal-container">
                        <li className="normal-container-list-item">Half Hand Mehendi</li>
                        <li className="normal-container-list-item">Half Leg Mehendi</li>
                        <li className="normal-container-list-item">Arabic Mehendi</li>
                        <li className="normal-container-list-item">Patches Mehendi</li>
                        <li className="normal-container-list-item">Bangle Mehendi</li>
                    </ul>
                </div>

                <div className="choose-plan-container">
                    <div className="curved-container">
                        <h1 className="curved-container-heading">Advance Mehendi Class</h1>
                        <p className="curved-container-paragraph">$65</p>
                    </div>
                    <ul className="normal-container">
                        <li className="normal-container-list-item">Half Hand Mehendi</li>
                        <li className="normal-container-list-item">Half Leg Mehendi</li>
                        <li className="normal-container-list-item">Designer Mehendi</li>
                        <li className="normal-container-list-item">Full Hand Mehendi</li>
                        <li className="normal-container-list-item">Bride Face Mehendi</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
export default ChoosePlan