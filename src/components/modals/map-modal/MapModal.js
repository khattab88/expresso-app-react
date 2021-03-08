import React from 'react';

class MapModal extends React.Component {
    constructor(props) {
        super(props);

        this.close = this.close.bind(this);
    }

    close(e) {
        this.props.toggleMapModal();
    }

    render() {
        const className = this.props.isOpen ? "map-modal map-modal--open" : "map-modal";

        return (
            <div className={className}>
                <div className="map-modal__content">
                    <div className="map-modal__head">
                        <h3 className="map-modal__title">Choose your location</h3>
                        <p className="map-modal__close" onClick={this.close}>
                            <i className="map-modal__close-icon fa fa-times" />
                        </p>
                    </div>
                    <div className="map-modal__body">
                        <p className="map-modal__caption">Please drag and drop the pin to your most accurate location.</p>
                        <div className="map-modal__map-container" id="map" style={{ position: 'relative', overflow: 'hidden' }}>
                            <div style={{ height: '100%', width: '100%', position: 'absolute', top: '0px', left: '0px', backgroundColor: 'rgb(229, 227, 223)' }}>
                                <div style={{ overflow: 'hidden' }} />
                                <div className="gm-style" style={{ position: 'absolute', zIndex: 0, left: '0px', top: '0px', height: '100%', width: '100%', padding: '0px', borderWidth: '0px', margin: '0px' }}>
                                    <div tabIndex={0} aria-label="Map" aria-roledescription="map" role="group" style={{ position: 'absolute', zIndex: 0, left: '0px', top: '0px', height: '100%', width: '100%', padding: '0px', borderWidth: '0px', margin: '0px', cursor: 'url("https://maps.gstatic.com/mapfiles/openhand_8_8.cur"), default', touchAction: 'pan-x pan-y' }}>
                                        <div style={{ zIndex: 1, position: 'absolute', left: '50%', top: '50%', width: '100%', transform: 'translate(0px, 0px)' }}>
                                            <div style={{ position: 'absolute', left: '0px', top: '0px', zIndex: 100, width: '100%' }}>
                                                <div style={{ position: 'absolute', left: '0px', top: '0px', zIndex: 0 }}>
                                                    <div style={{ position: 'absolute', zIndex: 985, transform: 'matrix(1, 0, 0, 1, -37, -152)' }}>
                                                        <div style={{ position: 'absolute', left: '0px', top: '0px', width: '256px', height: '256px' }}>
                                                            <div style={{ width: '256px', height: '256px' }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ position: 'absolute', left: '0px', top: '0px', zIndex: 101, width: '100%' }} />
                                            <div style={{ position: 'absolute', left: '0px', top: '0px', zIndex: 102, width: '100%' }} />
                                            <div style={{ position: 'absolute', left: '0px', top: '0px', zIndex: 103, width: '100%' }}>
                                                <div style={{ position: 'absolute', left: '0px', top: '0px', zIndex: -1 }}>
                                                    <div style={{ position: 'absolute', zIndex: 985, transform: 'matrix(1, 0, 0, 1, -37, -152)' }}>
                                                        <div style={{ width: '256px', height: '256px', overflow: 'hidden', position: 'absolute', left: '0px', top: '0px' }} />
                                                    </div>
                                                </div>
                                                <div style={{ width: '27px', height: '43px', overflow: 'hidden', position: 'absolute', left: '-14px', top: '-43px', zIndex: 0 }}>
                                                    <img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png" draggable="false" style={{ position: 'absolute', left: '0px', top: '0px', width: '27px', height: '43px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none' }} />
                                                </div>
                                            </div>
                                            <div style={{ position: 'absolute', left: '0px', top: '0px', zIndex: 0 }}>
                                            </div>
                                        </div>
                                        <div className="gm-style-pbc" style={{ zIndex: 2, position: 'absolute', height: '100%', width: '100%', padding: '0px', borderWidth: '0px', margin: '0px', left: '0px', top: '0px', opacity: 0 }}>
                                            <p className="gm-style-pbt" />
                                        </div>
                                        <div style={{ zIndex: 3, position: 'absolute', height: '100%', width: '100%', padding: '0px', borderWidth: '0px', margin: '0px', left: '0px', top: '0px', touchAction: 'pan-x pan-y' }}>
                                            <div style={{ zIndex: 4, position: 'absolute', left: '50%', top: '50%', width: '100%', transform: 'translate(0px, 0px)' }}>
                                                <div style={{ position: 'absolute', left: '0px', top: '0px', zIndex: 104, width: '100%' }} />
                                                <div style={{ position: 'absolute', left: '0px', top: '0px', zIndex: 105, width: '100%' }} />
                                                <div style={{ position: 'absolute', left: '0px', top: '0px', zIndex: 106, width: '100%' }}>
                                                    <div tabIndex={-1} aria-hidden="true" />
                                                    <div tabIndex={-1} style={{ width: '27px', height: '43px', overflow: 'hidden', position: 'absolute', left: '-14px', top: '-43px', zIndex: 0 }}>
                                                        <img alt="" src="https://maps.gstatic.com/mapfiles/transparent.png" draggable="false" useMap="#gmimap0" style={{ width: '27px', height: '43px', userSelect: 'none', border: '0px', padding: '0px', margin: '0px', maxWidth: 'none' }} />
                                                        <map name="gmimap0" id="gmimap0">
                                                            <area log="miw" coords="13.5,0,4,3.75,0,13.5,13.5,43,27,13.5,23,3.75" shape="poly" tabIndex={-1} title="" style={{ cursor: 'pointer', touchAction: 'none' }} />
                                                        </map>
                                                    </div>
                                                    <div tabIndex={-1} aria-hidden="true" />
                                                </div>
                                                <div style={{ position: 'absolute', left: '0px', top: '0px', zIndex: 107, width: '100%' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <iframe aria-hidden="true" frameBorder={0} tabIndex={-1} style={{ zIndex: -1, position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px', border: 'none' }} />
                                    <div style={{ pointerEvents: 'none', width: '100%', height: '100%', boxSizing: 'border-box', position: 'absolute', zIndex: 1000002, opacity: 0, border: '2px solid rgb(26, 115, 232)' }} />
                                </div>
                            </div>
                        </div>
                        <button className="map-modal__confirm" onClick={this.close}>Confirm</button>
                    </div>
                </div>
            </div >
        );
    }
}

export default MapModal;