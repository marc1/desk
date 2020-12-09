
const parse = data => {
    try {
        return JSON.parse(data)
    } catch(err) {
        return undefined
    }
}

export const refreshFrequency = 1000;
export const command = "./desk/status.sh"

const style = {
    width: "100vw",
    height: "24px", // default macos size, i'm pretty sure
    margin: "0",
    padding: "0",
    background: "#1c1c1c",
    display: "grid",
    gridTemplateColumns: "33% auto 33%"
}

const widget = {
    height: "24px",
    fontFamily: "SF Mono",
    fontSize: "12px",
    color: "rgba(255, 255, 255, 0.75)",
    display: "flex",
    alignItems: "center",
    margin: "0",
    padding: "0",
}

const clock = {
    ...widget,
    gridColumn: "3",
    justifyContent: "flex-end",
    padding: "0 1.5vw 0 1.5vw",
}

const Clock = ({ time }) => {
    return (
        <span style={clock}>{time}</span>
    )
}

const spaces = {
    ...widget,
    gridColumn: "1",
    display: "inline",
    padding: "0 1.5vw 0 1.5vw",
    lineHeight: "24px",
}

const item = {
    ...widget,
    display: "inline",
    marginRight: "2vw",
    color: "rgba(255, 255, 255, 0.45)",
}

const Spaces = ({lst}) => {
    if(typeof lst === "undefined") return null;

    const spx = [];

    lst.forEach(function(spc) {
        let style = JSON.parse(JSON.stringify(item));

        if(spc.focused)
            style.color = "rgba(255, 255, 255, 0.75)";

        spx.push(
            <li style={style} key={spc.index}>
                {spc.focused ? "[" : <span>&nbsp;</span>}
                {spc.label ? spc.label : spc.index}
                {spc.focused ? "]" : spc.windows.length > 0 ? "*" : <span>&nbsp;</span>}
            </li>
        );
    });

    return (
        <div style={spaces}>
            {spx}
        </div>
    )
}

export const render = ({ output }) =>  {
    const data = parse(output)

    return (
        <main style={style}>
            <Spaces lst={data.spaces}/>
            <Clock time={data.time}/>
        </main>
    )
}
