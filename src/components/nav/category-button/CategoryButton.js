import CategoryDropdown from '../category-dropdown/CategoryDropdown';

function CategoryButton(props) {
    return (
        <div>
            <button className="category-btn">
                <i className="category-btn__icon material-icons">fastfood</i>
                <i className="category-btn__caret--down fa fa-caret-down"></i>
            </button>
            <CategoryDropdown />
        </div>
    );
}

export default CategoryButton;