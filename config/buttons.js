import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faUser,
    faShoppingCart,
    faShoppingBag
} from "@fortawesome/free-solid-svg-icons";

const navButtons = [
    {
        label: "Buy",
        path: "/buy",
        icon: <FontAwesomeIcon icon={faShoppingCart} />
    },
    {
        label: "Sell",
        path: "/sell",
        icon: <FontAwesomeIcon icon={faShoppingBag} />
    },
    {
        label: "Profile",
        path: "/profile",
        icon: <FontAwesomeIcon icon={faUser} />
    }
]

export default navButtons;