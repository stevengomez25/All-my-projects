import { useState } from "react";

// Datos del menú
const menuData = [
    {
        id: "home",
        label: "Home",
        submenus: [
            {
                id: "dashboard",
                label: "Dashboard",
                submenus: [
                    { id: "analytics", label: "Analytics" },
                    { id: "reports", label: "Reports" },
                ],
            },
            { id: "settings", label: "Settings" },
        ],
    },
    {
        id: "profile",
        label: "Profile",
        submenus: [
            { id: "edit-profile", label: "Edit Profile" },
            { id: "account-settings", label: "Account Settings" },
        ],
    },
    { id: "messages", label: "Messages" },
    { id: "settings", label: "Settings" },
];

// Componente de Menú Recursivo
interface MenuItemProps {
    item: {
        id: string;
        label: string;
        submenus?: MenuItemProps['item'][];
    };
}

const MenuItem = ({ item }: MenuItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ marginLeft: "20px" }}>
            <button onClick={() => setIsOpen(!isOpen)} className="nav-link">
                {item.label} {item.submenus ? (isOpen ? "🔽" : "▶") : ""}
            </button>

            {/* Renderiza submenús si existen y están abiertos */}
            {isOpen && item.submenus && (
                <div>
                    {item.submenus.map((submenu) => (
                        <MenuItem key={submenu.id} item={submenu} />
                    ))}
                </div>
            )}
        </div>
    );
};

// Componente principal
export default function Sidebar() {
    return (
        <div className="nav flex-column nav-pills">
            {menuData.map((item) => (
                <MenuItem key={item.id} item={item} />
            ))}
        </div>
    );
}
