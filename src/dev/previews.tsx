import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import AccountNavigation from "../Kanbas/Account/Navigation";
import App from "../App";
import ForegroundColors from "../Labs/Lab2/ForegroundColors";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/AccountNavigation">
                <AccountNavigation/>
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/ForegroundColors">
                <ForegroundColors/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;