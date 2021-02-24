function MapModal(props) {
    return (
        <div className="map-modal">
            <div className="map-modal__content">
                <div className="map-modal__head">
                    <h3 className="map-modal__title">Choose your location</h3>
                    <p className="map-modal__close">
                        <i className="map-modal__close-icon fa fa-times"></i>
                    </p>
                </div>
                <div className="map-modal__body">
                    <p className="map-modal__caption">Please drag and drop the pin to your most accurate location.</p>
                    <div className="map-modal__map-container" id="map" style="position: relative; overflow: hidden;">
                        <div style="height: 100%; width: 100%; position: absolute; top: 0px; left: 0px; background-color: rgb(229, 227, 223);">
                            <div style="overflow: hidden;"></div>
                            <div className="gm-style" style="position: absolute; z-index: 0; left: 0px; top: 0px; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px;">
                                <div tabindex="0" aria-label="Map" aria-roledescription="map" role="group" style="position: absolute; z-index: 0; left: 0px; top: 0px; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; cursor: url(&quot;https://maps.gstatic.com/mapfiles/openhand_8_8.cur&quot;), default; touch-action: pan-x pan-y;">
                                    <div style="z-index: 1; position: absolute; left: 50%; top: 50%; width: 100%; transform: translate(0px, 0px);">
                                        <div style="position: absolute; left: 0px; top: 0px; z-index: 100; width: 100%;">
                                            <div style="position: absolute; left: 0px; top: 0px; z-index: 0;">
                                                <div style="position: absolute; z-index: 985; transform: matrix(1, 0, 0, 1, -37, -152);">
                                                    <div style="position: absolute; left: 0px; top: 0px; width: 256px; height: 256px;">
                                                        <div style="width: 256px; height: 256px;">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style="position: absolute; left: 0px; top: 0px; z-index: 101; width: 100%;"></div>
                                        <div style="position: absolute; left: 0px; top: 0px; z-index: 102; width: 100%;"></div>
                                        <div style="position: absolute; left: 0px; top: 0px; z-index: 103; width: 100%;">
                                            <div style="position: absolute; left: 0px; top: 0px; z-index: -1;">
                                                <div style="position: absolute; z-index: 985; transform: matrix(1, 0, 0, 1, -37, -152);">
                                                    <div style="width: 256px; height: 256px; overflow: hidden; position: absolute; left: 0px; top: 0px;"></div>
                                                </div>
                                            </div>
                                            <div style="width: 27px; height: 43px; overflow: hidden; position: absolute; left: -14px; top: -43px; z-index: 0;">
                                                <img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png" draggable="false" style="position: absolute; left: 0px; top: 0px; width: 27px; height: 43px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;">
                           </div>
                                            </div>
                                            <div style="position: absolute; left: 0px; top: 0px; z-index: 0;">
                                            </div>
                                        </div>
                                        <div className="gm-style-pbc" style="z-index: 2; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; opacity: 0;">
                                            <p className="gm-style-pbt"></p>
                                        </div>
                                        <div style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;">
                                            <div style="z-index: 4; position: absolute; left: 50%; top: 50%; width: 100%; transform: translate(0px, 0px);">
                                                <div style="position: absolute; left: 0px; top: 0px; z-index: 104; width: 100%;"></div>
                                                <div style="position: absolute; left: 0px; top: 0px; z-index: 105; width: 100%;"></div>
                                                <div style="position: absolute; left: 0px; top: 0px; z-index: 106; width: 100%;">
                                                    <div tabindex="-1" aria-hidden="true"></div>
                                                    <div tabindex="-1" style="width: 27px; height: 43px; overflow: hidden; position: absolute; left: -14px; top: -43px; z-index: 0;">
                                                        <img alt="" src="https://maps.gstatic.com/mapfiles/transparent.png" draggable="false" usemap="#gmimap0" style="width: 27px; height: 43px; user-select: none; border: 0px; padding: 0px; margin: 0px; max-width: none;">
                                                            <map name="gmimap0" id="gmimap0">
                                                                <area log="miw" coords="13.5,0,4,3.75,0,13.5,13.5,43,27,13.5,23,3.75" shape="poly" tabindex="-1" title="" style="cursor: pointer; touch-action: none;">
                                 </map>
                              </div>
                                                            <div tabindex="-1" aria-hidden="true"></div>
                           </div>
                                                        <div style="position: absolute; left: 0px; top: 0px; z-index: 107; width: 100%;"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <iframe aria-hidden="true" frameborder="0" tabindex="-1" style="z-index: -1; position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; border: none;"></iframe>
                                            <div style="pointer-events: none; width: 100%; height: 100%; box-sizing: border-box; position: absolute; z-index: 1000002; opacity: 0; border: 2px solid rgb(26, 115, 232);"></div>
                                        </div>
                                    </div>
                                </div>
                                <button className="map-modal__confirm">Confirm</button>
                            </div>
                        </div>
                    </div>
    );
}

export default MapModal;