import React from 'react';
import { withRouter } from "react-router";
import { useParams } from "react-router-dom";

import branchApi from '../../../api/BranchApi';
import menuApi from '../../../api/MenuApi';

import Nav from '../../nav/Nav';
import RestaurantMenuHeader from '../../headers/restaurant-menu-header/RestaurantMenuHeader';
import RestaurantMenu from '../../restaurant-menu/RestaurantMenu';
import Footer from '../../footer/Footer';

import LocationModal from '../../modals/location-modal/LocationModal';

class RestaurantMenuPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLocationModalOpen: false,
            branch: {
                restaurant: {
                    id: "0",
                    name: "",
                    slogan: "",
                    image: "",
                    deliveryTime: 0
                },
                area: { id: "0", name: "" }
            },
            menu: {
                menuSections: []
            },
            err: null
        };

        this.getItem = this.getItem.bind(this);
        this.toggleLocationModal = this.toggleLocationModal.bind(this);
        this.selectLocation = this.selectLocation.bind(this);
    }

    async componentDidMount() {
        // const branchId = "d7403b9c-f063-4732-8591-13af0b8ac07f"; // McDonald's - Heliopolis
        // const { branchId } = useParams(); // A REACT HOOK, ONLY WORKS IN FUNCTION COMPONENTS
        const branchId = this.props.match.params.branchId;

        const callback = async () => {
            const menuResponse = await this.getRestaurantMenu(this.state.branch.restaurant.id);
            if (menuResponse.err) {
                this.setState({ err: menuResponse.err });
            } else {
                // console.log(menuResponse.data);

                this.setState({ menu: menuResponse.data });
            }
        };

        const branchResponse = await this.getBranch(branchId);
        if (branchResponse.err) {
            this.setState({ err: branchResponse.err });
        } else {
            const branch = branchResponse.data;

            this.setState({
                branch: {
                    ...branch,
                    area: branch.area
                }
            }, callback); 
        }

    }

    componentDidUpdate() {
        // console.log(this.state.restaurant);
        // console.log(this.state.menu);
    }

    async getBranch(branchId) {
        const branchResponse = await branchApi.getBranch(branchId);
        return branchResponse;
    }

    async getRestaurantMenu(restaurantId) {
        const menuResponse = await menuApi.getRestaurantMenu(restaurantId);
        return menuResponse;
    }

    getItem(id) {
        // console.log(id);

        let menuItem = null;
        this.state.menu.menuSections.forEach(section => {
            section.menuItems.forEach(item => {
                if (item.id === id) {
                    menuItem = item;
                }
            });
        });

        return menuItem;
    }

    toggleLocationModal(e) {
        this.setState({
            isLocationModalOpen: !this.state.isLocationModalOpen
        })
    }

    selectLocation(area) {
        this.setState({
            branch: {
                ...this.state.branch,
                area
            }
        })
    }

    render() {
        return (
            <div className="container restaurant-menu-page">
                <Nav />
                <RestaurantMenuHeader branch={this.state.branch} toggleLocationModal={this.toggleLocationModal} />
                <RestaurantMenu restaurant={this.state.branch.restaurant} menu={this.state.menu} getItem={this.getItem} />
                <Footer />

                <LocationModal 
                    isOpen={this.state.isLocationModalOpen} toggleLocationModal={this.toggleLocationModal}
                    selectLocation={this.selectLocation} />
            </div>
        );
    }
}

export default withRouter(RestaurantMenuPage);