// PopupMenu.js
import './PopupMenu.module.scss'

const PopupMenu = () => {
    return (
        <div className="popup-menu-container">
            <button>
                Toggle Menu
            </button>
            <div className="popoup-menu">
                <div>menu</div>
                <button>
                    Close Menu
                </button>
            </div>
        </div>
    )
}