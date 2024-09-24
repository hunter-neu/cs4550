import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import AccountNavigation from "../Kanbas/Account/Navigation";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/AccountNavigation">
                <AccountNavigation/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;