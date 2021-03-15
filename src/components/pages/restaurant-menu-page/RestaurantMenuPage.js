import React from 'react';

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
    }

    async componentDidMount() {
        const callback = async () => {
            const menuResponse = await this.getRestaurantMenu(this.state.branch.restaurant.id);
            if (menuResponse.err) {
                this.setState({ err: menuResponse.err });
            } else {
                // console.log(menuResponse.data);

                this.setState({ menu: menuResponse.data });
            }
        };

        // this.setState({
        //     restaurant: {
        //         id: "1", 
        //         name: "Pizza Hut",
        //         slogan: "I like it",
        //         image: "rest-00.jpg",
        //         deliveryTime: 35,
        //         deliveryFee: 20,
        //         area: { id: "1", name: "Heliopolis" }
        //     }
        // });

        const defaultBranchId = "d7403b9c-f063-4732-8591-13af0b8ac07f"; // McDonald's - Heliopolis
        const branchResponse = await this.getBranch(defaultBranchId);
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

        // this.setState({
        //     menu: this.getMenu()
        // });


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

    getMenu() {
        return {
            categories: [
                {
                    id: "1",
                    name: "Sandwiches",
                    menuItems: [
                        {
                            id: "1",
                            name: "Double Cheese Burger",
                            desc: "House-made turkey sausage, cage-free over medium egg, cheddar cheese, honey...",
                            img: "/assets/img/items/item-1.png",
                            price: 70,
                            options: [
                                {
                                    id: "1",
                                    name: "Choice of bun or lettuce wrap",
                                    type: "Required",
                                    optionItems: [
                                        { id: "1", name: "Potato Bun", value: 3 },
                                        { id: "2", name: "Lettuce Wrap", value: 6 },
                                    ]
                                },
                                {
                                    id: "2",
                                    name: "Choice of cheese",
                                    type: "Optionl",
                                    optionItems: [
                                        { id: "3", name: "No Cheese", value: 0 },
                                        { id: "4", name: "Regular", value: 5 },
                                        { id: "5", name: "Cheddar", value: 10 },
                                        { id: "6", name: "Spicy", value: 15 },
                                    ]
                                }
                            ]
                        },
                        {
                            id: "2",
                            name: "Turkey Cheese Burger",
                            desc: "House-made turkey sausage, cage-free over medium egg, cheddar cheese, honey...",
                            img: "/assets/img/items/item-2.png",
                            price: 60
                        }
                    ]
                },
                {
                    id: "2",
                    name: "Sides",
                    menuItems: [
                        {
                            id: "3",
                            name: "Regular Cheese Burger",
                            desc: "House-made turkey sausage, cage-free over medium egg, cheddar cheese, honey...",
                            img: "/assets/img/items/item-6.jpg",
                            price: 70
                        },
                        {
                            id: "4",
                            name: "Turkey Cheese Burger",
                            desc: "House-made turkey sausage, cage-free over medium egg, cheddar cheese, honey...",
                            img: "/assets/img/items/item-7.jpg",
                            price: 60
                        }
                    ]
                },
                {
                    id: "3",
                    name: "Desserts",
                    menuItems: [
                        {
                            id: "5",
                            name: "Regular Cheese Burger",
                            desc: "House-made turkey sausage, cage-free over medium egg, cheddar cheese, honey...",
                            img: "/assets/img/items/item-6.jpg",
                            price: 70
                        },
                        {
                            id: "6",
                            name: "Turkey Cheese Burger",
                            desc: "House-made turkey sausage, cage-free over medium egg, cheddar cheese, honey...",
                            img: "/assets/img/items/item-7.jpg",
                            price: 60
                        },
                        {
                            id: "7",
                            name: "Turkey Cheese Burger",
                            desc: "House-made turkey sausage, cage-free over medium egg, cheddar cheese, honey...",
                            img: "/assets/img/items/item-7.jpg",
                            price: 60
                        }
                    ]
                }
            ]
        };
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

    render() {
        return (
            <div className="container restaurant-menu-page">
                <Nav />
                <RestaurantMenuHeader branch={this.state.branch} toggleLocationModal={this.toggleLocationModal} />
                <RestaurantMenu restaurant={this.state.branch.restaurant} menu={this.state.menu} getItem={this.getItem} />
                <Footer />

                <LocationModal isOpen={this.state.isLocationModalOpen} toggleLocationModal={this.toggleLocationModal} />
            </div>
        );
    }
}

export default RestaurantMenuPage;