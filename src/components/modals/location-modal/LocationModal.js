function LocationModal(props) {
    return (
        <div className="location-modal">
            <div className="location-modal__content">
                <div className="location-modal__header">
                    <h3 className="location-modal__title">Change Location</h3>
                    <p className="location-modal__close">
                        <span className="location-modal__close-icon material-icons">clear</span>
                    </p>
                </div>
                <div className="location-modal__body">
                    <div className="location-modal__select">
                        <div className="location-selection">
                            <button className="location-selection__btn">
                                <i className="location-selection__icon-location material-icons-outlined">location_on</i>
                                <p className="location-selection__value">Type a delivery location</p>
                                <i className="location-selection__icon-caret location-selection__icon-caret--down material-icons">keyboard_arrow_down</i>
                                <i className="location-selection__icon-caret location-selection__icon-caret--up material-icons">keyboard_arrow_up</i>
                            </button>

                            <div className="location-selection__box">
                                <input type="text" className="location-selection__input" />

                                    <ul className="location-selection__city-list">
                                        <li className="location-selection__city">
                                            <div className="location-selection__city-name">Cairo</div>
                                            <ul className="location-selection__area-list">
                                                <li className="location-selection__area">Heliopolis</li>
                                                <li className="location-selection__area">Zamalek</li>
                                                <li className="location-selection__area">DownTown</li>
                                                <li className="location-selection__area">Nasr City</li>
                                                <li className="location-selection__area">Maadi</li>
                                                <li className="location-selection__area">Shoubra</li>
                                            </ul>
                                        </li>

                                        <li className="location-selection__city">
                                            <div className="location-selection__city-name">Giza</div>
                                            <ul className="location-selection__area-list">
                                                <li className="location-selection__area">Mohandessien</li>
                                                <li className="location-selection__area">Dokki</li>
                                                <li className="location-selection__area">Giza Square</li>
                                                <li className="location-selection__area">Haram</li>
                                                <li className="location-selection__area">6th October</li>
                                            </ul>
                                        </li>

                                        <li className="location-selection__city">
                                            <div className="location-selection__city-name">Alexandrai</div>
                                            <ul className="location-selection__area-list">
                                                <li className="location-selection__area">San Stephano</li>
                                                <li className="location-selection__area">DownTown</li>
                                                <li className="location-selection__area">Sidi Beshr</li>
                                                <li className="location-selection__area">El Raml</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <button className="location-modal__update">Update</button>
                    </div>
                </div>
            </div>
    );
}

export default LocationModal;