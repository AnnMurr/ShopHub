
import { useState } from "react";
import { CategoryButton } from "./components/button/button";
import { Panel } from "./components/panel/panel";

export const CategoryFilter = () => {
    const [isOpenPanel, setIsOpenPanel] = useState<boolean>(false);

    const handleToggle = () => setIsOpenPanel(!isOpenPanel);

    return (
        <>
            <CategoryButton handleToggle={handleToggle} />
            <Panel isOpen={isOpenPanel} setIsOpen={setIsOpenPanel} />
        </>
    );
};