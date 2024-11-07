export default function VariablesAndConstants() {
    var functionScoped = 3;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    return (
        <div id="wd-variables-and-constants">
            functionScoped: {functionScoped}<br/>
            blockScoped: {blockScoped}<br/>
            constant1: {constant1}<br/>
        </div>
    )
}