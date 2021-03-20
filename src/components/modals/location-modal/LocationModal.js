import { useState, useEffect } from 'react';

import cityApi from '../../../api/CityApi';
import branchApi from '../../../api/BranchApi';

import LocationSelection from '../../location-selection/LocationSelection';

function LocationModal(props) {

    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState({ id: "0", name: "Type a delivery location" });
    const [err, setErr] = useState(null);

    useEffect(async () => {
        // console.log(selectedLocation);

        const locationsResponse = await cityApi.getCities();
        if (locationsResponse.err) {
            setErr(locationsResponse.err);
        } else {
            setLocations(locationsResponse.data);
        }

    }, []);

    const selectLocation = (selected) => {
        // console.log(selected);

        setSelectedLocation(selected);
    }

    const submit = () => {
        // console.log(selectedLocation);

        if (selectedLocation.id !== "0") {
            props.selectLocation(selectedLocation);
        }
        props.toggleLocationModal();
    }

    return (
        <div className={`${props.isOpen ? 'location-modal location-modal--open' : 'location-modal'}`}>
            <div className="location-modal__content">
                <div className="location-modal__header">
                    <h3 className="location-modal__title">Change Location</h3>
                    <p className="location-modal__close" onClick={props.toggleLocationModal}>
                        <span className="location-modal__close-icon material-icons">clear</span>
                    </p>
                </div>
                <div className="location-modal__body">
                    <div className="location-modal__select">
                        <LocationSelection locations={locations} selected={selectedLocation} select={selectLocation} />
                    </div>
                    <button className="location-modal__update" onClick={submit}>Update</button>
                </div>
            </div>
        </div>
    );
}

export default LocationModal;