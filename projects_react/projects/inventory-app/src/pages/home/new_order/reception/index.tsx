import Sidebar from "@/components/menu";
import { useState } from "react";

export default function Home() {
    const [activeTab, setActiveTab] = useState("home");

    return (
        <div className="row">
            <div className="text-center">
                <h1>Inventory App</h1>
            </div>
            <div className="col d-flex justify-content-start">
                <Sidebar/>
            </div>
            <div className="col text-center">
                <h1>Variation</h1>
            </div>
        </div>
    );
}
